var Sname ;
var course ;
var grade ;
var tp=document.getElementById('tpt');

var Bt = document.getElementById('bt');
Bt.addEventListener('click',save);
function save(){
Sname = document.getElementById('Sname').value;
course= document.getElementById('course').value;
 grade= gitR();
 showdata();
}
function gitR(){
var N=Math.floor(Math.random() * 100) + 35; 
return N ;
}
function showdata(){
    var row= document.createElement('tr');
var cell1 = document.createElement('td');
var cell2 = document.createElement('td');
var cell3 = document.createElement('td');
cell1.textContent=Sname;
cell2.textContent=course;
cell3.textContent=grade;

row.appendChild(cell1);
row.appendChild(cell3);
row.appendChild(cell2);
tp.appendChild(row);
}
