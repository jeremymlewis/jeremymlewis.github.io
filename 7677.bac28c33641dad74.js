"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7677],{7677:(R,u,s)=>{s.r(u),s.d(u,{IntroModule:()=>Y});var r=s(9905),f=s(6895),p=s(433),l=s(1829),t=s(8274),g=s(5883);let h=(()=>{class n{constructor(e,i){this.route=e,this.votes=i,this.passwordRequired=!1,this.passcode=""}ngAfterViewInit(){this.votes.isMultiplayer=!1,this.votes.isHost=!1}toTutorial(){this.route.navigateByUrl("/welcome")}toHostJoin(){this.route.navigateByUrl("/host-join")}toTabs(){this.route.navigateByUrl("/options"),this.votes.round=1}toTabsTestEnd(){this.route.navigateByUrl("/options"),this.votes.round=15}toAchievements(){this.route.navigateByUrl("/records")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(g.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-intro-page"]],decls:29,vars:1,consts:[[3,"fullscreen"],[1,"img-wrapper"],["src","../../assets/images/background6.png"],[1,"ion-no-padding"],[1,"background"],[1,"center"],[1,"centerwhite"],[1,"titleText"],[2,"color","white","margin-top","0px"],[1,"button43","skinny",3,"click"],[2,"font-size","small","color","white","margin-top","0px"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"ion-grid",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h1",7)(8,"em"),t._uU(9,"GET ELECTED!"),t.qZA()()(),t.TgZ(10,"div",6)(11,"p",8)(12,"em"),t._uU(13,"The Presidential Election Challenge"),t.qZA()()(),t.TgZ(14,"ion-button",9),t.NdJ("click",function(){return i.toTabs()}),t.TgZ(15,"em"),t._uU(16,"Play"),t.qZA()(),t.TgZ(17,"ion-button",9),t.NdJ("click",function(){return i.toTabsTestEnd()}),t._uU(18,"TEST (Start at round 15)"),t.qZA(),t.TgZ(19,"ion-button",9),t.NdJ("click",function(){return i.toTutorial()}),t.TgZ(20,"em"),t._uU(21,"Instructions"),t.qZA()(),t.TgZ(22,"ion-button",9),t.NdJ("click",function(){return i.toAchievements()}),t.TgZ(23,"em"),t._uU(24,"Achievements"),t.qZA()(),t.TgZ(25,"div",6)(26,"p",10)(27,"em"),t._uU(28,"Based on a Board Game by Jonas Linde"),t.qZA()()()()()()()),2&e&&t.Q6J("fullscreen",!0)},dependencies:[r.YG,r.W2,r.jY],styles:[".game-title[_ngcontent-%COMP%]{padding-top:40%;text-align:center;font-size:38px}.container[_ngcontent-%COMP%]{height:200px;position:relative}.titleText[_ngcontent-%COMP%]{font-size:40px;color:#fff;margin-bottom:0}.fix-center[_ngcontent-%COMP%]{position:fixed;bottom:16px;left:16px}.skinny[_ngcontent-%COMP%]{margin-left:20%;width:60%;margin-top:6px;margin-bottom:10px}.centerwhite[_ngcontent-%COMP%]{color:#fff;font-size:xx-large;font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}ion-button[_ngcontent-%COMP%]{--background: none;background-size:100% auto;background-image:linear-gradient(to right,#ff5e5e 0%,#ffffff 51%,#7649ff 100%)}.highcenter[_ngcontent-%COMP%]{position:absolute;color:#fff;top:20%;left:50%;width:90%;text-align:center;transform:translate(-50%,-50%);background:#5050ff;border-radius:20px;box-shadow:0 0 4px 4px #7878ff;opacity:.9}.center[_ngcontent-%COMP%]{width:95%;position:absolute;display:grid;top:50%;left:50%;transform:translate(-50%,-50%)}.img-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:-100% 0;margin:auto;width:100%}"]}),n})();function _(n,o){1&n&&(t.TgZ(0,"ion-content",17),t._uU(1,"Understanding the Electoral College is central to the US presidential election. If you want to learn more, there are great resources all over the internet!"),t.qZA())}let y=(()=>{class n{constructor(e,i){this.route=e,this.votes=i}continue(){this.route.navigateByUrl("/")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(g.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-options-page"]],decls:73,vars:2,consts:[[3,"translucent"],[1,"ion-text-center"],["fill","clear","id","click-triggerWc"],["name","help-circle-outline"],["trigger","click-triggerWc","triggerAction","click"],[3,"fullscreen"],[1,"center"],["src","../../assets/images/constitution.png"],["src","../../assets/images/horses.jpg"],["src","../../assets/images/ElectoralMap.jpg"],["src","../../assets/images/vs.jpg"],["src","../../assets/images/options.png"],["src","../../assets/images/score.png"],["src","../../assets/images/map.png"],[1,"fix-center"],[1,"button43",3,"click"],["name","arrow-back-circle-outline"],[1,"ion-padding"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),t._uU(3," Instructions "),t.qZA(),t.TgZ(4,"ion-button",2),t._UZ(5,"ion-icon",3),t.qZA(),t.TgZ(6,"ion-popover",4),t.YNc(7,_,2,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",5)(9,"div",6)(10,"h1"),t._uU(11,"What is the Electoral College?"),t.qZA()(),t.TgZ(12,"div",6),t._UZ(13,"img",7),t.qZA(),t.TgZ(14,"div",6)(15,"p"),t._uU(16,"When the US constitution was written in 1787, the Office Of The President was created."),t.qZA()(),t.TgZ(17,"div",6)(18,"p"),t._uU(19,"To fill this office, every 4 years each state would help to elect a new President."),t.qZA()(),t.TgZ(20,"div",6),t._UZ(21,"img",8),t.qZA(),t.TgZ(22,"div",6)(23,"p"),t._uU(24,"Due to the limits of communication and travel, each state had to send Electors to a meeting to record their votes. "),t.qZA()(),t.TgZ(25,"div",6)(26,"p"),t._uU(27,"Large states would get to send lots of electors, and small states would get to send fewer electors."),t.qZA()(),t.TgZ(28,"div",6),t._UZ(29,"img",9),t.qZA(),t.TgZ(30,"div",6)(31,"p"),t._uU(32,"Today, each state* puts their Electoral Votes toward the candidate that was most popular in the election in their state. "),t.qZA()(),t.TgZ(33,"div",6)(34,"p"),t._uU(35," To become president, a candidate needs to receive 270 electoral votes out of the 538."),t.qZA()(),t.TgZ(36,"div",6)(37,"h1"),t._uU(38,"What do you do in this game?"),t.qZA()(),t.TgZ(39,"div",6),t._UZ(40,"img",10),t.qZA(),t.TgZ(41,"div",6)(42,"p"),t._uU(43," You will be competing in a 2 party race, meaning that you will run against just 1 opponent. The Republican Party will be represented by the color RED and the Democratic Party will be represented by the color BLUE."),t.qZA()(),t.TgZ(44,"div",6),t._UZ(45,"img",11),t.qZA(),t.TgZ(46,"div",6)(47,"p"),t._uU(48," Your job in this game is to win enough States/Electoral Votes to become president. You can raise money, spend it on advertisements, travel to states for campaign events, and weigh in on national issues to become more popular -- and win the election in states. The game will last 16 turns, so use every move wisely."),t.qZA()(),t.TgZ(49,"div",6),t._UZ(50,"img",12),t.qZA(),t.TgZ(51,"div",6)(52,"p"),t._uU(53," You will see how popular you are in a states shown as a Percentage. (A +3% means you are predicted to win that state by 3% of the vote. A state that is EVEN could vote for either candidate on election day.)"),t.qZA()(),t.TgZ(54,"div",6),t._UZ(55,"img",13),t.qZA(),t.TgZ(56,"div",6)(57,"p"),t._uU(58," You will be given a map that shows how close the race is in each state (based on real past elections data), as well as how many votes you could gain by winning that state."),t.qZA()(),t.TgZ(59,"div",6)(60,"p"),t._uU(61," It is a good idea to check in on this often, and use it to decide which states you are going to target in your campaign."),t.qZA()(),t.TgZ(62,"div",6)(63,"p"),t._uU(64," Good luck! If you need any more info, check out the HELP tab during a game"),t.qZA()(),t._UZ(65,"br")(66,"br")(67,"br")(68,"br"),t.TgZ(69,"div",14)(70,"ion-button",15),t.NdJ("click",function(){return i.continue()}),t._UZ(71,"ion-icon",16),t._uU(72,"Back To Main Menu"),t.qZA()()()),2&e&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0))},dependencies:[r.YG,r.W2,r.Gu,r.gu,r.d8,r.sr,r.wd],styles:[".center[_ngcontent-%COMP%]{margin-left:3px;margin-right:3px;font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.fix-center[_ngcontent-%COMP%]{position:fixed;bottom:16px;left:16px}img[_ngcontent-%COMP%]{height:200px}p[_ngcontent-%COMP%]{margin-top:10px}#aid[_ngcontent-%COMP%]{animation:flyaid 15s linear;top:100vw;left:0}#title[_ngcontent-%COMP%]{animation:flytitle 15s linear;top:100vw;left:0}#info1[_ngcontent-%COMP%]{animation:flyinfo1 15s linear;top:100vw;left:0}#info2[_ngcontent-%COMP%]{animation:flyinfo2 15s linear;top:100vw;left:0}#info3[_ngcontent-%COMP%]{animation:flyinfo3 15s linear;top:100vw;left:0}#info4[_ngcontent-%COMP%]{animation:flyinfo4 15s linear;top:100vw;left:0}#info5[_ngcontent-%COMP%]{animation:flyinfo5 15s linear;top:100vw;left:0}#info6[_ngcontent-%COMP%]{animation:flyinfo6 15s linear;top:100vw;left:0}#ready[_ngcontent-%COMP%]{animation:flyready 15s linear;top:100vw;left:0}@keyframes flyaid{0%{transform:translate(110vw,-90vw);opacity:.75}8%{transform:translateY(-90vw);opacity:.75}15%{transform:translateY(-90vw);opacity:.75}17%{transform:translateY(-75vw);opacity:.75}25%{transform:translateY(-75vw);opacity:.75}27%{transform:translateY(-60vw);opacity:.75}40%{transform:translateY(-60vw);opacity:.75}42%{transform:translateY(-42vw);opacity:.75}50%{transform:translateY(-42vw);opacity:.75}52%{transform:translateY(-24vw);opacity:.75}70%{transform:translateY(-24vw);opacity:.75}72%{transform:translate(0);opacity:.75}}@keyframes flytitle{0%{transform:translate(110vw);opacity:.75}10%{transform:translate(110vw);opacity:.75}12%{transform:translate(0);opacity:1}}@keyframes flyinfo1{0%{transform:translate(110vw);opacity:.75}15%{transform:translate(110vw);opacity:.75}17%{transform:translate(0);opacity:1}}@keyframes flyinfo2{0%{transform:translate(110vw);opacity:.75}25%{transform:translate(110vw);opacity:.75}27%{transform:translate(0);opacity:1}}@keyframes flyinfo3{0%{transform:translate(110vw);opacity:.75}40%{transform:translate(110vw);opacity:.75}42%{transform:translate(0);opacity:1}}@keyframes flyinfo4{0%{transform:translate(110vw);opacity:.75}50%{transform:translate(110vw);opacity:.75}52%{transform:translate(0);opacity:1}}@keyframes flyinfo5{0%{transform:translate(110vw);opacity:.75}70%{transform:translate(110vw);opacity:.75}72%{transform:translate(0);opacity:1}}@keyframes flyinfo6{0%{transform:translate(110vw);opacity:.75}85%{transform:translate(110vw);opacity:.75}87%{transform:translate(0);opacity:1}}@keyframes flyready{0%{transform:translate(110vw);opacity:.75}95%{transform:translate(110vw);opacity:.75}to{transform:translate(0);opacity:1}}"]}),n})();var d=s(5861);function v(n,o){1&n&&(t.TgZ(0,"ion-content",13),t._uU(1,"Check up here on how many games you have played, and how many times you have won!"),t.qZA())}function x(n,o){if(1&n&&(t.TgZ(0,"div",14)(1,"div",15),t._UZ(2,"ion-icon",16),t.qZA(),t.TgZ(3,"div",17)(4,"p",18)(5,"strong"),t._uU(6),t.qZA()(),t.TgZ(7,"p",18),t._uU(8),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(6),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description)}}function Z(n,o){if(1&n&&(t.TgZ(0,"div",14)(1,"div",15),t._UZ(2,"ion-icon",19),t.qZA(),t.TgZ(3,"div",20)(4,"p",18)(5,"strong"),t._uU(6,"???"),t.qZA()(),t.TgZ(7,"p",18),t._uU(8),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(8),t.Oqu(e.description)}}let b=(()=>{class n{constructor(e,i){this.route=e,this.votes=i,this.unlockedRecords=[],this.lockedRecords=[]}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.plays=yield e.votes.getLocalStorage("plays"),e.wins=yield e.votes.getLocalStorage("wins"),e.demWins=yield e.votes.getLocalStorage("demWins"),e.repWins=yield e.votes.getLocalStorage("repWins"),e.highVotes=yield e.votes.getLocalStorage("highVotes")})()}ionViewWillEnter(){var e=this;return(0,d.Z)(function*(){e.plays=yield e.votes.getLocalStorage("plays"),e.wins=yield e.votes.getLocalStorage("wins"),e.demWins=yield e.votes.getLocalStorage("demWins"),e.repWins=yield e.votes.getLocalStorage("repWins"),e.highVotes=yield e.votes.getLocalStorage("highVotes"),e.setRecords()})()}setRecords(){var e=this;return(0,d.Z)(function*(){e.unlockedRecords=[],e.lockedRecords=[];const i=[{title:"President!",description:"Win an election",id:"record1"},{title:"Not the President...",description:"Lose an election",id:"record2"},{title:"Party Switch",description:"Win an election with both parties",id:"record3"},{title:"Political Dynasty",description:"Win 10 elections",id:"record8"},{title:"Time to Retire?",description:"Lose 10 elections",id:"record15"},{title:"Close one!",description:"Win an election with exactly 270 votes",id:"record11"},{title:"Big Win",description:"Win with 350 electoral votes",id:"record25"},{title:"Huge Win",description:"Win 375 electoral votes",id:"record26"},{title:"Historic Win!",description:"Win with more than 400 electoral college votes",id:"record13"},{title:"Historian",description:"Play 60 games (the 2024 election will be the 60th in US history!)",id:"record12"},{title:"Learn the Game",description:"Read a Campaign Resource in the HELP tab",id:"record14"},{title:"White House Drop Out",description:"Drop out of an election early in the HELP tab",id:"record16"},{title:"Ivory Tower",description:"Win without visiting a single state",id:"record4"},{title:"State Resident",description:"Visit the same state 5 times in a single Classic Mode game",id:"record9"},{title:"Not Fit For Office",description:"Draw 2 scandal events in 1 game",id:"record5"},{title:"Unite the Midwest",description:"Win all of MN, IA, WI, MI, OH and PA",id:"record19"},{title:"Unite the Northeast",description:"Win all of NH, ME, NJ, MA, CT, VT, NY and DE",id:"record20"},{title:"Unite the Southwest",description:"Win all of AZ, NV, CO, and NM",id:"record21"},{title:"Unite the Southeast",description:"Win all of FL, GA, SC, NC, VA, TN, AL, MS, AR, and LA",id:"record22"},{title:"Bellweather State?",description:"Win without Ohio",id:"record7"},{title:"Don't mess with Texas",description:"Win Texas as a Democrat",id:"record10"},{title:"Is this possible?",description:"Win California as a Republican",id:"record17"}];for(const a of i)(yield e.votes.getLocalStorage(a.id))?e.unlockedRecords.push(a):e.lockedRecords.push(a)})()}continue(){this.route.navigateByUrl("/")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(g.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-records-page"]],decls:37,vars:9,consts:[[3,"translucent"],[1,"ion-text-center"],["fill","clear","id","click-triggerGH2"],["name","help-circle-outline"],["trigger","click-triggerGH2","triggerAction","click"],[3,"fullscreen"],[1,"ion-no-padding","bg-image"],[1,"title"],[2,"margin-left","20%"],["style","margin-top: 4px; margin-left: 6%; display: flex; height: 72px; width: 88%;",4,"ngFor","ngForOf"],[1,"fix-center"],[1,"button43",3,"click"],["name","arrow-back-circle-outline"],[1,"ion-padding"],[2,"margin-top","4px","margin-left","6%","display","flex","height","72px","width","88%"],[2,"width","64px","border-radius","10px 0px 0px 10px","border","black 2px solid","background-color","#606060"],["name","trophy",2,"color","#FFD700","font-size","48px","margin-left","3px","margin-right","3px","margin-top","8px","margin-bottom","8px"],[2,"border-radius","0px 10px 10px 0px","border","black 2px solid","width","100%","overflow","hidden","background-image","linear-gradient(to right, #ffffff 0%, #ffffff 50%, #c9cd9b 100%)"],[2,"margin-top","0","margin-bottom","0","margin-left","3px"],["name","lock-closed",2,"font-size","48px","margin-left","3px","margin-right","3px","margin-top","3px","margin-bottom","3px"],[2,"border-radius","0px 10px 10px 0px","border","black 2px solid","width","100%","overflow","hidden","background-image","linear-gradient(to right, #a2a2a2 0%, #a2a2a2 50%, #606060 100%)"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),t._uU(3," Achievements "),t.qZA(),t.TgZ(4,"ion-button",2),t._UZ(5,"ion-icon",3),t.qZA(),t.TgZ(6,"ion-popover",4),t.YNc(7,v,2,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",5)(9,"ion-grid",6)(10,"div",7)(11,"h1"),t._uU(12,"Game History:"),t.qZA()(),t.TgZ(13,"p",8),t._uU(14),t.qZA(),t.TgZ(15,"p",8),t._uU(16),t.qZA(),t.TgZ(17,"p",8),t._uU(18),t.qZA(),t.TgZ(19,"p",8),t._uU(20),t.qZA(),t.TgZ(21,"p",8),t._uU(22),t.qZA(),t.TgZ(23,"div",7)(24,"h1"),t._uU(25,"Achievements:"),t.qZA()(),t.YNc(26,x,9,2,"div",9),t.YNc(27,Z,9,1,"div",9),t._UZ(28,"br")(29,"br")(30,"br")(31,"br")(32,"br"),t.TgZ(33,"div",10)(34,"ion-button",11),t.NdJ("click",function(){return i.continue()}),t._UZ(35,"ion-icon",12),t._uU(36,"Back To Main Menu"),t.qZA()()()()),2&e&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0),t.xp6(6),t.hij("Games Played: ",i.plays||0,""),t.xp6(2),t.hij("Games won: ",i.wins||0,""),t.xp6(2),t.hij("Wins as Republican: ",i.repWins||0,""),t.xp6(2),t.hij("Wins as Democrat: ",i.demWins||0,""),t.xp6(2),t.hij("Most Electoral Votes Won: ",i.highVotes||0,""),t.xp6(4),t.Q6J("ngForOf",i.unlockedRecords),t.xp6(1),t.Q6J("ngForOf",i.lockedRecords))},dependencies:[r.YG,r.W2,r.jY,r.Gu,r.gu,r.d8,r.sr,r.wd,f.sg],styles:[".center[_ngcontent-%COMP%]{margin-left:3px;margin-right:3px;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.fix-center[_ngcontent-%COMP%]{position:fixed;bottom:16px;left:16px}.title[_ngcontent-%COMP%]{margin-left:3px;margin-right:3px;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),n})();function w(n,o){1&n&&(t.TgZ(0,"ion-content",13),t._uU(1,"Check up here on how many games you have played, and how many times you have won!"),t.qZA())}function T(n,o){if(1&n&&(t.TgZ(0,"div",14)(1,"div",15),t._UZ(2,"ion-icon",16),t.qZA(),t.TgZ(3,"div",17)(4,"p",18)(5,"strong"),t._uU(6),t.qZA()(),t.TgZ(7,"p",18),t._uU(8),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(6),t.Oqu(e.title),t.xp6(2),t.Oqu(e.description)}}function P(n,o){if(1&n&&(t.TgZ(0,"div",14)(1,"div",15),t._UZ(2,"ion-icon",19),t.qZA(),t.TgZ(3,"div",20)(4,"p",18)(5,"strong"),t._uU(6,"???"),t.qZA()(),t.TgZ(7,"p",18),t._uU(8),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(8),t.Oqu(e.description)}}let k=(()=>{class n{constructor(e,i){this.route=e,this.votes=i,this.unlockedRecords=[],this.lockedRecords=[]}ngOnInit(){var e=this;return(0,d.Z)(function*(){e.plays=yield e.votes.getLocalStorage("plays"),e.wins=yield e.votes.getLocalStorage("wins"),e.demWins=yield e.votes.getLocalStorage("demWins"),e.repWins=yield e.votes.getLocalStorage("repWins"),e.highVotes=yield e.votes.getLocalStorage("highVotes")})()}ionViewWillEnter(){var e=this;return(0,d.Z)(function*(){e.plays=yield e.votes.getLocalStorage("plays"),e.wins=yield e.votes.getLocalStorage("wins"),e.demWins=yield e.votes.getLocalStorage("demWins"),e.repWins=yield e.votes.getLocalStorage("repWins"),e.highVotes=yield e.votes.getLocalStorage("highVotes"),e.setRecords()})()}setRecords(){var e=this;return(0,d.Z)(function*(){e.unlockedRecords=[],e.lockedRecords=[];const i=[{title:"President!",description:"Win an election",id:"record1"},{title:"Not the President...",description:"Lose an election",id:"record2"},{title:"Party Switch",description:"Win an election with both parties",id:"record3"},{title:"Political Dynasty",description:"Win 10 elections",id:"record8"},{title:"Time to Retire?",description:"Lose 10 elections",id:"record15"},{title:"Close one!",description:"Win an election with exactly 270 votes",id:"record11"},{title:"Big Win",description:"Win with 350 electoral votes",id:"record25"},{title:"Huge Win",description:"Win 375 electoral votes",id:"record26"},{title:"Historic Win!",description:"Win with more than 400 electoral college votes",id:"record13"},{title:"Historian",description:"Play 60 games (the 2024 election will be the 60th in US history!)",id:"record12"},{title:"Learn the Game",description:"Read a Campaign Resource in the HELP tab",id:"record14"},{title:"White House Drop Out",description:"Drop out of an election early in the HELP tab",id:"record16"},{title:"Ivory Tower",description:"Win without visiting a single state",id:"record4"},{title:"State Resident",description:"Visit the same state 5 times in a single Classic Mode game",id:"record9"},{title:"Not Fit For Office",description:"Draw 2 scandal events in 1 game",id:"record5"},{title:"Unite the Midwest",description:"Win all of MN, IA, WI, MI, OH and PA",id:"record19"},{title:"Unite the Northeast",description:"Win all of NH, ME, NJ, MA, CT, VT, NY and DE",id:"record20"},{title:"Unite the Southwest",description:"Win all of AZ, NV, CO, and NM",id:"record21"},{title:"Unite the Southeast",description:"Win all of FL, GA, SC, NC, VA, TN, AL, MS, AR, and LA",id:"record22"},{title:"Bellweather State?",description:"Win without Ohio",id:"record7"},{title:"Don't mess with Texas",description:"Win Texas as a Democrat",id:"record10"},{title:"Is this possible?",description:"Win California as a Republican",id:"record17"}];for(const a of i)(yield e.votes.getLocalStorage(a.id))?e.unlockedRecords.push(a):e.lockedRecords.push(a)})()}continue(){this.route.navigateByUrl("/results/final-map")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(g.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-records-page"]],decls:37,vars:9,consts:[[3,"translucent"],[1,"ion-text-center"],["fill","clear","id","click-triggerGH1"],["name","help-circle-outline"],["trigger","click-triggerGH1","triggerAction","click"],[3,"fullscreen"],[1,"ion-no-padding","bg-image"],[1,"title"],[2,"margin-left","20%"],["style","margin-top: 4px; margin-left: 6%; display: flex; height: 72px; width: 88%;",4,"ngFor","ngForOf"],[1,"fix-center"],[1,"button43",3,"click"],["name","arrow-back-circle-outline"],[1,"ion-padding"],[2,"margin-top","4px","margin-left","6%","display","flex","height","72px","width","88%"],[2,"width","64px","border-radius","10px 0px 0px 10px","border","black 2px solid","background-color","#606060"],["name","trophy",2,"color","#FFD700","font-size","48px","margin-left","3px","margin-right","3px","margin-top","8px","margin-bottom","8px"],[2,"border-radius","0px 10px 10px 0px","border","black 2px solid","width","100%","overflow","hidden","background-image","linear-gradient(to right, #ffffff 0%, #ffffff 50%, #c9cd9b 100%)"],[2,"margin-top","0","margin-bottom","0","margin-left","3px"],["name","lock-closed",2,"font-size","48px","margin-left","3px","margin-right","3px","margin-top","3px","margin-bottom","3px"],[2,"border-radius","0px 10px 10px 0px","border","black 2px solid","width","100%","overflow","hidden","background-image","linear-gradient(to right, #a2a2a2 0%, #a2a2a2 50%, #606060 100%)"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),t._uU(3," Achievements "),t.qZA(),t.TgZ(4,"ion-button",2),t._UZ(5,"ion-icon",3),t.qZA(),t.TgZ(6,"ion-popover",4),t.YNc(7,w,2,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",5)(9,"ion-grid",6)(10,"div",7)(11,"h1"),t._uU(12,"Game History:"),t.qZA()(),t.TgZ(13,"p",8),t._uU(14),t.qZA(),t.TgZ(15,"p",8),t._uU(16),t.qZA(),t.TgZ(17,"p",8),t._uU(18),t.qZA(),t.TgZ(19,"p",8),t._uU(20),t.qZA(),t.TgZ(21,"p",8),t._uU(22),t.qZA(),t.TgZ(23,"div",7)(24,"h1"),t._uU(25,"Achievements:"),t.qZA()(),t.YNc(26,T,9,2,"div",9),t.YNc(27,P,9,1,"div",9),t._UZ(28,"br")(29,"br")(30,"br")(31,"br")(32,"br"),t.TgZ(33,"div",10)(34,"ion-button",11),t.NdJ("click",function(){return i.continue()}),t._UZ(35,"ion-icon",12),t._uU(36,"Back To Election Results"),t.qZA()()()()),2&e&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0),t.xp6(6),t.hij("Games Played: ",i.plays||0,""),t.xp6(2),t.hij("Games won: ",i.wins||0,""),t.xp6(2),t.hij("Wins as Republican: ",i.repWins||0,""),t.xp6(2),t.hij("Wins as Democrat: ",i.demWins||0,""),t.xp6(2),t.hij("Most Electoral Votes Won: ",i.highVotes||0,""),t.xp6(4),t.Q6J("ngForOf",i.unlockedRecords),t.xp6(1),t.Q6J("ngForOf",i.lockedRecords))},dependencies:[r.YG,r.W2,r.jY,r.Gu,r.gu,r.d8,r.sr,r.wd,f.sg],styles:[".center[_ngcontent-%COMP%]{margin-left:3px;margin-right:3px;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.fix-center[_ngcontent-%COMP%]{position:fixed;bottom:16px;left:16px}.title[_ngcontent-%COMP%]{margin-left:3px;margin-right:3px;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),n})();var m=s(8005);function A(n,o){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16)(2,"h2"),t._uU(3,"You are the HOST"),t.qZA()(),t.TgZ(4,"div",16)(5,"p",17)(6,"em"),t._uU(7,"Tell your friend to enter the following join code:"),t.qZA()()(),t.TgZ(8,"div",16)(9,"h2"),t._uU(10),t.qZA()()()),2&n){const e=t.oxw();t.xp6(10),t.Oqu(e.hostCode)}}function C(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",15)(1,"div",16)(2,"h2"),t._uU(3,"You are JOINING a game"),t.qZA()(),t.TgZ(4,"div",16)(5,"p",17)(6,"em"),t._uU(7,"Get a 4-digit code from the host and enter it:"),t.qZA()()(),t.TgZ(8,"div",16)(9,"h1"),t._uU(10,"Code:\xa0"),t.qZA(),t.TgZ(11,"input",18),t.NdJ("keyup",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.verifyJoin())})("ngModelChange",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.joinCode=a)}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(11),t.Q6J("ngModel",e.joinCode)}}function U(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",19),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.joinSubmit())}),t.TgZ(1,"em"),t._uU(2,"Submit"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("disabled",4!==e.joinCode.length)}}function M(n,o){1&n&&(t.TgZ(0,"div",20)(1,"h2"),t._uU(2,"-- or --"),t.qZA()())}function O(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.host())}),t.TgZ(1,"em"),t._uU(2,"Host a game"),t.qZA()()}}function W(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.join())}),t.TgZ(1,"em"),t._uU(2,"Join a game"),t.qZA()()}}let q=(()=>{class n{constructor(e,i,a,c){this.route=e,this.votes=i,this.modalCtrl=a,this.multiplayer=c,this.joinSelected=!1,this.hostSelected=!1,this.hostCode="ABFED",this.joinCode="",this.loading=!1,this.loadingDots="...",this.readyToBegin=!1}ngOnInit(){}join(){this.joinSelected=!0,this.hostSelected=!1}host(){this.hostCode=this.multiplayer.createGame(),this.readyToBegin=!0,this.joinSelected=!1,this.hostSelected=!0}joinSubmit(){this.loading=!0,this.multiplayer.joinGame(this.joinCode)}continue(){this.joinSelected=!1,this.hostSelected=!1,this.loading=!1,this.route.navigateByUrl("/")}verifyJoin(){this.joinCode=this.joinCode.replace(/[^a-z]/gi,""),this.joinCode=this.joinCode.toUpperCase(),this.joinCode.length>4&&(this.joinCode=this.joinCode.slice(0,4))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(g.s),t.Y36(r.IN),t.Y36(m.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-host-page"]],decls:20,vars:7,consts:[[3,"fullscreen"],[1,"img-wrapper"],["src","../../assets/images/background6.png"],[1,"ion-no-padding"],[1,"background"],[1,"center"],[1,"centerwhite"],[1,"titleText"],["class","backed",4,"ngIf"],["class","button43 skinny",3,"disabled","click",4,"ngIf"],["class","centerdark","style","color: gray;",4,"ngIf"],["class","button43 skinny",3,"click",4,"ngIf"],[1,"fix-center"],[1,"button43",3,"click"],["name","arrow-back-circle-outline"],[1,"backed"],[1,"centerdark"],[2,"font-size","small","color","black","margin-top","0px"],["id","codeJoinInput","maxlength","4",3,"ngModel","keyup","ngModelChange"],[1,"button43","skinny",3,"disabled","click"],[1,"centerdark",2,"color","gray"],[1,"button43","skinny",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"ion-grid",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h1",7)(8,"em"),t._uU(9,"MULTIPLAYER"),t.qZA()()(),t.YNc(10,A,11,1,"div",8),t.YNc(11,C,12,1,"div",8),t.YNc(12,U,3,1,"ion-button",9),t.YNc(13,M,3,0,"div",10),t.YNc(14,O,3,0,"ion-button",11),t.YNc(15,W,3,0,"ion-button",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"ion-button",13),t.NdJ("click",function(){return i.continue()}),t._UZ(18,"ion-icon",14),t._uU(19,"Back To Main Menu"),t.qZA()()()),2&e&&(t.Q6J("fullscreen",!0),t.xp6(10),t.Q6J("ngIf",i.hostSelected),t.xp6(1),t.Q6J("ngIf",i.joinSelected),t.xp6(1),t.Q6J("ngIf",i.joinSelected),t.xp6(1),t.Q6J("ngIf",i.joinSelected||i.hostSelected),t.xp6(1),t.Q6J("ngIf",!i.hostSelected),t.xp6(1),t.Q6J("ngIf",!i.joinSelected))},dependencies:[r.YG,r.W2,r.jY,r.gu,f.O5,p.Fj,p.JJ,p.nD,p.On],styles:["input[_ngcontent-%COMP%]{display:block;margin:2px auto;border:none;padding:0;width:6ch;background:repeating-linear-gradient(90deg,dimgrey 0,dimgrey 1ch,transparent 0,transparent 1.5ch) 0 100%/5.5ch 2px no-repeat;font:5ch droid sans mono,consolas,monospace;letter-spacing:.5ch}input[_ngcontent-%COMP%]:focus{outline:none;color:#1e90ff}.backed[_ngcontent-%COMP%]{width:80%;margin-left:10%;background-color:#87bb77;border:black solid 2px;border-radius:8px;color:#000!important}.centerdark[_ngcontent-%COMP%]{color:#000;font-size:xx-large;font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.game-title[_ngcontent-%COMP%]{padding-top:40%;text-align:center;font-size:38px}.container[_ngcontent-%COMP%]{height:200px;position:relative}.titleText[_ngcontent-%COMP%]{font-size:40px;color:#fff;margin-bottom:0}.fix-center[_ngcontent-%COMP%]{position:fixed;bottom:16px;left:16px}.skinny[_ngcontent-%COMP%]{margin-left:20%;width:60%;margin-top:6px;margin-bottom:10px}.centerwhite[_ngcontent-%COMP%]{color:#fff;font-size:xx-large;font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}ion-button[_ngcontent-%COMP%]{--background: none;background-size:100% auto;background-image:linear-gradient(to right,#ff5e5e 0%,#ffffff 51%,#7649ff 100%)}.highcenter[_ngcontent-%COMP%]{position:absolute;color:#fff;top:20%;left:50%;width:90%;text-align:center;transform:translate(-50%,-50%);background:#5050ff;border-radius:20px;box-shadow:0 0 4px 4px #7878ff;opacity:.9}.center[_ngcontent-%COMP%]{width:95%;position:absolute;display:grid;top:50%;left:50%;transform:translate(-50%,-50%)}.img-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:-100% 0;margin:auto;width:100%}"]}),n})();var J=s(7176);const j=[{path:"",component:h},{path:"welcome",component:y},{path:"host-join",component:q},{path:"host-join/fail",component:(()=>{class n{constructor(e,i,a,c){this.route=e,this.votes=i,this.modalCtrl=a,this.multiplayer=c}ionViewWillEnter(){this.openModal(this.votes.turn>1?"Connection lost with your opponent.":"Invalid join code. Check the code you were given and try again.")}openModal(e,i="Connection Failed"){var a=this;return(0,d.Z)(function*(){const c=yield a.modalCtrl.create({component:J.L,componentProps:{message:e,title:i},cssClass:"small-modal"});c.onDidDismiss().then(()=>{a.route.navigateByUrl("/host-join")}),c.present(),yield c.onWillDismiss()})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(g.s),t.Y36(r.IN),t.Y36(m.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-host-fail-page"]],decls:10,vars:1,consts:[[3,"fullscreen"],[1,"img-wrapper"],["src","../../assets/images/background6.png"],[1,"ion-no-padding"],[1,"background"],[1,"center"],[1,"centerwhite"],[1,"titleText"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"ion-grid",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h1",7)(8,"em"),t._uU(9,"MULTIPLAYER"),t.qZA()()()()()()()),2&e&&t.Q6J("fullscreen",!0)},dependencies:[r.W2,r.jY],styles:["input[_ngcontent-%COMP%]{display:block;margin:2px auto;border:none;padding:0;width:6ch;background:repeating-linear-gradient(90deg,dimgrey 0,dimgrey 1ch,transparent 0,transparent 1.5ch) 0 100%/5.5ch 2px no-repeat;font:5ch droid sans mono,consolas,monospace;letter-spacing:.5ch}input[_ngcontent-%COMP%]:focus{outline:none;color:#1e90ff}.backed[_ngcontent-%COMP%]{width:80%;margin-left:10%;background-color:#87bb77;border:black solid 2px;border-radius:8px;color:#000!important}.centerdark[_ngcontent-%COMP%]{color:#000;font-size:xx-large;font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.game-title[_ngcontent-%COMP%]{padding-top:40%;text-align:center;font-size:38px}.container[_ngcontent-%COMP%]{height:200px;position:relative}.titleText[_ngcontent-%COMP%]{font-size:40px;color:#fff;margin-bottom:0}.fix-center[_ngcontent-%COMP%]{position:fixed;bottom:16px;left:16px}.skinny[_ngcontent-%COMP%]{margin-left:20%;width:60%;margin-top:6px;margin-bottom:10px}.centerwhite[_ngcontent-%COMP%]{color:#fff;font-size:xx-large;font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}ion-button[_ngcontent-%COMP%]{--background: none;background-size:100% auto;background-image:linear-gradient(to right,#ff5e5e 0%,#ffffff 51%,#7649ff 100%)}.highcenter[_ngcontent-%COMP%]{position:absolute;color:#fff;top:20%;left:50%;width:90%;text-align:center;transform:translate(-50%,-50%);background:#5050ff;border-radius:20px;box-shadow:0 0 4px 4px #7878ff;opacity:.9}.center[_ngcontent-%COMP%]{width:95%;position:absolute;display:grid;top:50%;left:50%;transform:translate(-50%,-50%)}.img-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:-100% 0;margin:auto;width:100%}"]}),n})()},{path:"records",component:b},{path:"records2",component:k}];let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(j),l.Bz]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Pc,f.ez,p.u5,S]}),n})()}}]);