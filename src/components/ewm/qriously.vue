<template>
    <div id="qriously">
        <!-- npm install vue-qriously --save-dev -->
        
        <!-- main.js 入口文件
        import Vue from 'vue'
        import VueQriously from 'vue-qriously'
        Vue.use(VueQriously) -->

        <!-- 二维码生成的地方 -->
        <qriously style="text-align:center" id="qriously" :value="initQCode"  :size="200"/>
        <qriously style="text-align:center" id="qriously" :value="initQCode"  :size="200"/>
        <qriously style="text-align:center" id="qriously" :value="initQCode"  :size="200"/>
        <qriously style="text-align:center" id="qriously" :value="initQCode"  :size="200"/>
        <qriously style="text-align:center" id="qriously" :value="initQCode"  :size="200"/>
            <!-- 下载二维码的按钮 -->
        <p  style="text-align:center" >
                <a id="downloadewm" download="二维码.jpg">下载二维码</a>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
             initQCode:'https://blog.csdn.net/luoyali/article/details/79262778',
        }
    },
    methods:{
        scrollUpdata(){
            // 文档高度-窗口大小=可滚动距离： document.body.clientHeight - window.innerHeight = window.scrollY  因此当:滚动高度大>=文档高度-窗口大小说明到底了
            if(window.scrollY>= document.body.clientHeight-window.innerHeight){
                console.log('到底部了可以进行数据请求');
            }
        }
    },
    mounted(){
        // 绑定滚动事件handleScroll()
      window.addEventListener('scroll', this.scrollUpdata); 
      //生成下载的连接  动态给A标签添加下载事件
      var box = document.getElementById('qriously');
      var canvas=box.getElementsByTagName('canvas')[0];  
      try {//解决IE转base64时缓存不足，canvas转blob下载  
          var blob = canvas.msToBlob();  
          navigator.msSaveBlob(blob, 'qriously.jpg');  
      } catch (e) {//如果为其他浏览器，使用base64转码下载  
              var url = canvas.toDataURL('image/jpg');
              var downloadewm=document.getElementById('downloadewm');
              downloadewm.href=url
      }
    },
}
</script>

