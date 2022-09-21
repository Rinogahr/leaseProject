import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import myStyle from './MapPage.module.css';
import InputSplitRpm from '../../componentsrpm/InputSplitRpm/InputSplitRpm';

let possition = {
  lat: -8.123310367996895, 
  lng: -34.95778608613493
}

function MapPage() {

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
              <div className={myStyle.childrenLeftButton}>
                <div className={myStyle.textBox}>
                    <a href="#" className={myStyle.btn} class="btn btn-white btn-animate">Consultar</a>
                </div>
              </div>
            </div>
          </div>

          <div className={myStyle.childrenLeftContainerDois}>
            <div className={myStyle.childrenLeftTitleDois}>1</div>
            <div className={myStyle.childrenLeftInputsDois}>2</div>
            <div className={myStyle.childrenLeftButtonDois}>3</div>
          </div>
        </div>

        <div className={myStyle.childrenRigth }>
        {
            isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={possition}
                zoom={20}
              >
                <Marker
                position={possition}
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

    // return (
    //   <div className={myStyle.containerMap}>
    //     <div className={myStyle.mapCombobox}>
    //       <div className={myStyle.campos}>
    //         <div>
    //           {/* <InputSplitRpm 
    //           txtLabel="Infome o primeiro endereço"/> */}
    //           <input
    //             type="text"
    //             id="username"
    //             // className={styleimput.textInput}
    //             autoComplete="off"
    //             placeholder="Informe o primeiro CEP"
    //             // onChange={onChange}
    //             value="dsdsd"
    //           />
    //         </div>
    //         <div>
    //           {/* <InputSplitRpm 
    //           txtLabel="Infome o primeiro endereço"/> */}
    //           <input
    //             type="text"
    //             id="username"
    //             // className={styleimput.textInput}
    //             autoComplete="off"
    //             placeholder="Informe o segundo CEP"
    //             // onChange={onChange}
    //             value="dsdsd"
    //           />
    //         </div>
    //         <div>
    //           {/* <InputSplitRpm 
    //           txtLabel="Infome o primeiro endereço"/> */}
    //           <input
    //             type="text"
    //             id="username"
    //             // className={styleimput.textInput}
    //             autoComplete="off"
    //             placeholder="Informe o terceiro CEP"
    //             // onChange={onChange}
    //             value="dsdsd"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className={myStyle.googleMapCt}>
    //       
    //     </div>
    //   </div>
    // );
  }
  



export default MapPage;