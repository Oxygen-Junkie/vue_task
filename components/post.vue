<script setup lang="ts">
import Post from '~/types/post'
import Image_modal from './image_modal.vue';
import Reply from '~/types/reply';

const props = defineProps<{ post: Post }>()
const localPost = props.post
const showImage = ref(false)
const showReplyForm = ref(false)

</script>

<template>
  <p>{{ localPost.title }}<p/>
  <img :src="localPost.image.link" @click="() => { showImage = true} ">
  <p>{{ localPost.content }}</p>
  <button title="Оставить отзыв" @click="() => { showReplyForm = true}">Оставить отзыв</button>
  <reply v-for="reply in localPost.replies" :reply="reply" />
  <image_modal v-if="showImage" @close="() => { showImage = false }" />
  <createReply_modal v-if="showReplyForm" @close="() => { showReplyForm = false }" @postReply="(reply: Reply) => { localPost.replies.push(reply); showReplyForm = false; }" />
</template>
