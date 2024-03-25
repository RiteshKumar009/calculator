let currentDisplay = '';
document.querySelector('#input-screen').value = currentDisplay; 


function deleteFun(){
    currentDisplay = currentDisplay.value.toString().slice(0,-1);
}