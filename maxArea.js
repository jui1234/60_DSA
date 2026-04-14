var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let maxArea=0;

    while(left<right){
        let length=Math.min(height[left],height[right]);
        let width=right-left;
        if(maxArea<length*width){
            maxArea=length*width;
        }

        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }

    }
    return maxArea;

};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));