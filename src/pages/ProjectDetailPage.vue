<script>
const apiBaseUri = 'http://localhost:8000/api/projects/';
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import AppCard from '../components/AppCard.vue';

export default {
    name: 'ProjectDetailPage',
    components: {
        AppLoader,
        AppCard
    },
    data() {
        return {
            project: null,
            isLoading: false
        }
    },
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = this.$route.params.slug;
            axios.get(apiBaseUri + endpoint).then(res => {
                this.project = res.data;
            }).catch(err => {
                this.$router.push({ name: 'not-found' })
            })
                .then(() => {
                    this.isLoading = false
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <h1 class="text-center my-5">Project Details</h1>
    <AppLoader v-if="isLoading && !project" />
    <AppCard v-if="!isLoading && project" :project="project" />
    <button @click="$router.push({ name: 'home' })" class="btn btn-secondary mt-4">Go back to home</button>
</template>

<style scoped></style>