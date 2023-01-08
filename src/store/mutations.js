export default {
    SET_Mnemonic(state, val){
        state.mnemonic = val;
    },
    SET_PWD(state, val){
        state.pwd = val;
    },
    CHK_PWD(state, val){
        state.loginPwd = val;
    },
    CHK_Mnemonic(state, val){
        state.mnemonicChk = val;
    },
    SET_WALLET(state, val){
        state.wallet = val;
    },
    SET_ADDR(state, val){
        state.address = val;
    },
    SET_ENTROPY(state, val){
        state.entropy  = val;
    },
    SET_PUBLIC(state, val){
        state.publicKey  = val;
    },

    SET_ENCRYPTED_WALLET_DATA(state, val) {
        state.encryptedWalletData = val;
    },
    SET_WALLET_DATA(state, val) {
        state.walletData = val;
    },
    SET_LAST_ROUTE_PATH(state, val) {
        state.lastRoutePath = val;
    },
    SET_SNACKBAR_PROPS(state, snackbarProps) {
        state.snackbarProps = snackbarProps;
    },
    SET_AMOUNT(state, val) {
        state.amount = val;
    }
}