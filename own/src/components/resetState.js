import React, {useState} from 'react';
import CalcButton from '../components/CalcButton';
export default function ResetState(props){
    const [prevValue,setPreValue] = useState(null);
    const [nextvalue,setNextValue] = useState("0");
    const [ACorC, setACorC] = useState("AC")
    const cleanClear = ()=>{
        setPreValue("0");
        setNextValue(0);
        setACorC("AC");
    }
    return(
        <>
            <CalcButton onClick={cleanClear} children={ACorC}></CalcButton>
        </>
    )
}