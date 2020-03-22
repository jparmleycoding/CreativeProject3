<template>
  <div class="select-wrapper">
    <h1>Tutor's Selected for Project</h1>
    <SelectedList :workers ="workers"/>
  </div>
</template>

<script>
import SelectedList from "../components/SelectedList.vue"
export default {
  name: "Selected",
  components: {
    SelectedList
  },
  computed: {
    workers() {
      return this.$root.$data.selected;
    }
  }
}
</script>
