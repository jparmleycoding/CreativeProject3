<template>
  <div id="app">
    <div id="menu">
    <router-link to="/">
      <h2>Tutor Project Assignment</h2>
    </router-link>
      <div id="nav">
        <router-link to="/Today">
          <h3>Tutors By Major/Shift</h3>
        </router-link>
        <router-link to="/Selected">
          <h3>Assigned Tutors({{assignedTutors}})</h3>
        </router-link>
      </div>
    </div>
    <hr>
    <router-view />
    <hr>
    <div class="footer">
      <a href="?">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    assignedTutors() {
      return this.$root.$data.selected.length;
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
