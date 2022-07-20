(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{324:function(e,t,s){"use strict";s.r(t);var a=s(5),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"使用-elasticsearch-构建一个笔记搜索引擎-求索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-elasticsearch-构建一个笔记搜索引擎-求索"}},[e._v("#")]),e._v(" 使用 Elasticsearch 构建一个笔记搜索引擎——求索")]),e._v(" "),s("blockquote",[s("p",[e._v("路漫漫其修远兮，吾将上下而求索。")])]),e._v(" "),s("p",[e._v("搜索引擎的名字取自屈原的《离骚》，大家都知道在 E 文中单词 "),s("code",[e._v("search")]),e._v(" 是搜索的意思，而 "),s("code",[e._v("research")]),e._v(" 则是研究的意义，这也是反复搜索所存在的价值。")]),e._v(" "),s("p",[e._v("所以对于个人而言，希望存在一个可以搜索过往笔记博客以及一些琐碎的片段的工具。所以我们可以利用 "),s("code",[e._v("Elasticsearch")]),e._v(" 构建了一个这样的工具。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f1e72871ac993031a0ee826fafcdc2b7.png",alt:""}})]),e._v(" "),s("h1",{attrs:{id:"elasticsearch-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-是什么"}},[e._v("#")]),e._v(" Elasticsearch 是什么")]),e._v(" "),s("p",[e._v("es 是一个基于 Lucene 的搜索服务器。它提供一个分布式多用户能力的全文搜索引擎。")]),e._v(" "),s("p",[e._v("它用于全文搜索、结构化搜索、分析以及将这三者混合使用。")]),e._v(" "),s("p",[e._v("还有很多需要了解的概念如：集群和节点、索引、类型、文档等就不在此一一赘述了，下面贴出官方给出的文档地址：")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html"),s("OutboundLink")],1),e._v("  （中文、版本旧但不影响理解概念）")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/master/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.elastic.co/guide/en/elasticsearch/reference/master/index.html"),s("OutboundLink")],1),e._v("  （E 文、版本可选到最新）")]),e._v(" "),s("p",[e._v("es 在我们的求索中担当了存储和全文搜索的职责。")]),e._v(" "),s("h1",{attrs:{id:"开始吧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始吧"}},[e._v("#")]),e._v(" 开始吧")]),e._v(" "),s("p",[s("strong",[e._v("目标")]),e._v("：实现能够准确命中我们关键词所匹配的笔记文档。")]),e._v(" "),s("p",[e._v("如上文所说我们的文档是准备存储在 es 里面的，这里是利用 es 提供的 RESTful API 直接将文档数据存储在 es 里，当然喜欢数据库的同学完全可以在数据库中也存储一份。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6aa86c140a03756de2b9e4b4fc291091.png",alt:""}})]),e._v(" "),s("p",[e._v("为了使用方便，这里的做法是直接用 markdown 文件来记录文档内容，当然喜欢富文本的同学可以扩展一下。")]),e._v(" "),s("p",[e._v("文档管理的功能：")]),e._v(" "),s("ul",[s("li",[e._v("Refresh 刷新")]),e._v(" "),s("li",[e._v("Import 批量导入 md 文件为文档")]),e._v(" "),s("li",[e._v("New 创建")]),e._v(" "),s("li",[e._v("DeleteBatch 批量删除")]),e._v(" "),s("li",[e._v("Preview 预览")]),e._v(" "),s("li",[e._v("Edit 编辑")]),e._v(" "),s("li",[e._v("Delete 删除")])]),e._v(" "),s("p",[e._v("这些功能都是直接调用 es 提供的 RESTful API 实现，包括我们前端的搜索功能也是在调用 es 的接口。这样看来 es 是不是很棒棒阿，需要提到的是批量导入 md 文档这个功能并没有真正的上传文件到服务端，而是在浏览器端直接读取文件内容，然后批量提交到 es 里面。")]),e._v(" "),s("p",[s("strong",[e._v("实现")]),e._v("：")]),e._v(" "),s("p",[e._v("当我们键入关键词 "),s("code",[e._v("知识 Java")]),e._v(" 时，es 会将搜索关键词分词，这个例子里的分词会很简单，空格分词分为 "),s("code",[e._v("知识")]),e._v(" 和  "),s("code",[e._v("Java")]),e._v(" ，然后使用一种叫做倒序索引（inverted index）的结构来做快速的全文索引。倒序索引由在文档中出现的唯一的单词列表，以及对于每个单词在文档中的位置组成。匹配得到的结果按照得分（匹配度和权重）来排序搜索结果，然后这里的高亮显示匹配词也是 es 提供的高亮搜索。\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/2b0bdca416daa475aaee3dd7d6850b5e.png",alt:""}})]),e._v(" "),s("p",[e._v("最后这里的结果页是使用 "),s("code",[e._v("marked")]),e._v(" 来将 markdown 文档转换为 html 文档。")]),e._v(" "),s("p",[s("strong",[e._v("倒序索引")]),e._v("和"),s("strong",[e._v("高亮搜索")]),e._v("的具体内容请查阅官方文档，上面会有详尽的解释。")]),e._v(" "),s("p",[s("strong",[e._v("对于搜索的思考")]),e._v("：")]),e._v(" "),s("p",[e._v("如果互联网没有搜索引擎，就像字典没有了 ABCD...XYZ 索引表，从这里也可以看出我们对搜索引擎的期望值："),s("strong",[e._v("快速")]),e._v("和"),s("strong",[e._v("准确")]),e._v("。而我们在使用普通的全文索引时，通常也只能大致命中，举个例子：我们在搜索 “乐可可口”，搜索引擎应该要给我们返回“可口可乐”的结果；在我们搜索“Baidu”、“BD”或是“百度”时都应该需要得到“百度一下”的结果才对；在我们搜索“开心”时，理所当然的时“高兴”、“兴奋”等同义或接近的词都应该被匹配到。令人兴奋的事情是：这些我们通过 es 的一些插件是都可以很好的得到实现。")]),e._v(" "),s("h1",{attrs:{id:"github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[e._v("#")]),e._v(" GitHub")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/xiaop1ng/search",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/xiaop1ng/search"),s("OutboundLink")],1)]),e._v(" "),s("h1",{attrs:{id:"也许你会遇到的一些问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#也许你会遇到的一些问题"}},[e._v("#")]),e._v(" 也许你会遇到的一些问题")]),e._v(" "),s("ul",[s("li",[e._v("es 只能本地（localhost）访问：")])]),e._v(" "),s("p",[e._v("解决方法：")]),e._v(" "),s("p",[e._v("配置 "),s("code",[e._v("config\\elasticsearch.yml")])]),e._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 服务绑定地址，不配置则只能 localhost 访问")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("network.host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0.0.0.0\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("浏览器跨域访问问题")])]),e._v(" "),s("p",[e._v("配置 "),s("code",[e._v("config\\elasticsearch.yml")])]),e._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("http.cors.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("http.cors.allow-origin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("es 服务起不来")])]),e._v(" "),s("p",[e._v("报错信息在 "),s("code",[e._v("logs")]),e._v(" 文件夹下")])])}),[],!1,null,null,null);t.default=r.exports}}]);