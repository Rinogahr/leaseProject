import React from "react";
import loadStyle from "./loader.module.css";


const Loader = () =>{
    return(
        <div className={loadStyle.wrapper}>
            <div className={loadStyle.loader}></div>
        </div>
    );
}

const fadeOut = () => {
    const loaderWrapper = 
    document.querySelector(".wrapper");
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

export default Loader;