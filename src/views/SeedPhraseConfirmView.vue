<template>
  <CommonLayout>
    <div class="text-left mx-auto pt-12" style="max-width: 100%; width: 360px;">
      <h1 class="font-weight-normal">
        비밀 복구 구문 확인
      </h1>


      <v-row class="mt-12">
        <v-col cols="4" v-for="(mnemonicToken, i) in mnemonicTokens" :key="mnemonicToken.key" style="min-height: 32px" class="d-flex align-center font-weight-bold">
          <!--      ${i+1}번째 단어 입력-->
          <v-text-field dense height="28" outlined hide-details v-if="mnemonicToken.type === 'input'" type="text" v-model="mnemonicTokens[i].value" :placeholder="`${mnemonicToken.key}#${i+1}`" style="border:1px solid #eee;"></v-text-field>
          <span v-else> {{ mnemonicTokens[i].value }} </span>
        </v-col>
      </v-row>



      <p class="mt-12">
        빈칸에 해당하는 단어를 입력하세요
      </p>

      <v-btn @click="checkMnemonic" rounded depressed color="primary" large class="mt-2">
        다음
      </v-btn>
    </div>
  </CommonLayout>


</template>

<script>
import {mapGetters} from "vuex";
import CommonLayout from "@/layouts/CommonLayout";

export default {
  name: "SeedPhraseConfirmView",
  components: {CommonLayout},
  data() {
    return {
      mnemonicTokens: [],
      randomNumbers: [],
    }
  },
  computed: {
    ...mapGetters(['mnemonic2']),
  },
  created() {
    const tempMnemonicTokens = this.mnemonic2.split(' ');
    const randomNumbers = [];

    while(randomNumbers.length !== 3) {
      const randomNumber = Math.floor(Math.random() * (tempMnemonicTokens.length - 0)+ 1);
      if(randomNumbers.indexOf(randomNumber) === -1) {
        randomNumbers.push(randomNumber);
      }
    }
    this.mnemonicTokens = tempMnemonicTokens.map((mnemonicToken, i) => {
      if(randomNumbers.indexOf(i) !== -1) {
        return {
          key: mnemonicToken,
          value: '',
          type: 'input'
        };
      }
      return {
        key: mnemonicToken,
        value: mnemonicToken,
        type: 'text'
      };
    });
  },
  methods: {
    checkMnemonic() {
      if(this.mnemonic2 && this.mnemonicTokens.map(mnemonicToken => mnemonicToken.value).join(' ') === this.mnemonic2) {
        this.$router.replace('/home');
      } else {
        this.$store.dispatch('showSnackbar', { text: '비밀 복구 구문이 일치하지 않습니다.' });
      }
    }
  }
}
</script>

<style scoped>

</style>