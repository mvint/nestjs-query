(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),o=(r(0),r(206)),l={title:"DTOs"},i={id:"graphql/dtos",title:"DTOs",description:"The `query-graphql` package leverages most decorators from [`@nestjs/graphql`](https://docs.nestjs.com/graphql/quick-start) and [TypeGraphQL](https://typegraphql.ml), with the exception of `FilterableField`.",source:"@site/docs/graphql/dtos.md",permalink:"/nestjs-query/docs/graphql/dtos",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/dtos.md",sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/graphql/getting-started"},next:{title:"Resolvers",permalink:"/nestjs-query/docs/graphql/resolvers"}},p=[{value:"<code>@FilterableField</code>",id:"filterablefield",children:[{value:"Example",id:"example",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"query-graphql")," package leverages most decorators from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.nestjs.com/graphql/quick-start"}),Object(o.b)("inlineCode",{parentName:"a"},"@nestjs/graphql"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://typegraphql.ml"}),"TypeGraphQL"),", with the exception of ",Object(o.b)("inlineCode",{parentName:"p"},"FilterableField"),"."),Object(o.b)("h2",{id:"filterablefield"},Object(o.b)("inlineCode",{parentName:"h2"},"@FilterableField")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"FilterableField")," is very similar to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://typegraphql.ml/docs/types-and-fields.html"}),Object(o.b)("inlineCode",{parentName:"a"},"Field"))," from\nTypeGraphQL, however it allows you to specify the fields that should be filterable when querying."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," If you use the TypeGraphQL Field decorator it will not be exposed in the query type for the DTO."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"In the following example we allow ",Object(o.b)("inlineCode",{parentName:"p"},"id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"title"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"completed")," to be used in queries."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @Field(() => GraphQLISODateTime)\n  created!: Date;\n\n  @Field(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")))}s.isMDXComponent=!0},206:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||o;return r?a.a.createElement(m,i({ref:t},c,{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);