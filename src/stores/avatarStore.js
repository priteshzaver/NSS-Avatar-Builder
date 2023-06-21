import { computed, ref } from 'vue'

export const userSelectedOptions = ref({
  body: null,
  clothingColor: '#000000',
  eyes: null,
  facialHair: null,
  hair: null,
  hairColor: '#000000',
  mouth: null,
  nose: null,
  skinColor: null
})

export const diceUrl = computed(() => {
  const params = Object.entries(userSelectedOptions.value)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}=${value}`.replace('#', ''))

  let url = `https://api.dicebear.com/6.x/personas/svg?${params.join('&')}`

  if (userSelectedOptions.value.facialHair) {
    url += '&facialHairProbability=100'
  }

  return url
})
