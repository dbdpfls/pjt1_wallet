<template>
  <CommonLayout show-address>
    <div class="pt-12">
      <h1>
        {{amount}}.00 <span style="font-size: 0.6em">ARK</span>
      </h1>
      <v-btn outlined small rounded color="primary" class="mt-2" @click="show = true">
        보내기
      </v-btn>
      <send-dialog :show.sync="show"></send-dialog>
    </div>

  </CommonLayout>
</template>

<script>
import { mapState } from 'vuex';
import CommonLayout from "@/layouts/CommonLayout";
import SendDialog from "@/components/SendDialog";
export default {
  name: 'Home2View',
  components: {
    SendDialog,
    CommonLayout,
  },
  computed: {
    ...mapState(['amount']),
  },
  data() {
    return {
      show: false
    }
  }
}
</script>
