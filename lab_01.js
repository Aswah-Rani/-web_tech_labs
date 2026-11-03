console.log("task01");
function addition(a, b){
    return a+b;
}
console.log(addition(2, 3));
console.log("task 2");
function bitwiseAND(a, b){
  return a & b;
}
function bitwiseOR(a, b){
  return a | b;
}
function bitwiseXOR(a, b){
  return a ^ b;
}
console.log(bitwiseAND(5, 3));
console.log(bitwiseOR(5, 3));  
console.log(bitwiseXOR(5, 3));

console.log("task 3");
function addUp(a){
   let sum=0;
 for(let i=1;i<=a;i++){
    sum=sum+i;
 }
 return sum;
 }
console.log(addUp(4)); 
console.log("task 4");
function progressBar(a){
  let filled = Math.floor(a/10);
  let result = "";
  for(let i=0; i<10; i++){
    if(i < filled){
      result = result + "#";
    } else {
      result = result + "-";
    }
  }
  return result;
}
console.log(progressBar(10));
console.log("task 5")
function minMax(arr){
 let min=arr[0];
 for (let i = 0; i < arr.length; i++) {
       if (arr[i]< min) {
           min = arr[i];
       }
 }
 let max=arr[0];
  for (let i = 0; i < arr.length; i++) {
       if (arr[i]>max) {
         max = arr[i];
       }
}
 return [arr[min] , arr[max]];
}
console.log(minMax([1, 2, 3, 4, 5, 6])); 
console.log("task 6");
function calculateRepoStats(repos) {
    let stars = repos.map(function(r) {
        return r.stars;
    });

    if (stars.length === 0) {
        return {
            maxStars: 0,
            minStars: 0,
            avgStars: 0,
            varianceScore: 0
        };
    }

    let maxStars = Math.max(...stars);
    let minStars = Math.min(...stars);

    let total = 0;

    for (let i = 0; i < stars.length; i++) {
        total += stars[i];
    }

    let avgStars = Math.floor(total / stars.length);
    let varianceScore = maxStars - minStars;

    return {
        maxStars,
        minStars,
        avgStars,
        varianceScore
    };
}
const repos = [ { name: 'repo-a', stars: 12 }, { name: 
'repo-b', stars: 45 }, { name: 'repo-c', stars: 3 } ]; 
console.log(calculateRepoStats(repos));
console.log("task 7");
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {

    let discount = basePrice * (1 - discountPercentage / 100);

    let finalPrice = discount * (1 + taxRate / 100);

    let roundedPrice = Math.round(finalPrice * 100) / 100;

    let earned = Math.ceil(roundedPrice);

    return {
        roundedPrice,
        earned
    };
}

console.log(calculateFinalPrice(99.99, 10, 15));
console.log("task 8");
function paginateData(items, pageNumber, pageSize) {

    if (pageSize == undefined) {
        pageSize = 5;
    }

    let start = (pageNumber - 1) * pageSize;
    let end = start + pageSize;

    let data = items.slice(start, end);

    let totalPages = Math.ceil(items.length / pageSize);

    let hasNext;

    if (pageNumber < totalPages) {
        hasNext = true;
    } else {
        hasNext = false;
    }

    let hasPrev;

    if (pageNumber > 1) {
        hasPrev = true;
    } else {
        hasPrev = false;
    }

    return {
        data: data,
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: hasNext,
        hasPrev: hasPrev
    };
}
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 'Chair', 'Webcam', 'Headphones'];
console.log(paginateData(allProducts, 2, 3));


