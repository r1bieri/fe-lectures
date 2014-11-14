var myvar = "global variable";

function func(){
    var myvar = "local";
    console.log(myvar);   // => local
    var myvar = "local variable";
    console.log(myvar); // => local variable
}
func();