import ko = require('knockout');
import ajaxRequest = require('src/common/AjaxRequest');
import nlsDataTable = require('src/nls/nlsDataTable');
import _course = require('src/main/components/courses/model/Course')

export class CoursesVm implements main.IView {
    isVisible: KnockoutObservable<boolean> = ko.observable(false);
    private ajax = new ajaxRequest.app.common.AjaxRequest();
    public courses: KnockoutObservableArray<_course.main.Course> = ko.observableArray([]);
    coursesPanel: KnockoutObservable<boolean> = ko.observable(true);
    disabledField: KnockoutObservable<boolean> = ko.observable(false);
    editPanel: KnockoutObservable<boolean> = ko.observable(false);
    public nlsdataTable: any = nlsDataTable.nls.ru;
    constructor(){
        this.loadCourses()
      }
    private loadCourses = () => {
        this.ajax.getRequest("http://127.0.0.1:8000/moodle/course/", data => {
            console.log(data)
            var lst: Array<_course.main.Course> = data;
            console.log(lst)
            this.sortLayerDataByAttr(lst, 'id');
            this.courses(lst);
        });
    }
    private sortLayerDataByAttr = (lst: any, attr: string) => {
        lst.sort(function (l, r) { return l[attr] > r[attr] ? 1 : -1 });
    }
}