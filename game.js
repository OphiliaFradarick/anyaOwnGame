class Game{
    constructor(){

    }

    updateGameState(state){
        database.ref("/").update({
            gameState:state
        })
    }
    
}