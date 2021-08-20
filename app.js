const colorForm = document.querySelector('#rgbColorInput');
const body = document.querySelector('body');
const output = document.querySelector('.outputText');
const colorDisp = document.querySelector('.colordisplay');

colorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    hexColorConvert();
})

function hexColorConvert() {

    const rVal = parseInt(colorForm.rNum.value);
    const gVal = parseInt(colorForm.gNum.value);
    const bVal = parseInt(colorForm.bNum.value);

    let newCol = new Colors(rVal,gVal,bVal).hex();
    output.value = newCol

    colorDisp.style.backgroundColor = newCol;
    
    // console.log(newCol.hex())
    // let hexColor = '';
}

class Colors {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g <<8) + b).toString(16).slice(1)
        );
    }
}