class ValidatorStatic {
    static isEmail(str){
        let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return regexp.test(str);
    }
    static isPhone(str){
        let regexp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        return regexp.test (str);
    }
    static isDomain(str){
        let regexp = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        return regexp.test (str);
    }
    static isDate(str){
        let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        return regexp.test (str);
    }
}
console.log (ValidatorStatic.isEmail ('alisa@mail.ru'));
console.log (ValidatorStatic.isPhone ('+7(910)101-23-41'));
console.log (ValidatorStatic.isDomain ('itgirlschool.com'))
console.log (ValidatorStatic.isDate ('19.12.2021'));

// class Validator {

//     isEmail(str){
//         let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//         return regexp.test(str);
//     }
//     isPhone(str){
//         let regexp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
//         return regexp.test (str);
//     }
//     isDomain(str){
//         let regexp = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
//         return regexp.test (str);
//     }
//     isDate(str){
//         let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
//         return regexp.test (str);
//     }
// }
// let validator = new Validator();
// console.log (validator.isEmail ('alisa@mail.ru'));
// console.log (validator.isPhone ('+7(910)101-23-41'));
// console.log (validator.isDomain ('itgirlschool.com'))
// console.log (validator.isDate ('19.12.2021'));
class Validator {
    constructor (email, phone, domain, date){
        this.email = email;
        this.phone = phone;
        this.domain = domain;
        this.date = date;
    }
    isEmail(){
        let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return regexp.test(this.email);
    }
    isPhone(){
        let regexp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        return regexp.test (this.phone);
    }
    isDomain(){
        let regexp = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
        return regexp.test (this.domain);
    }
    isDate(){
        let regexp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        return regexp.test (this.date);
    }

}
let validator = new Validator ('alisa@mail.ru', '+7(910)101-23-41', 'itgirlschool.com','19.12.2021');
console.log (validator);
console.log (validator.isEmail())
console.log (validator.isPhone ());
console.log (validator.isDomain ())
console.log (validator.isDate ());