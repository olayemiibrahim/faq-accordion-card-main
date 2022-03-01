let buttons = document.querySelectorAll(".accordian__button");
let collapses = document.querySelectorAll(".accordian__collapse");

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		buttons.forEach((button2) => {
			if (button2.classList.contains("open") && button2 !== button) {
				button2.classList.toggle("open");
				button2.nextElementSibling.classList.toggle("open");
			}
		});
		button.classList.toggle("open");
		button.nextElementSibling.classList.toggle("open");
	});
});
