import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    jsonData: [],
  }),
  getters: {},
  actions: {
    async fetchData() {
      try {
        const response = await fetch('src/data/data.json');
        
        this.jsonData = await response.json();
    } catch (error) {
        console.log('Error fetching data', error);
    }
    },
  },
});
