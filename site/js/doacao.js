// Botão "Copiar PIX copia e cola" (home e página Doar)
document.querySelectorAll('.copy-btn[data-copy]').forEach(function (btn) {
  var label = btn.textContent;
  btn.addEventListener('click', function () {
    var text = btn.getAttribute('data-copy');
    function done() {
      btn.classList.add('copied'); btn.textContent = '✅ PIX copiado!';
      setTimeout(function () { btn.classList.remove('copied'); btn.textContent = label; }, 2500);
    }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else { fallback(); }
  });
});
