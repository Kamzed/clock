'use strict';

import Clock from './clock.js';

const buttonStart = document.querySelector('[data-element="button-start"]');
const buttonStop = document.querySelector('[data-element="button-stop"]');
const buttonsBlock = document.querySelector('.buttons');

const clock = new Clock({
  element: document.querySelector('#clock')
});

buttonsBlock.addEventListener('click', (event) => {
	if(event.target.closest('[data-element="button-start"]')) clock.start();
	if(event.target.closest('[data-element="button-stop"]')) clock.stop();
	if(event.target.closest('[data-element="button-alert"]')) clock.alert();
});
