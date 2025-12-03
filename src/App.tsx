import { onAuthStateChanged } from "firebase/auth";
import { FunctionComponent, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";

// Pages
import HomePage from "./components/pages/home/home.page";
import LoginPage from "./components/pages/login/login.page";
import SignUpPage from "./components/pages/sign-up/sign-up.page";

//Utilities
import { auth, db } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    //se o usuario estiver logado no contexto, e o usuario do firebase estiver null (signout)
    // devemos limpar o contexto (sign out)
    const isSigninOut = isAuthenticated && !user;
    if (isSigninOut) {
      return logoutUser();
    }

    //se o usuario for nulo no contexto, e nao for nulo no firebase
    //devemos fazer login
    const isSigninIn = !isAuthenticated && user;
    if (isSigninIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, "users"),
          where("id", "==", user.uid)
        )
      );

      const userFromFirestore = querySnapshot.docs[0]?.data();
      return loginUser(userFromFirestore as any);
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
