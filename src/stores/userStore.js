// stores/userStore.js
import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        name: '测试用户',
        age: 30
    }),
    actions: {
        updateName(newName) {
            this.name = newName
        },
        incrementAge() {
            this.age += 1
        }
    }
})
