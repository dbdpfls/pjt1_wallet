export default {
    pwd: state => state.pwd,
    loginPwd: state => state.loginPwd,

    mnemonic: state => state.mnemonic,
    mnemonicChk: state => state.mnemonicChk,
    entropy: state => state.entropy,

    publicKey: state => state.publicKey,

    wallet: state => state.wallet,
    address: state => state.address,


    // TODO state.isSignedIn 반환대신 니모닉 또는 privateKey 있는지 여부를 Boolean 으로 반환
    isSignedIn: state => state.isSignedIn,
    walletData: state => state.walletData,
    encryptedWalletData: state => state.encryptedWalletData,
    lastRoutePath: state => state.lastRoutePath,
    snackbarProps: state => state.snackbarProps,
    mnemonic2: state => state.walletData?.mnemonic || '',
}