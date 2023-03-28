console.log('connected');

const confirm = document.querySelector('#submit');
const thankyou = document.querySelector('#thank-you');
const userinfo = document.querySelector('#user-info');
const cardholdernameinput = document.querySelector('#cardholder-name-input')
const cardholdernamedisplay = document.querySelector('#cardholder-name');
const expiremonthinput = document.querySelector('#expire-date-month');
const expiremonthdisplay = document.querySelector('#card-expiry-month');
const expireyearinput = document.querySelector('#expire-date-year');
const expireyeardisplay = document.querySelector('#card-expiry-year');
const cvcinput = document.querySelector('#card-cvc-input');
const cvcdisplay = document.querySelector('#card-cvc-display');
const continuebtn = document.querySelector('#continue');
const cardnumberinput = document.querySelector('#card-num-input');
const cardnumberdisplay = document.querySelector('#cardNum');

confirm.addEventListener('click', () => {
  thankyou.classList.remove('hide');
  userinfo.classList.add('hide');
  // need to implement if statement to ensure all fields are entered //
})

cardholdernameinput.addEventListener('input', () => {
  cardholdernamedisplay.innerText = cardholdernameinput.value;
})

expiremonthinput.addEventListener('input', () => {
  expiremonthdisplay.innerText = expiremonthinput.value;
  // how to stop at 2 numbers?
})

expireyearinput.addEventListener('input', () => {
  expireyeardisplay.innerText = expireyearinput.value;
  // how to stop at 2 numbers?
})

cvcinput.addEventListener('input', () => {
  cvcdisplay.innerText = cvcinput.value;
  // how to stop at 3 numbers?
})

cardnumberinput.addEventListener('input', () => {
  cardnumberdisplay.innerText = cardnumberinput.value;
  // how to stop at 3 numbers?
})

continuebtn.addEventListener('click', () => {
  location.reload();
})
