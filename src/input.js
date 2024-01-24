import React from "react";

export const base64FileConverter = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String.split(",")[1]);
    };
    reader.onerror = () => {
      reject("Error in converting file to base64");
    };
  });
};
const Input = (props) => {
  const { file, setFile } = props;
  return (
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input"
      >
        Upload file
      </label>
      <input
        class="block w-[400px] text-sm text-gray-900 border border-gray-30 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-100 focus:outline-none dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <span>{file?.name}</span>
    </div>
  );
};

export default Input;
