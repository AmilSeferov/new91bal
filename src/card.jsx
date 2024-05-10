import { useState } from 'react';
import './card.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeTodo, postTodo } from './fech/reducer';
// import { addApi, change } from './fech/reducer';
export default function Card({style}) {
  const [state,setState]=useState({from:'',to:'',amount:''})
  const disPatch=useDispatch();
  const fech = useSelector((state) => state.list);
  // console.log(fech)
  // if(fech.change){
  //   console.log("isledi")
  // //   console.log(fech.data)
  // //   fech.data.find(item=>item.id===fech.change)
  // //   setState()
  // }
  return (
    <>
      <div className="form-container" style={{display:style}}>
        <div className="form-card1">
          <div className="form-card2">
            <form className="form">
              <p className="form-heading">Get In Touch</p>

              <div className="form-field">
                <input value={state.from} onChange={(e)=>{state.from=e.target.value
                  setState({...state})}
                }
                  required=""
                  placeholder="From"
                  className="input-field"
                  type="text"
                />
              </div>

              <div className="form-field">
                <input value={state.to} onChange={(e)=>{state.to=e.target.value
                  setState({...state})
                }}
                  required=""
                  placeholder="To"
                  className="input-field"
                  type="text"
                />
              </div>

              <div className="form-field">
                <input value={state.amount} onChange={(e)=>{state.amount=e.target.value
                  setState({...state})
                }}
                  required=""
                  placeholder="Amount"
                  className="input-field"
                  type="text"
                />
              </div>
              <button type='button' className="sendMessage-btn" onClick={()=>{ 
                
                if(fech.change){disPatch(changeTodo([fech.id,state]))
                }
                else{disPatch(postTodo(state))}}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
