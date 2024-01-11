class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        const Artists = ["Demondice", "FAKE TYPE", "Ado", "KANKAN", "Nihmune", "Mori Calliope", "Takanashi Kiara"];
        console.log(Artists);
        for (let i = 0; i < Artists.length; i++) {
            const element = Artists[i];
            console.log(element);
        }
        const nummers = [2, 5, 7];
        for (let i = 0; i < nummers.length; i++) {
            const element2 = nummers[i];
            console.log(element2 + 1);
        }
        for (let i = 0; i < Artists.length; i++) {
            const element3 = Artists[i];
            console.log(i + ": " + element3);
        }
    }
}

let app = new App();
app.runApplication();