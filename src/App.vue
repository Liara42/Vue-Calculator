<template>
  <div class="outline">
    <div
      id="container"
      :class="{
        dark: isDarkTheme,
        light: !isDarkTheme,
      }"
    >
      <control-board
        :board="board"
        :numberInput="current"
        @method="method"
        @switchTheme="switchTheme"
        :isDarkTheme="isDarkTheme"
      ></control-board>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [
        { id: 10, name: 'C/CE' },
        { id: 11, name: '+/-' },
        { id: 12, name: '%' },
        { id: 13, name: '/' },
        { id: 7, name: '7' },
        { id: 8, name: '8' },
        { id: 9, name: '9' },
        { id: 14, name: '*' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
        { id: 6, name: '6' },
        { id: 15, name: '-' },
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 16, name: '+' },
        { id: 0, name: '0' },
        { id: 17, name: '.' },
        { id: 18, name: '=' },
      ],
      current: '',
      previous: null,
      operator: null,
      operatorUsed: false,
      element: {},
      canAppend: true,
      isDarkTheme: true,
    };
  },
  methods: {
    switchTheme() {
      console.log('abc');
      this.isDarkTheme = !this.isDarkTheme;
    },
    findElement(id) {
      this.element = this.board.find((el) => el.id == id);
    },
    method(id) {
      this.findElement(id);
      if (id == 10) {
        this.clear();
      } else if (id == 11 && this.current != '') {
        this.sign();
      } else if (id == 12 && this.current != '') {
        this.percentage();
      } else if (id >= 0 && id < 10) {
        if (id != 0) {
          this.appendSymbol(this.element.name);
          console.log(this.current);
        } else if (id == 0 && this.current != '') {
          this.appendSymbol(this.element.name);
        }
      } else if (id == 17) {
        this.dot();
      } else if (id == 13) {
        this.divide();
      } else if (id == 14) {
        this.time();
      } else if (id == 15) {
        this.minus();
      } else if (id == 16) {
        this.add();
      } else if (id == 18) {
        this.equal();
      }
    },
    clear() {
      this.current = '';
      this.canAppend = true;
    },
    sign() {
      this.current =
        this.current.charAt(0) === '-'
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    percentage() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    appendSymbol(symbol) {
      if (this.operatorUsed) {
        this.current = '';
        this.operatorUsed = false;
      }
      if (this.canAppend) {
        this.current = `${this.current}${symbol}`;
      }
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.appendSymbol(this.element.name);
      }
    },
    setValues() {
      this.previous = this.current;
      this.operatorUsed = true;
      this.canAppend = true;
    },
    divide() {
      this.operator = (a, b) => b / a;
      this.setValues();
    },
    time() {
      this.operator = (a, b) => a * b;
      this.setValues();
    },
    minus() {
      this.operator = (a, b) => b - a;
      this.setValues();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setValues();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;

      this.previous = null;
      this.canAppend = false;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --first-color: #181818;
  --action-background: #313131;
  --dark-color: #1b1b1f;
  --equation-color: #999999;
  --light-color: #ffffff;
  --equal-background: #6d6d6d;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  height: 100%;
  display: grid;
}

body::before {
  content: '';
  background: url('thumb2-abstract-background-with-circles-green-pink-abstraction-circles-background-creative-backgrounds-colorful-circles-backgrounds.jpg')
    no-repeat center center/cover;
  opacity: 0.85;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.outline {
  position: relative;
  margin: 10vh auto;
  background-color: var(--dark-color);
  width: 250px;
  height: 470px;
  border-radius: 40px;
}

#container {
  position: absolute;
  top: 4%;
  left: 7%;

  height: 92%;
  width: 86%;
  border-radius: 23px;
}

.dark {
  background-color: var(--first-color);
}

.light {
  background-color: #fff;
}
</style>
