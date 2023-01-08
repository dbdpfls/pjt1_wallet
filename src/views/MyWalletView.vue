<template>
  <div>
    <img id="logo" alt="arkWallet" src="../assets/img/ark_logo.png"><br>
    <span>지갑 주소 : {{ myAddr }}</span><br>

    <button v-on:click="payment" class="btn-hover color-5">송금하기</button>
  </div>
</template>

<script>
export default {
  name: "MyWalletView",
  created() {
    this.myAddr = this.$store.getters.address
  },
  methods: {
    payment: function (){
      return this.$router.push({
        name: 'payment',
      })
    }
  },
  data: () => ({
    myAddr : "",
  }),
}
</script>

<style>

</style>