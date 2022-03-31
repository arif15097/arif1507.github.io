// funsi insert data angka
function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}
// fungsi perhitungan
function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

// fungsi clear / hapus value
function clean(){
    document.form.textarea.value="";
}
