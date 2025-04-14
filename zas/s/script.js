////////  video.zedign.com/script.js ////////////////
// 
// 

if (typeof siteSection == "undefined") {
	siteSection = "main";
}

function getQueryParam(param) {
	var urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

//////////////////   /funcs   ///////////////////////
$(document).ready(function() {

	//////////////////////  MAIN  ////////////////////////////

	if (siteSection == "main") {

	}
	//////////////////////  MAIN  ////////////////////////////
	//

	//////////////////////  SINGLE  ////////////////////////////

	if (siteSection == "single") {

		// 	$('body').append(`

		// <div><a href="../${zasID}.html">&lt; <a/></div>
		// <h1>Watch This Amazing Video!</h1>
		// <div class="video-container">
		// 	<iframe src="https://www.youtube.com/embed/${videoID}?controls=1&autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>
		// </div>

		// `)

	}

});

//////////////////////  VIDEO  ////////////////////////////