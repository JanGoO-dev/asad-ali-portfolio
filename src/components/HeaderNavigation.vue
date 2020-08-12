<template>
  <header id="nav-bar">
    <section id="owner-name">
      <span class="name">AsadAliBhutta</span>
    </section>
    <section id="nav">
      <div class="nav-icon">
        <NavMenuBtn></NavMenuBtn>
      </div>
      <transition name="slide-fade">
        <div v-show="GET_navLinksShow">
          <NavMenuLinks></NavMenuLinks>
        </div>
      </transition>
    </section>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import NavMenuBtn from "../components/NavMenuBtn";
import NavMenuLinks from "../components/NavMenuLInks";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GET_navLinksShow"]),
  },
  components: { NavMenuBtn, NavMenuLinks },
};
</script>

<style lang="scss" scoped>
#nav-bar {
  height: 95px;
  width: 100%;
  background-color: #1e152a;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: #000000 0px 0px 30px;
}

#owner-name {
  position: relative;
}

span.name {
  font-size: 75px;
  font-weight: bold;
  line-height: 84px;
  letter-spacing: -4.8px;
  color: #e3ebff;
  background-color: transparent;
  mix-blend-mode: soft-light;
  position: absolute;
  top: 13px;
  left: 70px;
}

.nav-icon {
  width: 95px;
  height: 95px;
  background-color: #ee6055;
  display: grid;
  place-items: center;
  span {
    background-color: transparent;
  }
}

#nav {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-items: center;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
