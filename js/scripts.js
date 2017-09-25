//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    // The line var newContact = new Contact(inputtedFirstName, inputtedLastName) creates a new Contact object by calling the Contact constructor and passing it the inputted data. The variable newContact now refers to that newly created contact object, which knows its own firstName and lastName.

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      // If we didn't add last() to $(".contact"), each time a new contact was added, every element with the contact class would show the information of the most recently added contact on click. By adding last(), we only bind the event to most recently-inserted contact.
    });


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
