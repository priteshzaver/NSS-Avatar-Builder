<script setup>
import { userSelectedOptions } from '../stores/avatarStore'
import ColorPicker from 'primevue/colorpicker'
//import SpeedDial from 'primevue/speeddial'
//import { fa1 } from '@fortawesome/free-solid-svg-icons/fa1'
import Dropdown from 'primevue/dropdown'
import { ref } from 'vue'

const bodyOptions = ref([
  { text: 'Checkered', value: 'checkered' },
  { text: 'Rounded', value: 'rounded' },
  { text: 'Small', value: 'small' },
  { text: 'Squared', value: 'squared' }
])
const eyesOptions = ref([
  { text: 'Glasses', value: 'glasses' },
  { text: 'Happy', value: 'happy' },
  { text: 'Open', value: 'open' },
  { text: 'Sleep', value: 'sleep' },
  { text: 'Sunglasses', value: 'sunglasses' },
  { text: 'Wink', value: 'wink' }
])
const facialHairOptions = ref([
  { text: 'None', value: null },
  { text: 'Full Beard', value: 'beardMustache' },
  { text: 'Goatee', value: 'goatee' },
  { text: 'Pyramid Mustache', value: 'pyramid' },
  { text: 'Walrus Mustache', value: 'walrus' },
  { text: 'Shadow', value: 'shadow' },
  { text: 'Soul Patch', value: 'soulPatch' }
])
const hairOptions = [
  { text: 'Bald', value: 'bald' },
  { text: 'Balding', value: 'balding' },
  { text: 'Beanie', value: 'beanie' },
  { text: 'Bob Cut', value: 'bobCut' },
  { text: 'Bob Cut w/ Bangs', value: 'bobBangs' },
  { text: 'Undercut', value: 'bunUndercut' },
  { text: 'Buzzed', value: 'buzzcut' },
  { text: 'Cap', value: 'cap' },
  { text: 'Curly', value: 'curly' },
  { text: 'Curly Bun', value: 'curlyBun' },
  { text: 'Curly High Top', value: 'curlyHighTop' },
  { text: 'Long', value: 'long' },
  { text: 'Extra Long', value: 'extraLong' },
  { text: 'Fade', value: 'fade' },
  { text: 'Mohawk', value: 'mohawk' },
  { text: 'Pigtails', value: 'pigtails' },
  { text: 'Short Combover', value: 'shortCombover' },
  { text: 'Short Combover w/ Chops', value: 'shortComboverChops' },
  { text: 'Side Shave', value: 'sideShave' },
  { text: 'Bun', value: 'straightBun' }
]
const mouthOptions = [
  { text: 'Big Smile', value: 'bigSmile' },
  { text: 'Frown', value: 'frown' },
  { text: 'Lips', value: 'lips' },
  { text: 'Pacifier', value: 'pacifier' },
  { text: 'Smile', value: 'smile' },
  { text: 'Smirk', value: 'smirk' },
  { text: 'Surprise', value: 'surprise' }
]
const noseOptions = [
  { text: 'Medium Round', value: 'mediumRound' },
  { text: 'Small Round', value: 'smallRound' },
  { text: 'Wrinkles', value: 'wrinkles' }
]
const skinToneOptions = [
  { text: 'Skin Tone 1', value: '#FFDBAC' },
  { text: 'Skin Tone 2', value: '#F1C27D' },
  { text: 'Skin Tone 3', value: '#E0AC69' },
  { text: 'Skin Tone 4', value: '#C68642' },
  { text: 'Skin Tone 5', value: '#8D5524' },
  { text: 'Skin Tone 6', value: '#38160A' }
]
</script>

<template>
  <div class="grid">
    <div class="p-float-label col-6">
      <Dropdown
        v-model="userSelectedOptions.body"
        :options="bodyOptions"
        optionLabel="text"
        placeholder="Body Type"
        showClear
        class="w-full md:w-14rem"
        optionValue="value"
      />
      <label>Body</label>
    </div>
    <div class="p-float-label col-6">
      <Dropdown
        v-model="userSelectedOptions.eyes"
        :options="eyesOptions"
        optionLabel="text"
        placeholder="Eyes"
        showClear
        class="w-full md:w-14rem"
        optionValue="value"
      />
      <label>Eyes</label>
    </div>
    <div class="p-float-label col-6">
      <Dropdown
        v-model="userSelectedOptions.facialHair"
        :options="facialHairOptions"
        optionLabel="text"
        placeholder="Facial Hair"
        showClear
        class="w-full md:w-14rem"
        optionValue="value"
      />
      <label>Facial Hair</label>
    </div>
    <div class="p-float-label col-6">
      <Dropdown
        v-model="userSelectedOptions.hair"
        :options="hairOptions"
        optionLabel="text"
        placeholder="Hair"
        showClear
        class="w-full md:w-14rem"
        optionValue="value"
      />
      <label>Hair</label>
    </div>
    <div class="p-float-label col-6">
      <Dropdown
        v-model="userSelectedOptions.mouth"
        :options="mouthOptions"
        optionLabel="text"
        placeholder="Mouth"
        showClear
        class="w-full md:w-14rem"
        optionValue="value"
      />
      <label>Mouth</label>
    </div>
    <div class="p-float-label col-6">
      <Dropdown
        v-model="userSelectedOptions.nose"
        :options="noseOptions"
        optionLabel="text"
        placeholder="Nose"
        showClear
        class="w-full md:w-14rem"
        optionValue="value"
      />
      <label>Nose</label>
    </div>
    <div class="p-float-label col-6">
      <Dropdown
        v-model="userSelectedOptions.skinColor"
        :options="skinToneOptions"
        optionLabel="text"
        placeholder="Skin Tone"
        showClear
        class="w-full md:w-14rem"
        optionValue="value"
      />
      <label>Skin Tone</label>
    </div>
    <div class="p-float-label">
      <ColorPicker v-model="userSelectedOptions.clothingColor" />
      <label>Clothing Color</label>
    </div>
    <div class="p-float-label">
      <ColorPicker v-model="userSelectedOptions.hairColor" />
      <label>Hair Color</label>
    </div>
  </div>
</template>

<style scoped></style>

<!-- <SpeedDial
    :model="bodyOptions"
    direction="right"
    :tooltipOptions="{ position: 'top' }"
    :pt="{
        actionIcon: { span: '1' }
    }"
    >
    <template #menuitem> <i class="fa-light fa-chevron-down"></i> </template>
</SpeedDial> -->

<!-- const bodyOptions = ref([
    { label: 'Checkered', value: 'checkered', icon: 'fas fa-1' },
    { label: 'Rounded', value: 'rounded', icon: 'fa-solid fa-2' },
  { label: 'Small', value: 'small', icon: 'fa-solid fa-3' },
  { label: 'Squared', value: 'squared', icon: 'fa-solid fa-4' }
]) -->
