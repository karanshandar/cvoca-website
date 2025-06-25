<template>
  <v-card
    :elevation="elevation"
    :rounded="rounded"
    :loading="loading"
    v-bind="$attrs"
  >
    <template v-if="$slots.header" #prepend>
      <div class="pa-4">
        <slot name="header" />
      </div>
    </template>

    <v-card-text v-if="$slots.default" class="pa-4">
      <slot />
    </v-card-text>

    <template v-if="$slots.actions" #append>
      <div class="pa-4">
        <slot name="actions" />
      </div>
    </template>
  </v-card>
</template>

<script setup>
defineProps({
  elevation: {
    type: Number,
    default: 2
  },
  loading: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: [String, Number],
    default: 'lg'
  }
})
</script> 