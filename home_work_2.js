class MyArray {
    constructor() {

    }

    push(valueToPush, arr) {
        let arrLength = arr.length;
        arr[arrLength] = valueToPush;
        console.log(arr);
    };

    map(arr) {
        let newArr = [];
        for (let item of arr) {
            newArr.push(item + 1);
        }
        console.log(newArr);
    };

    filter(valueToFind, arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (valueToFind === arr[i]) {
                newArr.push(valueToFind);
            }

        }
        console.log(newArr);
    };

    reduce(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum);
    };

    includes(valueToFind) {
        for (let i = 0; i < this.length; i++) {
            if (valueToFind === this[i]) {
                return true;
            }
        }

        return false;

    }
}
let myNewArray = new MyArray();

myNewArray.push(7, [1,2,3,4,5,6]);
myNewArray.map([1,2,3,4,5]);
myNewArray.filter(2, [1,3,4,2,6,7,2]);
myNewArray.reduce([2,2,4]);
