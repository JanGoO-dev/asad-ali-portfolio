<template>
  <ul class="nav-links">
    <li v-for="(link, index) in links" :key="index" class="nav-link">
      <router-link :to="'/' + link.href">{{ link.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Intro", href: "#Intro" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-links {
  list-style: none;
  color: white;
  display: flex;
  flex-flow: row;
  gap: 20px;
  margin-right: 40px;
}

a {
  font-size: 35px;
  font-weight: bold;
  line-height: 84px;
  letter-spacing: -1.8px;
  color: #e3ebff;
  background-color: transparent;
  opacity: 0.6;
  text-decoration: none;
}
</style>
