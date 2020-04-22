function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state;
  }

  return { dispatch, getState };
}

let store = createStore(reducer);
let button = document.getElementById('button');


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

store.dispatch({ type: "beef" })

button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_COUNT' });
})
