<template>
  <div>
    <h1>전송할 지갑의 주소를 입력하세요</h1>
    <input v-model="paymentAddr" placeholder="주소를 입력해주세요."/><br>
    <button class="btn-hover color-5" v-on:click="payment"> 로그인</button>
  </div>
</template>

<script>
const {Identities, Transactions, Managers, Utils, Networks} = require('@arkecosystem/crypto');
const {Connection, Resources, ConnectionManager} = require('@arkecosystem/client');

export default {
  name: "paymentView",
  methods: {
    payment: function (){
      // Configure our API client
      const client = new ConnectionManager().connect('https://dapi.ark.io/api%27')
      const response = client.api("blocks").get("97a94b418937081e69875f150a5b24d1e5be8834e32c62479f5aa3dc91e63664")
      response.then(val => {
        console.log(val.body.data);
      }).catch(error => {
        console.log(error)
      })
    }
  },
  data: () => ({
    paymentAddr : "",
  }),
}
</script>

<style scoped>

</style>