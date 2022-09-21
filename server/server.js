const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

// http://localhost:3000/location
// CEP PARA TESTE 51330110 / 51240000 / 51330098 / 50040000
let endereco1 = [];
let endereco2 = [];
let endereco3 = [];




app.get("/", ( rec, res ) =>{
    const cep1 = rec.query.cep1;
    const cep2 = rec.query.cep2;
    const cep3 = rec.query.cep3;
    // res.json( {locatio1, locatio2, locatio3 } );
    res.json( { "cep1": cep1 } );
    res.json( { "cep2": cep2 } );
    res.json( { "cep3": cep3 } );
});
app.get("/location/:cep1/:cep2/:cep3", ( rec, res ) =>{
    const  {cep1,cep2,cep3}  =  rec.params;
    // //https://viacep.com.br/ws/51330590/json/
    //  res.json( { "endereco1":endereco1, "endereco2":endereco2, "endereco3":endereco3 } );
    axios.get(`https://nominatim.openstreetmap.org/search.php?postalcode=${cep1}&format=jsonv2`).then(resp => {

        endereco1 = resp.data;
    });
    
    res.json({"teste1":endereco1});
    
});

async function doGetRequest(rec1,rec2,rec3) {

    console.log(rec1,rec2,rec3);
     endereco1 = await axios.get(`https://nominatim.openstreetmap.org/search.php?postalcode=${rec1}&format=jsonv2`);
     endereco2 = await axios.get(`https://nominatim.openstreetmap.org/search.php?postalcode=${rec2}&format=jsonv2`);
     endereco3 = await axios.get(`https://nominatim.openstreetmap.org/search.php?postalcode=${rec3}&format=jsonv2`);
  
    
    return endereco1;
  }












app.listen(port, () => {
    console.log(`Servidor rodando com sucesso, use http://localhost:${port}/`);
} );