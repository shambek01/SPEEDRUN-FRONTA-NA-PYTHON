define(["require", "exports", "knockout", "src/main/components/courses/vm/coursesvm", "src/main/components/tasks/vm/tasksvm", "src/teacher/components/courses/vm/coursesteachervm"], function (require, exports, ko, _courses, _tasks, _coursesteacher) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainVm = /** @class */ (function () {
        function MainVm() {
            //custom binding from https://datatables.net/forums/discussion/comment/97357
            //
            this.koCustomBinding = function () {
                ko.bindingHandlers.dataTablesForEach = {
                    page: 0,
                    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        var options = ko.unwrap(valueAccessor());
                        ko.unwrap(options.data);
                        if (options.dataTableOptions.paging) {
                            valueAccessor().data.subscribe(function (changes) {
                                var table = $(element).closest('table').DataTable();
                                ko.bindingHandlers.dataTablesForEach.page = table.page();
                                table.destroy();
                            }, null, 'arrayChange');
                        }
                        var nodes = Array.prototype.slice.call(element.childNodes, 0);
                        ko.utils.arrayForEach(nodes, function (node) {
                            if (node && node.nodeType !== 1) {
                                node.parentNode.removeChild(node);
                            }
                        });
                        return ko.bindingHandlers.foreach.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
                    },
                    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                        var options = ko.unwrap(valueAccessor()), key = 'DataTablesForEach_Initialized';
                        ko.unwrap(options.data);
                        var table;
                        if (!options.dataTableOptions.paging) {
                            table = $(element).closest('table').DataTable();
                            table.destroy();
                        }
                        ko.bindingHandlers.foreach.update(element, valueAccessor, allBindings, viewModel, bindingContext);
                        table = $(element).closest('table').DataTable(options.dataTableOptions);
                        if (options.dataTableOptions.paging) {
                            if (table.page.info().pages - ko.bindingHandlers.dataTablesForEach.page == 0)
                                table.page(--ko.bindingHandlers.dataTablesForEach.page).draw(false);
                            else
                                table.page(ko.bindingHandlers.dataTablesForEach.page).draw(false);
                        }
                        if (!ko.utils.domData.get(element, key) && (options.data || options.length))
                            ko.utils.domData.set(element, key, true);
                        return { controlsDescendantBindings: true };
                    }
                };
            };
            this.tasksVm = new _tasks.TasksVm();
            this.coursesVm = new _courses.CoursesVm();
            this.coursesteacherVm = new _coursesteacher.CoursesTeacherVm();
            this.koCustomBinding();
            console.log();
        }
        MainVm.prototype.getCourses = function () {
            return this.coursesVm;
        };
        MainVm.prototype.getCoursesTeacher = function () {
            return this.coursesteacherVm;
        };
        MainVm.prototype.getTasks = function () {
            return this.tasksVm;
        };
        MainVm.prototype.setInvisible = function () {
            this.tasksVm.isVisible(false);
            this.coursesVm.isVisible(false);
            this.coursesteacherVm.isVisible(false);
        };
        MainVm.prototype.switchVisibility = function (modulname) {
            this.setInvisible();
            switch (modulname) {
                case 'tasks':
                    this.tasksVm.isVisible(true);
                    break;
                case 'coursesteacher':
                    this.coursesteacherVm.isVisible(true);
                    break;
                case 'courses':
                    this.coursesVm.isVisible(true);
                    break;
                default:
                    alert('Page not found');
            }
        };
        return MainVm;
    }());
    exports.MainVm = MainVm;
});
//# sourceMappingURL=mainvm.js.map