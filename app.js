console.log('connected');

const confirm = document.querySelector('#submit');
const thankyou = document.querySelector('#thank-you');
const userinfo = document.querySelector('#user-info');
const cardholdernameinput = document.querySelector('#cardholder-name-input')
const cardholdernamedisplay = document.querySelector('#cardholder-name')

confirm.addEventListener('click', () => {
  thankyou.classList.remove('hide');
  userinfo.classList.add('hide');
})

cardholdernameinput.addEventListener('input', () => {
  cardholdernamedisplay.innerText = cardholdernameinput.value;
})

cardholdernameinput.addEventListener('input', () => {
  cardholdernamedisplay.innerText = cardholdernameinput.value;
})
