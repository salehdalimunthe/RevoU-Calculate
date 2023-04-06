
    function hitungluas1() {
        const alas = document.getElementById('alas-segitiga').value;
        const tinggi = document.getElementById('tinggi-segitiga').value;
        var luas = (alas * tinggi) / 2;

        document.getElementById('hasil-luas').innerHTML = "luas segitiga adalah: " + luas;
            }

    function hitungkeliling1() {
        const s1 = +document.getElementById('s1').value;
        const s2 = +document.getElementById('s2').value;
        const s3 = +document.getElementById('s3').value;
        var keliling = s1+s2+s3;
        
        document.getElementById('hasil-keliling').innerHTML = "keliling segitiga adalah: " + keliling;
            }

    function hitungluas2() {
        const alas = document.getElementById('alas-jajargenjang').value;
        const tinggi = document.getElementById('tinggi-jajargenjang').value;
        var luas = alas * tinggi;

        document.getElementById('hasil-luas-jajargenjang').innerHTML = "luas jajargenjang adalah: " + luas;
            }

    function hitungkeliling2() {
        const k1 = +document.getElementById('k1').value;
        const k2 = +document.getElementById('k2').value;
        const k3 = +document.getElementById('k3').value;
        const k4 = +document.getElementById('k4').value;
        var keliling = k1+k2+k3+k4;
        
        document.getElementById('hasil-keliling-jajargenjang').innerHTML = "keliling jajargenjang adalah: " + keliling;
            }