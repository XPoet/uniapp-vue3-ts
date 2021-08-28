<template>
  <view class="index-container">
    <tag-list/>
  </view>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import tagList from '../../components/tag-list/tag-list.vue'

export default defineComponent({

  name: 'index',

  components: {
    tagList
  },

  setup() {
    return {
      title: "index",
    }
  },
})
</script>

<style lang="scss">

.index-container {

}

</style>
