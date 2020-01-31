$(document).ready(function lol() {
	$('#Contents').fullpage({
		//options here
		autoScrolling:true,
		scrollingSpeed:1200,
		navigation:true,
		scrollOverflow: true,
		// responsiveWidth:0,
		fitToSection:true,
		css3: true,
		resize: false,
		loopTop: false,
        setAllowScrolling: true,
		animateAnchor: true,
		afterRender: function(){
			var pluginContainer = this;
			$('#Contents').fullpage.reBuild();
		},
		afterResize: function(){
			var pluginContainer = this;
			$('#Contents').fullpage.reBuild();

		},
		afterSlideLoad: function(){
			('#Contents').fullpage.reBuild();
		},
	}
	);
	
	

});

$(document).on('click touchend mousedown',function(){
	setTimeout(function() {$('#Contents').fullpage.reBuild()},500);
})