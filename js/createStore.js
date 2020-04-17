// to avoid accidental overwrite of this object, put it in a function 
// let state;
function createStore(reducer) {
  // dont put reducer in here bc it needs to be a generic method
  // pass reducer as an argument instead 
  let state

  // move dispath inside function so has access to state 
  // this creates a closure. function encloses and draws a protective bubble around the variables in its scope
  // dispatch is private, state is private 
  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  function getState(){
    return state 
  }

  // return function to be used elswhere in application 
  return {dispatch, getState}
}


function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer) 
store.dispatch({type: '@@INNIT'})

let button = document.getElementById("button")
button.addEventListener('click', function() {
    store.dispatch({type: "INCREASE_COUNT"})
})
