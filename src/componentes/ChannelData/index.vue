<template>
  <div class="channeldata">
    <div class="messages">
      <ChannelMessage author="Maikel Neris" date="12/03/1982" isBot hasMention>
        <Mention>Maikel Neris</Mention>é um teste de mensagem!
      </ChannelMessage>
      <ChannelMessage
        author="Fulano de Tal"
        date="12/03/1982"
        v-for="messages in 18"
      >Este é um teste de mensagem!</ChannelMessage>
    </div>
    <div class="inputwrapper">
      <input type="text" placeholder="Conversar em #chat-livre" />
      <div class="icon">
        <At :size="24" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ChannelMessage from "./ChannelMessage";
import At from "vue-material-design-icons/At";

export default {
  components: {
    ChannelMessage,
    At
  }
};

Vue.component("Mention", {
  template: '<span class="mention"><slot /></span>'
});
</script>

<style lang="scss" scoped>
.channeldata {
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
  flex: 1;
}
.messages {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 46px - 68px);
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  .channelmessage:first-child {
    margin-top: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
}

.inputwrapper {
  width: 100%;
  padding: 0 16px;
  height: 68px;

  input {
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--chat-input);
    position: relative;

    &::placeholder {
      color: var(--grey);
    }
  }

  .icon {
    color: var(--grey);
    position: relative;
    top: -50%;
    left: 14px;
    transition: ease-out all 0.2s;
    width: 24px;
  }
}
</style>