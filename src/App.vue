<template>
  <div id="app" class="tw-p-5 tw">
    <button
      class="
        tw-bg-green-400
        hover:tw-bg-green-300
        active:tw-bg-green-500
        hover:tw-scale-105
        active:tw-scale-95
        tw-px-6 tw-py-3' tw-rounded-md tw-font-bold tw-text-white
        colorSelector
        tw-transition-all tw-mb-5
      "
      @click="getContent"
    >
      輸出至console
    </button>

    <div ref="editor"></div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import Quill from "quill/dist/quill.js";

import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize-module";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);

const API_URL = "https://api.imgbb.com/1/upload";
const API_KEY = "98a617b3a1d078032477be03e26b02bc";

export default {
  name: "App",
  setup(props, context) {
    const quill = ref(null);
    const editor = ref(null);

    let toolbarOptions = [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ];

    context.root.$nextTick(() => {
      quill.value = new Quill(editor.value, {
        modules: {
          toolbar: {
            container: toolbarOptions,
          },
          imageResize: {},
          imageUploader: {
            upload: (file) => {
              return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("image", file);

                fetch(`${API_URL}?key=${API_KEY}`, {
                  method: "POST",
                  body: formData,
                })
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    resolve(result.data.url);
                  })
                  .catch((error) => {
                    reject("Upload failed");
                    console.error("Error:", error);
                  });
              });
            },
          },
        },
        theme: "snow",
        placeholder: "普勒斯後得",
      });
    });

    function getContent() {
      let content = quill.value.getContents();
      console.log("delta", content);

      var html = quill.value.root.innerHTML;
      console.log("html", html);
      return content;
    }

    return {
      quill,
      getContent,
      editor,
    };
  },
};
</script>

<style lang="css">
.ql-editor {
  min-height: 500px;
}
</style>

