import { t } from "i18next";
import UtilsInstance from "./utils";

type RequiredRule = {
  required: boolean;
  message: string;
};

export default class Rules {
  getMandatoryRule = (): RequiredRule => {
    return { required: true, message: t('ThisFieldIsMandatory') };
  };

}

export const validateArName = (value:string) =>{
  let reqex = /^[\u0600-\u06FF0-9\s.\-_()+]+$/;
  if (value !== "" && !reqex.test(value) ) {
    return {
      validateStatus: 'warning',
      errorMsg: t('YouAreWritingEnglishSymbols'),
    };
  }
  if (value !== "" ) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
 
  return {
    validateStatus: 'error',
    errorMsg: t('ThisFieldIsMandatory'),
  };
}

export const validateEnName =(value:string) =>{
  let reqex = /^[A-Za-z0-9\s.\-_()+]+$/;
  if (value !== "" && !reqex.test(value) ) {
    return {
      validateStatus: 'warning',
      errorMsg: t('YouAreWritingArabicSymbols'),
    };
  }
  if (value !== "" ) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: t('ThisFieldIsMandatory'),
  };
}

export const validateLink = () => ({
  validator(_: any, value: any) {
    try {
      new URL(value)
      return Promise.resolve()
    } catch (_1) {
      return Promise.reject(new Error(value ? t('PleaseInputValidLink')! : ''))
    }
  },
});

export const validateEmail = (value: string) => {
  let reqex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value !== "" && !reqex.test(value)) {
    return {
      validateStatus: 'error',
      errorMsg: t('ThisEmailIsInvalid'),
    };
  }
  return {
    validateStatus: 'success',
    errorMsg: null,
  };
}

export const validatePhoneCondition = (value: string) => {
  let reqex = /^5(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
  let phon = UtilsInstance.preventString(value);
  return reqex.test(phon);
}

export const validatePhone = (value: string) => {
  let reqex = /^5(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
  let phon = UtilsInstance.preventString(value);
  if (phon !== "" && !reqex.test(phon)) {
    return {
      validateStatus: 'error',
      errorMsg: t('ThisPhoneIsInvalid'),
    };
  }
  if (phon === "") {
    return {
      validateStatus: 'error',
      errorMsg: t('ThisFieldIsMandatory'),
    };
  }
  return {
    validateStatus: 'success',
    errorMsg: null,
  };
}