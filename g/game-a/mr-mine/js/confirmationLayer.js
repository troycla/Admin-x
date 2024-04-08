class ConfirmationWindow extends PopupWindow{layerName="confirmationLayer";domElementId="CONFIRMATIOND";context=CON;zIndex=998;openTimestamp="";bodyWidth=.5;bodyHeight=.5;bodyPadding=.005;textAreaHeight=.7;buttonWidth=.35;buttonHeight=.2;bodyFontSize=.1;frameWidth=24;text;yesButtonText;noButtonText;yesFunction;noFunction;actionTaken=!1;constructor(t,i,e=_("YES"),h=_("NO"),n=null,o=null){super(t),this.initHtml(),this.setBoundingBox(),this.text=i,this.yesButtonText=e,this.noButtonText=h,null==n&&(n=()=>{}),null==o&&(o=()=>{}),this.yesFunction=n,this.noFunction=o,this.disabledHitboxes=[],this.initHitboxes()}initHtml(){this.context.canvas.parentElement.style.visibility="visible",this.openTimestamp=Math.floor(performance.now()),this.layerName+="_"+this.openTimestamp,this.domElementId+="_"+this.openTimestamp,this.div=document.createElement("div"),this.div.classList.add("CONFIRMATIOND"),this.div.onselectstart=()=>!1,this.div.ondragstart=()=>!1,this.div.style.zIndex=this.zIndex,this.div.style.visibility="hidden",this.div.id=this.domElementId;var t=document.createElement("canvas");t.width=0,t.height=0,t.style.width=0,t.style.height=0,t.style.position="absolute",t.style.zIndex=this.zIndex,t.id="CONFIRMATION_"+this.openTimestamp,this.context=t.getContext("2d"),this.div.appendChild(t),document.body.appendChild(this.div)}initHitboxes(){this.clearHitboxes(),this.createBody(),this.createButtons()}createBody(){this.body=this.addHitbox(new Hitbox({x:this.boundingBox.width*(1-this.bodyWidth)/2,y:this.boundingBox.height*(1-this.bodyHeight)/2,width:this.boundingBox.width*this.bodyWidth,height:this.boundingBox.height*this.bodyHeight},{},"")),this.body.render=function(){var t=this.parent.frameWidth,i=this.getRelativeCoordinates(0,0,this.parent),e=this.parent.context;e.drawImage(lilpopupBackground,i.x+t,i.y+t,this.boundingBox.width-2*t,this.boundingBox.height-2*t),drawFrame(e,lilpopupFrame,i.x,i.y,this.boundingBox.width,this.boundingBox.height,t,24,11,7),this.renderChildren()};var t=this.boundingBox.width*this.bodyPadding+this.frameWidth;this.body.bodyContainer=this.body.addHitbox(new Hitbox({x:t,y:t,width:this.body.boundingBox.width-2*t,height:this.body.boundingBox.height-2*t},{},"")),this.body.bodyContainer.render=function(){var t=this.parent.parent,i=this.getRelativeCoordinates(0,0,t),e=t.context,h=t.textAreaHeight-(isSimpleInputVisible()?.17:0);e.save(),e.fillStyle="#FFFFFF",e.strokeStyle="#000000",e.font=this.boundingBox.height*t.bodyFontSize+"px KanitM",e.lineWidth=6,e.textBaseline="top",strokeTextWrapWithHeightLimit(e,t.text,i.x,i.y,this.boundingBox.width,this.boundingBox.height*h,"center",.25,"center"),fillTextWrapWithHeightLimit(e,t.text,i.x,i.y,this.boundingBox.width,this.boundingBox.height*h,"center",.25,"center"),e.restore(),this.renderChildren()}}createButtons(){var t,i,e,h,n=this.body.bodyContainer.boundingBox,o=n.height*(.5+this.textAreaHeight/2)-n.height*this.buttonHeight/2;""==this.noButtonText?(t=n.width*(1-this.buttonWidth)/2,e=o):this.buttonWidth>=.5?(t=n.width*(1-this.buttonWidth)/2,e=o-n.height*this.buttonHeight*.6,i=n.width*(1-this.buttonWidth)/2,h=o+n.height*this.buttonHeight*.6):(t=(n.width/2-n.width*this.buttonWidth)/2,e=o,i=(3*n.width/2-n.width*this.buttonWidth)/2,h=o),this.createButton(startb,this.yesButtonText,{x:t,y:e,width:n.width*this.buttonWidth,height:n.height*this.buttonHeight},this.yesFunction),this.createButton(stopb,this.noButtonText,{x:i,y:h,width:n.width*this.buttonWidth,height:n.height*this.buttonHeight},this.noFunction)}createButton(t,i,e,h){var n=this.body.bodyContainer.addHitbox(new Hitbox(e,{onmousedown:function(t){t&&t(),this.actionTaken=!0,this.close()}.bind(this,h)}));n.root=this,n.image=t,n.text=i,n.render=function(){var t=this.getRelativeCoordinates(0,0,this.root),i=this.root.context;i.drawImage(this.image,t.x,t.y,this.boundingBox.width,this.boundingBox.height),i.font=.8*this.boundingBox.height+"px KanitM",i.fillStyle="#FFFFFF",i.textBaseline="middle",i.lineWidth=.08*this.boundingBox.height,drawNineSlice(i,this.image,t.x,t.y,this.boundingBox.width,this.boundingBox.height,31,24),strokeTextShrinkToFit(i,this.text,t.x+.075*this.boundingBox.width,t.y+.51*this.boundingBox.height,.85*this.boundingBox.width,"center"),fillTextShrinkToFit(i,this.text,t.x+.075*this.boundingBox.width,t.y+.51*this.boundingBox.height,.85*this.boundingBox.width,"center")}}render(){isDivVisible(this.domElementId)||showDiv(this.domElementId,this.zIndex),this.context.clearRect(0,0,this.boundingBox.width,this.boundingBox.height),drawColoredRect(this.context,0,0,this.boundingBox.width,this.boundingBox.height,"#000000",.5),this.renderChildren()}close(){!this.actionTaken&&this.noFunction&&this.noFunction(),hideSimpleInput();try{document.body.removeChild(this.div)}catch(t){console.warn(t),this.context&&this.context.canvas&&minimizeCanvas(this.context.canvas)}var t=super.close();return t&&delete activeLayers[this.layerName],t}}