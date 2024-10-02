function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate() {
    var flag = true;
    // 1 Name
    var ten = getValue("iName");
    if (ten == ' ') {
        flag = false;
        showError(ten, 'Vui lòng kiểm tra lại Name');
    }

    //2 Address
    var diachi = getValue("iAddress");
    if (diachi == ' ') {
        flag = false;
        showError(diachi, 'Vui lòng kiểm tra lại Name');
    }

    //3 Tel
    var sdt = getValue("iTel");
    if (sdt == ' ') {
        flag = false;
        showError(sdt, 'Vui lòng kiểm tra lại Name');
    }

    //4 City
    var thanhpho = getValue("iCity");
    if (thanhpho == ' ') {
        flag = false;
        showError(thanhpho, 'Vui lòng kiểm tra lại Name');
    }

    //5 District
    var quan = getValue("iDistrict");
    if (quan == ' ') {
        flag = false;
        showError(quan, 'Vui lòng kiểm tra lại Name');
    }

    //6 Commune
    var phuong = getValue("iCommune");
    if (phuong == ' ') {
        flag = false;
        showError(phuong, 'Vui lòng kiểm tra lại Name');
    }
    return flag;
}

function Thongbao1() {
    alert("Bạn chọn giao hàng tại văn phòng");
}

function Thongbao2() {
    alert("Bạn chọn giao hàng tại nhà riêng");
}

function Luuthongtin() {
    if (validate() == false) {
        alert("Thông tin nhập không hợp lệ");
    }
    else {
        alert("Lưu thông tin thành công");
    }
}