var parent={
    value:"parentval",
    obj:{objval:"parentobjval"},
    walk:function(){
        return "walking";
    }
}
var child=Object.create(parent);
var grandchild=Object.create(child);
child.value="childvalue";
child.obj.objval="childobj";
parent.obj.objval="parentobj"
grandchild.value="granchildval"
console.log(parent.value);
console.log(parent.obj.objval);
console.log(child.value);
console.log(child.obj.objval);
console.log(child.walk());
console.log(grandchild.value);
console.log(grandchild.obj.objval);


function Dog(name){
    this.name=name;
    console.log("this is: ",this);
}
var mydog=new Dog("max");
console.log(mydog.name);