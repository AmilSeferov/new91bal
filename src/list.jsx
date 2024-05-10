import { useDispatch } from "react-redux";
import "./list.css";
import { addid, deleteTodo, fetchTodo } from "./fech/reducer";
// import { change, remove } from "./fech/reducer";
export default function List({ from, to, amount, id ,set}) {
  const disPatch=useDispatch();
  return (
    <>
      <li>
        <p>From:{from} </p> <p>To:{to}</p>
        <p>Amount:{amount}</p>
        <div>
          <button onClick={()=>{set('block')
            disPatch(addid(id))
          }} className="noselect info">i</button>
          <button
            onClick={() => {disPatch(deleteTodo(id));
            disPatch(fetchTodo())
            }}
            className="noselect"
          >
            <span className="text">Delete</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
      </li>
    </>
  );
}







