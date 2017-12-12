
function SplitJS(config) {
	this.split_Main = document.getElementById(this.idName);
	this.split_WN   = config.withNumber;
	this.split_HN   = config.heightNumber

	this.element = document.getElementById(this.idName);
}

SplitJS.prototype.method_name = function(first_argument) {
	// body...
};

var youChoose = {
	WNumber: 10,
	HNumber: 5,
	TId: '#split_con'
}
var weGet = {
	imgurl: $(youChoose.TId+' img').attr("src"),
	EleWidth: $(youChoose.TId).width(),
	EleHeight: $(youChoose.TId).height(),
	everyW: $(youChoose.TId).width() / youChoose.WNumber * -1,
	everyH: $(youChoose.TId).height() / youChoose.HNumber * -1
}
for (var i = 0; i < youChoose.WNumber * youChoose.HNumber; i++) {
	var newI = $('<i></i>');

	console.log(weGet)
	newI.css({
		"display": "block",
		"width": 100 / youChoose.WNumber + '%',
		"height": 100 / youChoose.HNumber + '%',
		"background-image": "url(" + weGet.imgurl + ")",
		"background-size": weGet.EleWidth + "px " + weGet.EleHeight + "px ",
		"background-position": i % youChoose.WNumber * weGet.everyW + "px " + Math.floor(i / youChoose.WNumber) * weGet.everyH  + "px",
		"position": "absolute",
		"top": Math.floor(i / youChoose.WNumber) * weGet.everyH * -1 + "px" ,
		"left": i % youChoose.WNumber * weGet.everyW * -1 + "px "
	})
	$(youChoose.TId).append(newI)
}