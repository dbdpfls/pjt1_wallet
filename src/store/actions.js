import { BIP39 } from "@ardenthq/sdk-cryptography";

// const { strict: assert } = require('assert');
const passworder = require('@metamask/browser-passworder');

export default {
    async SET_Mnemonic({ commit }, payload) {
        commit('SET_Mnemonic', payload);
    },
    async SET_PWD({ commit }, payload) {
        commit('SET_PWD', payload);
    },
    async CHK_PWD({ commit }, payload) {
        commit('CHK_PWD', payload);
    },
    async CHK_Mnemonic({ commit }, payload) {
        commit('CHK_Mnemonic', payload);
    },
    async SET_WALLET({ commit }, payload) {
        commit('SET_WALLET', payload);
    },
    async SET_ADDR({ commit }, payload) {
        commit('SET_ADDR', payload);
    },
    async SET_ENTROPY({ commit }, payload) {
        commit('SET_ENTROPY', payload);
    },
    async SET_PUBLIC({ commit }, payload) {
        commit('SET_PUBLIC', payload);
    },


    async signOut({ commit }) {
        // TODO 니모닉 값 또는 privateKey 값 초기화
        commit('SET_ACCOUNT', null);
    },
    async generateMnemonic() {
        return BIP39.generate();
    },
    async createWallet({ dispatch, commit }, { password }) {
        const mnemonic = await dispatch('generateMnemonic'); // TODO 코인 네트워크와 연동된 니모닉 생성
        const walletData = {
            mnemonic,
        };
        const encryptedWalletData = await passworder.encrypt(password, walletData);
        commit('SET_ENCRYPTED_WALLET_DATA', encryptedWalletData);
        commit('SET_WALLET_DATA', walletData);
        return walletData;
    },
    async unlockWallet({ getters, commit }, { password }) {
        const walletData = await passworder.decrypt(password, getters.encryptedWalletData);
        commit('SET_WALLET_DATA', walletData);
        return walletData;
    },
    async lockWallet({ commit }) {
        commit('SET_WALLET_DATA', null);
    },
    async showSnackbar({ commit }, payload = {}) {
        commit('SET_SNACKBAR_PROPS', {
            ...payload,
            show: true,
        });
    },
    // TODO 코인 네트워크에 어드레스값이 존재하거나 등록되어있으면 true 반환 기타 에러 있을시 false 반환
    async isRegistered(_, { mnemonic }) {
        return mnemonic.length > 0 ? true : false;
    },
    async recoveryWallet({ commit, dispatch }, { password, mnemonic }) {
        const isRegistered = await dispatch('isRegistered', { mnemonic })

        if(isRegistered) {
            const walletData = {
                mnemonic,
            };
            const encryptedWalletData = await passworder.encrypt(password, walletData);
            commit('SET_ENCRYPTED_WALLET_DATA', encryptedWalletData);
            commit('SET_WALLET_DATA', walletData);
            return walletData;
        }
    }
}