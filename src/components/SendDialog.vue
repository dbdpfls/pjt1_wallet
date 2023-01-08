<template>
<v-dialog v-model="showDialog" width="360" max-width="360">

    <v-card>
      <v-card-title>
        <span class="text-h5">보내기</span>
      </v-card-title>
      <v-card-text class="pt-6">
        <div>
          <v-text-field label="지갑 주소" v-model="address" dense hide-details></v-text-field>
        </div>
        <div class="pt-10"></div>
        <div>
          <v-text-field  value=" " dense hide-dtails v-model="amount" label="금액(단위 ARK)"></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            @click="showDialog = false"
        >
          취소
        </v-btn>
        <v-btn
            color="primary darken-1"
            text
            @click="$store.commit('SET_AMOUNT', 12000); $store.dispatch('showSnackbar', { text: '정상적으로 송금되었습니다.' }); showDialog = false"
            :disabled="amount.length < 2 || address.length < 2"

        >
          보내기
        </v-btn>
      </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
  name: "SendDialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      amount: ' ',
      address: ' ',
    }
  },
  computed: {
    showDialog: {
      get() {
        return this.show;
      },
      set(v) {
        this.$emit('update:show', v);
      }
    }
  }
}
</script>

<style scoped>

</style>