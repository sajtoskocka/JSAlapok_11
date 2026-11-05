const focim = document.getElementById("focim")
focim.textContent = "Mátrix rendszer";

const statuszElemek = document.getElementsByClassName("statusz-szoveg");

console.log(statuszElemek.length);

statuszElemek.textContent[0] = "Rendszer ellenőrzése folyamatban...";