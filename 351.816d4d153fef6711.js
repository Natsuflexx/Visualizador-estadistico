"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[351],{351:(O,r,s)=>{s.r(r),s.d(r,{ButtonsModule:()=>v});var l=s(6814),g=s(95),d=s(6006),f=s(2328),p=s(1430),t=s(9468),u=s(4173),a=s(1707);function h(e,n){if(1&e&&(t.TgZ(0,"tr")(1,"td",8)(2,"span"),t._uU(3),t.qZA(),t._UZ(4,"img",9),t.qZA(),t.TgZ(5,"td",10)(6,"span"),t._uU(7),t.qZA()()()),2&e){const c=n.$implicit,o=n.index,i=t.oxw();t.xp6(3),t.hij("",c," "),t.xp6(1),t.Q6J("src",i.links(o),t.LSH),t.xp6(3),t.hij("",i.caracter[o],"%")}}const m=[{path:"",data:{title:"Indicadores"},children:[{path:"",pathMatch:"full",redirectTo:"buttons"},{path:"caracteristica",component:(()=>{var e;class n{constructor(o){this.apiService=o,this.data=[],this.caracter=[],this.aspecto=["Piso de Tierra","Agua entubada","Electricidad","Drenaje","Excusado","Techo resistente","internet","Pantalla plana","Celular","Autom\xf3vil","Refrigerador","Lavadora"],this.link=["../../../../assets/aspecto/piso de tierra.png","../../../../assets/aspecto/agua entubada.png","../../../../assets/aspecto/electricidad.png","../../../../assets/aspecto/drenaje.png","../../../../assets/aspecto/excusado.png","../../../../assets/aspecto/techo resistente.png","../../../../assets/aspecto/internet.png","../../../../assets/aspecto/pantalla plana.png","../../../../assets/aspecto/celular.png","../../../../assets/aspecto/automovil.png","../../../../assets/aspecto/refrigerador.png","../../../../assets/aspecto/lavadora.png"],this.piso=[],this.agua=[],this.elect=[],this.drenaje=[],this.escusado=[],this.techo=[],this.internet=[],this.tele=[],this.movil=[],this.carro=[],this.refri=[],this.lavador=[]}ngOnInit(){this.datacaracteris()}links(o){return this.link[o]}datacaracteris(){this.apiService.getcaractvivienda().subscribe(o=>{this.data=o;for(let i=0;i<12;i++)this.caracter[i]=o.Series[i].OBSERVATIONS.map(x=>parseFloat(x.OBS_VALUE).toFixed(2))}),console.log(this.caracter)}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(u.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-caracteristica"]],decls:18,vars:1,consts:[[1,"d-flex","justify-content-center","my-5"],[1,"card","col-md-9"],[1,"text-center"],[1,"box"],[1,"text-center","px-2"],[1,"table"],[1,"title"],[4,"ngFor","ngForOf"],[1,"cell","d-flex"],["alt","Icono","width","100","height","100",3,"src"],[1,"porcent"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"c-card-header")(3,"h5",2),t._uU(4,"Caracter\xedsticas"),t.qZA()(),t.TgZ(5,"div",3)(6,"p",4),t._uU(7," Informaci\xf3n crucial sobre el nivel de bienestar y calidad de vida de las personas, y reflejan la diversidad de condiciones en las que viven las familias y son fundamentales para comprender las necesidades y desaf\xedos que enfrentan en su entorno habitacional. "),t.qZA()(),t.TgZ(8,"c-card-body",2)(9,"table",5)(10,"thead")(11,"tr",6)(12,"th"),t._uU(13,"Aspectos"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Porcentaje"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,h,8,3,"tr",7),t.qZA()()()()()),2&o&&(t.xp6(17),t.Q6J("ngForOf",i.aspecto))},dependencies:[l.sg,a.yue,a.nkx],styles:['@charset "UTF-8";.caja[_ngcontent-%COMP%]{padding-left:90px}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px!important;text-align:center!important;border:1px solid #ddd!important}th[_ngcontent-%COMP%]{background-color:#f2f2f2!important}.decil1[_ngcontent-%COMP%]{background-color:#b3e5fc;color:#000}.decil2[_ngcontent-%COMP%]{background-color:#c8e6c9;color:#000}.decil3[_ngcontent-%COMP%]{background-color:#81d4fa;color:#000}.decil4[_ngcontent-%COMP%]{background-color:#a5d6a7;color:#000}.decil5[_ngcontent-%COMP%]{background-color:#4fc3f7;color:#000}.decil6[_ngcontent-%COMP%]{background-color:#81c784;color:#fff}.decil7[_ngcontent-%COMP%]{background-color:#29b6f6;color:#fff}.decil8[_ngcontent-%COMP%]{background-color:#66bb6a;color:#fff}.decil9[_ngcontent-%COMP%]{background-color:#03a9f4;color:#fff}.decil10[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.box[_ngcontent-%COMP%]{position:relative;padding:20px 0;background-color:#e6f7f2}.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;width:10px}.box[_ngcontent-%COMP%]:before{left:0;background-color:#81c784}.box[_ngcontent-%COMP%]:after{right:0;background-color:#81c784}.cell[_ngcontent-%COMP%]{height:110px;justify-content:space-evenly;align-items:center;font-family:YourDesiredFont,sans-serif;font-size:18px;color:#03a9f4}.porcent[_ngcontent-%COMP%]{vertical-align:middle;text-align:center;font-family:YourDesiredFont,sans-serif;font-size:18px;color:#03a9f4}.title[_ngcontent-%COMP%]{color:#fff}.title[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#4caf50!important}']}),n})(),data:{title:"Caracter\xedsticas"}},{path:"ocupacion",component:(()=>{var e;class n{constructor(o){this.apiService=o,this.privada=68.82,this.renta=15.92,this.otros=100-this.privada+this.renta,this.chartPieData={labels:["propias","alquiladas","otras"],datasets:[{data:[this.privada,this.renta,this.otros],backgroundColor:["#B3E5FC","#29B6F6","#81D4FA"],hoverBackgroundColor:["#004d00","#0b5e0b","#177c17"]}]}}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(u.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ocupacion"]],decls:13,vars:1,consts:[[1,"caja","d-flex","justify-content-around"],[1,"col-md-6","my-4"],[1,"pie"],[1,"text-center"],["type","pie",3,"data"],[1,"box","col-md-4","my-4","text-center"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"c-card",2)(3,"c-card-header",3)(4,"h3"),t._uU(5,"Tipos"),t.qZA()(),t.TgZ(6,"c-card-body",2),t._UZ(7,"c-chart",4),t.qZA()()(),t.TgZ(8,"div",5)(9,"h5"),t._uU(10,"Tipos de Viviendas"),t.qZA(),t.TgZ(11,"p"),t._uU(12,"Propias: Son aquellas viviendas en las que los residentes son los propietarios legales. Esto significa que han adquirido la propiedad mediante compra, herencia u otros medios legales. Alquiladas: Son viviendas en las que los residentes no son propietarios, sino que arriendan la vivienda a cambio de un pago peri\xf3dico, generalmente mensual, al propietario o arrendador."),t.qZA()()()),2&o&&(t.xp6(7),t.Q6J("data",i.chartPieData))},dependencies:[a.AkF,a.yue,a.nkx,d.d],styles:['@charset "UTF-8";.pie[_ngcontent-%COMP%]{max-width:350px}.box[_ngcontent-%COMP%]{position:relative;background-color:#e6f7f2;padding:20px}.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;width:100%;height:10px}.box[_ngcontent-%COMP%]:before{top:0;background-color:#81c784}.box[_ngcontent-%COMP%]:after{bottom:0;background-color:#81c784}']}),n})(),data:{title:"Formas de Ocupaci\xf3n"}},{path:"disponibilidad",component:(()=>{var e;class n{constructor(){}}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-disponibilidad"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"h1"),t._uU(1," Disponibilidad enj las viviendas"),t.qZA())},encapsulation:2}),n})(),data:{title:"Disponibilidad de recursos"}}]}];let b=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(m),p.Bz]}),n})();var C=s(1272);let v=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,b,a.hJ1,a.ga2,a.zE6,C.QX,a.dTQ,a.gzQ,a.kWm,a.m81,a.ejP,g.UX,f.E,a.W4s,a.fwJ,a.dGk,a.W4s,d.N]}),n})()}}]);