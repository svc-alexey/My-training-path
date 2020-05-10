let userName = [];



let img1 = `<img src="/img/1.jpg" alt="">`;
let img2 = `<img src="/img/2.jpg" alt="">`;
let img3 = `<img src="/img/3.jpg" alt="">`;


let allSliderPic = [img1, img2, img3];

// console.log('Array' + allSliderPic[2]);
count = 1;

function sliderNext() {
    for (let i = count; i < allSliderPic.length; i++) {
        document.getElementById("mainSlider").innerHTML = allSliderPic[i];
        return count++;
    }
    console.log("count=" + count);

}

function sliderBack() {
    for (let i = count - 2; i >= 0; i--) {
        document.getElementById("mainSlider").innerHTML = allSliderPic[i];
        return count--;
    }
}