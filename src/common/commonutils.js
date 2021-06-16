define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.copyObject = function (object) {
            var objectCopy = {};
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    objectCopy[key] = object[key];
                }
            }
            return objectCopy;
        };
        Utils.disableDiv = function (idElement, disable) {
            if (disable)
                $("#" + idElement).addClass("disabledDiv");
            else
                $("#" + idElement).removeClass("disabledDiv");
        };
        Utils.getObjHeader = function (lyrobjdata) {
            var probableTitlesLst = ["addres1", "name", "name_rus", "namer"];
            var columnName = "";
            for (var el in lyrobjdata) {
                for (var i = 0; i < probableTitlesLst.length; i++) {
                    if (el === probableTitlesLst[i]) {
                        columnName = el;
                        break;
                    }
                }
            }
            var title = String(columnName === 'addres1' ? lyrobjdata.addres1 + ", " + lyrobjdata.number1 : lyrobjdata[columnName]);
            var objHeader = title !== "" && title !== 'undefined' ? title : "Нет данных";
            return objHeader;
        };
        Utils.getRandomColor = function () {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        Utils.getDate_forHTMLElement = function (date) {
            var datetime = new Date();
            if (date)
                datetime = new Date(date);
            var day = datetime.getDate();
            var month = datetime.getMonth() + 1;
            var year = datetime.getFullYear();
            var strday = day > 9 ? day.toString() : "0" + day.toString();
            var strmonth = month > 9 ? month.toString() : "0" + month.toString();
            var strdate = year.toString() + '-' + strmonth + '-' + strday;
            return strdate; // YYYY-MM-DD
        };
        Utils.getDate_fromDB = function (date) {
            var datetime = new Date();
            if (date)
                datetime = new Date(date);
            var day = datetime.getDate();
            var month = datetime.getMonth() + 1;
            var year = datetime.getFullYear();
            var strday = day > 9 ? day.toString() : "0" + day.toString();
            var strmonth = month > 9 ? month.toString() : "0" + month.toString();
            var strdate = strday + '.' + strmonth + '.' + year.toString();
            return strdate; // DD.MM.YYYY
        };
        Utils.getCurrentDate = function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10)
                dd = '0' + dd;
            if (mm < 10)
                mm = '0' + mm;
            return dd + '.' + mm + '.' + yyyy;
        };
        Utils.getCurrentDateTime = function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            var HH = today.getHours();
            var MM = today.getMinutes();
            var SS = today.getSeconds();
            if (dd < 10)
                dd = '0' + dd;
            if (mm < 10)
                mm = '0' + mm;
            return dd + '.' + mm + '.' + yyyy + ' ' + HH + ':' + MM + ':' + SS;
        };
        Utils.getArrayEl = function (array, attrName, attrValue) {
            var result = null;
            for (var i = 0; i < array.length; i++) {
                if (array[i][attrName] == attrValue) {
                    result = array[i];
                    break;
                }
            }
            return result;
        };
        Utils.geObjEl = function (obj, attrName, attrValue) {
            var result = null;
            for (var o in obj) {
                if (o[attrName] == attrValue) {
                    result = o;
                    break;
                }
            }
            return result;
        };
        Utils.removeArrayElement = function (array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] == value) {
                    array.splice(i, 1);
                }
            }
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
//# sourceMappingURL=commonutils.js.map