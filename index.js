// const arr = [
//   { id: 1, name: "Bob" },
//   { id: 2, name: "Harry" },
// ];

// const result = {}
// for(let i = 0 ; i < arr.length ; i++){
//   result[arr[i].id] = arr[i].name
// }

// arr.forEach(e => {result[e.id] = e.name})

// const result = arr.reduce((acc , myobj) => {
//   acc[myobj.id] = myobj.name;
//   return acc
// },{})

// console.log(result);
// Output
// {'1': 'Bob', '2': 'Harry'}

const arr1 = [
    { employeeId: 5, name: "Mark" },
    { employeeId: 10, name: "Peter" },
  ];
  
  const arr2 = [
    { employeeCode: "emp101", employeeId: 10 },
    { employeeCode: "emp102", employeeId: 5 },
  ];
  
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
  
  const result = arr2.reduce((acc, item1) => {
    const matchingItem = arr1.find(item2 => item2.employeeId === item1.employeeId);
  
    if (matchingItem) {
      acc.push({
        employeeId: item1.employeeId,
        employeeCode: item1.employeeCode,
        name: matchingItem.name,
      });
    }
  
    return acc;
  }, []);
  console.log(result);
  // Output
  // [
  //  {"employeeId":10, employeeCode":"emp101", "name": "Peter"},
  //  {"employeeId":5, employeeCode": "emp102", "name":"Mark"}
  // ]