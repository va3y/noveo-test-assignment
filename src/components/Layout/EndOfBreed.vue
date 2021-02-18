<template>
  <div class="container">
    This is the end of this breed
    <div class="subtitle">
      Feeling lucky? Go and see random dogs on the
      <router-link to="/"> main page</router-link>.
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  border: 2px $primary solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 10%;
}

.subtitle {
  font-size: 14px;
  margin-top: 20px;
}
</style>
