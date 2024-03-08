
const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

class Utils {

  resolvePersianAndArabicNumbers = (str:string) => {
    if (typeof str === 'string') {
      for (let i:number = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i.toString()).replace(arabicNumbers[i], i.toString());
      }
    }
    return str;
  };

  preventString = (str: string) => {
    let str1 = this.resolvePersianAndArabicNumbers(String(str).replace(/[a-zA-Z\u0621-\u064A\s]/g, ""));
    return str1;
  };

}

const UtilsInstance = new Utils();
export default UtilsInstance;
