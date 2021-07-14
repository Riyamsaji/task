var student={"cs":80,"english":89,"maths":70,"science":45,"language":90};
let array=Object.entries(student);
console.log(array);
    let sum=0;
    var s=array.reduce((std1,std2)=>sum==0?sum=std1[1]+std2[1]:sum+=std2[1]);
    console.log(s);
    var count=array.length;
    console.log(count);

var average=s/count
console.log(average);
