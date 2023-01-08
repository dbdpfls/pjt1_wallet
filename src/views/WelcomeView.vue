<template>
<div class="px-8">
  <img src="@/assets/img/ark_logo.png" alt="" height="125" class="mt-12 mb-8">
  <h2>
    Ark Wallet 방문을 환영합니다.
  </h2>
  <p class="mt-2">
    Ark Wallet은 ARK를 편하게 송금하고 잔액을 확인 할 수 있습니다.
  </p>
  <v-btn color="primary" x-large rounded depressed @click="$router.push('/select-action')" class="mt-4">시작하기</v-btn>
</div>
</template>

<script>
export default {
  name: "WelcomeView"
}
</script>

<style scoped>

</style>