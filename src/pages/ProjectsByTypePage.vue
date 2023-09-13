<script>
import axios from 'axios';
const apiBaseUri = 'http://localhost:8000/api/types/';
import AppCard from '../components/AppCard.vue';
import AppLoader from '../components/AppLoader.vue';
export default {
    name: 'ProjectsByTypePage',
    components: {
        AppCard,
        AppLoader
    },
    data() {
        return {
            projectsByType: null,
            type: null,
            isLoading: false
        }
    },
    methods: {
        getProjectsByType() {
            this.isLoading = true;
            const endpoint = this.$route.params.id + '/projects';
            axios.get(apiBaseUri + endpoint).then(res => {
                this.projectsByType = res.data.projects;
                this.type = res.data.type;
            }).catch(err => {
                this.$router.push({ name: 'not-found' })
            })
                .then(() => {
                    this.isLoading = false
                })
        }
    },
    created() {
        this.getProjectsByType();
    }
}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <div v-else>
        <h1 class="text-danger text-center my-5">{{ type.label }} projects</h1>

        <ul v-if="projectsByType" class="mt-5 list-unstyled">
            <li class="my-3" :key="project.id" v-for="project in projectsByType">
                <AppCard :type="type" :project="project" />
            </li>
        </ul>
        <h3 v-else class="text-center">No projects</h3>
    </div>
</template>

<style scoped></style>