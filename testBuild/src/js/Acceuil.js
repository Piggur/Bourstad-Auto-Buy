const loc = document.querySelector("#__layout > div > div > div.sidebar > div.sidebar-controls > div.sidebar-sorting")
const discoveredButton = document.querySelector("#__layout > div > div > div.sidebar > div.sidebar-controls > div.sidebar-sorting > div.sidebar-discoveries.sidebar-sorting-item")

console.log(discoveredButton)
const addThing = discoveredButton.cloneNode(true)
loc.appendChild(addThing)
addThing.textContent = "Add Element"
addThing.style.width = "200%"

addThing.addEventListener("click", function () {
    const currData = JSON.parse(localStorage.getItem("infinite-craft-data"))
    console.log(currData)

    const elementName = prompt("Enter element name:")
    //const elementEmoji = prompt("Enter element emoji:")

    currData.elements.push({ text: elementName, emoji: "😈", discovered: false })
    console.log(currData.elements)

    localStorage.setItem("infinite-craft-data", JSON.stringify(currData))
    location.reload()
})