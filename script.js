const endirim = 0.56
let qiymet = prompt('Zəhmət olmasa almaq istədiyiniz malın ilkin qiymətini daxil edin:');


  yeniqiymet = endirim * qiymet

    document.getElementById('endirim').innerHTML = `bu malın qiyməti ${yeniqiymet} manata enəcək`;

