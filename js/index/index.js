
$(function () {
    let e = document.querySelector("#loading"),
      o = document.querySelector("#conteudo");
    setTimeout(() => {
      (e.style.opacity = 0),
        (e.style.display = "none"),
        (o.style.display = "block"),
        (o.style.opacity = 1);
    }, 1e3);
  }),
    $(function () {
      $("#navbar-toggler").click(function (e) {
        var o = $(this);
        "true" === o.attr("aria-expanded")
          ? $(".navbar ").removeClass("scrolled")
          : "false" === o.attr("aria-expanded") &&
            $(".navbar").addClass("scrolled");
      });
    }),
    $(function () {
      $(document).scroll(function () {
        var e = $(".navbar"),
          o = $(".corpo");
        $(".sect"),
          "false" === $(".navbar-toggler").attr("aria-expanded") &&
            e.toggleClass("scrolled", $(this).scrollTop() > e.height()),
          window.screen.availWidth < 700
            ? o.toggleClass("scrolled", $(this).scrollTop() > o.height())
            : o.toggleClass("scrolled", $(this).scrollTop() > 600);
      });
    }),
    $(function () {
      $("#navbar").bootnavbar();
    }),
    (function (e) {
      var o = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        navbar_expand: "lg",
      };
      e.fn.bootnavbar = function () {
        e(document).width() >= o.lg &&
          e(this)
            .find(".dropright,.dropdown")
            .hover(
              function () {
                e(this).addClass("show"),
                  e(this)
                    .find(".dropdown-menu")
                    .first()
                    .addClass("show")
                    .addClass("animated fadeIn")
                    .one(
                      "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd",
                      function () {
                        e(this).removeClass("animated fadeIn");
                      }
                    );
              },
              function () {
                e(this).removeClass("show"),
                  e(this).find(".dropdown-menu").first().removeClass("show");
              }
            ),
          e(".dropdown-menu a.dropdown-toggle").on("click", function (o) {
            return (
              e(this).next().hasClass("show") ||
                e(this)
                  .parents(".dropdown-menu")
                  .first()
                  .find(".show")
                  .removeClass("show"),
              e(this).next(".dropdown-menu").toggleClass("show"),
              e(this)
                .parents("li.nav-item.dropdown.show")
                .on("hidden.bs.dropdown", function (o) {
                  e(".dropdown-submenu .show").removeClass("show");
                }),
              !1
            );
          });
      };
    })(jQuery);
  var numero,
    pessoas = document.getElementById("visits");
  
  function Temporizador(e) {
    !0 !== e &&
      ((numero = Math.floor(11 * Math.random()) + 10),
      localStorage.setItem("pessoas", numero),
      (pessoas.innerText = localStorage.getItem("pessoas"))),
      setTimeout(Temporizador, 15e3);
  }
  
  function detecMoblie() {
    return ((window.mobileCheck = function () {
      var e;
      let o = !1;
      return (
        (e = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          e
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            e.substr(0, 4)
          )) &&
          (o = !0),
        o
      );
    }),
    !1 == mobileCheck())
      ? "web"
      : "api";
  }
  
  // function gtag_report_conversion(e) {
  //   return (
  //     gtag("event", "conversion", {
  //       send_to: "AW-11282131107/mo-BCIG8mc0YEKPR3oMq",
  //       event_callback: function () {
  //         void 0 !== e && (window.location = e);
  //       },
  //     }),
  //     !1
  //   );
  // }
   
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-16799999159/kBfeCLqT1KEaELfJ7so-',
        'transaction_id': '',
        'event_callback': callback
    });
    return false;
  }
  
   
  
  null == localStorage.getItem("pessoas") &&
    ((numero = Math.floor(11 * Math.random()) + 10),
    localStorage.setItem("pessoas", numero)),
    (pessoas.innerText = localStorage.getItem("pessoas")),
    $(function () {
      Temporizador(!0);
    })
  
    $(".whats").click((e) => {
      e.preventDefault(),
        (text =
          "Ol\xe1,%20estou%20no%20site%20e%20gostaria%20de%20tirar%20uma%20duvida.");
      var o =
        `https://${detecMoblie()}.whatsapp.com/send?1=pt_BR&phone=5571996952997&text=`.concat(
          text
        );
      window.open(o);
    })
  
    $(".insta-fixed").click((e) => {
      e.preventDefault();
      var o = "https://www.instagram.com/elojobburn/";
      window.open(o);
    })
  
    if(document.getElementById("comprar")){
        document.getElementById("comprar").addEventListener("click", function () {
            gtag_report_conversion("https://web.whatsapp.com/");
        });
    }