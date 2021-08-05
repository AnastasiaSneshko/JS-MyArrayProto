// Реализовать прототип для создаваемых коллекций, со следующими методами:
function MyArrayProto(){
  this.push = function(){
    for(let i = 0; i < arguments.length; i++){
     this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function(){
    if(this.length === 0){
      return undefined;
    }
    const element = this[this.length -1];
    delete this[--this.length];
    return element;
  };

  // this.unshift = function(){}

  this.shift = function(){
    if(this.length === 0){
      return undefined;
    }
    const value = this[0];
    for(let i = 0; i < this.length-1; i++){
      this[i] = this[i+1];
    }
    delete this[--this.length];
    return value;
  };

  this.concat = function(){
    const result = new MyArray();
    for(let i = 0; i < this.length; i++){
      result.push(this[i]);
    }
    for(let i = 0; i < arguments.length; i++){
      result.push(arguments[i]);
    }
    return result;
  }

  this.some = function(func){
    for(let i = 0; i < this.length; i++){
      const result = func(this[i], i, this);
      if(result){
        return true;
      }
    }
    return false;
  };

  this.every = function(func){
    for(let i = 0; i < this.length; i++){
      const result = func(this[i], i, this);
      if(!result){
        return false;
      }
    }
    return true;
  };

  this.reverse = function(){
    let temp;
    for (let i = 0, j = this.length - 1; i < j; i++, j--) {
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
    } 
    return this; 
  };
  
  this.forEach = function(func) {
    for(let i = 0; i < this.length; i++){
      func(this[i], i, this);
    }
  };
  
  this.map = function(func){
    const result = new MyArray();
    for(let i = 0; i < this.length; i++){
      result.push(func(this[i], i, this));
    }
    return result;
  }
}

function MyArray(...args){
  this.length = 0;

  this.push(...args);
}

MyArray.isMyArray = function(param){
  return param instanceof MyArray;
}

MyArray.prototype = new MyArrayProto();

const myArr = new MyArray(1, 2, 3, 4);