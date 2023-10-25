<script setup lang="ts">
import Image from '../types/image'

const emit = defineEmits<{
  (event: 'close'): void;
}>()
const props = defineProps<{ image: Image }>()

</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div class="modal-overlay" @click="emit('close')" />
    </transition>
  </teleport>
  <teleport to="body">
      <div class="fixed center z-901">
          <transition name="modal">
              <div>
                  <div class="bg-green rounded-t-md dark:bg-purple-700">
                      <div class="text-right mr-2">
                        <button title="Закрыть окно" class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" @click.prevent="() => { emit('close') }">
                            <strong class="text-xl align-center cursor-pointer alert-del">&times;</strong>
                        </button>
                      </div>
                  </div>
                  <div class="card-container rounded-b-md bg-gray-200 dark:bg-gray-500">
                    <label class="font-semibold mb-1">{{ props.image.name }}</label>
                    <img class="max-h-40 max-w-40" :src="props.image.link">
                    <p class="mb-1">{{ props.image.date }}</p>
                    <p class="mb-1">{{ props.image.description }}</p>
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
    z-index: 900;
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