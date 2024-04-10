//code used in console to get data youll need


//get denied from transactions
var newSymbols = []

for (var x = 552; x <= 786; x++) {
    var doc = document.querySelector("#tab-3 > div > table.footable.table.table-stripped.toggle-arrow-tiny.table-hover.default.no-paging.footable-loaded > tbody > tr:nth-child(" + x + ")")
    var docDenied = document.querySelector("#tab-3 > div > table.footable.table.table-stripped.toggle-arrow-tiny.table-hover.default.no-paging.footable-loaded > tbody > tr:nth-child(" + x + ") > td:nth-child(2)")
    var docSymbol = document.querySelector("#tab-3 > div > table.footable.table.table-stripped.toggle-arrow-tiny.table-hover.default.no-paging.footable-loaded > tbody > tr:nth-child(" + x + ") > td.tooltip-demo.footable-visible > a")
    console.log(docSymbol)

    if (docDenied.innerHTML == "Denied NSF") {
        //denied
        var smb = docSymbol.getAttribute("title")
        if (smb == "") {
            smb = docSymbol.getAttribute("data-original-title")
        }
        newSymbols.push(smb)
    }


    doc.style.background = "red"
}
localStorage.setItem("symbols", JSON.stringify(newSymbols))





//check which one got 2 of
var missing = []
for (var x = 1; x <= 501; x++) {
    var doc = document.querySelector("#editable2 > tbody > tr:nth-child(" + x + ")")
    var docAmt = document.querySelector("#editable2 > tbody > tr:nth-child(" + x + ") > td.text-center")
    var docSmb = document.querySelector("#editable2 > tbody > tr:nth-child(" + x + ") > td:nth-child(1) > span")
    if (docAmt.innerHTML !== " 1") {
        doc.style.background = "red"
        missing.push(docSmb.innerHTML.substring(0, docSmb.innerHTML.length - 6))
    }
}

localStorage.setItem("got2", JSON.stringify(missing))




//remove 1's home
var missing = []
for (var x = 1; x <= 501; x++) {
    var doc = document.querySelector("#editable2 > tbody > tr:nth-child(" + x + ")")
    var docAmt = document.querySelector("#editable2 > tbody > tr:nth-child(" + x + ") > td.text-center")
    var docSmb = document.querySelector("#editable2 > tbody > tr:nth-child(" + x + ") > td:nth-child(1) > span")
    if (docAmt.innerHTML == " 1") {
        doc.style.background = "red"
    
        missing.push(doc)
    }
}

for (var x = 1; x <= missing.length; x++) {
    missing[x].remove()
}






//remove 1 and 0`s transactions
var elmts = []

for (var x = 1; x <= 800; x++) {
    var doc = document.querySelector("#tab-3 > div > table.footable.table.table-stripped.toggle-arrow-tiny.table-hover.default.no-paging.footable-loaded > tbody > tr:nth-child(" + x + ")")
    var docQt = document.querySelector("#tab-3 > div > table.footable.table.table-stripped.toggle-arrow-tiny.table-hover.default.no-paging.footable-loaded > tbody > tr:nth-child(" + x + ") > td:nth-child(5)")

    if (docQt.innerHTML == "0" || docQt.innerHTML == "1") {
        elmts.push(doc)
       doc.style.background = "red"
    }
}

for (var x = 1; x <= elmts.length; x++) {
    elmts[x].remove()
}




// get names
var Names = []

for (var x = 0; x < document.querySelector("#select2-ddl_symbols-13-results").children.length; x++) {
    Names.push(document.querySelector("#select2-ddl_symbols-13-results").children[x].textContent)
}

localStorage.setItem("names", JSON.stringify(Names))



//remove names you have in dashboard
var Names = JSON.parse(localStorage.getItem("names"))
var ul = document.querySelector("#editable2 > tbody")

for (var x = 1; x < ul.children.length; x++) {
    var name = document.querySelector("#editable2 > tbody > tr:nth-child(" + x + ") > td:nth-child(2)").textContent
    Names.splice(Names.indexOf(name), 1)
}

localStorage.setItem("names", JSON.stringify(Names))