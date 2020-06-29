<template>
  <div class="channelmessage" :class="{'has-mention': hasMention}">
    <div class="avatar" :class="{'bot-avatar' : hasMention}"></div>
    <div class="message">
      <div class="user">
        <strong>{{author}}</strong>
        <span class="bot" v-if="isBot">Bot</span>
        <span class="date">{{date}}</span>
      </div>
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    date: String,
    hasMention: Boolean,
    isBot: Boolean
  }
};
</script>

<style lang="scss" scoped>
.channelmessage {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-right: 4px;
  background-color: transparent;
  margin-top: 13px;

  &.has-mention {
    background-color: var(--mention-message);
    border-left: solid 2px var(--mention-detail);
  }

  &:hover {
    background-color: var(--quaternary);
  }
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: var(--secondary);
  border-radius: 50%;
  flex-shrink: 0;
  &.bot-avatar {
    background-color: var(--mention-detail);
  }
}

.message {
  margin-left: 17px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    color: var(--white);
    font-size: 16px;
  }

  .date {
    margin-left: 6px;
    color: var(--grey);
    font-size: 13px;
  }

  .bot {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    padding: 4px 5px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
  }
  .body {
    color: var(--white);
    text-align: left;
    font-size: 16px;
    .mention {
      color: var(--link);
      cursor: pointer;
      margin-right: 6px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>