"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3805],{3805:(N,s,l)=>{l.r(s),l.d(s,{Tab3PageModule:()=>M});var i=l(7609),c=l(8564),u=l(6895),p=l(4719),t=l(6738),f=l(1589);function d(e,o){1&e&&t._UZ(0,"img",10)}function m(e,o){1&e&&t._UZ(0,"img",11)}function _(e,o){1&e&&(t.TgZ(0,"ion-content",12)(1,"h3"),t._uU(2,"Instructions:"),t.qZA()())}let g=(()=>{class e{constructor(n,a){this.votes=n,this.router=a,this.partyName="",this.slot0=[1,2],this.slot1=[3],this.slot2=[4],this.slot3=[5,6]}ngOnInit(){this.isDemocrat=this.votes.getUserIsDem(),this.isThird=this.votes.getUserIsThird(),this.partyName=this.votes.thirdPartyName}campaign(){this.router.navigateByUrl("tabs/tab3/campaign")}turn(){this.router.navigateByUrl("tabs/tab3/turn")}fundraise(){this.router.navigateByUrl("tabs/tab3/fundraise")}debate(){this.router.navigateByUrl("tabs/tab3/debate")}event(){this.router.navigateByUrl("tabs/tab3/event")}advertise(){this.router.navigateByUrl("tabs/tab3/advertise")}reset(){window.confirm("Do you want to drop out of the race? All progress will be lost")&&(this.votes.reset(),this.router.navigateByUrl("/"))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.s),t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tab3"]],decls:37,vars:4,consts:[[3,"translucent"],["class","header-icon","src","../../assets/images/republicanIcon.png",4,"ngIf"],["class","header-icon","src","../../assets/images/democratIcon.png",4,"ngIf"],["fill","clear","id","click-trigger2"],["name","help-circle-outline"],["trigger","click-trigger2","triggerAction","click"],[3,"fullscreen"],[1,"center"],["role","button",1,"button-53",2,"padding-left","20px",3,"click"],["role","button",1,"button-53",2,"padding-left","20px","background-color","#ff6060",3,"click"],["src","../../assets/images/republicanIcon.png",1,"header-icon"],["src","../../assets/images/democratIcon.png",1,"header-icon"],[1,"ion-padding"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Instructions "),t.YNc(4,d,1,0,"img",1),t.YNc(5,m,1,0,"img",2),t.qZA(),t.TgZ(6,"ion-button",3),t._UZ(7,"ion-icon",4),t.qZA(),t.TgZ(8,"ion-popover",5),t.YNc(9,_,3,0,"ng-template"),t.qZA()()(),t.TgZ(10,"ion-content",6),t._UZ(11,"br")(12,"br")(13,"br"),t.TgZ(14,"div",7)(15,"button",8),t.NdJ("click",function(){return a.turn()}),t._uU(16,"What to do on my turn?"),t.qZA()(),t._UZ(17,"br"),t.TgZ(18,"div",7)(19,"button",8),t.NdJ("click",function(){return a.advertise()}),t._uU(20,"Info on Advertizing?"),t.qZA()(),t._UZ(21,"br"),t.TgZ(22,"div",7)(23,"button",8),t.NdJ("click",function(){return a.campaign()}),t._uU(24,"Info on Campaigning?"),t.qZA()(),t._UZ(25,"br"),t.TgZ(26,"div",7)(27,"button",8),t.NdJ("click",function(){return a.fundraise()}),t._uU(28,"Info on Fundraising?"),t.qZA()(),t._UZ(29,"br"),t.TgZ(30,"div",7)(31,"button",8),t.NdJ("click",function(){return a.event()}),t._uU(32,"Info on Special Events?"),t.qZA()(),t._UZ(33,"br"),t.TgZ(34,"div",7)(35,"button",9),t.NdJ("click",function(){return a.reset()}),t._uU(36,"Forfeit the race"),t.qZA()()()),2&n&&(t.Q6J("translucent",!1),t.xp6(4),t.Q6J("ngIf",!a.isDemocrat&&!a.isThird),t.xp6(1),t.Q6J("ngIf",a.isDemocrat&&!a.isThird),t.xp6(5),t.Q6J("fullscreen",!0))},dependencies:[i.YG,i.W2,i.Gu,i.gu,i.d8,i.sr,i.wd,u.O5],styles:["p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center}.centervert[_ngcontent-%COMP%]{position:absolute;display:grid;top:50%;left:50%;transform:translate(-50%,-50%)}.header-icon[_ngcontent-%COMP%]{position:fixed;right:10px;max-height:30px}.center[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),e})();var Z=l(581);function b(e,o){1&e&&(t.TgZ(0,"ion-content",8)(1,"h3"),t._uU(2,"Instructions:"),t.qZA()())}function v(e,o){1&e&&(t.TgZ(0,"ion-content",7)(1,"h3"),t._uU(2,"Instructions:"),t.qZA()())}function A(e,o){1&e&&(t.TgZ(0,"ion-content",7)(1,"h3"),t._uU(2,"Instructions:"),t.qZA()())}function P(e,o){1&e&&(t.TgZ(0,"ion-content",7)(1,"h3"),t._uU(2,"Instructions:"),t.qZA()())}function I(e,o){1&e&&(t.TgZ(0,"ion-content",7)(1,"h3"),t._uU(2,"Instructions:"),t.qZA()())}function k(e,o){1&e&&(t.TgZ(0,"ion-content",7)(1,"h3"),t._uU(2,"Instructions:"),t.qZA()())}const x=[{path:"",component:g},{path:"advertise",component:(()=>{class e{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-campaign"]],decls:47,vars:2,consts:[[3,"translucent"],["fill","clear","id","click-trigger2"],["name","help-circle-outline"],["trigger","click-trigger2","triggerAction","click"],[3,"fullscreen"],[1,"center"],[1,"group"],["role","button",1,"button-53",3,"click"],[1,"ion-padding"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Instructions "),t.qZA(),t.TgZ(4,"ion-button",1),t._UZ(5,"ion-icon",2),t.qZA(),t.TgZ(6,"ion-popover",3),t.YNc(7,b,3,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",4)(9,"div",5)(10,"h1"),t._uU(11,"Advertise"),t.qZA()(),t.TgZ(12,"div",5)(13,"p"),t._uU(14,"TV advertisements target a specific group of states"),t.qZA(),t.TgZ(15,"p"),t._uU(16,"They can be run after you have fundraised"),t.qZA()(),t.TgZ(17,"div",5)(18,"p"),t._uU(19,"The groups of states are:"),t.qZA()(),t.TgZ(20,"div",5)(21,"p",6),t._uU(22,"(HI, CA, WA, OR)"),t.qZA()(),t.TgZ(23,"div",5)(24,"p",6),t._uU(25," (WI, IA, MI, OH)"),t.qZA()(),t.TgZ(26,"div",5)(27,"p",6),t._uU(28,"(IL, MN)"),t.qZA()(),t.TgZ(29,"div",5)(30,"p",6),t._uU(31,"(FL, NC, GA))"),t.qZA()(),t.TgZ(32,"div",5)(33,"p",6),t._uU(34,"(ME, NH, VA, PA)"),t.qZA()(),t.TgZ(35,"div",5)(36,"p",6),t._uU(37,"(NM, CO, NV, AZ) "),t.qZA()(),t.TgZ(38,"div",5)(39,"p",6),t._uU(40,"(SC, MO, IN, MT, MS, AK, LA)"),t.qZA()(),t.TgZ(41,"div",5)(42,"p",6),t._uU(43,"(TX)"),t.qZA()(),t.TgZ(44,"div",5)(45,"button",7),t.NdJ("click",function(){return a.continue()}),t._uU(46,"Back to main HELP page"),t.qZA()()()),2&n&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0))},dependencies:[i.YG,i.W2,i.Gu,i.gu,i.d8,i.sr,i.wd],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.group[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:6px}"]}),e})()},{path:"campaign",component:(()=>{class e{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-campaign"]],decls:21,vars:2,consts:[[3,"translucent"],["role","button","fill","clear","id","click-trigger2",1,"button-53"],["name","help-circle-outline"],["trigger","click-trigger2","triggerAction","click"],[3,"fullscreen"],[1,"center"],["role","button",1,"button-53",3,"click"],[1,"ion-padding"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Instructions "),t.qZA(),t.TgZ(4,"ion-button",1),t._UZ(5,"ion-icon",2),t.qZA(),t.TgZ(6,"ion-popover",3),t.YNc(7,v,3,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",4)(9,"div",5)(10,"h1"),t._uU(11,"Campaign"),t.qZA()(),t.TgZ(12,"div",5)(13,"p"),t._uU(14,"Go to any state and campaign for free!"),t.qZA()(),t.TgZ(15,"div",5)(16,"p"),t._uU(17,"Campaigning in states that are further from your party affiliation will have less of an effect, so it is smart to campaign in states that have close races.\n"),t.qZA()(),t.TgZ(18,"div",5)(19,"button",6),t.NdJ("click",function(){return a.continue()}),t._uU(20,"Back to main HELP page"),t.qZA()()()),2&n&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0))},dependencies:[i.YG,i.W2,i.Gu,i.gu,i.d8,i.sr,i.wd],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.group[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:6px}"]}),e})()},{path:"debate",component:(()=>{class e{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-campaign"]],decls:21,vars:2,consts:[[3,"translucent"],["role","button","fill","clear","id","click-trigger2",1,"button-53"],["name","help-circle-outline"],["trigger","click-trigger2","triggerAction","click"],[3,"fullscreen"],[1,"center"],["role","button",1,"button-53",3,"click"],[1,"ion-padding"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Instructions "),t.qZA(),t.TgZ(4,"ion-button",1),t._UZ(5,"ion-icon",2),t.qZA(),t.TgZ(6,"ion-popover",3),t.YNc(7,A,3,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",4)(9,"div",5)(10,"h1"),t._uU(11,"Debate"),t.qZA()(),t.TgZ(12,"div",5)(13,"p"),t._uU(14,"You have seen the debates on TV, now you get to be in one!"),t.qZA()(),t.TgZ(15,"div",5)(16,"p"),t._uU(17,"Before rounds 4, 7 and 10 a debate is held and can move the climate 1 point either direction"),t.qZA()(),t.TgZ(18,"div",5)(19,"button",6),t.NdJ("click",function(){return a.continue()}),t._uU(20,"Back to main HELP page"),t.qZA()()()),2&n&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0))},dependencies:[i.YG,i.W2,i.Gu,i.gu,i.d8,i.sr,i.wd],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.group[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:6px}"]}),e})()},{path:"event",component:(()=>{class e{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-campaign"]],decls:24,vars:2,consts:[[3,"translucent"],["role","button","fill","clear","id","click-trigger2",1,"button-53"],["name","help-circle-outline"],["trigger","click-trigger2","triggerAction","click"],[3,"fullscreen"],[1,"center"],["role","button",1,"button-53",3,"click"],[1,"ion-padding"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Instructions "),t.qZA(),t.TgZ(4,"ion-button",1),t._UZ(5,"ion-icon",2),t.qZA(),t.TgZ(6,"ion-popover",3),t.YNc(7,P,3,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",4)(9,"div",5)(10,"h1"),t._uU(11,"Event"),t.qZA()(),t.TgZ(12,"div",5)(13,"p"),t._uU(14,"Special Events happen every other round! A total of 8 will occur"),t.qZA()(),t.TgZ(15,"div",5)(16,"p"),t._uU(17,"Some events will affect a few states, and some will affect the entire country"),t.qZA()(),t.TgZ(18,"div",5)(19,"p"),t._uU(20,"Many of the events are based on real events from history!"),t.qZA()(),t.TgZ(21,"div",5)(22,"button",6),t.NdJ("click",function(){return a.continue()}),t._uU(23,"Back to main HELP page"),t.qZA()()()),2&n&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0))},dependencies:[i.YG,i.W2,i.Gu,i.gu,i.d8,i.sr,i.wd],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.group[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:6px}"]}),e})()},{path:"fundraise",component:(()=>{class e{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-campaign"]],decls:21,vars:2,consts:[[3,"translucent"],["role","button","fill","clear","id","click-trigger2",1,"button-53"],["name","help-circle-outline"],["trigger","click-trigger2","triggerAction","click"],[3,"fullscreen"],[1,"center"],["role","button",1,"button-53",3,"click"],[1,"ion-padding"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Instructions "),t.qZA(),t.TgZ(4,"ion-button",1),t._UZ(5,"ion-icon",2),t.qZA(),t.TgZ(6,"ion-popover",3),t.YNc(7,I,3,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",4)(9,"div",5)(10,"h1"),t._uU(11,"Fundraise"),t.qZA()(),t.TgZ(12,"div",5)(13,"p"),t._uU(14,"You need money to run Advertising. Advertising is a very powerful tool to swaying the vote, so it is worth the investment of a turn to fundraise."),t.qZA()(),t.TgZ(15,"div",5)(16,"p"),t._uU(17,"Each time you fundraise, you will earn $10 million or $20 million, which will allow you to run 1 or 2 advertisements "),t.qZA()(),t.TgZ(18,"div",5)(19,"button",6),t.NdJ("click",function(){return a.continue()}),t._uU(20,"Back to main HELP page"),t.qZA()()()),2&n&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0))},dependencies:[i.YG,i.W2,i.Gu,i.gu,i.d8,i.sr,i.wd],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.group[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:6px}"]}),e})()},{path:"turn",component:(()=>{class e{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-campaign"]],decls:24,vars:2,consts:[[3,"translucent"],["role","button","fill","clear","id","click-trigger2",1,"button-53"],["name","help-circle-outline"],["trigger","click-trigger2","triggerAction","click"],[3,"fullscreen"],[1,"center"],["role","button",1,"button-53",3,"click"],[1,"ion-padding"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Instructions "),t.qZA(),t.TgZ(4,"ion-button",1),t._UZ(5,"ion-icon",2),t.qZA(),t.TgZ(6,"ion-popover",3),t.YNc(7,k,3,0,"ng-template"),t.qZA()()(),t.TgZ(8,"ion-content",4)(9,"div",5)(10,"h1"),t._uU(11,"Turn"),t.qZA()(),t.TgZ(12,"div",5)(13,"p"),t._uU(14,"On your turn you select CAMPAIGN, ADVERTIZE, or FUNDRAISE."),t.qZA()(),t.TgZ(15,"div",5)(16,"p"),t._uU(17,"Go ahead and try them all out! Each is an important part of a winning campaign"),t.qZA()(),t.TgZ(18,"div",5)(19,"p"),t._uU(20,"You get a turn each round for a total of 16"),t.qZA()(),t.TgZ(21,"div",5)(22,"button",6),t.NdJ("click",function(){return a.continue()}),t._uU(23,"Back to main HELP page"),t.qZA()()()),2&n&&(t.Q6J("translucent",!1),t.xp6(8),t.Q6J("fullscreen",!0))},dependencies:[i.YG,i.W2,i.Gu,i.gu,i.d8,i.sr,i.wd],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}.group[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:6px}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(x),c.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Pc,u.ez,p.u5,Z.e,c.Bz.forChild([{path:"",component:g}]),C]}),e})()}}]);