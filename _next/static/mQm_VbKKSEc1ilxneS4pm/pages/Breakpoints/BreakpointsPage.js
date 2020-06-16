(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("ERkP"),r=t.n(a),o=t("j/s1"),i=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,a=e.theme;return n&&!t&&Object(o.d)(["background-color:",";padding:",";"],a.colors.warning10,a.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(o.d)(["color:",";"],t.colors.primary70)})),l=r.a.createElement,s=function(e){return l(i,e)};s.defaultProps={highlight:!0}},nqpD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Breakpoints/BreakpointsPage",function(){return t("yF1z")}])},yF1z:function(e,n,t){"use strict";t.r(n);var a=t("d2TB"),r=t("ZV9X"),o=t("ERkP"),i=t.n(o),l=t("lIm4"),s=t("GsAr"),c=i.a.createElement;n.default=function(){return c(i.a.Fragment,null,c(a.H0,null,"Breakpoints"),c(a.Text,null,"We provide access to our breakpoints' ",c(l.a,null,"@media")," queries. Our breakpoints include"," ",c(l.a,{primary:!0},"mobile"),", ",c(l.a,{primary:!0},"tablet")," and ",c(l.a,{primary:!0},"desktop")," . Values for each breakpoint are ",c(l.a,null,r.a.mobile),", ",c(l.a,null,r.a.tablet),", and"," ",c(l.a,null,r.a.desktop)," respectively."),c(s.a,null,'function Example() {\n  const StyledBox = styled(Box)`\n    height: ${({ theme }) => theme.spacing.xxxLarge};\n    width: 100%;\n\n    ${({ theme }) => theme.breakpoints.tablet} {\n      width: 60%;\n    }\n\n    ${({ theme }) => theme.breakpoints.desktop} {\n      width: 30%;\n    }\n  `;\n\n  return <StyledBox backgroundColor="secondary20" />;\n}'),c(a.Text,null,"We also expose the ",c(l.a,{primary:!0},"breakpointValues")," for each breakpoint."),c(s.a,null,'function Example() {\n  const StyledBox = styled(Box)`\n    height: ${({ theme }) => theme.spacing.xxxLarge};\n    width: 100%;\n\n    ${({ theme }) => theme.breakpoints.desktop} {\n      width: ${({ theme }) => theme.breakpointValues.tablet};\n    }\n  `;\n\n  return <StyledBox backgroundColor="secondary20" />;\n}'))}}},[["nqpD",1,2,4,6,9,7,0,3,5,8]]]);