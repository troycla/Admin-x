

   
javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
   


 function aceapp(){
const myAce = document.createElement("div");
myAce.id = "myace";
myAce.className ='myace';
myAce.style.position = "absolute";
myAce.style.zIndex = "10";
myAce.style.height = "400px";
myAce.style.width = "450px";
myAce.style.background = "black";
myAce.style.textAlign = "center";
myAce.style.borderRadius = "10px";
myAce.style.border = "3px solid red";

const styl = document.createElement('style');
styl.innerHTML = '.mydiv { align-content: center; justify-content: center; wrap-content: 100%; }';
document.body.appendChild(styl);

const myDivHeader = document.createElement("div");
myDivHeader.id = "mydivheader";
myDivHeader.style.position = 'absolute';
myDivHeader.style.padding = "10px";
myDivHeader.style.cursor = "move";
myDivHeader.style.zIndex = "10";
myDivHeader.style.borderRadius = "10px";
myDivHeader.style.borderBottomRadius = "1px";
myDivHeader.style.backgroundColor = "black";
myDivHeader.style.color = "red";
myDivHeader.innerText = "ace editor";
myAce.appendChild(myDivHeader);

const b1 = document.createElement("button");
b1.style.border ='1px solid red';
b1.style.borderRadius ='2px';
b1.style.color ='solid red';
b1.style.height ='22px';
b1.style.width ='25px';
b1.style.top ='8px';
b1.style.bottom ='0px';
b1.style.left ='413px';
b1.style.right ='0px';
b1.style.color ='red';
b1.innerHTML ='X'
b1.onclick = cac;
b1.style.background ='black';
b1.style.position ='absolute';

myAce.appendChild(b1);

const b2 = document.createElement("button");
b2.style.border ='1px solid red';
b2.style.borderRadius ='2px';
b2.style.color ='solid red';
b2.style.height ='22px';
b2.style.width ='25px';
b2.style.top ='8px';
b2.style.bottom ='0px';
b2.style.left ='385px';
b2.style.right ='0px';
b2.style.color ='red';
b2.onclick = fac;
b2.innerHTML ='[]'
b2.style.background ='black';
b2.style.position ='absolute';

myAce.appendChild(b2);

const editorDiv = document.createElement("div");
editorDiv.id = "editor";
editorDiv.style.position = 'absolute';
editorDiv.style.zIndex = "10";
editorDiv.style.border = "2px solid red";
editorDiv.style.borderRadius = "5px";
editorDiv.style.width = "425px";
editorDiv.style.height = "300px";
editorDiv.style.top ='15px';
editorDiv.style.left ='-15px';
editorDiv.style.margin = "25px";
myAce.appendChild(editorDiv);

document.body.appendChild(myAce);


const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js";
document.body.appendChild(script);
script.onload = function () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
}

  function fac() {
            var embed = document.getElementById('editor');
            if (!document.fullscreenElement) {
                embed.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        }
        
    function cac()
    {
const element = document.getElementById("myace");
element.remove();
    }


function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
}

dragElement(myAce);
}






const opp = document.createElement('div');
opp.style.position ='fixed';
opp.className ='opp';
opp.style.left ='1%';
opp.style.top ='90%';
opp.style.background ='black';
opp.style.border ='2px solid red';
opp.style.borderRadius ='6px';
opp.style.width ='500px';
opp.style.height ='50px';


const styl1 = document.createElement('style');
styl1.innerHTML =`

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .myace{}

  /* Container for flexbox alignment */
  .opp {
    padding: 5px;
    display: flex;
    align-items: left;
    justify-content: left;
  }

  /* Button styles */
  .t1, .t2, .t3 {
    background: black;
    color: red;
    border: 2px solid red;
    border-radius: 5px;
  }

  /* Specific size for buttons */
  .t1 {
    wrap-content: 50%;
    left: 15%;
    position: absolute;
    width: auto;
  }

  .t2 {
    position: absolute;
    text-align: center;
    width: 100px;
  }

  .t3 {
    position: absolute;
    width: auto;
  }

  /* Responsive container */
  .appf1, .exef1 {
    position: fixed;
    overflow-y: auto;
    left: 1%;
    top: 30%;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    height: 400px;
  }

  .exetext1 {
    position: fixed;
    left: 2%;
    color: red;
    top: 33%;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 90%;
    max-width: 468px;
    height: 295px;
  }

  .exeb1 {
    position: fixed;
    left: 26%;
    color: red;
    top: 75%;
    text-align: center;
    font-size: 23px;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 90%;
    max-width: 105px;
    height: 25px;
  }

  .closeexe, .closeapp {
    position: fixed;
    left: 1%;
    top: 20%;
    z-index: 10;
    color: red;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 150px;
    height: 50px;
  }

  /* Options styling */
  .options1 {
    position: fixed;
    color: red;
    text-align: center;
    padding: 5px;
    left: 2%;
    top: 32%;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 115px;
    height: 100px;
  }

  .full {
    border: 1px solid red;
    border-radius: 2px;
    color: solid red;
    height: 22px;
    width: 25px;
    top: 8px;
    bottom: 0px;
    left: 385px;
    right: 0px;
    color: red;
    background: black;
    position: absolute;
  }

  .options2 {
    position: fixed;
    color: red;
    text-align: center;
    padding: 5px;
    left: 12%;
    top: 32%;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 115px;
    height: 100px;
  }

  .options3 {
    position: fixed;
    color: red;
    text-align: center;
    padding: 5px;
    left: 22%;
    top: 32%;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 115px;
    height: 100px;
  }

  /* Additional styles */
  .text1 {
    position: fixed;
    left: 2%;
    top: 32%;
    color: red;
  }

  .mydiv {
    align-content: center;
    justify-content: center;
    wrap-content: 100%;
  }

  .myhift1 {
    position: absolute;
    padding: 10px;
    cursor: move;
    z-index: 10;
    border-radius: 10px;
    border-bottom-radius: 1px;
    background-color: black;
    color: red;
  }

  .x31 {
    border: 1px solid red;
    border-radius: 2px;
    height: 22px;
    width: 25px;
    top: 8px;
    left: 413px;
    color: red;
    background: black;
    position: absolute;
  }

  .full {
    border: 1px solid red;
    border-radius: 2px;
    height: 22px;
    width: 25px;
    top: 8px;
    left: 385px;
    color: red;
    background: black;
    position: absolute;
  }
  
    .full2 {
    border: 1px solid red;
    border-radius: 2px;
    height: 22px;
    width: 25px;
    top: 8px;
    left: 355px;
    color: red;
    background: black;
    position: absolute;
  }

  .if1 {
    position: absolute;
    z-index: 10;
    height: 400px;
    width: 450px;
    background: black;
    text-align: center;
    border-radius: 10px;
    border: 3px solid red;
  }

  .mainb1 {
    position: absolute;
    z-index: 10;
    height: 400px;
    width: 450px;
    background: black;
    text-align: center;
    border-radius: 10px;
    border: 3px solid red;
  }

  .mainf1 {
    position: absolute;
    z-index: 10;
    border: 2px solid red;
    border-radius: 5px;
    width: 425px;
    height: 300px;
    top: 15px;
    left: -15px;
    margin: 25px;
  }

  .minimized {
    height: 35px;
    overflow: hidden;
   transtion:3s;
  }

  .minimized .mainf1 {
    display: none;
  transtion:3s;
  }

  .maximized {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0;
    transtion:3s:
  }

  .maximized .mainf1 {
    width: calc(100% - 50px);
    height: calc(100% - 60px);
    top: 0;
    left: 0;
    margin: 25px;
    transtion:3s;
  }

  .bf1 {
    border: 2px solid red;
    border-radius: 3px;
    background: black;
  }

  /* Cheat menu */
  .cheatmenu {
    flex-grow: auto;
    position: fixed;
    left: 36%;
    top: 30%;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
  /* Ensure responsive layout */
  @media screen and (max-width: 768px) {
    .appf1, .exef1, .options2 {
      width: 90%;
      height: auto;
    }

    .closeexe, .closeapp {
      width: 80%;
      height: auto;
    }
  }

`;
document.body.appendChild(styl1);




const t3 = document.createElement('p');
t3.className ='t3';
t3.innerText ='Executer';
t3.onclick = openexe;
opp.appendChild(t3);

const t1 = document.createElement('p');
t1.className ='t1';
t1.innerText ='Apps';
t1.onclick = openapps;
opp.appendChild(t1);

function rb(){
const cheatframe = document.createElement('div');
cheatframe.className ='cheatmenu';
cheatframe.id ='cheatframe';


const t2 = document.createElement('p');
t2.className ='t2';
t2.id ='t2';
t2.innerText ='Set CC';
t2.onclick = cc;
cheatframe.appendChild(t2);

document.body.appendChild(cheatframe);
}



function openexe(){
const exeframe = document.createElement('div');
exeframe.className ='exef1';
exeframe.id ='exeframe';
opp.appendChild(exeframe)

const textareae = document.createElement('textarea');
textareae.className ='exetext1';
textareae.placeholder =`Execute JavaScript Code Here!!!`;
textareae.id ='exetext1';
opp.appendChild(textareae);



const exeb1 = document.createElement('div');
exeb1.className ='exeb1';
exeb1.id ='exeb1';
exeb1.onclick = runexeb1;
exeb1.innerHTML = 'Run';
opp.appendChild(exeb1);

const closeappframe = document.createElement('button');
closeappframe.className ='closeapp';
closeappframe.innerHTML ='Close';
closeappframe.id ='closeappframe';
closeappframe.onclick = closeapps;
opp.appendChild(closeappframe);


}

function openapps(){

const appframe = document.createElement('div');
appframe.className = 'appf1';
appframe.id = 'appframe';


function createOption(className, id, text, onClick) {
  const option = document.createElement('div');
  option.className = className;
  option.id = id;
  option.innerHTML = text;
  option.onclick = onClick;
  appframe.appendChild(option);
}


createOption('options1', 'optionsframe', 'Ace Editor', aceapp);

createOption('options2', 'optionsframe2', 'iframe test', if1);

createOption('options3', 'optionsframe2', 'Exeploits', if3);




const closeappframe = document.createElement('button');
closeappframe.className = 'closeapp';
closeappframe.innerHTML = 'Close';
closeappframe.id = 'closeappframe';
closeappframe.onclick = closeapps;
appframe.appendChild(closeappframe);


document.body.appendChild(appframe);



}

function closeapps() {
    const appframeElement = document.getElementById('appframe');
    if (appframeElement) {
        appframeElement.remove();
    }
    const closeappframeElement = document.getElementById('closeappframe');
    if (closeappframeElement) {
        closeappframeElement.remove();
    }
        const optionsframeElement = document.getElementById('optionsframe');
    if (optionsframeElement) {
        optionsframeElement.remove();
    }
        const cheatframeElement = document.getElementById('cheatframe');
    if (cheatframeElement) {
        cheatframeElement.remove();
        
    }
        const t2frameElement = document.getElementById('t2');
    if (t2frameElement) {
        t2frameElement.remove();
    }
        const efframeElement = document.getElementById('exeframe');
    if (efframeElement) {
        efframeElement.remove();
        
    }
        const e1fframeElement = document.getElementById('exetext1');
    if (e1fframeElement) {
        e1fframeElement.remove();
        
    }
        const exeb1e1 = document.getElementById('exeb1');
     if (exeb1e1) {
     exeb1e1.remove();
     }
        const cf1 = document.getElementById('optionsframe2');
       if (cf1) {
      cf1.remove();
    }
}


document.body.appendChild(opp)
//


    
    const optionsframeElement = document.getElementById('optionsframe');
    if (optionsframeElement) {
        optionsframeElement.remove();
    }
    
    //meant for executing js code
    
    function runexeb1() {
    const exebcode = document.getElementById("exetext1").value;
    eval(exebcode);
}

    
    //retro bowl set cc
    function cc(){
      alert('soon');
    }
    
    
    


//apps
function if1(){



createIframeWindow("iframe1", "https://www.example1.com", "testframe");


}

function if2(){



createIframeWindow("iframe2", "https://www.example1.com", "testframe2");


}

 
function if3(){



createIframeWindow2("exeploits", "testframe2");

}
    
function  f12(){
  
}
    
  
    
    // Create app frame

       

/* General styles */



function createIframeWindow(id, src, name) {
  const ifWindow = document.createElement("div");
  ifWindow.id = id;
  ifWindow.className = "if1";

  
  const header = document.createElement("div");
  header.className = "myhift1";
  header.innerText = id;
  header.id = id + "header";
  ifWindow.appendChild(header);
  
  const iframe = document.createElement('iframe');
  iframe.className = 'mainf1';
  iframe.id = name;
  iframe.src = src;
  ifWindow.appendChild(iframe);


  const closeButton = document.createElement("button");
  closeButton.className = 'x31';
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    ifWindow.remove();
  };
  ifWindow.appendChild(closeButton);

  
  const minimizeButton = document.createElement("button");
  minimizeButton.className = 'full2';
  minimizeButton.innerHTML = '-';
  minimizeButton.onclick = function() {
    ifWindow.classList.toggle('minimized');
    ifWindow.classList.remove('maximized');
  };
  ifWindow.appendChild(minimizeButton);

  const maximizeButton = document.createElement("button");
  maximizeButton.className = 'full';
  maximizeButton.innerHTML = '[]';
  maximizeButton.onclick = function() {
   var embed = document.getElementById(name);
            if (!document.fullscreenElement) {
                embed.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
  };
  ifWindow.appendChild(maximizeButton);

  document.body.appendChild(ifWindow);

  dragElement(ifWindow);
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    const header = document.getElementById(elmnt.id + "header");
    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
}




function createIframeWindow2(id, name) {
  const ifWindow = document.createElement("div");
  ifWindow.id = id;
  ifWindow.className = "if1";

  
  const header = document.createElement("div");
  header.className = "myhift1";
  header.innerText = id;
  header.id = id + "header";
  ifWindow.appendChild(header);
  

  
  const closeButton = document.createElement("button");
  closeButton.className = 'x31';
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    ifWindow.remove();
  };
  ifWindow.appendChild(closeButton);

  
  const minimizeButton = document.createElement("button");
  minimizeButton.className = 'full2';
  minimizeButton.innerHTML = '-';
  minimizeButton.onclick = function() {
    ifWindow.classList.toggle('minimized');
    ifWindow.classList.remove('maximized');
  };
  ifWindow.appendChild(minimizeButton);

  const maximizeButton = document.createElement("button");
  maximizeButton.className = 'full';
  maximizeButton.innerHTML = '[]';
  maximizeButton.onclick = function() {
   var embed = document.getElementById(name);
            if (!document.fullscreenElement) {
                embed.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
  };
  ifWindow.appendChild(maximizeButton);

  document.body.appendChild(ifWindow);

  dragElement(ifWindow);
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    const header = document.getElementById(elmnt.id + "header");
    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
}




  
