module.exports = {
    name: "ban",
    description: "Punir todos aqueles que não segue as regras",
    permissions: ["BAN_MEMBERS"],

    run: async (client,message,args) => {
        console.log(this.permissions)
    }
}