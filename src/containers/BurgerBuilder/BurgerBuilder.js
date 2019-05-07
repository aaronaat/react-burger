import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
      totalPrice:  4
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
    }

    removeIngredientHandler = (type) => {
      const updatedCount = this.state.ingredients[type] - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalPrice  - priceDeduction;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render() {
        return (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} />
        </Aux>
        );
    }





}

export default BurgerBuilder;
