<template>
  <section class="form-wrap">
    <div class="form-container dark-theme">
      <form @submit.prevent="saveForm" class="form">
        <label for="name" class="form-label">Name:</label>
        <input v-model="formData.name" id="name" type="text" required class="form-input" />

        <label for="phone" class="form-label">Phone:</label>
        <input v-model="formData.phone" id="phone" type="tel" required class="form-input" />

        <label for="email" class="form-label">Email:</label>
        <input v-model="formData.email" id="email" type="email" required class="form-input" />

        <label for="address" class="form-label">Address:</label>
        <input v-model="formData.address" id="address" type="text" required class="form-input" />

        <button type="submit" class="form-button">Submit</button>
      </form>
      <responses-view />
    </div>
  </section>
</template>

<script>
import ResponsesView from '@/views/ResponsesView.vue'

export default {
  components: {
    ResponsesView
  },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        address: ''
      }
    }
  },
  methods: {
    saveForm() {
      this.$store.commit('saveFormData', this.formData)
    }
  }
}
</script>

<style scoped>
.form-container {
  margin: 20px;
}

.form {
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  margin: auto;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0056b3;
}
.form-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
