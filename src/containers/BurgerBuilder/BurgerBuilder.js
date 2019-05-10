import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  lettuce: 0.1,
  bacon: 0.5,
  cheese: 1.5,
  meat: 1
}

class BurgerBuilder extends React.Component {

    state = {
      ingredients: {
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice:  4,
      buyable: false,
      buying: false
    }

    buyingHandler () {
      this.setState({buying: true});
    }

    updateBuyState(ingredients) {

      const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey];
        })
        .reduce((sum, el) =>{
          return sum + el;
        }, 0);
      this.setState({buyable: sum > 0});
    }
    addIngredientHandler = (type) => {
      const updatedCount = this.state.ingredients[type] + 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalPrice + priceAddition;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
      this.updateBuyState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      if (oldCount <= 0) return;
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalPrice  - priceDeduction;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
      this.updateBuyState(updatedIngredients);
    }

    render() {
      const disabledInfo = {
        ...this.state.ingredients
      };
      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }
        return (
        <Aux>
          <Modal>
            <OrderSummary ingredients={this.state.ingredients} />
          </Modal>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice} 
          buyable={this.state.buyable} />
        </Aux>
        );
    }





}

export default BurgerBuilder;
