<script>

import NavbarComponent from "@/components/navbarComponent.vue";
import AdminsView from "@/views/homeview/AdminsView.vue";
import AssemblesView from "@/views/homeview/AssemblesView.vue";
import VehiclesView from "@/views/homeview/VehiclesView.vue";
import WorkersView from "@/views/homeview/WorkersView.vue";

export default {
  name: "HomePage",
  components:{
    WorkersView,
    VehiclesView,
    AssemblesView,
    AdminsView,
    NavbarComponent,
  },
  data(){
    return {
      showVehicles: false,
      showWorkers: false,
      showAdmins: false,
      showAssembles: true,
    }
  },
  methods: {
    showVehiclesView(){
      this.showVehicles = true;
      this.showWorkers = false;
      this.showAdmins = false;
      this.showAssembles = false;
    },
    showWorkersView(){
      this.showVehicles = false;
      this.showWorkers = true;
      this.showAdmins = false;
      this.showAssembles = false;
    },
    showAdminsView(){
      this.showVehicles = false;
      this.showWorkers = false;
      this.showAdmins = true;
      this.showAssembles = false;
    },
    showAssemblesView(){
      this.showVehicles = false;
      this.showWorkers = false;
      this.showAdmins = false;
      this.showAssembles = true;
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
    <v-main class="pa-10">
      <div v-if="showVehicles">
        <VehiclesView />
      </div>

      <div v-if="showWorkers">
        <WorkersView />
      </div>

      <div v-if="showAdmins">
        <AdminsView />
      </div>

      <div v-if="showAssembles">
        <AssemblesView />
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
