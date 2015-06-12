function skill(container, sibling, config){

	var defaultConfig = {
		height :  "50px",
		time :  2000
	}

	this.eventElement = $(container);
	this.fillElement = this.eventElement.siblings().filter(sibling);
	this.config = config || {};
	this.config = $.extend(defaultConfig, this.config);

	this.init();
}

skill.prototype.init = function(){
	var ref = this;
	$(ref.eventElement).one('mouseenter', function(e){
		ref.fill();
	});
}

skill.prototype.fill = function(){
	var fillElement = this.fillElement;
	fillElement.animate({
		"height": "-=" + this.config.height
	}, this.config.time);
}
