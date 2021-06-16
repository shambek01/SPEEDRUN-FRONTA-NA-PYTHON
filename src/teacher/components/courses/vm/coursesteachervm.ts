import ko = require('knockout');
import ajaxRequest = require('src/common/AjaxRequest');
import nlsDataTable = require('src/nls/nlsDataTable');
import _course = require('src/main/components/courses/model/Course')
import _groupCourse = require('../../../../main/components/groupCourse/model/GroupCourse')
import _task = require('src/main/components/tasks/model/Task')
import _student = require('src/main/components/students/model/Student')
import _submission = require('src/main/components/submissions/model/Submission')
export class CoursesTeacherVm implements main.IView {
    isVisible: KnockoutObservable<boolean> = ko.observable(false);
    private ajax = new ajaxRequest.app.common.AjaxRequest();
    public courses: KnockoutObservableArray<_course.main.Course> = ko.observableArray([]);
    coursesPanel: KnockoutObservable<boolean> = ko.observable(true);
    studentsPanel: KnockoutObservable<boolean> = ko.observable(false);
    tasksPanel: KnockoutObservable<boolean> = ko.observable(false);
    disabledField: KnockoutObservable<boolean> = ko.observable(false);
    editPanel: KnockoutObservable<boolean> = ko.observable(false);
    groupCoursePanel: KnockoutObservable<boolean> = ko.observable(false);
    groupCourse : KnockoutObservableArray<_groupCourse.main.GroupCourse> = ko.observableArray([]);
    submissionsPanel: KnockoutObservable<boolean> = ko.observable(false);
    addTaskPanel: KnockoutObservable<boolean> = ko.observable(false);
    public submissions: KnockoutObservableArray<_submission.main.Submission> = ko.observableArray([]);
    public tasks: KnockoutObservableArray<_task.main.Task> = ko.observableArray([]);
    public students: KnockoutObservableArray<_student.main.Student> = ko.observableArray([]);
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
    public goToCourse = () => {
        this.coursesPanel(false)
        this.submissionsPanel(false)
        this.studentsPanel(false)
        this.loadTasks()
        this.tasksPanel(true)
    }
    public backToCourses = () => {
        this.tasksPanel(false)
        this.coursesPanel(false)
        this.studentsPanel(false)
        this.submissionsPanel(false)
        this.groupCoursePanel(false)
        this.coursesPanel(true)
    }
    public showSubmissions = () => {
        this.tasksPanel(false)
        this.submissionsPanel(false)
        this.coursesPanel(false)
        this.studentsPanel(false)
        this.loadSubmissions()
        this.groupCoursePanel(false)
        this.submissionsPanel(true)
    }
    public showGroupsCourse = () => {
        this.tasksPanel(false)
        this.loadGroupsCourse()
        this.submissionsPanel(false)
        this.coursesPanel(false)
        this.studentsPanel(false)
        this.loadSubmissions()
        this.groupCoursePanel(true)
    }
    public addNewTask = () =>{
        this.tasksPanel(false)
        this.addTaskPanel(true)
    }
    public cancelAdd = () =>{
        this.tasksPanel(true)
        this.addTaskPanel(false)
    }
    public showStudents = () => {
        this.tasksPanel(false)
        this.coursesPanel(false)
        this.submissionsPanel(false)
        this.loadStudents()
        this.groupCoursePanel(false)
        this.studentsPanel(true)
    }
    private loadStudents = () => {
        var data = [{"id":1,"name":"Student 1"},
        {"id":2,"name":"Student 2"},
        {"id":3,"name":"Student 3"},
        {"id":5,"name":"Student 4"},
        {"id":6,"name":"Student 5"},
        {"id":7,"name":"Student 6"},
        {"id":8,"name":"Student 7"}]
        var lst: Array<_student.main.Student> = data;  
        this.students(lst)
        console.log(data);
    }
    private loadTasks = () => {
        var data = [{"id":1,"name":"Task#1","deadline":"03.06.2021","created_on":"03.06.2021","grade":100},
        {"id":2,"name":"Task#2","deadline":"03.06.2021","created_on":"03.06.2021","grade":100},
        {"id":3,"name":"Task#3","deadline":"03.06.2021","created_on":"03.06.2021","grade":100},
        {"id":5,"name":"Task#4","deadline":"03.06.2021","created_on":"03.06.2021","grade":100},
        {"id":6,"name":"Task#5","deadline":"03.06.2021","created_on":"03.06.2021","grade":100},
        {"id":7,"name":"Task#6","deadline":"03.06.2021","created_on":"03.06.2021","grade":100},
        {"id":8,"name":"ATask#1SF","deadline":"03.06.2021","created_on":"03.06.2021","grade":0}]
        var lst: Array<_task.main.Task> = data;  
        this.tasks(lst)
        console.log(data);
    }
    private loadSubmissions = () => {
        var data = [{"id":1,"taskname":"Task#1","studentname":"Student 1","document":"submission1.doc","grade":100},
        {"id":2,"taskname":"Task#1","studentname":"Student 2","document":"submission2.doc","grade":100},
        {"id":3,"taskname":"Task#1","studentname":"Student 3","document":"submission3.doc","grade":100},
        {"id":5,"taskname":"Task#1","studentname":"Student 4","document":"submission4.doc","grade":100},
        {"id":6,"taskname":"Task#1","studentname":"Student 5","document":"submission5.doc","grade":100},
        {"id":7,"taskname":"Task#1","studentname":"Student 6","document":"submission6.doc","grade":100},
        {"id":8,"taskname":"Task#1","studentname":"Student 7","document":"submission7.doc","grade":0}]
        var lst: Array<_submission.main.Submission> = data;  
        this.submissions(lst)
        console.log(data);
    }
    private loadGroupsCourse = () => {
        var data = [{"group_id":1,"course_name":"Course 1","group_name":"Students 1","course_id":5,"credit":5},
        {"group_id":2,"course_name":"Course 2","group_name":"Students 2","course_id":1,"credit":5},
        {"group_id":3,"course_name":"Course 3","group_name":"Students 3","course_id":2,"credit":5},
        {"group_id":5,"course_name":"Course 4","group_name":"Students 4","course_id":3,"credit":5},
        {"group_id":6,"course_name":"Course 5","group_name":"Students 5","course_id":4,"credit":5},
        {"group_id":7,"course_name":"Course 6","group_name":"Students 6","course_id":5,"credit":5},
        {"group_id":8,"course_name":"Course 7","group_name":"Students 7","course_id":6,"credit":5}]
        var lst: Array<_groupCourse.main.GroupCourse> = data;  
        this.groupCourse(lst)
        console.log(data);
    }
}