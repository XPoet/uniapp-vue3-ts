<template>
  <view class="questions-container">
    <view class="tag">
      TAG: {{ tag }}
    </view>
    <view class="question-list">
      <view class="question-item" v-for="(item, index) in targetList"
            @click="selectQuestion(item)"
            :key="index"
      >
        {{ item.question }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  toRefs,
  onMounted
} from "vue";
import {
  useStore
} from "vuex";

export default defineComponent({

  name: 'questions',

  setup() {
    const store = useStore()

    const rd = reactive({

      tag: computed(() => store.getters.tag),

      targetList: [],

      getQuestionsByTag(tag) {
        uni.showLoading({ title: '加载中...' })
        uniCloud.callFunction({
          name: 'getQuestionsByTag',
          data: {tag},
          success(res) {
            console.log('getQuestionsByTag - ', res)
            uni.hideLoading()
            if (res && res.success) {
              rd.targetList = res.result.data
            }
          },
          fail(err) {
            console.error(err)
          }
        })
      },

      selectQuestion(questionItem) {
        console.log('questionItem: ', questionItem)
        store.commit('setSelectedQuestion', questionItem)
        uni.navigateTo({
          url: '/pages/details/details'
        })
      }
    })

    onMounted(() => {
      rd.getQuestionsByTag(rd.tag)
    })

    return {
      ...toRefs(rd)
    }
  }
})
</script>

<style lang="scss">
@import "questions";
</style>
