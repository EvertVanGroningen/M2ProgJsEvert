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
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(70,20);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(80,30);
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(20,30);
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.lineTo(20,50);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(36,54);
        g.lineTo(44,56);
        g.lineTo(44,40);
        g.lineTo(36,38);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(66,52.5);
        g.lineTo(66,44.5);
        g.lineTo(74,40.5);
        g.lineTo(74,48.5);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runApplication();