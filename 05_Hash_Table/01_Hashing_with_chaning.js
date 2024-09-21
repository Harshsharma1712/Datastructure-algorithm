class Hash {
    constructor(V) {
        this.Bucket = V;  //no. of bucket 
        this.table = new Array(V);

        for(let i = 0; i < V; i++) {
            this.table[i] = new Array();
        }
    }

    // hash function to map values to key
    hashFunction(x) {
        return x % this.Bucket;
    }

    // inserts a key into hash table
    insertItem(x) {
        const index = this.hashFunction(x);
        this.table[index].push(x);
    }

    // deletes a key from hash table
    deleteItem(key) {
        const index = this.hashFunction(key);

        const i = this.table[index].indexOf(key);

        // if key is found in hash table, remove it
        if(i !== -1)
            this.table[index].splice(i,1);
    }

     // function to display hash table
     displayHash() {
        for (let i = 0; i < this.BUCKET; i++) {
            let str = `${i}`;
            for (let j = 0; j < this.table[i].length; j++) {
                str += ` --> ${this.table[i][j]}`;
            }
            console.log(str);
        }
    }
}

const values = [15, 11, 27, 8, 12];

const n = values.length;

const hash = new Hash(7);

for(let i = 0; i < n; i++) {
    hash.insertItem(values[i]);
}

hash.displayHash();