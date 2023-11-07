"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1589],{1589:(b,m,d)=>{d.d(m,{s:()=>f});var u=d(5861);class i{constructor(w,t,e,a,s,r){this.name=w,this.protected="",this.thirdPercent=-1,this.abbreviation=t,this.college=e,this.demPercent=a,this.repPercent=s,this.leansDem=a-s,this.leansRep=s-a,this.decided=r||!1}}var g=d(6738),N=d(849);let f=(()=>{class n{constructor(t){this.storage=t,this.actionPending=!1,this.progressMessage="",this.progress=0,this.isDemocrat=!0,this.isThird=!1,this.thirdName="",this.background={},this.thirdPartyName="",this.opponentFunds=0,this.funds=0,this.round=1,this.turn=0,this.Alabama=new i("Alabama","AL",9,32,49),this.Alaska=new i("Alaska","AK",3,33,48),this.Arizona=new i("Arizona","AZ",11,40,41),this.Arkansas=new i("Arkansas","AR",6,32,49),this.California=new i("California","CA",54,52,30),this.Colorado=new i("Colorado","CO",10,42,39),this.Connecticut=new i("Connecticut","CT",7,46,35),this.Delaware=new i("Delaware","DE",3,45,35),this.DC=new i("DC","DC",3,75,7),this.Florida=new i("Florida","FL",30,39,41),this.Georgia=new i("Georgia","GA",16,39,42),this.Hawaii=new i("Hawaii","HI",4,53,28),this.Idaho=new i("Idaho","ID",4,30,51),this.Illinois=new i("Illinois","IL",19,48,34),this.Indiana=new i("Indiana","IN",11,30,51),this.Iowa=new i("Iowa","IA",6,39,43),this.Kansas=new i("Kansas","KS",6,32,49),this.Kentucky=new i("Kentucky","KY",8,30,51),this.Louisiana=new i("Louisiana","LA",8,32,49),this.Maine=new i("Maine","ME",4,43,39),this.Maryland=new i("Maryland","MD",10,51,31),this.Massachusetts=new i("Massachusetts","MA",11,52,30),this.Michigan=new i("Michigan","MI",15,42,39),this.Minnesota=new i("Minnesota","MN",10,44,39),this.Mississippi=new i("Mississippi","MS",6,34,48),this.Missouri=new i("Missouri","MO",10,34,46),this.Montana=new i("Montana","MT",4,34,47),this.Nebraska=new i("Nebraska","NE",5,32,49),this.Nevada=new i("Nevada","NV",6,40,41),this.NewHampshire=new i("New Hampshire","NH",4,42,39),this.NewJersey=new i("New Jersey","NJ",14,48,34),this.NewMexico=new i("New Mexico","NM",5,44,37),this.NewYork=new i("New York","NY",28,52,30),this.NorthCarolina=new i("North Carolina","NC",16,40,42),this.NorthDakota=new i("North Dakota","ND",3,31,51),this.Ohio=new i("Ohio","OH",17,38,43),this.Oklahoma=new i("Oklahoma","OK",7,30,51),this.Oregon=new i("Oregon","OR",8,45,37),this.Pennsylvania=new i("Pennsylvania","PA",19,42,40),this.RhodeIsland=new i("Rhode Island","RI",4,50,32),this.SouthCarolina=new i("South Carolina","SC",9,35,46),this.SouthDakota=new i("South Dakota","SD",3,31,51),this.Tennessee=new i("Tennessee","TN",11,32,49),this.Texas=new i("Texas","TX",40,37,44),this.Utah=new i("Utah","UT",6,32,49),this.Vermont=new i("Vermont","VT",3,52,30),this.Virginia=new i("Virginia","VA",13,42,39),this.Washington=new i("Washington","WA",12,46,35),this.WestVirginia=new i("West Virginia","WV",4,30,51),this.Wisconsin=new i("Wisconsin","WI",10,41,39),this.Wyoming=new i("Wyoming","WY",3,29,53),this.states=[],this.NationalClimate=0,this._storage=null,this.init(),this.states=[this.Alabama,this.Alaska,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.DC,this.Florida,this.Georgia,this.Hawaii,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}init(){var t=this;return(0,u.Z)(function*(){const e=yield t.storage.create();t._storage=e})()}addGameStats(t,e,a){var s=this;return(0,u.Z)(function*(){console.log("add game stats");let r=yield s.getLocalStorage("plays"),h=yield s.getLocalStorage("wins"),o=yield s.getLocalStorage("demWins"),l=yield s.getLocalStorage("repWind"),c=yield s.getLocalStorage("highVotes");h=Number(h),o=Number(o),l=Number(l),c=Number(c),r=Number(r),Number.isNaN(h)&&(h=0),Number.isNaN(r)&&(r=0),Number.isNaN(o)&&(o=0),Number.isNaN(l)&&(l=0),Number.isNaN(c)&&(c=0),console.log(r),console.log(h),console.log(o),console.log(l),console.log(c),s.setLocalStorage("plays",Number(r)+1),a>Number(c)&&s.setLocalStorage("highVotes",a),t&&(s.setLocalStorage("wins",h+1),e?s.setLocalStorage("demWins",o+1):s.setLocalStorage("repWins",l+1))})()}setLocalStorage(t,e){this._storage?.set(t,e)}getLocalStorage(t){var e=this;return(0,u.Z)(function*(){return yield e._storage?.get(t)})()}finalizeVotes(){for(const t of this.states){const e=Math.floor(11*Math.random())+1;let s=0;Math.floor(100*Math.random())+1>65?s+=e/10:s-=e/10,this.isDemocrat?this.changeStateClimate(t.abbreviation,s,0):this.changeStateClimate(t.abbreviation,0,s),t.leansDem===t.leansRep&&(this.isDemocrat?this.changeStateClimate(t.abbreviation,s,0):this.changeStateClimate(t.abbreviation,0,s))}}getUserIsThird(){return this.isThird}setUserIsThird(t){this.isThird=t;for(const e of this.states)e.thirdPercent=2}setBackground(t){this.background=t}setThirdPartyName(t){this.thirdName=t}getThirdPartyName(){return this.thirdName}getUserIsDem(){return this.isDemocrat}setUserIsDem(t){this.isDemocrat=t;for(const e of this.states)(e.leansDem>17&&!t||e.leansRep>14&&t)&&(e.protected="*")}getAllStates(){return this.states}getSortedStates(t=51){const e=[];return this.states.forEach(a=>{e.push(a)}),e.sort(function(a,s){return Math.abs(a.demPercent-a.repPercent)-Math.abs(s.demPercent-s.repPercent)}),e.slice(0,t)}getSortedGroups(t=0){const e=this.getSortedStates();return"HI"===e[t].abbreviation||"CA"===e[t].abbreviation||"WA"===e[t].abbreviation||"OR"===e[t].abbreviation?["HI","CA","WA","OR"]:"IL"===e[t].abbreviation||"MN"===e[t].abbreviation?["IL","MN"]:"NM"===e[t].abbreviation||"CO"===e[t].abbreviation||"NV"===e[t].abbreviation||"AZ"===e[t].abbreviation?["NM","CO","NV","AZ"]:"ME"===e[t].abbreviation||"NH"===e[t].abbreviation||"VA"===e[t].abbreviation||"PA"===e[t].abbreviation?["ME","NH","VA","PA"]:"WI"===e[t].abbreviation||"IA"===e[t].abbreviation||"MI"===e[t].abbreviation||"OH"===e[t].abbreviation?["WI","IA","MI","OH"]:"FL"===e[t].abbreviation||"NC"===e[t].abbreviation||"GA"===e[t].abbreviation?["FL","NC","GA"]:"TX"===e[t].abbreviation?["TX"]:"SC"===e[t].abbreviation||"MO"===e[t].abbreviation||"IN"===e[t].abbreviation||"MT"===e[t].abbreviation||"AK"===e[t].abbreviation||"MS"===e[t].abbreviation||"LA"===e[t].abbreviation?["SC","MO","IN","MT","MS","AK","LA"]:(t+=1)>49?[]:this.getSortedGroups(t)}getCurrentScore(){if(this.isThird)return 0;let t=0,e=0;for(const a of this.states)a.leansDem>0&&(t+=a.college),a.leansRep>0&&(e+=a.college);return this.isDemocrat?e-270:t-270}getDecidedStates(){const t=[];for(const e of this.states)e.decided&&t.push(e);return t}getSafeStates(){const t=[];for(const e of this.states)(e.leansDem>=12||e.leansRep>=12)&&t.push(e);return t}getLeftLeanStates(){const t=[];for(const e of this.states)e.leansDem>=5&&e.leansDem<12&&t.push(e);return t}getRightLeanStates(){const t=[];for(const e of this.states)e.leansRep>=5&&e.leansRep<12&&t.push(e);return t}getTossUpsLeft(){const t=[];for(const e of this.states)e.leansDem>0&&e.leansDem<5&&t.push(e);return t}getTossUps(){const t=[];for(const e of this.states)0===e.leansDem&&t.push(e);return t}getTossUpsRight(){const t=[];for(const e of this.states)e.leansRep>0&&e.leansRep<5&&t.push(e);return t}changeNationalClimate(t,e){this.NationalClimate+=e,this.NationalClimate-=t;for(const a of this.states)a.demPercent+=t,a.repPercent+=e,a.leansDem=a.demPercent-a.repPercent,a.leansRep=a.repPercent-a.demPercent}changeStateClimate(t,e,a){for(const s of this.states)s.abbreviation===t&&(s.demPercent+=e,s.repPercent+=a,s.leansDem=s.demPercent-s.repPercent,s.leansRep=s.repPercent-s.demPercent)}neutralizeStateClimate(t){for(const e of this.states)e.abbreviation===t&&(e.decided=!1,e.leansDem=0,e.demPercent=40,e.repPercent=40,e.leansRep=0)}getFinalRed(){let t=0;for(const e of this.states)e.repPercent>e.demPercent&&(t+=e.college,e.decided=!0),e.repPercent===e.demPercent&&this.NationalClimate>=0&&(this.changeStateClimate(e.abbreviation,-1,1),t+=e.college,e.decided=!0);return t}getFinalBlue(){let t=0;for(const e of this.states)e.repPercent<e.demPercent&&(t+=e.college,e.decided=!0),e.repPercent===e.demPercent&&this.NationalClimate<0&&(this.changeStateClimate(e.abbreviation,1,-1),t+=e.college,e.decided=!0);return t}getUserWon(){if(269===this.getFinalBlue()){const t=this.getSortedStates(10);let e=0;for(;269===this.getFinalBlue();)this.isDemocrat&&(t[e].repPercent-t[e].demPercent>0?this.changeStateClimate(t[e].abbreviation,1,-1):e++),this.isDemocrat||(t[e].demPercent-t[e].repPercent>0?this.changeStateClimate(t[e].abbreviation,-1,1):e++)}return!!(this.getFinalBlue()>269&&this.isDemocrat)||!(this.getFinalBlue()>269&&!this.isDemocrat)&&this.getFinalRed()>269&&!this.isDemocrat}reset(){this.isDemocrat=!0,this.isThird=!1,this.funds=0,this.opponentFunds=0,this.round=1,this.turn=0,this.NationalClimate=0,this.progressMessage="",this.progress=0,this.Alabama=new i("Alabama","AL",9,32,49),this.Alaska=new i("Alaska","AK",3,33,48),this.Arizona=new i("Arizona","AZ",11,40,41),this.Arkansas=new i("Arkansas","AR",6,32,49),this.California=new i("California","CA",54,52,30),this.Colorado=new i("Colorado","CO",10,42,39),this.Connecticut=new i("Connecticut","CT",7,46,35),this.Delaware=new i("Delaware","DE",3,45,35),this.DC=new i("DC","DC",3,75,7),this.Florida=new i("Florida","FL",30,39,41),this.Georgia=new i("Georgia","GA",16,39,42),this.Hawaii=new i("Hawaii","HI",4,53,28),this.Idaho=new i("Idaho","ID",4,30,51),this.Illinois=new i("Illinois","IL",19,48,34),this.Indiana=new i("Indiana","IN",11,30,51),this.Iowa=new i("Iowa","IA",6,39,43),this.Kansas=new i("Kansas","KS",6,32,49),this.Kentucky=new i("Kentucky","KY",8,30,51),this.Louisiana=new i("Louisiana","LA",8,32,49),this.Maine=new i("Maine","ME",4,43,39),this.Maryland=new i("Maryland","MD",10,51,31),this.Massachusetts=new i("Massachusetts","MA",11,52,30),this.Michigan=new i("Michigan","MI",15,42,39),this.Minnesota=new i("Minnesota","MN",10,44,39),this.Mississippi=new i("Mississippi","MS",6,34,48),this.Missouri=new i("Missouri","MO",10,34,46),this.Montana=new i("Montana","MT",4,34,47),this.Nebraska=new i("Nebraska","NE",5,32,49),this.Nevada=new i("Nevada","NV",6,40,41),this.NewHampshire=new i("New Hampshire","NH",4,42,39),this.NewJersey=new i("New Jersey","NJ",14,48,34),this.NewMexico=new i("New Mexico","NM",5,44,37),this.NewYork=new i("New York","NY",28,52,30),this.NorthCarolina=new i("North Carolina","NC",16,40,42),this.NorthDakota=new i("North Dakota","ND",3,31,51),this.Ohio=new i("Ohio","OH",17,38,43),this.Oklahoma=new i("Oklahoma","OK",7,30,51),this.Oregon=new i("Oregon","OR",8,45,37),this.Pennsylvania=new i("Pennsylvania","PA",19,42,40),this.RhodeIsland=new i("Rhode Island","RI",4,50,32),this.SouthCarolina=new i("South Carolina","SC",9,35,46),this.SouthDakota=new i("South Dakota","SD",3,31,51),this.Tennessee=new i("Tennessee","TN",11,32,49),this.Texas=new i("Texas","TX",40,37,44),this.Utah=new i("Utah","UT",6,32,49),this.Vermont=new i("Vermont","VT",3,52,30),this.Virginia=new i("Virginia","VA",13,42,39),this.Washington=new i("Washington","WA",12,46,35),this.WestVirginia=new i("West Virginia","WV",4,30,51),this.Wisconsin=new i("Wisconsin","WI",10,41,39),this.Wyoming=new i("Wyoming","WY",3,29,53),this.states=[],this.states=[this.Alabama,this.Alaska,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.DC,this.Florida,this.Georgia,this.Hawaii,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}getStateIconByAbrev(t){t=t.toUpperCase();for(const e of this.states)if(e.abbreviation===t){const a=e.name.replace(/ /g,"-");return e.abbreviation+"-"+a+".png"}}getStateIconByName(t){for(const e of this.states)if(e.name===t){const a=e.name.replace(/ /g,"-");return e.abbreviation+"-"+a+".png"}}}return n.\u0275fac=function(t){return new(t||n)(g.LFG(N.K))},n.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);