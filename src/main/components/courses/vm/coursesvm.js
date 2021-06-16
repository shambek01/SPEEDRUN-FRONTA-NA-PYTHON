define(["require", "exports", "knockout", "src/common/AjaxRequest", "src/nls/nlsDataTable"], function (require, exports, ko, ajaxRequest, nlsDataTable) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoursesVm = /** @class */ (function () {
        function CoursesVm() {
            var _this = this;
            this.isVisible = ko.observable(false);
            this.ajax = new ajaxRequest.app.common.AjaxRequest();
            this.courses = ko.observableArray([]);
            this.coursesPanel = ko.observable(true);
            this.disabledField = ko.observable(false);
            this.editPanel = ko.observable(false);
            this.nlsdataTable = nlsDataTable.nls.ru;
            this.loadCourses = function () {
                _this.ajax.getRequest("http://127.0.0.1:8000/moodle/course/", function (data) {
                    console.log(data);
                    var lst = data;
                    console.log(lst);
                    _this.sortLayerDataByAttr(lst, 'id');
                    _this.courses(lst);
                });
            };
            this.sortLayerDataByAttr = function (lst, attr) {
                lst.sort(function (l, r) { return l[attr] > r[attr] ? 1 : -1; });
            };
            this.loadCourses();
        }
        return CoursesVm;
    }());
    exports.CoursesVm = CoursesVm;
});
//# sourceMappingURL=coursesvm.js.map