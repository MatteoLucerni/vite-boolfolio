<script>
export default {
    name: 'AppCard',
    props: {
        type: Object,
        project: Object,
        isIndex: Boolean
    },
    data() {
        return {

        }
    },
    computed: {
        projectDate() {
            let date = new Date(this.project.created_at);
            const timestamp = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

            return timestamp;
        }
    }
}
</script>

<template>
    <div class="card bg-light p-5">
        <div class="card-header rounded border-0 mb-4 d-flex justify-content-between align-content-center">
            <h2 class="m-0 d-flex align-items-center">
                {{ project.title }}
            </h2>
            <div class="d-flex">
                <RouterLink :style="{ 'border': '1px solid ' + project.type.color, 'color': project.type.color }"
                    class="d-flex rounded align-items-center px-3"
                    :to="{ name: 'projects-by-type', params: { id: project.type?.id } }" v-if="project.type">
                    <p class="m-0">{{ project.type.label }}</p>
                </RouterLink>
                <p v-else-if="type" :style="{ 'border': '1px solid ' + type.color, 'color': type.color }"
                    class="d-flex rounded align-items-center m-0 px-3">
                    {{ type.label }}</p>
                <p v-else style="background-color: lightgray"
                    class="d-flex rounded border border-dark align-items-center m-0 px-3">
                    None</p>
                <div v-if="project.is_public" class="alert alert-success m-0 ms-2">
                    Open-source
                </div>
                <div v-else class="alert alert-danger m-0 ms-2">
                    Private-source
                </div>
            </div>
        </div>
        <div v-if="!isIndex" class="card-body">
            <p>
                {{ project.description }}
            </p>
        </div>
        <div class="card-footer d-flex justify-content-between mt-3 align-items-center border-0 bg-light">
            <RouterLink v-if="isIndex" class="btn btn-primary"
                :to="{ name: 'project-detail', params: { slug: project.slug } }">
                Details
            </RouterLink>
            <div>
                <span v-if="project.technologies" v-for="technology in project.technologies"
                    :class="'bg-' + technology.color" class="rounded mx-1 py-1 px-2 text-white">{{ technology.label
                    }}</span>
                <span v-else>-</span>
            </div>
            <div v-if="!isIndex">
                Creation date: {{ projectDate }}
            </div>
        </div>
    </div>
</template>

<style scoped></style>