import React from 'react';

const ordersummarry = props => {
    const ingredientsummary = Object.keys(props.ingredients).map
    (igkey => {
    return <li>{igkey} : {props.ingredients[igkey]}</li>
    })
    return(
        <div>
            <h3>Your orders</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul style = {{listStyle:'none'}}>
                {ingredientsummary}
            </ul>
            <p>Continue to checkOut</p>
    <p>Totalprice:{props.price.toFixed(2)}</p>
            <button onClick={props.click}>CANCEL</button>
            <button onClick = {props.continue}>Continue</button>
        </div>
    )
}
export default ordersummarry;