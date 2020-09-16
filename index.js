const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

var data = [
	{
		testimonial:
			"\u201C I\u2019ve been interested in coding for a while but never taken the jump, until now. I couldn\u2019t recommend this course enough. I\u2019m now in the job of my dreams and so excited about the future. \u201D",
		name: "Tanya Sinclair",
		job: "UX Engineer",
		image: "./images/image-tanya.jpg",
	},
	{
		name: "John Tarkpor",
		testimonial:
			"\u201C If you want to lay the best foundation possible I\u2019d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \u201D",
		job: "Junior Front-end Developer",
		image: "./images/image-john.jpg",
	},
];

var setAnimation = (str) => {
	if (str === "next") {
		document.querySelector("section").classList.toggle("animation-from-right");
		setTimeout(function () {
			$("section").removeClass("animation-from-right");
		}, 500);
	} else {
		document.querySelector("section").classList.toggle("animation-from-left");
		setTimeout(function () {
			$("section").removeClass("animation-from-left");
		}, 500);
	}
};

var setTestimonial = (index, d) => {
	document.querySelector(".name").innerText = d[index].name;
	document.querySelector("h1").innerHTML = d[index].testimonial;
	document.querySelector(".work-title").innerHTML = d[index].job;
	document.querySelector("img").src = d[index].image;
};

var getIndex = () => {
	let currentName = document.querySelector(".name").innerText;
	let returnIndex = data.findIndex((i) => i.name === currentName);
	return returnIndex;
};

nextBtn.addEventListener("click", (event) => {
	let currentIndex = getIndex();
	setAnimation("next");
	currentIndex === data.length - 1
		? setTestimonial(0, data)
		: setTestimonial(currentIndex + 1, data);
});

prevBtn.addEventListener("click", (event) => {
	let currentIndex = getIndex();
	setAnimation("prev");
	currentIndex === 0
		? setTestimonial(data.length - 1, data)
		: setTestimonial(currentIndex - 1, data);
});

document.addEventListener("keydown", (event) => {
	let currentIndex = getIndex();

	//next
	if (event.keyCode === 39) {
		setAnimation("next");
		currentIndex === data.length - 1
			? setTestimonial(0, data)
			: setTestimonial(currentIndex + 1, data);
	}

	//prev
	if (event.keyCode === 37) {
		setAnimation("prev");
		currentIndex === 0
			? setTestimonial(data.length - 1, data)
			: setTestimonial(currentIndex - 1, data);
	}
});
