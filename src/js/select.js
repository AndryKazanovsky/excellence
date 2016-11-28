var langs = document.querySelectorAll('[data-lang] a');
var ul=document.getElementsByClassName("language-select")[0];
var li=ul.getElementsByTagName("li");

ul.onclick=function(){ul.classList.toggle("open")};
for(var i=0;i<langs.length;i++){
  langs[i].onclick=function(l){
    l.preventDefault();
    l.stopImmediatePropagation();
    for(var e=0;e<li.length;e++){
      li[e].classList.remove("active");
    };
    l.target.parentNode.classList.toggle("active");
    ul.classList.toggle("open")
        var request = new XMLHttpRequest();
        request.open('POST', this.getAttribute("href"), true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send({});
        return false;
  }
}