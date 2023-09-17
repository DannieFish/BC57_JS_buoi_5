document.getElementById('calculate_score').onclick = function (event) {
    event.preventDefault()

    var reqPoint = +document.getElementById('point_requirement').value;

    var subject1 = +document.getElementById('subject_1').value;
    var subject2 = +document.getElementById('subject_2').value;
    var subject3 = +document.getElementById('subject_3').value;

    var areaPoint = +document.getElementById('area_point').value;
    var userPoint = +document.getElementById('user_point').value;


    var totalScore = (subject1 + subject2 + subject3) + areaPoint + userPoint;

    if (subject1 <= 0 || subject2 <= 0 || subject3 <= 0) {
        document.getElementById('result').innerHTML = "Bạn đã rớt, do có môn bằng 0 điểm";
        return
    }
    if (reqPoint <= totalScore) {
        document.getElementById('result').innerHTML = "Bạn đã đậu" + ", điểm của bạn là: " + totalScore + " Điểm";
    } else if (reqPoint > totalScore) {
        document.getElementById('result').innerHTML = "Bạn đã rớt do không đủ điểm chuẩn" + ", điểm của bạn là: " + totalScore + " Điểm";
    }

}

document.getElementById('electric_bill').onclick = function () {

    var soKw = +document.getElementById('input_electric_usage').value;
    var elecName = document.getElementById('input_name').value;
    var tongTienDien = 0;
    var tongTienDien1 = 0;
    var tongTienDien2 = 0;
    var tongTienDien3 = 0;
    var tongTienDien4 = 0;
    tongTienDien2
    if (soKw > 0 && soKw <= 50) {
        tongTienDien = soKw * 500;
        document.getElementById('total_electric_bill').innerHTML = "Tên: " + elecName + " Tiền điện: " + tongTienDien;
    } else if (soKw > 50 && soKw <= 100) {
        tongTienDien1 = (50 * 500) + (soKw - 50) * 650;
        document.getElementById('total_electric_bill').innerHTML = "Tên: " + elecName + " Tiền điện: " + tongTienDien1;
    } else if (soKw > 100 && soKw <= 150) {
        tongTienDien2 = (50 * 500) + (50 * 650) + (soKw - 100) * 850;
        document.getElementById('total_electric_bill').innerHTML = "Tên: " + elecName + " Tiền điện: " + tongTienDien2;
    } else if (soKw > 150 && soKw <= 200) {
        tongTienDien3 = (50 * 500) + (50 * 650) + (50 * 850) + (soKw - 150) * 1100;
        document.getElementById('total_electric_bill').innerHTML = "Tên: " + elecName + " Tiền điện: " + tongTienDien3;
    } else if (soKw > 200) {
        tongTienDien4 = (50 * 500) + (50 * 650) + (50 * 850) + (50 * 1100) + (soKw - 200) * 1300;
        document.getElementById('total_electric_bill').innerHTML = "Tên: " + elecName + " Tiền điện: " + tongTienDien4;
    }

}
document.getElementById('calculate_tax').onclick = function () {

    var soNguoiPhuThuoc = document.getElementById('less_tax').value;
    var hoVaTen = document.getElementById('user_taxed').value;
    var luongThue = 1 * document.getElementById('salary_get_taxed').value - 4000000 - soNguoiPhuThuoc * 1600000;


    var tinhTienThue = 0;

    if (luongThue <= 0) {
        tinhTienThue = luongThue * 0;
        alert("Số tiền không hợp lệ")
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    } else if (luongThue <= 6e7) {
        tinhTienThue = luongThue * 0.05;
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    } else if (luongThue > 6e7 && luongThue <= 120e6) {
        tinhTienThue = luongThue * 0.1;
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    } else if (luongThue > 120e6 && luongThue <= 210e6) {
        tinhTienThue = luongThue * 0.15;
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    } else if (luongThue > 210e6 && luongThue <= 384e6) {
        tinhTienThue = luongThue * 0.2;
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    } else if (luongThue > 384e6 && luongThue <= 624e6) {
        tinhTienThue = luongThue * 0.25;
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    } else if (luongThue > 624e6 && luongThue <= 960e6) {
        tinhTienThue = luongThue * 0.3;
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    } else if (luongThue > 960e6) {
        tinhTienThue = luongThue * 0.35;
        document.getElementById('result_tax').innerHTML = "Họ tên: " + hoVaTen + " ,Số tiền bị đánh thuế: " + formatNumber(tinhTienThue);
    }
}

function formatNumber(number) {
    return new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(number)
}