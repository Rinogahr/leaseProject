import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import myStyle from './MapPage.module.css';
// import InputSplitRpm from '../../componentsrpm/InputSplitRpm/InputSplitRpm';

// let possition = {
//   lat: -8.123310367996895, 
//   lng: -34.95778608613493
// }

function MapPage() {
  const [lat, setLat] = useState(-0);
  const [lng, setLng] = useState(-0);
  
  const [position, setPosition ] = useState({
    lat: lat, 
    lng: lng
  });


  const [enderecoPrincipal, setEnderecoPrincipal ] = useState({});

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB5s0fRbWRykQG2ud_ygzzZEXGaxY1rpns"
  });


    return(
      <div className={myStyle.container}>

        <div className={myStyle.childrenLeft}>
          <div className={myStyle.childrenLeftContainerUm}>
            <div className={myStyle.childrenLeftContainerUmchildren}>
              <div className={myStyle.childrenLeftTitle}>
                <b>Projeto de Geolocalização RPM</b>
              </div>
              <div className={myStyle.childrenLeftInputs}>

                <div className={myStyle.inputContainer}>
                  <input type="number" name="cep1" id="cep1" className={myStyle.inputCep}  placeholder="exemplo: 11111111"/>
                  <label for="{nameFor}" className={myStyle.label}>Informe o primeiro CEP</label>
                </div>

                <div className={myStyle.inputContainer}>
                  <input type="number" name="cep1" id="cep2" className={myStyle.inputCep}  placeholder="exemplo: 22222222"/>
                  <label for="{nameFor}" className={myStyle.label}>Informe o segundo CEP</label>
                </div>

                <div className={myStyle.inputContainer}>
                  <input type="number" name="cep1" id="cep3" className={myStyle.inputCep}  placeholder="exemplo: 33333333"/>
                  <label for="{nameFor}" className={myStyle.label}>Informe o terceiro CEP</label>
                </div>
                 
              </div>
              <div className={myStyle.wrap}>
                <button className={myStyle.button} onClick={Pesquisar}>Pesquisar</button>
              </div>
            </div>
          </div>

          <div className={myStyle.childrenLeftContainerDois}>
            <div className={myStyle.childrenLeftTitleDois}>
              {
                <div className={myStyle.containerTable}>
                  <table className={myStyle.table}>
                    <tr>
                      <td><b>Bairro</b></td>
                      <td><b>Cep</b></td>
                      <td><b>Complemento</b></td>
                      <td><b>DDD</b></td>
                      <td><b>GIA</b></td>
                      <td><b>IBGE</b></td>
                      <td><b>Localidade</b></td>
                      <td><b>Logradouro</b></td>
                      <td><b>SIAFI</b></td>
                      <td><b>UF</b></td>
                    </tr>
                    <tr>
                      <td><b>{enderecoPrincipal.bairro}</b></td>
                      <td><b>{enderecoPrincipal.cep}</b></td>
                      <td><b>{enderecoPrincipal.complemento}</b></td>
                      <td><b>{enderecoPrincipal.ddd}</b></td>
                      <td><b>{enderecoPrincipal.gia}</b></td>
                      <td><b>{enderecoPrincipal.ibge}</b></td>
                      <td><b>{enderecoPrincipal.localidade}</b></td>
                      <td><b>{enderecoPrincipal.logradouro}</b></td>
                      <td><b>{enderecoPrincipal.siafi}</b></td>
                      <td><b>{enderecoPrincipal.uf}</b></td>
                    </tr>
                  </table>
                  
                </div>
              }
            </div>
            <div className={myStyle.childrenLeftInputsDois}>2</div>
            <div className={myStyle.childrenLeftButtonDois}>3</div>
          </div>
        </div>

        <div className={myStyle.childrenRigth }>
        {
            isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={position}
                zoom={20}
              >
                <Marker
                position={position}
                options={{
                  label: {
                    text: "Possição Teste",
                    className: myStyle.mapMaker,
                  }
                }}/>
              </GoogleMap>
          ) : <></>

          }
        </div>
      </div>
    );

    function Pesquisar(){
      let cep1 = document.getElementById("cep1").value;
      let cep2 = document.getElementById("cep2").value;
      let cep3 = document.getElementById("cep3").value;
      if(!cep1){
        alert('CEP 1 não informado');
        return;
      }else{
        getEnderecoUm(cep1);
      }
    
      if(!cep2){
        alert('CEP 2 não informado');
        return;
      }else{
        getEnderecoDois(cep2);
      }
    
      if(!cep3){
        alert('CEP 3 não informado');
        return;
      }else{
        getEnderecoTreis(cep3);
      }
    
    }
    
    async function getEnderecoUm(vl){
      const endereo1 = await fetch(`https://nominatim.openstreetmap.org/search.php?postalcode=${vl}&format=jsonv2`);
      const dataEndereco1 = await endereo1.json();  
    
      if(dataEndereco1.length > 0){
          console.log("dataEndereco1 ::> ",dataEndereco1);
          const localidadePrinsipal = await fetch(`https://viacep.com.br/ws/${vl}/json/`)
          const data = await localidadePrinsipal.json();
          setEnderecoPrincipal(data);
          setLat(dataEndereco1[0].lat);
          setLng(dataEndereco1[0].lon);
          console.log('lat >', lat);
          console.log('lng >', lng);
      }else{
        alert("Endereço 1 não encontrado favor informar um CEP valido")
        return;
      }
    }
    async function getEnderecoDois(vl){
      const endereo1 = await fetch(`https://nominatim.openstreetmap.org/search.php?postalcode=${vl}&format=jsonv2`);
      const dataEndereco1 = await endereo1.json();  
    
      if(dataEndereco1.length > 0){
          console.log("dataEndereco1 ::> ",dataEndereco1[0].display_name);
      }else{
        alert("Endereço 2 não encontrado favor informar um CEP valido")
      }
    }
    async function getEnderecoTreis(vl){
      const endereo1 = await fetch(`https://nominatim.openstreetmap.org/search.php?postalcode=${vl}&format=jsonv2`);
      const dataEndereco1 = await endereo1.json();  
    
      if(dataEndereco1.length > 0){
          console.log("dataEndereco1 ::> ",dataEndereco1[0].display_name);
      }else{
        alert("Endereço 3 não encontrado favor informar um CEP valido")
      }
    }
  }
  



export default MapPage;