function sm1() {
    pol1.style.cssText = "display: none;";
    pol2.style.cssText = "";
    rep.style.cssText = 'display: none;';
    //gl.style.cssText = '';
}

function sm2() {
    pol1.style.cssText = "";
    pol2.style.cssText = 'display: none;';
    rep.style.cssText = '';
    //gl.style.cssText = 'display: none;';
}

let pol1 = document.getElementById("b1");
pol1.addEventListener("click", sm1, false);

let pol2 = document.getElementById("b2");
pol2.addEventListener("click", sm2, false);

let rep = document.getElementById("c");
let gl = document.getElementById("gl");