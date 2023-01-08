<template>
  <div>
    <h1>비밀번호를 입력하세요</h1>
    <input v-model="loginPw" type='password' placeholder="비밀번호를 입력해주세요."/><br>
    <button class="btn-hover color-5" v-on:click="checkPassword"> 로그인</button>
  </div>
</template>

<script>

export default {
  name: "LoginView",

  methods: {
    checkPassword: function (){
      if(this.$store.getters.pwd !== this.loginPw){
        alert('잘못된 비밀번호 입니다.')
      }else {
        return this.$router.push({
          name: 'wallet',
        })
      }

    }
  },

  data: () => ({
    loginPw : "",
  }),
}
</script>

<style>

input {
  width: 500px;
  height: 50px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  margin: 10px;
}

</style>