(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Ggzw:function(e,n,t){"use strict";t.d(n,"d",(function(){return u})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return m}));var r=t("cxan"),i=t("ERkP"),a=t.n(i),o=t("R5dR"),s=t("lIm4"),l=t("nFRM"),c=a.a.createElement,u=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:c(o.a,{href:"#message-item-prop-table"},"MessageItem"),description:c(a.a.Fragment,null,"See ",c(o.a,{href:"#message-item-prop-table"},"below")," for usage."),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],p=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:c(o.a,{href:"#message-link-item-prop-table"},"MessageLinkItem"),description:c(a.a.Fragment,null,"See ",c(o.a,{href:"#message-link-item-prop-table"},"below")," for usage.")}],d=[{name:"external",types:"boolean",description:c(a.a.Fragment,null,"Shows an external icons when the ",c(s.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],f=function(e){return c(l.a,Object(r.a)({title:"",propList:p},e,{id:"message-item-prop-table"}))},m=function(e){return c(l.a,Object(r.a)({title:"",propList:d},e,{id:"message-link-item-prop-table"}))}},KeDb:function(e,n,t){"use strict";var r=t("zQIG"),i=t("8mBC"),a=t("I/kN"),o=t("cMav"),s=t("pSQP");function l(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=s(e);if(n){var i=s(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)}}var c=t("Y3ZS"),u=t("pONU");n.__esModule=!0,n.default=void 0;var p,d=u(t("ERkP")),f=t("cRaD"),m=t("fvxO"),g=c(t("7xIC")),h=t("L9lV");function y(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var v=new Map,b=window.IntersectionObserver,k={};function x(){return p||(b?p=new b((function(e){e.forEach((function(e){if(v.has(e.target)){var n=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),v.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var M=function(e){a(t,e);var n=l(t);function t(e){var i;return r(this,t),(i=n.call(this,e)).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var n=null,t=null,r=null;return function(i,a){if(r&&i===n&&a===t)return r;var o=e(i,a);return n=i,t=a,r=o,o}}((function(e,n){return{href:(0,h.addBasePath)(y(e)),as:n?(0,h.addBasePath)(y(n)):n}})),i.linkClicked=function(e){var n=e.currentTarget,t=n.nodeName,r=n.target;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=i.formatUrls(i.props.href,i.props.as),o=a.href,s=a.as;if(function(e){var n=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,m.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(o)){var l=window.location.pathname;o=(0,f.resolve)(l,o),s=s?(0,f.resolve)(l,s):o,e.preventDefault();var c=i.props.scroll;null==c&&(c=s.indexOf("#")<0),g.default[i.props.replace?"replace":"push"](o,s,{shallow:i.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,i=(0,f.resolve)(e,t);return[i,r?(0,f.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var n=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=x();return t?(t.observe(e),v.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}v.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();g.default.prefetch(n[0],n[1],e).catch((function(e){0})),k[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,i=t.as;"string"===typeof n&&(n=d.default.createElement("a",null,n));var a=d.Children.only(n),o={ref:function(n){e.handleRef(n),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(n):"object"===typeof a.ref&&(a.ref.current=n))},onMouseEnter:function(n){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=i||r),d.default.cloneElement(a,o)}}]),t}(d.Component);n.default=M},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),i=t("jvFD"),a=t.n(i),o=t("ERkP"),s=t.n(o).a.createElement;function l(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,i=e.href;return s(a.a,{href:i,as:l(n)},"string"===typeof t?s(r.Link,{href:u(i)?i:""},t):t)};function u(e){return e&&"#"===e.charAt(0)}},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("cxan"),i=t("ERkP"),a=t.n(i),o=t("R5dR"),s=t("nFRM"),l=a.a.createElement,c=[{name:"margin",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return l(s.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("d2TB"),i=t("XPf/"),a=t("BtTX"),o=t("ERkP"),s=t.n(o),l=t("j/s1"),c=Object(l.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=s.a.createElement,p=function(e){var n=e.children,t=e.title,s=Object(o.useState)(!0),l=s[0],p=s[1],d=function(){return p(!l)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},l?u(i.a,{title:"Expand"}):u(a.a,{title:"Collapse"}),u(r.Text,null,t)),!l&&n)}},gd3R:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/InlineAlert/InlineAlertPage",function(){return t("iT6+")}])},"iT6+":function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),i=t("ERkP"),a=t.n(i),o=t("lIm4"),s=t("GsAr"),l=t("c2K2"),c=t("akZe"),u=t("cxan"),p=t("nFRM"),d=t("Ggzw"),f=a.a.createElement,m=function(e){return f(p.a,Object(u.a)({title:"InlineAlert",propList:d.d},e))},g=a.a.createElement;n.default=function(){return g(a.a.Fragment,null,g(r.H0,null,"Inline Alerts"),g(r.Text,null,"An inline alert, mostly used for displaying alerts within Modals. Is a condensed version of the"," ",g(o.a,{primary:!0},"Message")," component."),g(s.a,null,"<InlineAlert\n  header=\"Header\"\n  messages={[\n    {\n      text: 'Required description copy.',\n      link: {\n        text: 'Optional Link',\n        href: '#',\n      },\n    },\n  ]}\n  onClose={() => null}\n/>"),g(r.H1,null,"API"),g(m,null),g(d.a,{title:"InlineAlert[MessageItem]"}),g(d.b,{title:"InlineAlert[MessageLinkItem]"}),g(r.H2,null,"Inherited Props"),g(l.a,{title:"Inherited Props"},g(c.a,null)),g(r.H1,null,"Examples"),g(r.H2,null,"Types"),g(r.Text,null,"There are four types of ",g(o.a,{primary:!0},"InlineAlerts")," based on the level of message you want to display."),g(s.a,null,'<>\n  <InlineAlert type="error" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <InlineAlert type="success" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <InlineAlert type="warning" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <InlineAlert type="info" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n</>'),g(r.H2,null,"Header"),g(r.Text,null,g(o.a,{primary:!0},"InlineAlert"),"'s allow you to pass an optional ",g(o.a,{primary:!0},"header")," prop."),g(s.a,null,'<>\n  <InlineAlert type="success" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <InlineAlert\n    header="Header"\n    type="success"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'),g(r.H2,null,"onClose"),g(r.Text,null,"Toggles the visibility of the close button, and provides an on click callback."),g(s.a,null,'<>\n  <InlineAlert type="info" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <InlineAlert\n    onClose={() => null}\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'))}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("ERkP"),i=t.n(r),a=t("j/s1"),o=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(a.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(a.d)(["color:",";"],t.colors.primary70)})),s=i.a.createElement,l=function(e){return s(o,e)};l.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),i=t("ERkP"),a=t.n(i),o=t("lIm4"),s=t("c2K2"),l=a.a.createElement,c=function(e){var n=e.collapsible,t=e.id,i=e.propList,c=e.title,p=function(){return l(r.TableFigure,{marginBottom:"xLarge"},l(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return l(a.a.Fragment,null,l(o.a,{primary:!0},n),t?l("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return l(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return l(o.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return l(r.Text,null,n)}}],items:i}),l(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?l(s.a,{title:"".concat(c," Props")},p()):l(a.a.Fragment,null,l(r.H2,{id:t},c),p())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return l(a.a.Fragment,{key:e},e.type===r.Link?l(o.a,{highlight:!1},e):l(o.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?l(o.a,{highlight:!1},n):l(o.a,null,n)}}},[["gd3R",1,2,4,6,8,7,0,3,5,9,10]]]);