import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {MDCCheckbox} from '@material/checkbox';

const fileds = [
  '.username',
  '.lastName',
  '.email',
  '.phone',
  '.rut'
]
const fieldForm = document.querySelectorAll('.mdc-text-field')
const fieldFormAdd = fileds.map.call(fieldForm, function(el) {
  return new MDCTextField(el);
});
console.log(fieldFormAdd)

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
