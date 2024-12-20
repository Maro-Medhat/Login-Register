let green_slider = document.getElementsByClassName("left_slider")[0];
let blue_slider = document.getElementsByClassName("right_slider")[0];

function hide_green() {
	green_slider.className = "left_slider hide_green";
	blue_slider.className = "right_slider";
}

function hide_blue() {
	green_slider.className = "left_slider";
	blue_slider.className = "right_slider hide_blue";
}