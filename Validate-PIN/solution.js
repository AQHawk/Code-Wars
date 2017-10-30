'use strict';

function validatePIN (pin) {
  res = /^(?=[0-9]*$)(?:.{3}|.{5})[^_+-.,!@#$%^&*();\/|<>"']$/.test(pin)
  console.log(pin);
  return res
}
