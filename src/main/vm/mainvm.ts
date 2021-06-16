import ko = require('knockout');
import _courses = require('src/main/components/courses/vm/coursesvm');
import _tasks = require('src/main/components/tasks/vm/tasksvm');
import _coursesteacher = require('src/teacher/components/courses/vm/coursesteachervm');
export class MainVm {
    private coursesVm: _courses.CoursesVm;
    private tasksVm: _tasks.TasksVm;
    private coursesteacherVm: _coursesteacher.CoursesTeacherVm;
    constructor() {
        this.tasksVm = new _tasks.TasksVm();
        this.coursesVm = new _courses.CoursesVm();
        this.coursesteacherVm = new _coursesteacher.CoursesTeacherVm();
        this.koCustomBinding();
        console.log()
    }
    public getCourses(){
        return this.coursesVm;
    }
    public getCoursesTeacher(){
        return this.coursesteacherVm;
    }
    public getTasks(){
        return this.tasksVm;
    }
    private setInvisible() {
        this.tasksVm.isVisible(false);
        this.coursesVm.isVisible(false);
        this.coursesteacherVm.isVisible(false);
    }

    public switchVisibility(modulname: string) {
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
    }

    //custom binding from https://datatables.net/forums/discussion/comment/97357
    //
    koCustomBinding = () => {
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
                ko.utils.arrayForEach(nodes, function (node: any) {
                    if (node && node.nodeType !== 1) {
                        node.parentNode.removeChild(node);
                    }
                });
                return ko.bindingHandlers.foreach.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
            },
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var options = ko.unwrap(valueAccessor()),
                    key = 'DataTablesForEach_Initialized';
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
    }





}