class Screen{

    game;
    canvas;
    context;
    debugMode;

    constructor(game, canvas, contextType, debugMode){
        this.game = game;
        this.canvas = canvas;
        this.context = canvas.getContext(contextType);
        this.debugMode = debugMode;
    }

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw(world){ 
        for(let entity of world.entities ){
            entity.draw(this.context, this.debugMode);
        }
    }
}
