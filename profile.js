$("document").ready(() => {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: "json",
    success: function (data) {
        $("#FName").html(data.results[0].name.first)
        $("#Lname").html(data.results[0].name.last)
        $("#gender").html(data.results[0].gender)
        $("#city").html(data.results[0].location.city)
        $("#email").html(data.results[0].email)
    }
  });
});
