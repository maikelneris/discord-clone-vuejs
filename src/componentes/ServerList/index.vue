<template>
  <div class="container">
    <ServerButton isHome />
    <div class="separator"></div>
    <ServerButton :mentions="3" />
    <ServerButton />
    <ServerButton hasNotification />
    <ServerButton />
    <ServerButton />
    <ServerButton />
    <ServerButton :mentions="4" hasNotification />
    <ServerButton />
    <ServerButton hasNotification />
    <ServerButton />
    <ServerButton />
    <ServerButton :mentions="35" hasNotification />
    <ServerButton />
    <ServerButton />
    <ServerButton />
    <ServerButton />
    <ServerButton :mentions="4" />
    <ServerButton hasNotification />
    <ServerButton />
    <ServerButton />
  </div>
</template>

<script>
import ServerButton from "./ServerButton";
export default {
  components: {
    ServerButton
  }
};
</script>

<style scoped lang="scss">
.container {
  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);
  padding: 11px 0;
  max-height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

.separator {
  width: 32px;
  border-bottom: solid 2px var(--quaternary);
  margin-bottom: 8px;
}
</style>
