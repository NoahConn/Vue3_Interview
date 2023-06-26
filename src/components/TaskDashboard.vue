<template>
  <MDBContainer class="m-5" >
    <MDBCard class="shadow-5 border border-1">
      <MDBCardBody >
        <div class="m-5 d-flex flex-row align-items-center justify-content-between">
            <div class="fs-2 fw-bold">Tasks</div>
            <div>
              <button type="button" class="btn btn-primary">Add</button>
            </div>
          </div>
        <div class="m-5">
          <div v-for="(task, index) in tasks">
            <ul class="list-group list-group-horizontal rounded-0 bg-transparent">
              <li
                class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <MDBCheckbox label="Status" v-model="task.status" />
              </li>
              <li
                class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p class="lead fw-normal mb-0">{{ task.title }}</p>
              </li>
              <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div class="d-flex flex-row justify-content-end mb-1">
                  <a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                      class="fas fa-pencil-alt me-3"></i></a>
                  <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
                      class="fas fa-trash-alt"></i></a>
                </div>
              </li>
            </ul>
          </div>
          <!-- Build V-For List to Visualize Tasks -->
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
  MDBCheckbox 
} from "mdb-vue-ui-kit"
import { useTaskStore } from '../store/taskStore'
import { computed } from "vue"

const store = useTaskStore()

// utilize store getter to get tasks
const tasks = computed(() => store.getTasks)

// init add, delete, update functions 

</script>