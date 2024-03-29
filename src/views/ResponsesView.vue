<template>
  <div>
    <h2 class="form-data-title">Form Data</h2>
    <table class="form-data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in formData" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.phone }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: []
    }
  },
  mounted() {
    this.getFormDataFromLocalStorage()
  },
  methods: {
    getFormDataFromLocalStorage() {
      const storedData = localStorage.getItem('formData')
      if (storedData) {
        this.formData = JSON.parse(storedData)
      }
    }
  }
}
</script>

<style scoped>
.form-data-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.form-data-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #333;
}

.form-data-table th,
.form-data-table td {
  padding: 10px;
  border: 1px solid #555;
  color: #fff;
}

.form-data-table th {
  background-color: #555;
  font-weight: bold;
}

.form-data-table td {
  background-color: #444;
}
</style>
