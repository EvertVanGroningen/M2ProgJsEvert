class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(360,540);
        g.lineTo(440,560);
        g.lineTo(440,400);
        g.lineTo(360,380);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(660,525);
        g.lineTo(660,445);
        g.lineTo(740,405);
        g.lineTo(740,485);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runApplication();