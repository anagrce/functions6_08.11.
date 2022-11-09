// zadatak 1.

//Write a function that rotates a list by k elements.

function rotate(array, k) {
    const newarray = [];
    for (let i = k % array.length, len = array.length; newarray.length < len; i = ++i % len) {
      newarray.push(array[i]);
    }
   return newarray;
  }
  console.log(rotate([1,2,3,4,5,6], 2));
//----------------------------------------------------------------------------------------

  function rotateArray(arr,k,pos){
    arr=arr.concat(arr.splice(0,arr.indexOf(k)+pos));
    return arr;
}
console.log(rotateArray([1,2,3,4,5,6],2,1));
//ovde smo namestili da nam je pos(position) 1, jer clanove niza premeštamo sa početka na kraj niza
//(da je pos=0, clanovi niza bi se sa posednjeg stavljali na 1 mesto)
//a k je broj puta koliko ponavljamo tu radnju da bismo dobili rezultat koji trazimo

//----------------------------------------------------------------------------------------

function rotateArray1 (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }console.log(rotateArray1([1,2,3,4,5,6],4));
  //funkcija unshift dodaje clanove na početak niza, a pop uklanja zadnjeg člana niza(prolazimo kroz for petlju 4 puta-4puta sa kraja premestamo na pocetak niza)
  //ovde je k =4 jer funkcija iz datog niza uzima poslednjeg člana i stavlja ga na početak, i tako 4 puta zadamo dok ne dobijemo niz koji zelimo
//---------------------------------------------------------------------------------------------------
  
  function rotate1(arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  }console.log(rotateArray1([1,2,3,4,5,6],4));
  //number of shifts je broj koliko puta premestmo sa zadnjeg na prvo mesto clanove niza
//-------------------------------------------------------------------------------------------------------------------------------
  function rotate3(arr, numberOfShifts) {
    let deletedArray = arr.splice(arr.length-numberOfShifts);
    //splice metoda koja dodaje ili brise članove iz niza, u ovom slučaju 'brise'(6-4=2), u nizu ostaju [1,2]
    // a deletedArray je [3,4,5,6]
    for (let i=0; i < deletedArray.length; i++){  //for jer moramo da prodjemo kroz petnju jer imamo niz 
        arr.splice(i,0,deletedArray[i]);
        //u ovom slučaju metodom splice dodajemo nas'obrisani niz' posle i je 0, znaci 'obrasini niz' ide na pocetak niza
        //tj [3,4,5,6] ide ispred [1,2]
    }
    return arr;
}console.log(rotate3([1,2,3,4,5,6],4));

//----------------------------

function rotate (array, k) {

    let rotateArr = [];

    for (let i = 0; i < array.length; i++) { //prolazimo kroz naš niz
        if (i >= k) {    //ako nam je i veće ili jednako k (stavili smo 2, to je indeks)
            rotateArr[rotateArr.length] = array[i];  
            //niz se puno članovima našeg niza čijij je indeks jednak ili veći od 2
            // to si brojevi [3,4,5,6]
        }
    }
    //nova for petlja prolazi korz niz i ispituje slučaj kada je brojač tj indeks tj j manji od k tj manji od 2
    //niz nasptavlja da se popunjava članovima niza čiji je indeks manji od 2, tj indeks je 0 i 1
    // to su brojevi [1,2]
    for (var j = 0; j < array.length; j++) {
        if (j < k) {
            rotateArr[rotateArr.length] = array[j];
        }
    }
    return rotateArr;

}

console.log(rotate ([1,2,3,4,5,6], 2));

// zadatak 2.
//Write a function that takes a number and returns array of its digits.

function stringNumber(num) {
    let string = num + '';
    let array = [];
    for (i = 0; i < string.length; i++){
        array[i] = string[i];
    }
    return array;
}
console.log(stringNumber(123456));

// zadatak 3.
// Write a program that prints a multiplication table for numbers up to 12.


function multiplicationTable (broj) {

    let result = '';

    for (let i = 1; i <= broj; i++) {
        for (let j = 1; j <= broj; j++) {
            result += (i + '*' + j + '=' + i * j + ' ');
        }
    }
    return result;
}

console.log(multiplicationTable(12));

// zadatak 4.
// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if (element > max && typeof element === "number") {
        max = element;
      }
    }
    return max;
  }
  
  console.log(findMax([1, 7, "65", "7", 88, 412, -4, 35, 145]));

  // zadatak 5.
  //Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.
  function findMaxMin(array) {
    let newArr = [];
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > max && typeof array[i] === "number") {
        newArr[0] = array[i];
      }
      if (array[i] < min && typeof array[i] === "number") {
        newArr[1] = array[i];
      }
    }
    return newArr;
  }
  var arr = [20, 3, "65", "7", 8, 12, -34, 65, 145];
  console.log(findMaxMin(arr));

  // zadatak 6.
  function median (array) {

    let max = array[0];
    let min = array[0];
    let position = 0;
    let newArr = [];
    let ind = 0;
    let med = 0;

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    for (let j = 0; j < array.length; j++) {
        for (let k = 0; k < array.length; k++) {
            if (array[k] !== null) {
                if (min > array[k]) {
                    min = array[k];
                    position = k;
                }
            }
        }
        newArr[j] = min;
        array[position] = null;
        min = max;
    }
    
    

    if (newArr.length % 2 === 0) {
        ind = newArr.length / 2;
        med = (newArr[ind] + newArr[ind - 1]) / 2;
    } else {
        med = (newArr[newArr.length / 2 - 0.5])
    }
    return med + ' is median';
}

console.log(median([2, 1, 5, 3, 4, 6, 7,9]));

// zadatak 7. 
//Write a function to find and return the first, middle and last element of an array if the array
//has odd number of elements. If number of elements is even, return just the first and the
//last. In other cases (empty array), input array should be returned.

function firstMiddleLast (arrayNumbers) {
    let medianIndex = 0;
    if (arrayNumbers.length % 2 == 1) {
      medianIndex = (arrayNumbers.length - 1) / 2;
      return "First number in array is:"+arrayNumbers[0] + "\nLast number of array is:" + arrayNumbers[arrayNumbers.length - 1] + "\nThe number in the middle of array is:" + arrayNumbers[medianIndex];
    } else {
      return "First number in array is: "+arrayNumbers[0] + "\nLast number of array is:  " + arrayNumbers[arrayNumbers.length - 1];
    }
  }
  console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7]));

  // zadatak 8. 
  //Write a function to find the average of N elements. Make the function flexible to receive dynamic number of parameters.

  
function averageResult(arrayNumb){
    let result;
    let sum = 0;
    for(i=0; i <= arrayNumb.length; i++){
      sum += i;
      result = sum / (arrayNumb.length);
    }
    return result;
  }
  console.log(averageResult([1,2,3,4,5,6,7,8]));

  // zadatak 9. 
  //Write a function to find all the numbers greater than the average.

  function greaterThanAverage(array){
    let greater=[];
    let result;
    let sum = 0;
    for(i=0; i <= array.length; i++){
      sum += i;
      result = sum / (array.length);
    }
    for(i=0; i<array.length; i++){
        if(array[i] > result){
          greater[greater.length] = array[i];
              } 
      } return greater;
    }
    console.log(greaterThanAverage([1,2,3,4,5,6,7,8]));

    // zadatak 10. T
/*The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
 Starvation: less than 15
 Anorexic: less than 17.5
 Underweight: less than 18.5
 Ideal: greater than or equal to 18.5 but less than 25
 Overweight: greater than or equal to 25 but less than 30
 Obese: greater than or equal to 30 but less than 40
 Morbidly obese: greater than or equal to 40*/

function BMI(weight,height) {
    index = weight/(height*height);
    let result = '';
    switch (true) {
        case index < 15:
            result = 'Starvation'
            break;
        case index < 17.5:
            result = 'Anorexic'
            break;
        case index < 18.5 :
            result = 'Underweight'
            break;
        case index >= 18.5 && index < 25:
            result = 'Ideal'
            break;
        case index >= 25 && index < 30:
            result = 'Overweight'
            break;
        case index >= 30 && index < 40:
            result = 'Obese'
            break;
        case index >= 40:
            result = 'Morbildly obese'
            break;
    }
    return result;
}
  
  console.log(BMI(85,1.85));
  // zadatak 11. 
  //Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

  function print (array) {

    let result = ''; 
    let star = '*';
    let newLine = '\n';
    let space = ' ';
    let maxWord = array[0].length;

    for (let x = 0; x < array.length; x++) {
        if (maxWord < array[x].length) {
            maxWord = array[x].length;
        }
    }       

    for (var i = -1; i <= array.length; i++) {
        for (var j = -2; j <= maxWord +1; j++) {
            if (i === -1 || i === array.length || j === -2 || j === maxWord +1) {
                result += star;
            } else if (j >= 0 && j < array[i].length) {
                result += array[i][j];
            } else {
                result += space;
            }
        }
        result += newLine;
    }
    return result;
}

console.log(print(["Sergej", "is", "a", "basketball", "player :)"]));


