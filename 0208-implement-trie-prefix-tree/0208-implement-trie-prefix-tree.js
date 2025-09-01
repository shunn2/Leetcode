
var Trie = function() {
    this.root = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (const ch of word) {
        if (!node.has(ch)) {
            node.set(ch, new Map());
        }
        node = node.get(ch);
    }
    node.isEnd = true; 
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (const ch of word) {
        if (!node.has(ch)){
            return false;
        }
        node = node.get(ch);
    }
    return node.isEnd === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const ch of prefix) {
        if (!node.has(ch)){
            return false;
        }
        node = node.get(ch);
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */