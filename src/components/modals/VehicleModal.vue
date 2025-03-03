<script>
import apiClient from "@/services/apiClient";

export default {
  name: "VehicleModal",
  data() {
    return {
      vehicle: {
        model: "",
        color: "",
        engine: ""
      }
    };
  },
  methods: {
    submitForm() {
      apiClient.post('/Vehicle', {
        model: this.vehicle.model,
        color: this.vehicle.color,
        engine: this.vehicle.engine,
      })
          .then((response) => {
            if (response.data.status_code === 200) {
              console.log("Vehicle added successfully:");
            } else {
              console.error("Error adding vehicle:");
            }
          })
          .catch((error) => {
            console.error("Failed to add vehicle:", error.message);
          });

      this.vehicle.model = "";
      this.vehicle.color = "";
      this.vehicle.engine = "";

      this.$emit("close");
    },
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h2>Add a New Vehicle</h2>
      <form @submit.prevent="submitForm">
        <label>Model</label>
        <input v-model="vehicle.model" type="text" required />

        <label>Color</label>
        <input v-model="vehicle.color" type="text" required />

        <label>Engine</label>
        <input v-model="vehicle.engine" type="text" required />

        <div class="modal-buttons">
          <button type="submit" class="add-button">Add</button>
          <button type="button" class="cancel-button" @click="closeModal">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

input {
  width: 90%;
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.add-button {
  background-color: #28a745;
  color: white;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.add-button:hover {
  background-color: #218838;
}

.cancel-button {
  background-color: #dc3545;
  color: white;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.cancel-button:hover {
  background-color: #c82333;
}
</style>