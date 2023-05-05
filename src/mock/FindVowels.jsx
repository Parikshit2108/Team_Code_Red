import React from "react";

export default function FindVowels() {
  let array = [
    {
      empId: 1,
      sal: 123,
    },
    {
      empId: 2,
      sal: 456,
    },
    {
      empId: 5,
      sal: 4548,
    },
    {
      empId: 4,
      sal: 42,
    },
  ];

  let sortArray = (array) => {
    for (let i = 0; i <= array.length; i++) {
      let temp;
      for (let j = i + 1; j < array.length; j++) {
        console.log(array[i].sal);
        console.log(array[j].sal);
        if (array[i].sal < array[j].sal) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
          console.log(true);
        }
      }
      //   return array;
    }
    return array;
  };
  sortArray(array);
  console.log(array);

  //   const fruits = ["apple", "mango", "banana"];

  //   let addFruit = (fruits) => {
  //     let temp;
  //     let temp2;
  //     for (let i = 0; i <= fruits.length; i++) {
  //       //   for (let j = 1; j <= fruits.length; j++) {
  //       if (fruits[i] === "apple") {
  //         temp = fruits[i + 1];
  //         temp2 = fruits[i + 2];
  //         fruits[i + 1] = "kiwi";
  //         fruits[i + 2] = temp; // fruits[j]
  //         fruits[i + 3] = temp2;
  //       }
  //     }
  //     // }
  //     return fruits;
  //   };
  //   let result = addFruit(fruits);
  //   console.log(result);

  //   let str = "parikshit";
  //   let countOfa = 0;
  //   let countOfe = 0;
  //   let countOfi = 0;
  //   let countOfo = 0;
  //   let countOfu = 0;
  //   //   let count = 0;
  //   const FindVowels = (str) => {
  //     for (let i = 0; i <= str.length; i++) {
  //       if (str[i] === "a") {
  //         countOfa++;
  //       }
  //       if (str[i] === "e") {
  //         countOfe++;
  //       }
  //       if (str[i] === "i") {
  //         countOfi++;
  //       }
  //       if (str[i] === "o") {
  //         countOfo++;
  //       }
  //       if (str[i] === "u") {
  //         countOfu++;
  //       }

  //       //   switch (str[i]) {
  //       //     case "a":
  //       //       countOfa++;
  //       //     case "e":
  //       //       countOfe++;
  //       //     case "i":
  //       //       countOfi++;
  //       //     case "o":
  //       //       countOfo++;
  //       //     case "u":
  //       //       countOfu++;
  //       //     default:
  //       //       return count;
  //     }
  //     // }
  //   };
  //   FindVowels(str);
  //   console.log(
  //     "a" + countOfa,
  //     "e" + countOfe,
  //     "i" + countOfi,
  //     "o" + countOfo,
  //     "u" + countOfu
  //   );

  return <div></div>;
}
