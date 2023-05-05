import React from "react";

export default function Mock() {
  const array = [
    "iphone",
    "samsung",
    "nokia",
    "nokia",
    "mi",
    "samsung",
    "iphone",
  ];
  let len = 0;
  let temp = {};
  for (let i = 0; i < array.length; i++) {
    if (!temp[array[i]]) {
      temp[array[i]] = "hi";
      array[len] = array[i];
      len++;
      // console.log(array);
    }
  }
  if (!temp[array[array.length - 1]]) {
    len--;
  }

  array.length = len;
  console.log(array);
  // return array;

  // return array;

  //   return <div></div>;
}
