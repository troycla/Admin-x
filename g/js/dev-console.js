



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
    opp.style.position = 'absolute';
    opp.id = 'oppf1';
    opp.className = 'opp';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'btn-toggle';
    
    toggleButton.onclick = function() {
        if (opp.classList.contains('maximized2')) {
            opp.classList.remove('maximized2');
             removeElement();
              removece1();
        } else {
            opp.classList.add('maximized2');
        }
    };

    opp.appendChild(toggleButton);
    
 
    

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options12';
    
    
    
    
    const option1 = document.createElement('img');
    option1.className = 'option2';
    option1.id ='s23';

    option1.src = 'img/exe.png';
    option1.onclick = toggle;
      
    optionsContainer.appendChild(option1);

    const option2 = document.createElement('div');
    option2.className = 'option';
    option2.id ='ce24';
    option2.innerHTML = '.EXE';
    option2.onclick = toggle1;
    optionsContainer.appendChild(option2);

    const option3 = document.createElement('div');
    option3.className = 'option';
    option3.innerHTML = 'Option 3';
    optionsContainer.appendChild(option3);

    opp.appendChild(optionsContainer);
    document.body.appendChild(opp);


    let isActive = false;

    function toggle() {
      const button = document.getElementById('s23');
      isActive = !isActive;

      if (isActive) {
    
        createElement();
         removece1();
      } else {
        removeElement();
        removece1();
      }
    }

    function createElement() {
       const div1 = document.createElement('div');
      div1.className ='jsexe';
      div1.id ='e2123';
      const textareae = document.createElement('textarea');
textareae.className ='exetext1';
textareae.placeholder =`Execute JavaScript Code Here!!!`;
textareae.id ='exetext1';
div1.appendChild(textareae);
      document.body.appendChild(div1);
      
      const runbutton = document.createElement('button');
      runbutton.className ='jsbutton';
      runbutton.innerHTML ='Run';
      runbutton.id ='e25';
      runbutton.onclick =runexeb1;
      document.body.appendChild(runbutton);
      
    const blurrbox = document.createElement('div');
    blurrbox.id ='blurrbox';
    blurrbox.className ='blurrbox';
    document.body.appendChild(blurrbox);
    }

    function removeElement() {
      const element1 = document.getElementById('e2123');
      const element2 = document.getElementById('e25');
      
      const element3 = document.getElementById('blurrbox');
      if (element1) {
        document.body.removeChild(element1);
      }
      if (element2){
        document.body.removeChild(element2);
      }
      if (element3){
        document.body.removeChild(element3);
      }
    }



    let isActive1 = false;

    function toggle1() {
      const button = document.getElementById('ce24');
      isActive1 = !isActive1;

      if (isActive1) {
    
        createce1();
        removeElement();
      } else {
        
        removece1();
        removeElement();
      }
    }


    function createce1() {
    
    const blurrbox2 = document.createElement('div');
    blurrbox2.id ='blurrbox2';
    blurrbox2.className ='blurrbox2';
    
    const rce = document.createElement('div');
    rce.className ='cheatmenuv3';
    rce.innerHTML ='retro bowl';
    rce.id ='cfa1';
    
    const cc = document.createElement('div')
    cc.className ='rbcheatb';
    cc.innerHTML ='Set CC';
    cc.onclick = setcc;
    rce.appendChild(cc);
    
    function setcc(){
     if (localStorage.getItem("RetroBowl.0.savedata.ini")) {
    let z = ("What is the number of Coaching Credits That You have");
    let x = prompt("What is the number of Coaching Credits you want to set it to");
    localStorage.setItem("RetroBowl.0.savedata.ini", localStorage.getItem("RetroBowl.0.savedata.ini").replace(`coach_credit="${z}"`, `coach_credit="${x}"`));
    window.location = window.location;
} else {
    alert("you must open up a new game save first!");
}
    }
    
    document.body.appendChild(rce)
    
     const rce1 = document.createElement('div');
    rce1.className ='cheatmenuv4';
    rce1.innerHTML ='Blooket';
    rce1.id ='cfa';
    
     const cc2 = document.createElement('div')
    cc2.className ='rbcheatb';
    cc2.innerHTML ='Swap Gold Quest';
    cc2.onclick = swapg;
    rce1.appendChild(cc2);
    
    function swapg(){
    (() => {
   const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
            stateNode.setState({
                players: (players ? Object.entries(players).map(([name, { b, g }]) => ({
                    name, blook: b, gold: g || 0
               })).filter((e) => e.name != stateNode.props.client.name).sort(({ gold }, { gold: gold2 }) => gold2 - gold) : []),
                ready: true,
                phaseTwo: true,
                stage: "prize",
                choiceObj: { type: "swap" }
            });
        });
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/gold/swapGold.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);
        if (parseInt(time) <= 1693429947480 || iframe.contentWindow.confirm(error))cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();
      
    }
    document.body.appendChild(rce1);
  
    
    
    document.body.appendChild(rce)
      

    document.body.appendChild(blurrbox2);
    }

    function removece1() {
     
      const ec1 = document.getElementById('blurrbox2');
      const ec2 = document.getElementById('cfa');
      const ec3 = document.getElementById('cfa1');
      
    
      if (ec1) {
        document.body.removeChild(ec1);
      }
      if (ec2) {
        document.body.removeChild(ec2);
      }
      if (ec3) {
        document.body.removeChild(ec3);
      }
    }





const styl1 = document.createElement('style');
styl1.innerHTML =`

  body {
   
  }
  
     .cheatmenuv4 {
            
            width: 215px;
            height:300px;
            z-index:10;
            
                    display: grid; grid-template-columns: repeat(1, 1fr); /* Create four columns */ gap: 5px; /* Add space between the grid items */

          
            position: absolute;
            background: black;
            border:2px solid red;
            border-radius:6px;
            color: red;
            opacity:100%;
            left:30%;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:30px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
    .rbcheatb {
          
            width: 100px;
            height:20px;
            z-index:10;
            
          top:10%;
          
            position: absolute;
            background: black;
            border:2px solid red;
            border-radius:6px;
            color: red;
            opacity:100%;
            
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:20px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
  .cheatmenuv3 {
            
            width: 215px;
            height:300px;
            z-index:10;
            
                    display: grid; grid-template-columns: repeat(1, 1fr); /* Create four columns */ gap: 5px; /* Add space between the grid items */

          
            position: absolute;
            background: black;
            border:2px solid red;
            border-radius:6px;
            color: red;
            opacity:100%;
            left:9%;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:30px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
    .blurrbox2 {
    
          display: grid; grid-template-columns: repeat(4, 1fr); /* Create four columns */ gap: 18px; /* Add space between the grid items */
            width: 100%;
            height: 100%;
            z-index:9;
            bottom: 0;
            left:0;
    
            opacity:70%;
            position: absolute;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:45px;
            aling-content:left;
          
          
        }
  
  .blurrbox {
  
            width: 100%;
            height: 100%;
            z-index:9;
            bottom: 0;
            left:0;
            opacity:30%;
            position: absolute;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:45px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
  .jsbutton {
      z-index:10;
            width: 500px;
            height: 50px;
            bottom: 6%;
            left: 20%;
            position: absolute;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:45px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
.jsexe {
    z-index:10;
            width: 1000px;
            height:560px;
            bottom: 15%;
            left: 7%;
            position: absolute;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

 .opp {
     z-index:10;
            width: 50px;
            height: 50px;
            bottom: 0;
            left: 0;
            position: absolute;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        .maximized2 {
            z-index:10;
            width: 65px;
            height: 100%;
            transition: all 0.3s ease-in-out;
        }

        .btn-toggle {
            z-index:10;
            overflow: auto;
            background: black;
            color: red;
            border: none;
            transition: all 0.3s ease-in-out;
            position: absolute;
            bottom: 1px;
            font-size:50px;
            right: 5px;
            cursor: pointer;
        }

        .btn-toggle::after {
            z-index:10;
            content: '+';
        }

        .maximized2 .btn-toggle::after {
            z-index:10;
            content: '-';
        }

        .options12 {
            z-index:10;
            display: none;
            width: 100%;
        }

        .maximized2 .options12 {
            z-index:10;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            transition:3s;
        }

        .option {
            z-index:10;
            padding: 5px;
            margin: 5px;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            text-align: center;
            width: 46px;
            height: 46px;
            
        }
 .option2 {
     z-index:10;
            padding: 5px;
            margin: 5px;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            
            text-align: center;
            width: 46px;
            height: 46px;
            font:bold;
            font-size:16px;
        }

  /* Button styles */
  .t1, .t2, .t3, .t5, .t6 {
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
  .t5{
    overflow-y:auto;
    position:fixed;
    top:10%;
    left: 2%;
    position: absolute;
    width: auto;
  }
  
    .t6{
    overflow-y:auto;
    position:fixed;
    top:18%;
    left: 20%;
    overflow: auto;
    position: absolute;
    width: 250px;
    margin: 2px; /* Adds space between elements */
  }

  /* Responsive container */
  .appf1, .exef1 {
    position: absolute;
    overflow-y: auto;
    
    left: 1%;
    top: 30%;
    background: black;
    border: 4px solid red;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    height: 400px;
  }
.appf1{
  display: grid; grid-template-columns: repeat(4, 1fr); /* Create four columns */ gap: 1px; /* Add space between the grid items */
}
  .exetext1 {
    position: absolute;
    left: 2%;
    color: red;
    display:flex;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 950px;
   
    height: 500px;
  }

  .exeb1 {
    position: absolute;
    left: 75%;
    color: red;
    top: 86%;
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
    position: absolute;
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
.options1 { color: red; text-align: center; background: black; border: 3px solid red;  overflow: auto; border-radius: 5px; width: 115px; height: 100px; margin: 2px; /* Adds space between elements */ }

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
   width:420px;
    position: absolute;
    padding: 10px;
    cursor: move;
    z-index: 9;
    border-radius: 10px;
    border-bottom-radius: 1px;
    background: black;
    color: red;
    overflow: hidden; /* Hides any overflowing content */
      display: grid; grid-template-columns: repeat(7, 1fr); /* Create four columns */ gap: 1px; /* Add space between the grid items */
}


  .x31 {
      z-index: 10;
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
      z-index: 10;
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
  
      .full1 {
          z-index: 10;
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
  
  .if2 {
    position: absolute;
    z-index: 10;
    height: 400px;
    width: 450px;
    background: black;
    text-align: center;
    border-radius: 10px;
    border: 3px solid red;
  }
  
  
    .mainb2 {
    position: absolute;
    z-index: 10;
    height: 400px;
    width: 450px;
    background: black;
    text-align: center;
    border-radius: 10px;
    border: 3px solid red;
  }

  .mainf2 {
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

 .myhift2 {
   display: grid; grid-template-columns: repeat(1, 1fr); /* Create four columns */ gap: 1px; /* Add space between the grid items */
    position: absolute;
    padding: 9px;
    cursor: move;
    z-index: 10;
    width:420px;
    text-align:left;
    border-radius: 10px;
    border-bottom-radius: 1px;
    background: black;
    color: red;
  }

  .x32 {
      z-index: 10;
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

  .full2 {
      z-index: 10;
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
  
    .full3 {
        z-index: 10;
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

    .full4 {
        z-index: 10;
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
  
    .minimized1 {
    height: 35px;
    overflow: hidden;
   transtion:3s;
  }
  
  .maximized1 {
  overflow: hidden;
    width: 1%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0;
    transtion:3s:
  }
  
    .maximized1 .opp {
    width: calc(100% - 50px);
    height: calc(100% - 60px);
    top: 0;
    overflow: hidden;
    left: 0;
    margin: 25px;
    transtion:3s;
  }

    .minimized1 .opp {
    display: none;
    overflow: hidden;
  transtion:3s;
  }

  .minimized .mainf1 {
    display: none;
    overflow: hidden;
  transtion:3s;
  }

  .maximized {
  overflow: hidden;
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
    overflow: hidden;
    left: 0;
    margin: 25px;
    transtion:3s;
  }

  .bf1 {
  overflow: hidden;
      z-index: 10;
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


const textareae = document.createElement('textarea');
textareae.className ='exetext1';
textareae.placeholder =`Execute JavaScript Code Here!!!`;
textareae.id ='exetext1';
exeframe.appendChild(textareae);



const exeb1 = document.createElement('div');
exeb1.className ='exeb1';
exeb1.id ='exeb1';
exeb1.onclick = runexeb1;
exeb1.innerHTML = 'Run';
exeframe.appendChild(exeb1);

document.body.appendChild(exeframe)

const closeappframe = document.createElement('button');
closeappframe.className ='closeapp';
closeappframe.innerHTML ='Close';
closeappframe.id ='closeappframe';
closeappframe.onclick = closeapps;

document.body.appendChild(closeappframe);




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


createOption('options1', 'optionsframe2', 'iframe test', if1);
 


createOption('options1', 'optionsframe3', 'Games', if2);
 


createOption('options1', 'optionsframe4', 'Exeploits', if3);



document.body.appendChild(appframe);



const closeappframe = document.createElement('button');
closeappframe.className = 'closeapp';
closeappframe.innerHTML = 'Close';
closeappframe.id = 'closeappframe';
closeappframe.onclick = closeapps;
document.body.appendChild(closeappframe);




}

function runb12(){
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const url = window.prompt('input a url');

async function fetchPageInfo(url) {
  try {
    const response = await fetch(corsProxy + url, {
      headers: {
        'Origin': 'https://cors-anywhere.herokuapp.com/'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const htmlContent = doc.documentElement.innerHTML;

    const iframe = document.createElement('div');
    iframe.innerHTML = htmlContent;
    document.body.appendChild(iframe);

    // Adding click event listeners to all links
    const links = iframe.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', async (event) => {
        event.preventDefault();
        const newUrl = link.href;
        await fetchPageInfo(newUrl);
      });
    });
  } catch (error) {
    console.error('Error fetching the page:', error);
    const errorElement = document.createElement('p');
    errorElement.innerText = `Error fetching the page: ${error.message}`;
    document.body.appendChild(errorElement);
  }
}

// Example usage
fetchPageInfo(url);

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



createIframeWindow("Admin-x", "Testframe","https://revo13.zapto.org/", "testframe");


}

function if2(){



createIframeWindow("Games", "Games1","https://revo13.zapto.org/g/games.html", "Games");


}

 
function if3(){



createCFW("exeploits", "testframe2");
createManualButton('exeploits', f12)
}
    
function f12(){
createCFW('Retro Bowl', 'Reto Bowl');
createcb('Retro Bowl', setcc)
}
    
function setcc(){
  alert('setcc not ready yet');
}
    
function ca1(info){
 alert(info);
}




function createIframeWindow(id, name2, src, name) {
  const ifWindow = document.createElement("div");
  ifWindow.id = name;
  ifWindow.className = "if1";

  
  const header = document.createElement("div");
  header.className = "myhift1";
  header.innerText = id;
  header.id = name + "header";
  ifWindow.appendChild(header);
  
  const iframe = document.createElement('iframe');
  iframe.className = 'mainf1';
  iframe.id = name2;
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
  minimizeButton.className = 'full3';
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
   var embed = document.getElementById(name2);
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
  ifWindow.className = "if2";

  const header = document.createElement("div");
  header.className = "myhift2";
  header.innerText = id;
  header.id = id + "header";
  ifWindow.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.className = 'x32';
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    ifWindow.remove();
  };
  ifWindow.appendChild(closeButton);

  const minimizeButton = document.createElement("button");
  minimizeButton.className = 'full3';
  minimizeButton.innerHTML = '-';
  minimizeButton.onclick = function() {
    ifWindow.classList.toggle('minimized');
    ifWindow.classList.remove('maximized');
  };
  ifWindow.appendChild(minimizeButton);

  const maximizeButton = document.createElement("button");
  maximizeButton.className = 'full2';
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

  // Add button container for manual button addition
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  ifWindow.appendChild(buttonContainer);

  document.body.appendChild(ifWindow);
  
  dragElement(ifWindow);
}


function createManualButton(containerId, onclick) {
  const container = document.getElementById(containerId);

  if (container) {
    const newButton = document.createElement("button");
    newButton.className = 't5';
    newButton.innerHTML = 'retro bowl';
    newButton.onclick = onclick;
    container.appendChild(newButton);
  } else {
    console.error(`Container with ID ${containerId} not found.`);
  }
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


function createCFW(id, name) {
  const ifWindow = document.createElement("div");
  ifWindow.id = id;
  ifWindow.className = "if2";

  const header = document.createElement("div");
  header.className = "myhift2";
  header.innerText = id;
  header.id = id + "header";
  ifWindow.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.className = 'x32';
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    ifWindow.remove();
  };
  ifWindow.appendChild(closeButton);

  const minimizeButton = document.createElement("button");
  minimizeButton.className = 'full4';
  minimizeButton.innerHTML = '-';
  minimizeButton.onclick = function() {
    ifWindow.classList.toggle('minimized');
    ifWindow.classList.remove('maximized');
  };
  ifWindow.appendChild(minimizeButton);

  // Add button container for manual button addition
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  ifWindow.appendChild(buttonContainer);

  document.body.appendChild(ifWindow);
  
  dragElement(ifWindow);
}


function createcb(containerId, onclick) {
  const container = document.getElementById(containerId);

  if (container) {
    const newButton = document.createElement("button");
    newButton.className = 't6';
    newButton.innerHTML = 'Set CC';
    newButton.onclick = onclick;
    container.appendChild(newButton);
  } else {
    console.error(`Container with ID ${containerId} not found.`);
  }
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
    opp.style.position = 'absolute';
    opp.id = 'oppf1';
    opp.className = 'opp';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'btn-toggle';
    
    toggleButton.onclick = function() {
        if (opp.classList.contains('maximized2')) {
            opp.classList.remove('maximized2');
             removeElement();
              removece1();
        } else {
            opp.classList.add('maximized2');
        }
    };

    opp.appendChild(toggleButton);
    
 
    

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options12';
    
    
    
    
    const option1 = document.createElement('img');
    option1.className = 'option2';
    option1.id ='s23';

    option1.src = 'img/exe.png';
    option1.onclick = toggle;
      
    optionsContainer.appendChild(option1);

    const option2 = document.createElement('div');
    option2.className = 'option';
    option2.id ='ce24';
    option2.innerHTML = '.EXE';
    option2.onclick = toggle1;
    optionsContainer.appendChild(option2);

    const option3 = document.createElement('div');
    option3.className = 'option';
    option3.innerHTML = 'Option 3';
    optionsContainer.appendChild(option3);

    opp.appendChild(optionsContainer);
    document.body.appendChild(opp);


    let isActive = false;

    function toggle() {
      const button = document.getElementById('s23');
      isActive = !isActive;

      if (isActive) {
    
        createElement();
         removece1();
      } else {
        removeElement();
        removece1();
      }
    }

    function createElement() {
       const div1 = document.createElement('div');
      div1.className ='jsexe';
      div1.id ='e2123';
      const textareae = document.createElement('textarea');
textareae.className ='exetext1';
textareae.placeholder =`Execute JavaScript Code Here!!!`;
textareae.id ='exetext1';
div1.appendChild(textareae);
      document.body.appendChild(div1);
      
      const runbutton = document.createElement('button');
      runbutton.className ='jsbutton';
      runbutton.innerHTML ='Run';
      runbutton.id ='e25';
      runbutton.onclick =runexeb1;
      document.body.appendChild(runbutton);
      
    const blurrbox = document.createElement('div');
    blurrbox.id ='blurrbox';
    blurrbox.className ='blurrbox';
    document.body.appendChild(blurrbox);
    }

    function removeElement() {
      const element1 = document.getElementById('e2123');
      const element2 = document.getElementById('e25');
      
      const element3 = document.getElementById('blurrbox');
      if (element1) {
        document.body.removeChild(element1);
      }
      if (element2){
        document.body.removeChild(element2);
      }
      if (element3){
        document.body.removeChild(element3);
      }
    }



    let isActive1 = false;

    function toggle1() {
      const button = document.getElementById('ce24');
      isActive1 = !isActive1;

      if (isActive1) {
    
        createce1();
        removeElement();
      } else {
        
        removece1();
        removeElement();
      }
    }


    function createce1() {
    
    const blurrbox2 = document.createElement('div');
    blurrbox2.id ='blurrbox2';
    blurrbox2.className ='blurrbox2';
    
    const rce = document.createElement('div');
    rce.className ='cheatmenuv3';
    rce.innerHTML ='retro bowl';
    rce.id ='cfa1';
    
    const cc = document.createElement('div')
    cc.className ='rbcheatb';
    cc.innerHTML ='Set CC';
    cc.onclick = setcc;
    rce.appendChild(cc);
    
    function setcc(){
     if (localStorage.getItem("RetroBowl.0.savedata.ini")) {
    let z = ("What is the number of Coaching Credits That You have");
    let x = prompt("What is the number of Coaching Credits you want to set it to");
    localStorage.setItem("RetroBowl.0.savedata.ini", localStorage.getItem("RetroBowl.0.savedata.ini").replace(`coach_credit="${z}"`, `coach_credit="${x}"`));
    window.location = window.location;
} else {
    alert("you must open up a new game save first!");
}
    }
    
    document.body.appendChild(rce)
    
     const rce1 = document.createElement('div');
    rce1.className ='cheatmenuv4';
    rce1.innerHTML ='Blooket';
    rce1.id ='cfa';
    
     const cc2 = document.createElement('div')
    cc2.className ='rbcheatb';
    cc2.innerHTML ='Swap Gold Quest';
    cc2.onclick = swapg;
    rce1.appendChild(cc2);
    
    function swapg(){
    (() => {
   const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
            stateNode.setState({
                players: (players ? Object.entries(players).map(([name, { b, g }]) => ({
                    name, blook: b, gold: g || 0
               })).filter((e) => e.name != stateNode.props.client.name).sort(({ gold }, { gold: gold2 }) => gold2 - gold) : []),
                ready: true,
                phaseTwo: true,
                stage: "prize",
                choiceObj: { type: "swap" }
            });
        });
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/gold/swapGold.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);
        if (parseInt(time) <= 1693429947480 || iframe.contentWindow.confirm(error))cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();
      
    }
    document.body.appendChild(rce1);
  
    
    
    document.body.appendChild(rce)
      

    document.body.appendChild(blurrbox2);
    }

    function removece1() {
     
      const ec1 = document.getElementById('blurrbox2');
      const ec2 = document.getElementById('cfa');
      const ec3 = document.getElementById('cfa1');
      
    
      if (ec1) {
        document.body.removeChild(ec1);
      }
      if (ec2) {
        document.body.removeChild(ec2);
      }
      if (ec3) {
        document.body.removeChild(ec3);
      }
    }





const styl1 = document.createElement('style');
styl1.innerHTML =`

  body {
   
  }
  
     .cheatmenuv4 {
            
            width: 215px;
            height:300px;
            z-index:10;
            
                    display: grid; grid-template-columns: repeat(1, 1fr); /* Create four columns */ gap: 5px; /* Add space between the grid items */

          
            position: absolute;
            background: black;
            border:2px solid red;
            border-radius:6px;
            color: red;
            opacity:100%;
            left:30%;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:30px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
    .rbcheatb {
          
            width: 100px;
            height:20px;
            z-index:10;
            
          top:10%;
          
            position: absolute;
            background: black;
            border:2px solid red;
            border-radius:6px;
            color: red;
            opacity:100%;
            
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:20px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
  .cheatmenuv3 {
            
            width: 215px;
            height:300px;
            z-index:10;
            
                    display: grid; grid-template-columns: repeat(1, 1fr); /* Create four columns */ gap: 5px; /* Add space between the grid items */

          
            position: absolute;
            background: black;
            border:2px solid red;
            border-radius:6px;
            color: red;
            opacity:100%;
            left:9%;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:30px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
    .blurrbox2 {
    
          display: grid; grid-template-columns: repeat(4, 1fr); /* Create four columns */ gap: 18px; /* Add space between the grid items */
            width: 100%;
            height: 100%;
            z-index:9;
            bottom: 0;
            left:0;
    
            opacity:70%;
            position: absolute;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:45px;
            aling-content:left;
          
          
        }
  
  .blurrbox {
  
            width: 100%;
            height: 100%;
            z-index:9;
            bottom: 0;
            left:0;
            opacity:30%;
            position: absolute;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:45px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
  
  .jsbutton {
      z-index:10;
            width: 500px;
            height: 50px;
            bottom: 6%;
            left: 20%;
            position: absolute;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            font-size:45px;
           justify-content:center;
           aling-content:center;
           text-align:center;
          
        }
.jsexe {
    z-index:10;
            width: 1000px;
            height:560px;
            bottom: 15%;
            left: 7%;
            position: absolute;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

 .opp {
     z-index:10;
            width: 50px;
            height: 50px;
            bottom: 0;
            left: 0;
            position: absolute;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        .maximized2 {
            z-index:10;
            width: 65px;
            height: 100%;
            transition: all 0.3s ease-in-out;
        }

        .btn-toggle {
            z-index:10;
            overflow: auto;
            background: black;
            color: red;
            border: none;
            transition: all 0.3s ease-in-out;
            position: absolute;
            bottom: 1px;
            font-size:50px;
            right: 5px;
            cursor: pointer;
        }

        .btn-toggle::after {
            z-index:10;
            content: '+';
        }

        .maximized2 .btn-toggle::after {
            z-index:10;
            content: '-';
        }

        .options12 {
            z-index:10;
            display: none;
            width: 100%;
        }

        .maximized2 .options12 {
            z-index:10;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            transition:3s;
        }

        .option {
            z-index:10;
            padding: 5px;
            margin: 5px;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            text-align: center;
            width: 46px;
            height: 46px;
            
        }
 .option2 {
     z-index:10;
            padding: 5px;
            margin: 5px;
            border: 2px solid red;
            border-radius: 6px;
            background: black;
            color: red;
            
            text-align: center;
            width: 46px;
            height: 46px;
            font:bold;
            font-size:16px;
        }

  /* Button styles */
  .t1, .t2, .t3, .t5, .t6 {
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
  .t5{
    overflow-y:auto;
    position:fixed;
    top:10%;
    left: 2%;
    position: absolute;
    width: auto;
  }
  
    .t6{
    overflow-y:auto;
    position:fixed;
    top:18%;
    left: 20%;
    overflow: auto;
    position: absolute;
    width: 250px;
    margin: 2px; /* Adds space between elements */
  }

  /* Responsive container */
  .appf1, .exef1 {
    position: absolute;
    overflow-y: auto;
    
    left: 1%;
    top: 30%;
    background: black;
    border: 4px solid red;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    height: 400px;
  }
.appf1{
  display: grid; grid-template-columns: repeat(4, 1fr); /* Create four columns */ gap: 1px; /* Add space between the grid items */
}
  .exetext1 {
    position: absolute;
    left: 2%;
    color: red;
    display:flex;
    background: black;
    border: 2px solid red;
    border-radius: 5px;
    width: 950px;
   
    height: 500px;
  }

  .exeb1 {
    position: absolute;
    left: 75%;
    color: red;
    top: 86%;
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
    position: absolute;
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
.options1 { color: red; text-align: center; background: black; border: 3px solid red;  overflow: auto; border-radius: 5px; width: 115px; height: 100px; margin: 2px; /* Adds space between elements */ }

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
   width:420px;
    position: absolute;
    padding: 10px;
    cursor: move;
    z-index: 9;
    border-radius: 10px;
    border-bottom-radius: 1px;
    background: black;
    color: red;
    overflow: hidden; /* Hides any overflowing content */
      display: grid; grid-template-columns: repeat(7, 1fr); /* Create four columns */ gap: 1px; /* Add space between the grid items */
}


  .x31 {
      z-index: 10;
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
      z-index: 10;
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
  
      .full1 {
          z-index: 10;
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
  
  .if2 {
    position: absolute;
    z-index: 10;
    height: 400px;
    width: 450px;
    background: black;
    text-align: center;
    border-radius: 10px;
    border: 3px solid red;
  }
  
  
    .mainb2 {
    position: absolute;
    z-index: 10;
    height: 400px;
    width: 450px;
    background: black;
    text-align: center;
    border-radius: 10px;
    border: 3px solid red;
  }

  .mainf2 {
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

 .myhift2 {
   display: grid; grid-template-columns: repeat(1, 1fr); /* Create four columns */ gap: 1px; /* Add space between the grid items */
    position: absolute;
    padding: 9px;
    cursor: move;
    z-index: 10;
    width:420px;
    text-align:left;
    border-radius: 10px;
    border-bottom-radius: 1px;
    background: black;
    color: red;
  }

  .x32 {
      z-index: 10;
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

  .full2 {
      z-index: 10;
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
  
    .full3 {
        z-index: 10;
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

    .full4 {
        z-index: 10;
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
  
    .minimized1 {
    height: 35px;
    overflow: hidden;
   transtion:3s;
  }
  
  .maximized1 {
  overflow: hidden;
    width: 1%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0;
    transtion:3s:
  }
  
    .maximized1 .opp {
    width: calc(100% - 50px);
    height: calc(100% - 60px);
    top: 0;
    overflow: hidden;
    left: 0;
    margin: 25px;
    transtion:3s;
  }

    .minimized1 .opp {
    display: none;
    overflow: hidden;
  transtion:3s;
  }

  .minimized .mainf1 {
    display: none;
    overflow: hidden;
  transtion:3s;
  }

  .maximized {
  overflow: hidden;
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
    overflow: hidden;
    left: 0;
    margin: 25px;
    transtion:3s;
  }

  .bf1 {
  overflow: hidden;
      z-index: 10;
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


const textareae = document.createElement('textarea');
textareae.className ='exetext1';
textareae.placeholder =`Execute JavaScript Code Here!!!`;
textareae.id ='exetext1';
exeframe.appendChild(textareae);



const exeb1 = document.createElement('div');
exeb1.className ='exeb1';
exeb1.id ='exeb1';
exeb1.onclick = runexeb1;
exeb1.innerHTML = 'Run';
exeframe.appendChild(exeb1);

document.body.appendChild(exeframe)

const closeappframe = document.createElement('button');
closeappframe.className ='closeapp';
closeappframe.innerHTML ='Close';
closeappframe.id ='closeappframe';
closeappframe.onclick = closeapps;

document.body.appendChild(closeappframe);




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


createOption('options1', 'optionsframe2', 'iframe test', if1);
 


createOption('options1', 'optionsframe3', 'Games', if2);
 


createOption('options1', 'optionsframe4', 'Exeploits', if3);



document.body.appendChild(appframe);



const closeappframe = document.createElement('button');
closeappframe.className = 'closeapp';
closeappframe.innerHTML = 'Close';
closeappframe.id = 'closeappframe';
closeappframe.onclick = closeapps;
document.body.appendChild(closeappframe);




}

function runb12(){
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const url = window.prompt('input a url');

async function fetchPageInfo(url) {
  try {
    const response = await fetch(corsProxy + url, {
      headers: {
        'Origin': 'https://cors-anywhere.herokuapp.com/'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const htmlContent = doc.documentElement.innerHTML;

    const iframe = document.createElement('div');
    iframe.innerHTML = htmlContent;
    document.body.appendChild(iframe);

    // Adding click event listeners to all links
    const links = iframe.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', async (event) => {
        event.preventDefault();
        const newUrl = link.href;
        await fetchPageInfo(newUrl);
      });
    });
  } catch (error) {
    console.error('Error fetching the page:', error);
    const errorElement = document.createElement('p');
    errorElement.innerText = `Error fetching the page: ${error.message}`;
    document.body.appendChild(errorElement);
  }
}

// Example usage
fetchPageInfo(url);

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



createIframeWindow("Admin-x", "Testframe","https://revo13.zapto.org/", "testframe");


}

function if2(){



createIframeWindow("Games", "Games1","https://revo13.zapto.org/g/games.html", "Games");


}

 
function if3(){



createCFW("exeploits", "testframe2");
createManualButton('exeploits', f12)
}
    
function f12(){
createCFW('Retro Bowl', 'Reto Bowl');
createcb('Retro Bowl', setcc)
}
    
function setcc(){
  alert('setcc not ready yet');
}
    
function ca1(info){
 alert(info);
}




function createIframeWindow(id, name2, src, name) {
  const ifWindow = document.createElement("div");
  ifWindow.id = name;
  ifWindow.className = "if1";

  
  const header = document.createElement("div");
  header.className = "myhift1";
  header.innerText = id;
  header.id = name + "header";
  ifWindow.appendChild(header);
  
  const iframe = document.createElement('iframe');
  iframe.className = 'mainf1';
  iframe.id = name2;
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
  minimizeButton.className = 'full3';
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
   var embed = document.getElementById(name2);
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
  ifWindow.className = "if2";

  const header = document.createElement("div");
  header.className = "myhift2";
  header.innerText = id;
  header.id = id + "header";
  ifWindow.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.className = 'x32';
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    ifWindow.remove();
  };
  ifWindow.appendChild(closeButton);

  const minimizeButton = document.createElement("button");
  minimizeButton.className = 'full3';
  minimizeButton.innerHTML = '-';
  minimizeButton.onclick = function() {
    ifWindow.classList.toggle('minimized');
    ifWindow.classList.remove('maximized');
  };
  ifWindow.appendChild(minimizeButton);

  const maximizeButton = document.createElement("button");
  maximizeButton.className = 'full2';
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

  // Add button container for manual button addition
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  ifWindow.appendChild(buttonContainer);

  document.body.appendChild(ifWindow);
  
  dragElement(ifWindow);
}


function createManualButton(containerId, onclick) {
  const container = document.getElementById(containerId);

  if (container) {
    const newButton = document.createElement("button");
    newButton.className = 't5';
    newButton.innerHTML = 'retro bowl';
    newButton.onclick = onclick;
    container.appendChild(newButton);
  } else {
    console.error(`Container with ID ${containerId} not found.`);
  }
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


function createCFW(id, name) {
  const ifWindow = document.createElement("div");
  ifWindow.id = id;
  ifWindow.className = "if2";

  const header = document.createElement("div");
  header.className = "myhift2";
  header.innerText = id;
  header.id = id + "header";
  ifWindow.appendChild(header);

  const closeButton = document.createElement("button");
  closeButton.className = 'x32';
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    ifWindow.remove();
  };
  ifWindow.appendChild(closeButton);

  const minimizeButton = document.createElement("button");
  minimizeButton.className = 'full4';
  minimizeButton.innerHTML = '-';
  minimizeButton.onclick = function() {
    ifWindow.classList.toggle('minimized');
    ifWindow.classList.remove('maximized');
  };
  ifWindow.appendChild(minimizeButton);

  // Add button container for manual button addition
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  ifWindow.appendChild(buttonContainer);

  document.body.appendChild(ifWindow);
  
  dragElement(ifWindow);
}


function createcb(containerId, onclick) {
  const container = document.getElementById(containerId);

  if (container) {
    const newButton = document.createElement("button");
    newButton.className = 't6';
    newButton.innerHTML = 'Set CC';
    newButton.onclick = onclick;
    container.appendChild(newButton);
  } else {
    console.error(`Container with ID ${containerId} not found.`);
  }
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

