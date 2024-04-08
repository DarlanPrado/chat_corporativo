import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'timeMin', function (minValue: string | undefined, errorMessage?: string | undefined) {
  const baseErrorMessage = errorMessage || `A hora deve ser maior ou igual a ${minValue}`;

  return this.test({
    name: 'timeMin',
    exclusive: true,
    message: baseErrorMessage,
    test: function (value) {

      if (value && minValue) {
        const horaAtual = new Date(`2000-01-01 ${value}`);
        const minHoraDate = new Date(`2000-01-01 ${minValue}`);
        
        if(horaAtual >= minHoraDate){
          return true;
        }else{
          return this.createError({message: baseErrorMessage})
        }
      }
      
      return true;
    },
  });
});

Yup.addMethod(Yup.string, 'timeMax', function (maxValue: string | undefined, errorMessage?: string | undefined) {
  const baseErrorMessage = errorMessage || `A hora deve ser menor ou igual a ${maxValue}`;

  return this.test({
    name: 'timeMax',
    exclusive: true,
    message: baseErrorMessage,
    test(value) {

      if (value && maxValue) {
        const horaAtual = new Date(`2000-01-01 ${value}`);
        const maxHoraDate = new Date(`2000-01-01 ${maxValue}`);
        
        if(horaAtual <= maxHoraDate){
          return true;
        }else{
          return this.createError({message: baseErrorMessage})
        }
      }
      return true;
    },
  });
});

Yup.setLocale({
  mixed: {
    default: "é inválido",
    required: "Campo obrigatório",
    oneOf: "deve ser um dos seguintes valores: ${values}",
    notOneOf: "não pode ser um dos seguintes valores: ${values}"
  },
  string: {
    length: "deve ter exatamente ${length} caracteres",
    min: "deve ter pelo menos ${min} caracteres",
    max: "deve ter no máximo ${max} caracteres",
    email: "Formato de e-mail inválido",
    url: "deve ter um formato de URL válida",
    trim: "não deve conter espaços no início ou no fim.",
    lowercase: "deve estar em maiúsculo",
    uppercase: "deve estar em minúsculo"
  },
  number: {
    min: "deve ser no mínimo ${min}",
    max: "deve ser no máximo ${max}",
    lessThan: "deve ser menor que ${less}",
    moreThan: "deve ser maior que ${more}",
    positive: "deve ser um número posítivo",
    negative: "deve ser um número negativo",
    integer: "deve ser um número inteiro"
  },
  date: {
    min: "deve ser maior que a data ${min}",
    max: "deve ser menor que a data ${max}"
  },
  array: {
    min: "deve ter no mínimo ${min} itens",
    max: "deve ter no máximo ${max} itens"
  }
});

const $yup = Yup

export default $yup;