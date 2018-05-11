var startX = document.getElementById('pointerStart');
var endX = document.getElementById('pointerEnd');
var support = document.getElementById('support');
var gesture = document.getElementById('pad');
if (window.PointerEvent) { // are Pointer Events supported?
	support.innerHTML = "Pointer Events ARE supported in your browser!";
}
else {
	support.innerHTML = "Pointer Events are NOT supported in your browser!";
}
// if Pointer Events are supported, get start point:
function pointStartFx(ev) {
	startX.innerHTML = 'clientX START: ' + ev.clientX + ' px';
	gesture.innerHTML = ev.pointerType;
}
// if Pointer Events are supported, get end point:
function pointEndFx(ev) {
	endX.innerHTML = 'clientX END: ' + ev.clientX + ' px';
}
// if Pointer Events aren't supported, get start point:
function swipeStartFx(ev) {
	startX.innerHTML = 'clientX START: ' + ev.touches[0].clientX + ' px';
	gesture.innerHTML = ev.type;
}
// if Pointer Events aren't supported, get start point:
function swipeEndFx(ev) {
	endX.innerHTML = 'clientX END: ' + ev.changedTouches[0].clientX + ' px';
	gesture.innerHTML = ev.type;
}
// event listenners
if (window.PointerEvent) { // are Pointer Events supported?
	document.getElementById('pad').addEventListener('pointerdown', function (ev) {
		pointStartFx(ev)
	}, false);
	document.getElementById('pad').addEventListener('pointerup', function (ev) {
		pointEndFx(ev)
	}, false);
}
else {
	document.getElementById('pad').addEventListener('touchstart', function (ev) {
		swipeStartFx(ev)
	}, false);
	document.getElementById('pad').addEventListener('touchend', function (ev) {
		swipeEndFx(ev)
	}, false);
}