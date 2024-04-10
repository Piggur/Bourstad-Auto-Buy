//add check fail

setTimeout(function () {

    console.log(document.querySelector("#form > fieldset > h2 > span").textContent)

    if (document.querySelector("#form > fieldset > h2 > span").textContent.includes("Recorded transaction order")) {
        console.log("istext")
        if (localStorage.getItem("insta") === "true") {
            localStorage.setItem("curr", parseInt(localStorage.getItem("curr")) + 1)

            if (localStorage.getItem("cont")) {
                const Link = localStorage.getItem("buylink")
                const Symbols = JSON.parse(localStorage.getItem("symbols"))
                const CurrentSymbol = localStorage.getItem("curr")
                window.open(Link + "&Symbol=" + Symbols[parseInt(CurrentSymbol)] + localStorage.getItem("typeString"))
                window.close()
            }
        }
    }
    else { // fails
        if (localStorage.getItem("insta") === "true") {
            if (localStorage.getItem("cont")) {
                const Link = localStorage.getItem("buylink")
                const Symbols = JSON.parse(localStorage.getItem("symbols"))
                const CurrentSymbol = localStorage.getItem("curr")
                window.open(Link + "&Symbol=" + Symbols[parseInt(CurrentSymbol)] + localStorage.getItem("typeString"))
                window.close()
            }
        }
    }
}, 30000)