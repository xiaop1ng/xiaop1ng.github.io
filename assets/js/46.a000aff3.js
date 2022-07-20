(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{343:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"kubernetes-集群搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-集群搭建"}},[s._v("#")]),s._v(" kubernetes 集群搭建")]),s._v(" "),t("p",[t("strong",[s._v("环境")]),s._v("\n系统："),t("a",{attrs:{href:"http://isoredirect.centos.org/centos/7/isos/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[s._v("centos7"),t("OutboundLink")],1),s._v("\n软件："),t("a",{attrs:{href:"https://k3s.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("k3s"),t("OutboundLink")],1),s._v("\n软件版本："),t("a",{attrs:{href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.7-rc2%2Bk3s2",target:"_blank",rel:"noopener noreferrer"}},[s._v("v1.21.7-rc2+k3s2"),t("OutboundLink")],1),s._v("\n部署模式：1个主节点 2个工作节点")]),s._v(" "),t("h2",{attrs:{id:"安装-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 docker")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在所有节点安装 docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 yum 工具包")]),s._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" yum-utils\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装前置依赖")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y https://mirrors.tuna.tsinghua.edu.cn/centos/7/extras/x86_64/Packages/slirp4netns-0.4.3-4.el7_8.x86_64.rpm yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y https://mirrors.tuna.tsinghua.edu.cn/centos/7/extras/x86_64/Packages/fuse-overlayfs-0.7.2-6.el7_8.x86_64.rpm\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置yum源")]),s._v("\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/7/g'")]),s._v(" /etc/yum.repos.d/docker-ce.repo \nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-rootless-extras -y \nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io -y\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\nsystemctl start docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"安装-k8s-之前的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-k8s-之前的配置"}},[s._v("#")]),s._v(" 安装 k8s 之前的配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在所有节点上执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭swap")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" swapoff -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop firewalld "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl disable firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置SELinux 模式为宽容模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" setenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^SELINUX=enforcing$/SELINUX=permissive/'")]),s._v(" /etc/selinux/config\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 iptables 参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/modules-load.d/k8s.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\nbr_netfilter\nEOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/sysctl.d/k8s.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'EOF'\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sysctl --system\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装下载工具")]),s._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y https://rpm.rancher.io/k3s/stable/common/centos/7/noarch/k3s-selinux-0.4-1.el7.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"安装k3s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装k3s"}},[s._v("#")]),s._v(" 安装k3s")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在所有节点上执行，根据实际情况替换ip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改hosts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# k3s节点"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.7.100 k3s-node-1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.7.101 k3s-node-2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.7.102 k3s-node-3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",[t("li",[s._v("主节点安装启动")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在主节点上执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/lib/rancher/k3s/agent/images/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/k3s_package/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/k3s_package/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/k3s-io/k3s/releases/download/v1.21.7-rc2%2Bk3s2/k3s-airgap-images-amd64.tar\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/k3s-io/k3s/releases/download/v1.21.7-rc2%2Bk3s2/k3s\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/k3s_package/k3s-airgap-images-amd64.tar /var/lib/rancher/k3s/agent/images/ \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/k3s_package/k3s /usr/local/bin/k3s\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/k3s\nk3s -v\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_SKIP_DOWNLOAD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_TOKEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_EXEC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--disable servicelb --disable traefik --https-listen-port 10443 --docker"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载执行脚本，无反应的情况可以手动下载下来放到服务器上")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sfL https://get.k3s.io "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/k3s_package/install_k3s.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以主节点运行k3s")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /opt/k3s_package/install_k3s.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("查看主节点 token")]),s._v(" "),t("blockquote",[t("p",[s._v("[root@k3s-node-1 k3s_package]# cat /var/lib/rancher/k3s/server/token\nK10117300ae8995cd3a7cabc0ccb52576442f5fa8d2f369ee8ad62c70f3ba6897fb::server:a76c4542cf3ca0919ae74ea5cdef323d")])]),s._v(" "),t("p",[s._v("将 token 赋值到从节点的 K3S_TOKEN")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("从节点安装启动")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在从节点上执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/lib/rancher/k3s/agent/images/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /opt/k3s_package/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/k3s_package/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/k3s-io/k3s/releases/download/v1.21.7-rc2%2Bk3s2/k3s-airgap-images-amd64.tar\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/k3s-io/k3s/releases/download/v1.21.7-rc2%2Bk3s2/k3s\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/k3s_package/k3s-airgap-images-amd64.tar /var/lib/rancher/k3s/agent/images/ \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/k3s_package/k3s /usr/local/bin/k3s\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/k3s\nk3s -v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载执行脚本，无反应的情况可以手动下载下来放到服务器上")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sfL https://get.k3s.io "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/k3s_package/install_k3s.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以工作节点运行k3s")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /opt/k3s_package/install_k3s.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_K3S_SKIP_DOWNLOAD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://k3s-node-1:10443 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("K3S_TOKEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("K10117300ae8995cd3a7cabc0ccb52576442f5fa8d2f369ee8ad62c70f3ba6897fb::server:a76c4542cf3ca0919ae74ea5cdef323d "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查看 k3s 状态")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 主节点 k3s 状态\nsystemctl status k3s\n# 从节点 k3s 状态\nsystemctl status k3s-agent\n# 查看所有节点信息\nkubectl get nodes\n\nNAME         STATUS   ROLES                  AGE    VERSION\nk3s-node-1   Ready    control-plane,master   36m    v1.21.7-rc2+k3s2\nk3s-node-3   Ready    <none>                 116s   v1.21.7-rc2+k3s2\nk3s-node-2   Ready    <none>                 119s   v1.21.7-rc2+k3s2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[s._v("#")]),s._v(" Link")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"}},[s._v("k8s中文文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.rancher.cn/docs/k3s/_index",target:"_blank",rel:"noopener noreferrer"}},[s._v("k3s中文文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://k8slens.dev/",target:"_blank",rel:"noopener noreferrer"}},[s._v("lens工具"),t("OutboundLink")],1),s._v("：可视化的k8s管理工具")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://labs.play-with-k8s.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("playWithK8s"),t("OutboundLink")],1),s._v("：在线k8s实验环境")])])])}),[],!1,null,null,null);a.default=e.exports}}]);