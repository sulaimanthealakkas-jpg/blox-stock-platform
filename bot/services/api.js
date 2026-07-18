const axios = require("axios");

const API="http://localhost:3000/api";

async function getStock(){

const response=await axios.get(API+"/stock");

return response.data;

}

module.exports={

getStock

};
