<script>
export default {
  name: "WorkerCard",
  props: {
    worker: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <h3>Name : {{ worker.firstname  }} {{ worker.lastname }}</h3>
    <p>Worker ID : {{ worker.nic }}</p>
    <p>Address : {{ worker.address }}</p>
    <p>Job : {{ worker.job_role }}</p>
  </div>
</template>

<style scoped>
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
}


</style>