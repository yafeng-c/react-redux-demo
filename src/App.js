import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CakeContainer />
        <ItemContainer cake />
        <ItemContainer icecream />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
