import { defineStore } from "pinia"

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        title: 'Wash Dishes', 
        completed: false
      },
      {
        title: 'Cook Dinner', 
        completed: false
      },
      {
        title: 'Brush Teeth', 
        completed: true
      }
    ]
  }), 
  getters: {
    getTasks: (state) => state.tasks,
    getTask: (state) => (index) => state.tasks[index],
    getStatuses: (state) => state.tasks.map(task => task.completed)
  }, 
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    editTask(task, index) {
      this.tasks[index] = task
    }
  }
})