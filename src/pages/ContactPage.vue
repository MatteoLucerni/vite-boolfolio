<script>
import axios from 'axios';
export default {
    name: 'ContactPage',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <h1 class="my-5 text-center">Contact Us</h1>
    <form action="" method="post">
        <!-- email -->
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" required>
            <div id="emailHelp" class="form-text">We will recontact you from this email address</div>
        </div>
        <!-- subject -->
        <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" required>
        </div>
        <!-- message -->
        <div class="mb-3">
            <label for="message" class="form-label">Content</label>
            <textarea rows="7" class="form-control" id="message" required></textarea>
        </div>
        <!-- newsletter -->
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="newsletter">
            <label class="form-check-label" for="newsletter">
                Subscribe to Boolfolio Newsletter
            </label>
        </div>
    </form>
</template>

<style scoped></style>