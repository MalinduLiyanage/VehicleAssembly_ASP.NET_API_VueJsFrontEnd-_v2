<script>
import apiClient from "@/services/apiClient";
import AssembleModal from "@/components/modals/AssembleModal.vue";
import AssembleDetailModal from "@/components/modals/AssembleDetailModal.vue";

export default {
  name: "AssemblesView",
  components: {AssembleDetailModal, AssembleModal},
  data() {
    return {
      showAssembleModal: false,
      showDetailsModal: false,
      selectedAssemble: null,
      data: [],
    }
  },
  methods: {
    fetchAssembles() {
      apiClient.get('/Assembles')
          .then((response) => {
            if (response.data.status_code === 200) {
              this.data = response.data.data.assembles;
            } else {
              this.errorMessage = "Bad Request!";
            }
          })
          .catch((error) => {
            this.errorMessage = "Error occurred: " + error.message;
          });
    },
    toggleInfo(assemble) {
      this.selectedAssemble = assemble;
      this.showDetailsModal = true;
    },
    getAttachmentLink(attachment) {
      if (!attachment) return "";
      const fileName = attachment.split('\\').pop();
      return `http://localhost:5290/uploads/${fileName}`;
    }
  },
  mounted() {
    this.fetchAssembles();
  },
}
</script>

<template>
  <div class="header-container">
    <h1>Assembles List</h1>
    <button class="add-button" @click="showAssembleModal = true">Create Assemble Job</button>
  </div>
  <v-table density="compact" fixed-header>
    <thead>
    <tr>
      <th class="text-left">
        Assignee Name
      </th>
      <th class="text-left">
        Vehicle Name
      </th>
      <th class="text-left">
        Worker Name
      </th>
      <th class="text-left">
        Date
      </th>
      <th class="text-left">
        Task Completed
      </th>
      <th class="text-left">
        Attachment
      </th>
      <th class="text-left">

      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="assemble in data"
        :key="assemble.id"
        :assemble="assemble">
      <td>{{ assemble.assignee_first_name }} {{ assemble.assignee_last_name }}</td>
      <td>{{ assemble.model }}</td>
      <td>{{ assemble.workerName }}</td>
      <td>{{ assemble.date }}</td>
      <td>{{ assemble.isCompleted }}</td>
      <td>
        <a v-if="assemble.attachment" :href="getAttachmentLink(assemble.attachment)" class="btn btn-primary" target="_blank">Download File</a>
        <span v-else>No attachment available</span>
      </td>
      <td>
        <button @click="toggleInfo(assemble)" class="btn btn-primary">See Info</button>
      </td>

    </tr>
    </tbody>
  </v-table>

  <AssembleModal v-if="showAssembleModal" @close="showAssembleModal = false" />
  <AssembleDetailModal v-if="showDetailsModal" :assemble="selectedAssemble" @close="showDetailsModal = false"></AssembleDetailModal>
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