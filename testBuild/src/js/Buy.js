function getRestAfterDots(inputString) {
    var lastDashIndex = inputString.lastIndexOf(":");
    if (lastDashIndex !== -1) { // If "-" exists in the string
        return inputString.substring(lastDashIndex + 1);
    } else {
        return inputString; // If "-" doesn't exist, return the whole string
    }
}

const transactionType = (new URL(window.location.href)).searchParams.get("typetransaction")

if (document.querySelector("#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.col-lg-4 > div:nth-child(2) > p:nth-child(4) > b").textContent.includes("Last Price") && transactionType === "1") {
    console.log("fund")
    //new link
    const Link = localStorage.getItem("buylink")
    const Symbols = JSON.parse(localStorage.getItem("symbols"))
    const CurrentSymbol = localStorage.getItem("curr")
    window.open(Link + "&Symbol=" + Symbols[parseInt(CurrentSymbol)] + "&typetransaction=10")
    window.close()
}
else {
    console.log("buying")
    console.log(transactionType)
    if (transactionType === "1" || transactionType === "2") {
        console.log("1")
        const Quantity = document.querySelector("#quantitedeclare")
        const NewQuantity = document.querySelector("#qte_apres")
        const Liquid = document.querySelector("#solde_apres")
        const Continue = document.querySelector("#form > div.actions.clearfix > ul > li:nth-child(2) > a")
        const Submit = document.querySelector("#form > div.actions.clearfix > ul > li:nth-child(3) > a")

        const amt = 1

        const liquid = document.querySelector("#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.col-lg-4 > div:nth-child(1) > p:nth-child(5)")
        const liquidAmt = parseInt(getRestAfterDots(liquid.innerText).slice(0, -1).replace(/\s/g, ""))
        const cost = document.querySelector("#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.col-lg-4 > div:nth-child(2) > p:nth-child(5)")
        const costAmt = parseInt("0" + getRestAfterDots(cost.innerText).slice(0, -1).replace(/\s/g, ""))

        Quantity.value = amt
        NewQuantity.value = amt
        Liquid.value = liquidAmt - costAmt
        let buy = true



        if (localStorage.getItem("insta") === "true" && buy) {
            Continue.click()
            Submit.click()
        }
    }
    if (transactionType === "10") {
        console.log("10")
        const Quantity = document.querySelector("#quantitedeclare")
        const NewQuantity = document.querySelector("#qte_apres")
        const Liquid = document.querySelector("#solde_apres")
        const Continue = document.querySelector("#form > div.actions.clearfix > ul > li:nth-child(2) > a")
        const Submit = document.querySelector("#form > div.actions.clearfix > ul > li:nth-child(3) > a")

        const amt = 1

        const liquid = document.querySelector("#page-wrapper > div.wrapper.wrapper-content.animated.fadeInRight > div > div.col-lg-4 > div:nth-child(1) > p:nth-child(5)")
        const liquidAmt = parseInt(getRestAfterDots(liquid.innerText).slice(0, -1).replace(/\s/g, ""))

        Quantity.value = amt
        NewQuantity.value = amt
        Liquid.value = liquidAmt - 50

        if (localStorage.getItem("insta") === "true") {
            Continue.click()
            Submit.click()
        }
    }
}