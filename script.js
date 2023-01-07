/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(function (value) {
    if (value.profession === "developer") {
      console.log(value);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here

  arr.forEach(function (value) {
    if (value.profession === "developer") {
      console.log(value);
    }
  });
}

function addData() {
  let obj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(obj);
  console.log(arr);
  //Write your code here
}

function removeAdmin() {
  //Write your code here
  let filtered_arr = arr.filter(function (val) {
    if (val.profession !== "admin") {
      return val;
    }
  });
  console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 4, name: "joh", age: "28", profession: "webdeveloper" },
    { id: 5, name: "pick", age: "23", profession: "webdeveloper" },
    { id: 6, name: "tock", age: "27", profession: "webdeveloper" },
  ];

  let add = arr.concat(arr2);
  console.log(add);
}