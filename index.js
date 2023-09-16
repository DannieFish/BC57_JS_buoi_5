document.getElementById('calculate_score').onclick = function (event) {
    event.preventDefault()

var reqPoint = +document.getElementById('point_requirement').value;

var subject1 = +document.getElementById('subject_1').value;
var subject2 = +document.getElementById('subject_2').value;
var subject3 = +document.getElementById('subject_3').value;

var areaPoint = +document.getElementById('area_point').value;
var userPoint = +document.getElementById('user_point').value;


var totalScore = (subject1 + subject2 + subject3) + areaPoint + userPoint;

if(subject1 <= 0 || subject2 <= 0 || subject3 <= 0){
    document.getElementById('result').innerHTML = "Bạn đã rớt, do có môn bằng 0 điểm" ;
    return
}
if(reqPoint <= totalScore){
document.getElementById('result').innerHTML = "Bạn đã đậu" + ", điểm của bạn là: " + totalScore + " Điểm";
}else if(reqPoint > totalScore){
document.getElementById('result').innerHTML = "Bạn đã rớt do không đủ điểm chuẩn"+ ", điểm của bạn là: " + totalScore + " Điểm";
}







}