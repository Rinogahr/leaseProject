const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// http://localhost:3000/location
// CEP PARA TESTE 51330110 / 51240000 / 51330098
let endereco1 = [];
let endereco2 = "";
let endereco3 = "";

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
    const  {cep1,cep2,cep3}  = rec.params;

    endereco1 = fetch(`https://nominatim.openstreetmap.org/search.php?postalcode=${cep1}&format=jsonv2`)
    .then( function (data) {
        console.log(data);
    }).catch( function(error){
        console.log(error)
    })
    endereco2 = `https://nominatim.openstreetmap.org/search.php?postalcode=${cep2}&format=jsonv2`;
    endereco3 = `https://nominatim.openstreetmap.org/search.php?postalcode=${cep3}&format=jsonv2`;


    //https://viacep.com.br/ws/51330590/json/
    
     res.json( { "endereco1":endereco1, "endereco2":endereco2, "endereco3":endereco3 } );
    
});









app.listen(port, () => {
    console.log(`Servidor rodando com sucesso, use http://localhost:${port}/`);
} );