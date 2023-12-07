function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();//opvangen
console.log(hetResultaat);// en gebruiken via de variable
console.log(heeftEenResultaat());//direct gebruiken

let x =9;
let a =3;
let b =4;
let c =89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y);

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function meerBerekeningen(u,h,l)
{
    let f = Math.log(l) + h + Math.pow(u,2);
    return f
}

let f1 = meerBerekeningen(9,8,15);
console.log(f1);

let f2 = meerBerekeningen(4,6,10);
console.log(f2);

let f3 = meerBerekeningen(19,18,115);
console.log(f3);

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