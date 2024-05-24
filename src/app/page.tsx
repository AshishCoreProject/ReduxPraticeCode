"use client"
// import MainComponent from "@/components/SimpleStateComponent";
// import ReducerComponent from "@/components/ReducerComponent";
import CalculateComponent from "@/components/CalculateReduxComponent";
import TodoList from "@/components/TodoList";
import {Provider} from "react-redux";
import store from "../app/store"
export default function Home() {
  return (
    <Provider store={store}> 
      <main>
        {/* <MainComponent/> */}
        {/* <ReducerComponent/> */}
        <CalculateComponent/>
        <TodoList/>
      </main>
    </Provider>
  );
}
