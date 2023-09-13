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
      projects: {
        data: [],
        links: []
      },
      isLoading: true
    }
  },
  methods: {
    fetchProjects(endpoint = 'http://127.0.0.1:8000/api/projects') {
      this.isLoading = true
      axios.get(endpoint).then((res) => {
        console.log(res.data);

        this.projects = {
          data: res.data.projects.data,
          links: res.data.projects.links
        }

        console.log(this.projects);

        this.isLoading = false
      }).catch(err => console.error(err))
        .then(res => {
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

      <!-- Pagination -->
      <nav class="d-flex justify-content-end mt-4" aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" :class="[{ active: link.active }, { disabled: !link.url }]" v-for="link in projects.links"
            :key="link.label">
            <button type="button" :disabled="!link.url" @click="fetchProjects(link.url)" class="page-link">{{ link.label
            }}</button>
          </li>
        </ul>
      </nav>

      <ul v-if="projects.data.length" class="mt-5 list-unstyled">
        <li class="my-3" :key="project.id" v-for="project in projects.data">
          <AppCard :project="project" />
        </li>
      </ul>
      <h3 v-else class="text-center">No projects</h3>
    </div>

    <!-- Pagination -->
    <nav class="d-flex justify-content-end mt-4" aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="[{ active: link.active }, { disabled: !link.url }]" v-for="link in projects.links"
          :key="link.label">
          <button type="button" :disabled="!link.url" @click="fetchProjects(link.url)" class="page-link">{{ link.label
          }}</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style></style>