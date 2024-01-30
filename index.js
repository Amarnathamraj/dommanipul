const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign='center';
const Fruit=document.querySelector('.fruits');
Fruit.style.backgroundColor='grey';
const fruit=document.querySelector('.fruits');
fruit.style.padding='30px';
fruit.style.margin='30px';
fruit.style.width='50%';
fruit.style.borderRadius='5px';
fruit.style.listStyleType='none';
const Bask=document.querySelector('h2');
Bask.style.color='brown';
const fruititems=document.querySelectorAll('.fruit');
for(let i=0;i<fruititems.length;i++)
  {
     fruititems[i].style.backgroundColor='light-gray';
     fruititems[i].style.padding='5px';
     fruititems[i].style.margin='5px';
     fruititems[i].borderRadius='5px';
    
  }

const oddfruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<oddfruitItems.length;i++)
{
    oddfruitItems[i].style.backgroundColor='lightgrey';

}
const evenfruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<evenfruitItems.length;i++)
{
    evenfruitItems[i].style.backgroundColor='brown';
    
}




