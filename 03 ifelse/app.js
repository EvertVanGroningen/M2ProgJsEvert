class App
{
    runApplication()
    {
        console.log("hello world!");
        
        let title = document.getElementById("newstitle");
        console.log(title);
        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        console.log(newsitem1);
        let newsitem2 = document.getElementsByClassName("gamenews-headline")[0];
        console.log(newsitem2);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000"
        } 
        else if(random > 0.2 && random < 0.6)
        {
            title.style.backgroundColor = "#00FF00"
        }
        else if(random > 0.6 && random < 0.75)
        {
            title.style.backgroundColor = "#7F22C3"
        }
        else
        {
            title.style.backgroundColor = "#FFFF00"
        } 

        if(random < 0.2)
        {
            newsitem2.style.backgroundColor = "#FFFF00"
        } 
        else if(random > 0.2 && random < 0.6)
        {
            newsitem2.style.backgroundColor = "#7F22C3"
        }
        else if(random > 0.6 && random < 0.75)
        {
            newsitem2.style.backgroundColor = "#00FF00"
        }
        else
        {
            newsitem2.style.backgroundColor = "#FF0000"
        } 

        if(random < 0.2)
        {
            newsitem1.style.backgroundColor = "#7F22C3"
        } 
        else if(random > 0.2 && random < 0.6)
        {
            newsitem1.style.backgroundColor = "#FFFF00"
        }
        else if(random > 0.6 && random < 0.75)
        {
            newsitem1.style.backgroundColor = "#FF0000"
        }
        else
        {
            newsitem1.style.backgroundColor = "#00FF00"
        } 
    }
}

let app = new App();
app.runApplication();