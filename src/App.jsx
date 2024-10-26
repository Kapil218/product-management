import "./App.css";
import { useEffect } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-dapp";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignRoles from "./pages/AssignRoles";
import Manufacture from "./pages/Manufacture";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "./store";

function App() {
  // const [count, setCount] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { tezos } = useSelector((state) => state.UI);

  useEffect(() => {
    const options = {
      name: "SECUREVAULT",
      preferredNetwork: NetworkType.GHOSTNET,
      disableDefaultEvents: false,
    };
    console.log("Setting up Wallet..");
    const wallet = new BeaconWallet(options);
    tezos.setWalletProvider(wallet);
    dispatch(UIActions.setWallet({ wallet: wallet }));
    // setWallet(wallet);
  }, []);

  // const handleAddRole = async (e) => {
  //   e.preventDefault();
  //   const op = await contract.methods.addRole(address, "M").send();
  //   await op.confirmation();
  // };
  return (
    <>
      {/* <button onClick={setupConnection}> connect to wallet </button>
      <button onClick={handleAddRole}>ADd address</button> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/manufacture" Component={Manufacture} />
          {/* <Route path="/" Component={Home} /> */}
          {/* <Route path="/" Component={Home} /> */}
          <Route path="/assignRoles" Component={AssignRoles} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
