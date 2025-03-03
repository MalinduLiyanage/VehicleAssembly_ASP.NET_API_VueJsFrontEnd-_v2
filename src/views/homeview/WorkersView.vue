<script>

import apiClient from "@/services/apiClient";
import WorkerModal from "@/components/modals/WorkerModal.vue";

export default {
  name: "WorkersView",
  components: {WorkerModal},
  data() {
    return {
      showWorkerModal: false,
      data: [],
    }
  },
  methods: {
    fetchWorkers() {
      apiClient.get('/Worker')
          .then((response) => {
            if (response.data.status_code === 200) {
              this.data = response.data.data.workers;
            } else {
              this.errorMessage = "Bad Request!";
            }
          })
          .catch((error) => {
            this.errorMessage = "Error occurred: " + error.message;
          });
    }
  },
  mounted() {
    this.fetchWorkers();
  },
}
</script>

<template>
  <div class="header-container">
    <h1>Worker List</h1>
    <button class="add-button" @click="showWorkerModal = true">Add Worker</button>
  </div>
  <v-table density="compact" fixed-header>
    <thead>
    <tr>
      <th class="text-left">
        Worker ID
      </th>
      <th class="text-left">
        First Name
      </th>
      <th class="text-left">
        Last Name
      </th>
      <th class="text-left">
        Address
      </th>
      <th class="text-left">
        Job Role
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="worker in data"
        :key="worker.id"
        :worker="worker">
      <td>{{ worker.nic }}</td>
      <td>{{ worker.firstname }}</td>
      <td>{{ worker.lastname }}</td>
      <td>{{ worker.address }}</td>
      <td>{{ worker.job_role }}</td>
    </tr>
    </tbody>
  </v-table>
  <WorkerModal v-if="showWorkerModal" @close="showWorkerModal = false" />
</template>

<style scoped>

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  justify-content: space-between;
}

.add-button {
  background-color: #4ebf04;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.cards-container {
  flex-wrap: wrap;
  justify-content: center;
}
</style>