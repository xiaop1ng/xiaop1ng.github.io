(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{347:function(a,t,s){"use strict";s.r(t);var r=s(5),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"windows-10-环境编译-lua-源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-10-环境编译-lua-源码"}},[a._v("#")]),a._v(" Windows 10 环境编译 Lua 源码")]),a._v(" "),s("h2",{attrs:{id:"环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[a._v("#")]),a._v(" 环境准备")]),a._v(" "),s("blockquote",[s("p",[a._v("系统：Windows10"),s("br"),a._v("\n编译工具： Visual Studio 2015"),s("br"),a._v("\n源码： Lua 5.3.4")])]),a._v(" "),s("p",[a._v("安装 Lua 可以采用安装 LuaForWindows.exe 的方式，这种方式是很方便很好用，可是往往这种方式只能给到一个非最新版的安装程序。我们可以通过编译官网给出的源码包自行编译从而获取最新版的目的。")]),a._v(" "),s("p",[a._v("Visual Studio 2015 社区版的离线包")]),a._v(" "),s("blockquote",[s("p",[a._v("ed2k://|file|cn_visual_studio_community_2015_x86_dvd_6847368.iso|4013920256|EB7F6605EDE67509E218E29173AC6574|/")])]),a._v(" "),s("p",[a._v("或者去"),s("a",{attrs:{href:"https://visualstudio.microsoft.com/zh-hans/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),s("OutboundLink")],1),a._v("下载社区版程序")]),a._v(" "),s("p",[a._v("需要注意的是在安装的时候需要勾选上 C++ 的开发人员工具包")]),a._v(" "),s("p",[a._v("Lua 源码，这里可以去 "),s("a",{attrs:{href:"https://www.lua.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("www.lua.org"),s("OutboundLink")],1),a._v(" 官网上获取最新的源码包")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.lua.org/ftp/lua-5.3.4.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.lua.org/ftp/lua-5.3.4.tar.gz"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("下载完成得到一个压缩包我们将其解压出来，我这里是放在 C盘根目录下")]),a._v(" "),s("h2",{attrs:{id:"开始吧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始吧"}},[a._v("#")]),a._v(" 开始吧！")]),a._v(" "),s("p",[a._v("首先我们找到 VS2015 开发人员命令提示打开它")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://p-1251746955.cos.ap-shenzhen-fsi.myqcloud.com/20170708143923399.png",alt:""}})]),a._v(" "),s("p",[a._v("然后切换至刚刚我们解压缩出来的 Lua 下的 src 文件夹下，我这里将 lua-5.3.4 文件夹名字改为了 lua")]),a._v(" "),s("blockquote",[s("p",[a._v("cd /d c:/lua/src")])]),a._v(" "),s("p",[a._v("切换至 lua 源码包的 src 下之后执行")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cl /MD /O2 /c /DLUA_BUILD_AS_DLL *.c  \nren lua.obj lua.o  \nren luac.obj luac.o  \nlink /DLL /IMPLIB:lua5.3.4.lib /OUT:lua5.3.4.dll *.obj  \nlink /OUT:lua.exe lua.o lua5.3.4.lib  \nlib /OUT:lua5.3.4-static.lib *.obj  \nlink /OUT:luac.exe luac.o lua5.3.4-static.lib \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://p-1251746955.cos.ap-shenzhen-fsi.myqcloud.com/20170708145019810.png",alt:""}})]),a._v(" "),s("p",[a._v("这时我们可以去查看 lua 源包下的 src 目录")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://p-1251746955.cos.ap-shenzhen-fsi.myqcloud.com/20170708145149594.png",alt:""}})]),a._v(" "),s("p",[a._v("这表明编译 Lua 源码工程已完成，此时我们将 C:\\lua\\src; 配置到 Path 环境变量下即可愉快的使用 lua 命令了。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://p-1251746955.cos.ap-shenzhen-fsi.myqcloud.com/20170708145351382.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.imooc.com/article/4435",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.imooc.com/article/4435"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);