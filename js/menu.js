function localFilename(url) {
  var x = url.lastIndexOf("/");
  url = url.slice(x + 1);
  return url; 
}

function switch_menu() {
  var img = document.getElementById('leftCol_img');
  var imgName = img.getAttribute("src");
  imgName = localFilename(imgName);
  if (imgName == "close.png") {
    var left_col = document.getElementById('w3c_leftCol');
    left_col.style.display="none";
    left_col.style.width="4%";
    var left_col_logo = document.getElementById('w3c_logo_shadow');
    left_col_logo.style.width="4%";
    var left_col_menu = document.getElementById('leftCol_menu');
    left_col_menu.style.width="4%";
    img.setAttribute("src", "../icons/menu.png");
    img.setAttribute("title", "Show Menu");
  } else {
    var left_col = document.getElementById('w3c_leftCol');
    left_col.style.display="block";
    left_col.style.width="20%";
    var left_col_logo = document.getElementById('w3c_logo_shadow');
    left_col_logo.style.width="20%";
    var left_col_menu = document.getElementById('leftCol_menu');
    left_col_menu.style.width="20%";
    img.setAttribute("src", "../icons/close.png");
    img.setAttribute("title", "Hide Menu");
  }
}
