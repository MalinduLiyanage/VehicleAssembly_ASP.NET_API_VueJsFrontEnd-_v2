<script>
export default {
  name: "AssembleDetailModal",
  props: {
    assemble: Object
  },
  methods: {
    getAttachmentLink(attachment) {
      if (!attachment) return "";
      const fileName = attachment.split('\\').pop();
      return `http://localhost:5290/uploads/${fileName}`;
    }
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Assemble Details</h2>
      <table>
        <tr><td><strong>Assignee ID:</strong></td><td>{{ assemble.assignee_id }}</td></tr>
        <tr><td><strong>Assignee Name:</strong></td><td>{{ assemble.assignee_first_name }} {{ assemble.assignee_last_name }}</td></tr>
        <tr><td><strong>Vehicle Model:</strong></td><td>{{ assemble.model }}</td></tr>
        <tr><td><strong>Color:</strong></td><td>{{ assemble.color }}</td></tr>
        <tr><td><strong>Engine:</strong></td><td>{{ assemble.engine }}</td></tr>
        <tr><td><strong>Worker NIC:</strong></td><td>{{ assemble.nic }}</td></tr>
        <tr><td><strong>Worker Name:</strong></td><td>{{ assemble.workerName }}</td></tr>
        <tr><td><strong>Job Role:</strong></td><td>{{ assemble.job_role }}</td></tr>
        <tr><td><strong>Date:</strong></td><td>{{ assemble.date }}</td></tr>
        <tr><td><strong>Task Completed:</strong></td><td>{{ assemble.isCompleted ? 'Yes' : 'No' }}</td></tr>
        <tr>
          <td><strong>Attachment:</strong></td>
          <td>
            <a v-if="assemble.attachment" :href="getAttachmentLink(assemble.attachment)" target="_blank">Download File</a>
            <span v-else>No attachment available</span>
          </td>
        </tr>
      </table>
      <button class="close-btn" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-btn {
  background: red;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;
}
</style>