(function (b, e) {
    b(function () {
        e.JigsawValidateUtil = new function () {
            var a = this;
            a.moveSuccess = function (b) {
                b && "function" == typeof b && (a.callback = b)
            };
            a.d = function () {
                b.ajax({
                    url: "/JigsawValidateUtilPlugin/pages/JigsawValidateUtil_outlay.jsx",
                    dataType: "html",
                    success: function (d) {
                        b("body").children(":last").after(d);
                        a.sr()
                    }
                })
            };
            a.sr = function () {
                a.st = "INIT";
                a.at = "INIT";
                a.iI();
                a.iM();
                a.iB();
                a.iId();
                a.mx = 0;
                a.mm = b("#JigsawValidateUtil_slide_bar").width() - b("#JigsawValidateUtil_slideBtn").width();
                a.mm = parseInt(a.mm);
                var d = b("body");
                d.on("dblclick", "#JigsawValidateUtil_backgroundImg", a, function () {
                    a.iI();
                    a.iId();
                    a.iB();
                    a.iM()
                });
                d.on("mousedown", "#JigsawValidateUtil_slideBtn", {
                    _t: a
                }, function (a) {
                    var d = a.data._t;
                    d.mx = 0;
                    "success" != d.st && "INIT" == d.at && (d.at = "DOWN", a.preventDefault(), a = a.clientX, d.bB(), b(document).on("mousemove", {
                        initX: a,
                        _t: d
                    }, d.mv), b(document).on("mouseup", {
                        _t: d
                    }, d.u))
                });
                d.on("click", ".JigsawValidateUtil_TB_overlayBG", a.h);
                d.on("click", ".JigsawValidateUtil_TB_window .JigsawValidateUtil_close", a.h)
            };
            a.mv = function (a) {
                var c = a.data._t;
                "DOWN" != !c.at && (c.at = "MOVE", c.mx = a.clientX - a.data.initX, b("#JigsawValidateUtil_slideBtn").off("mouseover").off("mouseout"), 0 > c.mx ? (c.iId(), c.iB(), c.iM()) : 0 <= c.mx && c.mx <= c.mm ? (c.bB(), b("#JigsawValidateUtil_mattingImg").css("left", c.mx + "px"), b("#JigsawValidateUtil_slide_indicator").css("border", "1px solid #1991fa"), b("#JigsawValidateUtil_slide_indicator").css("width", c.mx + b("#JigsawValidateUtil_slideBtn").width() + "px"), b("#JigsawValidateUtil_slideBtn").css("left", c.mx +
                    "px")) : (b("#JigsawValidateUtil_mattingImg").css("left", c.mm + "px"), b("#JigsawValidateUtil_slide_indicator").css("border", "1px solid #1991fa"), b("#JigsawValidateUtil_slide_indicator").css("width", c.mm + b("#JigsawValidateUtil_slideBtn").width() + "px"), b("#JigsawValidateUtil_slideBtn").css("left", c.mm + "px")))
            };
            a.u = function (a) {
                a = a.data._t;
                "MOVE" != !a.at && (a.at = "UP", b(document).off("mousemove"), b(document).off("mouseup"), a.cm(), a.at = "INIT")
            };
            a.iI = function () {
                a.st = "INIT";
                b.post("/JigsawValidateUtilPlugin/handler/gi.jsx", {}, function (a) {
                    if ("0" == a.code) {
                        var c = a.bgFilePath;
                        a = a.mattingFilePath;
                        b("#JigsawValidateUtil_mattingImg").attr("src", a);
                        b("#JigsawValidateUtil_backgroundImg").attr("src", c)
                    } else alert(a.msg)
                }, "json")
            };
            a.cm = function () {
                var d = {
                    mx: a.mx,
                    iw: b("#JigsawValidateUtil_backgroundImg").width()
                };
                b.post("/JigsawValidateUtilPlugin/handler/cm.jsx", d, function (c) {
                    "S0A00000" == c.code ? (a.rd(), setTimeout(function () {
                        a.callback ? (b(".JigsawValidateUtil_TB_overlayBG").fadeOut(), b(".JigsawValidateUtil_TB_window").fadeOut(a.callback)) :
                            (b(".JigsawValidateUtil_TB_overlayBG").fadeOut(), b(".JigsawValidateUtil_TB_window").fadeOut())
                    }, 2E3)) : (a.wId(), setTimeout(function () {
                        b("#JigsawValidateUtil_mattingImg").animate({
                            left: "0"
                        }, 200);
                        b("#JigsawValidateUtil_slideBtn").animate({
                            left: "0"
                        }, 200);
                        b("#JigsawValidateUtil_slideBtn").css("background-color", "#ffffff");
                        b("#JigsawValidateUtil_slide_icon").css("background-position", "0px -26px");
                        b("#JigsawValidateUtil_slideBtn").on("mouseover", a.bB);
                        b("#JigsawValidateUtil_slideBtn").on("mouseout", a.wB);
                        b("#JigsawValidateUtil_slide_indicator").animate({
                            width: "0px"
                        }, 200);
                        b("#JigsawValidateUtil_slide_indicator").css("background-color", "#d1e9fe");
                        b("#JigsawValidateUtil_slide_indicator").css("border", "1px solid transparent");
                        a.iI()
                    }, 500))
                }, "json")
            };
            a.iM = function () {
                b("#JigsawValidateUtil_mattingImg").css("left", "0px")
            };
            a.iB = function () {
                b("#JigsawValidateUtil_slideBtn").css("left", "0px");
                b("#JigsawValidateUtil_slideBtn").css("background-color", "#ffffff");
                b("#JigsawValidateUtil_slide_icon").css("background-position",
                    "0px -26px");
                b("#JigsawValidateUtil_slideBtn").on("mouseover", a.bB);
                b("#JigsawValidateUtil_slideBtn").on("mouseout", a.wB)
            };
            a.iId = function () {
                b("#JigsawValidateUtil_slide_indicator").css("width", "0px");
                b("#JigsawValidateUtil_slide_indicator").css("border", "1px solid transparent");
                b("#JigsawValidateUtil_slide_indicator").css("background-color", "#d1e9fe")
            };
            a.wId = function () {
                a.st = "FAIL";
                b("#JigsawValidateUtil_slide_icon").css("background-position", "0px -83px");
                b("#JigsawValidateUtil_slide_indicator").css("background-color",
                    "#fce1e1");
                b("#JigsawValidateUtil_slide_indicator").css("border-color", "#f57a7a");
                b("#JigsawValidateUtil_slideBtn").css("background-color", "#f57a7a")
            };
            a.rd = function () {
                a.st = "success";
                b("#JigsawValidateUtil_slide_icon").css("background-position", "0px 0px");
                b("#JigsawValidateUtil_slide_indicator").css("background-color", "#d2f4ef");
                b("#JigsawValidateUtil_slide_indicator").css("border-color", "#52ccba");
                b("#JigsawValidateUtil_slideBtn").css("background-color", "#52ccba")
            };
            a.wB = function () {
                b("#JigsawValidateUtil_slideBtn").css("background-color",
                    "#fff");
                b(".JigsawValidateUtil_slideBtn span").css("background-position", "0 -26px")
            };
            a.bB = function () {
                b("#JigsawValidateUtil_slideBtn").css("background-color", "#1991fa");
                b(".JigsawValidateUtil_slideBtn span").css("background-position", "0 -13px")
            };
            a.show = function () {
                b(".JigsawValidateUtil_TB_overlayBG").css("z-index", "999");
                b(".JigsawValidateUtil_TB_overlayBG").fadeIn();
                b(".JigsawValidateUtil_TB_window").fadeIn()
            };
            a.h = function () {
                b(".JigsawValidateUtil_TB_overlayBG").fadeOut();
                b(".JigsawValidateUtil_TB_window").fadeOut()
            }
        };
        e.JigsawValidateUtil.d()
    })
})($, window);