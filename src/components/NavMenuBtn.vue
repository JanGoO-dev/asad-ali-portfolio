<template>
  <div @click="toggleMenu" class="menu-btn">
    <div class="menu-btn__burger"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuBtn: "",
      menuLeftOpen: false,
      menuRightOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuBtn = document.querySelector(".menu-btn");
      if (!this.menuLeftOpen && !this.menuRightOpen) {
        this.menuBtn.classList.add("openLeft");
        this.menuLeftOpen = true;
        this.menuRightOpen = false;
        this.toggleShow();
      } else {
        if (this.menuLeftOpen && !this.menuRightOpen) {
          this.menuBtn.classList.remove("openLeft");
          this.menuBtn.classList.add("openRight");
          this.menuLeftOpen = false;
          this.menuRightOpen = true;
          this.toggleShow();
        } else if (this.menuRightOpen && !this.menuLeftOpen) {
          this.menuBtn.classList.remove("openRight");
          this.menuBtn.classList.add("openLeft");
          this.menuRightOpen = false;
          this.menuLeftOpen = true;
          this.toggleShow();
        } else {
          this.menuLeftOpen = false;
          this.menuRightOpen = false;
          this.toggleShow();
        }
      }
    },
    toggleShow() {
      this.$store.commit("toggle");
    },
  },
};
</script>

<style scoped>
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background-color: transparent;
  /* border: 3px solid #fff; */
}
.menu-btn__burger {
  width: 50px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-16px);
}
.menu-btn__burger::after {
  transform: translateY(16px);
}
/* ANIMATION */
.menu-btn.openRight .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.openRight .menu-btn__burger::before {
  width: 30px;
  transform: rotate(46deg) translate(45px, -35px);
}
.menu-btn.openRight .menu-btn__burger::after {
  width: 30px;
  transform: rotate(-46deg) translate(45px, 35px);
}
.menu-btn.openLeft .menu-btn__burger {
  transform: translateX(10px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.openLeft .menu-btn__burger::before {
  width: 30px;
  transform: rotate(-46deg) translate(-6px, 5px);
}
.menu-btn.openLeft .menu-btn__burger::after {
  width: 30px;
  transform: rotate(46deg) translate(-6px, -5px);
}
</style>
