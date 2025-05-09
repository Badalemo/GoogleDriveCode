      //This will grab the height of the window of the browser
      var HEIGHT = $(window).height();
      $("#div1").animate({ top: HEIGHT }, 1000, function () {
        $("#div2").animate({ top: HEIGHT }, 1000, function () {
          $("#div1").animate({ top: "0px" }, 1000, function () {
            $("#div3").animate({ top: HEIGHT }, 1000, function () {
              $("#div2").animate({ top: "0px" }, 1000, function () {
                $("#div4").animate({ top: HEIGHT }, 1000, function () {
                  $("#div3").animate({ top: "0px" }, 1000, function () {
                    $("#div5").animate({ top: HEIGHT }, 1000, function () {
                      $("#div4").animate({ top: "0px" }, 1000, function () {
                        $("#div6").animate({ top: HEIGHT }, 1000, function () {
                          $("#div5").animate({ top: "0px" }, 1000, function () {
                            $("#div7").animate(
                              { top: HEIGHT },
                              1000,
                              function () {
                                $("#div6").animate(
                                  { top: "0px" },
                                  1000,
                                  function () {
                                    $("#div8").animate(
                                      { top: HEIGHT },
                                      1000,
                                      function () {
                                        $("#div7").animate(
                                          { top: "0px" },
                                          1000,
                                          function () {
                                            $("#div8").animate(
                                              { top: "0px" },
                                              1000
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });