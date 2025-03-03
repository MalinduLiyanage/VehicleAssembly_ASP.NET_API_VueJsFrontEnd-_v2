<script>
import AssembleCard from "@/components/cards/AssembleCard.vue";
import apiClient from "@/services/apiClient";
import AssembleModal from "@/components/modals/AssembleModal.vue";

export default {
  name: "AssemblesView",
  components: {AssembleModal, AssembleCard},
  data() {
    return {
      showAssembleModal: false,
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
  <div class="cards-container">
    <AssembleCard
        v-for="assemble in data"
        :key="assemble.id"
        :assemble="assemble"
    />
  </div>
  <AssembleModal v-if="showAssembleModal" @close="showAssembleModal = false" />
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