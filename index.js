const btn = document.querySelectorAll("svg");

var toggle = (currentElement, nextElement) => {
	currentElement.classList.toggle("do-not-display");
	nextElement.classList.toggle("do-not-display");
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
