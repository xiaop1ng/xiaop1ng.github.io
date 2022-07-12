(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{312:function(e,v,_){"use strict";_.r(v);var t=_(5),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"《clean-code》阅读笔记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#《clean-code》阅读笔记"}},[e._v("#")]),e._v(" 《Clean Code》阅读笔记")]),e._v(" "),_("p",[e._v("《Clean Code》是国外大牛 "),_("em",[e._v("罗伯特·马丁 (Robert C. Martin)")]),e._v(" 的著作 ，在他的这本书中提出了一个概念：")]),e._v(" "),_("blockquote",[_("p",[e._v("代码质量与其整洁度成正比")])]),e._v(" "),_("h2",{attrs:{id:"clean-code-的前提-细节"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#clean-code-的前提-细节"}},[e._v("#")]),e._v(" Clean Code 的前提——细节")]),e._v(" "),_("blockquote",[_("p",[e._v("宏大建筑中最细小的部分，比如关不紧的门、有点儿没铺平的地板，甚至是凌乱的桌面，都会将整个大局的魅力毁灭殆尽")])]),e._v(" "),_("p",[e._v("这通常也是来评估一个产品的标准。")]),e._v(" "),_("blockquote",[_("p",[e._v("整洁近乎虔诚（Cleanliness is next to godliness）。一张脏乱的桌子足以夺去一所丽宅的光彩")])]),e._v(" "),_("h1",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),_("blockquote",[_("p",[e._v("你当用为自己第一个孩子命名般的谨慎来给变量命名")])]),e._v(" "),_("p",[e._v("以上来自书中的三处引用都想说明一句老生常谈的话——细节决定成败。"),_("br"),e._v("\n给我的反思是，在平日工作中的一些细节是不是被忽略掉了，为了快一点实现一个功能而草草命名函数名与变量名、复制重复性的代码……")]),e._v(" "),_("h2",{attrs:{id:"什么是-clean-code"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-clean-code"}},[e._v("#")]),e._v(" 什么是 Clean Code？")]),e._v(" "),_("p",[e._v("整洁的代码只做一件事情")]),e._v(" "),_("blockquote",[_("p",[e._v("Bjarne以“整洁的代码只做好一件事”结束论断。毋庸置疑，软件设计的许多原则最终都会归结为这句警语。有那么多人发表过类似的言论。糟糕的代码想做太多事，它意图混乱、目的含混。整洁的代码力求集中。每个函数、每个类和每个模块都全神贯注于一事，完全不受四周细节的干扰和污染。")])]),e._v(" "),_("p",[e._v("整洁带来的设计感，")]),e._v(" "),_("blockquote",[_("p",[e._v("整洁的代码总是看起来像是某位特别在意它的人写的。几乎没有改进的余地。")])]),e._v(" "),_("p",[e._v("破窗理论")]),e._v(" "),_("blockquote",[_("p",[e._v("窗户破损了的建筑让人觉得似乎无人照管。于是别人也再不关心。他们放任窗户继续破损。最终自己也参加破坏活动，在外墙上涂鸦，任垃圾堆积。一扇破损的窗户开辟了大厦走向倾颓的道路。")])]),e._v(" "),_("p",[e._v("生活中，当发现某件事物是被设计过的时候，会有一种直击心底的赶脚，我想在这种时候设计者应该也会有幸福感吧。"),_("br"),e._v("\n有时槽糕的设计可能导致很多人丧生，以前有些大剧院的门是往内开的，在发生火灾或一些紧急情况下人们撤离时蜂拥而至堵死了大门，错过了最佳的逃离时间。")]),e._v(" "),_("h2",{attrs:{id:"为什么需要-clean-code"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-clean-code"}},[e._v("#")]),e._v(" 为什么需要 Clean Code")]),e._v(" "),_("p",[e._v("先说说不整洁带来的后果。")]),e._v(" "),_("blockquote",[_("p",[e._v("假使你是位医生，病人请求你在给他做手术前别洗手，因为那会花太多时间，你会照办吗？本该是病人说了算；但医生却绝对应该拒绝遵从。为什么？因为医生比病人更了解疾病和感染的风险。医生如果按病人说的办，就是一种不专业的态度（更别说是犯罪了）。"),_("br"),e._v("\n同理，程序员遵从不了解混乱风险的经理的意愿，也是不专业的做法。")]),e._v(" "),_("p",[e._v("读与写花费时间的比例超过10:1。写新代码时，我们一直在读旧代码。")])]),e._v(" "),_("blockquote",[_("p",[e._v("混乱只会立刻拖慢你，叫你错过期限。赶上期限的唯一方法——做得快的唯一方法 ——就是始终尽可能保持代码整洁。")])]),e._v(" "),_("p",[e._v("还是关于命名")]),e._v(" "),_("blockquote",[_("p",[e._v("选个好名字要花时间，但省下来的时间比花掉的多。注意命名，而且一旦发现有更好的名称，就换掉旧的。这么做，读你代码的人（包括你自己）都会更开心。")])]),e._v(" "),_("p",[e._v("关于注释")]),e._v(" "),_("blockquote",[_("p",[e._v("注释的恰当用法是弥补我们在用代码表达意图时遭遇的失败。")])]),e._v(" "),_("p",[e._v("注释是一种代码不够清楚表达的表现，这里当然不是说让我们不写注释，注释也得整洁")]),e._v(" "),_("blockquote",[_("p",[e._v("什么也比不上放置良好的注释来得有用。什么也不会比乱七八糟的注释更有本事搞乱一个模块。什么也不会比陈旧、提供错误信息的注释更有破坏性。")])]),e._v(" "),_("h2",{attrs:{id:"去重构吧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#去重构吧"}},[e._v("#")]),e._v(" 去重构吧")]),e._v(" "),_("p",[e._v("不要让重构的想法在脑海中飘过了，觉得代码需要重构的时候得尽快。想到一个更合适的变量与函数的命名马上去替换掉它，这一定会很值得。")]),e._v(" "),_("blockquote",[_("p",[e._v("在重构过程中，可以应用有关优秀软件设计的一切知识。提升内聚性，降低耦合度，切分关注面，模块化系统性关注面，缩小函数和类的尺寸，选用更好的名称，如此等等。这也是应用简单设计后三条规则的地方：消除重复，保证表达力，尽可能减少类和方法的数量。")])]),e._v(" "),_("p",[e._v("想其他职业一样，开发也是一门手艺活，所以我们理所应当尊重我们的手艺。")]),e._v(" "),_("blockquote",[_("p",[e._v("花一点点时间在每个函数和类上。选用较好的名称，将大函数切分为小函数，时时照拂自己创建的东西。用心是最珍贵的资源。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);