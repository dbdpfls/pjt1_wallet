<template>
<CommonLayout>
  <div class="text-left mx-auto pt-12" style="max-width: 100%; width: 360px;">
    <h1 class="font-weight-normal">
      비밀 복구 구문
    </h1>


    <h2 class="font-weight-bold mt-6 mb-6">
      <span ref="copyText">{{ mnemonic2 }}</span>
      <v-btn icon @click="copy">
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </h2>



    <p>
      비밀 백업 구문을 이용하면 계정을 쉽게 백업하고 복구할 수 있습니다.<br><br>
      경고: 비밀 복구 구문은 절대로 공개하지 마세요. 이 구문이 있는 사람은 귀하의 Ether를 영원히 소유할 수 있습니다.
    </p>

    <v-btn @click="$router.push('/seed-phrase-confirm')" rounded depressed color="primary" large class="mt-2">
      다음
    </v-btn>
  </div>
</CommonLayout>
</template>

<script>
import {mapGetters} from "vuex";
import CommonLayout from "@/layouts/CommonLayout";

export default {
  name: "SeedPhraseView",
  components: {CommonLayout},
  computed: {
    ...mapGetters(['mnemonic2']),

  },
  created() {

  },
  methods: {
    copy() {
      const linkElement = this.$refs.copyText;
      const range = document.createRange();
      range.selectNode(linkElement);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      this.$store.dispatch('showSnackbar', { text: '복사되었습니다.' })
    }
  }
}
</script>

<style scoped>

</style>