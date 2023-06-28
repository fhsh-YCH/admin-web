<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "",
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.errorMsg = "帳號名稱或密碼不能為空";
        return;
      }
      this.$router.push("/admin");
    },
  },
};
</script>

<template>
  <div class="relative w-screen overflow-x-hidden flex flex-col items-center">
    <h1 class="font-black text-[45px] text-center mt-[80px] text-[#34559D]">
      帳號登入
    </h1>
    <form @submit.prevent="login">
      <div class="mt-[60px] flex flex-col items-center">
        <label for="email">
          <input
            id="username"
            v-model.trim="username"
            required
            minlength="3"
            maxlength="20"
            type="text"
            placeholder="輸入您的帳號名稱"
            class="w-[325px] h-[59px] text-[20px] border border-[#34559D] rounded-md text-center mb-[20px]"
          />
        </label>
        <br />
        <label for="password">
          <input
            type="password"
            placeholder="輸入您的密碼"
            class="w-[325px] h-[59px] text-[20px] border border-[#34559D] rounded-md text-center mb-[20px]"
            id="“password”"
          />
          <button
            class="absolute ml-[-55px] mt-[5px]"
            @click="togglePassword"
          ></button>
        </label>
      </div>

      <div class="flex justify-center items-center mt-[2vw]">
        <button
          @click="login"
          class="text-[30px] w-[100px] h-[50px] bg-[#34559D] rounded-xl flex justify-center items-center text-white"
        >
          登入
        </button>
      </div>
    </form>
  </div>
</template>
