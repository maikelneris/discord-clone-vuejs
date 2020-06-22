<template>
  <div class="container">
    <div class="icon">
      <Hashtag :size="24" />
    </div>
    <h1 class="title">chat-livre</h1>
    <div class="separator"></div>
    <div class="description">Canal aberto para conversas</div>
  </div>
</template>

<script>
import Hashtag from "vue-material-design-icons/Pound";
export default {
  components: {
    Hashtag
  }
};
</script>

<style scoped>
.container {
  grid-area: CI;
  display: flex;
  align-items: center;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.9) 0 1px 0 0;
  z-index: 2;
}

.title {
  color: var(--white);
  font-size: 16px;
  margin-left: 9px;
  font-weight: bold;
}

.description {
  color: var(--grey);
  font-size: 15px;
}

.separator {
  background-color: var(--white);
  height: 24px;
  width: 1px;
  opacity: 0.2;
  margin: 0 13px;
}

.icon {
  color: var(--symbol);
}
</style>
