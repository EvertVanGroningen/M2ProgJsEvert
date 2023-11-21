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
        let connection = (true);
        let versietijd = (15 + ":" + 38);
        let creatorStatus = ("Alive");
        console.log("Connection: " + connection);
        console.log("Versietijd: " + versietijd);
        console.log("Creator status: " + creatorStatus);
        this.lagging = (false);
        this.EndWorld = (4093);
        this.WorldStatus = ("Not Exploded");
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
console.log("Lagging: " + app.lagging);
console.log("Days left until the world explodes: " + app.EndWorld);
console.log("World status: " + app.WorldStatus);