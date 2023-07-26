import WOW from "wowjs";
import jQuery from "jquery";
import emailjs from "emailjs-com"
import "jquery";
import "waypoints/lib/jquery.waypoints.js";
import "counterup/jquery.counterup.js";
import "tempusdominus-bootstrap-4";


(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  const wow = new WOW.WOW();
  wow.init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  // $(function () {
  //   $('[data-toggle="counter-up"]').counterUp({
  //     delay: 10,
  //     time: 2000,
  //   });
  // });

  // Date and time picker
  // $(".date").datetimepicker({
  //   format: "L",
  // });
  // $(".time").datetimepicker({
  //   format: "LT",
  // });

  // Testimonials carousel
  // $(".testimonial-carousel").owlCarousel({
  //   autoplay: true,
  //   smartSpeed: 1000,
  //   center: true,
  //   margin: 25,
  //   dots: true,
  //   loop: true,
  //   nav: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 2,
  //     },
  //     992: {
  //       items: 3,
  //     },
  //   },
  // });
  $(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })
})(jQuery);

// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting and refreshing the page

//     // Get the form data
//     var formData = new FormData(this);

//     // Prepare the email body with the form data
//     var emailBody = "";
//     formData.forEach(function (value, key) {
//       emailBody += key + ": " + value + "\n";
//     });

//     // Send the email using a service like EmailJS
//     // Replace the placeholders with your actual EmailJS credentials and template details
//     emailjs
//       .send(
//         "service_21881v7",
//         "template_h2rqnq5",
//         { message: emailBody },
//         "LagDJlRp__sk0ywrI"
//       )
//       .then(
//         function () {
//           // Email sent successfully
//           alert("Thank you! Your inquiry has been sent.");
//           document.getElementById("contactForm").reset();
//         },
//         function (error) {
//           // Error occurred while sending the email
//           console.error("Error sending email:", error);
//           alert("Oops! An error occurred. Please try again later.");
//         }
//       );
//   });
