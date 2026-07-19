/*! Bulma integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */
$.extend(true, DataTable.SearchPane.classes, {
    disabledButton: 'is-disabled',
    paneButton: 'button dtsp-paneButton is-white',
    search: 'input search'
});
$.extend(true, DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll button',
    collapseAll: 'dtsp-collapseAll button',
    disabledButton: 'is-disabled',
    search: DataTable.SearchPane.classes.search,
    showAll: 'dtsp-showAll button'
});
