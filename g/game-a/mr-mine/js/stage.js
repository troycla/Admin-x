class Stage extends UiLayer{layerName="Stage";zIndex=10;isRendered=!1;isPopup=!1;allowBubbling=!0;context=STAGE;previousBoundingBox;constructor(t){super(t),this.context&&(this.context.canvas.style.x=t.x,this.context.canvas.style.y=t.y,this.context.canvas.style.width=t.width,this.context.canvas.style.height=t.height)}setBoundingBox(){this.boundingBox=this.context.canvas.getBoundingClientRect(),this.boundingBox.x/=uiScaleX,this.boundingBox.y/=uiScaleY,this.boundingBox.width/=uiScaleX,this.boundingBox.height/=uiScaleY}showStage(){this.context.clearRect(0,0,this.boundingBox.width,this.boundingBox.height),this.isRendered=!0,document.getElementById("STAGED").style.zIndex=10}hideStage(){this.context.clearRect(0,0,this.boundingBox.width,this.boundingBox.height),this.isRendered=!1,this.clearHitboxes(),document.getElementById("STAGED").style.zIndex=-1}render(){this.previousBoundingBox&&this.context.clearRect(this.previousBoundingBox.x-1,this.previousBoundingBox.y-1,this.previousBoundingBox.width+2,this.previousBoundingBox.height+2),this.renderChildren(),this.previousBoundingBox=this.getBoundingBoxForAllChildren()}}