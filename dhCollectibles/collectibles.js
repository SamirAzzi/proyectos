const fs = require("fs");
const path = require("path");
module.exports = {
    importar: function marcas (marca){
        let json = "";
        if (marca == "Hot Toys") {
            json = fs.readFileSync(path.join(__dirname,"datos", "figuras1.json"), "utf-8")
        } else if (marca == "Bandai"){
            json = fs.readFileSync(path.join(__dirname,"datos", "figuras2.json"), "utf-8")
        } else if (marca == "Star Wars"){
            json = fs.readFileSync(path.join(__dirname,"datos", "figuras3.json"), "utf-8")
        } else {

            return "ingrese una marca valida"
        }
        return JSON.parse(json)
    }
}
