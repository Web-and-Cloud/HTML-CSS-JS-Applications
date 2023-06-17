

var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function() {
  let f = parseFloat(this.value);
  if (!isNaN(f)) {
    let i = f * 12;
    inch.value = i;
  } else {
    inch.value = '';
  }
});

inch.addEventListener('input', function() {
  let i = parseFloat(this.value);
  if (!isNaN(i)) {
    let f = i / 12;
    feet.value = f;
  } else {
    feet.value = '';
  }
});


