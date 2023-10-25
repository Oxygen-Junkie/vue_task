<script setup lang="ts">
import Post from '~/types/post'
import Reply from '~/types/reply'
import reply_component from './reply_component.vue'
import image_modal from './image_modal.vue'
import createReply_modal from './createReply_modal.vue'
import { ref } from 'vue'

const props = defineProps<{ post: Post }>()
const localPost = props.post
const showImage = ref(false)
const showReplyForm = ref(false)

</script>

<template>
  <div class="flex bg-grey-400 shadow rounded m-5">
    <div>
      <img class="max-w-15 max-h-15 cursor-pointer" :src="localPost.image.link" @click="() => { showImage = true} ">
    </div>
    <div class="text-left">
      <label class="font-semibold mb-1">{{ localPost.title }}</label>
      <p class="mb-1">{{ localPost.content }}</p>
      <button class="inline-flex text-center text-white p-1 font-semibold text-sm align-baseline leading-none rounded bg-green-500" title="Оставить отзыв под этим постом" @click="() => { showReplyForm = true}">Оставить отзыв под этим постом</button>
      <reply_component v-for="reply in localPost.replies" :reply="reply" />
    </div>
  </div>
  <image_modal v-if="showImage" @close="() => { showImage = false }" :image="localPost.image" />
  <createReply_modal v-if="showReplyForm" @close="() => { showReplyForm = false }" @postReply="(reply: Reply) => { localPost.replies.push(reply); showReplyForm = false; }" />
</template>
