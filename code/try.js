

var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });




function preload() {

    game.stage.backgroundColor = '#000000';

    game.load.spritesheet('glowsprite', '../img/glowspriteyellowbig.png', 64, 65, 12);
    game.load.image('star', '../img/star.png');
    game.load.audio("music", "../sound/DII.mp3.mp3");
}

var glow;
var screen;
var upKey;
var downKey;
var leftKey;
var rightKey;
var emitter;
var style;
var text;
var scene = 0;


function create() {

    game.sound.play("music");

    emitter = game.add.emitter(game.world.centerX, 250);
//emmiter.anchor.setTo(glow)
    emitter.makeParticles('star');

    emitter.minParticleSpeed.setTo(-100, 50);
    emitter.maxParticleSpeed.setTo(50, -100);
    emitter.minParticleScale = 0.01;
    emitter.maxParticleScale = 0.3;
    emitter.gravity = -0;
    emitter.flow(200000000, 700, 30, -1);

    glow = game.add.sprite(game.world.centerX, 250, 'glowsprite');
    var walk = glow.animations.add('walk');
    glow.animations.play('walk', 7, true);

    glow.anchor.setTo(0.5, 0.5);
//text.anchor.setTo(0.5, 0.5);

    style = {font: "65px courier New", fill: "#ffffff", align: "center"};
    text = game.add.text(game.world.centerX, 50, "Try", style);


    game.physics.arcade.enable(glow);

    glow.body.collideWorldBounds = true;


    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

}


    function changeSceneRight(){
    text.destroy();
        game.add.text(50, 50, "What do you want to do? Left or right?", style);
    }

    function changeSceneLeft(){


    }



function update () {



   //glow.body.velocity.x = 10;

    if (glow.x > 750) {
        glow.destroy();
        glow = game.add.sprite(game.world.centerX, 250, 'glowsprite');
        var walk = glow.animations.add('walk');
        glow.animations.play('walk',7, true);
        changeSceneRight();


    }

    if (glow.x < 50) {
        glow.destroy();
        glow = game.add.sprite(game.world.centerX, 250, 'glowsprite');
        var walk = glow.animations.add('walk');
        glow.animations.play('walk',7, true);

    }




    if (upKey.isDown)
    {
        glow.y-=2;
    }
    else if (downKey.isDown)
    {
        glow.y+=2;
    }

    if (leftKey.isDown)
    {
        glow.x-=2;
    }
    else if (rightKey.isDown)
    {
        glow.x+=2;

    }



}
