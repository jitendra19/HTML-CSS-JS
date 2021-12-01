console.log('asdf');
document.querySelectorAll('button').forEach((btn) => {
  console.log('btn');
  alert('btn');
  let counter = 0;
  let name = btn.innerHTML;
  btn.addEventListener('click', () => {
    counter++;
    console.log(`${name} --- ${counter}`);
    btn.innerHTML = name + counter;
    // return counter;
  });
});
