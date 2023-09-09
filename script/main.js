var mode = document.getElementById('click')
var card = document.querySelectorAll('.card')
var elements = document.getElementsByTagName('*')
var tables = document.querySelectorAll('table')

mode.onclick = function () {
	document.querySelector('.part').classList.toggle('bg-dark')
	document.querySelector('.side').classList.toggle('bg-dark')
	document.querySelector('.main').classList.toggle('bg-dark')
	document.querySelector('.display-6').classList.toggle('text-light')

	let i
	for (i = 0; i < card.length; i++) {
		card[i].classList.toggle('bg-dark')
		card[i].classList.toggle('text-light')
		card[i].classList.toggle('border-light')
	}

	for (i = 0; i < tables.length; i++) {
		tables[i].classList.toggle('text-light')
	}
}

function toggleStyle(style) {
	var i
	for (i = 0; i < elements.length; i++) {
		elements[i].classList.toggle('text-' + style)
	}
	document.getElementById('search').classList.toggle('btn-' + style)
	document.querySelector('.bg-transparent').classList.toggle('border-' + style)
}

document.getElementById('primary').addEventListener('click', () => {
	toggleStyle('primary')
})
document.getElementById('info').addEventListener('click', () => {
	toggleStyle('info')
})
document.getElementById('success').addEventListener('click', () => {
	toggleStyle('success')
})
document.getElementById('warning').addEventListener('click', () => {
	toggleStyle('warning')
})
document.getElementById('danger').addEventListener('click', () => {
	toggleStyle('danger')
})
