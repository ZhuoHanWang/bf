<template>
    <!-- 设置地图，那个url就是地图的相对路径，src路径都可以省略 -->
    <div class="bg-[url('assets/bfback.png')] bg-cover bg-center h-screen text-white p-2 flex overflow-hidden">
    <!-- <div v-if="data" class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-2 flex overflow-hidden"> -->
        <!-- 左边内容 -->
      <div class="w-1/4 mr-2 flex flex-col">
          <!-- 左上内容 -->
        <div class="custom-height-28 box-border mt-2 ">
          <!-- 联邦学习运行前的准备参数设置  -->
          <dv-border-box10>
            <RunParam class="h-full w-full" />
          </dv-border-box10>
        </div>
        
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue"
//   import AttackBehavior from './components/attack-behavior.vue'
//   import WorldMap from "./components/world-map.vue"
//   import AgentAlive from './components/agent-alive.vue'
//   import TotalData from './components/total-data.vue'
//   import NewAttack from './components/new-attack.vue'
//   import WeekPortScan from './components/week-port-scan.vue'
//   // import AddUnknownScan from './components/add-unknown-scan.vue'
//   import AddUnknownScan from './components/add-unknown-scan-test.vue'
//   import SampleDownload from './components/sample-download.vue'
//   import AttackServiceType from './components/attack-service-type.vue'
//   import AttackCountry from './components/attack-country.vue'
  import RunParam from "./components/left/up/run-param.vue"
  import ClientParam from "./components/left/mid/cli-param.vue"
  import ServerParam from "./components/left/down/serv-param.vue"


  // 第三方的库，kjg是一个显示框，各种显示图标的库   

  // 生成与后端交互的id的   
  import { nanoid } from 'nanoid'
  
  
  // const ip_source = "ws://172.22.105.146:8083/websocket/LiveIpAddressSerach"//实时IP
  let id: string = ""
  // console.log('ip_source', ip_source)
  
  const generateId = () => {
    id = nanoid()
  }
  
  generateId()
  
  // const data: any = ref(null)
  
  // const loadData = async () => {
  //   data.value = await getTodayScanTop5()
  //   console.log('data', data.value)
  // }
  
  // loadData()
  
  
  //   created() {
  //     // setInterval(() => {
  //     //   location.reload(); // 调用 location.reload() 来刷新页面
  //     // }, 180000); // 设置刷新间隔，单位为毫秒（这里是三分钟）
  //     this.loadData()
  //   },
  //     loadData() {
  //       const data = ref(null)
  //       data.value = getVisualization();
  //       console.log('data', data.value);
  //     }
  // },
  
  </script>
  
  <style>
  .ScrollBoard {
    border-radius: 10px;
  }
  
  /* 在你的 CSS 文件中或者在 style 标签中添加以下样式 */
  .custom-height-40 {
    height: 40%;
  }
  
  .custom-height-28 {
    height: 28%;
  }
  .custom-height-20 {
    height: 20%;
  }
  
  .custom-height-35 {
    height: 35%;
  }
  .custom-height-15 {
    height: 15%;
  }
  
  </style>