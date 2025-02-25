<script>
export default {
  name: "AdminCard",
  props: {
    admin: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <h3>{{ admin.firstname }} {{ admin.lastname }}</h3>
    <p>{{ admin.email  }}</p>

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