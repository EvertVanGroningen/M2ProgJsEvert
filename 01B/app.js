class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        this.appNaam = ("String");
        this.versienummer = (1 + "," + 1);
        this.versiedatum = (21 + "-" + 11 + "-" + 2023);
        this.autheur = ("Everardus");
        this.copyright = ("The Council");
        this.distributeur = ("Enkhuizen");
        this.darkmode = (true);
        this.greeting = "Starting up";
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("app naam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versie datum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("Dark mode: " + app.darkmode);