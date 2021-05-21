import React from 'react';

import { getState } from 'redux';

import AddDish from '../../actions/AddDish';
import DeleteDish from '../../actions/DeleteDish';
import EditDish from '../../actions/EditDish';

import dishcard from  '../presentationals/dishcard';

//Provider/Container React Component
class dishes extends React.Component {
  dispatchAction (input) {
    switch (input) {
      case "TRASH":
        this.props.store.dispatch(DeleteDish());
        break;
      case "PLUS":
        this.props.store.dispatch(AddDish());
        break;
      case "PENCIL":
        this.props.store.dispatch(EditDish());
        break;
    }
  }

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  render() {
    const stateProps = this.props.store.getState();
    const dishItems = stateProps.dishes.map((dish) =>
      <dishcard
        key = { dish }
        stateProps = { stateProps }
        dispatchAction = {this.dispatchAction.bind(this)}
      />
    );
    return (
      <div className="dishes-container">
        {dishItems}
      </div>
    )
  }
}

export default dishes
