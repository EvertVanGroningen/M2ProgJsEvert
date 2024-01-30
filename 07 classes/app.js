class App {
    runApplication() {
        console.log("Hello world!");
        //code gaat hier!
    }
}

class Greet
{
    constructor()
    {
        this.greeting = "Greetings!"
    }

    showGreeting()
    {
        console.log("greetings van binnen: " +this.greeting);
    }
}

class GoodBye
{
    constructor()
    {
        this.goodbye = "Bye Bye"
    }

    showGoodbye()
    {
        console.log("goodbye van binnen: " +this.goodbye);
    }
}

let greet = new Greet();
let bye = new GoodBye();
greet.showGreeting();
bye.showGoodbye();
greet.showGreeting();
bye.showGoodbye();
greet.showGreeting();
bye.showGoodbye();
greet.showGreeting();
bye.showGoodbye();

console.log("greeting van buiten: "+greet.greeting);
console.log("goodbye van buiten: "+bye.goodbye);

let app = new App();
app.runApplication();