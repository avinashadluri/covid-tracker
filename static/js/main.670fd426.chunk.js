(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{149:function(a,e,t){},150:function(a,e,t){},151:function(a,e,t){},152:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),o=t(43),i=t.n(o),l=t(1),c={AFG:"Afghanistan",ALA:"Aland Islands",ALB:"Albania",DZA:"Algeria",ASM:"American Samoa",AND:"Andorra",AGO:"Angola",AIA:"Anguilla",ATA:"Antarctica",ATG:"Antigua and Barbuda",ARG:"Argentina",ARM:"Armenia",ABW:"Aruba",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BRB:"Barbados",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BMU:"Bermuda",BTN:"Bhutan",BOL:"Bolivia",BES:"Bonaire, Saint Eustatius and Saba ",BIH:"Bosnia and Herzegovina",BWA:"Botswana",BVT:"Bouvet Island",BRA:"Brazil",IOT:"British Indian Ocean Territory",VGB:"British Virgin Islands",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CPV:"Cape Verde",CYM:"Cayman Islands",CAF:"Central African Republic",TCD:"Chad",CHL:"Chile",CHN:"China",CXR:"Christmas Island",CCK:"Cocos Islands",COL:"Colombia",COM:"Comoros",COK:"Cook Islands",CRI:"Costa Rica",HRV:"Croatia",CUB:"Cuba",CUW:"Curacao",CYP:"Cyprus",CZE:"Czech Republic",COD:"Democratic Republic of the Congo",DNK:"Denmark",DJI:"Djibouti",DMA:"Dominica",DOM:"Dominican Republic",TLS:"East Timor",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",ETH:"Ethiopia",FLK:"Falkland Islands",FRO:"Faroe Islands",FJI:"Fiji",FIN:"Finland",FRA:"France",GUF:"French Guiana",PYF:"French Polynesia",ATF:"French Southern Territories",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GIB:"Gibraltar",GRC:"Greece",GRL:"Greenland",GRD:"Grenada",GLP:"Guadeloupe",GUM:"Guam",GTM:"Guatemala",GGY:"Guernsey",GNB:"Guinea-Bissau",GIN:"Guinea",GUY:"Guyana",HTI:"Haiti",HMD:"Heard Island and McDonald Islands",HND:"Honduras",HKG:"Hong Kong",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",IMN:"Isle of Man",ISR:"Israel",ITA:"Italy",CIV:"Ivory Coast",JAM:"Jamaica",JPN:"Japan",JEY:"Jersey",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KIR:"Kiribati",XKX:"Kosovo",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Laos",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LIE:"Liechtenstein",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao",MKD:"Macedonia",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MHL:"Marshall Islands",MTQ:"Martinique",MRT:"Mauritania",MUS:"Mauritius",MYT:"Mayotte",MEX:"Mexico",FSM:"Micronesia",MDA:"Moldova",MCO:"Monaco",MNG:"Mongolia",MNE:"Montenegro",MSR:"Montserrat",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NRU:"Nauru",NPL:"Nepal",NLD:"Netherlands",NCL:"New Caledonia",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",NIU:"Niue",NFK:"Norfolk Island",PRK:"North Korea",MNP:"Northern Mariana Islands",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PLW:"Palau",PSE:"Palestinian Territory",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",PCN:"Pitcairn",POL:"Poland",PRT:"Portugal",PRI:"Puerto Rico",QAT:"Qatar",COG:"Republic of the Congo",REU:"Reunion",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",BLM:"Saint Barthelemy",SHN:"Saint Helena",KNA:"Saint Kitts and Nevis",LCA:"Saint Lucia",MAF:"Saint Martin",SPM:"Saint Pierre and Miquelon",VCT:"Saint Vincent and the Grenadines",WSM:"Samoa",SMR:"San Marino",STP:"Sao Tome and Principe",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SYC:"Seychelles",SLE:"Sierra Leone",SGP:"Singapore",SXM:"Sint Maarten",SVK:"Slovakia",SVN:"Slovenia",SLB:"Solomon Islands",SOM:"Somalia",ZAF:"South Africa",SGS:"South Georgia and the South Sandwich Islands",KOR:"South Korea",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SUR:"Suriname",SJM:"Svalbard and Jan Mayen",SWZ:"Swaziland",SWE:"Sweden",CHE:"Switzerland",SYR:"Syria",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania",THA:"Thailand",TGO:"Togo",TKL:"Tokelau",TON:"Tonga",TTO:"Trinidad and Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",TCA:"Turks and Caicos Islands",TUV:"Tuvalu",VIR:"U.S. Virgin Islands",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom",UMI:"United States Minor Outlying Islands",URY:"Uruguay",USA:"US",UZB:"Uzbekistan",VUT:"Vanuatu",VAT:"Vatican",VEN:"Venezuela",VNM:"Vietnam",WLF:"Wallis and Futuna",ESH:"Western Sahara",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"},s=(t(52),{global:"#fb542b",active:"#32970a",recover:"#3F51B5",death:"#d2173b",today:"#9ea8b7"}),u={global:"/1.png",active:"/2.png",recover:"/3.png",death:"/4.png",today:"/5.png"},d=function(a){return a?{color:s[a]||s.dark,borderColor:s[a]||s.dark}:{}};var m=function(a){var e=a.title,t=a.count,n=a.total,o=a.variant,i=n?(t/n*100).toFixed(2):0;return r.a.createElement("div",{className:"card",style:d(o)},r.a.createElement("h3",{className:"card-title"},e),r.a.createElement("img",{src:"."+u[o],alt:"covid",width:"30"}),r.a.createElement("div",{className:"card-info"},r.a.createElement("h2",{className:"count"},t.toLocaleString()),"100.00"!==i&&r.a.createElement("h4",{className:"count"},"".concat(i,"%"))))};var v=function(){return r.a.createElement("footer",null,r.a.createElement("br",null),r.a.createElement("h6",null,"Data Source:",r.a.createElement("a",{href:"https://corona.lmao.ninja/",target:"BLANk"},"https://corona.lmao.ninja/")))};var h=function(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h3",null,"COVID-19 Tracker")))},E=t(44);var S=function(){return r.a.createElement("div",{className:"spinner"})},N=t(25),g=t.n(N),A=t(46);var M=function(a){var e=Object(n.useState)(),t=Object(l.a)(e,2),r=t[0],o=t[1],i=Object(n.useState)(),c=Object(l.a)(i,2),s=c[0],u=c[1],d=Object(n.useState)(),m=Object(l.a)(d,2),v=m[0],h=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(A.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),h(),e.next=4,fetch(a).then((function(a){return a.json()})).catch((function(a){h(a||"Failed to load data!")}));case 4:(t=e.sent)?o(t):h("Failed to load data!"),u(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),{stats:r,loading:s,error:v}};t(149);var b=r.a.memo((function(a){var e=a.url,t=M(e),n=t.stats,o=t.error,i=t.loading,l={labels:[],datasets:[{data:[],backgroundColor:["#32970a","#3F51B5","#d2173b"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]};return n&&(l.labels=["Active","Recovered","Deaths"],l.datasets[0].data=[n.active,n.recovered,n.deaths]),r.a.createElement("div",{className:"container"},o?r.a.createElement("h4",{className:"error"},"Looks like there is a problem..."):null,i?r.a.createElement(S,null):null,!n||i||o?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-container"},r.a.createElement(m,{title:"Total cases",count:n.error?0:n.cases,total:n.error?0:n.cases,variant:"global"}),r.a.createElement(m,{title:"Active cases",count:n.error?0:n.active,total:n.error?0:n.cases,variant:"active"}),r.a.createElement(m,{title:"Recovered",count:n.error?0:n.recovered,total:n.error?0:n.cases,variant:"recover"}),r.a.createElement(m,{title:"Deaths",count:n.error?0:n.deaths,total:n.error?0:n.cases,variant:"death"}),r.a.createElement(m,{title:"Today cases",count:n.error?0:n.todayCases,total:n.error?0:n.cases,variant:"today"}),r.a.createElement(m,{title:"Today deaths",count:n.error?0:n.todayDeaths,total:n.error?0:n.cases,variant:"today"})),r.a.createElement("div",{className:"graph"},r.a.createElement(E.a,{data:l,options:{title:{display:!0,text:"Cases distribution",fontSize:20},legend:{display:!0},responsive:!0,maintainAspectRatio:!0}}))))}));var f=r.a.memo((function(a){var e=a.count,t=void 0===e?0:e,n=a.type;return r.a.createElement("div",null,r.a.createElement("h5",{className:"color-".concat(n)},t.toLocaleString()),r.a.createElement("p",null,n))}));var p=r.a.memo((function(a){var e=a.title,t=a.count,n=t.cases,o=t.active,i=t.recovered,l=t.deaths;return r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,e)),r.a.createElement("div",{className:"count"},r.a.createElement(f,{count:n,type:"total"}),r.a.createElement(f,{count:o,type:"active"}),r.a.createElement(f,{count:i,type:"recovered"}),r.a.createElement(f,{count:l,type:"deaths"})))}));t(42);var C=function(){var a=M("https://corona.lmao.ninja/v2/countries?sort=cases"),e=a.stats,t=a.loading,n=a.error;return r.a.createElement("div",{className:"stats-container"},n?r.a.createElement("h4",{className:"error"},"Looks like there is a problem..."):null,t?r.a.createElement(S,null):null,!e||t||n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"All countries"),e.map((function(a){var e=a.cases,t=a.active,n=a.country,o=a.recovered,i=a.deaths;return r.a.createElement(p,{title:n,count:{cases:e,active:t,recovered:o,deaths:i},key:n})}))))};t(150);t(151);var B=function(){var a=Object(n.useState)(""),e=Object(l.a)(a,2),t=e[0],o=e[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),u=s[0],d=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu-ul"},r.a.createElement("li",{onClick:function(){return d(!u)}},u?"Go to all global stats":"Go to all countries stats"))),u?r.a.createElement("div",{className:"all-countries"},r.a.createElement(C,null),r.a.createElement(v,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stats-section"},r.a.createElement("h2",{className:"title"},t?c[t]:"Global"),r.a.createElement("select",{id:"country",className:"select-css",onChange:function(a){o(a.target.value)},defaultValue:t},r.a.createElement("option",{value:""},"Select Country"),Object.entries(c).map((function(a){var e=Object(l.a)(a,2),t=e[0],n=e[1];return r.a.createElement("option",{key:t,value:t},n)})))),r.a.createElement("div",{className:"stats-cards"},t?r.a.createElement(b,{url:"https://corona.lmao.ninja/v2/countries/".concat(t)}):r.a.createElement(b,{url:"https://corona.lmao.ninja/v2/all"})),r.a.createElement(v,null)))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(a,e){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var t=a.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(a)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(a)))})}})).catch((function(a){console.error("Error during service worker registration:",a)}))}i.a.render(r.a.createElement(B,null),document.getElementById("root")),function(a){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");R?(!function(a,e){fetch(a,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.reload()}))})):T(a,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(e,a)}))}}()},42:function(a,e,t){},47:function(a,e,t){a.exports=t(152)},52:function(a,e,t){}},[[47,1,2]]]);
//# sourceMappingURL=main.670fd426.chunk.js.map