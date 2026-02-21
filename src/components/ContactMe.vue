<template>
        <div v-show="menuStore.isVisible" class="ContactMe">
            <div class="contact-header">
                <h2>Contact Me</h2>
                <button class="close-button" @click="menuStore.toggle()">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="contact-content">
                <label for="name" class="contact-label">Name</label>
                <input type="text" id="name" class="contact-input" placeholder="Your Name">

                <label for="email" class="contact-label">Email</label>
                <input type="email" id="email" class="contact-input" value="your@Email.com">
            </div>
        </div>
</template>

<script setup>

import { menuStore } from '../store.js'

</script>

<style scoped>

.ContactMe {
    position: fixed;
    top: 10%;
    right: 0;
    width: 350px;
    background-color: #1e1e1e;
    color: white;
    z-index: 1000;
    padding: 20px;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.3);
    left: 77%;
}

.contact-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>