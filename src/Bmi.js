import { Alert } from "bootstrap";
import React from "react";
import { useState } from "react";


function Bmicalculator(){
    const [weight,setWeight]=useState('')
    const [height,setHeight]=useState('')
    const [bmi,setBmi]=useState('')
    const calculateBmi =()=>{
             if(!height||!weight){
                Alert('please enter your height and weight')
                return;
             }
             const bmivalue=(weight/(height*height));
             setBmi(bmivalue)
    };
    return(

        <div>
            <h2>BMI Calculator</h2>
            <div>
                <label>Weight (kg):</label>
                <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
            </div>
            <div>
            <label>Height (m):</label>
                <input type="text" value={height} onChange={(e)=> setHeight(e.target.value)}/>
            </div>
            <button onClick={calculateBmi}></button>
            {bmi && (
                <div>
                    <p>your BMI is:{bmi}</p>
                    <p>{getBmiClassification(bmi)}</p>
                    </div>
            )}
        </div>
    )
}
function getBmiClassification(bmi) {
    
    if(bmi<18.5) {
        return 'Underweight';
    } else if(bmi>=18.5 && bmi<25){
        return 'Normal weight';
    } else if(bmi>=25 && bmi<30){
        return "Overweight";
    } else{
        return "obese";
    }
}


export default Bmicalculator;