emailInput = document.getElementById('email');
submit     = document.getElementById('submit');

function checkValidEmail() {
  validateEmail(emailInput.value);
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  };
};
