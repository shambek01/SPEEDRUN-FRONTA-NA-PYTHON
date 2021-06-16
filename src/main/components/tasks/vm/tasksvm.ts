import ko = require('knockout');
import ajaxRequest = require('src/common/AjaxRequest');
import nlsDataTable = require('src/nls/nlsDataTable');
import _task = require('src/main/components/tasks/model/task')

export class TasksVm implements main.IView {
    isVisible: KnockoutObservable<boolean> = ko.observable(false);
    private ajax = new ajaxRequest.app.common.AjaxRequest();
    public tasks: KnockoutObservableArray<_task.main.Task> = ko.observableArray([]);
    tasksPanel: KnockoutObservable<boolean> = ko.observable(true);
    disabledField: KnockoutObservable<boolean> = ko.observable(false);
    editPanel: KnockoutObservable<boolean> = ko.observable(false);
    public nlsdataTable: any = nlsDataTable.nls.ru;
    constructor(){
        this.loadTasks()
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
}