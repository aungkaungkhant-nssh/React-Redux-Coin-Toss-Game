import {createSlice} from '@reduxjs/toolkit';

const initialState={
    userSelected:"",
    computerSelected:"",
    randomResult:"",
    userScore:0,
    computerScore:0,
}
const gameSlice = createSlice({
    name:"game",
    initialState,
    reducers:{
        gameStart:(state,action)=>{
            // const userPick = action.payload === "head" ? 1 : 0;
            const random = Math.round(Math.random());
            const computerPick = Math.round(Math.random());  
            
            computerPick===1 ? state.computerSelected="head" : state.computerSelected="tail";
            random === 1 ? state.randomResult="head"  : state.randomResult="tail";

            state.userSelected=action.payload;
           
        },
        gameResult:(state,action)=>{
            if(state.userSelected === state.randomResult && state.computerSelected === state.randomResult)return;
            if(state.userSelected === state.randomResult){
                state.userScore+=1;
            }
            if(state.computerSelected === state.randomResult){
                state.computerScore+=1;
            }
        },
        gameRestart:(state,action)=>{
            state.userScore=0;
            state.computerScore=0;
            state.randomResult="";
            state.computerSelected="";
            state.userSelected=""
        }
    },

})
export const {gameStart,gameResult,gameRestart} = gameSlice.actions; 
export default gameSlice.reducer;