"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1589],{1589:(f,M,d)=>{d.d(M,{s:()=>m});var c=d(5861);class i{constructor(u,t,e,a,s,o){this.name=u,this.protected="",this.thirdPercent=-1,this.abbreviation=t,this.college=e,this.demPercent=a,this.repPercent=s,this.leansDem=a-s,this.leansRep=s-a,this.decided=o||!1}}var N=d(6738),g=d(849);let m=(()=>{class l{constructor(t){this.storage=t,this.neededToWin=270,this.mapTitle="",this.actionPending=!1,this.unlockedOccuredThisRound=!1,this.scandals=0,this.progressMessage="",this.progress=0,this.isDemocrat=!0,this.isThird=!1,this.thirdName="",this.background={},this.thirdPartyName="",this.opponentFunds=0,this.funds=0,this.round=1,this.gameLength=16,this.turn=0,this.Alabama=new i("Alabama","AL",9,32,49),this.Alaska=new i("Alaska","AK",3,33,48),this.Arizona=new i("Arizona","AZ",11,40,41),this.Arkansas=new i("Arkansas","AR",6,32,49),this.California=new i("California","CA",54,52,30),this.Colorado=new i("Colorado","CO",10,42,39),this.Connecticut=new i("Connecticut","CT",7,46,35),this.Delaware=new i("Delaware","DE",3,45,35),this.DC=new i("DC","DC",3,75,7),this.Florida=new i("Florida","FL",30,39,41),this.Georgia=new i("Georgia","GA",16,39,42),this.Hawaii=new i("Hawaii","HI",4,53,28),this.Idaho=new i("Idaho","ID",4,30,51),this.Illinois=new i("Illinois","IL",19,48,34),this.Indiana=new i("Indiana","IN",11,30,51),this.Iowa=new i("Iowa","IA",6,39,43),this.Kansas=new i("Kansas","KS",6,32,49),this.Kentucky=new i("Kentucky","KY",8,30,51),this.Louisiana=new i("Louisiana","LA",8,32,49),this.Maine=new i("Maine","ME",4,43,39),this.Maryland=new i("Maryland","MD",10,51,31),this.Massachusetts=new i("Massachusetts","MA",11,52,30),this.Michigan=new i("Michigan","MI",15,42,39),this.Minnesota=new i("Minnesota","MN",10,44,39),this.Mississippi=new i("Mississippi","MS",6,34,48),this.Missouri=new i("Missouri","MO",10,34,46),this.Montana=new i("Montana","MT",4,34,47),this.Nebraska=new i("Nebraska","NE",5,32,49),this.Nevada=new i("Nevada","NV",6,40,41),this.NewHampshire=new i("New Hampshire","NH",4,42,39),this.NewJersey=new i("New Jersey","NJ",14,48,34),this.NewMexico=new i("New Mexico","NM",5,44,37),this.NewYork=new i("New York","NY",28,52,30),this.NorthCarolina=new i("North Carolina","NC",16,40,42),this.NorthDakota=new i("North Dakota","ND",3,31,51),this.Ohio=new i("Ohio","OH",17,38,43),this.Oklahoma=new i("Oklahoma","OK",7,30,51),this.Oregon=new i("Oregon","OR",8,45,37),this.Pennsylvania=new i("Pennsylvania","PA",19,42,40),this.RhodeIsland=new i("Rhode Island","RI",4,50,32),this.SouthCarolina=new i("South Carolina","SC",9,35,46),this.SouthDakota=new i("South Dakota","SD",3,31,51),this.Tennessee=new i("Tennessee","TN",11,32,49),this.Texas=new i("Texas","TX",40,37,44),this.Utah=new i("Utah","UT",6,32,49),this.Vermont=new i("Vermont","VT",3,52,30),this.Virginia=new i("Virginia","VA",13,42,39),this.Washington=new i("Washington","WA",12,46,35),this.WestVirginia=new i("West Virginia","WV",4,30,51),this.Wisconsin=new i("Wisconsin","WI",10,41,39),this.Wyoming=new i("Wyoming","WY",3,29,53),this.states=[],this.visitedStates={},this.NationalClimate=0,this._storage=null,this.init(),this.states=[this.Alabama,this.Alaska,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.DC,this.Florida,this.Georgia,this.Hawaii,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}init(){var t=this;return(0,c.Z)(function*(){const e=yield t.storage.create();t._storage=e})()}addGameStats(t,e,a){var s=this;return(0,c.Z)(function*(){let o=yield s.getLocalStorage("plays"),r=yield s.getLocalStorage("wins"),n=yield s.getLocalStorage("demWins"),h=yield s.getLocalStorage("repWins"),w=yield s.getLocalStorage("highVotes");r=Number(r),n=Number(n),h=Number(h),w=Number(w),o=Number(o),Number.isNaN(r)&&(r=0),Number.isNaN(o)&&(o=0),Number.isNaN(n)&&(n=0),Number.isNaN(h)&&(h=0),Number.isNaN(w)&&(w=0),r!==n+h&&(r=n+h),s.setLocalStorage("plays",Number(o)+1),a>Number(w)&&s.setLocalStorage("highVotes",a),a>399&&s.unlockRecord("record13"),270===a&&s.unlockRecord("record11"),t?(r>9&&s.unlockRecord("record8"),o>59&&s.unlockRecord("record12"),s.unlockRecord("record1"),s.setLocalStorage("wins",r+1),e?(s.setLocalStorage("demWins",n+1),s.Ohio.leansDem<s.Ohio.leansRep&&s.unlockRecord("record7"),s.Texas.leansDem>s.Texas.leansRep&&s.unlockRecord("record10"),h>0&&s.unlockRecord("record3")):(s.setLocalStorage("repWins",h+1),s.Ohio.leansDem>s.Ohio.leansRep&&s.unlockRecord("record7"),s.California.leansDem<s.California.leansRep&&s.unlockRecord("record17"),n>0&&s.unlockRecord("record3"))):(s.unlockRecord("record2"),o-n-h>9&&s.unlockRecord("record15")),0===Object.keys(s.visitedStates).length&&s.unlockRecord("record4")})()}setLocalStorage(t,e){this._storage?.set(t,e)}getLocalStorage(t){var e=this;return(0,c.Z)(function*(){return yield e._storage?.get(t)})()}unlockRecord(t){var e=this;return(0,c.Z)(function*(){(yield e.getLocalStorage(t))||(e.unlockedOccuredThisRound=!0),e.setLocalStorage(t,"unlocked")})()}stateVisited(t){this.visitedStates[t.abbreviation]=this.visitedStates[t.abbreviation]?this.visitedStates[t.abbreviation]+1:1,this.visitedStates[t.abbreviation]>4&&this.unlockRecord("record9")}scandalDrawn(){this.scandals++,this.scandals>1&&this.unlockRecord("record5")}finalizeVotes(){for(const t of this.states){const e=Math.floor(11*Math.random())+1;let s=0;Math.floor(100*Math.random())+1>65?s+=e/10:s-=e/10,this.isDemocrat?this.changeStateClimate(t.abbreviation,s,0):this.changeStateClimate(t.abbreviation,0,s),t.leansDem===t.leansRep&&(this.isDemocrat?this.changeStateClimate(t.abbreviation,s,0):this.changeStateClimate(t.abbreviation,0,s))}}getUserIsThird(){return this.isThird}setUserIsThird(t){this.isThird=t;for(const e of this.states)e.thirdPercent=2}setBackground(t){this.background=t}setThirdPartyName(t){this.thirdName=t}getThirdPartyName(){return this.thirdName}getUserIsDem(){return this.isDemocrat}setUserIsDem(t){this.isDemocrat=t;for(const e of this.states)(e.leansDem>17&&!t||e.leansRep>14&&t)&&(e.protected="*")}getAllStates(){return this.states}getSortedStates(t=51){const e=[];return this.states.forEach(a=>{e.push(a)}),e.sort(function(a,s){return Math.abs(a.demPercent-a.repPercent)-Math.abs(s.demPercent-s.repPercent)}),e.slice(0,t)}getSortedGroups(t=0){const e=this.getSortedStates();return this.NewMexico||"NY"!==e[t].abbreviation&&"NJ"!==e[t].abbreviation?"HI"===e[t].abbreviation||"CA"===e[t].abbreviation||"WA"===e[t].abbreviation||"OR"===e[t].abbreviation?this.Hawaii?["HI","CA","WA","OR"]:this.Washington?["CA","WA","OR"]:["CA","OR","NV"]:"IL"===e[t].abbreviation||"MN"===e[t].abbreviation?["IL","MN"]:"NM"===e[t].abbreviation||"CO"===e[t].abbreviation||"NV"===e[t].abbreviation||"AZ"===e[t].abbreviation?this.NewMexico?["NM","CO","NV","AZ"]:["CA","OR","NV"]:"ME"===e[t].abbreviation||"NH"===e[t].abbreviation||"VA"===e[t].abbreviation||"PA"===e[t].abbreviation?["ME","NH","VA","PA"]:"WI"===e[t].abbreviation||"IA"===e[t].abbreviation||"MI"===e[t].abbreviation||"OH"===e[t].abbreviation?["WI","IA","MI","OH"]:"FL"===e[t].abbreviation||"NC"===e[t].abbreviation||"GA"===e[t].abbreviation?["FL","NC","GA"]:"TX"===e[t].abbreviation?this.Alaska?["TX","AK"]:["TX"]:"SC"===e[t].abbreviation||"MO"===e[t].abbreviation||"IN"===e[t].abbreviation||"MT"===e[t].abbreviation||"MS"===e[t].abbreviation||"LA"===e[t].abbreviation?this.Montana?["SC","MO","IN","MT","MS","LA"]:["SC","MO","IN","MS","LA"]:(t+=1)>49?[]:this.getSortedGroups(t):["NY","NJ","CT"]}getCurrentScore(){if(this.isThird)return 0;let t=0,e=0;for(const a of this.states)a.leansDem>0&&(t+=a.college),a.leansRep>0&&(e+=a.college);return this.isDemocrat?e-this.neededToWin:t-this.neededToWin}getDecidedStates(){const t=[];for(const e of this.states)e.decided&&t.push(e);return t}getSafeStates(){const t=[];for(const e of this.states)(e.leansDem>=12||e.leansRep>=12)&&t.push(e);return t}getLeftLeanStates(){const t=[];for(const e of this.states)e.leansDem>=5&&e.leansDem<12&&t.push(e);return t}getRightLeanStates(){const t=[];for(const e of this.states)e.leansRep>=5&&e.leansRep<12&&t.push(e);return t}getTossUpsLeft(){const t=[];for(const e of this.states)e.leansDem>0&&e.leansDem<5&&t.push(e);return t}getTossUps(){const t=[];for(const e of this.states)0===e.leansDem&&t.push(e);return t}getTossUpsRight(){const t=[];for(const e of this.states)e.leansRep>0&&e.leansRep<5&&t.push(e);return t}changeNationalClimate(t,e){this.NationalClimate+=e,this.NationalClimate-=t;for(const a of this.states)a.demPercent+=t,a.repPercent+=e,a.leansDem=a.demPercent-a.repPercent,a.leansRep=a.repPercent-a.demPercent}changeStateClimate(t,e,a){for(const s of this.states)s.abbreviation===t&&(s.demPercent+=e,s.repPercent+=a,s.leansDem=s.demPercent-s.repPercent,s.leansRep=s.repPercent-s.demPercent,s.leansDem>90&&(s.leansDem=90,s.leansRep=-90,s.demPercent=95,s.repPercent=5),s.leansDem<-90&&(s.leansDem=-90,s.leansRep=90,s.demPercent=5,s.repPercent=95))}neutralizeStateClimate(t){for(const e of this.states)e.abbreviation===t&&(e.decided=!1,e.leansDem=0,e.demPercent=40,e.repPercent=40,e.leansRep=0)}getFinalRed(){let t=0;for(const e of this.states)e.repPercent>e.demPercent&&(t+=e.college,e.decided=!0),e.repPercent===e.demPercent&&this.NationalClimate>=0&&(this.changeStateClimate(e.abbreviation,-1,1),t+=e.college,e.decided=!0);return t}getFinalBlue(){let t=0;for(const e of this.states)e.repPercent<e.demPercent&&(t+=e.college,e.decided=!0),e.repPercent===e.demPercent&&this.NationalClimate<0&&(this.changeStateClimate(e.abbreviation,1,-1),t+=e.college,e.decided=!0);return t}getUserWon(){if(this.getFinalBlue()===this.neededToWin-1){const t=this.getSortedStates(10);let e=0;for(;this.getFinalBlue()===this.neededToWin-1;)this.isDemocrat&&(t[e].repPercent-t[e].demPercent>0?this.changeStateClimate(t[e].abbreviation,1,-1):e++),this.isDemocrat||(t[e].demPercent-t[e].repPercent>0?this.changeStateClimate(t[e].abbreviation,-1,1):e++)}return!!(this.getFinalBlue()>this.neededToWin-1&&this.isDemocrat)||!(this.getFinalBlue()>this.neededToWin-1&&!this.isDemocrat)&&this.getFinalRed()>this.neededToWin-1&&!this.isDemocrat}shuffle(t){let a,e=t.length;for(;0!==e;)a=Math.floor(Math.random()*e),e--,[t[e],t[a]]=[t[a],t[e]];return t}randomizeStates(){var t=this;return(0,c.Z)(function*(){t.mapTitle="Randomized Game Mode!";let e=t.states;e=t.shuffle(e);let a=0,s=0;for(const n of e)s<262&&(a++,s+=n.college);const o=s%2==0;let r=0;for(const n of e){const h=Math.floor(17*Math.random())+1;r<=a&&o||r>=a&&!o?(n.repPercent=40-Math.floor(h/2),n.leansRep=-h,n.demPercent=40+Math.ceil(h/2),n.leansDem=h):(n.repPercent=40+Math.floor(h/2),n.leansRep=h,n.demPercent=40-Math.ceil(h/2),n.leansDem=-h),r++}})()}setLongGameLength(){var t=this;return(0,c.Z)(function*(){t.gameLength=32})()}setElectionOf1916(){this.mapTitle="1916 Election",this.neededToWin=266,this.Alaska=null,this.Hawaii=null,this.Alabama=new i("Alabama","AL",12,72,21),this.Arizona=new i("Arizona","AZ",3,52,35),this.Arkansas=new i("Arkansas","AR",9,60,35),this.California=new i("California","CA",13,47,46),this.Colorado=new i("Colorado","CO",6,55,39),this.Connecticut=new i("Connecticut","CT",7,36,39),this.Delaware=new i("Delaware","DE",3,47,49),this.Florida=new i("Florida","FL",6,64,18),this.Georgia=new i("Georgia","GA",14,65,12),this.Idaho=new i("Idaho","ID",4,52,41),this.Illinois=new i("Illinois","IL",29,44,52),this.Indiana=new i("Indiana","IN",15,46,47),this.Iowa=new i("Iowa","IA",13,39,46),this.Kansas=new i("Kansas","KS",10,49,44),this.Kentucky=new i("Kentucky","KY",13,51,47),this.Louisiana=new i("Louisiana","LA",10,80,7),this.Maine=new i("Maine","ME",6,38,42),this.Maryland=new i("Maryland","MD",8,51,44),this.Massachusetts=new i("Massachusetts","MA",18,46,50),this.Michigan=new i("Michigan","MI",15,44,52),this.Minnesota=new i("Minnesota","MN",12,45,46),this.Mississippi=new i("Mississippi","MS",10,80,4),this.Missouri=new i("Missouri","MO",18,50,47),this.Montana=new i("Montana","MT",4,50,41),this.Nebraska=new i("Nebraska","NE",8,50,43),this.Nevada=new i("Nevada","NV",3,50,41),this.NewHampshire=new i("New Hampshire","NH",4,49,48),this.NewJersey=new i("New Jersey","NJ",14,42,54),this.NewMexico=new i("New Mexico","NM",3,50,47),this.NewYork=new i("New York","NY",45,44,46),this.NorthCarolina=new i("North Carolina","NC",12,48,42),this.NorthDakota=new i("North Dakota","ND",5,41,39),this.Ohio=new i("Ohio","OH",24,51,44),this.Oklahoma=new i("Oklahoma","OK",10,50,45),this.Oregon=new i("Oregon","OR",5,45,48),this.Pennsylvania=new i("Pennsylvania","PA",38,40,42),this.RhodeIsland=new i("Rhode Island","RI",5,46,51),this.SouthCarolina=new i("South Carolina","SC",9,80,4),this.SouthDakota=new i("South Dakota","SD",5,45,49),this.Tennessee=new i("Tennessee","TN",12,54,42),this.Texas=new i("Texas","TX",20,76,15),this.Utah=new i("Utah","UT",4,58,38),this.Vermont=new i("Vermont","VT",4,35,62),this.Virginia=new i("Virginia","VA",12,44,39),this.Washington=new i("Washington","WA",7,39,35),this.WestVirginia=new i("West Virginia","WV",8,38,39),this.Wisconsin=new i("Wisconsin","WI",13,41,49),this.Wyoming=new i("Wyoming","WY",3,54,41),this.states=[this.Alabama,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.Florida,this.Georgia,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}setElectionOf1876(){this.mapTitle="1876 Election",this.neededToWin=185,this.Alaska=null,this.Arizona=null,this.Idaho=null,this.Montana=null,this.NorthDakota=null,this.SouthDakota=null,this.Utah=null,this.Oklahoma=null,this.NewMexico=null,this.Wyoming=null,this.Washington=null,this.Hawaii=null,this.Alabama=new i("Alabama","AL",10,59,40),this.Arkansas=new i("Arkansas","AR",6,60,40),this.California=new i("California","CA",6,45,46),this.Colorado=new i("Colorado","CO",3,50,51),this.Connecticut=new i("Connecticut","CT",6,50,48),this.Delaware=new i("Delaware","DE",3,55,45),this.Florida=new i("Florida","FL",4,49,51),this.Georgia=new i("Georgia","GA",11,65,12),this.Illinois=new i("Illinois","IL",21,47,50),this.Indiana=new i("Indiana","IN",15,48,47),this.Iowa=new i("Iowa","IA",11,38,58),this.Kansas=new i("Kansas","KS",5,31,63),this.Kentucky=new i("Kentucky","KY",12,61,47),this.Louisiana=new i("Louisiana","LA",8,48,51),this.Maine=new i("Maine","ME",7,42,56),this.Maryland=new i("Maryland","MD",8,55,44),this.Massachusetts=new i("Massachusetts","MA",13,37,50),this.Michigan=new i("Michigan","MI",11,44,52),this.Minnesota=new i("Minnesota","MN",5,32,46),this.Mississippi=new i("Mississippi","MS",8,68,32),this.Missouri=new i("Missouri","MO",15,57,41),this.Nebraska=new i("Nebraska","NE",3,35,64),this.Nevada=new i("Nevada","NV",3,47,52),this.NewHampshire=new i("New Hampshire","NH",5,48,51),this.NewJersey=new i("New Jersey","NJ",9,52,47),this.NewYork=new i("New York","NY",35,51,48),this.NorthCarolina=new i("North Carolina","NC",10,53,46),this.Ohio=new i("Ohio","OH",22,49,50),this.Oregon=new i("Oregon","OR",3,45,48),this.Pennsylvania=new i("Pennsylvania","PA",29,40,42),this.RhodeIsland=new i("Rhode Island","RI",4,40,57),this.SouthCarolina=new i("South Carolina","SC",7,49,50),this.Tennessee=new i("Tennessee","TN",12,59,42),this.Texas=new i("Texas","TX",8,68,30),this.Vermont=new i("Vermont","VT",5,35,62),this.Virginia=new i("Virginia","VA",11,55,39),this.WestVirginia=new i("West Virginia","WV",5,53,39),this.Wisconsin=new i("Wisconsin","WI",10,48,51),this.states=[this.Alabama,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.Florida,this.Georgia,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewYork,this.NorthCarolina,this.Ohio,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.Tennessee,this.Texas,this.Vermont,this.Virginia,this.WestVirginia,this.Wisconsin]}setElectionOf1976(){this.neededToWin=270,this.mapTitle="1976 Election",this.Alabama=new i("Alabama","AL",9,54,43),this.Alaska=new i("Alaska","AK",3,39,56),this.Arizona=new i("Arizona","AZ",6,40,54),this.Arkansas=new i("Arkansas","AR",6,60,35),this.California=new i("California","CA",45,47,49),this.Colorado=new i("Colorado","CO",7,42,54),this.Connecticut=new i("Connecticut","CT",8,46,52),this.Delaware=new i("Delaware","DE",3,51,46),this.DC=new i("DC","DC",3,70,20),this.Florida=new i("Florida","FL",17,51,46),this.Georgia=new i("Georgia","GA",12,65,32),this.Hawaii=new i("Hawaii","HI",4,50,48),this.Idaho=new i("Idaho","ID",4,37,59),this.Illinois=new i("Illinois","IL",26,48,50),this.Indiana=new i("Indiana","IN",13,46,53),this.Iowa=new i("Iowa","IA",8,48,49),this.Kansas=new i("Kansas","KS",7,44,52),this.Kentucky=new i("Kentucky","KY",9,51,46),this.Louisiana=new i("Louisiana","LA",10,51,46),this.Maine=new i("Maine","ME",4,48,49),this.Maryland=new i("Maryland","MD",10,51,44),this.Massachusetts=new i("Massachusetts","MA",14,56,40),this.Michigan=new i("Michigan","MI",21,46,52),this.Minnesota=new i("Minnesota","MN",10,54,42),this.Mississippi=new i("Mississippi","MS",7,49,47),this.Missouri=new i("Missouri","MO",12,50,47),this.Montana=new i("Montana","MT",4,45,52),this.Nebraska=new i("Nebraska","NE",5,45,50),this.Nevada=new i("Nevada","NV",3,50,41),this.NewHampshire=new i("New Hampshire","NH",4,44,54),this.NewJersey=new i("New Jersey","NJ",17,47,50),this.NewMexico=new i("New Mexico","NM",4,45,47),this.NewYork=new i("New York","NY",41,51,47),this.NorthCarolina=new i("North Carolina","NC",13,55,44),this.NorthDakota=new i("North Dakota","ND",3,46,51),this.Ohio=new i("Ohio","OH",25,51,50),this.Oklahoma=new i("Oklahoma","OK",8,44,45),this.Oregon=new i("Oregon","OR",6,47,48),this.Pennsylvania=new i("Pennsylvania","PA",27,50,47),this.RhodeIsland=new i("Rhode Island","RI",4,54,44),this.SouthCarolina=new i("South Carolina","SC",8,55,43),this.SouthDakota=new i("South Dakota","SD",4,48,50),this.Tennessee=new i("Tennessee","TN",10,54,42),this.Texas=new i("Texas","TX",26,51,48),this.Utah=new i("Utah","UT",4,34,59),this.Vermont=new i("Vermont","VT",3,43,54),this.Virginia=new i("Virginia","VA",12,48,49),this.Washington=new i("Washington","WA",9,46,50),this.WestVirginia=new i("West Virginia","WV",6,57,42),this.Wisconsin=new i("Wisconsin","WI",11,49,47),this.Wyoming=new i("Wyoming","WY",3,40,59),this.states=[this.Alabama,this.Alaska,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.DC,this.Florida,this.Georgia,this.Hawaii,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}reset(){this.mapTitle="",this.scandals=0,this.gameLength=16,this.unlockedOccuredThisRound=!1,this.visitedStates={},this.isDemocrat=!0,this.isThird=!1,this.funds=0,this.opponentFunds=0,this.round=1,this.turn=0,this.NationalClimate=0,this.progressMessage="",this.progress=0,this.Alabama=new i("Alabama","AL",9,32,49),this.Alaska=new i("Alaska","AK",3,33,48),this.Arizona=new i("Arizona","AZ",11,40,41),this.Arkansas=new i("Arkansas","AR",6,32,49),this.California=new i("California","CA",54,52,30),this.Colorado=new i("Colorado","CO",10,42,39),this.Connecticut=new i("Connecticut","CT",7,46,35),this.Delaware=new i("Delaware","DE",3,45,35),this.DC=new i("DC","DC",3,75,7),this.Florida=new i("Florida","FL",30,39,41),this.Georgia=new i("Georgia","GA",16,39,42),this.Hawaii=new i("Hawaii","HI",4,53,28),this.Idaho=new i("Idaho","ID",4,30,51),this.Illinois=new i("Illinois","IL",19,48,34),this.Indiana=new i("Indiana","IN",11,30,51),this.Iowa=new i("Iowa","IA",6,39,43),this.Kansas=new i("Kansas","KS",6,32,49),this.Kentucky=new i("Kentucky","KY",8,30,51),this.Louisiana=new i("Louisiana","LA",8,32,49),this.Maine=new i("Maine","ME",4,43,39),this.Maryland=new i("Maryland","MD",10,51,31),this.Massachusetts=new i("Massachusetts","MA",11,52,30),this.Michigan=new i("Michigan","MI",15,42,39),this.Minnesota=new i("Minnesota","MN",10,44,39),this.Mississippi=new i("Mississippi","MS",6,34,48),this.Missouri=new i("Missouri","MO",10,34,46),this.Montana=new i("Montana","MT",4,34,47),this.Nebraska=new i("Nebraska","NE",5,32,49),this.Nevada=new i("Nevada","NV",6,40,41),this.NewHampshire=new i("New Hampshire","NH",4,42,39),this.NewJersey=new i("New Jersey","NJ",14,48,34),this.NewMexico=new i("New Mexico","NM",5,44,37),this.NewYork=new i("New York","NY",28,52,30),this.NorthCarolina=new i("North Carolina","NC",16,40,42),this.NorthDakota=new i("North Dakota","ND",3,31,51),this.Ohio=new i("Ohio","OH",17,38,43),this.Oklahoma=new i("Oklahoma","OK",7,30,51),this.Oregon=new i("Oregon","OR",8,45,37),this.Pennsylvania=new i("Pennsylvania","PA",19,42,40),this.RhodeIsland=new i("Rhode Island","RI",4,50,32),this.SouthCarolina=new i("South Carolina","SC",9,35,46),this.SouthDakota=new i("South Dakota","SD",3,31,51),this.Tennessee=new i("Tennessee","TN",11,32,49),this.Texas=new i("Texas","TX",40,37,44),this.Utah=new i("Utah","UT",6,32,49),this.Vermont=new i("Vermont","VT",3,52,30),this.Virginia=new i("Virginia","VA",13,42,39),this.Washington=new i("Washington","WA",12,46,35),this.WestVirginia=new i("West Virginia","WV",4,30,51),this.Wisconsin=new i("Wisconsin","WI",10,41,39),this.Wyoming=new i("Wyoming","WY",3,29,53),this.states=[],this.states=[this.Alabama,this.Alaska,this.Arizona,this.Arkansas,this.California,this.Colorado,this.Connecticut,this.Delaware,this.DC,this.Florida,this.Georgia,this.Hawaii,this.Idaho,this.Illinois,this.Indiana,this.Iowa,this.Kansas,this.Kentucky,this.Louisiana,this.Maine,this.Maryland,this.Massachusetts,this.Michigan,this.Minnesota,this.Mississippi,this.Missouri,this.Montana,this.Nebraska,this.Nevada,this.NewHampshire,this.NewJersey,this.NewMexico,this.NewYork,this.NorthCarolina,this.NorthDakota,this.Ohio,this.Oklahoma,this.Oregon,this.Pennsylvania,this.RhodeIsland,this.SouthCarolina,this.SouthDakota,this.Tennessee,this.Texas,this.Utah,this.Vermont,this.Virginia,this.Washington,this.WestVirginia,this.Wisconsin,this.Wyoming]}getStateIconByAbrev(t){t=t.toUpperCase();for(const e of this.states)if(e.abbreviation===t){const a=e.name.replace(/ /g,"-");return e.abbreviation+"-"+a+".png"}}getStateIconByName(t){for(const e of this.states)if(e.name===t){const a=e.name.replace(/ /g,"-");return e.abbreviation+"-"+a+".png"}}}return l.\u0275fac=function(t){return new(t||l)(N.LFG(g.K))},l.\u0275prov=N.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);