<script>
import apiClient from "@/services/apiClient";

export default {
  name: "AdminModal",
  data() {
    return {
      admin: {
        nic: "",
        firstname: "",
        lastname: "",
        email: "",
      }
    };
  },
  methods: {
    submitForm() {
      apiClient.post('/Admin', {
        nic: this.admin.nic,
        firstname: this.admin.firstname,
        lastname: this.admin.lastname,
        email: this.admin.email,
      })
          .then((response) => {
            if (response.data.status_code === 200) {
              console.log("Admin added successfully:");
            } else {
              console.error("Error adding admin:");
            }
          })
          .catch((error) => {
            console.error("Failed to add admin:", error.message);
          });

      this.admin.nic = "";
      this.admin.firstname = "";
      this.admin.lastname = "";
      this.admin.email = "";

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
      <h2>Add new Admin</h2>
      <form @submit.prevent="submitForm">
        <label>NIC</label>
        <input v-model="admin.nic" type="number" required />

        <label>First Name</label>
        <input v-model="admin.firstname" type="text" required />

        <label>Last Name</label>
        <input v-model="admin.lastname" type="text" required />

        <label>Email</label>
        <input v-model="admin.email" type="email" required />

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