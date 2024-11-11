<script lang="ts">
  export default {
    methods: {
      addItem({name, value}: any): void {
        localStorage.setItem(name, value);
      },

      getItem(name: any): void {
        const item: any = localStorage.getItem(name);

        return item;
      },

      deleteItem(name: any): void {
        localStorage.removeItem(name);
      },
    },
  }
</script>
