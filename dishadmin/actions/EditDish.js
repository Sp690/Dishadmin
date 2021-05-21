//define action within an action creator
function EditDish() {
  const Edit_Dish= 'Edit_Dish'
  return {
    type: Edit_Dish,
    picture: "link_1",
    name: "dish_1",
    description: "Nutrients",
    total_calories: "kcal"
  }
}

export default EditDish
