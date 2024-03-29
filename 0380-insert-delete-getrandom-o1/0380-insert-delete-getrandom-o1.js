
var RandomizedSet = function() {
    this.map = {};
    this.values = [];
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] !== undefined) return false;
    this.map[val] = this.values.length;
    this.values.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] === undefined) return false;
    const idx = this.map[val];
    delete this.map[val];
    const last = this.values.pop();
    if (this.values.length === idx) return true;
    this.map[last] = idx;
    this.values[idx] = last;
    return true
};

RandomizedSet.prototype.getRandom = function() {
    if (this.values.length === 0) return null;
    return this.values[Math.floor(Math.random() * this.values.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */