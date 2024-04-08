function workersHiredAtWorld(e){return worlds[e].workersHired}function workerLevelAtWorld(e){return worlds[e].workerLevel}function workersHiredAtDepth(e){return worldAtDepth(e).workersHired}function workersLevelAtDepth(e){return worldAtDepth(e).workerLevel}function hireMiner(e){var r=worlds[e];return r.canHireWorker()?(r.hireWorker(),trackEvent_HireMiner(r.workersHired),newNews(_("You hired worker #{0}",r.workersHired),!0),mutebuttons||hireAudio.play(),!0):(r.workersHired>=10?newNews(_("You already hired the maximum amount of workers.")):newNews(_("Oops..You don't have enough money.")),!1)}function upgradeMiners(e){var r=worlds[e];return r.canUpgradeWorkersLevel()?(r.upgradeWorkers(),trackEvent_UpgradeMiners(r.workerLevel),newNews(_("You upgraded your workers to lvl{0}",r.workerLevel),!0),mutebuttons||hireAudio.play(),!0):(newNews(_("Oops..You don't have enough money.")),!1)}function onWorkerClicked(e,r){var t=currentlyViewedDepth-(5-e);if(!(t<0||isDepthWithoutWorkers(t)||workersHiredAtDepth(t)<r))if(chestService.chestExistsAtDepth(t)){chestService.getChest(t,r)?chestService.presentChest(t,r):addWorkerQuoteFromClick(e,r)}else battleWaiting[0]==r&&battleWaiting[1]==t?(preparebattle(),depthOfMonster=battleWaiting[1],battleWaiting=[]):addWorkerQuoteFromClick(e,r)}