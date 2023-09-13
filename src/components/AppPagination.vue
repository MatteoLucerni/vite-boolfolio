<script>
import axios from 'axios';
export default {
    name: 'AppPagination',
    props: {
        links: Array
    },
    emit: ['page-changed']
}
</script>

<template>
    <!-- Pagination -->
    <nav class="d-flex justify-content-end mt-4" aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item" :class="[{ active: link.active }, { disabled: !link.url }]" v-for="link in links"
                :key="link.label">
                <button type="button" :disabled="!link.url" @click="$emit('page-changed', link.url)" class="page-link"
                    v-html="link.label"></button>
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>