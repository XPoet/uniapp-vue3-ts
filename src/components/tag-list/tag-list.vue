<template>
  <view class="list-container">
    <ul class="list">
      <li v-for="(item, index) in tagList" :key="index"
          @click="viewAllQuestions(item)"
      >{{ item.number + '、' + item.tagName }}</li>
    </ul>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: 'tag-list',

  setup() {
    const store =  useStore()
    const reactiveData = reactive({
      num: 0,
      tagList: [],
      userList: [],

      addUser() {
        console.log('addUser')
        uniCloud.callFunction({
          name: 'addUser',
          data: {
            name: 'Test' + (++this.num),
            age: ++this.num
          },
          success: (res) => {
            console.log('addUser', res)
          }
        })
      },

      getTagList() {
        uni.showLoading({ title: '加载中'})
        uniCloud.callFunction({
          name: 'getTagList',
          success: (res: any) => {
            console.log('getTagList - ', res)
            if (res.success && res.result) {
              uni.hideLoading()
              this.tagList = res.result.data
            }
          }
        })
      },

      viewAllQuestions(item) {
        store.commit('setSelectedTag', item.tagName)
        uni.navigateTo({
          url: '/pages/questions/questions'
        })
      }
    })

    onMounted(() => {
      reactiveData.getTagList()
    })

    return {
      ...toRefs(reactiveData)
    };
  },
});
</script>

<style lang="scss">
.list-container {
  width: 100%;
  height: 100%;
  border: 2rpx solid deepskyblue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .list {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    li {
      border: 2rpx solid pink;
      padding: 20rpx;
      margin: 20rpx;
    }
  }
}

</style>
