function tambahJadwal() {
  let kegiatan = document.getElementById("kegiatan").value;
  let waktu = document.getElementById("waktu").value;

  if (kegiatan === "" || waktu === "") {
    alert("Data tidak boleh kosong!");
    return;
  }

  let list = document.getElementById("list");
  let item = document.createElement("li");

  let teks = document.createElement("span");
  teks.className = "teks";
  teks.innerText = kegiatan + " - " + waktu;

  let tombolEdit = document.createElement("button");
  tombolEdit.innerText = "Edit";
  tombolEdit.className = "btn-edit";

  tombolEdit.onclick = function () {
    let data = teks.innerText.split(" - ");
    let kegiatanBaru = prompt("Edit kegiatan:", data[0]);
    let waktuBaru = prompt("Edit waktu:", data[1]);

    if (kegiatanBaru && waktuBaru) {
      teks.innerText = kegiatanBaru + " - " + waktuBaru;
    }
  };

  let tombolHapus = document.createElement("button");
  tombolHapus.innerText = "Hapus";
  tombolHapus.className = "btn-hapus";

  tombolHapus.onclick = function () {
    list.removeChild(item);
  };

  item.appendChild(teks);
  item.appendChild(tombolEdit);
  item.appendChild(tombolHapus);

  list.appendChild(item);

  document.getElementById("kegiatan").value = "";
  document.getElementById("waktu").value = "";
}