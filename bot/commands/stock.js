const { SlashCommandBuilder } = require("discord.js");

const api=require("../services/api");

module.exports={

data:new SlashCommandBuilder()

.setName("stock")

.setDescription("Shows current stock"),

async execute(interaction){

const stock=await api.getStock();

await interaction.reply({

content:JSON.stringify(stock)

});

}

};
