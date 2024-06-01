<template>
  <div>
    <div class="flex pt-2">
      <!-- 将 dv-decoration-11 居左显示 -->
      <dv-decoration-11 style="width:400px;height:60px;" class="flex-shrink-0">
        <div class="text-white text-xs font-thin bg-black bg-opacity-50">
          联邦学习运行前的参数准备设置
        </div>
      </dv-decoration-11>
    </div>
    <rowDemo>
      <!-- 这里放的是logo -->
      <template v-slot:image>
        <img src="C:\Users\wangzhuohan\Desktop\孙哲实验室\bf\src\assets\imgs\模型.png" alt="Image Alt Text">
      </template>
      <!-- 这里放的是按钮的名字 -->
      <template v-slot:buttonName>
        CNN
      </template>
    </rowDemo>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts';
import rowDemo from "../rowDemo.vue"



</script>