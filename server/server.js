const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// http://localhost:3000/location
// CEP PARA TESTE 51330110 / 51240000 / 51330098

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
    
     res.json( { "cep1":cep1, "cep2":cep2, "cep3":cep3 } );
     console.log('ola mundo')
    
});









app.listen(port, () => {
    console.log(`Servidor rodando com sucesso, use http://localhost:${port}/`);
} );