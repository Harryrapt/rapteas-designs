document.querySelectorAll('.project').forEach(p => {
  const main = p.querySelector('.cover img');
  p.querySelectorAll('.thumbs button').forEach(btn => {
    btn.addEventListener('click', () => {
      main.src = btn.dataset.src;
      p.querySelectorAll('.thumbs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
