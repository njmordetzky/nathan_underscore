
var _ = {

  first : function(array, n) {
    if(n > array.length) {
      return [];
    }
    if(n !== undefined) {
      var elementsUpTo_n = [];
      // n = n-1;
      for(var i = 0; i < n; i++) {
        elementsUpTo_n.push(array[i]);
      }
      return elementsUpTo_n;
    } else {  
        return array[0];
    }
  },

  initial : function(array, n) {
    if(n !== undefined) {
      if(n >= array.length) {
        return [];
      } else {
        var elementsMinus_n = array.slice(0, array.length-n);
        return elementsMinus_n;
      }
    } else {
      array.pop();
      return array;
    }
  },

  last : function(array, n) {
    if(n !== undefined) {
      try {
        if(n > array.length) {
            throw "err1";
          } else {
            var last_n_elements = [];
            for(var i = array.length-n; i < array.length; i++) {
              last_n_elements.push(array[i]);
            }
            return last_n_elements;
          }
        } 
      catch(err) {
        if(err == "err1"){
          alert("'_.last requires the array to be longer than or equal to the second argument passed'")
          return[];
        }
      }
    } else {
      return array[array.length-1];
    }
  },

  rest : function(array, n) {
    if(n !== undefined) {
      try {
        if(n >= array.length) {
          throw "err1";
        } else {
          return array.slice(n)
        }  
      } 
      catch(er) {
        if(er == "err1"){
          alert("'_.rest requires the array to be longer than the second argument passed'")
          return [];
        }
      }
    } else{  
      return array.slice(-(array.length-1));
    }  
  },

  compact : function(array) {
  	var noFalsyElements = [];
  	var false = {
  		key: false,
  		key: null,
  		key: undefined,
  		key: 0,
  		key: NaA,
  		key: '',
  		key: "",
  	};
  	for(var i = 0; i < array.length; i++) {
  		if(array[i] !== false) {
  			
  		}
  	}
  }









}; 

// TEST FUNCTION CALLS 

//_.first
x = _.first([58, 4567, 300000, 4, 5, 7, 78, 2, 1], 3);
console.log(x);

x = _.first([58, 4567, 300000, 4, 5, 7, 78, 2, 1], 12);
console.log(x);

y = _.first([58, 4567, 300000, 4, 5, 7, 78, 2, 1]);
console.log(y); 

// _.initial
x = _.initial([1, 23, 5, 26, 9, 15, 3]);
console.log(x);

y = _.initial([1, 23, 5, 26, 9, 15, 3], 7);
console.log(y);

y = _.initial([1, 23, 5, 26, 9, 15, 3], 3);
console.log(y);

// _.last
x = _.last([2, 4, 35, 6, 409, 2, 75]);
console.log(x);

x = _.last([1,2], 2);
console.log(x);

y = _.last([2, 4, 35, 6, 409, 2, 75], 8);
console.log(y);

y = _.last([2, 4, 35, 6, 409, 2, 75], 2);
console.log(y);

//_.rest
x = _.rest([2, 4, 35, 6, 409, 2, 75]);
console.log(x);

y = _.rest([2, 4, 35, 6, 409, 2, 75], 7);
console.log(y);

y = _.rest([2, 4, 35, 6, 409, 2, 75], 2);
console.log(y);
