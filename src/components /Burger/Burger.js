import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let  newIngredient = Object.keys(props.ingredient)
    .map(key => {
        return [...Array(props.ingredient[key])].map((value , id) => {
            return <BurgerIngredient key={key + id} types={key}/>
        })
    })
    .reduce((prev , next) => {
        return prev.concat(next)
    },[])
    if(newIngredient.length === 0){
        newIngredient =  <p>Please add Ingredient</p>
    }
    return(
       <div className = {classes.Burger}>
       <BurgerIngredient types = "bread-top"/>
       {newIngredient}
       <BurgerIngredient types = "bread-bottom"/>

   </div>
    )
}
export default Burger;