import fs from "fs"
let f= fs.readFileSync("./matches.csv")
let f1 = fs.readFileSync("./deliveries.csv")
let array = f.toString().split("\n")
let array1 = f1.toString().split("\n")
array1.pop()
array.pop()

function convertor(arr){
let headers = arr[0].split(",")
let convArr = []; 

for(let i=1; i<arr.length; i++){
let obj = {}; let ar = arr[i].split(",")
 for(let j=0; j<ar.length; j++){
  obj[headers[j]] = ar[j]
  }
  convArr.push(obj)
 }
 return convArr
}

function saveData(file, data){
  function finish(error){
   if(error){
     console.error(error)
     return;
    }
  }
  let jsonformat = JSON.stringify(data,null,2)
  fs.writeFile(file, jsonformat, finish)
}

let matches = convertor(array)
let deliveries = convertor(array1)

saveData("matches.json",matches);

saveData("deliveries.json",deliveries)

