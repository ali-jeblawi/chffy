"use client";
import * as React from 'react';
import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";

export default function TranslationsProvider({
    children,
    locale,
    resources
}: {
    children: React.ReactNode,
    locale: string,
    resources: any
}) {
    const i18n = createInstance();
    initTranslations(locale, i18n, resources);
    return <I18nextProvider i18n={i18n}>
        {children}
    </I18nextProvider>
};