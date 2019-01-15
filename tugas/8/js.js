///Operasi Perhitungan
// var angka1, angka2, hasil;
// angka1 = "10";
// angka2 = "10";
// hasil = angka1*angka2;
// document.write(hasil);

// var x = 10;
// var y = 17;

// x+=20;
// x++;
// x-=y;

// document.write(x);

///Kondisi
/* var jam = 22;
if(jam >= 5 && jam <= 10)
{
    document.write("Selamat Pagi");
}
else if(jam > 10 && jam <= 15)
{
    document.write("Selamat Siang");
}
else if(jam > 15 && jam <= 18)
{
    document.write("Selamat Sore");
}
else if(jam > 18 && jam <= 19)
{
    document.write("Selamat Petang");
}
else if(jam > 19 && jam <= 24)
{
    document.write("Selamat Malam");
}
else
{
    document.write("Dini Hari");
} */

/* var jam = 3.50;
var pesan = "";

pesan = (jam <= 10) ? "Selamat Pagi" : "Selamat Sore";

document.write(pesan);   */

///Perulangan
/* var i = 1;
document.write("Bilangan Genap 1-100 </br></br>");
for(i = 1; i <= 100; i++)
{
    if( i % 2 == 0)
    {
        document.write("Nomor : " +i);
        document.write("<br/>");
    }
} */

///Alert
/* var jam = 16;
if(jam <= 10)
{
    alert("Selamat Pagi.");
}
else if(jam > 10 && jam <=15)
{
    alert("Selamat Siang.");
}
else
{
    alert("Selamat Sore.");
} */

var bil1, bil2, jml;
alert("Operasi Perhitungan");
bil1 = prompt("Inputkan Angka 1");
bil2 = prompt("Inputkan Angka 2");
jml = parseInt(bil1)+parseInt(bil2);

var konfirmasi = confirm("Apakah Anda ingin membuka halaman ini?");
if(konfirmasi == true)
{
	document.write("Hasil = ");
	document.write(jml);
}
else
{
    document.location.href = "index.html";
}
