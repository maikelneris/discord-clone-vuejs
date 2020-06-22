<template>
  <div class="container">
    <div class="title">Servidor Vue</div>
    <div class="icon">
      <ExpandIcon :size="28" />
    </div>
  </div>
</template>

<script>
import ExpandIcon from "vue-material-design-icons/ChevronDown";
export default {
  components: {
    ExpandIcon
  }
};
</script>

<style scoped>
.container {
  grid-area: SN;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary);
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.9) 0 1px 0 0;
  z-index: 2;
}

.title {
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
}

.icon {
  color: var(--white);
  cursor: pointer;
}
</style>
