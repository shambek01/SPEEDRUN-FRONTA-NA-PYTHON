export class Utils {

    static copyObject<T>(object: T): T {
        var objectCopy = <T>{};

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                objectCopy[key] = object[key];
            }
        }

        return objectCopy;
    }

    static disableDiv(idElement: string, disable: boolean): void {
        if (disable)
            $("#" + idElement).addClass("disabledDiv");
        else $("#" + idElement).removeClass("disabledDiv");
    }

    static getObjHeader(lyrobjdata: any): string {
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
    }

    static getRandomColor = () => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    static getDate_forHTMLElement = (date: string): string => {
        var datetime = new Date();
        if (date)
            datetime = new Date(date);
        var day = datetime.getDate();
        var month = datetime.getMonth() + 1;
        var year = datetime.getFullYear();
        var strday = day > 9 ? day.toString() : "0" + day.toString();
        var strmonth = month > 9 ? month.toString() : "0" + month.toString();
        var strdate: string = year.toString() + '-' + strmonth + '-' + strday;
        return strdate; // YYYY-MM-DD
    }

    static getDate_fromDB = (date: string): string => {
        var datetime = new Date();
        if (date)
            datetime = new Date(date);
        var day = datetime.getDate();
        var month = datetime.getMonth() + 1;
        var year = datetime.getFullYear();
        var strday = day > 9 ? day.toString() : "0" + day.toString();
        var strmonth = month > 9 ? month.toString() : "0" + month.toString();
        var strdate: string = strday + '.' + strmonth + '.' + year.toString();
        return strdate; // DD.MM.YYYY
    }

    static getCurrentDate = (): string => {
        var today = new Date();
        var dd: any = today.getDate();
        var mm: any = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10)
            dd = '0' + dd
        if (mm < 10)
            mm = '0' + mm
        return dd + '.' + mm + '.' + yyyy;
    }

    static getCurrentDateTime = (): string => {
        var today = new Date();
        var dd: any = today.getDate();
        var mm: any = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var HH = today.getHours();
        var MM = today.getMinutes();
        var SS = today.getSeconds();
        if (dd < 10)
            dd = '0' + dd
        if (mm < 10)
            mm = '0' + mm
        return dd + '.' + mm + '.' + yyyy + ' ' + HH + ':' + MM + ':' + SS;
    }

    static getArrayEl = (array: Array<any>, attrName: string, attrValue: any): any => {
        var result = null;
        for (var i = 0; i < array.length; i++) {
            if (array[i][attrName] == attrValue) {
                result = array[i];
                break;
            }
        }
        return result;
    }

    static geObjEl = (obj: any, attrName: string, attrValue: any): any => {
        var result = null;
        for (var o in obj) {
            if (o[attrName] == attrValue) {
                result = o;
                break;
            }
        }
        return result;
    }

    static removeArrayElement = (array: Array<any>, key: any, value: any): void => {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                array.splice(i, 1);
            }
        }
    }

}