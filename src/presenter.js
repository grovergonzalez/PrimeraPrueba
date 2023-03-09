document.getElementById('formulario').addEventListener('submit', guardarpost);

function guardarpost(e) {
  let titulo = document.getElementById('titulo').value;
  let contenido = document.getElementById('contenido').value;

  let post = {
    titulo,
    contenido
  };

  if(localStorage.getItem('posts') === null) {
    console.error('No es posible publicar un post sin título');
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

function getposts() {
  let posts = JSON.parse(localStorage.getItem('posts'));
  let postsView = document.getElementById('posts');
  postsView.innerHTML = '';
  for(let i = 0; i < posts.length; i++) {
    let titulo = posts[i].titulo;
    let contenido = posts[i].contenido;

    postsView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${titulo}  </p>
        <p>${contenido} </p>
         
          </p>
        </div>
      </div>`;
  }
}
getposts();