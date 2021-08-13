import { addElement, del, deleteElement, addOne } from "./funcs";

export const initialState = {
  basket: [],
  user: null,
  city: "Dhaka",
  hash: {},
  total: 0,
  pros: [],
};


function reducer(state, action) {
  switch (action.type) {
    case "SHOW":
      return {
        ...state,
        pros:[...action.pros],
      }
      break;
    
    case "LOGIN":
      return {
        ...state,
        user: {
          // jwt: action.jwt,
          name: action.name,
          email: action.email,
        },
      };

      break;
    case "ADD_TO_BASKET":
      const [basket, hash] = addElement(state.basket, action.item, state.hash);
      //console.log(basket);
      localStorage.setItem("cart", JSON.stringify(basket));
      return {
        ...state,
        basket: basket,
        hash: hash,
        total: state.total + action.price,
      };
      
      break;
    case "REMOVE_FROM_BASKET":
      const [sket, sh] = deleteElement(state.basket, action.id, state.hash);
      //console.log(sket);
      localStorage.setItem("cart", JSON.stringify(sket));
      return {
        ...state,
        basket: sket,
        hash: sh,
        total: state.total - action.pr,
      };
      break;
    case "SET_CITY":
      return { ...state, city: action.city };
      break;
    case "DEL":
      const [asket, ash] = del(state.basket, action.id, state.hash);
      //console.log(asket);
      localStorage.setItem("cart", JSON.stringify(asket));
      return {
        ...state,
        basket: asket,
        hash: ash,
        total: state.total - action.pr,
      };
      break;
    case "ADD_ONE":
      const [ket, h] = addOne(state.basket, action.id, state.hash);
      localStorage.setItem("cart", JSON.stringify(ket));
      return {
        ...state,
        basket: ket,
        hash: h,
        total: state.total + action.pr,
      };
      break;
    default:
      return state;
  }
}

export default reducer;
