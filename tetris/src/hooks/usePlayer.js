import { useCallback, useState } from "react";
import { randomTetromino, TETROMINOES } from "../tetrominoes";
import { STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos:{x:0, y:0},
        tetromino:TETROMINOES[0].shape,
        collided:false
    });

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x:(prev.pos.x += x), y:(prev.pos.y +=y)},
            collided,
        }))
        console.log('Update player positon fn:', x,y)
    }

    const resetPlayer = useCallback(() =>{
        setPlayer({
            pos:{x:STAGE_WIDTH / 2 -2, y:0},
            tetromino:randomTetromino().shape,
            collided:false
        })
        console.log(randomTetromino())
    },[])

    return [player, updatePlayerPos, resetPlayer]
}