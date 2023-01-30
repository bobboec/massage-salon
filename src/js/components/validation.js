import {
  validateForms
} from '../functions/validate-forms';
const rules = [{
    ruleSelector: '.input-name',
    rules: [{
        rule: 'minLength',
        color: 'white',
        value: 3,
        errorMessage: 'Имя должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
];

const afterForm = () => {
  console.log('Произошла отправка');
};

validateForms('.form', rules, afterForm);
