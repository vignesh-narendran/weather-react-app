(this.webpackJsonpcodebase=this.webpackJsonpcodebase||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),i=a.n(c),l=(a(38),a(8)),o=a(9),s=a(11),m=a(10),u=a(12),p=(a(39),a(14));function h(){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{className:"app-title"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/weather-react-app"},"Vaanilai Arikkai")),r.a.createElement("p",null,"Project by Vignesh Narendran")),r.a.createElement("div",{className:"links"},r.a.createElement(p.b,{className:"link",to:"/weather-react-app"},"Home"),r.a.createElement(p.b,{className:"link",to:"/about"},"About")))}var d=a(31),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={city:""},a.submitForm=function(e){e.preventDefault(),a.props.getCity(a.state.city),a.setState({city:""})},a.updateField=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-search"},r.a.createElement("div",{className:"search-component center-things"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("input",{required:!0,onChange:this.updateField,type:"text",name:"city",placeholder:"Where do you live?",className:"search-bar"}),r.a.createElement("input",{className:"search-btn",type:"submit",value:"Find weather"}))))}}]),t}(n.Component);var E=function(e){var t={backgroundImage:"url(http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png)"),height:"100px",width:"100px",textAlign:"center",margin:"0 auto",borderRadius:"50%"};return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("a",{className:"go-back-btn item1",href:"/weather-react-app"},"Go back")),r.a.createElement("div",{className:"display-grid-wrapper"},r.a.createElement("p",{className:"city-val item2"},e.city,", ",e.coun,r.a.createElement("div",{className:"img-val item3",style:t})),r.a.createElement("p",{className:"desc-val item4"},e.desc),r.a.createElement("h1",{className:"temp-val item5"},e.temp,"\xb0C"),r.a.createElement("p",{className:"hum-val item6"},"Humidity: ",e.hum,"%"),r.a.createElement("p",{className:"pres-val item7"},"Pressure: ",e.pres," mbar"),r.a.createElement("a",{className:"go-back-btn item-mob",href:"/weather-react-app"},"Go back")))};var v=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Oops! Never heard of that city."),r.a.createElement("h3",null,"Please try searching again."),r.a.createElement("a",{className:"go-back-btn",href:"/weather-react-app"},"Go back")))},g=a(32),y=a.n(g),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).getCity=function(t){e.setState({loading:!0});var a={};y.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=8823c10c1ce04cfe68737c57d3bb3fb8")).then((function(t){a=t.data,console.log(a),e.setState({city:a.name,country:a.sys.country,temperature:Math.floor(a.main.temp-273),pressure:a.main.pressure,humidity:a.main.humidity,description:a.weather[0].description,icon:a.weather[0].icon,timezone:a.timezone,gotData:!0})})).catch((function(t){e.setState({isError:!0})})),e.setState({loading:!1})},e.state={city:"",temperature:"",pressure:"",humidity:"",description:"",icon:"",country:"",timezone:"",loading:!1,gotData:!1,isError:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.city,a=e.country,n=e.temperature,c=e.pressure,i=e.humidity,l=e.description,o=e.icon,s=e.gotData,m=e.timezone;return e.isError?r.a.createElement(v,null):s?r.a.createElement("div",null,r.a.createElement(E,{city:t,coun:a,temp:n,pres:c,hum:i,desc:l,icon:o,time:m})):r.a.createElement("div",null,r.a.createElement(b,{getCity:this.getCity}))}}]),t}(n.Component);function w(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{style:{textAlign:"center"},className:"center-things"},r.a.createElement("p",null,"Vaanilai Arikkai is a weather forecasting web app made using React JS."),r.a.createElement("p",null,"The app uses openweathermap API to fetch weather data for a requested city."),r.a.createElement("p",null,"The source code for this app is available in my GitHub repository.")))}var N=a(6),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"dark-theme center-things"},r.a.createElement(h,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/weather-react-app",component:f}),r.a.createElement(N.a,{path:"/about",component:w}),r.a.createElement(N.a,{path:"/error",component:v}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d5a2bbb1.chunk.js.map
