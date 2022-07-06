(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{314:function(t,s,n){"use strict";n.r(s);var a=n(4),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"javascript-——-闭包（三）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-——-闭包（三）"}},[t._v("#")]),t._v(" JavaScript —— 闭包（三）")]),t._v(" "),n("h2",{attrs:{id:"什么是闭包？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包？"}},[t._v("#")]),t._v(" 什么是闭包？")]),t._v(" "),n("p",[t._v("这确实是个问题，我现在答不出来。在这里想聊一个有趣的现象，在中学时代，常常有老先生在解答我们提出问题时，他们可以给出正确的结果。但是说不出个所以然出来，然后老先生会告诉我们：")]),t._v(" "),n("blockquote",[n("p",[t._v("这个东西阿，只可意会不可言传呐，你们多练习就可以自行体会其中的奥义啦。")])]),t._v(" "),n("p",[t._v("我认为这世间的事物可意会即可言传，不可言传者只能说明水平还不够，还得修行。古有诸葛孔明在《隆中对》用寥寥数语为刘备做了一个缜密的顶层设计。")]),t._v(" "),n("p",[t._v("嗯，有点跑偏，没关系，我现在说不清，我们可以看看别人怎么说。")]),t._v(" "),n("p",[t._v("维基百科上对于闭包的定义：")]),t._v(" "),n("blockquote",[n("p",[t._v("在函数中可以（嵌套）定义另一个函数时，如果内部的函数引用了外部的函数的变量，则可能产生闭包。运行时，一旦外部的 函数被执行，一个闭包就形成了，闭包中包含了内部函数的代码，以及所需外部函数中的变量的引用。其中所引用的变量称作上值(upvalue)。")])]),t._v(" "),n("p",[t._v("《javascript高级程序设计》（第三版）")]),t._v(" "),n("blockquote",[n("p",[t._v("闭包是指有权访问另一个函数作用域中的变量函数；")])]),t._v(" "),n("p",[t._v("《javascript权威指南》 （第六版)")]),t._v(" "),n("blockquote",[n("p",[t._v("从技术的角度讲，所有的JavaScript函数都是闭包：它们都是对象，它们都关联到作用域链。")])]),t._v(" "),n("p",[t._v("我最喜欢是《javascript高级程序设计》中的这个描述，因为他最短，嗯我觉得他说得最清楚。闭包就是能让我们能在函数外部访问到函数内部的成员。")]),t._v(" "),n("p",[t._v("还记得上一篇中最后的那个疑问吗？")]),t._v(" "),n("blockquote",[n("p",[t._v("在 JS 里，我们有没有方法打破常规，在外层作用域访问内层作用域的值呢？")])]),t._v(" "),n("h2",{attrs:{id:"闭包的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用"}},[t._v("#")]),t._v(" 闭包的作用")]),t._v(" "),n("p",[t._v("闭包是 JavaScript 最强大的功能之一")]),t._v(" "),n("p",[t._v("这里给一个详细描述闭包的文档 "),n("a",{attrs:{href:"http://jibbering.com/faq/faq_notes/closures.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jibbering.com/faq/faq_notes/closures.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("我认为闭包很重要的两个功能是：")]),t._v(" "),n("ol",[n("li",[t._v("能够读取其他函数内部变量的函数")]),t._v(" "),n("li",[t._v("让这些变量的值始终保持在内存中。")])]),t._v(" "),n("h2",{attrs:{id:"看一段简单代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#看一段简单代码"}},[t._v("#")]),t._v(" 看一段简单代码")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("innerFn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里将一个函数作为返回值")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" innerFn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一篇写作用域中留下了一个疑问，就是我们有没有\b办法在外层\b作用域中访问内层作用域中的局部变量(属性)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于在 innerFn 中是可以访问父函数 fn1 \b作用域内的变量的，所以我们想在\b fn1 外访问 fn1 中的变量可以借助 innerFn 来完成。这也是万物皆值类型语言(JS、Lua、Swift、Go...)的一个很重要的特性——闭包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \b这里打印出来的连续的数，说明 count \b常驻在内存中，并没有在 fn2 方法结束时回收\b掉 count")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我对此的理解是：由于 fn2 是 fn1 的返回值，而 fn2 函数依赖 fn1 中的局部变量 count, 所以 GC 不会回收 count")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);