
console.log("hello broona")

let timeline = document.querySelector("#input")

timeline.addEventListener("submit", function (event) {
  event.preventDefault()

	let shareInput = timeline.querySelector("input").value
	//reset text
	timeline.reset()

	let newShareInput = document.createElement("li")

	//add text
	let textInput = document.createTextNode(shareInput)
	newShareInput.appendChild (textInput)
		
	let addTexto = document.querySelector("#timeline")
	addTexto.appendChild(newShareInput)

})

newShareInput.sort()
addTexto.sort()