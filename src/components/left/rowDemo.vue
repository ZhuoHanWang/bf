<template>
  <div class="flex items-center">
    <!-- 左侧为图标 -->
    <div class="mr-2">
      <slot name="image"></slot>
    </div>
    <div small-bg>
      <dv-decoration8 :reverse="true" style="width:300px;height:50px;" />
    </div>
    <!-- 右侧为选择参数按钮 -->
    <div class="ml-2">
      <dv-button @click="console.log('插槽组件的按钮被按下')" border="Border3">
        <slot name="buttonName"></slot>
      </dv-button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>