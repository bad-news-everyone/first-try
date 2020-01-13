//1
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return (this.width * this.height);
    }
}

var r = new Rectangle(10, 20);
console.log(r.width);
console.log(r.height);
console.log(r.getArea());

//2
function getTail(arr, n) {
    let newIndex = arr.length - n;
    alert(arr.slice(newIndex));
}

let firstArr = [1, 2, 3, 4, 5, 6, 7];
let num = 3;
getTail(firstArr, num);

//3
let newArr = [1, 3, 4, 5];

function insertItem(arr, item, index) {

    arr.splice(index, 0, item);
    console.log(arr);
}

insertItem(newArr, 2, 1);

//4
let positivesNumbers = [];
function getArrayOfPositives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivesNumbers.push(arr[i]);
        };
    }
    console.log(positivesNumbers);
}
getArrayOfPositives([-4, 0, 1, 2, 3, -6, 4, 5]);

//5
function distinct(arr) {
    let uniqueValues = [];
    for (let value of arr) {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    }
    console.log(uniqueValues);
}

distinct([1, 2, 3, 3, 2, 1]);
