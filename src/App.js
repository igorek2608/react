import "./App.css";
import UserList from "./Components/UserList";
import List from "./Components/List";
import Page from "./Components/Page";
import Timer from "./Components/Timer";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import User from "./pages/User";

/* const userReducer=(state=[], action)=>{
    switch(action.type){
      case "SET_NAME":{
        const name=action.payload.name;
        return [...state, name]
      }
      case "SET_AGE":{
        const age=action.payload.age;
        return [...state,age]
      }
      case "SET_EMAIL":{
        const email=action.payload.email;
        return [...state,email]
      }
      case "SET_INFO":{
        const info=action.payload.info
        return[ ...state,info]
      }
      default:
        return state

  }

}

const cartReducer=(state=[], action)=>{
  switch(action.type){
    case "ADD_PRODUCTS":{
      const products= action.payload.products;
      return [ ...state,products]
    }
    case "REMOVE_PRODUCTS":{
      const id=action.payload.id;
      return state.filter((el)=>el.id !==id)
    }
    
    default:
      return state;
  }

}


const rootReducer= combineReducers({
  user:userReducer,
  cart:cartReducer
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const store=createStore(rootReducer);
const userName= {name:'ola'};
const userAge={age:'27'};
const userEmail={email:'igor@.com'}
const userInfo={name:'ann', age:'22', email:'qwe@com'}
const box={id:'123', name:'box', price:'230'}; 
const keks={id:'122', name:'keks', price:'220'};
const card={id:'121', name:'card', price:'240'};
const setName=(name)=>({type:"SET_NAME", payload:{name}})
const setAge=(age)=>({type:"SET_AGE", payload:{age}})
const setEmail=(email)=>({type:'SET_EMAIL', payload:{email}})
const setInfo=(info)=>({type:'SET_INFO', payload:{info}})
const addProducts=(products)=>({type:'ADD_PRODUCTS', payload:{products}})
const removeProducts=(id)=>({type:'REMOVE_PRODUCTS', payload:{id}})
// store.dispatch(setName(userName));
// store.dispatch(setAge(userAge))
// store.dispatch(setEmail(userEmail))
store.dispatch(addProducts(box))
store.dispatch(addProducts(keks))
store.dispatch(addProducts(card))
store.dispatch(removeProducts(box.id))
store.dispatch(removeProducts(card.id))
store.dispatch(setInfo(userInfo))
console.log(store.getState())
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* <UserList></UserList> */}
        {/* <Page></Page> */}
        {/* <Timer></Timer> */}
        <NavLink activeStyle={{margin:'5px', color:'tomato', textDecoration:'none'}} to='/Home'>Home</NavLink>
        <NavLink activeStyle={{margin:'5px', color:'tomato',textDecoration:'none'}} to='/Users'>Users</NavLink>
        <Switch>
        
        <Route path ='/Home'component={Home}></Route>  
        <Route path="/Users" component={Users}></Route>
        
      </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
