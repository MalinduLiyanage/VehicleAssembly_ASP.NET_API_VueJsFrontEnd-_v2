<script>
import apiClient from "@/services/apiClient";

export default {
  name: "WorkerModal",
  data() {
    return {
      worker: {
        nic: "",
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        job_role: ""
      }
    };
  },
  methods: {
    submitForm() {
      apiClient.post('/Worker', {
        nic: this.worker.nic,
        firstname: this.worker.firstname,
        lastname: this.worker.lastname,
        email: this.worker.email,
        address: this.worker.address,
        job_role: this.worker.job_role,
      })
          .then((response) => {
            if (response.data.status_code === 200) {
              console.log("Worker added successfully:");
            } else {
              console.error("Error adding worker:");
            }
          })
          .catch((error) => {
            console.error("Failed to add worker:", error.message);
          });

      this.worker.nic = "";
      this.worker.firstname = "";
      this.worker.lastname = "";
      this.worker.email = "";
      this.worker.address = "";
      this.worker.job_role = "";

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
      <h2>Add a New Worker</h2>
      <form @submit.prevent="submitForm">
        <label>NIC</label>
        <input v-model="worker.nic" type="number" required />

        <label>First Name</label>
        <input v-model="worker.firstname" type="text" required />

        <label>Last Name</label>
        <input v-model="worker.lastname" type="text" required />

        <label>Email</label>
        <input v-model="worker.email" type="email" required />

        <label>Address</label>
        <input v-model="worker.address" type="text" required />

        <label>Job Role</label>
        <input v-model="worker.job_role" type="text" required />

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