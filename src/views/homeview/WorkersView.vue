<script>
import WorkerCard from "@/components/cards/WorkerCard.vue";
import apiClient from "@/services/apiClient";
import WorkerModal from "@/components/modals/WorkerModal.vue";

export default {
  name: "WorkersView",
  components: {WorkerModal, WorkerCard},
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
  <div class="cards-container">
    <WorkerCard
        v-for="worker in data"
        :key="worker.id"
        :worker="worker"
    />
  </div>
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