javascript:(function() {
  // Create overlay
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.right = 0;
  overlay.style.bottom = 0;
  overlay.style.left = 0;
  overlay.style.background = 'rgba(0,0,0,0.7)';
  overlay.style.color = 'white';
  overlay.style.zIndex = 999999;
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.fontSize = '20px';
  overlay.innerHTML = 'HTML copied. Please paste it into the form.';
  document.body.appendChild(overlay);

  // Copy body HTML to clipboard
  var bodyHtml = document.body.innerHTML;
  var dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = bodyHtml;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  // Remove overlay after 2 seconds
  setTimeout(function() {
    document.body.removeChild(overlay);
  }, 2000);
})();
