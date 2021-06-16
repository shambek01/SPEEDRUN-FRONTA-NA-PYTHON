define(["require", "exports", "knockout", "src/common/AjaxRequest", "src/nls/nlsDataTable"], function (require, exports, ko, ajaxRequest, nlsDataTable) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoursesTeacherVm = /** @class */ (function () {
        function CoursesTeacherVm() {
            var _this = this;
            this.isVisible = ko.observable(false);
            this.ajax = new ajaxRequest.app.common.AjaxRequest();
            this.courses = ko.observableArray([]);
            this.coursesPanel = ko.observable(true);
            this.studentsPanel = ko.observable(false);
            this.tasksPanel = ko.observable(false);
            this.disabledField = ko.observable(false);
            this.editPanel = ko.observable(false);
            this.groupCoursePanel = ko.observable(false);
            this.groupCourse = ko.observableArray([]);
            this.submissionsPanel = ko.observable(false);
            this.addTaskPanel = ko.observable(false);
            this.submissions = ko.observableArray([]);
            this.tasks = ko.observableArray([]);
            this.students = ko.observableArray([]);
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
            this.goToCourse = function () {
                _this.coursesPanel(false);
                _this.submissionsPanel(false);
                _this.studentsPanel(false);
                _this.loadTasks();
                _this.tasksPanel(true);
            };
            this.backToCourses = function () {
                _this.tasksPanel(false);
                _this.coursesPanel(false);
                _this.studentsPanel(false);
                _this.submissionsPanel(false);
                _this.groupCoursePanel(false);
                _this.coursesPanel(true);
            };
            this.showSubmissions = function () {
                _this.tasksPanel(false);
                _this.submissionsPanel(false);
                _this.coursesPanel(false);
                _this.studentsPanel(false);
                _this.loadSubmissions();
                _this.groupCoursePanel(false);
                _this.submissionsPanel(true);
            };
            this.showGroupsCourse = function () {
                _this.tasksPanel(false);
                _this.loadGroupsCourse();
                _this.submissionsPanel(false);
                _this.coursesPanel(false);
                _this.studentsPanel(false);
                _this.loadSubmissions();
                _this.groupCoursePanel(true);
            };
            this.addNewTask = function () {
                _this.tasksPanel(false);
                _this.addTaskPanel(true);
            };
            this.cancelAdd = function () {
                _this.tasksPanel(true);
                _this.addTaskPanel(false);
            };
            this.showStudents = function () {
                _this.tasksPanel(false);
                _this.coursesPanel(false);
                _this.submissionsPanel(false);
                _this.loadStudents();
                _this.groupCoursePanel(false);
                _this.studentsPanel(true);
            };
            this.loadStudents = function () {
                var data = [{ "id": 1, "name": "Student 1" },
                    { "id": 2, "name": "Student 2" },
                    { "id": 3, "name": "Student 3" },
                    { "id": 5, "name": "Student 4" },
                    { "id": 6, "name": "Student 5" },
                    { "id": 7, "name": "Student 6" },
                    { "id": 8, "name": "Student 7" }];
                var lst = data;
                _this.students(lst);
                console.log(data);
            };
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
            this.loadSubmissions = function () {
                var data = [{ "id": 1, "taskname": "Task#1", "studentname": "Student 1", "document": "submission1.doc", "grade": 100 },
                    { "id": 2, "taskname": "Task#1", "studentname": "Student 2", "document": "submission2.doc", "grade": 100 },
                    { "id": 3, "taskname": "Task#1", "studentname": "Student 3", "document": "submission3.doc", "grade": 100 },
                    { "id": 5, "taskname": "Task#1", "studentname": "Student 4", "document": "submission4.doc", "grade": 100 },
                    { "id": 6, "taskname": "Task#1", "studentname": "Student 5", "document": "submission5.doc", "grade": 100 },
                    { "id": 7, "taskname": "Task#1", "studentname": "Student 6", "document": "submission6.doc", "grade": 100 },
                    { "id": 8, "taskname": "Task#1", "studentname": "Student 7", "document": "submission7.doc", "grade": 0 }];
                var lst = data;
                _this.submissions(lst);
                console.log(data);
            };
            this.loadGroupsCourse = function () {
                var data = [{ "group_id": 1, "course_name": "Course 1", "group_name": "Students 1", "course_id": 5, "credit": 5 },
                    { "group_id": 2, "course_name": "Course 2", "group_name": "Students 2", "course_id": 1, "credit": 5 },
                    { "group_id": 3, "course_name": "Course 3", "group_name": "Students 3", "course_id": 2, "credit": 5 },
                    { "group_id": 5, "course_name": "Course 4", "group_name": "Students 4", "course_id": 3, "credit": 5 },
                    { "group_id": 6, "course_name": "Course 5", "group_name": "Students 5", "course_id": 4, "credit": 5 },
                    { "group_id": 7, "course_name": "Course 6", "group_name": "Students 6", "course_id": 5, "credit": 5 },
                    { "group_id": 8, "course_name": "Course 7", "group_name": "Students 7", "course_id": 6, "credit": 5 }];
                var lst = data;
                _this.groupCourse(lst);
                console.log(data);
            };
            this.loadCourses();
        }
        return CoursesTeacherVm;
    }());
    exports.CoursesTeacherVm = CoursesTeacherVm;
});
//# sourceMappingURL=coursesteachervm.js.map