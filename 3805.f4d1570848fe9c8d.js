"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3805],{3805:(h,u,s)=>{s.r(u),s.d(u,{Tab3PageModule:()=>b});var o=s(7609),c=s(8564),l=s(6895),f=s(4719),e=s(6738),p=s(1589);function d(t,a){1&t&&e._UZ(0,"img",10)}function m(t,a){1&t&&e._UZ(0,"img",11)}let g=(()=>{class t{constructor(n,i){this.votes=n,this.router=i}ngOnInit(){this.isDemocrat=this.votes.getUserIsDem()}campaign(){this.router.navigateByUrl("tabs/tab3/campaign")}turn(){this.router.navigateByUrl("tabs/tab3/turn")}fundraise(){this.router.navigateByUrl("tabs/tab3/fundraise")}debate(){this.router.navigateByUrl("tabs/tab3/debate")}event(){this.router.navigateByUrl("tabs/tab3/event")}advertise(){this.router.navigateByUrl("tabs/tab3/advertise")}reset(){window.confirm("Do you want to drop out of the race? All progress will be lost")&&(this.votes.reset(),this.router.navigateByUrl("/"))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.s),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab3"]],decls:29,vars:4,consts:[[3,"translucent"],["class","header-icon","src","../../assets/images/republicanIcon.png",4,"ngIf"],["class","header-icon","src","../../assets/images/democratIcon.png",4,"ngIf"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"center"],["id","aid","src","../../../assets/images/aid.png"],[2,"padding-left","20px",3,"click"],["color","danger",2,"padding-left","20px",3,"click"],["src","../../assets/images/republicanIcon.png",1,"header-icon"],["src","../../assets/images/democratIcon.png",1,"header-icon"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Instructions "),e.YNc(4,d,1,0,"img",1),e.YNc(5,m,1,0,"img",2),e.qZA()()(),e.TgZ(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),e._uU(10,"Instructions"),e.qZA()()(),e.TgZ(11,"div",6)(12,"p"),e._uU(13,"Hello Senator! How can I help you?"),e.qZA()(),e._UZ(14,"img",7),e.TgZ(15,"ion-button",8),e.NdJ("click",function(){return i.turn()}),e._uU(16,"What to do on my turn?"),e.qZA(),e.TgZ(17,"ion-button",8),e.NdJ("click",function(){return i.advertise()}),e._uU(18,"Info on Advertizing?"),e.qZA(),e.TgZ(19,"ion-button",8),e.NdJ("click",function(){return i.campaign()}),e._uU(20,"Info on Campaigning?"),e.qZA(),e.TgZ(21,"ion-button",8),e.NdJ("click",function(){return i.fundraise()}),e._uU(22,"Info on Fundraising?"),e.qZA(),e.TgZ(23,"ion-button",8),e.NdJ("click",function(){return i.debate()}),e._uU(24,"Info on Debates?"),e.qZA(),e.TgZ(25,"ion-button",8),e.NdJ("click",function(){return i.event()}),e._uU(26,"Info on Special Events?"),e.qZA(),e.TgZ(27,"ion-button",9),e.NdJ("click",function(){return i.reset()}),e._uU(28,"Forfeit the race"),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("ngIf",!i.isDemocrat),e.xp6(1),e.Q6J("ngIf",i.isDemocrat),e.xp6(1),e.Q6J("fullscreen",!0))},dependencies:[o.YG,o.W2,o.Gu,o.sr,o.wd,l.O5],styles:["p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{text-align:center}.header-icon[_ngcontent-%COMP%]{position:fixed;right:10px;max-height:30px}.center[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),t})();var _=s(581);const v=[{path:"",component:g},{path:"advertise",component:(()=>{class t{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-campaign"]],decls:13,vars:1,consts:[[3,"fullscreen"],[1,"center"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"h1"),e._uU(3,"Advertise"),e.qZA()(),e.TgZ(4,"div",1)(5,"p"),e._uU(6,"After fundraising you can target a group of states with a TV advertisement"),e.qZA()(),e.TgZ(7,"div",1)(8,"p"),e._uU(9,"The groups of states are: (HI, CA, WA, OR) (WI, IA, MI, OH) (IL, MN) (FL, NC, GA) (TX) (ME, NH, VA, PA) (NM, CO, NV, AZ) (SC, MO, IN, MT, MS, AK, LA)"),e.qZA()(),e.TgZ(10,"div",1)(11,"ion-button",2),e.NdJ("click",function(){return i.continue()}),e._uU(12,"Back to main HELP page"),e.qZA()()()),2&n&&e.Q6J("fullscreen",!0)},dependencies:[o.YG,o.W2],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),t})()},{path:"campaign",component:(()=>{class t{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-campaign"]],decls:13,vars:1,consts:[[3,"fullscreen"],[1,"center"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"h1"),e._uU(3,"Campaign"),e.qZA()(),e.TgZ(4,"div",1)(5,"p"),e._uU(6,"Go to any state and campaign for free!"),e.qZA()(),e.TgZ(7,"div",1)(8,"p"),e._uU(9,"Campaigning in states that are further from your party affiliation will have less of an effect."),e.qZA()(),e.TgZ(10,"div",1)(11,"ion-button",2),e.NdJ("click",function(){return i.continue()}),e._uU(12,"Back to main HELP page"),e.qZA()()()),2&n&&e.Q6J("fullscreen",!0)},dependencies:[o.YG,o.W2],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),t})()},{path:"debate",component:(()=>{class t{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-campaign"]],decls:13,vars:1,consts:[[3,"fullscreen"],[1,"center"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"h1"),e._uU(3,"Debate"),e.qZA()(),e.TgZ(4,"div",1)(5,"p"),e._uU(6,"You have seen the debates on TV, now you get to be in one!"),e.qZA()(),e.TgZ(7,"div",1)(8,"p"),e._uU(9,"Before rounds 4, 7 and 10 a debate is held and can move the climate 1 point either direction"),e.qZA()(),e.TgZ(10,"div",1)(11,"ion-button",2),e.NdJ("click",function(){return i.continue()}),e._uU(12,"Back to main HELP page"),e.qZA()()()),2&n&&e.Q6J("fullscreen",!0)},dependencies:[o.YG,o.W2],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),t})()},{path:"event",component:(()=>{class t{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-campaign"]],decls:13,vars:1,consts:[[3,"fullscreen"],[1,"center"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"h1"),e._uU(3,"Event"),e.qZA()(),e.TgZ(4,"div",1)(5,"p"),e._uU(6,"Events that help you include Endorsement, SuperPac, and Media Tour"),e.qZA()(),e.TgZ(7,"div",1)(8,"p"),e._uU(9,"Events that hurt you include hot topic, Scandal, Gaff and a few more"),e.qZA()(),e.TgZ(10,"div",1)(11,"ion-button",2),e.NdJ("click",function(){return i.continue()}),e._uU(12,"Back to main HELP page"),e.qZA()()()),2&n&&e.Q6J("fullscreen",!0)},dependencies:[o.YG,o.W2],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),t})()},{path:"fundraise",component:(()=>{class t{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-campaign"]],decls:10,vars:1,consts:[[3,"fullscreen"],[1,"center"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"h1"),e._uU(3,"Fundraise"),e.qZA()(),e.TgZ(4,"div",1)(5,"p"),e._uU(6,"You need money to run Advertising. Advertising is a very powerful tool to swaying the vote, so it is worth the investment of a turn to fundraise."),e.qZA()(),e.TgZ(7,"div",1)(8,"ion-button",2),e.NdJ("click",function(){return i.continue()}),e._uU(9,"Back to main HELP page"),e.qZA()()()),2&n&&e.Q6J("fullscreen",!0)},dependencies:[o.YG,o.W2],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),t})()},{path:"turn",component:(()=>{class t{constructor(n){this.router=n}continue(){this.router.navigateByUrl("/tabs/tab3")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-campaign"]],decls:13,vars:1,consts:[[3,"fullscreen"],[1,"center"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"h1"),e._uU(3,"Turn"),e.qZA()(),e.TgZ(4,"div",1)(5,"p"),e._uU(6,"On your turn you select CAMPAIGN, ADVERTIZE, or FUNDRAISE."),e.qZA()(),e.TgZ(7,"div",1)(8,"p"),e._uU(9,"Go ahead and try them all out! Each is an important part of a winning campaign"),e.qZA()(),e.TgZ(10,"div",1)(11,"ion-button",2),e.NdJ("click",function(){return i.continue()}),e._uU(12,"Back to main HELP page"),e.qZA()()()),2&n&&e.Q6J("fullscreen",!0)},dependencies:[o.YG,o.W2],styles:[".center[_ngcontent-%COMP%]{font-size:large;text-align:center;display:flex;justify-content:center;align-items:center;left:50%}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(v),c.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.Pc,l.ez,f.u5,_.e,c.Bz.forChild([{path:"",component:g}]),T]}),t})()}}]);