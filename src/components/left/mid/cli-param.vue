<template>
  <div>
    <div class="flex justify-center items-center pt-2">
      <dv-decoration-11 style="width:100px;height:20px;" >
          <div color-green font-600 bg="~ dark/0" >
            客户端的参数设置
          </div>
      </dv-decoration-11>
      <rowDemo>
        <!-- 这里放的是logo -->
        <template v-slot:image>
          <img src="C:\Users\wangzhuohan\Desktop\孙哲实验室\bf\src\assets\imgs\模型.png" alt="Image Alt Text">
        </template>
        <!-- 这里放的是按钮的名字 -->
        <template v-slot:buttonName>
          2
        </template>
      </rowDemo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts';
import rowDemo from "../rowDemo.vue"



</script>