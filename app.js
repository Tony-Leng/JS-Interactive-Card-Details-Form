console.log('connected');

const confirm = document.querySelector('#submit');
const thankyou = document.querySelector('#thank-you');
const userinfo = document.querySelector('#user-info');

confirm.addEventListener('click', () => {
  thankyou.classList.remove('hide');
  userinfo.classList.add('hide');
})
