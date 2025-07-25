const danhSachSoTietKiem = [];

const addForm = document.getElementById('addForm');
const deleteForm = document.getElementById('deleteForm');
const soTietKiemTableBody = document.querySelector('#soTietKiemTable tbody');

function hienThiDanhSach() {
    soTietKiemTableBody.innerHTML = '';
    danhSachSoTietKiem.forEach(so => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${so.maSo}</td>
                    <td>${so.loaiTietKiem}</td>
                    <td>${so.hoTen}</td>
                    <td>${so.cmnd}</td>
                    <td>${so.ngayMoSo}</td>
                    <td>${so.soTienGui}</td>
                `;
        soTietKiemTableBody.appendChild(row);
    });
}

addForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const maSo = document.getElementById('maSo').value.trim();
    const loaiTietKiem = document.getElementById('loaiTietKiem').value.trim();
    const hoTen = document.getElementById('hoTen').value.trim();
    const cmnd = document.getElementById('cmnd').value;
    const ngayMoSo = document.getElementById('ngayMoSo').value.trim();
    const soTienGui = document.getElementById('soTienGui').value;

    if (maSo.length === 0 || loaiTietKiem.length === 0 || hoTen.length === 0 || !cmnd || ngayMoSo.length === 0 || !soTienGui) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (maSo.length > 5) {
        alert("Mã sổ không được vượt quá 5 ký tự. Vui lòng nhập lại!");
        return;
    }
    if (loaiTietKiem.length > 10) {
        alert("Loại tiết kiệm không được vượt quá 10 ký tự. Vui lòng nhập lại!");
        return;
    }
    if (hoTen.length > 30) {
        alert("Họ tên không được vượt quá 30 ký tự. Vui lòng nhập lại!");
        return;
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(ngayMoSo)) {
        alert("Ngày mở sổ phải có định dạng YYYY-MM-DD. Vui lòng nhập lại!");
        return;
    }

    const isMaSoExist = danhSachSoTietKiem.some(so => so.maSo === maSo);
    if (isMaSoExist) {
        alert("Lỗi: Mã sổ này đã tồn tại. Vui lòng nhập mã khác!");
        return;
    }

    const soMoi = new SOTIETKIEM(maSo, loaiTietKiem, hoTen, parseInt(cmnd), ngayMoSo, parseFloat(soTienGui));
    danhSachSoTietKiem.push(soMoi);

    alert("Thêm sổ tiết kiệm thành công!");
    addForm.reset();
    hienThiDanhSach();
});

deleteForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const maSoCanXoa = document.getElementById('maSoXoa').value.trim();
    if(maSoCanXoa.length === 0){
        alert("Vui lòng nhập mã sổ cần xóa.");
        return;
    }

    const indexCanXoa = danhSachSoTietKiem.findIndex(so => so.maSo === maSoCanXoa);

    if (indexCanXoa === -1) {
        alert("Mã sổ tiết kiệm không tồn tại. Vui lòng nhập lại!");
        return;
    }

    const xacNhanXoa = confirm(`Bạn có chắc chắn muốn xóa sổ có mã '${maSoCanXoa}' không?`);

    if (xacNhanXoa) {
        danhSachSoTietKiem.splice(indexCanXoa, 1);
        alert("Xóa sổ tiết kiệm thành công!");
        deleteForm.reset();
        hienThiDanhSach();
    }
});

hienThiDanhSach();