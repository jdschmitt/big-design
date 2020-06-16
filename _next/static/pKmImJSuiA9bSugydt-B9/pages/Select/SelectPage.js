(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{VjYp:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Select/SelectPage",function(){return t("WdXb")}])},WdXb:function(n,e,t){"use strict";t.r(e);var o=t("d2TB"),l=t("ERkP"),a=t.n(l),i=t("GsAr"),u=t("lIm4"),c=t("sq9i"),r=a.a.createElement;e.default=function(){return r(a.a.Fragment,null,r(o.H0,null,"Selects"),r(o.Text,null,"Select are typeable inputs with selectable dropdown items."," ",r(o.Link,{href:"https://design.bigcommerce.com/components/selects",target:"_blank"},"Selects Design Guidelines"),"."),r(i.a,null,"function Example() {\n  const [value, setValue] = useState('mx');\n  const handleChange = (val) => setValue(val);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Select\n          action={{\n            actionType: 'destructive' as 'destructive',\n            content: 'Remove Country',\n            icon: <DeleteIcon />,\n            onActionClick: () => null,\n          }}\n          filterable={true}\n          label=\"Countries\"\n          maxHeight={300}\n          onOptionChange={handleChange}\n          options={[\n            { value: 'us', content: 'United States' },\n            { value: 'mx', content: 'Mexico' },\n            { value: 'ca', content: 'Canada' },\n            { value: 'en', content: 'England' },\n            { value: 'fr', content: 'France' },\n            { value: 'gr', content: 'Germany' },\n            { value: 'ar', content: 'Argentina' },\n            { value: 'ru', content: 'Russia', disabled: true },\n            { value: 'ch', content: 'Chile' },\n            { value: 'bo', content: 'Bolivia' },\n            { value: 'jp', content: 'Japan' },\n            { value: 'cn', content: 'China' },\n            { value: 'sk', content: 'South Korea' },\n            { value: 'au', content: 'Australia' },\n            { value: 'ug', content: 'Uganda' },\n          ]}\n          placeholder={'Choose country'}\n          placement={'bottom-start'}\n          required\n          value={value}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"),r(o.H1,null,"API"),r(c.d,null),r(c.c,null),r(c.a,null),r(c.b,null),r(o.H1,null,"Examples"),r(o.H2,null,"Position"),r(o.Text,null,"Select can be anchored in different directions with the ",r(u.a,{primary:!0},"position")," property. It will automatically find a position if there's not enough space in the chosen direction."),r(i.a,null,"<Grid gridColumns=\"repeat(4, 1fr)\">\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from above\"\n    placement=\"top\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from below\"\n    placement=\"bottom-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the right\"\n    placement=\"right-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the left\"\n    placement=\"left-end\"\n    required\n  />\n</Grid>"),r(o.H2,null,"Max Height"),r(o.Text,null,"Once the content is longer than the max-height, the Dropdown will be scrollable. It is possible to modify the dimension by passing a ",r(u.a,{primary:!0},"maxHeight")," property."),r(i.a,null,"<Grid gridColumns=\"repeat(3, 1fr)\">\n  <Select\n    label=\"Select\"\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n    ]}\n    placeholder=\"Default\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={150}\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n    ]}\n    placeholder=\"Smaller\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={350}\n    onOptionChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n      { value: 9, content: 'Option' },\n      { value: 10, content: 'Option' },\n      { value: 11, content: 'Option' },\n      { value: 12, content: 'Option' },\n    ]}\n    placeholder=\"Larger\"\n    required\n  />\n</Grid>"),r(o.H2,null,"Disabled"),r(o.Text,null,"It is possible to disable the entire select component, similar to how you would disable a native HTML select element, by using the ",r(u.a,{primary:!0},"disabled")," property."),r(i.a,null,"<Form>\n  <FormGroup>\n    <Select\n      disabled\n      label=\"Select\"\n      maxHeight={350}\n      onOptionChange={() => null}\n      options={[\n        { value: 1, content: 'Option' },\n        { value: 2, content: 'Option' },\n        { value: 3, content: 'Option' },\n        { value: 4, content: 'Option' },\n      ]}\n      placeholder=\"Larger\"\n      required\n    />\n  </FormGroup>\n</Form>\n"),r(o.H2,null,"Action"),r(o.Text,null,"Accepts an ",r(u.a,null,"action")," object to display at the end of the list."),r(i.a,null,"<Form>\n  <FormGroup>\n    <Select\n      action={{\n        actionType: 'destructive',\n        content: 'Remove Country',\n        icon: <DeleteIcon />,\n        onActionClick: () => null,\n      }}\n      label=\"Countries\"\n      onOptionChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder={'Choose country'}\n      placement={'bottom-start'}\n      required\n    />\n  </FormGroup>\n</Form>"),r(o.H2,null,"Error"),r(o.Text,null,"An ",r(u.a,null,"error")," prop receives a ",r(u.a,null,"string")," to display."),r(i.a,null,"<Form>\n  <FormGroup>\n    <Select\n      label=\"Countries\"\n      error=\"Need to choose a country before proceeding\"\n      onOptionChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder={'Choose country'}\n      placement={'bottom-start'}\n      required\n    />\n  </FormGroup>\n</Form>"),r(o.H2,null,"Select Groups"),r(o.Text,null,"It is possible to create grouped options with labels with a ",r(u.a,{primary:!0},"Select Group")," by passing"," ",r(u.a,{primary:!0},"label")," and ",r(u.a,{primary:!0},"options")," to the top-level ",r(u.a,{primary:!0},"options")," ","property."),r(i.a,null,"<Form>\n  <FormGroup>\n    <Select\n      label=\"My Options\"\n      filterable\n      value=\"ca\"\n      onOptionChange={() => null}\n      options={[\n        {\n          label: 'Group 1',\n          options: [\n            { value: 'mx', content: 'Mexico' },\n            { value: 'ca', content: 'Canada' },\n            { value: 'en', content: 'England' },\n          ],\n        },\n        {\n          label: 'Group 2',\n          options: [\n            { value: 'fr', content: 'France' },\n            { value: 'gr', content: 'Germany' },\n            { value: 'ar', content: 'Argentina' },\n          ],\n        },\n      ]}\n    />\n  </FormGroup>\n</Form>"))}}},[["VjYp",1,2,4,6,8,7,0,3,5,9,10,13]]]);