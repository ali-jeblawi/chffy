import { Metadata } from "next";
import initTranslations from "../i18n";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";
import Contat from "@/components/contact";
import Services from "@/components/services";
import Top from "@/components/top";
import CallToAction from "@/components/call-to-action";
import Testimonials from "@/components/testimonials";
import Cars from "@/components/cars";


export default async function Home({ params: { locale } }: any) {
  const { t } = await initTranslations(locale);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CallToAction />
      <Services />
      <Cars />
      {/* <Testimonials /> */}
      <Contat/>
      <Footer />
      <Top/>
      </>
  );
}
