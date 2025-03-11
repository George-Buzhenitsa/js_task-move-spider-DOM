document.addEventListener("click",function(e){var t=function(e){var t=l.clientHeight-c.clientHeight;return e>=t?t+"px":e<=c.clientHeight?"0px":e-c.clientHeight/2+"px"},c=document.querySelector(".spider"),l=document.querySelector(".wall");e.target.matches(".wall")&&(c.style.top=t(e.offsetY),c.style.left=t(e.offsetX))});
//# sourceMappingURL=index.f85e3574.js.map
