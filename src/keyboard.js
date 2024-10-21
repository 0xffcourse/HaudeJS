class Keyboard{
    constructor(window){
        this.window = window;

        window.addEventListener("keydown", (event)=>{
            this.keyPressed(event.key);
        })

        window.addEventListener("keyup", (event)=>{
            this.keyReleased(event.key);
        })
    }

    keyPressed(key){

    }

    keyReleased(key){

    }
}
