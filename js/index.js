const textoApresenta = ['NEVLEK', 'DESIGNER', 'PROGRAMADOR'];
const apresenTa = document.getElementById('apresenta')
let j = 0;
let i = 0;
let apagar = false

function Escrever() {
  // Atualiza o texto exibido cortando até a letra j
  apresenTa.textContent = textoApresenta[i].slice(0, j)
  if(!apagar) {
    if(j < textoApresenta[i].length) {
      j++ // Avança uma letra
    } else {
      apagar = true
      setTimeout(Escrever, 1000);
      return
    }
  } else {
    if (j >0) {
      j--
    } else {
      apagar = false
      i = (i + 1) % textoApresenta.length // reinicia se for o último
    }
  }
  setTimeout(Escrever, 100); 
}
Escrever()