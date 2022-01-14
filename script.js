$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 50)
        {
            $('.navbar').addClass("sticky");
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
    }

    );
    $('.menu-btn').click(function()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }
    );
}
);


function myFunction() {
  var x = document.getElementById("theNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
