var nomeFilmes = ["As Branquelas", "Crepusculo", "Jogos Mortais", "Os Vingadores", "Matrix", "Como eu era antes de você", "50 tons de cinza", "Jogos vorazes"];
var listaFilmes = ['https://assets.cinebelasartes.com.br/wp-content/uploads/2018/06/as-branquelas-min.jpg', 'https://m.media-amazon.com/images/I/51h3hMtZ80L._AC_UF1000,1000_QL80_.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/94/44/32/20329257.jpg', "https://m.media-amazon.com/images/I/91J7VHbAwBL._AC_UF894,1000_QL80_.jpg", "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg", "https://m.media-amazon.com/images/I/61io1vJIWFL._AC_UF1000,1000_QL80_.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/14/11/14/13/47/211678.jpg", "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/jogos-vorazes.jpg"];
var i = 0;

document.write('<div class="container_filmes">');

while(i < listaFilmes.length){
  if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
    document.write('<div class="container_filmes">');
    document.write('<img src=' + listaFilmes[i] + '>');
    document.write('<p>' + nomeFilmes[i] + '</p>');
    document.write('</div>');
  } else {
    document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo Jpeg ou Jpg. </p>');
  }
  i++;
}
document.write('</div>');