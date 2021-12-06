module.exports = {
    name: "teste",
    run: async (client) =>{
        console.log(client.commands.forEach(element => {

            console.log(element.name)
        }))
    }
}