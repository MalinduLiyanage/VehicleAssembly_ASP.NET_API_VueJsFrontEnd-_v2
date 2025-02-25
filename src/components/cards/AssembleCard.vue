<script>
export default {
  name: "AssembleCard",
  props: {
    assemble: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <p>Assignee ID : {{ assemble.assignee_id  }}</p>
    <p>Vehicle ID : {{ assemble.vehicle_id  }}</p>
    <p>Worker ID : {{ assemble.nic  }}</p>
    <p>Date : {{ assemble.date  }}</p>
    <p>Task Completed : {{ assemble.isCompleted  }}</p>

  </div>
</template>

<style scoped>
.card {
  max-width: 100vw;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
}

</style>