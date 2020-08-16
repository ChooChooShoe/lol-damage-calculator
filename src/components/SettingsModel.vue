<template>
  <div class="modal-window" @click="closeBg" id="settings">
    <div>
      <a @click="closeBg" title="Close" class="modal-close">Close</a>
      <h1>Settings</h1>
      <label class="opt">
        Enable Shop (experimental)
        <input type="checkbox" v-model="shopEnabled" />
        <span class="checkmark"></span>
      </label>
    </div>

    <!-- <header>
        <h2>Settings</h2>
      </header>
      <main>
        <a class="close" href="#">Close</a>
        <label class="opt">
          Enable Shop (experimental)
          <input type="checkbox" v-model="shopEnabled">
          <span class="checkmark"></span>
        </label>
      </main>
      <footer>
        <a class="close" href="#close"></a>
    </footer>-->
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "SettingsModel",
  data: function () {
    return {
      shopEnabled: false,
    };
  },
  watch: {
    shopEnabled(newVal) {
      this.$app.config.shopEnabled = newVal;
      console.log("shopEnabled.", newVal, this.$app.config.shopEnabled);
    },
  },
  methods: {
    closeBg(e) {
      if (e.currentTarget === e.target) {
        this.$app.currentModel = null;
        window.location.replace("#_");
        history.replaceState({}, "", window.location.href.slice(0, -2));
      }
    },
  },
};
</script>

<style lang="scss">
.modal-window {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #282f2f;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
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
  top: -3px;
  display: none;
  color: #fff;
}

/* Show the checkmark when checked */
.opt input:checked ~ .checkmark:after {
  display: block;
}
</style>
