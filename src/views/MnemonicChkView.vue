<template>
  <div>
    <h1>비밀 복구 구문 확인하기</h1><br>
    <input v-model='mnemonicChk'  placeholder="비밀 복구 구문을 입력해주세요."/>
    <button class="btn-hover color-5" v-on:click="validateMnemonic">확인</button>
  </div>
</template>

<script>
import { BIP39, Hash } from "@ardenthq/sdk-cryptography";

export default {
  name: "MnemonicChkView",
  methods: {
    validateMnemonic: function (){

      this.$store.commit('CHK_Mnemonic', BIP39.validate(this.mnemonicChk))
      if(BIP39.validate(this.mnemonicChk) == false){
        alert("비밀 복구 구문이 잘못되었습니다.")
      }else{
        const privateKey = Hash.sha256(BIP39.toEntropy(this.mnemonicChk))

        const publicKey = Hash.ripemd160(Hash.sha256(privateKey)).toString("hex")
        this.$store.commit('SET_PUBLIC', publicKey)

        const address = Hash.ripemd160(Hash.sha256(publicKey)).toString("hex")
        this.$store.commit('SET_ADDR', address)

        return this.$router.push({
          name: 'createAccount',
          params: {mnemonicChk: this.mnemonicChk, publicKey: this.$store.getters.publicKey, address: this.$store.getters.address}
        })
      }
    },
  },
  data: () => ({
    mnemonicChk : "",
  }),
}
</script>

<style>

input {
  width: 60%;
  height: 35%;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  margin: 10px;
}

</style>