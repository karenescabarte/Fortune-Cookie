$(document).ready(function () {
	$("main img").hover(
		function () {
			$(this).attr("src", $(this).attr("data-alt-src"));
		},
		function () {
            $(this).attr("src", '/img/cookie.jpg');
		}
	);
});
