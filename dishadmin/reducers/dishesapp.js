//define the initial state
const initialState = {
  dishes: [0,1,2,3],
  picture: "link_1",
  name: "DISH1",
  description: "Nutrients",
  total_calories: "kcal"
}

//define a reducer with an intitalized state and logic to handle action
function dishesApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DISH':
      let incremented = Object.assign({}, state)
      incremented.dishes.push(incremented.dishes.length)
      return incremented
    case 'DELETE_DISH':
      let decremented = Object.assign({}, state)
      decremented.dishes.pop()
      return decremented
    case 'EDIT_DISH':
      let edited = Object.assign({}, state, {
        picture: action.picture,
        name: action.name,
        description: action.description,
        link: action.link
      })
      return edited
    default:
      return state
  }
}
export default dishesApp
