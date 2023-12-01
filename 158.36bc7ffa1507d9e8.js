"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[158],{8158:(w,h,r)=>{r.r(h),r.d(h,{DashboardModule:()=>Z});var v=r(6814),g=r(95),o=r(1707),b=r(1272),x=r(6006),m=r(1430),t=r(9468),u=function(e,n){if(!(typeof window>"u"||typeof document>"u")){var i=n??document.body;return window.getComputedStyle(i,null).getPropertyValue(e).replace(/^\s/,"")}};let y=(()=>{var e;class n{constructor(){this.mainChart={},this.initMainChart()}random(a,c){return Math.floor(Math.random()*(c-a+1)+a)}initMainChart(a="Month"){const c=u("--cui-success")??"#4dbd74",d=u("--cui-info")??"#20a8d8",_=function(e,n){if(void 0===n&&(n=100),typeof e>"u")throw new TypeError("Hex color is not defined");var a,c,d;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(a=parseInt(e.slice(1,3),16),c=parseInt(e.slice(3,5),16),d=parseInt(e.slice(5,7),16)):(a=parseInt(e.slice(1,2),16),c=parseInt(e.slice(2,3),16),d=parseInt(e.slice(3,5),16)),"rgba(".concat(a,", ").concat(c,", ").concat(d,", ").concat(n/100,")")}(d,10),f=u("--cui-danger")||"#f86c6b";this.mainChart.elements="Month"===a?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let s=0;s<=this.mainChart.elements;s++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let l=[];if("Month"===a)l=["January","February","March","April","May","June","July","August","September","October","November","December"];else{const s=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];l=s.concat(s,s,s)}const p=[{backgroundColor:_,borderColor:d,pointHoverBackgroundColor:d,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:c||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:f||"#f86c6b",pointHoverBackgroundColor:f,borderWidth:1,borderDash:[8,5]}],A=[{data:this.mainChart.Data1,label:"Current",...p[0]},{data:this.mainChart.Data2,label:"Previous",...p[1]},{data:this.mainChart.Data3,label:"BEP",...p[2]}],O={maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{labelColor:function(s){return{backgroundColor:s.dataset.borderColor}}}}},scales:{x:{grid:{drawOnChartArea:!1}},y:{beginAtZero:!0,max:250,ticks:{maxTicksLimit:5,stepSize:Math.ceil(50)}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=O,this.mainChart.data={datasets:A,labels:l}}}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"any"}),n})();const M=[{path:"",component:(()=>{var e;class n{constructor(a){this.chartsData=a,this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/img/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/img/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/img/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xe9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/img/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xe1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/img/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xe1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/img/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={},this.chart=[],this.trafficRadioGroup=new g.nJ({trafficRadio:new g.p4("Month")})}ngOnInit(){this.initCharts()}initCharts(){this.mainChart=this.chartsData.mainChart}setTrafficPeriod(a){this.trafficRadioGroup.setValue({trafficRadio:a}),this.chartsData.initMainChart(a),this.initCharts()}}return(e=n).\u0275fac=function(a){return new(a||e)(t.Y36(y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:68,vars:0,consts:[[1,"part1"],[1,"image-container"],["src","../../../assets/images/presentacion.jpg","alt","Imagen"],["src","../../../assets/images/titulo.png","alt","Imagen"],[1,"content-container"],[1,"text-center"],[1,"image-container2"],["src","../../../assets/images/estadis.jpg","alt","Imagen 1",1,"image1"],[1,"image2"],["src","../../../assets/images/inegi.webp","alt","Imagen 2"],[1,"caja1"],[1,"part2","mb-3"],[1,"centered-div"],[1,"image"],[1,"cuadro1"],[1,"cuadro2"],["src","../../../assets/images/mapa.jpg","alt","Imagen"],[1,"valores"],[1,"grid-item"],[1,"part3"],[1,"caja3"],["src","../../../assets/images/desafio.jpg","alt",""],[1,"part4"],[1,"cir1"],[1,"cir2"],[1,"caja5"],[1,"contenido","d-flex","position-relative","justify-content-end"],[1,"left","position-absolute"],[1,"position-relative"],[1,"caja4"],[1,"py-4"],["src","../../../assets/images/sociedad.jpg","alt","",1,"position-absolute"],[1,"right","mx-5"],["src","../../../assets/images/conocer.png","alt",""],[1,"part5","position-relative"],[1,"despe","d-flex","position-absolute","px-5"]],template:function(a,c){1&a&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",1),t._UZ(4,"img",3),t.qZA()(),t.TgZ(5,"section",0)(6,"div",4)(7,"h4",5),t._uU(8," Aqu\xed encontrar\xe1s datos estad\xedsticos y an\xe1lisis sobre\xa0este importante tema. "),t.qZA(),t.TgZ(9,"p"),t._uU(10," Nuestro objetivo es proporcionar informaci\xf3n actualizada para\xa0 comprender la situaci\xf3n del hogar y vivienda en M\xe9xico, y c\xf3mo estos\xa0 indicadores pueden influir en diversas \xe1reas de la sociedad. Ya sea que\xa0 est\xe9s interesado/a en investigaciones acad\xe9micas, pol\xedticas p\xfablicas o\xa0 simplemente quieras conocer m\xe1s acerca de la realidad habitacional en \xa0 M\xe9xico, este sitio es para ti. "),t.qZA()(),t.TgZ(11,"div",6),t._UZ(12,"img",7),t.TgZ(13,"div",8),t._UZ(14,"img",9),t.qZA(),t._UZ(15,"div",10),t.qZA()(),t.TgZ(16,"section",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"h5"),t._uU(21," \u200bDescubre la realidad habitacional en M\xe9xico a trav\xe9s de nuestros datos\xa0 actualizados y confiables. "),t.qZA()(),t._UZ(22,"div",15)(23,"img",16),t.qZA(),t.TgZ(24,"div",17)(25,"div",18)(26,"h5"),t._uU(27,"\u200b35.219.141"),t.qZA(),t.TgZ(28,"p"),t._uU(29,"VIVIENDAS"),t.qZA()(),t.TgZ(30,"div",18)(31,"h5"),t._uU(32,"126.014.024"),t.qZA(),t.TgZ(33,"p"),t._uU(34,"POBLACI\xd3N"),t.qZA()(),t.TgZ(35,"div",18)(36,"h5"),t._uU(37,"125.514.839"),t.qZA(),t.TgZ(38,"p"),t._uU(39,"POBLACI\xd3N EN HOGARES"),t.qZA()()()()(),t.TgZ(40,"section",19)(41,"div",20)(42,"h3"),t._uU(43,"\u200bComprende los desaf\xedos y promueve soluciones efectivas."),t.qZA()(),t._UZ(44,"img",21),t.qZA(),t.TgZ(45,"section",22),t._UZ(46,"div",23)(47,"div",24)(48,"div",25),t.TgZ(49,"div",26)(50,"div",27)(51,"div",28),t._UZ(52,"div",29),t.TgZ(53,"h5",30),t._uU(54," Conoce c\xf3mo los indicadores de hogar y vivienda influyen en diversas\xa0 \xe1reas de la sociedad y c\xf3mo podemos abordarlos. "),t.qZA(),t._UZ(55,"img",31),t.qZA()(),t.TgZ(56,"div",32)(57,"h3")(58,"span"),t._uU(59,"\xa1"),t.qZA(),t._uU(60,"Te invitamos a explorar nuestro sitio y descubrir la riqueza de datos y\xa0 an\xe1lisis que ofrecemos"),t.TgZ(61,"span"),t._uU(62,"!"),t.qZA()(),t._UZ(63,"img",33),t.qZA()()(),t.TgZ(64,"section",34)(65,"div",35)(66,"h4"),t._uU(67," Si tienes alguna pregunta o sugerencia, no dudes\xa0en ponerte en contacto con nosotros. \xa1Gracias por visitarnos y esperamos \xa0que encuentres este sitio informativo y enriquecedor! "),t.qZA()()())},styles:[".part1[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem;background-color:#fff}.image-container[_ngcontent-%COMP%]{flex:1}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.content-container[_ngcontent-%COMP%]{flex:1;padding:0 20px}.image-container2[_ngcontent-%COMP%]{position:relative;width:400px;height:400px;overflow:hidden}.image1[_ngcontent-%COMP%]{position:absolute;top:-20px;left:-20px;background-color:#fff;z-index:2;width:250px;height:200px}.image2[_ngcontent-%COMP%]{position:absolute;bottom:-30px;right:-130px;width:150%;height:auto;margin-left:2rem}.caja1[_ngcontent-%COMP%]{position:absolute;width:70px;height:100%;background-color:#fff;z-index:1}.part2[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#fff}.centered-div[_ngcontent-%COMP%]{width:50%;height:400px;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:2}.grid-item[_ngcontent-%COMP%]{background-color:#eee;border:1px solid #ccc;width:33.3%;text-align:center;display:flex;flex-direction:column;justify-content:center;padding-top:15px}.grid-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:9px}.image[_ngcontent-%COMP%]{grid-row:1;grid-column:1;position:relative}img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;position:relative}.valores[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%}.cuadro1[_ngcontent-%COMP%]{width:250px;height:200px;background-image:linear-gradient(#5de078,#52afce);position:absolute;left:-210px;top:150px;z-index:3;text-align:center;justify-content:center;display:flex;align-items:center;color:#f0f8ff}.cuadro1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700;line-height:1.5}.cuadro2[_ngcontent-%COMP%]{width:250px;height:160px;background-image:linear-gradient(#5de078,#52afce);position:absolute;right:-110px;top:280px;z-index:-3}.part3[_ngcontent-%COMP%]{height:70vh;position:relative}.caja3[_ngcontent-%COMP%]{width:350px;height:200px;z-index:3;background-color:#333;position:absolute;top:-40px;left:80px;text-align:center;justify-content:center;display:flex;align-items:center;color:#f0f8ff}.caja3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:800;line-height:1.5}.part4[_ngcontent-%COMP%]{height:100vh;background-color:#ccc;position:relative;padding-top:6rem}.cir1[_ngcontent-%COMP%]{clip-path:ellipse(84% 90% at 99% 98%);background-image:linear-gradient(#5de078,#52afce);position:absolute;width:400px;height:400px;bottom:0;right:0}.cir2[_ngcontent-%COMP%]{clip-path:ellipse(64% 70% at 99% 98%);background-color:#ccc;position:absolute;width:400px;height:400px;bottom:0;right:0}.right[_ngcontent-%COMP%]{width:35%;height:100%;background-color:#fff;text-align:center;padding:12px;z-index:4;box-shadow:0 5px 10px #33333380;border-radius:10px}.right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#52afce;font-weight:800;font-size:1.2rem;margin-bottom:30px}.right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5de078;font-weight:800;font-size:1.6rem}.right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:30px}.left[_ngcontent-%COMP%]{width:35%;background-color:#fff;color:#333;text-align:center;padding:12px;top:-190px;left:30px;height:100%}.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:220px;width:400px;left:90px}.contenido[_ngcontent-%COMP%]{justify-content:space-around}.caja4[_ngcontent-%COMP%]{background-image:linear-gradient(#5de078,#52afce);position:absolute;width:70px;height:70px;z-index:4;right:-60px;bottom:-290px}.caja5[_ngcontent-%COMP%]{background-image:linear-gradient(#5de078,#52afce);position:absolute;width:100px;height:200px}.part5[_ngcontent-%COMP%]{background-image:url(quejas.001a0edbaa69d010.png);background-repeat:no-repeat;background-size:cover;height:60vh}.despe[_ngcontent-%COMP%]{background-image:linear-gradient(#5de078,#52afce);width:50%;height:250px;top:-80px;left:10px;border-radius:5px;box-shadow:0 5px 10px #33333380;text-align:center;color:#fff;align-items:center}"]}),n})(),data:{title:$localize`Dashboard`}}];let P=(()=>{var e;class n{}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(M),m.Bz]}),n})(),Z=(()=>{var e;class n{}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[P,o.dTQ,o.dGk,b.QX,o.P4_,v.ez,o.zE6,o.qek,g.UX,o.hJ1,o.ejP,o.hJ1,o.ga2,x.N,o.FxY,o.U$I]}),n})()}}]);