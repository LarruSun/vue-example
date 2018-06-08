
<template>
    <div id="vueqr">
        <!-- <vueqr :bgSrc='src' :logoSrc="src2" text="Hello world!" height="200" width="200"/> -->
        <vueqr style="text-align:center"  id="vueqr" text="https://www.v2ex.com/t/360317" height="200" width="200"/> 
        <!-- 下载二维码的按钮 -->
        <p  style="text-align:center" >
                <a id="downloadewm" download="二维码.jpg">下载二维码(此方法无法下载)</a>
        </p>
    </div>
 

</template>
<script>
import vueqr from 'vue-qr'
    //https://www.v2ex.com/t/360317 
    // npm install vue-qr --save
export default {
    data(){
        return{

        }
    },
    mounted(){
        //     //生成下载的连接  动态给A标签添加下载事件
        // var box = document.getElementById('vueqr');
        // var canvas=box.getElementsByTagName('img')[0];
        // console.log(canvas)  
        // try {//解决IE转base64时缓存不足，canvas转blob下载  
        //     var blob = canvas.msToBlob();  
        //     navigator.msSaveBlob(blob, 'qriously.jpg');  
        // } catch (e) {//如果为其他浏览器，使用base64转码下载  
        //         var url = canvas.toDataURL('image/jpg');
        //         var downloadewm=document.getElementById('downloadewm');
        //         downloadewm.href=url
        // }

    },
    components:{
        vueqr
    }

    
}
</script>

