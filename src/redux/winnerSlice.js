import { createSlice } from "@reduxjs/toolkit";

///1 user win  && 0 computer win
const initialState={
    winners:
        localStorage.getItem("winners") ? JSON.parse(localStorage.getItem("winners")) : []
    
}
const winnerSlice = createSlice({
    name:"winner",
    initialState,
    reducers:{
        setWinner:(state,action)=>{
            state.winners = state.winners.concat(action.payload);
            localStorage.setItem("winners",JSON.stringify(state.winners));
        }
    }
});

export const {setWinner} = winnerSlice.actions 
export default winnerSlice.reducer;

