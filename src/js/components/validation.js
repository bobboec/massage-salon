import {
  validateForms
} from '../functions/validate-forms';
const rules = [{
    ruleSelector: '.input-name',
    rules: [{
        rule: 'minLength',
        color: 'white',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [{
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 3 символа',

      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Заполните корректный email',
      }
    ],
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
