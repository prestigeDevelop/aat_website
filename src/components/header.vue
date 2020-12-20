<template>
  <div id="container">
    <div class="nav">
      <router-link to="/">Home</router-link> 
    </div>
    <div class="nav">
      <router-link to="/about">About</router-link>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-direction: row ;
  
  justify-content: space-around;
}

#container .nav {
  padding: 30px;
  border:1px  #42b983 solid;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

