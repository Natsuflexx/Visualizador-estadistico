"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[731],{4731:(Ve,U,v)=>{v.r(U),v.d(U,{BaseModule:()=>ke});var k=v(6814),Y=v(95),C=v(6006),f=v(1707),K=v(1272),ee=v(2328),D=v(1430),u=v(8133),I=v(9412),j=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var a=window.screen;if(a)return(a.deviceXDPI||1)/(a.logicalXDPI||1)}return 1}(),x_textSize=function(a,i,r){var l,t=[].concat(i),e=t.length,s=a.font,n=0;for(a.font=r.string,l=0;l<e;++l)n=Math.max(a.measureText(t[l]).width,n);return a.font=s,{height:e*r.lineHeight,width:n}};function F(a,i){var r=i.x,t=i.y;if(null===r)return{x:0,y:-1};if(null===t)return{x:1,y:0};var e=a.x-r,s=a.y-t,n=Math.sqrt(e*e+s*s);return{x:n?e/n:0,y:n?s/n:-1}}var te=0,w=1,R=2,q=4,L=8;function O(a,i,r){var t=te;return a<r.left?t|=w:a>r.right&&(t|=R),i<r.top?t|=L:i>r.bottom&&(t|=q),t}function E(a,i){var e,s,r=i.anchor,t=a;return i.clamp&&(t=function re(a,i){for(var d,c,h,r=a.x0,t=a.y0,e=a.x1,s=a.y1,n=O(r,t,i),l=O(e,s,i);n|l&&!(n&l);)(d=n||l)&L?(c=r+(e-r)*(i.top-t)/(s-t),h=i.top):d&q?(c=r+(e-r)*(i.bottom-t)/(s-t),h=i.bottom):d&R?(h=t+(s-t)*(i.right-r)/(e-r),c=i.right):d&w&&(h=t+(s-t)*(i.left-r)/(e-r),c=i.left),d===n?n=O(r=c,t=h,i):l=O(e=c,s=h,i);return{x0:r,x1:e,y0:t,y1:s}}(t,i.area)),"start"===r?(e=t.x0,s=t.y0):"end"===r?(e=t.x1,s=t.y1):(e=(t.x0+t.x1)/2,s=(t.y0+t.y1)/2),function ae(a,i,r,t,e){switch(e){case"center":r=t=0;break;case"bottom":r=0,t=1;break;case"right":r=1,t=0;break;case"left":r=-1,t=0;break;case"top":r=0,t=-1;break;case"start":r=-r,t=-t;break;case"end":break;default:e*=Math.PI/180,r=Math.cos(e),t=Math.sin(e)}return{x:a,y:i,vx:r,vy:t}}(e,s,a.vx,a.vy,i.align)}var B={arc:function(a,i){var r=(a.startAngle+a.endAngle)/2,t=Math.cos(r),e=Math.sin(r),s=a.innerRadius,n=a.outerRadius;return E({x0:a.x+t*s,y0:a.y+e*s,x1:a.x+t*n,y1:a.y+e*n,vx:t,vy:e},i)},point:function(a,i){var r=F(a,i.origin),t=r.x*a.options.radius,e=r.y*a.options.radius;return E({x0:a.x-t,y0:a.y-e,x1:a.x+t,y1:a.y+e,vx:r.x,vy:r.y},i)},bar:function(a,i){var r=F(a,i.origin),t=a.x,e=a.y,s=0,n=0;return a.horizontal?(t=Math.min(a.x,a.base),s=Math.abs(a.base-a.x)):(e=Math.min(a.y,a.base),n=Math.abs(a.base-a.y)),E({x0:t,y0:e+n,x1:t+s,y1:e,vx:r.x,vy:r.y},i)},fallback:function(a,i){var r=F(a,i.origin);return E({x0:a.x,y0:a.y,x1:a.x+(a.width||0),y1:a.y+(a.height||0),vx:r.x,vy:r.y},i)}},m=function(a){return Math.round(a*j)/j};function oe(a,i){var r=i.chart.getDatasetMeta(i.datasetIndex).vScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var t=r.getBasePixel();return a.horizontal?{x:t,y:null}:{x:null,y:t}}function se(a){return a instanceof I.qi?B.arc:a instanceof I.od?B.point:a instanceof I.ZL?B.bar:B.fallback}function ce(a,i,r){var t=a.shadowBlur,e=r.stroked,s=m(r.x),n=m(r.y),l=m(r.w);e&&a.strokeText(i,s,n,l),r.filled&&(t&&e&&(a.shadowBlur=0),a.fillText(i,s,n,l),t&&e&&(a.shadowBlur=t))}(0,u.V)(function(a,i,r,t){var e=this;e._config=a,e._index=t,e._model=null,e._rects=null,e._ctx=i,e._el=r}.prototype,{_modelize:function(a,i,r,t){var e=this,s=e._index,n=(0,u.O)((0,u.a)([r.font,{}],t,s)),l=(0,u.a)([r.color,I.ce.color],t,s);return{align:(0,u.a)([r.align,"center"],t,s),anchor:(0,u.a)([r.anchor,"center"],t,s),area:t.chart.chartArea,backgroundColor:(0,u.a)([r.backgroundColor,null],t,s),borderColor:(0,u.a)([r.borderColor,null],t,s),borderRadius:(0,u.a)([r.borderRadius,0],t,s),borderWidth:(0,u.a)([r.borderWidth,0],t,s),clamp:(0,u.a)([r.clamp,!1],t,s),clip:(0,u.a)([r.clip,!1],t,s),color:l,display:a,font:n,lines:i,offset:(0,u.a)([r.offset,4],t,s),opacity:(0,u.a)([r.opacity,1],t,s),origin:oe(e._el,t),padding:(0,u.K)((0,u.a)([r.padding,4],t,s)),positioner:se(e._el),rotation:(0,u.a)([r.rotation,0],t,s)*(Math.PI/180),size:x_textSize(e._ctx,i,n),textAlign:(0,u.a)([r.textAlign,"start"],t,s),textShadowBlur:(0,u.a)([r.textShadowBlur,0],t,s),textShadowColor:(0,u.a)([r.textShadowColor,l],t,s),textStrokeColor:(0,u.a)([r.textStrokeColor,l],t,s),textStrokeWidth:(0,u.a)([r.textStrokeWidth,0],t,s)}},update:function(a){var n,l,d,i=this,r=null,t=null,e=i._index,s=i._config,c=(0,u.a)([s.display,!0],a,e);c&&(l=(0,u.v)((0,u.C)(s.formatter,[n=a.dataset.data[e],a]),n),(d=(0,u.k)(l)?[]:function(a){var r,i=[];for(a=[].concat(a);a.length;)"string"==typeof(r=a.pop())?i.unshift.apply(i,r.split("\n")):Array.isArray(r)?a.push.apply(a,r):(0,u.k)(a)||i.unshift(""+r);return i}(l)).length&&(t=function ie(a){var i=a.borderWidth||0,r=a.padding,t=a.size.height,e=a.size.width,s=-e/2,n=-t/2;return{frame:{x:s-r.left-i,y:n-r.top-i,w:e+r.width+2*i,h:t+r.height+2*i},text:{x:s,y:n,w:e,h:t}}}(r=i._modelize(c,d,s,a)))),i._model=r,i._rects=t},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(a,i){var n,t=a.ctx,e=this._model,s=this._rects;this.visible()&&(t.save(),e.clip&&(n=e.area,t.beginPath(),t.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),t.clip()),t.globalAlpha=function(a,i,r){return Math.max(a,Math.min(i,r))}(0,e.opacity,1),t.translate(m(i.x),m(i.y)),t.rotate(e.rotation),function le(a,i,r){var t=r.backgroundColor,e=r.borderColor,s=r.borderWidth;!t&&(!e||!s)||(a.beginPath(),function ne(a,i,r,t,e,s){var n=Math.PI/2;if(s){var l=Math.min(s,e/2,t/2),d=i+l,c=r+l,h=i+t-l,p=r+e-l;a.moveTo(i,c),d<h&&c<p?(a.arc(d,c,l,-Math.PI,-n),a.arc(h,c,l,-n,0),a.arc(h,p,l,0,n),a.arc(d,p,l,n,Math.PI)):d<h?(a.moveTo(d,r),a.arc(h,c,l,-n,n),a.arc(d,c,l,n,Math.PI+n)):c<p?(a.arc(d,c,l,-Math.PI,0),a.arc(d,p,l,0,Math.PI)):a.arc(d,c,l,-Math.PI,Math.PI),a.closePath(),a.moveTo(i,r)}else a.rect(i,r,t,e)}(a,m(i.x)+s/2,m(i.y)+s/2,m(i.w)-s,m(i.h)-s,r.borderRadius),a.closePath(),t&&(a.fillStyle=t,a.fill()),e&&s&&(a.strokeStyle=e,a.lineWidth=s,a.lineJoin="miter",a.stroke()))}(t,s.frame,e),function he(a,i,r,t){var g,e=t.textAlign,s=t.color,n=!!s,l=t.font,d=i.length,c=t.textStrokeColor,h=t.textStrokeWidth,p=c&&h;if(d&&(n||p))for(r=function de(a,i,r){var t=r.lineHeight,e=a.w,s=a.x;return"center"===i?s+=e/2:("end"===i||"right"===i)&&(s+=e),{h:t,w:e,x:s,y:a.y+t/2}}(r,e,l),a.font=l.string,a.textAlign=e,a.textBaseline="middle",a.shadowBlur=t.textShadowBlur,a.shadowColor=t.textShadowColor,n&&(a.fillStyle=s),p&&(a.lineJoin="round",a.lineWidth=h,a.strokeStyle=c),g=0,d=i.length;g<d;++g)ce(a,i[g],{stroked:p,filled:n,w:r.w,x:r.x,y:r.y+r.h*g})}(t,e.lines,s.text,e),t.restore())}});var ue=Number.MIN_SAFE_INTEGER||-9007199254740991,fe=Number.MAX_SAFE_INTEGER||9007199254740991;function S(a,i,r){var t=Math.cos(r),e=Math.sin(r),s=i.x,n=i.y;return{x:s+t*(a.x-s)-e*(a.y-n),y:n+e*(a.x-s)+t*(a.y-n)}}function J(a,i){var s,n,c,r=fe,t=ue,e=i.origin;for(s=0;s<a.length;++s)c=i.vx*((n=a[s]).x-e.x)+i.vy*(n.y-e.y),r=Math.min(r,c),t=Math.max(t,c);return{min:r,max:t}}function T(a,i){var r=i.x-a.x,t=i.y-a.y,e=Math.sqrt(r*r+t*t);return{vx:(i.x-a.x)/e,vy:(i.y-a.y)/e,origin:a,ln:e}}(0,u.V)(function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}}.prototype,{center:function(){var a=this._rect;return{x:a.x+a.w/2,y:a.y+a.h/2}},update:function(a,i,r){this._rotation=r,this._rect={x:i.x+a.x,y:i.y+a.y,w:i.w,h:i.h}},contains:function(a){var i=this,t=i._rect;return!((a=S(a,i.center(),-i._rotation)).x<t.x-1||a.y<t.y-1||a.x>t.x+t.w+2||a.y>t.y+t.h+2)},intersects:function(a){var e,s,n,i=this._points(),r=a._points(),t=[T(i[0],i[1]),T(i[0],i[3])];for(this._rotation!==a._rotation&&t.push(T(r[0],r[1]),T(r[0],r[3])),e=0;e<t.length;++e)if(s=J(i,t[e]),n=J(r,t[e]),s.max<n.min||n.max<s.min)return!1;return!0},_points:function(){var a=this,i=a._rect,r=a._rotation,t=a.center();return[S({x:i.x,y:i.y},t,r),S({x:i.x+i.w,y:i.y},t,r),S({x:i.x+i.w,y:i.y+i.h},t,r),S({x:i.x,y:i.y+i.h},t,r)]}});var o=v(9468),Se=v(6593),N=v(4173);function Ie(a,i){if(1&a&&(o.TgZ(0,"th"),o._uU(1),o.qZA()),2&a){const r=i.$implicit;o.xp6(1),o.Oqu(r)}}function Oe(a,i){if(1&a&&(o.TgZ(0,"td"),o._uU(1),o.qZA()),2&a){const r=i.$implicit;o.xp6(1),o.Oqu(r)}}function Ee(a,i){if(1&a&&(o.TgZ(0,"tr")(1,"td",16),o._uU(2),o.qZA(),o.YNc(3,Oe,2,1,"td",6),o.qZA()),2&a){const r=i.$implicit,t=i.index,e=o.oxw();o.xp6(1),o.Q6J("ngClass","decil"+(t+1)),o.xp6(1),o.hij(" ",e.etiquetadecil[t],""),o.xp6(1),o.Q6J("ngForOf",r)}}const Be=function(a,i,r,t,e,s,n,l,d,c){return[a,i,r,t,e,s,n,l,d,c]},Te=[{path:"",data:{title:"Indicadores"},children:[{path:"",pathMatch:"full",redirectTo:"cards"},{path:"jefatura",component:(()=>{var a;class i{constructor(t,e){this.sanitizer=t,this.apiService=e,this.data=[],this.jefaturaM=[],this.jefaturaF=[],this.TjM=[],this.TjF=[],this.TP=[],this.pf=[],this.pm=[],this.periodo=[],this.periodo2=[]}ngOnInit(){this.datajefatura()}datajefatura(){this.apiService.getjefatura().subscribe(t=>{this.data=t,t.Series[0].OBSERVATIONS.forEach(e=>{const s=parseFloat(e.OBS_VALUE);isNaN(s)||(this.periodo.push(e.TIME_PERIOD),this.jefaturaM.push(parseFloat(e.OBS_VALUE)))}),this.jefaturaF=t.Series[1].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)).filter(e=>!isNaN(e));for(let e=0;e<this.jefaturaM.length;e++)this.pf[e]=this.jefaturaF[e]/(this.jefaturaF[e]+this.jefaturaM[e]),this.pm[e]=this.jefaturaM[e]/(this.jefaturaF[e]+this.jefaturaM[e]);t.Series[2].OBSERVATIONS.forEach(e=>{this.periodo2.push(e.TIME_PERIOD)}),this.TjM=t.Series[2].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)),this.TjF=t.Series[3].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)),this.TP=t.Series[4].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE));for(let e=0;e<this.TjM.length;e++)isNaN(this.TjF[e])&&(this.TjF[e]=this.TjF[e+1]),isNaN(this.TP[e])&&(this.TP[e]=this.TP[e+1]),isNaN(this.TjM[e])&&(this.TjM[e]=this.TjM[e+1]);this.chartBarData={labels:[...this.periodo].slice(0,5),datasets:[{label:"Hogares con jefatura masculina",backgroundColor:"#041D62",data:this.pm},{label:"Hogares con jefatura femenina",backgroundColor:"#B3E5FC",data:this.pf}]},this.chartBarOptions={maintainAspectRatio:!1,scales:{xAxes:[{ticks:{fontSize:20}}],yAxes:[{ticks:{fontSize:20}}]}},this.chartLineData={labels:[...this.periodo2].slice(0,this.periodo2.length),datasets:[{label:"Tama\xf1o de hogares con jefatura femenina",backgroundColor:"#B3E5FC",borderColor:"#B3E5CC",pointBackgroundColor:"#B3E4FC",pointBorderColor:"#fff",data:this.TjM},{label:"Tama\xf1o de hogares con jefatura masculina",backgroundColor:"rgb(16, 23, 91)",borderColor:"rgba(16, 23, 91, 0.5)",pointBackgroundColor:"rgb(16, 23, 91)",pointBorderColor:"#fff",data:this.TjF},{label:"Tama\xf1o promedio de hogares",backgroundColor:"rgb(208, 172, 130)",borderColor:"rgba(208, 172, 130, 0.5)",pointBackgroundColor:"rgb(208, 172, 130)",pointBorderColor:"#fff",data:this.TP}]},this.chartLineOptions={maintainAspectRatio:!1},console.log(this.TjM),console.log(this.TjF),console.log(this.TP),console.log(this.periodo2.length)})}}return(a=i).\u0275fac=function(t){return new(t||a)(o.Y36(Se.H7),o.Y36(N.s))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-jefatura"]],decls:20,vars:2,consts:[[1,"caja","d-flex","justify-content-around"],[1,"d-flex","justify-content-center","my-4","col-md-7"],[1,"card"],["type","bar",1,"chart",3,"data"],[1,"box","col-md-5","my-4","text-center"],["type","line",3,"data"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"c-card-body"),o._UZ(4,"c-chart",3),o.qZA()()(),o.TgZ(5,"div",4)(6,"h5"),o._uU(7,"Jefaturas de los hogares"),o.qZA(),o.TgZ(8,"p"),o._uU(9," Concepto de liderazgo o autoridad dentro de los hogares mexicanos. En muchos casos, la jefatura se asigna a una persona espec\xedfica dentro de la familia que tiene la responsabilidad de tomar decisiones importantes y ejercer el liderazgo en asuntos familiares y dom\xe9sticos. "),o.qZA()()(),o.TgZ(10,"div",0)(11,"div",1)(12,"div",2)(13,"c-card-body"),o._UZ(14,"c-chart",5),o.qZA()()(),o.TgZ(15,"div",4)(16,"h5"),o._uU(17,"Tama\xf1o promedio de los hogares"),o.qZA(),o.TgZ(18,"p"),o._uU(19," Se refiere al n\xfamero promedio de personas que viven en un hogar en el pa\xeds. Es una medida demogr\xe1fica que proporciona informaci\xf3n sobre la estructura familiar y la convivencia en las viviendas mexicanas. El tama\xf1o promedio de los hogares puede variar a lo largo del tiempo y entre diferentes regiones del pa\xeds. "),o.qZA()()()),2&t&&(o.xp6(4),o.Q6J("data",e.chartBarData),o.xp6(10),o.Q6J("data",e.chartLineData))},dependencies:[f.yue,C.d],styles:['@charset "UTF-8";.card[_ngcontent-%COMP%]{width:90%}.box[_ngcontent-%COMP%]{position:relative;background-color:#e6f7f2;padding:20px}.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;width:100%;height:10px}.box[_ngcontent-%COMP%]:before{top:0;background-color:#81c784}.box[_ngcontent-%COMP%]:after{bottom:0;background-color:#81c784}']}),i})(),data:{title:"Tama\xf1o y Jefatura"}},{path:"familiares",component:(()=>{var a;class i{constructor(t){this.apiService=t,this.data=[],this.monoparentales=[],this.biparentales=[],this.compuestos=[],this.ampliados=[],this.nucleares=[],this.otros=[],this.periodo=[]}ngOnInit(){this.datosFamilia()}datosFamilia(){this.apiService.gettipofamilia().subscribe(t=>{this.data=t,t.Series[0].OBSERVATIONS.forEach(e=>{const s=parseFloat(e.OBS_VALUE);isNaN(s)||this.periodo.push(e.TIME_PERIOD)}),this.monoparentales=t.Series[0].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.biparentales=t.Series[1].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.compuestos=t.Series[2].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.ampliados=t.Series[3].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.nucleares=t.Series[4].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.otros=t.Series[5].OBSERVATIONS.map(e=>parseFloat(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.chartBarData={labels:[...this.periodo].slice(0,this.periodo.length),datasets:[{label:"Monoparentales",backgroundColor:"#041D62",data:this.monoparentales},{label:"Biparentales",backgroundColor:"#B3E5FC",data:this.biparentales},{label:"Compuestos",backgroundColor:"#81D4FA",data:this.compuestos}]},this.chartBarOptions={maintainAspectRatio:!1,scales:{xAxes:[{ticks:{fontSize:20}}],yAxes:[{ticks:{fontSize:20}}]}},this.chartBarData1={labels:[...this.periodo].slice(0,this.periodo.length),datasets:[{label:"Ampliados",backgroundColor:"#041D62",data:this.ampliados},{label:"Nucleares",backgroundColor:"#B3E5FC",data:this.nucleares},{label:"Otros",backgroundColor:"#81D4FA",data:this.otros}]},this.chartBarOptions1={maintainAspectRatio:!1,scales:{xAxes:[{ticks:{fontSize:20}}],yAxes:[{ticks:{fontSize:20}}]}},console.log(this.periodo),console.log(this.monoparentales)})}get randomData(){return Math.round(100*Math.random())}}return(a=i).\u0275fac=function(t){return new(t||a)(o.Y36(N.s))},a.\u0275cmp=o.Xpm({type:a,selectors:[["ng-component"]],decls:20,vars:2,consts:[[1,"caja","d-flex","justify-content-around"],[1,"justify-content-center","my-4","col-md-7"],[1,"card"],["type","bar",1,"chart",3,"data"],[1,"box","col-md-5","my-4","text-center"],["type","bar",3,"data"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"c-card-body"),o._UZ(4,"c-chart",3),o.qZA()()(),o.TgZ(5,"div",4)(6,"h5"),o._uU(7,"Tipos"),o.qZA(),o.TgZ(8,"p"),o._uU(9," Monoparentales: Estos hogares est\xe1n compuestos por un solo padre o madre y sus hijos. Puede ser el resultado de un divorcio, separaci\xf3n, viudez o elecci\xf3n personal. Biparentales: Son aquellos en los que conviven dos padres biol\xf3gicos o adoptivos junto con sus hijos. Este tipo de hogar es considerado tradicional Compuestos: Los hogares compuestos son aquellos en los que conviven varias generaciones de una familia extendida en un mismo hogar. Esto puede incluir a abuelos, t\xedos, primos u otros parientes cercanos, adem\xe1s de los padres e hijos. "),o.qZA()()(),o.TgZ(10,"div",0)(11,"div",1)(12,"div",2)(13,"c-card-body"),o._UZ(14,"c-chart",5),o.qZA()()(),o.TgZ(15,"div",4)(16,"h5"),o._uU(17,"Formaci\xf3n"),o.qZA(),o.TgZ(18,"p"),o._uU(19," Ampliados: Los hogares ampliados son aquellos en los que viven dos o m\xe1s n\xfacleos familiares relacionados entre s\xed. Nucleares extendidos: Estos hogares son una extensi\xf3n de los hogares biparentales, ya que incluyen a los padres y a otros parientes cercanos, como hermanos, t\xedos o primos. A diferencia de los hogares compuestos, los hogares nucleares extendidos tienden a ser m\xe1s peque\xf1os y no necesariamente involucran a generaciones anteriores o extensas. "),o.qZA()()()),2&t&&(o.xp6(4),o.Q6J("data",e.chartBarData),o.xp6(10),o.Q6J("data",e.chartBarData1))},dependencies:[f.yue,C.d],styles:['@charset "UTF-8";.card[_ngcontent-%COMP%]{width:90%}.box[_ngcontent-%COMP%]{position:relative;background-color:#e6f7f2;padding:20px}.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;width:100%;height:10px}.box[_ngcontent-%COMP%]:before{top:0;background-color:#81c784}.box[_ngcontent-%COMP%]:after{bottom:0;background-color:#81c784}']}),i})(),data:{title:"Hogares Familiares"}},{path:"gastos",component:(()=>{var a;class i{constructor(t){this.apiService=t,this.data=[],this.etiquetadecil=["I","II","III","IV","V","VI","VII","VIII","IX","X"],this.decil1=[],this.decil2=[],this.decil3=[],this.decil4=[],this.decil5=[],this.decil6=[],this.decil7=[],this.decil8=[],this.decil9=[],this.decil10=[],this.periodo=[],this.periodog=["2016","2018","2020","2022"],this.vestido=[],this.salud=[],this.alimento=[],this.educa=[],this.trans=[],this.serv=[]}ngOnInit(){this.cargardatos()}cargardatos(){this.apiService.getIdecil().subscribe(t=>{this.data=t,t.Series[0].OBSERVATIONS.forEach(e=>{const s=parseFloat(e.OBS_VALUE);isNaN(s)||this.periodo.push(e.TIME_PERIOD)}),this.decil1=t.Series[0].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil2=t.Series[3].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil3=t.Series[7].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil4=t.Series[4].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil5=t.Series[1].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil6=t.Series[6].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil7=t.Series[8].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil8=t.Series[9].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil9=t.Series[5].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.decil10=t.Series[2].OBSERVATIONS.map(e=>parseInt(e.OBS_VALUE)).filter(e=>!isNaN(e)),this.chartPieData1={labels:["I","II","III","IV","V","VI","VII","VIII","IX","X"],datasets:[{data:[this.decil1[0],this.decil2[0],this.decil3[0],this.decil4[0],this.decil5[0],this.decil6[0],this.decil7[0],this.decil8[0],this.decil9[0],this.decil10[0]],backgroundColor:["#B3E5FC","#C8E6C9","#81D4FA","#A5D6A7","#4FC3F7","#81C784","#29B6F6","#66BB6A","#03A9F4","#4CAF50"],hoverBackgroundColor:["#004d00","#0b5e0b","#177c17","#229d22","#2fbd2f","#3dda3d","#5cea5c","#7bfb7b","#9af99a","#b8fcb8"]}]},this.chartPieData2={labels:["I","II","III","IV","V","VI","VII","VIII","IX","X"],datasets:[{data:[this.decil1[1],this.decil2[1],this.decil3[1],this.decil4[1],this.decil5[1],this.decil6[1],this.decil7[1],this.decil8[1],this.decil9[1],this.decil10[1]],backgroundColor:["#B3E5FC","#C8E6C9","#81D4FA","#A5D6A7","#4FC3F7","#81C784","#29B6F6","#66BB6A","#03A9F4","#4CAF50"],hoverBackgroundColor:["#004d00","#0b5e0b","#177c17","#229d22","#2fbd2f","#3dda3d","#5cea5c","#7bfb7b","#9af99a","#b8fcb8"]}]},this.chartPieData3={labels:["I","II","III","IV","V","VI","VII","VIII","IX","X"],datasets:[{data:[this.decil1[2],this.decil2[2],this.decil3[2],this.decil4[2],this.decil5[2],this.decil6[2],this.decil7[2],this.decil8[2],this.decil9[2],this.decil10[2]],backgroundColor:["#B3E5FC","#C8E6C9","#81D4FA","#A5D6A7","#4FC3F7","#81C784","#29B6F6","#66BB6A","#03A9F4","#4CAF50"],hoverBackgroundColor:["#004d00","#0b5e0b","#177c17","#229d22","#2fbd2f","#3dda3d","#5cea5c","#7bfb7b","#9af99a","#b8fcb8"]}]},this.chartPieData4={labels:["I","II","III","IV","V","VI","VII","VIII","IX","X"],datasets:[{data:[this.decil1[2],this.decil2[2],this.decil3[2],this.decil4[2],this.decil5[2],this.decil6[2],this.decil7[2],this.decil8[2],this.decil9[2],this.decil10[2]],backgroundColor:["#B3E5FC","#C8E6C9","#81D4FA","#A5D6A7","#4FC3F7","#81C784","#29B6F6","#66BB6A","#03A9F4","#4CAF50"],hoverBackgroundColor:["#004d00","#0b5e0b","#177c17","#229d22","#2fbd2f","#3dda3d","#5cea5c","#7bfb7b","#9af99a","#b8fcb8"]}]}}),this.apiService.getgasto().subscribe(t=>{t.Series[0].OBSERVATIONS.forEach(e=>{const s=parseInt(e.OBS_VALUE);this.vestido.push(s)}),t.Series[1].OBSERVATIONS.forEach(e=>{const s=parseInt(e.OBS_VALUE);this.salud.push(s)}),t.Series[2].OBSERVATIONS.forEach(e=>{const s=parseInt(e.OBS_VALUE);this.alimento.push(s)}),t.Series[3].OBSERVATIONS.forEach(e=>{const s=parseInt(e.OBS_VALUE);this.educa.push(s)}),t.Series[4].OBSERVATIONS.forEach(e=>{const s=parseInt(e.OBS_VALUE);this.trans.push(s)}),t.Series[5].OBSERVATIONS.forEach(e=>{const s=parseInt(e.OBS_VALUE);this.serv.push(s)}),this.chartBarData1={labels:this.periodog,datasets:[{label:"Vestido y Calzado",backgroundColor:"#81C784",data:[this.vestido[0],this.vestido[1],this.vestido[2],this.vestido[3]]}]},this.chartBarData2={labels:this.periodog,datasets:[{label:"Cuidados de salud",backgroundColor:"#81C784",data:[this.salud[0],this.salud[1],this.salud[2],this.salud[3]]}]},this.chartBarData3={labels:this.periodog,datasets:[{label:"Alimentos, Bebidas y Tabaco",backgroundColor:"#81C784",data:[this.alimento[0],this.alimento[1],this.alimento[2],this.alimento[3]]}]},this.chartBarData4={labels:this.periodog,datasets:[{label:"Educaci\xf3n y Esparcimiento",backgroundColor:"#81C784",data:[this.educa[0],this.educa[1],this.educa[2],this.educa[3]]}]},this.chartBarData5={labels:this.periodog,datasets:[{label:"Transporte y Comunicaciones",backgroundColor:"#81C784",data:[this.trans[0],this.trans[1],this.trans[2],this.trans[3]]}]},this.chartBarData6={labels:this.periodog,datasets:[{label:"Art\xedculos y Servicios para la casa",backgroundColor:"#81C784",data:[this.serv[0],this.serv[1],this.serv[2],this.serv[3]]}]}})}}return(a=i).\u0275fac=function(t){return new(t||a)(o.Y36(N.s))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-gastos"]],decls:83,vars:23,consts:[[1,"d-flex","justify-content-center","my-5"],[1,"card","col-md-9"],[1,"text-center"],[1,"box"],[1,"text-center","px-2"],[1,"table"],[4,"ngFor","ngForOf"],[1,"container"],[1,"row"],[1,"col-md-6","my-5","justify-content-center","caja"],[1,"pie"],["type","pie",3,"data"],[1,"card","my-3"],[1,"col-md-6","justify-content-center","my-4"],[1,"card"],["type","bar",1,"chart",3,"data"],[3,"ngClass"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"c-card-header")(3,"h5",2),o._uU(4,"Ingresos trimestrales"),o.qZA()(),o.TgZ(5,"div",3)(6,"p",4),o._uU(7,' Cantidad de dinero que una persona o un hogar gana durante un per\xedodo de tres meses. Por otro lado, un "decil" es una medida estad\xedstica utilizada para dividir una poblaci\xf3n en diez grupos iguales, ordenados de menor a mayor. Cada decil representa el 10% de la poblaci\xf3n total. '),o.qZA()(),o.TgZ(8,"c-card-body",2)(9,"table",5)(10,"thead")(11,"tr")(12,"th"),o._uU(13,"Decil"),o.qZA(),o.YNc(14,Ie,2,1,"th",6),o.qZA()(),o.TgZ(15,"tbody"),o.YNc(16,Ee,4,3,"tr",6),o.qZA()()()()(),o.TgZ(17,"div",7)(18,"div",8)(19,"div",9)(20,"c-card",10)(21,"c-card-header",2)(22,"h3"),o._uU(23,"2016"),o.qZA()(),o.TgZ(24,"c-card-body"),o._UZ(25,"c-chart",11),o.qZA()()(),o.TgZ(26,"div",9)(27,"c-card",10)(28,"c-card-header",2)(29,"h3"),o._uU(30,"2018"),o.qZA()(),o.TgZ(31,"c-card-body"),o._UZ(32,"c-chart",11),o.qZA()()()(),o.TgZ(33,"div",8)(34,"div",9)(35,"c-card",10)(36,"c-card-header",2)(37,"h3"),o._uU(38,"2020"),o.qZA()(),o.TgZ(39,"c-card-body"),o._UZ(40,"c-chart",11),o.qZA()()(),o.TgZ(41,"div",9)(42,"c-card",10)(43,"c-card-header",2)(44,"h3"),o._uU(45,"2022"),o.qZA()(),o.TgZ(46,"c-card-body"),o._UZ(47,"c-chart",11),o.qZA()()()()(),o.TgZ(48,"div",12)(49,"c-card-header")(50,"h5",2),o._uU(51,"Gastos"),o.qZA()(),o.TgZ(52,"div",3)(53,"p",4),o._uU(54," Ofrecen una visi\xf3n detallada de c\xf3mo las familias mexicanas utilizan su dinero para satisfacer sus necesidades y preferencias, y son una herramienta importante para comprender la econom\xeda y la sociedad del pa\xeds. "),o.qZA()(),o.TgZ(55,"div",7)(56,"div",8)(57,"div",13)(58,"div",14)(59,"c-card-body"),o._UZ(60,"c-chart",15),o.qZA()()(),o.TgZ(61,"div",13)(62,"div",14)(63,"c-card-body"),o._UZ(64,"c-chart",15),o.qZA()()()(),o.TgZ(65,"div",8)(66,"div",13)(67,"div",14)(68,"c-card-body"),o._UZ(69,"c-chart",15),o.qZA()()(),o.TgZ(70,"div",13)(71,"div",14)(72,"c-card-body"),o._UZ(73,"c-chart",15),o.qZA()()()(),o.TgZ(74,"div",8)(75,"div",13)(76,"div",14)(77,"c-card-body"),o._UZ(78,"c-chart",15),o.qZA()()(),o.TgZ(79,"div",13)(80,"div",14)(81,"c-card-body"),o._UZ(82,"c-chart",15),o.qZA()()()()()()),2&t&&(o.xp6(14),o.Q6J("ngForOf",e.periodo),o.xp6(2),o.Q6J("ngForOf",o.rFY(12,Be,[e.decil1,e.decil2,e.decil3,e.decil4,e.decil5,e.decil6,e.decil7,e.decil8,e.decil9,e.decil10])),o.xp6(9),o.Q6J("data",e.chartPieData1),o.xp6(7),o.Q6J("data",e.chartPieData2),o.xp6(8),o.Q6J("data",e.chartPieData3),o.xp6(7),o.Q6J("data",e.chartPieData4),o.xp6(13),o.Q6J("data",e.chartBarData1),o.xp6(4),o.Q6J("data",e.chartBarData2),o.xp6(5),o.Q6J("data",e.chartBarData3),o.xp6(4),o.Q6J("data",e.chartBarData4),o.xp6(5),o.Q6J("data",e.chartBarData5),o.xp6(4),o.Q6J("data",e.chartBarData6))},dependencies:[k.mk,k.sg,f.AkF,f.yue,f.nkx,C.d],styles:['@charset "UTF-8";.pie[_ngcontent-%COMP%]{max-width:350px}.caja[_ngcontent-%COMP%]{padding-left:90px}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px!important;text-align:center!important;border:1px solid #ddd!important}th[_ngcontent-%COMP%]{background-color:#f2f2f2!important}.decil1[_ngcontent-%COMP%]{background-color:#b3e5fc;color:#000}.decil2[_ngcontent-%COMP%]{background-color:#c8e6c9;color:#000}.decil3[_ngcontent-%COMP%]{background-color:#81d4fa;color:#000}.decil4[_ngcontent-%COMP%]{background-color:#a5d6a7;color:#000}.decil5[_ngcontent-%COMP%]{background-color:#4fc3f7;color:#000}.decil6[_ngcontent-%COMP%]{background-color:#81c784;color:#fff}.decil7[_ngcontent-%COMP%]{background-color:#29b6f6;color:#fff}.decil8[_ngcontent-%COMP%]{background-color:#66bb6a;color:#fff}.decil9[_ngcontent-%COMP%]{background-color:#03a9f4;color:#fff}.decil10[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.box[_ngcontent-%COMP%]{position:relative;padding:20px 0;background-color:#e6f7f2}.box[_ngcontent-%COMP%]:before, .box[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;width:10px}.box[_ngcontent-%COMP%]:before{left:0;background-color:#81c784}.box[_ngcontent-%COMP%]:after{right:0;background-color:#81c784}']}),i})(),data:{title:"Ingresos y Gastos"}}]}];let Me=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[D.Bz.forChild(Te),D.Bz]}),i})(),ke=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[k.ez,Me,f.TXv,f.wHA,f.hJ1,f.dTQ,f.fwJ,C.N,f.zE6,f.gzQ,f.m81,f.Xo8,K.QX,f.Xo8,f.QqW,f.qek,f.Fme,f.P4_,f.dGk,f.z8t,f.bBg,f.ejP,Y.UX,f.kWm,f.u3b,f.UUf,f.U$I,ee.E]}),i})()}}]);