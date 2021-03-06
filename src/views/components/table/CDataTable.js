"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CPagination = _interopRequireDefault(require("../pagination/CPagination"));

var _CElementCover = _interopRequireDefault(require("../element-cover/CElementCover"));

var _CDataTableModule = _interopRequireDefault(require("./CDataTable.module.css"));

var _iconsReact = _interopRequireDefault(require("@coreui/icons-react"));


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//component - CoreUI / CTable
var CDataTable = function CDataTable(props) {
  var _ref2;

  var innerRef = props.innerRef,
      overTableSlot = props.overTableSlot,
      columnHeaderSlot = props.columnHeaderSlot,
      sortingIconSlot = props.sortingIconSlot,
      columnFilterSlot = props.columnFilterSlot,
      noItemsViewSlot = props.noItemsViewSlot,
      noItemsView = props.noItemsView,
      captionSlot = props.captionSlot,
      underTableSlot = props.underTableSlot,
      theadTopSlot = props.theadTopSlot,
      loadingSlot = props.loadingSlot,
      scopedSlots = props.scopedSlots,
      loading = props.loading,
      fields = props.fields,
      pagination = props.pagination,
      activePage = props.activePage,
      itemsPerPage = props.itemsPerPage,
      items = props.items,
      sorter = props.sorter,
      header = props.header,
      clickableRows = props.clickableRows,
      columnFilter = props.columnFilter,
      tableFilterValue = props.tableFilterValue,
      tableFilter = props.tableFilter,
      addTableClasses = props.addTableClasses,
      size = props.size,
      dark = props.dark,
      striped = props.striped,
      hover = props.hover,
      border = props.border,
      outlined = props.outlined,
      responsive = props.responsive,
      footer = props.footer,
      itemsPerPageSelect = props.itemsPerPageSelect,
      sorterValue = props.sorterValue,
      columnFilterValue = props.columnFilterValue,
      onRowClick = props.onRowClick,
      onSorterValueChange = props.onSorterValueChange,
      onPaginationChange = props.onPaginationChange,
      onColumnFilterChange = props.onColumnFilterChange,
      onPagesChange = props.onPagesChange,
      onTableFilterChange = props.onTableFilterChange,
      onPageChange = props.onPageChange,
      onFilteredItemsChange = props.onFilteredItemsChange;
  var compData = (0, _react.useRef)({
    firstRun: true,
    columnFiltered: 0,
    changeItems: 0
  }).current; //

  var _useState = (0, _react.useState)(itemsPerPage),
      perPageItems = _useState[0],
      setPerPageItems = _useState[1];

  var _useState2 = (0, _react.useState)(sorterValue || {}),
      sorterState = _useState2[0],
      setSorterState = _useState2[1];

  var _useState3 = (0, _react.useState)(tableFilterValue),
      tableFilterState = _useState3[0],
      setTableFilterState = _useState3[1];

  var _useState4 = (0, _react.useState)(columnFilterValue || {}),
      columnFilterState = _useState4[0],
      setColumnFilterState = _useState4[1];

  var _useState5 = (0, _react.useState)(activePage || 1),
      page = _useState5[0],
      setPage = _useState5[1];

  var _useState6 = (0, _react.useState)(items || []),
      passedItems = _useState6[0],
      setPassedItems = _useState6[1]; // functions


  var cellClass = function cellClass(item, colName, index) {
    var classes = [];

    if (item._cellClasses && item._cellClasses[colName]) {
      classes.push(item._cellClasses[colName]);
    }

    if (fields && fields[index]._classes) {
      classes.push(fields[index]._classes);
    }

    return classes;
  };

  var pretifyName = function pretifyName(name) {
    return name.replace(/[-_.]/g, ' ').replace(/ +/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };

  var headerClass = function headerClass(i) {
    return fields && fields[i]._classes && fields[i]._classes;
  };

  var isSortable = function isSortable(i) {
    return sorter && fields && fields[i].sorter !== false;
  };

  var headerStyles = function headerStyles(index) {
    var style = {
      verticalAlign: 'middle',
      overflow: 'hidden'
    };

    if (isSortable(index)) {
      style.cursor = 'pointer';
    }

    if (fields && fields[index] && fields[index]._style) {
      return _extends(_extends({}, style), fields[index]._style);
    }

    return style;
  };

  var getIconState = function getIconState(index) {
    var direction = sorterState.asc ? 'asc' : 'desc';
    return rawColumnNames[index] === sorterState.column ? direction : 0;
  };

  var iconClasses = function iconClasses(index) {
    var state = getIconState(index);
    return ['position-absolute', _CDataTableModule["default"]['icon-transition'], _CDataTableModule["default"]['arrow-position'], !state && _CDataTableModule["default"]['transparent'], state === 'desc' && _CDataTableModule["default"]['rotate-icon']];
  };

  var rowClicked = function rowClicked(item, index, e, detailsClick) {
    if (detailsClick === void 0) {
      detailsClick = false;
    }

    onRowClick && onRowClick(item, index, getClickedColumnName(e, detailsClick), e);
  };

  var changeSort = function changeSort(column, index) {
    if (!isSortable(index)) {
      return;
    } //if column changed or sort was descending change asc to true


    var state = sorterState;
    var columnRepeated = state.column === column;

    if (!sorter || !sorter.resetable) {
      state.column = column;
    } else {
      state.column = columnRepeated && state.asc === false ? null : column;
    }

    state.asc = !(columnRepeated && state.asc);
    setSorterState(_extends({}, state));
    onSorterValueChange && onSorterValueChange(sorterState);
  };

  var paginationChange = function paginationChange(e) {
    onPaginationChange && onPaginationChange(Number(e.target.value));
    !itemsPerPageSelect.external && setPerPageItems(Number(e.target.value));
  };

  var columnFilterEvent = function columnFilterEvent(colName, value, type) {
    var _extends2;

    var isLazy = columnFilter && columnFilter.lazy === true;

    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return;
    }

    var newState = _extends(_extends({}, columnFilterState), {}, (_extends2 = {}, _extends2["" + colName] = value, _extends2));

    setColumnFilterState(newState);
    onColumnFilterChange && onColumnFilterChange(newState);
  };

  var tableFilterChange = function tableFilterChange(value, type) {
    var isLazy = tableFilter && tableFilter.lazy === true;

    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return;
    }

    setTableFilterState(value);
    onTableFilterChange && onTableFilterChange(value);
  };

  var getClickedColumnName = function getClickedColumnName(e, detailsClick) {
    if (detailsClick) {
      return 'details';
    } else {
      var children = Array.from(e.target.closest('tr').children);
      var clickedCell = children.filter(function (child) {
        return child.contains(e.target);
      })[0];
      return rawColumnNames[children.indexOf(clickedCell)];
    }
  }; // computed


  var generatedColumnNames = function () {
    return Object.keys(passedItems[0] || {}).filter(function (el) {
      return el.charAt(0) !== '_';
    });
  }();

  var rawColumnNames = function () {
    if (fields) {
      return fields.map(function (el) {
        return el.key || el;
      });
    }

    return generatedColumnNames;
  }();

  (0, _react.useMemo)(function () {
    compData.columnFiltered++;
  }, [JSON.stringify(columnFilter), JSON.stringify(columnFilterState), rawColumnNames.join(''), compData.changeItems]);
  var columnFiltered = (0, _react.useMemo)(function () {
    var items = passedItems;

    if (columnFilter && columnFilter.external) {
      return items;
    }

    Object.entries(columnFilterState).forEach(function (_ref) {
      var key = _ref[0],
          value = _ref[1];
      var columnFilter = String(value).toLowerCase();

      if (columnFilter && rawColumnNames.includes(key)) {
        items = items.filter(function (item) {
          return String(item[key]).toLowerCase().includes(columnFilter);
        });
      }
    });
    return items;
  }, [compData.columnFiltered]);
  var tableFiltered = (0, _react.useMemo)(function () {
    var items = columnFiltered;

    if (!tableFilterState || tableFilter && tableFilter.external) {
      return items;
    }

    var filter = tableFilterState.toLowerCase();

    var hasFilter = function hasFilter(item) {
      return String(item).toLowerCase().includes(filter);
    };

    items = items.filter(function (item) {
      return rawColumnNames.filter(function (key) {
        return hasFilter(item[key]);
      }).length;
    });
    return items;
  }, [compData.columnFiltered, tableFilterState, JSON.stringify(tableFilter)]);
  var sortedItems = (0, _react.useMemo)(function () {
    var col = sorterState.column;

    if (!col || !rawColumnNames.includes(col) || sorter.external) {
      onFilteredItemsChange && onFilteredItemsChange(tableFiltered);
      return tableFiltered;
    } //if values in column are to be sorted by numeric value they all have to be type number


    var flip = sorterState.asc ? 1 : -1;
    var sorted = tableFiltered.slice().sort(function (item, item2) {
      var value = item[col];
      var value2 = item2[col];
      var a = typeof value === 'number' ? value : String(value).toLowerCase();
      var b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase();
      return a > b ? 1 * flip : b > a ? -1 * flip : 0;
    });
    !compData.firstRun && onFilteredItemsChange && onFilteredItemsChange(tableFiltered);
    return sorted;
  }, [JSON.stringify(tableFiltered), JSON.stringify(sorterState), JSON.stringify(sorter)]);
  var tableClasses = ['table', (_ref2 = {}, _ref2["table-" + size] = size, _ref2['table-dark'] = dark, _ref2['table-striped'] = striped, _ref2['table-hover'] = hover, _ref2['table-bordered'] = border, _ref2['border'] = outlined, _ref2), addTableClasses];
  var columnNames = (0, _react.useMemo)(function () {
    if (fields) {
      return fields.map(function (f) {
        return f.label !== undefined ? f.label : pretifyName(f.key || f);
      });
    }

    return rawColumnNames.map(function (el) {
      return pretifyName(el);
    });
  }, [fields, rawColumnNames]);
  var sortingIconStyles = sorter && 'position-relative pr-4';
  var colspan = rawColumnNames.length;
  var totalPages = Math.ceil(sortedItems.length / perPageItems) || 1;
  (0, _react.useMemo)(function () {
    !compData.firstRun && onPagesChange && onPagesChange(totalPages);
  }, [totalPages]);
  var computedPage = (0, _react.useMemo)(function () {
    var compPage = pagination ? page : activePage;
    !compData.firstRun && onPageChange && onPageChange(compPage);
    return compPage;
  }, [page, activePage, pagination]);
  var firstItemIndex = (computedPage - 1) * perPageItems || 0;
  var paginatedItems = sortedItems.slice(firstItemIndex, firstItemIndex + perPageItems);
  var currentItems = computedPage ? paginatedItems : sortedItems;
  var tableFilterData = {
    label: tableFilter && tableFilter.label || 'Filter:',
    placeholder: tableFilter && tableFilter.placeholder || 'type string...'
  };
  var paginationSelect = {
    label: itemsPerPageSelect && itemsPerPageSelect.label || 'Items per page:',
    values: itemsPerPageSelect && itemsPerPageSelect.values || [5, 10, 20, 50]
  };

  var noItemsText = function () {
    var customValues = noItemsView || {};

    if (passedItems.length) {
      return customValues.noResults || 'No filtering results';
    }

    return customValues.noItems || 'No items';
  }(); // watch


  (0, _react.useMemo)(function () {
    return setPerPageItems(itemsPerPage);
  }, [itemsPerPage]);
  (0, _react.useMemo)(function () {
    return setSorterState(_extends({}, sorterValue));
  }, [sorterValue]);
  (0, _react.useMemo)(function () {
    return setTableFilterState(tableFilterValue);
  }, [tableFilterValue]);
  (0, _react.useMemo)(function () {
    return setColumnFilterState(_extends({}, columnFilterValue));
  }, [columnFilterValue]); //items

  (0, _react.useMemo)(function () {
    if (items && !compData.firstRun && (items.length !== passedItems.length || JSON.stringify(items) !== JSON.stringify(passedItems))) {
      setPassedItems(items);
      compData.changeItems++;
    }
  }); // render

  compData.firstRun = false;
  var paginationProps = typeof pagination === 'object' ? pagination : null;

  var headerContent = /*#__PURE__*/_react["default"].createElement("tr", null, columnNames.map(function (name, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      onClick: function onClick() {
        changeSort(rawColumnNames[index], index);
      },
      className: (0, _classnames["default"])([headerClass(index), sortingIconStyles]),
      style: headerStyles(index),
      key: index
    }, columnHeaderSlot["" + rawColumnNames[index]] || /*#__PURE__*/_react["default"].createElement("div", {
      className: "d-inline"
    }, name), isSortable(index) && (sortingIconSlot && sortingIconSlot(getIconState(index), iconClasses(index)) || /*#__PURE__*/_react["default"].createElement(_iconsReact["default"], {
      customClasses: (0, _classnames["default"])(iconClasses(index)),
      width: 18,
      content:["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"]
    })));
  }));

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: innerRef
  }, (itemsPerPageSelect || tableFilter) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "row my-2 mx-0"
  }, tableFilter && /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-6 form-inline p-0"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "mr-2"
  }, tableFilterData.label), /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    type: "text",
    placeholder: tableFilterData.placeholder,
    onInput: function onInput(e) {
      tableFilterChange(e.target.value, 'input');
    },
    onChange: function onChange(e) {
      tableFilterChange(e.target.value, 'change');
    },
    value: tableFilterState || ''
  })), itemsPerPageSelect && /*#__PURE__*/_react["default"].createElement("div", {
    className: 'col-sm-6 p-0' + (!tableFilter && 'offset-sm-6')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-inline justify-content-sm-end"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "mr-2"
  }, paginationSelect.label), /*#__PURE__*/_react["default"].createElement("select", {
    className: "form-control",
    onChange: paginationChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, perPageItems), paginationSelect.values.map(function (number, key) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      val: number,
      key: key
    }, number);
  })))))), overTableSlot, /*#__PURE__*/_react["default"].createElement("div", {
    className: "position-relative " + (responsive && 'table-responsive')
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: (0, _classnames["default"])(tableClasses)
  }, /*#__PURE__*/_react["default"].createElement("thead", null, theadTopSlot, header && headerContent, columnFilter && /*#__PURE__*/_react["default"].createElement("tr", {
    className: "table-sm"
  }, rawColumnNames.map(function (colName, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      className: (0, _classnames["default"])(headerClass(index)),
      key: index
    }, columnFilterSlot["" + rawColumnNames[index]] || fields && fields[index].filter !== false && /*#__PURE__*/_react["default"].createElement("input", {
      className: "form-control form-control-sm",
      onInput: function onInput(e) {
        columnFilterEvent(colName, e.target.value, 'input');
      },
      onChange: function onChange(e) {
        columnFilterEvent(colName, e.target.value, 'change');
      },
      value: columnFilterState[colName] || ''
    }));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", {
    style: clickableRows && {
      cursor: 'pointer'
    }
  }, currentItems.map(function (item, itemIndex) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: itemIndex
    }, /*#__PURE__*/_react["default"].createElement("tr", {
      className: (0, _classnames["default"])(item._classes),
      tabIndex: clickableRows && 0,
      onClick: function onClick(e) {
        rowClicked(item, itemIndex + firstItemIndex, e);
      }
    }, rawColumnNames.map(function (colName, index) {
      return scopedSlots[colName] && _react["default"].cloneElement(scopedSlots[colName](item, itemIndex + firstItemIndex), {
        'key': index
      }) || /*#__PURE__*/_react["default"].createElement("td", {
        className: (0, _classnames["default"])(cellClass(item, colName, index)),
        key: index
      }, String(item[colName]));
    })), scopedSlots.details && /*#__PURE__*/_react["default"].createElement("tr", {
      onClick: function onClick(e) {
        rowClicked(item, itemIndex + firstItemIndex, e, true);
      },
      className: "p-0",
      style: {
        border: 'none !important'
      },
      key: 'details' + itemIndex
    }, /*#__PURE__*/_react["default"].createElement("td", {
      colSpan: colspan,
      className: "p-0",
      style: {
        border: 'none !important'
      }
    }, scopedSlots.details(item, itemIndex + firstItemIndex))));
  }), !currentItems.length && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: colspan
  }, noItemsViewSlot || /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center my-5"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, noItemsText, /*#__PURE__*/_react["default"].createElement(_iconsReact["default"], {
    width: "30",
    name: "cilBan",
    content:  ["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M425.706,86.294A240,240,0,0,0,86.294,425.705,240,240,0,0,0,425.706,86.294ZM256,48A207.1,207.1,0,0,1,391.528,98.345L98.345,391.528A207.1,207.1,0,0,1,48,256C48,141.309,141.309,48,256,48Zm0,416a207.084,207.084,0,0,1-134.986-49.887l293.1-293.1A207.084,207.084,0,0,1,464,256C464,370.691,370.691,464,256,464Z' class='ci-primary'/>"],
    className: "text-danger mb-2"
  })))))), footer && currentItems.length > 0 && /*#__PURE__*/_react["default"].createElement("tfoot", null, headerContent), captionSlot), loading && (loadingSlot || /*#__PURE__*/_react["default"].createElement(_CElementCover["default"], {
    boundaries: [{
      sides: ['top'],
      query: 'td'
    }, {
      sides: ['bottom'],
      query: 'tbody'
    }]
  }))), underTableSlot, pagination && /*#__PURE__*/_react["default"].createElement(_CPagination["default"], _extends({}, paginationProps, {
    style: {
      display: totalPages > 0 ? 'inline' : 'none'
    },
    onActivePageChange: function onActivePageChange(page) {
      setPage(page);
    },
    pages: totalPages,
    activePage: page
  })));
};

CDataTable.propTypes = process.env.NODE_ENV !== "production" ? {
  //
  innerRef: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func, _propTypes["default"].string]),
  overTableSlot: _propTypes["default"].node,
  columnHeaderSlot: _propTypes["default"].object,
  sortingIconSlot: _propTypes["default"].func,
  columnFilterSlot: _propTypes["default"].object,
  noItemsViewSlot: _propTypes["default"].node,
  noItemsView: _propTypes["default"].object,
  captionSlot: _propTypes["default"].node,
  underTableSlot: _propTypes["default"].node,
  scopedSlots: _propTypes["default"].object,
  theadTopSlot: _propTypes["default"].node,
  loadingSlot: _propTypes["default"].node,
  loading: _propTypes["default"].bool,
  fields: _propTypes["default"].array,
  pagination: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
  activePage: _propTypes["default"].number,
  itemsPerPage: _propTypes["default"].number,
  items: _propTypes["default"].array,
  sorter: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
  clickableRows: _propTypes["default"].bool,
  columnFilter: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
  tableFilterValue: _propTypes["default"].string,
  tableFilter: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
  addTableClasses: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array, _propTypes["default"].object]),
  size: _propTypes["default"].string,
  dark: _propTypes["default"].bool,
  striped: _propTypes["default"].bool,
  hover: _propTypes["default"].bool,
  border: _propTypes["default"].bool,
  outlined: _propTypes["default"].bool,
  responsive: _propTypes["default"].bool,
  footer: _propTypes["default"].bool,
  itemsPerPageSelect: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
  sorterValue: _propTypes["default"].object,
  columnFilterValue: _propTypes["default"].object,
  header: _propTypes["default"].bool,
  onRowClick: _propTypes["default"].func,
  onSorterValueChange: _propTypes["default"].func,
  onPaginationChange: _propTypes["default"].func,
  onColumnFilterChange: _propTypes["default"].func,
  onPagesChange: _propTypes["default"].func,
  onTableFilterChange: _propTypes["default"].func,
  onPageChange: _propTypes["default"].func,
  onFilteredItemsChange: _propTypes["default"].func
} : {};
CDataTable.defaultProps = {
  itemsPerPage: 10,
  responsive: true,
  columnHeaderSlot: {},
  columnFilterSlot: {},
  scopedSlots: {},
  sorterValue: {},
  header: true
};
var _default = CDataTable;
exports["default"] = _default;
module.exports = exports.default;
   