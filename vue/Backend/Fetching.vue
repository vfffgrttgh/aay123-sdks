<script setup lang="ts">
  import db from "./Database.vue";

  export function fetchData(): any {
    return db.data();
  };
</script>
