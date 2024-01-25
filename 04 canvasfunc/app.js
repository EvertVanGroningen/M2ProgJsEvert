class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        for (let i = 0; i<50; i++){
            for(let j = 0; j<50;j++){
                this.tekenHuis(i*100,j*100);
            }
        }

        this.tekenKerstBoom();
    }

    tekenHuis(x,y)
    {
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30+x,10+y);
        g.lineTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(70+x,20+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(60+x,60+y);
        g.lineTo(20+x,50+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(36+x,54+y);
        g.lineTo(44+x,56+y);
        g.lineTo(44+x,40+y);
        g.lineTo(36+x,38+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(66+x,52.5+y);
        g.lineTo(66+x,44.5+y);
        g.lineTo(74+x,40.5+y);
        g.lineTo(74+x,48.5+y);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenKerstBoom(x,y)
    {
        let randomgetal1 = Math.random();
        let randomgetal2 = Math.random();
        let randomgetal3 = Math.random();
        let randomgetal4 = Math.random();
        let randomgetal5 = Math.random();
        let randomgetal6 = Math.random();
        let randomgetal7 = Math.random();
        let randomgetal8 = Math.random();
        let randomgetal9 = Math.random();
        let randomgetal10 = Math.random();
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(800,600);
        g.lineTo(800,500);
        g.lineTo(700,500);
        g.lineTo(700,600);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(520,500);
        g.lineTo(980,500);
        g.lineTo(750,350);
        g.closePath();
        g.stroke();
        g.fill();
        g.fillStyle = "green";
        g.moveTo(550,400);
        g.lineTo(950,400);
        g.lineTo(750,250);
        g.closePath();
        g.stroke();
        g.fill();
        g.fillStyle = "green";
        g.moveTo(600,300);
        g.lineTo(900,300);
        g.lineTo(750,150);
        g.closePath();
        g.stroke();
        g.fill();
        if(randomgetal1 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal1 > 0.2 && randomgetal1 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal1 > 0.4 && randomgetal1 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal1 > 0.6 && randomgetal1 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(690,460,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal2 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal2 > 0.2 && randomgetal2 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal2 > 0.4 && randomgetal2 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal2 > 0.6 && randomgetal2 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(790,460,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal3 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal3 > 0.2 && randomgetal3 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal3 > 0.4 && randomgetal3 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal3 > 0.6 && randomgetal3 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(600,475,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal4 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal4 > 0.2 && randomgetal4 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal4 > 0.4 && randomgetal4 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal4 > 0.6 && randomgetal4 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(880,475,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal5 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal5 > 0.2 && randomgetal5 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal5 > 0.4 && randomgetal5 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal5 > 0.6 && randomgetal5 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(700,360,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal6 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal6 > 0.2 && randomgetal6 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal6 > 0.4 && randomgetal6 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal6 > 0.6 && randomgetal6 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(780,360,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal7 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal7 > 0.2 && randomgetal7 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal7 > 0.4 && randomgetal7 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal7 > 0.6 && randomgetal7 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(620,375,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal8 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal8 > 0.2 && randomgetal8 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal8 > 0.4 && randomgetal8 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal8 > 0.6 && randomgetal8 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(860,375,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal9 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal9 > 0.2 && randomgetal9 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal9 > 0.4 && randomgetal9 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal9 > 0.6 && randomgetal9 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(700,260,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        if(randomgetal10 < 0.2){
            g.fillStyle = "White";
        } else if(randomgetal10 > 0.2 && randomgetal10 < 0.4){
            g.fillStyle = "yellow"
        } else if(randomgetal10 > 0.4 && randomgetal10 < 0.6){
            g.fillStyle = "Red"
        } else if(randomgetal10 > 0.6 && randomgetal10 < 0.8){
            g.fillStyle = "Purple"
        } else {
            g.fillStyle = "Blue"
        }
        g.beginPath();
        g.arc(780,260,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
}

let app = new App();
app.runApplication();