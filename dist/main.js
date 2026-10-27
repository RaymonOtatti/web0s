const projects = {
  laguardia: { count: '01', category: 'Real estate / Web', title: 'La Guardia Barrio Abierto', description: 'Un barrio abierto contado desde su paisaje, su escala y la experiencia de vivir cerca de todo.', image: 'images/laguardia.webp', url: 'https://barriolaguardia.com/' },
  raymon: { count: '02', category: 'Portfolio creativo / Web', title: 'Raymon Otatti Design & Co.', description: 'Una experiencia inmersiva donde cada pieza de diseño toma el protagonismo.', image: 'images/raymon.webp', url: 'https://raymonotatti.com/' },
  franie: { count: '03', category: 'Música / Web', title: 'Franie Smith', description: 'Un espacio digital que reúne música, fechas y el universo visual de una artista.', image: 'images/franie.webp', url: 'https://franiesmith.com/' },
  svya: { count: '04', category: 'Estudio jurídico / Web', title: 'Sáenz Valiente & Asociados', description: 'Una presencia sobria y editorial para un estudio jurídico con historia.', image: 'images/svya.webp' }
};

const dialog = document.querySelector('.project-dialog');
const close = dialog.querySelector('.dialog-close');
let opener = null;

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    opener = button;
    document.getElementById('dialog-count').textContent = project.count;
    document.getElementById('dialog-category').textContent = project.category;
    document.getElementById('dialog-title').textContent = project.title;
    document.getElementById('dialog-description').textContent = project.description;
    const image = document.getElementById('dialog-image');
    image.src = project.image;
    image.alt = `Captura de la web de ${project.title}`;
    const link = document.getElementById('dialog-link');
    const note = document.getElementById('dialog-note');
    link.hidden = !project.url;
    note.hidden = !!project.url;
    if (project.url) link.href = project.url;
    else note.textContent = 'Vista previa del proyecto';
    dialog.showModal();
  });
});

close.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => opener?.focus());
