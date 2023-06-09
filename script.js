const container = document.querySelector('.container');
const pwShowHide = document.querySelectorAll('.showHidePw');
const pwFields = document.querySelectorAll('.password');
const signUp = document.querySelector('.signup-link');
const login = document.querySelector('.login-link');

//show/hide password and show icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === 'password') {
        pwField.type = 'text';

        pwShowHide.forEach((icon) => {
          icon.classList.replace('fa-eye-slash', 'fa-eye');
        });
      } else {
        pwField.type = 'password';

        pwShowHide.forEach((icon) => {
          icon.classList.replace('fa-eye', 'fa-eye-slash');
        });
      }
    });
  });
});

//code to appear signup and login form
signUp.addEventListener('click', () => {
  container.classList.add('active');
});

login.addEventListener('click', () => {
  container.classList.remove('active');
});
