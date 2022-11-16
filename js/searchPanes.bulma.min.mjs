/*! Bulma integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */
import $ from"jquery";import DataTable from"datatables.net-bm";import SearchPanes from"datatables.net-searchpanes";$.extend(!0,DataTable.SearchPane.classes,{disabledButton:"is-disabled",paneButton:"button dtsp-paneButton is-white",search:"input search"}),$.extend(!0,DataTable.SearchPanes.classes,{clearAll:"dtsp-clearAll button",collapseAll:"dtsp-collapseAll button",disabledButton:"is-disabled",showAll:"dtsp-showAll button"});export default DataTable;