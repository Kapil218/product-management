// import React from "react";

import { NetworkType } from "@airgap/beacon-dapp";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UIActions } from "../store";

export default function Header() {
  const dispatch = useDispatch();
  const { tezos, userAddress, wallet, contractAddress } = useSelector((state) => state.UI);
  console.log(wallet);

  const setupConnection = async () => {
    // e.preventDefault();
    // console.log(wallet);

    await wallet.requestPermissions({
      network: {
        type: NetworkType.GHOSTNET,
        rpcUrl: "https://ghostnet.smartpy.io",
      },
    });
    // gets user's address
    let userAddress = await wallet.getPKH();
    dispatch(UIActions.setUserAddress({ userAddress: userAddress }));
    console.log("🤣🤣", contractAddress);

    let cc = await tezos.wallet.at(contractAddress);
    console.log(cc);

    dispatch(UIActions.setContract({ contract: cc }));
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="h-16 flex gap-2 justify-between items-center  text-white bg-blue-500">
      <div className=" flex gap-2">
        <button onClick={handleClick} className="hover:bg-white hover:text-black">
          {" "}
          Home{" "}
        </button>

        <button className="hover:bg-white hover:text-black">Explorer </button>
      </div>
      <div className="pr-4">
        {!userAddress ? (
          <button onClick={setupConnection}>Connect to Wallet</button>
        ) : (
          <button disabled={true}>{userAddress}</button>
        )}
      </div>
    </div>
  );
}
