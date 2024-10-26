import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TezosToolkit } from "@taquito/taquito";

const initSlice = {
  contractAddress: "KT1FtHwzAT4VnDCUfHKW4g3q5pZKWbGLZfnP",
  wallet: null,
  userAddress: null,
  tezos: new TezosToolkit("https://ghostnet.smartpy.io"),
  contract: null,
};
const UISlice = createSlice({
  name: "UISlice",
  initialState: initSlice,
  reducers: {
    setContractAdrress(state, action) {
      state.contractAddress = action.payload.contractAddress;
    },
    setWallet(state, action) {
      state.wallet = action.payload.wallet;
    },
    setUserAddress(state, action) {
      state.userAddress = action.payload.userAddress;
    },
    setContract(state, action) {
      state.contract = action.payload.contract;
    },
  },
});

const store = configureStore({
  reducer: { UI: UISlice.reducer },
});

export const UIActions = UISlice.actions;

export default store;
