<template>
    <div id="index">
        <ul id="ewmNav">
            <li><router-link to='qriously'>qriously生成二维码(带滚动刷新)</router-link></li>
            <li><router-link to='vueqr'>vueqr生成二维码</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scpoed>
     li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .router-link-active{
        color: orange
    }

</style>


