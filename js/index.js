// Реализовать прототип для создаваемых коллекций, со следующими методами:
const array = [];

function MyArrayProto(){

  this.push = function(){
    for(let i = 0; i < arguments.length; i++){
     this[this.length++] = arguments;
    }
    return this.length;
  };

  this.pop = function(){
    delete this[this.length -1];
    this.length--;
    return this.length;
  };


  // this.unshift = function(){}


  this.shift = function(){
    delete this[0];
    this.length--;
    return this.length;
  };


  // this.concat = function(){}


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
      const result = func(this[i], i, this);
      return result;
    }
  };

  
  // this.map = function(){}
}

function MyArray(){
  this.length = 0;
}

MyArray.prototype = new MyArrayProto();

const myArr = new MyArray();