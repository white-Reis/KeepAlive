export const Email = new RegExp(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)
export const Name = new RegExp(/^[a-zA-Z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{4,}(?: [a-zA-Z-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+){0,7}$/)
export const password = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
export const Number = new RegExp (/[0-9]/);
export const lowcase = new RegExp(/[a-z]/);
export const uppercase = new RegExp (/[A-Z]/);
export const Special = new RegExp (/[[<>|;:°º~´`_+¨!@#$=§%&*()?\/^{}]/);