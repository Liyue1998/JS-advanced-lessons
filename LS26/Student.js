function Student(id,name){
    this.id=id;
    this.name=name;
}
Student.prototype.show=function(id,name){
    console.log("my name is"+name,"my id is"+id);
}
modle.exports=Student;