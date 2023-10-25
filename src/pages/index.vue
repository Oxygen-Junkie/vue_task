<script setup lang="ts">
import Image from '../types/image'
import Post from '../types/post'

const posts = ref([
  new Post('Tree 1', new Image('https://localhost:3000/1.jpeg', 'Tree 1 image', 'A photo of tree 1', (new Date()).toString()), 'Such a great tree'),
  new Post('Tree 1', new Image('https://localhost:3000/2.jpeg', 'Tree 2 image', 'A photo of tree 2', (new Date()).toString()), 'Such a wonderful tree'),
  new Post('Tree 1', new Image('https://localhost:3000/3.jpeg', 'Tree 3 image', 'A photo of tree 3', (new Date()).toString()), 'Such a magnificent tree'),
])
</script>

<template>
  <post v-for="post in posts" :post="post"/>
</template>
