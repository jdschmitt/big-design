(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{KeDb:function(e,n,t){"use strict";var r=t("zQIG"),a=t("8mBC"),i=t("I/kN"),o=t("cMav"),l=t("pSQP");function s(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var a=l(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return o(this,t)}}var c=t("Y3ZS"),u=t("pONU");n.__esModule=!0,n.default=void 0;var p,f=u(t("ERkP")),h=t("cRaD"),d=t("fvxO"),g=c(t("7xIC")),m=t("L9lV");function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,k={};function P(){return p||(b?p=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var n=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){i(t,e);var n=s(t);function t(e){var a;return r(this,t),(a=n.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var n=null,t=null,r=null;return function(a,i){if(r&&a===n&&i===t)return r;var o=e(a,i);return n=a,t=i,r=o,o}}((function(e,n){return{href:(0,m.addBasePath)(v(e)),as:n?(0,m.addBasePath)(v(n)):n}})),a.linkClicked=function(e){var n=e.currentTarget,t=n.nodeName,r=n.target;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=a.formatUrls(a.props.href,a.props.as),o=i.href,l=i.as;if(function(e){var n=(0,h.parse)(e,!1,!0),t=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(o)){var s=window.location.pathname;o=(0,h.resolve)(s,o),l=l?(0,h.resolve)(s,l):o,e.preventDefault();var c=a.props.scroll;null==c&&(c=l.indexOf("#")<0),g.default[a.props.replace?"replace":"push"](o,l,{shallow:a.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,a=(0,h.resolve)(e,t);return[a,r?(0,h.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var n=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=P();return t?(t.observe(e),y.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}y.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();g.default.prefetch(n[0],n[1],e).catch((function(e){0})),k[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,a=t.as;"string"===typeof n&&(n=f.default.createElement("a",null,n));var i=f.Children.only(n),o={ref:function(n){e.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),f.default.cloneElement(i,o)}}]),t}(f.Component);n.default=x},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("jvFD"),i=t.n(a),o=t("ERkP"),l=t.n(o).a.createElement;function s(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,a=e.href;return l(i.a,{href:a,as:s(n)},"string"===typeof t?l(r.Link,{href:u(a)?a:""},t):t)};function u(e){return e&&"#"===e.charAt(0)}},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),o=t("R5dR"),l=t("nFRM"),s=i.a.createElement,c=[{name:"margin",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:s(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return s(l.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("d2TB"),a=t("XPf/"),i=t("BtTX"),o=t("ERkP"),l=t.n(o),s=t("j/s1"),c=Object(s.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=l.a.createElement,p=function(e){var n=e.children,t=e.title,l=Object(o.useState)(!0),s=l[0],p=l[1],f=function(){return p(!s)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:f,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||f()},tabIndex:0},s?u(a.a,{title:"Expand"}):u(i.a,{title:"Collapse"}),u(r.Text,null,t)),!s&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),i=t("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),l=a.a.createElement,s=function(e){return l(o,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("ERkP"),i=t.n(a),o=t("lIm4"),l=t("c2K2"),s=i.a.createElement,c=function(e){var n=e.collapsible,t=e.id,a=e.propList,c=e.title,p=function(){return s(r.TableFigure,{marginBottom:"xLarge"},s(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(i.a.Fragment,null,s(o.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(o.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(r.Text,null,n)}}],items:a}),s(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(l.a,{title:"".concat(c," Props")},p()):s(i.a.Fragment,null,s(r.H2,{id:t},c),p())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(i.a.Fragment,{key:e},e.type===r.Link?s(o.a,{highlight:!1},e):s(o.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?s(o.a,{highlight:!1},n):s(o.a,null,n)}},rsC7:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),a=t("ERkP"),i=t.n(a),o=t("GsAr"),l=t("cxan"),s=t("nFRM"),c=i.a.createElement,u=[{name:"header",types:"string",description:"Defines the panel header text."},{name:"action",types:"ButtonProps &amp; { text: string }",description:"Defines the panel action button."}],p=function(e){return c(s.a,Object(l.a)({title:"Panel",propList:u},e))},f=t("akZe"),h=i.a.createElement;n.default=function(){return h(i.a.Fragment,null,h(r.H0,null,"Panels"),h(r.Text,null,"The panel component is used to contain content in a structured format."," ",h(r.Link,{href:"https://design.bigcommerce.com/components/panels",target:"_blank"},"Panel Design Guidelines"),"."),h(o.a,null,"<Panel\n  header=\"Panel header\"\n  action={{\n    variant: 'secondary',\n    text: 'Button',\n    onClick: () => {\n      // Do some action\n    },\n  }}\n>\n  <Text>\n    Lorem ipsum dolor amet officia humblebrag selvage, subway tile vexillologist id pickled adaptogen fashion axe.\n    Ennui meh pitchfork banh mi. Keffiyeh PBRB echo park gastropub. Pop-up neutra brunch ullamco affogato shaman\n    vexillologist quinoa post-ironic locavore. Retro selfies proident synth ethical quinoa marfa chartreuse dolor\n    vexillologist gochujang. Tempor poke unicorn, readymade crucifix fugiat culpa. Kinfolk hella asymmetrical,\n    meggings et consectetur lomo farm-to-table exercitation DIY.\n  </Text>\n  <Text>\n    Leggings consectetur heirloom, sustainable 90's scenester sartorial sint meditation portland health goth\n    bespoke gastropub authentic. Flannel iceland narwhal, laborum adaptogen paleo glossier reprehenderit. Ethical\n    ugh copper mug voluptate brooklyn velit 3 wolf moon tacos. Bushwick vexillologist air plant, veniam jianbing\n    poke semiotics wayfarers. Typewriter single-origin coffee cray, thundercats asymmetrical succulents green\n    juice irure cred taxidermy celiac.\n  </Text>\n</Panel>"),h(r.H1,null,"API"),h(p,null),h(r.H2,null,"Inherited Props"),h(f.a,{collapsible:!0}))}},y5Cq:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Panel/PanelPage",function(){return t("rsC7")}])}},[["y5Cq",0,1,5,7,10,8,2,3,4,6,9,11]]]);