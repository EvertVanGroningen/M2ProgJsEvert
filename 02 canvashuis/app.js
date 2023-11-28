class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        
        g.fillStyle = "#660066";
        g.fillRect(0,0,canvas.width,canvas.height);

        g.fillStyle = "#ffff00";
        g.fillRect(0,0,10,10);
    }
}

let app = new App();
app.runApplication();