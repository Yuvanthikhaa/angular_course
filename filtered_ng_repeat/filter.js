let numarr=[1,2,3,4,5,6,7,8,9];
console.log("array: ",numarr);
function above5filter(value){
    return value>=5;
}
let filteredarr=numarr.filter(above5filter);
console.log(filteredarr);
let shoppinglist1=["cake","cookies","cream","butter","chocolate","chocolate ice cream"];
let searchval="chocolate";
function searchvalue(value){
    return value.indexOf(searchval)!=-1;
}
let filterarr=shoppinglist1.filter(searchvalue);
console.log(filterarr);
// filter in html template binding:
// {{filter_expression | filter : expression : comparator : anyPropertyKey}}

// in js:
// $filter('filter')(array, expression, comparator,anyPropertyKey)