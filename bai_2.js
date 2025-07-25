function sosanhphanso(tu1, mau1, tu2, mau2) {
    return tu1 * mau2 === tu2 * mau1;
}

function test(){
    const tuso1 = parseInt(document.getElementById("tuso1").value);
    const mauso1 = parseInt(document.getElementById("mauso1").value);
    const tuso2 = parseInt(document.getElementById("tuso2").value);
    const mauso2 = parseInt(document.getElementById("mauso2").value);

    if (isNaN(tuso1) || isNaN(mauso1) || isNaN(tuso2) || isNaN(mauso2)) {
        alert("Hãy nhập đầy đủ tử số và mẫu số");
        return;
    }

    if (mauso1 === 0 || mauso2 === 0) {
        alert("Mẫu số phải khác 0");
        return;
    }

    const bangnhau = sosanhphanso(tuso1, mauso1, tuso2, mauso2);
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Kết quả: " + bangnhau;
}