const { normalPanel } = require('../../utils/embed_constructor.js');
const { Blacklist } = require("./../../database/userdb")

module.exports = {
    name: "blacklist",
    description: "adicionar link a blacklist",
    permissions: ["BAN_MEMBERS"],
    working: true,
    run: async (client,message,args) => {
        try{
            const a = Blacklist.insert_one("teste")
            console.log(a)

        }
        finally{
            console.log("final")
        }
    }
}