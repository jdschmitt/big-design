(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"0unP":function(e,n,t){"use strict";t.r(n);var r=t("VtSi"),o=t.n(r),i=t("QsI/"),a=t("d2TB"),l=t("ERkP"),s=t.n(l),c=t("lIm4"),u=t("GsAr"),d=t("cxan"),p=t("R5dR"),f=t("nFRM"),h=s.a.createElement,m=[{name:"iconless",types:"boolean",description:"Hides/shows all icons on the tree."},{name:"initialNodes",types:h(p.a,{href:"#tree-node-prop-table"},"TreeNode[]"),description:h(s.a.Fragment,null,"Initial set of nodes to render. If you modify ",h(c.a,{primary:!0},"initialNodes"),", the component will not rerender. Use ",h(c.a,{primary:!0},"onCollapse")," or ",h(c.a,{primary:!0},"onSelect")," to mutate nodes. See"," ",h(p.a,{href:"#tree-node-prop-table"},"below")," for usage."),required:!0},{name:"onCollapse",types:"(node: TreeNode) => TreeNodeRef | void",description:"Function that will get called when a tree node is collapsed. You can modify the children by returning an object with children as a key/value pair."},{name:"onExpand",types:"(node: TreeNode) => TreeNodeRef | void",description:"Function that will get called when a tree node is expanded. You can modify the children by returning an object with children as a key/value pair."},{name:"onSelect",types:"(value: T[] | T) => void",description:h(s.a.Fragment,null,"Function that will get called when a tree node is collapsed. Based on the ",h(c.a,{primary:!0},"selectable")," prop, it'll return either an array of values, or a single value.")},{name:"selectable",types:["multi","radio"],description:"Function that will get called when a tree node is expanded."}],y=function(e){return h(f.a,Object(d.a)({title:"Tree",propList:m},e))},g=[{name:"children",types:"TreeNode[]",description:"Children for the current node."},{name:"disabled",types:"boolean",description:"Determines if the TreeNode is disabled."},{name:"expanded",types:"boolean",description:"Determines if the TreeNode is expanded by default."},{name:"icon",types:h(p.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:"Custom icon, in place of the folder icon."},{name:"id",types:["string","number"],description:"TreeNode identifier, must be unique.",required:!0},{name:"label",types:"string",description:"Label for the tree node.",required:!0},{name:"selected",types:"string",description:"Determines if the TreeNode is selected by default."},{name:"value",types:"T",description:h(s.a.Fragment,null,"Value of the selected node. A checkbox or radio will not appear if ",h(c.a,{primary:!0},"value")," and"," ",h(c.a,{primary:!0},"selectable")," is not defined.")}],v=function(e){return h(f.a,Object(d.a)({title:"Tree[TreeNode]",propList:g},e))},b=s.a.createElement,w=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){return void 0!==n?setTimeout((function(){return e([{id:3,label:"Category"}])}),2e3):t(void 0)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return b(s.a.Fragment,null,b(a.H0,null,"Tree"),b(a.Text,null,"The ",b(c.a,{primary:!0},"Tree")," component is used to display a tree of items. Useful for defining a tree of categories or subcollections."),b(u.a,null,"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      value: 0,\n      label: 'Category',\n      expanded: true,\n      children: [\n        {\n          id: 5,\n          value: 5,\n          expanded: true,\n          label: 'Category',\n          children: [{ id: 9, value: 9, selected: true, label: 'Category' }],\n        },\n      ],\n    },\n    {\n      id: 1,\n      value: 1,\n      label: 'Category',\n      disabled: true,\n      expanded: true,\n      children: [{ id: 6, value: 6, label: 'Category' }],\n    },\n    { id: 2, value: 2, label: 'Category' },\n    {\n      id: 3,\n      value: 3,\n      label: 'Category',\n      selected: true,\n      children: [{ id: 7, value: 7, selected: true, label: 'Category' }],\n    },\n    { id: 4, value: 4, label: 'Category', children: [{ id: 8, value: 8, label: 'Category' }] },\n  ];\n\n  return <Tree selectable=\"multi\" initialNodes={nodes} />;\n}"),b(a.H1,null,"API"),b(a.Message,{header:"API Usuage",type:"warning",messages:[{text:"This API is currently experimental and is subject to change."}],marginBottom:"xLarge"}),b(y,null),b(v,{id:"tree-node-prop-table"}),b(a.H1,null,"Examples"),b(a.H2,null,"Radio"),b(u.a,null,"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      value: 0,\n      label: 'Category',\n      expanded: true,\n      disabled: true,\n      children: [{ id: 3, value: 3, label: 'Subcategory' }],\n    },\n    { id: 1, value: 1, label: 'Category' },\n    { id: 2, value: 2, label: 'Category', disabled: true },\n  ];\n\n  return <Tree selectable=\"radio\" initialNodes={nodes} />;\n}"),b(a.H2,null,"Custom Icons"),b(a.Text,null,"You can replace the folder icon with a custom icon of your choice."),b(a.Message,{type:"warning",messages:[{text:"If you use the iconless prop, ALL icons with be hidden (including custom ones)."}],marginBottom:"medium"}),b(u.a,null,"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      icon: <StoreIcon color=\"primary\" />,\n      label: 'Storefront - US',\n      expanded: true,\n      children: [{ id: 3, label: 'Subcategory' }],\n    },\n    { id: 1, icon: <LanguageIcon color=\"primary\" />, label: 'Storefront - CA' },\n    { id: 2, icon: <AssignmentIcon color=\"primary\" />, label: 'Storefront - EU' },\n  ];\n\n  return <Tree initialNodes={nodes} />;\n}"),b(a.H2,null,"Modifying Children"),b(a.Text,null,"By returning a object containing new children nodes, you have the freedom of modifying/replacing children nodes. This is useful when you need to asyncronously load in child nodes. We don't recommend modifying the nodes passed into the Tree prop, as it rerenders the entire tree."),b(u.a,{scope:{fetchChildren:w}},"function Example() {\n  const nodes = [\n    {\n      id: 0,\n      label: 'Category',\n      children: [],\n    },\n    { id: 1, label: 'Category' },\n    { id: 2, label: 'Category' },\n  ];\n\n  async function handleOnExpand(node: TreeNodeProps<undefined>) {\n    const children = node.id === 0 ? await fetchChildren(node.id) : node.children;\n\n    return { children };\n  }\n\n  return <Tree initialNodes={nodes} onExpand={handleOnExpand} />;\n}"))}},KeDb:function(e,n,t){"use strict";var r=t("zQIG"),o=t("8mBC"),i=t("I/kN"),a=t("cMav"),l=t("pSQP");function s(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return a(this,t)}}var c=t("Y3ZS"),u=t("pONU");n.__esModule=!0,n.default=void 0;var d,p=u(t("ERkP")),f=t("cRaD"),h=t("fvxO"),m=c(t("7xIC")),y=t("L9lV");function g(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var v=new Map,b=window.IntersectionObserver,w={};function x(){return d||(b?d=new b((function(e){e.forEach((function(e){if(v.has(e.target)){var n=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),v.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var T=function(e){i(t,e);var n=s(t);function t(e){var o;return r(this,t),(o=n.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var n=null,t=null,r=null;return function(o,i){if(r&&o===n&&i===t)return r;var a=e(o,i);return n=o,t=i,r=a,a}}((function(e,n){return{href:(0,y.addBasePath)(g(e)),as:n?(0,y.addBasePath)(g(n)):n}})),o.linkClicked=function(e){var n=e.currentTarget,t=n.nodeName,r=n.target;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,l=i.as;if(function(e){var n=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(a)){var s=window.location.pathname;a=(0,f.resolve)(s,a),l=l?(0,f.resolve)(s,l):a,e.preventDefault();var c=o.props.scroll;null==c&&(c=l.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](a,l,{shallow:o.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,o=(0,f.resolve)(e,t);return[o,r?(0,f.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var n=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=x();return t?(t.observe(e),v.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}v.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],e).catch((function(e){0})),w[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"===typeof n&&(n=p.default.createElement("a",null,n));var i=p.Children.only(n),a={ref:function(n){e.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),t}(p.Component);n.default=T},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),o=t("jvFD"),i=t.n(o),a=t("ERkP"),l=t.n(a).a.createElement;function s(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,o=e.href;return l(i.a,{href:o,as:s(n)},"string"===typeof t?l(r.Link,{href:u(o)?o:""},t):t)};function u(e){return e&&"#"===e.charAt(0)}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("d2TB"),o=t("XPf/"),i=t("BtTX"),a=t("ERkP"),l=t.n(a),s=t("j/s1"),c=Object(s.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=l.a.createElement,d=function(e){var n=e.children,t=e.title,l=Object(a.useState)(!0),s=l[0],d=l[1],p=function(){return d(!s)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},s?u(o.a,{title:"Expand"}):u(i.a,{title:"Collapse"}),u(r.Text,null,t)),!s&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),o=t.n(r),i=t("j/s1"),a=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),l=o.a.createElement,s=function(e){return l(a,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),o=t("ERkP"),i=t.n(o),a=t("lIm4"),l=t("c2K2"),s=i.a.createElement,c=function(e){var n=e.collapsible,t=e.id,o=e.propList,c=e.title,d=function(){return s(r.TableFigure,{marginBottom:"xLarge"},s(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(i.a.Fragment,null,s(a.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(a.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(r.Text,null,n)}}],items:o}),s(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(l.a,{title:"".concat(c," Props")},d()):s(i.a.Fragment,null,s(r.H2,{id:t},c),d())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(i.a.Fragment,{key:e},e.type===r.Link?s(a.a,{highlight:!1},e):s(a.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?s(a.a,{highlight:!1},n):s(a.a,null,n)}},qB6N:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tree/TreePage",function(){return t("0unP")}])}},[["qB6N",1,2,4,6,9,7,0,3,5,8,10]]]);