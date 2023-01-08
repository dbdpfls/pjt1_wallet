<template>
  <v-app id="app">
    <router-view/>
    <v-snackbar v-model="showSnackbar" top>
      {{ snackbarProps.text }}
    </v-snackbar>
  </v-app>
</template>

<style lang="scss">
@font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('Spoqa Han Sans Neo Bold'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype');
}


@font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    src: local('Spoqa Han Sans Neo Medium'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('Spoqa Han Sans Neo Regular'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype');
}

#app {
  font-family: 'Spoqa Han Sans Neo', -apple-system,BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 400px;
  height: 800px;
  word-break: keep-all;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    window.addEventListener('blur', async () => {
      // 브라우저 탭 포커스가 사라지면 잠금 처리
      if(['/seed-phrase', '/seed-phrase-confirm'].indexOf(this.$route.path) === -1) {
        await this.$store.dispatch('lockWallet');
      }


      // 잠금 페이지로 이동이 필요하지 않은 페이지 설정
      if(['/unlock', '/welcome', '/', '/select-action', '/import-with-seed-phrase', '/seed-phrase-confirm', '/create-password', '/seed-phrase'].indexOf(this.$route.path) === -1) {
        await this.$router.push('/unlock?redirect=' + this.lastRoutePath);
      }
    });
  },
  computed: {
    ...mapGetters(['snackbarProps', 'lastRoutePath']),
    showSnackbar: {
      set(val) {
        this.$store.commit('SET_SNACKBAR_PROPS', { show: val });
      },
      get() {
        return this.$store.getters.snackbarProps?.show || false;
      }
    }
  },
  watch: {
    $route(a, b) {
      console.log(a, b);
    }

  }
}
</script>