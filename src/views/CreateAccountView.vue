<template>
  <div>
    <h1>축하합니다!!</h1><br>

    <span>공개키 : {{ publicKey }}</span><br><br>
    <span>지갑 주소 : {{ address }}</span>

    <button class="btn-hover color-5"><router-link to="/login" v-bind:style="{color: 'white'}">로그인</router-link></button>
  </div>
</template>

<script>

export default {
  name: "CreateAccountView",
  props: {
    mnemonicChk: {
      type: String,
      default: ''
    },
    publicKey: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>