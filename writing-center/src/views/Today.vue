<template>
<div class="today-wrapper">
  <h1>Search by Major</h1>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('English')" href="#" class="pure-menu-link">English</a></li>
      <li class="pure-menu-item"><a @click="select('Education')" href="#" class="pure-menu-link">Education</a></li>
      <li class="pure-menu-item"><a @click="select('Physical Science')" href="#" class="pure-menu-link">Physical Science</a></li>
      <li class="pure-menu-item"><a @click="select('Business')" href="#" class="pure-menu-link">Business</a></li>
    </ul>
  </div>
  <TutorList :tutors="tutors"/>
  <hr>
  <h1>Tutors Working Today</h1>
  <p>If blank, then no Tutors are working today</p>
  <TutorList :tutors="today"/>
</div>
</template>

<script>
import TutorList from "../components/TutorList.vue"
export default {
  name: 'Search',
  components: {
    TutorList
  },
  data() {
    return {
      major: '',
    }
  },
  computed: {
    tutors() {
      return this.$root.$data.tutors.filter(tutor => tutor.major === this.major);
    },
    today() {
      let today=new Date();
      let x = today.getDay();
      let y = "";
      if (x == 1) { y = "M"; }
      else if (x == 2) { y = "T"; }
      else if (x == 3) { y = "W"; }
      else if (x == 4) { y = "Th"; }
      else if (x == 5) { y = "F"; }
      else {y = "NA"; }
      return this.$root.$data.tutors.filter(tutor => y == tutor.shift.filter(check => y == check))
      },
  },
  methods: {
    select(major) {
      this.major = major;
    }
  }
}
</script>
