<script setup lang="ts">
import { ref } from 'vue'
import Image from '~/types/image'
import Post from '~/types/post'
import post_component from '~/components/post_component.vue'

const posts = ref([
  new Post('Tree 1', new Image('http://localhost:3000/1.jpeg', 'Tree 1 image', 'A photo of tree 1', (new Date()).toString()), 'Such a great tree'),
  new Post('Tree 2', new Image('http://localhost:3000/2.jpeg', 'Tree 2 image', 'A photo of tree 2', (new Date()).toString()), 'Such a wonderful tree'),
  new Post('Tree 3', new Image('http://localhost:3000/3.jpeg', 'Tree 3 image', 'A photo of tree 3', (new Date()).toString()), 'Such a magnificent tree'),
])
</script>

<template>
  <post_component v-for="post in posts" :post="post"/>
</template>
