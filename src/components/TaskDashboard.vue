<template>
  <MDBContainer class="m-5" >
    <MDBCard class="shadow-5 border border-1">
      <MDBCardBody >
        <div class="mx-5 mt-3 d-flex flex-row align-items-center justify-content-between">
            <div class="fs-2 fw-bold">Tasks</div>
            <div>
              <AddTaskModal/>
            </div>
          </div>
        <div class="mx-5 my-3">
          <!-- Build V-For List to render tasks in div below -->
          <div >
            <MDBRow 
              :class="[
                'p-3',
                // index == 0 ? 'border border-2 border-bottom-0 rounded-top' : '',
                // 'border border-2',
                // index == tasks.length - 1 ? 'border border-2 rouned-3 rounded-bottom' : 'border-bottom-0'
              ]"
            >
              <MDBCol col="4" class="d-flex justify-content-start">
                <!-- Add Task Title Below -->
                <p class="lead fw-normal mb-0"> TITLE </p>
              </MDBCol>
              <MDBCol col="3" class="d-flex justify-content-end">
                <!-- implement logic so that when checkbox is altered, the value is updated in the store -->
                <!-- <MDBCheckbox label="Completed" v-model="" />  -->
              </MDBCol>
              <MDBCol col="5" class="d-flex justify-content-end">
                <!-- This modal takes an index as prop so data can be prepopulated -->
                <!-- <EditTaskModal :index=""/> -->
                <!-- add funtion to handle deleting a task -->
                <!-- <MDBBtn class="ms-3" color="danger" size="sm" @click="">Delete</MDBBtn> -->
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
</template>
<script setup>
import { 
  MDBCard, 
  MDBCardBody, 
  MDBContainer,
  MDBRow, 
  MDBCol,
  MDBCheckbox,
  MDBBtn
} from "mdb-vue-ui-kit"
import { useTaskStore } from '../store/taskStore'
import { provide } from "vue"
import AddTaskModal from "./AddTaskModal.vue";
import EditTaskModal from "./EditTaskModal.vue";

const store = useTaskStore()
provide('store', store)

// utilize store getter to get tasks and task statuses

</script>