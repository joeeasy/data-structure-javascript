class MyArray {
    constructor() {
        this.array = [];
    }
    add(data) {
        this.array.push(data);
        
    }
    remove(data) {
        this.array = this.array.filter(curent => (current !== data));
    }
    search(data) {
        let resultIndex = this.array.indexOf(data);
        return resultIndex && resultIndex;
    }
    getAtIndex(index) {
        return this.array[index];
    }
    getLength() {
        return this.array.length;
    }
    print() {
        console.log(this.array.join(''));
    }
}
var joe = new MyArray();