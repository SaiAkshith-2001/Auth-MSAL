import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginReq } from "./authConfig";

export default function App() {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const handleLogIn = () => {
    instance.loginPopup(loginReq).catch((e) => console.error(e));
  };
  const handleLogOut = () => {
    instance.logOutPopup().catch((e) => console.error(e));
  };
  return (
    <div>
      <h1>Welcome! MSAL React Authentication App</h1>
      <AuthenticatedTemplate>
        {activeAccount ? <h2>Welcome!, {activeAccount[0].name}</h2> : null}
        <button onClick={handleLogOut}>LogOut</button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleLogIn}>LogIn</button>
      </UnauthenticatedTemplate>
    </div>
  );
}
