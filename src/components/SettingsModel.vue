<template>
  <div
    class="modal click"
    :style=" visable ? '' : 'display: none;'"
    @click="closeBg($event)"
  >
    <div class="content">
      <header>
        <h2>Settings</h2>
      </header>
      <main>
        <label class="opt">
          Enable Shop (experimental)
          <input type="checkbox" v-model="shopEnabled">
          <span class="checkmark"></span>
        </label>
      </main>
      <footer>
        <a class="inline button float-right" @click="visable = false">Close</a>
      </footer>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "SettingsModel",
  data: function() {
    return {
      visable: false,
      shopEnabled: false,
    };
  },
  watch: {
    shopEnabled(newVal) {
      this.$app.config.shopEnabled = newVal;
      console.log("shopEnabled.", newVal, this.$app.config.shopEnabled);
    }
  },
  methods: {
    closeBg(e) {
      if (e.currentTarget === e.target) {
        this.visable = false;
      }
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1500;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
}
.content {
  cursor: default;
  max-width: 1380px;
  min-width: 300px;
  width: 100vw;
  /* height: 100vh; */
  position: relative;
  background: #0c1617;
  margin: auto;
  padding: 0;
  /* display: flex; */
  /* flex-flow: row wrap; */
  border: 3px solid rgb(115, 100, 45);
  box-shadow: 0 4px 8px 0 #00000033, 0 6px 20px 0 #00000030;
  /* -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s; */
  animation-name: animatetop;
  animation-duration: 0.15s;
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

header {
  max-height: 10vh;
  padding: 3px 10px;
  background-color: #4c4d49;
}

main {
  min-height: 140px;
  max-height: 80vh;
  background: #0c1617;
  color: #cfcfcf;
}
footer {
  max-height: 10vh;
  border-top: 2px solid gold;
  padding: 1em;
  margin: 0;
}

@media all and (min-width: 769px) {
  .fixed-scroller {
    height: 55vh;
  }
  .content {
    width: 90vw;
    /* height: 90vh; */
  }
}

.opt {
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 10px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  width: unset;
}

/* Hide the browser's default checkbox */
.opt input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.opt:hover input ~ .checkmark {
  background-color: #aaa;
}

/* When the checkbox is checked, add a blue background */
.opt input:checked ~ .checkmark {
  background-color: #2196f7;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "✔";
  position: relative;
  left: 4px;
  display: none;
  color: #fff;
}

/* Show the checkmark when checked */
.opt input:checked ~ .checkmark:after {
  display: block;
}
</style>
