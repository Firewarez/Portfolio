import { reactive } from 'vue'

export const menuStore = reactive({
    isVisible: false,
    toggle() {
        this.isVisible = !this.isVisible
    }
})