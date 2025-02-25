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
  <nav class="navbar">
    <button class="nav-button-assembles" @click="showAssembles">Assembles</button>
    <button class="nav-button" @click="showVehicles">Vehicles</button>
    <button class="nav-button" @click="showWorkers">Workers</button>
    <button class="nav-button" @click="showAdmins">Admins</button>
    <button class="nav-button-logout" @click="logout">Logout</button>
    <p class="nav-button-info" >Welcome {{this.email}}</p>
  </nav>
</template>

<style scoped>

.navbar {
  background-color: #aeb156;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

.nav-button-info {
  color: #1708e1;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: default;
  border-radius: 5px;
}

.nav-button-assembles {
  background-color: #1560c1;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.nav-button-logout {
  background-color: #af0a0a;
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
.nav-button-logout:hover {
  background-color: #7a0707;
}

</style>