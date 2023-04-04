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

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function setCardNumber(e) {
  cardnumberdisplay.innerText = format(e.target.value);
}


confirm.addEventListener('click', () => {
  thankyou.classList.remove('hide');
  userinfo.classList.add('hide');
})

cardholdernameinput.addEventListener('input', () => {
  cardholdernamedisplay.innerText = cardholdernameinput.value;
})

expiremonthinput.addEventListener('input', () => {
  expiremonthdisplay.innerText = expiremonthinput.value;
})

expireyearinput.addEventListener('input', () => {
  expireyeardisplay.innerText = expireyearinput.value;
})

cvcinput.addEventListener('input', () => {
  cvcdisplay.innerText = cvcinput.value;
})

cardnumberinput.addEventListener('keyup', setCardNumber)

continuebtn.addEventListener('click', () => {
  location.reload();
})
