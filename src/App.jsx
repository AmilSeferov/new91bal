import { useEffect, useState } from "react";
import "./App.css";
// import { add } from "./fech/reducer";
// import Details from './detail'
import List from "./list";

import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./fech/reducer";
import Card from "./card";

function App() {
  const [state, setState] = useState("none");
  const [state1, setState1] = useState('block');
  const fech = useSelector((state) => state.list.data);
  const loading = useSelector((state) => state.list);
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(fetchTodo())
},[dispatch])
console.log(state1)
// console.log(fech,'asd')
  // useEffect(() => {
  //   fetch("https://acb-api.algoritmika.org/api/transaction")
  //     .then((response) => response.json())
  //     .then((data) => disPatch(add(data)));
  // }, []);

  // console.log(fech);
  if(loading.isLoading){
 return<><h1>Loading...</h1></>
  }else if(loading.error){
    return <>
    <h1>Error</h1>
    </>
  }
  else{
  return (
    <>
      <ul style={{display:state1}}>
        {fech?.map((item) => (
          <List
            from={item.from}
            to={item.to}
            amount={item.amount}
            key={1}
            id={item.id}
            set={setState}
            // set1={setState1}
          />
        ))}
      </ul>
      <button style={{display:state1}}
        onClick={() => {
          setState("block");
          setState1('none');
        }}
      >
        Add
      </button>
      <Card style={state} />
    </>
  );
}}

export default App;
