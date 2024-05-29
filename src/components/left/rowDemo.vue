<template>
    <div>
        <!-- 这里是左侧页面的一行，做成插槽方便控制，左侧为图标，中间为提示文本，右侧为选择参数 -->


        <!-- 这里是显示图片的插槽 -->
        <div class="image-display">
            <slot name="image"></slot>
        </div>
        <!-- 这是中间那条线 -->
        <div small-bg>
            <Decoration8 :reverse="true" style="width:300px;height:50px;" />
        </div>
        <!-- 默认的颜色是蓝色 -->
        <Button @click="console.log('click')" border="Border3">
            <!-- 这里放按钮的名字 -->
            <slot name="buttonName"></slot>
        </Button>
    </div>
</template>

<script setup lang="ts">
import { Decoration8 } from '@kjgl77/datav-vue3'
import { Button } from '@kjgl77/datav-vue3'
</script>