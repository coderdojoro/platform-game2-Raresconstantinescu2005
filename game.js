


import Phaser from 'phaser'

class Game extends Phasere.Scene {


    preload() {
        this.preload.image('mage', 'D:/coderdojo/platform-game2-Raresconstantinescu2005/asset/Mage/mage.png');
    }



    create() {
        this hero = this.psyhic.add.sprite(400; 300; 'mage')
        this.hero.body.setColideworldBounds(true)


    }

}
export default Game