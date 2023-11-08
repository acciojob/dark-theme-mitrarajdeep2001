//your code here
const btn = document.querySelector("#swap")
function toggleTheme() {
	const app = document.querySelector("#app")
	app.classList.toggle("night")
	btn.classList.toggle("button_night")
}

btn.addEventListener("click", toggleTheme)