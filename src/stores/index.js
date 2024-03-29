import { createStore } from 'vuex'

const store = createStore({
  state: {
    formData: JSON.parse(localStorage.getItem('formData')) || []
  },
  mutations: {
    saveFormData(state, newData) {
      state.formData.push(newData)
      localStorage.setItem('formData', JSON.stringify(state.formData))
    }
  }
})

export default store
