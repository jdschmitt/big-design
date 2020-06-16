(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{W1AS:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Flex/FlexPage",function(){return l("hFvE")}])},hFvE:function(e,t,l){"use strict";l.r(t);var a=l("d2TB"),n=l("ERkP"),r=l.n(n),i=l("GsAr"),o=l("lIm4"),x=l("cxan"),m=l("nFRM"),s=r.a.createElement,p=[{name:"alignContent",types:["stretch","center","flex-start","flex-end","space-between","space-around"],defaultValue:"stretch",description:s(r.a.Fragment,null,"Modifies the behavior of the ",s(o.a,{highlight:!1},"flex-wrap")," property on the vertical axis. Same as the"," ",s(o.a,{highlight:!1},"align-content")," CSS property.")},{name:"alignItems",types:["normal","stretch","center","flex-start","flex-end","baseline"],defaultValue:"stretch",description:s(r.a.Fragment,null,"Specifies the default alignment for items in a flex container. Same as the"," ",s(o.a,{highlight:!1},"align-items")," CSS property.")},{name:"flexDirection",types:["row","column","row-reverse","column-reverse"],defaultValue:"row",description:s(r.a.Fragment,null,"Determines the direction of flex items. Same as the ",s(o.a,{highlight:!1},"flex-direction")," CSS property.")},{name:"justifyContent",types:["center","flex-start","flex-end","left","right","normal","space-between","space-around","space-evenly","stretch"],defaultValue:"flex-start",description:s(r.a.Fragment,null,"Modifies the behavior of the ",s(o.a,{highlight:!1},"flex-wrap")," property on the horizontal axis. Same as the ",s(o.a,{highlight:!1},"justify-content")," CSS property.")},{name:"flexWrap",types:["nowrap","wrap","wrap-reversed"],defaultValue:"nowrap",description:s(r.a.Fragment,null,"Controls whether flex items should wrap or not. Same as the ",s(o.a,{highlight:!1},"flex-wrap")," CSS property.")}],f=function(e){return s(m.a,Object(x.a)({title:"Flex",propList:p},e))},h=[{name:"alignSelf",types:["auto","flex-start","flex-end","center","baseline","stretch"],defaultValue:"auto",description:s(r.a.Fragment,null,"Overrides the flex items container ",s(o.a,{highlight:!1},"align-items")," property. Same as the"," ",s(o.a,{highlight:!1},"align-self")," CSS property.")},{name:"flexBasis",types:["auto","fill","min-content","max-content","fit-content","content","string"],defaultValue:"auto",description:s(r.a.Fragment,null,"Specifies the inital length of a flex item. Same as the ",s(o.a,{highlight:!1},"flex-basis")," CSS property.")},{name:"flexGrow",types:"number",defaultValue:"0",description:s(r.a.Fragment,null,"Determines how much a flex item can grow relitive to the rest of the flex items. Same as the"," ",s(o.a,{highlight:!1},"flex-grow")," CSS property.")},{name:"flexOrder",types:"number",defaultValue:"0",description:s(r.a.Fragment,null,"Modifies which order a flex item will appear relative to the other flex items in the container. Same as the"," ",s(o.a,{highlight:!1},"order")," CSS property.")},{name:"flexShrink",types:"number",defaultValue:"1",description:s(r.a.Fragment,null,"Determines how much a flex item can shrink relitive to the rest of the flex items. Same as the"," ",s(o.a,{highlight:!1},"flex-shrink")," CSS property.")}],c=function(e){return s(m.a,Object(x.a)({title:"FlexItem",propList:h},e))},u=l("osqn"),g=l("tGwT"),d=l("akZe"),F=l("aw6n"),I=r.a.createElement,w=function(e){var t=e.children,l=e.vertical;return I(a.Box,{backgroundColor:"secondary20",border:"box",marginVertical:l?"xSmall":"none",marginHorizontal:l?"none":"xSmall",padding:"small"},t)};t.default=function(){return I(r.a.Fragment,null,I(a.H0,null,"Flex"),I(a.Text,null,"A flex container used for customizable layouts."),I(i.a,{scope:{ExampleBox:w}},'<Flex\n  alignContent="stretch"\n  alignItems="stretch"\n  flexDirection="row"\n  justifyContent="flex-start"\n  flexWrap="nowrap"\n>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem alignSelf="auto" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>\n    <ExampleBox>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>'),I(a.H1,null,"API"),I(f,null),I(c,null),I(a.H2,null,"Inherited Props"),I(u.a,{collapsible:!0}),I(g.a,{collapsible:!0}),I(d.a,{collapsible:!0}),I(F.a,{collapsible:!0}),I(a.H1,null,"Examples"),I(a.Text,null,"Flex container's can space their element with uniform spacing in-between each flex item using the"," ",I(o.a,{primary:!0},"justifyContent")," prop."),I(i.a,{scope:{ExampleBox:w}},'<Flex justifyContent="space-between">\n  <FlexItem>\n    <ExampleBox>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem>\n    <ExampleBox>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem>\n    <ExampleBox>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem>\n    <ExampleBox>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>'),I(a.Text,null,"One way of creating a column based layout is using a combination of the ",I(o.a,{primary:!0},"flexWrap")," prop on the flex container with an additional ",I(o.a,{primary:!0},"flexBasis")," prop on the flex items."),I(i.a,{scope:{ExampleBox:w}},'<Flex flexWrap="wrap">\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem flexBasis="100%">\n    <ExampleBox vertical>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>'),I(a.Text,null,"Using the ",I(o.a,{primary:!0},"flexOrder")," prop you can reorganize content based on the size generated by setting the ",I(o.a,{primary:!0},"flexGrow")," prop. ",I(o.a,{primary:!0},"flexGrow")," allows the flex items to grow relative to the flex container's width."),I(i.a,{scope:{ExampleBox:w}},"<Flex>\n  <FlexItem flexGrow={2} flexOrder={2}>\n    <ExampleBox>Item 1</ExampleBox>\n  </FlexItem>\n  <FlexItem flexOrder={4}>\n    <ExampleBox>Item 2</ExampleBox>\n  </FlexItem>\n  <FlexItem flexGrow={4} flexOrder={1}>\n    <ExampleBox>Item 3</ExampleBox>\n  </FlexItem>\n  <FlexItem flexGrow={1} flexOrder={3}>\n    <ExampleBox>Item 4</ExampleBox>\n  </FlexItem>\n</Flex>"))}}},[["W1AS",1,2,4,6,8,7,0,3,5,9,10,11]]]);