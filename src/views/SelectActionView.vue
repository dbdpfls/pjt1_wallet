<template>
  <CommonLayout>
    <div>
      <h2 class="mt-10 mb-8">
        Ark Wallet이 처음이세요?
      </h2>
      <v-row>
        <v-col>
          <v-card outlined class="py-10 px-2">
            <v-icon size="36" class="mb-4">
              mdi-application-import
            </v-icon>
            <h3>아니요. 이미 비밀 복구 구문이 있습니다.</h3>
            <p class="mt-2">
              비밀 복구 구문을 사용하여 기존 지갑 가져오기
            </p>
            <v-btn color="primary" large rounded depressed @click="$router.push('/import-with-seed-phrase')">지갑 가져오기</v-btn>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined class="py-10 px-2">
            <v-icon size="36" class="mb-4">
              mdi-plus
            </v-icon>
            <h3>네, 설정을 시작하죠.</h3>
            <p class="mt-2">
              새 지갑을 만들어 보세요
            </p>
            <v-btn color="primary" large rounded depressed @click="$router.push('/create-password')">지갑 생성</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </CommonLayout>
</template>

<script>
import CommonLayout from "@/layouts/CommonLayout";
export default {
  name: "SelectAction",
  components: {CommonLayout}
}
</script>

<style scoped>

</style>