 $(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({
      fullWidth: true
    });
    $('.parallax').parallax();
    $('.myreviews').carousel({
      numVisible:7,
      shift:55,
      padding :55,
    })
  });
   

  function toggleModal(){
      var instance=M.Modal.getInstance($('#modal1'));
      console.log({instance});
      instance.open();
  }
  function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}