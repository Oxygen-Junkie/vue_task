<script setup lang="ts">
import Post from '../types/post'
import Reply from '../types/reply'

const props = defineProps<{ reply: Reply; noReplying?: boolean }>()
const localReply = props.reply
const showReplyForm = ref(false)
</script>

<template>
  <p>{{ localReply.comment }}</p>
  <button v-if="!props.noReplying" title="Оставить отзыв" @click="() => { showReplyForm = true}">Оставить отзыв</button>
  <reply v-for="reply in localReply.childReplies" :reply="reply" :noReplying="true" />
  <createReply_modal v-if="showReplyForm && !props.noReplying" @close="() => { showReplyForm = false }" @postReply="(reply: Reply) => { localReply.childReplies.push(reply); showReplyForm = false; }" />
</template>
