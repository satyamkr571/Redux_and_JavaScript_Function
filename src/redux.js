const redux = require("redux");
const reduxlogger = require("redux-logger");

const combineReducers = redux.combineReducers;
const createStore = redux.createStore;
const logger = reduxlogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux Action",
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "ICE CREAM SOLD",
  };
}

// const initialState = {
//   noOfCake: 10,
//   noOfIceCream: 70,
// };
const initialIcecreamState = {
  noOfIceCream: 70,
};
const initialCakeState = {
  noOfCake: 10,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         noOfCake: state.noOfCake - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         noOfIceCream: state.noOfIceCream - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
