<template>
<CommonLayout>
  <div class="mx-auto pt-12 text-left" style="max-width: 100%; width: 360px;">
    <h1 class="font-weight-medium mb-8">
      비밀번호 만들기
    </h1>

    <v-text-field type="password" v-model="password" hide-details outlined label="새 비밀번호" placeholder="8자리 이상 입력"></v-text-field>
    <v-text-field type="password" class="mt-6" v-model="passwordConfirm" hide-details outlined label="비밀번호 확인" placeholder="8자리 이상 입력"></v-text-field>
    <v-btn color="primary" large rounded depressed class="mt-6" @click="createWallet" :disabled="password.length < 8 || password !== passwordConfirm">지갑 생성</v-btn>
  </div>
</CommonLayout>
</template>

<script>
import CommonLayout from "@/layouts/CommonLayout";
export default {
  name: "CreatePassword",
  components: {CommonLayout},
  data() {
    return {
      password: '',
      passwordConfirm: '',
    }
  },
  methods: {
    async createWallet() {
      const walletData = await this.$store.dispatch('createWallet', { password: this.password });
      if(walletData?.mnemonic) {
        await this.$router.replace('/seed-phrase');
      }
    }
  }
}
</script>

<style scoped>

</style>