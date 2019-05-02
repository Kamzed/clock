'use strict';

export default class Clock {
	constructor({element}) {
		this._element = element;
		this._render();
		this._interval;
	}

	start() {
		console.log('clock.start');
		clearInterval(this._interval);
		this._interval = setInterval(() => {
			const date = new Date;		

			let hour = date.getHours();
			if(hour < 10) hour = '0' + hour;

			let minute = date.getMinutes();
			if(minute < 10) minute = '0' + minute;

			let second = date.getSeconds();
			if(second < 10) second = '0' + second;

			this._element.innerHTML = `
			<span class="hour">${hour}</span>:
			<span class="min">${minute}</span>:
			<span class="sec">${second}</span>
		`
		}, 1000)
	}

	stop() {
		clearInterval(this._interval);
		console.log('clock.stop');
	}

	alert() {
		console.log('clock.alert');
	}

	_render() {
		this._element.innerHTML = `
			<span class="hour">00</span>:<span class="min">00</span>:<span class="sec">00</span>
		`
	}

}