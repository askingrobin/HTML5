var COLORS = new Array();
COLORS[COLORS.length ? COLORS.length : 0] = "#FF0000";
COLORS[COLORS.length ? COLORS.length : 0] = "#FFFF00";
COLORS[COLORS.length ? COLORS.length : 0] = "#00FFFF";
COLORS[COLORS.length ? COLORS.length : 0] = "#0000FF";
COLORS[COLORS.length ? COLORS.length : 0] = "#FF00FF";
var LAST = 0;
function blinklink() {
    LAST = (LAST + 1) % COLORS.length;
    var _obj = null;
    if (document.all) _obj = document.all.blink;
    else if (document.getElementById) _obj = document.getElementById("blink");
    if (_obj) _obj.style.color = COLORS[LAST];
}

var TIMER = null;
var INTERVAL = 100; /* milliseconds */
function starttimer(_id) {
    stoptimer();
    TIMER = setInterval("blinklink()", INTERVAL);
}
function stoptimer() {
    clearTimeout(TIMER);
    TIMER = null;
}