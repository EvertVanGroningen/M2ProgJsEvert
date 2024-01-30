class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier!
        const uiButton = document.getElementById("myButton");
        uiButton.addEventListener("click",(e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });
        const uiButton2 = document.getElementById("myButton2");
        uiButton2.addEventListener("click",(e)=>
        {
            const head = document.createElement("h1");
            const text = document.createTextNode("Wow big text.");
            head.appendChild(text);
            document.body.appendChild(head);
            const para = document.createElement("p");
            const node = document.createTextNode("Squid");
            para.appendChild(node);
            document.body.appendChild(para);
            const image = document.createElement("img");
            image.src = "https://img.wattpad.com/4da4bdc8ff0756ee080c48908dab70264f46973f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6c635843332d77444d54533777673d3d2d343034382e313538613262396434626364316166393236373739353139323339302e6a7067?s=fit&w=720&h=720"
            document.body.appendChild(image);
        });
        const uiButton3 = document.getElementById("myButton3");
        uiButton3.addEventListener("click",(e)=>
        {
            const para = document.createElement("h1");
            const node = document.createTextNode("clicked a div");
            para.appendChild(node);
            document.body.appendChild(para);
        });
    }
}

let app = new App();
app.runApplication();