<template>
  <CommonLayout>
    <div class="text-left mx-auto pt-12" style="max-width: 100%; width: 360px;">
      <h1 class="font-weight-normal">
        비밀 복구 구문으로<br> 지갑 가져오기
      </h1>

      <v-textarea label="비밀 복구 구문" class="mt-12" v-model="mnemonicText" outlined no-resize placeholder="지갑을 복구하려면 비밀 구문을 여기에 입력하세요. 각 단어 뒤에 공백을 넣어 구분하세요."></v-textarea>

      <v-text-field v-model="password" type="password" outlined label="새 비밀번호" placeholder="8자리 이상 입력"></v-text-field>
      <v-text-field v-model="passwordConfirm" type="password" outlined label="비밀번호 확인" placeholder="8자리 이상 입력"></v-text-field>

      <v-btn @click="recoveryWallet" rounded depressed color="primary" large class="mt-2" :disabled="password.length < 8 || password !== passwordConfirm || mnemonicText.length < 10">
        지갑 가져오기
      </v-btn>
    </div>
  </CommonLayout>


</template>

<script>
export default {
  name: "ImportWithSeedPhraseView",
  data() {
    return {
      mnemonicText: '',
      password: '',
      passwordConfirm: '',
    }
  },
  methods: {
    async recoveryWallet() {
      try {
        const walletData = await this.$store.dispatch('recoveryWallet', {
          mnemonic: this.mnemonicText,
          password: this.password,
        });
        if(walletData?.mnemonic) {
          await this.$router.replace('/home');
        } else {
          await this.$store.dispatch('showSnackbar', { text: '복구 구문이 올바르지 않습니다.' });
        }
      } catch(e) {
        if(e?.message) {
          await this.$store.dispatch('showSnackbar', { text: e.message });
        }
      }
    }
  }
}
</script>

<style scoped>

</style>