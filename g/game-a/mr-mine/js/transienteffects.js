function drawEffects(){if(!isSimulating){TransientEffectsC.clearRect(0,0,transientEffectContainerW,transientEffectContainerH);for(var e=textEffects.length-1;e>=0;e--)textEffects[e].isComplete()?textEffects.splice(e,1):textEffects[e].draw();renderFadingNews(),isTimelapseOn||(renderMinerQuotes(),renderMinerName())}}var textEffects=[];class TextEffect{constructor(e,t,n,i,r,a,s,f,c){this.text=e,this.font=t,this.color=n,this.startScreenX=i,this.startScreenY=r,this.durationMsec=a,this.isHorizontallyCentered=s,this.fadeFunction=f,this.movementFunction=c,this.startTime=currentTime()}draw(){if(!this.isComplete()){saveCanvasState(TransientEffectsC);var e=hexToRgb(this.color),t=this.fadeFunction(this.percentComplete());TransientEffectsC.fillStyle="rgba("+e.r+", "+e.g+", "+e.b+", "+t+")",TransientEffectsC.font=this.font;var n=this.movementFunction(this.percentComplete()),i=this.startScreenX+n.x,r=this.startScreenY+n.y;this.isHorizontallyCentered&&(i-=TransientEffectsC.measureText(this.text).width/2),TransientEffectsC.fillText(this.text,i,r),restoreCanvasState(TransientEffectsC)}}percentComplete(){return Math.min(1,(currentTime()-this.startTime)/this.durationMsec)}isComplete(){return 1==this.percentComplete()}}function showFloatingText(e,t,n,i,r,a,s,f,c){var o=new TextEffect(e,t,n,i,r,a,s,f,c);textEffects.push(o)}function noFade(e){return 1}function noMovement(e){return{x:0,y:0}}function getFunctionYMovementOnly(e,t){return function(n){return{x:0,y:e(n)*t}}}function getFunctionXMovementOnly(e,t){return function(n){return{x:e(n)*t,y:0}}}function easeInOutBack(e){const t=2.5949095;var n=e<.5?Math.pow(2*e,2)*(7.189819*e-t)/2:(Math.pow(2*e-2,2)*((t+1)*(2*e-2)+t)+2)/2;return n=(n+.1)/1.2}function easeInOutSine(e){return-(Math.cos(Math.PI*e)-1)/2}function sin(e){return Math.sin(Math.PI*e)}function sinSquared(e){return Math.pow(sin(e),2)}function rootSin(e){return Math.pow(sin(e),.5)}function easeInCubic(e){return Math.pow(e,3)}function easeInPowerFunction(e){return function(t){return Math.pow(t,e)}}function renderFadingNews(){if(news.length>0){for(var e=0;e<news.length;e++){var t=currentTime()-news[e][1];if(t>=NEWS_FADE_OUT_DURATION_MSECS)news.splice(e,1);else{var n=1-Math.pow(t/NEWS_FADE_OUT_DURATION_MSECS,10);TransientEffectsC.font="20px KanitM",TransientEffectsC.fillStyle="#FFFFFF",TransientEffectsC.strokeStyle="#000000",TransientEffectsC.globalAlpha=n/2,TransientEffectsC.lineWidth=8,TransientEffectsC.strokeText(news[e][0],.5*transientEffectContainerW-TransientEffectsC.measureText(news[e][0]).width/2,transientEffectContainerH*(.025*(e+1)+.11)),TransientEffectsC.globalAlpha=n,TransientEffectsC.lineWidth=5,TransientEffectsC.strokeText(news[e][0],.5*transientEffectContainerW-TransientEffectsC.measureText(news[e][0]).width/2,transientEffectContainerH*(.025*(e+1)+.11)),TransientEffectsC.fillText(news[e][0],.5*transientEffectContainerW-TransientEffectsC.measureText(news[e][0]).width/2,transientEffectContainerH*(.025*(e+1)+.11)),news[e][2]&&(TransientEffectsC.drawImage(flair,200*getAnimationFrameIndex(3),0,200,200,.42*transientEffectContainerW,.105*transientEffectContainerH,.16*transientEffectContainerW,.16*transientEffectContainerH),TransientEffectsC.drawImage(worldResources[news[e][2]].largeIcon,0,0,worldResources[news[e][2]].largeIcon.width,worldResources[news[e][2]].largeIcon.height,.46*transientEffectContainerW,.15*transientEffectContainerH,.08*transientEffectContainerW,.08*transientEffectContainerH))}}TransientEffectsC.globalAlpha=1}}var activeMinerTexts=[],speechBubbleBoundingBoxCache={},bubblePadding=3;function renderSpeechBubble(e,t,n,i){var r;speechBubbleBoundingBoxCache.hasOwnProperty(t)?r=speechBubbleBoundingBoxCache[t]:(e.save(),e.textBaseline="top",e.font="11px Verdana",e.globalAlpha=0,r=fillTextWrap(e,t,n,i,200),e.restore(),r.x1-=n,r.x2-=n,r.y1-=i,r.y2-=i,speechBubbleBoundingBoxCache[t]=r),e.save(),renderRoundedRectangle(e,r.x1+n-bubblePadding,r.y1+i-bubblePadding-(r.height+2*bubblePadding),r.width+2*bubblePadding,r.height+2*bubblePadding,5,"#000000","#FFFFFF",1),e.restore(),e.save(),e.textBaseline="top",e.font="11px Verdana",e.fillStyle="#000000",fillTextWrap(e,t,n,i-(r.height+2*bubblePadding),200),e.drawImage(speechBubbleTail,0,0,speechBubbleTail.width,speechBubbleTail.height,r.x1+n+5,r.y1+i-bubblePadding-1,8,8),e.restore()}function renderMinerQuotes(){for(var e=0;e<activeMinerTexts.length;e++){var t=currentTime()-activeMinerTexts[e].clickTime;if(t>=QUOTE_FADE_OUT_DURATION_MSECS)activeMinerTexts.splice(e,1),e--;else{var n=1-Math.pow(t/QUOTE_FADE_OUT_DURATION_MSECS,10);MAIN.globalAlpha=n;var i=.111*mainh+.178*(4-(currentlyViewedDepth-activeMinerTexts[e].workerDepth))*mainh,r=Math.ceil(mainw*(.085+.072*(activeMinerTexts[e].workerNum-1)))+.02*mainw,a=i+Math.floor(.075*mainh);a>.1*mainh&&renderSpeechBubble(MAIN,activeMinerTexts[e].text,r,a),MAIN.globalAlpha=1}}}var activeMinerNames=[];function renderMinerName(){for(var e=0;e<10;e++)for(var t=0;t<5;t++){var n=.111*mainh+.178*(4-t)*mainh/uiScaleY,i=Math.ceil(mainw*(.085+.072*e))/uiScaleX,r=n+Math.floor(.075*mainh)/uiScaleY,a=Math.ceil(.025*mainw)/uiScaleX,s=Math.floor(.071*mainh)/uiScaleY,f={x:i,y:r,width:a,height:s},c=currentlyViewedDepth-t;if(!isDepthWithoutWorkers(c)&&!BattleManager.isActiveBossLevel(c)&&workersHiredAtDepth(c)>e){var o=getPremiumMinerName(currentlyViewedDepth-t,e);if(isMouseWithinBounds(f)||o){var l=getMinerName(currentlyViewedDepth-t,e);TransientEffectsC.save(),TransientEffectsC.font="12px Arial",o?isMouseWithinBounds(f)?TransientEffectsC.fillStyle="#FFAAAA":TransientEffectsC.fillStyle="#FF7777":TransientEffectsC.fillStyle="#FFFFFF",TransientEffectsC.strokeStyle="#000000",TransientEffectsC.lineWidth=4,TransientEffectsC.strokeText(l,i+a/2-TransientEffectsC.measureText(l).width/2,r+s+1),TransientEffectsC.fillText(l,i+a/2-TransientEffectsC.measureText(l).width/2,r+s+1),TransientEffectsC.restore()}}}}