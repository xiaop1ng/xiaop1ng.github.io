(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{327:function(e,s,a){"use strict";a.r(s);var t=a(5),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"使用-docker-制作盒装部落格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-制作盒装部落格"}},[e._v("#")]),e._v(" 使用 Docker 制作盒装部落格")]),e._v(" "),a("h2",{attrs:{id:"先玩起来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先玩起来"}},[e._v("#")]),e._v(" 先玩起来")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://labs.play-with-docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Play with Docker"),a("OutboundLink")],1),e._v(" 官方提供的 Playground，进去点击 Start，然后 +ADD NEW INSTANCE 即可开玩。")]),e._v(" "),a("p",[e._v("上来直接 "),a("code",[e._v("run")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -it --rm -p 4000:80 ccr.ccs.tencentyun.com/dockerpracticesig/docker_practice:vuepress\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("我们先不关心指令参数是什么意思（后文会提到），直接访问~（在这里只需要点击上面 "),a("code",[e._v("OPEN PORT")]),e._v(" 旁边提供的按钮 "),a("code",[e._v("4000")]),e._v(" 即可访达）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<IP>:4000\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("当执行 "),a("code",[e._v("docker run")]),e._v(" 来创建容器时，Docker 在后台运行的标准操作包括：")]),e._v(" "),a("ol",[a("li",[e._v("检查本地是否存在指定的镜像，不存在就从 registry 下载")]),e._v(" "),a("li",[e._v("利用镜像创建并启动一个容器")]),e._v(" "),a("li",[e._v("分配一个文件系统，并在只读的镜像层外面挂载一层可读写层")]),e._v(" "),a("li",[e._v("从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去")]),e._v(" "),a("li",[e._v("从地址池配置一个 ip 地址给容器")]),e._v(" "),a("li",[e._v("执行用户指定的应用程序")]),e._v(" "),a("li",[e._v("执行完毕后容器被终止")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -it --rm -p 8080:8080 xiaop1ng/blog:v1")])]),e._v(" "),a("p",[e._v("给你一把钥匙，执行上面这条指令即可直达我的部落格")]),e._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),a("ul",[a("li",[e._v("镜像")])]),e._v(" "),a("blockquote",[a("p",[e._v("操作系统分为内核和用户空间。对于 Linux 而言，内核启动后，会挂载 root 文件系统为用户提供用户空间支持。而 Docker 镜像（Image）相当于一个 root 文件系统。\n一个特殊的文件系统（使用 Union FS 技术），分层存储的架构，镜像不包含任何动态数据，其内容在构建之后也不会被改变。")])]),e._v(" "),a("ul",[a("li",[e._v("容器")])]),e._v(" "),a("blockquote",[a("p",[e._v("镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的 类 和 实例 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")])]),e._v(" "),a("blockquote",[a("p",[e._v("容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。")])]),e._v(" "),a("blockquote",[a("p",[e._v("容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用 数据卷（Volume）、或者 绑定宿主目录，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。")])]),e._v(" "),a("ul",[a("li",[e._v("仓库")])]),e._v(" "),a("blockquote",[a("p",[e._v("仓库是我们拉货（镜像）的位置，官方的仓库是 Docker Hub")])]),e._v(" "),a("h2",{attrs:{id:"镜像相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关命令"}},[e._v("#")]),e._v(" 镜像相关命令")]),e._v(" "),a("p",[a("strong",[e._v("搜索镜像")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker search <KEYWORD>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("获取镜像")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("推送镜像到仓库")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker push <镜像名称>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("运行容器")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -it --rm ubuntu:18.04 bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("-it")]),e._v("：这是两个参数，一个是 -i：交互式操作，一个是 -t 终端。我们这里打算进入 bash 执行一些命令并查看返回结果，因此我们需要交互式终端。")]),e._v(" "),a("li",[a("code",[e._v("--rm")]),e._v("：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 docker rm。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 --rm 可以避免浪费空间。")]),e._v(" "),a("li",[a("code",[e._v("ubuntu:18.04")]),e._v("：这是指用 ubuntu:18.04 镜像为基础来启动容器。")]),e._v(" "),a("li",[a("code",[e._v("bash")]),e._v("：放在镜像名后的是 命令，这里我们希望有个交互式 Shell，因此用的是 bash。")])]),e._v(" "),a("p",[e._v("最后我们通过 "),a("code",[e._v("exit")]),e._v(" 退出了这个容器。")]),e._v(" "),a("p",[a("strong",[e._v("列出镜像")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker image ls\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("删除镜像")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker image rm [选项] <镜像1> [<镜像2> ...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("其中，"),a("code",[e._v("镜像")]),e._v(" 可以是 镜像短 ID、镜像长 ID、镜像名 或者 镜像摘要。")]),e._v(" "),a("p",[e._v("需要注意的是容器对镜像的依赖，如果存在用这个镜像启动的容器存在（即使容器没有运行）那么同样不可以删除这个镜像。容器是以镜像为基础，再加一层容器存储，组成多层存储结构去运行的。")]),e._v(" "),a("p",[a("strong",[e._v("commit 制作黑箱镜像")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker commit --author "jiancp" --message "edit index" ng nginx:v2\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("提交完成后使用 "),a("code",[e._v("docker image ls")]),e._v(" 可以查看到 nginx:v2 这个镜像")]),e._v(" "),a("h2",{attrs:{id:"容器相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器相关命令"}},[e._v("#")]),e._v(" 容器相关命令")]),e._v(" "),a("p",[a("strong",[e._v("启动容器")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -t -i ubuntu:18.04 /bin/bash\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("其中 "),a("code",[e._v("-t")]),e._v(" 选项让 Docker 分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上， "),a("code",[e._v("-i")]),e._v(" 则让容器的标准输入保持打开。\n另外我们可以使用 "),a("code",[e._v("-d")]),e._v(" 后台启动容器")]),e._v(" "),a("p",[a("strong",[e._v("启动已终止的容器")]),e._v("\n可以利用 "),a("code",[e._v("docker container start")]),e._v(" 命令，直接将一个已经终止（exited）的容器启动运行。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker container start <容器ID>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("查看容器信息")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker container ls\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("查看容器日志信息")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker container logs <容器ID>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("终止容器")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker container stop <容器ID>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("重新启动容器")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker container restart <容器ID>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("进入容器")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker attach")])]),e._v(" "),a("p",[e._v("推荐使用")]),e._v(" "),a("blockquote",[a("p",[e._v("docker exec")])]),e._v(" "),a("p",[e._v("示例：")]),e._v(" "),a("blockquote",[a("p",[e._v("docker exec -it 09c2c bash")])]),e._v(" "),a("p",[a("strong",[e._v("导出导入容器")])]),e._v(" "),a("ul",[a("li",[e._v("导出")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker export")])]),e._v(" "),a("p",[e._v("示例：")]),e._v(" "),a("blockquote",[a("p",[e._v("docker export 7691a814370e > ubuntu.tar")])]),e._v(" "),a("ul",[a("li",[e._v("导入")])]),e._v(" "),a("blockquote",[a("p",[e._v("cat ubuntu.tar | docker import - test/ubuntu:v1.0")])]),e._v(" "),a("p",[a("strong",[e._v("删除容器")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker container rm <容器ID>")])]),e._v(" "),a("p",[a("strong",[e._v("清理所有处于终止状态的容器")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker container prune")])]),e._v(" "),a("h2",{attrs:{id:"数据卷管理命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据卷管理命令"}},[e._v("#")]),e._v(" 数据卷管理命令")]),e._v(" "),a("ul",[a("li",[e._v("数据卷")])]),e._v(" "),a("p",[a("code",[e._v("数据卷")]),e._v(" 是一个可供一个或多个容器使用的特殊目录，可以提供很多特性")]),e._v(" "),a("ul",[a("li",[e._v("数据卷 可以在容器之间共享和重用")]),e._v(" "),a("li",[e._v("对 数据卷 的修改会立马生效")]),e._v(" "),a("li",[e._v("对 数据卷 的更新，不会影响镜像")]),e._v(" "),a("li",[e._v("数据卷 默认会一直存在，即使容器被删除")])]),e._v(" "),a("blockquote",[a("p",[e._v("注意：数据卷 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会复制到数据卷中（仅数据卷为空时会复制）。")])]),e._v(" "),a("p",[a("strong",[e._v("创建数据卷")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume create my-vol")])]),e._v(" "),a("p",[a("strong",[e._v("查看所有数据卷")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume ls")])]),e._v(" "),a("p",[a("strong",[e._v("查看指定数据卷的信息")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume inspect my-vol")])]),e._v(" "),a("p",[a("strong",[e._v("挂载数据卷")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 80:80 --name web --mount source=my-vol,target=/usr/share/nginx/html nginx")])]),e._v(" "),a("p",[e._v("在用 "),a("code",[e._v("docker run")]),e._v(" 命令的时候，使用 "),a("code",[e._v("--mount")]),e._v(" 标记来将 数据卷 挂载到容器里。在一次 "),a("code",[e._v("docker run")]),e._v(" 中可以挂载多个 数据卷。")]),e._v(" "),a("p",[a("strong",[e._v("查看容器信息")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker inspect web")])]),e._v(" "),a("p",[e._v("数据卷信息在 "),a("code",[e._v("Mounts")]),e._v(" 节点中")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"Mounts": [\n            {\n                "Type": "volume",\n                "Name": "my-vol",\n                "Source": "/var/lib/docker/volumes/my-vol/_data",\n                "Destination": "/usr/share/nginx/html",\n                "Driver": "local",\n                "Mode": "z",\n                "RW": true,\n                "Propagation": ""\n            }\n        ],\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[a("strong",[e._v("删除数据卷")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume rm my-vol")])]),e._v(" "),a("p",[e._v("被容器引用的数据卷无法被删除")]),e._v(" "),a("p",[a("strong",[e._v("清理无主的数据卷")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume prune")])]),e._v(" "),a("ul",[a("li",[e._v("挂载主机目录")])]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("--mount")]),e._v(" 标记可以指定挂载一个本地主机的目录到容器中去。")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 80:80 --name web --mount type=bind,source=/src/webapp,target=/usr/share/nginx/html nginx")])]),e._v(" "),a("h2",{attrs:{id:"网络管理命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络管理命令"}},[e._v("#")]),e._v(" 网络管理命令")]),e._v(" "),a("p",[e._v("通过 "),a("code",[e._v("-p")]),e._v(" 或者 "),a("code",[e._v("-P")]),e._v(" 参数指定端口映射")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("-P")]),e._v(" 时，Docker 会"),a("strong",[e._v("随机")]),e._v("映射一个主机端口到内部容器端口，支持多端口映射，如：")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 80:80 -p 443:443 nginx")])]),e._v(" "),a("p",[a("strong",[e._v("新建网络")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker network create -d bridge my-net")])]),e._v(" "),a("p",[a("strong",[e._v("查看网络")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker network ls")])]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("--network")]),e._v(" 使用网络，使用相同的网络，容器之间就可以实现网络互通")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -it --rm --name busybox1 --network my-net busybox sh")])]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -it --rm --name busybox2 --network my-net busybox sh")])]),e._v(" "),a("p",[e._v("我们启动这两个容器之后，我们用 "),a("code",[e._v("ping")]),e._v(" 工具去测试，可以发现 "),a("code",[e._v("busybox1")]),e._v(" 和 "),a("code",[e._v("busybox2")]),e._v(" 两个容器就可以网络互通了。")]),e._v(" "),a("blockquote",[a("p",[e._v("如果在相同网络中继续接入新的容器，那么在新接入容器中是可以通过 "),a("code",[e._v("busybox1")]),e._v(" 的容器名称来 "),a("code",[e._v("ping")]),e._v(" 通的。这是因为新容器都注册到了指定的 "),a("code",[e._v("Docker DNS")]),e._v(" 服务，所以相同网络中的容器可以解析其他容器的名称。")])]),e._v(" "),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[e._v("#")]),e._v(" Dockerfile")]),e._v(" "),a("p",[e._v("Dockerfile 是一个文本文件，其内包含了一条条的 指令(Instruction)，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。")]),e._v(" "),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM nginx\nRUN echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[a("code",[e._v("FROM")]),e._v(" 是指定基础镜像")]),e._v(" "),a("blockquote",[a("p",[e._v("除了选择现有镜像为基础镜像外，Docker 还存在一个特殊的镜像，名为 scratch。这个镜像是虚拟的概念，并不实际存在，它表示一个空白的镜像。")])]),e._v(" "),a("p",[a("code",[e._v("RUN")]),e._v(" 指令是用来执行命令行命令的，其用法有两种")]),e._v(" "),a("ul",[a("li",[e._v("shell 格式 "),a("code",[e._v("RUN <命令>")])]),e._v(" "),a("li",[e._v("exec 格式 "),a("code",[e._v('RUN ["可执行文件", "参数1", "参数2"]')]),e._v("，这更像是函数调用中的格式。")])]),e._v(" "),a("p",[e._v("需要注意的是每一个 "),a("code",[e._v("RUN")]),e._v(" 行为都会新建立一层")]),e._v(" "),a("blockquote",[a("p",[e._v("Union FS 是有最大层数限制的，比如 AUFS，曾经是最大不得超过 42 层，现在是不得超过 127 层。")])]),e._v(" "),a("blockquote",[a("p",[e._v("在撰写 Dockerfile 的时候，要经常提醒自己，这并不是在写 Shell 脚本，而是在定义每一层该如何构建。")])]),e._v(" "),a("p",[e._v("创建好 Dockerfile 之后我们可以使用 "),a("code",[e._v("docker build")]),e._v(" 命令来构建镜像")]),e._v(" "),a("p",[e._v("使用方法")]),e._v(" "),a("blockquote",[a("p",[e._v("docker build [选项] <上下文路径/URL/->")])]),e._v(" "),a("p",[e._v("在 Dockerfile 文件所在目录执行：")]),e._v(" "),a("blockquote",[a("p",[e._v("docker build -t nginx:v3 .")])]),e._v(" "),a("p",[e._v("运行结果：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Sending build context to Docker daemon  2.048kB\nStep 1/2 : FROM nginx\n ---\x3e f8f4ffc8092c\nStep 2/2 : RUN echo '<h1>Hello, Docker!</h1>' > /usr/share/nginx/html/index.html\n ---\x3e Running in 5ae980ceac7b\nRemoving intermediate container 5ae980ceac7b\n ---\x3e 571730ede8fe\nSuccessfully built 571730ede8fe\nSuccessfully tagged nginx:v3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[a("code",[e._v("COPY")]),e._v(" 指令")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY [--chown=<user>:<group>] <源路径>... <目标路径>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("COPY")]),e._v(" 将从构建上下文目录中 "),a("code",[e._v("源路径")]),e._v(" 的文件/目录复制到新的一层的镜像内的 "),a("code",[e._v("目标路径")]),e._v(" 位置。示例：")]),e._v(" "),a("blockquote",[a("p",[e._v("COPY package.json /usr/src/app/")])]),e._v(" "),a("p",[a("code",[e._v("ADD")]),e._v(" 指令和 "),a("code",[e._v("COPY")]),e._v(" 指令基本一致。如果 "),a("code",[e._v("源路径")]),e._v(" 为一个 tar 压缩文件的话，压缩格式为 gzip, bzip2 以及 xz 的情况下，ADD 指令将会自动解压缩这个压缩文件到 "),a("code",[e._v("目标路径")]),e._v(" 去。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM scratch\nADD ubuntu-xenial-core-cloudimg-amd64-root.tar.gz /\n...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("blockquote",[a("p",[e._v("对于容器而言，其启动程序就是容器应用进程，容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出，其它辅助进程不是它需要关心的东西。")])]),e._v(" "),a("p",[a("code",[e._v("CMD")]),e._v(" 指令和 "),a("code",[e._v("RUN")]),e._v(" 指令格式相似")]),e._v(" "),a("ul",[a("li",[e._v("shell 格式：CMD <命令>")]),e._v(" "),a("li",[e._v('exec 格式：CMD ["可执行文件", "参数1", "参数2"...]')]),e._v(" "),a("li",[e._v('参数列表格式：CMD ["参数1", "参数2"...]。在指定了 ENTRYPOINT 指令后，用 CMD 指定具体的参数。')])]),e._v(" "),a("p",[e._v("示例：")]),e._v(" "),a("blockquote",[a("p",[e._v('CMD ["nginx", "-g", "daemon off;"]')])]),e._v(" "),a("p",[a("code",[e._v("ENV")]),e._v(" 指令设置环境变量")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- ENV <key> <value>\n- ENV <key1>=<value1> <key2>=<value2>...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENV VERSION=1.0 DEBUG=on \\\n    NAME="Happy Feet"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("这里我们定义了 "),a("code",[e._v("VERSION")]),e._v(" "),a("code",[e._v("DEBUG")]),e._v(" "),a("code",[e._v("NAME")]),e._v(" 这些环境变量，后面的指令当中我们可以用 "),a("code",[e._v("$VERSION")]),e._v(" "),a("code",[e._v("$DEBUG")]),e._v(" "),a("code",[e._v("$NAME")]),e._v(" 来使用前面定义的环境变量")]),e._v(" "),a("p",[a("code",[e._v("ARG")]),e._v(" 指令构建参数")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ARG <参数名>[=<默认值>]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("ARG")]),e._v(" 指令有生效范围，只作用于下一个阶段")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 只在 FROM 中生效\nARG DOCKER_USERNAME=library\n\nFROM ${DOCKER_USERNAME}/alpine\n\n# 要想在 FROM 之后使用，必须再次指定\nARG DOCKER_USERNAME=library\n\nRUN set -x ; echo ${DOCKER_USERNAME}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[a("code",[e._v("VOLUME")]),e._v(" 指令定义匿名卷")]),e._v(" "),a("blockquote",[a("p",[e._v("VOLUME <路径>")])]),e._v(" "),a("p",[e._v("示例：")]),e._v(" "),a("blockquote",[a("p",[e._v("VOLUME /data")])]),e._v(" "),a("p",[a("code",[e._v("EXPOSE")]),e._v(" 声明端口")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXPOSE <端口1> [<端口2>...]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("WORKDIR")]),e._v(" 指定工作目录")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WORKDIR <工作目录路径>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("使用 "),a("code",[e._v("WORKDIR")]),e._v(" 切换工作目录")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WORKDIR /a\nWORKDIR b\nWORKDIR c\n\nRUN pwd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("RUN pwd 的工作目录为 /a/b/c")]),e._v(" "),a("p",[a("code",[e._v("USER")]),e._v(" 指定当前用户")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("USER <用户名>[:<用户组>]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("HEALTHCHECK")]),e._v(" 健康检查")]),e._v(" "),a("p",[a("code",[e._v("LABEL")]),e._v(" 指令给镜像添加一些元数据")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LABEL <key>=<value> <key>=<value> <key>=<value> ...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("示例：")]),e._v(" "),a("blockquote",[a("p",[e._v('LABEL org.opencontainers.image.authors="xiaoping"')])]),e._v(" "),a("p",[a("code",[e._v("SHELL")]),e._v(" 指令指定 "),a("code",[e._v("RUN")]),e._v(" "),a("code",[e._v("ENTRYPOINT")]),e._v(" "),a("code",[e._v("CMD")]),e._v(" 指令的 shell，Linux 中默认为 "),a("code",[e._v('["/bin/sh", "-c"]')])]),e._v(" "),a("p",[a("code",[e._v("ONBUILD")]),e._v(" 指令")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ONBUILD <其它指令>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("ONBUILD 是一个特殊的指令，它后面跟的是其它指令，比如 RUN, COPY 等，而这些指令，在当前镜像构建时并不会被执行。只有当以当前镜像为基础镜像，去构建下一级镜像的时候才会被执行。")])]),e._v(" "),a("h3",{attrs:{id:"多阶段构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多阶段构建"}},[e._v("#")]),e._v(" 多阶段构建")]),e._v(" "),a("p",[e._v("Dockerfile 如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM node:latest AS storefront\nWORKDIR /usr/src/atsea/app/react-app\nCOPY react-app .\nRUN npm install\nRUN npm run build\n\nFROM maven:latest AS appserver\nWORKDIR /usr/src/atsea\nCOPY pom.xml .\nRUN mvn -B -f pom.xml -s /usr/share/maven/ref/settings-docker.xml dependency\n:resolve\nCOPY . .\nRUN mvn -B -s /usr/share/maven/ref/settings-docker.xml package -DskipTests\n\nFROM java:8-jdk-alpine AS production\nRUN adduser -Dh /home/gordon gordon\nWORKDIR /static\nCOPY --from=storefront /usr/src/atsea/app/react-app/build/ .\nWORKDIR /app\nCOPY --from=appserver /usr/src/atsea/target/AtSea-0.0.1-SNAPSHOT.jar .\nENTRYPOINT ["java", "-jar", "/app/AtSea-0.0.1-SNAPSHOT.jar"]\nCMD ["--spring.profiles.active=postgres"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br")])]),a("p",[e._v("Dockerfile中有3个FROM指令。每一个FROM指令构成一个单独的构建阶段。各个阶段在内部从0开始编号。不过，示例中针对每个阶段都定义了便于理解的名字。")]),e._v(" "),a("p",[e._v("阶段0叫作storefront；\n阶段1叫作appserver；\n阶段2叫作production。")]),e._v(" "),a("ul",[a("li",[e._v("storefront阶段拉取了大小超过600MB的node:latest镜像，然后设置了工作目录，复制一些应用代码进去，然后使用2个RUN指令来执行npm操作。这会生成3个镜像层并显著增加镜像大小。指令执行结束后会得到一个比原镜像大得多的镜像，其中包含许多构建工具和少量应用程序代码。")]),e._v(" "),a("li",[e._v("appserver阶段拉取了大小超过700MB的maven:latest镜像。然后通过2个COPY指令和2个RUN指令生成了4个镜像层。这个阶段同样会构建出一个非常大的包含许多构建工具和非常少量应用程序代码的镜像。")]),e._v(" "),a("li",[e._v("production阶段拉取java:8-jdk-alpine镜像，这个镜像大约150MB，明显小于前两个构建阶段用到的node和maven镜像。这个阶段会创建一个用户，设置工作目录，从storefront阶段生成的镜像中复制一些应用代码过来。之后，设置一个不同的工作目录，然后从appserver阶段生成的镜像中复制应用相关的代码。最后，production设置当前应用程序为容器启动时的主程序。\n重点在于COPY --from指令，它从之前的阶段构建的镜像中仅复制生产环境相关的应用代码，而不会复制生产环境不需要的构件。\n还有一点也很重要，多阶段构建这种方式仅用到了一个Dockerfile，并且docker image build命令不需要增加额外参数。")])]),e._v(" "),a("h2",{attrs:{id:"docker-manifest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-manifest"}},[e._v("#")]),e._v(" Docker manifest")]),e._v(" "),a("p",[e._v("为了支持多种系统架构的 Docker 镜像")]),e._v(" "),a("blockquote",[a("p",[e._v("Manifest列表是可选的——在没有Manifest列表的情况下，镜像仓库服务会返回普通的Manifest。")])]),e._v(" "),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),a("blockquote",[a("p",[e._v("部署和管理繁多的服务是困难的。而这正是Docker Compose要解决的问题。")])]),e._v(" "),a("p",[e._v("这里就不贴 "),a("code",[e._v("docker-compose.yml")]),e._v(" 文件了，我们还是直接玩一下")]),e._v(" "),a("p",[e._v("获取 "),a("code",[e._v("docker-compose.yml")]),e._v(" 文件")]),e._v(" "),a("blockquote",[a("p",[e._v("git clone https://github.com/docker/awesome-compose.git")])]),e._v(" "),a("p",[e._v("切换目录到 "),a("code",[e._v("wordpress-mysql")])]),e._v(" "),a("blockquote",[a("p",[e._v("cd awesome-compose/wordpress-mysql")])]),e._v(" "),a("p",[e._v("启动工程， "),a("code",[e._v("-d")]),e._v(" 后台启动")]),e._v(" "),a("blockquote",[a("p",[e._v("docker-compose up -d")])]),e._v(" "),a("p",[e._v("这时候我们这个应用就启动起来了，我们再回过头来观察一下 "),a("code",[e._v("docker-compose.yml")]),e._v(" 文件，"),a("code",[e._v("services")]),e._v(" 定义了工程的服务，"),a("code",[e._v("volumes")]),e._v(" 定义了数据卷")]),e._v(" "),a("p",[e._v("列出 docker-compose 应用")]),e._v(" "),a("blockquote",[a("p",[e._v("docker-compose ps")])]),e._v(" "),a("p",[e._v("关闭工程")]),e._v(" "),a("blockquote",[a("p",[e._v("docker-compose stop")])]),e._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),a("h3",{attrs:{id:"拷贝容器中的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝容器中的文件"}},[e._v("#")]),e._v(" 拷贝容器中的文件")]),e._v(" "),a("p",[e._v("用于容器与主机之间的数据拷贝")]),e._v(" "),a("blockquote",[a("p",[e._v("docker cp")])]),e._v(" "),a("p",[e._v("示例：")]),e._v(" "),a("blockquote",[a("p",[e._v("docker cp  96f7f14e99ab:/www /tmp/")])]),e._v(" "),a("h3",{attrs:{id:"查看启动的容器占的端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看启动的容器占的端口"}},[e._v("#")]),e._v(" 查看启动的容器占的端口")]),e._v(" "),a("blockquote",[a("p",[e._v("docker container inspect <容器ID> | grep tcp")])]),e._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.mirror.docker-practice.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Docker从入门到实践》"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/30486354/",target:"_blank",rel:"noopener noreferrer"}},[e._v("《深入浅出Docker》"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);