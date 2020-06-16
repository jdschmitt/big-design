(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{Ggzw:function(e,n,t){"use strict";t.d(n,"d",(function(){return u})),t.d(n,"c",(function(){return p})),t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return h}));var r=t("cxan"),a=t("ERkP"),o=t.n(a),i=t("R5dR"),l=t("lIm4"),s=t("nFRM"),c=o.a.createElement,u=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:c(i.a,{href:"#message-item-prop-table"},"MessageItem"),description:c(o.a.Fragment,null,"See ",c(i.a,{href:"#message-item-prop-table"},"below")," for usage."),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],d=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:c(i.a,{href:"#message-link-item-prop-table"},"MessageLinkItem"),description:c(o.a.Fragment,null,"See ",c(i.a,{href:"#message-link-item-prop-table"},"below")," for usage.")}],p=[{name:"external",types:"boolean",description:c(o.a.Fragment,null,"Shows an external icons when the ",c(l.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],f=function(e){return c(s.a,Object(r.a)({title:"",propList:d},e,{id:"message-item-prop-table"}))},h=function(e){return c(s.a,Object(r.a)({title:"",propList:p},e,{id:"message-link-item-prop-table"}))}},KeDb:function(e,n,t){"use strict";var r=t("zQIG"),a=t("8mBC"),o=t("I/kN"),i=t("cMav"),l=t("pSQP");function s(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var a=l(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return i(this,t)}}var c=t("Y3ZS"),u=t("pONU");n.__esModule=!0,n.default=void 0;var d,p=u(t("ERkP")),f=t("cRaD"),h=t("fvxO"),m=c(t("7xIC")),g=t("L9lV");function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var b=new Map,y=window.IntersectionObserver,R={};function k(){return d||(y?d=new y((function(e){e.forEach((function(e){if(b.has(e.target)){var n=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),b.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){o(t,e);var n=s(t);function t(e){var a;return r(this,t),(a=n.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var n=null,t=null,r=null;return function(a,o){if(r&&a===n&&o===t)return r;var i=e(a,o);return n=a,t=o,r=i,i}}((function(e,n){return{href:(0,g.addBasePath)(v(e)),as:n?(0,g.addBasePath)(v(n)):n}})),a.linkClicked=function(e){var n=e.currentTarget,t=n.nodeName,r=n.target;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,l=o.as;if(function(e){var n=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var s=window.location.pathname;i=(0,f.resolve)(s,i),l=l?(0,f.resolve)(s,l):i,e.preventDefault();var c=a.props.scroll;null==c&&(c=l.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](i,l,{shallow:a.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,a=(0,f.resolve)(e,t);return[a,r?(0,f.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var n=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),R[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=k();return t?(t.observe(e),b.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}b.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],e).catch((function(e){0})),R[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,a=t.as;"string"===typeof n&&(n=p.default.createElement("a",null,n));var o=p.Children.only(n),i={ref:function(n){e.handleRef(n),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(n):"object"===typeof o.ref&&(o.ref.current=n))},onMouseEnter:function(n){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),t}(p.Component);n.default=w},PwqR:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Radio/RadioPage",function(){return t("p79H")}])},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("jvFD"),o=t.n(a),i=t("ERkP"),l=t.n(i).a.createElement;function s(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,a=e.href;return l(o.a,{href:a,as:s(n)},"string"===typeof t?l(r.Link,{href:u(a)?a:""},t):t)};function u(e){return e&&"#"===e.charAt(0)}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("d2TB"),a=t("XPf/"),o=t("BtTX"),i=t("ERkP"),l=t.n(i),s=t("j/s1"),c=Object(s.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=l.a.createElement,d=function(e){var n=e.children,t=e.title,l=Object(i.useState)(!0),s=l[0],d=l[1],p=function(){return d(!s)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},s?u(a.a,{title:"Expand"}):u(o.a,{title:"Collapse"}),u(r.Text,null,t)),!s&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),o=t("j/s1"),i=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(o.d)(["color:",";"],t.colors.primary70)})),l=a.a.createElement,s=function(e){return l(i,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("ERkP"),o=t.n(a),i=t("lIm4"),l=t("c2K2"),s=o.a.createElement,c=function(e){var n=e.collapsible,t=e.id,a=e.propList,c=e.title,d=function(){return s(r.TableFigure,{marginBottom:"xLarge"},s(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(o.a.Fragment,null,s(i.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(i.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(r.Text,null,n)}}],items:a}),s(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(l.a,{title:"".concat(c," Props")},d()):s(o.a.Fragment,null,s(r.H2,{id:t},c),d())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(o.a.Fragment,{key:e},e.type===r.Link?s(i.a,{highlight:!1},e):s(i.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?s(i.a,{highlight:!1},n):s(i.a,null,n)}},p79H:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),a=t("ERkP"),o=t.n(a),i=t("GsAr"),l=t("lIm4"),s=t("cxan"),c=t("R5dR"),u=t("nFRM"),d=t("Ggzw"),p=o.a.createElement,f=[{name:"label",types:["string","RadioLabel"],required:!0,description:p(o.a.Fragment,null,"Label to display next to a ",p(l.a,null,"Radio")," component.")},{name:"description",types:["string","RadioDescription"],description:p(o.a.Fragment,null,"See ",p(c.a,{href:"#radio-description-prop-table"},"below")," for usage.")}],h=[{name:"text",types:["string"],required:!0,description:p(o.a.Fragment,null,"Description to display below ",p(l.a,null,"Label"))},{name:"link",types:["RadioDescriptionLink"],description:p(o.a.Fragment,null,"See ",p(c.a,{href:"#radio-description-link-prop-table"},"below")," for usage.")}],m=function(e){return p(u.a,Object(s.a)({title:"Radio",propList:f},e))},g=function(e){return p(u.a,Object(s.a)({title:"Radio[RadioDescription]",propList:h},e,{id:"radio-description-prop-table"}))},v=function(e){return p(u.a,Object(s.a)({title:"Radio[RadioDescriptionLink]",propList:d.c},e,{id:"radio-description-link-prop-table"}))},b=o.a.createElement;n.default=function(){return b(o.a.Fragment,null,b(r.H0,null,"Radio"),b(r.Text,null,"Radios are single-selectable form control groups."," ",b(r.Link,{href:"https://design.bigcommerce.com/components/radio-buttons",target:"_blank"},"Radio Design Guidelines"),"."),b(i.a,null,'function Example() {\n  const [selected, setSelected] = useState(\'\');\n\n  const handleChange = (event) => setSelected(event.target.value);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Radio label="On" checked={selected === \'on\'} value="on" onChange={handleChange} />\n        <Radio label="Off" checked={selected === \'off\'} value="off" onChange={handleChange} />\n        <Radio\n          label="Disabled"\n          disabled={true}\n          checked={selected === \'disabled\'}\n          value="disabled"\n          onChange={handleChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n}'),b(r.H1,null,"API"),b(r.Text,null,"Supports all native ",b(l.a,null,"<input />")," element attributes."),b(m,null),b(g,null),b(v,null),b(r.H1,null,"Grouping"),b(r.Text,null,"In order to group radio controls, use the ",b(l.a,null,"Fieldset")," component to separate the controls."),b(i.a,null,'function Example() {\n  const [firstRadio, setFirstRadio] = useState(\'\');\n  const [secondRadio, setSecondRadio] = useState(\'\');\n\n  const handleFirstChange = (event) => setFirstRadio(event.target.value);\n  const handleSecondChange = (event) => setSecondRadio(event.target.value);\n\n  return (\n    <Form>\n      <Fieldset legend="First Group">\n        <FormGroup>\n          <Radio label="On" checked={firstRadio === \'on\'} value="on" onChange={handleFirstChange} />\n          <Radio label="Off" checked={firstRadio === \'off\'} value="off" onChange={handleFirstChange} />\n        </FormGroup>\n      </Fieldset>\n      <Fieldset legend="Second Group">\n        <FormGroup>\n          <Radio label="On" checked={secondRadio === \'on\'} value="on" onChange={handleSecondChange} />\n          <Radio label="Off" checked={secondRadio === \'off\'} value="off" onChange={handleSecondChange} />\n        </FormGroup>\n      </Fieldset>\n    </Form>\n  );\n}'),b(r.H1,null,"Description"),b(r.Text,null,"Radio support ",b(l.a,{primary:!0},"description")," passed as a prop, which contains a text and an optional link."),b(i.a,null,"function Example() {\n  const [selected, setSelected] = useState('');\n\n  const handleChange = (event) => setSelected(event.target.value);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Radio\n          label=\"On\"\n          checked={selected === 'on'}\n          description=\"Description for on\"\n          value=\"on\"\n          onChange={handleChange}\n        />\n        <Radio\n          label=\"Off\"\n          description=\"Description for off\"\n          checked={selected === 'off'}\n          value=\"off\"\n          onChange={handleChange}\n        />\n        <Radio\n          label=\"Disabled\"\n          disabled={true}\n          description={{\n            text: 'Description for disabled.',\n            link: {\n              text: 'Learn more',\n              target: '_blank',\n              href: 'http://www.bigcommerce.com',\n            },\n          }}\n          checked={selected === 'disabled'}\n          value=\"disabled\"\n          onChange={handleChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"))}}},[["PwqR",1,2,4,6,9,7,0,3,5,8,10]]]);