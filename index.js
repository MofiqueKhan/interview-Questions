// Question no. 1

// const arr = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Harry" },
// ];

// // ------>>>>> With For Loop

// const result = {}
// for(let i = 0 ; i < arr.length ; i++){
//   result[arr[i].id] = arr[i].name
// }

// // ------>>>>> With For Each

// arr.forEach(e => {result[e.id] = e.name})

// // ------>>>>> With Reduce();

// const result = arr.reduce((acc , myobj) => {
//   acc[myobj.id] = myobj.name;
//   return acc
// },{})

// console.log(result);
// Output
// {'1': 'Bob', '2': 'Harry'}

// Question no. 2

const arr1 = [
  { employeeId: 5, name: "Mark" },
  { employeeId: 10, name: "Peter" },
];

const arr2 = [
  { employeeCode: "emp101", employeeId: 10 },
  { employeeCode: "emp102", employeeId: 5 },
];

// // ------>>>>> With For Loop

// const result = [];
// for (let j = 0; j < arr2.length; j++) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i].employeeId === arr2[j].employeeId) {
//       result.push({
//         employeeId: arr1[i].employeeId,
//         employeeCode: arr2[j].employeeCode,
//         name: arr1[i].name,
//       });
//       break;
//     }
//   }
// }

// ------>>>>> With Reduce();

// const result = arr2.reduce((acc, item1) => {
//   const matchingItem = arr1.find(
//     (item2) => item2.employeeId === item1.employeeId
//   );

//   if (matchingItem) {
//     acc.push({
//       employeeId: item1.employeeId,
//       employeeCode: item1.employeeCode,
//       name: matchingItem.name,
//     });
//   }

//   return acc;
// }, []);

// ------>>>>> With For Each

// const result = [];

// arr2.forEach((item1)=>{
//   arr1.forEach((item2)=>{
//     if(item1.employeeId === item2.employeeId){
//       result.push({
//         employeeId : item1.employeeId,
//         employeeCode : item1.employeeCode,
//         name : item2.name
//       })
//     }
//   })
// })
// console.log(result);
// Output
// [
//  {"employeeId":10, employeeCode":"emp101", "name": "Peter"},
//  {"employeeId":5, employeeCode": "emp102", "name":"Mark"}
// ]

// Question No. 3

// function exactMatch(arr) {

// // With For loop

//   // let result = [];
//   // for (let i = 0; i < arr.length - 2; i++) {
//   //   for (let j = i + 1; j < arr.length - 1; j++) {
//   //     for (let k = j + 1; k < arr.length; k++) {
//   //       if (arr[i] + arr[j] + arr[k] === 0) {
//   //         result.push([arr[i], arr[j], arr[k]]);
//   //       }
//   //     }
//   //   }
//   // }
//   // return result;

// }


// // with forEach loop

// function exactMatch(arr){

//   let result = [];
//   arr.forEach((value1 , i) => {
//     arr.forEach((value2 , j) =>{
//       if(j > i){
//         arr.forEach((value3 , k)=>{
//           if(k > j){
//             if(value1 + value2 + value3 === 0){
//               result.push([value1 , value2 , value3])
//             }
//           }
//         })
//       }
//     })
//   });
//   return result
// }

const a = [5, 2, 6, -7, 1, -2, 0, 9];
console.log(exactMatch(a));
// [5,2,-7]
// [6,1,-7]
// [2,-2,0]
// [-7,-2,9]
