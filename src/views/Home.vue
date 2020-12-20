<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <userProfile />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import userProfile from "@/components/UserProfile.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    userProfile,
  },
};
</script>
