
/// <reference path="../../jquery/jquery.d.ts"/>
/// <reference path="../bootstrap.d.ts"/>

interface JQuery {
    DataTable(options?: any): JQuery;
    page(): JQuery;
    destroy(): JQuery;
}

declare module "datatables.net" {
}
