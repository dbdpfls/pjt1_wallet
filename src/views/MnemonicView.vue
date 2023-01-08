<template>
  <div>
    <h1>비밀 복구 구문 생성</h1><br>
    <ul>
      <li><h4>나의 비밀 복구 구문</h4></li>
      <li class="box_mnemonic">{{mnemonic}}</li>
    </ul>
    <br>
    <ul class="box">
      <li><b>'비밀 복구 구문'이란?</b></li>
      <li>비밀 복구 구문은 지갑과 자금의 '마스터키'입니다.</li>

      <li><b>비밀 복구 구문을 공유해도 될까요?</b></li>
      <li>비밀 복구 구문은 절대로 공유해서는 안됩니다.</li>
    </ul>

    <button class="btn-hover color-5"><router-link to="/mnemonicChk" v-bind:style="{color: 'white'}">다음</router-link></button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: "MnemonicView",
  computed: {
    ...mapGetters(['mnemonic'])
  },
  created() {
    // const env = new Environment({ coins: { ARK }, httpClient: new HttpClient(), storage: "localstorage" });
    // console.log(env.profiles().all())
    // let profile = new Profile({
    //   id: 'test',
    //   name: 'test',
    //   avatar: '',
    //   password: '',
    //   data: 'test',
    //   appearance: {
    //     accentColor: '',
    //     dashboardTransactionHistory: '',
    //     theme: '',
    //     useExpandedTables: '',
    //     useNetworkWalletNames: '',
    //   },
    // });
    // console.log(profile)
    // console.log(this.mnemonic)
    // // console.log(Profile.id())
    // console.log(profile.walletFactory().fromMnemonicWithBIP39(this.mnemonic))
  },

  data: () => ({

  })
}
</script>

<style>

ul{
  list-style:none;
  margin: 10px;
}

.box {
  position: center;
  border:1px solid;
  padding:10px;
}

.box_mnemonic {
  position: center;
  width: 100%;
  border:1px solid;
  padding:10px;
  margin: 0 auto;
}

.btn-hover {
  width: 50%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  height: 55px;
  text-align:center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.color-5 {
  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}
</style>