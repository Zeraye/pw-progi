(this["webpackJsonppw-progi"]=this["webpackJsonppw-progi"]||[]).push([[0],{12:function(t,a,e){},14:function(t,a,e){},15:function(t,a,e){"use strict";e.r(a);var s=e(7),c=e.n(s),n=e(2),i=e(1),r=e.n(i),o=(e(12),e(0)),p=function(t){var a=Object(i.useState)(t.score),e=Object(n.a)(a,2),s=e[0],c=e[1];return Object(o.jsx)(r.a.Fragment,{children:Object(o.jsxs)("div",{className:"p-3",children:[Object(o.jsx)("span",{className:"subject",children:t.subject}),Object(o.jsx)("input",{type:"range",className:"form-range",min:"0",max:"100",step:"1",onChange:function(a){c(+a.target.value),t.updateMath(+a.target.value)},value:s}),Object(o.jsx)("span",{style:{paddingLeft:"calc(".concat(s,"% + ").concat(-.24*s+4,"px)")},children:s})]})})},y=function(t){var a=Object(i.useState)(50),e=Object(n.a)(a,2),s=e[0],c=e[1],y=Object(i.useState)(50),j=Object(n.a)(y,2),u=j[0],l=j[1],m=Object(i.useState)(50),f=Object(n.a)(m,2),h=f[0],k=f[1],d=Object(i.useState)(0),b=Object(n.a)(d,2),z=b[0],g=b[1],O=Object(i.useState)(""),w=Object(n.a)(O,2),I=w[0],x=w[1];Object(i.useEffect)((function(){var a=Math.floor(s+u+.25*h);g(a),t.updateScore(a),x(a<=150?"00a300":a<=175?"f9a602":a<=200?"cc7722":a<=224?"800000":"ffd700")}),[s,u,h,t]);return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(p,{subject:"Matematyka p. rozszerzony",score:s,updateMath:function(t){c(t)}}),Object(o.jsx)(p,{subject:"Fizyka p. rozszerzony",score:u,updateMath:function(t){l(t)}}),Object(o.jsx)(p,{subject:"Angielski p. rozszerzony",score:h,updateMath:function(t){k(t)}}),Object(o.jsxs)("h1",{className:"text-center",children:["Punkty: ",Object(o.jsx)("span",{style:{color:"#".concat(I)},children:z}),"/225"]})]})},j=e(6),u=function(t){return Object(o.jsx)("button",{className:"btn btn-".concat(t.check?"":"outline-","secondary"),type:"button",onClick:t.updateHandler,children:t.text})},l=function(t){return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("div",{className:"btn-group float-start",role:"group",children:[Object(o.jsx)(u,{text:"Wszystkie",check:!1===t.fav,updateHandler:t.updateFav}),Object(o.jsx)(u,{text:"Ulubione",check:!0===t.fav,updateHandler:t.updateFav})]}),Object(o.jsx)("div",{className:"btn-group float-end",role:"group",children:["2017","2018","2019","2020"].map((function(a){return Object(o.jsx)(u,{text:a,check:t.year===a,updateHandler:t.updateYear},a)}))})]})},m=function(t){return Object(o.jsxs)("table",{className:"table table-responsive",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"header",onClick:function(){return t.requestSort("major")},children:"Kierunek"}),Object(o.jsx)("th",{className:"header",onClick:function(){return t.requestSort("faculty")},children:"Wydzia\u0142"}),Object(o.jsx)("th",{className:"header",onClick:function(){return t.requestSort("pts"+t.year)},children:"Pr\xf3g"}),Object(o.jsx)("th",{})]})}),Object(o.jsx)("tbody",{children:t.majors.map((function(a){var e=a["pts"+t.year];if(""!==e&&(!0!==t.fav||!0===a.favMajor))return Object(o.jsxs)("tr",{className:"table-".concat(+t.pts>=+e?"success":"danger"),children:[Object(o.jsx)("th",{children:a.major}),Object(o.jsx)("td",{children:a.faculty}),Object(o.jsx)("td",{children:e}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{className:"btn btn-".concat(!0===a.favMajor?"":"outline-","secondary"),type:"button",value:a.key,onClick:t.updateMajors,children:"\u2605"})})]},a.key)}))})]})},f=function(t){var a=Object(i.useState)(1),e=Object(n.a)(a,2),s=e[0],c=e[1],p=Object(i.useState)("2020"),y=Object(n.a)(p,2),u=y[0],f=y[1],h=Object(i.useState)(!1),k=Object(n.a)(h,2),d=k[0],b=k[1],z=Object(i.useState)(t.majors),g=Object(n.a)(z,2),O=g[0],w=g[1];Object(i.useEffect)((function(){null!==JSON.parse(localStorage.getItem("majors"))&&w(JSON.parse(localStorage.getItem("majors"))),null!=localStorage.getItem("fav")&&b("true"===localStorage.getItem("fav")),null!=localStorage.getItem("year")&&f(localStorage.getItem("year"))}),[]);return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(l,{fav:d,updateFav:function(t){b("Ulubione"===t.target.innerText),localStorage.setItem("fav",("Ulubione"===t.target.innerText).toString())},year:u,updateYear:function(t){f(t.target.innerText),localStorage.setItem("year",t.target.innerText)}}),Object(o.jsx)(m,{majors:O,requestSort:function(t){O.sort((function(a,e){var c=!1===isNaN(+a[t])&&!1===isNaN(+e[t]);return!0===c&&+a[t]>+e[t]||!1===c&&a[t]>e[t]?s:!0===c&&+a[t]<+e[t]||!1===c&&a[t]<e[t]?-s:0})),c(-s),w((function(t){return Object(j.a)(t)}))},year:u,fav:d,updateMajors:function(t){O.map((function(a){return a.key===t.target.value&&(a.favMajor=!a.favMajor),a})),w((function(t){return Object(j.a)(t)})),localStorage.setItem("majors",JSON.stringify(O))},pts:t.pts})]})},h=[{major:"Administracja",faculty:"Administracji i Nauk Spo\u0142ecznych",pts2017:"109",pts2018:"97",pts2019:"89",pts2020:"87"},{major:"Aerospace Engineering",faculty:"Mechaniczny Energetyki i Lotnictwa",pts2017:"174",pts2018:"158",pts2019:"179",pts2020:"176"},{major:"Automatyka i robotyka",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"190",pts2018:"176",pts2019:"193",pts2020:"191"},{major:"Automatyka i robotyka stosowana",faculty:"Elektryczny",pts2017:"158",pts2018:"140",pts2019:"157",pts2020:"153"},{major:"Automatyka, robotyka i informatyka przemys\u0142owa",faculty:"Mechatroniki",pts2017:"173",pts2018:"156",pts2019:"172",pts2020:"159"},{major:"Automatyzacja i robotyzacja proces\xf3w produkcyjnych",faculty:"In\u017cynierii Produkcji",pts2017:"130",pts2018:"103",pts2019:"100",pts2020:"92"},{major:"Biogospodarka",faculty:"Instalacji Budowlanych, Hydrotechniki i In\u017cynierii \u015arodowiska",pts2017:"114",pts2018:"78",pts2019:"110",pts2020:"93"},{major:"Biotechnologia",faculty:"Chemiczny",pts2017:"135",pts2018:"125",pts2019:"122",pts2020:"134"},{major:"Budownictwo",faculty:"In\u017cynierii L\u0105dowej",pts2017:"122",pts2018:"100",pts2019:"111",pts2020:"113"},{major:"Budownictwo",faculty:"Budownictwa, Mechaniki i Petrochemii (PW Filia w P\u0142ocku)",pts2017:"51",pts2018:"54",pts2019:"51",pts2020:"50"},{major:"Civil Engineering",faculty:"In\u017cynierii L\u0105dowej",pts2017:"75",pts2018:"75",pts2019:"77",pts2020:"70"},{major:"Computer Science",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"159",pts2018:"158",pts2019:"172",pts2020:"171"},{major:"Computer Science and Information Systems",faculty:"Matematyki i Nauk Informacyjnych",pts2017:"169",pts2018:"165",pts2019:"181",pts2020:"175"},{major:"Cyberbezpiecze\u0144stwo",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"",pts2018:"",pts2019:"187",pts2020:"184"},{major:"Ekonomia",faculty:"Kolegium Nauk Ekonomicznych i Spo\u0142ecznych (PW Filia w P\u0142ocku)",pts2017:"56",pts2018:"51",pts2019:"51",pts2020:"50"},{major:"Electric and Hybrid Vehicles Engineering",faculty:"Samochod\xf3w i Maszyn Roboczych",pts2017:"76",pts2018:"75",pts2019:"77",pts2020:"72"},{major:"Electrical Engineering",faculty:"Elektryczny",pts2017:"91",pts2018:"91",pts2019:"75",pts2020:"74"},{major:"Elektromobilno\u015b\u0107",faculty:"Elektryczny",pts2017:"",pts2018:"",pts2019:"136",pts2020:"141"},{major:"Elektronika",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"142",pts2018:"122",pts2019:"130",pts2020:"131"},{major:"Elektrotechnika",faculty:"Elektryczny",pts2017:"120",pts2018:"103",pts2019:"111",pts2020:"113"},{major:"Energetyka",faculty:"Mechaniczny Energetyki i Lotnictwa",pts2017:"165",pts2018:"146",pts2019:"164",pts2020:"151"},{major:"Environmental Engineering",faculty:"Instalacji Budowlanych, Hydrotechniki i In\u017cynierii \u015arodowiska",pts2017:"76",pts2018:"80",pts2019:"76",pts2020:"70"},{major:"Fizyka techniczna",faculty:"Fizyki",pts2017:"122",pts2018:"125",pts2019:"132",pts2020:"139"},{major:"Fotonika",faculty:"Fizyki",pts2017:"105",pts2018:"107",pts2019:"110",pts2020:"120"},{major:"Geodezja i kartografia",faculty:"Geodezji i Kartografii",pts2017:"112",pts2018:"92",pts2019:"99",pts2020:"92"},{major:"Geoinformatyka",faculty:"Geodezji i Kartografii",pts2017:"146",pts2018:"138",pts2019:"157",pts2020:"151"},{major:"Gospodarka przestrzenna",faculty:"Geodezji i Kartografii",pts2017:"130",pts2018:"102",pts2019:"120",pts2020:"112"},{major:"Informatyka",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"184",pts2018:"176",pts2019:"196",pts2020:"193"},{major:"Informatyka i systemy informacyjne",faculty:"Matematyki i Nauk Informacyjnych",pts2017:"190",pts2018:"188",pts2019:"205",pts2020:"201"},{major:"Informatyka stosowana",faculty:"Elektryczny",pts2017:"176",pts2018:"168",pts2019:"186",pts2020:"180"},{major:"In\u017cynieria biomedyczna",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"141",pts2018:"130",pts2019:"147",pts2020:"153"},{major:"In\u017cynieria biomedyczna",faculty:"Mechatroniki",pts2017:"143",pts2018:"117",pts2019:"130",pts2020:"136"},{major:"In\u017cynieria chemiczna i procesowa",faculty:"In\u017cynierii Chemicznej i Procesowej",pts2017:"128",pts2018:"112",pts2019:"114",pts2020:"114"},{major:"In\u017cynieria i analiza danych",faculty:"Matematyki i Nauk Informacyjnych",pts2017:"194",pts2018:"192",pts2019:"207",pts2020:"202"},{major:"In\u017cynieria Internetu rzeczy",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"",pts2018:"",pts2019:"",pts2020:"185"},{major:"In\u017cynieria materia\u0142owa",faculty:"In\u017cynierii Materia\u0142owej",pts2017:"114",pts2018:"83",pts2019:"90",pts2020:"70"},{major:"In\u017cynieria pojazd\xf3w elektrycznych i hybrydowych",faculty:"Samochod\xf3w i Maszyn Roboczych",pts2017:"131",pts2018:"110",pts2019:"107",pts2020:"88"},{major:"In\u017cynieria \u015brodowiska",faculty:"Instalacji Budowlanych, Hydrotechniki i In\u017cynierii \u015arodowiska",pts2017:"88",pts2018:"70",pts2019:"90",pts2020:"70"},{major:"In\u017cynieria \u015brodowiska",faculty:"Budownictwa, Mechaniki i Petrochemii (PW Filia w P\u0142ocku)",pts2017:"50",pts2018:"51",pts2019:"50",pts2020:"50"},{major:"In\u017cynieria zarz\u0105dzania",faculty:"Zarz\u0105dzania",pts2017:"90",pts2018:"75",pts2019:"88",pts2020:"89"},{major:"Lotnictwo i kosmonautyka",faculty:"Mechaniczny Energetyki i Lotnictwa",pts2017:"175",pts2018:"161",pts2019:"182",pts2020:"180"},{major:"Matematyka",faculty:"Matematyki i Nauk Informacyjnych",pts2017:"173",pts2018:"162",pts2019:"182",pts2020:"186"},{major:"Matematyka i analiza danych",faculty:"Matematyki i Nauk Informacyjnych",pts2017:"",pts2018:"",pts2019:"205",pts2020:"200"},{major:"Mechanika i budowa maszyn",faculty:"In\u017cynierii Produkcji",pts2017:"88",pts2018:"79",pts2019:"81",pts2020:"78"},{major:"Mechanika i budowa maszyn",faculty:"Budownictwa, Mechaniki i Petrochemii (PW Filia w P\u0142ocku)",pts2017:"51",pts2018:"51",pts2019:"51",pts2020:"50"},{major:"Mechanika i projektowanie maszyn",faculty:"Mechaniczny Energetyki i Lotnictwa",pts2017:"182",pts2018:"154",pts2019:"185",pts2020:"171"},{major:"Mechanika pojazd\xf3w i maszyn roboczych",faculty:"Samochod\xf3w i Maszyn Roboczych",pts2017:"116",pts2018:"112",pts2019:"75",pts2020:"71"},{major:"Mechatronics",faculty:"Mechatroniki",pts2017:"142",pts2018:"122",pts2019:"102",pts2020:"95"},{major:"Mechatronics of Vehicles and Construction Machinery",faculty:"Samochod\xf3w i Maszyn Roboczych",pts2017:"",pts2018:"83",pts2019:"80",pts2020:"81"},{major:"Mechatronika",faculty:"Mechatroniki",pts2017:"147",pts2018:"126",pts2019:"133",pts2020:"126"},{major:"Mechatronika pojazd\xf3w i maszyn roboczych",faculty:"Samochod\xf3w i Maszyn Roboczych",pts2017:"127",pts2018:"113",pts2019:"80",pts2020:"70"},{major:"Ochrona \u015brodowiska",faculty:"Instalacji Budowlanych, Hydrotechniki i In\u017cynierii \u015arodowiska",pts2017:"90",pts2018:"77",pts2019:"100",pts2020:"87"},{major:"Papiernictwo i poligrafia",faculty:"In\u017cynierii Produkcji",pts2017:"77",pts2018:"76",pts2019:"86",pts2020:"77"},{major:"Power Engineering",faculty:"Mechaniczny Energetyki i Lotnictwa",pts2017:"152",pts2018:"123",pts2019:"145",pts2020:"136"},{major:"Robotyka i automatyka",faculty:"Mechaniczny Energetyki i Lotnictwa",pts2017:"183",pts2018:"160",pts2019:"186",pts2020:"165"},{major:"Technologia chemiczna",faculty:"Chemiczny",pts2017:"113",pts2018:"103",pts2019:"105",pts2020:"92"},{major:"Technologia chemiczna",faculty:"Budownictwa, Mechaniki i Petrochemii (PW Filia\xa0 w P\u0142ocku)",pts2017:"56",pts2018:"53",pts2019:"53",pts2020:"51"},{major:"Technologia Chemiczna (profil praktyczny)",faculty:"Chemiczny",pts2017:"",pts2018:"143",pts2019:"167",pts2020:"159"},{major:"Telecommunications",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"120",pts2018:"100",pts2019:"107",pts2020:"100"},{major:"Telekomunikacja",faculty:"Elektroniki i Technik Informacyjnych",pts2017:"149",pts2018:"121",pts2019:"134",pts2020:"139"},{major:"Transport",faculty:"Transportu",pts2017:"90",pts2018:"84",pts2019:"85",pts2020:"70"},{major:"Zarz\u0105dzanie",faculty:"Zarz\u0105dzania",pts2017:"",pts2018:"",pts2019:"",pts2020:"128"},{major:"Zarz\u0105dzanie bezpiecze\u0144stwem infrastruktury krytycznej",faculty:"Zarz\u0105dzania",pts2017:"",pts2018:"",pts2019:"82",pts2020:"70"},{major:"Zarz\u0105dzanie i in\u017cynieria produkcji",faculty:"In\u017cynierii Produkcji",pts2017:"96",pts2018:"90",pts2019:"101",pts2020:"90"}];h.map((function(t){return t.favMajor=!1,t.key=Math.random().toString(),t}));var k=function(){var t=Object(i.useState)(0),a=Object(n.a)(t,2),e=a[0],s=a[1];return Object(o.jsxs)("div",{className:"container p-5",children:[Object(o.jsx)(y,{updateScore:function(t){s(t)}}),Object(o.jsx)("hr",{}),Object(o.jsx)(f,{majors:h,pts:e})]})};e(14);c.a.render(Object(o.jsx)(k,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.74a0b33c.chunk.js.map