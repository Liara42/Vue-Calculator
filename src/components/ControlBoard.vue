<template>
  <div class="box">
    <output-screen
      :numberInput="numberInput"
      @switchTheme="$emit('switchTheme')"
      :isDarkTheme="isDarkTheme"
    ></output-screen>
    <div class="alignment">
      <div class="container">
        <button
          v-for="element in board"
          :key="element.id"
          class="regular"
          :class="{
            action: isAction(element.id),
            equal: isEqual(element.id),
            zero: isZero(element.id),
            dark: isDarkTheme,
            light: !isDarkTheme,
          }"
          @click="$emit('method', element.id)"
          @keyup.enter="$emit('method', element.id)"
        >
          {{ element.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['board', 'numberInput', 'isDarkTheme'],
  emits: ['method', 'switchTheme'],
  methods: {
    isAction(id) {
      if (id > 9 && id < 17) {
        return true;
      }
    },
    isEqual(id) {
      if (id === 18) {
        return true;
      }
    },
    isZero(id) {
      if (id === 0) {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  height: 100%;
}
.alignment {
  display: inline-block;
  width: 100%;
  align-self: flex-end;
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(3rem, auto);
  margin: 0 auto;
  width: 95%;
}

button {
  margin: 6%;
  width: 88%;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;
}

.regular.dark {
  background-color: var(--first-color);
  color: var(--equation-color);
}

.regular.light {
  background-color: #fafafa;
  color: #898989;
}

.zero {
  grid-column: 1 / span 2;
  margin: 3%;
  width: 94%;
}

.action.dark {
  background-color: var(--action-background);
  color: var(--light-color);
}

.action.light {
  background-color: #eaf8f3;
  color: #87dabd;
}

.equal.dark {
  background-color: var(--equal-background);
  color: var(--light-color);
}

.equal.light {
  background-color: #f8dade;
  color: #e5717f;
}
</style>
