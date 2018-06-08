<template>
    <div id="elementCity"> 
        <!-- npm install element-china-area-data -S -->

        <!--selectCity 后面不带括号  :options="options"绑定的数据 -->
      <!--默认选择中 selectedOptions里面的值和options里面的value相对应便可选中-->
      <el-cascader style="margin-left:40%" size="large" :options="options"  v-model="selectedOptions" @change='selectCity' class="form-input" placeholder="请选择地区"></el-cascader>



    </div>    
</template>

<script>
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'

export default {
    data(){
        return{
            // 二级联动数据
            options: regionData,
            selectedOptions:['110000','110100','110101'],
        }
    },
    created(){
        // 默认选择城市 获取广东省深圳市宝安区的code放到绑定的数据中
        var sheng=TextToCode['广东省'].code
        var shi=TextToCode['广东省']['深圳市'].code
        var qu=TextToCode['广东省']['深圳市']['宝安区'].code
        this.selectedOptions=[sheng,shi,qu]
    },
    methods: {
      //所选择的的二级联动城市
      selectCity(ciytCode){  
        // provinceAndCityData 是省市二级联动数据（不带“全部”选项）
        // regionData 是省市区三级联动数据（不带“全部”选项）

        // provinceAndCityDataPlus 是省市区三级联动数据（带“全部”选项）
        // regionDataPlus 是省市区三级联动数据（带“全部”选项）
        
        // "全部" 选项绑定的value是空字符串""
        // CodeToText 是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
        // TextToCode 是个大对象，属性是汉字，属性值是区域码 用法例如：TextToCode['北京市'].code输出110000,TextToCode['北京市']['市辖区'].code输出110100,TextToCode['北京市']['市辖区']['朝阳区'].code输出110105
        console.log(ciytCode);
        console.log(CodeToText[ciytCode[0]]);
        console.log(CodeToText[ciytCode[1]]);
        console.log(CodeToText[ciytCode[2]]);

      },
    },
}
</script>

<style>

</style>


