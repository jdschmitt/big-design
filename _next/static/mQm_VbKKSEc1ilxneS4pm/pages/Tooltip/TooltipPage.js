(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"/UKd":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tooltip/TooltipPage",function(){return e("dpPe")}])},c2K2:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var o=e("d2TB"),r=e("XPf/"),i=e("BtTX"),l=e("ERkP"),a=e.n(l),u=e("j/s1"),p=Object(u.e)(o.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),c=a.a.createElement,s=function(t){var n=t.children,e=t.title,a=Object(l.useState)(!0),u=a[0],s=a[1],d=function(){return s(!u)};return c("div",null,c(p,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(t){"Enter"!==t.key&&" "!==t.key||d()},tabIndex:0},u?c(r.a,{title:"Expand"}):c(i.a,{title:"Collapse"}),c(o.Text,null,e)),!u&&n)}},dpPe:function(t,n,e){"use strict";e.r(n);var o=e("d2TB"),r=e("ERkP"),i=e.n(r),l=e("GsAr"),a=e("lIm4"),u=e("cxan"),p=e("nFRM"),c=i.a.createElement,s=[{name:"trigger",types:"ReactNode",required:!0,description:"React Node that triggers the tooltip on hover."},{name:"placement",defaultValue:"top",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],description:"Sets the position of the Tooltip."}],d=function(t){return c(p.a,Object(u.a)({title:"Tooltip",propList:s},t))},m=i.a.createElement;n.default=function(){return m(i.a.Fragment,null,m(o.H0,null,"Tooltips"),m(o.Text,null,"Tooltips contain information to help users understand actions or page elements. They are short, and triggered by a user hovering with their keyboard or mouse over a UI element."," ",m(o.Link,{href:"https://design.bigcommerce.com/components/tooltips",target:"_blank"},"Tooltips Design Guidelines"),"."),m(l.a,null,'<Tooltip trigger={<Button>Hover</Button>} placement="right">\n  Tooltip Content\n</Tooltip>'),m(o.H1,null,"API"),m(d,null),m(o.H1,null,"Examples"),m(o.H2,null,"Anchor"),m(o.Text,null,"Tooltips can wrap any ",m(a.a,null,"Element"),". Tooltip will show on hover."),m(l.a,null,'<Flex alignItems="center">\n  <Box marginRight="medium">\n    <Tooltip trigger={<Button>Button</Button>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n\n  <Box marginRight="medium">\n    <Tooltip trigger={<WarningIcon />} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n  <Box marginRight="medium">\n    <Tooltip trigger={<span>Span</span>} placement="right">\n      Tooltip Content\n    </Tooltip>\n  </Box>\n</Flex>'),m(o.H2,null,"Placement"),m(o.Text,null,"Tooltip can be anchored in different directions with the ",m(a.a,{primary:!0},"placement")," property. It will automatically find a position if there's not enough space in the chosen direction."),m(l.a,null,'<Grid gridColumns="repeat(4, min-content)">\n  <Tooltip trigger={<Button>Right</Button>} placement="right">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Top</Button>} placement="top">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Left</Button>} placement="left">\n    Tooltip Content\n  </Tooltip>\n  <Tooltip trigger={<Button>Bottom</Button>} placement="bottom">\n    Tooltip Content\n  </Tooltip>\n</Grid>\n'))}},lIm4:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var o=e("ERkP"),r=e.n(o),i=e("j/s1"),l=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(t){return t.theme.colors.secondary70}),(function(t){var n=t.highlight,e=t.primary,o=t.theme;return n&&!e&&Object(i.d)(["background-color:",";padding:",";"],o.colors.warning10,o.spacing.xxSmall)}),(function(t){var n=t.primary,e=t.theme;return n&&Object(i.d)(["color:",";"],e.colors.primary70)})),a=r.a.createElement,u=function(t){return a(l,t)};u.defaultProps={highlight:!0}},nFRM:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var o=e("d2TB"),r=e("ERkP"),i=e.n(r),l=e("lIm4"),a=e("c2K2"),u=i.a.createElement,p=function(t){var n=t.collapsible,e=t.id,r=t.propList,p=t.title,s=function(){return u(o.TableFigure,{marginBottom:"xLarge"},u(o.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(t){var n=t.name,e=t.required;return u(i.a.Fragment,null,u(l.a,{primary:!0},n),e?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(t){var n=t.types;return u(c,{types:n})}},{header:"Default",hash:"default",render:function(t){var n=t.defaultValue;return u(l.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(t){var n=t.description;return u(o.Text,null,n)}}],items:r}),u(o.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?u(a.a,{title:"".concat(p," Props")},s()):u(i.a.Fragment,null,u(o.H2,{id:e},p),s())},c=function(t){var n=t.types;return Array.isArray(n)?n.map((function(t,e){return u(i.a.Fragment,{key:t},t.type===o.Link?u(l.a,{highlight:!1},t):u(l.a,null,t),e<n.length-1?" | ":null)})):n.type===o.Link?u(l.a,{highlight:!1},n):u(l.a,null,n)}}},[["/UKd",1,2,4,6,9,7,0,3,5,8]]]);