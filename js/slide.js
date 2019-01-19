var i=0;
var images=[];
var time=5000;
images[0]='img/img1.jpg';
images[1]='img/img2.jpg';
images[2]='img/img3.jpg';
images[3]='img/img4.jpg';
images[4]='img/img5.jpg';
images[5]='img/img6.jpg';
images[6]='img/img7.jpg';
 function changeImg(){
document.slide.src=images[i];
if(i<images.length-1)
{
i++;
}
else
{
i=0;
}
setTimeout("changeImg()",time);
}
window.onload=changeImg;