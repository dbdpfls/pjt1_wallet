<template>
  <div>
    <h1>비밀번호를 입력하세요!</h1>
    <form v-on:submit="onSubmitForm">
      <ul>
        <li>
          <input v-model='pwd' type='password' placeholder="비밀번호를 입력해주세요."/><br>
        </li>
        <li>
          <input v-model='pwdChk' type='password' placeholder="다시 한 번 입력해주세요."/>
        </li>
        <li>
          <button id='pwdSubmit' type='submit' class="btn-hover color-5" v-on:click="requestMnemonic" v-bind:disabled="this.pwd != this.pwdChk">생성</button>
        </li>
      </ul>
    </form>

  </div>
</template>

<script>
import { BIP39 } from "@ardenthq/sdk-cryptography";

export default {
  name: "CreatePwView",

  methods: {
    requestMnemonic : function (){
      this.$store.commit('SET_Mnemonic', BIP39.generate())
    },
    onSubmitForm : function (e){
      e.preventDefault();
      if(this.pwd !== this.pwdChk){
        alert("비밀번호가 일치하지 않습니다.")
      }else{
        this.$store.commit('SET_PWD', this.pwd)

        return this.$router.push({
          name: 'newMnemonic',
        })
      }
    },
  },

  data: () => ({
    pwd : "",
    pwdChk : "",
  }),
}
</script>

<style>
ul{
  list-style:none;
}

input {
  width: 500px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  margin: 10px;
}

.btn-hover {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 45px;
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