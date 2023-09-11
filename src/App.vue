<script>
import axios from 'axios';
import AppCard from './components/AppCard.vue';
import AppLoader from './components/AppLoader.vue';
export default {
  components: {
    AppCard,
    AppLoader
  },
  data() {
    return {
      endpoint: 'http://127.0.0.1:8000/api/projects',
      projects: [],
      isLoading: true
    }
  },
  methods: {
    fetchProjects() {
      this.isLoading = true
      axios.get(this.endpoint).then((res) => {
        console.log(res.data);

        this.projects = res.data.projects.data

        console.log(this.projects);

        this.isLoading = false
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
    <AppLoader v-if="isLoading" />
    <div v-else>
      <h1 class="text-danger text-center mt-5">Projects</h1>
      <ul class="mt-5 list-unstyled">
        <li class="my-3" :key="project.id" v-for="project in projects">
          <AppCard :project="project" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>