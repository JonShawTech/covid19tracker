(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{167:function(e,a,t){e.exports=t(352)},172:function(e,a,t){},173:function(e,a,t){},352:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),o=t(47),l=t.n(o),r=(t(172),t(173),t(18)),i=t.n(r),c=t(50),m=t(127),u=t(128),h=t(137),d=t(138),E=t(6),v=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={chooseState:"Georgia",stateData:[],countryData:"",worldData:""},e.handleChange=function(a){e.setState({chooseState:a.target.value}),e.getStates()},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getWorldData(),this.getUSA(),this.getStates()}},{key:"getWorldData",value:function(){var e=Object(c.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",redirect:"follow"},e.next=3,fetch("https://corona.lmao.ninja/all",a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({worldData:n}),console.log(n);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStates",value:function(){var e=Object(c.a)(i.a.mark((function e(){var a,t,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",redirect:"follow"},e.next=3,fetch("https://corona.lmao.ninja/states",a);case 3:return t=e.sent,e.next=6,t.json();case 6:for(n=e.sent,this.state.stateData=[],s=0;s<n.length;s++)this.state.chooseState==n[s].state&&this.setState({stateData:n[s]});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"getUSA",value:function(){var e=Object(c.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",redirect:"follow"},e.next=3,fetch("https://corona.lmao.ninja/countries/USA",a);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({countryData:n}),console.log(this.state.countryData);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[{name:this.state.stateData.state,Cases:this.state.stateData.cases,Deaths:this.state.stateData.deaths,"Deaths Today":this.state.stateData.todayDeaths,"Cases Today":this.state.stateData.todayCases}],a=[{name:"United States",Cases:this.state.countryData.cases,Deaths:this.state.countryData.deaths,"Deaths Today":this.state.countryData.todayDeaths,"Cases Today":this.state.countryData.todayCases}],t=[{name:"World Wide",Cases:this.state.worldData.cases,Deaths:this.state.worldData.deaths,Recovered:this.state.worldData.recovered,"Affected Countries":this.state.worldData.affectedCountries,"Active Cases":this.state.worldData.active}],n=this.state.worldData.deaths/this.state.worldData.cases*100,o=this.state.countryData.deaths/this.state.countryData.cases*100,l=this.state.stateData.deaths/this.state.stateData.cases*100;return s.a.createElement("div",{className:"main"},s.a.createElement("h1",{className:"c1"},"Coronavirus Cases"),s.a.createElement("div",{className:"c2"},s.a.createElement("h2",null," World Wide "),s.a.createElement("h3",{className:"blue"},"Cases: ",this.state.worldData.cases),s.a.createElement("h3",{className:"purple"},"Active cases: ",this.state.worldData.active),s.a.createElement("h3",{className:"red"},"Deaths: ",this.state.worldData.deaths," ","("+n.toFixed(2)+"%)"),s.a.createElement("h3",{className:"green"},"Recovered: ",this.state.worldData.recovered),s.a.createElement("h3",{className:"teal"},"Affected Countries: ",this.state.worldData.affectedCountries)),s.a.createElement("div",{className:"c1"},s.a.createElement(E.b,{width:500,height:250,data:t,barSize:35},s.a.createElement(E.c,{strokeDasharray:"3 3"}),s.a.createElement(E.f,{dataKey:"name"}),s.a.createElement(E.g,null),s.a.createElement(E.e,null),s.a.createElement(E.d,null),s.a.createElement(E.a,{dataKey:"Cases",fill:"rgb(13, 49, 209)"}),s.a.createElement(E.a,{dataKey:"Active Cases",fill:"rgb(122, 120, 241)"}),s.a.createElement(E.a,{dataKey:"Deaths",fill:"#FF0000"}),s.a.createElement(E.a,{dataKey:"Recovered",fill:"rgb(0, 187, 72)"}),s.a.createElement(E.a,{dataKey:"Affected Countries",fill:"rgb(69, 227, 255)"}))),s.a.createElement("div",{className:"c2"},s.a.createElement("h2",null," United States "),s.a.createElement("h3",{className:"blue"},"Cases: ",this.state.countryData.cases),s.a.createElement("h3",{className:"red"},"Deaths: ",this.state.countryData.deaths," ","("+o.toFixed(2)+"%)"," ")),s.a.createElement("div",{className:"c1"},s.a.createElement(E.b,{width:500,height:250,data:a,barSize:35},s.a.createElement(E.c,{strokeDasharray:"3 3"}),s.a.createElement(E.f,{dataKey:"name"}),s.a.createElement(E.g,null),s.a.createElement(E.e,null),s.a.createElement(E.d,null),s.a.createElement(E.a,{dataKey:"Cases",fill:"rgb(13, 49, 209)"}),s.a.createElement(E.a,{dataKey:"Deaths",fill:"#FF0000"}),s.a.createElement(E.a,{dataKey:"Cases Today",fill:"#8884d8"}),s.a.createElement(E.a,{dataKey:"Deaths Today",fill:"#82ca9d"}))),s.a.createElement("div",{className:"c2"},s.a.createElement("h3",null,"Choose State"),s.a.createElement("select",{value:this.state.chooseState,onChange:this.handleChange},s.a.createElement("option",{value:""},"Choose a state"),s.a.createElement("option",{value:"Alabama"},"Alabama"),s.a.createElement("option",{value:"Alaska"},"Alaska"),s.a.createElement("option",{value:"Arizona"},"Arizona"),s.a.createElement("option",{value:"Arkansas"},"Arkansas"),s.a.createElement("option",{value:"California"},"California"),s.a.createElement("option",{value:"Colorado"},"Colorado"),s.a.createElement("option",{value:"Connecticut"},"Connecticut"),s.a.createElement("option",{value:"Delaware"},"Delaware"),s.a.createElement("option",{value:"District Of Columbia"},"District of Columbia"),s.a.createElement("option",{value:"Florida"},"Florida"),s.a.createElement("option",{value:"Georgia"},"Georgia"),s.a.createElement("option",{value:"Hawaii"},"Hawaii"),s.a.createElement("option",{value:"Idaho"},"Idaho"),s.a.createElement("option",{value:"Illinois"},"Illinois"),s.a.createElement("option",{value:"Indiana"},"Indiana"),s.a.createElement("option",{value:"Iowa"},"Iowa"),s.a.createElement("option",{value:"Kansas"},"Kansas"),s.a.createElement("option",{value:"Kentucky"},"Kentucky"),s.a.createElement("option",{value:"Louisiana"},"Louisiana"),s.a.createElement("option",{value:"Maine"},"Maine"),s.a.createElement("option",{value:"Maryland"},"Maryland"),s.a.createElement("option",{value:"Massachusetts"},"Massachusetts"),s.a.createElement("option",{value:"Michigan"},"Michigan"),s.a.createElement("option",{value:"Minnisota"},"Minnesota"),s.a.createElement("option",{value:"Mississippi"},"Mississippi"),s.a.createElement("option",{value:"Missouri"},"Missouri"),s.a.createElement("option",{value:"Montana"},"Montana"),s.a.createElement("option",{value:"Nebraska"},"Nebraska"),s.a.createElement("option",{value:"Nevada"},"Nevada"),s.a.createElement("option",{value:"New Hampshire"},"New Hampshire"),s.a.createElement("option",{value:"New Jersey"},"New Jersey"),s.a.createElement("option",{value:"New Mexico"},"New Mexico"),s.a.createElement("option",{value:"New York"},"New York"),s.a.createElement("option",{value:"North Carolina"},"North Carolina"),s.a.createElement("option",{value:"North Dakota"},"North Dakota"),s.a.createElement("option",{value:"Ohio"},"Ohio"),s.a.createElement("option",{value:"Oklahoma"},"Oklahoma"),s.a.createElement("option",{value:"Oregon"},"Oregon"),s.a.createElement("option",{value:"Pennsylvania"},"Pennsylvania"),s.a.createElement("option",{value:"Rhode Island"},"Rhode Island"),s.a.createElement("option",{value:"South Carolina"},"South Carolina"),s.a.createElement("option",{value:"South Dakota"},"South Dakota"),s.a.createElement("option",{value:"Tennessee"},"Tennessee"),s.a.createElement("option",{value:"Texas"},"Texas"),s.a.createElement("option",{value:"Utah"},"Utah"),s.a.createElement("option",{value:"Vermont"},"Vermont"),s.a.createElement("option",{value:"Virginia"},"Virginia"),s.a.createElement("option",{value:"Washington"},"Washington"),s.a.createElement("option",{value:"West Virgina"},"West Virginia"),s.a.createElement("option",{value:"Wisconsin"},"Wisconsin"),s.a.createElement("option",{value:"Wyoming"},"Wyoming")),s.a.createElement("h2",null," ",this.state.stateData.state),s.a.createElement("h3",{className:"blue"},"Cases: ",this.state.stateData.cases),s.a.createElement("h3",{className:"red"},"Deaths: ",this.state.stateData.deaths," ","("+l.toFixed(2)+"%)")),s.a.createElement("div",{className:"c1"},s.a.createElement(E.b,{width:500,height:250,data:e,barSize:35},s.a.createElement(E.c,{strokeDasharray:"3 3"}),s.a.createElement(E.f,{dataKey:"name"}),s.a.createElement(E.g,null),s.a.createElement(E.e,null),s.a.createElement(E.d,null),s.a.createElement(E.a,{dataKey:"Cases",fill:"rgb(13, 49, 209)"}),s.a.createElement(E.a,{dataKey:"Deaths",fill:"#FF0000"}),s.a.createElement(E.a,{dataKey:"Cases Today",fill:"#8884d8"}),s.a.createElement(E.a,{dataKey:"Deaths Today",fill:"#82ca9d"}))))}}]),t}(s.a.Component);var p=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[167,1,2]]]);
//# sourceMappingURL=main.18167a90.chunk.js.map