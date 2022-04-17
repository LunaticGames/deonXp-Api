const lightness = 50;
const sat = 80;
var hue = 0;
var systemColour;



setColour();

function setColour(){

    var spanBox = document.getElementById('previewBox');
    var hslValue = "hsl"+"("+hue+","+sat+"%,"+lightness+"%)"
    spanBox.style.backgroundColor = hslValue;

}

function incHue(){

    hue > 360 ? hue = 0: hue = hue + 1;
    //console.log(hue);
    setColour();

}
setInterval(incHue, 100);