class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");

        for (let x = 0; x <200; x++){
        this.tekenCirkel(g);
        }
    }

    tekenCirkel(g) {
        g.beginPath();
        g.fillStyle = "red";
        g.arc(Math.round(Math.random()*1500),Math.round(Math.random()*700),Math.round(Math.random()*40),0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        
    }
}

let app = new App();
app.runApplication();