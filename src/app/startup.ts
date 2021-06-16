"use strict"

import ko = require("knockout");
import bootstrap = require("bootstrap");
import _main = require('src/main/vm/mainvm');
import bootbox = require("bootbox");
import kendocore = require("kendo");
import bootstrapcolorpicker = require("bootstrapcolorpicker");
import bootstrapslider = require("bootstrapslider");
import datatable = require("datatables.net");

bootstrap;
bootbox;               //loads Bootstrap Bootbox  KKK
kendocore;             //loads Kendo Core UI  KKK
bootstrapcolorpicker;
bootstrapslider;
datatable;

var mvm: _main.MainVm = new _main.MainVm();

ko.components.register('courses-stg', {
    viewModel: { instance: mvm.getCourses() },
    template: { require: 'text!src/main/components/courses/view/courses.html' }
});
ko.components.register('tasks-stg', {
    viewModel: { instance: mvm.getTasks() },
    template: { require: 'text!src/main/components/tasks/view/tasks.html' }
});
ko.components.register('coursesteacher-stg', {
    viewModel: { instance: mvm.getCoursesTeacher() },
    template: { require: 'text!src/teacher/components/courses/view/coursesteacher.html' }
});

ko.applyBindings(mvm);

require(["jquery"], function ($) {
    $(document).ready(function () {
        $('.main-menu').on('click', 'a', function (e) {
            var parents = $(this).parents('li');
            var li = $(this).closest('li.dropdown');
            var another_items = $('.main-menu li').not(parents);
            another_items.find('a').removeClass('active');
            another_items.find('a').removeClass('active-parent');

            if ($(this).hasClass('dropdown-toggle') || $(this).closest('li').find('ul').length == 0) {
                $(this).addClass('active-parent');
                var current = $(this).next();
                if (current.is(':visible')) {
                    li.find("ul.dropdown-menu").slideUp('fast');
                    li.find("ul.dropdown-menu a").removeClass('active')
                }
                else {
                    another_items.find("ul.dropdown-menu").slideUp('fast');
                    current.slideDown('fast');
                }
            }
            else {
                if (li.find('a.dropdown-toggle').hasClass('active-parent')) {
                    var pre = $(this).closest('ul.dropdown-menu');
                    pre.find("li.dropdown").not($(this).closest('li')).find('ul.dropdown-menu').slideUp('fast');
                }
            }

            if ($(this).hasClass('active') == false) {
                $(this).parents("ul.dropdown-menu").find('a').removeClass('active');
                $(this).addClass('active')
            }

            if ($(this).hasClass('ajax-link')) {
                e.preventDefault();
                if ($(this).hasClass('add-full')) {
                    $('#content').addClass('full-content');
                }
                else {
                    $('#content').removeClass('full-content');
                }
                var url = $(this).attr('href');

                var mn = $(this).attr('mname');

                $('.preloader').hide();
                mvm.switchVisibility(mn);
            }
            if ($(this).attr('href') == '#') {
                e.preventDefault();
            }
        });

        $('.preloader').hide()


    });
});