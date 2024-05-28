class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    create() {
        // Display "You Win!" message
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'You Win!', {
            fontSize: '64px',
            fill: '#FF00FF'
        }).setOrigin(0.5);

        // Display restart instructions
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 100, 'Press R to Restart', {
            fontSize: '32px',
            fill: '##FFFF00'
        }).setOrigin(0.5);

        // Set up restart key
        this.rKey = this.input.keyboard.addKey('R');

        // Restart the game when the R key is pressed
        this.rKey.on('down', () => {
            this.scene.start('platformerScene');
        });
    }
}
