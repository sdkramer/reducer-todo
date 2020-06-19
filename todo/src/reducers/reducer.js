export const todos = [{
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
}];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, {item: action.payload, completed:false, id: Date.now()} ] ;

    case "TOGGLE_COMPLETE":
      return action.payload.add('completed');

    //   case "CLEAR_COMPLETED":
    //     return {...state, todos.filter(todo => !todo.completed)};

    default:
      return state;
  }
};
