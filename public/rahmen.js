/* Gemeinsamer Rahmen: Hilfe, Teilen, Design-Umschalter, Fehler melden */
(function(){
  var URL0 = location.origin + '/', TITLE = document.title;
  function $(id){ return document.getElementById(id); }
  function on(id, fn){ var n = $(id); if (n) n.addEventListener('click', fn); }
  function openBox(id){ var d = $(id); if (!d) return; if ('open' in d) d.open = true; d.scrollIntoView({block:'start'}); var s = d.querySelector('summary'); if (s) s.focus(); }
  function share(){ return navigator.share({title: TITLE, url: URL0}).catch(function(){}); }
  on('r-help', function(){ openBox('hilfe'); });
  on('r-fhelp', function(ev){ if ($('hilfe')){ ev.preventDefault(); openBox('hilfe'); } });
  on('r-share', function(){ if (navigator.share) share(); else openBox('teilen'); });
  if (navigator.share && $('r-sshare')){ $('r-sshare').hidden = false; on('r-sshare', share); }
  on('r-copy', function(){
    var msg = $('r-msg');
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(URL0).then(function(){ msg.textContent = 'Link kopiert.'; }, function(){ msg.textContent = URL0; });
    } else { msg.textContent = URL0; }
  });
  on('r-print', function(){ window.print(); });
  on('r-theme', function(){
    var root = document.documentElement, cur = root.getAttribute('data-theme');
    if (!cur) cur = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(e){}
  });
  on('r-err', function(){
    var body = 'Seite: ' + location.href + '\n\nWas stimmt nicht?\n\n\nWie wäre es richtig?\n';
    this.href = this.href.split('&body=')[0] + '&body=' + encodeURIComponent(body);
  });
})();
