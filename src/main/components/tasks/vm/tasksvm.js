define(["require", "exports", "knockout", "src/common/AjaxRequest", "src/nls/nlsDataTable"], function (require, exports, ko, ajaxRequest, nlsDataTable) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TasksVm = /** @class */ (function () {
        function TasksVm() {
            var _this = this;
            this.isVisible = ko.observable(false);
            this.ajax = new ajaxRequest.app.common.AjaxRequest();
            this.tasks = ko.observableArray([]);
            this.tasksPanel = ko.observable(true);
            this.disabledField = ko.observable(false);
            this.editPanel = ko.observable(false);
            this.nlsdataTable = nlsDataTable.nls.ru;
            this.loadTasks = function () {
                var data = [{ "id": 1, "name": "Task#1", "deadline": "03.06.2021", "created_on": "03.06.2021", "grade": 100 },
                    { "id": 2, "name": "Task#2", "deadline": "03.06.2021", "created_on": "03.06.2021", "grade": 100 },
                    { "id": 3, "name": "Task#3", "deadline": "03.06.2021", "created_on": "03.06.2021", "grade": 100 },
                    { "id": 5, "name": "Task#4", "deadline": "03.06.2021", "created_on": "03.06.2021", "grade": 100 },
                    { "id": 6, "name": "Task#5", "deadline": "03.06.2021", "created_on": "03.06.2021", "grade": 100 },
                    { "id": 7, "name": "Task#6", "deadline": "03.06.2021", "created_on": "03.06.2021", "grade": 100 },
                    { "id": 8, "name": "ATask#1SF", "deadline": "03.06.2021", "created_on": "03.06.2021", "grade": 0 }];
                var lst = data;
                _this.tasks(lst);
                console.log(data);
            };
            this.loadTasks();
        }
        return TasksVm;
    }());
    exports.TasksVm = TasksVm;
});
//# sourceMappingURL=tasksvm.js.map