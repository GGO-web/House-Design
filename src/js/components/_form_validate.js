new JustValidate(".js-form", {
   rules: {
      name: {
         required: true,
         minLength: 3,
         maxLength: 15,
      },
      email: {
         required: true,
         email: true,
      },
   },
   messages: {
      name: {
         minLength: `The field must contain a <br> minimum of 3 characters`,
         maxLength: `The field must contain <br> up to 15 characters`,
      },
   },
});
