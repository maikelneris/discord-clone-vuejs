<template>
  <div class="userlist">
    <div class="role">Disponível - 1</div>
    <UserRow nickname="Maikel Neris" />
    <div class="role">Offline - 18</div>
    <UserRow nickname="Joaquim Oliveira" isBot />
    <UserRow nickname="Fulano de Tal" v-for="users in 24" />
  </div>
</template>

<script>
import UserRow from "./UserRow";
export default {
  components: {
    UserRow
  }
};
</script>

<style lang="scss" scoped>
.userlist {
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 10px 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
}
.role {
  margin-top: 20px;
  color: var(--grey);
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
}
</style>
