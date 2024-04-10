const fs = require("fs")
const archiver = require("archiver")
const decompress = require("decompress")

function createZip() {
    const output = fs.createWriteStream("build.zip")
    const archive = archiver("zip", {
        zlib: { level: 9 }
    })
    output.on("close", () => {
        console.log("Zip file created successfully.")
        decompress("build.zip", "testBuild")
            .then((files) => {
                console.log(files)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    archive.on("error", (err) => {
        throw err
    })

    archive.file("manifest.json", { name: "manifest.json" })

    archive.file("code.js", { name: "src/js/code.js" })
    archive.file("Transaction.js", { name: "src/js/Transaction.js" })
    archive.file("Buy.js", { name: "src/js/Buy.js" })
    archive.file("Confirmation.js", { name: "src/js/Confirmation.js" })

    archive.file("img/icon.png", { name: "src/img/icon.png" })

    archive.pipe(output)
    archive.finalize()
}


createZip()