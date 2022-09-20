import React from "react";
import styleimput from './InputSplitRpm.module.css';



function InputSplitRpm({plHolder,txtLabel,nameFor, onChange, inputVl}){
    return(
        <div className={styleimput.inputContainer}>
            <input
                type="text"
                id="username"
                className={styleimput.textInput}
                autoComplete="off"
                placeholder={plHolder}
                onChange={onChange}
                value={inputVl}
            />
            <label for={nameFor} className={styleimput.label}>{txtLabel}</label>
        </div>
    );
}

export default InputSplitRpm;