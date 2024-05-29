<template>
  <div class="flex justify-center items-center ">
   <Decoration11 style="width:180px;height:50px;" >
        <div color-green font-600 bg="~ dark/0" >
          服务端的参数设置
        </div>
    </Decoration11>
    </div>
  <!-- <div class="pt-3 text-center ">【攻击行为统计】</div> -->
      <ScrollRankingBoard :config="config" style="width:90%;height:68%"  class="pt-1 ml-5"/>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getAttackTopData } from '../api/AttackTop'
import { AttackTopData } from '@/ts/types'
import { ScrollRankingBoard, Decoration11 } from '@kjgl77/datav-vue3'

let attackData = ref <AttackTopData[]> ([])

const config = ref({
  data: [{}],
  unit: '次'
})
console.log('???')

onMounted(() => {
  const timeNow = Math.floor(new Date().getTime() / 1000);
  const time7DaysAgo = timeNow - (7 * 24 * 3600);
  getAttackTopData(30, time7DaysAgo,timeNow ).then(res => {
    console.log('attackDatares', res)
    attackData.value = res.data
    console.log('attackData.value', attackData.value)
    config.value.data = attackData.value.map(entry => {
      const location = [entry.country, entry.region, entry.city].filter(Boolean).join('-') || '未知归属地'
      const name = `${entry.ip}[${location}]`
      return {
        name,
        value: entry.total
      }
    })
    // console.log(' config.value.data', config.value.data)
  })
})
</script>

<style>

</style>