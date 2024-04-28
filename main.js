window.onload = function Responsive() {
    if (window.innerWidth < 450) {
        window.location = "indexMOBILE.html";
    }
    else{
        window.location = "indexDESKTOP.html";
    }
}