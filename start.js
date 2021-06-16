window.openFilter = function (element) {
    window.treelyrsvm.onFilterLayer(element);
};

window.openAttrTable = function (element) {
    window.treelyrsvm.onAttrTbLayer(element);
};

window.editlayer = function (element) {
    window.treelyrsvm.onEditLayer(element);
};

window.openFiles = function (element) {
    window.treelyrsvm.onOpenAttachedFiles(element);
};

window.zoomToLayer = function (element) {
    window.treelyrsvm.onZoomToLayer(element);
};

window.transparencyLayer = function (element) {
    window.treelyrsvm.onTransparencyLayer(element);
};
