<template>
  <div class="about">
    <h1>ArkWallet이 처음이세요?</h1>

    <div class="box_left">
      <h3>아니요, 비밀 복구 구문이 있습니다.</h3>
      <h5>비밀 복구 구문을 사용하여 기존 지갑 가져오기</h5>
      <button class="btn-hover color-5"><router-link to="/login" v-bind:style="{color: 'white'}">지갑 가져오기</router-link></button>
    </div>
    <div class="box_right">
      <h3>네, 지갑을 만들어야 합니다.</h3>
      <h5>비밀 복구 구문을 생성하여 새 지갑 생성하기</h5>
      <button class="btn-hover color-5"><router-link to="/createPw" v-bind:style="{color: 'white'}">지갑 생성하기</router-link></button>
    </div>
  </div>
</template>

<style>

.box_left{
  position: relative;
  width: 45%;
  border:1px solid;
  padding:10px;
  float: left;
  margin: 2%;
}

.box_right{
  position: relative;
  width: 45%;
  border:1px solid;
  padding:10px;
  float: right;
  margin: 2%;
}

.btn-hover {
  width: 50%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 10%;
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