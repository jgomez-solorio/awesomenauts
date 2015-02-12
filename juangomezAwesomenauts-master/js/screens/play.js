game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;
        // The levelDirector is called to load the test level.
        me.levelDirector.loadLevel("test");
        // These two lines are used to pull the Orc player entity from the entity pool in entities.js.
        var player = me.pool.pull("player", 0, 496, {});
        me.game.world.addChild(player, 5);
        // These inputs are used to bind the arrow keys/buttons to do certain actions.
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.SPACE, "jump");
        me.input.bindKey(me.input.KEY.A, "attack");
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
