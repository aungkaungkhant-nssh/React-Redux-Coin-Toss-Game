import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gameRestart, gameResult, gameStart } from '../redux/gameSlice';
import { setWinner } from '../redux/winnerSlice';
import classes from './Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const {userSelected,computerSelected,randomResult,userScore,computerScore} = useSelector(state => state.game);
  const [isAnimate,setIsAnimate] = useState(false);
  const [winner,setIsWinner] = useState("");

  const startGame=(choose)=>{
     setIsAnimate(true);
     dispatch(gameStart(choose));
      setTimeout(() => {
        setIsAnimate(false);
        dispatch(gameResult());
      }, 1000);
  };
  const restartGame=()=>{
    setIsWinner("");
    dispatch(gameRestart())
  }
  useEffect(() => {
    if(userScore === 5){
      setIsWinner("You Wins!!!");
      dispatch(setWinner({userScore,computerScore,result:1}));
    }
    if(computerScore === 5){
      setIsWinner("Computer Wins!!!");
      dispatch(setWinner({userScore,computerScore,result:0}));
    }
  }, [userScore,computerScore]);
  return (
    <section className='text-center'>
        <h3>First Player to 5 points win!</h3>
        <div className='row mt-4'>
            <h5 className='col-md-6'>
                Player Selected: 
                <span className={`${userSelected==="head" ? 'text-primary' : 'text-success'}`}>{' '}{userSelected}</span>
            </h5>
            <h5 className='col-md-6 mt-3 mt-md-0'>
              Computer Selected:
              <span className={`${computerSelected==="head" ? 'text-primary' : 'text-success'}`}>{' '}{computerSelected}</span>
            </h5>
        </div>
        <div className='my-3'>
            <h2 className='text-info'>{winner || ''}</h2>
        </div>
        <div className={`${classes.image} ${isAnimate && classes.animate} ${randomResult=== "head" ? classes.head : classes.tail}`}></div>

        <div className='row mt-4' >
           <h6 className='col-md-6'><i class="fa-solid fa-user mr-2"></i> Player : {userScore}</h6>
           <h6 className='col-md-6 mt-3 mt-md-0'><i class="fa-solid fa-robot mr-2"></i>Computer : {computerScore}</h6>
        </div>
        <div className='mt-4'>
           <h5>Make a selection</h5>
           {
             !winner ? (
              <div className='row justify-content-center mt-4'>
              <button  className="btn btn-info mr-4" onClick={()=>startGame("head")}>
                <i class="fa-solid fa-circle-up mr-2" ></i>
                Head
              </button>
              <button className="btn btn-info" onClick={()=>startGame("tail")}>
                <i class="fa-solid fa-circle-down mr-2"></i>Tail
              </button>
            </div>
             ):(
               <button className='btn btn-info mt-4' onClick={()=>restartGame()}>Restart</button>
             )
           }
         
        </div>
    </section>
  )
}

export default Home