<script>
import axios from 'axios';
import AppCard from './components/AppCard.vue';
export default {
  components: {
    AppCard
  },
  data() {
    return {
      endpoint: 'http://127.0.0.1:8000/api/projects',
      projects: [],
    }
  },
  methods: {
    fetchProjects() {
      axios.get(this.endpoint).then((res) => {
        console.log(res.data);

        this.projects = res.data.projects.data

        console.log(this.projects);
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <div class="container">
    <h1 class="text-danger text-center mt-5">Projects</h1>
    <ul class="mt-5 list-unstyled">
      <li class="my-3" :key="project.id" v-for="project in projects">
        <AppCard :project="project" />
      </li>
    </ul>
  </div>
</template>

<style></style>