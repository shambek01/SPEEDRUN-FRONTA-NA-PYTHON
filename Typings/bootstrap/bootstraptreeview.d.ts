
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="bootstrap.d.ts"/>

interface JQuery {
    treeview(options?: any): JQuery;

    treeview(nameMethod: string, nodeId: number): JQuery;

    treeview(nameMethod: string, [{}, {}]): JQuery;
}


declare module "bootstraptreeview" {
}
