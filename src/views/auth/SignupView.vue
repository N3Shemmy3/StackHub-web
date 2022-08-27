<template>
  <div class="w-full h-full bg-colorBackground">
    <header>
      <Toolbar :navigate-up="false" title="StackHub" :menu="[]" />
    </header>

    <body class="flex-col content-center p-4 md:max-w-2xl">
      <h6 class="mt-20 mb-2 text-xl font-bold">Welcome to StackHab</h6>
      <p class="font-medium textsm">
        A place where developers & programmers collaborate and socialize
      </p>

      <div
        ref="continue"
        @click="handleLogin"
        class="
          flex
          mt-4
          p-4
          w-full
          sm:max-w-xs
          rounded-lg
          group
          bg-colorSecondaryContainer
          hover:drop-shadow-md hover:bg-opacity-80
          active:bg-colorPrimaryContainer active:bg-opacity-70
          transitions-all
          duration-250
          ease-in-out
          align-middle
          justify-center
          cursor-pointer
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
            clip-rule="evenodd"
          />
        </svg>
        <p
          class="
            ml-2
            text-md text-center text-clip
            font-semibold
            text-colorOnSecondaryContainer
          "
        >
          Continue with GitHub
        </p>
      </div>
    </body>
  </div>
</template>

<script lang="ts" setup>
import { ApiError } from "@supabase/supabase-js";
import { ref } from "vue";
import { supabase } from "../../api/supabase/Supabase";

const loading = ref(false);
const handleLogin = async () => {
  loading.value = true;
  console.log("before auth function");
  const { user, session, error } = await supabase.auth.signIn({
    provider: "github",
  });
  console.log("after log function");
  console.log(error?.message, error?.status);
  loading.value = false;
};
</script>