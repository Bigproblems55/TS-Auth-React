//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CallbackPage from "./CallbackPage";
import ProtectedPage from "./ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./ProfilePage";
import withAuthGuard from "./AuthenticationGuard";

const GuardedProfilePage = withAuthGuard(ProfilePage);
const GuardedProtectedPage = withAuthGuard(ProtectedPage);

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<GuardedProfilePage />} />
      <Route path="/protected" element={<GuardedProtectedPage />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;
