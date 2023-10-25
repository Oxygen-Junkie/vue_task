<script setup lang="ts">
import { ref } from 'vue';
import Reply from '../types/reply'


const emit = defineEmits<{
  (event: 'close'): void;
  (event: 'postReply', reply: Reply): void;
}>()

const reply = ref(new Reply())
const error = ref(false)

function postReply() {
    if (reply.value.comment) {
        emit('postReply', reply.value)
    }
}
</script>

<template>
    <teleport to="body">
      <div class="fixed center z-999">
        <transition name="modal">
              <div>
                  <div class="bg-green-500 rounded-t-md">
                      <div class="text-right mr-2">
                      <button title="Закрыть окно" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" @click.prevent="() => { emit('close') }">
                          <strong class="text-xl align-center cursor-pointer alert-del">&times;</strong>
                      </button>
                      </div>
                  </div>
                  <div class="card-container rounded-b-md bg-gray-200 dark:bg-gray-500">
                      <div v-if="error" class="relative text-red-300 px-3 py-3 mb-4 border rounded text-red-darker border-red-dark bg-red-lighter" >
                          Вы не указали текст отзыва
                      </div>
                      <textarea
                        v-model.trim="reply.comment"
                        class="block appearance-none w-full h-50 py-1 px-2 mb-1 text-base leading-normal bg-white text-grey-darker border border-grey rounded"
                        placeholder="Введите текст отзыва"
                      />
                      <button title="Разместить отзыв" class="inline-flex text-center text-white p-1 font-semibold text-sm align-baseline leading-none rounded bg-green-500" @click="postReply()">Разместить отзыв</button>
                  </div>
              </div>
          </transition>
      </div>
    </teleport>
</template>

<style scoped>
.modal-enter-active {
  transition: all .3s ease-out;
}

.modal-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.modal-enter-from,
.modal-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

.card-container {
    padding: 0.2667rem 0.3333rem 0.4rem;
}

.modal-overlay {
    content: '';
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 200;
    opacity: 0.9;
    background: #2c3e50;
    cursor: pointer;
  }

  .fade-enter-active {
    transition: all .3s ease-out;
  }

  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>