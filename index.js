// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }


const saveLincolnButton = document.getElementById('save_lincoln')
const zombieLincoln = document.getElementById('foreground')
let interval = document.getElementById('interval')


saveLincolnButton.addEventListener('click', function(event) {
  saveLincoln(parseInt(interval.value))
})

function saveLincoln(num){
  if(!num) {
     num = 10000
   }
   fade(num)
}

function fade(num) {
  let op = 1;  // initial opacity
  let timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          zombieLincoln.style.display = 'none';
      }
      zombieLincoln.style.opacity = op;
      zombieLincoln.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, num);
}
