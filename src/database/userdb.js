const knex = require('knex')
const dbconfig = require("./knexfile")

const db = knex(dbconfig.development)

class Blacklist{
    constructor(link){
        this.link = link
    }

    static insert_one(link){
       const result =  db('blacklist').insert({link: `${link}`, rate: 0, created_at: Date.now()})
       return result
    }
}
module.exports = { Blacklist } 