import "./App.css";
import { Show, SignInButton, SignOutButton, UserButton } from "@clerk/react";

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>
        <Show when="signed-out">
          <SignInButton />
          <SignOutButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      
    </>
  );
}

export default App;
