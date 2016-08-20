/**
Filename = app.js
@author Dinesh Palle
@date : 19th August 2016
StudentID : 300705307
Website : http://comp125-assignment5.azurewebsites.net/
@description : This is the main css file of this website
*/

var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var text;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();

    }
    function gameLoop() {
        stage.update();
    }
    function main() {
         var clickMeButton = new createjs.Bitmap("../Assets/Images/clickMeButton.png");
        stage.addChild(clickMeButton);
        clickMeButton.addEventListener("click",clicked);
        clickMeButton.x = 70;
        clickMeButton.y = 200;
    }



    function clicked() {
        window.open("http://comp125assignment2update.azurewebsites.net/projects.html")
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map