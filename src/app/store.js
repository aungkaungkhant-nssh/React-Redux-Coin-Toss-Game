import {configureStore} from '@reduxjs/toolkit';
import gameSlice from '../redux/gameSlice';
import winnerSlice from '../redux/winnerSlice';
const store = configureStore({
    reducer:{
       game:gameSlice,
       winner:winnerSlice 
    }
})

export default store;