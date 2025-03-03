<script>
import apiClient from "@/services/apiClient";

export default {
  name: "AssembleModal",
  data() {
    return {
      assemble: {
        assignee_id: "",
        vehicle_id: "",
        nic: "",
        date: "",
        isCompleted: false,
      }
    };
  },
  methods: {
    submitForm() {
      apiClient.post('/Assembles', {
        assignee_id: this.assemble.assignee_id,
        vehicle_id: this.assemble.vehicle_id,
        nic: this.assemble.nic,
        date: this.assemble.date,
        isCompleted: this.assemble.isCompleted,
      })
          .then((response) => {
            if (response.data.status_code === 200) {
              console.log("Assembly Job added successfully:");
            } else {
              console.error("Error adding job:");
            }
          })
          .catch((error) => {
            console.error("Failed to add job:", error.message);
          });

      this.assemble.assignee_id = "";
      this.assemble.vehicle_id = "";
      this.assemble.nic = "";
      this.assemble.date = "";
      this.assemble.isCompleted = false;

      this.$emit("close");
    },
    closeModal() {
      this.$emit("close");
    }
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h2>Create an Assembly Job</h2>
      <form @submit.prevent="submitForm">
        <label>Assignee ID : </label>
        <input v-model="assemble.assignee_id" type="number" required />

        <label>Vehicle ID : </label>
        <input v-model="assemble.vehicle_id" type="number" required />

        <label>NIC of Worker : </label>
        <input v-model="assemble.nic" type="number" required />

        <label>Date of the Job : </label>
        <input v-model="assemble.date" type="date" required />

        <label>Is Task Completed? : </label>
        <input v-model="assemble.isCompleted" type="checkbox" required />

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