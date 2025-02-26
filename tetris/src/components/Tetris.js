import React, {useState} from 'react'
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player)
    

    const movePlayer = (direction) => {
        if(!checkCollision(player, stage, {x:direction, y:0})){
            updatePlayerPos({x:direction, y:0})
        } else {
            return
        }
        
    }
    const startGame = () => {
        //reset board
        setStage(createStage())
        resetPlayer()
        
        // 
    }

    const drop = () => {
        updatePlayerPos({x:0, y:1, collided:false})
    } 

    const dropPlayer = () => {
        drop()
    }

    const move = ({key}) => {
        if(!gameOver) {
            console.log(key)
            if(key === 'ArrowLeft') {
                movePlayer(-1)
            } else if(key === 'ArrowRight') {
                movePlayer(1)
            } else if(key === 'ArrowDown') {
                movePlayer(drop())
            }
        }
    }


  return (
    <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)}>
        <StyledTetris>
        <Stage stage={stage}/>
      <aside>
        {gameOver ? 
            <Display gameOver={gameOver} text="Game Over"/> :
            <div>
            <Display text="Score"/>
            <Display text="Rows"/>
            <Display text="Level"/>
            </div>
        }
        
        <StartButton callback={startGame}/>
      </aside>
        </StyledTetris>
      
    </StyledTetrisWrapper>
  )
}

export default Tetris
