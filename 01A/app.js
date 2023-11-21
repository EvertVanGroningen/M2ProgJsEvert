class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        let appNaam = ("String");
        let versienummer = (1 + "," + 1);
        let versiedatum = (21 + "-" + 11 + "-" + 2023);
        let autheur = ("Everardus");
        let copyright = ("The Council");
        let distributeur = ("Enkhuizen");
        let darkmode = (true);
        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();