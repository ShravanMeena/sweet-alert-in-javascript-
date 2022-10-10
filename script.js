function alertHandler() {
  alert("Hello world!");
}

function sweetAlertHandler() {
  swal({
    title: "Are you sure?",
    text: "Do you want delete this task?",
    icon: "error",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("WILL DLEET?", "error");
    } else {
      swal("You are safe!");
    }
  });
}
