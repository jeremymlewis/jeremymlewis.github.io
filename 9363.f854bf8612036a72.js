"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9363],{581:(m,d,n)=>{n.d(d,{e:()=>w});var o=n(6895),i=n(4719),g=n(7609),l=n(6738);let w=(()=>{class h{}return h.\u0275fac=function(c){return new(c||h)},h.\u0275mod=l.oAB({type:h}),h.\u0275inj=l.cJS({imports:[o.ez,i.u5,g.Pc]}),h})()},1589:(m,d,n)=>{n.d(d,{s:()=>h});var o=n(5861);class i{constructor(c,e,t,s,a,u){this.name=c,this.protected="",this.thirdPercent=-1,this.abbreviation=e,this.college=t,this.demPercent=s,this.repPercent=a,this.leansDem=s-a,this.leansRep=a-s,this.decided=u||!1}}var l=n(6738),w=n(849);let h=(()=>{class r{constructor(e){this.storage=e,this.isDemocrat=!0,this.isThird=!1,this.thirdName="",this.thirdPartyName="",this.opponentFunds=0,this.funds=0,this.round=9,this.turn=0,this.Alabama=new i("Alabama","AL",9,32,49),this.Alaska=new i("Alaska","AK",3,33,48),this.Arizona=new i("Arizona","AZ",11,40,41),this.Arkansas=new i("Arkansas","AR",6,32,49),this.California=new i("California","CA",54,52,30),this.Colorado=new i("Colorado","CO",10,42,39),this.Connecticut=new i("Connecticut","CT",7,46,35),this.Delaware=new i("Delaware","DE",3,45,35),this.DC=new i("D.C.","DC",3,75,7),this.Florida=new i("Florida","FL",30,39,41),this.Georgia=new i("Georgia","GA",16,39,42),this.Hawaii=new i("Hawaii","HI",4,53,28),this.Idaho=new i("Idaho","ID",4,30,51),this.Illinois=new i("Illinois","IL",19,48,34),this.Indiana=new i("Indiana","IN",11,30,51),this.Iowa=new i("Iowa","IA",6,39,43),this.Kansas=new i("Kansas","KS",6,32,49),this.Kentucky=new i("Kentucky","KY",8,30,51),this.Louisiana=new i("Louisiana","LA",8,32,49),this.Maine=new i("Maine","ME",4,43,39),this.Maryland=new i("Maryland","MD",10,51,31),this.Massachusetts=new i("Massachusetts","MA",11,52,30),this.Michigan=new i("Michigan","MI",15,42,39),this.Minnesota=new i("Minnesota","MN",10,44,39),this.Mississippi=new i("Mississippi","MS",6,34,48),this.Missouri=new i("Missouri","MO",10,34,46),this.Montana=new i("Montana","MT",4,34,47),this.Nebraska=new i("Nebraska","NE",5,32,49),this.Nevada=new i("Nevada","NV",6,41,40),this.NewHampshire=new i("New Hampshire","NH",4,42,39),this.NewJersey=new i("New Jersey","NJ",14,48,34),this.NewMexico=new i("New Mexico","NM",5,44,37),this.NewYork=new i("New York","NY",28,52,30),this.NorthCarolina=new i("North Carolina","NC",16,40,42),this.NorthDakota=new i("North Dakota","ND",3,31,51),this.Ohio=new i("Ohio","OH",17,38,43),this.Oklahoma=new i("Oklahoma","OK",7,30,51),this.Oregon=new i("Oregon","OR",8,45,37),this.Pennsylvania=new i("Pennsylvania","PA",19,42,40),this.RhodeIsland=new i("Rhode Island","RI",4,50,32),this.SouthCarolina=new i("South Carolina","SC",9,35,46),this.SouthDakota=new i("South Dakota","SD",3,31,51),this.Tennessee=new i("Tennessee","TN",11,32,49),this.Texas=new i("Texas","TX",40,37,44),this.Utah=new i("Utah","UT",6,32,49),this.Vermont=new i("Vermont","VT",3,52,30),this.Virginia=new i("Virginia","VA",13,42,39),this.Washington=new i("Washington","WA",12,46,35),this.WestVirginia=new i("West Virginia","WV",4,30,51),this.Wisconsin=new i("Wisconsin","WI",10,41,39),this.Wyoming=new i("Wyoming","WY",3,29,53),this.states=[],this.NationalClimate=0,this._storage=null,this.init(),this.states=[this.Alabama,this.Alaska,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.DC,this.Florida,this.Georgia,this.Hawaii,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}init(){var e=this;return(0,o.Z)(function*(){const t=yield e.storage.create();e._storage=t})()}addGameStats(e,t,s){var a=this;return(0,o.Z)(function*(){const u=yield a.getLocalStorage("plays"),f=yield a.getLocalStorage("wins"),N=yield a.getLocalStorage("demWins"),M=yield a.getLocalStorage("repWind"),b=yield a.getLocalStorage("highVotes");a.setLocalStorage("plays",Number(u)+1),s>Number(b)&&a.setLocalStorage("highVotes",s),e&&(a.setLocalStorage("wins",Number(f)+1),t?a.setLocalStorage("demWins",Number(N)+1):a.setLocalStorage("repWins",Number(M)+1))})()}setLocalStorage(e,t){this._storage?.set(e,t)}getLocalStorage(e){var t=this;return(0,o.Z)(function*(){return yield t._storage?.get(e)})()}getUserIsThird(){return this.isThird}setUserIsThird(e){this.isThird=e;for(const t of this.states)t.thirdPercent=2}setThirdPartyName(e){this.thirdName=e}getThirdPartyName(){return this.thirdName}getUserIsDem(){return this.isDemocrat}setUserIsDem(e){this.isDemocrat=e;for(const t of this.states)(t.leansDem>17&&!e||t.leansRep>14&&e)&&(t.protected="*")}getAllStates(){return this.states}getSortedStates(e=51){const t=[];return this.states.forEach(s=>{t.push(s)}),t.sort(function(s,a){return Math.abs(s.demPercent-s.repPercent)-Math.abs(a.demPercent-a.repPercent)}),t.slice(0,e)}getSortedGroups(e=0){const t=this.getSortedStates();return"HI"===t[e].abbreviation||"CA"===t[e].abbreviation||"WA"===t[e].abbreviation||"OR"===t[e].abbreviation?["HI","CA","WA","OR"]:"IL"===t[e].abbreviation||"MN"===t[e].abbreviation?["IL","MN"]:"NM"===t[e].abbreviation||"CO"===t[e].abbreviation||"NV"===t[e].abbreviation||"AZ"===t[e].abbreviation?["NM","CO","NV","AZ"]:"ME"===t[e].abbreviation||"NH"===t[e].abbreviation||"VA"===t[e].abbreviation||"PA"===t[e].abbreviation?["ME","NH","VA","PA"]:"WI"===t[e].abbreviation||"IA"===t[e].abbreviation||"MI"===t[e].abbreviation||"OH"===t[e].abbreviation?["WI","IA","MI","OH"]:"FL"===t[e].abbreviation||"NC"===t[e].abbreviation||"GA"===t[e].abbreviation?["FL","NC","GA"]:"TX"===t[e].abbreviation?["TX"]:"SC"===t[e].abbreviation||"MO"===t[e].abbreviation||"IN"===t[e].abbreviation||"MT"===t[e].abbreviation||"AK"===t[e].abbreviation||"MS"===t[e].abbreviation||"LA"===t[e].abbreviation?["SC","MO","IN","MT","MS","AK","LA"]:(e+=1)>49?[]:this.getSortedGroups(e)}getCurrentScore(){if(this.isThird)return 0;let e=0,t=0;for(const s of this.states)s.leansDem>0&&(e+=s.college),s.leansRep>0&&(t+=s.college);return this.isDemocrat?t-270:e-270}getDecidedStates(){const e=[];for(const t of this.states)t.decided&&e.push(t);return e}getSafeStates(){const e=[];for(const t of this.states)(t.leansDem>=21||t.leansRep>=15)&&e.push(t);return e}getLeftLeanStates(){const e=[];for(const t of this.states)t.leansDem>=5&&t.leansDem<18&&e.push(t);return e}getRightLeanStates(){const e=[];for(const t of this.states)t.leansRep>=5&&t.leansRep<20&&e.push(t);return e}getTossUpsLeft(){const e=[];for(const t of this.states)t.leansDem>0&&t.leansDem<5&&e.push(t);return e}getTossUps(){const e=[];for(const t of this.states)0===t.leansDem&&e.push(t);return e}getTossUpsRight(){const e=[];for(const t of this.states)t.leansRep>0&&t.leansRep<5&&e.push(t);return e}changeNationalClimate(e,t){this.NationalClimate+=t,this.NationalClimate-=e;for(const s of this.states)s.demPercent+=e,s.repPercent+=t,s.leansDem=s.demPercent-s.repPercent,s.leansRep=s.repPercent-s.demPercent}changeStateClimate(e,t,s){for(const a of this.states)a.abbreviation===e&&(a.demPercent+=t,a.repPercent+=s,a.leansDem=a.demPercent-a.repPercent,a.leansRep=a.repPercent-a.demPercent)}neutralizeStateClimate(e){for(const t of this.states)t.abbreviation===e&&(t.decided=!1,t.leansDem=0,t.demPercent=40,t.repPercent=40,t.leansRep=0)}getFinalRed(){let e=0;for(const t of this.states)t.repPercent>t.demPercent&&(e+=t.college,t.decided=!0),t.repPercent===t.demPercent&&this.NationalClimate>=0&&(this.changeStateClimate(t.abbreviation,-1,1),e+=t.college,t.decided=!0);return e}getFinalBlue(){let e=0;for(const t of this.states)t.repPercent<t.demPercent&&(e+=t.college,t.decided=!0),t.repPercent===t.demPercent&&this.NationalClimate<0&&(this.changeStateClimate(t.abbreviation,1,-1),e+=t.college,t.decided=!0);return e}getUserWon(){if(269===this.getFinalBlue()){const e=this.getSortedStates(10);let t=0;for(;269===this.getFinalBlue();)this.isDemocrat&&(e[t].repPercent-e[t].demPercent>0?this.changeStateClimate(e[t].abbreviation,1,-1):t++),this.isDemocrat||(e[t].demPercent-e[t].repPercent>0?this.changeStateClimate(e[t].abbreviation,-1,1):t++)}return!!(this.getFinalBlue()>269&&this.isDemocrat)||!(this.getFinalBlue()>269&&!this.isDemocrat)&&this.getFinalRed()>269&&!this.isDemocrat}reset(){this.isDemocrat=!0,this.isThird=!1,this.funds=0,this.opponentFunds=0,this.round=1,this.turn=0,this.NationalClimate=0,this.Alabama=new i("Alabama","AL",9,32,49),this.Alaska=new i("Alaska","AK",3,33,48),this.Arizona=new i("Arizona","AZ",11,40,41),this.Arkansas=new i("Arkansas","AR",6,32,49),this.California=new i("California","CA",54,52,30),this.Colorado=new i("Colorado","CO",10,42,39),this.Connecticut=new i("Connecticut","CT",7,46,35),this.Delaware=new i("Delaware","DE",3,45,35),this.DC=new i("D.C.","DC",3,75,7),this.Florida=new i("Florida","FL",30,39,41),this.Georgia=new i("Georgia","GA",16,39,42),this.Hawaii=new i("Hawaii","HI",4,53,28),this.Idaho=new i("Idaho","ID",4,30,51),this.Illinois=new i("Illinois","IL",19,48,34),this.Indiana=new i("Indiana","IN",11,30,51),this.Iowa=new i("Iowa","IA",6,39,43),this.Kansas=new i("Kansas","KS",6,32,49),this.Kentucky=new i("Kentucky","KY",8,30,51),this.Louisiana=new i("Louisiana","LA",8,32,49),this.Maine=new i("Maine","ME",4,43,39),this.Maryland=new i("Maryland","MD",10,51,31),this.Massachusetts=new i("Massachusetts","MA",11,52,30),this.Michigan=new i("Michigan","MI",15,42,39),this.Minnesota=new i("Minnesota","MN",10,44,39),this.Mississippi=new i("Mississippi","MS",6,34,48),this.Missouri=new i("Missouri","MO",10,34,46),this.Montana=new i("Montana","MT",4,34,47),this.Nebraska=new i("Nebraska","NE",5,32,49),this.Nevada=new i("Nevada","NV",6,41,40),this.NewHampshire=new i("New Hampshire","NH",4,42,39),this.NewJersey=new i("New Jersey","NJ",14,48,34),this.NewMexico=new i("New Mexico","NM",5,44,37),this.NewYork=new i("New York","NY",28,52,30),this.NorthCarolina=new i("North Carolina","NC",16,40,42),this.NorthDakota=new i("North Dakota","ND",3,31,51),this.Ohio=new i("Ohio","OH",17,38,43),this.Oklahoma=new i("Oklahoma","OK",7,30,51),this.Oregon=new i("Oregon","OR",8,45,37),this.Pennsylvania=new i("Pennsylvania","PA",19,42,40),this.RhodeIsland=new i("Rhode Island","RI",4,50,32),this.SouthCarolina=new i("South Carolina","SC",9,35,46),this.SouthDakota=new i("South Dakota","SD",3,31,51),this.Tennessee=new i("Tennessee","TN",11,32,49),this.Texas=new i("Texas","TX",40,37,44),this.Utah=new i("Utah","UT",6,32,49),this.Vermont=new i("Vermont","VT",3,52,30),this.Virginia=new i("Virginia","VA",13,42,39),this.Washington=new i("Washington","WA",12,46,35),this.WestVirginia=new i("West Virginia","WV",4,30,51),this.Wisconsin=new i("Wisconsin","WI",10,41,39),this.Wyoming=new i("Wyoming","WY",3,29,53),this.states=[],this.states=[this.Alabama,this.Alaska,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.DC,this.Florida,this.Georgia,this.Hawaii,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}getStateIconByAbrev(e){e=e.toUpperCase();for(const t of this.states)if(t.abbreviation===e){const s=t.name.replace(/ /g,"-");return t.abbreviation+"-"+s+".png"}}getStateIconByName(e){for(const t of this.states)if(t.name===e){const s=t.name.replace(/ /g,"-");return t.abbreviation+"-"+s+".png"}}}return r.\u0275fac=function(e){return new(e||r)(l.LFG(w.K))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);