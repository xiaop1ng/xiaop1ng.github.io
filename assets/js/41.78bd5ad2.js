(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{338:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-作用域-二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-作用域-二"}},[s._v("#")]),s._v(" JavaScript —— 作用域（二）")]),s._v(" "),a("p",[s._v("Javascript 语言特有的”链式作用域”结构（chain scope）")]),s._v(" "),a("p",[s._v("即子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。")]),s._v(" "),a("h2",{attrs:{id:"块作用域与函数作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块作用域与函数作用域"}},[s._v("#")]),s._v(" 块作用域与函数作用域")]),s._v(" "),a("p",[s._v("函数可以访问函数外部申明的变量，但是函数外部不能反过来访问函数内部的局部变量。")]),s._v(" "),a("p",[a("strong",[s._v("需要注意的是在 JavaScript 中，区域块（ "),a("code",[s._v("if")]),s._v("  、 "),a("code",[s._v("for")]),s._v(" 、 "),a("code",[s._v("while")]),s._v(" 、 "),a("code",[s._v("switch")]),s._v(" 、 "),a("code",[s._v("try")]),s._v(" ）内的变量是可以在区域块外部访问的。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from try block"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("f3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value1: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" value1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// value1: from try block")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value2: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// value2: from block")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value3: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" value3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Uncaught ReferenceError: value3 is not defined")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"不要忽略-var"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不要忽略-var"}},[s._v("#")]),s._v(" 不要忽略  "),a("code",[s._v("var")])]),s._v(" "),a("blockquote",[a("p",[s._v("Yes，don’t ignore  "),a("code",[s._v("var")])])]),s._v(" "),a("p",[s._v("不知道你刚开始写 JS 程序会不会在申明变量时忘掉写  "),a("code",[s._v("var")]),s._v("  ,反正最初的我是觉得写和不写没差而不写  "),a("code",[s._v("var")])]),s._v(" "),a("p",[s._v("在申明变量不写  "),a("code",[s._v("var")]),s._v("  的时候会申明一个全局变量。而在 HTML 文档中，所有全局变量都属于  "),a("code",[s._v("window")]),s._v("  对象中。")]),s._v(" "),a("p",[s._v("也就是说你的全局变量，或者函数，可以覆盖  "),a("code",[s._v("window")]),s._v("  对象的变量或者函数。"),a("br"),s._v("\n局部变量，包括  "),a("code",[s._v("window")]),s._v("  对象可以覆盖全局变量和函数。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true;")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 实时证明当 JavaScript 运行在浏览器中时，全局变量会作为 window 对象的属性")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// location = "https://baidu.com"; // 全局变量 location 会让浏览器跳转至该链接')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("需要补充说明的是在最外层的  "),a("code",[s._v("<script><\/script>")]),s._v("  中就算你使用  "),a("code",[s._v("var")]),s._v("  来声明变量和函数，这个成员也会归为  "),a("code",[s._v("window")]),s._v("  对象“所有”。对于这个现象我的理解是：最外层相当于是我们的最大的一个作用域，所以无论你怎么申明都会成为  "),a("code",[s._v("window")]),s._v("  的成员。")]),s._v(" "),a("h2",{attrs:{id:"一图胜千言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一图胜千言"}},[s._v("#")]),s._v(" 一图胜千言")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/12/10/YO2xdI9iWQ1B7mA.png",alt:"20180118233921459.png"}})]),s._v(" "),a("p",[s._v("这里的全局作用域是直接在  "),a("code",[s._v("<script><\/script>")]),s._v("  里、即 v1 、v2 的值会在  "),a("code",[s._v("window")]),s._v("  对象下，内层作用域可以访问外层的作用域，但是内层作用域里的值会被围墙围起来不让外层作用域访问。")]),s._v(" "),a("h2",{attrs:{id:"疑问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#疑问"}},[s._v("#")]),s._v(" 疑问？")]),s._v(" "),a("blockquote",[a("p",[s._v("在 JS 里，我们有没有方法打破常规，在外层作用域访问内层作用域的值呢？")])])])}),[],!1,null,null,null);t.default=e.exports}}]);