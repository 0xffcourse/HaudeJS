class Fooloon extends Game{
    loadAssets(){
        this.gunSprite = new Sprite('assets/sprites/pistol.png');
        this.bulletSprite = new Sprite('assets/sprites/bullet.png');
        this.balloonSprite = new Sprite('assets/sprites/balloon.png');
    }
    start(){
        super.start();
        //negative gravity, only to apply over balloons that fly!
        this.world.gravity = new Force([0, -0.01]);
        class Bullet extends Entity{

        }
        this.Bullet = Bullet;
        class Gun extends Entity{
            
        };
        this.Gun = Gun;
        class Balloon extends Entity{
    
        };
        this.Balloon = Balloon;
        this.gun = new this.Gun(
            10,
            0,
            [20, 20],
            [0, 0, 45, 45],
            {"DEFAULT": this.gunSprite},
            "DEFAULT",
            [0, 0],
            [0, 0],
            false
        );
        this.world.spawnEntity(this.gun);
        this.keyboard.keyPressed = (key)=>{
            switch(key){
                case "ArrowUp":
                    this.gun.velocity[1] = -5;
                    break;
                case "ArrowDown":
                    this.gun.velocity[1] = 5;
                    break;
                case " ":
                    this.shoot();
                    break;
                default:
                    break;
            }
        };
        this.keyboard.keyReleased = (key)=>{
            this.gun.velocity[1] = 0;
        }
    }
    eventLoop(){
        super.eventLoop();
        if(!(this.frame%100)){
            let balloon = new this.Balloon(
                5,
                0,
                [150+(Math.random()*800), 700],
                [13, 0, 22, 35],
                {"DEFAULT": this.balloonSprite},
                "DEFAULT",
            );
            this.world.spawnEntity(balloon);
        }
    }
    shoot(){
        let bullet = new this.Bullet(
            1,
            0,
            [this.gun.position[0], this.gun.position[1]],
            [0, 5, 25, 15],
            {"DEFAULT": this.bulletSprite},
            "DEFAULT",
            [15, 0],
            [0, 0],
            false
        );
        this.world.spawnEntity(bullet);
    }
};

window.onload = async function(){
    fooloon = new Fooloon(window, "fooloonCanvas", "2d", true);
    fooloon.start();
}
