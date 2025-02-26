export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    // let stage = []
   return Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0,'clear']))
    // for(let row = 0; row <STAGE_HEIGHT; row++){
    //     stage[row] = []
    //     for(let col = 0; col <STAGE_WIDTH; col++) {
    //         stage[row][col] = 0
    //     }
    //     return stage
    // }
    
}

export const checkCollision = (player, stage,{x:moveX, y: moveY}) => {
    // for (let y = 0; y < player.tetromino.length;y += 1) {
    //     for (let x = 0; x < player.tetromino[y].length; x += 1) {

    //         //check if on a cell
    //         if(player.tetromino[y][x] !==0) {
    //             console.log(player.tetromino[y][x]);
    //             if(
    //             // check that move can be made within height and width of board
    //             !stage[y + player.pos.y + moveY] || 
    //             !stage[y + player.pos.y +moveY][x + player.pos.x + moveX] ||
    //             stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
    //        ) {
    //         return true
    //        } }
    //     }
    // }
    // return false
}