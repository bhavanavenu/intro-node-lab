class SortedList {
    constructor(){
        this.items=[];
        this.length=0;
    }

    add(x) {
        this.items.push(x);
        this.length++;
        this.items.sort((a, b) => {
        return a - b;
        });
    }
    get(pos) {
        return this.items[pos - 1];
        
    }

    max(){
        return this.items[this.length-1]
    }

    min(){
        return this.items[0];
    }

    average(){
        return this.sum()/this.length;
    }

    sum(){
        var sum = (acc,curr) => acc+curr;
        if(this.length>0){
            return this.items.reduce(sum);
        }
        return 0 ;
    }
}
// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

module.exports = SortedList;
