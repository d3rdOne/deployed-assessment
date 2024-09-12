$(document).ready(() => {
  $('#contactForm').validate({
    rules: {
      fullName: {
        required: true,
        minlength: 5
      },
      emailAddress: {
        required: true,
        email: true
      },
      preferredDay: {
        required: true
      },
      preferredTime: {
        required: true
      }
    },
    message: {
      fullName: {
        required: "Please enter your full name",
        minlength: "Your full name must be at least 5 characters long"
      },
      email: {
        required: "Please enter your email",
        email: "Please enter  a valid email address"
      },
      preferredDay: {
        required: "Please select your preferred day"
      },
      preferredTime: {
        required: "Please select your preferred time"
      }
    },
    errorPlacement: (error, element) => {},
    showErrors: (error, element)=> {},
    onkeyup:(element) => {
      toggleSubmitButton();
    },
    onfocusout: (element) => {
      toggleSubmitButton();
    }
  });

  function toggleContactSubmitButton() {
    if($('#contactForm').valid()) {
      $('#contactSubmit').prop('disabled', false);
    } else {
      $('#contactSubmit').prop('disabled', true);
    }
  }

  toggleContactSubmitButton();


  $('#newsLetterForm').validate({
    rules: {
      newsFullName: {
        required:  true,
        minlength: 5
      },
      newsEmailAddress: {
        required: true,
        email: true
      }
    },
    errorPlacement: (error, element) => {},
    showErrors: (error, element)=> {},
    onkeyup:(element) => {
      toggleNewsLetterSubmitButton();
    },
    onfocusout: (element) => {
      toggleNewsLetterSubmitButton();
    }
  })

  function toggleNewsLetterSubmitButton() {
    if($('#newsLetterForm').valid()) {
      $('#newsSubmit').prop('disabled', false);
    } else {
      $('#newsSubmit').prop('disabled', true);
    }
  }
  toggleNewsLetterSubmitButton
})