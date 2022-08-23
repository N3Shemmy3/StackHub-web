<template>
  <header>
    <Toolbar :navigate-up="true" title="SignUp" :menu="[]" avatar="" />
  </header>
  <main class="h-full w-full overflow-x-auto overflow-visible">
    <div v-for="n in 100" class="w-full p-4 space-y-4">
      <InputField
        id="emal"
        type="email"
        label="Email Adress"
        :text="emailText"
        required
      />

      <Button
        icon="settings"
        alt="Button"
        class="w-full h-14"
        text="SignUp"
        @click="signUpEmail()"
      />
    </div>
  </main>
  <footer></footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Firebase from "../../components/firebase/Firebase";
import { useRouter } from "vue-router";
import {
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";

const router = useRouter();
const emailText = ref("");
const password = ref("");

const firebaseAuth = getAuth(Firebase);
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:5173/signup",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "example.page.link",
};
function signUpEmail() {
  const auth = getAuth();
  sendSignInLinkToEmail(auth, emailText.value, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", emailText.value);
      verifySingIn();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
}
function verifySingIn() {
  const auth = getAuth();
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    signInWithEmailLink(auth, emailText.value, window.location.href)
      .then((result) => {
        console.log("Successfully registered!");
        router.push("/main");
        window.localStorage.removeItem("emailForSignIn");
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  }
}
</script>
