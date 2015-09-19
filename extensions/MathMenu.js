/*
 *  /MathJax/extensions/MathMenu.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function(f,n,p,e,q){var o="2.6.0-beta";var d=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:o,signal:d};var s=function(t){return MathJax.Localization._.apply(MathJax.Localization,[["MathMenu",t]].concat([].slice.call(arguments,1)))};var a=f.Browser.isPC,k=f.Browser.isMSIE,l=((document.documentMode||0)>8);var i=(a?null:"5px");var r=f.CombineConfig("MathMenu",{delay:150,showRenderer:true,showMathPlayer:true,showFontMenu:false,showContext:false,showDiscoverable:false,showLocale:true,showLocaleURL:false,semanticsAnnotations:{TeX:["TeX","LaTeX","application/x-tex"],StarMath:["StarMath 5.0"],Maple:["Maple"],ContentMathML:["MathML-Content","application/mathml-content+xml"],OpenMath:["OpenMath"]},windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},"#MathJax_About.MathJax_MousePost":{outline:"none"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:(a?"2px":"5px 0px"),border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":i,"-webkit-border-radius":i,"-moz-border-radius":i,"-khtml-border-radius":i,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:(a?"2px 2em":"1px 2em"),background:"transparent"},".MathJax_MenuArrow":{position:"absolute",right:".5em","padding-top":".25em",color:"#666666","font-family":(k?"'Arial unicode MS'":null),"font-size":".75em"},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuArrow.RTL":{left:".5em",right:"auto"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":(k?"'Arial unicode MS'":null)},".MathJax_MenuCheck.RTL":{right:".7em",left:"auto"},".MathJax_MenuRadioCheck":{position:"absolute",left:(a?"1em":".7em")},".MathJax_MenuRadioCheck.RTL":{right:(a?"1em":".7em"),left:"auto"},".MathJax_MenuLabel":{padding:(a?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em"),"font-style":"italic"},".MathJax_MenuRule":{"border-top":(a?"1px solid #CCCCCC":"1px solid #DDDDDD"),margin:(a?"4px 1px 0px":"4px 3px")},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":(a?"Highlight":"#606872"),color:(a?"HighlightText":"white")},".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus":{"background-color":"#E8E8E8"},".MathJax_ContextMenu:focus":{outline:"none"},".MathJax_ContextMenu .MathJax_MenuItem:focus":{outline:"none"},"#MathJax_AboutClose":{top:".2em",right:".2em"},".MathJax_Menu .MathJax_MenuClose":{top:"-10px",left:"-10px"},".MathJax_MenuClose":{position:"absolute",cursor:"pointer",display:"inline-block",border:"2px solid #AAA","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","font-family":"'Courier New',Courier","font-size":"24px",color:"#F0F0F0"},".MathJax_MenuClose span":{display:"block","background-color":"#AAA",border:"1.5px solid","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","line-height":0,padding:"8px 0 6px"},".MathJax_MenuClose:hover":{color:"white!important",border:"2px solid #CCC!important"},".MathJax_MenuClose:hover span":{"background-color":"#CCC!important"},".MathJax_MenuClose:hover:focus":{outline:"none"}}});var m,j,b;f.Register.StartupHook("MathEvents Ready",function(){m=MathJax.Extension.MathEvents.Event.False;j=MathJax.Extension.MathEvents.Hover;b=MathJax.Extension.MathEvents.Event.KEY});var h=MathJax.Object.Subclass({Keydown:function(t,u){switch(t.keyCode){case b.ESCAPE:this.Remove(t,u);break;case b.RIGHT:this.Right(t,u);break;case b.LEFT:this.Left(t,u);break;case b.UP:this.Up(t,u);break;case b.DOWN:this.Down(t,u);break;case b.RETURN:case b.SPACE:this.Space(t,u);break;default:return;break}return m(t)},Escape:function(t,u){},Right:function(t,u){},Left:function(t,u){},Up:function(t,u){},Down:function(t,u){},Space:function(t,u){}},{});var g=MathJax.Menu=h.Subclass({version:o,items:[],posted:false,title:null,margin:5,Init:function(t){this.items=[].slice.call(arguments,0)},With:function(t){if(t){f.Insert(this,t)}return this},Post:function(u,I,G){if(!u){u=window.event||{}}var t=document.getElementById("MathJax_MenuFrame");if(!t){t=g.Background(this);delete c.lastItem;delete c.lastMenu;delete g.skipUp;d.Post(["post",g.jax]);g.isRTL=(MathJax.Localization.fontDirection()==="rtl")}var v=n.Element("div",{onmouseup:g.Mouseup,ondblclick:m,ondragstart:m,onselectstart:m,oncontextmenu:m,menuItem:this,className:"MathJax_Menu",onkeydown:g.Keydown,role:"menu"});if(u.type==="contextmenu"||u.type==="mouseover"){v.className+=" MathJax_ContextMenu"}if(!G){MathJax.Localization.setCSS(v)}for(var B=0,z=this.items.length;B<z;B++){this.items[B].Create(v)}if(g.isMobile){n.addElement(v,"span",{className:"MathJax_MenuClose",menu:I,ontouchstart:g.Close,ontouchend:m,onmousedown:g.Close,onmouseup:m},[["span",{},"\u00D7"]])}t.appendChild(v);this.posted=true;if(v.offsetWidth){v.style.width=(v.offsetWidth+2)+"px"}var H=u.pageX,F=u.pageY;if(!H&&!F&&"clientX" in u){H=u.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;F=u.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!I){var w=g.CurrentNode()||u.target;if((u.type==="keydown"||(!H&&!F))&&w){var C=window.pageXOffset||document.documentElement.scrollLeft;var A=window.pageYOffset||document.documentElement.scrollTop;var E=w.getBoundingClientRect();H=(E.right+E.left)/2+C;F=(E.bottom+E.top)/2+A}if(H+v.offsetWidth>document.body.offsetWidth-this.margin){H=document.body.offsetWidth-v.offsetWidth-this.margin}if(g.isMobile){H=Math.max(5,H-Math.floor(v.offsetWidth/2));F-=20}g.skipUp=u.isContextMenu}else{var D="left",L=I.offsetWidth;H=(g.isMobile?30:L-2);F=0;while(I&&I!==t){H+=I.offsetLeft;F+=I.offsetTop;I=I.parentNode}if(!g.isMobile){if((g.isRTL&&H-L-v.offsetWidth>this.margin)||(!g.isRTL&&H+v.offsetWidth>document.body.offsetWidth-this.margin)){D="right";H=Math.max(this.margin,H-L-v.offsetWidth+6)}}if(!a){v.style["borderRadiusTop"+D]=0;v.style["WebkitBorderRadiusTop"+D]=0;v.style["MozBorderRadiusTop"+D]=0;v.style["KhtmlBorderRadiusTop"+D]=0}}v.style.left=H+"px";v.style.top=F+"px";if(document.selection&&document.selection.empty){document.selection.empty()}var K=window.pageXOffset||document.documentElement.scrollLeft;var J=window.pageYOffset||document.documentElement.scrollTop;g.Focus(v);if(u.type==="keydown"){g.skipMouseoverFromKey=true;setTimeout(function(){delete g.skipMouseoverFromKey},r.delay)}window.scrollTo(K,J);return m(u)},Remove:function(t,u){d.Post(["unpost",g.jax]);var v=document.getElementById("MathJax_MenuFrame");if(v){v.parentNode.removeChild(v);if(this.msieFixedPositionBug){detachEvent("onresize",g.Resize)}}if(g.jax.hover){delete g.jax.hover.nofade;j.UnHover(g.jax)}g.Unfocus(u);if(t.type==="mousedown"){g.CurrentNode().blur()}return m(t)},Find:function(t){return this.FindN(1,t,[].slice.call(arguments,1))},FindId:function(t){return this.FindN(0,t,[].slice.call(arguments,1))},FindN:function(x,u,w){for(var v=0,t=this.items.length;v<t;v++){if(this.items[v].name[x]===u){if(w.length){if(!this.items[v].submenu){return null}return this.items[v].submenu.FindN(x,w[0],w.slice(1))}return this.items[v]}}return null},IndexOf:function(t){return this.IndexOfN(1,t)},IndexOfId:function(t){return this.IndexOfN(0,t)},IndexOfN:function(w,u){for(var v=0,t=this.items.length;v<t;v++){if(this.items[v].name[w]===u){return v}}return null},Right:function(t,u){g.Right(t,u)},Left:function(t,u){g.Left(t,u)},Up:function(u,v){var t=v.lastChild;t.menuItem.Activate(u,t)},Down:function(u,v){var t=v.firstChild;t.menuItem.Activate(u,t)},Space:function(t,u){this.Remove(t,u)}},{config:r,Remove:function(t){return g.Event(t,this,"Remove")},Mouseover:function(t){return g.Event(t,this,"Mouseover")},Mouseout:function(t){return g.Event(t,this,"Mouseout")},Mousedown:function(t){return g.Event(t,this,"Mousedown")},Mouseup:function(t){return g.Event(t,this,"Mouseup")},Keydown:function(t){return g.Event(t,this,"Keydown")},Touchstart:function(t){return g.Event(t,this,"Touchstart")},Touchend:function(t){return g.Event(t,this,"Touchend")},Close:function(t){return g.Event(t,this.menu||this.parentNode,(this.menu?"Touchend":"Remove"))},Event:function(v,x,t,w){if(g.skipMouseover&&t==="Mouseover"&&!w){return m(v)}if(g.skipMouseoverFromKey&&t==="Mouseover"){delete g.skipMouseoverFromKey;return m(v)}if(g.skipUp){if(t.match(/Mouseup|Touchend/)){delete g.skipUp;return m(v)}if(t==="Touchstart"||(t==="Mousedown"&&!g.skipMousedown)){delete g.skipUp}}if(!v){v=window.event}var u=x.menuItem;if(u&&u[t]){return u[t](v,x)}return null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(u){var v=n.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:u,onmousedown:this.Remove}]]);var t=v.firstChild;if(g.msieBackgroundBug){t.style.backgroundColor="white";t.style.filter="alpha(opacity=0)"}if(g.msieFixedPositionBug){v.width=v.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{t.style.position="fixed"}return v},Resize:function(){setTimeout(g.SetWH,0)},SetWH:function(){var t=document.getElementById("MathJax_MenuFrame");if(t){t=t.firstChild;t.style.width=t.style.height="1px";t.style.width=document.body.scrollWidth+"px";t.style.height=document.body.scrollHeight+"px"}},posted:false,active:null,GetNode:function(t){var u=document.getElementById(t.inputID+"-Frame");return u.isMathJax?u:u.firstChild},CurrentNode:function(){return g.GetNode(g.jax)},AllNodes:function(){var u=MathJax.Hub.getAllJax();var v=[];for(var w=0,t;t=u[w];w++){v.push(g.GetNode(t))}return v},ActiveNode:function(){return g.active},FocusNode:function(t){g.active=t;t.focus()},Focus:function(t){!g.posted?g.Activate(t):g.ActiveNode().tabIndex=-1;t.tabIndex=0;g.FocusNode(t)},Activate:function(w,x){var u=g.AllNodes();for(var v=0,t;t=u[v];v++){t.tabIndex=-1}g.posted=true},Unfocus:function(){g.ActiveNode().tabIndex=-1;var u=g.AllNodes();for(var v=0,t;t=u[v];v++){t.tabIndex=0}g.FocusNode(g.CurrentNode());g.posted=false},MoveHorizontal:function(x,y,v){if(!x.shiftKey){return}var u=g.AllNodes();var t=u.length;if(t===0){return}var w=u[g.Mod(v(g.IndexOf(u,g.CurrentNode())),t)];if(w===g.CurrentNode()){return}g.menu.Remove(x,y);g.jax=MathJax.Hub.getJaxFor(w);g.FocusNode(w);g.menu.Post(null)},Right:function(t,u){g.MoveHorizontal(t,u,function(v){return v+1})},Left:function(t,u){g.MoveHorizontal(t,u,function(v){return v-1})},Mod:function(t,u){return((t%u)+u)%u},IndexOf:(Array.prototype.indexOf?function(t,u,v){return t.indexOf(u,v)}:function(t,w,x){for(var v=(x||0),u=t.length;v<u;v++){if(w===t[v]){return v}}return -1}),saveCookie:function(){n.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=n.Cookie.Get("menu")}});MathJax.Menu.NAV=h;var c=g.ITEM=h.Subclass({name:"",node:null,menu:null,Attributes:function(t){return f.Insert({onmouseup:g.Mouseup,ondragstart:m,onselectstart:m,onselectend:m,ontouchstart:g.Touchstart,ontouchend:g.Touchend,className:"MathJax_MenuItem",role:this.role,menuItem:this},t)},Create:function(v){if(!this.hidden){var u=this.Attributes();var t=this.Label(u,v);n.addElement(v,"div",u,t)}},Name:function(){return s(this.name[0],this.name[1])},Mouseover:function(t,u){if(u.parentNode===g.ActiveNode().parentNode){this.Deactivate(g.ActiveNode())}this.Activate(t,u)},Mouseout:function(t,u){this.Deactivate(u)},Mouseup:function(t,u){return this.Remove(t,u)},DeactivateSubmenus:function(y){var x=document.getElementById("MathJax_MenuFrame").childNodes,u=c.GetMenuNode(y).childNodes;for(var v=0,t=u.length;v<t;v++){var w=u[v].menuItem;if(w&&w.submenu&&w.submenu.posted&&w!==y.menuItem){w.Deactivate(u[v])}}this.RemoveSubmenus(y,x)},RemoveSubmenus:function(v,u){u=u||document.getElementById("MathJax_MenuFrame").childNodes;var t=u.length-1;while(t>=0&&c.GetMenuNode(v).menuItem!==u[t].menuItem){u[t].menuItem.posted=false;u[t].parentNode.removeChild(u[t]);t--}},Touchstart:function(t,u){return this.TouchEvent(t,u,"Mousedown")},Touchend:function(t,u){return this.TouchEvent(t,u,"Mouseup")},TouchEvent:function(u,v,t){if(this!==c.lastItem){if(c.lastMenu){g.Event(u,c.lastMenu,"Mouseout")}g.Event(u,v,"Mouseover",true);c.lastItem=this;c.lastMenu=v}if(this.nativeTouch){return null}g.Event(u,v,t);return false},Remove:function(t,u){u=u.parentNode.menuItem;return u.Remove(t,u)},With:function(t){if(t){f.Insert(this,t)}return this},isRTL:function(){return g.isRTL},rtlClass:function(){return(this.isRTL()?" RTL":"")}},{GetMenuNode:function(t){return t.parentNode}});g.ENTRY=g.ITEM.Subclass({role:"menuitem",Attributes:function(t){t=f.Insert({onmouseover:g.Mouseover,onmouseout:g.Mouseout,onmousedown:g.Mousedown,onkeydown:g.Keydown,"aria-disabled":!!this.disabled},t);t=this.SUPER(arguments).Attributes.call(this,t);if(this.disabled){t.className+=" MathJax_MenuDisabled"}return t},MoveVertical:function(t,D,v){var w=c.GetMenuNode(D);var C=[];for(var y=0,B=w.menuItem.items,x;x=B[y];y++){if(!x.hidden){C.push(x)}}var A=g.IndexOf(C,this);if(A===-1){return}var z=C.length;var u=w.childNodes;do{A=g.Mod(v(A),z)}while(C[A].hidden||!u[A].role||u[A].role==="separator");this.Deactivate(D);C[A].Activate(t,u[A])},Up:function(u,t){this.MoveVertical(u,t,function(v){return v-1})},Down:function(u,t){this.MoveVertical(u,t,function(v){return v+1})},Right:function(u,t){this.MoveHorizontal(u,t,g.Right,!this.isRTL())},Left:function(u,t){this.MoveHorizontal(u,t,g.Left,this.isRTL())},MoveHorizontal:function(z,y,t,A){var w=c.GetMenuNode(y);if(w.menuItem===g.menu&&z.shiftKey){t(z,y)}if(A){return}if(w.menuItem!==g.menu){this.Deactivate(y)}var u=w.previousSibling.childNodes;var x=u.length;while(x--){var v=u[x];if(v.menuItem.submenu&&v.menuItem.submenu===w.menuItem){g.Focus(v);break}}this.RemoveSubmenus(y)},Space:function(t,u){this.Mouseup(t,u)},Activate:function(t,u){this.Deactivate(u);if(!this.disabled){u.className+=" MathJax_MenuActive"}this.DeactivateSubmenus(u);g.Focus(u)},Deactivate:function(t){t.className=t.className.replace(/ MathJax_MenuActive/,"")}});g.ITEM.COMMAND=g.ENTRY.Subclass({action:function(){},Init:function(t,v,u){if(!(t instanceof Array)){t=[t,t]}this.name=t;this.action=v;this.With(u)},Label:function(t,u){return[this.Name()]},Mouseup:function(t,u){if(!this.disabled){this.Remove(t,u);d.Post(["command",this]);this.action.call(this,t)}return m(t)}});g.ITEM.SUBMENU=g.ENTRY.Subclass({submenu:null,marker:"\u25BA",markerRTL:"\u25C4",Attributes:function(t){t=f.Insert({"aria-haspopup":"true"},t);t=this.SUPER(arguments).Attributes.call(this,t);return t},Init:function(t,v){if(!(t instanceof Array)){t=[t,t]}this.name=t;var u=1;if(!(v instanceof g.ITEM)){this.With(v),u++}this.submenu=g.apply(g,[].slice.call(arguments,u))},Label:function(t,u){this.submenu.posted=false;return[this.Name()+" ",["span",{className:"MathJax_MenuArrow"+this.rtlClass()},[this.isRTL()?this.markerRTL:this.marker]]]},Timer:function(t,u){this.ClearTimer();t={type:t.type,clientX:t.clientX,clientY:t.clientY};this.timer=setTimeout(e(["Mouseup",this,t,u]),r.delay)},ClearTimer:function(){if(this.timer){clearTimeout(this.timer)}},Touchend:function(u,w){var v=this.submenu.posted;var t=this.SUPER(arguments).Touchend.apply(this,arguments);if(v){this.Deactivate(w);delete c.lastItem;delete c.lastMenu}return t},Mouseout:function(t,u){if(!this.submenu.posted){this.Deactivate(u)}this.ClearTimer()},Mouseover:function(t,u){this.Activate(t,u)},Mouseup:function(t,u){if(!this.disabled){if(!this.submenu.posted){this.ClearTimer();this.submenu.Post(t,u,this.ltr);g.Focus(u)}else{this.DeactivateSubmenus(u)}}return m(t)},Activate:function(t,u){if(!this.disabled){this.Deactivate(u);u.className+=" MathJax_MenuActive"}if(!this.submenu.posted){this.DeactivateSubmenus(u);if(!g.isMobile){this.Timer(t,u)}}g.Focus(u)},MoveVertical:function(v,u,t){this.ClearTimer();this.SUPER(arguments).MoveVertical.apply(this,arguments)},MoveHorizontal:function(v,x,u,w){if(!w){this.SUPER(arguments).MoveHorizontal.apply(this,arguments);return}if(this.disabled){return}if(!this.submenu.posted){this.Activate(v,x);return}var t=c.GetMenuNode(x).nextSibling.childNodes;if(t.length>0){this.submenu.items[0].Activate(v,t[0])}}});g.ITEM.RADIO=g.ENTRY.Subclass({variable:null,marker:(a?"\u25CF":"\u2713"),role:"menuitemradio",Attributes:function(u){var t=r.settings[this.variable]===this.value?"true":"false";u=f.Insert({"aria-checked":t},u);u=this.SUPER(arguments).Attributes.call(this,u);return u},Init:function(u,t,v){if(!(u instanceof Array)){u=[u,u]}this.name=u;this.variable=t;this.With(v);if(this.value==null){this.value=this.name[0]}},Label:function(u,v){var t={className:"MathJax_MenuRadioCheck"+this.rtlClass()};if(r.settings[this.variable]!==this.value){t={style:{display:"none"}}}return[["span",t,[this.marker]]," "+this.Name()]},Mouseup:function(w,x){if(!this.disabled){var y=x.parentNode.childNodes;for(var u=0,t=y.length;u<t;u++){var v=y[u].menuItem;if(v&&v.variable===this.variable){y[u].firstChild.style.display="none"}}x.firstChild.display="";r.settings[this.variable]=this.value;g.cookie[this.variable]=r.settings[this.variable];g.saveCookie();d.Post(["radio button",this])}this.Remove(w,x);if(this.action&&!this.disabled){this.action.call(g,this)}return m(w)}});g.ITEM.CHECKBOX=g.ENTRY.Subclass({variable:null,marker:"\u2713",role:"menuitemcheckbox",Attributes:function(u){var t=r.settings[this.variable]?"true":"false";u=f.Insert({"aria-checked":t},u);u=this.SUPER(arguments).Attributes.call(this,u);return u},Init:function(u,t,v){if(!(u instanceof Array)){u=[u,u]}this.name=u;this.variable=t;this.With(v)},Label:function(u,v){var t={className:"MathJax_MenuCheck"+this.rtlClass()};if(!r.settings[this.variable]){t={style:{display:"none"}}}return[["span",t,[this.marker]]," "+this.Name()]},Mouseup:function(t,u){if(!this.disabled){u.firstChild.display=(r.settings[this.variable]?"none":"");r.settings[this.variable]=!r.settings[this.variable];g.cookie[this.variable]=r.settings[this.variable];g.saveCookie();d.Post(["checkbox",this])}this.Remove(t,u);if(this.action&&!this.disabled){this.action.call(g,this)}return m(t)}});g.ITEM.LABEL=g.ENTRY.Subclass({role:"menuitem",Init:function(t,u){if(!(t instanceof Array)){t=[t,t]}this.name=t;this.With(u)},Label:function(t,u){t.className+=" MathJax_MenuLabel";return[this.Name()]},Activate:function(t,u){this.Deactivate(u);g.Focus(u)},Mouseup:function(t,u){}});g.ITEM.RULE=g.ITEM.Subclass({role:"separator",Attributes:function(t){t=f.Insert({"aria-orientation":"vertical"},t);t=this.SUPER(arguments).Attributes.call(this,t);return t},Label:function(t,u){t.className+=" MathJax_MenuRule";return null}});g.About=function(x){var u=g.About.GetFont();var z=g.About.GetFormat();var t=["MathJax.js v"+MathJax.fileversion,["br"]];t.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);g.About.GetJax(t,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]);g.About.GetJax(t,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]);g.About.GetJax(t,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]);t.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);g.About.GetJax(t,MathJax.Extension,["Extension","%1 Extension v%2"],true);t.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[f.Browser+" v"+f.Browser.version+(z?" \u2014 "+s(z.replace(/ /g,""),z):"")]]);g.About.div=g.Background(g.About);var w=n.addElement(g.About.div,"div",{id:"MathJax_About",tabIndex:0,onkeydown:g.About.Keydown},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],s(u.replace(/ /g,""),"using "+u),["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"},tabIndex:0},t],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["span",{className:"MathJax_MenuClose",id:"MathJax_AboutClose",onclick:g.About.Remove,onkeydown:g.About.Keydown,tabIndex:0,role:"button","aria-label":s("CloseAboutDialog","Close about MathJax dialog")},[["span",{},"\u00D7"]]]]);if(x.type==="mouseup"){w.className+=" MathJax_MousePost"}w.focus();MathJax.Localization.setCSS(w);var y=(document.documentElement||{});var v=window.innerHeight||y.clientHeight||y.scrollHeight||0;if(g.prototype.msieAboutBug){w.style.width="20em";w.style.position="absolute";w.style.left=Math.floor((document.documentElement.scrollWidth-w.offsetWidth)/2)+"px";w.style.top=(Math.floor((v-w.offsetHeight)/3)+document.body.scrollTop)+"px"}else{w.style.marginLeft=Math.floor(-w.offsetWidth/2)+"px";w.style.top=Math.floor((v-w.offsetHeight)/3)+"px"}};g.About.Remove=function(t){if(g.About.div){document.body.removeChild(g.About.div);delete g.About.div}};g.About.Keydown=function(t){if(t.keyCode===b.ESCAPE||(this.id==="MathJax_AboutClose"&&(t.keyCode===b.SPACE||t.keyCode===b.RETURN))){g.About.Remove(t);g.CurrentNode().focus();m(t)}},g.About.GetJax=function(u,z,x,w){var y=[];for(var A in z){if(z.hasOwnProperty(A)&&z[A]){if((w&&z[A].version)||(z[A].isa&&z[A].isa(z))){y.push(s(x[0],x[1],(z[A].id||A),z[A].version))}}}y.sort();for(var v=0,t=y.length;v<t;v++){u.push(y[v],["br"])}return u};g.About.GetFont=function(){var t=MathJax.Hub.outputJax["jax/mml"][0]||{};var u={SVG:"web SVG",CommonHTML:"web TeX","HTML-CSS":(t.imgFonts?"image":(t.webFonts?"web":"local")+" "+t.fontInUse)}[t.id]||"generic";return u+" fonts"};g.About.GetFormat=function(){var t=MathJax.Hub.outputJax["jax/mml"][0]||{};if(t.id!=="HTML-CSS"||!t.webFonts||t.imgFonts){return}return t.allowWebFonts.replace(/otf/,"woff or otf")+" fonts"};g.Help=function(t){p.Require("[MathJax]/extensions/HelpDialog.js",function(){MathJax.Extension.Help.Dialog({type:t.type})})};g.ShowSource=function(x){if(!x){x=window.event}var w={screenX:x.screenX,screenY:x.screenY};if(!g.jax){return}if(this.format==="MathML"){var u=MathJax.ElementJax.mml;if(u&&typeof(u.mbase.prototype.toMathML)!=="undefined"){try{g.ShowSource.Text(g.jax.root.toMathML("",g.jax),x)}catch(v){if(!v.restart){throw v}e.After([this,g.ShowSource,w],v.restart)}}else{if(!p.loadingToMathML){p.loadingToMathML=true;g.ShowSource.Window(x);e.Queue(p.Require("[MathJax]/extensions/toMathML.js"),function(){delete p.loadingToMathML;if(!u.mbase.prototype.toMathML){u.mbase.prototype.toMathML=function(){}}},[this,g.ShowSource,w]);return}}}else{if(this.format==="Error"){g.ShowSource.Text(g.jax.errorText,x)}else{if(r.semanticsAnnotations[this.format]){var t=g.jax.root.getAnnotation(this.format);if(t.data[0]){g.ShowSource.Text(t.data[0].toString())}}else{if(g.jax.originalText==null){alert(s("NoOriginalForm","No original form available"));return}g.ShowSource.Text(g.jax.originalText,x)}}}};g.ShowSource.Window=function(u){if(!g.ShowSource.w){var v=[],t=r.windowSettings;for(var w in t){if(t.hasOwnProperty(w)){v.push(w+"="+t[w])}}g.ShowSource.w=window.open("","_blank",v.join(","))}return g.ShowSource.w};g.ShowSource.Text=function(y,v){var t=g.ShowSource.Window(v);delete g.ShowSource.w;y=y.replace(/^\s*/,"").replace(/\s*$/,"");y=y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var x=s("EqSource","MathJax Equation Source");if(g.isMobile){t.document.open();t.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+x+"</title></head><body style='font-size:85%'>");t.document.write("<pre>"+y+"</pre>");t.document.write("<hr><input type='button' value='"+s("Close","Close")+"' onclick='window.close()' />");t.document.write("</body></html>");t.document.close()}else{t.document.open();t.document.write("<html><head><title>"+x+"</title></head><body style='font-size:85%'>");t.document.write("<table><tr><td><pre>"+y+"</pre></td></tr></table>");t.document.write("</body></html>");t.document.close();var u=t.document.body.firstChild;setTimeout(function(){var A=(t.outerHeight-t.innerHeight)||30,z=(t.outerWidth-t.innerWidth)||30,w,D;z=Math.max(140,Math.min(Math.floor(0.5*screen.width),u.offsetWidth+z+25));A=Math.max(40,Math.min(Math.floor(0.5*screen.height),u.offsetHeight+A+25));if(g.prototype.msieHeightBug){A+=35}t.resizeTo(z,A);var C;try{C=v.screenX}catch(B){}if(v&&C!=null){w=Math.max(0,Math.min(v.screenX-Math.floor(z/2),screen.width-z-20));D=Math.max(0,Math.min(v.screenY-Math.floor(A/2),screen.height-A-20));t.moveTo(w,D)}},50)}};g.Scale=function(){var u=q["HTML-CSS"],t=q.NativeMML,x=q.SVG;var w=(u||t||x||{config:{scale:100}}).config.scale;var v=prompt(s("ScaleMath","Scale all mathematics (compared to surrounding text) by"),w+"%");if(v){if(v.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)){v=parseFloat(v);if(v){if(v!==w){if(u){u.config.scale=v}if(t){t.config.scale=v}if(x){x.config.scale=v}g.cookie.scale=v;g.saveCookie();f.Rerender()}}else{alert(s("NonZeroScale","The scale should not be zero"))}}else{alert(s("PercentScale","The scale should be a percentage (e.g., 120%%)"))}}};g.Zoom=function(){if(!MathJax.Extension.MathZoom){p.Require("[MathJax]/extensions/MathZoom.js")}};g.Renderer=function(){var u=f.outputJax["jax/mml"];if(u[0]!==r.settings.renderer){var x=f.Browser,w,t=g.Renderer.Messages,v;switch(r.settings.renderer){case"NativeMML":if(!r.settings.warnedMML){if(x.isChrome&&x.version.substr(0,3)!=="24."){w=t.MML.WebKit}else{if(x.isSafari&&!x.versionAtLeast("5.0")){w=t.MML.WebKit}else{if(x.isMSIE){if(!x.hasMathPlayer){w=t.MML.MSIE}}else{if(x.isEdge){w=t.MML.WebKit}else{w=t.MML[x]}}}}v="warnedMML"}break;case"SVG":if(!r.settings.warnedSVG){if(x.isMSIE&&!l){w=t.SVG.MSIE}}break}if(w){w=s(w[0],w[1]);w+="\n\n";w+=s("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)");g.cookie.renderer=u[0].id;g.saveCookie();if(!confirm(w)){g.cookie.renderer=r.settings.renderer=n.Cookie.Get("menu").renderer;g.saveCookie();return}if(v){g.cookie.warned=r.settings.warned=true}g.cookie.renderer=r.settings.renderer;g.saveCookie()}f.Queue(["setRenderer",f,r.settings.renderer,"jax/mml"],["Rerender",f])}};g.Renderer.Messages={MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]}};g.Font=function(){var t=q["HTML-CSS"];if(!t){return}document.location.reload()};g.Locale=function(){MathJax.Localization.setLocale(r.settings.locale);MathJax.Hub.Queue(["Reprocess",MathJax.Hub])};g.LoadLocale=function(){var t=prompt(s("LoadURL","Load translation data from this URL:"));if(t){if(!t.match(/\.js$/)){alert(s("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"))}p.Require(t,function(u){if(u!=p.STATUS.OK){alert(s("BadData","Failed to load translation data from %1",t))}})}};g.MPEvents=function(v){var u=r.settings.discoverable,t=g.MPEvents.Messages;if(!l){if(r.settings.mpMouse&&!confirm(s.apply(s,t.IE8warning))){delete g.cookie.mpContext;delete r.settings.mpContext;delete g.cookie.mpMouse;delete r.settings.mpMouse;g.saveCookie();return}r.settings.mpContext=r.settings.mpMouse;g.cookie.mpContext=g.cookie.mpMouse=r.settings.mpMouse;g.saveCookie();MathJax.Hub.Queue(["Rerender",MathJax.Hub])}else{if(!u&&v.name[1]==="Menu Events"&&r.settings.mpContext){alert(s.apply(s,t.IE9warning))}}};g.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]};f.Browser.Select({MSIE:function(t){var u=(document.compatMode==="BackCompat");var v=t.versionAtLeast("8.0")&&document.documentMode>7;g.Augment({margin:20,msieBackgroundBug:((document.documentMode||0)<9),msieFixedPositionBug:(u||!v),msieAboutBug:u,msieHeightBug:((document.documentMode||0)<9)});if(l){delete r.styles["#MathJax_About"].filter;delete r.styles[".MathJax_Menu"].filter}},Firefox:function(t){g.skipMouseover=t.isMobile&&t.versionAtLeast("6.0");g.skipMousedown=t.isMobile}});g.isMobile=f.Browser.isMobile;g.noContextMenu=f.Browser.noContextMenu;g.CreateLocaleMenu=function(){if(!g.menu){return}var y=g.menu.Find("Language").submenu,v=y.items;var u=[],A=MathJax.Localization.strings;for(var z in A){if(A.hasOwnProperty(z)){u.push(z)}}u=u.sort();y.items=[];for(var w=0,t=u.length;w<t;w++){var x=A[u[w]].menuTitle;if(x){x+=" ("+u[w]+")"}else{x=u[w]}y.items.push(c.RADIO([u[w],x],"locale",{action:g.Locale}))}y.items.push(v[v.length-2],v[v.length-1])};g.CreateAnnotationMenu=function(){if(!g.menu){return}var v=g.menu.Find("Show Math As","Annotation").submenu;var u=r.semanticsAnnotations;for(var t in u){if(u.hasOwnProperty(t)){v.items.push(c.COMMAND([t,t],g.ShowSource,{hidden:true,nativeTouch:true,format:t}))}}};f.Register.StartupHook("End Config",function(){r.settings=f.config.menuSettings;if(typeof(r.settings.showRenderer)!=="undefined"){r.showRenderer=r.settings.showRenderer}if(typeof(r.settings.showFontMenu)!=="undefined"){r.showFontMenu=r.settings.showFontMenu}if(typeof(r.settings.showContext)!=="undefined"){r.showContext=r.settings.showContext}g.getCookie();g.menu=g(c.SUBMENU(["Show","Show Math As"],c.COMMAND(["MathMLcode","MathML Code"],g.ShowSource,{nativeTouch:true,format:"MathML"}),c.COMMAND(["Original","Original Form"],g.ShowSource,{nativeTouch:true}),c.SUBMENU(["Annotation","Annotation"],{disabled:true}),c.RULE(),c.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints"),c.CHECKBOX(["semantics","Add original form as annotation"],"semantics")),c.RULE(),c.SUBMENU(["Settings","Math Settings"],c.SUBMENU(["ZoomTrigger","Zoom Trigger"],c.RADIO(["Hover","Hover"],"zoom",{action:g.Zoom}),c.RADIO(["Click","Click"],"zoom",{action:g.Zoom}),c.RADIO(["DoubleClick","Double-Click"],"zoom",{action:g.Zoom}),c.RADIO(["NoZoom","No Zoom"],"zoom",{value:"None"}),c.RULE(),c.LABEL(["TriggerRequires","Trigger Requires:"]),c.CHECKBOX((f.Browser.isMac?["Option","Option"]:["Alt","Alt"]),"ALT"),c.CHECKBOX(["Command","Command"],"CMD",{hidden:!f.Browser.isMac}),c.CHECKBOX(["Control","Control"],"CTRL",{hidden:f.Browser.isMac}),c.CHECKBOX(["Shift","Shift"],"Shift")),c.SUBMENU(["ZoomFactor","Zoom Factor"],c.RADIO("125%","zscale"),c.RADIO("133%","zscale"),c.RADIO("150%","zscale"),c.RADIO("175%","zscale"),c.RADIO("200%","zscale"),c.RADIO("250%","zscale"),c.RADIO("300%","zscale"),c.RADIO("400%","zscale")),c.RULE(),c.SUBMENU(["Renderer","Math Renderer"],{hidden:!r.showRenderer},c.RADIO("HTML-CSS","renderer",{action:g.Renderer}),c.RADIO("Common HTML","renderer",{action:g.Renderer,value:"CommonHTML"}),c.RADIO("Fast HTML","renderer",{action:g.Renderer,value:"PreviewHTML"}),c.RADIO("MathML","renderer",{action:g.Renderer,value:"NativeMML"}),c.RADIO("SVG","renderer",{action:g.Renderer}),c.RULE(),c.CHECKBOX("Fast Preview","FastPreview"),c.CHECKBOX("Assistive MathML","assistiveMML",{hidden:!r.showAssistiveMML})),c.SUBMENU("MathPlayer",{hidden:!f.Browser.isMSIE||!r.showMathPlayer,disabled:!f.Browser.hasMathPlayer},c.LABEL(["MPHandles","Let MathPlayer Handle:"]),c.CHECKBOX(["MenuEvents","Menu Events"],"mpContext",{action:g.MPEvents,hidden:!l}),c.CHECKBOX(["MouseEvents","Mouse Events"],"mpMouse",{action:g.MPEvents,hidden:!l}),c.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:g.MPEvents,hidden:l})),c.SUBMENU(["FontPrefs","Font Preference"],{hidden:!r.showFontMenu},c.LABEL(["ForHTMLCSS","For HTML-CSS:"]),c.RADIO(["Auto","Auto"],"font",{action:g.Font}),c.RULE(),c.RADIO(["TeXLocal","TeX (local)"],"font",{action:g.Font}),c.RADIO(["TeXWeb","TeX (web)"],"font",{action:g.Font}),c.RADIO(["TeXImage","TeX (image)"],"font",{action:g.Font}),c.RULE(),c.RADIO(["STIXLocal","STIX (local)"],"font",{action:g.Font}),c.RADIO(["STIXWeb","STIX (web)"],"font",{action:g.Font}),c.RULE(),c.RADIO(["AsanaMathWeb","Asana Math (web)"],"font",{action:g.Font}),c.RADIO(["GyrePagellaWeb","Gyre Pagella (web)"],"font",{action:g.Font}),c.RADIO(["GyreTermesWeb","Gyre Termes (web)"],"font",{action:g.Font}),c.RADIO(["LatinModernWeb","Latin Modern (web)"],"font",{action:g.Font}),c.RADIO(["NeoEulerWeb","Neo Euler (web)"],"font",{action:g.Font})),c.SUBMENU(["ContextMenu","Contextual Menu"],{hidden:!r.showContext},c.RADIO("MathJax","context"),c.RADIO(["Browser","Browser"],"context")),c.COMMAND(["Scale","Scale All Math ..."],g.Scale),c.RULE().With({hidden:!r.showDiscoverable,name:["","discover_rule"]}),c.CHECKBOX(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!r.showDiscoverable})),c.SUBMENU(["Locale","Language"],{hidden:!r.showLocale,ltr:true},c.RADIO("en","locale",{action:g.Locale}),c.RULE().With({hidden:!r.showLocaleURL,name:["","localURL_rule"]}),c.COMMAND(["LoadLocale","Load from URL ..."],g.LoadLocale,{hidden:!r.showLocaleURL})),c.RULE(),c.COMMAND(["About","About MathJax"],g.About),c.COMMAND(["Help","MathJax Help"],g.Help));if(g.isMobile){(function(){var u=r.settings;var t=g.menu.Find("Math Settings","Zoom Trigger").submenu;t.items[0].disabled=t.items[1].disabled=true;if(u.zoom==="Hover"||u.zoom=="Click"){u.zoom="None"}t.items=t.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){g.ITEM.SUBMENU.Augment({marker:"\u00BB"})}})()}g.CreateLocaleMenu();g.CreateAnnotationMenu()});g.showRenderer=function(t){g.cookie.showRenderer=r.showRenderer=t;g.saveCookie();g.menu.Find("Math Settings","Math Renderer").hidden=!t};g.showMathPlayer=function(t){g.cookie.showMathPlayer=r.showMathPlayer=t;g.saveCookie();g.menu.Find("Math Settings","MathPlayer").hidden=!t};g.showFontMenu=function(t){g.cookie.showFontMenu=r.showFontMenu=t;g.saveCookie();g.menu.Find("Math Settings","Font Preference").hidden=!t};g.showContext=function(t){g.cookie.showContext=r.showContext=t;g.saveCookie();g.menu.Find("Math Settings","Contextual Menu").hidden=!t};g.showDiscoverable=function(t){g.cookie.showDiscoverable=r.showDiscoverable=t;g.saveCookie();g.menu.Find("Math Settings","Highlight on Hover").hidden=!t;g.menu.Find("Math Settings","discover_rule").hidden=!t};g.showLocale=function(t){g.cookie.showLocale=r.showLocale=t;g.saveCookie();g.menu.Find("Language").hidden=!t};g.showAssistiveMML=function(t){g.cookie.showAssistiveMML=r.showAssistiveMML=t;g.saveCookie();g.menu.Find("Math Settings","Math Renderer","Assistive MathML").hidden=!t};MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){if(!MathJax.OutputJax["HTML-CSS"].config.imageFont){g.menu.Find("Math Settings","Font Preference","TeX (image)").disabled=true}});e.Queue(f.Register.StartupHook("End Config",{}),["Styles",p,r.styles],["Post",f.Startup.signal,"MathMenu Ready"],["loadComplete",p,"[MathJax]/extensions/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);
