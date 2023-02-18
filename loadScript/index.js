function hello(error, src){
    if(error){
        console.log(error)
    }
    console.log("loaded")
}
function loadScript(src,callback){
    var script= document.createElement("script")
    script.src=src;
    script.onload=function(){
        console.log("loaded"+ src)
        callback(null,src)
    }
    script.onerror=function(){
        callback(new Error("it got some issue"))
    }
    document.body.appendChild(script)
}
loadScript("https://cdn.jsgdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",hello)