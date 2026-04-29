var setbasics =function(){
    const array1 = [1, 2, 3, 4, 5,5,1,2,3,4];
    const myset =new Set(array1);

    console.log("set",myset);
    console.log("array",array1);
    console.log("add in set",myset.add(6));
    console.log("check for duplicate",myset)
    console.log("delete from set",myset.delete(3));
    console.log("check if number is present in set",myset.has(5));
    console.log("size of set",myset.size);
    console.log("to get the values of set",myset.values());
    myset.clear();
    // console.log("clear the set",myset.clear());
    return myset;
}

var mapbasics = function(){
    const mymap=new Map([[1,'one'],[2,'two'],[3,'three']]);
    console.log("map",mymap);
    console.log("To get the data of the key",mymap.get(1));
    console.log("To check if the key is present in map",mymap.has(3));
    console.log("To delete the key from map",mymap.delete(1));
    console.log ("To check the size of the map",mymap.size);
    console.log("To add the key value pair in map",mymap.set(4,'four'));
    mymap.clear();
    // console.log("To clear the map",mymap.clear());
    return mymap;
}

console.log(setbasics())
console.log(mapbasics())