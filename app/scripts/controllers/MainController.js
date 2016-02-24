/**
 * Created by krisztinavajda on 24/02/16.
 */
app.controller('MainCtrl', function ($scope) {
  $scope.user = {};

  /* *
  Suggested form data structure in JSON:
  * */
  /*
  var registerFormData = [
    {
      sectionName: 'Tilmelding',
      inputs: [
        {
          id: 'formRegisterName',
          label: 'Navn',
          labelClasses: '',
          inputClasses: 'full-width',
          type: 'text',
          model: 'user.name',
          placeholder: 'Navn *',
          value: '',
          required: true
        },
        {
          id: 'formRegisterEmail',
          label: 'E-mail',
          labelClasses: '',
          inputClasses: 'full-width',
          type: 'text',
          model: 'user.email',
          placeholder: 'E-mail *',
          value: '',
          required: true
        }
      ]
    }
  ];
  */

  $scope.register = function(user) {
    console.log('in function register()', user);
  }
});
