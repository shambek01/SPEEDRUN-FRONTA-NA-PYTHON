export module app.common {
    export class AjaxRequest {

        postRequestBase(urlfull, data, callback: Function): void {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                
                url: urlfull,
                data: data,
                dataType: "json",
                success: function (res) {
                    if (res == 401) {
                        location = <any>"login.html";
                    } else if (res == 500) {
                        $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                    }
                    callback(res);
                },
            });
        }

        postRequest(url, data,callback: Function, errorCallBack?: Function): void {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url:url + "?token=" + localStorage.getItem("token"),
                data: data,
                dataType: "json",
                success: function (res) {
                    if (res == 401) {
                        location = <any>"login.html";
                    } else if (res == 500) {
                        $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                    }
                    callback(res);
                },
                error: (res) => {
                }
            });
        }
        
        putRequest(url, data, callback: Function): void {
            $.ajax({
                type: "PUT",
                contentType: "application/json",

                url: url + "?token=" + localStorage.getItem("token"),
                data: data,
                dataType: "json",
                success: function (res) {
                    if (res == 401) {
                        location = <any>"login.html";
                    } else if (res == 500) {
                        $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                    }
                    callback(res);
                }
            });
        }
        deleteRequest(url, id, callback: Function, errorCallBack?: Function): void {
            $.ajax({
                type: "DELETE",
                contentType: "application/json",

                url: url + "?token=" + localStorage.getItem("token"),
                success: function (res) {
                    if (res == 401) {
                        location = <any>"login.html";
                    } else if (res == 500) {
                        $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                    }
                    callback(res);
                },
                error: (res) => {
                    errorCallBack(res);
                }
            });
        }
    


        getRequest(url, callback: Function): void {
            $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                success: function (res) {
                    if (res == 401) {
                        location = <any>"login.html";
                    } else if (res == 500) {
                        $("#popupNotification").kendoNotification().data("kendoNotification").show("Внутренняя ошибка сервера!", "error");
                    }
                    callback(res);
                }
            });
        }
    }
}