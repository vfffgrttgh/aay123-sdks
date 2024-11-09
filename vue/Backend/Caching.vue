<script lang="ts">
  export default {
    methods: {
      addItem({name, value}: any): void {
        localStorage.setItem(name, value);
      },

      getItem(name: any): void {
        localStorage.getItem(name);
      },

      deleteItem(name: any): void {
        localStorage.deleteItem(name);
      },
    },
  }
</script>
