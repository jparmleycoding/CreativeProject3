<template>
<div class="fullWrap">
  <div class="statusReport">
    <h2>Number of English Majors:{{english}}</h2>
    <h2>Number of Education Majors:{{education}}</h2>
    <h2>Number of Science Majors:{{science}}</h2>
    <h2>Number of Business Majors:{{business}}</h2>
  </div>
  <div class="tutors" v-for="worker in workers" :key="worker.id">
    <div class="tutorStuff">
      <div id="studentInfo">
        <h2>{{worker.name}}</h2>
        <h3>{{worker.major}}</h3>
      </div>
      <div id="img">
        <img :src="'images/'+worker.image">
      </div>
    </div>
    <div id="shiftButton">
      <h2>Shift Days: {{worker.shift}}</h2>
      <button class="remover" @click.prevent="remove(worker)">Remove from Project</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SelectedList',
  props : {
    workers: Array
  },
  methods: {
    remove(worker) {
      for (let i = 0; i < this.$root.$data.selected.length; i++) {
        if (this.$root.$data.selected[i] == worker) {
          this.$root.$data.selected.splice(i, 1);
        }
      }
    }
  },
  computed: {
    science() {
      let n = 0;
      for (let i = 0; i < this.$root.$data.selected.length; i++) {
        if (this.$root.$data.selected[i].major == "Physical Science") {
          n++;
        }
      }
      return n;
    },
    english() {
      let n = 0;
      for (let i = 0; i < this.$root.$data.selected.length; i++) {
        if (this.$root.$data.selected[i].major == "English") {
          n++;
        }
      }
      return n;
    },
    education() {
      let n = 0;
      for (let i = 0; i < this.$root.$data.selected.length; i++) {
        if (this.$root.$data.selected[i].major == "Education") {
          n++;
        }
      }
      return n;
    },
    business() {
      let n = 0;
      for (let i = 0; i < this.$root.$data.selected.length; i++) {
        if (this.$root.$data.selected[i].major == "Business") {
          n++;
        }
      }
      return n;
    }
  }
}
</script>

<style scoped>
img {
  border: 1px solid black;
  height: 300px;
  width: 250px;
}

.remover {
  color: black;
  background-color: red;
}

.tutors {
  border: 1px solid black;
}
</style>
