function localFilename(url) {
  var x = url.lastIndexOf("/");
  url = url.slice(x + 1);
  return url; 
}

function switch_menu() {
  var img = document.getElementById('leftCol_icon');
  var imgName = img.getAttribute("src");
  imgName = localFilename(imgName);
  var collapse = document.getElementById('collapse');
  if (imgName == "close2.png") {
    var left_col = document.getElementById('w3c_leftCol');
    left_col.style.width="4%";
    var left_col_logo = document.getElementById('w3c_logo_shadow');
    left_col_logo.style.width="4%";
    collapse.style.display="none";
    img.setAttribute("src", "../icons/menu2.png");
    img.setAttribute("title", "Show Menu");
  } else {
    var left_col = document.getElementById('w3c_leftCol');
    left_col.style.width="20%";
    var left_col_logo = document.getElementById('w3c_logo_shadow');
    left_col_logo.style.width="20%";
    collapse.style.display="block";
    img.setAttribute("src", "../icons/close2.png");
    img.setAttribute("title", "Hide Menu");
  }
}
