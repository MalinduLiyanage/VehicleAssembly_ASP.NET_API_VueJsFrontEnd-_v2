<script>
import {useAuthStore, useInfoStore} from "@/datastore/store";

export default {
  name: "navbarComponent",
  data(){
    return{
      email: ""
    }
  },
  methods: {
    showVehicles(){
      this.$emit("showVehicles");
    },
    showWorkers(){
      this.$emit("showWorkers");
    },
    showAdmins(){
      this.$emit("showAdmins");
    },
    showAssembles(){
      this.$emit("showAssembles");
    },
    displayEmail(){
      const infoStore = useInfoStore()
      this.email = infoStore.getEmail();

    },
    logout(){
      const authStore = useAuthStore();
      authStore.clearToken();
      const infoStore = useInfoStore();
      infoStore.clearEmail()

      this.$router.push({name:'Login'});
    }
  },
  mounted() {
    this.displayEmail();
  }
}
</script>

<template>
  <v-app-bar app color="primary" density="compact">
    <v-container class="d-flex align-center">
      <v-btn variant="text" @click="showAssembles">Assembles</v-btn>
      <v-btn variant="text" @click="showVehicles">Vehicles</v-btn>
      <v-btn variant="text" @click="showWorkers">Workers</v-btn>
      <v-btn variant="text" @click="showAdmins">Admins</v-btn>

      <v-spacer></v-spacer>

      <v-label class="mr-4">Welcome, {{ email }}</v-label>

      <v-btn variant="elevated" color="red" @click="logout">Logout</v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>

</style>