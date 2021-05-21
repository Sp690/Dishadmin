import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import BooksApp from './reducers/dishesApp';

import Books from './components/containers/dishes';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div>
        <dishes store={store} />
      </div>
    )
  }
}
//intialize store
let store = createStore(dishesApp)
console.log(store.getState());

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
