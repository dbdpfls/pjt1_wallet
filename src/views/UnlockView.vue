<template>
  <div>
    <img src="@/assets/img/ark_logo.png" alt="" height="125" class="mt-12 mb-8">
    <h2>
      잠금해제
    </h2>
    <p class="mt-2">
      자산을 안전하게 보호하기위해 자동으로 잠겼습니다
    </p>

    <div style="width: 360px; max-width: 100%;" class="mx-auto">
      <v-text-field
          type="password"
          full-width
          autofocus
          label="패스워드"
          placeholder="비밀번호를 입력하세요"
          v-model="password"
          @keyup.enter="unlock"
      ></v-text-field>
      <v-btn color="primary" :disabled="password.length < 8" block large rounded depressed @click="unlock" class="mt-6">시작하기</v-btn>
    </div>

    <a class="primary--text mt-4 d-block text-decoration-none" @click="$router.push('/import-with-seed-phrase')">
      비밀번호를 잊으셨나요?
    </a>
  </div>
</template>

<script>
export default {
  name: "UnlockView",
  data() {
    return {
      password: '',
    }
  },
  methods: {
    async unlock() {
      try {
        const walletData = await this.$store.dispatch('unlockWallet', {
          password: this.password,
        });
        if(walletData?.mnemonic) {
          console.log(32, this.$route.query?.redirect || '/');
          await this.$router.replace(this.$route.query?.redirect || '/');
        }
      } catch(e) {
        if(e?.message) {
          await this.$store.dispatch('showSnackbar', { text: '비밀번호가 올바르지 않습니다.' });
        }
      }
    }
  }
}
</script>

<style scoped>

</style>