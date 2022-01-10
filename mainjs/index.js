//BÀI TẬP 1
/**
 * KHỐI 1:input
 * soNgayLam , luongMoiNgay
 * 
 * KHỐI 2:
 * B1: Tạo biến và lấy giá trị từ form
 * 
 * B2:Tổng Tiền Lương
 * tongTienLuong = luongMoiNgay * soNgayLam
 * 
 * B3:Hiện kết quả
 * 
 * KHỐI 3:
 * tongTienLuong
 * 
 */
function tongTienLuong(){
    var luongMoiNgay = document.getElementById("wage").value
    var songaylam = document.getElementById("working_day").value
    var tongTienLuong = luongMoiNgay * songaylam
    
    document.getElementById("txtMoney").innerHTML = "Tiền Lương Được Nhận :<br> " + tongTienLuong.toLocaleString() +"<span style = 'vertical-align: super;'>đ</span>"
}

//BÀI TẬP 3
/**
 * KHỐI 1:
 * usd1 ,  soTienDoi
 * KHỐI 2:
 * B1: Tạo biến và lấy giá trị từ form
 * 
 * B2:
 * soTienViet = usd1 * soTienDoi
 * 
 * KHỐI 3
 * soTienViet
 */
function soTienViet(){
    var usd1 = 23500
    var soTienDoi = document.getElementById("moneyUSD").value
    var soTienViet = usd1 * soTienDoi
    document.getElementById("txt-moneyUSD").innerHTML = "Số Tiền Việt Nhận Được Là : <br>" +soTienViet.toLocaleString() +"<span style = 'vertical-align: super;'>đ</span>"
}
//BÀI TẬP 4
/**
 * KHỐI 1:
 * Width ,  Height
 * KHỐI 2:
 * B1: Tạo biến và lấy giá trị từ form
 * 
 * B2:
 * CHU VI
 * Acreage = Width * Height
 * 
 * DIỆN TÍCH
 * Perimeter = (Width + Height) * 2
 * 
 * B3:Kết Quả
 * 
 * 
 * KHỐI 3
 * Acreage , Perimeter
 *
 */

function Acr_Per(){
    var Width = Number(document.getElementById("Width").value)
    var Height = Number(document.getElementById("Height").value)
    // CHU VI
    var Acreage = Width * Height
    // DIỆN TÍCH
    var Perimeter = (Width + Height) * 2
    document.getElementById("txtResult").innerHTML = "Chu Vi Hình Chữ Nhật : " +"<br>" +Acreage +"<br>Diện Tích Hình Chữ Nhật :" +"<br>"  +Perimeter
}
//BÀI TẬP 5
/**
 * KHỐI 1:input
 * num
 * 
 * KHỐI 2:
 * B1 :Tạo biến và lấy giá trị từ form
 * 
 * B2:LẤY SỐ HÀNG CHỤC
 * ten = Math.floor(num / 10)
 * 
 * B3:LẤY SỐ HÀNG ĐƠN VỊ
 * unit = num % 10
 * 
 * KHỐI 3:
 * ten , unit
 */
 function tolTa(){
    var num = document.getElementById("num").value
    var ten = Math.floor(num / 10)
    var unit = num % 10
    var tolTa = ten + unit
    document.getElementById("txtTen-Unit").innerHTML = "Tổng Của 2 Chử Số :" + tolTa
}   