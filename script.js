function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute(
      'alt',
      'Foto de Julia Silva, sorrindo, cabelo grande e escuro, com blusa branca e rosa claro, com a cabeça para o lado esquerdo e com fundo claro.'
    );
  } else {
    img.setAttribute('src', './assets/Avatar.png');
    img.setAttribute(
      'alt',
      'Foto de Julia Silva, sorrindo, cabelo grande e escuro, com blusa branca e rosa claro, com a cabeça para o lado direito e com fundo claro.'
    );
  }
}
