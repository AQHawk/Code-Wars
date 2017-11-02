'use strict';

function abbrevName(name){
  return name.split(' ').map(i => i[0].toUpperCase()).join('.');
}
abbrevName('Sam Harris');
