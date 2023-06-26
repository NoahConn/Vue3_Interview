<template>
  <div>
    <MDBBtn color="secondary" @click="showModal = true">Edit</MDBBtn>
    <MDBModal
      tabindex="-1"
      :modelValue="showModal"
      :keyboard="false"
      :focus="false"
      scrollable
    >
      <MDBModalHeader :close="false">
        <MDBModalTitle>Edit Task</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody class="mx-2 d-flex flex-row align-items-center justify-content-start">
        <div class="me-3 w-75">
          <MDBInput class="" label="Title" v-model="taskTitle" />
        </div>
        
        <MDBCheckbox label="Completed" v-model="taskCompleted"/>
      </MDBModalBody>
      <MDBModalFooter class="d-flex justify-content-between">
        <MDBBtn color="secondary" @click="handleCancel"> Cancel </MDBBtn>
        <MDBBtn color="primary" @click="handleSave"> Save Changes </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </div>
</template>

<script setup>
import { MDBBtn, MDBCheckbox, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-vue-ui-kit'
import { computed, inject, ref } from 'vue'

const props = defineProps({
  index: Number
})

const store = inject('store')
const activeTask = computed(() => store.getTask(props.index))
const showModal = ref(false)
const taskTitle = ref(activeTask.value.title)
const taskCompleted = ref(activeTask.value.completed)

const handleCancel = () => {
  showModal.value = false
}

const handleSave = () => {
  showModal.value = false
  store.editTask({
    title: taskTitle.value, 
    completed: taskCompleted.value
  }, props.index)
}
</script>
