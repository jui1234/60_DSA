var canConstruct = function(ransomNote, magazine) {
    let map=new Map();
    for(let ch of ransomNote){
      if(!map.has(ch)){
        map.set(ch,1);
      }
      else{
        map.set(ch,map.get(ch)+1);
      }
    }
    for(let ch of magazine){
      if(map.has(ch)){
        map.set(ch,map.get(ch)-1);
      }
      
    }
    
    let allzeros=[...map.values()].every(values=>values<=0)
    if(allzeros){
      return true;
    }
    return false;
    
   console.log("map",map)
};

console.log("result",canConstruct("a","b"))
console.log("result",canConstruct("aa","ab"))
console.log("result",canConstruct("aa","aab"))
console.log("result",canConstruct("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))