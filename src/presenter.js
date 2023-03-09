document.getElementById('formulario').addEventListener('submit', guardarPost);

function guardarPost(e) {
  let titulo = document.getElementById('titulo').value;
  
  let post = {
    titulo,
  };

  if(localStorage.getItem('Posts') === null) {
    let post = [];
    post.push(post);
    localStorage.setItem('Posts', JSON.stringify(post));
  } else {
    let post = JSON.parse(localStorage.getItem('Posts'));
    post.push(nota);
    localStorage.setItem('Posts', JSON.stringify(post));
  }

  getPosts();
  document.getElementById('formulario').reset();
  e.preventDefault();
}

function getPosts() {
  let post = JSON.parse(localStorage.getItem('Posts'));
  let postView = document.getElementById('Posts');
  postView.innerHTML = '';
  fecha = new Date();
  for(let i = 0; i < post.length; i++) {
    let titulo = post[i].titulo;

    postView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${fecha}</p>
        <p>${titulo} </p>
          </p>
        </div>
      </div>`;
  }
}
getPosts();