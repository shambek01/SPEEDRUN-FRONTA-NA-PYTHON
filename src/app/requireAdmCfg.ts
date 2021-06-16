interface Window { foo: any; }

requirejs.config({
    baseUrl: ".",
    paths: {
        "jquery": "Scripts/jquery-2.1.4.min",
        "bootstrap": "Scripts/bootstrap/js/bootstrap.min",
        "knockout": "Scripts/knockout-3.3.0",
        "text": "Scripts/text",
        "bootbox": "Scripts/bootstrap/js/bootbox",
        "kendo": "Scripts/kendocore/js/kendo.ui.core.min",
        "bootstrapcolorpicker": "Scripts/bootstrap/js/bootstrap-colorpicker.min",
        "bootstrapslider": "Scripts/bootstrap/js/bootstrap-slider",
        "datatables.net": "Scripts/bootstrap/js/dataTables/jquery.dataTables.min",
    },
});
require(["src/app/startup"]);