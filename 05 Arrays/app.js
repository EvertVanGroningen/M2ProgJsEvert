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
        Artists.push("Bob Dylan", "Prince");
        for (let i = 0; i < Artists.length; i++) {
            const element4 = Artists[i];
            console.log(i + ": " + element4);
        }
        Artists.splice(7, 8);
        Artists.push("Kanaria", "James Landino");
        for (let i = 0; i < Artists.length; i++) {
            const element5 = Artists[i];
            console.log(i + ": " + element5);
        }
        let headers = document.getElementsByTagName("h1");
        for (let i = 0; i < headers.length; i++) {
            const element6 = headers[i];
            console.log(element6);
        }
        let headersByCssClass = document.getElementsByClassName("GameName");
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element7 = headersByCssClass[i];
            console.log(element7);
        }
        for (let i = 0; i < headersByCssClass.length; i++) {
            headersByCssClass[i].innerText = "huh????"
            const element8 = headersByCssClass[i];
            console.log(element8)
        }
        headersByCssClass[0].innerText = "nieuws";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar";
        headersByCssClass[3].innerText = "beste forum posts";
        headersByCssClass[4].innerText = "pricewatch";
    }
}

let app = new App();
app.runApplication();