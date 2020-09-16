const btn = document.querySelectorAll("svg");
let testimonySection = document.querySelector("h1");
let personName = document.querySelector(".name");
let currentPosition = document.querySelector(".work-title");
let currentImage = document.querySelector("img");

const data = [
	{
		testimonial:
			"\u201C I\u2019ve been interested in coding for a while but never taken the jump, until now. I couldn\u2019t recommend this course enough. I\u2019m now in the job of my dreams and so excited about the future. \u201D",
		name: "Tanya Sinclair",
		job: "UX Engineer",
	},
	{
		name: "John Tarkpor",
		testimonial:
			"\u201C If you want to lay the best foundation possible I\u2019d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \u201D",
		job: "Junior Front-end Developer",
	},
];

var toggle = (currentElement, nextElement) => {
	currentElement.classList.toggle("do-not-display");
	nextElement.classList.toggle("do-not-display");
	nextElement.classList.add("animation");
	nextElement.classList.add("testimonial-1");
};

var goNext = (l, c, n) => {
	if (c.id === (l.length - 1).toString()) {
		c = l[0];
		n = l[1];
	}

	toggle(c, n);
};

var goBack = (l, c, n) => {
	const beginningOfList = 0;
	if (c.id === beginningOfList.toString()) {
		c = l[0];
		n = l[1];
	}

	toggle(c, n);
};

btn.forEach((i) => {
	i.addEventListener("click", (event) => {
		var list = document.querySelectorAll("section");
		var current = document.querySelectorAll("section")[0];
		var next = document.querySelectorAll("section")[1];

		if (i.classList.contains("next")) {
			goNext(list, current, next);
		} else {
			goBack(list, current, next);
		}
	});
});
