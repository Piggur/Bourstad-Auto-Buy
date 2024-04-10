function create(t, p, c) {
    const e = document.createElement(t)
    p.appendChild(e)
    e.className = c
    return e
}

function getRestAfterLastDash(inputString) {
    var lastDashIndex = inputString.lastIndexOf("-");
    if (lastDashIndex !== -1) { // If "-" exists in the string
        return inputString.substring(lastDashIndex + 1);
    } else {
        return inputString; // If "-" doesn't exist, return the whole string
    }
}

const buyURL = "https://bourstad.cirano.qc.ca/Pages/EmptyPage?" + window.location.href.split("?")[1]
var typeString = localStorage.getItem("typeString")
localStorage.setItem("buylink", buyURL)

create("br", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))

const one = create("a", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))
one.textContent = "Buy once"
one.addEventListener("click", function () {
    localStorage.setItem("cont", false)
    const Link = localStorage.getItem("buylink")
    const Symbols = JSON.parse(localStorage.getItem("symbols"))
    const CurrentSymbol = localStorage.getItem("curr")
    window.open(Link + "&Symbol=" + Symbols[parseInt(CurrentSymbol)] + localStorage.getItem("typeString"))
})

create("br", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))

const continuous = create("a", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))
continuous.textContent = "Buy continuous"
continuous.addEventListener("click", function () {
    localStorage.setItem("cont", true)
    const Link = localStorage.getItem("buylink")
    const Symbols = JSON.parse(localStorage.getItem("symbols"))
    const CurrentSymbol = localStorage.getItem("curr")
    window.open(Link + "&Symbol=" + Symbols[parseInt(CurrentSymbol)] + localStorage.getItem("typeString"))
})

create("br", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))

const insta = create("a", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))
insta.textContent = "Toggle running: " + localStorage.getItem("insta")
insta.addEventListener("click", function () {
    const value = localStorage.getItem("insta") === "false"
    localStorage.setItem("insta", value)
    insta.textContent = "Toggle running: " + localStorage.getItem("insta")
})

create("br", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))

const buyOrSell = create("a", document.querySelector("#page-wrapper > div.wrapper.wrapper-content > div > div > div.row > div > div > div.ibox-title"))
buyOrSell.textContent = typeString
buyOrSell.addEventListener("click", function () {
    const value = localStorage.getItem("buyOrSell") === "false"
    localStorage.setItem("buyOrSell", value)
    if (value) {
        typeString = "&typetransaction=1"
    }
    else {
        typeString = "&typetransaction=2"
    }
    buyOrSell.textContent = typeString
    localStorage.setItem("typeString", typeString)
})