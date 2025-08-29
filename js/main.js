// Small interactivity for counters and year
(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const animateNum = (el, target, duration=900) => {
    const start = 0;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      el.textContent = Math.floor(start + (target - start) * p).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const nums = [
    { id: 'num-waitlist', value: 512 },
    { id: 'num-partners', value: 7 },
    { id: 'num-saves', value: 1000 }
  ];
  nums.forEach(n => {
    const el = document.getElementById(n.id);
    if (el) animateNum(el, n.value, 1200);
  });
})();
