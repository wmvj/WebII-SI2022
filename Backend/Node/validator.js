import validator from "validator";
import day from "dayjs";

console.log(validator.isEmail("teste@teste.com"));
console.log(validator.isIP("345689"));

const now = day();
console.log(now.format("DD/MM/YYYY"));