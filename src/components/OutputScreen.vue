<template>
  <button
    v-if="isDarkTheme"
    @click="$emit('switchTheme')"
    :class="{
      dark: isDarkTheme,
      light: !isDarkTheme,
    }"
  ></button>
  <button
    v-else
    @click="$emit('switchTheme')"
    :class="{
      dark: isDarkTheme,
      light: !isDarkTheme,
    }"
  ></button>
  <div class="container">
    <div
      class="number-input"
      :class="{
        dark: isDarkTheme,
        light: !isDarkTheme,
      }"
    >
      {{ numberInput || 0 }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['numberInput', 'isDarkTheme'],
  emits: ['switchTheme'],
};
</script>

<style scoped>
.container {
  height: 30%;
  width: 86%;

  position: absolute;
  top: 5%;
  left: 7%;

  overflow-x: scroll;
  scrollbar-width: none;
}

.container::-webkit-scrollbar {
  display: none;
}

.number-input {
  font-size: 2rem;
  width: 100%;

  position: absolute;
  bottom: 5%;
  text-align: right;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;

  margin: 0 auto;
  position: absolute;
  top: 3%;
  right: 5%;

  font-size: 1rem;
  z-index: 1;
}

button.light::after {
  content: '\f186';
  font-family: FontAwesome;
}

.light {
  color: #202023;
}

button.dark::after {
  content: '\f185';
  font-family: FontAwesome;
}
.dark {
  color: var(--light-color);
}
</style>
