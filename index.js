// Write your code here!
document.getElementById('main').remove();



const newHeader = document.createElement('h1')

newHeader.id = "victory"
const yourName = 'Stphen Onyango' 
newHeader.textContent = `${yourName} is the champion`;
newHeader.className = "victory";
document.body.append(newHeader);
