<template>
<div>
  <v-app-bar
    flat
    color="#f5f5f5"
    class="relative"
  >

    <v-toolbar-title class="font-weight-bold " style="flex:1;">
     <div class="d-flex align-center full-width">
       <img src="@/assets/img/ark_logo.png" alt="" height="36" class="mr-3">Ark Wallet

       <div class="d-flex align-center ml-auto font-weight-bold" style="font-size:12px;" v-if="showAddress">
         <div class="text-truncate" style="max-width: 120px" ref="copyText">
           0x6decf532ba170c20ff84c95583AEAC91147914cC
         </div>
         <v-btn icon x-small @click="copy">
           <v-icon>
             mdi-content-copy
           </v-icon>
         </v-btn>
       </div>
     </div>
    </v-toolbar-title>

  </v-app-bar>
  <div class="px-6">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "CommonLayout",
  props: {
    showAddress: {
      type: Boolean,
      default: false
    }
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