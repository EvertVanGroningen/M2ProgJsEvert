function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}

argumentsAreHandy("Super Shout out");
argumentsAreHandy("You are uncool");
argumentsAreHandy("Laser shooting dinosaur");

function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world!");
        superMooieGlobalFunction();
        //code gaat hier!
    }
}

let app = new App();
app.runApplication();