/**
 * Bundle of @devexpress/dx-react-scheduler-material-ui
 * Generated: 2024-06-03
 * Version: 4.0.5
 * License: https://js.devexpress.com/Licensing
 */

import React__default, { createElement, memo, useRef, useState, useEffect, useCallback, Fragment, forwardRef, PureComponent, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Scheduler as Scheduler$1, DayView as DayView$1, WeekView as WeekView$1, MonthView as MonthView$1, Appointments as Appointments$1, Toolbar as Toolbar$3, DateNavigator as DateNavigator$1, AppointmentTooltip as AppointmentTooltip$1, ViewSwitcher as ViewSwitcher$1, AllDayPanel as AllDayPanel$1, AppointmentForm as AppointmentForm$1, DragDropProvider as DragDropProvider$1, TodayButton as TodayButton$2, EditRecurrenceMenu as EditRecurrenceMenu$1, ConfirmationDialog as ConfirmationDialog$1, CurrentTimeIndicator as CurrentTimeIndicator$1, Resources as Resources$1, GroupingPanel as GroupingPanel$1 } from '@devexpress/dx-react-scheduler';
import { styled, colors, lighten, alpha, darken, TableRow, Table as Table$2, TableBody, TableCell, Toolbar as Toolbar$2, Popover, Button as Button$1, IconButton, TableHead, Typography, Grid, Select as Select$1, OutlinedInput, MenuItem, TextField, Drawer, FormControlLabel, Checkbox, RadioGroup as RadioGroup$1, Radio, ButtonGroup, Chip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { AUTO_HEIGHT, VIEW_TYPES, HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION, getGroupsLastRow, getLabelsForAllGroups, HOUR_MINUTE_OPTIONS, prepareVerticalViewCellsData, getDayScaleCells, WEEK_DAY_OPTIONS, DAY_OPTIONS, DAY_SHORT_MONTH_OPTIONS, HORIZONTAL_TYPE, VERTICAL_TYPE, POSITION_START, POSITION_END, areDatesSame, navigateByOneMonth, MONTH_YEAR_OPTIONS, viewBoundText, WEEKDAY_INTERVAL, OPEN_COMMAND_BUTTON, CLOSE_COMMAND_BUTTON, DELETE_COMMAND_BUTTON, ORDINARY_TEXT_EDITOR, TITLE_TEXT_EDITOR, NUMBER_EDITOR, MULTILINE_TEXT_EDITOR, handleChangeFrequency, REPEAT_TYPES, TITLE, CANCEL_BUTTON, DELETE_BUTTON, SAVE_BUTTON, ORDINARY_LABEL, STANDARD_SELECT, getRecurrenceOptions, checkIsNaturalNumber, changeRecurrenceOptions, MONTHLY_RADIO_GROUP, YEARLY_RADIO_GROUP, getFrequencyString, getAvailableRecurrenceOptions, OUTLINED_SELECT, END_REPEAT_RADIO_GROUP, RRULE_REPEAT_TYPES, isDateValid, handleStartDateChange, getRadioGroupDisplayData, handleToDayOfWeekChange, getWeekNumberLabels, getDaysOfWeek, getMonths, getMonthsWithOf, getDaysOfWeekArray, getDaysOfWeekDates, handleWeekDaysChange, getCellKey, getRowFromGroups, getVerticalRowFromGroups } from '@devexpress/dx-scheduler-core';
import classNames from 'clsx';
import { withComponents } from '@devexpress/dx-react-core';
import Repeat from '@mui/icons-material/esm/Repeat.js';
import CalendarToday from '@mui/icons-material/esm/CalendarToday.js';
import ChevronLeft from '@mui/icons-material/esm/ChevronLeft.js';
import ChevronRight from '@mui/icons-material/esm/ChevronRight.js';
import AccessTime from '@mui/icons-material/esm/AccessTime.js';
import Lens from '@mui/icons-material/esm/Lens.js';
import EditIcon from '@mui/icons-material/esm/Edit.js';
import CloseIcon from '@mui/icons-material/esm/Close.js';
import DeleteIcon from '@mui/icons-material/esm/Delete.js';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment/index.js';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker/index.js';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/index.js';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded = ["children", "className"];
var PREFIX = 'Container';
var classes = {
  container: "".concat(PREFIX, "-container")
};
var ContainerBase = function ContainerBase(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/createElement("div", _extends({
    className: classNames(classes.container, className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? ContainerBase.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
} : void 0;
ContainerBase.defaultProps = {
  className: undefined
};

var _excluded$1 = ["height", "style"];
var StyledContainerBase = styled(ContainerBase)(_defineProperty({}, "&.".concat(classes.container), {
  WebkitOverflowScrolling: 'touch',
  // NOTE: fix sticky positioning in Safari
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column'
}));
var Root = function Root(_ref) {
  var height = _ref.height,
      style = _ref.style,
      restProps = _objectWithoutProperties(_ref, _excluded$1);

  var containerStyle = height === AUTO_HEIGHT ? {
    height: '100%'
  } : {
    height: "".concat(height, "px")
  };
  return /*#__PURE__*/createElement(StyledContainerBase, _extends({
    style: _objectSpread2(_objectSpread2({}, containerStyle), style)
  }, restProps));
};
process.env.NODE_ENV !== "production" ? Root.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object
} : void 0;
Root.defaultProps = {
  style: null
};

var _excluded$2 = ["children"];
var Scheduler = function Scheduler(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/createElement(Scheduler$1, _extends({
    rootComponent: Root
  }, restProps), children);
};
Scheduler.Root = Root;
process.env.NODE_ENV !== "production" ? Scheduler.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var _SPACING_CELL_HEIGHT, _BASIC_CELL_HEIGHT;
var red = colors.red,
    pink = colors.pink,
    purple = colors.purple,
    deepPurple = colors.deepPurple,
    indigo = colors.indigo,
    blue = colors.blue,
    lightBlue = colors.lightBlue,
    cyan = colors.cyan,
    teal = colors.teal,
    green = colors.green,
    lightGreen = colors.lightGreen,
    lime = colors.lime,
    yellow = colors.yellow,
    amber = colors.amber,
    orange = colors.orange,
    deepOrange = colors.deepOrange;
var PRIMARY_COLOR = blue;
var TRANSITIONS_TIME = 400;
var DEFAULT_PALETTE = [red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange];
var XS_CELL_WIDTH = 50;
var SMALL_CELL_WIDTH = 65;
var CELL_WIDTH = 100;
var XS_LAYOUT_WIDTH = 500;
var SMALL_LAYOUT_WIDTH = 700;
var SMALL_LAYOUT_MEDIA_QUERY = "@media (max-width: ".concat(XS_LAYOUT_WIDTH, "px)");
var LAYOUT_MEDIA_QUERY = "@media (max-width: ".concat(SMALL_LAYOUT_WIDTH, "px)");
var GROUPING_PANEL_VERTICAL_CELL_WIDTH = 12.5;
var DEFAULT_SPACING = 8;
var SPACING_CELL_HEIGHT = (_SPACING_CELL_HEIGHT = {}, _defineProperty(_SPACING_CELL_HEIGHT, VIEW_TYPES.MONTH, 12.5), _defineProperty(_SPACING_CELL_HEIGHT, VIEW_TYPES.WEEK, 6), _defineProperty(_SPACING_CELL_HEIGHT, VIEW_TYPES.DAY, 6), _defineProperty(_SPACING_CELL_HEIGHT, VIEW_TYPES.ALL_DAY_PANEL, 5.75), _SPACING_CELL_HEIGHT);
var BASIC_CELL_HEIGHT = (_BASIC_CELL_HEIGHT = {}, _defineProperty(_BASIC_CELL_HEIGHT, VIEW_TYPES.MONTH, SPACING_CELL_HEIGHT[VIEW_TYPES.MONTH] * DEFAULT_SPACING), _defineProperty(_BASIC_CELL_HEIGHT, VIEW_TYPES.WEEK, SPACING_CELL_HEIGHT[VIEW_TYPES.WEEK] * DEFAULT_SPACING), _defineProperty(_BASIC_CELL_HEIGHT, VIEW_TYPES.DAY, SPACING_CELL_HEIGHT[VIEW_TYPES.DAY] * DEFAULT_SPACING), _defineProperty(_BASIC_CELL_HEIGHT, VIEW_TYPES.ALL_DAY_PANEL, SPACING_CELL_HEIGHT[VIEW_TYPES.ALL_DAY_PANEL] * DEFAULT_SPACING), _BASIC_CELL_HEIGHT);
var SPACING_LABEL_HEIGHT = SPACING_CELL_HEIGHT[VIEW_TYPES.WEEK];
var LEFT_PANEL_WIDTH_SPACING = 10;

var getBorder = function getBorder(theme) {
  return "1px solid ".concat(theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68));
};
var getBrightBorder = function getBrightBorder(theme) {
  return "1px solid ".concat(theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.72) : darken(alpha(theme.palette.divider, 1), 0.5));
};
var cellsMeta = function cellsMeta(tableElement) {
  var cellElements = Array.from(tableElement.querySelectorAll('td'));
  return {
    parentRect: function parentRect() {
      return tableElement.getBoundingClientRect();
    },
    getCellRects: cellElements.map(function (element) {
      return function () {
        return element.getBoundingClientRect();
      };
    })
  };
};
var scrollingStrategy = function scrollingStrategy(scrollablePart, fixedPartVertical, fixedPartHorizontal) {
  var fixedPartVerticalRect = fixedPartVertical.getBoundingClientRect();
  var fixedPartHorizontalRect = fixedPartHorizontal && fixedPartHorizontal.getBoundingClientRect();

  var changeVerticalScroll = function changeVerticalScroll(value) {
    // eslint-disable-next-line no-param-reassign
    scrollablePart.scrollTop += value;
  };

  var changeHorizontalScroll = function changeHorizontalScroll(value) {
    // eslint-disable-next-line no-param-reassign
    scrollablePart.scrollLeft += value;
  };

  return {
    topBoundary: fixedPartVerticalRect.height + fixedPartVerticalRect.top,
    bottomBoundary: scrollablePart.offsetTop + scrollablePart.clientHeight,
    fixedTopHeight: fixedPartVerticalRect.height,
    leftBoundary: fixedPartHorizontalRect ? fixedPartHorizontalRect.width + fixedPartHorizontalRect.left : scrollablePart.offsetLeft,
    rightBoundary: scrollablePart.offsetLeft + scrollablePart.clientWidth,
    fixedLeftWidth: fixedPartHorizontalRect === null || fixedPartHorizontalRect === void 0 ? void 0 : fixedPartHorizontalRect.width,
    changeVerticalScroll: changeVerticalScroll,
    changeHorizontalScroll: changeHorizontalScroll
  };
};
var ensureColor = function ensureColor(level, color) {
  return color[level] || PRIMARY_COLOR[level];
};
var getResourceColor = function getResourceColor(resources) {
  if (resources && resources.length) {
    var _resources$find;

    return (_resources$find = resources.find(function (resource) {
      return resource.isMain;
    })) === null || _resources$find === void 0 ? void 0 : _resources$find.color;
  }

  return undefined;
};
var getAppointmentColor = function getAppointmentColor(level, color, defaultColor) {
  if (!color) return ensureColor(level, defaultColor);
  if (typeof color === 'string') return color;
  return ensureColor(level, color);
};
var getWidthInPixels = function getWidthInPixels(cellsNumber, cellWidth) {
  return "".concat(cellsNumber * cellWidth, "px");
};
var getViewCellKey = function getViewCellKey(startDate, groups) {
  if (!groups) return startDate.toString();
  return groups.reduce(function (acc, group) {
    return acc.concat(group.id);
  }, startDate.toString());
};
var addCommaAndSpaceToString = function addCommaAndSpaceToString(string) {
  return string && "".concat(string, ",\xA0");
};
var getEmptyCellWidth = function getEmptyCellWidth(theme, width, calculatedWidth) {
  return width ? "".concat(width, "px") : "calc(".concat(theme.spacing(calculatedWidth), " + 1px)");
};

var _excluded$3 = ["timeScaleComponent", "dayScaleComponent", "timeTableComponent", "dayScaleEmptyCellComponent", "groupingPanelComponent", "groupingPanelSize", "setScrollingStrategy", "className", "forwardedRef"];
var PREFIX$1 = 'MainLayout';
var classes$1 = {
  container: "".concat(PREFIX$1, "-container"),
  stickyElement: "".concat(PREFIX$1, "-stickyElement"),
  header: "".concat(PREFIX$1, "-header"),
  leftPanel: "".concat(PREFIX$1, "-leftPanel"),
  ordinaryLeftPanelBorder: "".concat(PREFIX$1, "-ordinaryLeftPanelBorder"),
  brightLeftPanelBorder: "".concat(PREFIX$1, "-brightLeftPanelBorder"),
  ordinaryHeaderBorder: "".concat(PREFIX$1, "-ordinaryHeaderBorder"),
  brightHeaderBorder: "".concat(PREFIX$1, "-brightHeaderBorder"),
  dayScaleEmptyCell: "".concat(PREFIX$1, "-dayScaleEmptyCell"),
  flexRow: "".concat(PREFIX$1, "-flexRow"),
  relativeContainer: "".concat(PREFIX$1, "-relativeContainer"),
  inlineFlex: "".concat(PREFIX$1, "-inlineFlex"),
  background: "".concat(PREFIX$1, "-background")
};
var StyledDiv = styled('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'leftPanelWidth' && prop !== 'calculatedLeftPanelWidth';
  }
})(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      leftPanelWidth = _ref.leftPanelWidth,
      calculatedLeftPanelWidth = _ref.calculatedLeftPanelWidth;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$1.container), {
    overflowY: 'auto',
    position: 'relative',
    tableLayout: 'fixed'
  }), _defineProperty(_ref2, "& .".concat(classes$1.stickyElement), {
    tableLayout: 'fixed',
    position: 'sticky',
    overflow: 'visible',
    background: theme.palette.background.paper
  }), _defineProperty(_ref2, "& .".concat(classes$1.header), {
    top: 0,
    zIndex: 2
  }), _defineProperty(_ref2, "& .".concat(classes$1.leftPanel), {
    left: 0,
    zIndex: 1,
    boxSizing: 'border-box'
  }), _defineProperty(_ref2, "& .".concat(classes$1.ordinaryLeftPanelBorder), {
    borderRight: getBorder(theme)
  }), _defineProperty(_ref2, "& .".concat(classes$1.brightLeftPanelBorder), {
    borderRight: getBrightBorder(theme)
  }), _defineProperty(_ref2, "& .".concat(classes$1.ordinaryHeaderBorder), {
    borderBottom: getBorder(theme)
  }), _defineProperty(_ref2, "& .".concat(classes$1.brightHeaderBorder), {
    borderBottom: getBrightBorder(theme)
  }), _defineProperty(_ref2, "& .".concat(classes$1.dayScaleEmptyCell), {
    display: 'flex',
    alignItems: 'flex-end',
    width: getEmptyCellWidth(theme, leftPanelWidth, calculatedLeftPanelWidth),
    minWidth: getEmptyCellWidth(theme, leftPanelWidth, calculatedLeftPanelWidth)
  }), _defineProperty(_ref2, "& .".concat(classes$1.flexRow), {
    display: 'flex',
    flexDirection: 'row'
  }), _defineProperty(_ref2, "& .".concat(classes$1.relativeContainer), {
    position: 'relative'
  }), _defineProperty(_ref2, "& .".concat(classes$1.inlineFlex), {
    display: 'inline-flex'
  }), _defineProperty(_ref2, "& .".concat(classes$1.background), {
    background: theme.palette.background.paper
  }), _ref2;
});
var MainLayout = /*#__PURE__*/memo(function (_ref3) {
  var _classNames, _classNames2, _classNames3;

  var TimeScale = _ref3.timeScaleComponent,
      DayScale = _ref3.dayScaleComponent,
      TimeTable = _ref3.timeTableComponent,
      DayScaleEmptyCell = _ref3.dayScaleEmptyCellComponent,
      GroupingPanel = _ref3.groupingPanelComponent,
      groupingPanelSize = _ref3.groupingPanelSize,
      setScrollingStrategy = _ref3.setScrollingStrategy,
      className = _ref3.className,
      forwardedRef = _ref3.forwardedRef,
      restProps = _objectWithoutProperties(_ref3, _excluded$3);

  var layoutRef = useRef(null);
  var layoutHeaderRef = useRef(null);
  var leftPanelRef = useRef(null);

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isLeftBorderSet = _React$useState2[0],
      setIsLeftBorderSet = _React$useState2[1];

  var _React$useState3 = useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isTopBorderSet = _React$useState4[0],
      setIsTopBorderSet = _React$useState4[1];

  var _React$useState5 = useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      leftPanelWidth = _React$useState6[0],
      setLeftPanelWidth = _React$useState6[1];

  useEffect(function () {
    var leftPanel = leftPanelRef.current;
    setScrollingStrategy(scrollingStrategy(layoutRef.current, layoutHeaderRef.current, leftPanel)); // eslint-disable-next-line no-unused-expressions

    leftPanel && setLeftPanelWidth(leftPanel.getBoundingClientRect().width);
  }, [layoutRef, layoutHeaderRef, leftPanelRef, setScrollingStrategy, setLeftPanelWidth]);
  var renderTimeScale = !!TimeScale;
  var renderLeftPanel = renderTimeScale || !!groupingPanelSize;
  var calculatedGroupPanelWidth = groupingPanelSize ? groupingPanelSize * GROUPING_PANEL_VERTICAL_CELL_WIDTH : 0;
  var calculatedLeftPanelWidth = LEFT_PANEL_WIDTH_SPACING + calculatedGroupPanelWidth;
  var setBorders = useCallback(function (event) {
    // eslint-disable-next-line no-bitwise
    if (!!event.target.scrollLeft ^ isLeftBorderSet) {
      setIsLeftBorderSet(!isLeftBorderSet);
    } // eslint-disable-next-line no-bitwise


    if (!!event.target.scrollTop ^ isTopBorderSet) {
      setIsTopBorderSet(!isTopBorderSet);
    }
  }, [isLeftBorderSet, isTopBorderSet]);
  return /*#__PURE__*/createElement(StyledDiv, _extends({
    leftPanelWidth: leftPanelWidth,
    calculatedLeftPanelWidth: calculatedLeftPanelWidth,
    ref: function ref(node) {
      layoutRef.current = node;

      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        // eslint-disable-next-line no-param-reassign
        forwardedRef.current = node;
      }
    },
    className: classNames(classes$1.container, className),
    onScroll: setBorders
  }, restProps), /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement("div", {
    ref: layoutHeaderRef,
    className: classNames(classes$1.stickyElement, classes$1.header, classes$1.flexRow)
  }, /*#__PURE__*/createElement("div", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$1.background, true), _defineProperty(_classNames, classes$1.inlineFlex, true), _defineProperty(_classNames, classes$1.ordinaryHeaderBorder, !isTopBorderSet), _defineProperty(_classNames, classes$1.brightHeaderBorder, isTopBorderSet), _classNames))
  }, renderLeftPanel && /*#__PURE__*/createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes$1.stickyElement, true), _defineProperty(_classNames2, classes$1.leftPanel, true), _defineProperty(_classNames2, classes$1.dayScaleEmptyCell, true), _defineProperty(_classNames2, classes$1.ordinaryLeftPanelBorder, !isLeftBorderSet), _defineProperty(_classNames2, classes$1.brightLeftPanelBorder, isLeftBorderSet), _classNames2))
  }, /*#__PURE__*/createElement(DayScaleEmptyCell, null)), /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(DayScale, null)))), /*#__PURE__*/createElement("div", {
    className: classes$1.flexRow
  }, /*#__PURE__*/createElement("div", {
    className: classes$1.inlineFlex
  }, renderLeftPanel && /*#__PURE__*/createElement("div", {
    ref: leftPanelRef,
    className: classNames((_classNames3 = {}, _defineProperty(_classNames3, classes$1.flexRow, true), _defineProperty(_classNames3, classes$1.stickyElement, true), _defineProperty(_classNames3, classes$1.leftPanel, true), _defineProperty(_classNames3, classes$1.ordinaryLeftPanelBorder, !isLeftBorderSet), _defineProperty(_classNames3, classes$1.brightLeftPanelBorder, isLeftBorderSet), _classNames3))
  }, /*#__PURE__*/createElement(GroupingPanel, null), renderTimeScale && /*#__PURE__*/createElement(TimeScale, null)), /*#__PURE__*/createElement("div", {
    className: classes$1.relativeContainer
  }, /*#__PURE__*/createElement(TimeTable, null))))));
});
process.env.NODE_ENV !== "production" ? MainLayout.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  timeScaleComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  dayScaleComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  timeTableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dayScaleEmptyCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  groupingPanelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  groupingPanelSize: PropTypes.number,
  setScrollingStrategy: PropTypes.func.isRequired,
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
} : void 0;
MainLayout.defaultProps = {
  groupingPanelComponent: function groupingPanelComponent() {
    return null;
  },
  timeScaleComponent: undefined,
  groupingPanelSize: 0,
  className: undefined,
  forwardedRef: undefined
};

var _excluded$4 = ["children"];
var Row = function Row(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/createElement(TableRow, restProps, children);
};
process.env.NODE_ENV !== "production" ? Row.propTypes = {
  children: PropTypes.node
} : void 0;
Row.defaultProps = {
  children: null
};

var _excluded$5 = ["className", "children"];
var PREFIX$2 = 'DayScaleEmptyCell';
var classes$2 = {
  emptyCell: "".concat(PREFIX$2, "-emptyCell")
};
var StyledDiv$1 = styled('div')(_defineProperty({}, "&.".concat(classes$2.emptyCell), {
  height: '100%',
  width: '100%'
}));
var DayScaleEmptyCell = function DayScaleEmptyCell(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/createElement(StyledDiv$1, _extends({}, restProps, {
    className: classNames(classes$2.emptyCell, className)
  }), children);
};
process.env.NODE_ENV !== "production" ? DayScaleEmptyCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
} : void 0;
DayScaleEmptyCell.defaultProps = {
  className: undefined,
  children: undefined
};

var Container = styled(ContainerBase)(_defineProperty({}, "&.".concat(classes.container), {
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0
}));

var _excluded$6 = ["cellComponent", "rowComponent", "cellsData", "groupOrientation", "className", "groupCount", "includeAllDayCell"];
var PREFIX$3 = 'TicksLayout';
var classes$3 = {
  table: "".concat(PREFIX$3, "-table")
};
var StyledTable = styled(Table$2)(_defineProperty({}, "&.".concat(classes$3.table), {
  tableLayout: 'fixed',
  boxSizing: 'border-box'
}));
var TicksLayout = function TicksLayout(_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      cellsData = _ref.cellsData,
      groupOrientation = _ref.groupOrientation,
      className = _ref.className,
      groupCount = _ref.groupCount,
      includeAllDayCell = _ref.includeAllDayCell,
      restProps = _objectWithoutProperties(_ref, _excluded$6);

  var groupHeight = cellsData.length / groupCount;
  return /*#__PURE__*/createElement(StyledTable, _extends({}, restProps, {
    className: classNames(classes$3.table, className)
  }), /*#__PURE__*/createElement(TableBody, null, cellsData.map(function (_ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 1),
        firstDay = _ref3[0];

    return /*#__PURE__*/createElement(Fragment, {
      key: index.toString()
    }, index % groupHeight === 0 && includeAllDayCell && /*#__PURE__*/createElement(Row, {
      key: (index / groupHeight).toString()
    }, /*#__PURE__*/createElement(Cell, {
      key: "all-day-tick ".concat(index / groupHeight),
      isAllDay: true,
      startDate: firstDay.startDate,
      endDate: firstDay.endDate,
      endOfGroup: false,
      groupingInfo: firstDay.groupingInfo
    })), /*#__PURE__*/createElement(Row, {
      key: (firstDay.startDate + index).toString()
    }, /*#__PURE__*/createElement(Cell, {
      key: index.toString(),
      startDate: firstDay.startDate,
      endDate: firstDay.endDate,
      endOfGroup: firstDay.endOfGroup && groupOrientation === VERTICAL_GROUP_ORIENTATION,
      groupingInfo: firstDay.groupingInfo
    })));
  })));
};
process.env.NODE_ENV !== "production" ? TicksLayout.propTypes = {
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  groupOrientation: PropTypes.oneOf([HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION]),
  groupCount: PropTypes.number,
  includeAllDayCell: PropTypes.bool,
  className: PropTypes.string
} : void 0;
TicksLayout.defaultProps = {
  className: undefined,
  groupOrientation: HORIZONTAL_GROUP_ORIENTATION,
  groupCount: 1,
  includeAllDayCell: false
};

var _excluded$7 = ["labelComponent", "rowComponent", "tickCellComponent", "allDayTitleComponent", "cellsData", "formatDate", "groupOrientation", "groups", "showAllDayTitle", "height", "className"];
var PREFIX$4 = 'Layout';
var classes$4 = {
  timeScaleContainer: "".concat(PREFIX$4, "-timeScaleContainer"),
  ticks: "".concat(PREFIX$4, "-ticks"),
  cell: "".concat(PREFIX$4, "-cell"),
  verticalCell: "".concat(PREFIX$4, "-verticalCell"),
  flexRow: "".concat(PREFIX$4, "-flexRow")
};
var StyledDiv$2 = styled('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'height' && prop !== 'defaultHeight';
  }
})(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      height = _ref.height,
      defaultHeight = _ref.defaultHeight;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$4.timeScaleContainer), {
    width: theme.spacing(LEFT_PANEL_WIDTH_SPACING - 1)
  }), _defineProperty(_ref2, "& .".concat(classes$4.ticks), {
    width: theme.spacing(1)
  }), _defineProperty(_ref2, "& .".concat(classes$4.cell), {
    boxSizing: 'border-box',
    padding: 0,
    borderBottom: 'none'
  }), _defineProperty(_ref2, "& .".concat(classes$4.verticalCell), {
    borderBottom: getBrightBorder(theme),
    'tr:last-child &': {
      borderBottom: 'none'
    },
    height: height ? "".concat(height, "px") : theme.spacing(defaultHeight)
  }), _defineProperty(_ref2, "&.".concat(classes$4.flexRow), {
    display: 'flex',
    flexDirection: 'row'
  }), _ref2;
});
var Layout = function Layout(_ref3) {
  var Label = _ref3.labelComponent,
      rowComponent = _ref3.rowComponent,
      tickCellComponent = _ref3.tickCellComponent,
      AllDayTitle = _ref3.allDayTitleComponent,
      cellsData = _ref3.cellsData,
      formatDate = _ref3.formatDate,
      groupOrientation = _ref3.groupOrientation,
      groups = _ref3.groups,
      showAllDayTitle = _ref3.showAllDayTitle,
      height = _ref3.height,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$7);

  var groupCount = getGroupsLastRow(groups).length;
  var cellsCount = cellsData.length / groupCount;
  var heightWithoutAllDayTitle = SPACING_CELL_HEIGHT[VIEW_TYPES.WEEK] * cellsCount;
  var defaultHeight = showAllDayTitle ? heightWithoutAllDayTitle + SPACING_CELL_HEIGHT[VIEW_TYPES.ALL_DAY_PANEL] : heightWithoutAllDayTitle;
  var calculatedHeight = height / groupCount;
  return /*#__PURE__*/createElement(StyledDiv$2, _extends({
    height: calculatedHeight,
    defaultHeight: defaultHeight,
    className: classNames(classes$4.flexRow, className)
  }, restProps), /*#__PURE__*/createElement(Table$2, {
    className: classes$4.timeScaleContainer
  }, /*#__PURE__*/createElement(TableBody, null, getLabelsForAllGroups(cellsData, groups, groupOrientation).map(function (groupedLabels, groupIndex) {
    var _classNames;

    var firstDataLabel = groupedLabels[0];
    var lastDataLabel = groupedLabels[groupedLabels.length - 1];
    return /*#__PURE__*/createElement(TableRow, {
      key: groupIndex.toString()
    }, /*#__PURE__*/createElement(TableCell, {
      className: classNames((_classNames = {}, _defineProperty(_classNames, classes$4.cell, true), _defineProperty(_classNames, classes$4.verticalCell, groupOrientation === VERTICAL_GROUP_ORIENTATION), _classNames))
    }, /*#__PURE__*/createElement(AllDayTitle, {
      fixedHeight: true
    }), /*#__PURE__*/createElement(Label, {
      key: firstDataLabel.startDate,
      groupingInfo: firstDataLabel.groupingInfo
    }), groupedLabels.map(function (label, index) {
      return index !== cellsData.length - 1 && /*#__PURE__*/createElement(Label, {
        time: label.endDate,
        formatDate: formatDate,
        key: label.key,
        groupingInfo: label.groupingInfo
      });
    }), /*#__PURE__*/createElement(Label, {
      key: lastDataLabel.endDate,
      groupingInfo: lastDataLabel.groupingInfo
    })));
  }))), /*#__PURE__*/createElement(TicksLayout, {
    rowComponent: rowComponent,
    cellComponent: tickCellComponent,
    cellsData: cellsData,
    className: classes$4.ticks,
    groupOrientation: groupOrientation,
    groupCount: groupCount,
    includeAllDayCell: showAllDayTitle
  }));
};
process.env.NODE_ENV !== "production" ? Layout.propTypes = {
  cellsData: PropTypes.arrayOf(Array).isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  allDayTitleComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  tickCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  formatDate: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  groupOrientation: PropTypes.oneOf([HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION]),
  showAllDayTitle: PropTypes.bool,
  height: PropTypes.number,
  className: PropTypes.string
} : void 0;
Layout.defaultProps = {
  groups: [[{}]],
  groupOrientation: HORIZONTAL_GROUP_ORIENTATION,
  allDayTitleComponent: function allDayTitleComponent() {
    return null;
  },
  showAllDayTitle: false,
  height: 0,
  className: undefined
};

var _excluded$8 = ["className", "time", "formatDate", "groupingInfo", "endOfGroup"];
var PREFIX$5 = 'Label';
var classes$5 = {
  label: "".concat(PREFIX$5, "-label"),
  text: "".concat(PREFIX$5, "-text"),
  emptyLabel: "".concat(PREFIX$5, "-emptyLabel")
};
var StyledDiv$3 = styled('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$5.label), {
    userSelect: 'none',
    border: 0,
    height: theme.spacing(SPACING_LABEL_HEIGHT),
    lineHeight: theme.spacing(SPACING_LABEL_HEIGHT),
    padding: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'right',
    paddingLeft: theme.spacing(0.25),
    paddingRight: theme.spacing(1)
  }), _defineProperty(_ref2, "& .".concat(classes$5.text), _objectSpread2(_objectSpread2({}, theme.typography.caption), {}, {
    fontSize: '0.7rem',
    whiteSpace: 'nowrap',
    color: theme.palette.text.secondary
  })), _defineProperty(_ref2, "&.".concat(classes$5.emptyLabel), {
    height: theme.spacing(SPACING_LABEL_HEIGHT / 2),
    '&:last-child': {
      height: "calc(".concat(theme.spacing(SPACING_LABEL_HEIGHT / 2), " - 1px)")
    }
  }), _ref2;
});
var Label = function Label(_ref3) {
  var _classNames;

  var className = _ref3.className,
      time = _ref3.time,
      formatDate = _ref3.formatDate,
      groupingInfo = _ref3.groupingInfo,
      endOfGroup = _ref3.endOfGroup,
      restProps = _objectWithoutProperties(_ref3, _excluded$8);

  return /*#__PURE__*/createElement(StyledDiv$3, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$5.label, true), _defineProperty(_classNames, classes$5.emptyLabel, !time), _classNames), className)
  }, restProps), time && /*#__PURE__*/createElement("span", {
    className: classes$5.text
  }, formatDate(time, HOUR_MINUTE_OPTIONS)));
};
process.env.NODE_ENV !== "production" ? Label.propTypes = {
  formatDate: PropTypes.func,
  time: PropTypes.instanceOf(Date),
  groupingInfo: PropTypes.arrayOf(PropTypes.object),
  endOfGroup: PropTypes.bool,
  className: PropTypes.string
} : void 0;
Label.defaultProps = {
  className: undefined,
  time: undefined,
  formatDate: function formatDate() {
    return undefined;
  },
  groupingInfo: undefined,
  endOfGroup: false
};

var _excluded$9 = ["className", "startDate", "endDate", "endOfGroup", "groupingInfo", "isAllDay"];
var PREFIX$6 = 'TickCell';
var classes$6 = {
  cell: "".concat(PREFIX$6, "-cell"),
  brightBottomBorder: "".concat(PREFIX$6, "-brightBottomBorder"),
  allDayCell: "".concat(PREFIX$6, "-allDayCell")
};
var StyledTableCell = styled(TableCell)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$6.cell), {
    height: theme.spacing(SPACING_CELL_HEIGHT[VIEW_TYPES.WEEK]),
    padding: 0,
    boxSizing: 'border-box',
    borderBottom: getBorder(theme),
    'tr:last-child &': {
      borderBottom: 'none'
    }
  }), _defineProperty(_ref2, "&.".concat(classes$6.brightBottomBorder), {
    borderBottom: getBrightBorder(theme)
  }), _defineProperty(_ref2, "&.".concat(classes$6.allDayCell), {
    height: theme.spacing(SPACING_CELL_HEIGHT[VIEW_TYPES.ALL_DAY_PANEL])
  }), _ref2;
});
var TickCell = function TickCell(_ref3) {
  var _classNames;

  var className = _ref3.className,
      startDate = _ref3.startDate,
      endDate = _ref3.endDate,
      endOfGroup = _ref3.endOfGroup,
      groupingInfo = _ref3.groupingInfo,
      isAllDay = _ref3.isAllDay,
      restProps = _objectWithoutProperties(_ref3, _excluded$9);

  return /*#__PURE__*/createElement(StyledTableCell, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$6.cell, true), _defineProperty(_classNames, classes$6.brightBottomBorder, endOfGroup), _defineProperty(_classNames, classes$6.allDayCell, isAllDay), _classNames), className)
  }, restProps));
};
process.env.NODE_ENV !== "production" ? TickCell.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  endOfGroup: PropTypes.bool,
  groupingInfo: PropTypes.arrayOf(PropTypes.object),
  isAllDay: PropTypes.bool,
  className: PropTypes.string
} : void 0;
TickCell.defaultProps = {
  className: undefined,
  startDate: undefined,
  endDate: undefined,
  endOfGroup: false,
  groupingInfo: undefined,
  isAllDay: false
};

var _excluded$a = ["className", "cellsNumber", "children"];
var PREFIX$7 = 'Table';
var classes$7 = {
  table: "".concat(PREFIX$7, "-table")
};
var StyledTableMUI = styled(Table$2, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'cellsNumber';
  }
})(function (_ref) {
  var _$concat;

  var cellsNumber = _ref.cellsNumber;
  return _defineProperty({}, "&.".concat(classes$7.table), (_$concat = {
    tableLayout: 'fixed',
    minWidth: getWidthInPixels(cellsNumber, CELL_WIDTH),
    width: '100%'
  }, _defineProperty(_$concat, "".concat(LAYOUT_MEDIA_QUERY), {
    minWidth: getWidthInPixels(cellsNumber, SMALL_CELL_WIDTH)
  }), _defineProperty(_$concat, "".concat(SMALL_LAYOUT_MEDIA_QUERY), {
    minWidth: getWidthInPixels(cellsNumber, XS_CELL_WIDTH)
  }), _$concat));
});
/* This component is a workaround to the bug when appointments flicker after being drag-dropped.
  It is used to define the minimum width of a parent layout depending on the number of cells.
  It's impossible to do it in the layout because appointments begin to flicker when using
  functional component instead of PureComponent (and to define the minimum width it is necessary
  to use material-ui's makeStyles).
*/

var Table = /*#__PURE__*/forwardRef(function (_ref3, ref) {
  var className = _ref3.className,
      cellsNumber = _ref3.cellsNumber,
      children = _ref3.children,
      restProps = _objectWithoutProperties(_ref3, _excluded$a);

  return /*#__PURE__*/createElement(StyledTableMUI, _extends({
    cellsNumber: cellsNumber,
    ref: ref,
    className: classNames(classes$7.table, className)
  }, restProps), /*#__PURE__*/createElement(TableBody, null, children));
});
Table.propTypes = {
  cellsNumber: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Table.defaultProps = {
  className: undefined
};

var _excluded$b = ["setCellElementsMeta", "cellsNumber", "children"];
var Layout$1 = /*#__PURE__*/memo(function (_ref) {
  var setCellElementsMeta = _ref.setCellElementsMeta,
      cellsNumber = _ref.cellsNumber,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$b);

  var tableRef = useRef(null);
  useEffect(function () {
    var tableElement = tableRef.current;
    setCellElementsMeta(cellsMeta(tableElement));
  });
  return /*#__PURE__*/createElement(Table, _extends({
    ref: tableRef,
    cellsNumber: cellsNumber
  }, restProps), children);
});
process.env.NODE_ENV !== "production" ? Layout$1.propTypes = {
  setCellElementsMeta: PropTypes.func.isRequired,
  cellsNumber: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
} : void 0;

var _excluded$c = ["setCellElementsMeta", "cellComponent", "allDayCellComponent", "rowComponent", "allDayRowComponent", "cellsData", "allDayCellsData", "formatDate"];

var renderCell = function renderCell(Cell, startDate, endDate, endOfGroup, groupingInfo, groupOrientation) {
  return /*#__PURE__*/createElement(Cell, {
    key: getViewCellKey(startDate, groupingInfo),
    startDate: startDate,
    endDate: endDate,
    endOfGroup: endOfGroup,
    hasRightBorder: endOfGroup,
    groupingInfo: groupingInfo,
    groupOrientation: groupOrientation
  });
};

var Layout$2 = /*#__PURE__*/memo(function (_ref) {
  var setCellElementsMeta = _ref.setCellElementsMeta,
      cellComponent = _ref.cellComponent,
      allDayCellComponent = _ref.allDayCellComponent,
      Row = _ref.rowComponent,
      AllDayRow = _ref.allDayRowComponent,
      cellsData = _ref.cellsData,
      allDayCellsData = _ref.allDayCellsData,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, _excluded$c);

  return /*#__PURE__*/createElement(Layout$1, _extends({
    setCellElementsMeta: setCellElementsMeta,
    cellsNumber: cellsData[0].length
  }, restProps), prepareVerticalViewCellsData(cellsData, allDayCellsData).map(function (group, groupIndex) {
    return /*#__PURE__*/createElement(Fragment, {
      key: groupIndex.toString()
    }, allDayCellsData && /*#__PURE__*/createElement(AllDayRow, null, allDayCellsData[groupIndex].map(function (_ref2) {
      var startDate = _ref2.startDate,
          endDate = _ref2.endDate,
          endOfGroup = _ref2.endOfGroup,
          groupingInfo = _ref2.groupingInfo,
          groupOrientation = _ref2.groupOrientation;
      return renderCell(allDayCellComponent, startDate, endDate, endOfGroup, groupingInfo, groupOrientation);
    })), group.map(function (days, index) {
      return /*#__PURE__*/createElement(Row, {
        key: index.toString()
      }, days.map(function (_ref3) {
        var startDate = _ref3.startDate,
            endDate = _ref3.endDate,
            groupingInfo = _ref3.groupingInfo,
            endOfGroup = _ref3.endOfGroup,
            groupOrientation = _ref3.groupOrientation;
        return renderCell(cellComponent, startDate, endDate, endOfGroup, groupingInfo, groupOrientation);
      }));
    }));
  }));
});
Layout$2.propTypes = {
  cellsData: PropTypes.arrayOf(Array).isRequired,
  allDayCellsData: PropTypes.arrayOf(Array),
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  allDayCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  allDayRowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  formatDate: PropTypes.func.isRequired,
  setCellElementsMeta: PropTypes.func.isRequired
};
Layout$2.defaultProps = {
  allDayCellComponent: function allDayCellComponent() {
    return null;
  },
  allDayRowComponent: function allDayRowComponent() {
    return null;
  },
  allDayCellsData: undefined
};

var _excluded$d = ["className", "children", "startDate", "endDate", "currentTimeIndicatorPosition", "currentTimeIndicatorComponent", "isShaded", "endOfGroup", "groupingInfo", "groupOrientation", "hasRightBorder"];
var PREFIX$8 = 'Cell';
var classes$8 = {
  cell: "".concat(PREFIX$8, "-cell"),
  shadedCell: "".concat(PREFIX$8, "-shadedCell"),
  shadedPart: "".concat(PREFIX$8, "-shadedPart"),
  brightRightBorder: "".concat(PREFIX$8, "-brightRightBorder"),
  brightBorderBottom: "".concat(PREFIX$8, "-brightBorderBottom")
};
var StyledTableCell$1 = styled(TableCell, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'shadedHeight';
  }
})(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      shadedHeight = _ref.shadedHeight;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$8.cell), {
    position: 'relative',
    height: theme.spacing(SPACING_CELL_HEIGHT[VIEW_TYPES.WEEK]),
    padding: 0,
    boxSizing: 'border-box',
    borderRight: getBorder(theme),
    '&:last-child': {
      borderRight: 'none',
      paddingRight: 0
    },
    'tr:last-child &': {
      borderBottom: 'none'
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      outline: 0
    }
  }), _defineProperty(_ref2, "&.".concat(classes$8.shadedCell), {
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: theme.palette.action.selected
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      outline: 0
    }
  }), _defineProperty(_ref2, "& .".concat(classes$8.shadedPart), {
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    position: 'absolute',
    height: shadedHeight,
    width: '100%',
    left: 0,
    top: 0,
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    'td:focus &': {
      opacity: 0
    }
  }), _defineProperty(_ref2, "&.".concat(classes$8.brightRightBorder), {
    borderRight: getBrightBorder(theme),
    '&:last-child': {
      borderRight: 'none'
    }
  }), _defineProperty(_ref2, "&.".concat(classes$8.brightBorderBottom), {
    borderBottom: getBrightBorder(theme)
  }), _ref2;
});
var Cell = function Cell(_ref3) {
  var _classNames;

  var className = _ref3.className,
      children = _ref3.children,
      startDate = _ref3.startDate,
      endDate = _ref3.endDate,
      currentTimeIndicatorPosition = _ref3.currentTimeIndicatorPosition,
      CurrentTimeIndicator = _ref3.currentTimeIndicatorComponent,
      isShaded = _ref3.isShaded,
      endOfGroup = _ref3.endOfGroup,
      groupingInfo = _ref3.groupingInfo,
      groupOrientation = _ref3.groupOrientation,
      hasRightBorder = _ref3.hasRightBorder,
      restProps = _objectWithoutProperties(_ref3, _excluded$d);

  var isNow = !!currentTimeIndicatorPosition;
  return /*#__PURE__*/createElement(StyledTableCell$1, _extends({
    shadedHeight: currentTimeIndicatorPosition,
    tabIndex: 0,
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$8.cell, true), _defineProperty(_classNames, classes$8.shadedCell, isShaded && !isNow), _defineProperty(_classNames, classes$8.brightRightBorder, (endOfGroup || hasRightBorder) && groupOrientation === HORIZONTAL_GROUP_ORIENTATION), _defineProperty(_classNames, classes$8.brightBorderBottom, endOfGroup && groupOrientation === VERTICAL_GROUP_ORIENTATION), _classNames), className)
  }, restProps), isNow && isShaded && /*#__PURE__*/createElement("div", {
    className: classes$8.shadedPart
  }), isNow && /*#__PURE__*/createElement(CurrentTimeIndicator, {
    top: currentTimeIndicatorPosition
  }), children);
};
process.env.NODE_ENV !== "production" ? Cell.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  children: PropTypes.node,
  className: PropTypes.string,
  currentTimeIndicatorPosition: PropTypes.string,
  currentTimeIndicatorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isShaded: PropTypes.bool,
  endOfGroup: PropTypes.bool,
  hasRightBorder: PropTypes.bool,
  groupingInfo: PropTypes.arrayOf(PropTypes.object),
  groupOrientation: PropTypes.oneOf([HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION])
} : void 0;
Cell.defaultProps = {
  children: null,
  className: undefined,
  startDate: new Date(),
  endDate: new Date(),
  currentTimeIndicatorPosition: undefined,
  currentTimeIndicatorComponent: function currentTimeIndicatorComponent() {
    return null;
  },
  isShaded: false,
  endOfGroup: false,
  hasRightBorder: false,
  groupingInfo: undefined,
  groupOrientation: HORIZONTAL_GROUP_ORIENTATION
};

var _excluded$e = ["cellComponent", "rowComponent", "groupingPanelComponent", "cellsData", "formatDate", "groupedByDate"];
var Layout$3 = /*#__PURE__*/memo(function (_ref) {
  var Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      GroupingPanel = _ref.groupingPanelComponent,
      cellsData = _ref.cellsData,
      formatDate = _ref.formatDate,
      groupedByDate = _ref.groupedByDate,
      restProps = _objectWithoutProperties(_ref, _excluded$e);

  return /*#__PURE__*/createElement(Table, _extends({
    cellsNumber: cellsData[0].length
  }, restProps), !groupedByDate && /*#__PURE__*/createElement(GroupingPanel, null), /*#__PURE__*/createElement(Row, null, getDayScaleCells(cellsData, groupedByDate).map(function (_ref2) {
    var startDate = _ref2.startDate,
        endDate = _ref2.endDate,
        today = _ref2.today,
        key = _ref2.key,
        endOfGroup = _ref2.endOfGroup,
        groupingInfo = _ref2.groupingInfo,
        colSpan = _ref2.colSpan;
    return /*#__PURE__*/createElement(Cell, {
      key: key,
      startDate: startDate,
      endDate: endDate,
      today: today,
      formatDate: formatDate,
      endOfGroup: endOfGroup,
      hasRightBorder: endOfGroup,
      groupingInfo: groupingInfo,
      colSpan: colSpan
    });
  })), groupedByDate && /*#__PURE__*/createElement(GroupingPanel, null));
});
Layout$3.propTypes = {
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  groupingPanelComponent: PropTypes.func,
  formatDate: PropTypes.func.isRequired,
  groupedByDate: PropTypes.bool
};
Layout$3.defaultProps = {
  groupingPanelComponent: function groupingPanelComponent() {
    return null;
  },
  groupedByDate: false
};

var _excluded$f = ["className", "startDate", "endDate", "today", "formatDate", "endOfGroup", "groupingInfo", "hasRightBorder"];
var PREFIX$9 = 'Cell';
var classes$9 = {
  cell: "".concat(PREFIX$9, "-cell"),
  dayOfWeek: "".concat(PREFIX$9, "-dayOfWeek"),
  dayOfMonth: "".concat(PREFIX$9, "-dayOfMonth"),
  highlightedText: "".concat(PREFIX$9, "-highlightedText"),
  dayView: "".concat(PREFIX$9, "-dayView"),
  brightRightBorder: "".concat(PREFIX$9, "-brightRightBorder")
};
var StyledTableCell$2 = styled(TableCell)(function (_ref) {
  var _$concat, _objectSpread2$1, _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$9.cell), (_$concat = {
    userSelect: 'none',
    paddingBottom: theme.spacing(0.5),
    textAlign: 'center',
    borderBottom: 'none',
    paddingRight: 0,
    paddingLeft: 0,
    boxSizing: 'border-box'
  }, _defineProperty(_$concat, "".concat(LAYOUT_MEDIA_QUERY), {
    padding: theme.spacing(1),
    paddingBottom: 0
  }), _defineProperty(_$concat, '&:only-child', {
    textAlign: 'left',
    paddingLeft: theme.spacing(2)
  }), _defineProperty(_$concat, "paddingTop", theme.spacing(0.5)), _$concat)), _defineProperty(_ref2, "& .".concat(classes$9.dayOfWeek), _objectSpread2(_objectSpread2({}, theme.typography.caption), {}, {
    margin: 0,
    color: theme.palette.text.secondary,
    lineHeight: 1.17
  })), _defineProperty(_ref2, "& .".concat(classes$9.dayOfMonth), _objectSpread2(_objectSpread2({}, theme.typography.h4), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, "".concat(LAYOUT_MEDIA_QUERY), _objectSpread2({}, theme.typography.h6)), _defineProperty(_objectSpread2$1, "color", theme.palette.text.secondary), _defineProperty(_objectSpread2$1, "lineHeight", 1.2), _defineProperty(_objectSpread2$1, "fontSize", '1.8rem'), _objectSpread2$1))), _defineProperty(_ref2, "& .".concat(classes$9.highlightedText), {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  }), _defineProperty(_ref2, "& .".concat(classes$9.dayView), {
    'td:only-child &': {
      textAlign: 'center',
      width: 'auto',
      display: 'inline-block'
    }
  }), _defineProperty(_ref2, "&.".concat(classes$9.brightRightBorder), {
    borderRight: getBrightBorder(theme),
    '&:last-child': {
      borderRight: 'none'
    }
  }), _ref2;
});
var Cell$1 = function Cell(_ref3) {
  var _classNames, _classNames2, _classNames3;

  var className = _ref3.className,
      startDate = _ref3.startDate,
      endDate = _ref3.endDate,
      today = _ref3.today,
      formatDate = _ref3.formatDate,
      endOfGroup = _ref3.endOfGroup,
      groupingInfo = _ref3.groupingInfo,
      hasRightBorder = _ref3.hasRightBorder,
      restProps = _objectWithoutProperties(_ref3, _excluded$f);

  return /*#__PURE__*/createElement(StyledTableCell$2, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$9.cell, true), _defineProperty(_classNames, classes$9.brightRightBorder, endOfGroup || hasRightBorder), _classNames), className)
  }, restProps), /*#__PURE__*/createElement("div", {
    className: classes$9.dayView
  }, /*#__PURE__*/createElement("p", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes$9.dayOfWeek, true), _defineProperty(_classNames2, classes$9.highlightedText, today), _classNames2))
  }, formatDate(startDate, WEEK_DAY_OPTIONS)), /*#__PURE__*/createElement("div", {
    className: classNames((_classNames3 = {}, _defineProperty(_classNames3, classes$9.dayOfMonth, true), _defineProperty(_classNames3, classes$9.highlightedText, today), _classNames3))
  }, formatDate(startDate, DAY_OPTIONS))));
};
process.env.NODE_ENV !== "production" ? Cell$1.propTypes = {
  formatDate: PropTypes.func.isRequired,
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  className: PropTypes.string,
  today: PropTypes.bool,
  endOfGroup: PropTypes.bool,
  hasRightBorder: PropTypes.bool,
  groupingInfo: PropTypes.arrayOf(PropTypes.object)
} : void 0;
Cell$1.defaultProps = {
  className: undefined,
  endDate: undefined,
  today: false,
  endOfGroup: false,
  hasRightBorder: false,
  groupingInfo: undefined
};

var DayView = withComponents({
  Layout: MainLayout,
  AppointmentLayer: Container,
  DayScaleEmptyCell: DayScaleEmptyCell,
  TimeScaleLayout: Layout,
  TimeScaleLabel: Label,
  TimeScaleTickCell: TickCell,
  TimeScaleTicksRow: Row,
  DayScaleLayout: Layout$3,
  DayScaleCell: Cell$1,
  DayScaleRow: Row,
  TimeTableLayout: Layout$2,
  TimeTableCell: Cell,
  TimeTableRow: Row
})(DayView$1);

var WeekView = withComponents({
  Layout: MainLayout,
  AppointmentLayer: Container,
  DayScaleEmptyCell: DayScaleEmptyCell,
  TimeScaleLayout: Layout,
  TimeScaleLabel: Label,
  TimeScaleTickCell: TickCell,
  TimeScaleTicksRow: Row,
  DayScaleLayout: Layout$3,
  DayScaleCell: Cell$1,
  DayScaleRow: Row,
  TimeTableLayout: Layout$2,
  TimeTableCell: Cell,
  TimeTableRow: Row
})(WeekView$1);

var _excluded$g = ["setCellElementsMeta", "cellComponent", "rowComponent", "cellsData", "formatDate"];
var Layout$4 = /*#__PURE__*/memo(function (_ref) {
  var setCellElementsMeta = _ref.setCellElementsMeta,
      Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      cellsData = _ref.cellsData,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, _excluded$g);

  return /*#__PURE__*/createElement(Layout$1, _extends({
    setCellElementsMeta: setCellElementsMeta,
    cellsNumber: cellsData[0].length
  }, restProps), cellsData.map(function (row, index) {
    return /*#__PURE__*/createElement(Row, {
      key: index.toString()
    }, row.map(function (_ref2) {
      var startDate = _ref2.startDate,
          endDate = _ref2.endDate,
          today = _ref2.today,
          otherMonth = _ref2.otherMonth,
          groupingInfo = _ref2.groupingInfo,
          endOfGroup = _ref2.endOfGroup,
          groupOrientation = _ref2.groupOrientation;
      return /*#__PURE__*/createElement(Cell, {
        key: getViewCellKey(startDate, groupingInfo),
        startDate: startDate,
        endDate: endDate,
        today: today,
        otherMonth: otherMonth,
        formatDate: formatDate,
        endOfGroup: endOfGroup,
        hasRightBorder: endOfGroup,
        groupingInfo: groupingInfo,
        groupOrientation: groupOrientation
      });
    }));
  }));
});
Layout$4.propTypes = {
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  formatDate: PropTypes.func.isRequired,
  setCellElementsMeta: PropTypes.func.isRequired
};

var _excluded$h = ["className", "startDate", "endDate", "today", "otherMonth", "formatDate", "isShaded", "endOfGroup", "groupingInfo", "groupOrientation", "hasRightBorder"];
var PREFIX$a = 'Cell';
var classes$a = {
  cell: "".concat(PREFIX$a, "-cell"),
  text: "".concat(PREFIX$a, "-text"),
  today: "".concat(PREFIX$a, "-today"),
  otherMonth: "".concat(PREFIX$a, "-otherMonth"),
  shadedCell: "".concat(PREFIX$a, "-shadedCell"),
  brightRightBorder: "".concat(PREFIX$a, "-brightRightBorder"),
  brightBorderBottom: "".concat(PREFIX$a, "-brightBorderBottom")
};
var StyledTableCell$3 = styled(TableCell)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$a.cell), {
    userSelect: 'none',
    verticalAlign: 'top',
    padding: 0,
    height: theme.spacing(SPACING_CELL_HEIGHT[VIEW_TYPES.MONTH]),
    borderRight: getBorder(theme),
    '&:last-child': {
      borderRight: 'none',
      paddingRight: 0
    },
    'tr:last-child &': {
      borderBottom: 'none'
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      outline: 0
    },
    boxSizing: 'border-box'
  }), _defineProperty(_ref2, "& .".concat(classes$a.text), _defineProperty({
    padding: '1em',
    paddingTop: '0.5em',
    textAlign: 'center'
  }, "".concat(SMALL_LAYOUT_MEDIA_QUERY), {
    padding: '0.5em'
  })), _defineProperty(_ref2, "& .".concat(classes$a.today), {
    marginTop: '0.33em',
    width: '1.72em',
    height: '1.72em',
    lineHeight: 1.72,
    textAlign: 'center',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: 'default',
    marginRight: 'auto',
    marginLeft: 'auto'
  }), _defineProperty(_ref2, "& .".concat(classes$a.otherMonth), {
    color: theme.palette.text.disabled
  }), _defineProperty(_ref2, "&.".concat(classes$a.shadedCell), {
    backgroundColor: alpha(theme.palette.action.disabledBackground, 0.04),
    '&:hover': {
      backgroundColor: theme.palette.action.selected
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      outline: 0
    }
  }), _defineProperty(_ref2, "&.".concat(classes$a.brightRightBorder), {
    borderRight: getBrightBorder(theme),
    '&:last-child': {
      borderRight: 'none'
    }
  }), _defineProperty(_ref2, "&.".concat(classes$a.brightBorderBottom), {
    borderBottom: getBrightBorder(theme)
  }), _ref2;
});
var CellBase = /*#__PURE__*/memo(function (_ref3) {
  var _classNames, _classNames2;

  var className = _ref3.className,
      startDate = _ref3.startDate,
      endDate = _ref3.endDate,
      today = _ref3.today,
      otherMonth = _ref3.otherMonth,
      formatDate = _ref3.formatDate,
      isShaded = _ref3.isShaded,
      endOfGroup = _ref3.endOfGroup,
      groupingInfo = _ref3.groupingInfo,
      groupOrientation = _ref3.groupOrientation,
      hasRightBorder = _ref3.hasRightBorder,
      restProps = _objectWithoutProperties(_ref3, _excluded$h);

  var isFirstMonthDay = startDate.getDate() === 1;
  var formatOptions = isFirstMonthDay && !today ? DAY_SHORT_MONTH_OPTIONS : DAY_OPTIONS;
  return /*#__PURE__*/createElement(StyledTableCell$3, _extends({
    tabIndex: 0,
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$a.cell, true), _defineProperty(_classNames, classes$a.shadedCell, isShaded), _defineProperty(_classNames, classes$a.brightRightBorder, (endOfGroup || hasRightBorder) && groupOrientation === HORIZONTAL_GROUP_ORIENTATION), _defineProperty(_classNames, classes$a.brightBorderBottom, endOfGroup && groupOrientation === VERTICAL_GROUP_ORIENTATION), _classNames), className)
  }, restProps), /*#__PURE__*/createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes$a.text, !today), _defineProperty(_classNames2, classes$a.today, today), _defineProperty(_classNames2, classes$a.otherMonth, otherMonth && !today), _classNames2))
  }, formatDate(startDate, formatOptions)));
});
process.env.NODE_ENV !== "production" ? CellBase.propTypes = {
  formatDate: PropTypes.func.isRequired,
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  className: PropTypes.string,
  today: PropTypes.bool,
  otherMonth: PropTypes.bool,
  isShaded: PropTypes.bool,
  endOfGroup: PropTypes.bool,
  hasRightBorder: PropTypes.bool,
  groupingInfo: PropTypes.arrayOf(PropTypes.object),
  groupOrientation: PropTypes.oneOf([HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION])
} : void 0;
CellBase.defaultProps = {
  endDate: undefined,
  className: undefined,
  today: false,
  otherMonth: false,
  isShaded: false,
  endOfGroup: false,
  hasRightBorder: false,
  groupingInfo: undefined,
  groupOrientation: HORIZONTAL_GROUP_ORIENTATION
};
var Cell$2 = CellBase;

var _excluded$i = ["className", "startDate", "endDate", "today", "formatDate", "endOfGroup", "groupingInfo", "hasRightBorder"];
var PREFIX$b = 'Cell';
var classes$b = {
  cell: "".concat(PREFIX$b, "-cell"),
  dayOfWeek: "".concat(PREFIX$b, "-dayOfWeek"),
  brightRightBorder: "".concat(PREFIX$b, "-brightRightBorder")
};
var StyledTableCell$4 = styled(TableCell)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$b.cell), {
    userSelect: 'none',
    padding: 0,
    borderBottom: 'none',
    borderRight: getBorder(theme),
    '&:last-child': {
      borderRight: 'none',
      paddingRight: 0
    },
    textAlign: 'center',
    boxSizing: 'border-box'
  }), _defineProperty(_ref2, "& .".concat(classes$b.dayOfWeek), _objectSpread2(_objectSpread2({}, theme.typography.caption), {}, {
    margin: 0,
    padding: theme.spacing(1),
    paddingBottom: 0,
    color: theme.palette.text.secondary,
    fontWeight: 'bold'
  })), _defineProperty(_ref2, "&.".concat(classes$b.brightRightBorder), {
    borderRight: getBrightBorder(theme),
    '&:last-child': {
      borderRight: 'none'
    }
  }), _ref2;
});
var Cell$3 = function Cell(_ref3) {
  var _classNames;

  var className = _ref3.className,
      startDate = _ref3.startDate,
      endDate = _ref3.endDate,
      today = _ref3.today,
      formatDate = _ref3.formatDate,
      endOfGroup = _ref3.endOfGroup,
      groupingInfo = _ref3.groupingInfo,
      hasRightBorder = _ref3.hasRightBorder,
      restProps = _objectWithoutProperties(_ref3, _excluded$i);

  return /*#__PURE__*/createElement(StyledTableCell$4, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$b.cell, true), _defineProperty(_classNames, classes$b.brightRightBorder, endOfGroup || hasRightBorder), _classNames), className)
  }, restProps), /*#__PURE__*/createElement("div", {
    className: classes$b.dayOfWeek
  }, formatDate(startDate, WEEK_DAY_OPTIONS)));
};
process.env.NODE_ENV !== "production" ? Cell$3.propTypes = {
  formatDate: PropTypes.func.isRequired,
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  className: PropTypes.string,
  today: PropTypes.bool,
  endOfGroup: PropTypes.bool,
  hasRightBorder: PropTypes.bool,
  groupingInfo: PropTypes.arrayOf(PropTypes.object)
} : void 0;
Cell$3.defaultProps = {
  className: undefined,
  endDate: undefined,
  today: false,
  endOfGroup: false,
  hasRightBorder: false,
  groupingInfo: undefined
};

var MonthView = withComponents({
  Layout: MainLayout,
  AppointmentLayer: Container,
  DayScaleEmptyCell: DayScaleEmptyCell,
  DayScaleLayout: Layout$3,
  DayScaleCell: Cell$3,
  DayScaleRow: Row,
  TimeTableLayout: Layout$4,
  TimeTableCell: Cell$2,
  TimeTableRow: Row
})(MonthView$1);

var _excluded$j = ["data", "children", "className", "recurringIconComponent", "formatDate", "durationType"];
var PREFIX$c = 'HorizontalAppointment';
var classes$c = {
  title: "".concat(PREFIX$c, "-title"),
  content: "".concat(PREFIX$c, "-content"),
  container: "".concat(PREFIX$c, "-container"),
  recurringContainer: "".concat(PREFIX$c, "-recurringContainer"),
  imageContainer: "".concat(PREFIX$c, "-imageContainer"),
  image: "".concat(PREFIX$c, "-image")
};
var StyledDiv$4 = styled('div')(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      palette = _ref$theme.palette,
      spacing = _ref$theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$c.title), {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }), _defineProperty(_ref2, "&.".concat(classes$c.content), {
    color: palette.common.white,
    padding: spacing(0.5),
    paddingTop: spacing(0.125),
    paddingLeft: spacing(0.75),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'flex'
  }), _defineProperty(_ref2, "& .".concat(classes$c.container), {
    width: '100%'
  }), _defineProperty(_ref2, "& .".concat(classes$c.recurringContainer), {
    width: "calc(100% - ".concat(spacing(2), ")")
  }), _defineProperty(_ref2, "& .".concat(classes$c.imageContainer), {
    width: spacing(2),
    height: spacing(2)
  }), _defineProperty(_ref2, "& .".concat(classes$c.image), {
    width: '100%',
    height: '100%'
  }), _ref2;
});
var HorizontalAppointment = function HorizontalAppointment(_ref3) {
  var data = _ref3.data,
      children = _ref3.children,
      className = _ref3.className,
      RecurringIcon = _ref3.recurringIconComponent,
      formatDate = _ref3.formatDate,
      durationType = _ref3.durationType,
      restProps = _objectWithoutProperties(_ref3, _excluded$j);

  var repeat = !!data.rRule;
  return /*#__PURE__*/createElement(StyledDiv$4, _extends({
    className: classNames(classes$c.content, className)
  }, restProps), children || /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: repeat ? classes$c.recurringContainer : classes$c.container
  }, /*#__PURE__*/createElement("div", {
    className: classes$c.title
  }, data.title)), repeat ? /*#__PURE__*/createElement("div", {
    className: classes$c.imageContainer
  }, /*#__PURE__*/createElement(RecurringIcon, {
    className: classes$c.image
  })) : undefined));
};
process.env.NODE_ENV !== "production" ? HorizontalAppointment.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  data: PropTypes.object.isRequired,
  durationType: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  formatDate: PropTypes.func
} : void 0;
HorizontalAppointment.defaultProps = {
  formatDate: function formatDate() {
    return '';
  },
  children: undefined,
  className: undefined,
  durationType: undefined
};

var _excluded$k = ["data", "children", "className", "formatDate", "recurringIconComponent", "durationType"];
var PREFIX$d = 'VerticalAppointment';
var classes$d = {
  title: "".concat(PREFIX$d, "-title"),
  textContainer: "".concat(PREFIX$d, "-textContainer"),
  middleContainer: "".concat(PREFIX$d, "-middleContainer"),
  time: "".concat(PREFIX$d, "-time"),
  content: "".concat(PREFIX$d, "-content"),
  shortContent: "".concat(PREFIX$d, "-shortContent"),
  shortContainer: "".concat(PREFIX$d, "-shortContainer"),
  shortTime: "".concat(PREFIX$d, "-shortTime"),
  shortTitle: "".concat(PREFIX$d, "-shortTitle"),
  container: "".concat(PREFIX$d, "-container"),
  recurringContainer: "".concat(PREFIX$d, "-recurringContainer"),
  imageContainer: "".concat(PREFIX$d, "-imageContainer"),
  image: "".concat(PREFIX$d, "-image")
};
var StyledDiv$5 = styled('div')(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      palette = _ref$theme.palette,
      spacing = _ref$theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$d.title), {
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }), _defineProperty(_ref2, "& .".concat(classes$d.textContainer), {
    lineHeight: 1,
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }), _defineProperty(_ref2, "& .".concat(classes$d.middleContainer), {
    lineHeight: '0.9!important'
  }), _defineProperty(_ref2, "& .".concat(classes$d.time), {
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }), _defineProperty(_ref2, "&.".concat(classes$d.content), _defineProperty({
    // color: palette.common.white,
    padding: spacing(0.5, 1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'flex'
  }, "".concat(SMALL_LAYOUT_MEDIA_QUERY), {
    paddingLeft: spacing(0.5),
    paddingRight: spacing(0.5)
  })), _defineProperty(_ref2, "&.".concat(classes$d.shortContent), _defineProperty({
    padding: spacing(0.25, 1)
  }, "".concat(SMALL_LAYOUT_MEDIA_QUERY), {
    paddingLeft: spacing(0.5),
    paddingRight: spacing(0.5)
  })), _defineProperty(_ref2, "& .".concat(classes$d.shortContainer), {
    display: 'flex'
  }), _defineProperty(_ref2, "& .".concat(classes$d.shortTime), {
    textOverflow: 'initial',
    flexShrink: 0
  }), _defineProperty(_ref2, "& .".concat(classes$d.shortTitle), {
    flexShrink: 3
  }), _defineProperty(_ref2, "& .".concat(classes$d.container), {
    width: '100%'
  }), _defineProperty(_ref2, "& .".concat(classes$d.recurringContainer), {
    width: "calc(100% - ".concat(spacing(2), ")")
  }), _defineProperty(_ref2, "& .".concat(classes$d.imageContainer), {
    width: spacing(2),
    height: spacing(2)
  }), _defineProperty(_ref2, "& .".concat(classes$d.image), {
    width: '100%',
    height: '100%'
  }), _ref2;
});
var VerticalAppointment = function VerticalAppointment(_ref3) {
  var _classNames, _classNames2, _classNames3;

  var data = _ref3.data,
      children = _ref3.children,
      className = _ref3.className,
      formatDate = _ref3.formatDate,
      RecurringIcon = _ref3.recurringIconComponent,
      durationType = _ref3.durationType,
      restProps = _objectWithoutProperties(_ref3, _excluded$k);

  var repeat = !!data.rRule;
  var isShortHeight = durationType === 'short';
  var isMiddleHeight = durationType === 'middle';
  return /*#__PURE__*/createElement(StyledDiv$5, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$d.content, true), _defineProperty(_classNames, classes$d.shortContent, isShortHeight || isMiddleHeight), _classNames), className)
  }, restProps), children || /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes$d.container, !repeat), _defineProperty(_classNames2, classes$d.recurringContainer, repeat), _classNames2))
  }, isShortHeight ? /*#__PURE__*/createElement("div", {
    className: classes$d.shortContainer
  }, /*#__PURE__*/createElement("div", {
    className: classNames(classes$d.title, classes$d.shortTitle)
  }, addCommaAndSpaceToString(data.title)), /*#__PURE__*/createElement("div", {
    className: classNames(classes$d.time, classes$d.shortTime)
  }, formatDate(data.startDate, HOUR_MINUTE_OPTIONS))) : /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: classes$d.title
  }, data.title), /*#__PURE__*/createElement("div", {
    className: classNames((_classNames3 = {}, _defineProperty(_classNames3, classes$d.textContainer, true), _defineProperty(_classNames3, classes$d.middleContainer, isMiddleHeight), _classNames3))
  }, /*#__PURE__*/createElement("div", {
    className: classes$d.time
  }, formatDate(data.startDate, HOUR_MINUTE_OPTIONS)), /*#__PURE__*/createElement("div", {
    className: classes$d.time
  }, "\xA0 - \xA0"), /*#__PURE__*/createElement("div", {
    className: classes$d.time
  }, formatDate(data.endDate, HOUR_MINUTE_OPTIONS))))), repeat ? /*#__PURE__*/createElement("div", {
    className: classes$d.imageContainer
  }, /*#__PURE__*/createElement(RecurringIcon, {
    className: classes$d.image
  })) : undefined));
};
process.env.NODE_ENV !== "production" ? VerticalAppointment.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  data: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  durationType: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;
VerticalAppointment.defaultProps = {
  children: undefined,
  className: undefined
};

var _excluded$l = ["type"];
var AppointmentContent = function AppointmentContent(_ref) {
  var type = _ref.type,
      restProps = _objectWithoutProperties(_ref, _excluded$l);

  return type === HORIZONTAL_TYPE ? /*#__PURE__*/createElement(HorizontalAppointment, restProps) : /*#__PURE__*/createElement(VerticalAppointment, restProps);
};
process.env.NODE_ENV !== "production" ? AppointmentContent.propTypes = {
  type: PropTypes.oneOf([HORIZONTAL_TYPE, VERTICAL_TYPE]).isRequired
} : void 0;

var _excluded$m = ["className", "children", "data", "onClick", "draggable", "isShaded", "resources", "forwardedRef"];
var PREFIX$e = 'Appointment';
var classes$e = {
  appointment: "".concat(PREFIX$e, "-appointment"),
  clickableAppointment: "".concat(PREFIX$e, "-clickableAppointment"),
  shadedAppointment: "".concat(PREFIX$e, "-shadedAppointment")
}; // Function to get the contrast color of the text based on the background color hex

function getContrastYIQ(hexcolor) {
  var r = parseInt(hexcolor.substring(1, 3), 16);
  var g = parseInt(hexcolor.substring(3, 5), 16);
  var b = parseInt(hexcolor.substring(5, 7), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

var StyledDiv$6 = styled('div')(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      palette = _ref$theme.palette,
      typography = _ref$theme.typography,
      spacing = _ref$theme.spacing,
      resources = _ref.resources;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$e.appointment), _objectSpread2(_objectSpread2({
    userSelect: 'none',
    position: 'absolute',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    border: "1px solid ".concat(palette.background.paper),
    backgroundClip: 'padding-box',
    borderRadius: spacing(0.5),
    backgroundColor: getAppointmentColor(300, getResourceColor(resources), palette.primary),
    color: getContrastYIQ(getAppointmentColor(300, getResourceColor(resources), palette.primary))
  }, typography.caption), {}, {
    '&:hover': {
      backgroundColor: getAppointmentColor(400, getResourceColor(resources), palette.primary)
    },
    '&:focus': {
      backgroundColor: getAppointmentColor(100, getResourceColor(resources), palette.primary),
      outline: 0
    }
  })), _defineProperty(_ref2, "&.".concat(classes$e.clickableAppointment), {
    cursor: 'pointer'
  }), _defineProperty(_ref2, "&.".concat(classes$e.shadedAppointment), {
    backgroundColor: getAppointmentColor(200, getResourceColor(resources), palette.primary),
    '&:hover': {
      backgroundColor: getAppointmentColor(300, getResourceColor(resources), palette.primary)
    }
  }), _ref2;
});
var Appointment = function Appointment(_ref3) {
  var _classNames;

  var className = _ref3.className,
      children = _ref3.children,
      data = _ref3.data,
      handleClick = _ref3.onClick,
      draggable = _ref3.draggable,
      isShaded = _ref3.isShaded,
      resources = _ref3.resources,
      forwardedRef = _ref3.forwardedRef,
      restProps = _objectWithoutProperties(_ref3, _excluded$m);

  var onClick = handleClick ? {
    onClick: function onClick(_ref4) {
      var target = _ref4.target;
      handleClick({
        target: target,
        data: data
      });
    }
  } : null;
  var clickable = onClick || restProps.onDoubleClick || draggable;
  return /*#__PURE__*/createElement(StyledDiv$6, _extends({
    resources: resources,
    ref: forwardedRef,
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$e.appointment, true), _defineProperty(_classNames, classes$e.clickableAppointment, clickable), _defineProperty(_classNames, classes$e.shadedAppointment, isShaded), _classNames), className)
  }, onClick, restProps), children);
};
process.env.NODE_ENV !== "production" ? Appointment.propTypes = {
  children: PropTypes.node.isRequired,
  resources: PropTypes.array,
  className: PropTypes.string,
  data: PropTypes.object,
  onClick: PropTypes.func,
  draggable: PropTypes.bool,
  isShaded: PropTypes.bool,
  forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
} : void 0;
Appointment.defaultProps = {
  resources: [],
  onClick: undefined,
  className: undefined,
  data: {},
  draggable: false,
  isShaded: false,
  forwardedRef: undefined
};

var _excluded$n = ["position", "appointmentType", "className"];

var _styled;
var PREFIX$f = 'AppointmentsContainer';
var classes$f = {
  slice: "".concat(PREFIX$f, "-slice"),
  verticalStart: "".concat(PREFIX$f, "-verticalStart"),
  verticalEnd: "".concat(PREFIX$f, "-verticalEnd"),
  horizontalStart: "".concat(PREFIX$f, "-horizontalStart"),
  horizontalEnd: "".concat(PREFIX$f, "-horizontalEnd")
};
var verticalStyles = {
  width: '100%',
  height: '10px'
};
var horizontalStyles = {
  top: 0,
  width: '10px',
  height: '100%'
};
var StyledDiv$7 = styled('div')((_styled = {}, _defineProperty(_styled, "&.".concat(classes$f.slice), {
  position: 'absolute',
  zIndex: 50
}), _defineProperty(_styled, "&.".concat(classes$f.verticalStart), _objectSpread2(_objectSpread2({}, verticalStyles), {}, {
  top: '-10px',
  boxShadow: '0 10px 15px rgba(0,0,0,0.2)'
})), _defineProperty(_styled, "&.".concat(classes$f.verticalEnd), _objectSpread2(_objectSpread2({}, verticalStyles), {}, {
  bottom: '-10px',
  boxShadow: '0 -10px 15px rgba(0,0,0,0.2)'
})), _defineProperty(_styled, "&.".concat(classes$f.horizontalStart), _objectSpread2(_objectSpread2({}, horizontalStyles), {}, {
  left: '-10px',
  boxShadow: '10px 0 15px rgba(0,0,0,0.2)'
})), _defineProperty(_styled, "&.".concat(classes$f.horizontalEnd), _objectSpread2(_objectSpread2({}, horizontalStyles), {}, {
  right: '-10px',
  boxShadow: '-10px 0 15px rgba(0,0,0,0.2)'
})), _styled));
var SplitIndicator = /*#__PURE__*/memo(function (_ref) {
  var _classNames;

  var position = _ref.position,
      appointmentType = _ref.appointmentType,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded$n);

  var vertical = appointmentType === VERTICAL_TYPE;
  var start = position === POSITION_START;
  return /*#__PURE__*/createElement(StyledDiv$7, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$f.slice, true), _defineProperty(_classNames, classes$f.verticalStart, vertical && start), _defineProperty(_classNames, classes$f.verticalEnd, vertical && !start), _defineProperty(_classNames, classes$f.horizontalStart, !vertical && start), _defineProperty(_classNames, classes$f.horizontalEnd, !vertical && !start), _classNames), className)
  }, restProps));
});
process.env.NODE_ENV !== "production" ? SplitIndicator.propTypes = {
  appointmentType: PropTypes.oneOf([VERTICAL_TYPE, HORIZONTAL_TYPE]).isRequired,
  position: PropTypes.oneOf([POSITION_START, POSITION_END]).isRequired,
  className: PropTypes.string
} : void 0;
SplitIndicator.defaultProps = {
  className: undefined
};

var _excluded$o = ["style", "children"];
var AppointmentContainer = function AppointmentContainer(_ref) {
  var style = _ref.style,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$o);

  return /*#__PURE__*/createElement("div", _extends({
    style: style
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? AppointmentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired
} : void 0;

var Appointments = withComponents({
  Appointment: Appointment,
  AppointmentContent: AppointmentContent,
  Container: AppointmentContainer,
  SplitIndicator: SplitIndicator,
  RecurringIcon: Repeat
})(Appointments$1);

var _excluded$p = ["children", "className"];
var PREFIX$g = 'Toolbar';
var classes$g = {
  toolbar: "".concat(PREFIX$g, "-toolbar")
};
var StyledToolbarMUI = styled(Toolbar$2)(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, "&.".concat(classes$g.toolbar), {
    borderBottom: getBorder(theme)
  });
});
var Toolbar = function Toolbar(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$p);

  return /*#__PURE__*/createElement(StyledToolbarMUI, _extends({
    className: classNames(classes$g.toolbar, className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
} : void 0;
Toolbar.defaultProps = {
  className: undefined
};

var _excluded$q = ["children", "className"];
var PREFIX$h = 'FlexibleSpace';
var classes$h = {
  flexibleSpace: "".concat(PREFIX$h, "-flexibleSpace")
};
var StyledDiv$8 = styled('div')(_defineProperty({}, "&.".concat(classes$h.flexibleSpace), {
  flex: '0 0 0',
  marginLeft: 'auto'
}));
var FlexibleSpace = function FlexibleSpace(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded$q);

  return /*#__PURE__*/createElement(StyledDiv$8, _extends({
    className: classNames(classes$h.flexibleSpace, className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? FlexibleSpace.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;
FlexibleSpace.defaultProps = {
  children: null,
  className: undefined
};

var Toolbar$1 = withComponents({
  Root: Toolbar,
  FlexibleSpace: FlexibleSpace
})(Toolbar$3);

var _excluded$r = ["navigationButtonComponent", "openButtonComponent", "navigatorText", "rootRef", "onVisibilityToggle", "onNavigate", "className"];
var PREFIX$i = 'Root';
var classes$i = {
  root: "".concat(PREFIX$i, "-root")
};
var StyledDiv$9 = styled('div')(function (_ref) {
  var spacing = _ref.theme.spacing;
  return _defineProperty({}, "&.".concat(classes$i.root), {
    marginLeft: spacing(0.5),
    '&:first-of-type': {
      marginLeft: 0
    }
  });
});

var RootBase = function RootBase(_ref3) {
  var NavigationButton = _ref3.navigationButtonComponent,
      OpenButton = _ref3.openButtonComponent,
      navigatorText = _ref3.navigatorText,
      rootRef = _ref3.rootRef,
      onVisibilityToggle = _ref3.onVisibilityToggle,
      onNavigate = _ref3.onNavigate,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$r);

  var navigateBack = useCallback(function () {
    return onNavigate('back');
  }, [onNavigate]);
  var navigateForward = useCallback(function () {
    return onNavigate('forward');
  }, [onNavigate]);
  return /*#__PURE__*/createElement(StyledDiv$9, _extends({
    className: classNames(classes$i.root, className),
    ref: rootRef
  }, restProps), /*#__PURE__*/createElement(NavigationButton, {
    type: "back",
    onClick: navigateBack
  }), /*#__PURE__*/createElement(NavigationButton, {
    type: "forward",
    onClick: navigateForward
  }), /*#__PURE__*/createElement(OpenButton, {
    onVisibilityToggle: onVisibilityToggle,
    text: navigatorText
  }));
};

process.env.NODE_ENV !== "production" ? RootBase.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  navigationButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  openButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  onVisibilityToggle: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  rootRef: PropTypes.func.isRequired,
  navigatorText: PropTypes.string,
  className: PropTypes.string
} : void 0;
RootBase.defaultProps = {
  navigatorText: '',
  className: undefined
};
var Root$1 = RootBase;

var _excluded$s = ["visible", "onHide", "children", "target"];
var origin = {
  vertical: 'top',
  horizontal: 'right'
};
var Overlay = function Overlay(_ref) {
  var visible = _ref.visible,
      onHide = _ref.onHide,
      children = _ref.children,
      target = _ref.target,
      restProps = _objectWithoutProperties(_ref, _excluded$s);

  return /*#__PURE__*/createElement(Popover, _extends({
    open: visible,
    anchorEl: target,
    onClose: onHide,
    anchorOrigin: origin,
    transformOrigin: origin
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
} : void 0;
Overlay.defaultProps = {
  visible: false,
  target: null
};

var _excluded$t = ["text", "onVisibilityToggle", "className"];
var PREFIX$j = 'OpenButton';
var classes$j = {
  textButton: "".concat(PREFIX$j, "-textButton"),
  iconButton: "".concat(PREFIX$j, "-iconButton")
};
var StyledButton = styled(Button$1)(function () {
  return _defineProperty({}, "&.".concat(classes$j.textButton), _defineProperty({}, "".concat(LAYOUT_MEDIA_QUERY), {
    display: 'none'
  }));
});
var StyledIconButton = styled(IconButton)(function (_ref2) {
  var spacing = _ref2.theme.spacing;
  return _defineProperty({}, "&.".concat(classes$j.iconButton), _defineProperty({
    '@media (min-width: 700px)': {
      display: 'none'
    }
  }, "".concat(SMALL_LAYOUT_MEDIA_QUERY), {
    width: spacing(4),
    height: spacing(4),
    padding: 0
  }));
});
var OpenButton = /*#__PURE__*/memo(function (_ref4) {
  var text = _ref4.text,
      onVisibilityToggle = _ref4.onVisibilityToggle,
      className = _ref4.className,
      restProps = _objectWithoutProperties(_ref4, _excluded$t);

  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(StyledButton, _extends({
    onClick: onVisibilityToggle,
    className: classNames(classes$j.textButton, className)
  }, restProps), text), /*#__PURE__*/createElement(StyledIconButton, _extends({
    onClick: onVisibilityToggle,
    className: classNames(classes$j.iconButton, className)
  }, restProps, {
    size: "large"
  }), /*#__PURE__*/createElement(CalendarToday, null)));
});
OpenButton.propTypes = {
  onVisibilityToggle: PropTypes.func.isRequired,
  text: PropTypes.string,
  className: PropTypes.string
};
OpenButton.defaultProps = {
  text: '',
  className: undefined
};

var _excluded$u = ["type", "onClick", "className"];
var PREFIX$k = 'NavigationButton';
var classes$k = {
  button: "".concat(PREFIX$k, "-button")
};
var StyledIconButton$1 = styled(IconButton)(function (_ref) {
  var spacing = _ref.theme.spacing;
  return _defineProperty({}, "&.".concat(classes$k.button), _defineProperty({}, "".concat(SMALL_LAYOUT_MEDIA_QUERY), {
    width: spacing(4),
    height: spacing(4),
    padding: 0
  }));
});
var NavigationButton = /*#__PURE__*/memo(function (_ref3) {
  var type = _ref3.type,
      onClick = _ref3.onClick,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$u);

  return /*#__PURE__*/createElement(StyledIconButton$1, _extends({
    onClick: onClick,
    color: "primary",
    className: classNames(classes$k.button, className)
  }, restProps, {
    size: "large"
  }), type === 'back' ? /*#__PURE__*/createElement(ChevronLeft, null) : /*#__PURE__*/createElement(ChevronRight, null));
});
NavigationButton.propTypes = {
  type: PropTypes.oneOf(['forward', 'back']).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};
NavigationButton.defaultProps = {
  onClick: function onClick() {},
  className: undefined
};

var _excluded$v = ["rowComponent", "cellComponent", "headerRowComponent", "headerCellComponent", "className", "cells", "headerCells", "selectedDate", "onCellClick", "formatDate"];
var PREFIX$l = 'Table';
var classes$l = {
  table: "".concat(PREFIX$l, "-table")
};
var StyledTableMUI$1 = styled(Table$2)(_defineProperty({}, "&.".concat(classes$l.table), {
  width: '320px',
  tableLayout: 'fixed'
}));
var Table$1 = function Table(_ref) {
  var Row = _ref.rowComponent,
      Cell = _ref.cellComponent,
      HeaderRow = _ref.headerRowComponent,
      HeaderCell = _ref.headerCellComponent,
      className = _ref.className,
      cells = _ref.cells,
      headerCells = _ref.headerCells,
      selectedDate = _ref.selectedDate,
      onCellClick = _ref.onCellClick,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, _excluded$v);

  return /*#__PURE__*/createElement(StyledTableMUI$1, _extends({
    className: classNames(classes$l.table, className)
  }, restProps), /*#__PURE__*/createElement(TableHead, null, /*#__PURE__*/createElement(HeaderRow, null, headerCells.map(function (cell) {
    var key = formatDate(cell.startDate, WEEK_DAY_OPTIONS);
    return /*#__PURE__*/createElement(HeaderCell, {
      key: key
    }, key);
  }))), /*#__PURE__*/createElement(TableBody, null, cells.map(function (row) {
    return /*#__PURE__*/createElement(Row, {
      key: row[0].startDate.toString()
    }, row.map(function (_ref2) {
      var startDate = _ref2.startDate,
          otherMonth = _ref2.otherMonth,
          today = _ref2.today;
      var selected = areDatesSame(selectedDate, startDate);
      return /*#__PURE__*/createElement(Cell, {
        key: startDate.toString(),
        otherMonth: otherMonth,
        selected: selected,
        today: today,
        onClick: function onClick() {
          onCellClick(startDate);
        }
      }, formatDate(startDate, DAY_OPTIONS));
    }));
  })));
};
process.env.NODE_ENV !== "production" ? Table$1.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerRowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cells: PropTypes.array.isRequired,
  selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number]),
  formatDate: PropTypes.func.isRequired,
  headerCells: PropTypes.array,
  className: PropTypes.string,
  onCellClick: PropTypes.func
} : void 0;
Table$1.defaultProps = {
  className: undefined,
  headerCells: [],
  onCellClick: function onCellClick() {},
  selectedDate: undefined
};

var _excluded$w = ["selectedDate", "firstDayOfWeek", "getCells", "textComponent", "navigationButtonComponent", "navigatorComponent", "rowComponent", "cellComponent", "headerRowComponent", "headerCellComponent", "onSelectedDateChange", "formatDate"];
var Root$2 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Root, _React$PureComponent);

  var _super = _createSuper(Root);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _super.call(this, props);
    var selectedDate = _this.props.selectedDate;
    _this.state = {
      selectedDate: selectedDate,
      currentDate: selectedDate
    };
    _this.onNavigate = _this.onNavigate.bind(_assertThisInitialized(_this));
    _this.onCellClick = _this.onCellClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Root, [{
    key: "onNavigate",
    value: function onNavigate(_ref) {
      var back = _ref.back;
      var currentDateState = this.state.currentDate;
      var nextDate = navigateByOneMonth(currentDateState, back);
      this.setState({
        currentDate: nextDate
      });
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(nextDate) {
      var onSelectedDateChange = this.props.onSelectedDateChange;
      this.setState({
        selectedDate: nextDate,
        currentDate: nextDate
      });
      onSelectedDateChange(nextDate);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedDate = _this$props.selectedDate,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          getCells = _this$props.getCells,
          Text = _this$props.textComponent,
          NavigationButton = _this$props.navigationButtonComponent,
          Navigator = _this$props.navigatorComponent,
          Row = _this$props.rowComponent,
          Cell = _this$props.cellComponent,
          HeaderRow = _this$props.headerRowComponent,
          HeaderCell = _this$props.headerCellComponent,
          onSelectedDateChange = _this$props.onSelectedDateChange,
          formatDate = _this$props.formatDate,
          restProps = _objectWithoutProperties(_this$props, _excluded$w);

      var _this$state = this.state,
          selectedDateState = _this$state.selectedDate,
          currentDate = _this$state.currentDate;
      var cellsData = getCells(currentDate, firstDayOfWeek, 1, Date.now());
      return /*#__PURE__*/createElement("div", restProps, /*#__PURE__*/createElement(Navigator, {
        currentDate: currentDate,
        textComponent: Text,
        navigationButtonComponent: NavigationButton,
        onNavigate: this.onNavigate,
        formatDate: formatDate
      }), /*#__PURE__*/createElement(Table$1, {
        headerCells: cellsData[0],
        selectedDate: selectedDateState,
        cells: cellsData,
        rowComponent: Row,
        cellComponent: Cell,
        headerRowComponent: HeaderRow,
        headerCellComponent: HeaderCell,
        onCellClick: this.onCellClick,
        formatDate: formatDate
      }));
    }
  }]);

  return Root;
}(PureComponent);
process.env.NODE_ENV !== "production" ? Root$2.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  textComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  navigationButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerRowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerCellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  navigatorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  getCells: PropTypes.func.isRequired,
  selectedDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number,
  onSelectedDateChange: PropTypes.func
} : void 0;
Root$2.defaultProps = {
  onSelectedDateChange: function onSelectedDateChange() {},
  firstDayOfWeek: 0
};

var _excluded$x = ["otherMonth", "selected", "today", "children", "className"];
var PREFIX$m = 'Cell';
var classes$m = {
  cell: "".concat(PREFIX$m, "-cell"),
  otherMonth: "".concat(PREFIX$m, "-otherMonth"),
  selected: "".concat(PREFIX$m, "-selected"),
  today: "".concat(PREFIX$m, "-today")
};
var StyledTableCell$5 = styled(TableCell)(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      palette = _ref$theme.palette,
      spacing = _ref$theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$m.cell), {
    userSelect: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    height: spacing(6),
    textAlign: 'center',
    verticalAlign: 'middle',
    '&:last-child': {
      padding: 0
    }
  }), _defineProperty(_ref2, "&.".concat(classes$m.otherMonth), {
    color: palette.text.disabled
  }), _defineProperty(_ref2, "& .".concat(classes$m.selected), {
    background: palette.primary.main,
    color: palette.primary.contrastText,
    display: 'inline-block',
    width: '2.3em',
    lineHeight: 2.3,
    borderRadius: '50%',
    cursor: 'default'
  }), _defineProperty(_ref2, "& .".concat(classes$m.today), {
    color: palette.primary.main,
    fontWeight: 'bold'
  }), _ref2;
});
var Cell$4 = function Cell(_ref3) {
  var _classNames, _classNames2;

  var otherMonth = _ref3.otherMonth,
      selected = _ref3.selected,
      today = _ref3.today,
      children = _ref3.children,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$x);

  return /*#__PURE__*/createElement(StyledTableCell$5, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$m.cell, true), _defineProperty(_classNames, classes$m.otherMonth, otherMonth), _classNames), className)
  }, restProps), /*#__PURE__*/createElement("span", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes$m.selected, selected), _defineProperty(_classNames2, classes$m.today, today && !selected), _classNames2))
  }, children));
};
process.env.NODE_ENV !== "production" ? Cell$4.propTypes = {
  children: PropTypes.node,
  otherMonth: PropTypes.bool,
  selected: PropTypes.bool,
  today: PropTypes.bool,
  className: PropTypes.string
} : void 0;
Cell$4.defaultProps = {
  children: undefined,
  otherMonth: false,
  selected: false,
  today: false,
  className: undefined
};

var _excluded$y = ["children", "className"];
var PREFIX$n = 'HeaderCell';
var classes$n = {
  cell: "".concat(PREFIX$n, "-cell")
};
var StyledTableCell$6 = styled(TableCell)(_defineProperty({}, "&.".concat(classes$n.cell), {
  userSelect: 'none',
  border: 'none',
  padding: 0,
  textAlign: 'center',
  verticalAlign: 'middle',
  '&:last-child': {
    padding: 0
  }
}));
var HeaderCell = function HeaderCell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded$y);

  return /*#__PURE__*/createElement(StyledTableCell$6, _extends({
    className: classNames(_defineProperty({}, classes$n.cell, true), className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? HeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
} : void 0;
HeaderCell.defaultProps = {
  children: undefined,
  className: undefined
};

var _excluded$z = ["children"];
var Row$1 = function Row(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded$z);

  return /*#__PURE__*/createElement(TableRow, restProps, children);
};
process.env.NODE_ENV !== "production" ? Row$1.propTypes = {
  children: PropTypes.node.isRequired
} : void 0;

var _excluded$A = ["className", "currentDate", "textComponent", "navigationButtonComponent", "onNavigate", "formatDate"];
var PREFIX$o = 'Navigator';
var classes$o = {
  navigator: "".concat(PREFIX$o, "-navigator")
};
var StyledToolbar = styled(Toolbar$2)(_defineProperty({}, "&.".concat(classes$o.navigator), {
  paddingLeft: 0,
  paddingRight: 0
}));
var Navigator = function Navigator(_ref) {
  var className = _ref.className,
      currentDate = _ref.currentDate,
      Text = _ref.textComponent,
      NavigationButton = _ref.navigationButtonComponent,
      onNavigate = _ref.onNavigate,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, _excluded$A);

  return /*#__PURE__*/createElement(StyledToolbar, _extends({
    className: classNames(classes$o.navigator, className)
  }, restProps), /*#__PURE__*/createElement(NavigationButton, {
    type: "back",
    onClick: function onClick() {
      onNavigate({
        back: true
      });
    }
  }), /*#__PURE__*/createElement(Text, {
    currentDate: currentDate,
    formatDate: formatDate
  }), /*#__PURE__*/createElement(NavigationButton, {
    type: "forward",
    onClick: function onClick() {
      onNavigate({
        back: false
      });
    }
  }));
};
process.env.NODE_ENV !== "production" ? Navigator.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  textComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  navigationButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  currentDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  formatDate: PropTypes.func.isRequired,
  className: PropTypes.string,
  onNavigate: PropTypes.func
} : void 0;
Navigator.defaultProps = {
  className: undefined,
  onNavigate: function onNavigate() {}
};

var _excluded$B = ["className", "currentDate", "formatDate"];
var PREFIX$p = 'Text';
var classes$p = {
  text: "".concat(PREFIX$p, "-text")
};
var StyledTypography = styled(Typography)(_defineProperty({}, "&.".concat(classes$p.text), {
  userSelect: 'none',
  flex: 1,
  textAlign: 'center'
}));
var Text = function Text(_ref) {
  var className = _ref.className,
      currentDate = _ref.currentDate,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, _excluded$B);

  return /*#__PURE__*/createElement(StyledTypography, _extends({
    variant: "h6",
    className: classNames(_defineProperty({}, classes$p.text, true), className)
  }, restProps), formatDate(currentDate, MONTH_YEAR_OPTIONS));
};
process.env.NODE_ENV !== "production" ? Text.propTypes = {
  currentDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  formatDate: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;
Text.defaultProps = {
  className: undefined
};

var DateNavigator = withComponents({
  Root: Root$1,
  OpenButton: OpenButton,
  Overlay: Overlay,
  NavigationButton: NavigationButton,
  Calendar: Root$2,
  CalendarNavigator: Navigator,
  CalendarCell: Cell$4,
  CalendarRow: Row$1,
  CalendarHeaderCell: HeaderCell,
  CalendarHeaderRow: Row$1,
  CalendarText: Text,
  CalendarNavigationButton: NavigationButton
})(DateNavigator$1);

var _excluded$C = ["headerComponent", "contentComponent", "commandButtonComponent", "recurringIconComponent", "appointmentMeta", "appointmentResources", "showOpenButton", "showCloseButton", "showDeleteButton", "visible", "onHide", "commandButtonIds", "onOpenButtonClick", "onDeleteButtonClick", "formatDate"];
var PREFIX$q = 'Layout';
var classes$q = {
  popover: "".concat(PREFIX$q, "-popover")
};
var StyledPopover = styled(Popover)(_defineProperty({}, "& .".concat(classes$q.popover), _defineProperty({
  borderRadius: '8px',
  width: '400px'
}, "".concat(SMALL_LAYOUT_MEDIA_QUERY), {
  width: '300px'
})));
var verticalTopHorizontalCenterOptions = {
  vertical: 'top',
  horizontal: 'center'
};
var Layout$5 = function Layout(_ref) {
  var Header = _ref.headerComponent,
      Content = _ref.contentComponent,
      commandButtonComponent = _ref.commandButtonComponent,
      recurringIconComponent = _ref.recurringIconComponent,
      appointmentMeta = _ref.appointmentMeta,
      appointmentResources = _ref.appointmentResources,
      showOpenButton = _ref.showOpenButton,
      showCloseButton = _ref.showCloseButton,
      showDeleteButton = _ref.showDeleteButton,
      visible = _ref.visible,
      onHide = _ref.onHide,
      commandButtonIds = _ref.commandButtonIds,
      onOpenButtonClick = _ref.onOpenButtonClick,
      onDeleteButtonClick = _ref.onDeleteButtonClick,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, _excluded$C);

  var target = appointmentMeta.target,
      _appointmentMeta$data = appointmentMeta.data,
      data = _appointmentMeta$data === void 0 ? {} : _appointmentMeta$data;
  return /*#__PURE__*/createElement(StyledPopover, _extends({
    open: visible,
    anchorEl: target,
    onClose: onHide,
    anchorOrigin: verticalTopHorizontalCenterOptions,
    transformOrigin: verticalTopHorizontalCenterOptions,
    PaperProps: {
      className: classes$q.popover
    }
  }, restProps), /*#__PURE__*/createElement(Header, {
    appointmentData: data,
    commandButtonComponent: commandButtonComponent,
    showOpenButton: showOpenButton,
    showCloseButton: showCloseButton,
    showDeleteButton: showDeleteButton,
    commandButtonIds: commandButtonIds,
    onOpenButtonClick: onOpenButtonClick,
    onDeleteButtonClick: onDeleteButtonClick,
    onHide: onHide
  }), /*#__PURE__*/createElement(Content, {
    appointmentData: data,
    appointmentResources: appointmentResources,
    formatDate: formatDate,
    recurringIconComponent: recurringIconComponent
  }));
};
process.env.NODE_ENV !== "production" ? Layout$5.propTypes = {
  // oneOfType is a workaround because withStyles returns react object
  commandButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  headerComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  contentComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  showOpenButton: PropTypes.bool.isRequired,
  showCloseButton: PropTypes.bool.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
  commandButtonIds: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
  onOpenButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func.isRequired,
  appointmentMeta: PropTypes.shape({
    target: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    data: PropTypes.object
  }),
  appointmentResources: PropTypes.array,
  visible: PropTypes.bool,
  onHide: PropTypes.func
} : void 0;
Layout$5.defaultProps = {
  onOpenButtonClick: function onOpenButtonClick() {
    return undefined;
  },
  onHide: function onHide() {
    return undefined;
  },
  appointmentMeta: {},
  appointmentResources: [],
  visible: false
};

var _excluded$D = ["appointmentData", "commandButtonComponent", "showOpenButton", "showCloseButton", "showDeleteButton", "commandButtonIds", "onOpenButtonClick", "onDeleteButtonClick", "onHide", "className", "children"];
var PREFIX$r = 'Header';
var classes$r = {
  head: "".concat(PREFIX$r, "-head"),
  line: "".concat(PREFIX$r, "-line"),
  flexContainer: "".concat(PREFIX$r, "-flexContainer")
};
var StyledDiv$a = styled('div')(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      palette = _ref$theme.palette;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$r.head), {
    position: 'relative',
    paddingLeft: spacing(1),
    paddingRight: spacing(0.5),
    paddingTop: spacing(0.25),
    minHeight: spacing(1.5)
  }), _defineProperty(_ref2, "&.".concat(classes$r.flexContainer), {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  }), _defineProperty(_ref2, "& .".concat(classes$r.line), {
    backgroundColor: palette.action.disabledBackground,
    height: spacing(3.5),
    marginLeft: spacing(1),
    marginRight: spacing(1),
    marginTop: spacing(1.25),
    width: '1px'
  }), _ref2;
});
var Header = function Header(_ref3) {
  var appointmentData = _ref3.appointmentData,
      CommandButton = _ref3.commandButtonComponent,
      showOpenButton = _ref3.showOpenButton,
      showCloseButton = _ref3.showCloseButton,
      showDeleteButton = _ref3.showDeleteButton,
      commandButtonIds = _ref3.commandButtonIds,
      onOpenButtonClick = _ref3.onOpenButtonClick,
      onDeleteButtonClick = _ref3.onDeleteButtonClick,
      onHide = _ref3.onHide,
      className = _ref3.className,
      children = _ref3.children,
      restProps = _objectWithoutProperties(_ref3, _excluded$D);

  var handleOpenButtonClick = function handleOpenButtonClick() {
    onHide();
    onOpenButtonClick();
  };

  return /*#__PURE__*/createElement(StyledDiv$a, _extends({
    className: classNames(classes$r.head, classes$r.flexContainer, className)
  }, restProps), showOpenButton && /*#__PURE__*/createElement(CommandButton, {
    id: commandButtonIds.open,
    onExecute: handleOpenButtonClick
  }), showDeleteButton && /*#__PURE__*/createElement(CommandButton, {
    id: commandButtonIds.delete,
    onExecute: onDeleteButtonClick
  }), children, showCloseButton && /*#__PURE__*/createElement(StyledDiv$a, {
    className: classes$r.flexContainer
  }, /*#__PURE__*/createElement("div", {
    className: classes$r.line
  }), /*#__PURE__*/createElement(CommandButton, {
    id: commandButtonIds.close,
    onExecute: onHide
  })));
};
process.env.NODE_ENV !== "production" ? Header.propTypes = {
  appointmentData: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  commandButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  showOpenButton: PropTypes.bool.isRequired,
  showCloseButton: PropTypes.bool.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
  commandButtonIds: PropTypes.object.isRequired,
  onOpenButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onHide: PropTypes.func
} : void 0;
Header.defaultProps = {
  appointmentData: undefined,
  className: undefined,
  children: undefined,
  onOpenButtonClick: function onOpenButtonClick() {
    return undefined;
  },
  onHide: function onHide() {
    return undefined;
  }
};

var _excluded$E = ["className", "children", "appointmentData", "appointmentResources", "formatDate", "recurringIconComponent"];
var PREFIX$s = 'Content';
var classes$s = {
  content: "".concat(PREFIX$s, "-content"),
  text: "".concat(PREFIX$s, "-text"),
  title: "".concat(PREFIX$s, "-title"),
  icon: "".concat(PREFIX$s, "-icon"),
  lens: "".concat(PREFIX$s, "-lens"),
  lensMini: "".concat(PREFIX$s, "-lensMini"),
  textCenter: "".concat(PREFIX$s, "-textCenter"),
  dateAndTitle: "".concat(PREFIX$s, "-dateAndTitle"),
  titleContainer: "".concat(PREFIX$s, "-titleContainer"),
  contentContainer: "".concat(PREFIX$s, "-contentContainer"),
  resourceContainer: "".concat(PREFIX$s, "-resourceContainer"),
  recurringIcon: "".concat(PREFIX$s, "-recurringIcon"),
  relativeContainer: "".concat(PREFIX$s, "-relativeContainer")
};
var StyledDiv$b = styled('div')(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      palette = _ref$theme.palette,
      typography = _ref$theme.typography,
      resources = _ref.resources;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$s.content), _objectSpread2({
    padding: spacing(1.5, 1),
    paddingTop: spacing(1),
    backgroundColor: palette.background.paper,
    boxSizing: 'border-box'
  }, typography.body2)), _defineProperty(_ref2, "& .".concat(classes$s.text), {
    display: 'inline-block'
  }), _defineProperty(_ref2, "& .".concat(classes$s.title), _objectSpread2(_objectSpread2({}, typography.h6), {}, {
    color: palette.text.secondary,
    fontWeight: typography.fontWeightBold,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })), _defineProperty(_ref2, "& .".concat(classes$s.icon), {
    verticalAlign: 'middle',
    color: palette.action.active
  }), _defineProperty(_ref2, "& .".concat(classes$s.lens), {
    color: getAppointmentColor(300, getResourceColor(resources), palette.primary),
    width: spacing(4.5),
    height: spacing(4.5),
    verticalAlign: 'super',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%,0)'
  }), _defineProperty(_ref2, "& .".concat(classes$s.lensMini), {
    width: spacing(2.5),
    height: spacing(2.5)
  }), _defineProperty(_ref2, "& .".concat(classes$s.textCenter), {
    textAlign: 'center',
    height: spacing(2.5)
  }), _defineProperty(_ref2, "& .".concat(classes$s.dateAndTitle), {
    lineHeight: 1.4
  }), _defineProperty(_ref2, "& .".concat(classes$s.titleContainer), {
    paddingBottom: spacing(2)
  }), _defineProperty(_ref2, "& .".concat(classes$s.contentContainer), {
    paddingBottom: spacing(1.5)
  }), _defineProperty(_ref2, "& .".concat(classes$s.resourceContainer), {
    paddingBottom: spacing(0.25)
  }), _defineProperty(_ref2, "& .".concat(classes$s.recurringIcon), {
    position: 'absolute',
    paddingTop: spacing(0.875),
    left: '50%',
    transform: 'translate(-50%,0)',
    color: palette.background.paper,
    width: spacing(2.625),
    height: spacing(2.625)
  }), _defineProperty(_ref2, "& .".concat(classes$s.relativeContainer), {
    position: 'relative',
    width: '100%',
    height: '100%'
  }), _ref2;
});
var Content = function Content(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      appointmentData = _ref3.appointmentData,
      appointmentResources = _ref3.appointmentResources,
      formatDate = _ref3.formatDate,
      RecurringIcon = _ref3.recurringIconComponent,
      restProps = _objectWithoutProperties(_ref3, _excluded$E);

  var weekDays = viewBoundText(appointmentData.startDate, appointmentData.endDate, WEEKDAY_INTERVAL, appointmentData.startDate, 1, formatDate);
  return /*#__PURE__*/createElement(StyledDiv$b, _extends({
    resources: appointmentResources,
    className: classNames(classes$s.content, className)
  }, restProps), /*#__PURE__*/createElement(Grid, {
    container: true,
    alignItems: "flex-start",
    className: classes$s.titleContainer
  }, /*#__PURE__*/createElement(Grid, {
    item: true,
    xs: 2
  }, /*#__PURE__*/createElement("div", {
    className: classes$s.relativeContainer
  }, /*#__PURE__*/createElement(Lens, {
    className: classes$s.lens
  }), !!appointmentData.rRule && /*#__PURE__*/createElement(RecurringIcon, {
    className: classes$s.recurringIcon
  }))), /*#__PURE__*/createElement(Grid, {
    item: true,
    xs: 10
  }, /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement("div", {
    className: classNames(classes$s.title, classes$s.dateAndTitle)
  }, appointmentData.title), /*#__PURE__*/createElement("div", {
    className: classNames(classes$s.text, classes$s.dateAndTitle)
  }, weekDays)))), /*#__PURE__*/createElement(Grid, {
    container: true,
    alignItems: "center",
    className: classes$s.contentContainer
  }, /*#__PURE__*/createElement(Grid, {
    item: true,
    xs: 2,
    className: classes$s.textCenter
  }, /*#__PURE__*/createElement(AccessTime, {
    className: classes$s.icon
  })), /*#__PURE__*/createElement(Grid, {
    item: true,
    xs: 10
  }, /*#__PURE__*/createElement("div", {
    className: classes$s.text
  }, "".concat(formatDate(appointmentData.startDate, HOUR_MINUTE_OPTIONS), "\n              - ").concat(formatDate(appointmentData.endDate, HOUR_MINUTE_OPTIONS))))), appointmentResources.map(function (resourceItem) {
    return /*#__PURE__*/createElement(Grid, {
      container: true,
      alignItems: "center",
      className: classes$s.resourceContainer,
      key: "".concat(resourceItem.fieldName, "_").concat(resourceItem.id)
    }, /*#__PURE__*/createElement(Grid, {
      item: true,
      xs: 2,
      className: classes$s.textCenter
    }, /*#__PURE__*/createElement("div", {
      className: classes$s.relativeContainer
    }, /*#__PURE__*/createElement(Lens, {
      className: classNames(classes$s.lens, classes$s.lensMini),
      style: {
        color: getAppointmentColor(300, resourceItem.color)
      }
    }))), /*#__PURE__*/createElement(Grid, {
      item: true,
      xs: 10
    }, /*#__PURE__*/createElement("div", {
      className: classes$s.text
    }, resourceItem.text)));
  }), children);
};
process.env.NODE_ENV !== "production" ? Content.propTypes = {
  appointmentData: PropTypes.object,
  appointmentResources: PropTypes.array,
  children: PropTypes.node,
  className: PropTypes.string,
  formatDate: PropTypes.func.isRequired,
  recurringIconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
} : void 0;
Content.defaultProps = {
  appointmentData: undefined,
  appointmentResources: [],
  className: undefined,
  children: undefined
};

var _excluded$F = ["id", "onExecute"];

var getIcon = function getIcon(id) {
  if (id === OPEN_COMMAND_BUTTON) {
    return /*#__PURE__*/createElement(EditIcon, null);
  }

  if (id === CLOSE_COMMAND_BUTTON) {
    return /*#__PURE__*/createElement(CloseIcon, null);
  }

  if (id === DELETE_COMMAND_BUTTON) {
    return /*#__PURE__*/createElement(DeleteIcon, null);
  }

  return null;
};

var CommandButton = function CommandButton(_ref) {
  var id = _ref.id,
      onExecute = _ref.onExecute,
      restProps = _objectWithoutProperties(_ref, _excluded$F);

  return /*#__PURE__*/createElement(IconButton, _extends({
    onClick: onExecute
  }, restProps, {
    size: "large"
  }), getIcon(id));
};
process.env.NODE_ENV !== "production" ? CommandButton.propTypes = {
  id: PropTypes.string,
  onExecute: PropTypes.func
} : void 0;
CommandButton.defaultProps = {
  onExecute: function onExecute() {
    return undefined;
  },
  id: ''
};

var AppointmentTooltip = withComponents({
  Layout: Layout$5,
  Header: Header,
  Content: Content,
  CommandButton: CommandButton,
  RecurringIcon: Repeat
})(AppointmentTooltip$1);

var _excluded$G = ["value", "availableOptions", "onValueChange", "readOnly", "inputClasses"];
var PREFIX$t = 'OutlinedSelect';
var classes$t = {
  root: "".concat(PREFIX$t, "-root"),
  input: "".concat(PREFIX$t, "-input"),
  menuItem: "".concat(PREFIX$t, "-menuItem"),
  inputRoot: "".concat(PREFIX$t, "-inputRoot")
};
var StyledSelect = styled(Select$1)(function (_ref) {
  var typography = _ref.theme.typography;
  return _defineProperty({}, "&.".concat(classes$t.root), {
    fontSize: typography.fontSize + 2
  });
});
var StyledOutlinedInput = styled(OutlinedInput)(function () {
  var _ref3;

  return _ref3 = {}, _defineProperty(_ref3, "& .".concat(classes$t.input), {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }), _defineProperty(_ref3, "&.".concat(classes$t.inputRoot), {
    width: '100%'
  }), _ref3;
});
var OutlinedSelect = /*#__PURE__*/memo(function (_ref4) {
  var value = _ref4.value,
      availableOptions = _ref4.availableOptions,
      onValueChange = _ref4.onValueChange,
      readOnly = _ref4.readOnly,
      inputClasses = _ref4.inputClasses,
      restProps = _objectWithoutProperties(_ref4, _excluded$G);

  var handleChange = function handleChange(event) {
    if (event.target.value !== value) onValueChange(event.target.value);
  };

  return /*#__PURE__*/createElement(StyledSelect, _extends({
    disabled: readOnly,
    classes: {
      root: classes$t.root
    },
    value: value,
    onChange: handleChange,
    input: /*#__PURE__*/createElement(StyledOutlinedInput, {
      classes: inputClasses || {
        input: classes$t.input,
        root: classes$t.inputRoot
      }
    })
  }, restProps), availableOptions.map(function (option) {
    return /*#__PURE__*/createElement(MenuItem, {
      value: option.id,
      key: option.id,
      className: classes$t.menuItem
    }, option.text);
  }));
});
process.env.NODE_ENV !== "production" ? OutlinedSelect.propTypes = {
  onValueChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired
  })),
  readOnly: PropTypes.bool,
  inputClasses: PropTypes.object
} : void 0;
OutlinedSelect.defaultProps = {
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  availableOptions: [],
  inputClasses: null
};

var _excluded$H = ["currentView", "availableViews", "onChange"];
var PREFIX$u = 'Switcher';
var classes$u = {
  input: "".concat(PREFIX$u, "-input"),
  inputRoot: "".concat(PREFIX$u, "-inputRoot")
};
var StyledOutlinedSelect = styled(OutlinedSelect)(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$u.input), _defineProperty({
    padding: spacing(1.25, 1.75),
    paddingRight: spacing(4),
    textTransform: 'uppercase'
  }, "".concat(LAYOUT_MEDIA_QUERY), {
    fontSize: '0.75rem'
  })), _defineProperty(_ref2, "& .".concat(classes$u.inputRoot), {
    marginLeft: spacing(0.5),
    '&:first-of-type': {
      marginLeft: 0
    }
  }), _ref2;
});
var Switcher = /*#__PURE__*/memo(function (_ref3) {
  var currentView = _ref3.currentView,
      availableViews = _ref3.availableViews,
      onChange = _ref3.onChange,
      restProps = _objectWithoutProperties(_ref3, _excluded$H);

  var availableOptions = availableViews.map(function (_ref4) {
    var name = _ref4.name,
        displayName = _ref4.displayName;
    return {
      id: name,
      text: displayName
    };
  });
  return /*#__PURE__*/createElement(StyledOutlinedSelect, _extends({
    value: currentView.name,
    availableOptions: availableOptions,
    onValueChange: onChange,
    inputClasses: {
      input: classes$u.input,
      root: classes$u.inputRoot
    }
  }, restProps));
});
process.env.NODE_ENV !== "production" ? Switcher.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentView: PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired,
  availableViews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }))
} : void 0;
Switcher.defaultProps = {
  availableViews: []
};

var ViewSwitcher = withComponents({
  Switcher: Switcher
})(ViewSwitcher$1);

var _excluded$I = ["setCellElementsMeta", "cellsData", "className", "cellComponent", "rowComponent", "formatDate"];
var PREFIX$v = 'Layout';
var classes$v = {
  table: "".concat(PREFIX$v, "-table")
};
var StyledTable$1 = styled(Table$2)(_defineProperty({}, "&.".concat(classes$v.table), {
  tableLayout: 'fixed'
}));
var Layout$6 = /*#__PURE__*/memo(function (_ref) {
  var setCellElementsMeta = _ref.setCellElementsMeta,
      cellsData = _ref.cellsData,
      className = _ref.className,
      Cell = _ref.cellComponent,
      Row = _ref.rowComponent,
      formatDate = _ref.formatDate,
      restProps = _objectWithoutProperties(_ref, _excluded$I);

  var tableRef = useRef(null);
  useEffect(function () {
    var tableElement = tableRef.current;
    setCellElementsMeta(cellsMeta(tableElement));
  });
  return /*#__PURE__*/createElement(StyledTable$1, _extends({
    ref: tableRef,
    className: classNames(classes$v.table, className)
  }, restProps), /*#__PURE__*/createElement(TableBody, null, /*#__PURE__*/createElement(Row, null, cellsData.map(function (_ref2) {
    var startDate = _ref2.startDate,
        endDate = _ref2.endDate,
        endOfGroup = _ref2.endOfGroup,
        groupingInfo = _ref2.groupingInfo;
    return /*#__PURE__*/createElement(Cell, {
      key: getViewCellKey(startDate, groupingInfo),
      startDate: startDate,
      endDate: endDate,
      endOfGroup: endOfGroup,
      hasRightBorder: endOfGroup,
      groupingInfo: groupingInfo
    });
  }))));
});
process.env.NODE_ENV !== "production" ? Layout$6.propTypes = {
  formatDate: PropTypes.func.isRequired,
  cellsData: PropTypes.arrayOf(Array).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  setCellElementsMeta: PropTypes.func.isRequired,
  className: PropTypes.string
} : void 0;
Layout$6.defaultProps = {
  className: undefined
};

var _excluded$J = ["className", "children", "startDate", "endDate", "endOfGroup", "groupingInfo", "groupOrientation", "hasRightBorder"];
var PREFIX$w = 'Cell';
var classes$w = {
  cell: "".concat(PREFIX$w, "-cell"),
  brightRightBorder: "".concat(PREFIX$w, "-brightRightBorder")
};
var StyledTableCell$7 = styled(TableCell)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$w.cell), {
    padding: 0,
    height: theme.spacing(SPACING_CELL_HEIGHT[VIEW_TYPES.ALL_DAY_PANEL]),
    boxSizing: 'border-box',
    borderRight: getBorder(theme),
    '&:last-child': {
      borderRight: 'none'
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      outline: 0
    },
    'tr:last-child &': {
      borderBottom: 'none'
    }
  }), _defineProperty(_ref2, "&.".concat(classes$w.brightRightBorder), {
    borderRight: getBrightBorder(theme)
  }), _ref2;
});
var Cell$5 = function Cell(_ref3) {
  var _classNames;

  var className = _ref3.className,
      children = _ref3.children,
      startDate = _ref3.startDate,
      endDate = _ref3.endDate,
      endOfGroup = _ref3.endOfGroup,
      groupingInfo = _ref3.groupingInfo,
      groupOrientation = _ref3.groupOrientation,
      hasRightBorder = _ref3.hasRightBorder,
      restProps = _objectWithoutProperties(_ref3, _excluded$J);

  return /*#__PURE__*/createElement(StyledTableCell$7, _extends({
    tabIndex: 0,
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$w.cell, true), _defineProperty(_classNames, classes$w.brightRightBorder, groupOrientation === HORIZONTAL_GROUP_ORIENTATION && (endOfGroup || hasRightBorder)), _classNames), className)
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? Cell$5.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  children: PropTypes.node,
  className: PropTypes.string,
  hasRightBorder: PropTypes.bool,
  endOfGroup: PropTypes.bool,
  groupingInfo: PropTypes.arrayOf(PropTypes.object),
  groupOrientation: PropTypes.oneOf([HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION])
} : void 0;
Cell$5.defaultProps = {
  children: null,
  startDate: undefined,
  endDate: undefined,
  className: undefined,
  hasRightBorder: false,
  endOfGroup: false,
  groupingInfo: undefined,
  groupOrientation: HORIZONTAL_GROUP_ORIENTATION
};

var _excluded$K = ["getMessage", "className", "fixedHeight"];
var PREFIX$x = 'TitleCell';
var classes$x = {
  container: "".concat(PREFIX$x, "-container"),
  content: "".concat(PREFIX$x, "-content"),
  title: "".concat(PREFIX$x, "-title"),
  fixedHeight: "".concat(PREFIX$x, "-fixedHeight")
};
var StyledDiv$c = styled('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$x.container), {
    userSelect: 'none',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative'
  }), _defineProperty(_ref2, "&.".concat(classes$x.fixedHeight), {
    height: theme.spacing(SPACING_CELL_HEIGHT[VIEW_TYPES.ALL_DAY_PANEL]),
    width: '100%'
  }), _defineProperty(_ref2, "&.".concat(classes$x.content), {
    width: theme.spacing(10),
    boxSizing: 'border-box',
    height: theme.spacing(5.75),
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }), _ref2;
});
var StyledTypography$1 = styled(Typography)(function (_ref3) {
  var theme = _ref3.theme;
  return _defineProperty({}, "&.".concat(classes$x.title), _objectSpread2(_objectSpread2({
    paddingRight: theme.spacing(2)
  }, theme.typography.caption), {}, {
    color: theme.palette.text.secondary
  }));
});
var TitleCell = /*#__PURE__*/memo(function (_ref5) {
  var _classNames, _classNames2;

  var getMessage = _ref5.getMessage,
      className = _ref5.className,
      fixedHeight = _ref5.fixedHeight,
      restProps = _objectWithoutProperties(_ref5, _excluded$K);

  return /*#__PURE__*/createElement(StyledDiv$c, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$x.container, true), _defineProperty(_classNames, classes$x.fixedHeight, fixedHeight), _classNames), className)
  }, restProps), /*#__PURE__*/createElement(StyledDiv$c, {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, classes$x.content, true), _defineProperty(_classNames2, classes$x.fixedHeight, fixedHeight), _classNames2), className)
  }, /*#__PURE__*/createElement(StyledTypography$1, {
    className: classes$x.title,
    variant: "body1"
  }, getMessage('allDay'))));
});
TitleCell.propTypes = {
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  fixedHeight: PropTypes.bool
};
TitleCell.defaultProps = {
  className: undefined,
  fixedHeight: false
};

var Container$1 = styled(ContainerBase)(function () {
  return _defineProperty({}, "&.".concat(classes.container), {
    position: 'relative',
    display: 'table',
    minWidth: '100%'
  });
});

var AllDayPanel = withComponents({
  AppointmentLayer: Container,
  Layout: Layout$6,
  Cell: Cell$5,
  Row: Row,
  TitleCell: TitleCell,
  Container: Container$1
})(AllDayPanel$1);

var _excluded$L = ["basicLayoutComponent", "commandLayoutComponent", "recurrenceLayoutComponent", "isRecurrence", "children", "className"];

var _styled$1;
var PREFIX$y = 'Layout';
var classes$y = {
  root: "".concat(PREFIX$y, "-root"),
  container: "".concat(PREFIX$y, "-container"),
  stickyContainer: "".concat(PREFIX$y, "-stickyContainer")
};
var StyledDiv$d = styled('div')((_styled$1 = {}, _defineProperty(_styled$1, "&.".concat(classes$y.root), {
  height: '100%',
  margin: '0 auto',
  overflowY: 'auto'
}), _defineProperty(_styled$1, "& .".concat(classes$y.container), _defineProperty({
  display: 'flex'
}, "".concat(LAYOUT_MEDIA_QUERY), {
  flexDirection: 'column'
})), _defineProperty(_styled$1, "& .".concat(classes$y.stickyContainer), {
  display: 'flex',
  position: 'sticky',
  top: 0,
  zIndex: 1
}), _styled$1));
var Layout$7 = function Layout(_ref) {
  var BasicLayout = _ref.basicLayoutComponent,
      CommandLayout = _ref.commandLayoutComponent,
      RecurrenceLayout = _ref.recurrenceLayoutComponent,
      isRecurrence = _ref.isRecurrence,
      children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded$L);

  return /*#__PURE__*/createElement(StyledDiv$d, _extends({
    className: classNames(classes$y.root, className)
  }, restProps), /*#__PURE__*/createElement("div", {
    className: classes$y.stickyContainer
  }, /*#__PURE__*/createElement(CommandLayout, null)), /*#__PURE__*/createElement("div", {
    className: classes$y.container
  }, /*#__PURE__*/createElement(BasicLayout, null), /*#__PURE__*/createElement(RecurrenceLayout, null)), children);
};
process.env.NODE_ENV !== "production" ? Layout$7.propTypes = {
  basicLayoutComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  commandLayoutComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  recurrenceLayoutComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isRecurrence: PropTypes.bool
} : void 0;
Layout$7.defaultProps = {
  className: undefined,
  isRecurrence: false,
  children: null
};

var _excluded$M = ["value", "placeholder", "className", "readOnly", "onValueChange", "type"];
var PREFIX$z = 'TextEditor';
var classes$z = {
  editor: "".concat(PREFIX$z, "-editor"),
  title: "".concat(PREFIX$z, "-title")
};
var StyledTextField = styled(TextField)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$z.editor), {
    width: '100%',
    marginTop: theme.spacing(0.375),
    marginBottom: theme.spacing(0.125)
  }), _defineProperty(_ref2, "& .".concat(classes$z.title), _objectSpread2({}, theme.typography.h6)), _ref2;
});
var TextEditor = /*#__PURE__*/memo(function (_ref3) {
  var value = _ref3.value,
      placeholder = _ref3.placeholder,
      className = _ref3.className,
      readOnly = _ref3.readOnly,
      onValueChange = _ref3.onValueChange,
      type = _ref3.type,
      restProps = _objectWithoutProperties(_ref3, _excluded$M);

  var textFieldType = type === NUMBER_EDITOR ? 'number' : 'text';
  var notesTextEditor = type === MULTILINE_TEXT_EDITOR;
  return /*#__PURE__*/createElement(StyledTextField, _extends({
    className: classNames(classes$z.editor, className),
    value: value,
    variant: notesTextEditor ? 'outlined' : undefined,
    disabled: readOnly,
    onChange: function onChange(_ref4) {
      var target = _ref4.target;
      return onValueChange(target.value);
    },
    InputProps: {
      className: classNames(_defineProperty({}, classes$z.title, type === TITLE_TEXT_EDITOR))
    },
    multiline: notesTextEditor,
    rows: "5",
    type: textFieldType,
    hiddenLabel: true,
    margin: "normal",
    placeholder: placeholder
  }, restProps));
});
process.env.NODE_ENV !== "production" ? TextEditor.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onValueChange: PropTypes.func,
  type: PropTypes.string
} : void 0;
TextEditor.defaultProps = {
  value: '',
  placeholder: undefined,
  className: undefined,
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  type: ORDINARY_TEXT_EDITOR
};

var _excluded$N = ["children", "locale", "className", "getMessage", "readOnly", "onFieldChange", "appointmentData", "fullSize", "resources", "appointmentResources", "textEditorComponent", "dateEditorComponent", "selectComponent", "labelComponent", "booleanEditorComponent", "resourceEditorComponent"];
var PREFIX$A = 'Layout';
var classes$A = {
  root: "".concat(PREFIX$A, "-root"),
  fullSize: "".concat(PREFIX$A, "-fullSize"),
  halfSize: "".concat(PREFIX$A, "-halfSize"),
  labelWithMargins: "".concat(PREFIX$A, "-labelWithMargins"),
  notesEditor: "".concat(PREFIX$A, "-notesEditor"),
  dateEditor: "".concat(PREFIX$A, "-dateEditor"),
  dividerLabel: "".concat(PREFIX$A, "-dividerLabel"),
  booleanEditors: "".concat(PREFIX$A, "-booleanEditors"),
  dateEditors: "".concat(PREFIX$A, "-dateEditors")
};
var StyledDiv$e = styled('div')(function (_ref) {
  var _mediaMaxWidth, _ref2;

  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      typography = _ref$theme.typography;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$A.root), _defineProperty({
    width: '650px',
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
    paddingLeft: spacing(4),
    paddingRight: spacing(4),
    boxSizing: 'border-box',
    transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)")
  }, "".concat(LAYOUT_MEDIA_QUERY), {
    width: '100%',
    maxWidth: '700px',
    paddingRight: spacing(2),
    paddingLeft: spacing(2),
    paddingBottom: 0
  })), _defineProperty(_ref2, "&.".concat(classes$A.fullSize), {
    paddingBottom: spacing(3)
  }), _defineProperty(_ref2, "&.".concat(classes$A.halfSize), {
    '@media (min-width: 700px) and (max-width: 850px)': {
      width: '400px'
    },
    '@media (min-width: 850px) and (max-width: 1000px)': {
      width: '480px'
    },
    '@media (min-width: 1000px) and (max-width: 1150px)': {
      width: '560px'
    }
  }), _defineProperty(_ref2, "& .".concat(classes$A.labelWithMargins), {
    marginTop: spacing(2)
  }), _defineProperty(_ref2, "& .".concat(classes$A.notesEditor), {
    marginBottom: spacing(0.5),
    marginTop: spacing(0.5)
  }), _defineProperty(_ref2, "& .".concat(classes$A.dateEditor), {
    width: '45%',
    paddingTop: '0px!important',
    marginTop: spacing(2),
    paddingBottom: '0px!important',
    marginBottom: 0
  }), _defineProperty(_ref2, "& .".concat(classes$A.dividerLabel), _objectSpread2(_objectSpread2({}, typography.body2), {}, {
    width: '10%',
    textAlign: 'center',
    paddingTop: spacing(2)
  })), _defineProperty(_ref2, "& .".concat(classes$A.booleanEditors), {
    marginTop: spacing(0.875)
  }), _defineProperty(_ref2, '@media (max-width: 570px)', (_mediaMaxWidth = {}, _defineProperty(_mediaMaxWidth, "& .".concat(classes$A.dateEditors), {
    flexDirection: 'column'
  }), _defineProperty(_mediaMaxWidth, "& .".concat(classes$A.booleanEditors), {
    flexDirection: 'column',
    marginTop: spacing(1.875)
  }), _defineProperty(_mediaMaxWidth, "& .".concat(classes$A.dateEditor), {
    width: '100%',
    '&:first-of-type': {
      marginBottom: 0
    },
    '&:last-child': {
      marginTop: spacing(2)
    }
  }), _defineProperty(_mediaMaxWidth, "& .".concat(classes$A.dividerLabel), {
    display: 'none'
  }), _mediaMaxWidth)), _ref2;
});
var Layout$8 = function Layout(_ref3) {
  var _classNames;

  var children = _ref3.children,
      locale = _ref3.locale,
      className = _ref3.className,
      getMessage = _ref3.getMessage,
      readOnly = _ref3.readOnly,
      onFieldChange = _ref3.onFieldChange,
      appointmentData = _ref3.appointmentData,
      fullSize = _ref3.fullSize,
      resources = _ref3.resources,
      appointmentResources = _ref3.appointmentResources,
      TextEditor = _ref3.textEditorComponent,
      DateEditor = _ref3.dateEditorComponent,
      Select = _ref3.selectComponent,
      Label = _ref3.labelComponent,
      BooleanEditor = _ref3.booleanEditorComponent,
      ResourceEditor = _ref3.resourceEditorComponent,
      restProps = _objectWithoutProperties(_ref3, _excluded$N);

  var changeTitle = useCallback(function (title) {
    return onFieldChange({
      title: title
    });
  }, [onFieldChange]);
  var changeNotes = useCallback(function (notes) {
    return onFieldChange({
      notes: notes
    });
  }, [onFieldChange]);
  var changeStartDate = useCallback(function (startDate) {
    return onFieldChange({
      startDate: startDate
    });
  }, [onFieldChange]);
  var changeEndDate = useCallback(function (endDate) {
    return onFieldChange({
      endDate: endDate
    });
  }, [onFieldChange]);
  var changeAllDay = useCallback(function (allDay) {
    return onFieldChange({
      allDay: allDay
    });
  }, [onFieldChange]);
  var changeResources = useCallback(function (resource) {
    return onFieldChange(resource);
  }, [onFieldChange]);
  var rRule = appointmentData.rRule,
      startDate = appointmentData.startDate;
  var changeFrequency = useCallback(function (value) {
    return handleChangeFrequency(value ? REPEAT_TYPES.DAILY : REPEAT_TYPES.NEVER, rRule, startDate, onFieldChange);
  }, [rRule, startDate, onFieldChange]);
  return /*#__PURE__*/createElement(StyledDiv$e, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$A.root, true), _defineProperty(_classNames, classes$A.fullSize, fullSize), _defineProperty(_classNames, classes$A.halfSize, !fullSize), _classNames), className)
  }, restProps), /*#__PURE__*/createElement(Label, {
    text: getMessage('detailsLabel'),
    type: TITLE
  }), /*#__PURE__*/createElement(TextEditor, {
    placeholder: getMessage('titleLabel'),
    readOnly: readOnly,
    type: TITLE_TEXT_EDITOR,
    value: appointmentData.title,
    onValueChange: changeTitle
  }), /*#__PURE__*/createElement(Grid, {
    container: true,
    alignItems: "center",
    className: classes$A.dateEditors
  }, /*#__PURE__*/createElement(DateEditor, {
    className: classes$A.dateEditor,
    readOnly: readOnly,
    value: appointmentData.startDate,
    onValueChange: changeStartDate,
    locale: locale,
    excludeTime: appointmentData.allDay
  }), /*#__PURE__*/createElement(Label, {
    text: "-",
    className: classes$A.dividerLabel
  }), /*#__PURE__*/createElement(DateEditor, {
    className: classes$A.dateEditor,
    readOnly: readOnly,
    value: appointmentData.endDate,
    onValueChange: changeEndDate,
    locale: locale,
    excludeTime: appointmentData.allDay
  })), /*#__PURE__*/createElement(Grid, {
    container: true,
    className: classes$A.booleanEditors
  }, /*#__PURE__*/createElement(BooleanEditor, {
    label: getMessage('allDayLabel'),
    readOnly: readOnly,
    value: appointmentData.allDay,
    onValueChange: changeAllDay
  }), /*#__PURE__*/createElement(BooleanEditor, {
    label: getMessage('repeatLabel'),
    readOnly: readOnly,
    value: !!appointmentData.rRule,
    onValueChange: changeFrequency
  })), /*#__PURE__*/createElement(Label, {
    text: getMessage('moreInformationLabel'),
    type: TITLE,
    className: classes$A.labelWithMargins
  }), /*#__PURE__*/createElement(TextEditor, {
    placeholder: getMessage('notesLabel'),
    readOnly: readOnly,
    type: MULTILINE_TEXT_EDITOR,
    value: appointmentData.notes,
    onValueChange: changeNotes,
    className: classes$A.notesEditor
  }), resources.map(function (resource) {
    return /*#__PURE__*/createElement(Fragment, {
      key: resource.fieldName
    }, /*#__PURE__*/createElement(ResourceEditor, {
      label: resource.title,
      readOnly: readOnly,
      resource: resource,
      appointmentResources: appointmentResources,
      onResourceChange: changeResources
    }));
  }), children);
};
process.env.NODE_ENV !== "production" ? Layout$8.propTypes = {
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  booleanEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  resourceEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  getMessage: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  resources: PropTypes.array,
  appointmentResources: PropTypes.array,
  readOnly: PropTypes.bool,
  fullSize: PropTypes.bool.isRequired
} : void 0;
Layout$8.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  resources: [],
  appointmentResources: [],
  className: undefined,
  readOnly: false,
  children: null
};

var _excluded$O = ["commandButtonComponent", "onCommitButtonClick", "onCancelButtonClick", "onDeleteButtonClick", "getMessage", "children", "className", "fullSize", "readOnly", "disableSaveButton", "hideDeleteButton"];
var PREFIX$B = 'Layout';
var classes$B = {
  root: "".concat(PREFIX$B, "-root"),
  basic: "".concat(PREFIX$B, "-basic"),
  fullSize: "".concat(PREFIX$B, "-fullSize"),
  line: "".concat(PREFIX$B, "-line")
};
var StyledGrid = styled(Grid)(function (_ref) {
  var _$concat, _ref2;

  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      palette = _ref$theme.palette;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$B.root), {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: spacing(2),
    paddingLeft: spacing(2),
    paddingRight: spacing(4),
    transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)"),
    backgroundColor: palette.background.paper
  }), _defineProperty(_ref2, "&.".concat(classes$B.basic), {
    width: '650px'
  }), _defineProperty(_ref2, "&.".concat(classes$B.fullSize), {
    width: '1150px',
    '@media (min-width: 700px) and (max-width: 850px)': {
      width: '700px'
    },
    '@media (min-width: 850px) and (max-width: 1000px)': {
      width: '850px'
    },
    '@media (min-width: 1000px) and (max-width: 1150px)': {
      width: '1000px'
    }
  }), _defineProperty(_ref2, "".concat(LAYOUT_MEDIA_QUERY), (_$concat = {}, _defineProperty(_$concat, "&.".concat(classes$B.basic), {
    maxWidth: '700px',
    width: '100%'
  }), _defineProperty(_$concat, "&.".concat(classes$B.root), {
    paddingRight: spacing(2),
    paddingLeft: 0,
    paddingTop: spacing(1),
    maxWidth: '700px',
    width: '100%'
  }), _$concat)), _ref2;
});
var StyledDiv$f = styled('div')(function (_ref3) {
  var _ref3$theme = _ref3.theme,
      palette = _ref3$theme.palette,
      spacing = _ref3$theme.spacing;
  return _defineProperty({}, "&.".concat(classes$B.line), {
    backgroundColor: palette.action.disabledBackground,
    height: spacing(4.5),
    width: '1px'
  });
});
var Layout$9 = function Layout(_ref5) {
  var _classNames;

  var CommandButton = _ref5.commandButtonComponent,
      onCommitButtonClick = _ref5.onCommitButtonClick,
      onCancelButtonClick = _ref5.onCancelButtonClick,
      onDeleteButtonClick = _ref5.onDeleteButtonClick,
      getMessage = _ref5.getMessage,
      children = _ref5.children,
      className = _ref5.className,
      fullSize = _ref5.fullSize,
      readOnly = _ref5.readOnly,
      disableSaveButton = _ref5.disableSaveButton,
      hideDeleteButton = _ref5.hideDeleteButton,
      restProps = _objectWithoutProperties(_ref5, _excluded$O);

  return /*#__PURE__*/createElement(StyledGrid, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$B.root, true), _defineProperty(_classNames, classes$B.basic, !fullSize), _defineProperty(_classNames, classes$B.fullSize, fullSize), _classNames), className),
    container: true,
    alignItems: "center"
  }, restProps), /*#__PURE__*/createElement(CommandButton, {
    onExecute: onCancelButtonClick,
    getMessage: getMessage,
    id: CANCEL_BUTTON
  }), !readOnly && /*#__PURE__*/createElement(Fragment, null, !hideDeleteButton && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(CommandButton, {
    onExecute: onDeleteButtonClick,
    getMessage: getMessage,
    id: DELETE_BUTTON
  }), /*#__PURE__*/createElement(StyledDiv$f, {
    className: classes$B.line
  })), /*#__PURE__*/createElement(CommandButton, {
    getMessage: getMessage,
    disabled: disableSaveButton,
    onExecute: onCommitButtonClick,
    id: SAVE_BUTTON
  })), children);
};
process.env.NODE_ENV !== "production" ? Layout$9.propTypes = {
  commandButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  onCommitButtonClick: PropTypes.func.isRequired,
  onCancelButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
  fullSize: PropTypes.bool,
  readOnly: PropTypes.bool,
  children: PropTypes.node,
  disableSaveButton: PropTypes.bool,
  hideDeleteButton: PropTypes.bool
} : void 0;
Layout$9.defaultProps = {
  className: undefined,
  children: undefined,
  fullSize: false,
  readOnly: false,
  disableSaveButton: false,
  hideDeleteButton: false
};

var _excluded$P = ["getMessage", "className", "onExecute"];
var PREFIX$C = 'SaveButton';
var classes$C = {
  button: "".concat(PREFIX$C, "-button"),
  textButton: "".concat(PREFIX$C, "-textButton")
};
var StyledButton$1 = styled(Button$1)(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      palette = _ref$theme.palette;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$C.button), {
    padding: spacing(0.5, 3.5),
    marginLeft: spacing(3),
    height: spacing(4.5),
    '&:first-of-type': {
      marginLeft: 0
    },
    backgroundColor: ensureColor(300, palette.primary),
    '&:hover': {
      backgroundColor: ensureColor(400, palette.primary)
    }
  }), _defineProperty(_ref2, "&.".concat(classes$C.textButton), {
    color: palette.primary.contrastText
  }), _ref2;
});
var SaveButton = /*#__PURE__*/memo(function (_ref3) {
  var _classNames;

  var getMessage = _ref3.getMessage,
      className = _ref3.className,
      onExecute = _ref3.onExecute,
      restProps = _objectWithoutProperties(_ref3, _excluded$P);

  return /*#__PURE__*/createElement(StyledButton$1, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$C.button, true), _defineProperty(_classNames, classes$C.textButton, !restProps.disabled), _classNames), className),
    onClick: onExecute
  }, restProps), getMessage('commitCommand'));
});
SaveButton.propTypes = {
  className: PropTypes.string,
  getMessage: PropTypes.func.isRequired,
  onExecute: PropTypes.func.isRequired
};
SaveButton.defaultProps = {
  className: undefined
};

var _excluded$Q = ["onExecute", "className"];
var PREFIX$D = 'DeleteButton';
var classes$D = {
  button: "".concat(PREFIX$D, "-button")
};
var StyledIconButton$2 = styled(IconButton)(function (_ref) {
  var spacing = _ref.theme.spacing;
  return _defineProperty({}, "&.".concat(classes$D.button), {
    marginRight: spacing(0.5)
  });
});
var DeleteButton = /*#__PURE__*/memo(function (_ref3) {
  var onExecute = _ref3.onExecute,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$Q);

  return /*#__PURE__*/createElement(StyledIconButton$2, _extends({
    className: classNames(classes$D.button, className),
    onClick: onExecute
  }, restProps, {
    size: "large"
  }), /*#__PURE__*/createElement(DeleteIcon, null));
});
DeleteButton.propTypes = {
  className: PropTypes.string,
  onExecute: PropTypes.func.isRequired
};
DeleteButton.defaultProps = {
  className: undefined
};

var _excluded$R = ["onExecute", "className"];
var PREFIX$E = 'CancelButton';
var classes$E = {
  button: "".concat(PREFIX$E, "-button")
};
var StyledIconButton$3 = styled(IconButton)(function () {
  return _defineProperty({}, "&.".concat(classes$E.button), {
    marginRight: 'auto'
  });
});
var CancelButton = /*#__PURE__*/memo(function (_ref2) {
  var onExecute = _ref2.onExecute,
      className = _ref2.className,
      restProps = _objectWithoutProperties(_ref2, _excluded$R);

  return /*#__PURE__*/createElement(StyledIconButton$3, _extends({
    className: classNames(classes$E.button, className),
    onClick: onExecute
  }, restProps, {
    size: "large"
  }), /*#__PURE__*/createElement(CloseIcon, null));
});
CancelButton.propTypes = {
  className: PropTypes.string,
  onExecute: PropTypes.func.isRequired
};
CancelButton.defaultProps = {
  className: undefined
};

var _excluded$S = ["id", "getMessage", "onExecute"];
var CommandButton$1 = /*#__PURE__*/memo(function (_ref) {
  var id = _ref.id,
      getMessage = _ref.getMessage,
      onExecute = _ref.onExecute,
      restProps = _objectWithoutProperties(_ref, _excluded$S);

  switch (id) {
    case SAVE_BUTTON:
      return /*#__PURE__*/createElement(SaveButton, _extends({
        getMessage: getMessage,
        onExecute: onExecute
      }, restProps));

    case DELETE_BUTTON:
      return /*#__PURE__*/createElement(DeleteButton, _extends({
        onExecute: onExecute
      }, restProps));

    case CANCEL_BUTTON:
      return /*#__PURE__*/createElement(CancelButton, _extends({
        onExecute: onExecute
      }, restProps));

    default:
      return null;
  }
});
process.env.NODE_ENV !== "production" ? CommandButton$1.propTypes = {
  id: PropTypes.string.isRequired,
  onExecute: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired
} : void 0;

var _excluded$T = ["children", "visible", "className", "fullSize", "target", "onHide"];
var PREFIX$F = 'Overlay';
var classes$F = {
  root: "".concat(PREFIX$F, "-root"),
  absolutePosition: "".concat(PREFIX$F, "-absolutePosition"),
  paper: "".concat(PREFIX$F, "-paper"),
  fullSize: "".concat(PREFIX$F, "-fullSize"),
  halfSize: "".concat(PREFIX$F, "-halfSize"),
  transition: "".concat(PREFIX$F, "-transition")
};
var StyledDrawer = styled(Drawer)(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$F.root), {
    overflow: 'hidden',
    paddingTop: spacing(2),
    position: 'absolute'
  }), _defineProperty(_ref2, "& .".concat(classes$F.absolutePosition), {
    position: 'absolute'
  }), _defineProperty(_ref2, "& .".concat(classes$F.paper), {
    outline: 'none'
  }), _defineProperty(_ref2, "& .".concat(classes$F.fullSize), _defineProperty({
    height: '100%',
    width: '1150px',
    '@media (min-width: 700px) and (max-width: 850px)': {
      width: '700px'
    },
    '@media (min-width: 850px) and (max-width: 1000px)': {
      width: '850px'
    },
    '@media (min-width: 1000px) and (max-width: 1150px)': {
      width: '1000px'
    }
  }, "".concat(LAYOUT_MEDIA_QUERY), {
    width: '100%',
    maxWidth: '700px'
  })), _defineProperty(_ref2, "& .".concat(classes$F.halfSize), _defineProperty({
    height: '100%',
    width: '650px'
  }, "".concat(LAYOUT_MEDIA_QUERY), {
    width: '100%',
    maxWidth: '700px'
  })), _defineProperty(_ref2, "& .".concat(classes$F.transition), {
    transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)!important")
  }), _ref2;
});
var Overlay$1 = function Overlay(_ref3) {
  var _classNames;

  var children = _ref3.children,
      visible = _ref3.visible,
      className = _ref3.className,
      fullSize = _ref3.fullSize,
      target = _ref3.target,
      onHide = _ref3.onHide,
      restProps = _objectWithoutProperties(_ref3, _excluded$T);

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      previouslyOpen = _React$useState2[0],
      setPreviouslyOpen = _React$useState2[1];

  var paperClasses = classNames((_classNames = {}, _defineProperty(_classNames, classes$F.absolutePosition, true), _defineProperty(_classNames, classes$F.paper, true), _defineProperty(_classNames, classes$F.fullSize, fullSize), _defineProperty(_classNames, classes$F.halfSize, !fullSize), _defineProperty(_classNames, classes$F.transition, visible && previouslyOpen), _classNames));
  return /*#__PURE__*/createElement(StyledDrawer, _extends({
    className: classNames(classes$F.root, className),
    PaperProps: {
      className: paperClasses
    },
    BackdropProps: {
      className: classes$F.absolutePosition
    },
    ModalProps: {
      container: target.current
    },
    SlideProps: {
      onEntered: function onEntered() {
        return setPreviouslyOpen(true);
      },
      onExited: function onExited() {
        return setPreviouslyOpen(false);
      }
    },
    open: visible,
    variant: "temporary",
    anchor: "left",
    transitionDuration: TRANSITIONS_TIME,
    onBackdropClick: onHide
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? Overlay$1.propTypes = {
  children: PropTypes.node.isRequired,
  fullSize: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  className: PropTypes.string,
  target: PropTypes.object
} : void 0;
Overlay$1.defaultProps = {
  className: undefined,
  visible: false,
  target: null
};

var _excluded$U = ["onValueChange", "value", "readOnly", "className", "locale", "excludeTime"];
var DateEditorBase = /*#__PURE__*/memo(function (_ref) {
  var onValueChange = _ref.onValueChange,
      value = _ref.value,
      readOnly = _ref.readOnly,
      className = _ref.className,
      locale = _ref.locale,
      excludeTime = _ref.excludeTime,
      restProps = _objectWithoutProperties(_ref, _excluded$U);

  var memoizedChangeHandler = useCallback(function (nextDate) {
    return nextDate && onValueChange(nextDate.toDate());
  }, [onValueChange]);
  var dateFormat = excludeTime ? 'DD/MM/YYYY' : 'DD/MM/YYYY hh:mm A';
  return /*#__PURE__*/createElement(LocalizationProvider, {
    dateAdapter: AdapterMoment
  }, /*#__PURE__*/createElement(DateTimePicker, _extends({
    disabled: readOnly,
    renderInput: function renderInput(props) {
      return /*#__PURE__*/createElement(TextField, _extends({
        className: className,
        margin: "normal"
      }, props));
    },
    value: value,
    onChange: memoizedChangeHandler,
    inputFormat: dateFormat
  }, restProps)));
});
process.env.NODE_ENV !== "production" ? DateEditorBase.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  excludeTime: PropTypes.bool
} : void 0;
DateEditorBase.defaultProps = {
  locale: 'en-US',
  value: undefined,
  className: undefined,
  readOnly: false,
  excludeTime: false
};
var DateEditor = DateEditorBase;

var _excluded$V = ["text", "className", "type"];
var PREFIX$G = 'Label';
var classes$G = {
  label: "".concat(PREFIX$G, "-label"),
  titleLabel: "".concat(PREFIX$G, "-titleLabel")
};
var StyledTypography$2 = styled(Typography)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$G.label), {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }), _defineProperty(_ref2, "&.".concat(classes$G.titleLabel), {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 5,
    paddingBottom: theme.spacing(1)
  }), _ref2;
});
var Label$1 = /*#__PURE__*/memo(function (_ref3) {
  var _classNames;

  var text = _ref3.text,
      className = _ref3.className,
      type = _ref3.type,
      restProps = _objectWithoutProperties(_ref3, _excluded$V);

  return /*#__PURE__*/createElement(StyledTypography$2, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$G.label, true), _defineProperty(_classNames, classes$G.titleLabel, type === TITLE), _classNames), className)
  }, restProps), text);
});
Label$1.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};
Label$1.defaultProps = {
  text: undefined,
  className: undefined,
  type: ORDINARY_LABEL
};

var _excluded$W = ["label", "value", "readOnly", "onValueChange"];
var PREFIX$H = 'BooleanEditor';
var classes$H = {
  label: "".concat(PREFIX$H, "-label")
};
var StyledFormControlLabel = styled(FormControlLabel)(_defineProperty({}, "&.".concat(classes$H.label), {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  userSelect: 'none'
}));
var BooleanEditor = /*#__PURE__*/memo(function (_ref) {
  var label = _ref.label,
      value = _ref.value,
      readOnly = _ref.readOnly,
      onValueChange = _ref.onValueChange,
      restProps = _objectWithoutProperties(_ref, _excluded$W);

  return /*#__PURE__*/createElement(StyledFormControlLabel, _extends({
    classes: {
      label: classes$H.label
    },
    control: /*#__PURE__*/createElement(Checkbox, {
      color: "primary",
      checked: value,
      onChange: function onChange(_ref2) {
        var target = _ref2.target;
        return onValueChange(target.checked);
      }
    }),
    disabled: readOnly,
    label: label
  }, restProps));
});
BooleanEditor.propTypes = {
  label: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired
};
BooleanEditor.defaultProps = {
  label: undefined,
  readOnly: false,
  value: false
};

var _excluded$X = ["value", "availableOptions", "onValueChange", "readOnly", "className"];
var PREFIX$I = 'FilledSelect';
var classes$I = {
  filledSelect: "".concat(PREFIX$I, "-filledSelect"),
  menuItem: "".concat(PREFIX$I, "-menuItem")
};
var StyledTextField$1 = styled(TextField)(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      typography = _ref$theme.typography,
      spacing = _ref$theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$I.filledSelect), {
    marginTop: spacing(0.375),
    marginBottom: spacing(0.125)
  }), _defineProperty(_ref2, "& .".concat(classes$I.menuItem), {
    fontSize: typography.fontSize,
    textTransform: 'uppercase'
  }), _ref2;
});
var FilledSelect = /*#__PURE__*/memo(function (_ref3) {
  var value = _ref3.value,
      availableOptions = _ref3.availableOptions,
      onValueChange = _ref3.onValueChange,
      readOnly = _ref3.readOnly,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$X);

  var handleChange = function handleChange(event) {
    if (event.target.value !== value) onValueChange(event.target.value);
  };

  return /*#__PURE__*/createElement(StyledTextField$1, _extends({
    select: true,
    className: classNames(classes$I.filledSelect, className),
    value: value,
    onChange: handleChange,
    margin: "normal",
    hiddenLabel: true,
    disabled: readOnly
  }, restProps), availableOptions.map(function (option) {
    return /*#__PURE__*/createElement(MenuItem, {
      value: option.id,
      key: option.id,
      className: classes$I.menuItem
    }, option.text);
  }));
});
process.env.NODE_ENV !== "production" ? FilledSelect.propTypes = {
  onValueChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired
  })),
  readOnly: PropTypes.bool,
  className: PropTypes.string
} : void 0;
FilledSelect.defaultProps = {
  readOnly: false,
  onValueChange: function onValueChange() {
    return undefined;
  },
  availableOptions: [],
  className: undefined
};

var _excluded$Y = ["value", "availableOptions", "onValueChange", "readOnly", "type"];
var Select = /*#__PURE__*/memo(function (_ref) {
  var value = _ref.value,
      availableOptions = _ref.availableOptions,
      onValueChange = _ref.onValueChange,
      readOnly = _ref.readOnly,
      type = _ref.type,
      restProps = _objectWithoutProperties(_ref, _excluded$Y);

  var ResultingSelect = type === STANDARD_SELECT ? FilledSelect : OutlinedSelect;
  return /*#__PURE__*/createElement(ResultingSelect, _extends({
    value: value,
    availableOptions: availableOptions,
    onValueChange: onValueChange,
    readOnly: readOnly
  }, restProps));
});
process.env.NODE_ENV !== "production" ? Select.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  availableOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string.isRequired
  })),
  readOnly: PropTypes.bool,
  type: PropTypes.string
} : void 0;
Select.defaultProps = {
  readOnly: false,
  availableOptions: [],
  type: STANDARD_SELECT
};

var _excluded$Z = ["className", "labelComponent", "textEditorComponent", "repeatEveryLabel", "repeatIntervalLabel", "readOnly", "interval", "changeRecurrenceInterval"];
var PREFIX$J = 'IntervalEditor';
var classes$J = {
  grid: "".concat(PREFIX$J, "-grid"),
  label: "".concat(PREFIX$J, "-label"),
  labelWithMargin: "".concat(PREFIX$J, "-labelWithMargin"),
  textEditor: "".concat(PREFIX$J, "-textEditor")
};
var StyledGrid$1 = styled(Grid)(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$J.grid), {
    marginTop: spacing(1.75)
  }), _defineProperty(_ref2, "& .".concat(classes$J.label), {
    width: '6.5em'
  }), _defineProperty(_ref2, "& .".concat(classes$J.labelWithMargin), {
    marginLeft: '1em',
    width: 'calc((100% - 7.5em) * 4 / 7)'
  }), _defineProperty(_ref2, "& .".concat(classes$J.textEditor), {
    width: 'calc((100% - 7.5em) * 3 / 7)',
    maxWidth: '8em'
  }), _ref2;
});
var IntervalEditor = function IntervalEditor(_ref3) {
  var className = _ref3.className,
      Label = _ref3.labelComponent,
      TextEditor = _ref3.textEditorComponent,
      repeatEveryLabel = _ref3.repeatEveryLabel,
      repeatIntervalLabel = _ref3.repeatIntervalLabel,
      readOnly = _ref3.readOnly,
      interval = _ref3.interval,
      changeRecurrenceInterval = _ref3.changeRecurrenceInterval,
      restProps = _objectWithoutProperties(_ref3, _excluded$Z);

  return /*#__PURE__*/createElement(StyledGrid$1, _extends({
    container: true,
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    className: classNames(classes$J.grid, className)
  }, restProps), /*#__PURE__*/createElement(Label, {
    text: repeatEveryLabel,
    className: classes$J.label
  }), /*#__PURE__*/createElement(TextEditor, {
    readOnly: readOnly,
    value: interval,
    className: classes$J.textEditor,
    type: NUMBER_EDITOR,
    onValueChange: changeRecurrenceInterval
  }), /*#__PURE__*/createElement(Label, {
    text: repeatIntervalLabel,
    className: classes$J.labelWithMargin
  }));
};
process.env.NODE_ENV !== "production" ? IntervalEditor.propTypes = {
  className: PropTypes.string,
  repeatEveryLabel: PropTypes.string.isRequired,
  repeatIntervalLabel: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  interval: PropTypes.number,
  changeRecurrenceInterval: PropTypes.func.isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
} : void 0;
IntervalEditor.defaultProps = {
  className: undefined,
  interval: 1
};

var _excluded$_ = ["weeklyRecurrenceSelectorComponent", "radioGroupComponent", "textEditorComponent", "labelComponent", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "formatDate", "firstDayOfWeek"];
var Daily = function Daily(_ref) {
  var weeklyRecurrenceSelectorComponent = _ref.weeklyRecurrenceSelectorComponent,
      radioGroupComponent = _ref.radioGroupComponent,
      textEditorComponent = _ref.textEditorComponent,
      labelComponent = _ref.labelComponent,
      getMessage = _ref.getMessage,
      readOnly = _ref.readOnly,
      onFieldChange = _ref.onFieldChange,
      appointmentData = _ref.appointmentData,
      selectComponent = _ref.selectComponent,
      formatDate = _ref.formatDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, _excluded$_);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return /*#__PURE__*/createElement(IntervalEditor, _extends({
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('daysLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps));
};
process.env.NODE_ENV !== "production" ? Daily.propTypes = {
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
Daily.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};

var _excluded$$ = ["radioGroupComponent", "textEditorComponent", "labelComponent", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "weeklyRecurrenceSelectorComponent", "formatDate", "firstDayOfWeek"];
var PREFIX$K = 'Weekly';
var classes$K = {
  container: "".concat(PREFIX$K, "-container")
};
var StyledDiv$g = styled('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, "& .".concat(classes$K.container), {
    marginBottom: theme.spacing(2)
  });
});
var Weekly = function Weekly(_ref3) {
  var radioGroupComponent = _ref3.radioGroupComponent,
      textEditorComponent = _ref3.textEditorComponent,
      labelComponent = _ref3.labelComponent,
      getMessage = _ref3.getMessage,
      readOnly = _ref3.readOnly,
      onFieldChange = _ref3.onFieldChange,
      appointmentData = _ref3.appointmentData,
      selectComponent = _ref3.selectComponent,
      WeeklyRecurrenceSelector = _ref3.weeklyRecurrenceSelectorComponent,
      formatDate = _ref3.formatDate,
      firstDayOfWeek = _ref3.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref3, _excluded$$);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return /*#__PURE__*/createElement(StyledDiv$g, restProps, /*#__PURE__*/createElement(IntervalEditor, _extends({
    className: classes$K.container,
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('weeksOnLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), /*#__PURE__*/createElement(WeeklyRecurrenceSelector, {
    rRule: appointmentData.rRule,
    onValueChange: onFieldChange,
    readOnly: readOnly,
    formatDate: formatDate,
    firstDayOfWeek: firstDayOfWeek
  }));
};
process.env.NODE_ENV !== "production" ? Weekly.propTypes = {
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
Weekly.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};

var _excluded$10 = ["radioGroupComponent", "textEditorComponent", "labelComponent", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "weeklyRecurrenceSelectorComponent", "formatDate", "firstDayOfWeek"];
var PREFIX$L = 'Monthly';
var classes$L = {
  container: "".concat(PREFIX$L, "-container")
};
var StyledDiv$h = styled('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, "&.".concat(classes$L.container), {
    marginBottom: theme.spacing(1)
  });
});
var Monthly = function Monthly(_ref3) {
  var RadioGroup = _ref3.radioGroupComponent,
      textEditorComponent = _ref3.textEditorComponent,
      labelComponent = _ref3.labelComponent,
      getMessage = _ref3.getMessage,
      readOnly = _ref3.readOnly,
      onFieldChange = _ref3.onFieldChange,
      appointmentData = _ref3.appointmentData,
      selectComponent = _ref3.selectComponent,
      weeklyRecurrenceSelectorComponent = _ref3.weeklyRecurrenceSelectorComponent,
      formatDate = _ref3.formatDate,
      firstDayOfWeek = _ref3.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref3, _excluded$10);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return /*#__PURE__*/createElement(StyledDiv$h, restProps, /*#__PURE__*/createElement(IntervalEditor, _extends({
    className: classes$L.container,
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('monthsLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), /*#__PURE__*/createElement(RadioGroup, {
    type: MONTHLY_RADIO_GROUP,
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    onFieldChange: onFieldChange,
    appointmentData: appointmentData,
    selectComponent: selectComponent,
    formatDate: formatDate,
    dateEditorComponent: function dateEditorComponent() {
      return null;
    },
    firstDayOfWeek: firstDayOfWeek
  }));
};
process.env.NODE_ENV !== "production" ? Monthly.propTypes = {
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
Monthly.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};

var _excluded$11 = ["radioGroupComponent", "textEditorComponent", "labelComponent", "getMessage", "readOnly", "onFieldChange", "appointmentData", "selectComponent", "weeklyRecurrenceSelectorComponent", "formatDate", "firstDayOfWeek"];
var PREFIX$M = 'Yearly';
var classes$M = {
  radioGroup: "".concat(PREFIX$M, "-radioGroup")
};
var StyledDiv$i = styled('div')(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({}, "& .".concat(classes$M.radioGroup), {
    marginTop: theme.spacing(1)
  });
});
var Yearly = function Yearly(_ref3) {
  var RadioGroup = _ref3.radioGroupComponent,
      textEditorComponent = _ref3.textEditorComponent,
      labelComponent = _ref3.labelComponent,
      getMessage = _ref3.getMessage,
      readOnly = _ref3.readOnly,
      onFieldChange = _ref3.onFieldChange,
      appointmentData = _ref3.appointmentData,
      selectComponent = _ref3.selectComponent,
      weeklyRecurrenceSelectorComponent = _ref3.weeklyRecurrenceSelectorComponent,
      formatDate = _ref3.formatDate,
      firstDayOfWeek = _ref3.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref3, _excluded$11);

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceInterval = useCallback(function (interval) {
    return checkIsNaturalNumber(interval) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
        interval: interval
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  return /*#__PURE__*/createElement(StyledDiv$i, restProps, /*#__PURE__*/createElement(IntervalEditor, _extends({
    repeatEveryLabel: getMessage('repeatEveryLabel'),
    repeatIntervalLabel: getMessage('yearsLabel'),
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    changeRecurrenceInterval: changeRecurrenceInterval,
    interval: recurrenceOptions.interval,
    readOnly: readOnly
  }, restProps)), /*#__PURE__*/createElement(RadioGroup, {
    type: YEARLY_RADIO_GROUP,
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    onFieldChange: onFieldChange,
    appointmentData: appointmentData,
    selectComponent: selectComponent,
    formatDate: formatDate,
    className: classes$M.radioGroup,
    dateEditorComponent: function dateEditorComponent() {
      return null;
    },
    firstDayOfWeek: firstDayOfWeek
  }));
};
process.env.NODE_ENV !== "production" ? Yearly.propTypes = {
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
Yearly.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};

var _excluded$12 = ["radioGroupComponent", "textEditorComponent", "labelComponent", "dateEditorComponent", "selectComponent", "weeklyRecurrenceSelectorComponent", "children", "className", "getMessage", "readOnly", "onFieldChange", "appointmentData", "formatDate", "locale", "visible", "firstDayOfWeek"];
var PREFIX$N = 'Layout';
var classes$N = {
  root: "".concat(PREFIX$N, "-root"),
  visible: "".concat(PREFIX$N, "-visible"),
  invisible: "".concat(PREFIX$N, "-invisible"),
  label: "".concat(PREFIX$N, "-label"),
  repeatLabel: "".concat(PREFIX$N, "-repeatLabel"),
  radioGroup: "".concat(PREFIX$N, "-radioGroup"),
  endRepeatLabel: "".concat(PREFIX$N, "-endRepeatLabel"),
  select: "".concat(PREFIX$N, "-select")
};
var StyledDiv$j = styled('div')(function (_ref) {
  var _$concat2, _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$N.root), _defineProperty({
    padding: 0,
    paddingTop: spacing(3),
    overflow: 'hidden',
    width: 0,
    transition: "all ".concat(TRANSITIONS_TIME, "ms cubic-bezier(0, 0, 0.2, 1)"),
    boxSizing: 'border-box',
    maxWidth: 0,
    opacity: 0
  }, "".concat(LAYOUT_MEDIA_QUERY), {
    minWidth: '100%',
    maxHeight: 0
  })), _defineProperty(_ref2, "&.".concat(classes$N.visible), (_$concat2 = {
    maxWidth: '500px',
    width: '500px',
    padding: spacing(3),
    paddingRight: spacing(4),
    paddingLeft: spacing(1),
    opacity: 1
  }, _defineProperty(_$concat2, "".concat(LAYOUT_MEDIA_QUERY), {
    width: '100%',
    maxWidth: '700px',
    paddingRight: spacing(2),
    paddingLeft: spacing(2),
    maxHeight: 1000
  }), _defineProperty(_$concat2, '@media (min-width: 700px) and (max-width: 850px)', {
    width: '300px'
  }), _defineProperty(_$concat2, '@media (min-width: 850px) and (max-width: 1000px)', {
    width: '370px'
  }), _defineProperty(_$concat2, '@media (min-width: 1000px) and (max-width: 1150px)', {
    width: '440px'
  }), _$concat2)), _defineProperty(_ref2, "&.".concat(classes$N.invisible), {
    maxHeight: 0,
    '@media (min-width: 700px)': {
      maxHeight: '500px'
    }
  }), _defineProperty(_ref2, "& .".concat(classes$N.label), {
    width: '8em'
  }), _defineProperty(_ref2, "& .".concat(classes$N.repeatLabel), {
    marginBottom: spacing(0.375)
  }), _defineProperty(_ref2, "& .".concat(classes$N.radioGroup), {
    marginTop: spacing(0.5)
  }), _defineProperty(_ref2, "& .".concat(classes$N.endRepeatLabel), {
    marginTop: spacing(2)
  }), _defineProperty(_ref2, "& .".concat(classes$N.select), {
    height: '3.8em'
  }), _ref2;
});

var getLayoutComponent = function getLayoutComponent(recurrenceOptions) {
  if (recurrenceOptions) {
    switch (recurrenceOptions.freq) {
      case RRULE_REPEAT_TYPES.DAILY:
        return Daily;

      case RRULE_REPEAT_TYPES.WEEKLY:
        return Weekly;

      case RRULE_REPEAT_TYPES.MONTHLY:
        return Monthly;

      case RRULE_REPEAT_TYPES.YEARLY:
        return Yearly;
    }
  }

  return function () {
    return null;
  };
};

var Layout$a = function Layout(_ref3) {
  var _classNames;

  var RadioGroup = _ref3.radioGroupComponent,
      textEditorComponent = _ref3.textEditorComponent,
      Label = _ref3.labelComponent,
      dateEditorComponent = _ref3.dateEditorComponent,
      Select = _ref3.selectComponent,
      weeklyRecurrenceSelectorComponent = _ref3.weeklyRecurrenceSelectorComponent,
      children = _ref3.children,
      className = _ref3.className,
      getMessage = _ref3.getMessage,
      readOnly = _ref3.readOnly,
      onFieldChange = _ref3.onFieldChange,
      appointmentData = _ref3.appointmentData,
      formatDate = _ref3.formatDate,
      locale = _ref3.locale,
      visible = _ref3.visible,
      firstDayOfWeek = _ref3.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref3, _excluded$12);

  if (!appointmentData.rRule) {
    return null;
  }

  var recurrenceOptions = getRecurrenceOptions(appointmentData.rRule) || {};
  var MainLayoutComponent = getLayoutComponent(recurrenceOptions);
  var frequency = getFrequencyString(recurrenceOptions.freq);
  var rRule = appointmentData.rRule,
      startDate = appointmentData.startDate;
  var changeFrequency = useCallback(function (repeatType) {
    return handleChangeFrequency(repeatType, rRule, startDate, onFieldChange);
  }, [rRule, startDate, onFieldChange]);
  var selectOptions = useMemo(function () {
    return getAvailableRecurrenceOptions(getMessage);
  }, [getMessage]);
  return /*#__PURE__*/createElement(StyledDiv$j, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$N.root, true), _defineProperty(_classNames, classes$N.visible, visible), _defineProperty(_classNames, classes$N.invisible, !visible), _defineProperty(_classNames, "className", className), _classNames))
  }, restProps), /*#__PURE__*/createElement(Label, {
    text: getMessage('repeatLabel'),
    type: TITLE,
    className: classes$N.repeatLabel
  }), /*#__PURE__*/createElement(Select, {
    onValueChange: changeFrequency,
    availableOptions: selectOptions,
    value: frequency,
    type: OUTLINED_SELECT,
    className: classes$N.select,
    readOnly: readOnly
  }), /*#__PURE__*/createElement(MainLayoutComponent, {
    textEditorComponent: textEditorComponent,
    labelComponent: Label,
    getMessage: getMessage,
    readOnly: readOnly,
    radioGroupComponent: RadioGroup,
    appointmentData: appointmentData,
    onFieldChange: onFieldChange,
    selectComponent: Select,
    weeklyRecurrenceSelectorComponent: weeklyRecurrenceSelectorComponent,
    formatDate: formatDate,
    firstDayOfWeek: firstDayOfWeek
  }), /*#__PURE__*/createElement(Label, {
    text: getMessage('endRepeatLabel'),
    className: classes$N.endRepeatLabel
  }), /*#__PURE__*/createElement(RadioGroup, {
    className: classes$N.radioGroup,
    type: END_REPEAT_RADIO_GROUP,
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: Label,
    dateEditorComponent: dateEditorComponent,
    appointmentData: appointmentData,
    onFieldChange: onFieldChange,
    selectComponent: Select,
    formatDate: formatDate,
    locale: locale,
    firstDayOfWeek: firstDayOfWeek
  }), children);
};
process.env.NODE_ENV !== "production" ? Layout$a.propTypes = {
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  radioGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  weeklyRecurrenceSelectorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  onFieldChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  getMessage: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  formatDate: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
Layout$a.defaultProps = {
  locale: 'en-US',
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  className: undefined,
  readOnly: false,
  children: null
};

var _excluded$13 = ["getMessage", "labelComponent", "textEditorComponent", "dateEditorComponent", "onFieldChange", "appointmentData", "locale", "readOnly"];
var PREFIX$O = 'EndRepeatEditor';
var classes$O = {
  occurenceTextEditor: "".concat(PREFIX$O, "-occurenceTextEditor"),
  occurenceLabel: "".concat(PREFIX$O, "-occurenceLabel"),
  label: "".concat(PREFIX$O, "-label"),
  input: "".concat(PREFIX$O, "-input"),
  radioLabel: "".concat(PREFIX$O, "-radioLabel"),
  dateEditor: "".concat(PREFIX$O, "-dateEditor"),
  formControl: "".concat(PREFIX$O, "-formControl"),
  controlLabel: "".concat(PREFIX$O, "-controlLabel")
};
var StyledRadioGroup = styled(RadioGroup$1)(function (_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      typography = _ref$theme.typography;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$O.occurenceTextEditor), {
    width: 'calc((100% - 5.5em) * 3 / 7)',
    maxWidth: '8em'
  }), _defineProperty(_ref2, "& .".concat(classes$O.occurenceLabel), {
    marginLeft: '1em',
    width: 'calc((100% - 5.5em) * 4 / 7)'
  }), _defineProperty(_ref2, "& .".concat(classes$O.label), {
    width: '4.5em'
  }), _defineProperty(_ref2, "& .".concat(classes$O.input), {
    paddingBottom: spacing(2.75)
  }), _defineProperty(_ref2, "& .".concat(classes$O.radioLabel), {
    fontSize: typography.fontSize + 1
  }), _defineProperty(_ref2, "& .".concat(classes$O.dateEditor), {
    width: 'calc(100% - 4.5em)'
  }), _defineProperty(_ref2, "& .".concat(classes$O.formControl), {
    marginRight: 0
  }), _defineProperty(_ref2, "& .".concat(classes$O.controlLabel), {
    width: '100%'
  }), _ref2;
});
var EndRepeatEditor = function EndRepeatEditor(_ref3) {
  var getMessage = _ref3.getMessage,
      Label = _ref3.labelComponent,
      TextEditor = _ref3.textEditorComponent,
      DateEditor = _ref3.dateEditorComponent,
      onFieldChange = _ref3.onFieldChange,
      appointmentData = _ref3.appointmentData,
      locale = _ref3.locale,
      readOnly = _ref3.readOnly,
      restProps = _objectWithoutProperties(_ref3, _excluded$13);

  var _React$useState = useState(1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var _React$useState3 = useState(appointmentData.endDate),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      endDate = _React$useState4[0],
      setEndDate = _React$useState4[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeRecurrenceCount = useCallback(function (nextCount) {
    return checkIsNaturalNumber(nextCount) && onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
        count: nextCount
      }))
    });
  }, [recurrenceOptions, onFieldChange]);
  var changeRecurrenceEndDate = useCallback(function (date) {
    if (isDateValid(date)) {
      onFieldChange({
        rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
          until: date
        }))
      });
    }
  }, [recurrenceOptions, onFieldChange]);
  var recurrenceCount = recurrenceOptions.count || count;
  var recurrenceEndDate = recurrenceOptions.until || endDate;
  var value;

  if (recurrenceOptions.count) {
    value = 'endAfter';
  } else if (recurrenceOptions.until) {
    value = 'endBy';
  } else {
    value = 'never';
  }

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    var change;

    switch (event.target.value) {
      case 'endAfter':
        setEndDate(recurrenceOptions.until || endDate);
        change = {
          count: count,
          until: undefined
        };
        break;

      case 'endBy':
        setCount(recurrenceOptions.count || count);
        change = {
          count: undefined,
          until: endDate
        };
        break;

      case 'never':
        setEndDate(recurrenceOptions.until || endDate);
        setCount(recurrenceOptions.count || count);
        change = {
          count: undefined,
          until: undefined
        };
        break;
    }

    onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), change))
    });
  };

  return /*#__PURE__*/createElement(StyledRadioGroup, _extends({
    onChange: onRadioGroupValueChange,
    value: value
  }, restProps), /*#__PURE__*/createElement(FormControlLabel, {
    value: "never",
    control: /*#__PURE__*/createElement(Radio, {
      color: "primary"
    }),
    label: getMessage('never'),
    classes: {
      label: classes$O.radioLabel
    },
    disabled: readOnly
  }), /*#__PURE__*/createElement(FormControlLabel, {
    className: classes$O.formControl,
    value: "endAfter",
    classes: {
      label: classes$O.controlLabel
    },
    control: /*#__PURE__*/createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly,
    label: /*#__PURE__*/createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, /*#__PURE__*/createElement(Label, {
      className: classes$O.label,
      text: getMessage('onLabel')
    }), /*#__PURE__*/createElement(TextEditor, {
      readOnly: readOnly || value !== 'endAfter',
      className: classes$O.occurenceTextEditor,
      value: recurrenceCount,
      type: NUMBER_EDITOR,
      onValueChange: changeRecurrenceCount
    }), /*#__PURE__*/createElement(Label, {
      className: classes$O.occurenceLabel,
      text: getMessage('occurrencesLabel')
    }))
  }), /*#__PURE__*/createElement(FormControlLabel, {
    className: classes$O.formControl,
    classes: {
      label: classes$O.controlLabel
    },
    value: "endBy",
    disabled: readOnly,
    control: /*#__PURE__*/createElement(Radio, {
      color: "primary"
    }),
    label: /*#__PURE__*/createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center"
    }, /*#__PURE__*/createElement(Label, {
      className: classes$O.label,
      text: getMessage('afterLabel')
    }), /*#__PURE__*/createElement(DateEditor, {
      className: classes$O.dateEditor,
      readOnly: readOnly || value !== 'endBy',
      value: recurrenceEndDate,
      onValueChange: changeRecurrenceEndDate,
      allowKeyboardControl: false,
      locale: locale,
      excludeTime: appointmentData.allDay
    }))
  }));
};
process.env.NODE_ENV !== "production" ? EndRepeatEditor.propTypes = {
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  getMessage: PropTypes.func,
  onFieldChange: PropTypes.func,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  readOnly: PropTypes.bool
} : void 0;
EndRepeatEditor.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false
};

var _excluded$14 = ["getMessage", "labelComponent", "textEditorComponent", "selectComponent", "readOnly", "appointmentData", "formatDate", "onFieldChange", "firstDayOfWeek"];
var PREFIX$P = 'MonthlyEditor';
var classes$P = {
  textEditor: "".concat(PREFIX$P, "-textEditor"),
  input: "".concat(PREFIX$P, "-input"),
  select: "".concat(PREFIX$P, "-select"),
  longSelect: "".concat(PREFIX$P, "-longSelect"),
  label: "".concat(PREFIX$P, "-label"),
  longLabel: "".concat(PREFIX$P, "-longLabel"),
  grid: "".concat(PREFIX$P, "-grid"),
  formControl: "".concat(PREFIX$P, "-formControl"),
  controlLabel: "".concat(PREFIX$P, "-controlLabel")
};
var StyledRadioGroup$1 = styled(RadioGroup$1)(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$P.textEditor), {
    width: 'calc((100% - 5.5em) * 3 / 7)',
    maxWidth: '12em',
    marginRight: '1em'
  }), _defineProperty(_ref2, "& .".concat(classes$P.input), {
    paddingBottom: spacing(2.75)
  }), _defineProperty(_ref2, "& .".concat(classes$P.select), {
    width: 'calc((100% - 5.5em) * 3 / 7)',
    maxWidth: '8em'
  }), _defineProperty(_ref2, "& .".concat(classes$P.longSelect), {
    width: 'calc((100% - 5.5em) * 4 / 7)',
    minWidth: 'calc(100% - 13.5em)',
    marginLeft: '1em'
  }), _defineProperty(_ref2, "& .".concat(classes$P.label), {
    width: '4.5em'
  }), _defineProperty(_ref2, "& .".concat(classes$P.longLabel), {
    width: 'calc((100% - 5.5em) * 4 / 7)',
    minWidth: 'calc(100% - 14em)'
  }), _defineProperty(_ref2, "& .".concat(classes$P.grid), {
    marginTop: spacing(1),
    marginBottom: spacing(1)
  }), _defineProperty(_ref2, "& .".concat(classes$P.formControl), {
    marginRight: 0
  }), _defineProperty(_ref2, "& .".concat(classes$P.controlLabel), {
    width: '100%'
  }), _ref2;
});
var MonthlyEditor = function MonthlyEditor(_ref3) {
  var getMessage = _ref3.getMessage,
      Label = _ref3.labelComponent,
      TextEditor = _ref3.textEditorComponent,
      Select = _ref3.selectComponent,
      readOnly = _ref3.readOnly,
      appointmentData = _ref3.appointmentData,
      formatDate = _ref3.formatDate,
      onFieldChange = _ref3.onFieldChange,
      firstDayOfWeek = _ref3.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref3, _excluded$14);

  var _useState = useState(appointmentData.startDate.getDate()),
      _useState2 = _slicedToArray(_useState, 2),
      dayNumber = _useState2[0],
      setDayNumber = _useState2[1];

  var _useState3 = useState(Math.trunc((appointmentData.startDate.getDate() - 1) / 7)),
      _useState4 = _slicedToArray(_useState3, 2),
      stateWeekNumber = _useState4[0],
      setStateWeekNumber = _useState4[1];

  var _useState5 = useState(appointmentData.startDate.getDay()),
      _useState6 = _slicedToArray(_useState5, 2),
      stateDayOfWeek = _useState6[0],
      setStateDayOfWeek = _useState6[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = React__default.useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeByMonthDay = React__default.useCallback(function (nextByMonthDay) {
    return onFieldChange({
      rRule: handleStartDateChange(nextByMonthDay, recurrenceOptions)
    });
  }, [recurrenceOptions]);

  var _getRadioGroupDisplay = getRadioGroupDisplayData(recurrenceOptions, stateDayOfWeek, stateWeekNumber, dayNumber, 'onDayNumber', 'onDayOfWeek'),
      dayOfWeek = _getRadioGroupDisplay.dayOfWeek,
      weekNumber = _getRadioGroupDisplay.weekNumber,
      dayNumberTextField = _getRadioGroupDisplay.dayNumberTextField,
      value = _getRadioGroupDisplay.radioGroupValue;

  var changeWeekNumber = React__default.useCallback(function (nextWeekNumber) {
    return onFieldChange({
      rRule: handleToDayOfWeekChange(nextWeekNumber, dayOfWeek, recurrenceOptions)
    });
  }, [recurrenceOptions, dayOfWeek]);
  var weekNumbers = React__default.useMemo(function () {
    return getWeekNumberLabels(getMessage);
  }, [getMessage]);
  var changeDayOfWeek = React__default.useCallback(function (nextDayOfWeek) {
    return onFieldChange({
      rRule: handleToDayOfWeekChange(weekNumber, nextDayOfWeek, recurrenceOptions)
    });
  }, [recurrenceOptions, weekNumber]);
  var daysOfWeek = React__default.useMemo(function () {
    return getDaysOfWeek(formatDate, firstDayOfWeek);
  }, [formatDate, firstDayOfWeek]);
  var onDayNumberReadOnly = readOnly || value !== 'onDayNumber';
  var onDayOfWeekReadOnly = readOnly || value !== 'onDayOfWeek';

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    switch (event.target.value) {
      case 'onDayNumber':
        setStateWeekNumber(weekNumber);
        setStateDayOfWeek(dayOfWeek);
        onFieldChange({
          rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
            bymonthday: dayNumber,
            byweekday: undefined
          }))
        });
        break;

      case 'onDayOfWeek':
        setDayNumber(recurrenceOptions.bymonthday || dayNumber);
        onFieldChange({
          rRule: handleToDayOfWeekChange(stateWeekNumber, stateDayOfWeek, recurrenceOptions)
        });
        break;
    }
  };

  return /*#__PURE__*/React__default.createElement(StyledRadioGroup$1, _extends({
    onChange: onRadioGroupValueChange,
    value: value
  }, restProps), /*#__PURE__*/React__default.createElement(FormControlLabel, {
    className: classes$P.formControl,
    value: "onDayNumber",
    control: /*#__PURE__*/React__default.createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly,
    label: /*#__PURE__*/React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center",
      className: classes$P.grid
    }, /*#__PURE__*/React__default.createElement(Label, {
      text: getMessage('onLabel'),
      className: classes$P.label
    }), /*#__PURE__*/React__default.createElement(TextEditor, {
      readOnly: onDayNumberReadOnly,
      value: dayNumberTextField,
      className: classes$P.textEditor,
      type: NUMBER_EDITOR,
      onValueChange: changeByMonthDay
    }), /*#__PURE__*/React__default.createElement(Label, {
      text: getMessage('ofEveryMonthLabel'),
      className: classes$P.longLabel
    }))
  }), /*#__PURE__*/React__default.createElement(FormControlLabel, {
    value: "onDayOfWeek",
    className: classes$P.formControl,
    classes: {
      label: classes$P.controlLabel
    },
    control: /*#__PURE__*/React__default.createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly,
    label: /*#__PURE__*/React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justify: "flex-start",
      alignItems: "center",
      className: classes$P.grid
    }, /*#__PURE__*/React__default.createElement(Label, {
      text: getMessage('theLabel'),
      className: classes$P.label
    }), /*#__PURE__*/React__default.createElement(Select, {
      readOnly: onDayOfWeekReadOnly,
      onValueChange: changeWeekNumber,
      value: weekNumber,
      availableOptions: weekNumbers,
      className: classes$P.select
    }), /*#__PURE__*/React__default.createElement(Select, {
      readOnly: onDayOfWeekReadOnly,
      onValueChange: changeDayOfWeek,
      value: dayOfWeek,
      availableOptions: daysOfWeek,
      className: classes$P.longSelect
    }))
  }));
};
process.env.NODE_ENV !== "production" ? MonthlyEditor.propTypes = {
  getMessage: PropTypes.func,
  onFieldChange: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  readOnly: PropTypes.bool,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
MonthlyEditor.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  readOnly: false
};

var _excluded$15 = ["getMessage", "labelComponent", "textEditorComponent", "selectComponent", "readOnly", "readOnlyEditors", "month", "changeMonth", "months", "dayNumber", "changeByMonthDay", "className"];
var PREFIX$Q = 'ChangeMonthEditor';
var classes$Q = {
  textEditor: "".concat(PREFIX$Q, "-textEditor"),
  label: "".concat(PREFIX$Q, "-label"),
  select: "".concat(PREFIX$Q, "-select"),
  formControl: "".concat(PREFIX$Q, "-formControl"),
  controlLabel: "".concat(PREFIX$Q, "-controlLabel")
};
var StyledFormControlLabel$1 = styled(FormControlLabel)(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$Q.formControl), {
    marginRight: 0,
    marginTop: spacing(1),
    marginBottom: spacing(1)
  }), _defineProperty(_ref2, "&.".concat(classes$Q.controlLabel), {
    width: '100%'
  }), _ref2;
});
var ChangeMonthEditor = /*#__PURE__*/React__default.memo(function (_ref3) {
  var getMessage = _ref3.getMessage,
      Label = _ref3.labelComponent,
      TextEditor = _ref3.textEditorComponent,
      Select = _ref3.selectComponent,
      readOnly = _ref3.readOnly,
      readOnlyEditors = _ref3.readOnlyEditors,
      month = _ref3.month,
      changeMonth = _ref3.changeMonth,
      months = _ref3.months,
      dayNumber = _ref3.dayNumber,
      changeByMonthDay = _ref3.changeByMonthDay,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$15);

  var StyledLabel = styled(Label)(function () {
    return _defineProperty({}, "&.".concat(classes$Q.label), {
      width: '4.5em'
    });
  });
  var StyledSelect = styled(Select)(function () {
    return _defineProperty({}, "&.".concat(classes$Q.select), {
      width: 'calc((100% - 5.5em) * 3 / 7)',
      maxWidth: '8em'
    });
  });
  var StyledTextEditor = styled(TextEditor)(function () {
    return _defineProperty({}, "&.".concat(classes$Q.textEditor), {
      width: 'calc((100% - 5.5em) * 4 / 7)',
      minWidth: 'calc(100% - 13.5em)',
      marginLeft: '1em'
    });
  });
  return /*#__PURE__*/React__default.createElement(StyledFormControlLabel$1, _extends({
    value: "onDayAndMonth",
    className: classNames(classes$Q.formControl, className),
    classes: {
      label: classes$Q.controlLabel
    },
    control: /*#__PURE__*/React__default.createElement(Radio, {
      color: "primary"
    }),
    disabled: readOnly
  }, restProps, {
    label: /*#__PURE__*/React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    }, /*#__PURE__*/React__default.createElement(StyledLabel, {
      text: getMessage('everyLabel'),
      className: classes$Q.label
    }), /*#__PURE__*/React__default.createElement(StyledSelect, {
      className: classes$Q.select,
      value: month,
      onValueChange: changeMonth,
      readOnly: readOnlyEditors,
      availableOptions: months
    }), /*#__PURE__*/React__default.createElement(StyledTextEditor, {
      className: classes$Q.textEditor,
      readOnly: readOnlyEditors,
      value: dayNumber,
      type: NUMBER_EDITOR,
      onValueChange: changeByMonthDay
    }))
  }));
});
process.env.NODE_ENV !== "production" ? ChangeMonthEditor.propTypes = {
  getMessage: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  readOnly: PropTypes.bool,
  month: PropTypes.number.isRequired,
  changeMonth: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  dayNumber: PropTypes.number.isRequired,
  changeByMonthDay: PropTypes.func.isRequired,
  className: PropTypes.string,
  readOnlyEditors: PropTypes.bool
} : void 0;
ChangeMonthEditor.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false,
  className: undefined,
  readOnlyEditors: false
};

var _excluded$16 = ["getMessage", "labelComponent", "selectComponent", "readOnly", "readOnlyEditors", "className", "weekNumber", "weekNumbers", "changeWeekNumber", "month", "months", "changeMonth", "dayOfWeek", "daysOfWeek", "changeDayOfWeek"];
var PREFIX$R = 'ChangeWeekNumberEditor';
var classes$R = {
  label: "".concat(PREFIX$R, "-label"),
  select: "".concat(PREFIX$R, "-select"),
  longSelect: "".concat(PREFIX$R, "-longSelect"),
  formControlLabel: "".concat(PREFIX$R, "-formControlLabel"),
  formControl: "".concat(PREFIX$R, "-formControl"),
  doubleSelect: "".concat(PREFIX$R, "-doubleSelect"),
  radioButton: "".concat(PREFIX$R, "-radioButton"),
  controlLabel: "".concat(PREFIX$R, "-controlLabel")
};
var StyledDiv$k = styled('div')(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$R.label), {
    width: '4.5em'
  }), _defineProperty(_ref2, "& .".concat(classes$R.select), {
    width: 'calc((100% - 5.5em) * 3 / 7)',
    maxWidth: '8em'
  }), _defineProperty(_ref2, "& .".concat(classes$R.longSelect), {
    width: 'calc((100% - 5.5em) * 4 / 7)',
    minWidth: 'calc(100% - 13.5em)',
    marginLeft: '1em'
  }), _defineProperty(_ref2, "& .".concat(classes$R.doubleSelect), {
    marginLeft: '4.5em',
    width: 'calc(100% - 4.5em)',
    marginTop: spacing(1)
  }), _ref2;
});
var StyledFormControlLabel$2 = styled(FormControlLabel)(function (_ref3) {
  var _ref4;

  var spacing = _ref3.theme.spacing;
  return _ref4 = {}, _defineProperty(_ref4, "&.".concat(classes$R.formControlLabel), {
    alignItems: 'flex-start'
  }), _defineProperty(_ref4, "&.".concat(classes$R.formControl), {
    marginRight: 0,
    marginTop: spacing(1),
    marginBottom: spacing(1)
  }), _defineProperty(_ref4, "&.".concat(classes$R.controlLabel), {
    width: '100%'
  }), _ref4;
});
var StyledRadio = styled(Radio)(function (_ref5) {
  var spacing = _ref5.theme.spacing;
  return _defineProperty({}, "&.".concat(classes$R.radioButton), {
    marginTop: spacing(0.75)
  });
});
var ChangeWeekNumberEditor = /*#__PURE__*/React__default.memo(function (_ref7) {
  var getMessage = _ref7.getMessage,
      Label = _ref7.labelComponent,
      Select = _ref7.selectComponent,
      readOnly = _ref7.readOnly,
      readOnlyEditors = _ref7.readOnlyEditors,
      className = _ref7.className,
      weekNumber = _ref7.weekNumber,
      weekNumbers = _ref7.weekNumbers,
      changeWeekNumber = _ref7.changeWeekNumber,
      month = _ref7.month,
      months = _ref7.months,
      changeMonth = _ref7.changeMonth,
      dayOfWeek = _ref7.dayOfWeek,
      daysOfWeek = _ref7.daysOfWeek,
      changeDayOfWeek = _ref7.changeDayOfWeek,
      restProps = _objectWithoutProperties(_ref7, _excluded$16);

  return /*#__PURE__*/React__default.createElement(StyledFormControlLabel$2, _extends({
    value: "onDayOfWeek",
    className: classNames(classes$R.formControlLabel, classes$R.formControl, className),
    classes: {
      label: classes$R.controlLabel
    },
    control: /*#__PURE__*/React__default.createElement(StyledRadio, {
      color: "primary",
      className: classes$R.radioButton
    }),
    disabled: readOnly
  }, restProps, {
    label: /*#__PURE__*/React__default.createElement(StyledDiv$k, null, /*#__PURE__*/React__default.createElement(Grid, {
      container: true,
      direction: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    }, /*#__PURE__*/React__default.createElement(Label, {
      className: classes$R.label,
      text: getMessage('theLabel')
    }), /*#__PURE__*/React__default.createElement(Select, {
      className: classes$R.select,
      value: weekNumber,
      onValueChange: changeWeekNumber,
      readOnly: readOnlyEditors,
      availableOptions: weekNumbers
    }), /*#__PURE__*/React__default.createElement(Select, {
      className: classes$R.longSelect,
      value: dayOfWeek,
      onValueChange: changeDayOfWeek,
      readOnly: readOnlyEditors,
      availableOptions: daysOfWeek
    })), /*#__PURE__*/React__default.createElement(Select, {
      className: classes$R.doubleSelect,
      value: month,
      onValueChange: changeMonth,
      readOnly: readOnlyEditors,
      availableOptions: months
    }))
  }));
});
ChangeWeekNumberEditor.propTypes = {
  getMessage: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  readOnly: PropTypes.bool,
  month: PropTypes.number.isRequired,
  changeMonth: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  weekNumber: PropTypes.number.isRequired,
  changeWeekNumber: PropTypes.func.isRequired,
  weekNumbers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  dayOfWeek: PropTypes.number.isRequired,
  changeDayOfWeek: PropTypes.func.isRequired,
  daysOfWeek: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string,
  readOnlyEditors: PropTypes.bool
};
ChangeWeekNumberEditor.defaultProps = {
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false,
  className: undefined,
  readOnlyEditors: false
};

var _excluded$17 = ["getMessage", "labelComponent", "textEditorComponent", "selectComponent", "readOnly", "appointmentData", "formatDate", "onFieldChange", "firstDayOfWeek"];

var getCurrentMonth = function getCurrentMonth(recurrenceOptions, appointmentData) {
  if (recurrenceOptions.bymonth) {
    return recurrenceOptions.bymonth;
  }

  return appointmentData.startDate.getMonth() + 1;
};

var YearlyEditor = function YearlyEditor(_ref) {
  var getMessage = _ref.getMessage,
      Label = _ref.labelComponent,
      TextEditor = _ref.textEditorComponent,
      Select = _ref.selectComponent,
      readOnly = _ref.readOnly,
      appointmentData = _ref.appointmentData,
      formatDate = _ref.formatDate,
      onFieldChange = _ref.onFieldChange,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, _excluded$17);

  var _useState = useState(appointmentData.startDate.getDate()),
      _useState2 = _slicedToArray(_useState, 2),
      dayNumber = _useState2[0],
      setDayNumber = _useState2[1];

  var _useState3 = useState(Math.trunc((appointmentData.startDate.getDate() - 1) / 7)),
      _useState4 = _slicedToArray(_useState3, 2),
      stateWeekNumber = _useState4[0],
      setStateWeekNumber = _useState4[1];

  var _useState5 = useState(appointmentData.startDate.getDay()),
      _useState6 = _slicedToArray(_useState5, 2),
      stateDayOfWeek = _useState6[0],
      setStateDayOfWeek = _useState6[1];

  var rRule = appointmentData.rRule;
  var recurrenceOptions = React__default.useMemo(function () {
    return getRecurrenceOptions(rRule) || {};
  }, [rRule]);
  var changeByMonthDay = React__default.useCallback(function (nextByMonthDay) {
    return onFieldChange({
      rRule: handleStartDateChange(nextByMonthDay, recurrenceOptions)
    });
  }, [recurrenceOptions]);

  var _getRadioGroupDisplay = getRadioGroupDisplayData(recurrenceOptions, stateDayOfWeek, stateWeekNumber, dayNumber, 'onDayAndMonth', 'onDayOfWeek'),
      dayOfWeek = _getRadioGroupDisplay.dayOfWeek,
      weekNumber = _getRadioGroupDisplay.weekNumber,
      dayNumberTextField = _getRadioGroupDisplay.dayNumberTextField,
      value = _getRadioGroupDisplay.radioGroupValue;

  var month = getCurrentMonth(recurrenceOptions, appointmentData);
  var changeMonth = React__default.useCallback(function (nextMonth) {
    return onFieldChange({
      rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
        bymonth: nextMonth
      }))
    });
  }, [recurrenceOptions]);
  var months = React__default.useMemo(function () {
    return getMonths(formatDate);
  }, [formatDate]);
  var monthsWithOf = React__default.useMemo(function () {
    return getMonthsWithOf(getMessage, formatDate);
  }, [getMessage, formatDate]);
  var changeWeekNumber = React__default.useCallback(function (nextWeekNumber) {
    return onFieldChange({
      rRule: handleToDayOfWeekChange(nextWeekNumber, dayOfWeek, recurrenceOptions)
    });
  }, [recurrenceOptions, dayOfWeek]);
  var weekNumbers = React__default.useMemo(function () {
    return getWeekNumberLabels(getMessage);
  }, [getMessage]);
  var changeDayOfWeek = React__default.useCallback(function (nextDayOfWeek) {
    return onFieldChange({
      rRule: handleToDayOfWeekChange(weekNumber, nextDayOfWeek, recurrenceOptions)
    });
  }, [recurrenceOptions, weekNumber]);
  var daysOfWeek = React__default.useMemo(function () {
    return getDaysOfWeek(formatDate, firstDayOfWeek);
  }, [formatDate, firstDayOfWeek]);
  var onDayAndMonthReadOnly = readOnly || value !== 'onDayAndMonth';
  var onDayOfWeekReadOnly = readOnly || value !== 'onDayOfWeek';

  var onRadioGroupValueChange = function onRadioGroupValueChange(event) {
    switch (event.target.value) {
      case 'onDayAndMonth':
        setStateWeekNumber(weekNumber);
        setStateDayOfWeek(dayOfWeek);
        onFieldChange({
          rRule: changeRecurrenceOptions(_objectSpread2(_objectSpread2({}, recurrenceOptions), {}, {
            bymonthday: dayNumber,
            byweekday: undefined
          }))
        });
        break;

      case 'onDayOfWeek':
        setDayNumber(recurrenceOptions.bymonthday || dayNumber);
        onFieldChange({
          rRule: handleToDayOfWeekChange(stateWeekNumber, stateDayOfWeek, recurrenceOptions)
        });
        break;
    }
  };

  return /*#__PURE__*/React__default.createElement(RadioGroup$1, _extends({
    onChange: onRadioGroupValueChange,
    value: value
  }, restProps), /*#__PURE__*/React__default.createElement(ChangeMonthEditor, {
    getMessage: getMessage,
    labelComponent: Label,
    textEditorComponent: TextEditor,
    selectComponent: Select,
    readOnly: readOnly,
    readOnlyEditors: onDayAndMonthReadOnly,
    month: month,
    changeMonth: changeMonth,
    months: months,
    dayNumber: dayNumberTextField,
    changeByMonthDay: changeByMonthDay
  }), /*#__PURE__*/React__default.createElement(ChangeWeekNumberEditor, {
    getMessage: getMessage,
    labelComponent: Label,
    selectComponent: Select,
    readOnly: readOnly,
    readOnlyEditors: onDayOfWeekReadOnly,
    month: month,
    changeMonth: changeMonth,
    months: monthsWithOf,
    weekNumber: weekNumber,
    weekNumbers: weekNumbers,
    changeWeekNumber: changeWeekNumber,
    dayOfWeek: dayOfWeek,
    daysOfWeek: daysOfWeek,
    changeDayOfWeek: changeDayOfWeek
  }));
};
process.env.NODE_ENV !== "production" ? YearlyEditor.propTypes = {
  getMessage: PropTypes.func,
  onFieldChange: PropTypes.func,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  formatDate: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
YearlyEditor.defaultProps = {
  onFieldChange: function onFieldChange() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  readOnly: false
};

var _excluded$18 = ["dateEditorComponent", "textEditorComponent", "selectComponent", "labelComponent", "getMessage", "readOnly", "appointmentData", "formatDate", "onFieldChange", "type", "locale", "firstDayOfWeek"];
var RadioGroup = function RadioGroup(_ref) {
  var dateEditorComponent = _ref.dateEditorComponent,
      textEditorComponent = _ref.textEditorComponent,
      selectComponent = _ref.selectComponent,
      labelComponent = _ref.labelComponent,
      getMessage = _ref.getMessage,
      readOnly = _ref.readOnly,
      appointmentData = _ref.appointmentData,
      formatDate = _ref.formatDate,
      onFieldChange = _ref.onFieldChange,
      type = _ref.type,
      locale = _ref.locale,
      firstDayOfWeek = _ref.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref, _excluded$18);

  var commonProps = {
    readOnly: readOnly,
    getMessage: getMessage,
    textEditorComponent: textEditorComponent,
    labelComponent: labelComponent,
    appointmentData: appointmentData,
    onFieldChange: onFieldChange
  };

  switch (type) {
    case END_REPEAT_RADIO_GROUP:
      return /*#__PURE__*/createElement(EndRepeatEditor, _extends({
        dateEditorComponent: dateEditorComponent,
        locale: locale
      }, commonProps, restProps));

    case MONTHLY_RADIO_GROUP:
      return /*#__PURE__*/createElement(MonthlyEditor, _extends({
        selectComponent: selectComponent,
        formatDate: formatDate,
        firstDayOfWeek: firstDayOfWeek
      }, commonProps, restProps));

    case YEARLY_RADIO_GROUP:
      return /*#__PURE__*/createElement(YearlyEditor, _extends({
        selectComponent: selectComponent,
        formatDate: formatDate,
        firstDayOfWeek: firstDayOfWeek
      }, commonProps, restProps));

    default:
      return function () {
        return null;
      };
  }
};
process.env.NODE_ENV !== "production" ? RadioGroup.propTypes = {
  getMessage: PropTypes.func.isRequired,
  labelComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  textEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  dateEditorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  selectComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  readOnly: PropTypes.bool,
  type: PropTypes.string.isRequired,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
RadioGroup.defaultProps = {
  locale: undefined,
  readOnly: false
};

var _excluded$19 = ["formatDate", "rRule", "readOnly", "className", "onValueChange", "firstDayOfWeek"];
var PREFIX$S = 'WeeklyRecurrenceSelector';
var classes$S = {
  selectedButton: "".concat(PREFIX$S, "-selectedButton"),
  button: "".concat(PREFIX$S, "-button"),
  buttonGroup: "".concat(PREFIX$S, "-buttonGroup")
};
var StyledButtonGroup = styled(ButtonGroup)(function (_ref) {
  var spacing = _ref.theme.spacing;
  return _defineProperty({}, "&.".concat(classes$S.buttonGroup), {
    marginBottom: spacing(2)
  });
});
var StyledButton$2 = styled(Button$1)(function (_ref3) {
  var _ref4;

  var _ref3$theme = _ref3.theme,
      palette = _ref3$theme.palette,
      spacing = _ref3$theme.spacing;
  return _ref4 = {}, _defineProperty(_ref4, "&.".concat(classes$S.selectedButton), {
    backgroundColor: ensureColor(400, palette.primary),
    '&:hover': {
      backgroundColor: ensureColor(500, palette.primary)
    },
    border: "1px solid ".concat(ensureColor(400, palette.primary), "!important"),
    borderLeft: "1px solid ".concat(ensureColor(50, palette.primary), "!important"),
    '&:first-of-type': {
      borderLeft: "1px solid ".concat(ensureColor(400, palette.primary), "!important")
    },
    color: ensureColor(50, palette.primary)
  }), _defineProperty(_ref4, "&.".concat(classes$S.button), {
    minWidth: spacing(3)
  }), _ref4;
});

var isCurrentWeekDay = function isCurrentWeekDay(_ref5, currentWeekDay) {
  var byweekday = _ref5.byweekday;
  return byweekday && byweekday.findIndex(function (_ref6) {
    var weekday = _ref6.weekday;
    return weekday === currentWeekDay;
  }) > -1;
};

var WeeklyRecurrenceSelector = /*#__PURE__*/React__default.memo(function (_ref7) {
  var formatDate = _ref7.formatDate,
      rRule = _ref7.rRule,
      readOnly = _ref7.readOnly,
      className = _ref7.className,
      onValueChange = _ref7.onValueChange,
      firstDayOfWeek = _ref7.firstDayOfWeek,
      restProps = _objectWithoutProperties(_ref7, _excluded$19);

  var recurrenceOptions = getRecurrenceOptions(rRule);
  var daysOfWeekArray = getDaysOfWeekArray(firstDayOfWeek);
  var daysOfWeekDates = getDaysOfWeekDates(firstDayOfWeek);
  return /*#__PURE__*/React__default.createElement(StyledButtonGroup, _extends({
    variant: "outlined",
    size: "small",
    disabled: readOnly,
    className: classNames(classes$S.buttonGroup, className),
    fullWidth: true
  }, restProps), daysOfWeekArray.map(function (dayOfWeek, index) {
    var _classNames;

    return /*#__PURE__*/React__default.createElement(StyledButton$2, {
      className: classNames((_classNames = {}, _defineProperty(_classNames, classes$S.button, true), _defineProperty(_classNames, classes$S.selectedButton, isCurrentWeekDay(recurrenceOptions, dayOfWeek)), _classNames)),
      key: dayOfWeek,
      onClick: function onClick() {
        return onValueChange({
          rRule: changeRecurrenceOptions(handleWeekDaysChange(recurrenceOptions, dayOfWeek, onValueChange))
        });
      }
    }, formatDate(daysOfWeekDates[index], WEEK_DAY_OPTIONS));
  }));
});
process.env.NODE_ENV !== "production" ? WeeklyRecurrenceSelector.propTypes = {
  formatDate: PropTypes.func.isRequired,
  rRule: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
  firstDayOfWeek: PropTypes.number.isRequired
} : void 0;
WeeklyRecurrenceSelector.defaultProps = {
  onValueChange: function onValueChange() {
    return undefined;
  },
  readOnly: false,
  className: undefined
};

var _excluded$1a = ["children", "className"];
var PREFIX$T = 'OverlayContainer';
var classes$T = {
  container: "".concat(PREFIX$T, "-container")
};
var StyledDiv$l = styled('div')(_defineProperty({}, "&.".concat(classes$T.container), {
  position: 'absolute',
  width: '100%',
  height: '100%'
}));
var OverlayContainer = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded$1a);

  return /*#__PURE__*/createElement(StyledDiv$l, _extends({
    ref: ref,
    className: classNames(classes$T.container, className)
  }, restProps), children);
});
OverlayContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
OverlayContainer.defaultProps = {
  children: null,
  className: undefined
};

var _excluded$1b = ["readOnly", "resource", "appointmentResources", "onResourceChange", "className"];
var PREFIX$U = 'ResourceEditor';
var classes$U = {
  select: "".concat(PREFIX$U, "-select"),
  selectBox: "".concat(PREFIX$U, "-selectBox"),
  chips: "".concat(PREFIX$U, "-chips"),
  chip: "".concat(PREFIX$U, "-chip"),
  resourceCircle: "".concat(PREFIX$U, "-resourceCircle"),
  itemContainer: "".concat(PREFIX$U, "-itemContainer"),
  circleContainer: "".concat(PREFIX$U, "-circleContainer")
};
var StyledTextField$2 = styled(TextField)(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$U.select), {
    padding: spacing(1)
  }), _defineProperty(_ref2, "&.".concat(classes$U.selectBox), {
    minHeight: spacing(6.5),
    width: '100%'
  }), _ref2;
});
var StyledDiv$m = styled('div')(function (_ref3) {
  var _ref4;

  var spacing = _ref3.theme.spacing;
  return _ref4 = {}, _defineProperty(_ref4, "&.".concat(classes$U.resourceCircle), {
    height: spacing(2),
    width: spacing(2),
    borderRadius: '50%',
    marginRight: spacing(1)
  }), _defineProperty(_ref4, "&.".concat(classes$U.itemContainer), {
    display: 'flex',
    padding: spacing(0.75)
  }), _defineProperty(_ref4, "& .".concat(classes$U.circleContainer), {
    display: 'flex',
    alignItems: 'center'
  }), _defineProperty(_ref4, "&.".concat(classes$U.chips), {
    display: 'flex',
    flexWrap: 'wrap'
  }), _defineProperty(_ref4, "& .".concat(classes$U.chip), {
    color: 'white',
    margin: 2
  }), _ref4;
});

var getResourceInstance = function getResourceInstance(resourceInstances, id) {
  return resourceInstances.find(function (item) {
    return item.id === id;
  });
};

var ResourceEditor = /*#__PURE__*/memo(function (_ref5) {
  var readOnly = _ref5.readOnly,
      resource = _ref5.resource,
      appointmentResources = _ref5.appointmentResources,
      onResourceChange = _ref5.onResourceChange,
      className = _ref5.className,
      restProps = _objectWithoutProperties(_ref5, _excluded$1b);

  var values = appointmentResources.reduce(function (acc, resourceItem) {
    return resourceItem.fieldName === resource.fieldName ? [].concat(_toConsumableArray(acc), [resourceItem.id]) : acc;
  }, []);

  var _onChange = function onChange(nextValue) {
    onResourceChange(_defineProperty({}, resource.fieldName, nextValue));
  };

  return /*#__PURE__*/createElement(StyledTextField$2, _extends({
    select: true,
    disabled: readOnly,
    variant: "outlined",
    margin: "normal",
    value: values,
    SelectProps: {
      multiple: resource.allowMultiple,
      renderValue: function renderValue() {
        var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return resource.allowMultiple ? /*#__PURE__*/createElement(StyledDiv$m, {
          className: classes$U.chips
        }, selected.map(function (value) {
          var resourceItem = getResourceInstance(resource.instances, value);
          return /*#__PURE__*/createElement(Chip, {
            key: value,
            label: resourceItem.text,
            className: classes$U.chip,
            style: {
              backgroundColor: getAppointmentColor(300, resourceItem.color)
            }
          });
        })) : /*#__PURE__*/createElement(StyledDiv$m, {
          className: classes$U.itemContainer
        }, /*#__PURE__*/createElement("div", {
          className: classes$U.circleContainer
        }, /*#__PURE__*/createElement(StyledDiv$m, {
          className: classes$U.resourceCircle,
          style: {
            backgroundColor: getAppointmentColor(400, getResourceInstance(resource.instances, selected[0]).color)
          }
        })), getResourceInstance(resource.instances, selected[0]).text);
      }
    },
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    className: classNames(classes$U.selectBox, className),
    classes: {
      select: classes$U.select
    }
  }, restProps), resource.instances.map(function (resourceItem) {
    return /*#__PURE__*/createElement(MenuItem, {
      key: resourceItem.id,
      value: resourceItem.id
    }, /*#__PURE__*/createElement(StyledDiv$m, {
      className: classes$U.resourceCircle,
      style: {
        backgroundColor: getAppointmentColor(400, resourceItem.color)
      }
    }), resourceItem.text);
  }));
});
process.env.NODE_ENV !== "production" ? ResourceEditor.propTypes = {
  readOnly: PropTypes.bool,
  appointmentResources: PropTypes.array,
  onResourceChange: PropTypes.func,
  resource: PropTypes.object,
  className: PropTypes.string
} : void 0;
ResourceEditor.defaultProps = {
  className: undefined,
  readOnly: false,
  appointmentResources: [],
  onResourceChange: function onResourceChange() {
    return undefined;
  },
  resource: {}
};

var AppointmentForm = withComponents({
  Overlay: Overlay$1,
  Layout: Layout$7,
  TextEditor: TextEditor,
  BasicLayout: Layout$8,
  CommandLayout: Layout$9,
  CommandButton: CommandButton$1,
  DateEditor: DateEditor,
  Label: Label$1,
  BooleanEditor: BooleanEditor,
  Select: Select,
  RecurrenceLayout: Layout$a,
  RadioGroup: RadioGroup,
  WeeklyRecurrenceSelector: WeeklyRecurrenceSelector,
  Container: OverlayContainer,
  ResourceEditor: ResourceEditor
})(AppointmentForm$1);

var _excluded$1c = ["className", "data", "formatDate", "type", "fromPrev", "toNext", "durationType", "isShaded"],
    _excluded2 = ["className", "resources", "isShaded"],
    _excluded3 = ["className"];
var PREFIX$V = 'DraftAppointment';
var classes$V = {
  appointment: "".concat(PREFIX$V, "-appointment"),
  shadedAppointment: "".concat(PREFIX$V, "-shadedAppointment")
};
var AppointmentBase = function AppointmentBase(_ref) {
  var className = _ref.className,
      data = _ref.data,
      formatDate = _ref.formatDate,
      type = _ref.type,
      fromPrev = _ref.fromPrev,
      toNext = _ref.toNext,
      durationType = _ref.durationType,
      isShaded = _ref.isShaded,
      restProps = _objectWithoutProperties(_ref, _excluded$1c);

  return /*#__PURE__*/createElement(Appointment, _extends({
    className: className,
    type: type,
    isShaded: isShaded
  }, restProps), fromPrev && /*#__PURE__*/createElement(SplitIndicator, {
    position: POSITION_START,
    appointmentType: type
  }), /*#__PURE__*/createElement(AppointmentContent, {
    data: data,
    type: type,
    recurringIconComponent: Repeat,
    formatDate: formatDate,
    durationType: durationType
  }), toNext && /*#__PURE__*/createElement(SplitIndicator, {
    position: POSITION_END,
    appointmentType: type
  }));
};
process.env.NODE_ENV !== "production" ? AppointmentBase.propTypes = {
  data: PropTypes.object.isRequired,
  fromPrev: PropTypes.bool.isRequired,
  toNext: PropTypes.bool.isRequired,
  formatDate: PropTypes.func.isRequired,
  durationType: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  isShaded: PropTypes.bool
} : void 0;
AppointmentBase.defaultProps = {
  durationType: undefined,
  className: undefined,
  type: undefined,
  isShaded: false
};
var StyledDraftAppointmentBase = styled(AppointmentBase)(function (_ref2) {
  var _ref3;

  var theme = _ref2.theme,
      resources = _ref2.resources;
  return _ref3 = {}, _defineProperty(_ref3, "&.".concat(classes$V.appointment), {
    boxShadow: theme.shadows[3],
    cursor: 'move',
    overflow: 'hidden',
    backgroundColor: getAppointmentColor(600, getResourceColor(resources), theme.palette.primary),
    border: 0
  }), _defineProperty(_ref3, "&.".concat(classes$V.shadedAppointment), {
    backgroundColor: getAppointmentColor(400, getResourceColor(resources), theme.palette.primary)
  }), _ref3;
});
var DraftAppointment = function DraftAppointment(_ref4) {
  var _classNames;

  var className = _ref4.className,
      resources = _ref4.resources,
      isShaded = _ref4.isShaded,
      restProps = _objectWithoutProperties(_ref4, _excluded2);

  return /*#__PURE__*/createElement(StyledDraftAppointmentBase, _extends({
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$V.appointment, true), _defineProperty(_classNames, classes$V.shadedAppointment, isShaded), _classNames), className),
    resources: resources
  }, restProps));
};
process.env.NODE_ENV !== "production" ? DraftAppointment.propTypes = {
  resources: PropTypes.array,
  className: PropTypes.string,
  isShaded: PropTypes.bool
} : void 0;
DraftAppointment.defaultProps = {
  className: undefined,
  resources: [],
  isShaded: false
};
var StyledSourceAppointmentBase = styled(AppointmentBase)(function () {
  return _defineProperty({}, "&.".concat(classes$V.appointment), {
    opacity: 0.5
  });
});
var SourceAppointment = function SourceAppointment(_ref6) {
  var className = _ref6.className,
      restProps = _objectWithoutProperties(_ref6, _excluded3);

  return /*#__PURE__*/createElement(StyledSourceAppointmentBase, _extends({
    className: classNames(classes$V.appointment, className)
  }, restProps));
};
process.env.NODE_ENV !== "production" ? SourceAppointment.propTypes = {
  className: PropTypes.string
} : void 0;
SourceAppointment.defaultProps = {
  className: undefined
};

var Container$2 = styled(ContainerBase)(function () {
  return _defineProperty({}, "&.".concat(classes.container), {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    cursor: 'move'
  });
});

var _excluded$1d = ["className", "position", "appointmentType", "forwardedRef"];
var PREFIX$W = 'Resize';
var classes$W = {
  resize: "".concat(PREFIX$W, "-resize"),
  verticalStart: "".concat(PREFIX$W, "-verticalStart"),
  verticalEnd: "".concat(PREFIX$W, "-verticalEnd"),
  horizontalStart: "".concat(PREFIX$W, "-horizontalStart"),
  horizontalEnd: "".concat(PREFIX$W, "-horizontalEnd")
};

var verticalStyles$1 = function verticalStyles(spacing) {
  return {
    width: '100%',
    height: spacing(1),
    cursor: 'ns-resize'
  };
};

var horizontalStyles$1 = function horizontalStyles(spacing) {
  return {
    width: spacing(1),
    height: '100%',
    cursor: 'ew-resize'
  };
};

var StyledDiv$n = styled('div')(function (_ref) {
  var _ref2;

  var spacing = _ref.theme.spacing;
  var vertical = verticalStyles$1(spacing);
  var horizontal = horizontalStyles$1(spacing);
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$W.resize), {
    position: 'absolute',
    zIndex: 100
  }), _defineProperty(_ref2, "&.".concat(classes$W.verticalStart), _objectSpread2(_objectSpread2({}, vertical), {}, {
    top: 0
  })), _defineProperty(_ref2, "&.".concat(classes$W.verticalEnd), _objectSpread2(_objectSpread2({}, vertical), {}, {
    bottom: 0
  })), _defineProperty(_ref2, "&.".concat(classes$W.horizontalStart), _objectSpread2(_objectSpread2({}, horizontal), {}, {
    left: 0
  })), _defineProperty(_ref2, "&.".concat(classes$W.horizontalEnd), _objectSpread2(_objectSpread2({}, horizontal), {}, {
    right: 0
  })), _ref2;
});
var Resize = /*#__PURE__*/memo(function (_ref3) {
  var _classNames;

  var className = _ref3.className,
      position = _ref3.position,
      appointmentType = _ref3.appointmentType,
      forwardedRef = _ref3.forwardedRef,
      restProps = _objectWithoutProperties(_ref3, _excluded$1d);

  var vertical = appointmentType === VERTICAL_TYPE;
  var start = position === POSITION_START;
  return /*#__PURE__*/createElement(StyledDiv$n, _extends({
    ref: forwardedRef,
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$W.resize, true), _defineProperty(_classNames, classes$W.verticalStart, vertical && start), _defineProperty(_classNames, classes$W.verticalEnd, vertical && !start), _defineProperty(_classNames, classes$W.horizontalStart, !vertical && start), _defineProperty(_classNames, classes$W.horizontalEnd, !vertical && !start), _classNames), className)
  }, restProps));
});
process.env.NODE_ENV !== "production" ? Resize.propTypes = {
  position: PropTypes.oneOf([POSITION_START, POSITION_END]).isRequired,
  appointmentType: PropTypes.oneOf([HORIZONTAL_TYPE, VERTICAL_TYPE]).isRequired,
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
} : void 0;
Resize.defaultProps = {
  className: undefined,
  forwardedRef: undefined
};

var DragDropProvider = withComponents({
  DraftAppointment: DraftAppointment,
  SourceAppointment: SourceAppointment,
  Container: Container$2,
  Resize: Resize
})(DragDropProvider$1);

var _excluded$1e = ["setCurrentDate", "getMessage", "className"];
var PREFIX$X = 'TodayButton';
var classes$X = {
  button: "".concat(PREFIX$X, "-button")
};
var StyledButton$3 = styled(Button$1)(function (_ref) {
  var spacing = _ref.theme.spacing;
  return _defineProperty({}, "&.".concat(classes$X.button), _defineProperty({
    padding: spacing(0.8, 2),
    marginLeft: spacing(0.5),
    '&:first-of-type': {
      marginLeft: 0
    }
  }, "".concat(LAYOUT_MEDIA_QUERY), {
    fontSize: '0.75rem'
  }));
});
var TodayButton = function TodayButton(_ref3) {
  var setCurrentDate = _ref3.setCurrentDate,
      getMessage = _ref3.getMessage,
      className = _ref3.className,
      restProps = _objectWithoutProperties(_ref3, _excluded$1e);

  var handleClick = function handleClick() {
    setCurrentDate(new Date());
  };

  return /*#__PURE__*/createElement(StyledButton$3, _extends({
    className: classNames(classes$X.button, className),
    variant: "outlined",
    onClick: handleClick
  }, restProps), getMessage('today'));
};
process.env.NODE_ENV !== "production" ? TodayButton.propTypes = {
  setCurrentDate: PropTypes.func.isRequired,
  className: PropTypes.string,
  getMessage: PropTypes.func.isRequired
} : void 0;
TodayButton.defaultProps = {
  className: undefined
};

var TodayButton$1 = withComponents({
  Button: TodayButton
})(TodayButton$2);

var _excluded$1f = ["children", "visible", "onHide", "target", "className"];

var _styled$2;
var PREFIX$Y = 'Overlay';
var classes$Y = {
  modal: "".concat(PREFIX$Y, "-modal"),
  paper: "".concat(PREFIX$Y, "-paper"),
  root: "".concat(PREFIX$Y, "-root")
};
var StyledDialog = styled(Dialog)((_styled$2 = {}, _defineProperty(_styled$2, "& .".concat(classes$Y.modal), {
  position: 'absolute!important'
}), _defineProperty(_styled$2, "& .".concat(classes$Y.paper), {
  zIndex: '1302!important'
}), _defineProperty(_styled$2, "&.".concat(classes$Y.root), {
  zIndex: '1301!important'
}), _styled$2));
var Overlay$2 = function Overlay(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      onHide = _ref.onHide,
      target = _ref.target,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, _excluded$1f);

  return /*#__PURE__*/createElement(StyledDialog, _extends({
    open: visible,
    onClose: onHide,
    className: classNames(classes$Y.modal, classes$Y.root, className),
    BackdropProps: {
      className: classes$Y.modal
    },
    PaperProps: {
      className: classes$Y.paper
    },
    container: target.current,
    onBackdropClick: onHide
  }, restProps), children);
};
process.env.NODE_ENV !== "production" ? Overlay$2.propTypes = {
  children: PropTypes.node.isRequired,
  onHide: PropTypes.func.isRequired,
  target: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  className: PropTypes.string
} : void 0;
Overlay$2.defaultProps = {
  className: undefined,
  visible: false
};

var _excluded$1g = ["buttonComponent", "handleClose", "commit", "availableOperations", "getMessage", "isDeleting"];
var PREFIX$Z = 'Layout';
var classes$Z = {
  title: "".concat(PREFIX$Z, "-title"),
  content: "".concat(PREFIX$Z, "-content")
};
var StyledDiv$o = styled('div')(function (_ref) {
  var _$concat, _ref2;

  var typography = _ref.theme.typography;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$Z.title), typography.h6), _defineProperty(_ref2, "& .".concat(classes$Z.content), {
    fontSize: '1rem'
  }), _defineProperty(_ref2, "".concat(SMALL_LAYOUT_MEDIA_QUERY), (_$concat = {}, _defineProperty(_$concat, "& .".concat(classes$Z.title), {
    fontSize: '1.1rem'
  }), _defineProperty(_$concat, "& .".concat(classes$Z.content), {
    fontSize: '0.9rem'
  }), _$concat)), _ref2;
});
var Layout$b = /*#__PURE__*/memo(function (_ref3) {
  var Button = _ref3.buttonComponent,
      handleClose = _ref3.handleClose,
      commit = _ref3.commit,
      availableOperations = _ref3.availableOperations,
      getMessage = _ref3.getMessage,
      isDeleting = _ref3.isDeleting,
      restProps = _objectWithoutProperties(_ref3, _excluded$1g);

  var _React$useState = useState(availableOperations[0].value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentValue = _React$useState2[0],
      setCurrentValue = _React$useState2[1];

  var handleChange = useCallback(function (event) {
    setCurrentValue(event.target.value);
  });

  var onCommitButtonClick = function onCommitButtonClick() {
    commit(currentValue);
  };

  return /*#__PURE__*/createElement(StyledDiv$o, restProps, /*#__PURE__*/createElement(DialogTitle, {
    className: classes$Z.title
  }, getMessage(isDeleting ? 'menuDeletingTitle' : 'menuEditingTitle')), /*#__PURE__*/createElement(DialogContent, null, /*#__PURE__*/createElement(RadioGroup$1, {
    value: currentValue,
    onChange: handleChange
  }, availableOperations.map(function (operation) {
    return /*#__PURE__*/createElement(FormControlLabel, {
      value: operation.value,
      control: /*#__PURE__*/createElement(Radio, null),
      label: operation.title,
      key: operation.value,
      classes: {
        label: classes$Z.content
      }
    });
  }))), /*#__PURE__*/createElement(DialogActions, null, /*#__PURE__*/createElement(Button, {
    onClick: handleClose,
    title: getMessage('cancelButton')
  }), /*#__PURE__*/createElement(Button, {
    onClick: onCommitButtonClick,
    title: getMessage('commitButton'),
    color: "primary"
  })));
});
process.env.NODE_ENV !== "production" ? Layout$b.propTypes = {
  buttonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  availableOperations: PropTypes.array.isRequired,
  handleClose: PropTypes.func,
  commit: PropTypes.func,
  getMessage: PropTypes.func,
  isDeleting: PropTypes.bool
} : void 0;
Layout$b.defaultProps = {
  handleClose: function handleClose() {
    return undefined;
  },
  commit: function commit() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  isDeleting: false
};

var _excluded$1h = ["onClick", "title"];
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      restProps = _objectWithoutProperties(_ref, _excluded$1h);

  return /*#__PURE__*/createElement(Button$1, _extends({
    onClick: onClick
  }, restProps), title);
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string
} : void 0;
Button.defaultProps = {
  title: ''
};

var EditRecurrenceMenu = withComponents({
  Layout: Layout$b,
  Overlay: Overlay$2,
  Button: Button,
  Container: OverlayContainer
})(EditRecurrenceMenu$1);

var _excluded$1i = ["buttonComponent", "handleCancel", "handleConfirm", "getMessage", "isDeleting", "appointmentData"];
var PREFIX$_ = 'Layout';
var classes$_ = {
  title: "".concat(PREFIX$_, "-title")
};
var StyledDialogTitle = styled(DialogTitle)(function (_ref) {
  var _ref2;

  var typography = _ref.theme.typography;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$_.title), _objectSpread2({}, typography.h6)), _defineProperty(_ref2, "".concat(SMALL_LAYOUT_MEDIA_QUERY), _defineProperty({}, "&.".concat(classes$_.title), {
    fontSize: '1.1rem'
  })), _ref2;
});
var Layout$c = /*#__PURE__*/memo(function (_ref3) {
  var Button = _ref3.buttonComponent,
      handleCancel = _ref3.handleCancel,
      handleConfirm = _ref3.handleConfirm,
      getMessage = _ref3.getMessage,
      isDeleting = _ref3.isDeleting,
      appointmentData = _ref3.appointmentData,
      restProps = _objectWithoutProperties(_ref3, _excluded$1i);

  return /*#__PURE__*/createElement("div", restProps, /*#__PURE__*/createElement(StyledDialogTitle, {
    className: classes$_.title
  }, getMessage(isDeleting ? 'confirmDeleteMessage' : 'confirmCancelMessage')), /*#__PURE__*/createElement(DialogActions, null, /*#__PURE__*/createElement(Button, {
    onClick: handleCancel,
    title: getMessage('cancelButton')
  }), /*#__PURE__*/createElement(Button, {
    onClick: handleConfirm,
    title: getMessage(isDeleting ? 'deleteButton' : 'discardButton'),
    color: "primary"
  })));
});
Layout$c.propTypes = {
  buttonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  handleCancel: PropTypes.func,
  handleConfirm: PropTypes.func,
  getMessage: PropTypes.func,
  isDeleting: PropTypes.bool,
  appointmentData: PropTypes.shape({
    title: PropTypes.string,
    startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    rRule: PropTypes.string,
    notes: PropTypes.string,
    additionalInformation: PropTypes.string,
    allDay: PropTypes.bool
  })
};
Layout$c.defaultProps = {
  handleCancel: function handleCancel() {
    return undefined;
  },
  handleConfirm: function handleConfirm() {
    return undefined;
  },
  getMessage: function getMessage() {
    return undefined;
  },
  isDeleting: false,
  appointmentData: {
    startDate: new Date(),
    endDate: new Date()
  }
};

var ConfirmationDialog = withComponents({
  Overlay: Overlay$2,
  Layout: Layout$c,
  Container: OverlayContainer,
  Button: Button
})(ConfirmationDialog$1);

var _excluded$1j = ["top"];
var PREFIX$$ = 'Indicator';
var classes$$ = {
  line: "".concat(PREFIX$$, "-line"),
  circle: "".concat(PREFIX$$, "-circle"),
  nowIndicator: "".concat(PREFIX$$, "-nowIndicator")
};
var StyledDiv$p = styled('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'topValue';
  }
})(function (_ref) {
  var _ref2;

  var theme = _ref.theme,
      topValue = _ref.topValue;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes$$.circle), {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)'
  }), _defineProperty(_ref2, "& .".concat(classes$$.line), {
    height: '2px',
    width: '100%',
    transform: 'translate(0, -1px)'
  }), _defineProperty(_ref2, "& .".concat(classes$$.nowIndicator), {
    position: 'absolute',
    left: 0,
    top: topValue,
    background: theme.palette.secondary.main,
    zIndex: 1
  }), _ref2;
});
var Indicator = function Indicator(_ref3) {
  var top = _ref3.top,
      restProps = _objectWithoutProperties(_ref3, _excluded$1j);

  return /*#__PURE__*/createElement(StyledDiv$p, _extends({
    topValue: top
  }, restProps), /*#__PURE__*/createElement("div", {
    className: classNames(classes$$.nowIndicator, classes$$.circle)
  }), /*#__PURE__*/createElement("div", {
    className: classNames(classes$$.nowIndicator, classes$$.line)
  }));
};
process.env.NODE_ENV !== "production" ? Indicator.propTypes = {
  top: PropTypes.string
} : void 0;
Indicator.defaultProps = {
  top: 0
};

var CurrentTimeIndicator = withComponents({
  Indicator: Indicator
})(CurrentTimeIndicator$1);

var Resources = function Resources(_ref) {
  var data = _ref.data,
      mainResourceName = _ref.mainResourceName,
      palette = _ref.palette;
  return /*#__PURE__*/createElement(Resources$1, {
    data: data,
    mainResourceName: mainResourceName,
    palette: palette
  });
};
process.env.NODE_ENV !== "production" ? Resources.propTypes = {
  data: PropTypes.array,
  mainResourceName: PropTypes.string,
  palette: PropTypes.array
} : void 0;
Resources.defaultProps = {
  data: [],
  mainResourceName: undefined,
  palette: DEFAULT_PALETTE
};

var _excluded$1k = ["rowComponent", "cellComponent", "groups", "colSpan", "cellStyle", "showHeaderForEveryDate"];
var HorizontalLayout = function HorizontalLayout(_ref) {
  var Row = _ref.rowComponent,
      Cell = _ref.cellComponent,
      groups = _ref.groups,
      colSpan = _ref.colSpan,
      cellStyle = _ref.cellStyle,
      showHeaderForEveryDate = _ref.showHeaderForEveryDate,
      restProps = _objectWithoutProperties(_ref, _excluded$1k);

  return /*#__PURE__*/createElement(Fragment, null, groups.map(function (groupRow, rowIndex) {
    var cellColSpan = colSpan / groupRow.length;
    return /*#__PURE__*/createElement(Row, _extends({
      key: groups[rowIndex][0].text
    }, restProps), !showHeaderForEveryDate && groupRow.map(function (group, index) {
      return /*#__PURE__*/createElement(Cell, {
        group: group,
        colSpan: cellColSpan,
        key: getCellKey(groups, index, rowIndex),
        left: cellStyle.left,
        endOfGroup: true,
        groupedByDate: false
      });
    }), showHeaderForEveryDate && getRowFromGroups(colSpan, groupRow, cellStyle, groups, rowIndex).map(function (_ref2) {
      var group = _ref2.group,
          columnSpan = _ref2.colSpan,
          key = _ref2.key,
          endOfGroup = _ref2.endOfGroup;
      return /*#__PURE__*/createElement(Cell, {
        group: group,
        colSpan: columnSpan,
        key: key,
        left: cellStyle.left,
        endOfGroup: endOfGroup,
        groupedByDate: true
      });
    }));
  }));
};
process.env.NODE_ENV !== "production" ? HorizontalLayout.propTypes = {
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  groups: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  colSpan: PropTypes.number.isRequired,
  cellStyle: PropTypes.object.isRequired,
  showHeaderForEveryDate: PropTypes.bool
} : void 0;
HorizontalLayout.defaultProps = {
  showHeaderForEveryDate: false
};

var _excluded$1l = ["rowComponent", "cellComponent", "groups", "rowSpan", "viewType", "className", "cellTextTopOffset", "alignWithAllDayRow"];
var PREFIX$10 = 'VerticalLayout';
var classes$10 = {
  layout: "".concat(PREFIX$10, "-layout")
};
var StyledTable$2 = styled(Table$2)(_defineProperty({}, "&.".concat(classes$10.layout), {
  width: 'auto',
  '&:only-child': {
    width: '100%'
  }
}));
var allDayCellHeight = BASIC_CELL_HEIGHT[VIEW_TYPES.ALL_DAY_PANEL];
var VerticalLayout = function VerticalLayout(_ref) {
  var Row = _ref.rowComponent,
      Cell = _ref.cellComponent,
      groups = _ref.groups,
      rowSpan = _ref.rowSpan,
      viewType = _ref.viewType,
      className = _ref.className,
      cellTextTopOffset = _ref.cellTextTopOffset,
      alignWithAllDayRow = _ref.alignWithAllDayRow,
      restProps = _objectWithoutProperties(_ref, _excluded$1l);

  var timeTableCellHeight = BASIC_CELL_HEIGHT[viewType];
  return /*#__PURE__*/createElement(StyledTable$2, _extends({
    className: classNames(classes$10.layout, className)
  }, restProps), /*#__PURE__*/createElement(TableBody, null, getGroupsLastRow(groups).map(function (_, groupIndex) {
    return /*#__PURE__*/createElement(Row, {
      key: groupIndex.toString()
    }, getVerticalRowFromGroups(groups, groupIndex, rowSpan, timeTableCellHeight, alignWithAllDayRow, allDayCellHeight).map(function (_ref2) {
      var cellGroup = _ref2.group,
          cellRowSpan = _ref2.rowSpan,
          key = _ref2.key,
          height = _ref2.height;
      return /*#__PURE__*/createElement(Cell, {
        group: cellGroup,
        rowSpan: cellRowSpan,
        height: height,
        left: 0,
        colSpan: 1,
        groupOrientation: VERTICAL_GROUP_ORIENTATION,
        topOffset: cellTextTopOffset,
        key: key
      });
    }));
  })));
};
process.env.NODE_ENV !== "production" ? VerticalLayout.propTypes = {
  rowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  cellComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  alignWithAllDayRow: PropTypes.bool,
  groups: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  rowSpan: PropTypes.number.isRequired,
  viewType: PropTypes.string.isRequired,
  cellTextTopOffset: PropTypes.number,
  className: PropTypes.string
} : void 0;
VerticalLayout.defaultProps = {
  cellTextTopOffset: undefined,
  className: undefined,
  alignWithAllDayRow: false
};

var _excluded$1m = ["className", "group", "colSpan", "rowSpan", "left", "endOfGroup", "groupedByDate", "children", "height", "groupOrientation", "textStyle", "topOffset"];
var PREFIX$11 = 'Cell';
var classes$11 = {
  cell: "".concat(PREFIX$11, "-cell"),
  text: "".concat(PREFIX$11, "-text"),
  horizontalCell: "".concat(PREFIX$11, "-horizontalCell"),
  content: "".concat(PREFIX$11, "-content"),
  verticalCell: "".concat(PREFIX$11, "-verticalCell"),
  groupedByDate: "".concat(PREFIX$11, "-groupedByDate"),
  verticalCellText: "".concat(PREFIX$11, "-title"),
  textContainer: "".concat(PREFIX$11, "-title")
};
var StyledTableCell$8 = styled(TableCell, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'endOfGroup' && prop !== 'textStyle' && prop !== 'topOffset';
  }
})(function (_ref) {
  var _$concat, _ref2;

  var theme = _ref.theme,
      left = _ref.left,
      endOfGroup = _ref.endOfGroup,
      height = _ref.height,
      rowSpan = _ref.rowSpan,
      textStyle = _ref.textStyle,
      topOffset = _ref.topOffset;
  return _ref2 = {}, _defineProperty(_ref2, "&.".concat(classes$11.cell), {
    userSelect: 'none',
    padding: 0,
    paddingTop: theme.spacing(0.5),
    boxSizing: 'border-box',
    borderRight: getBrightBorder(theme),
    '&:last-child': {
      borderRight: 'none'
    },
    height: height ? theme.spacing(height) : undefined
  }), _defineProperty(_ref2, "& .".concat(classes$11.text), _objectSpread2(_objectSpread2({}, theme.typography.caption), {}, {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    fontSize: '1rem',
    position: 'sticky',
    display: 'inline-block',
    left: "".concat(left, "px"),
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    boxSizing: 'border-box'
  }, textStyle)), _defineProperty(_ref2, "&.".concat(classes$11.horizontalCell), {
    borderBottom: 'none',
    borderTop: getBrightBorder(theme),
    'tr:first-of-type &': {
      borderTop: 'none'
    }
  }), _defineProperty(_ref2, "&.".concat(classes$11.verticalCell), (_$concat = {
    borderBottom: getBrightBorder(theme)
  }, _defineProperty(_$concat, "tr:nth-last-of-type(".concat(rowSpan, ") &"), {
    borderBottom: 'none'
  }), _defineProperty(_$concat, "verticalAlign", 'top'), _defineProperty(_$concat, "paddingTop", 0), _defineProperty(_$concat, "width", theme.spacing(GROUPING_PANEL_VERTICAL_CELL_WIDTH)), _defineProperty(_$concat, "minWidth", theme.spacing(GROUPING_PANEL_VERTICAL_CELL_WIDTH)), _defineProperty(_$concat, "maxWidth", theme.spacing(GROUPING_PANEL_VERTICAL_CELL_WIDTH)), _defineProperty(_$concat, "maxHeight", height ? theme.spacing(height - 2) : undefined), _$concat)), _defineProperty(_ref2, "&.".concat(classes$11.groupedByDate), {
    borderRight: endOfGroup ? getBrightBorder(theme) : getBorder(theme),
    borderTop: getBorder(theme)
  }), _defineProperty(_ref2, "& .".concat(classes$11.verticalCellText), {
    top: "".concat(topOffset, "px"),
    width: '100%'
  }), _defineProperty(_ref2, "& .".concat(classes$11.textContainer), {
    height: '100%'
  }), _ref2;
});
var Cell$6 = /*#__PURE__*/memo(function (_ref3) {
  var _classNames, _classNames3;

  var className = _ref3.className,
      group = _ref3.group,
      colSpan = _ref3.colSpan,
      rowSpan = _ref3.rowSpan,
      left = _ref3.left,
      endOfGroup = _ref3.endOfGroup,
      groupedByDate = _ref3.groupedByDate,
      children = _ref3.children,
      height = _ref3.height,
      groupOrientation = _ref3.groupOrientation,
      textStyle = _ref3.textStyle,
      topOffset = _ref3.topOffset,
      restProps = _objectWithoutProperties(_ref3, _excluded$1m);

  var cellHeight = height / DEFAULT_SPACING;
  var isHorizontalGrouping = groupOrientation === HORIZONTAL_GROUP_ORIENTATION;
  var isVerticalGrouping = groupOrientation === VERTICAL_GROUP_ORIENTATION;
  return /*#__PURE__*/createElement(StyledTableCell$8, _extends({
    left: left,
    endOfGroup: endOfGroup,
    height: cellHeight,
    textStyle: textStyle,
    topOffset: topOffset,
    className: classNames((_classNames = {}, _defineProperty(_classNames, classes$11.cell, true), _defineProperty(_classNames, classes$11.horizontalCell, isHorizontalGrouping), _defineProperty(_classNames, classes$11.verticalCell, isVerticalGrouping), _defineProperty(_classNames, classes$11.groupedByDate, groupedByDate && !isVerticalGrouping), _classNames), className),
    colSpan: colSpan,
    rowSpan: rowSpan
  }, restProps), /*#__PURE__*/createElement("div", {
    className: classNames(_defineProperty({}, classes$11.textContainer, isVerticalGrouping))
  }, /*#__PURE__*/createElement("div", {
    className: classNames((_classNames3 = {}, _defineProperty(_classNames3, classes$11.text, true), _defineProperty(_classNames3, classes$11.verticalCellText, isVerticalGrouping), _classNames3))
  }, group.text, children)));
});
process.env.NODE_ENV !== "production" ? Cell$6.propTypes = {
  className: PropTypes.string,
  group: PropTypes.object.isRequired,
  colSpan: PropTypes.number.isRequired,
  rowSpan: PropTypes.number,
  left: PropTypes.number.isRequired,
  endOfGroup: PropTypes.bool,
  groupedByDate: PropTypes.bool,
  height: PropTypes.number,
  groupOrientation: PropTypes.oneOf([HORIZONTAL_GROUP_ORIENTATION, VERTICAL_GROUP_ORIENTATION]),
  textStyle: PropTypes.object,
  topOffset: PropTypes.number,
  children: PropTypes.node
} : void 0;
Cell$6.defaultProps = {
  className: undefined,
  endOfGroup: true,
  rowSpan: 1,
  height: 48,
  groupOrientation: HORIZONTAL_GROUP_ORIENTATION,
  children: null,
  groupedByDate: true,
  textStyle: {},
  topOffset: undefined
};

var GroupingPanel = withComponents({
  HorizontalLayout: HorizontalLayout,
  VerticalLayout: VerticalLayout,
  Cell: Cell$6,
  Row: Row
})(GroupingPanel$1);

export { AllDayPanel, AppointmentForm, AppointmentTooltip, Appointments, ConfirmationDialog, CurrentTimeIndicator, DateNavigator, DayView, DragDropProvider, EditRecurrenceMenu, GroupingPanel, MonthView, Resources, Scheduler, TodayButton$1 as TodayButton, Toolbar$1 as Toolbar, ViewSwitcher, WeekView };
//# sourceMappingURL=dx-react-scheduler-material-ui.es.js.map
