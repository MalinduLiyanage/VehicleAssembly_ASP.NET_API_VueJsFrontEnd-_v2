<script>

import VehicleModal from "@/components/modals/VehicleModal.vue";
import VehicleCard from "@/components/cards/VehicleCard.vue";
import apiClient from "@/services/apiClient";
import NavbarComponent from "@/components/navbarComponent.vue";
import WorkerModal from "@/components/modals/WorkerModal.vue";
import AdminModal from "@/components/modals/AdminModal.vue";
import WorkerCard from "@/components/cards/WorkerCard.vue";
import AdminCard from "@/components/cards/AdminCard.vue";

export default {
  name: "HomePage",
  components:{
    NavbarComponent,
    VehicleCard,WorkerCard, AdminCard,
    BookModal: VehicleModal,WorkerModal,AdminModal
  },
  data(){
    return {
      visibility: true,
      showVehicles: true,
      showWorkers: false,
      showAdmins: false,
      showVehicleModal: false,
      showWorkerModal: false,
      showAdminModal: false,
      data: [],
    }
  },
  methods: {
    showVehiclesView(){
      this.showVehicles = true;
      this.showWorkers = false;
      this.showAdmins = false;
      this.fetchVehicles();
    },
    showWorkersView(){
      this.showVehicles = false;
      this.showWorkers = true;
      this.showAdmins = false;
      this.fetchWorkers();
    },
    showAdminsView(){
      this.showVehicles = false;
      this.showWorkers = false;
      this.showAdmins = true;
      this.fetchAdmins();
    },
    fetchVehicles() {
      apiClient.get('/Vehicle')
          .then((response) => {
            if (response.data.status_code === 200) {
              this.data = response.data.data.vehicles;
            } else {
              this.errorMessage = "Login Failed!";
            }
          })
          .catch((error) => {
            this.errorMessage = "Error occurred: " + error.message;
          });
    },
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
    },
    fetchAdmins() {
      apiClient.get('/Admin')
          .then((response) => {
            if (response.data.status_code === 200) {
              this.data = response.data.data.admins;
            } else {
              this.errorMessage = "Bad Request!";
            }
          })
          .catch((error) => {
            this.errorMessage = "Error occurred: " + error.message;
          });
    },
  },
  mounted() {
    this.fetchVehicles();
  },
}
</script>

<template>
  <navbar-component @showVehicles="showVehiclesView()"
                    @showWorkers="showWorkersView()"
                    @showAdmins="showAdminsView()" />
  <div v-if="showVehicles">
    <div class="header-container">
      <h1>Vehicle List</h1>
      <button class="add-button" @click="showVehicleModal = true">Add Vehicle</button>
    </div>
    <div class="cards-container">
      <VehicleCard
          v-for="vehicle in data"
          :key="vehicle.id"
          :vehicle="vehicle"
      />
    </div>
  </div>

  <div v-if="showWorkers">
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
  </div>

  <div v-if="showAdmins">
    <div class="header-container">
      <h1>Admin List</h1>
      <button class="add-button" @click="showAdminModal = true">Add Admin</button>
    </div>
    <div class="cards-container">
      <AdminCard
          v-for="admin in data"
          :key="admin.id"
          :admin="admin"
      />
    </div>
  </div>

  <BookModal v-if="showVehicleModal" @close="showVehicleModal = false" />
  <WorkerModal v-if="showWorkerModal" @close="showWorkerModal = false" />
  <AdminModal v-if="showAdminModal" @close="showAdminModal = false" />

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
