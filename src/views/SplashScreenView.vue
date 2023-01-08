<template>
<div>
  <img src="@/assets/img/ark_logo.png" alt="" width="125" height="125" class="mb-8">
  <div>
    <v-progress-circular
        indeterminate
        color="#ccc"
    ></v-progress-circular>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SplashScreenView",
  computed: {
    ...mapGetters(['walletData', 'encryptedWalletData', 'lastRoutePath']),
  },
  created() {
    if(!this.encryptedWalletData) {
      this.$router.push('/welcome');
      return;
    }
    if(this.encryptedWalletData && !this.walletData) {
      this.$router.push('/unlock?redirect=' + this.lastRoutePath);
      return;
    }
    this.$router.push('/home');
  }
}
</script>

<style scoped>

</style>