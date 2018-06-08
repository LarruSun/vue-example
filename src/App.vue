<template>
  <div id="app">
    <ul>
      <li v-for="item in navData">
        <router-link :to='item.path'>{{item.title}}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
    data(){
      return{
        navData:[
          {title:'二维码',path:'/ewm',name:'ewm'},
          {title:'element城市二级联动',path:'/elementCity',name:'elementCity'},
        ]
      }
    }
}
</script>

<style scoped>

</style>
