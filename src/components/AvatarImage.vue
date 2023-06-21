<script setup>
import { diceUrl } from '../stores/avatarStore'
import Button from 'primevue/button'

const downloadImage = async () => {
  const response = await fetch(diceUrl.value)
  const blobImage = await response.blob()

  const url = URL.createObjectURL(blobImage)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'Avatar.svg'

  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  window.URL.revokeObjectURL(url)
}
</script>

<template>
  <div><img :src="diceUrl" width="500" /></div>
  <Button @click="downloadImage">Download Avatar.svg</Button>
</template>

<style scoped></style>
