var charFrequency = function(str) {
     const mymap =new Map();
      for(let char of str){
          if(mymap.has(char)){
            mymap.set(char,mymap.get(char)+1);
          }
          else{
            mymap.set(char,1);
          }
      }
       return mymap;
};

console.log(charFrequency("hello world"))
console.log(charFrequency("javascript"))
console.log(charFrequency("aabsc"))