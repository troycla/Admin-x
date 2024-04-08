class BackpackWindow extends PopupWindow{layerName="backpack";domElementId="PACKD";context=PACK;zIndex=3;itemScrollbox;isFirstRender=!0;draggedSlot=-1;animationLayerLoop;constructor(t,e){super(t,e),t||this.setBoundingBox(),this.addHitbox(new Button(closei,"","","",{x:.94*this.boundingBox.width,y:.01*this.boundingBox.height,width:.05*this.boundingBox.width,height:.05*this.boundingBox.height},{onmousedown:function(){closeUi(this.parent)}},"pointer","closeButton")),this.itemScrollbox=new Scrollbox(.95*this.boundingBox.width,1e3,PACK,.025*this.boundingBox.width,.07*this.boundingBox.height,.95*this.boundingBox.width,.905*this.boundingBox.height,15),this.itemScrollbox.context.font="32px Verdana",this.addHitbox(this.itemScrollbox)}render(){this.context.save(),this.context.clearRect(0,0,this.boundingBox.width,this.boundingBox.height),this.context.drawImage(sellbg,0,0,640,405,0,0,this.boundingBox.width,this.boundingBox.height),(isBackpackDirty||this.isFirstRender)&&(this.isFirstRender=!1,this.generateScrollboxContents()),super.render(),this.context.restore()}renderAnimationLayer(t,e){var o;if(o=getItemInBackpackSlot(this.draggedSlot)){PACKANIMATION.clearRect(0,0,packanimationdw,packanimationdh);var i=getItemById(o.id),n=.25;drawImageFitInBox(PACKANIMATION,i.icon,mouseX/uiScaleX-t*n,mouseY/uiScaleY-t*n,t,t),PACKANIMATION.fillStyle="#FFFFFF",PACKANIMATION.font="16px Verdana",PACKANIMATION.textBaseline="bottom",fillTextWrap(PACKANIMATION,o.quantity,mouseX/uiScaleX-t*n,mouseY/uiScaleY+e-t*n,e,"right")}}generateScrollboxContents(){var t=this.itemScrollbox,e=60,o=55,i=10;this.draggedSlot>=0&&renderUiOnSubinterval(this.layerName,this.renderAnimationLayer.bind(this),10,this.animationLayerLoop,o,e),console.log("REDRAWING BACKPACK"),t.context.save(),t.context.clearRect(0,0,t.contentWidth,t.contentWidth),isBackpackDirty&&(console.log("CLEARING OLD HITBOXES"),t.clearHitboxes());var n=Math.floor((t.contentWidth-20)/e),a=Math.ceil(getBackpackSize()/n),l=(t.contentWidth-20-e*n)/(n-1);t.contentHeight=a*(e+l)+20,t.canvas.height=t.contentHeight,t.setScale();for(var c=0;c<getBackpackSize();++c){var s,r,h=i+c%n*(e+l),d=i+Math.floor(c/n)*(e+l);t.context.fillStyle="#555555",t.context.globalAlpha=.8,t.context.fillRect(h,d,e,e),t.context.globalAlpha=1,(s=getItemInBackpackSlot(c))&&(r=getItemById(s.id),this.draggedSlot!=c&&(drawImageFitInBox(t.context,r.icon,h+2.5,d+2.5,o,o),t.context.fillStyle="#FFFFFF",t.context.textBaseline="bottom",t.context.font="16px Verdana",fillTextWrap(t.context,s.quantity,h,d+e,e,"right"),t.addHitbox(new Hitbox({x:h,y:d,width:e,height:e},{onmousedown:function(t){hideTooltip(),this.draggedSlot=t.slot,showDiv("PACKANIMATIOND",4),this.generateScrollboxContents(),this.render()}.bind(this,s),onmouseup:function(o){this.draggedSlot=-1;var a=this.itemScrollbox.getLocalCoordinates(mouseX/uiScaleX,mouseY/uiScaleY);if(activeLayers.backpack&&t.isMouseInLayer()){var c=a.x,s=a.y,r=Math.max(0,Math.floor((c-i*this.itemScrollbox.scale)/((e+l)*this.itemScrollbox.scale))),h=Math.max(0,Math.floor((s-i*this.itemScrollbox.scale)/((e+l)*this.itemScrollbox.scale))),d=n*h+r;h>=0&&r>=0&&d>=0&&d<getBackpackSize()?moveItemInBackpack(o.slot,d):this.generateScrollboxContents()}else this.generateScrollboxContents();hideDiv("PACKANIMATIOND"),PACKANIMATION.clearRect(0,0,packanimationdw,packanimationdh),activeLayers.backpack&&this.render()}.bind(this,s),onmouseenter:function(t,e,i){if(!isMouseDown){var n=getItemById(t.id),a=n.description||"",l=this.itemScrollbox.getGlobalCoordinates(e*this.itemScrollbox.scale,i*this.itemScrollbox.scale);showTooltip(n.name,a,l.x*uiScaleX,(l.y+o*this.itemScrollbox.scale-this.itemScrollbox.currentScrollY*this.itemScrollbox.scale)*uiScaleY)}}.bind(this,s,h,d),onmouseexit:function(t){hideTooltip()}.bind(r)},"pointer"))))}isBackpackDirty=!1,t.context.restore()}}