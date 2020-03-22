<template>
  <div class="fullWrap">
    <div class="tutors" v-for="tutor in tutors" :key="tutor.id">
      <div class="tutorStuff">
        <div id="studentInfo">
          <h2>{{tutor.name}}</h2>
          <h3>{{tutor.major}}</h3>
        </div>
        <div id="img">
          <img :src="'images/'+tutor.image">
        </div>
      </div>
      <div id="shiftButton">
        <h2>Shift Days: {{tutor.shift}}</h2>
        <button class="auto" @click.prevent="addToProject(tutor)">Add To Project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorList',
  props: {
    tutors: Array
  },
  methods: {
    addToProject(tutor) {
      if (this.$root.$data.selected.filter(worker => worker == tutor).length == 0)
      {
        this.$root.$data.selected.push(tutor);
      }
    }
  }
}
</script>

<style scoped>

.tutorStuff {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
}

#shiftButton {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  height: 250px;
  width: 350px;
}

.tutors {
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;

}

.auto {
  height: 150px;
  width: 200px;
  font-size: 25px;
  color: blue;
  background-Color: Grey;
}

img {
  border: 1px solid black;
  height: 300px;
  width: 250px;
}
</style>
