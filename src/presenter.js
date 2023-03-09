document.getElementById('formulario').addEventListener('submit', guardarpost);

function guardarpost(e) {
  let titulo = document.getElementById('titulo').value;
  let contenido = document.getElementById('contenido').value;

  let post = {
    titulo,
    contenido
  };

  if(localStorage.getItem('posts') === null) {
    console.log('No es posible publicar un post sin título');
    let posts = [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  } else {
    let posts = JSON.parse(localStorage.getItem('posts'));
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  getposts();
  document.getElementById('formulario').reset();
  e.preventDefault();
}

function longInput(titulo){

  if (titulo.length >=50)
  {
    alert('Por Favor el titulo del post no debe exceder de 50 caracteres');
    titulo.focus();
    return false;
  }else{
    return true;
  }
}

function longTextArea(contenido){

    if (contenido.length >=150)
    {
      alert('Por Favor contenido del post no debe exceder de 150 caracteres');
      contenido.focus();
      return false;
    }else{
      return true;
    }
}

function getposts() {
  let posts = JSON.parse(localStorage.getItem('posts'));
  let postsView = document.getElementById('posts');
  postsView.innerHTML = '';
  longInput(posts.titulo.value);
  longTextArea(posts.contenido.value);
  for(let i = 0; i < posts.length; i++) {
    let titulo = posts[i].titulo;
    let contenido = posts[i].contenido;

    postsView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p> Titulo: ${titulo}  </p>
        <p> Contenido: ${contenido} </p>
         
          </p>
        </div>
      </div>`;
  }
}
getposts();