class Game{

    window;
    debugMode;

    world;
    screen;

    frame;

    loadAssets(){
        
    }

    constructor(
        window,
        canvasId,
        contextType = "2d",
        debugMode = false
    ){
        this.window = window;
        this.debugMode = debugMode;

        this.loadAssets();

        this.world = new World();
        var canvas = window.document.getElementById(canvasId);
        this.screen = new Screen(this, canvas, contextType, debugMode);

        this.keyboard = new Keyboard(window);
        
        this.frame = 0;
        this.lastTime = Date.now();
        this.averageFps = 0;
        this.highestFps = null;
        this.lowestFps = null;

        this.eventLoop = this.eventLoop.bind(this);
    }

    start(){
        this.eventLoop();
    }

    eventLoop(currentTime){
        //clear the screen
        this.screen.clear();
        
        //increment of frame by 1 
        this.frame += 1;

        //draw the updated world in screen
        this.screen.draw(this.world.update());

        //frame-time calculation
        currentTime = Date.now();
        let deltaTime = (currentTime - this.lastTime)/1000;
        this.lastTime = currentTime;
        if(deltaTime>0){
            var currentFps = Math.round(1/deltaTime);
            this.averageFps = (this.averageFps+currentFps)/2;
            if(this.lowestFps==null || currentFps<this.lowestFps) this.lowestFps = currentFps;
            if(this.highestFps==null || currentFps>this.highestFps) this.highestFps = currentFps;
        }
        //console.log(`Current FPS: ${currentFps}, Average FPS: ${this.averageFps}(high:${this.highestFps},low:${this.lowestFps})`);

        //loop
        requestAnimationFrame(this.eventLoop);
    }
}
