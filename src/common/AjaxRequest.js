define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app;
    (function (app) {
        var common;
        (function (common) {
            var AjaxRequest = /** @class */ (function () {
                function AjaxRequest() {
                }
                AjaxRequest.prototype.postRequestBase = function (urlfull, data, callback) {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json",
                        url: urlfull,
                        data: data,
                        dataType: "json",
                        success: function (res) {
                            if (res == 401) {
                                location = "login.html";
                            }
                            else if (res == 500) {
                                $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                            }
                            callback(res);
                        },
                    });
                };
                AjaxRequest.prototype.postRequest = function (url, data, callback, errorCallBack) {
                    $.ajax({
                        type: "POST",
                        contentType: "application/json",
                        url: url + "?token=" + localStorage.getItem("token"),
                        data: data,
                        dataType: "json",
                        success: function (res) {
                            if (res == 401) {
                                location = "login.html";
                            }
                            else if (res == 500) {
                                $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                            }
                            callback(res);
                        },
                        error: function (res) {
                        }
                    });
                };
                AjaxRequest.prototype.putRequest = function (url, data, callback) {
                    $.ajax({
                        type: "PUT",
                        contentType: "application/json",
                        url: url + "?token=" + localStorage.getItem("token"),
                        data: data,
                        dataType: "json",
                        success: function (res) {
                            if (res == 401) {
                                location = "login.html";
                            }
                            else if (res == 500) {
                                $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                            }
                            callback(res);
                        }
                    });
                };
                AjaxRequest.prototype.deleteRequest = function (url, id, callback, errorCallBack) {
                    $.ajax({
                        type: "DELETE",
                        contentType: "application/json",
                        url: url + "?token=" + localStorage.getItem("token"),
                        success: function (res) {
                            if (res == 401) {
                                location = "login.html";
                            }
                            else if (res == 500) {
                                $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                            }
                            callback(res);
                        },
                        error: function (res) {
                            errorCallBack(res);
                        }
                    });
                };
                AjaxRequest.prototype.getRequest = function (url, callback) {
                    $.ajax({
                        type: "GET",
                        url: url,
                        dataType: "json",
                        success: function (res) {
                            if (res == 401) {
                                location = "login.html";
                            }
                            else if (res == 500) {
                                $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                            }
                            callback(res);
                        }
                    });
                };
                return AjaxRequest;
            }());
            common.AjaxRequest = AjaxRequest;
        })(common = app.common || (app.common = {}));
    })(app = exports.app || (exports.app = {}));
});
//# sourceMappingURL=AjaxRequest.js.map