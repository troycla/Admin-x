shortcut.add("f12",(function(){console.log("F12 disabled")}),{type:"keyup",target:document,disable_in_input:!1}),shortcut.add("f12",(function(){console.log("F12 disabled")}),{type:"keydown",target:document,disable_in_input:!1}),shortcut.add("ctrl+shift+j",(function(){console.log("Console Disabled")}),{type:"keydown",target:document,disable_in_input:!1}),shortcut.add("ctrl+shift+j",(function(){console.log("Console Disabled")}),{type:"keyup",target:document,disable_in_input:!1}),shortcut.add("ctrl+shift+i",(function(){console.log("Console Disabled")}),{type:"keydown",target:document,disable_in_input:!1}),shortcut.add("ctrl+shift+i",(function(){console.log("Console Disabled")}),{type:"keyup",target:document,disable_in_input:!1}),shortcut.add("ctrl+s",(function(){savegame(),backupSavesToCloud(),newNews(_("Game saved!"))}),{type:"keyup",target:document,disable_in_input:!1});var keysPressed={};document.addEventListener("keydown",(e=>{if(isGameLoaded&&(keysPressed[e.key]=!0,afk=15,"ArrowUp"==(e=e||window.event).key?handle(1):"ArrowDown"==e.key?handle(-1):"Escape"==e.key&&(isBossBattleActive||battleActive?lostBattle():closeOtherUIs()),battleActive&&(1==e.key&&battleInventory[0].length>0&&atk(0),2==e.key&&battleInventory[1].length>0&&atk(1),3==e.key&&battleInventory[2].length>0&&atk(2),4==e.key&&battleInventory[3].length>0&&atk(3),5==e.key&&battleInventory[4].length>0&&atk(4),6==e.key&&battleInventory[5].length>0&&atk(5),7==e.key&&battleInventory[6].length>0&&atk(6),8==e.key&&battleInventory[7].length>0&&atk(7),9==e.key&&battleInventory[8].length>0&&atk(8),0==e.key&&battleInventory[9].length>0&&atk(9),"!"==e.key&&battleInventory[10].length>0&&atk(10),"@"==e.key&&battleInventory[11].length>0&&atk(11),"#"==e.key&&battleInventory[12].length>0&&atk(12),"$"==e.key&&battleInventory[13].length>0&&atk(13),"%"==e.key&&battleInventory[14].length>0&&atk(14),"^"==e.key&&battleInventory[15].length>0&&atk(15)),metalDetectorStructure.level>=4&&"Space"==e.code)){let e=chestService.chests.sort(((e,t)=>e.depth-t.depth));for(var t=0;t<e.length;t++)if(chestService.chests[t])return void panToViewDepth(e[t].depth);for(t=0;t<worldClickables.length;t++)if(worldClickables[t]&&3!=worldClickables[t].type)return void panToViewDepth(worldClickables[t].depth);battleWaiting.length>0&&panToViewDepth(battleWaiting[1])}})),document.addEventListener("keyup",(e=>{isGameLoaded&&delete keysPressed[e.key]})),shortcut.add("s",(function(){isGameLoaded&&("Earth"==worldBeingViewed().name&&!activeLayers.SELL||"Titan"==worldBeingViewed().name&&activeLayers.SELL?(panToViewDepth(0),openUi(SellWindow,null,EARTH_INDEX)):getMoon().hasReached()&&"Moon"!=worldBeingViewed().name&&"Titan"!=worldBeingViewed().name?(panToViewDepth(getMoon().startDepth),openUi(SellWindow,null,MOON_INDEX)):"Moon"!=worldBeingViewed().name||activeLayers.SELL?getTitan().hasReached()&&"Earth"!=worldBeingViewed().name&&"Titan"!=worldBeingViewed().name?(panToViewDepth(getTitan().startDepth),openUi(SellWindow,null,TITAN_INDEX)):"Titan"!=worldBeingViewed().name||activeLayers.SELL?(panToViewDepth(0),openUi(SellWindow,null,EARTH_INDEX)):(panToViewDepth(getTitan().startDepth),openUi(SellWindow,null,TITAN_INDEX)):(panToViewDepth(getMoon().startDepth),openUi(SellWindow,null,MOON_INDEX)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("h",(function(){isGameLoaded&&("Earth"==worldBeingViewed().name&&!activeLayers.Hire||"Titan"==worldBeingViewed().name&&activeLayers.Hire?(panToViewDepth(0),openUi(HireWindow,null,EARTH_INDEX)):getMoon().hasReached()&&"Moon"!=worldBeingViewed().name&&"Titan"!=worldBeingViewed().name?(panToViewDepth(getMoon().startDepth),openUi(HireWindow,null,MOON_INDEX)):"Moon"!=worldBeingViewed().name||activeLayers.Hire?getTitan().hasReached()&&"Earth"!=worldBeingViewed().name&&"Titan"!=worldBeingViewed().name?(panToViewDepth(getTitan().startDepth),openUi(HireWindow,null,TITAN_INDEX)):"Titan"!=worldBeingViewed().name||activeLayers.Hire?(panToViewDepth(0),openUi(HireWindow,null,EARTH_INDEX)):(panToViewDepth(getTitan().startDepth),openUi(HireWindow,null,TITAN_INDEX)):(panToViewDepth(getMoon().startDepth),openUi(HireWindow,null,MOON_INDEX)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("d",(function(){isGameLoaded&&("Earth"==worldBeingViewed().name&&!activeLayers.crafting||"Titan"==worldBeingViewed().name&&activeLayers.crafting?(panToViewDepth(0),openUi(CraftingWindow,null,EARTH_INDEX)):getMoon().hasReached()&&"Moon"!=worldBeingViewed().name&&"Titan"!=worldBeingViewed().name?(panToViewDepth(getMoon().startDepth),openUi(CraftingWindow,null,MOON_INDEX)):"Moon"!=worldBeingViewed().name||activeLayers.crafting?getTitan().hasReached()&&"Earth"!=worldBeingViewed().name&&"Titan"!=worldBeingViewed().name?(panToViewDepth(getTitan().startDepth),openUi(CraftingWindow,null,TITAN_INDEX)):"Titan"!=worldBeingViewed().name||activeLayers.crafting?(panToViewDepth(0),openUi(CraftingWindow,null,EARTH_INDEX)):(panToViewDepth(getTitan().startDepth),openUi(CraftingWindow,null,TITAN_INDEX)):(panToViewDepth(getMoon().startDepth),openUi(CraftingWindow,null,MOON_INDEX)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("t",(function(){isGameLoaded&&(lastLocationIsEarth[2]&&depth>=tradeConfig.tradingPosts[1].depth&&getMoon().hasReached()?(panToViewDepth(tradeConfig.tradingPosts[1].depth),openUi(TradeWindow,null,MOON_INDEX),lastLocationIsEarth[2]=!1):depth>=tradeConfig.tradingPosts[0].depth&&(panToViewDepth(tradeConfig.tradingPosts[0].depth),openUi(TradeWindow,null,EARTH_INDEX),lastLocationIsEarth[2]=!0))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("shift+s",(function(){isGameLoaded&&hasUnlockedScientists&&openUi(ScientistsWindow)}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("q",(function(){isGameLoaded&&(lastLocationIsEarth[3]&&depth>299?(panToViewDepth(303),openUi(QuestWindow,"",1),lastLocationIsEarth[3]=!1):(panToViewDepth(0),openUi(QuestWindow),lastLocationIsEarth[3]=!0))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("g",(function(){isGameLoaded&&(depth<300||(panToViewDepth(303),openUi(GemForgeWindow)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("o",(function(){isGameLoaded&&(depth<300||(panToViewDepth(303),openUi(OilPumpWindow)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("w",(function(){isGameLoaded&&(depth<300||(panToViewDepth(303),openUi(WeaponCraftingWindow)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("c",(function(){isGameLoaded&&(depth<501||(panToViewDepth(503),openUi(PitWindow)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("r",(function(){keysPressed.hasOwnProperty("Control")||isGameLoaded&&(depth<REACTOR_DEPTH+1||(panToViewDepth(REACTOR_DEPTH+1),openUi(ReactorWindow)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("b",(function(){isGameLoaded&&(depth<REACTOR_DEPTH+2||(panToViewDepth(REACTOR_DEPTH+1),openUi(BuffLabWindow)))}),{type:"keyup",target:document,disable_in_input:!0}),shortcut.add("k",(function(){isGameLoaded&&(depth<45||(panToViewDepth(45),openUi(CaveManagementWindow)))}),{type:"keyup",target:document,disable_in_input:!0});