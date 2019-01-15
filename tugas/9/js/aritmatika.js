function penjumlahan() {
    alert("Operasi Perhitungan");
    var x = prompt("Masukan Angka 1");
    var y = prompt("Masukan Angka 2");
    var result = parseInt(x)+parseInt(y);

    var konfirmasi = confirm("Apakah Anda ingin membuka halaman ini?");
    if(konfirmasi == true)
    {
        alert(result);
    }
    else
    {
        document.location.href = "index.html";
    }
}

function pengurangan() {
    alert("Operasi Pengurangan");
    var x = prompt("Masukan Angka 1","");
    var y = prompt("Masukan Angka 2","");
    var result = x-y;
      
    var konfirmasi = confirm("Apakah Anda ingin membuka halaman ini?");
    if(konfirmasi == true)
    {
        alert(result);
    }
    else
    {
        document.location.href = "index.html";
    }
}

function perkalian() {
    alert("Operasi Perkalian");
    var x = prompt("Masukan Angka 1","");
    var y = prompt("Masukan Angka 2","");
    var result = x*y;
      
    var konfirmasi = confirm("Apakah Anda ingin membuka halaman ini?");
    if(konfirmasi == true)
    {
        alert(result);
    }
    else
    {
        document.location.href = "index.html";
    }
}

function pembagian() {
    alert("Operasi Pembagian");
    var x = prompt("Masukan Angka 1","");
    var y = prompt("Masukan Angka 2","");
    var result = x/y;
      
    var konfirmasi = confirm("Apakah Anda ingin membuka halaman ini?");
    if(konfirmasi == true)
    {
        alert(result);
    }
    else
    {
      document.location.href = "index.html";
    }
}

function factorial() {
    alert("Operasi Faktorial");
    var input = prompt("Masukan Angka","");
    var result = input;
    for(var i=1;i < input;i++){
        result = i * result;
    }
      
    var konfirmasi = confirm("Apakah Anda ingin membuka halaman ini?");
    if(konfirmasi == true)
    {
        alert(result);
    }
    else
    {
        document.location.href = "index.html";
    }
}

function modulus() {
    alert("Operasi Modulus");
    var x = prompt("Masukan Angka 1","");
    var y = prompt("Masukan Angka 2","");
    var result = x%y;
      
    var konfirmasi = confirm("Apakah Anda ingin membuka halaman ini?");
    if(konfirmasi == true)
    {
        alert(result);
    }
    else
    {
        document.location.href = "index.html";
    }
}