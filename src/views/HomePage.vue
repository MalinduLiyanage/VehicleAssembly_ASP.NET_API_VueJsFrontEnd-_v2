<script>

import VehicleModal from "@/components/VehicleModal.vue";
import VehicleCard from "@/components/VehicleCard.vue";
import {useAuthStore} from "@/datastore/store";
import apiClient from "@/services/apiClient";

export default {
  name: "HomePage",
  components:{
    VehicleCard,
    BookModal: VehicleModal
  },
  data(){
    return {
      visibility: true,
      showModal: false,
      vehicles: [],
    }
  },
  methods: {
    fetchVehicles() {
      apiClient.get('/Vehicle')
          .then((response) => {
            if (response.data.status_code === 200) {
              this.vehicles = response.data.data.vehicles;
            } else {
              this.errorMessage = "Login Failed!";
            }
          })
          .catch((error) => {
            this.errorMessage = "Error occurred: " + error.message;
          });
    },
    logout() {
      const authStore = useAuthStore();
      authStore.clearToken();
      this.$router.push("/");
    },
  },
  mounted() {
    this.fetchVehicles();
  },
}
</script>

<template>
  <nav class="navbar">
    <button class="nav-button" @click="showModal = true">Add Vehicle</button>
    <button class="nav-button" @click="logout">Logout</button>
  </nav>

  <div>
    <h1>Vehicle List</h1>
    <div class="cards-container">
      <VehicleCard
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          :vehicle="vehicle"
      />
    </div>
  </div>

  <BookModal v-if="showModal" @close="showModal = false" />

</template>

<style scoped>

.navbar {
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
}

.nav-button {
  background-color: #555;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-button:hover {
  background-color: #777;
}

.cards-container {
  flex-wrap: wrap;
  justify-content: center;
}


</style>
