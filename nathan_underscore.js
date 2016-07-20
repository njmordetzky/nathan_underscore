
var _ = {

  first : function(array, n) {
    if(n > array.length) {
      return [];
    }
    if(n !== undefined) {
      var elementsUpToN = [];
      // n = n-1;
      for(var i = 0; i < n; i++) {
        elementsUpToN.push(array[i]);
      }
      return elementsUpToN;
    } else {  
        return array[0];
    }
  },

  initial : function(array, n) {
    if(n !== undefined) {
      if(n >= array.length) {
        return [];
      } else {
        return array.slice(0, array.length-n);
      }
    } else {
      return array.slice(0,1);
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
    for(var i = 0; i < array.length; i++) {
      if(array[i]) {
        noFalsyElements.push(array[i]);
      }
    }
    return noFalsyElements;
  },

  flatten : function(array, shallow) {
    var shallow = shallow;
    var flatArray = [];
    for(var i = 0; i < array.length; i++) {
      if(Array.isArray(array[i])){
        if(shallow == "shallow"){
          var nestedArray = array[i];
          for(var j = 0; j < nestedArray.length; j++) {
            if(!Array.isArray(array[i][j])){
              flatArray.push(array[i][j]);
            }
          }  
        } 
        else {
          flatArray = flatArray.concat(_.flatten(array[i]));
        }  
      } 
      else {
        flatArray.push(array[i]);
      }
    }
    return flatArray;
  }














}; 

// TEST FUNCTION CALLS 


// _.flatten
// x = _.flatten([2,3,[4,5],6]);
// console.log(x);

// x = _.flatten([2,[[3,[[4,5,[6,7,]],8]]],9]);
// console.log(x);

// y = _.flatten([2,3,[4,5,[7,8]],6], "shallow");
// console.log(y);

// y = _.flatten([2,3,[4,5,[8,9],6],7], "shallow");
// console.log(y);


// y = _.flatten([2,[[3,[[4,5,[6,7,]],8]]],9], "shallow");
// console.log(y);

// _.compact
// x = _.compact([0, 1, 2, "", 3, -4, false, 5, null, undefined, NaN, 6]);
// console.log(x);

//_.rest
// x = _.rest([2, 4, 35, 6, 409, 2, 75]);
// console.log(x);

// y = _.rest([2, 4, 35, 6, 409, 2, 75], 7);
// console.log(y);

// y = _.rest([2, 4, 35, 6, 409, 2, 75], 2);
// console.log(y);

// _.last
// x = _.last([2, 4, 35, 6, 409, 2, 75]);
// console.log(x);

// x = _.last([1,2], 2);
// console.log(x);

// y = _.last([2, 4, 35, 6, 409, 2, 75], 8);
// console.log(y);

// y = _.last([2, 4, 35, 6, 409, 2, 75], 2);
// console.log(y);

// _.initial
// x = _.initial([1, 23, 5, 26, 9, 15, 3]);
// console.log(x);

// y = _.initial([1, 23, 5, 26, 9, 15, 3], 7);
// console.log(y);

// y = _.initial([1, 23, 5, 26, 9, 15, 3], 3);
// console.log(y);

//_.first
// x = _.first([58, 4567, 300000, 4, 5, 7, 78, 2, 1], 3);
// console.log(x);

// x = _.first([58, 4567, 300000, 4, 5, 7, 78, 2, 1], 12);
// console.log(x);

// y = _.first([58, 4567, 300000, 4, 5, 7, 78, 2, 1]);
// console.log(y); 
