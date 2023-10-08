// contoh function
function Nilai(){
    let nama = document.getElementById("Nama").value;
    let nilai = document.getElementById("Nilai").value;
    let hasil;
    let masukan;
    //contoh if, else, nested if
    if (!isNaN(nilai)) {
        if (nilai >= 80) {
            hasil = "A";
        } else if (nilai >= 70) {
            hasil = "B";
        } else if (nilai >= 60) {
            hasil = "C";
        } else if (nilai >= 50) {
            hasil = "D";
        } else {
            hasil = "E";
        }
    } else {
        hasil = "Masukkan nilai yang valid";
    }
    //contoh switch case
    switch(hasil){
        case "A":
            masukan = "Pertahankan Nilai kamu";
            break;
        case "B":
            masukan = "Ayo lebih giat lagi belajarnya";
            break;
        case "C":
            masukan = "kamu harus lebih giat belajar dan berlatih";
            break;
        case "D":
            masukan = "Jangan bersedih Giat belajar dan berlatih jangan tidur mullu";
            break;
        default :
            masukan ="Dahlah !!!"
            break;
    }
    document.getElementById("HurufMutu").textContent = nama + " Mendapatkan huruf mutu sebesar : " + hasil;
    document.getElementById("saran").textContent = "masukan : " + masukan;
}

function LaporNilaiForToDo(){
    let jumlah = document.getElementById("Jumlah").value;
    // contoh perulangan For To Do
    for(i=0; i<jumlah;i++){
        let counter = i+1;
        let form = document.getElementById("JumlahMatakuliah");

        let labelM = document.createElement("label");
        labelM.textContent = " Mata kuliah : ";

        let labelN = document.createElement("label");
        labelN.textContent = " Nilai : ";


        let inputM = document.createElement("input");
        inputM.type = "text";
        inputM.name = "input" + counter;

        let inputN = document.createElement("input");
        inputM.type = "text";
        inputN.name = "input" + counter;

        let baris = document.createElement("br");

        form.appendChild(labelM);
        form.appendChild(inputM);
        form.appendChild(labelN);
        form.appendChild(inputN);
        form.appendChild(baris);
    }
}

function WhileDo(){
    let jumlah = document.getElementById("Jumlah").value;
    let i = 0;
    // Contoh perulangan While Do
    while(i<jumlah){
        let counter = i+1;
        let form = document.getElementById("JumlahMatakuliah");

        let labelM = document.createElement("label");
        labelM.textContent = " Mata kuliah : ";

        let labelN = document.createElement("label");
        labelN.textContent = " Nilai : ";


        let inputM = document.createElement("input");
        inputM.type = "text";
        inputM.name = "input" + counter;

        let inputN = document.createElement("input");
        inputM.type = "text";
        inputN.name = "input" + counter;

        let baris = document.createElement("br");

        form.appendChild(labelM);
        form.appendChild(inputM);
        form.appendChild(labelN);
        form.appendChild(inputN);
        form.appendChild(baris);

        i++;
    }
}

function DoWhile(){
    let jumlah = document.getElementById("Jumlah").value;
    let i = 0;
    // Contoh perulangan Do While
    do{
        let counter = i+1;
        let form = document.getElementById("JumlahMatakuliah");

        let labelM = document.createElement("label");
        labelM.textContent = " Mata kuliah : ";

        let labelN = document.createElement("label");
        labelN.textContent = " Nilai : ";


        let inputM = document.createElement("input");
        inputM.type = "text";
        inputM.name = "input" + counter;

        let inputN = document.createElement("input");
        inputM.type = "text";
        inputN.name = "input" + counter;

        let baris = document.createElement("br");

        form.appendChild(labelM);
        form.appendChild(inputM);
        form.appendChild(labelN);
        form.appendChild(inputN);
        form.appendChild(baris);

        i++;
    }while(i<jumlah); 
}
