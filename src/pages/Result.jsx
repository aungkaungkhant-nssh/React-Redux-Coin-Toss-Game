import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Result.module.css'
function Result() {
  const {winners} = useSelector(state => state.winner);
  return (
    <section>
        <h6>Game Result : </h6>
        {
            winners.length===0 &&
            <h3>No Result</h3>
        }
        <div className={`${classes.gameResult} mt-3`}>
            {
                winners.map((w)=>(
                    <div className='card mt-4'>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <p>You : {w.userScore} - Computer : {w.computerScore}</p>
                                <p className={`${w.result===1 ? 'text-success' : 'text-warning'}`}>{w.result===1 ? "You wins!!" : "Computer Wins!!"}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </section>
  )
}

export default Result