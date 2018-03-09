class Set {
    constructor() {
        this.values = [];
        this.numberOfvalues = 0;
    }
    add(value) {
        if(!~this.values.indexOf(value)) {
            this.values.push(value);
            this.numberOfvalues++;
        }
    };
    remove(value)
}