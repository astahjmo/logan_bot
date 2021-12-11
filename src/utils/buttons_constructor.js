'use strict';

const { MessageActionRow, MessageButton } = require('discord.js');


class HelperButton{

    constructor(id,label,style, row){
        this.id = id
        this.label = label
        this.style = style
     }
    create(){
        const button = new MessageButton()
            .setCustomId(this.id)
            .setLabel(this.label)
            .setStyle(this.style)
        return button
    }
}

module.exports = { HelperButton } 
