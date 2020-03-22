<template>
  <div class="home">
    <h1>Tutor List</h1>
    <TutorList :tutors="tutors"/>
  </div>
</template>

<script>
import TutorList from "../components/TutorList.vue"
export default {
 name: "Home",
 components: {
  TutorList
 },
 computed: {
  tutors() {
    return this.$root.$data.tutors;
  }
 }
}
</script>
