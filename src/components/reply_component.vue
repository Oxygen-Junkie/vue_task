<script setup lang="ts">
import Post from '../types/post'
import Reply from '../types/reply'
import reply_component from './reply_component.vue'
import createReply_modal from './createReply_modal.vue'
import { ref } from 'vue';

const props = defineProps<{ reply: Reply; noReplying?: boolean }>()
const localReply = props.reply
const showReplyForm = ref(false)
</script>

<template>
  <div class="p-3 rounded bg-slate-300 mb-3">
    <p class="mb-1">{{ localReply.comment }}</p>
    <button v-if="!props.noReplying" title="Оставить отзыв под этим отзывом" class="inline-flex text-center text-white p-1 font-semibold text-sm align-baseline leading-none rounded bg-yellow-500" @click="() => { showReplyForm = true}">Оставить отзыв под этим отзывом</button>
    <reply_component v-for="reply in localReply.childReplies" :reply="reply" :noReplying="true" />
    <createReply_modal v-if="showReplyForm && !props.noReplying" @close="() => { showReplyForm = false }" @postReply="(reply: Reply) => { localReply.childReplies.push(reply); showReplyForm = false; }" />
  </div>
</template>
