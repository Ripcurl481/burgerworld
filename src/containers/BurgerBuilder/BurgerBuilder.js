import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components /Burger/Burger';
import BuildControls from '../../components /Burger/BuildControl/BuildControls/BuildControls'
import Modal from '../../components /UI/Modal/Modal';
import OrderSummary from  '../../components /Burger/OrderSummary/OrderSummary'
const IngredientPrice = {
    salad:1 , 
    meat:2.2,
    bacon:1.3,
    cheese:0.7
}
class burgerbuilder extends React.Component{
    state = {
        ingredient:{
            salad:0,
            meat:0,
            bacon:0,
            cheese:0,
        },
        totalprice: 4,
        purchasable: false,
        showbill:false
    }
    updatepurchaseable(ingredient){
       
        const sum = Object.keys(ingredient)
        .map(igkey => {
            return ingredient[igkey]
            
        }).reduce((sum , el) => {
            return sum + el;
        },0)
        this.setState({purchasable: sum > 0 })
        
    }
    addIngredient = (types) => {
        const OldIngredient = this.state.ingredient[types]
        const NewIngredient = OldIngredient + 1;
        const UpdatedIngredient = {...this.state.ingredient}
        UpdatedIngredient[types] = NewIngredient;

        const IgPrice = IngredientPrice[types];
        const Tprice = this.state.totalprice;
        const newPrice = IgPrice + Tprice

        this.setState({
            ingredient: UpdatedIngredient,
            totalprice:newPrice
        });
       this.updatepurchaseable(UpdatedIngredient)
     }
    removeIngredient = (types) => {
     const oldIngredient = this.state.ingredient[types];
     if(oldIngredient === 0){
         return null;
     }
      const newIngredient = oldIngredient - 1;
      const updated = {...this.state.ingredient};
      updated[types] = newIngredient;
      const IgPrice = IngredientPrice[types];
        const Tprice = this.state.totalprice;
        const newPrice = IgPrice + Tprice
     this.setState({ingredient:updated , totalprice:newPrice})
     this.updatepurchaseable(updated)
    }
    purchasehandler = () => {
        this.setState({showbill: true})
    }
    purchasecancelhandler = () => {
      this.setState({showbill: false})
    }
    purchasecontinuehandler = () => {
        alert('Your totalprice is ' + this.state.totalprice + ' dollars.')
    }
    render(){
     const disabledinfo = {...this.state.ingredient}
     
     for(let key in disabledinfo){
         disabledinfo[key] = disabledinfo[key] === 0;
     }
        return(
            <Aux>
           <Modal 
              modalclosed = {this.purchasecancelhandler}
              pulse = {this.state.showbill}>
               <OrderSummary 
               click = {this.purchasecancelhandler}
               price ={this.state.totalprice}
               continue = {this.purchasecontinuehandler}
               ingredients = {this.state.ingredient}/>
           </Modal>
           <Burger ingredient={this.state.ingredient} />
            <BuildControls 
            
            billing = {this.purchasehandler}
            purchasable = {this.state.purchasable}
            disable = {disabledinfo}
            ring = {this.removeIngredient}
            ing = {this.addIngredient}
            price = {this.state.totalprice}/>
            </Aux>
           
        )
    }
   
}
export default burgerbuilder;
