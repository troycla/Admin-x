const POPUP_FRAME_SETS={0:{backgroundImage:popupBackgroundLight,popupFrameImage:popupFrame,closeButtonImage:closei,activeTabImage:activeTab,inactiveTabImage:inactiveTab,frameWidth:24,rightShadowWidth:8,bottomShadowHeight:11},1:{backgroundImage:moonPopupBackground,popupFrameImage:moonPopupFrame,closeButtonImage:moonClosei,activeTabImage:moonActiveTab,inactiveTabImage:moonInactiveTab,frameWidth:24,rightShadowWidth:8,bottomShadowHeight:11},2:{backgroundImage:titanPopupBackground,popupFrameImage:titanPopupFrame,closeButtonImage:titanClosei,activeTabImage:titanActiveTab,inactiveTabImage:titanInactiveTab,frameWidth:24,rightShadowWidth:8,bottomShadowHeight:11}};class PopupWindow extends UiLayer{layerName="";zIndex=3;isRendered=!1;isPopup=!0;allowBubbling=!1;currentTabIndex=0;constructor(t){super(t),this.context&&(maximizeCanvas(this.context.canvas),this.context.canvas.style.x=t.x,this.context.canvas.style.y=t.y,this.context.canvas.style.width=t.width,this.context.canvas.style.height=t.height)}open(){showDiv(this.domElementId,this.zIndex)}close(){return hideDiv(this.domElementId),this.context&&minimizeCanvas(this.context.canvas),!0}setBoundingBox(){maximizeCanvas(this.context.canvas),this.boundingBox=this.context.canvas.getBoundingClientRect(),this.boundingBox.x/=uiScaleX,this.boundingBox.y/=uiScaleY,this.boundingBox.width/=uiScaleX,this.boundingBox.height/=uiScaleY}}class TabbedPopupWindow extends PopupWindow{tabsContainer;tabs;bodyContainer;tabWidth=120;tabHeight=39;tabSpacing=5;tabYOffset=0;backgroundImage=POPUP_FRAME_SETS[EARTH_INDEX].backgroundImage;popupFrameImage=POPUP_FRAME_SETS[EARTH_INDEX].popupFrameImage;closeButtonImage=POPUP_FRAME_SETS[EARTH_INDEX].closeButtonImage;activeTabImage=POPUP_FRAME_SETS[EARTH_INDEX].activeTabImage;inactiveTabImage=POPUP_FRAME_SETS[EARTH_INDEX].inactiveTabImage;frameWidth=POPUP_FRAME_SETS[EARTH_INDEX].frameWidth;rightShadowWidth=POPUP_FRAME_SETS[EARTH_INDEX].rightShadowWidth;bottomShadowHeight=POPUP_FRAME_SETS[EARTH_INDEX].bottomShadowHeight;frameWidthFraction=.038;frameHeightFraction=.056;frameRightShadowFraction=.013;frameBottomShadowFraction=.049;constructor(t,i,e,a){super(t)}onTabChange(){}initializeTabs(t){this.tabs=[],this.tabsContainer=new Hitbox({x:0,y:0,width:this.boundingBox.width,height:this.tabHeight},{},"","tabsContainer"),this.tabsContainer.isPermanent=!0;var i=0,e=null==t?0:t.length,a=this.tabsContainer.boundingBox.width/e/(this.tabWidth+this.tabSpacing);for(var n in a<1&&(this.tabWidth*=a,this.tabHeight*=a,this.tabSpacing*=a,this.tabYOffset=this.tabHeight*(1-a)/2),t){var o=new Hitbox({x:i*(this.tabWidth+this.tabSpacing),y:this.tabYOffset,width:this.tabWidth,height:this.tabHeight},{onmousedown:this.createTabChangeFunctionForIndex(i)},"pointer","tab_"+i);o.render=this.createTabRenderFunction(this,n,t[n]).bind(o),this.tabsContainer.addHitbox(o),this.tabs.push(o),++i}var h=.023*this.boundingBox.height,s=(popupFrame.width,this.boundingBox.width,popupFrame.height,this.boundingBox.height,this.tabsContainer.boundingBox.y,this.frameWidthFraction*this.boundingBox.width/uiScaleX),d=this.frameHeightFraction*this.boundingBox.height/uiScaleY,g=this.frameRightShadowFraction*this.boundingBox.width/uiScaleX,r=this.frameBottomShadowFraction*this.boundingBox.height/uiScaleY;this.tabsContainer.render=function(){this.renderChildren();var t=this.getRelativeCoordinates(0,this.boundingBox.height,this.parent),i=this.parent.context;i.drawImage(this.parent.backgroundImage,t.x,t.y-h,this.boundingBox.width-g,this.parent.boundingBox.height-t.y-r+h),i.drawImage(this.parent.popupFrameImage,t.x,t.y-h,this.boundingBox.width,this.parent.boundingBox.height-t.y+h)},this.bodyContainer=new Hitbox({x:s,y:this.tabsContainer.boundingBox.height+d-h,width:this.boundingBox.width-(2*s+g),height:this.boundingBox.height-this.tabsContainer.boundingBox.height-(2*d+r)+2*h},{},"","bodyContainer"),this.addHitbox(this.tabsContainer),this.addHitbox(this.bodyContainer),this.closeButton=this.addHitbox(new Button(this.closeButtonImage,"","","",{x:.94*this.boundingBox.width,y:this.tabHeight-h-.0125*this.boundingBox.width,width:.05*this.boundingBox.width,height:.05*this.boundingBox.width},{onmousedown:function(){closeUi(this.parent),mutebuttons||closeAudio[rand(0,closeAudio.length-1)].play()}},"pointer","closeButton"))}initializeTabNotifications(t){if(!(t.length>this.tabs.length))for(var i in t)if(t[i]&&t[i].length>0){var e=new NotificationIcon(0,0,t[i]),a=e.boundingBox.width;e.boundingBox.x=this.tabs[i].boundingBox.width-.5*a,e.boundingBox.y=-a,e.renderOnStage=!0,e.phaseShift=rand(0,25),this.tabs[i].addHitbox(e)}}createTabRenderFunction(t,i,e){var a=.023*this.boundingBox.height;popupFrame.width,this.boundingBox.width,popupFrame.height,this.boundingBox.height,this.tabsContainer.boundingBox.y,this.boundingBox.width,uiScaleX,this.boundingBox.height,uiScaleY,this.boundingBox.width,uiScaleX,this.boundingBox.height,uiScaleY;return function(){var n=t.context,o=this.getRelativeCoordinates(0,0,t);if(n.save(),t.currentTabIndex==i?(n.drawImage(t.activeTabImage,o.x,o.y,1.06*this.boundingBox.width,1.3*this.boundingBox.height),n.fillStyle="#F2F2F2"):(n.drawImage(t.inactiveTabImage,o.x,o.y,1.06*this.boundingBox.width,1.3*this.boundingBox.height),n.fillStyle="#999999"),n.textBaseline="middle",n.font="16px KanitM",fillTextShrinkToFit(n,e,o.x+.05*this.boundingBox.width,o.y+t.tabHeight/2-a/4,.9*this.boundingBox.width,"center"),this.flickerStart)if(t.currentTabIndex==i||this.flickerEnd>0&&Math.floor((new Date).getTime())>this.flickerEnd)this.flickerStart=0;else{var h=(Math.floor((new Date).getTime())-this.flickerStart)%this.flickerPeriod/(this.flickerPeriod/2);h>1&&(h=2-h),n.save(),n.globalCompositeOperation="source-atop",n.globalAlpha=.35*h,n.fillStyle="#FFFFFF",n.fillRect(o.x,o.y,this.boundingBox.width,this.boundingBox.height),n.restore()}n.restore(),this.renderChildren()}}createTabChangeFunctionForIndex(t){return function(){mutebuttons||clickAudio[rand(0,clickAudio.length-1)].play(),this.parent.parent.openTab(t)}}openTab(t){this.currentTabIndex!=t&&(this.currentTabIndex=t,this.onTabChange())}flickerTab(t,i,e=0){var a=this.tabs[t];a.flickerStart=Math.floor((new Date).getTime()),a.flickerPeriod=i,a.flickerEnd=e>0?Math.floor((new Date).getTime())+i*e:0}setFrameImagesByWorldIndex(t){this.backgroundImage=POPUP_FRAME_SETS[t].backgroundImage,this.popupFrameImage=POPUP_FRAME_SETS[t].popupFrameImage,this.closeButtonImage=POPUP_FRAME_SETS[t].closeButtonImage,this.activeTabImage=POPUP_FRAME_SETS[t].activeTabImage,this.inactiveTabImage=POPUP_FRAME_SETS[t].inactiveTabImage,this.frameWidth=POPUP_FRAME_SETS[t].frameWidth,this.rightShadowWidth=POPUP_FRAME_SETS[t].rightShadowWidth,this.bottomShadowHeight=POPUP_FRAME_SETS[t].bottomShadowHeight}}