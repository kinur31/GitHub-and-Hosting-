function tampilKota(provinsi)
{
    //Source code untuk tampil kota
    var kota = "";
    switch(provinsi)
    {
        case "Jabar" :
        {
            kota = "<ul><li>Bandung</li><li>Bogor</li><li>Garut</li></ul>";
        }break;
        case "Jateng" :
        {
            kota = "<ul><li>Cilacap</li><li>Jepara</li><li>Magelang</li></ul>";
        }break;
        default : kota = "";
    }
    document.getElementById('kota').innerHTML = kota;
}