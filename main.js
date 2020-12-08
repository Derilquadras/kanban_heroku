$(function () {
  $(".sortable")
    .sortable({
      connectWith: ".connectedSortable",
      receive: function (event, ui) {
        $(this).css({ "background-color": "none" });
      },
    })
    .disableSelection();
  $(".add-button").click(function () {
    var txtNewItem = $("#new_text").val();
    $(".two")
      .find("ul")
      .append('<li class="card">' + txtNewItem + "</li>");

  });
  $(".remove-button").click(function () {
    $(".three")
      .find("ul")
      .empty();
    });
});
