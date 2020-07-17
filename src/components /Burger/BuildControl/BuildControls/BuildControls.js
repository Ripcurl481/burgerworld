import React from 'react';
import BuildControl from '../../BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const Controller = [
    {label: 'Salad' , types: 'salad'},
    {label: 'Cheese' , types: 'cheese'},
    {label: 'Meat' , types: 'meat'},
    {label: 'Bacon' , types: 'bacon'},

]

const BuildControls = (props) => {
    return(
        <div>
            <p>CurrentPrice:{props.price.toFixed(2)}</p>
            {Controller.map(control => {
                return <BuildControl 
               
                disabled = {props.disable[control.types]}
                key = {control.label} 
                label={control.label}
                ingrmen = {() => props.ring(control.types)}
                ingemen = {() => props.ing(control.types)}/>
            })}
            <button
            className = {classes.OrderButton}
             onClick = {props.billing}
             disabled={!props.purchasable}
           
             >ORDER NOW</button>
        </div>
    )
}
export default BuildControls;