<script>

import apiClient from "@/services/apiClient";
import AdminModal from "@/components/modals/AdminModal.vue";

export default {
  name: "AdminsView",
  components: {AdminModal},
  data() {
    return {
      showAdminModal: false,
      data: [],
    }
  },
  methods: {
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
    this.fetchAdmins();
  },
}
</script>

<template>
  <div class="header-container">
    <h1>Admin List</h1>
    <button class="add-button" @click="showAdminModal = true">Add Admin</button>
  </div>

  <v-table density="compact" fixed-header>
    <thead>
    <tr>
      <th class="text-left">
        NIC
      </th>
      <th class="text-left">
        First Name
      </th>
      <th class="text-left">
        Last Name
      </th>
      <th class="text-left">
        Email
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="admin in data"
        :key="admin.id"
        :admin="admin">
      <td>{{ admin.nic }}</td>
      <td>{{ admin.firstname }}</td>
      <td>{{ admin.lastname }}</td>
      <td>{{ admin.email }}</td>
    </tr>
    </tbody>
  </v-table>

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