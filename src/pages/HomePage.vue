<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
import AppLoader from '../components/AppLoader.vue';
import AppPagination from '../components/AppPagination.vue';
export default {
    components: {
        AppCard,
        AppLoader,
        AppPagination
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
    },
}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <div v-else>
        <h1 class="text-danger text-center my-5">Projects</h1>

        <AppPagination :links="projects.links" @page-changed="fetchProjects" />

        <ul v-if="projects.data.length" class="mt-5 list-unstyled">
            <li class="my-3" :key="project.id" v-for="project in projects.data">
                <AppCard :is-index="true" :project="project" />
            </li>
        </ul>
        <h3 v-else class="text-center">No projects</h3>
    </div>

    <AppPagination :links="projects.links" @page-changed="fetchProjects" />
</template>

<style scoped></style>