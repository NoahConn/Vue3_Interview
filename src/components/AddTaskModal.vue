<template>
  <div>
    <MDBBtn color="primary" @click="showModal = true">Add Task</MDBBtn>
    <MDBModal
      tabindex="-1"
      :modelValue="showModal"
      :keyboard="false"
      :focus="false"
      scrollable
    >
      <MDBModalHeader :close="false">
        <MDBModalTitle>New Task</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody class="mx-2">
        <MDBInput label="Title" v-model="taskTitle" />
      </MDBModalBody>
      <MDBModalFooter class="d-flex justify-content-between">
        <MDBBtn color="secondary" @click="handleCancel"> Cancel </MDBBtn>
        <MDBBtn color="primary" @click="handleSave"> Create Task </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </div>
</template>

<script setup>
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-vue-ui-kit'
import { inject, ref } from 'vue'

const showModal = ref(false)
const taskTitle = ref('')

const store = inject('store')

const handleCancel = () => {
  showModal.value = false
}

const handleSave = () => {
  showModal.value = false
  store.addTask({
    title: taskTitle.value, 
    completed: false
  })
}
</script>
