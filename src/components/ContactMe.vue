<template>
  <Transition name="slide-fade">
    <div v-show="menuStore.isVisible" class="ContactMe">
      <div class="contact-header">
        <div class="header-text">
          <h2>Get In Touch</h2>
          <p>Let's talk about your next project!</p>
        </div>
        <button class="close-button" @click="menuStore.toggle()" aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="contact-content">
        <div class="input-group">
          <label for="name" class="contact-label">Name</label>
          <input type="text" id="name" class="contact-input" placeholder="John Doe" v-model="name">
        </div>

        <div class="input-group">
          <label for="email" class="contact-label">Email</label>
          <input type="email" id="email" class="contact-input" placeholder="john@example.com" v-model="email">
        </div>

        <div class="input-group">
          <label for="message" class="contact-label">Message</label>
          <textarea id="message" class="contact-input textarea" placeholder="How can I help you?" rows="4" v-model="message"></textarea>
        </div>
        
        <p v-if="error" class="error-msg">{{ error }}</p>
        <p v-if="sent" class="success-msg">Message sent successfully!</p>
        <button class="submit-btn" @click="handleSubmit" :disabled="sending">
          {{ sending ? 'Sending...' : 'Send Message' }}
        </button>

        <div class="divider">
          <span>Or connect via</span>
        </div>

        <a href="https://www.linkedin.com/in/arthurbarceloslucena/" target="_blank" rel="noopener noreferrer" class="linkedin-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { menuStore } from '../store.js'

const name = ref('')
const email = ref('')
const message = ref('')
const sending = ref(false)
const sent = ref(false)
const error = ref('')

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3001'

const handleSubmit = async () => {
    if (!name.value || !email.value || !message.value) {
        error.value = 'Please fill in all fields'
        return
    }
    error.value = ''
    sending.value = true
    try {
        const res = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            })
        })
        if (res.ok) {
            sent.value = true
            name.value = ''
            email.value = ''
            message.value = ''
            setTimeout(() => { sent.value = false }, 4000)
        } else {
            error.value = 'Failed to send. Try again later.'
        }
    } catch {
        error.value = 'Network error. Try again later.'
    } finally {
        sending.value = false
    }
}
</script>

<style scoped>
/* Transition animations */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.ContactMe {
  position: fixed;
  top: 5rem;
  right: 2rem;
  width: 380px;
  background: rgba(30, 30, 30, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  color: #f3f4f6;
  z-index: 1000;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.header-text h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #ffffff;
}

.header-text p {
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
}

.close-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #9ca3af;
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: rotate(90deg);
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #d1d5db;
  margin-left: 4px;
}

.contact-input {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;
}

.contact-input::placeholder {
  color: #6b7280;
}

.contact-input:focus {
  border-color: #3b82f6;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.textarea {
  resize: vertical;
  min-height: 80px;
}

.submit-btn {
  background: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 0.75rem;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
}

.submit-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.error-msg {
  color: #f87171;
  font-size: 0.85rem;
  margin: 0;
}

.success-msg {
  color: #34d399;
  font-size: 0.85rem;
  margin: 0;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 4px 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.divider span {
  padding: 0 10px;
  color: #9ca3af;
  font-size: 0.8rem;
}

.linkedin-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.linkedin-btn:hover {
  background: #0a66c2;
  border-color: #0a66c2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(10, 102, 194, 0.3);
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .ContactMe {
    width: 90%;
    right: 5%;
    top: 5rem;
  }
}
</style>