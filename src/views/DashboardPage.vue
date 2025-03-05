<script>
import NavbarComponent from "@/components/navbarComponent.vue";

export default {
  name: "DashboardPage",
  components: {NavbarComponent},
  methods: {
    showVehiclesView(){
      this.$router.push({ name: "VehiclesPage"});
    },
    showWorkersView(){
      this.$router.push({ name: "WorkersPage"});
    },
    showAdminsView(){
      this.$router.push({ name: "AdminsPage"});
    },
    showAssemblesView(){
      this.$router.push({ name: "AssemblesPage"});
    },
  }
}
</script>

<template>
  <v-app>
    <navbar-component
        @showVehicles="showVehiclesView"
        @showWorkers="showWorkersView"
        @showAdmins="showAdminsView"
        @showAssembles="showAssemblesView"
    />
    <router-view />
  </v-app>
</template>

<style scoped>

</style>