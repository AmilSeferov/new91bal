import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState =  {
    isLoading: false,
    data:[
        {
            from:'',
            to:'',
            amount:'',
        }
    ],
    id:''
    ,
    change:false,
    error:false
    
}
export const fetchTodo  = createAsyncThunk('fetchTodo',async()=>{
    const data = await fetch('https://acb-api.algoritmika.org/api/transaction')
    return data.json()
})
export const deleteTodo = createAsyncThunk('postTodo',async(value)=>{
   
    const data = await fetch(`https://acb-api.algoritmika.org/api/transaction/${value}`,{
        method:'DELETE',
        headers:{
            'Content-text':'aplication.json'
        },
    }).then(res=>res.json()).then(data=>data)
    location.reload()
})
export const postTodo= createAsyncThunk('postTodo',async(values)=>{
  console.log(values)
 const data= await fetch('https://acb-api.algoritmika.org/api/transaction', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body:JSON.stringify(values)
  
})
location.reload()
})
export const changeTodo =createAsyncThunk('changeTodo',async([value,values])=>{
  const data=await  fetch(`https://acb-api.algoritmika.org/api/transaction/${value}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify(values)
  })
  location.reload()
})
export const ListSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
      addid: (state,action) => {
        state.change=true,
        state.id = action.payload
      },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchTodo.rejected,(state)=>{
            state.error = true
        })

        builder.addCase(deleteTodo.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(deleteTodo.fulfilled,(state,action)=>{
            state.isLoading = false

            state.data =  action.payload
            

        })
        builder.addCase(deleteTodo.rejected,(state)=>{
            state.error = true
        })
    }
})


// export const ListSlice = createSlice({
//         name:'list',
//         initialState,
//         reducers:{
//             getFetch:(state)=>{
//                 state.from = fetchTodo.map(item=>item.from)
//                 state.to = fetchTodo.map(item=>item.to)
//                 state.amount = fetchTodo.map(item=>item.amount)
//             },
//             from:(state,action)=>{
//                 state.from = action.payload
//             },
//             to:(state,action)=>{
//                 state.to = action.payload
//             },
//             amount:(state,action)=>{
//                 state.amount = action.payload
//             }

//         }})
export const {addid} = ListSlice.actions
export default ListSlice.reducer
