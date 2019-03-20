function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
    callback(xhr.responseText);
  }
}
  xhr.send(null);

}

getfile("/data/dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
   profile(data.basics);
   carrier(data.carrier);
   education(data.education);
})
var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);
  var head=document.createElement('h2');
  head.textContent="JAINIKHIL";
  left.append(head);
  var hr=document.createElement('hr');
  left.append(hr);
  var head1=document.createElement('h2');
  head1.textContent=pro.email;
  left.append(head1);

}
function carrier(c) {
  var rh=document.createElement('h2');
  rh.textContent="carrier";
  left.appendChild(rh);
  var info=document.createElement('rh');
  info.textContent=c.info;
  left.appendChild(info);


}
function education(edu){
  var rs=document.createElement('h1');
  rs.textContent="education";
  left.appendChild(rs);
  var rs=document.createElement('rs');
  left.appendChild(rs);

  var table=document.createElement('table');
  let row=' ';

  row += "<tr>"+"<th>"+"sno"+"</th>"+
  "<th>"+"degree"+"</th>"+
  "<th>"+"institute"+"</th>"+
  "<th>"+"per"+"</th>"+
  "</tr>";

   for (i in edu){
    row += "<tr>"+"<td>"+edu[i].sno +"</td>"+
     "<td>"+edu[i].degree +"</td>"+
     "<td>"+edu[i].institute +"</td>"+
     "<td>"+edu[i].per +"</td>"+
     "</tr>";
}
table.innerHTML=row;
right.appendChild(table);
main.appendChild(right);
}
function skills(l) {
  var s=document.createElement("h1");
  s.textContent="skills set";
  right.append(s);
  var ul=document.createElement("li");
  li.textContent=l[i].info;
  ul.append(li);
}
