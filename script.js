const chef = document.getElementById('chef-entity');
const chefFree = document.getElementById('chef-free');
const mensajeChef = document.getElementById('mensaje-chef');
const audioChef = document.getElementById('audio-chef');
const marker = document.getElementById('marcador');

marker.addEventListener('markerFound', () => {
  chef.setAttribute('visible', true);
  chefFree.setAttribute('visible', false);
  mensajeChef.style.display = 'none';
  audioChef.play();
});

marker.addEventListener('markerLost', () => {
  chef.setAttribute('visible', false);
  mensajeChef.style.display = 'block';
  audioChef.pause();
  audioChef.currentTime = 0;
});

// Mostrar chef sin marcador (botón externo)
function mostrarChefSinMarcador() {
  // Ocultar el chef del marcador y el mensaje
  chef.setAttribute('visible', false);
  mensajeChef.style.display = 'none';

  // Mostrar el chef en modo libre
  chefFree.setAttribute('visible', true);
  audioChef.play();
}
