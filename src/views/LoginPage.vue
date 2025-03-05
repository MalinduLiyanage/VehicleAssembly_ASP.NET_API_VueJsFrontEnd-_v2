<script>
import apiClient from "@/services/apiClient";
import {useAuthStore, useInfoStore} from "@/datastore/store";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      apiClient.post('/AdminLogin', { email: this.email, password: this.password })
          .then((response) => {
            if (response.data.status_code === 200) {
              const token = response.data.data.token;
              const authStore = useAuthStore();
              const infoStore = useInfoStore();
              authStore.setToken(token);
              infoStore.setEmail(this.email);

              this.errorMessage = "";
              this.$router.push({ name: "AssemblesPage"});
            } else {
              this.errorMessage = "Login Failed!";
            }
          })
          .catch((error) => {
            this.errorMessage = "Error occurred: " + error.message;
          });
    }
  }

};
</script>

<template>
  <v-app>
    <v-main class="pa-10">
      <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div class="input-group">
            <label>Email:</label>
            <input type="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label>Password:</label>
            <input type="password" v-model="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </v-main>
  </v-app>

</template>

<style scoped>
.login-container {
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.input-group {
  margin-bottom: 15px;
  text-align: left;
}
label {
  display: block;
  font-weight: bold;
}
input {
  width: 90%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
button:hover {
  background-color: #0056b3;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
