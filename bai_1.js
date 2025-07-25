function snt(n){
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i*i <= n; i += 2){
        if (n % i===0) return false;
    }
    return true;
}

function bai1(){
    let n = parseInt(document.getElementById('n').value);

    if (n <= 0 || n > 50){
        document.getElementById('result').innerHTML = "<p>n phải từ 1 đến 50</p>";
        return;
    }

    let a = [];
    for (let i= 0; i < n; i++){
        let x = parseInt(prompt(`Nhập phần tử thứ ${i+1}: `));
        a.push(x);
    }

    let b = [];
    for (let i=0; i<a.length; i++){
       if (snt(a[i])) {
           b.push(a[i]);
       }
    }
    document.getElementById('result').innerHTML =
        `<p>Mảng a: [${a.join(',')}]</p>
        <p>Mảng b: (các số nguyên tố): [${b.join(', ')}]</p>`
}
