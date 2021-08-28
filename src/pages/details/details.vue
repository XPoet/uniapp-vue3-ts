<template>
  <view class="details-container">
    <view class="question-title">
      title: {{ question.question }}
    </view>
    <view class="question-answer">
      answer: {{ question.answer }}
    </view>
  </view>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
} from "vue";
import {
  useStore
} from "vuex";

export default defineComponent({
  name: 'details',
  setup() {
    const store = useStore()
    const question = computed(() => store.getters.targetQuestion)
    return {
      question
    }
  }
})
</script>

<style lang="scss">
@import "details";
</style>
