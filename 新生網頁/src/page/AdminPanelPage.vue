<script setup>
import { reactive } from "vue";
import axios from "axios";

import Model from "../components/Model.vue";
import ItemForm from "../components/ItemForm.vue";
import NavBar from "../components/NavBarLeft.vue";

const info = reactive({
  datas: [
    { name: "", link: "", category: "", start_time: "", expired_time: "" },
  ],
  isModelOn: false,
  isUpdateDataModelOn: false,
  nowCategory: "",
});

const modelInfo = reactive({
  modelTitle: "新增資料",
  name: "",
  link: "",
  category: "",
  start_time: "",
  expired_time: "",
});

const updateDataModelInfo = reactive({
  modelTitle: "修改資料",
  name: "",
  link: "",
  category: "",
  start_time: "",
  expired_time: "",
});

axios.get("http://localhost:8001/").then((res) => {
  info.datas = res.data.info_datas;
});

const model_on = () => {
  info.isModelOn = true;
};

const model_off = () => {
  info.isModelOn = false;
};

const update_data_model_on = (index) => {
  const data = info.datas[index];
  console.log(data);
  updateDataModelInfo.modelTitle = "修改資料";
  updateDataModelInfo.name = data.name;
  updateDataModelInfo.link = data.link;
  updateDataModelInfo.category = data.category;
  updateDataModelInfo.start_time = data.start_time;
  updateDataModelInfo.expired_time = data.expired_time;
  info.isUpdateDataModelOn = true;
};

const update_data_model_off = () => {
  info.isUpdateDataModelOn = false;
};

const create_item_process = () => {
  const data = {
    name: modelInfo.name,
    link: modelInfo.link,
    category: modelInfo.category,
    start_time: modelInfo.start_time,
    expired_time: modelInfo.expired_time,
  };
  axios
    .post("http://localhost:8001/item", data, {
      headers: {
        "access-token": "",
      },
    })
    .then((res) => {
      axios.get("http://localhost:8001/").then((res) => {
        info.datas = res.data.info_datas;
      });
    })
    .catch((e) => {
      console.log(e);
    });
  info.isModelOn = false;
};

const update_item_process = () => {
  info.isUpdateDataModelOn = false;
};
</script>

<template>
  <NavBar />

  <div
    class="mx-auto flex max-w-lg flex-col items-center justify-center gap-5 bg-green-100 px-6 py-4"
  >
    <div
      class="cursor-pointer rounded-md border-2 border-black p-4 text-center text-xl"
      v-for="(value, index) in info.datas"
      :key="value['_id']"
      @click="update_data_model_on(index)"
    >
      {{ value.name }}
    </div>
  </div>
  <button
    class="fixed bottom-10 right-12 rounded-full bg-[#34559D] px-5 py-4 text-3xl text-white font-black"
    @click="model_on"
  >
    ＋
  </button>
  <Model v-if="info.isModelOn">
    <ItemForm
      :model-info="modelInfo"
      :submit_process="create_item_process"
      :model_off_process="model_off"
    />
  </Model>
  <Model v-if="info.isUpdateDataModelOn">
    <ItemForm
      :model-info="updateDataModelInfo"
      :submit_process="update_item_process"
      :model_off_process="update_data_model_off"
    />
  </Model>
</template>
