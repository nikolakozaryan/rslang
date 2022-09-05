/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./App.tsx":
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

__webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var Vocabulary_1 = __importDefault(__webpack_require__(/*! ./pages/Vocabulary/Vocabulary */ "./pages/Vocabulary/Vocabulary.tsx"));

var RouteComponent_1 = __importDefault(__webpack_require__(/*! ./components/RouteComponent/RouteComponent */ "./components/RouteComponent/RouteComponent.tsx"));

var Statistic_1 = __importDefault(__webpack_require__(/*! ./pages/Statistic/Statistic */ "./pages/Statistic/Statistic.tsx"));

var Audio_1 = __importDefault(__webpack_require__(/*! ./pages/Games/Audio/Audio */ "./pages/Games/Audio/Audio.tsx"));

__webpack_require__(/*! ./common/style/index.scss */ "./common/style/index.scss");

var StartingPageSprint_1 = __importDefault(__webpack_require__(/*! ./pages/Games/SprintGame/StartingPageSprint/StartingPageSprint */ "./pages/Games/SprintGame/StartingPageSprint/StartingPageSprint.tsx"));

var SprintGame_1 = __importDefault(__webpack_require__(/*! ./pages/Games/SprintGame/SprintGame/SprintGame */ "./pages/Games/SprintGame/SprintGame/SprintGame.tsx"));

var StatisticAPI_1 = __importDefault(__webpack_require__(/*! ./components/API/StatisticAPI/StatisticAPI */ "./components/API/StatisticAPI/StatisticAPI.ts"));

var Main_1 = __importDefault(__webpack_require__(/*! ./pages/Main/Main */ "./pages/Main/Main.tsx"));

var Entrance_1 = __importDefault(__webpack_require__(/*! ./pages/Entrance/Entrance */ "./pages/Entrance/Entrance.tsx"));

var context_1 = __importDefault(__webpack_require__(/*! ./context/context */ "./context/context.tsx"));

var Registration_1 = __importDefault(__webpack_require__(/*! ./pages/Entrance/Registration/Registration */ "./pages/Entrance/Registration/Registration.tsx"));

var Authorization_1 = __importDefault(__webpack_require__(/*! ./pages/Entrance/Authorization/Authorization */ "./pages/Entrance/Authorization/Authorization.tsx"));

var getUserData_1 = __importDefault(__webpack_require__(/*! ./common/getUserData */ "./common/getUserData.tsx"));

var Games_1 = __importDefault(__webpack_require__(/*! ./pages/Games/Games */ "./pages/Games/Games.tsx"));

var App = function App() {
  var _a = (0, react_1.useState)([]),
      sprintArray = _a[0],
      setSprintArray = _a[1];

  var _b = (0, react_1.useState)(false),
      isSignedIn = _b[0],
      setIsSignedIn = _b[1];

  var userData = (0, getUserData_1["default"])();
  (0, react_1.useEffect)(function () {
    var result = (0, getUserData_1["default"])();

    if (result) {
      setIsSignedIn(true);
    }
  }, []);

  var _c = (0, react_1.useState)(0),
      sprintPointsInARow = _c[0],
      setSprintPointsInARow = _c[1];

  var _d = (0, react_1.useState)(0),
      audioPointsInARow = _d[0],
      setAudioPointsInARow = _d[1];

  var _e = (0, react_1.useState)(0),
      gamesAmoutSprint = _e[0],
      setGamesAmoutSprint = _e[1];

  var _f = (0, react_1.useState)(0),
      gamesAmoutAudio = _f[0],
      setGamesAmoutAudio = _f[1];

  var _g = (0, react_1.useState)(0),
      gamesScoreSprint = _g[0],
      setGamesScoreSprint = _g[1];

  var _h = (0, react_1.useState)(0),
      gamesScoreAudio = _h[0],
      setGamesScoreAudio = _h[1];

  (0, react_1.useEffect)(function () {
    var fetchData = function fetchData() {
      return __awaiter(void 0, void 0, void 0, function () {
        var time, stat, updstat;

        var _a, _b, _c, _d, _e, _f;

        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              time = new Date().setHours(0, 0, 0, 0).toString();
              if (!userData) return [3
              /*break*/
              , 2];
              stat = StatisticAPI_1["default"].createStatistic(userData.id, userData.token, 0, (_a = {}, _a[time] = sprintPointsInARow, _a), (_b = {}, _b[time] = audioPointsInARow, _b), (_c = {}, _c[time] = gamesAmoutSprint, _c), (_d = {}, _d[time] = gamesAmoutAudio, _d), (_e = {}, _e[time] = gamesScoreSprint, _e), (_f = {}, _f[time] = gamesScoreAudio, _f));
              return [4
              /*yield*/
              , StatisticAPI_1["default"].updateUserStatistic(stat)];

            case 1:
              updstat = _g.sent();
              console.log(updstat, 'upd');
              _g.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    fetchData()["catch"](console.error);
  }, [gamesScoreSprint, gamesScoreAudio]);

  var changeGameMode = function changeGameMode(array) {
    setSprintArray(array);
  };

  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
    children: (0, jsx_runtime_1.jsx)(context_1["default"].Provider, __assign({
      value: {
        isSignedIn: isSignedIn,
        setIsSignedIn: setIsSignedIn
      }
    }, {
      children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, {
        children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, {
          children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/vocabulary",
            element: (0, jsx_runtime_1.jsx)(RouteComponent_1["default"], {
              children: (0, jsx_runtime_1.jsx)(Vocabulary_1["default"], {})
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/statistic",
            element: (0, jsx_runtime_1.jsx)(RouteComponent_1["default"], {
              children: (0, jsx_runtime_1.jsx)(Statistic_1["default"], {})
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/games",
            element: (0, jsx_runtime_1.jsx)(RouteComponent_1["default"], {
              children: (0, jsx_runtime_1.jsx)(Games_1["default"], {})
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/Sprint",
            element: (0, jsx_runtime_1.jsx)(StartingPageSprint_1["default"], {
              changeGameMode: changeGameMode
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/sprintGame",
            element: (0, jsx_runtime_1.jsx)(SprintGame_1["default"], {
              array: sprintArray,
              setPoints: setSprintPointsInARow,
              setAmount: setGamesAmoutSprint,
              setCorrect: setGamesScoreSprint
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/audio",
            element: (0, jsx_runtime_1.jsx)(Audio_1["default"], {
              setPoints: setAudioPointsInARow,
              setAmount: setGamesAmoutAudio,
              setCorrect: setGamesScoreAudio
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/",
            element: (0, jsx_runtime_1.jsx)(RouteComponent_1["default"], {
              children: (0, jsx_runtime_1.jsx)(Main_1["default"], {})
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/registration",
            element: (0, jsx_runtime_1.jsx)(Entrance_1["default"], {
              children: (0, jsx_runtime_1.jsx)(Registration_1["default"], {})
            })
          }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: "/authorization",
            element: (0, jsx_runtime_1.jsx)(Entrance_1["default"], {
              children: (0, jsx_runtime_1.jsx)(Authorization_1["default"], {})
            })
          })]
        })
      })
    }))
  });
};

exports["default"] = App;

/***/ }),

/***/ "./common/constants/developersConst.ts":
/*!*********************************************!*\
  !*** ./common/constants/developersConst.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var DEVELOPERS = [{
  name: 'Николай Козырев',
  photo: '../../assets/images/Photo/1.jpg',
  gitHub: 'https://github.com/nikolakozaryan',
  role: 'teamlead',
  contribution: ['Раздел "Учебник"', 'Игра "Аудиовызов"', 'Координирование действий команды']
}, {
  name: 'Яков Григорьев',
  photo: '../../assets/images/Photo/2.jpg',
  gitHub: 'https://github.com/YaGrig',
  role: 'developer',
  contribution: ['Раздел "Статистика"', 'Игра "Спринт"', 'Взаимодействие с API']
}, {
  name: 'Кирилл Найдович',
  photo: '../../assets/images/Photo/3.jpg',
  gitHub: 'https://github.com/OnlyR10',
  role: 'developer',
  contribution: ['Регистрация / Авторизация', 'График в разделе "Статистика"', 'Разработка структуры проекта']
}];
exports["default"] = DEVELOPERS;

/***/ }),

/***/ "./common/constants/difficultyLevels.ts":
/*!**********************************************!*\
  !*** ./common/constants/difficultyLevels.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DIFFICULTY = void 0;
exports.DIFFICULTY = [{
  id: 0,
  level: 'A1',
  color: '#FFCF0B',
  detailed: 'Elementary'
}, {
  id: 1,
  level: 'A2',
  color: '#FFAC4B',
  detailed: 'Pre-Intermediate'
}, {
  id: 2,
  level: 'B1',
  color: '#BAF3AF',
  detailed: 'Intermediate'
}, {
  id: 3,
  level: 'B2',
  color: '#85D671',
  detailed: 'Upper-Intermediate'
}, {
  id: 4,
  level: 'C1',
  color: '#AFCDFB',
  detailed: 'Advanced'
}, {
  id: 5,
  level: 'C2',
  color: '#699DEE',
  detailed: 'Proficiency'
}];

/***/ }),

/***/ "./common/constants/gameCards.ts":
/*!***************************************!*\
  !*** ./common/constants/gameCards.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var GAME_CARDS_DATA = [{
  url: '/audio',
  imgURL: '../../assets/images/Vocabulary/Games/Audio.png',
  title: 'Аудиовызов',
  body: 'Попытайтесь угадать слово, произнесенное на английском языке'
}, {
  url: '/sprint',
  imgURL: '../../assets/images/Vocabulary/Games/Sprint.png',
  title: 'Спринт',
  body: 'Определите правильный перевод или нетза определенное время'
}];
exports["default"] = GAME_CARDS_DATA;

/***/ }),

/***/ "./common/constants/helper.ts":
/*!************************************!*\
  !*** ./common/constants/helper.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shuffleArray = exports.randomPage = void 0;

var randomPage = function randomPage() {
  return Math.floor(Math.random() * 29 + 0.5);
};

exports.randomPage = randomPage;

var shuffleArray = function shuffleArray(words) {
  return __spreadArray([], words, true).sort(function () {
    return Math.random() - 0.5;
  });
};

exports.shuffleArray = shuffleArray;

/***/ }),

/***/ "./common/constants/navConst.ts":
/*!**************************************!*\
  !*** ./common/constants/navConst.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var NAVIGATION_ITEMS = [['Главная', '/'], ['Учебник', '/vocabulary'], ['Игры', '/games'], ['Статистика', '/statistic']];
exports["default"] = NAVIGATION_ITEMS;

/***/ }),

/***/ "./common/constants/serverConst.ts":
/*!*****************************************!*\
  !*** ./common/constants/serverConst.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var SERVER = 'https://rslang-database-n-y-k.herokuapp.com';
exports["default"] = SERVER;

/***/ }),

/***/ "./common/getUserData.tsx":
/*!********************************!*\
  !*** ./common/getUserData.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var getUserData = function getUserData() {
  var userJson = localStorage.getItem('user');
  var response = null;

  if (userJson) {
    try {
      response = JSON.parse(userJson);
    } catch (error) {
      console.log(error);
    }
  }

  if (response) {
    return response;
  }

  return null;
};

exports["default"] = getUserData;

/***/ }),

/***/ "./components/API/DictionaryAPI/DictionaryAPI.ts":
/*!*******************************************************!*\
  !*** ./components/API/DictionaryAPI/DictionaryAPI.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var DictionaryAPI = {
  getWordsArray: function getWordsArray(page, group) {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, arrayOfWords;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/words?page=").concat(page, "&group=").concat(group))];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            arrayOfWords = _a.sent();
            return [2
            /*return*/
            , arrayOfWords];
        }
      });
    });
  },
  getWordByID: function getWordByID(id) {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, word;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/words/").concat(id))];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            word = _a.sent();
            return [2
            /*return*/
            , word];
        }
      });
    });
  }
};
exports["default"] = DictionaryAPI;

/***/ }),

/***/ "./components/API/LearnedWordsAPI/LearnedWordsAPI.ts":
/*!***********************************************************!*\
  !*** ./components/API/LearnedWordsAPI/LearnedWordsAPI.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var LearnedWordsAPI = {
  createWord: function createWord(userId, token, wpd, words, wordsNumberSprint, wordsNumberAudio) {
    return {
      userId: userId,
      token: token,
      body: {
        wordsPerDay: wpd,
        optional: {
          learnedWords: words.join(' '),
          learnedWordsNumberSprint: wordsNumberSprint,
          learnedWordsNumberAudio: wordsNumberAudio
        }
      }
    };
  },
  updateUserLearnedWords: function updateUserLearnedWords(object) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse, content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(object.userId, "/settings"), {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(object.token)
              },
              body: JSON.stringify(object.body)
            })];

          case 1:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 2:
            content = _a.sent();
            return [2
            /*return*/
            , content];
        }
      });
    });
  },
  getLearnedWords: function getLearnedWords(id, token, signal) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse, content, error_1, date, WN, words, rawResponse, content;

      var _a;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 3,, 6]);

            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(id, "/settings"), {
              method: 'GET',
              signal: signal,
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            })];

          case 1:
            rawResponse = _b.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 2:
            content = _b.sent();
            return [2
            /*return*/
            , content];

          case 3:
            error_1 = _b.sent();

            if (error_1 instanceof Error) {
              if (error_1.name === 'AbortError') {
                throw error_1;
              }
            }

            date = new Date().setHours(0, 0, 0);
            WN = (_a = {}, _a[date] = 0, _a);
            words = LearnedWordsAPI.createWord(id, token, 1, ['words'], WN, WN);
            LearnedWordsAPI.updateUserLearnedWords(words);
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(id, "/settings"), {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            })];

          case 4:
            rawResponse = _b.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 5:
            content = _b.sent();
            return [2
            /*return*/
            , content];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  }
};
exports["default"] = LearnedWordsAPI;

/***/ }),

/***/ "./components/API/StatisticAPI/StatisticAPI.ts":
/*!*****************************************************!*\
  !*** ./components/API/StatisticAPI/StatisticAPI.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var UserStatistic = {
  createStatistic: function createStatistic(userId, token, learnedWords, sprintPointsInARow, audioPointsInARow, gamesAmoutSprint, gamesAmoutAudio, gamesScoreSprint, gamesScoreAudio, testFieldString, testFieldBoolean) {
    return {
      userId: userId,
      token: token,
      body: {
        learnedWords: learnedWords,
        optional: {
          sprintPointsInARow: sprintPointsInARow,
          audioPointsInARow: audioPointsInARow,
          gamesAmoutSprint: gamesAmoutSprint,
          gamesAmoutAudio: gamesAmoutAudio,
          gamesScoreSprint: gamesScoreSprint,
          gamesScoreAudio: gamesScoreAudio,
          testFieldString: testFieldString,
          testFieldBoolean: testFieldBoolean
        }
      }
    };
  },
  getStatistic: function getStatistic(id, token) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse, content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(id, "/statistics"), {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            })];

          case 1:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 2:
            content = _a.sent();
            return [2
            /*return*/
            , content];
        }
      });
    });
  },
  updateUserStatistic: function updateUserStatistic(object) {
    return __awaiter(void 0, void 0, void 0, function () {
      var resp, objectExist_1, copy_1, rawResponse, content, error_1, rawResponse, content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 4,, 7]);

            return [4
            /*yield*/
            , UserStatistic.getStatistic(object.userId, object.token)];

          case 1:
            resp = _a.sent();
            objectExist_1 = Object.assign(resp);
            copy_1 = Object.assign(object);
            Object.keys(objectExist_1.optional).forEach(function (item) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

              var propExist = objectExist_1.optional[item];
              var propNew = object.body.optional[item];

              switch (item) {
                case 'sprintPointsInARow':
                case 'audioPointsInARow':
                  {
                    var key = Object.keys(propNew)[0];
                    var scoreObject = propNew[key];
                    var scoreOld = propExist[key];

                    if (scoreOld === undefined) {
                      var assign = __assign(__assign({}, propExist), propNew);

                      copy_1.body.optional[item] = assign;
                    } else if (scoreObject >= scoreOld) {
                      var assign = __assign(__assign({}, propExist), propNew);

                      copy_1.body.optional[item] = assign;
                    } else {
                      var assign = __assign({}, propExist);

                      copy_1.body.optional[item] = assign;
                    }

                    break;
                  }

                case 'gamesScoreSprint':
                  {
                    var key = Object.keys(propNew)[0];
                    var scoreObject = propNew[key];
                    var scoreNew = scoreObject;
                    var scoreOld = propExist[Object.keys(propNew)[0]];

                    if (scoreOld === undefined) {
                      console.log('here');
                      var sumScore = scoreNew;
                      var newObjectScore = (_a = {}, _a[key] = sumScore, _a);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    } else if (scoreNew === scoreOld) {
                      console.log('here2');
                      var newObjectScore = (_b = {}, _b[key] = scoreOld, _b);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    } else if (scoreNew !== scoreOld) {
                      console.log('here3');
                      var amount = objectExist_1.optional.gamesAmoutSprint;
                      var amountN = amount[Object.keys(amount)[0]];

                      if (amountN - 1 <= 0) {
                        amountN += 1;
                      }

                      var oldScoreAll = scoreOld * (amountN - 1);
                      var sumScore = oldScoreAll + scoreNew;
                      console.log(sumScore, scoreOld, scoreNew, 'gamesp');
                      var result = Number((sumScore / amountN).toFixed(2));
                      var newObjectScore = (_c = {}, _c[key] = result, _c);
                      console.log(sumScore, scoreOld, scoreNew, 'gameau', amountN, result, newObjectScore, 'afetspr');

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    }

                    break;
                  }

                case 'gamesScoreAudio':
                  {
                    var key = Object.keys(propNew)[0];
                    var scoreObject = propNew[key];
                    var scoreNew = scoreObject;
                    var scoreOld = propExist[Object.keys(propNew)[0]];

                    if (scoreOld === undefined) {
                      console.log('here');
                      var sumScore = scoreNew;
                      var newObjectScore = (_d = {}, _d[key] = sumScore, _d);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    } else if (scoreNew === scoreOld) {
                      console.log('here2');
                      var newObjectScore = (_e = {}, _e[key] = scoreOld, _e);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    } else if (scoreNew !== scoreOld) {
                      console.log('here3');
                      var amount = objectExist_1.optional.gamesAmoutAudio;
                      var amountN = amount[Object.keys(amount)[0]];

                      if (amountN - 1 <= 0) {
                        amountN += 1;
                      }

                      var oldScoreAll = scoreOld * (amountN - 1);
                      var sumScore = oldScoreAll + scoreNew;
                      console.log(sumScore, scoreOld, scoreNew, 'gamesp');
                      var result = Number((sumScore / amountN).toFixed(2));
                      var newObjectScore = (_f = {}, _f[key] = result, _f);
                      console.log(sumScore, scoreOld, scoreNew, 'gameau', amountN, result, newObjectScore, 'afetspr');

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    }

                    break;
                  }
                // {
                //   const key: keyof Data = Object.keys(propNew)[0];
                //   const scoreObject: Data = propNew[key as keyof typeof propNew];
                //   const scoreNew = scoreObject;
                //   const scoreOld = propExist[Object.keys(propNew)[0]];
                //   if (!scoreOld) {
                //     const sumScore = scoreNew;
                //     const newObjectScore = { [key]: sumScore };
                //     const assign = { ...propExist, ...newObjectScore };
                //     copy.body.optional[item] = assign;
                //   } else if (scoreNew === scoreOld) {
                //     const newObjectScore: Data = { [key]: scoreOld };
                //     const assign = { ...propExist, ...newObjectScore };
                //     copy.body.optional[item] = assign;
                //   } else if (scoreNew !== scoreOld) {
                //     const amount = objectExist.optional.gamesAmoutAudio;
                //     const amountN = amount[Object.keys(amount)[0]];
                //     const oldScoreAll = scoreOld * (amountN - 1);
                //     const sumScore = oldScoreAll + scoreNew;
                //     console.log(sumScore, scoreOld, scoreNew, 'gamesp');
                //     const result = Number((sumScore / amountN).toFixed(2));
                //     const newObjectScore: Data = { [key]: result };
                //     console.log(sumScore, scoreOld, scoreNew, 'gameau', amountN, result, newObjectScore, 'afetspr');
                //     const assign = { ...propExist, ...newObjectScore };
                //     copy.body.optional[item] = assign;
                //   }
                //   break;
                // }

                case 'gamesAmoutSprint':
                case 'gamesAmoutAudio':
                  {
                    var key = Object.keys(propNew)[0];
                    var scoreObject = propNew[key];
                    var scoreNew = scoreObject;
                    var scoreOld = propExist[Object.keys(propNew)[0]];

                    if (scoreOld === undefined) {
                      var sumScore = scoreNew;
                      var newObjectScore = (_g = {}, _g[key] = sumScore, _g);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    } else {
                      var sumScore = scoreOld + scoreNew;
                      var newObjectScore = (_h = {}, _h[key] = sumScore, _h);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    }

                    break;
                  }

                case 'learnedSprint':
                case 'learnedAudio':
                  {
                    var key = Object.keys(propNew)[0];
                    var scoreObject = propNew[key];
                    var scoreNew = scoreObject;
                    var scoreOld = propExist[Object.keys(propNew)[0]];

                    if (scoreOld === undefined) {
                      var sumScore = scoreNew;
                      var newObjectScore = (_j = {}, _j[key] = sumScore, _j);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    } else {
                      var sumScore = scoreOld + scoreNew;
                      var newObjectScore = (_k = {}, _k[key] = sumScore, _k);

                      var assign = __assign(__assign({}, propExist), newObjectScore);

                      copy_1.body.optional[item] = assign;
                    }

                    break;
                  }
                // case 'sprintCorrectAnswers':
                // case 'audioCorrectAnswers': {
                //   const key: keyof Data = Object.keys(propNew)[0];
                //   const scoreObject: Data = propNew[key as keyof typeof propNew];
                //   const scoreNew = scoreObject;
                //   const scoreOld = propExist[Object.keys(propNew)[0]];
                //   if (scoreOld === undefined) {
                //     const sumScore = scoreNew;
                //     const newObjectScore = { [key]: sumScore };
                //     const assign = { ...propExist, ...newObjectScore };
                //     copy.body.optional[item] = assign;
                //   } else {
                //     const sumScore = scoreOld + scoreNew;
                //     const newObjectScore: Data = { [key]: sumScore };
                //     const assign = { ...propExist, ...newObjectScore };
                //     copy.body.optional[item] = assign;
                //   }
                //   break;
                // }

                default:
                  {
                    console.log('default');
                    break;
                  }
              }
            });
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(object.userId, "/statistics"), {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(object.token)
              },
              body: JSON.stringify(copy_1.body)
            })];

          case 2:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 3:
            content = _a.sent();
            return [2
            /*return*/
            , content];

          case 4:
            error_1 = _a.sent();
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(object.userId, "/statistics"), {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(object.token)
              },
              body: JSON.stringify(object.body)
            })];

          case 5:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 6:
            content = _a.sent();
            return [2
            /*return*/
            , content];

          case 7:
            return [2
            /*return*/
            ];
        }
      });
    });
  }
};
exports["default"] = UserStatistic;

/***/ }),

/***/ "./components/API/UsersAPI/UsersAPI.ts":
/*!*********************************************!*\
  !*** ./components/API/UsersAPI/UsersAPI.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var UserAPI = {
  deleteUser: function deleteUser(id, token) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse, content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(id), {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            })];

          case 1:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 2:
            content = _a.sent();
            return [2
            /*return*/
            , content];
        }
      });
    });
  },
  updateUser: function updateUser(id, token, user) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse, content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(id), {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(user)
            })];

          case 1:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 2:
            content = _a.sent();
            return [2
            /*return*/
            , content];
        }
      });
    });
  },
  createUser: function createUser(user) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users"), {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })];

          case 1:
            rawResponse = _a.sent();

            if (rawResponse.ok) {
              return [2
              /*return*/
              , rawResponse.json()];
            }

            if (rawResponse.status === 417) {
              throw new Error('Такой пользователь существует!');
            }

            throw new Error('Не удалось создать пользователя!');
        }
      });
    });
  },
  getUser: function getUser(id, token) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse, content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(id), {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            })];

          case 1:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 2:
            content = _a.sent();
            return [2
            /*return*/
            , content];
        }
      });
    });
  },
  getNewUserToken: function getNewUserToken(id, token) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse, content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/users/").concat(id, "/tokens"), {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            })];

          case 1:
            rawResponse = _a.sent();
            return [4
            /*yield*/
            , rawResponse.json()];

          case 2:
            content = _a.sent();
            return [2
            /*return*/
            , content];
        }
      });
    });
  },
  signInUser: function signInUser(user) {
    return __awaiter(void 0, void 0, void 0, function () {
      var rawResponse;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("".concat(serverConst_1["default"], "/signin"), {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })];

          case 1:
            rawResponse = _a.sent();

            if (rawResponse.ok) {
              return [2
              /*return*/
              , rawResponse.json()];
            }

            if (rawResponse.status === 403) {
              throw new Error('Неверный пароль!');
            }

            if (rawResponse.status === 404) {
              throw new Error('Не удалось найти пользователя!');
            }

            throw new Error('Не удалось войти!');
        }
      });
    });
  }
};
exports["default"] = UserAPI;

/***/ }),

/***/ "./components/AdvantageCard/AdvantageCard.tsx":
/*!****************************************************!*\
  !*** ./components/AdvantageCard/AdvantageCard.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var Card_1 = __importDefault(__webpack_require__(/*! ../Card/Card */ "./components/Card/Card.tsx"));

var AdvantageCard_module_scss_1 = __importDefault(__webpack_require__(/*! ./AdvantageCard.module.scss */ "./components/AdvantageCard/AdvantageCard.module.scss"));

var useApplicationAccessContext_1 = __importDefault(__webpack_require__(/*! ../../hooks/useApplicationAccessContext */ "./hooks/useApplicationAccessContext.tsx"));

var AdvantageCard = function AdvantageCard(_a) {
  var imgURL = _a.imgURL,
      title = _a.title,
      body = _a.body,
      path = _a.path;
  var isSignedIn = (0, useApplicationAccessContext_1["default"])().isSignedIn;
  var linkStyle = '';

  if (!isSignedIn && title === 'Статистика') {
    linkStyle = AdvantageCard_module_scss_1["default"].disabled;
  }

  return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
    className: AdvantageCard_module_scss_1["default"].link,
    to: path
  }, {
    children: (0, jsx_runtime_1.jsxs)(Card_1["default"], __assign({
      type: "team",
      className: linkStyle
    }, {
      children: [(0, jsx_runtime_1.jsx)("img", {
        className: AdvantageCard_module_scss_1["default"].image,
        src: imgURL,
        alt: "advantage"
      }), (0, jsx_runtime_1.jsx)("h3", __assign({
        className: AdvantageCard_module_scss_1["default"].title
      }, {
        children: title
      })), (0, jsx_runtime_1.jsx)("p", __assign({
        className: AdvantageCard_module_scss_1["default"].body
      }, {
        children: body
      }))]
    }))
  }));
};

exports["default"] = AdvantageCard;

/***/ }),

/***/ "./components/ArrowButton/ArrowButton.tsx":
/*!************************************************!*\
  !*** ./components/ArrowButton/ArrowButton.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var ArrowButton_module_scss_1 = __importDefault(__webpack_require__(/*! ./ArrowButton.module.scss */ "./components/ArrowButton/ArrowButton.module.scss"));

var arrowListener = function arrowListener(_a) {
  var direction = _a.direction,
      frame = _a.frame,
      setFrame = _a.setFrame;
  var carousel = document.querySelector('.inner');
  var style = carousel.style;
  var curFrame = frame;
  if (direction === 'left' && frame > 0) curFrame -= 1;else if (direction === 'right' && frame < 7) curFrame += 1;
  setFrame(curFrame);
  style.transform = "translateX(-".concat(curFrame * 38, "rem)");
};

var disableArrow = function disableArrow(frame, type) {
  return frame === 0 && type === 'left' || frame === 7 && type === 'right' ? ArrowButton_module_scss_1["default"].disabled : '';
};

var ArrowButton = function ArrowButton(settings) {
  return (0, jsx_runtime_1.jsx)("span", {
    onClick: function onClick() {
      return arrowListener(settings);
    },
    className: "".concat(disableArrow(settings.frame, settings.direction), " ").concat(ArrowButton_module_scss_1["default"].button, " ").concat(ArrowButton_module_scss_1["default"]["button_".concat(settings.direction)])
  });
};

exports["default"] = ArrowButton;

/***/ }),

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Button_module_scss_1 = __importDefault(__webpack_require__(/*! ./Button.module.scss */ "./components/Button/Button.module.scss"));

var Button = function Button(_a) {
  var loading = _a.loading,
      props = __rest(_a, ["loading"]);

  return (0, jsx_runtime_1.jsx)("button", __assign({}, props, {
    className: "".concat(Button_module_scss_1["default"].button, " ").concat(props.className)
  }, {
    children: loading ? (0, jsx_runtime_1.jsx)("div", __assign({
      className: Button_module_scss_1["default"].loaderContainer
    }, {
      children: (0, jsx_runtime_1.jsx)("div", __assign({
        className: Button_module_scss_1["default"].threeQuartersLoader
      }, {
        children: " "
      }))
    })) : props.children
  }));
};

exports["default"] = Button;

/***/ }),

/***/ "./components/CardTeam/CardTeam.tsx":
/*!******************************************!*\
  !*** ./components/CardTeam/CardTeam.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var CardTeam_module_scss_1 = __importDefault(__webpack_require__(/*! ./CardTeam.module.scss */ "./components/CardTeam/CardTeam.module.scss"));

var CardTeam = function CardTeam(props) {
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: CardTeam_module_scss_1["default"].cardTeam
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", __assign({
        className: CardTeam_module_scss_1["default"].header
      }, {
        children: [(0, jsx_runtime_1.jsx)("div", {
          className: CardTeam_module_scss_1["default"].photo,
          style: {
            backgroundImage: "url(".concat(props.member.photo, ")")
          }
        }), (0, jsx_runtime_1.jsxs)("div", __assign({
          className: CardTeam_module_scss_1["default"].description
        }, {
          children: [(0, jsx_runtime_1.jsx)("div", __assign({
            className: CardTeam_module_scss_1["default"].name
          }, {
            children: props.member.name
          })), (0, jsx_runtime_1.jsx)("div", __assign({
            className: CardTeam_module_scss_1["default"].role
          }, {
            children: (0, jsx_runtime_1.jsx)("span", {
              children: props.member.role
            })
          }))]
        }))]
      })), (0, jsx_runtime_1.jsx)("div", __assign({
        className: CardTeam_module_scss_1["default"].contribution
      }, {
        children: props.member.contribution.map(function (item, index) {
          return (0, jsx_runtime_1.jsx)("div", __assign({
            style: {
              margin: '1rem 0'
            }
          }, {
            children: item
          }), index);
        })
      }))]
    }))
  });
};

exports["default"] = CardTeam;

/***/ }),

/***/ "./components/Card/Card.tsx":
/*!**********************************!*\
  !*** ./components/Card/Card.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Card_module_scss_1 = __importDefault(__webpack_require__(/*! ./Card.module.scss */ "./components/Card/Card.module.scss"));

var className;

var Card = function Card(props) {
  switch (props.type) {
    case 'team':
      {
        className = "".concat(Card_module_scss_1["default"].card, " ").concat(Card_module_scss_1["default"].cardTeam);
        break;
      }

    case 'opportunity':
      {
        className = "".concat(Card_module_scss_1["default"].card, " ").concat(Card_module_scss_1["default"].cardOpportunity);
        break;
      }

    case 'statisticSmall':
      {
        className = "".concat(Card_module_scss_1["default"].card, " ").concat(Card_module_scss_1["default"].cardStatisticSmall);
        break;
      }

    case 'statisticMedium':
      {
        className = "".concat(Card_module_scss_1["default"].card, " ").concat(Card_module_scss_1["default"].cardStatisticMedium);
        break;
      }

    case 'statisticLarge':
      {
        className = "".concat(Card_module_scss_1["default"].card, " ").concat(Card_module_scss_1["default"].cardStatisticLarge);
        break;
      }

    default:
      {
        className = "".concat(Card_module_scss_1["default"].card, " ").concat(Card_module_scss_1["default"].cardGames);
        break;
      }
  }

  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: className
  }, {
    children: props.children
  }));
};

exports["default"] = Card;

/***/ }),

/***/ "./components/DetailedWord/DetailedWord.tsx":
/*!**************************************************!*\
  !*** ./components/DetailedWord/DetailedWord.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var DetailedWord_module_scss_1 = __importDefault(__webpack_require__(/*! ./DetailedWord.module.scss */ "./components/DetailedWord/DetailedWord.module.scss"));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var useApplicationAccessContext_1 = __importDefault(__webpack_require__(/*! ../../hooks/useApplicationAccessContext */ "./hooks/useApplicationAccessContext.tsx"));

var DetailedWord = function DetailedWord(_a) {
  var word = _a.word;

  var _b = (0, react_1.useState)(true),
      translate = _b[0],
      setTranslate = _b[1];

  var wordObject = JSON.parse(word);
  var isSignedIn = (0, useApplicationAccessContext_1["default"])().isSignedIn;

  var playAudio = function playAudio(type) {
    var audio = document.querySelector(".audio__".concat(type));
    audio.play();
  };

  var showTranslation = function showTranslation() {
    setTranslate(!translate);
  };

  var addToDifficult = function addToDifficult() {// add current word to difficult words
  };

  (0, react_1.useEffect)(function () {
    document.querySelector('.meaning').innerHTML = wordObject.textMeaning;
    document.querySelector('.example').innerHTML = wordObject.textExample;
  }, [word]);
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: DetailedWord_module_scss_1["default"].card
  }, {
    children: [(0, jsx_runtime_1.jsx)("img", {
      className: DetailedWord_module_scss_1["default"].img,
      src: "".concat(serverConst_1["default"], "/").concat(wordObject.image),
      alt: "word-image"
    }), (0, jsx_runtime_1.jsxs)("div", __assign({
      className: DetailedWord_module_scss_1["default"].word__container
    }, {
      children: [(0, jsx_runtime_1.jsx)("div", __assign({
        className: DetailedWord_module_scss_1["default"].word__word
      }, {
        children: wordObject.word
      })), (0, jsx_runtime_1.jsx)("div", {
        className: DetailedWord_module_scss_1["default"].play,
        onClick: function onClick() {
          return playAudio('word');
        }
      })]
    })), translate ? (0, jsx_runtime_1.jsx)("div", __assign({
      className: DetailedWord_module_scss_1["default"].word__translate
    }, {
      children: wordObject.wordTranslate
    })) : '', (0, jsx_runtime_1.jsx)("div", __assign({
      className: DetailedWord_module_scss_1["default"].word__transcription
    }, {
      children: wordObject.transcription
    })), (0, jsx_runtime_1.jsxs)("div", __assign({
      className: DetailedWord_module_scss_1["default"].phrases
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", __assign({
        className: DetailedWord_module_scss_1["default"].meaning
      }, {
        children: [(0, jsx_runtime_1.jsx)("h5", __assign({
          className: DetailedWord_module_scss_1["default"].header
        }, {
          children: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435"
        })), (0, jsx_runtime_1.jsx)("div", {
          onClick: function onClick() {
            return playAudio('meaning');
          },
          className: "meaning ".concat(DetailedWord_module_scss_1["default"].playable)
        }), translate ? (0, jsx_runtime_1.jsxs)("div", {
          children: [wordObject.textMeaningTranslate, "."]
        }) : '']
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: DetailedWord_module_scss_1["default"].example
      }, {
        children: [(0, jsx_runtime_1.jsx)("h5", __assign({
          className: DetailedWord_module_scss_1["default"].header
        }, {
          children: "\u041F\u0440\u0438\u043C\u0435\u0440"
        })), (0, jsx_runtime_1.jsx)("div", {
          onClick: function onClick() {
            return playAudio('example');
          },
          className: "example ".concat(DetailedWord_module_scss_1["default"].playable)
        }), translate ? (0, jsx_runtime_1.jsxs)("div", {
          children: [wordObject.textExampleTranslate, "."]
        }) : '']
      }))]
    })), (0, jsx_runtime_1.jsx)("div", {
      className: "".concat(DetailedWord_module_scss_1["default"].icon, " ").concat(DetailedWord_module_scss_1["default"].translate),
      onClick: showTranslation,
      title: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0441\u043A\u0440\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434"
    }), isSignedIn ? (0, jsx_runtime_1.jsx)("div", {
      className: "".concat(DetailedWord_module_scss_1["default"].icon, " ").concat(DetailedWord_module_scss_1["default"].add),
      onClick: addToDifficult,
      title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \"\u0421\u043B\u043E\u0436\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430\""
    }) : '', (0, jsx_runtime_1.jsx)("audio", {
      className: "audio audio__word ".concat(DetailedWord_module_scss_1["default"].audio),
      src: "".concat(serverConst_1["default"], "/").concat(wordObject.audio)
    }), (0, jsx_runtime_1.jsx)("audio", {
      className: "audio audio__meaning ".concat(DetailedWord_module_scss_1["default"].audio),
      src: "".concat(serverConst_1["default"], "/").concat(wordObject.audioMeaning)
    }), (0, jsx_runtime_1.jsx)("audio", {
      className: "audio audio__example ".concat(DetailedWord_module_scss_1["default"].audio),
      src: "".concat(serverConst_1["default"], "/").concat(wordObject.audioExample)
    })]
  }));
};

exports["default"] = DetailedWord;

/***/ }),

/***/ "./components/DifficultyCard/DifficultyCard.tsx":
/*!******************************************************!*\
  !*** ./components/DifficultyCard/DifficultyCard.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var DifficultyCard_module_scss_1 = __importDefault(__webpack_require__(/*! ./DifficultyCard.module.scss */ "./components/DifficultyCard/DifficultyCard.module.scss"));

var DifficultyCard = function DifficultyCard(_a) {
  var color = _a.color,
      id = _a.id,
      children = _a.children,
      setLevel = _a.setLevel,
      setAccentColor = _a.setAccentColor,
      setPage = _a.setPage;

  var deleteCardsStyle = function deleteCardsStyle() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
      return card.removeAttribute('style');
    });
  };

  var addCardStyle = function addCardStyle(event) {
    var target = event.currentTarget;
    var style = target.style;
    style.background = color;
    style.borderColor = color;
  };

  var clickHandler = function clickHandler(event, level) {
    deleteCardsStyle();
    setAccentColor(color);
    setLevel(level);
    setPage(0);
    addCardStyle(event);
  };

  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: "card ".concat(DifficultyCard_module_scss_1["default"].card),
    onClick: function onClick(event) {
      return clickHandler(event, id);
    }
  }, {
    children: children
  }));
};

exports["default"] = DifficultyCard;

/***/ }),

/***/ "./components/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Footer_module_scss_1 = __importDefault(__webpack_require__(/*! ./Footer.module.scss */ "./components/Footer/Footer.module.scss"));

var developersConst_1 = __importDefault(__webpack_require__(/*! ../../common/constants/developersConst */ "./common/constants/developersConst.ts"));

var Link_1 = __importDefault(__webpack_require__(/*! ./Link/Link */ "./components/Footer/Link/Link.tsx"));

var Footer = function Footer(_a) {
  var className = _a.className;
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: "".concat(Footer_module_scss_1["default"].footer, " ").concat(className)
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: Footer_module_scss_1["default"].wrapper
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", __assign({
        className: Footer_module_scss_1["default"].linksContainer
      }, {
        children: [(0, jsx_runtime_1.jsx)("a", {
          href: "https://rs.school/",
          target: "_blank",
          className: Footer_module_scss_1["default"].logoRss
        }), (0, jsx_runtime_1.jsxs)("div", __assign({
          className: Footer_module_scss_1["default"].githubContainer
        }, {
          children: [(0, jsx_runtime_1.jsx)("a", {
            href: "https://github.com/",
            target: "_blank",
            className: Footer_module_scss_1["default"].iconGithub
          }), developersConst_1["default"].map(function (developer) {
            return (0, react_1.createElement)(Link_1["default"], __assign({}, developer, {
              key: developer.gitHub
            }));
          })]
        })), (0, jsx_runtime_1.jsx)("a", __assign({
          href: "https://rs.school/js/",
          target: "_blank",
          className: Footer_module_scss_1["default"].linkToRss
        }, {
          children: "\u041A\u0443\u0440\u0441 \xABJavaScript/Front-end\xBB"
        }))]
      })), (0, jsx_runtime_1.jsx)("p", __assign({
        className: Footer_module_scss_1["default"].developmentDate
      }, {
        children: "\xA9 2022 RSLang"
      }))]
    }))
  }));
};

exports["default"] = Footer;

/***/ }),

/***/ "./components/Footer/Link/Link.tsx":
/*!*****************************************!*\
  !*** ./components/Footer/Link/Link.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Link_module_scss_1 = __importDefault(__webpack_require__(/*! ./Link.module.scss */ "./components/Footer/Link/Link.module.scss"));

var Link = function Link(_a) {
  var name = _a.name,
      gitHub = _a.gitHub;
  return (0, jsx_runtime_1.jsx)("a", __assign({
    href: gitHub,
    target: "_blank",
    className: Link_module_scss_1["default"].linkToDeveloper
  }, {
    children: name
  }));
};

exports["default"] = Link;

/***/ }),

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var useApplicationAccessContext_1 = __importDefault(__webpack_require__(/*! ../../hooks/useApplicationAccessContext */ "./hooks/useApplicationAccessContext.tsx"));

var Header_module_scss_1 = __importDefault(__webpack_require__(/*! ./Header.module.scss */ "./components/Header/Header.module.scss"));

var Logo_1 = __importDefault(__webpack_require__(/*! ./Logo/Logo */ "./components/Header/Logo/Logo.tsx"));

var Navigation_1 = __importDefault(__webpack_require__(/*! ./Navigation/Navigation */ "./components/Header/Navigation/Navigation.tsx"));

var Header = function Header(_a) {
  var navigationHide = _a.navigationHide;

  var _b = (0, useApplicationAccessContext_1["default"])(),
      isSignedIn = _b.isSignedIn,
      setIsSignedIn = _b.setIsSignedIn;

  var clickHandler = function clickHandler() {
    setIsSignedIn(false);
    localStorage.removeItem('user');
  };

  return (0, jsx_runtime_1.jsx)("header", __assign({
    className: Header_module_scss_1["default"].header
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: Header_module_scss_1["default"].container
    }, {
      children: [(0, jsx_runtime_1.jsx)(Logo_1["default"], {}), !navigationHide ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [(0, jsx_runtime_1.jsx)(Navigation_1["default"], {}), isSignedIn ? (0, jsx_runtime_1.jsx)("button", __assign({
          onClick: clickHandler,
          className: Header_module_scss_1["default"].buttonAuthor
        }, {
          children: "\u0412\u042B\u0419\u0422\u0418"
        })) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
          to: "/authorization",
          className: Header_module_scss_1["default"].buttonAuthor
        }, {
          children: "\u0412\u041E\u0419\u0422\u0418"
        }))]
      }) : null]
    }))
  }));
};

exports["default"] = Header;

/***/ }),

/***/ "./components/Header/Logo/Logo.tsx":
/*!*****************************************!*\
  !*** ./components/Header/Logo/Logo.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var Logo_module_scss_1 = __importDefault(__webpack_require__(/*! ./Logo.module.scss */ "./components/Header/Logo/Logo.module.scss"));

var Logo = function Logo() {
  return (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, __assign({
    to: "/",
    className: Logo_module_scss_1["default"].logo
  }, {
    children: [(0, jsx_runtime_1.jsx)("img", {
      src: "../../assets/icons/logo.svg",
      alt: "logo"
    }), (0, jsx_runtime_1.jsx)("h5", {
      children: "RSLang"
    })]
  }));
};

exports["default"] = Logo;

/***/ }),

/***/ "./components/Header/Navigation/NavLink/NavLink.tsx":
/*!**********************************************************!*\
  !*** ./components/Header/Navigation/NavLink/NavLink.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var useApplicationAccessContext_1 = __importDefault(__webpack_require__(/*! ../../../../hooks/useApplicationAccessContext */ "./hooks/useApplicationAccessContext.tsx"));

var NavLink_module_scss_1 = __importDefault(__webpack_require__(/*! ./NavLink.module.scss */ "./components/Header/Navigation/NavLink/NavLink.module.scss"));

var NavLink = function NavLink(prop) {
  var isSignedIn = (0, useApplicationAccessContext_1["default"])().isSignedIn;
  var linkStyle = NavLink_module_scss_1["default"].link;

  if (!isSignedIn && prop.page === 'Статистика') {
    linkStyle = "".concat(linkStyle, " ").concat(NavLink_module_scss_1["default"].disabled);
  }

  return (0, jsx_runtime_1.jsx)("li", __assign({
    className: NavLink_module_scss_1["default"].item
  }, {
    children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
      className: linkStyle,
      to: "".concat(prop.path)
    }, {
      children: prop.page
    }))
  }));
};

exports["default"] = NavLink;

/***/ }),

/***/ "./components/Header/Navigation/Navigation.tsx":
/*!*****************************************************!*\
  !*** ./components/Header/Navigation/Navigation.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var NavLink_1 = __importDefault(__webpack_require__(/*! ./NavLink/NavLink */ "./components/Header/Navigation/NavLink/NavLink.tsx"));

var navConst_1 = __importDefault(__webpack_require__(/*! ../../../common/constants/navConst */ "./common/constants/navConst.ts"));

var Navigation_module_scss_1 = __importDefault(__webpack_require__(/*! ./Navigation.module.scss */ "./components/Header/Navigation/Navigation.module.scss"));

var Navbar = function Navbar() {
  return (0, jsx_runtime_1.jsx)("nav", {
    children: (0, jsx_runtime_1.jsx)("ul", __assign({
      className: Navigation_module_scss_1["default"].navList
    }, {
      children: navConst_1["default"].map(function (item) {
        return (0, jsx_runtime_1.jsx)(NavLink_1["default"], {
          page: item[0],
          path: item[1]
        }, item[0]);
      })
    }))
  });
};

exports["default"] = Navbar;

/***/ }),

/***/ "./components/ProgressBar/Circle/Circle.tsx":
/*!**************************************************!*\
  !*** ./components/ProgressBar/Circle/Circle.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Circle_module_scss_1 = __importDefault(__webpack_require__(/*! ./Circle.module.scss */ "./components/ProgressBar/Circle/Circle.module.scss"));

var Circle = function Circle(_a) {
  var color = _a.color,
      isProgress = _a.isProgress;
  return (0, jsx_runtime_1.jsx)("circle", {
    className: isProgress ? "progress ".concat(Circle_module_scss_1["default"].circle) : '',
    stroke: color,
    cx: "103",
    cy: "103",
    strokeWidth: "20",
    r: "93",
    fill: "transparent"
  });
};

exports["default"] = Circle;

/***/ }),

/***/ "./components/ProgressBar/ProgressBar.tsx":
/*!************************************************!*\
  !*** ./components/ProgressBar/ProgressBar.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var ProgressBar_module_scss_1 = __importDefault(__webpack_require__(/*! ./ProgressBar.module.scss */ "./components/ProgressBar/ProgressBar.module.scss"));

var Circle_1 = __importDefault(__webpack_require__(/*! ./Circle/Circle */ "./components/ProgressBar/Circle/Circle.tsx"));

var ProgressBar = function ProgressBar(_a) {
  var progress = _a.progress,
      sprint = _a.sprint,
      isStat = _a.isStat;

  var setProgress = function setProgress() {
    var progressElement = document.querySelector('.progress');
    var radius = progressElement.r.baseVal.value;
    var circumference = 2 * Math.PI * radius;
    progressElement.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);

    (function (percentage) {
      var offset = circumference * (1 - percentage / 100);
      progressElement.style.strokeDashoffset = "".concat(offset);
    })(100 - progress);
  };

  (0, react_1.useEffect)(function () {
    setProgress();
  }, []);
  return (0, jsx_runtime_1.jsxs)("svg", __assign({
    className: ProgressBar_module_scss_1["default"].progress,
    width: "206",
    height: "206"
  }, {
    children: [(0, jsx_runtime_1.jsx)(Circle_1["default"], {
      color: sprint ? '#ffa733' : '#AFCDFB'
    }), (0, jsx_runtime_1.jsx)(Circle_1["default"], {
      color: sprint ? '#ffe8d4' : '#E7E7E7',
      isProgress: true
    }), (0, jsx_runtime_1.jsx)("foreignObject", __assign({
      width: "206",
      height: "206"
    }, {
      children: (0, jsx_runtime_1.jsxs)("div", __assign({
        className: ProgressBar_module_scss_1["default"].content
      }, {
        children: [(0, jsx_runtime_1.jsxs)("p", __assign({
          className: ProgressBar_module_scss_1["default"].percentage
        }, {
          children: [progress, " %"]
        })), isStat ? '' : (0, jsx_runtime_1.jsx)("p", __assign({
          className: ProgressBar_module_scss_1["default"].text
        }, {
          children: "\u0438\u0437\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432"
        }))]
      }))
    }))]
  }));
};

exports["default"] = ProgressBar;

/***/ }),

/***/ "./components/RouteComponent/RouteComponent.tsx":
/*!******************************************************!*\
  !*** ./components/RouteComponent/RouteComponent.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Footer_1 = __importDefault(__webpack_require__(/*! ../Footer/Footer */ "./components/Footer/Footer.tsx"));

var Header_1 = __importDefault(__webpack_require__(/*! ../Header/Header */ "./components/Header/Header.tsx"));

var Footer_module_scss_1 = __importDefault(__webpack_require__(/*! ../Footer/Footer.module.scss */ "./components/Footer/Footer.module.scss"));

var RouteComponent = function RouteComponent(props) {
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [(0, jsx_runtime_1.jsx)(Header_1["default"], {
      navigationHide: props.navigationHide
    }), props.children, (0, jsx_runtime_1.jsx)(Footer_1["default"], {
      className: Footer_module_scss_1["default"].footer
    })]
  });
};

exports["default"] = RouteComponent;

/***/ }),

/***/ "./components/Section/Section.tsx":
/*!****************************************!*\
  !*** ./components/Section/Section.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Section_module_scss_1 = __importDefault(__webpack_require__(/*! ./Section.module.scss */ "./components/Section/Section.module.scss"));

var Section = function Section(props) {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Section_module_scss_1["default"].section
  }, {
    children: [(0, jsx_runtime_1.jsxs)("h2", __assign({
      className: Section_module_scss_1["default"].header
    }, {
      children: [props.header, " ", props.advantages && (0, jsx_runtime_1.jsx)("span", __assign({
        style: {
          color: '#FFA733'
        }
      }, {
        children: "RSlang"
      }))]
    })), (0, jsx_runtime_1.jsx)("div", __assign({
      className: Section_module_scss_1["default"].content
    }, {
      children: props.children
    }))]
  }));
};

exports["default"] = Section;

/***/ }),

/***/ "./components/StatisticToday/GameStat/GameStat.tsx":
/*!*********************************************************!*\
  !*** ./components/StatisticToday/GameStat/GameStat.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var GameStat_module_scss_1 = __importDefault(__webpack_require__(/*! ./GameStat.module.scss */ "./components/StatisticToday/GameStat/GameStat.module.scss"));

var GameStat = function GameStat(props) {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: GameStat_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsxs)("div", __assign({
      className: GameStat_module_scss_1["default"].text
    }, {
      children: [(0, jsx_runtime_1.jsx)("h2", __assign({
        className: GameStat_module_scss_1["default"].header
      }, {
        children: props.type === 'audio' ? 'Аудиовызов' : 'Спринт'
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: GameStat_module_scss_1["default"].description
      }, {
        children: [(0, jsx_runtime_1.jsxs)("p", {
          children: ["\u0418\u0437\u0443\u0447\u0435\u043D\u043E \u0441\u043B\u043E\u0432: ", props.learned]
        }), (0, jsx_runtime_1.jsxs)("p", {
          children: ["\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432: ", props.correct, " %"]
        }), (0, jsx_runtime_1.jsxs)("p", {
          children: ["\u0421\u0430\u043C\u0430\u044F \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432: ", props.row]
        })]
      }))]
    })), (0, jsx_runtime_1.jsx)("img", {
      src: "../../../assets/icons/".concat(props.type === 'audio' ? 'StatAudio' : 'StatSprint', ".svg"),
      alt: ""
    })]
  }));
};

exports["default"] = GameStat;

/***/ }),

/***/ "./components/StatisticToday/StatWords/StatWords.tsx":
/*!***********************************************************!*\
  !*** ./components/StatisticToday/StatWords/StatWords.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var StatWords_module_scss_1 = __importDefault(__webpack_require__(/*! ./StatWords.module.scss */ "./components/StatisticToday/StatWords/StatWords.module.scss"));

var StatWords = function StatWords(props) {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: StatWords_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsx)("span", {
      children: props.amount
    }), (0, jsx_runtime_1.jsx)("p", {
      children: "\u0438\u0437\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432"
    })]
  }));
};

exports["default"] = StatWords;

/***/ }),

/***/ "./components/StatisticToday/StatisticToday.tsx":
/*!******************************************************!*\
  !*** ./components/StatisticToday/StatisticToday.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var Card_1 = __importDefault(__webpack_require__(/*! ../../components/Card/Card */ "./components/Card/Card.tsx"));

var StatisticToday_module_scss_1 = __importDefault(__webpack_require__(/*! ./StatisticToday.module.scss */ "./components/StatisticToday/StatisticToday.module.scss"));

var GameStat_1 = __importDefault(__webpack_require__(/*! ./GameStat/GameStat */ "./components/StatisticToday/GameStat/GameStat.tsx"));

var LearnedWordsAPI_1 = __importDefault(__webpack_require__(/*! ../API/LearnedWordsAPI/LearnedWordsAPI */ "./components/API/LearnedWordsAPI/LearnedWordsAPI.ts"));

var getUserData_1 = __importDefault(__webpack_require__(/*! ../../common/getUserData */ "./common/getUserData.tsx"));

var ProgressBar_1 = __importDefault(__webpack_require__(/*! ../ProgressBar/ProgressBar */ "./components/ProgressBar/ProgressBar.tsx"));

var StatWords_1 = __importDefault(__webpack_require__(/*! ./StatWords/StatWords */ "./components/StatisticToday/StatWords/StatWords.tsx"));

var StatisticAPI_1 = __importDefault(__webpack_require__(/*! ../API/StatisticAPI/StatisticAPI */ "./components/API/StatisticAPI/StatisticAPI.ts"));

var StatisticToday = function StatisticToday() {
  var _a = (0, react_1.useState)(0),
      amountSprint = _a[0],
      setAmountSprint = _a[1];

  var _b = (0, react_1.useState)(0),
      amountAudio = _b[0],
      setAmountAudio = _b[1];

  var _c = (0, react_1.useState)(0),
      correctSprint = _c[0],
      setCorrectSprint = _c[1];

  var _d = (0, react_1.useState)(0),
      correctAudio = _d[0],
      setCorrectAudio = _d[1];

  var _e = (0, react_1.useState)(0),
      rowSprint = _e[0],
      setRowSprint = _e[1];

  var _f = (0, react_1.useState)(0),
      rowAudio = _f[0],
      setRowAudio = _f[1];

  var userDate = (0, getUserData_1["default"])();

  if (userDate) {
    var objectWords = function objectWords() {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , LearnedWordsAPI_1["default"].getLearnedWords(userDate.id, userDate.token)];

            case 1:
              result = _a.sent();

              if (result.optional.learnedWordsNumberAudio && result.optional.learnedWordsNumberSprint) {
                setAmountSprint(Number(result.optional.learnedWordsNumberSprint[Object.keys(result.optional.learnedWordsNumberSprint)[0]]));
                setAmountAudio(Number(result.optional.learnedWordsNumberAudio[Object.keys(result.optional.learnedWordsNumberAudio)[0]]));
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    var objectStat = function objectStat() {
      return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , StatisticAPI_1["default"].getStatistic(userDate.id, userDate.token)];

            case 1:
              result = _a.sent();
              setRowAudio(Number(result.optional.audioPointsInARow[Object.keys(result.optional.audioPointsInARow)[0]]));
              setRowSprint(Number(result.optional.sprintPointsInARow[Object.keys(result.optional.sprintPointsInARow)[0]]));
              setCorrectAudio(Number(result.optional.gamesScoreAudio[Object.keys(result.optional.gamesScoreAudio)[0]]));
              setCorrectSprint(Number(result.optional.gamesScoreSprint[Object.keys(result.optional.gamesScoreSprint)[0]]));
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    objectWords();
    objectStat();
  }

  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [(0, jsx_runtime_1.jsx)("h5", __assign({
      className: StatisticToday_module_scss_1["default"].header
    }, {
      children: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"
    })), (0, jsx_runtime_1.jsxs)("div", __assign({
      className: StatisticToday_module_scss_1["default"].container
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", __assign({
        className: StatisticToday_module_scss_1["default"].left
      }, {
        children: [(0, jsx_runtime_1.jsx)(Card_1["default"], __assign({
          type: 'statisticSmall'
        }, {
          children: (0, jsx_runtime_1.jsx)(StatWords_1["default"], {
            amount: amountSprint + amountAudio
          })
        })), (0, jsx_runtime_1.jsxs)(Card_1["default"], __assign({
          type: 'statisticMedium'
        }, {
          children: [(0, jsx_runtime_1.jsx)("div", {
            children: (0, jsx_runtime_1.jsx)(ProgressBar_1["default"], {
              progress: Math.ceil((correctSprint + correctAudio) / 2 * 100),
              sprint: true,
              isStat: true
            })
          }), (0, jsx_runtime_1.jsx)("span", __assign({
            className: StatisticToday_module_scss_1["default"].wrightAnswers
          }, {
            children: "\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432"
          }))]
        }))]
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: StatisticToday_module_scss_1["default"].right
      }, {
        children: [(0, jsx_runtime_1.jsx)(Card_1["default"], __assign({
          type: 'statisticLarge'
        }, {
          children: (0, jsx_runtime_1.jsx)(GameStat_1["default"], {
            learned: amountSprint,
            correct: Math.floor(correctSprint * 100),
            row: rowSprint,
            type: "sprint"
          })
        })), (0, jsx_runtime_1.jsx)(Card_1["default"], __assign({
          type: 'statisticLarge'
        }, {
          children: (0, jsx_runtime_1.jsx)(GameStat_1["default"], {
            learned: amountAudio,
            correct: Math.floor(correctAudio * 100),
            row: rowAudio,
            type: "audio"
          })
        }))]
      }))]
    }))]
  });
};

exports["default"] = StatisticToday;

/***/ }),

/***/ "./components/StatisticsForAllTime/Chart/Chart.tsx":
/*!*********************************************************!*\
  !*** ./components/StatisticsForAllTime/Chart/Chart.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var react_chartjs_2_1 = __webpack_require__(/*! react-chartjs-2 */ "../node_modules/react-chartjs-2/dist/index.js");

__webpack_require__(/*! chart.js/auto */ "../node_modules/chart.js/auto/auto.mjs");

__webpack_require__(/*! chartjs-adapter-date-fns */ "../node_modules/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js");

var locale_1 = __webpack_require__(/*! date-fns/locale */ "../node_modules/date-fns/esm/locale/index.js");

var titleFont = {
  family: 'Gilroy',
  style: 'normal',
  weight: '500',
  size: 18,
  lineHeight: '22px'
};
var titleSettings = {
  display: true,
  color: '#082143',
  font: titleFont,
  padding: 20
};
var ticksFont = {
  family: 'Gilroy',
  size: 18,
  lineHeight: '22px'
};
var options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    xAxis: {
      adapters: {
        date: {
          locale: locale_1.ru
        }
      },
      type: 'time',
      time: {
        unit: 'day'
      },
      title: __assign({
        text: 'Период изучения'
      }, titleSettings),
      ticks: {
        color: '#A4A4A4',
        font: ticksFont
      }
    },
    yAxis: {
      title: __assign({
        text: 'Количество слов'
      }, titleSettings),
      ticks: {
        color: '#A4A4A4',
        font: ticksFont
      }
    }
  }
};

function createGradient(ctx, area) {
  var colorStart = 'rgba(255, 207, 11, 0)';
  var colorEnd = '#FFCF0B';
  var gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0.0179, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

var Chart = function Chart(_a) {
  var wordCount = _a.wordCount;
  var chartRef = (0, react_1.useRef)(null);

  var _b = (0, react_1.useState)('rgba(255, 207, 11, 0)'),
      gradient = _b[0],
      setGradient = _b[1];

  (0, react_1.useEffect)(function () {
    if (chartRef.current) {
      setGradient(createGradient(chartRef.current.ctx, chartRef.current.chartArea));
    }
  }, []);
  var data = {
    datasets: [{
      fill: true,
      data: wordCount,
      borderColor: '#FFCF0B',
      backgroundColor: gradient
    }]
  };
  return (0, jsx_runtime_1.jsx)(react_chartjs_2_1.Line, {
    ref: chartRef,
    options: options,
    data: data
  });
};

exports["default"] = Chart;

/***/ }),

/***/ "./components/StatisticsForAllTime/StatisticsForAllTime.tsx":
/*!******************************************************************!*\
  !*** ./components/StatisticsForAllTime/StatisticsForAllTime.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var Chart_1 = __importDefault(__webpack_require__(/*! ../../components/StatisticsForAllTime/Chart/Chart */ "./components/StatisticsForAllTime/Chart/Chart.tsx"));

var LearnedWordsAPI_1 = __importDefault(__webpack_require__(/*! ../API/LearnedWordsAPI/LearnedWordsAPI */ "./components/API/LearnedWordsAPI/LearnedWordsAPI.ts"));

var StatisticsForAllTime_module_scss_1 = __importDefault(__webpack_require__(/*! ./StatisticsForAllTime.module.scss */ "./components/StatisticsForAllTime/StatisticsForAllTime.module.scss"));

var StatisticsForAllTime = function StatisticsForAllTime() {
  var _a = (0, react_1.useState)(true),
      newWordActive = _a[0],
      setNewWordActive = _a[1];

  var _b = (0, react_1.useState)([]),
      userStatisticsPerDay = _b[0],
      setUserStatisticsPerDay = _b[1];

  var controllerRef = (0, react_1.useRef)();

  function getLearnedWords(property) {
    return __awaiter(this, void 0, void 0, function () {
      var storageData, _a, id, token, controller, response, attribute, entries, error_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            storageData = localStorage.getItem('user');
            if (!storageData) return [3
            /*break*/
            , 4];
            _b.label = 1;

          case 1:
            _b.trys.push([1, 3,, 4]);

            _a = JSON.parse(storageData), id = _a.id, token = _a.token;

            if (controllerRef.current) {
              controllerRef.current.abort();
            }

            controller = new AbortController();
            controllerRef.current = controller;
            return [4
            /*yield*/
            , LearnedWordsAPI_1["default"].getLearnedWords(id, token, controller.signal)];

          case 2:
            response = _b.sent();
            attribute = response.optional[property];

            if (attribute) {
              entries = Object.entries(attribute);
              setUserStatisticsPerDay(entries.map(function (_a) {
                var key = _a[0],
                    value = _a[1];
                return {
                  x: Number(key),
                  y: Number(value)
                };
              }));
            }

            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _b.sent();
            console.log(error_1);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  (0, react_1.useEffect)(function () {
    if (newWordActive) {
      getLearnedWords('learnedWordsNumberSprint');
    } else {
      getLearnedWords('learnedWordsNumberAudio');
    }
  }, [newWordActive]);
  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [(0, jsx_runtime_1.jsx)("h5", __assign({
      className: StatisticsForAllTime_module_scss_1["default"].header
    }, {
      children: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F"
    })), (0, jsx_runtime_1.jsxs)("ul", __assign({
      className: StatisticsForAllTime_module_scss_1["default"].navList
    }, {
      children: [(0, jsx_runtime_1.jsx)("li", __assign({
        className: StatisticsForAllTime_module_scss_1["default"].item
      }, {
        children: (0, jsx_runtime_1.jsx)("button", __assign({
          className: newWordActive ? StatisticsForAllTime_module_scss_1["default"].buttonActive : StatisticsForAllTime_module_scss_1["default"].button,
          onClick: function onClick() {
            setNewWordActive(true);
          }
        }, {
          children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432"
        }))
      })), (0, jsx_runtime_1.jsx)("li", __assign({
        className: StatisticsForAllTime_module_scss_1["default"].item
      }, {
        children: (0, jsx_runtime_1.jsx)("button", __assign({
          className: newWordActive ? StatisticsForAllTime_module_scss_1["default"].button : StatisticsForAllTime_module_scss_1["default"].buttonActive,
          onClick: function onClick() {
            setNewWordActive(false);
          }
        }, {
          children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0437\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432"
        }))
      }))]
    })), (0, jsx_runtime_1.jsx)(Chart_1["default"], {
      wordCount: userStatisticsPerDay
    })]
  });
};

exports["default"] = StatisticsForAllTime;

/***/ }),

/***/ "./components/WordCard/WordCard.tsx":
/*!******************************************!*\
  !*** ./components/WordCard/WordCard.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var WordCard_module_scss_1 = __importDefault(__webpack_require__(/*! ./WordCard.module.scss */ "./components/WordCard/WordCard.module.scss"));

var WordCard = function WordCard(_a) {
  var word = _a.word,
      wordId = _a.wordId,
      wordTranslate = _a.wordTranslate,
      accentColor = _a.accentColor,
      setWord = _a.setWord,
      index = _a.index;

  var addColor = function addColor(event) {
    var wordCards = document.querySelectorAll('.card__word');
    var target = event.currentTarget;
    var style = target.style;
    wordCards.forEach(function (card) {
      return card.removeAttribute('style');
    });
    setWord(wordId);
    style.background = accentColor;
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    style: index ? {} : {
      background: accentColor
    },
    onClick: function onClick(e) {
      return addColor(e);
    },
    className: "card__word ".concat(WordCard_module_scss_1["default"].card)
  }, {
    children: [(0, jsx_runtime_1.jsx)("p", __assign({
      className: WordCard_module_scss_1["default"].word
    }, {
      children: word
    })), (0, jsx_runtime_1.jsx)("p", __assign({
      className: WordCard_module_scss_1["default"].translate
    }, {
      children: wordTranslate
    }))]
  }));
};

exports["default"] = WordCard;

/***/ }),

/***/ "./context/context.tsx":
/*!*****************************!*\
  !*** ./context/context.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var ApplicationAccessContext = (0, react_1.createContext)(null);
exports["default"] = ApplicationAccessContext;

/***/ }),

/***/ "./hooks/useApplicationAccessContext.tsx":
/*!***********************************************!*\
  !*** ./hooks/useApplicationAccessContext.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var context_1 = __importDefault(__webpack_require__(/*! ../context/context */ "./context/context.tsx"));

var useApplicationAccessContext = function useApplicationAccessContext() {
  var appContext = (0, react_1.useContext)(context_1["default"]);

  if (!appContext) {
    throw new Error();
  }

  return appContext;
};

exports["default"] = useApplicationAccessContext;

/***/ }),

/***/ "./hooks/usePagination.ts":
/*!********************************!*\
  !*** ./hooks/usePagination.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePagination = exports.DOTS = void 0;

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

exports.DOTS = '...';

var range = function range(start, end) {
  var length = end - start + 1;
  return Array.from({
    length: length
  }, function (_, idx) {
    return idx + start;
  });
};

var usePagination = function usePagination(currentPage) {
  var paginationRange = (0, react_1.useMemo)(function () {
    var siblingCount = 1;
    var totalPageCount = 30;
    var leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    var rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    var shouldShowLeftDots = leftSiblingIndex > 2;
    var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    var firstPageIndex = 1;
    var lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      var leftItemCount = 3 + 2 * siblingCount;
      var leftRange = range(1, leftItemCount);
      return __spreadArray(__spreadArray([], leftRange, true), [exports.DOTS, totalPageCount], false);
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      var rightItemCount = 3 + 2 * siblingCount;
      var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return __spreadArray([firstPageIndex, exports.DOTS], rightRange, true);
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      var middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return __spreadArray(__spreadArray([firstPageIndex, exports.DOTS], middleRange, true), [exports.DOTS, lastPageIndex], false);
    }

    return range(1, totalPageCount);
  }, [currentPage]);
  return paginationRange;
};

exports.usePagination = usePagination;

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

__webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");

var client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js"));

var App_1 = __importDefault(__webpack_require__(/*! ./App */ "./App.tsx"));

var root = client_1["default"].createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(App_1["default"], {}));

/***/ }),

/***/ "./pages/Entrance/Authorization/Authorization.tsx":
/*!********************************************************!*\
  !*** ./pages/Entrance/Authorization/Authorization.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var UsersAPI_1 = __importDefault(__webpack_require__(/*! ../../../components/API/UsersAPI/UsersAPI */ "./components/API/UsersAPI/UsersAPI.ts"));

var Button_1 = __importDefault(__webpack_require__(/*! ../../../components/Button/Button */ "./components/Button/Button.tsx"));

var useApplicationAccessContext_1 = __importDefault(__webpack_require__(/*! ../../../hooks/useApplicationAccessContext */ "./hooks/useApplicationAccessContext.tsx"));

var FormInput_1 = __importDefault(__webpack_require__(/*! ../FormInput/FormInput */ "./pages/Entrance/FormInput/FormInput.tsx"));

var WarningMessage_1 = __importDefault(__webpack_require__(/*! ../WarningMessage/WarningMessage */ "./pages/Entrance/WarningMessage/WarningMessage.tsx"));

var Authorization_module_scss_1 = __importDefault(__webpack_require__(/*! ./Authorization.module.scss */ "./pages/Entrance/Authorization/Authorization.module.scss"));

var Authorization = function Authorization() {
  var _a = (0, react_1.useState)(''),
      email = _a[0],
      setEmail = _a[1];

  var _b = (0, react_1.useState)(false),
      emailDirty = _b[0],
      setEmailDirty = _b[1];

  var _c = (0, react_1.useState)('Email не может быть пустым'),
      emailError = _c[0],
      setEmailError = _c[1];

  var _d = (0, react_1.useState)(''),
      password = _d[0],
      setPassword = _d[1];

  var _e = (0, react_1.useState)(false),
      passwordDirty = _e[0],
      setPasswordDirty = _e[1];

  var _f = (0, react_1.useState)('Пароль не может быть пустым'),
      passwordError = _f[0],
      setPasswordError = _f[1];

  var _g = (0, react_1.useState)(false),
      formValid = _g[0],
      setFormValid = _g[1];

  var _h = (0, react_1.useState)(''),
      registrationError = _h[0],
      setRegistrationError = _h[1];

  var _j = (0, react_1.useState)(false),
      loading = _j[0],
      setLoading = _j[1];

  var navigate = (0, react_router_dom_1.useNavigate)();
  var setIsSignedIn = (0, useApplicationAccessContext_1["default"])().setIsSignedIn;
  (0, react_1.useEffect)(function () {
    if (!emailError && !passwordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailError, passwordError]);

  var blurHandler = function blurHandler(event) {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;

      case 'password':
        setPasswordDirty(true);
        break;

      default:
    }
  };

  var changeHandler = function changeHandler(event) {
    var regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);

        if (!event.target.value) {
          setEmailError('Email не может быть пустым');
        } else if (!regExpEmail.test(String(event.target.value).toLowerCase())) {
          setEmailError('Некорректный Email');
        } else {
          setEmailError('');
        }

        break;

      case 'password':
        setPassword(event.target.value);

        if (!event.target.value) {
          setPasswordError('Пароль не может быть пустым');
        } else if (event.target.value.length < 8) {
          setPasswordError('Введите не менее 8 символов');
        } else {
          setPasswordError('');
        }

        break;

      default:
    }
  };

  var authorizationUser = function authorizationUser() {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, id, token, error_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, 3, 4]);

            setLoading(true);
            return [4
            /*yield*/
            , UsersAPI_1["default"].signInUser({
              email: email,
              password: password
            })];

          case 1:
            _a = _b.sent(), id = _a.userId, token = _a.token;
            localStorage.setItem('user', JSON.stringify({
              id: id,
              token: token
            }));
            navigate('/');
            setIsSignedIn(true);
            return [3
            /*break*/
            , 4];

          case 2:
            error_1 = _b.sent();

            if (error_1 instanceof Error) {
              setRegistrationError(error_1.message);
            } else {
              setRegistrationError('Неизвестная ошибка');
              console.log(error_1);
            }

            return [3
            /*break*/
            , 4];

          case 3:
            setLoading(false);
            return [7
            /*endfinally*/
            ];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return (0, jsx_runtime_1.jsx)("form", __assign({
    action: "",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      authorizationUser();
    }
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: Authorization_module_scss_1["default"].wrapper
    }, {
      children: [(0, jsx_runtime_1.jsx)("h3", __assign({
        className: Authorization_module_scss_1["default"].header
      }, {
        children: "\u0412\u043E\u0439\u0442\u0438"
      })), (0, jsx_runtime_1.jsxs)("p", __assign({
        className: Authorization_module_scss_1["default"].info
      }, {
        children: ["\u041D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C?\xA0", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
          to: "/registration",
          className: Authorization_module_scss_1["default"].registration
        }, {
          children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
        }))]
      })), (0, jsx_runtime_1.jsx)(FormInput_1["default"], {
        label: "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
        value: email,
        onChange: changeHandler,
        onBlur: blurHandler,
        name: "email",
        type: "email",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email",
        dirty: emailDirty,
        error: emailError
      }), (0, jsx_runtime_1.jsx)(FormInput_1["default"], {
        label: "\u041F\u0430\u0440\u043E\u043B\u044C",
        value: password,
        onChange: changeHandler,
        onBlur: blurHandler,
        name: "password",
        type: "password",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        dirty: passwordDirty,
        error: passwordError
      }), (0, jsx_runtime_1.jsx)(Button_1["default"], __assign({
        type: "submit",
        disabled: !formValid,
        className: Authorization_module_scss_1["default"].buttonAuthorization,
        loading: loading
      }, {
        children: "\u0412\u043E\u0439\u0442\u0438"
      })), (0, jsx_runtime_1.jsx)(WarningMessage_1["default"], __assign({
        errorCondition: registrationError
      }, {
        children: registrationError
      }))]
    }))
  }));
};

exports["default"] = Authorization;

/***/ }),

/***/ "./pages/Entrance/Entrance.tsx":
/*!*************************************!*\
  !*** ./pages/Entrance/Entrance.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Entrance_module_scss_1 = __importDefault(__webpack_require__(/*! ./Entrance.module.scss */ "./pages/Entrance/Entrance.module.scss"));

var RouteComponent_1 = __importDefault(__webpack_require__(/*! ../../components/RouteComponent/RouteComponent */ "./components/RouteComponent/RouteComponent.tsx"));

var Entrance = function Entrance(_a) {
  var children = _a.children;
  return (0, jsx_runtime_1.jsx)(RouteComponent_1["default"], __assign({
    navigationHide: true
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: Entrance_module_scss_1["default"].container
    }, {
      children: [(0, jsx_runtime_1.jsx)("div", {
        className: Entrance_module_scss_1["default"].illustration
      }), children]
    }))
  }));
};

exports["default"] = Entrance;

/***/ }),

/***/ "./pages/Entrance/FormInput/FormInput.tsx":
/*!************************************************!*\
  !*** ./pages/Entrance/FormInput/FormInput.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var Button_1 = __importDefault(__webpack_require__(/*! ../../../components/Button/Button */ "./components/Button/Button.tsx"));

var WarningMessage_1 = __importDefault(__webpack_require__(/*! ../WarningMessage/WarningMessage */ "./pages/Entrance/WarningMessage/WarningMessage.tsx"));

var FormInput_module_scss_1 = __importDefault(__webpack_require__(/*! ./FormInput.module.scss */ "./pages/Entrance/FormInput/FormInput.module.scss"));

var FormInput = function FormInput(_a) {
  var label = _a.label,
      value = _a.value,
      onChange = _a.onChange,
      onBlur = _a.onBlur,
      name = _a.name,
      type = _a.type,
      placeholder = _a.placeholder,
      dirty = _a.dirty,
      error = _a.error;

  var _b = (0, react_1.useState)(false),
      inputHide = _b[0],
      setInputShow = _b[1];

  return (0, jsx_runtime_1.jsxs)("label", {
    children: [(0, jsx_runtime_1.jsx)("p", __assign({
      className: FormInput_module_scss_1["default"].explanation
    }, {
      children: label
    })), type === 'password' ? inputHide && (0, jsx_runtime_1.jsxs)("div", __assign({
      className: FormInput_module_scss_1["default"].inputContainer
    }, {
      children: [(0, jsx_runtime_1.jsx)("input", {
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        name: name,
        type: "text",
        className: FormInput_module_scss_1["default"].input,
        placeholder: placeholder
      }), (0, jsx_runtime_1.jsx)(Button_1["default"], {
        type: "button",
        className: FormInput_module_scss_1["default"].buttonEye,
        onClick: function onClick() {
          return setInputShow(false);
        }
      })]
    })) || (0, jsx_runtime_1.jsxs)("div", __assign({
      className: FormInput_module_scss_1["default"].inputContainer
    }, {
      children: [(0, jsx_runtime_1.jsx)("input", {
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        name: name,
        type: type,
        className: FormInput_module_scss_1["default"].input,
        placeholder: placeholder
      }), (0, jsx_runtime_1.jsx)(Button_1["default"], {
        type: "button",
        className: FormInput_module_scss_1["default"].buttonEyeHide,
        onClick: function onClick() {
          return setInputShow(true);
        }
      })]
    })) : (0, jsx_runtime_1.jsx)("div", __assign({
      className: FormInput_module_scss_1["default"].inputContainer
    }, {
      children: (0, jsx_runtime_1.jsx)("input", {
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        name: name,
        type: type,
        className: FormInput_module_scss_1["default"].input,
        placeholder: placeholder
      })
    })), (0, jsx_runtime_1.jsx)(WarningMessage_1["default"], __assign({
      errorCondition: dirty && error
    }, {
      children: error
    }))]
  });
};

exports["default"] = FormInput;

/***/ }),

/***/ "./pages/Entrance/Registration/Registration.tsx":
/*!******************************************************!*\
  !*** ./pages/Entrance/Registration/Registration.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var Button_1 = __importDefault(__webpack_require__(/*! ../../../components/Button/Button */ "./components/Button/Button.tsx"));

var FormInput_1 = __importDefault(__webpack_require__(/*! ../FormInput/FormInput */ "./pages/Entrance/FormInput/FormInput.tsx"));

var Registration_module_scss_1 = __importDefault(__webpack_require__(/*! ./Registration.module.scss */ "./pages/Entrance/Registration/Registration.module.scss"));

var UsersAPI_1 = __importDefault(__webpack_require__(/*! ../../../components/API/UsersAPI/UsersAPI */ "./components/API/UsersAPI/UsersAPI.ts"));

var WarningMessage_1 = __importDefault(__webpack_require__(/*! ../WarningMessage/WarningMessage */ "./pages/Entrance/WarningMessage/WarningMessage.tsx"));

var useApplicationAccessContext_1 = __importDefault(__webpack_require__(/*! ../../../hooks/useApplicationAccessContext */ "./hooks/useApplicationAccessContext.tsx"));

var Registration = function Registration() {
  var _a = (0, react_1.useState)(''),
      email = _a[0],
      setEmail = _a[1];

  var _b = (0, react_1.useState)(false),
      emailDirty = _b[0],
      setEmailDirty = _b[1];

  var _c = (0, react_1.useState)('Email не может быть пустым'),
      emailError = _c[0],
      setEmailError = _c[1];

  var _d = (0, react_1.useState)(''),
      name = _d[0],
      setName = _d[1];

  var _e = (0, react_1.useState)(false),
      nameDirty = _e[0],
      setNameDirty = _e[1];

  var _f = (0, react_1.useState)('Имя не может быть пустым'),
      nameError = _f[0],
      setNameError = _f[1];

  var _g = (0, react_1.useState)(''),
      password = _g[0],
      setPassword = _g[1];

  var _h = (0, react_1.useState)(false),
      passwordDirty = _h[0],
      setPasswordDirty = _h[1];

  var _j = (0, react_1.useState)('Пароль не может быть пустым'),
      passwordError = _j[0],
      setPasswordError = _j[1];

  var _k = (0, react_1.useState)(false),
      formValid = _k[0],
      setFormValid = _k[1];

  var _l = (0, react_1.useState)(''),
      registrationError = _l[0],
      setRegistrationError = _l[1];

  var setIsSignedIn = (0, useApplicationAccessContext_1["default"])().setIsSignedIn;
  var navigate = (0, react_router_dom_1.useNavigate)();

  var _m = (0, react_1.useState)(false),
      loading = _m[0],
      setLoading = _m[1];

  (0, react_1.useEffect)(function () {
    if (!emailError && !nameError && !passwordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailError, nameError, passwordError]);

  var blurHandler = function blurHandler(event) {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;

      case 'name':
        setNameDirty(true);
        break;

      case 'password':
        setPasswordDirty(true);
        break;

      default:
    }
  };

  var changeHandler = function changeHandler(event) {
    var regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);

        if (!event.target.value) {
          setEmailError('Email не может быть пустым');
        } else if (!regExpEmail.test(String(event.target.value).toLowerCase())) {
          setEmailError('Некорректный Email');
        } else {
          setEmailError('');
        }

        break;

      case 'name':
        setName(event.target.value);

        if (!event.target.value) {
          setNameError('Имя не может быть пустым');
        } else {
          setNameError('');
        }

        break;

      case 'password':
        setPassword(event.target.value);

        if (!event.target.value) {
          setPasswordError('Пароль не может быть пустым');
        } else if (event.target.value.length < 8) {
          setPasswordError('Введите не менее 8 символов');
        } else {
          setPasswordError('');
        }

        break;

      default:
    }
  };

  var registerUser = function registerUser() {
    return __awaiter(void 0, void 0, void 0, function () {
      var id, token, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, 4, 5]);

            setLoading(true);
            return [4
            /*yield*/
            , UsersAPI_1["default"].createUser({
              name: name,
              email: email,
              password: password
            })];

          case 1:
            id = _a.sent().id;
            return [4
            /*yield*/
            , UsersAPI_1["default"].signInUser({
              email: email,
              password: password
            })];

          case 2:
            token = _a.sent().token;
            localStorage.setItem('user', JSON.stringify({
              id: id,
              token: token
            }));
            navigate('/');
            setIsSignedIn(true);
            return [3
            /*break*/
            , 5];

          case 3:
            error_1 = _a.sent();

            if (error_1 instanceof Error) {
              setRegistrationError(error_1.message);
            } else {
              setRegistrationError('Неизвестная ошибка');
              console.log(error_1);
            }

            return [3
            /*break*/
            , 5];

          case 4:
            setLoading(false);
            return [7
            /*endfinally*/
            ];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return (0, jsx_runtime_1.jsx)("form", __assign({
    action: "",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      registerUser();
    }
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: Registration_module_scss_1["default"].wrapper
    }, {
      children: [(0, jsx_runtime_1.jsx)("h3", __assign({
        className: Registration_module_scss_1["default"].header
      }, {
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      })), (0, jsx_runtime_1.jsxs)("p", __assign({
        className: Registration_module_scss_1["default"].info
      }, {
        children: ["\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C?\xA0", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
          to: "/authorization",
          className: Registration_module_scss_1["default"].authorization
        }, {
          children: "\u0412\u043E\u0439\u0442\u0438"
        }))]
      })), (0, jsx_runtime_1.jsx)(FormInput_1["default"], {
        label: "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
        value: email,
        onChange: changeHandler,
        onBlur: blurHandler,
        name: "email",
        type: "email",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email",
        dirty: emailDirty,
        error: emailError
      }), (0, jsx_runtime_1.jsx)(FormInput_1["default"], {
        label: "\u0418\u043C\u044F",
        value: name,
        onChange: changeHandler,
        onBlur: blurHandler,
        name: "name",
        type: "text",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F",
        dirty: nameDirty,
        error: nameError
      }), (0, jsx_runtime_1.jsx)(FormInput_1["default"], {
        label: "\u041F\u0430\u0440\u043E\u043B\u044C",
        value: password,
        onChange: changeHandler,
        onBlur: blurHandler,
        name: "password",
        type: "password",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        dirty: passwordDirty,
        error: passwordError
      }), (0, jsx_runtime_1.jsx)(Button_1["default"], __assign({
        type: "submit",
        disabled: !formValid,
        className: Registration_module_scss_1["default"].buttonRegistration,
        loading: loading
      }, {
        children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      })), (0, jsx_runtime_1.jsx)(WarningMessage_1["default"], __assign({
        errorCondition: registrationError
      }, {
        children: registrationError
      }))]
    }))
  }));
};

exports["default"] = Registration;

/***/ }),

/***/ "./pages/Entrance/WarningMessage/WarningMessage.tsx":
/*!**********************************************************!*\
  !*** ./pages/Entrance/WarningMessage/WarningMessage.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var WarningMessage_module_scss_1 = __importDefault(__webpack_require__(/*! ./WarningMessage.module.scss */ "./pages/Entrance/WarningMessage/WarningMessage.module.scss"));

var WarningMessage = function WarningMessage(_a) {
  var errorCondition = _a.errorCondition,
      children = _a.children;
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
    children: errorCondition ? (0, jsx_runtime_1.jsx)("p", __assign({
      className: WarningMessage_module_scss_1["default"].error
    }, {
      children: children
    })) : (0, jsx_runtime_1.jsx)("p", __assign({
      className: WarningMessage_module_scss_1["default"].transparent
    }, {
      children: "Error"
    }))
  });
};

exports["default"] = WarningMessage;

/***/ }),

/***/ "./pages/Games/Audio/Audio.tsx":
/*!*************************************!*\
  !*** ./pages/Games/Audio/Audio.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Audio_module_scss_1 = __importDefault(__webpack_require__(/*! ./Audio.module.scss */ "./pages/Games/Audio/Audio.module.scss"));

var Header_1 = __importDefault(__webpack_require__(/*! ./Header/Header */ "./pages/Games/Audio/Header/Header.tsx"));

var Game_1 = __importDefault(__webpack_require__(/*! ./Game/Game */ "./pages/Games/Audio/Game/Game.tsx"));

var Audio = function Audio(_a) {
  var setPoints = _a.setPoints,
      setAmount = _a.setAmount,
      setCorrect = _a.setCorrect;
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: Audio_module_scss_1["default"].container
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: Audio_module_scss_1["default"].container__content
    }, {
      children: [(0, jsx_runtime_1.jsx)(Header_1["default"], {}), (0, jsx_runtime_1.jsx)(Game_1["default"], {
        setPoints: setPoints,
        setAmount: setAmount,
        setCorrect: setCorrect
      })]
    }))
  }));
};

exports["default"] = Audio;

/***/ }),

/***/ "./pages/Games/Audio/Game/Description/Description.tsx":
/*!************************************************************!*\
  !*** ./pages/Games/Audio/Game/Description/Description.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Description_module_scss_1 = __importDefault(__webpack_require__(/*! ./Description.module.scss */ "./pages/Games/Audio/Game/Description/Description.module.scss"));

var Difficulty_1 = __importDefault(__webpack_require__(/*! ./Difficulty/Difficulty */ "./pages/Games/Audio/Game/Description/Difficulty/Difficulty.tsx"));

var Button_1 = __importDefault(__webpack_require__(/*! ../../../../../components/Button/Button */ "./components/Button/Button.tsx"));

var Description = function Description(_a) {
  var setDifficultyLevel = _a.setDifficultyLevel,
      setIsSettled = _a.setIsSettled;
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Description_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsxs)("div", {
      children: [(0, jsx_runtime_1.jsx)("h2", __assign({
        className: Description_module_scss_1["default"].heading
      }, {
        children: "\u0410\u0443\u0434\u0438\u043E\u0432\u044B\u0437\u043E\u0432"
      })), (0, jsx_runtime_1.jsx)("p", __assign({
        className: Description_module_scss_1["default"].paragraph
      }, {
        children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0443\u0441\u043B\u044B\u0448\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 \u0438\u0437 \u043F\u044F\u0442\u0438."
      })), (0, jsx_runtime_1.jsx)("p", __assign({
        className: Description_module_scss_1["default"].paragraph
      }, {
        children: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0438\u0433\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043A\u0430\u043A \u043C\u044B\u0448\u043A\u043E\u0439, \u0442\u0430\u043A \u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0430\u043C\u0438 1, 2, 3, 4, 5, \u2190 \u2192 \u043D\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435."
      }))]
    }), (0, jsx_runtime_1.jsx)(Difficulty_1["default"], {
      setDifficultyLevel: setDifficultyLevel
    }), (0, jsx_runtime_1.jsx)("div", __assign({
      className: "start",
      onClick: function onClick() {
        return setIsSettled(true);
      }
    }, {
      children: (0, jsx_runtime_1.jsx)(Button_1["default"], {
        children: (0, jsx_runtime_1.jsx)("p", __assign({
          className: Description_module_scss_1["default"].button
        }, {
          children: "\u041D\u0430\u0447\u0430\u0442\u044C"
        }))
      })
    }))]
  }));
};

exports["default"] = Description;

/***/ }),

/***/ "./pages/Games/Audio/Game/Description/Difficulty/Difficulty.tsx":
/*!**********************************************************************!*\
  !*** ./pages/Games/Audio/Game/Description/Difficulty/Difficulty.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var Difficulty_module_scss_1 = __importDefault(__webpack_require__(/*! ./Difficulty.module.scss */ "./pages/Games/Audio/Game/Description/Difficulty/Difficulty.module.scss"));

var DifficultyCard_1 = __importDefault(__webpack_require__(/*! ./DifficultyCard/DifficultyCard */ "./pages/Games/Audio/Game/Description/Difficulty/DifficultyCard/DifficultyCard.tsx"));

var difficultyLevels_1 = __webpack_require__(/*! ../../../../../../common/constants/difficultyLevels */ "./common/constants/difficultyLevels.ts");

var Difficulty = function Difficulty(_a) {
  var setDifficultyLevel = _a.setDifficultyLevel;

  var _b = (0, react_1.useState)(0),
      level = _b[0],
      setLevel = _b[1];

  var changeColor = function changeColor(index) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card, i) {
      var copy = card;
      copy.removeAttribute('style');

      if (i === index) {
        var style = copy.style;
        style.background = difficultyLevels_1.DIFFICULTY[index].color;
        style.borderColor = difficultyLevels_1.DIFFICULTY[index].color;
      }
    });
  };

  (0, react_1.useEffect)(function () {
    setDifficultyLevel(level);
    changeColor(level);
  }, [level]);

  document.onkeyup = function (event) {
    var code = event.code;

    switch (code) {
      case 'Digit1':
        setLevel(0);
        break;

      case 'Digit2':
        setLevel(1);
        break;

      case 'Digit3':
        setLevel(2);
        break;

      case 'Digit4':
        setLevel(3);
        break;

      case 'Digit5':
        setLevel(4);
        break;

      case 'Digit6':
        setLevel(5);
        break;

      case 'ArrowLeft':
        if (level > 0) setLevel(level - 1);
        break;

      case 'ArrowRight':
        if (level < 5) setLevel(level + 1);
        break;

      case 'Enter':
        document.querySelector('.start').click();
        break;

      default:
        {
          console.log('Inactive buttons');
        }
    }
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Difficulty_module_scss_1["default"].difficulty__container
  }, {
    children: [(0, jsx_runtime_1.jsx)("h4", __assign({
      className: Difficulty_module_scss_1["default"].header
    }, {
      children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C:"
    })), (0, jsx_runtime_1.jsx)("div", __assign({
      className: Difficulty_module_scss_1["default"].difficulties
    }, {
      children: difficultyLevels_1.DIFFICULTY.map(function (item) {
        return (0, jsx_runtime_1.jsx)(DifficultyCard_1["default"], {
          setLevel: setLevel,
          content: item.level,
          id: item.id,
          color: item.color
        }, item.id);
      })
    }))]
  }));
};

exports["default"] = Difficulty;

/***/ }),

/***/ "./pages/Games/Audio/Game/Description/Difficulty/DifficultyCard/DifficultyCard.tsx":
/*!*****************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/Description/Difficulty/DifficultyCard/DifficultyCard.tsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var DifficultyCard_module_scss_1 = __importDefault(__webpack_require__(/*! ./DifficultyCard.module.scss */ "./pages/Games/Audio/Game/Description/Difficulty/DifficultyCard/DifficultyCard.module.scss"));

var DifficultyCard = function DifficultyCard(_a) {
  var content = _a.content,
      id = _a.id,
      color = _a.color,
      setLevel = _a.setLevel;

  var changeLevel = function changeLevel(event) {
    setLevel(id);
    document.querySelectorAll('.card').forEach(function (el) {
      return el.removeAttribute('style');
    });
    var target = event.currentTarget;
    var style = target.style;
    style.background = color;
    style.borderColor = color;
  };

  return (0, jsx_runtime_1.jsx)("div", __assign({
    onClick: function onClick(e) {
      return changeLevel(e);
    },
    className: "card ".concat(DifficultyCard_module_scss_1["default"].card)
  }, {
    children: content
  }));
};

exports["default"] = DifficultyCard;

/***/ }),

/***/ "./pages/Games/Audio/Game/Game.tsx":
/*!*****************************************!*\
  !*** ./pages/Games/Audio/Game/Game.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var helper_1 = __webpack_require__(/*! ../../../../common/constants/helper */ "./common/constants/helper.ts");

var Description_1 = __importDefault(__webpack_require__(/*! ./Description/Description */ "./pages/Games/Audio/Game/Description/Description.tsx"));

var GamePlay_1 = __importDefault(__webpack_require__(/*! ./GamePlay/GamePlay */ "./pages/Games/Audio/Game/GamePlay/GamePlay.tsx"));

var DictionaryAPI_1 = __importDefault(__webpack_require__(/*! ../../../../components/API/DictionaryAPI/DictionaryAPI */ "./components/API/DictionaryAPI/DictionaryAPI.ts"));

var Game = function Game(_a) {
  var setPoints = _a.setPoints,
      setAmount = _a.setAmount,
      setCorrect = _a.setCorrect;

  var _b = (0, react_1.useState)(false),
      isLoading = _b[0],
      setIsLoading = _b[1];

  var _c = (0, react_1.useState)(false),
      isSettled = _c[0],
      setIsSettled = _c[1];

  var _d = (0, react_1.useState)(0),
      difficultyLevel = _d[0],
      setDifficultyLevel = _d[1];

  var _e = (0, react_1.useState)([]),
      words = _e[0],
      setWords = _e[1];

  var getWords = function getWords(pg, lvl) {
    return __awaiter(void 0, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setIsLoading(false);
            return [4
            /*yield*/
            , DictionaryAPI_1["default"].getWordsArray(pg, lvl)];

          case 1:
            response = _a.sent();
            setWords(response);
            setIsLoading(true);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  (0, react_1.useEffect)(function () {
    if (isSettled) {
      getWords((0, helper_1.randomPage)(), difficultyLevel);
    }
  }, [isSettled]);
  return !(isLoading && isSettled) ? (0, jsx_runtime_1.jsx)(Description_1["default"], {
    setDifficultyLevel: setDifficultyLevel,
    setIsSettled: setIsSettled
  }) : (0, jsx_runtime_1.jsx)(GamePlay_1["default"], {
    words: words,
    setPoints: setPoints,
    setAmount: setAmount,
    setCorrect: setCorrect
  });
};

exports["default"] = Game;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/AudioButton/AudioButton.tsx":
/*!*******************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/AudioButton/AudioButton.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var AudioButton_module_scss_1 = __importDefault(__webpack_require__(/*! ./AudioButton.module.scss */ "./pages/Games/Audio/Game/GamePlay/GameFrame/AudioButton/AudioButton.module.scss"));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../../../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var AudioButton = function AudioButton(_a) {
  var src = _a.src;

  var playAudio = function playAudio() {
    var audio = document.querySelector('.audio');
    audio.play();
  };

  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: AudioButton_module_scss_1["default"].audio__button,
    onClick: playAudio
  }, {
    children: (0, jsx_runtime_1.jsx)("audio", {
      style: {
        display: 'none'
      },
      className: "audio",
      src: "".concat(serverConst_1["default"], "/").concat(src),
      autoPlay: true
    })
  }));
};

exports["default"] = AudioButton;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/DetailedAudioWord/DetailedAudioWord.tsx":
/*!*******************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/DetailedAudioWord/DetailedAudioWord.tsx ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../../../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var DetailedAudioWord_module_scss_1 = __importDefault(__webpack_require__(/*! ./DetailedAudioWord.module.scss */ "./pages/Games/Audio/Game/GamePlay/GameFrame/DetailedAudioWord/DetailedAudioWord.module.scss"));

var DetailedAudioWord = function DetailedAudioWord(_a) {
  var word = _a.word;

  var playAudio = function playAudio() {
    var audio = document.querySelector('.audio');
    audio.play();
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: DetailedAudioWord_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsx)("img", {
      className: DetailedAudioWord_module_scss_1["default"].img,
      src: "".concat(serverConst_1["default"], "/").concat(word.image),
      alt: "image"
    }), (0, jsx_runtime_1.jsxs)("div", {
      children: [(0, jsx_runtime_1.jsx)("audio", {
        className: "audio ".concat(DetailedAudioWord_module_scss_1["default"].audio),
        src: "".concat(serverConst_1["default"], "/").concat(word.audio)
      }), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: DetailedAudioWord_module_scss_1["default"].textContent
      }, {
        children: [(0, jsx_runtime_1.jsx)("p", __assign({
          className: DetailedAudioWord_module_scss_1["default"].word
        }, {
          children: word.word
        })), (0, jsx_runtime_1.jsx)("div", {
          onClick: playAudio,
          className: DetailedAudioWord_module_scss_1["default"].audioButton
        })]
      }))]
    })]
  }));
};

exports["default"] = DetailedAudioWord;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/GameFrame.tsx":
/*!*****************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/GameFrame.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var GameFrame_module_scss_1 = __importDefault(__webpack_require__(/*! ./GameFrame.module.scss */ "./pages/Games/Audio/Game/GamePlay/GameFrame/GameFrame.module.scss"));

var AudioButton_1 = __importDefault(__webpack_require__(/*! ./AudioButton/AudioButton */ "./pages/Games/Audio/Game/GamePlay/GameFrame/AudioButton/AudioButton.tsx"));

var Variants_1 = __importDefault(__webpack_require__(/*! ./Variants/Variants */ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variants.tsx"));

var helper_1 = __webpack_require__(/*! ../../../../../../common/constants/helper */ "./common/constants/helper.ts");

var DetailedAudioWord_1 = __importDefault(__webpack_require__(/*! ./DetailedAudioWord/DetailedAudioWord */ "./pages/Games/Audio/Game/GamePlay/GameFrame/DetailedAudioWord/DetailedAudioWord.tsx"));

var GameFrame = function GameFrame(_a) {
  var currentWords = _a.currentWords,
      corrects = _a.corrects,
      error = _a.error,
      streak = _a.streak,
      points = _a.points,
      setPoints = _a.setPoints,
      setCorrects = _a.setCorrects,
      setError = _a.setError,
      setStreak = _a.setStreak,
      setFinished = _a.setFinished;

  var _b = (0, react_1.useState)(currentWords),
      remainingWords = _b[0],
      setRemainingWords = _b[1];

  var _c = (0, react_1.useState)(remainingWords[0]),
      currentWord = _c[0],
      setCurrentWord = _c[1];

  var _d = (0, react_1.useState)([]),
      variants = _d[0],
      setVariants = _d[1];

  var _e = (0, react_1.useState)(false),
      isSettled = _e[0],
      setIsSettled = _e[1];

  var getVariants = function getVariants() {
    var wrongVariants = (0, helper_1.shuffleArray)(currentWords.filter(function (variant) {
      return variant.id !== currentWord.id;
    })).slice(0, 4);
    setVariants((0, helper_1.shuffleArray)(__spreadArray([currentWord], wrongVariants, true)));
  };

  (0, react_1.useEffect)(function () {
    return getVariants();
  }, [currentWord]);
  (0, react_1.useEffect)(function () {
    if (!remainingWords.length) setFinished(true);else {
      setCurrentWord(remainingWords[0]);
    }
  }, [remainingWords]);
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: GameFrame_module_scss_1["default"].frame
  }, {
    children: [isSettled ? (0, jsx_runtime_1.jsx)(DetailedAudioWord_1["default"], {
      word: currentWord
    }) : (0, jsx_runtime_1.jsx)(AudioButton_1["default"], {
      src: currentWord.audio
    }), (0, jsx_runtime_1.jsx)(Variants_1["default"], {
      setIsSettled: setIsSettled,
      remainingWords: remainingWords,
      setRemainingWords: setRemainingWords,
      points: points,
      corrects: corrects,
      error: error,
      streak: streak,
      setPoints: setPoints,
      setCorrects: setCorrects,
      setError: setError,
      setStreak: setStreak,
      variants: variants,
      currentWord: currentWord
    })]
  }));
};

exports["default"] = GameFrame;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variant/Variant.tsx":
/*!********************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variant/Variant.tsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Variant_module_scss_1 = __importDefault(__webpack_require__(/*! ./Variant.module.scss */ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variant/Variant.module.scss"));

var Variant = function Variant(_a) {
  var variantData = _a.variantData;
  return (0, jsx_runtime_1.jsx)("div", __assign({
    id: variantData.id,
    className: "variant ".concat(Variant_module_scss_1["default"].variant)
  }, {
    children: variantData.wordTranslate
  }));
};

exports["default"] = Variant;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variants.tsx":
/*!*************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variants.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var Variants_module_scss_1 = __importDefault(__webpack_require__(/*! ./Variants.module.scss */ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variants.module.scss"));

var Variant_1 = __importDefault(__webpack_require__(/*! ./Variant/Variant */ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variant/Variant.tsx"));

var Button_1 = __importDefault(__webpack_require__(/*! ../../../../../../../components/Button/Button */ "./components/Button/Button.tsx"));

var Variants = function Variants(_a) {
  var remainingWords = _a.remainingWords,
      variants = _a.variants,
      currentWord = _a.currentWord,
      corrects = _a.corrects,
      error = _a.error,
      points = _a.points,
      streak = _a.streak,
      setCorrects = _a.setCorrects,
      setError = _a.setError,
      setPoints = _a.setPoints,
      setStreak = _a.setStreak,
      setRemainingWords = _a.setRemainingWords,
      setIsSettled = _a.setIsSettled;

  var _b = (0, react_1.useState)(-1),
      option = _b[0],
      setOption = _b[1];

  var _c = (0, react_1.useState)(false),
      isChosen = _c[0],
      setIsChosen = _c[1];

  var _d = (0, react_1.useState)(),
      result = _d[0],
      setResult = _d[1]; // keyboard event handler


  document.onkeyup = function (event) {
    var code = event.code;

    switch (code) {
      case 'Digit1':
        setOption(0);
        break;

      case 'Digit2':
        setOption(1);
        break;

      case 'Digit3':
        setOption(2);
        break;

      case 'Digit4':
        setOption(3);
        break;

      case 'Digit5':
        setOption(4);
        break;

      case 'Digit6':
        setOption(5);
        break;

      case 'ArrowLeft':
        if (option > 0) setOption(option - 1);
        break;

      case 'ArrowRight':
        if (option < 5) setOption(option + 1);
        break;

      case 'Enter':
        if (option !== -1) {
          document.querySelectorAll('.variant')[option].click();
        } else {
          document.querySelector('.button').click();
        }

        setOption(-1);
        break;

      default:
        {
          console.log('Inactive buttons');
        }
    }
  };

  (0, react_1.useEffect)(function () {
    var elements = document.querySelectorAll('.variant');
    elements.forEach(function (item, index) {
      item.classList.remove('variant_active');

      if (index === option) {
        item.classList.add('variant_active');
      }
    });
  }, [option]); // change variants colors on click

  var showCorrectAnswer = function showCorrectAnswer(id) {
    var style = document.getElementById(id).style;
    style.background = '#58C87E';
  };

  var repaintVariants = function repaintVariants(choice, answer) {
    var style = choice.style;

    if (choice.id === 'unknown') {
      setResult({
        isCorrect: false,
        word: currentWord
      });
    } else if (choice.id !== answer.id) {
      style.background = '#FF6862';
      setResult({
        isCorrect: false,
        word: currentWord
      });
    } else {
      setResult({
        isCorrect: true,
        word: currentWord
      });
    }

    showCorrectAnswer(answer.id);
  }; // click event handlers


  var clickHandler = function clickHandler(event) {
    var target = event.target;

    if (target.classList.contains('variant')) {
      setIsChosen(true);
      setIsSettled(true);
      repaintVariants(target, currentWord);
    }
  };

  var nextHandler = function nextHandler() {
    document.querySelectorAll('.variant').forEach(function (item) {
      return item.removeAttribute('style');
    });
    var curStreak = streak;

    if (result === null || result === void 0 ? void 0 : result.isCorrect) {
      setCorrects(__spreadArray([result === null || result === void 0 ? void 0 : result.word], corrects, true));
      curStreak = streak + 1;
    } else {
      setError(__spreadArray([result.word], error, true));
      curStreak = 0;
    }

    setStreak(curStreak);
    setPoints(points + 5 * curStreak);
    setRemainingWords(remainingWords.slice(1));
    setIsChosen(false);
    setIsSettled(false);
  };

  return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
    children: [(0, jsx_runtime_1.jsx)("div", __assign({
      onClick: function onClick(e) {
        return clickHandler(e);
      },
      className: Variants_module_scss_1["default"].variants__container
    }, {
      children: variants.map(function (variant) {
        return (0, jsx_runtime_1.jsx)(Variant_1["default"], {
          variantData: variant
        }, variant.id);
      })
    })), !isChosen ? (0, jsx_runtime_1.jsx)("div", __assign({
      onClick: function onClick(e) {
        return clickHandler(e);
      },
      id: "unknown",
      className: "variant ".concat(Variants_module_scss_1["default"].variant)
    }, {
      children: "He \u0437\u043D\u0430\u044E"
    })) : (0, jsx_runtime_1.jsx)("div", __assign({
      onClick: function onClick() {
        return nextHandler();
      },
      className: "button"
    }, {
      children: (0, jsx_runtime_1.jsx)(Button_1["default"], {
        children: (0, jsx_runtime_1.jsx)("p", __assign({
          className: Variants_module_scss_1["default"].next
        }, {
          children: "\u0414\u0430\u043B\u0435\u0435"
        }))
      })
    }))]
  });
};

exports["default"] = Variants;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GamePlay.tsx":
/*!******************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GamePlay.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var helper_1 = __webpack_require__(/*! ../../../../../common/constants/helper */ "./common/constants/helper.ts");

var GameFrame_1 = __importDefault(__webpack_require__(/*! ./GameFrame/GameFrame */ "./pages/Games/Audio/Game/GamePlay/GameFrame/GameFrame.tsx"));

var Result_1 = __importDefault(__webpack_require__(/*! ./Result/Result */ "./pages/Games/Audio/Game/GamePlay/Result/Result.tsx"));

var GamePlay = function GamePlay(_a) {
  var setPoints = _a.setPoints,
      setAmount = _a.setAmount,
      setCorrect = _a.setCorrect,
      words = _a.words;

  var _b = (0, react_1.useState)(0),
      points = _b[0],
      setPoint = _b[1];

  var _c = (0, react_1.useState)(0),
      maxStreak = _c[0],
      setMaxStreak = _c[1];

  var _d = (0, react_1.useState)(0),
      streak = _d[0],
      setStreak = _d[1];

  var _e = (0, react_1.useState)(false),
      finished = _e[0],
      setFinished = _e[1];

  var _f = (0, react_1.useState)([]),
      corrects = _f[0],
      setCorrects = _f[1];

  var _g = (0, react_1.useState)([]),
      error = _g[0],
      setError = _g[1];

  (0, react_1.useEffect)(function () {
    if (streak > maxStreak) setMaxStreak(streak);
  }, [streak]);
  return !finished ? (0, jsx_runtime_1.jsx)(GameFrame_1["default"], {
    currentWords: (0, helper_1.shuffleArray)(words),
    streak: streak,
    points: points,
    corrects: corrects,
    error: error,
    setPoints: setPoint,
    setStreak: setStreak,
    setFinished: setFinished,
    setCorrects: setCorrects,
    setError: setError
  }) : (0, jsx_runtime_1.jsx)(Result_1["default"], {
    points: points,
    setPoints: setPoints,
    setAmount: setAmount,
    setCorrect: setCorrect,
    streak: maxStreak,
    correct: corrects,
    error: error
  });
};

exports["default"] = GamePlay;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Result.tsx":
/*!***********************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Result.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var getUserData_1 = __importDefault(__webpack_require__(/*! ../../../../../../common/getUserData */ "./common/getUserData.tsx"));

var LearnedWordsAPI_1 = __importDefault(__webpack_require__(/*! ../../../../../../components/API/LearnedWordsAPI/LearnedWordsAPI */ "./components/API/LearnedWordsAPI/LearnedWordsAPI.ts"));

var Button_1 = __importDefault(__webpack_require__(/*! ../../../../../../components/Button/Button */ "./components/Button/Button.tsx"));

var Result_module_scss_1 = __importDefault(__webpack_require__(/*! ./Result.module.scss */ "./pages/Games/Audio/Game/GamePlay/Result/Result.module.scss"));

var Slider_1 = __importDefault(__webpack_require__(/*! ./Slider/Slider */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Slider.tsx"));

var Result = function Result(_a) {
  var correct = _a.correct,
      error = _a.error,
      points = _a.points,
      streak = _a.streak,
      setAmount = _a.setAmount,
      setCorrect = _a.setCorrect,
      setPoints = _a.setPoints;
  (0, react_1.useEffect)(function () {
    var userData = (0, getUserData_1["default"])();

    if (userData) {
      var sign = function sign() {
        return __awaiter(void 0, void 0, void 0, function () {
          var id, token, resp;
          return __generator(this, function (_a) {
            id = userData.id;
            token = userData.token;
            setPoints(streak);
            setAmount(1);
            setCorrect(correct.length / 20);

            resp = function resp() {
              return __awaiter(void 0, void 0, void 0, function () {
                var count, data, server, servercountsprint, servercountaudio, countnew, countnewaudio, date, WordNumberSprint, WordNumberAudio, newLearnWords;

                var _a, _b;

                return __generator(this, function (_c) {
                  switch (_c.label) {
                    case 0:
                      count = 0;
                      return [4
                      /*yield*/
                      , LearnedWordsAPI_1["default"].getLearnedWords(id, token)];

                    case 1:
                      data = _c.sent();
                      server = data.optional.learnedWords.split(' ');
                      servercountsprint = data.optional.learnedWordsNumberSprint;
                      servercountaudio = data.optional.learnedWordsNumberAudio;
                      countnew = servercountsprint[Object.keys(servercountsprint)[0]];
                      countnewaudio = servercountaudio[Object.keys(servercountaudio)[0]];
                      correct.map(function (item) {
                        if (!server.includes(item.word)) {
                          server.push(item.word);
                          count += 1;
                        }

                        return item;
                      });
                      date = new Date().setHours(0, 0, 0);
                      WordNumberSprint = (_a = {}, _a[date] = countnew, _a);
                      WordNumberAudio = (_b = {}, _b[date] = count + countnewaudio, _b);

                      newLearnWords = function newLearnWords() {
                        return __awaiter(void 0, void 0, void 0, function () {
                          var lw;
                          return __generator(this, function (_a) {
                            switch (_a.label) {
                              case 0:
                                lw = LearnedWordsAPI_1["default"].createWord(id, token, 1, server, WordNumberSprint, WordNumberAudio);
                                return [4
                                /*yield*/
                                , LearnedWordsAPI_1["default"].updateUserLearnedWords(lw)];

                              case 1:
                                _a.sent();

                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      };

                      newLearnWords();
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            };

            resp();
            return [2
            /*return*/
            ];
          });
        });
      };

      sign();
    }
  }, []);
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: Result_module_scss_1["default"].container
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: Result_module_scss_1["default"].content
    }, {
      children: [(0, jsx_runtime_1.jsx)(Slider_1["default"], {
        correct: correct,
        error: error,
        points: points
      }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
        to: '/games'
      }, {
        children: (0, jsx_runtime_1.jsx)(Button_1["default"], {
          children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443"
        })
      })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
        className: Result_module_scss_1["default"].vocabulary,
        to: '/vocabulary'
      }, {
        children: "\u041A \u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0443"
      }))]
    }))
  }));
};

exports["default"] = Result;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Slider.tsx":
/*!******************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/Slider.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Statistics_1 = __importDefault(__webpack_require__(/*! ./Statistics/Statistics */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Statistics/Statistics.tsx"));

var WordsSummary_1 = __importDefault(__webpack_require__(/*! ./WordsSummary/WordsSummary */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/WordsSummary.tsx"));

var Slider_module_scss_1 = __importDefault(__webpack_require__(/*! ./Slider.module.scss */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Slider.module.scss"));

var Slider = function Slider(_a) {
  var error = _a.error,
      correct = _a.correct,
      points = _a.points;
  var correctAmount = correct.length;
  var errorAmount = error.length;
  var percentage = Math.round(correctAmount / (correctAmount + errorAmount) * 100);
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: Slider_module_scss_1["default"].slider__container
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: "inner ".concat(Slider_module_scss_1["default"].inner)
    }, {
      children: [(0, jsx_runtime_1.jsx)(Statistics_1["default"], {
        percentage: percentage,
        correctAmount: correctAmount,
        points: points
      }), (0, jsx_runtime_1.jsx)(WordsSummary_1["default"], {
        error: error,
        correct: correct
      })]
    }))
  }));
};

exports["default"] = Slider;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Statistics/Statistics.tsx":
/*!*********************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/Statistics/Statistics.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var ProgressBar_1 = __importDefault(__webpack_require__(/*! ../../../../../../../../components/ProgressBar/ProgressBar */ "./components/ProgressBar/ProgressBar.tsx"));

var Statistics_module_scss_1 = __importDefault(__webpack_require__(/*! ./Statistics.module.scss */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Statistics/Statistics.module.scss"));

var Statistics = function Statistics(_a) {
  var percentage = _a.percentage,
      correctAmount = _a.correctAmount,
      points = _a.points;

  var handler = function handler() {
    var style = document.querySelector('.inner').style;
    style.transform = 'translate(-50%)';
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Statistics_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsx)("div", {
      onClick: handler,
      className: "arrow ".concat(Statistics_module_scss_1["default"].arrow)
    }), (0, jsx_runtime_1.jsxs)("h2", __assign({
      className: Statistics_module_scss_1["default"].header
    }, {
      children: ["\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 ", points, " \u043E\u0447\u043A\u043E\u0432"]
    })), (0, jsx_runtime_1.jsxs)("p", __assign({
      className: Statistics_module_scss_1["default"].paragraph
    }, {
      children: ["\u0417\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0438\u0433\u0440\u044B \u0432\u044B \u0432\u044B\u0443\u0447\u0438\u043B\u0438 ", (0, jsx_runtime_1.jsxs)("span", __assign({
        className: Statistics_module_scss_1["default"].amount
      }, {
        children: [correctAmount, " \u0441\u043B\u043E\u0432"]
      }))]
    })), (0, jsx_runtime_1.jsx)(ProgressBar_1["default"], {
      progress: percentage
    })]
  }));
};

exports["default"] = Statistics;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionHeader/SectionHeader.tsx":
/*!****************************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionHeader/SectionHeader.tsx ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var SectionHeader_module_scss_1 = __importDefault(__webpack_require__(/*! ./SectionHeader.module.scss */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionHeader/SectionHeader.module.scss"));

var SectionHeader = function SectionHeader(_a) {
  var type = _a.type,
      amount = _a.amount;
  var style = {
    background: type === 'correct' ? '#58C87E' : '#FF6862'
  };
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: SectionHeader_module_scss_1["default"].header
  }, {
    children: [(0, jsx_runtime_1.jsx)("div", __assign({
      className: SectionHeader_module_scss_1["default"].text
    }, {
      children: type === 'error' ? 'Ошибок' : 'Знаю'
    })), (0, jsx_runtime_1.jsx)("div", __assign({
      style: style,
      className: SectionHeader_module_scss_1["default"].amount
    }, {
      children: amount
    }))]
  }));
};

exports["default"] = SectionHeader;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionItem/SectionItem.tsx":
/*!************************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionItem/SectionItem.tsx ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var SectionItem_module_scss_1 = __importDefault(__webpack_require__(/*! ./SectionItem.module.scss */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionItem/SectionItem.module.scss"));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../../../../../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var SectionItem = function SectionItem(_a) {
  var word = _a.word;

  var handler = function handler(event) {
    var target = event.target;
    var parent = target.parentElement;
    var audio = parent.querySelector('audio');
    audio.play();
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: SectionItem_module_scss_1["default"].itemContainer
  }, {
    children: [(0, jsx_runtime_1.jsx)("audio", {
      className: SectionItem_module_scss_1["default"].audio,
      src: "".concat(serverConst_1["default"], "/").concat(word.audio)
    }), (0, jsx_runtime_1.jsx)("div", {
      onClick: function onClick(e) {
        return handler(e);
      },
      className: SectionItem_module_scss_1["default"].audioButton
    }), (0, jsx_runtime_1.jsxs)("div", __assign({
      className: SectionItem_module_scss_1["default"].textContent
    }, {
      children: [(0, jsx_runtime_1.jsx)("span", {
        children: word.word
      }), " - ", (0, jsx_runtime_1.jsx)("span", __assign({
        className: SectionItem_module_scss_1["default"].wordTranslate
      }, {
        children: word.wordTranslate
      }))]
    }))]
  }));
};

exports["default"] = SectionItem;

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/WordsSummary.tsx":
/*!*************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/WordsSummary.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var SectionHeader_1 = __importDefault(__webpack_require__(/*! ./SectionHeader/SectionHeader */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionHeader/SectionHeader.tsx"));

var SectionItem_1 = __importDefault(__webpack_require__(/*! ./SectionItem/SectionItem */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionItem/SectionItem.tsx"));

var WordsSummary_module_scss_1 = __importDefault(__webpack_require__(/*! ./WordsSummary.module.scss */ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/WordsSummary.module.scss"));

var WordsSummary = function WordsSummary(_a) {
  var error = _a.error,
      correct = _a.correct;

  var handler = function handler() {
    document.querySelector('.inner').removeAttribute('style');
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: WordsSummary_module_scss_1["default"].test
  }, {
    children: [(0, jsx_runtime_1.jsx)("div", {
      onClick: handler,
      className: WordsSummary_module_scss_1["default"].arrow
    }), (0, jsx_runtime_1.jsxs)("div", __assign({
      className: WordsSummary_module_scss_1["default"].container
    }, {
      children: [error.length ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [(0, jsx_runtime_1.jsx)(SectionHeader_1["default"], {
          type: 'error',
          amount: error.length
        }), error.map(function (word) {
          return (0, jsx_runtime_1.jsx)(SectionItem_1["default"], {
            word: word
          }, word.id);
        }), correct.length ? (0, jsx_runtime_1.jsx)("div", {
          className: WordsSummary_module_scss_1["default"].divider
        }) : '']
      }) : '', correct.length ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [(0, jsx_runtime_1.jsx)(SectionHeader_1["default"], {
          type: 'correct',
          amount: correct.length
        }), correct.map(function (word) {
          return (0, jsx_runtime_1.jsx)(SectionItem_1["default"], {
            word: word
          }, word.id);
        })]
      }) : '']
    }))]
  }));
};

exports["default"] = WordsSummary;

/***/ }),

/***/ "./pages/Games/Audio/Header/Header.tsx":
/*!*********************************************!*\
  !*** ./pages/Games/Audio/Header/Header.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var Header_module_scss_1 = __importDefault(__webpack_require__(/*! ./Header.module.scss */ "./pages/Games/Audio/Header/Header.module.scss"));

var Logo_1 = __importDefault(__webpack_require__(/*! ../../../../components/Header/Logo/Logo */ "./components/Header/Logo/Logo.tsx"));

var ToGames_1 = __importDefault(__webpack_require__(/*! ./ToGames/ToGames */ "./pages/Games/Audio/Header/ToGames/ToGames.tsx"));

var Header = function Header() {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Header_module_scss_1["default"].header
  }, {
    children: [(0, jsx_runtime_1.jsx)(Logo_1["default"], {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
      to: '/games'
    }, {
      children: (0, jsx_runtime_1.jsx)(ToGames_1["default"], {})
    }))]
  }));
};

exports["default"] = Header;

/***/ }),

/***/ "./pages/Games/Audio/Header/ToGames/ToGames.tsx":
/*!******************************************************!*\
  !*** ./pages/Games/Audio/Header/ToGames/ToGames.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var ToGames_module_scss_1 = __importDefault(__webpack_require__(/*! ./ToGames.module.scss */ "./pages/Games/Audio/Header/ToGames/ToGames.module.scss"));

var ToGames = function ToGames() {
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: ToGames_module_scss_1["default"].cross__container
  }, {
    children: (0, jsx_runtime_1.jsx)("div", {
      className: ToGames_module_scss_1["default"].cross
    })
  }));
};

exports["default"] = ToGames;

/***/ }),

/***/ "./pages/Games/Games.tsx":
/*!*******************************!*\
  !*** ./pages/Games/Games.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Games_1 = __importDefault(__webpack_require__(/*! ../Vocabulary/Games/Games */ "./pages/Vocabulary/Games/Games.tsx"));

var Games_module_scss_1 = __importDefault(__webpack_require__(/*! ./Games.module.scss */ "./pages/Games/Games.module.scss"));

var GamesPage = function GamesPage() {
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: Games_module_scss_1["default"].main
  }, {
    children: (0, jsx_runtime_1.jsx)(Games_1["default"], {})
  }));
};

exports["default"] = GamesPage;

/***/ }),

/***/ "./pages/Games/SprintGame/AudioButton/AudioButton.tsx":
/*!************************************************************!*\
  !*** ./pages/Games/SprintGame/AudioButton/AudioButton.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var AudioButton_module_scss_1 = __importDefault(__webpack_require__(/*! ./AudioButton.module.scss */ "./pages/Games/SprintGame/AudioButton/AudioButton.module.scss"));

var serverConst_1 = __importDefault(__webpack_require__(/*! ../../../../common/constants/serverConst */ "./common/constants/serverConst.ts"));

var AudioButton = function AudioButton(props) {
  var playAudio = function playAudio(type) {
    var audio = document.querySelector(".audio__".concat(type));
    audio.play();
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: [AudioButton_module_scss_1["default"].volume, props.type && AudioButton_module_scss_1["default"].volumeInGame].join(' '),
    onClick: function onClick() {
      return playAudio(props.word);
    }
  }, {
    children: [(0, jsx_runtime_1.jsx)("img", {
      src: "../../../assets/icons/volume.svg",
      alt: ""
    }), (0, jsx_runtime_1.jsx)("audio", {
      className: "audio__".concat(props.word),
      src: "".concat(serverConst_1["default"], "/").concat(props.audio)
    })]
  }));
};

exports["default"] = AudioButton;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardButton/CardButton.tsx":
/*!*********************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardButton/CardButton.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var CardButton_module_scss_1 = __importDefault(__webpack_require__(/*! ./CardButton.module.scss */ "./pages/Games/SprintGame/CardSprint/CardButton/CardButton.module.scss"));

var CardButton = function CardButton(props) {
  var change = function change() {
    if (props.correct === true) {
      props.refreshAnswer(true);
      props.refresh(true);
    } else {
      props.refreshAnswer(false);
      props.refresh(false);
    }
  };

  return (0, jsx_runtime_1.jsx)("button", __assign({
    onClick: change,
    className: CardButton_module_scss_1["default"].container,
    style: {
      backgroundColor: props.correct ? '#58C87E' : '#FF6862'
    }
  }, {
    children: props.correct ? 'Верно' : 'Неверно'
  }));
};

exports["default"] = CardButton;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/ArrowEndCard/ArrowEndCard.tsx":
/*!*************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/ArrowEndCard/ArrowEndCard.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var ArrowEndCard_module_scss_1 = __importDefault(__webpack_require__(/*! ./ArrowEndCard.module.scss */ "./pages/Games/SprintGame/CardSprint/CardEndGame/ArrowEndCard/ArrowEndCard.module.scss"));

var ArrowEndCard = function ArrowEndCard(props) {
  return (0, jsx_runtime_1.jsx)("div", __assign({
    onClick: props.slide,
    className: [ArrowEndCard_module_scss_1["default"].arrow, props.left ? ArrowEndCard_module_scss_1["default"].arrowStat : ArrowEndCard_module_scss_1["default"].arrowEnd].join(' ')
  }, {
    children: (0, jsx_runtime_1.jsx)("img", {
      className: ArrowEndCard_module_scss_1["default"].arrowStats,
      src: "../../../../assets/icons/".concat(props.left ? 'left' : 'right', "ArrowGame.svg"),
      alt: "arrow"
    })
  }));
};

exports["default"] = ArrowEndCard;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardEndGame.tsx":
/*!***********************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/CardEndGame.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var CardEndGame_module_scss_1 = __importDefault(__webpack_require__(/*! ./CardEndGame.module.scss */ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardEndGame.module.scss"));

var Button_1 = __importDefault(__webpack_require__(/*! ../../../../../components/Button/Button */ "./components/Button/Button.tsx"));

var CardSides_1 = __importDefault(__webpack_require__(/*! ./CardSides/CardSides */ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardSides/CardSides.tsx"));

var WordsComponent_1 = __importDefault(__webpack_require__(/*! ./WordsComponent/WordsComponent */ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordsComponent/WordsComponent.tsx"));

var WordList_1 = __importDefault(__webpack_require__(/*! ./WordList/WordList */ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordList.tsx"));

var LinkTodictionary_1 = __importDefault(__webpack_require__(/*! ./LinkToDictionary/LinkTodictionary */ "./pages/Games/SprintGame/CardSprint/CardEndGame/LinkToDictionary/LinkTodictionary.tsx"));

var ArrowEndCard_1 = __importDefault(__webpack_require__(/*! ./ArrowEndCard/ArrowEndCard */ "./pages/Games/SprintGame/CardSprint/CardEndGame/ArrowEndCard/ArrowEndCard.tsx"));

var ProgressBar_1 = __importDefault(__webpack_require__(/*! ../../../../../components/ProgressBar/ProgressBar */ "./components/ProgressBar/ProgressBar.tsx"));

var CardEndGame = function CardEndGame(props) {
  var _a = (0, react_1.useState)(true),
      animation = _a[0],
      setAnimation = _a[1];

  var slide = function slide() {
    setAnimation(!animation);
  };

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: [CardEndGame_module_scss_1["default"].containerEndCard, !animation ? CardEndGame_module_scss_1["default"].animationRight : CardEndGame_module_scss_1["default"].animationLeft].join(' ')
  }, {
    children: [(0, jsx_runtime_1.jsxs)(CardSides_1["default"], {
      children: [(0, jsx_runtime_1.jsxs)("div", __assign({
        className: CardEndGame_module_scss_1["default"].result
      }, {
        children: ["\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 ", props.score, " \u043E\u0447\u043A\u043E\u0432"]
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: CardEndGame_module_scss_1["default"].wordsAmount
      }, {
        children: ["\u0417\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0438\u0433\u0440\u044B \u0432\u044B \u0432\u044B\u0443\u0447\u0438\u043B\u0438 ", props.learned.length, " \u0441\u043B\u043E\u0432", props.learned.length === 1 && 'о' || props.learned.length <= 4 && props.learned.length > 0 && 'а']
      })), (0, jsx_runtime_1.jsx)("div", __assign({
        className: CardEndGame_module_scss_1["default"].Mascot
      }, {
        children: (0, jsx_runtime_1.jsx)(ProgressBar_1["default"], {
          progress: props.learned.length / 20 * 100,
          sprint: true
        })
      })), (0, jsx_runtime_1.jsx)(ArrowEndCard_1["default"], {
        slide: slide,
        left: false
      }), (0, jsx_runtime_1.jsx)(Button_1["default"], {
        children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
          className: CardEndGame_module_scss_1["default"].link,
          to: "/games"
        }, {
          children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443"
        }))
      }), (0, jsx_runtime_1.jsx)(LinkTodictionary_1["default"], {})]
    }), (0, jsx_runtime_1.jsxs)(CardSides_1["default"], {
      children: [(0, jsx_runtime_1.jsxs)(WordsComponent_1["default"], {
        children: [(0, jsx_runtime_1.jsx)(WordList_1["default"], {
          mistakes: props.mistakes,
          side: "mistakes",
          learned: props.learned,
          header: "\u041E\u0448\u0438\u0431\u043E\u043A"
        }), (0, jsx_runtime_1.jsx)(WordList_1["default"], {
          mistakes: props.mistakes,
          side: "learned",
          learned: props.learned,
          header: "\u0417\u043D\u0430\u044E"
        })]
      }), (0, jsx_runtime_1.jsx)(ArrowEndCard_1["default"], {
        slide: slide,
        left: true
      }), (0, jsx_runtime_1.jsx)(Button_1["default"], {
        children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
          className: CardEndGame_module_scss_1["default"].link,
          to: "/games"
        }, {
          children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443"
        }))
      }), (0, jsx_runtime_1.jsx)(LinkTodictionary_1["default"], {})]
    })]
  }));
};

exports["default"] = CardEndGame;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardSides/CardSides.tsx":
/*!*******************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/CardSides/CardSides.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var cardSides_module_scss_1 = __importDefault(__webpack_require__(/*! ./cardSides.module.scss */ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardSides/cardSides.module.scss"));

var CardSides = function CardSides(_a) {
  var children = _a.children;
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: cardSides_module_scss_1["default"].card
  }, {
    children: children
  }));
};

exports["default"] = CardSides;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/LinkToDictionary/LinkTodictionary.tsx":
/*!*********************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/LinkToDictionary/LinkTodictionary.tsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var LinkToDictionary_module_scss_1 = __importDefault(__webpack_require__(/*! ./LinkToDictionary.module.scss */ "./pages/Games/SprintGame/CardSprint/CardEndGame/LinkToDictionary/LinkToDictionary.module.scss"));

var LinkTodictionary = function LinkTodictionary() {
  return (0, jsx_runtime_1.jsx)("a", __assign({
    className: LinkToDictionary_module_scss_1["default"].toDictionary,
    href: "##"
  }, {
    children: "\u041A \u0443\u0447\u0435\u0431\u043D\u0438\u043A\u0443"
  }));
};

exports["default"] = LinkTodictionary;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordList.tsx":
/*!*****************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordList.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var WordList_module_scss_1 = __importDefault(__webpack_require__(/*! ./WordList.module.scss */ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordList.module.scss"));

var WordListHeader_1 = __importDefault(__webpack_require__(/*! ./WordListHeader/WordListHeader */ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordListHeader/WordListHeader.tsx"));

var AudioButton_1 = __importDefault(__webpack_require__(/*! ../../../AudioButton/AudioButton */ "./pages/Games/SprintGame/AudioButton/AudioButton.tsx"));

var WordList = function WordList(props) {
  var mistakesFiltered = props.mistakes.filter(function (item) {
    return item !== undefined;
  });
  var learnedFiltered = props.learned.filter(function (item) {
    return item !== undefined;
  });
  return (0, jsx_runtime_1.jsxs)("div", {
    children: [(0, jsx_runtime_1.jsx)(WordListHeader_1["default"], {
      learned: props.learned,
      mistakes: props.mistakes,
      side: props.side,
      header: props.header
    }), (0, jsx_runtime_1.jsx)("ul", {
      children: props.side === 'mistakes' ? mistakesFiltered.length !== 0 && mistakesFiltered.map(function (item) {
        return (0, jsx_runtime_1.jsxs)("li", __assign({
          className: WordList_module_scss_1["default"].word
        }, {
          children: [(0, jsx_runtime_1.jsx)(AudioButton_1["default"], {
            audio: item.audio,
            word: item.word
          }), " ".concat(item.word, " - ").concat(item.wordTranslate, " ")]
        }));
      }) : learnedFiltered.length !== 0 && learnedFiltered.map(function (item) {
        return (0, jsx_runtime_1.jsxs)("li", __assign({
          className: WordList_module_scss_1["default"].word
        }, {
          children: [(0, jsx_runtime_1.jsx)(AudioButton_1["default"], {
            audio: item.audio,
            word: item.word
          }), " ".concat(item.word, " - ").concat(item.wordTranslate, " ")]
        }));
      })
    })]
  });
};

exports["default"] = WordList;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordListHeader/WordListHeader.tsx":
/*!**************************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordListHeader/WordListHeader.tsx ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var WordListHeader_module_scss_1 = __importDefault(__webpack_require__(/*! ./WordListHeader.module.scss */ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordListHeader/WordListHeader.module.scss"));

var WordListHeader = function WordListHeader(props) {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: WordListHeader_module_scss_1["default"].header
  }, {
    children: [(0, jsx_runtime_1.jsx)("h3", {
      children: props.header
    }), (0, jsx_runtime_1.jsx)("div", __assign({
      className: props.side === 'mistakes' ? WordListHeader_module_scss_1["default"].mistakesIndicatior : WordListHeader_module_scss_1["default"].learnedIndicator
    }, {
      children: props.side === 'mistakes' ? props.mistakes.length : props.learned.length
    }))]
  }));
};

exports["default"] = WordListHeader;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordsComponent/WordsComponent.tsx":
/*!*****************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/WordsComponent/WordsComponent.tsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var WordsComponent_module_scss_1 = __importDefault(__webpack_require__(/*! ./WordsComponent.module.scss */ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordsComponent/WordsComponent.module.scss"));

var WordsComponent = function WordsComponent(_a) {
  var children = _a.children;
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: WordsComponent_module_scss_1["default"].words
  }, {
    children: children
  }));
};

exports["default"] = WordsComponent;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardInGame/CardInGame.tsx":
/*!*********************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardInGame/CardInGame.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var CardScorePoints_1 = __importDefault(__webpack_require__(/*! ../CardScorePoints/CardScorePoints */ "./pages/Games/SprintGame/CardSprint/CardScorePoints/CardScorePoints.tsx"));

var CardWordGuessPart_1 = __importDefault(__webpack_require__(/*! ../CardWordGuessPart/CardWordGuessPart */ "./pages/Games/SprintGame/CardSprint/CardWordGuessPart/CardWordGuessPart.tsx"));

var CardButton_1 = __importDefault(__webpack_require__(/*! ../CardButton/CardButton */ "./pages/Games/SprintGame/CardSprint/CardButton/CardButton.tsx"));

var CardInGame_module_scss_1 = __importDefault(__webpack_require__(/*! ./CardInGame.module.scss */ "./pages/Games/SprintGame/CardSprint/CardInGame/CardInGame.module.scss"));

var AudioButton_1 = __importDefault(__webpack_require__(/*! ../../AudioButton/AudioButton */ "./pages/Games/SprintGame/AudioButton/AudioButton.tsx"));

var CardInGame = function CardInGame(props) {
  return (0, jsx_runtime_1.jsxs)("div", {
    children: [(0, jsx_runtime_1.jsxs)("div", __assign({
      className: CardInGame_module_scss_1["default"].CardUpperPart
    }, {
      children: [(0, jsx_runtime_1.jsx)(CardScorePoints_1["default"], {
        done: props.done[0][0],
        correct: props.correct[0][1]
      }), (0, jsx_runtime_1.jsx)(CardScorePoints_1["default"], {
        done: props.done[1][0],
        correct: props.correct[1][1]
      }), (0, jsx_runtime_1.jsx)(CardScorePoints_1["default"], {
        done: props.done[2][0],
        correct: props.correct[2][1]
      }), (0, jsx_runtime_1.jsx)(AudioButton_1["default"], {
        audio: props.wordGuess.audio,
        word: props.wordGuess.word,
        nextQ: props.nextQ,
        type: true
      })]
    })), (0, jsx_runtime_1.jsx)(CardWordGuessPart_1["default"], {
      OurGuess: props.ourGuess,
      GuessWord: props.wordGuess
    }), (0, jsx_runtime_1.jsxs)("div", __assign({
      className: CardInGame_module_scss_1["default"].controls
    }, {
      children: [(0, jsx_runtime_1.jsxs)("div", __assign({
        className: CardInGame_module_scss_1["default"].cotrolsContainer
      }, {
        children: [(0, jsx_runtime_1.jsx)(CardButton_1["default"], {
          correct: true,
          refresh: props.refresh,
          refreshAnswer: props.refreshAnswer
        }), (0, jsx_runtime_1.jsx)(CardButton_1["default"], {
          correct: false,
          refresh: props.refresh,
          refreshAnswer: props.refreshAnswer
        })]
      })), (0, jsx_runtime_1.jsxs)("div", __assign({
        className: CardInGame_module_scss_1["default"].arrows
      }, {
        children: [(0, jsx_runtime_1.jsx)("div", __assign({
          className: CardInGame_module_scss_1["default"].cotrolsContainer__arrow
        }, {
          children: (0, jsx_runtime_1.jsxs)("a", __assign({
            href: "##"
          }, {
            children: [' ', (0, jsx_runtime_1.jsx)("img", {
              src: "../../../assets/icons/ArrowLeftCard.svg",
              alt: ""
            })]
          }))
        })), (0, jsx_runtime_1.jsx)("div", __assign({
          className: CardInGame_module_scss_1["default"].cotrolsContainer__arrow
        }, {
          children: (0, jsx_runtime_1.jsxs)("a", __assign({
            href: "##"
          }, {
            children: [' ', (0, jsx_runtime_1.jsx)("img", {
              src: "../../../assets/icons/arrowRightCard.svg",
              alt: ""
            })]
          }))
        }))]
      }))]
    }))]
  });
};

exports["default"] = CardInGame;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardScorePoints/CardScorePoints.tsx":
/*!*******************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardScorePoints/CardScorePoints.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var CardScorePoints_module_scss_1 = __importDefault(__webpack_require__(/*! ./CardScorePoints.module.scss */ "./pages/Games/SprintGame/CardSprint/CardScorePoints/CardScorePoints.module.scss"));

var CardScorePoints = function CardScorePoints(props) {
  return (0, jsx_runtime_1.jsx)("div", __assign({
    style: {
      backgroundColor: props.done ? props.correct ? '#58C87E' : '#FF6862' : '#D9D9D9'
    },
    className: CardScorePoints_module_scss_1["default"].container
  }, {
    children: props.done && (0, jsx_runtime_1.jsx)("img", {
      src: "../../../../assets/icons/".concat(props.correct ? 'correct' : 'wrong', ".svg")
    })
  }));
};

exports["default"] = CardScorePoints;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardSpirnt.tsx":
/*!**********************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardSpirnt.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var CardSpirnt_module_scss_1 = __importDefault(__webpack_require__(/*! ./CardSpirnt.module.scss */ "./pages/Games/SprintGame/CardSprint/CardSpirnt.module.scss"));

var ScoreGame_1 = __importDefault(__webpack_require__(/*! ../ScoreGame/ScoreGame */ "./pages/Games/SprintGame/ScoreGame/ScoreGame.tsx"));

var CardInGame_1 = __importDefault(__webpack_require__(/*! ./CardInGame/CardInGame */ "./pages/Games/SprintGame/CardSprint/CardInGame/CardInGame.tsx"));

var CardEndGame_1 = __importDefault(__webpack_require__(/*! ./CardEndGame/CardEndGame */ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardEndGame.tsx"));

var CardSpirnt = function CardSpirnt(props) {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: CardSpirnt_module_scss_1["default"].container
  }, {
    children: [props.game && (0, jsx_runtime_1.jsx)(ScoreGame_1["default"], {
      score: props.score
    }), (0, jsx_runtime_1.jsx)("div", __assign({
      className: props.game ? CardSpirnt_module_scss_1["default"].card : CardSpirnt_module_scss_1["default"].cardEnd
    }, {
      children: props.game ? (0, jsx_runtime_1.jsx)(CardInGame_1["default"], {
        score: props.score,
        done: props.done,
        correct: props.correct,
        refresh: props.refresh,
        refreshAnswer: props.refreshAnswer,
        ourGuess: props.ourGuess,
        wordGuess: props.wordGuess,
        nextQ: props.nextQ
      }) : (0, jsx_runtime_1.jsx)(CardEndGame_1["default"], {
        backToGame: props.backToGame,
        game: props.game,
        learned: props.learned,
        mistakes: props.mistakes,
        score: props.score,
        done: props.done,
        correct: props.correct,
        refresh: props.refresh,
        refreshAnswer: props.refreshAnswer,
        ourGuess: props.ourGuess,
        wordGuess: props.wordGuess
      })
    }))]
  }));
};

exports["default"] = CardSpirnt;

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardWordGuessPart/CardWordGuessPart.tsx":
/*!***********************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardWordGuessPart/CardWordGuessPart.tsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var CardWordGuessPart_module_scss_1 = __importDefault(__webpack_require__(/*! ./CardWordGuessPart.module.scss */ "./pages/Games/SprintGame/CardSprint/CardWordGuessPart/CardWordGuessPart.module.scss"));

var CardWordGuessPart = function CardWordGuessPart(props) {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: CardWordGuessPart_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsxs)("span", __assign({
      className: CardWordGuessPart_module_scss_1["default"].GuessWord
    }, {
      children: [" ", props.GuessWord.word]
    })), (0, jsx_runtime_1.jsxs)("span", __assign({
      className: CardWordGuessPart_module_scss_1["default"].OurGuess
    }, {
      children: [" ", props.OurGuess.wordTranslate]
    }))]
  }));
};

exports["default"] = CardWordGuessPart;

/***/ }),

/***/ "./pages/Games/SprintGame/CounterGame/CounterGame.tsx":
/*!************************************************************!*\
  !*** ./pages/Games/SprintGame/CounterGame/CounterGame.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var CounterGame_module_scss_1 = __importDefault(__webpack_require__(/*! ./CounterGame.module.scss */ "./pages/Games/SprintGame/CounterGame/CounterGame.module.scss"));

var CounterGame = function CounterGame(props) {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: CounterGame_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsx)("img", {
      src: "../../../assets/icons/timer.svg",
      alt: "timer"
    }), props.counter]
  }));
};

exports["default"] = CounterGame;

/***/ }),

/***/ "./pages/Games/SprintGame/GameHeader/GameHeader.tsx":
/*!**********************************************************!*\
  !*** ./pages/Games/SprintGame/GameHeader/GameHeader.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var GameHeader_module_scss_1 = __importDefault(__webpack_require__(/*! ./GameHeader.module.scss */ "./pages/Games/SprintGame/GameHeader/GameHeader.module.scss"));

var Logo_1 = __importDefault(__webpack_require__(/*! ../../../../components/Header/Logo/Logo */ "./components/Header/Logo/Logo.tsx"));

var GameHeader = function GameHeader() {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: GameHeader_module_scss_1["default"].header
  }, {
    children: [(0, jsx_runtime_1.jsx)(Logo_1["default"], {}), (0, jsx_runtime_1.jsx)("div", __assign({
      className: GameHeader_module_scss_1["default"].cross
    }, {
      children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
        to: "/games"
      }, {
        children: (0, jsx_runtime_1.jsx)("img", {
          src: "../../../assets/icons/cross.svg",
          alt: ""
        })
      }))
    }))]
  }));
};

exports["default"] = GameHeader;

/***/ }),

/***/ "./pages/Games/SprintGame/ScoreGame/ScoreGame.tsx":
/*!********************************************************!*\
  !*** ./pages/Games/SprintGame/ScoreGame/ScoreGame.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var ScoreGame_module_scss_1 = __importDefault(__webpack_require__(/*! ./ScoreGame.module.scss */ "./pages/Games/SprintGame/ScoreGame/ScoreGame.module.scss"));

var ScoreGame = function ScoreGame(props) {
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: ScoreGame_module_scss_1["default"].container
  }, {
    children: props.score
  }));
};

exports["default"] = ScoreGame;

/***/ }),

/***/ "./pages/Games/SprintGame/SprintDescription/SprintDescription.tsx":
/*!************************************************************************!*\
  !*** ./pages/Games/SprintGame/SprintDescription/SprintDescription.tsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var SprintDescription_module_scss_1 = __importDefault(__webpack_require__(/*! ./SprintDescription.module.scss */ "./pages/Games/SprintGame/SprintDescription/SprintDescription.module.scss"));

var SprintDescription = function SprintDescription() {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: SprintDescription_module_scss_1["default"].description
  }, {
    children: [(0, jsx_runtime_1.jsx)("h3", __assign({
      className: SprintDescription_module_scss_1["default"].header
    }, {
      children: "\u0421\u043F\u0440\u0438\u043D\u0442"
    })), (0, jsx_runtime_1.jsxs)("p", __assign({
      className: SprintDescription_module_scss_1["default"].text
    }, {
      children: ["\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0443\u0433\u0430\u0434\u0430\u0442\u044C \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u043B\u043E\u0432 \u0437\u0430 30 \u0441\u0435\u043A\u0443\u043D\u0434. ", (0, jsx_runtime_1.jsx)("br", {}), " \u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0438\u0433\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043A\u0430\u043A \u043C\u044B\u0448\u043A\u043E\u0439, \u0442\u0430\u043A \u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0430\u043C\u0438 \u043D\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435."]
    }))]
  }));
};

exports["default"] = SprintDescription;

/***/ }),

/***/ "./pages/Games/SprintGame/SprintDifficulty/Difficulty/Difficulty.tsx":
/*!***************************************************************************!*\
  !*** ./pages/Games/SprintGame/SprintDifficulty/Difficulty/Difficulty.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Difficulty_module_scss_1 = __importDefault(__webpack_require__(/*! ./Difficulty.module.scss */ "./pages/Games/SprintGame/SprintDifficulty/Difficulty/Difficulty.module.scss"));

var Difficulty = function Difficulty(props) {
  // const [difficultyCur, setDifficultyCur] = useState(0);
  var changeDif = function changeDif(event) {
    var _a;

    var buttons = document.querySelectorAll('[data-button]');
    buttons.forEach(function (item) {
      return item.classList.contains(Difficulty_module_scss_1["default"].active) ? item.classList.remove(Difficulty_module_scss_1["default"].active) : 0;
    });
    var target = event.target;

    if (event.target !== event.currentTarget) {
      var span = event.target;
      (_a = span.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(Difficulty_module_scss_1["default"].active);
    } else {
      target.classList.add(Difficulty_module_scss_1["default"].active);
    }

    props.activeChange(true);
    var level = Number(props.id);

    var a = function a() {
      props.change(level);
    };

    a();
  };

  return (0, jsx_runtime_1.jsx)("a", __assign({
    href: "##",
    onClick: changeDif,
    "data-button": 'button',
    className: Difficulty_module_scss_1["default"].container,
    id: props.id.toString()
  }, {
    children: (0, jsx_runtime_1.jsx)("span", __assign({
      className: Difficulty_module_scss_1["default"].text
    }, {
      children: props.difficulty
    }))
  }));
};

exports["default"] = Difficulty;

/***/ }),

/***/ "./pages/Games/SprintGame/SprintDifficulty/SprintDifficulty.tsx":
/*!**********************************************************************!*\
  !*** ./pages/Games/SprintGame/SprintDifficulty/SprintDifficulty.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var difficultyLevels_1 = __webpack_require__(/*! ../../../../common/constants/difficultyLevels */ "./common/constants/difficultyLevels.ts");

var Difficulty_1 = __importDefault(__webpack_require__(/*! ./Difficulty/Difficulty */ "./pages/Games/SprintGame/SprintDifficulty/Difficulty/Difficulty.tsx"));

var SprintDifficulty_module_scss_1 = __importDefault(__webpack_require__(/*! ./SprintDifficulty.module.scss */ "./pages/Games/SprintGame/SprintDifficulty/SprintDifficulty.module.scss"));

var SprintDifficulty = function SprintDifficulty(props) {
  var _a = (0, react_1.useState)(false),
      active = _a[0],
      setActive = _a[1];

  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: SprintDifficulty_module_scss_1["default"].section
  }, {
    children: [(0, jsx_runtime_1.jsx)("h3", __assign({
      className: SprintDifficulty_module_scss_1["default"].header
    }, {
      children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C:"
    })), (0, jsx_runtime_1.jsx)("div", __assign({
      className: SprintDifficulty_module_scss_1["default"].container
    }, {
      children: difficultyLevels_1.DIFFICULTY.map(function (item, index) {
        return (0, jsx_runtime_1.jsx)(Difficulty_1["default"], {
          difficulty: item.level,
          change: props.change,
          id: item.id,
          activeChange: setActive
        }, index);
      })
    })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
      className: SprintDifficulty_module_scss_1["default"].link,
      to: "/sprintGame"
    }, {
      children: (0, jsx_runtime_1.jsx)("button", __assign({
        className: [SprintDifficulty_module_scss_1["default"].button, active ? SprintDifficulty_module_scss_1["default"].active : SprintDifficulty_module_scss_1["default"].notActive].join(' ')
      }, {
        children: "\u041D\u0430\u0447\u0430\u0442\u044C"
      }))
    }))]
  }));
};

exports["default"] = SprintDifficulty;

/***/ }),

/***/ "./pages/Games/SprintGame/SprintGame/SprintGame.tsx":
/*!**********************************************************!*\
  !*** ./pages/Games/SprintGame/SprintGame/SprintGame.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var SprintGame_module_scss_1 = __importDefault(__webpack_require__(/*! ./SprintGame.module.scss */ "./pages/Games/SprintGame/SprintGame/SprintGame.module.scss"));

var CardSpirnt_1 = __importDefault(__webpack_require__(/*! ../CardSprint/CardSpirnt */ "./pages/Games/SprintGame/CardSprint/CardSpirnt.tsx"));

var GameHeader_1 = __importDefault(__webpack_require__(/*! ../GameHeader/GameHeader */ "./pages/Games/SprintGame/GameHeader/GameHeader.tsx"));

var CounterGame_1 = __importDefault(__webpack_require__(/*! ../CounterGame/CounterGame */ "./pages/Games/SprintGame/CounterGame/CounterGame.tsx"));

var LearnedWordsAPI_1 = __importDefault(__webpack_require__(/*! ../../../../components/API/LearnedWordsAPI/LearnedWordsAPI */ "./components/API/LearnedWordsAPI/LearnedWordsAPI.ts"));

var getUserData_1 = __importDefault(__webpack_require__(/*! ../../../../common/getUserData */ "./common/getUserData.tsx"));

var SprintGame = function SprintGame(props) {
  var emptyState = [[false, false], [false, false], [false, false]];

  var _a = (0, react_1.useState)(true),
      gameStage = _a[0],
      setGameStage = _a[1];

  var _b = (0, react_1.useState)(0),
      nextQ = _b[0],
      setNextQ = _b[1];

  var backToGame = function backToGame() {
    setGameStage(!gameStage);
  };

  var _c = (0, react_1.useState)(1),
      xScore = _c[0],
      setXScore = _c[1];

  var _d = (0, react_1.useState)(props.array.slice()),
      ArrayGame = _d[0],
      setArrayGame = _d[1];

  var _e = (0, react_1.useState)([]),
      mistakes = _e[0],
      setMistakes = _e[1];

  var _f = (0, react_1.useState)([]),
      learned = _f[0],
      setLearned = _f[1];

  var _g = (0, react_1.useState)(2 * 60),
      timeleft = _g[0],
      setTimeLeft = _g[1];

  var _h = (0, react_1.useState)(timeleft),
      isCounting = _h[0],
      setIsCounting = _h[1];

  var _j = (0, react_1.useState)(0),
      score = _j[0],
      setScore = _j[1];

  var _k = (0, react_1.useState)([[false, false], [false, false], [false, false]]),
      state = _k[0],
      setState = _k[1];

  var _l = (0, react_1.useState)(0),
      pointNumber = _l[0],
      setPointNumber = _l[1];

  var _m = (0, react_1.useState)(0),
      pointInARow = _m[0],
      setPointInARow = _m[1];

  var _o = (0, react_1.useState)(0),
      pointInARowStat = _o[0],
      setPointInARowStat = _o[1];

  var _p = (0, react_1.useState)(false),
      answer = _p[0],
      setAnswer = _p[1];

  var _q = (0, react_1.useState)(false),
      ourAnswer = _q[0],
      setourAnswer = _q[1];

  var _r = (0, react_1.useState)(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)]),
      ourGuess = _r[0],
      setOurGuess = _r[1];

  var _s = (0, react_1.useState)(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)]),
      wordGuess = _s[0],
      setWordGuess = _s[1];

  var getourGuess = function getourGuess() {
    var correct;

    if (ArrayGame.length > 2) {
      correct = Math.ceil(Math.random() * 2);
    } else {
      correct = 1;
    }

    if (correct === 1) {
      setAnswer(true);
      var number = Math.ceil(Math.random() * ArrayGame.length - 1);

      if (number === -1) {
        setGameStage(false);
        props.setPoints(pointInARowStat);
      } else {
        setOurGuess(ArrayGame[number]);
        setWordGuess(ArrayGame[number]);
      }
    } else {
      var numberUp = Math.ceil(Math.random() * ArrayGame.length - 1);

      if (numberUp === -1) {
        setGameStage(false);
        props.setPoints(pointInARowStat);
      } else {
        setAnswer(false);
        setOurGuess(ArrayGame[numberUp]);
        var numberDown = Math.ceil(Math.random() * ArrayGame.length - 1);

        if (numberDown !== numberUp) {
          setWordGuess(ArrayGame[numberDown]);
        } else {
          do {
            numberDown = Math.ceil(Math.random() * ArrayGame.length - 1);
          } while (numberDown === numberUp);

          setWordGuess(ArrayGame[numberDown]);
        }
      }
    }
  };

  var refreshOurAnswer = function refreshOurAnswer(correct) {
    return correct ? setourAnswer(true) : setourAnswer(false);
  };

  var refreshPoint = function refreshPoint(result) {
    var point;

    if (result) {
      point = [true, true];
    } else {
      point = [true, false];
    }

    return point;
  };

  var correctAnswer = function correctAnswer() {
    var newState;

    if (pointNumber) {
      newState = state.slice();
    } else {
      newState = emptyState;
    }

    setPointInARow(pointInARow + 1);

    if (pointInARow > pointInARowStat) {
      setPointInARowStat(pointInARow);
    }

    setScore(score + 10 * xScore);
    var correctWord = props.array.filter(function (item) {
      return item === wordGuess;
    })[0];

    if (!mistakes.includes(correctWord) && ourGuess === wordGuess && !learned.includes(correctWord)) {
      setLearned(__spreadArray(__spreadArray([], learned, true), [correctWord], false));
      var newArray = ArrayGame.slice();
      newArray.splice(newArray.indexOf(correctWord), 1);

      if (newArray.length === 0) {
        setGameStage(false);
        props.setPoints(pointInARowStat);
      }

      setArrayGame(newArray);
    } else if (mistakes.includes(correctWord) && ourGuess === wordGuess && !learned.includes(correctWord)) {
      var newArray = ArrayGame.slice();
      newArray.splice(newArray.indexOf(correctWord), 1);

      if (newArray.length === 0) {
        setGameStage(false);
        props.setPoints(pointInARowStat);
      }

      setArrayGame(newArray);
    }

    var pointStateNew = refreshPoint(true);
    newState[pointNumber] = pointStateNew;
    setState(newState);
  };

  var wrongAnswer = function wrongAnswer() {
    var newState;

    if (pointNumber) {
      newState = state.slice();
    } else {
      newState = emptyState;
    }

    setPointInARow(0);
    var pointStateNew = refreshPoint(false);
    newState[pointNumber] = pointStateNew;
    setState(newState);
  };

  (0, react_1.useEffect)(function () {
    getourGuess();

    if (nextQ !== 0) {
      if (pointNumber < 2) {
        var newCount = pointNumber + 1;
        setPointNumber(newCount);

        if (answer === ourAnswer) {
          correctAnswer();
        } else {
          wrongAnswer();

          if (!mistakes.includes(wordGuess)) {
            setMistakes(__spreadArray(__spreadArray([], mistakes, true), [wordGuess], false));
          }
        }
      } else {
        setPointNumber(0);

        if (answer === ourAnswer) {
          correctAnswer();
          setScore(score + 10 * xScore);
        } else {
          wrongAnswer();
        }
      }
    }
  }, [nextQ]);
  (0, react_1.useEffect)(function () {
    var myInterval = setInterval(function () {
      setIsCounting(isCounting - 1);
      setTimeLeft(function (prevTime) {
        return prevTime >= 0 ? prevTime - 1 : 0;
      });

      if (timeleft === 0) {
        props.setPoints(pointInARowStat);
        setGameStage(false);
      }
    }, 1000);
    return function () {
      clearInterval(myInterval);
    };
  }, [timeleft]);

  var refresh = function refresh(buttonAnswer) {
    setNextQ(nextQ + 1);
  };

  document.onkeydown = function (event) {
    var key = event.key,
        keyCode = event.keyCode;

    if (keyCode === 37) {
      refreshOurAnswer(true);
      refresh(true);
    } else if (keyCode === 39) {
      refreshOurAnswer(false);
      refresh(false);
    }
  };

  (0, react_1.useEffect)(function () {
    var userData = (0, getUserData_1["default"])();

    if (gameStage === false && userData) {
      var sign = function sign() {
        return __awaiter(void 0, void 0, void 0, function () {
          var id, token, resp;
          return __generator(this, function (_a) {
            id = userData.id;
            token = userData.token;
            props.setPoints(pointInARowStat);
            props.setAmount(1);
            props.setCorrect(Number((learned.length / 20).toFixed(2)));

            resp = function resp() {
              return __awaiter(void 0, void 0, void 0, function () {
                var count, data, server, servercountsprint, servercountaudio, countnew, countnewaudio, date, WordNumberSprint, WordNumberAudio, newLearnWords;

                var _a, _b;

                return __generator(this, function (_c) {
                  switch (_c.label) {
                    case 0:
                      count = 0;
                      return [4
                      /*yield*/
                      , LearnedWordsAPI_1["default"].getLearnedWords(id, token)];

                    case 1:
                      data = _c.sent();
                      server = data.optional.learnedWords.split(' ');
                      servercountsprint = data.optional.learnedWordsNumberSprint;
                      servercountaudio = data.optional.learnedWordsNumberAudio;
                      countnew = servercountsprint[Object.keys(servercountsprint)[0]];
                      countnewaudio = servercountaudio[Object.keys(servercountaudio)[0]];
                      learned.map(function (item) {
                        if (!server.includes(item.word)) {
                          server.push(item.word);
                          count += 1;
                        }

                        return item;
                      });
                      date = new Date().setHours(0, 0, 0);
                      WordNumberSprint = (_a = {}, _a[date] = count + countnew, _a);
                      WordNumberAudio = (_b = {}, _b[date] = countnewaudio, _b);

                      newLearnWords = function newLearnWords() {
                        return __awaiter(void 0, void 0, void 0, function () {
                          var lw;
                          return __generator(this, function (_a) {
                            switch (_a.label) {
                              case 0:
                                lw = LearnedWordsAPI_1["default"].createWord(id, token, 1, server, WordNumberSprint, WordNumberAudio);
                                return [4
                                /*yield*/
                                , LearnedWordsAPI_1["default"].updateUserLearnedWords(lw)];

                              case 1:
                                _a.sent();

                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      };

                      newLearnWords();
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            };

            resp();
            return [2
            /*return*/
            ];
          });
        });
      };

      sign();
    }
  }, [gameStage]);
  (0, react_1.useEffect)(function () {
    if (pointInARow === 3) {
      setXScore(2);
    } else if (pointInARow === 0) {
      setXScore(1);
    } else if (pointInARow >= 6) {
      setXScore(3);
    }
  }, [pointInARow]);
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: SprintGame_module_scss_1["default"].background
  }, {
    children: [(0, jsx_runtime_1.jsx)(GameHeader_1["default"], {}), gameStage && (0, jsx_runtime_1.jsx)(CounterGame_1["default"], {
      counter: timeleft
    }), (0, jsx_runtime_1.jsx)(CardSpirnt_1["default"], {
      backToGame: backToGame,
      learned: learned,
      mistakes: mistakes,
      game: gameStage,
      score: score,
      done: state,
      correct: state,
      refresh: refresh,
      refreshAnswer: refreshOurAnswer,
      ourGuess: ourGuess,
      wordGuess: wordGuess,
      nextQ: nextQ
    })]
  }));
};

exports["default"] = SprintGame;

/***/ }),

/***/ "./pages/Games/SprintGame/StartingPageSprint/StartingPageSprint.tsx":
/*!**************************************************************************!*\
  !*** ./pages/Games/SprintGame/StartingPageSprint/StartingPageSprint.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var GameHeader_1 = __importDefault(__webpack_require__(/*! ../GameHeader/GameHeader */ "./pages/Games/SprintGame/GameHeader/GameHeader.tsx"));

var SprintDescription_1 = __importDefault(__webpack_require__(/*! ../SprintDescription/SprintDescription */ "./pages/Games/SprintGame/SprintDescription/SprintDescription.tsx"));

var SprintDifficulty_1 = __importDefault(__webpack_require__(/*! ../SprintDifficulty/SprintDifficulty */ "./pages/Games/SprintGame/SprintDifficulty/SprintDifficulty.tsx"));

var StartingPageSprint_module_scss_1 = __importDefault(__webpack_require__(/*! ./StartingPageSprint.module.scss */ "./pages/Games/SprintGame/StartingPageSprint/StartingPageSprint.module.scss"));

var DictionaryAPI_1 = __importDefault(__webpack_require__(/*! ../../../../components/API/DictionaryAPI/DictionaryAPI */ "./components/API/DictionaryAPI/DictionaryAPI.ts"));

var StartingPageSprint = function StartingPageSprint(props) {
  var _a = (0, react_1.useState)(0),
      difficulty = _a[0],
      setDifficulty = _a[1];

  var _b = (0, react_1.useState)(0),
      page = _b[0],
      setPage = _b[1];

  var changeDifficulty = function changeDifficulty(difficultyLevel) {
    setDifficulty(difficultyLevel);
  };

  (0, react_1.useEffect)(function () {
    var changeDif = function changeDif() {
      return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              setPage(Math.floor(Math.random() * 20));
              return [4
              /*yield*/
              , DictionaryAPI_1["default"].getWordsArray(page, difficulty + 1)];

            case 1:
              resp = _a.sent();
              props.changeGameMode(resp);
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    changeDif();
  }, [difficulty]);
  return (0, jsx_runtime_1.jsx)("div", __assign({
    className: StartingPageSprint_module_scss_1["default"].background
  }, {
    children: (0, jsx_runtime_1.jsxs)("div", __assign({
      className: StartingPageSprint_module_scss_1["default"].container
    }, {
      children: [(0, jsx_runtime_1.jsx)(GameHeader_1["default"], {}), (0, jsx_runtime_1.jsx)(SprintDescription_1["default"], {}), (0, jsx_runtime_1.jsx)(SprintDifficulty_1["default"], {
        change: changeDifficulty
      })]
    }))
  }));
};

exports["default"] = StartingPageSprint;

/***/ }),

/***/ "./pages/Main/Advantages/Advantages.tsx":
/*!**********************************************!*\
  !*** ./pages/Main/Advantages/Advantages.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Section_1 = __importDefault(__webpack_require__(/*! ../../../components/Section/Section */ "./components/Section/Section.tsx"));

var AdvantageCard_1 = __importDefault(__webpack_require__(/*! ../../../components/AdvantageCard/AdvantageCard */ "./components/AdvantageCard/AdvantageCard.tsx"));

var Advantages = function Advantages() {
  var header = 'Возможности и преимущества';
  var data = [{
    path: '/vocabulary',
    title: 'Электронный учебник',
    body: 'Изучите более 2500 тысяч иностранных слов в зависимости от уровня Вашей подготовки',
    imgURL: '../../../assets/images/Main/Advanatages/guide.png'
  }, {
    path: '/games',
    title: 'Мини-игры',
    body: 'Запоминайте слова, тренируйте восприятие на слух с помощью двух увлекательных игр',
    imgURL: '../../../assets/images/Main/Advanatages/games.png'
  }, {
    path: '/statistic',
    title: 'Статистика',
    body: 'Занимайтесь активно и проверяйте продвижение к цели в индивидуальной статистике',
    imgURL: '../../../assets/images/Main/Advanatages/statistics.png'
  }];
  return (0, jsx_runtime_1.jsx)(Section_1["default"], __assign({
    advantages: true,
    header: header
  }, {
    children: data.map(function (card, index) {
      return (0, jsx_runtime_1.jsx)(AdvantageCard_1["default"], {
        path: card.path,
        imgURL: card.imgURL,
        title: card.title,
        body: card.body
      }, card.path);
    })
  }));
};

exports["default"] = Advantages;

/***/ }),

/***/ "./pages/Main/Main.tsx":
/*!*****************************!*\
  !*** ./pages/Main/Main.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Welcome_1 = __importDefault(__webpack_require__(/*! ./Welcome/Welcome */ "./pages/Main/Welcome/Welcome.tsx"));

var Advantages_1 = __importDefault(__webpack_require__(/*! ./Advantages/Advantages */ "./pages/Main/Advantages/Advantages.tsx"));

var TeamSection_1 = __importDefault(__webpack_require__(/*! ./Team/TeamSection */ "./pages/Main/Team/TeamSection.tsx"));

var Main_module_scss_1 = __importDefault(__webpack_require__(/*! ./Main.module.scss */ "./pages/Main/Main.module.scss"));

var Main = function Main() {
  return (0, jsx_runtime_1.jsxs)("main", __assign({
    className: Main_module_scss_1["default"].main
  }, {
    children: [(0, jsx_runtime_1.jsx)(Welcome_1["default"], {}), (0, jsx_runtime_1.jsx)(Advantages_1["default"], {}), (0, jsx_runtime_1.jsx)(TeamSection_1["default"], {})]
  }));
};

exports["default"] = Main;

/***/ }),

/***/ "./pages/Main/Team/TeamSection.tsx":
/*!*****************************************!*\
  !*** ./pages/Main/Team/TeamSection.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var Section_1 = __importDefault(__webpack_require__(/*! ../../../components/Section/Section */ "./components/Section/Section.tsx"));

var CardTeam_1 = __importDefault(__webpack_require__(/*! ../../../components/CardTeam/CardTeam */ "./components/CardTeam/CardTeam.tsx"));

var Card_1 = __importDefault(__webpack_require__(/*! ../../../components/Card/Card */ "./components/Card/Card.tsx"));

var developersConst_1 = __importDefault(__webpack_require__(/*! ../../../common/constants/developersConst */ "./common/constants/developersConst.ts"));

var TeamSection = function TeamSection() {
  var header = 'О команде ';
  return (0, jsx_runtime_1.jsx)(Section_1["default"], __assign({
    header: header
  }, {
    children: developersConst_1["default"].map(function (member, index) {
      return (0, jsx_runtime_1.jsx)(Card_1["default"], __assign({
        type: "team"
      }, {
        children: (0, jsx_runtime_1.jsx)(CardTeam_1["default"], {
          member: member
        })
      }), index);
    })
  }));
};

exports["default"] = TeamSection;

/***/ }),

/***/ "./pages/Main/Welcome/Welcome.tsx":
/*!****************************************!*\
  !*** ./pages/Main/Welcome/Welcome.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var Welcome_module_scss_1 = __importDefault(__webpack_require__(/*! ./Welcome.module.scss */ "./pages/Main/Welcome/Welcome.module.scss"));

var Button_module_scss_1 = __importDefault(__webpack_require__(/*! ../../../components/Button/Button.module.scss */ "./components/Button/Button.module.scss"));

var useApplicationAccessContext_1 = __importDefault(__webpack_require__(/*! ../../../hooks/useApplicationAccessContext */ "./hooks/useApplicationAccessContext.tsx"));

var Welcome = function Welcome() {
  var isSignedIn = (0, useApplicationAccessContext_1["default"])().isSignedIn;
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Welcome_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsxs)("div", __assign({
      className: Welcome_module_scss_1["default"].content
    }, {
      children: [(0, jsx_runtime_1.jsxs)("h1", __assign({
        className: Welcome_module_scss_1["default"].header
      }, {
        children: ["\u0418\u0437\u0443\u0447\u0430\u0439 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 ", (0, jsx_runtime_1.jsx)("span", __assign({
          className: Welcome_module_scss_1["default"].logo
        }, {
          children: "RSLang"
        }))]
      })), (0, jsx_runtime_1.jsx)("p", __assign({
        className: Welcome_module_scss_1["default"].text
      }, {
        children: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0443\u0447\u0435\u0431\u043D\u0438\u043A \u0441 \u0431\u0430\u0437\u043E\u0439 \u0441\u043B\u043E\u0432 \u0434\u043B\u044F \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F, \u043C\u0438\u043D\u0438-\u0438\u0433\u0440\u044B \u0434\u043B\u044F \u0438\u0445 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044F, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430."
      })), isSignedIn ? false : (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
        to: "/registration",
        className: "".concat(Welcome_module_scss_1["default"].link, " ").concat(Button_module_scss_1["default"].button)
      }, {
        children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      }))]
    })), (0, jsx_runtime_1.jsx)("div", {
      className: Welcome_module_scss_1["default"].image
    })]
  }));
};

exports["default"] = Welcome;

/***/ }),

/***/ "./pages/Statistic/Statistic.tsx":
/*!***************************************!*\
  !*** ./pages/Statistic/Statistic.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var StatisticsForAllTime_1 = __importDefault(__webpack_require__(/*! ../../components/StatisticsForAllTime/StatisticsForAllTime */ "./components/StatisticsForAllTime/StatisticsForAllTime.tsx"));

var StatisticToday_1 = __importDefault(__webpack_require__(/*! ../../components/StatisticToday/StatisticToday */ "./components/StatisticToday/StatisticToday.tsx"));

var Statistics_module_scss_1 = __importDefault(__webpack_require__(/*! ./Statistics.module.scss */ "./pages/Statistic/Statistics.module.scss"));

var Statistic = function Statistic() {
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Statistics_module_scss_1["default"].main
  }, {
    children: [(0, jsx_runtime_1.jsx)(StatisticToday_1["default"], {}), (0, jsx_runtime_1.jsx)(StatisticsForAllTime_1["default"], {})]
  }));
};

exports["default"] = Statistic;

/***/ }),

/***/ "./pages/Vocabulary/Difficulty/Difficulty.tsx":
/*!****************************************************!*\
  !*** ./pages/Vocabulary/Difficulty/Difficulty.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var difficultyLevels_1 = __webpack_require__(/*! ../../../common/constants/difficultyLevels */ "./common/constants/difficultyLevels.ts");

var DifficultyCard_1 = __importDefault(__webpack_require__(/*! ../../../components/DifficultyCard/DifficultyCard */ "./components/DifficultyCard/DifficultyCard.tsx"));

var Difficulty_module_scss_1 = __importDefault(__webpack_require__(/*! ./Difficulty.module.scss */ "./pages/Vocabulary/Difficulty/Difficulty.module.scss"));

var Difficulty = function Difficulty(_a) {
  var difficultyLevel = _a.difficultyLevel,
      setDifficultyLevel = _a.setDifficultyLevel,
      setAccentColor = _a.setAccentColor,
      setPage = _a.setPage;

  var initStyle = function initStyle() {
    var cards = document.querySelectorAll('.card');
    var style = cards[difficultyLevel].style;
    var color = difficultyLevels_1.DIFFICULTY[difficultyLevel].color;
    setAccentColor(color);
    style.background = color;
    style.borderColor = color;
  };

  (0, react_1.useEffect)(function () {
    return initStyle();
  }, []);
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Difficulty_module_scss_1["default"].section
  }, {
    children: [(0, jsx_runtime_1.jsx)("p", __assign({
      className: Difficulty_module_scss_1["default"].paragraph
    }, {
      children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438"
    })), (0, jsx_runtime_1.jsx)("div", __assign({
      className: Difficulty_module_scss_1["default"].container
    }, {
      children: difficultyLevels_1.DIFFICULTY.map(function (item) {
        return (0, jsx_runtime_1.jsxs)(DifficultyCard_1["default"], __assign({
          color: item.color,
          id: item.id,
          curLevel: difficultyLevel,
          setLevel: setDifficultyLevel,
          setAccentColor: setAccentColor,
          setPage: setPage
        }, {
          children: [(0, jsx_runtime_1.jsx)("h4", __assign({
            className: Difficulty_module_scss_1["default"].header
          }, {
            children: item.level
          })), (0, jsx_runtime_1.jsx)("p", __assign({
            className: Difficulty_module_scss_1["default"].detailed
          }, {
            children: (0, jsx_runtime_1.jsx)("span", {
              children: item.detailed
            })
          }))]
        }), item.id);
      })
    }))]
  }));
};

exports["default"] = Difficulty;

/***/ }),

/***/ "./pages/Vocabulary/Games/Games.tsx":
/*!******************************************!*\
  !*** ./pages/Vocabulary/Games/Games.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");

var gameCards_1 = __importDefault(__webpack_require__(/*! ../../../common/constants/gameCards */ "./common/constants/gameCards.ts"));

var Section_1 = __importDefault(__webpack_require__(/*! ../../../components/Section/Section */ "./components/Section/Section.tsx"));

var Card_1 = __importDefault(__webpack_require__(/*! ../../../components/Card/Card */ "./components/Card/Card.tsx"));

var Games_module_scss_1 = __importDefault(__webpack_require__(/*! ./Games.module.scss */ "./pages/Vocabulary/Games/Games.module.scss"));

var Games = function Games() {
  return (0, jsx_runtime_1.jsx)(Section_1["default"], __assign({
    header: "\u0418\u0433\u0440\u044B"
  }, {
    children: gameCards_1["default"].map(function (data) {
      return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({
        className: Games_module_scss_1["default"].link,
        to: data.url
      }, {
        children: (0, jsx_runtime_1.jsxs)(Card_1["default"], __assign({
          type: "game"
        }, {
          children: [(0, jsx_runtime_1.jsx)("div", __assign({
            className: Games_module_scss_1["default"].img
          }, {
            children: (0, jsx_runtime_1.jsx)("img", {
              src: data.imgURL,
              alt: "game-image"
            })
          })), (0, jsx_runtime_1.jsx)("h3", __assign({
            className: Games_module_scss_1["default"].center
          }, {
            children: data.title
          })), (0, jsx_runtime_1.jsx)("p", __assign({
            className: Games_module_scss_1["default"].center
          }, {
            children: data.body
          }))]
        }))
      }), data.title);
    })
  }));
};

exports["default"] = Games;

/***/ }),

/***/ "./pages/Vocabulary/Pagination/Pagination.tsx":
/*!****************************************************!*\
  !*** ./pages/Vocabulary/Pagination/Pagination.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var usePagination_1 = __webpack_require__(/*! ../../../hooks/usePagination */ "./hooks/usePagination.ts");

var Pagination_module__scss_1 = __importDefault(__webpack_require__(/*! ./Pagination.module..scss */ "./pages/Vocabulary/Pagination/Pagination.module..scss"));

var Pagination = function Pagination(_a) {
  var setPage = _a.setPage,
      page = _a.page,
      accentColor = _a.accentColor;
  var paginationRange = (0, usePagination_1.usePagination)(page);

  if (paginationRange.length < 2) {
    return null;
  }

  var onNext = function onNext() {
    setPage(page + 1);
  };

  var onPrevious = function onPrevious() {
    setPage(page - 1);
  };

  var onPageClick = function onPageClick(curPage) {
    setPage(curPage - 1);
  };

  var lastPage = paginationRange.at(-1);
  return (0, jsx_runtime_1.jsxs)("ul", __assign({
    className: Pagination_module__scss_1["default"].pagination__container
  }, {
    children: [(0, jsx_runtime_1.jsx)("li", __assign({
      className: "".concat(Pagination_module__scss_1["default"].pagination__item, " ").concat(page === 0 ? Pagination_module__scss_1["default"].disabled : ''),
      onClick: onPrevious
    }, {
      children: (0, jsx_runtime_1.jsx)("div", {
        className: "".concat(Pagination_module__scss_1["default"].arrow, " ").concat(Pagination_module__scss_1["default"].left)
      })
    })), paginationRange.map(function (pageNumber, index) {
      if (pageNumber === usePagination_1.DOTS) {
        return (0, jsx_runtime_1.jsx)("li", __assign({
          className: "".concat(Pagination_module__scss_1["default"].pagination__item, " ").concat(Pagination_module__scss_1["default"].dots)
        }, {
          children: "\u2026"
        }), index);
      }

      return (0, jsx_runtime_1.jsx)("li", __assign({
        className: "".concat(Pagination_module__scss_1["default"].pagination__item, " ").concat(pageNumber === page + 1 ? Pagination_module__scss_1["default"].selected : '', "  ").concat(Pagination_module__scss_1["default"]["A".concat(accentColor.slice(1))]),
        onClick: function onClick() {
          return onPageClick(pageNumber);
        }
      }, {
        children: pageNumber
      }), index);
    }), (0, jsx_runtime_1.jsx)("li", __assign({
      className: "".concat(Pagination_module__scss_1["default"].pagination__item, " ").concat(page === lastPage - 1 ? Pagination_module__scss_1["default"].disabled : ''),
      onClick: onNext
    }, {
      children: (0, jsx_runtime_1.jsx)("div", {
        className: "".concat(Pagination_module__scss_1["default"].arrow, " ").concat(Pagination_module__scss_1["default"].right)
      })
    }))]
  }));
};

exports["default"] = Pagination;

/***/ }),

/***/ "./pages/Vocabulary/Vocabulary.tsx":
/*!*****************************************!*\
  !*** ./pages/Vocabulary/Vocabulary.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var Difficulty_1 = __importDefault(__webpack_require__(/*! ./Difficulty/Difficulty */ "./pages/Vocabulary/Difficulty/Difficulty.tsx"));

var Games_1 = __importDefault(__webpack_require__(/*! ./Games/Games */ "./pages/Vocabulary/Games/Games.tsx"));

var WordCarousel_1 = __importDefault(__webpack_require__(/*! ./WordCarousel/WordCarousel */ "./pages/Vocabulary/WordCarousel/WordCarousel.tsx"));

var DictionaryAPI_1 = __importDefault(__webpack_require__(/*! ../../components/API/DictionaryAPI/DictionaryAPI */ "./components/API/DictionaryAPI/DictionaryAPI.ts"));

var Pagination_1 = __importDefault(__webpack_require__(/*! ./Pagination/Pagination */ "./pages/Vocabulary/Pagination/Pagination.tsx"));

var Vocabulary_module_scss_1 = __importDefault(__webpack_require__(/*! ./Vocabulary.module.scss */ "./pages/Vocabulary/Vocabulary.module.scss"));

var DetailedWord_1 = __importDefault(__webpack_require__(/*! ../../components/DetailedWord/DetailedWord */ "./components/DetailedWord/DetailedWord.tsx"));

var Vocabulary = function Vocabulary() {
  var _a = (0, react_1.useState)(0),
      difficultyLevel = _a[0],
      setDifficultyLevel = _a[1];

  var _b = (0, react_1.useState)(''),
      accentColor = _b[0],
      setAccentColor = _b[1];

  var _c = (0, react_1.useState)([]),
      words = _c[0],
      setWords = _c[1];

  var _d = (0, react_1.useState)(''),
      wordId = _d[0],
      setWordId = _d[1];

  var _e = (0, react_1.useState)({}),
      curWord = _e[0],
      setCurWord = _e[1];

  var _f = (0, react_1.useState)(0),
      page = _f[0],
      setPage = _f[1];

  function downloadWords(pg, lvl) {
    return __awaiter(this, void 0, void 0, function () {
      var resp;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , DictionaryAPI_1["default"].getWordsArray(pg, lvl)];

          case 1:
            resp = _a.sent();
            setWords(resp);
            setWordId(resp[0].id);
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  function downloadWord(wordID) {
    return __awaiter(this, void 0, void 0, function () {
      var resp;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , DictionaryAPI_1["default"].getWordByID(wordID)];

          case 1:
            resp = _a.sent();
            setCurWord(resp);
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  (0, react_1.useEffect)(function () {
    downloadWords(page, difficultyLevel);
  }, [page, difficultyLevel]);
  (0, react_1.useEffect)(function () {
    downloadWord(wordId);
  }, [wordId]);
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: Vocabulary_module_scss_1["default"].main
  }, {
    children: [(0, jsx_runtime_1.jsx)("h2", __assign({
      className: Vocabulary_module_scss_1["default"].header
    }, {
      children: "\u0423\u0447\u0435\u0431\u043D\u0438\u043A"
    })), (0, jsx_runtime_1.jsx)(Difficulty_1["default"], {
      difficultyLevel: difficultyLevel,
      setDifficultyLevel: setDifficultyLevel,
      setPage: setPage,
      setAccentColor: setAccentColor
    }), (0, jsx_runtime_1.jsx)(WordCarousel_1["default"], {
      accentColor: accentColor,
      difficultyLevel: difficultyLevel,
      page: page,
      words: words,
      setWord: setWordId
    }), (0, jsx_runtime_1.jsx)(DetailedWord_1["default"], {
      word: JSON.stringify(curWord)
    }), (0, jsx_runtime_1.jsx)(Pagination_1["default"], {
      accentColor: accentColor,
      page: page,
      setPage: setPage
    }), (0, jsx_runtime_1.jsx)(Games_1["default"], {})]
  }));
};

exports["default"] = Vocabulary;

/***/ }),

/***/ "./pages/Vocabulary/WordCarousel/WordCarousel.tsx":
/*!********************************************************!*\
  !*** ./pages/Vocabulary/WordCarousel/WordCarousel.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");

var react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var WordCard_1 = __importDefault(__webpack_require__(/*! ../../../components/WordCard/WordCard */ "./components/WordCard/WordCard.tsx"));

var WordCarousel_module_scss_1 = __importDefault(__webpack_require__(/*! ./WordCarousel.module.scss */ "./pages/Vocabulary/WordCarousel/WordCarousel.module.scss"));

var ArrowButton_1 = __importDefault(__webpack_require__(/*! ../../../components/ArrowButton/ArrowButton */ "./components/ArrowButton/ArrowButton.tsx"));

var WordCarousel = function WordCarousel(_a) {
  var words = _a.words,
      difficultyLevel = _a.difficultyLevel,
      setWord = _a.setWord,
      accentColor = _a.accentColor,
      page = _a.page;

  var _b = (0, react_1.useState)(0),
      frame = _b[0],
      setFrame = _b[1];

  (0, react_1.useEffect)(function () {
    setFrame(0);
    document.querySelector('.inner').removeAttribute('style');
  }, [difficultyLevel, page]);
  return (0, jsx_runtime_1.jsxs)("div", __assign({
    className: WordCarousel_module_scss_1["default"].container
  }, {
    children: [(0, jsx_runtime_1.jsx)(ArrowButton_1["default"], {
      frame: frame,
      setFrame: setFrame,
      direction: "left"
    }), (0, jsx_runtime_1.jsx)("div", __assign({
      className: WordCarousel_module_scss_1["default"].carousel
    }, {
      children: (0, jsx_runtime_1.jsx)("div", __assign({
        className: "inner ".concat(WordCarousel_module_scss_1["default"].inner)
      }, {
        children: words.map(function (word, index) {
          return (0, jsx_runtime_1.jsx)(WordCard_1["default"], {
            index: index,
            accentColor: accentColor,
            wordId: word.id,
            word: word.word,
            wordTranslate: word.wordTranslate,
            setWord: setWord
          }, word.id);
        })
      }))
    })), (0, jsx_runtime_1.jsx)(ArrowButton_1["default"], {
      frame: frame,
      setFrame: setFrame,
      direction: "right"
    })]
  }));
};

exports["default"] = WordCarousel;

/***/ }),

/***/ "./common/style/index.scss":
/*!*********************************!*\
  !*** ./common/style/index.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./components/AdvantageCard/AdvantageCard.module.scss":
/*!************************************************************!*\
  !*** ./components/AdvantageCard/AdvantageCard.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"title":"title-IfwkM","body":"body-HlkF5","image":"image-sBSUv","disabled":"disabled-LXpS_","link":"link-rJyOQ"});

/***/ }),

/***/ "./components/ArrowButton/ArrowButton.module.scss":
/*!********************************************************!*\
  !*** ./components/ArrowButton/ArrowButton.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"button-8__sv","button_left":"button_left-G5R_G","button_right":"button_right-ATXRS","disabled":"disabled-u6KwZ"});

/***/ }),

/***/ "./components/Button/Button.module.scss":
/*!**********************************************!*\
  !*** ./components/Button/Button.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"button-kWIGS","threeQuartersLoader":"threeQuartersLoader-i_4G8","loaderContainer":"loaderContainer-j0St1"});

/***/ }),

/***/ "./components/CardTeam/CardTeam.module.scss":
/*!**************************************************!*\
  !*** ./components/CardTeam/CardTeam.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cardTeam":"cardTeam-j7b2k","header":"header-USJm1","photo":"photo-aLtEl","description":"description-pMRDm","name":"name-tvEtw","role":"role-hp4Ns","contribution":"contribution-pyNwG"});

/***/ }),

/***/ "./components/Card/Card.module.scss":
/*!******************************************!*\
  !*** ./components/Card/Card.module.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card":"card-oH7dt","cardTeam":"cardTeam-IM9hT","cardOpportunity":"cardOpportunity-fBwem","cardGames":"cardGames-IJqOa","cardStatisticSmall":"cardStatisticSmall-GNlA6","cardStatisticMedium":"cardStatisticMedium-VUPne","cardStatisticLarge":"cardStatisticLarge-vZUQM"});

/***/ }),

/***/ "./components/DetailedWord/DetailedWord.module.scss":
/*!**********************************************************!*\
  !*** ./components/DetailedWord/DetailedWord.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card":"card-njFJj","playable":"playable-dNRBd","word__word":"word__word-RX2mS","word__container":"word__container-MJJfJ","word__translate":"word__translate-fDTLP","word__transcription":"word__transcription-n5qZy","img":"img-lVYGy","play":"play-StJov","phrases":"phrases-NmXOc","audio":"audio-JlAYi","meaning":"meaning-Zfgsp","example":"example-YmL6X","header":"header-eZ9WI","icon":"icon-NyXaE","translate":"translate-HE84M","add":"add-gCqjE"});

/***/ }),

/***/ "./components/DifficultyCard/DifficultyCard.module.scss":
/*!**************************************************************!*\
  !*** ./components/DifficultyCard/DifficultyCard.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card":"card-V8VH1"});

/***/ }),

/***/ "./components/Footer/Footer.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/Footer.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"footer":"footer-ycIiH","wrapper":"wrapper-sWhVF","linksContainer":"linksContainer-DO89b","logoRss":"logoRss-ZfLIB","githubContainer":"githubContainer-pgD4T","iconGithub":"iconGithub-fCdZ5","linkToRss":"linkToRss-MGCoG","developmentDate":"developmentDate-fI2dx"});

/***/ }),

/***/ "./components/Footer/Link/Link.module.scss":
/*!*************************************************!*\
  !*** ./components/Footer/Link/Link.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"linkToDeveloper":"linkToDeveloper-qSBrx"});

/***/ }),

/***/ "./components/Header/Header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/Header.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-UKOUv","container":"container-nu5J1","buttonAuthor":"buttonAuthor-bCCGY"});

/***/ }),

/***/ "./components/Header/Logo/Logo.module.scss":
/*!*************************************************!*\
  !*** ./components/Header/Logo/Logo.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"logo":"logo-GIPsk"});

/***/ }),

/***/ "./components/Header/Navigation/NavLink/NavLink.module.scss":
/*!******************************************************************!*\
  !*** ./components/Header/Navigation/NavLink/NavLink.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"item":"item-hN7jh","link":"link-zTXzY","arrow":"arrow-kCylx","disabled":"disabled-f0ypA"});

/***/ }),

/***/ "./components/Header/Navigation/Navigation.module.scss":
/*!*************************************************************!*\
  !*** ./components/Header/Navigation/Navigation.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"navList":"navList-r6MHl"});

/***/ }),

/***/ "./components/ProgressBar/Circle/Circle.module.scss":
/*!**********************************************************!*\
  !*** ./components/ProgressBar/Circle/Circle.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"circle":"circle-MqHFA"});

/***/ }),

/***/ "./components/ProgressBar/ProgressBar.module.scss":
/*!********************************************************!*\
  !*** ./components/ProgressBar/ProgressBar.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"content":"content-ahRIQ","percentage":"percentage-Es8a6","text":"text-tZHJP"});

/***/ }),

/***/ "./components/Section/Section.module.scss":
/*!************************************************!*\
  !*** ./components/Section/Section.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"section":"section-voLco","content":"content-SEyG_","header":"header-G0eyM"});

/***/ }),

/***/ "./components/StatisticToday/GameStat/GameStat.module.scss":
/*!*****************************************************************!*\
  !*** ./components/StatisticToday/GameStat/GameStat.module.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-ZPzFz","header":"header-L5weE","text":"text-eICu8","description":"description-zag9n"});

/***/ }),

/***/ "./components/StatisticToday/StatWords/StatWords.module.scss":
/*!*******************************************************************!*\
  !*** ./components/StatisticToday/StatWords/StatWords.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-Lk4K2"});

/***/ }),

/***/ "./components/StatisticToday/StatisticToday.module.scss":
/*!**************************************************************!*\
  !*** ./components/StatisticToday/StatisticToday.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-n6yAJ","header":"header-Ft06G","left":"left-Mf_yw","wrightAnswers":"wrightAnswers-yz7Ot"});

/***/ }),

/***/ "./components/StatisticsForAllTime/StatisticsForAllTime.module.scss":
/*!**************************************************************************!*\
  !*** ./components/StatisticsForAllTime/StatisticsForAllTime.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-dQXAx","navList":"navList-QEDcn","item":"item-lpnRM","button":"button-VhTbL","buttonActive":"buttonActive-nnIRr"});

/***/ }),

/***/ "./components/WordCard/WordCard.module.scss":
/*!**************************************************!*\
  !*** ./components/WordCard/WordCard.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card":"card-Qi683","word":"word-Hw3HD","translate":"translate-q66aR"});

/***/ }),

/***/ "./pages/Entrance/Authorization/Authorization.module.scss":
/*!****************************************************************!*\
  !*** ./pages/Entrance/Authorization/Authorization.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"wrapper-fdjLR","header":"header-ejHM2","info":"info-zqmF1","registration":"registration-ygqQA","buttonAuthorization":"buttonAuthorization-d_XRe"});

/***/ }),

/***/ "./pages/Entrance/Entrance.module.scss":
/*!*********************************************!*\
  !*** ./pages/Entrance/Entrance.module.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-bH1jp","illustration":"illustration-OnXEI"});

/***/ }),

/***/ "./pages/Entrance/FormInput/FormInput.module.scss":
/*!********************************************************!*\
  !*** ./pages/Entrance/FormInput/FormInput.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"explanation":"explanation-BCMjM","inputContainer":"inputContainer-_Talp","input":"input-dmlLo","buttonEye":"buttonEye-ixi1I","buttonEyeHide":"buttonEyeHide-ri7qH"});

/***/ }),

/***/ "./pages/Entrance/Registration/Registration.module.scss":
/*!**************************************************************!*\
  !*** ./pages/Entrance/Registration/Registration.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"wrapper":"wrapper-g5R9C","header":"header-Bmesj","info":"info-pFnzV","authorization":"authorization-PQYGC","buttonRegistration":"buttonRegistration-Cm1nC"});

/***/ }),

/***/ "./pages/Entrance/WarningMessage/WarningMessage.module.scss":
/*!******************************************************************!*\
  !*** ./pages/Entrance/WarningMessage/WarningMessage.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"error":"error-VKNOv","transparent":"transparent-bnsOU"});

/***/ }),

/***/ "./pages/Games/Audio/Audio.module.scss":
/*!*********************************************!*\
  !*** ./pages/Games/Audio/Audio.module.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-GfXOS","container__content":"container__content-Psm0x"});

/***/ }),

/***/ "./pages/Games/Audio/Game/Description/Description.module.scss":
/*!********************************************************************!*\
  !*** ./pages/Games/Audio/Game/Description/Description.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-xwdPr","heading":"heading-UjxxF","paragraph":"paragraph-kDAue","button":"button-pIP86"});

/***/ }),

/***/ "./pages/Games/Audio/Game/Description/Difficulty/Difficulty.module.scss":
/*!******************************************************************************!*\
  !*** ./pages/Games/Audio/Game/Description/Difficulty/Difficulty.module.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-xu3FR","difficulty__container":"difficulty__container-_aNSx","difficulties":"difficulties-i_lvX"});

/***/ }),

/***/ "./pages/Games/Audio/Game/Description/Difficulty/DifficultyCard/DifficultyCard.module.scss":
/*!*************************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/Description/Difficulty/DifficultyCard/DifficultyCard.module.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card":"card-GOo6P"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/AudioButton/AudioButton.module.scss":
/*!***************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/AudioButton/AudioButton.module.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"audio__button":"audio__button-Lggjp"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/DetailedAudioWord/DetailedAudioWord.module.scss":
/*!***************************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/DetailedAudioWord/DetailedAudioWord.module.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-vTxYM","audio":"audio-abCAB","textContent":"textContent-atAyP","word":"word-pvTHI","img":"img-jS6jn","audioButton":"audioButton-UonMN"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/GameFrame.module.scss":
/*!*************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/GameFrame.module.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"frame":"frame-Gdl0V"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variant/Variant.module.scss":
/*!****************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variant/Variant.module.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"variant":"variant-GrH5I"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variants.module.scss":
/*!*********************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/GameFrame/Variants/Variants.module.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"variants__container":"variants__container-cFtk6","next":"next-fhP2k","variant":"variant-_PYVE"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Result.module.scss":
/*!*******************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Result.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-k_dxR","content":"content-fuISk","vocabulary":"vocabulary-ZI4hE"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Slider.module.scss":
/*!**************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/Slider.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"slider__container":"slider__container-DZ2_w","inner":"inner-IX0wk"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/Statistics/Statistics.module.scss":
/*!*****************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/Statistics/Statistics.module.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-acyYY","header":"header-jIRKt","paragraph":"paragraph-pzq_1","amount":"amount-G9ybl","arrow":"arrow-ybmBZ"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionHeader/SectionHeader.module.scss":
/*!************************************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionHeader/SectionHeader.module.scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-dYPXj","text":"text-cC6nE","amount":"amount-CUf3x"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionItem/SectionItem.module.scss":
/*!********************************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/SectionItem/SectionItem.module.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"audio":"audio-Nt6DR","itemContainer":"itemContainer-e9y6D","audioButton":"audioButton-_6E0q","textContent":"textContent-J5Ayk","wordTranslate":"wordTranslate-ImqiZ"});

/***/ }),

/***/ "./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/WordsSummary.module.scss":
/*!*********************************************************************************************!*\
  !*** ./pages/Games/Audio/Game/GamePlay/Result/Slider/WordsSummary/WordsSummary.module.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-YqIyz","divider":"divider-GCCt2","arrow":"arrow-yPqB9","test":"test-qCECf"});

/***/ }),

/***/ "./pages/Games/Audio/Header/Header.module.scss":
/*!*****************************************************!*\
  !*** ./pages/Games/Audio/Header/Header.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-NuPw9"});

/***/ }),

/***/ "./pages/Games/Audio/Header/ToGames/ToGames.module.scss":
/*!**************************************************************!*\
  !*** ./pages/Games/Audio/Header/ToGames/ToGames.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cross":"cross-l788p","cross__container":"cross__container-xareG"});

/***/ }),

/***/ "./pages/Games/Games.module.scss":
/*!***************************************!*\
  !*** ./pages/Games/Games.module.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"main-dEPL8"});

/***/ }),

/***/ "./pages/Games/SprintGame/AudioButton/AudioButton.module.scss":
/*!********************************************************************!*\
  !*** ./pages/Games/SprintGame/AudioButton/AudioButton.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"volumeInGame":"volumeInGame-q5dpR","volume":"volume-wGRLd"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardButton/CardButton.module.scss":
/*!*****************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardButton/CardButton.module.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-HEKF5"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/ArrowEndCard/ArrowEndCard.module.scss":
/*!*********************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/ArrowEndCard/ArrowEndCard.module.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"arrowEnd":"arrowEnd-UbAKF","arrowStat":"arrowStat-aYzQX"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardEndGame.module.scss":
/*!*******************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/CardEndGame.module.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"result":"result-HqM0L","wordsAmount":"wordsAmount-sosxM","Mascot":"Mascot-ctu5Y","arrow":"arrow-FwXIo","toDictionary":"toDictionary-lcNCI","containerEndCard":"containerEndCard-ewyOx","animationRight":"animationRight-SVWDj","slideIn":"slideIn-K5JUG","animationLeft":"animationLeft-swh5u","slideOut":"slideOut-JVmo6","arrowEnd":"arrowEnd-Hc74X","arrowStat":"arrowStat-lFikU","button":"button-C4jp0","mistakes":"mistakes-W4WH7","learned":"learned-Bp7XJ","link":"link-vTCnc"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/CardSides/cardSides.module.scss":
/*!***************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/CardSides/cardSides.module.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"card":"card-kTZv7"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/LinkToDictionary/LinkToDictionary.module.scss":
/*!*****************************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/LinkToDictionary/LinkToDictionary.module.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"toDictionary":"toDictionary-FZCy5"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordList.module.scss":
/*!*************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordList.module.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"word":"word-ngRLv"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordListHeader/WordListHeader.module.scss":
/*!**********************************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/WordList/WordListHeader/WordListHeader.module.scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-MJoV4","mistakesIndicatior":"mistakesIndicatior-uHfWy","learnedIndicator":"learnedIndicator-_Zy8Y"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardEndGame/WordsComponent/WordsComponent.module.scss":
/*!*************************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardEndGame/WordsComponent/WordsComponent.module.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"words":"words-bQqXW"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardInGame/CardInGame.module.scss":
/*!*****************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardInGame/CardInGame.module.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"CardUpperPart":"CardUpperPart-mPOwi","controls":"controls-PClFY","cotrolsContainer":"cotrolsContainer-KujD_","arrows":"arrows-fVrhx","cotrolsContainer__arrow":"cotrolsContainer__arrow-BSOi8"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardScorePoints/CardScorePoints.module.scss":
/*!***************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardScorePoints/CardScorePoints.module.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-_sW3f"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardSpirnt.module.scss":
/*!******************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardSpirnt.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-tALi4","card":"card-Vc9tk","cardEnd":"cardEnd-j3VXp"});

/***/ }),

/***/ "./pages/Games/SprintGame/CardSprint/CardWordGuessPart/CardWordGuessPart.module.scss":
/*!*******************************************************************************************!*\
  !*** ./pages/Games/SprintGame/CardSprint/CardWordGuessPart/CardWordGuessPart.module.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-DSej3","GuessWord":"GuessWord-zSnkk","OurGuess":"OurGuess-_nWCv"});

/***/ }),

/***/ "./pages/Games/SprintGame/CounterGame/CounterGame.module.scss":
/*!********************************************************************!*\
  !*** ./pages/Games/SprintGame/CounterGame/CounterGame.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-SE4Kz"});

/***/ }),

/***/ "./pages/Games/SprintGame/GameHeader/GameHeader.module.scss":
/*!******************************************************************!*\
  !*** ./pages/Games/SprintGame/GameHeader/GameHeader.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-vKDiM","cross":"cross-LV70W"});

/***/ }),

/***/ "./pages/Games/SprintGame/ScoreGame/ScoreGame.module.scss":
/*!****************************************************************!*\
  !*** ./pages/Games/SprintGame/ScoreGame/ScoreGame.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-SmwaN"});

/***/ }),

/***/ "./pages/Games/SprintGame/SprintDescription/SprintDescription.module.scss":
/*!********************************************************************************!*\
  !*** ./pages/Games/SprintGame/SprintDescription/SprintDescription.module.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"description":"description-uS0PP","header":"header-JidIH","text":"text-VC7tp"});

/***/ }),

/***/ "./pages/Games/SprintGame/SprintDifficulty/Difficulty/Difficulty.module.scss":
/*!***********************************************************************************!*\
  !*** ./pages/Games/SprintGame/SprintDifficulty/Difficulty/Difficulty.module.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-GjsG2","text":"text-onL06","active":"active-R8QIZ"});

/***/ }),

/***/ "./pages/Games/SprintGame/SprintDifficulty/SprintDifficulty.module.scss":
/*!******************************************************************************!*\
  !*** ./pages/Games/SprintGame/SprintDifficulty/SprintDifficulty.module.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-Vyb2y","header":"header-PU7b4","section":"section-FNgEN","button":"button-pZGv_","link":"link-OLSZM","notActive":"notActive-wzqYR","active":"active-Ba3qy"});

/***/ }),

/***/ "./pages/Games/SprintGame/SprintGame/SprintGame.module.scss":
/*!******************************************************************!*\
  !*** ./pages/Games/SprintGame/SprintGame/SprintGame.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"background":"background-FC217"});

/***/ }),

/***/ "./pages/Games/SprintGame/StartingPageSprint/StartingPageSprint.module.scss":
/*!**********************************************************************************!*\
  !*** ./pages/Games/SprintGame/StartingPageSprint/StartingPageSprint.module.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"background":"background-TYhAD","container":"container-KTDsf"});

/***/ }),

/***/ "./pages/Main/Main.module.scss":
/*!*************************************!*\
  !*** ./pages/Main/Main.module.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"main-EqrZO"});

/***/ }),

/***/ "./pages/Main/Welcome/Welcome.module.scss":
/*!************************************************!*\
  !*** ./pages/Main/Welcome/Welcome.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"header-JmJLk","text":"text-X9EB_","logo":"logo-WeB9d","content":"content-Ehoo1","container":"container-Ar1SA","image":"image-EEjXC","link":"link-HVU8f"});

/***/ }),

/***/ "./pages/Statistic/Statistics.module.scss":
/*!************************************************!*\
  !*** ./pages/Statistic/Statistics.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"main-WD7EV"});

/***/ }),

/***/ "./pages/Vocabulary/Difficulty/Difficulty.module.scss":
/*!************************************************************!*\
  !*** ./pages/Vocabulary/Difficulty/Difficulty.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"section":"section-YQirs","paragraph":"paragraph-tZhaH","container":"container-BNd_j","header":"header-q8XlT","detailed":"detailed-S38ED"});

/***/ }),

/***/ "./pages/Vocabulary/Games/Games.module.scss":
/*!**************************************************!*\
  !*** ./pages/Vocabulary/Games/Games.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"center":"center-eWirR","img":"img-rFptR","link":"link-xz3mK"});

/***/ }),

/***/ "./pages/Vocabulary/Pagination/Pagination.module..scss":
/*!*************************************************************!*\
  !*** ./pages/Vocabulary/Pagination/Pagination.module..scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"pagination__container":"pagination__container-Bw6ud","pagination__item":"pagination__item-btXAw","AFFCF0B":"AFFCF0B-T9izX","selected":"selected-RtfuT","AFFAC4B":"AFFAC4B-udwBu","ABAF3AF":"ABAF3AF-RCNN8","A85D671":"A85D671-oPGUb","AAFCDFB":"AAFCDFB-HwHKr","A699DEE":"A699DEE-YsBfA","dots":"dots-sB4Df","arrow":"arrow-sdwKD","left":"left-exxVV","right":"right-u2C1A","disabled":"disabled-akLPw"});

/***/ }),

/***/ "./pages/Vocabulary/Vocabulary.module.scss":
/*!*************************************************!*\
  !*** ./pages/Vocabulary/Vocabulary.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"main":"main-CKeDG","header":"header-_Pdo3"});

/***/ }),

/***/ "./pages/Vocabulary/WordCarousel/WordCarousel.module.scss":
/*!****************************************************************!*\
  !*** ./pages/Vocabulary/WordCarousel/WordCarousel.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container-fMI01","carousel":"carousel-S5eCx","inner":"inner-qutcJ"});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_chartjs-adapter-date-fns_dist_chartjs-adapter-date-fns_esm_js-node_modul-a0e9e3"], () => (__webpack_require__("./index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb25zdGFudHMvZGV2ZWxvcGVyc0NvbnN0LnRzIiwid2VicGFjazovLy8uL2NvbW1vbi9jb25zdGFudHMvZGlmZmljdWx0eUxldmVscy50cyIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29uc3RhbnRzL2dhbWVDYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29uc3RhbnRzL2hlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29uc3RhbnRzL25hdkNvbnN0LnRzIiwid2VicGFjazovLy8uL2NvbW1vbi9jb25zdGFudHMvc2VydmVyQ29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2dldFVzZXJEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FQSS9EaWN0aW9uYXJ5QVBJL0RpY3Rpb25hcnlBUEkudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BUEkvTGVhcm5lZFdvcmRzQVBJL0xlYXJuZWRXb3Jkc0FQSS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FQSS9TdGF0aXN0aWNBUEkvU3RhdGlzdGljQVBJLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQVBJL1VzZXJzQVBJL1VzZXJzQVBJLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWR2YW50YWdlQ2FyZC9BZHZhbnRhZ2VDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fycm93QnV0dG9uL0Fycm93QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZFRlYW0vQ2FyZFRlYW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbGVkV29yZC9EZXRhaWxlZFdvcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlmZmljdWx0eUNhcmQvRGlmZmljdWx0eUNhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvTGluay9MaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0xvZ28vTG9nby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvTmF2aWdhdGlvbi9OYXZMaW5rL05hdkxpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9DaXJjbGUvQ2lyY2xlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JvdXRlQ29tcG9uZW50L1JvdXRlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGF0aXN0aWNUb2RheS9HYW1lU3RhdC9HYW1lU3RhdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGF0aXN0aWNUb2RheS9TdGF0V29yZHMvU3RhdFdvcmRzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRpc3RpY1RvZGF5L1N0YXRpc3RpY1RvZGF5LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRpc3RpY3NGb3JBbGxUaW1lL0NoYXJ0L0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRpc3RpY3NGb3JBbGxUaW1lL1N0YXRpc3RpY3NGb3JBbGxUaW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmRDYXJkL1dvcmRDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2hvb2tzL3VzZUFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlUGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRW50cmFuY2UvQXV0aG9yaXphdGlvbi9BdXRob3JpemF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9FbnRyYW5jZS9FbnRyYW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRW50cmFuY2UvRm9ybUlucHV0L0Zvcm1JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRW50cmFuY2UvUmVnaXN0cmF0aW9uL1JlZ2lzdHJhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRW50cmFuY2UvV2FybmluZ01lc3NhZ2UvV2FybmluZ01lc3NhZ2UudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0F1ZGlvLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0Rlc2NyaXB0aW9uL0Rlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0Rlc2NyaXB0aW9uL0RpZmZpY3VsdHkvRGlmZmljdWx0eS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vR2FtZS9EZXNjcmlwdGlvbi9EaWZmaWN1bHR5L0RpZmZpY3VsdHlDYXJkL0RpZmZpY3VsdHlDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvR2FtZUZyYW1lL0F1ZGlvQnV0dG9uL0F1ZGlvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L0dhbWVGcmFtZS9EZXRhaWxlZEF1ZGlvV29yZC9EZXRhaWxlZEF1ZGlvV29yZC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vR2FtZS9HYW1lUGxheS9HYW1lRnJhbWUvR2FtZUZyYW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L0dhbWVGcmFtZS9WYXJpYW50cy9WYXJpYW50L1ZhcmlhbnQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvR2FtZUZyYW1lL1ZhcmlhbnRzL1ZhcmlhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L0dhbWVQbGF5LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L1Jlc3VsdC9SZXN1bHQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvUmVzdWx0L1NsaWRlci9TbGlkZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvUmVzdWx0L1NsaWRlci9TdGF0aXN0aWNzL1N0YXRpc3RpY3MudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvUmVzdWx0L1NsaWRlci9Xb3Jkc1N1bW1hcnkvU2VjdGlvbkhlYWRlci9TZWN0aW9uSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L1Jlc3VsdC9TbGlkZXIvV29yZHNTdW1tYXJ5L1NlY3Rpb25JdGVtL1NlY3Rpb25JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L1Jlc3VsdC9TbGlkZXIvV29yZHNTdW1tYXJ5L1dvcmRzU3VtbWFyeS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vSGVhZGVyL1RvR2FtZXMvVG9HYW1lcy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvR2FtZXMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQXVkaW9CdXR0b24vQXVkaW9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQ2FyZFNwcmludC9DYXJkQnV0dG9uL0NhcmRCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQ2FyZFNwcmludC9DYXJkRW5kR2FtZS9BcnJvd0VuZENhcmQvQXJyb3dFbmRDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NhcmRTcHJpbnQvQ2FyZEVuZEdhbWUvQ2FyZEVuZEdhbWUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQ2FyZFNwcmludC9DYXJkRW5kR2FtZS9DYXJkU2lkZXMvQ2FyZFNpZGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NhcmRTcHJpbnQvQ2FyZEVuZEdhbWUvTGlua1RvRGljdGlvbmFyeS9MaW5rVG9kaWN0aW9uYXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NhcmRTcHJpbnQvQ2FyZEVuZEdhbWUvV29yZExpc3QvV29yZExpc3QudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQ2FyZFNwcmludC9DYXJkRW5kR2FtZS9Xb3JkTGlzdC9Xb3JkTGlzdEhlYWRlci9Xb3JkTGlzdEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRFbmRHYW1lL1dvcmRzQ29tcG9uZW50L1dvcmRzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NhcmRTcHJpbnQvQ2FyZEluR2FtZS9DYXJkSW5HYW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NhcmRTcHJpbnQvQ2FyZFNjb3JlUG9pbnRzL0NhcmRTY29yZVBvaW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRTcGlybnQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQ2FyZFNwcmludC9DYXJkV29yZEd1ZXNzUGFydC9DYXJkV29yZEd1ZXNzUGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9Db3VudGVyR2FtZS9Db3VudGVyR2FtZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9HYW1lSGVhZGVyL0dhbWVIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvU2NvcmVHYW1lL1Njb3JlR2FtZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9TcHJpbnREZXNjcmlwdGlvbi9TcHJpbnREZXNjcmlwdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9TcHJpbnREaWZmaWN1bHR5L0RpZmZpY3VsdHkvRGlmZmljdWx0eS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9TcHJpbnREaWZmaWN1bHR5L1NwcmludERpZmZpY3VsdHkudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvU3ByaW50R2FtZS9TcHJpbnRHYW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL1N0YXJ0aW5nUGFnZVNwcmludC9TdGFydGluZ1BhZ2VTcHJpbnQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL01haW4vQWR2YW50YWdlcy9BZHZhbnRhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NYWluL01haW4udHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL01haW4vVGVhbS9UZWFtU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTWFpbi9XZWxjb21lL1dlbGNvbWUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1N0YXRpc3RpYy9TdGF0aXN0aWMudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL1ZvY2FidWxhcnkvRGlmZmljdWx0eS9EaWZmaWN1bHR5LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb2NhYnVsYXJ5L0dhbWVzL0dhbWVzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb2NhYnVsYXJ5L1BhZ2luYXRpb24vUGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVm9jYWJ1bGFyeS9Wb2NhYnVsYXJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb2NhYnVsYXJ5L1dvcmRDYXJvdXNlbC9Xb3JkQ2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9zdHlsZS9pbmRleC5zY3NzPzA5MWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZHZhbnRhZ2VDYXJkL0FkdmFudGFnZUNhcmQubW9kdWxlLnNjc3M/NGNkOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fycm93QnV0dG9uL0Fycm93QnV0dG9uLm1vZHVsZS5zY3NzPzZiOGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzP2M1YWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkVGVhbS9DYXJkVGVhbS5tb2R1bGUuc2Nzcz9hNDliIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLm1vZHVsZS5zY3NzPzczMDMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxlZFdvcmQvRGV0YWlsZWRXb3JkLm1vZHVsZS5zY3NzP2NmNDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaWZmaWN1bHR5Q2FyZC9EaWZmaWN1bHR5Q2FyZC5tb2R1bGUuc2Nzcz82YWU1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2Nzcz80YjI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0xpbmsvTGluay5tb2R1bGUuc2Nzcz8zYTdhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2Nzcz9jODNhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0xvZ28vTG9nby5tb2R1bGUuc2Nzcz9jZmYwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL05hdmlnYXRpb24vTmF2TGluay9OYXZMaW5rLm1vZHVsZS5zY3NzP2Y4NWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzP2ZhY2YiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9DaXJjbGUvQ2lyY2xlLm1vZHVsZS5zY3NzPzc0OTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci5tb2R1bGUuc2Nzcz8zNTU1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLm1vZHVsZS5zY3NzPzEwZDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdGF0aXN0aWNUb2RheS9HYW1lU3RhdC9HYW1lU3RhdC5tb2R1bGUuc2Nzcz83MWI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RhdGlzdGljVG9kYXkvU3RhdFdvcmRzL1N0YXRXb3Jkcy5tb2R1bGUuc2Nzcz9lNzY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RhdGlzdGljVG9kYXkvU3RhdGlzdGljVG9kYXkubW9kdWxlLnNjc3M/Mjg3NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YXRpc3RpY3NGb3JBbGxUaW1lL1N0YXRpc3RpY3NGb3JBbGxUaW1lLm1vZHVsZS5zY3NzPzM5NTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Xb3JkQ2FyZC9Xb3JkQ2FyZC5tb2R1bGUuc2Nzcz9jNDU0Iiwid2VicGFjazovLy8uL3BhZ2VzL0VudHJhbmNlL0F1dGhvcml6YXRpb24vQXV0aG9yaXphdGlvbi5tb2R1bGUuc2Nzcz8yZGY4Iiwid2VicGFjazovLy8uL3BhZ2VzL0VudHJhbmNlL0VudHJhbmNlLm1vZHVsZS5zY3NzPzI2ZjMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvRW50cmFuY2UvRm9ybUlucHV0L0Zvcm1JbnB1dC5tb2R1bGUuc2Nzcz9lYWZjIiwid2VicGFjazovLy8uL3BhZ2VzL0VudHJhbmNlL1JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24ubW9kdWxlLnNjc3M/Yzc2YiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9FbnRyYW5jZS9XYXJuaW5nTWVzc2FnZS9XYXJuaW5nTWVzc2FnZS5tb2R1bGUuc2Nzcz9kOTczIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0F1ZGlvLm1vZHVsZS5zY3NzPzk1NWUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vR2FtZS9EZXNjcmlwdGlvbi9EZXNjcmlwdGlvbi5tb2R1bGUuc2Nzcz81NGMxIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvRGVzY3JpcHRpb24vRGlmZmljdWx0eS9EaWZmaWN1bHR5Lm1vZHVsZS5zY3NzP2UzOTIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vR2FtZS9EZXNjcmlwdGlvbi9EaWZmaWN1bHR5L0RpZmZpY3VsdHlDYXJkL0RpZmZpY3VsdHlDYXJkLm1vZHVsZS5zY3NzPzljMjAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vR2FtZS9HYW1lUGxheS9HYW1lRnJhbWUvQXVkaW9CdXR0b24vQXVkaW9CdXR0b24ubW9kdWxlLnNjc3M/OGJlYSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L0dhbWVGcmFtZS9EZXRhaWxlZEF1ZGlvV29yZC9EZXRhaWxlZEF1ZGlvV29yZC5tb2R1bGUuc2Nzcz8xNjg2Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvR2FtZUZyYW1lL0dhbWVGcmFtZS5tb2R1bGUuc2Nzcz8zYzRlIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvR2FtZUZyYW1lL1ZhcmlhbnRzL1ZhcmlhbnQvVmFyaWFudC5tb2R1bGUuc2Nzcz8wZGJkIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvR2FtZUZyYW1lL1ZhcmlhbnRzL1ZhcmlhbnRzLm1vZHVsZS5zY3NzP2Q5MTUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vR2FtZS9HYW1lUGxheS9SZXN1bHQvUmVzdWx0Lm1vZHVsZS5zY3NzPzRjMTgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvQXVkaW8vR2FtZS9HYW1lUGxheS9SZXN1bHQvU2xpZGVyL1NsaWRlci5tb2R1bGUuc2Nzcz8yNTk4Iiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvUmVzdWx0L1NsaWRlci9TdGF0aXN0aWNzL1N0YXRpc3RpY3MubW9kdWxlLnNjc3M/Zjc0MSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L1Jlc3VsdC9TbGlkZXIvV29yZHNTdW1tYXJ5L1NlY3Rpb25IZWFkZXIvU2VjdGlvbkhlYWRlci5tb2R1bGUuc2Nzcz81YmFiIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0dhbWUvR2FtZVBsYXkvUmVzdWx0L1NsaWRlci9Xb3Jkc1N1bW1hcnkvU2VjdGlvbkl0ZW0vU2VjdGlvbkl0ZW0ubW9kdWxlLnNjc3M/NjZlMCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9HYW1lL0dhbWVQbGF5L1Jlc3VsdC9TbGlkZXIvV29yZHNTdW1tYXJ5L1dvcmRzU3VtbWFyeS5tb2R1bGUuc2Nzcz83N2RiIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL0F1ZGlvL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3M/MDJlZSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9BdWRpby9IZWFkZXIvVG9HYW1lcy9Ub0dhbWVzLm1vZHVsZS5zY3NzP2UyYzUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvR2FtZXMubW9kdWxlLnNjc3M/MWEyNCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0F1ZGlvQnV0dG9uL0F1ZGlvQnV0dG9uLm1vZHVsZS5zY3NzPzk0ZmMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRCdXR0b24vQ2FyZEJ1dHRvbi5tb2R1bGUuc2Nzcz84NjZjIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQ2FyZFNwcmludC9DYXJkRW5kR2FtZS9BcnJvd0VuZENhcmQvQXJyb3dFbmRDYXJkLm1vZHVsZS5zY3NzP2ZmNGMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRFbmRHYW1lL0NhcmRFbmRHYW1lLm1vZHVsZS5zY3NzP2IyMDciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRFbmRHYW1lL0NhcmRTaWRlcy9jYXJkU2lkZXMubW9kdWxlLnNjc3M/MmZmZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NhcmRTcHJpbnQvQ2FyZEVuZEdhbWUvTGlua1RvRGljdGlvbmFyeS9MaW5rVG9EaWN0aW9uYXJ5Lm1vZHVsZS5zY3NzPzBmYTMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRFbmRHYW1lL1dvcmRMaXN0L1dvcmRMaXN0Lm1vZHVsZS5zY3NzPzIzM2EiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRFbmRHYW1lL1dvcmRMaXN0L1dvcmRMaXN0SGVhZGVyL1dvcmRMaXN0SGVhZGVyLm1vZHVsZS5zY3NzP2M4MjMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRFbmRHYW1lL1dvcmRzQ29tcG9uZW50L1dvcmRzQ29tcG9uZW50Lm1vZHVsZS5zY3NzP2E3OGQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRJbkdhbWUvQ2FyZEluR2FtZS5tb2R1bGUuc2Nzcz8yMGRlIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvQ2FyZFNwcmludC9DYXJkU2NvcmVQb2ludHMvQ2FyZFNjb3JlUG9pbnRzLm1vZHVsZS5zY3NzPzgzYjEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9DYXJkU3ByaW50L0NhcmRTcGlybnQubW9kdWxlLnNjc3M/ZWIwYyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NhcmRTcHJpbnQvQ2FyZFdvcmRHdWVzc1BhcnQvQ2FyZFdvcmRHdWVzc1BhcnQubW9kdWxlLnNjc3M/NzgxMSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL0NvdW50ZXJHYW1lL0NvdW50ZXJHYW1lLm1vZHVsZS5zY3NzPzU2YTQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9HYW1lSGVhZGVyL0dhbWVIZWFkZXIubW9kdWxlLnNjc3M/MjczMCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL1Njb3JlR2FtZS9TY29yZUdhbWUubW9kdWxlLnNjc3M/YTk1NiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL1NwcmludERlc2NyaXB0aW9uL1NwcmludERlc2NyaXB0aW9uLm1vZHVsZS5zY3NzPzE0MWUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9TcHJpbnREaWZmaWN1bHR5L0RpZmZpY3VsdHkvRGlmZmljdWx0eS5tb2R1bGUuc2Nzcz9lYmRiIiwid2VicGFjazovLy8uL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvU3ByaW50RGlmZmljdWx0eS9TcHJpbnREaWZmaWN1bHR5Lm1vZHVsZS5zY3NzPzRmOWMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvR2FtZXMvU3ByaW50R2FtZS9TcHJpbnRHYW1lL1NwcmludEdhbWUubW9kdWxlLnNjc3M/OGFmNCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9HYW1lcy9TcHJpbnRHYW1lL1N0YXJ0aW5nUGFnZVNwcmludC9TdGFydGluZ1BhZ2VTcHJpbnQubW9kdWxlLnNjc3M/ZjU4YyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NYWluL01haW4ubW9kdWxlLnNjc3M/NGEzMyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NYWluL1dlbGNvbWUvV2VsY29tZS5tb2R1bGUuc2Nzcz83ZTYxIiwid2VicGFjazovLy8uL3BhZ2VzL1N0YXRpc3RpYy9TdGF0aXN0aWNzLm1vZHVsZS5zY3NzP2NjYTMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVm9jYWJ1bGFyeS9EaWZmaWN1bHR5L0RpZmZpY3VsdHkubW9kdWxlLnNjc3M/M2U4MSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb2NhYnVsYXJ5L0dhbWVzL0dhbWVzLm1vZHVsZS5zY3NzP2MxODAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVm9jYWJ1bGFyeS9QYWdpbmF0aW9uL1BhZ2luYXRpb24ubW9kdWxlLi5zY3NzPzZmZGIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVm9jYWJ1bGFyeS9Wb2NhYnVsYXJ5Lm1vZHVsZS5zY3NzPzU5YzciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVm9jYWJ1bGFyeS9Xb3JkQ2Fyb3VzZWwvV29yZENhcm91c2VsLm1vZHVsZS5zY3NzP2FkYjEiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSAnLi9wYWdlcy9Wb2NhYnVsYXJ5L1ZvY2FidWxhcnknO1xuaW1wb3J0IFJvdXRlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Sb3V0ZUNvbXBvbmVudC9Sb3V0ZUNvbXBvbmVudCc7XG5pbXBvcnQgU3RhdGlzdGljIGZyb20gJy4vcGFnZXMvU3RhdGlzdGljL1N0YXRpc3RpYyc7XG5pbXBvcnQgQXVkaW8gZnJvbSAnLi9wYWdlcy9HYW1lcy9BdWRpby9BdWRpbyc7XG5pbXBvcnQgJy4vY29tbW9uL3N0eWxlL2luZGV4LnNjc3MnO1xuaW1wb3J0IFN0YXJ0aW5nUGFnZVNwcmludCBmcm9tICcuL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvU3RhcnRpbmdQYWdlU3ByaW50L1N0YXJ0aW5nUGFnZVNwcmludCc7XG5pbXBvcnQgU3ByaW50R2FtZSBmcm9tICcuL3BhZ2VzL0dhbWVzL1NwcmludEdhbWUvU3ByaW50R2FtZS9TcHJpbnRHYW1lJztcbmltcG9ydCBXb3JkIGZyb20gJy4vY29tcG9uZW50cy9BUEkvRGljdGlvbmFyeUFQSS9Xb3JkJztcbmltcG9ydCBVc2VyU3RhdGlzdGljIGZyb20gJy4vY29tcG9uZW50cy9BUEkvU3RhdGlzdGljQVBJL1N0YXRpc3RpY0FQSSc7XG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4vTWFpbic7XG5pbXBvcnQgRW50cmFuY2UgZnJvbSAnLi9wYWdlcy9FbnRyYW5jZS9FbnRyYW5jZSc7XG5pbXBvcnQgQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0IGZyb20gJy4vY29udGV4dC9jb250ZXh0JztcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9wYWdlcy9FbnRyYW5jZS9SZWdpc3RyYXRpb24vUmVnaXN0cmF0aW9uJztcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4vcGFnZXMvRW50cmFuY2UvQXV0aG9yaXphdGlvbi9BdXRob3JpemF0aW9uJztcbmltcG9ydCBnZXRVc2VyRGF0YSBmcm9tICcuL2NvbW1vbi9nZXRVc2VyRGF0YSc7XG5pbXBvcnQgR2FtZXMgZnJvbSAnLi9wYWdlcy9HYW1lcy9HYW1lcyc7XG5cbmNvbnN0IEFwcCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtzcHJpbnRBcnJheSwgc2V0U3ByaW50QXJyYXldID0gdXNlU3RhdGU8V29yZFtdPihbXSk7XG4gIGNvbnN0IFtpc1NpZ25lZEluLCBzZXRJc1NpZ25lZEluXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJEYXRhKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZXRVc2VyRGF0YSgpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHNldElzU2lnbmVkSW4odHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgW3NwcmludFBvaW50c0luQVJvdywgc2V0U3ByaW50UG9pbnRzSW5BUm93XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYXVkaW9Qb2ludHNJbkFSb3csIHNldEF1ZGlvUG9pbnRzSW5BUm93XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZ2FtZXNBbW91dFNwcmludCwgc2V0R2FtZXNBbW91dFNwcmludF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2dhbWVzQW1vdXRBdWRpbywgc2V0R2FtZXNBbW91dEF1ZGlvXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZ2FtZXNTY29yZVNwcmludCwgc2V0R2FtZXNTY29yZVNwcmludF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2dhbWVzU2NvcmVBdWRpbywgc2V0R2FtZXNTY29yZUF1ZGlvXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkudG9TdHJpbmcoKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCBzdGF0ID0gVXNlclN0YXRpc3RpYy5jcmVhdGVTdGF0aXN0aWMoXG4gICAgICAgICAgdXNlckRhdGEuaWQsXG4gICAgICAgICAgdXNlckRhdGEudG9rZW4sXG4gICAgICAgICAgMCxcbiAgICAgICAgICB7IFt0aW1lXTogc3ByaW50UG9pbnRzSW5BUm93IH0sXG4gICAgICAgICAgeyBbdGltZV06IGF1ZGlvUG9pbnRzSW5BUm93IH0sXG4gICAgICAgICAgeyBbdGltZV06IGdhbWVzQW1vdXRTcHJpbnQgfSxcbiAgICAgICAgICB7IFt0aW1lXTogZ2FtZXNBbW91dEF1ZGlvIH0sXG4gICAgICAgICAgeyBbdGltZV06IGdhbWVzU2NvcmVTcHJpbnQgfSxcbiAgICAgICAgICB7IFt0aW1lXTogZ2FtZXNTY29yZUF1ZGlvIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdXBkc3RhdCA9IGF3YWl0IFVzZXJTdGF0aXN0aWMudXBkYXRlVXNlclN0YXRpc3RpYyhzdGF0KTtcbiAgICAgICAgY29uc29sZS5sb2codXBkc3RhdCwgJ3VwZCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfSwgW2dhbWVzU2NvcmVTcHJpbnQsIGdhbWVzU2NvcmVBdWRpb10pO1xuXG4gIGNvbnN0IGNoYW5nZUdhbWVNb2RlID0gKGFycmF5OiBXb3JkW10pID0+IHtcbiAgICBzZXRTcHJpbnRBcnJheShhcnJheSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNTaWduZWRJbiwgc2V0SXNTaWduZWRJbiB9fT5cbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBwYXRoPVwiL3ZvY2FidWxhcnlcIlxuICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8Um91dGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICA8Vm9jYWJ1bGFyeSAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgcGF0aD1cIi9zdGF0aXN0aWNcIlxuICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8Um91dGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICA8U3RhdGlzdGljIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBwYXRoPVwiL2dhbWVzXCJcbiAgICAgICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICAgICAgPFJvdXRlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgPEdhbWVzIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1NwcmludFwiIGVsZW1lbnQ9ezxTdGFydGluZ1BhZ2VTcHJpbnQgY2hhbmdlR2FtZU1vZGU9e2NoYW5nZUdhbWVNb2RlfSAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBwYXRoPVwiL3NwcmludEdhbWVcIlxuICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8U3ByaW50R2FtZVxuICAgICAgICAgICAgICAgICAgYXJyYXk9e3NwcmludEFycmF5fVxuICAgICAgICAgICAgICAgICAgc2V0UG9pbnRzPXtzZXRTcHJpbnRQb2ludHNJbkFSb3d9XG4gICAgICAgICAgICAgICAgICBzZXRBbW91bnQ9e3NldEdhbWVzQW1vdXRTcHJpbnR9XG4gICAgICAgICAgICAgICAgICBzZXRDb3JyZWN0PXtzZXRHYW1lc1Njb3JlU3ByaW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgcGF0aD1cIi9hdWRpb1wiXG4gICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgIDxBdWRpb1xuICAgICAgICAgICAgICAgICAgc2V0UG9pbnRzPXtzZXRBdWRpb1BvaW50c0luQVJvd31cbiAgICAgICAgICAgICAgICAgIHNldEFtb3VudD17c2V0R2FtZXNBbW91dEF1ZGlvfVxuICAgICAgICAgICAgICAgICAgc2V0Q29ycmVjdD17c2V0R2FtZXNTY29yZUF1ZGlvfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgcGF0aD1cIi9cIlxuICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8Um91dGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgcGF0aD1cIi9yZWdpc3RyYXRpb25cIlxuICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8RW50cmFuY2U+XG4gICAgICAgICAgICAgICAgICA8UmVnaXN0cmF0aW9uIC8+XG4gICAgICAgICAgICAgICAgPC9FbnRyYW5jZT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICBwYXRoPVwiL2F1dGhvcml6YXRpb25cIlxuICAgICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICA8RW50cmFuY2U+XG4gICAgICAgICAgICAgICAgICA8QXV0aG9yaXphdGlvbiAvPlxuICAgICAgICAgICAgICAgIDwvRW50cmFuY2U+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgIDwvQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY29uc3QgREVWRUxPUEVSUyA9IFtcbiAge1xuICAgIG5hbWU6ICfQndC40LrQvtC70LDQuSDQmtC+0LfRi9GA0LXQsicsXG4gICAgcGhvdG86ICcuLi8uLi9hc3NldHMvaW1hZ2VzL1Bob3RvLzEuanBnJyxcbiAgICBnaXRIdWI6ICdodHRwczovL2dpdGh1Yi5jb20vbmlrb2xha296YXJ5YW4nLFxuICAgIHJvbGU6ICd0ZWFtbGVhZCcsXG4gICAgY29udHJpYnV0aW9uOiBbJ9Cg0LDQt9C00LXQuyBcItCj0YfQtdCx0L3QuNC6XCInLCAn0JjQs9GA0LAgXCLQkNGD0LTQuNC+0LLRi9C30L7QslwiJywgJ9Ca0L7QvtGA0LTQuNC90LjRgNC+0LLQsNC90LjQtSDQtNC10LnRgdGC0LLQuNC5INC60L7QvNCw0L3QtNGLJ10sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0K/QutC+0LIg0JPRgNC40LPQvtGA0YzQtdCyJyxcbiAgICBwaG90bzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvUGhvdG8vMi5qcGcnLFxuICAgIGdpdEh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ZYUdyaWcnLFxuICAgIHJvbGU6ICdkZXZlbG9wZXInLFxuICAgIGNvbnRyaWJ1dGlvbjogWyfQoNCw0LfQtNC10LsgXCLQodGC0LDRgtC40YHRgtC40LrQsFwiJywgJ9CY0LPRgNCwIFwi0KHQv9GA0LjQvdGCXCInLCAn0JLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjQtSDRgSBBUEknXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICfQmtC40YDQuNC70Lsg0J3QsNC50LTQvtCy0LjRhycsXG4gICAgcGhvdG86ICcuLi8uLi9hc3NldHMvaW1hZ2VzL1Bob3RvLzMuanBnJyxcbiAgICBnaXRIdWI6ICdodHRwczovL2dpdGh1Yi5jb20vT25seVIxMCcsXG4gICAgcm9sZTogJ2RldmVsb3BlcicsXG4gICAgY29udHJpYnV0aW9uOiBbJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8gLyDQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPJywgJ9CT0YDQsNGE0LjQuiDQsiDRgNCw0LfQtNC10LvQtSBcItCh0YLQsNGC0LjRgdGC0LjQutCwXCInLCAn0KDQsNC30YDQsNCx0L7RgtC60LAg0YHRgtGA0YPQutGC0YPRgNGLINC/0YDQvtC10LrRgtCwJ10sXG4gIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgREVWRUxPUEVSUztcbiIsImV4cG9ydCBpbnRlcmZhY2UgSURpZmZpY3VsdHkge1xuICBpZDogbnVtYmVyO1xuICBsZXZlbDogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xuICBkZXRhaWxlZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRElGRklDVUxUWTogSURpZmZpY3VsdHlbXSA9IFtcbiAgeyBpZDogMCwgbGV2ZWw6ICdBMScsIGNvbG9yOiAnI0ZGQ0YwQicsIGRldGFpbGVkOiAnRWxlbWVudGFyeScgfSxcbiAgeyBpZDogMSwgbGV2ZWw6ICdBMicsIGNvbG9yOiAnI0ZGQUM0QicsIGRldGFpbGVkOiAnUHJlLUludGVybWVkaWF0ZScgfSxcbiAgeyBpZDogMiwgbGV2ZWw6ICdCMScsIGNvbG9yOiAnI0JBRjNBRicsIGRldGFpbGVkOiAnSW50ZXJtZWRpYXRlJyB9LFxuICB7IGlkOiAzLCBsZXZlbDogJ0IyJywgY29sb3I6ICcjODVENjcxJywgZGV0YWlsZWQ6ICdVcHBlci1JbnRlcm1lZGlhdGUnIH0sXG4gIHsgaWQ6IDQsIGxldmVsOiAnQzEnLCBjb2xvcjogJyNBRkNERkInLCBkZXRhaWxlZDogJ0FkdmFuY2VkJyB9LFxuICB7IGlkOiA1LCBsZXZlbDogJ0MyJywgY29sb3I6ICcjNjk5REVFJywgZGV0YWlsZWQ6ICdQcm9maWNpZW5jeScgfSxcbl07XG4iLCJpbnRlcmZhY2UgSUdhbWVDYXJkIHtcclxuICBpbWdVUkw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJvZHk6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgR0FNRV9DQVJEU19EQVRBOiBJR2FtZUNhcmRbXSA9IFtcclxuICB7XHJcbiAgICB1cmw6ICcvYXVkaW8nLFxyXG4gICAgaW1nVVJMOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9Wb2NhYnVsYXJ5L0dhbWVzL0F1ZGlvLnBuZycsXHJcbiAgICB0aXRsZTogJ9CQ0YPQtNC40L7QstGL0LfQvtCyJyxcclxuICAgIGJvZHk6ICfQn9C+0L/Ri9GC0LDQudGC0LXRgdGMINGD0LPQsNC00LDRgtGMINGB0LvQvtCy0L4sINC/0YDQvtC40LfQvdC10YHQtdC90L3QvtC1INC90LAg0LDQvdCz0LvQuNC50YHQutC+0Lwg0Y/Qt9GL0LrQtScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB1cmw6ICcvc3ByaW50JyxcclxuICAgIGltZ1VSTDogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvVm9jYWJ1bGFyeS9HYW1lcy9TcHJpbnQucG5nJyxcclxuICAgIHRpdGxlOiAn0KHQv9GA0LjQvdGCJyxcclxuICAgIGJvZHk6ICfQntC/0YDQtdC00LXQu9C40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQv9C10YDQtdCy0L7QtCDQuNC70Lgg0L3QtdGC0LfQsCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0LUg0LLRgNC10LzRjycsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdBTUVfQ0FSRFNfREFUQTtcclxuIiwiaW1wb3J0IFdvcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BUEkvRGljdGlvbmFyeUFQSS9Xb3JkJztcclxuXHJcbmNvbnN0IHJhbmRvbVBhZ2UgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyOSArIDAuNSk7XHJcblxyXG5jb25zdCBzaHVmZmxlQXJyYXkgPSAod29yZHM6IFdvcmRbXSkgPT4gWy4uLndvcmRzXS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG5cclxuZXhwb3J0IHsgcmFuZG9tUGFnZSwgc2h1ZmZsZUFycmF5IH07XHJcbiIsImNvbnN0IE5BVklHQVRJT05fSVRFTVM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtcclxuICBbJ9CT0LvQsNCy0L3QsNGPJywgJy8nXSxcclxuICBbJ9Cj0YfQtdCx0L3QuNC6JywgJy92b2NhYnVsYXJ5J10sXHJcbiAgWyfQmNCz0YDRiycsICcvZ2FtZXMnXSxcclxuICBbJ9Ch0YLQsNGC0LjRgdGC0LjQutCwJywgJy9zdGF0aXN0aWMnXSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5BVklHQVRJT05fSVRFTVM7XHJcbiIsImNvbnN0IFNFUlZFUiA9ICdodHRwczovL3JzbGFuZy1kYXRhYmFzZS1uLXktay5oZXJva3VhcHAuY29tJztcblxuZXhwb3J0IGRlZmF1bHQgU0VSVkVSO1xuIiwiaW50ZXJmYWNlIElVc2VyTFMge1xuICBpZDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRVc2VyRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgdXNlckpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICBsZXQgcmVzcG9uc2U6IElVc2VyTFMgfCBudWxsID0gbnVsbDtcbiAgaWYgKHVzZXJKc29uKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh1c2VySnNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBpZiAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJEYXRhO1xuIiwiaW1wb3J0IElEaWN0aW9uYXJ5IGZyb20gJy4vRGljdGlvbmFyeUludGVyZmFjZSc7XG5pbXBvcnQgU0VSVkVSIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvc2VydmVyQ29uc3QnO1xuXG5jb25zdCBEaWN0aW9uYXJ5QVBJOiBJRGljdGlvbmFyeSA9IHtcbiAgZ2V0V29yZHNBcnJheTogYXN5bmMgKHBhZ2U6IG51bWJlciwgZ3JvdXA6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U0VSVkVSfS93b3Jkcz9wYWdlPSR7cGFnZX0mZ3JvdXA9JHtncm91cH1gKTtcbiAgICBjb25zdCBhcnJheU9mV29yZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGFycmF5T2ZXb3JkcztcbiAgfSxcbiAgZ2V0V29yZEJ5SUQ6IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTRVJWRVJ9L3dvcmRzLyR7aWR9YCk7XG4gICAgY29uc3Qgd29yZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd29yZDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpY3Rpb25hcnlBUEk7XG4iLCJpbXBvcnQgU0VSVkVSIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvc2VydmVyQ29uc3QnO1xyXG5pbXBvcnQgTGVhcm5lZFdvcmQgZnJvbSAnLi9MZWFybmVkV29yZCc7XHJcbmltcG9ydCBXb3JkIGZyb20gJy4uL0RpY3Rpb25hcnlBUEkvV29yZCc7XHJcbmltcG9ydCBJTGVhcm5Xb3JkcyBmcm9tICcuL0xlYXJuZWRXb3Jkc0ludGVyZmFjZSc7XHJcbmltcG9ydCBEYXRhIGZyb20gJy4uL1N0YXRpc3RpY0FQSS9JRGF0YSc7XHJcblxyXG5jb25zdCBMZWFybmVkV29yZHNBUEk6IElMZWFybldvcmRzID0ge1xyXG4gIGNyZWF0ZVdvcmQ6IChcclxuICAgIHVzZXJJZDogc3RyaW5nLFxyXG4gICAgdG9rZW46IHN0cmluZyxcclxuICAgIHdwZDogbnVtYmVyLFxyXG4gICAgd29yZHM6IHN0cmluZ1tdLFxyXG4gICAgd29yZHNOdW1iZXJTcHJpbnQ/OiBEYXRhLFxyXG4gICAgd29yZHNOdW1iZXJBdWRpbz86IERhdGFcclxuICApID0+ICh7XHJcbiAgICB1c2VySWQsXHJcbiAgICB0b2tlbixcclxuICAgIGJvZHk6IHtcclxuICAgICAgd29yZHNQZXJEYXk6IHdwZCxcclxuICAgICAgb3B0aW9uYWw6IHtcclxuICAgICAgICBsZWFybmVkV29yZHM6IHdvcmRzLmpvaW4oJyAnKSxcclxuICAgICAgICBsZWFybmVkV29yZHNOdW1iZXJTcHJpbnQ6IHdvcmRzTnVtYmVyU3ByaW50LFxyXG4gICAgICAgIGxlYXJuZWRXb3Jkc051bWJlckF1ZGlvOiB3b3Jkc051bWJlckF1ZGlvLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSxcclxuICB1cGRhdGVVc2VyTGVhcm5lZFdvcmRzOiBhc3luYyAob2JqZWN0OiBMZWFybmVkV29yZCkgPT4ge1xyXG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTRVJWRVJ9L3VzZXJzLyR7b2JqZWN0LnVzZXJJZH0vc2V0dGluZ3NgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtvYmplY3QudG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqZWN0LmJvZHkpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfSxcclxuICBnZXRMZWFybmVkV29yZHM6IGFzeW5jIChpZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBzaWduYWw/OiBBYm9ydFNpZ25hbCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTRVJWRVJ9L3VzZXJzLyR7aWR9L3NldHRpbmdzYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgc2lnbmFsLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwKTtcclxuICAgICAgY29uc3QgV04gPSB7IFtkYXRlXTogMCB9O1xyXG4gICAgICBjb25zdCB3b3JkcyA9IExlYXJuZWRXb3Jkc0FQSS5jcmVhdGVXb3JkKGlkLCB0b2tlbiwgMSwgWyd3b3JkcyddLCBXTiwgV04pO1xyXG4gICAgICBMZWFybmVkV29yZHNBUEkudXBkYXRlVXNlckxlYXJuZWRXb3Jkcyh3b3Jkcyk7XHJcbiAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U0VSVkVSfS91c2Vycy8ke2lkfS9zZXR0aW5nc2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhcm5lZFdvcmRzQVBJO1xyXG4iLCJpbXBvcnQgU0VSVkVSIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvc2VydmVyQ29uc3QnO1xuaW1wb3J0IFN0YXRpc3RpYyBmcm9tICcuL1N0YXRpc3RpYyc7XG5pbXBvcnQgSVN0YXRpc3RpYyBmcm9tICcuL1N0YXRpc3RpY0ludGVyZmFjZSc7XG5pbXBvcnQgRGF0YSBmcm9tICcuL0lEYXRhJztcblxuY29uc3QgVXNlclN0YXRpc3RpYzogSVN0YXRpc3RpYyA9IHtcbiAgY3JlYXRlU3RhdGlzdGljOiAoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdG9rZW46IHN0cmluZyxcbiAgICBsZWFybmVkV29yZHM6IG51bWJlcixcbiAgICBzcHJpbnRQb2ludHNJbkFSb3c6IERhdGEsXG4gICAgYXVkaW9Qb2ludHNJbkFSb3c6IERhdGEsXG4gICAgZ2FtZXNBbW91dFNwcmludDogRGF0YSxcbiAgICBnYW1lc0Ftb3V0QXVkaW86IERhdGEsXG4gICAgZ2FtZXNTY29yZVNwcmludDogRGF0YSxcbiAgICBnYW1lc1Njb3JlQXVkaW86IERhdGEsXG5cbiAgICB0ZXN0RmllbGRTdHJpbmc/OiBzdHJpbmcsXG4gICAgdGVzdEZpZWxkQm9vbGVhbj86IGJvb2xlYW5cbiAgKSA9PiAoe1xuICAgIHVzZXJJZCxcbiAgICB0b2tlbixcbiAgICBib2R5OiB7XG4gICAgICBsZWFybmVkV29yZHMsXG4gICAgICBvcHRpb25hbDoge1xuICAgICAgICBzcHJpbnRQb2ludHNJbkFSb3csXG4gICAgICAgIGF1ZGlvUG9pbnRzSW5BUm93LFxuICAgICAgICBnYW1lc0Ftb3V0U3ByaW50LFxuICAgICAgICBnYW1lc0Ftb3V0QXVkaW8sXG4gICAgICAgIGdhbWVzU2NvcmVTcHJpbnQsXG4gICAgICAgIGdhbWVzU2NvcmVBdWRpbyxcblxuICAgICAgICB0ZXN0RmllbGRTdHJpbmcsXG4gICAgICAgIHRlc3RGaWVsZEJvb2xlYW4sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuXG4gIGdldFN0YXRpc3RpYzogYXN5bmMgKGlkOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1NFUlZFUn0vdXNlcnMvJHtpZH0vc3RhdGlzdGljc2AsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9LFxuICB1cGRhdGVVc2VyU3RhdGlzdGljOiBhc3luYyAob2JqZWN0OiBTdGF0aXN0aWMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IFVzZXJTdGF0aXN0aWMuZ2V0U3RhdGlzdGljKG9iamVjdC51c2VySWQsIG9iamVjdC50b2tlbik7XG4gICAgICBjb25zdCBvYmplY3RFeGlzdCA9IE9iamVjdC5hc3NpZ24ocmVzcCk7XG4gICAgICBjb25zdCBjb3B5ID0gT2JqZWN0LmFzc2lnbihvYmplY3QpO1xuICAgICAgT2JqZWN0LmtleXMob2JqZWN0RXhpc3Qub3B0aW9uYWwpLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBwcm9wRXhpc3QgPSBvYmplY3RFeGlzdC5vcHRpb25hbFtpdGVtXTtcbiAgICAgICAgY29uc3QgcHJvcE5ldyA9IG9iamVjdC5ib2R5Lm9wdGlvbmFsW2l0ZW0gYXMga2V5b2YgdHlwZW9mIG9iamVjdC5ib2R5Lm9wdGlvbmFsXSBhcyBvYmplY3Q7XG4gICAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICAgIGNhc2UgJ3NwcmludFBvaW50c0luQVJvdyc6XG4gICAgICAgICAgY2FzZSAnYXVkaW9Qb2ludHNJbkFSb3cnOiB7XG4gICAgICAgICAgICBjb25zdCBrZXk6IGtleW9mIERhdGEgPSBPYmplY3Qua2V5cyhwcm9wTmV3KVswXTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlT2JqZWN0OiBEYXRhID0gcHJvcE5ld1trZXkgYXMga2V5b2YgdHlwZW9mIHByb3BOZXddO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVPbGQgPSBwcm9wRXhpc3Rba2V5XTtcbiAgICAgICAgICAgIGlmIChzY29yZU9sZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzc2lnbiA9IHsgLi4ucHJvcEV4aXN0LCAuLi5wcm9wTmV3IH07XG4gICAgICAgICAgICAgIGNvcHkuYm9keS5vcHRpb25hbFtpdGVtXSA9IGFzc2lnbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcmVPYmplY3QgPj0gc2NvcmVPbGQpIHtcbiAgICAgICAgICAgICAgY29uc3QgYXNzaWduID0geyAuLi5wcm9wRXhpc3QsIC4uLnByb3BOZXcgfTtcbiAgICAgICAgICAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYXNzaWduID0geyAuLi5wcm9wRXhpc3QgfTtcbiAgICAgICAgICAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnZ2FtZXNTY29yZVNwcmludCc6IHtcbiAgICAgICAgICAgIGNvbnN0IGtleToga2V5b2YgRGF0YSA9IE9iamVjdC5rZXlzKHByb3BOZXcpWzBdO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVPYmplY3QgPSBwcm9wTmV3W2tleSBhcyBrZXlvZiB0eXBlb2YgcHJvcE5ld107XG4gICAgICAgICAgICBjb25zdCBzY29yZU5ldyA9IHNjb3JlT2JqZWN0O1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVPbGQgPSBwcm9wRXhpc3RbT2JqZWN0LmtleXMocHJvcE5ldylbMF1dO1xuICAgICAgICAgICAgaWYgKHNjb3JlT2xkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgICAgICAgICAgICAgY29uc3Qgc3VtU2NvcmUgPSBzY29yZU5ldztcbiAgICAgICAgICAgICAgY29uc3QgbmV3T2JqZWN0U2NvcmUgPSB7IFtrZXldOiBzdW1TY29yZSB9O1xuICAgICAgICAgICAgICBjb25zdCBhc3NpZ24gPSB7IC4uLnByb3BFeGlzdCwgLi4ubmV3T2JqZWN0U2NvcmUgfTtcbiAgICAgICAgICAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZU5ldyA9PT0gc2NvcmVPbGQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUyJyk7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld09iamVjdFNjb3JlOiBEYXRhID0geyBba2V5XTogc2NvcmVPbGQgfTtcbiAgICAgICAgICAgICAgY29uc3QgYXNzaWduID0geyAuLi5wcm9wRXhpc3QsIC4uLm5ld09iamVjdFNjb3JlIH07XG4gICAgICAgICAgICAgIGNvcHkuYm9keS5vcHRpb25hbFtpdGVtXSA9IGFzc2lnbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcmVOZXcgIT09IHNjb3JlT2xkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlMycpO1xuICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBvYmplY3RFeGlzdC5vcHRpb25hbC5nYW1lc0Ftb3V0U3ByaW50O1xuICAgICAgICAgICAgICBsZXQgYW1vdW50TiA9IGFtb3VudFtPYmplY3Qua2V5cyhhbW91bnQpWzBdXTtcbiAgICAgICAgICAgICAgaWYgKGFtb3VudE4gLSAxIDw9IDApIHtcbiAgICAgICAgICAgICAgICBhbW91bnROICs9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3Qgb2xkU2NvcmVBbGwgPSBzY29yZU9sZCAqIChhbW91bnROIC0gMSk7XG4gICAgICAgICAgICAgIGNvbnN0IHN1bVNjb3JlID0gb2xkU2NvcmVBbGwgKyBzY29yZU5ldztcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coc3VtU2NvcmUsIHNjb3JlT2xkLCBzY29yZU5ldywgJ2dhbWVzcCcpO1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIoKHN1bVNjb3JlIC8gYW1vdW50TikudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld09iamVjdFNjb3JlOiBEYXRhID0geyBba2V5XTogcmVzdWx0IH07XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bVNjb3JlLCBzY29yZU9sZCwgc2NvcmVOZXcsICdnYW1lYXUnLCBhbW91bnROLCByZXN1bHQsIG5ld09iamVjdFNjb3JlLCAnYWZldHNwcicpO1xuICAgICAgICAgICAgICBjb25zdCBhc3NpZ24gPSB7IC4uLnByb3BFeGlzdCwgLi4ubmV3T2JqZWN0U2NvcmUgfTtcbiAgICAgICAgICAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnZ2FtZXNTY29yZUF1ZGlvJzoge1xuICAgICAgICAgICAgY29uc3Qga2V5OiBrZXlvZiBEYXRhID0gT2JqZWN0LmtleXMocHJvcE5ldylbMF07XG4gICAgICAgICAgICBjb25zdCBzY29yZU9iamVjdCA9IHByb3BOZXdba2V5IGFzIGtleW9mIHR5cGVvZiBwcm9wTmV3XTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlTmV3ID0gc2NvcmVPYmplY3Q7XG4gICAgICAgICAgICBjb25zdCBzY29yZU9sZCA9IHByb3BFeGlzdFtPYmplY3Qua2V5cyhwcm9wTmV3KVswXV07XG4gICAgICAgICAgICBpZiAoc2NvcmVPbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgICAgICAgICAgICBjb25zdCBzdW1TY29yZSA9IHNjb3JlTmV3O1xuICAgICAgICAgICAgICBjb25zdCBuZXdPYmplY3RTY29yZSA9IHsgW2tleV06IHN1bVNjb3JlIH07XG4gICAgICAgICAgICAgIGNvbnN0IGFzc2lnbiA9IHsgLi4ucHJvcEV4aXN0LCAuLi5uZXdPYmplY3RTY29yZSB9O1xuICAgICAgICAgICAgICBjb3B5LmJvZHkub3B0aW9uYWxbaXRlbV0gPSBhc3NpZ247XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlTmV3ID09PSBzY29yZU9sZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZTInKTtcbiAgICAgICAgICAgICAgY29uc3QgbmV3T2JqZWN0U2NvcmU6IERhdGEgPSB7IFtrZXldOiBzY29yZU9sZCB9O1xuICAgICAgICAgICAgICBjb25zdCBhc3NpZ24gPSB7IC4uLnByb3BFeGlzdCwgLi4ubmV3T2JqZWN0U2NvcmUgfTtcbiAgICAgICAgICAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZU5ldyAhPT0gc2NvcmVPbGQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUzJyk7XG4gICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IG9iamVjdEV4aXN0Lm9wdGlvbmFsLmdhbWVzQW1vdXRBdWRpbztcbiAgICAgICAgICAgICAgbGV0IGFtb3VudE4gPSBhbW91bnRbT2JqZWN0LmtleXMoYW1vdW50KVswXV07XG4gICAgICAgICAgICAgIGlmIChhbW91bnROIC0gMSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgYW1vdW50TiArPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFNjb3JlQWxsID0gc2NvcmVPbGQgKiAoYW1vdW50TiAtIDEpO1xuICAgICAgICAgICAgICBjb25zdCBzdW1TY29yZSA9IG9sZFNjb3JlQWxsICsgc2NvcmVOZXc7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bVNjb3JlLCBzY29yZU9sZCwgc2NvcmVOZXcsICdnYW1lc3AnKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKChzdW1TY29yZSAvIGFtb3VudE4pLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICBjb25zdCBuZXdPYmplY3RTY29yZTogRGF0YSA9IHsgW2tleV06IHJlc3VsdCB9O1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdW1TY29yZSwgc2NvcmVPbGQsIHNjb3JlTmV3LCAnZ2FtZWF1JywgYW1vdW50TiwgcmVzdWx0LCBuZXdPYmplY3RTY29yZSwgJ2FmZXRzcHInKTtcbiAgICAgICAgICAgICAgY29uc3QgYXNzaWduID0geyAuLi5wcm9wRXhpc3QsIC4uLm5ld09iamVjdFNjb3JlIH07XG4gICAgICAgICAgICAgIGNvcHkuYm9keS5vcHRpb25hbFtpdGVtXSA9IGFzc2lnbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgY29uc3Qga2V5OiBrZXlvZiBEYXRhID0gT2JqZWN0LmtleXMocHJvcE5ldylbMF07XG4gICAgICAgICAgLy8gICBjb25zdCBzY29yZU9iamVjdDogRGF0YSA9IHByb3BOZXdba2V5IGFzIGtleW9mIHR5cGVvZiBwcm9wTmV3XTtcbiAgICAgICAgICAvLyAgIGNvbnN0IHNjb3JlTmV3ID0gc2NvcmVPYmplY3Q7XG5cbiAgICAgICAgICAvLyAgIGNvbnN0IHNjb3JlT2xkID0gcHJvcEV4aXN0W09iamVjdC5rZXlzKHByb3BOZXcpWzBdXTtcbiAgICAgICAgICAvLyAgIGlmICghc2NvcmVPbGQpIHtcbiAgICAgICAgICAvLyAgICAgY29uc3Qgc3VtU2NvcmUgPSBzY29yZU5ldztcbiAgICAgICAgICAvLyAgICAgY29uc3QgbmV3T2JqZWN0U2NvcmUgPSB7IFtrZXldOiBzdW1TY29yZSB9O1xuICAgICAgICAgIC8vICAgICBjb25zdCBhc3NpZ24gPSB7IC4uLnByb3BFeGlzdCwgLi4ubmV3T2JqZWN0U2NvcmUgfTtcbiAgICAgICAgICAvLyAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgIC8vICAgfSBlbHNlIGlmIChzY29yZU5ldyA9PT0gc2NvcmVPbGQpIHtcbiAgICAgICAgICAvLyAgICAgY29uc3QgbmV3T2JqZWN0U2NvcmU6IERhdGEgPSB7IFtrZXldOiBzY29yZU9sZCB9O1xuICAgICAgICAgIC8vICAgICBjb25zdCBhc3NpZ24gPSB7IC4uLnByb3BFeGlzdCwgLi4ubmV3T2JqZWN0U2NvcmUgfTtcbiAgICAgICAgICAvLyAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgIC8vICAgfSBlbHNlIGlmIChzY29yZU5ldyAhPT0gc2NvcmVPbGQpIHtcbiAgICAgICAgICAvLyAgICAgY29uc3QgYW1vdW50ID0gb2JqZWN0RXhpc3Qub3B0aW9uYWwuZ2FtZXNBbW91dEF1ZGlvO1xuICAgICAgICAgIC8vICAgICBjb25zdCBhbW91bnROID0gYW1vdW50W09iamVjdC5rZXlzKGFtb3VudClbMF1dO1xuICAgICAgICAgIC8vICAgICBjb25zdCBvbGRTY29yZUFsbCA9IHNjb3JlT2xkICogKGFtb3VudE4gLSAxKTtcbiAgICAgICAgICAvLyAgICAgY29uc3Qgc3VtU2NvcmUgPSBvbGRTY29yZUFsbCArIHNjb3JlTmV3O1xuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhzdW1TY29yZSwgc2NvcmVPbGQsIHNjb3JlTmV3LCAnZ2FtZXNwJyk7XG4gICAgICAgICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcigoc3VtU2NvcmUgLyBhbW91bnROKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAvLyAgICAgY29uc3QgbmV3T2JqZWN0U2NvcmU6IERhdGEgPSB7IFtrZXldOiByZXN1bHQgfTtcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coc3VtU2NvcmUsIHNjb3JlT2xkLCBzY29yZU5ldywgJ2dhbWVhdScsIGFtb3VudE4sIHJlc3VsdCwgbmV3T2JqZWN0U2NvcmUsICdhZmV0c3ByJyk7XG4gICAgICAgICAgLy8gICAgIGNvbnN0IGFzc2lnbiA9IHsgLi4ucHJvcEV4aXN0LCAuLi5uZXdPYmplY3RTY29yZSB9O1xuICAgICAgICAgIC8vICAgICBjb3B5LmJvZHkub3B0aW9uYWxbaXRlbV0gPSBhc3NpZ247XG4gICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBjYXNlICdnYW1lc0Ftb3V0U3ByaW50JzpcbiAgICAgICAgICBjYXNlICdnYW1lc0Ftb3V0QXVkaW8nOiB7XG4gICAgICAgICAgICBjb25zdCBrZXk6IGtleW9mIERhdGEgPSBPYmplY3Qua2V5cyhwcm9wTmV3KVswXTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlT2JqZWN0OiBEYXRhID0gcHJvcE5ld1trZXkgYXMga2V5b2YgdHlwZW9mIHByb3BOZXddO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVOZXcgPSBzY29yZU9iamVjdDtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlT2xkID0gcHJvcEV4aXN0W09iamVjdC5rZXlzKHByb3BOZXcpWzBdXTtcblxuICAgICAgICAgICAgaWYgKHNjb3JlT2xkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VtU2NvcmUgPSBzY29yZU5ldztcbiAgICAgICAgICAgICAgY29uc3QgbmV3T2JqZWN0U2NvcmUgPSB7IFtrZXldOiBzdW1TY29yZSB9O1xuICAgICAgICAgICAgICBjb25zdCBhc3NpZ24gPSB7IC4uLnByb3BFeGlzdCwgLi4ubmV3T2JqZWN0U2NvcmUgfTtcbiAgICAgICAgICAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VtU2NvcmUgPSBzY29yZU9sZCArIHNjb3JlTmV3O1xuICAgICAgICAgICAgICBjb25zdCBuZXdPYmplY3RTY29yZTogRGF0YSA9IHsgW2tleV06IHN1bVNjb3JlIH07XG4gICAgICAgICAgICAgIGNvbnN0IGFzc2lnbiA9IHsgLi4ucHJvcEV4aXN0LCAuLi5uZXdPYmplY3RTY29yZSB9O1xuICAgICAgICAgICAgICBjb3B5LmJvZHkub3B0aW9uYWxbaXRlbV0gPSBhc3NpZ247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdsZWFybmVkU3ByaW50JzpcbiAgICAgICAgICBjYXNlICdsZWFybmVkQXVkaW8nOiB7XG4gICAgICAgICAgICBjb25zdCBrZXk6IGtleW9mIERhdGEgPSBPYmplY3Qua2V5cyhwcm9wTmV3KVswXTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlT2JqZWN0OiBEYXRhID0gcHJvcE5ld1trZXkgYXMga2V5b2YgdHlwZW9mIHByb3BOZXddO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVOZXcgPSBzY29yZU9iamVjdDtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlT2xkID0gcHJvcEV4aXN0W09iamVjdC5rZXlzKHByb3BOZXcpWzBdXTtcblxuICAgICAgICAgICAgaWYgKHNjb3JlT2xkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VtU2NvcmUgPSBzY29yZU5ldztcbiAgICAgICAgICAgICAgY29uc3QgbmV3T2JqZWN0U2NvcmUgPSB7IFtrZXldOiBzdW1TY29yZSB9O1xuICAgICAgICAgICAgICBjb25zdCBhc3NpZ24gPSB7IC4uLnByb3BFeGlzdCwgLi4ubmV3T2JqZWN0U2NvcmUgfTtcbiAgICAgICAgICAgICAgY29weS5ib2R5Lm9wdGlvbmFsW2l0ZW1dID0gYXNzaWduO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VtU2NvcmUgPSBzY29yZU9sZCArIHNjb3JlTmV3O1xuICAgICAgICAgICAgICBjb25zdCBuZXdPYmplY3RTY29yZTogRGF0YSA9IHsgW2tleV06IHN1bVNjb3JlIH07XG4gICAgICAgICAgICAgIGNvbnN0IGFzc2lnbiA9IHsgLi4ucHJvcEV4aXN0LCAuLi5uZXdPYmplY3RTY29yZSB9O1xuICAgICAgICAgICAgICBjb3B5LmJvZHkub3B0aW9uYWxbaXRlbV0gPSBhc3NpZ247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNhc2UgJ3NwcmludENvcnJlY3RBbnN3ZXJzJzpcbiAgICAgICAgICAvLyBjYXNlICdhdWRpb0NvcnJlY3RBbnN3ZXJzJzoge1xuICAgICAgICAgIC8vICAgY29uc3Qga2V5OiBrZXlvZiBEYXRhID0gT2JqZWN0LmtleXMocHJvcE5ldylbMF07XG4gICAgICAgICAgLy8gICBjb25zdCBzY29yZU9iamVjdDogRGF0YSA9IHByb3BOZXdba2V5IGFzIGtleW9mIHR5cGVvZiBwcm9wTmV3XTtcbiAgICAgICAgICAvLyAgIGNvbnN0IHNjb3JlTmV3ID0gc2NvcmVPYmplY3Q7XG4gICAgICAgICAgLy8gICBjb25zdCBzY29yZU9sZCA9IHByb3BFeGlzdFtPYmplY3Qua2V5cyhwcm9wTmV3KVswXV07XG4gICAgICAgICAgLy8gICBpZiAoc2NvcmVPbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vICAgICBjb25zdCBzdW1TY29yZSA9IHNjb3JlTmV3O1xuICAgICAgICAgIC8vICAgICBjb25zdCBuZXdPYmplY3RTY29yZSA9IHsgW2tleV06IHN1bVNjb3JlIH07XG4gICAgICAgICAgLy8gICAgIGNvbnN0IGFzc2lnbiA9IHsgLi4ucHJvcEV4aXN0LCAuLi5uZXdPYmplY3RTY29yZSB9O1xuICAgICAgICAgIC8vICAgICBjb3B5LmJvZHkub3B0aW9uYWxbaXRlbV0gPSBhc3NpZ247XG4gICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgIC8vICAgICBjb25zdCBzdW1TY29yZSA9IHNjb3JlT2xkICsgc2NvcmVOZXc7XG4gICAgICAgICAgLy8gICAgIGNvbnN0IG5ld09iamVjdFNjb3JlOiBEYXRhID0geyBba2V5XTogc3VtU2NvcmUgfTtcbiAgICAgICAgICAvLyAgICAgY29uc3QgYXNzaWduID0geyAuLi5wcm9wRXhpc3QsIC4uLm5ld09iamVjdFNjb3JlIH07XG4gICAgICAgICAgLy8gICAgIGNvcHkuYm9keS5vcHRpb25hbFtpdGVtXSA9IGFzc2lnbjtcbiAgICAgICAgICAvLyAgIH1cblxuICAgICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTRVJWRVJ9L3VzZXJzLyR7b2JqZWN0LnVzZXJJZH0vc3RhdGlzdGljc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke29iamVjdC50b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb3B5LmJvZHkpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U0VSVkVSfS91c2Vycy8ke29iamVjdC51c2VySWR9L3N0YXRpc3RpY3NgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtvYmplY3QudG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqZWN0LmJvZHkpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclN0YXRpc3RpYztcbiIsImltcG9ydCBTRVJWRVIgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9zZXJ2ZXJDb25zdCc7XHJcbmltcG9ydCBJVXNlciwgeyBDcmVhdGVVc2VyUGF5bG9hZCwgU2lnbkluVXNlclBheWxvYWQsIFVwZGF0ZVVzZXJQYXlsb2FkIH0gZnJvbSAnLi9Vc2VySW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IFVzZXJBUEk6IElVc2VyID0ge1xyXG4gIGRlbGV0ZVVzZXI6IGFzeW5jIChpZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1NFUlZFUn0vdXNlcnMvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVVzZXI6IGFzeW5jIChpZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCB1c2VyOiBVcGRhdGVVc2VyUGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTRVJWRVJ9L3VzZXJzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlVXNlcjogYXN5bmMgKHVzZXI6IENyZWF0ZVVzZXJQYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1NFUlZFUn0vdXNlcnNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmF3UmVzcG9uc2Uub2spIHtcclxuICAgICAgcmV0dXJuIHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuICAgIGlmIChyYXdSZXNwb25zZS5zdGF0dXMgPT09IDQxNykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ9Ci0LDQutC+0Lkg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGB0YPRidC10YHRgtCy0YPQtdGCIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0LfQtNCw0YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8hJyk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0VXNlcjogYXN5bmMgKGlkOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U0VSVkVSfS91c2Vycy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfSxcclxuXHJcbiAgZ2V0TmV3VXNlclRva2VuOiBhc3luYyAoaWQ6IHN0cmluZywgdG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTRVJWRVJ9L3VzZXJzLyR7aWR9L3Rva2Vuc2AsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfSxcclxuXHJcbiAgc2lnbkluVXNlcjogYXN5bmMgKHVzZXI6IFNpZ25JblVzZXJQYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1NFUlZFUn0vc2lnbmluYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJhd1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJldHVybiByYXdSZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAocmF3UmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC10LLQtdGA0L3Ri9C5INC/0LDRgNC+0LvRjCEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmF3UmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC90LDQudGC0Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQstC+0LnRgtC4IScpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQVBJO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQvQ2FyZCc7XHJcbmltcG9ydCBJQWR2YW50YWdlQ2FyZCBmcm9tICcuL0lBZHZhbnRhZ2VDYXJkJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9BZHZhbnRhZ2VDYXJkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHVzZUFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCBmcm9tICcuLi8uLi9ob29rcy91c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQnO1xyXG5cclxuY29uc3QgQWR2YW50YWdlQ2FyZDogUmVhY3QuRkM8SUFkdmFudGFnZUNhcmQ+ID0gKHsgaW1nVVJMLCB0aXRsZSwgYm9keSwgcGF0aCB9KSA9PiB7XHJcbiAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB1c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQoKTtcclxuXHJcbiAgbGV0IGxpbmtTdHlsZSA9ICcnO1xyXG5cclxuICBpZiAoIWlzU2lnbmVkSW4gJiYgdGl0bGUgPT09ICfQodGC0LDRgtC40YHRgtC40LrQsCcpIHtcclxuICAgIGxpbmtTdHlsZSA9IGNsYXNzZXMuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IHRvPXtwYXRofT5cclxuICAgICAgPENhcmQgdHlwZT1cInRlYW1cIiBjbGFzc05hbWU9e2xpbmtTdHlsZX0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IHNyYz17aW1nVVJMfSBhbHQ9XCJhZHZhbnRhZ2VcIiAvPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0aXRsZX08L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT57Ym9keX08L3A+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2YW50YWdlQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQXJyb3dCdXR0b24ubW9kdWxlLnNjc3MnO1xuXG50eXBlIERpcmVjdGlvbiA9ICdsZWZ0JyB8ICdyaWdodCc7XG5cbmludGVyZmFjZSBJRGlyZWN0aW9uIHtcbiAgZGlyZWN0aW9uOiBEaXJlY3Rpb247XG4gIGZyYW1lOiBudW1iZXI7XG4gIHNldEZyYW1lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn1cblxuY29uc3QgYXJyb3dMaXN0ZW5lciA9ICh7IGRpcmVjdGlvbiwgZnJhbWUsIHNldEZyYW1lIH06IElEaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgeyBzdHlsZSB9ID0gY2Fyb3VzZWw7XG5cbiAgbGV0IGN1ckZyYW1lID0gZnJhbWU7XG4gIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0JyAmJiBmcmFtZSA+IDApIGN1ckZyYW1lIC09IDE7XG4gIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyAmJiBmcmFtZSA8IDcpIGN1ckZyYW1lICs9IDE7XG5cbiAgc2V0RnJhbWUoY3VyRnJhbWUpO1xuICBzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtjdXJGcmFtZSAqIDM4fXJlbSlgO1xufTtcblxuY29uc3QgZGlzYWJsZUFycm93ID0gKGZyYW1lOiBudW1iZXIsIHR5cGU6IERpcmVjdGlvbikgPT5cbiAgKGZyYW1lID09PSAwICYmIHR5cGUgPT09ICdsZWZ0JykgfHwgKGZyYW1lID09PSA3ICYmIHR5cGUgPT09ICdyaWdodCcpID8gY2xhc3Nlcy5kaXNhYmxlZCA6ICcnO1xuXG5jb25zdCBBcnJvd0J1dHRvbiA9IChzZXR0aW5nczogSURpcmVjdGlvbikgPT4gKFxuICA8c3BhblxuICAgIG9uQ2xpY2s9eygpID0+IGFycm93TGlzdGVuZXIoc2V0dGluZ3MpfVxuICAgIGNsYXNzTmFtZT17YCR7ZGlzYWJsZUFycm93KHNldHRpbmdzLmZyYW1lLCBzZXR0aW5ncy5kaXJlY3Rpb24pfSAke2NsYXNzZXMuYnV0dG9ufSAke1xuICAgICAgY2xhc3Nlc1tgYnV0dG9uXyR7c2V0dGluZ3MuZGlyZWN0aW9ufWBdXG4gICAgfWB9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0J1dHRvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2Nzcyc7XG5cbnR5cGUgQnV0dG9uUHJvcHMgPSBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4sIEhUTUxCdXR0b25FbGVtZW50PiAmIHtcbiAgbG9hZGluZz86IGJvb2xlYW47XG59O1xuXG5jb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9ICh7IGxvYWRpbmcsIC4uLnByb3BzIH0pID0+IChcbiAgPGJ1dHRvbiB7Li4ucHJvcHN9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5idXR0b259ICR7cHJvcHMuY2xhc3NOYW1lfWB9PlxuICAgIHtsb2FkaW5nID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGVyQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGhyZWVRdWFydGVyc0xvYWRlcn0+IDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKX1cbiAgPC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkVGVhbS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQ2FyZFRlYW1JbnRlcmZhY2UgZnJvbSAnLi9DYXJkVGVhbUludGVyZmFjZSc7XG5cbmNvbnN0IENhcmRUZWFtOiBSZWFjdC5GQzxDYXJkVGVhbUludGVyZmFjZT4gPSAocHJvcHM6IENhcmRUZWFtSW50ZXJmYWNlKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFRlYW19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGhvdG99IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb3BzLm1lbWJlci5waG90b30pYCB9fT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9Pntwcm9wcy5tZW1iZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb2xlfT5cbiAgICAgICAgICAgIDxzcGFuPntwcm9wcy5tZW1iZXIucm9sZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cmlidXRpb259PlxuICAgICAgICB7cHJvcHMubWVtYmVyLmNvbnRyaWJ1dGlvbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW46ICcxcmVtIDAnIH19PlxuICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPlxuKTtcbmV4cG9ydCBkZWZhdWx0IENhcmRUZWFtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IElDYXJkIGZyb20gJy4vQ2FyZEludGVyZmFjZSc7XHJcblxyXG5sZXQgY2xhc3NOYW1lO1xyXG5cclxuY29uc3QgQ2FyZDogUmVhY3QuRkM8SUNhcmQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgc3dpdGNoIChwcm9wcy50eXBlKSB7XHJcbiAgICBjYXNlICd0ZWFtJzoge1xyXG4gICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc2VzLmNhcmR9ICR7Y2xhc3Nlcy5jYXJkVGVhbX1gO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgJ29wcG9ydHVuaXR5Jzoge1xyXG4gICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc2VzLmNhcmR9ICR7Y2xhc3Nlcy5jYXJkT3Bwb3J0dW5pdHl9YDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICdzdGF0aXN0aWNTbWFsbCc6IHtcclxuICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3Nlcy5jYXJkfSAke2NsYXNzZXMuY2FyZFN0YXRpc3RpY1NtYWxsfWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnc3RhdGlzdGljTWVkaXVtJzoge1xyXG4gICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc2VzLmNhcmR9ICR7Y2xhc3Nlcy5jYXJkU3RhdGlzdGljTWVkaXVtfWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnc3RhdGlzdGljTGFyZ2UnOiB7XHJcbiAgICAgIGNsYXNzTmFtZSA9IGAke2NsYXNzZXMuY2FyZH0gJHtjbGFzc2VzLmNhcmRTdGF0aXN0aWNMYXJnZX1gO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3Nlcy5jYXJkfSAke2NsYXNzZXMuY2FyZEdhbWVzfWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXb3JkIGZyb20gJy4uL0FQSS9EaWN0aW9uYXJ5QVBJL1dvcmQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0RldGFpbGVkV29yZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBTRVJWRVIgZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cy9zZXJ2ZXJDb25zdCc7XHJcbmltcG9ydCB1c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQgZnJvbSAnLi4vLi4vaG9va3MvdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0JztcclxuXHJcbmludGVyZmFjZSBJV29yZCB7XHJcbiAgd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxlZFdvcmQgPSAoeyB3b3JkIH06IElXb3JkKSA9PiB7XHJcbiAgY29uc3QgW3RyYW5zbGF0ZSwgc2V0VHJhbnNsYXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHdvcmRPYmplY3Q6IFdvcmQgPSBKU09OLnBhcnNlKHdvcmQpO1xyXG5cclxuICBjb25zdCB7IGlzU2lnbmVkSW4gfSA9IHVzZUFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCgpO1xyXG5cclxuICBjb25zdCBwbGF5QXVkaW8gPSAodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hdWRpb19fJHt0eXBlfWApIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1RyYW5zbGF0aW9uID0gKCkgPT4ge1xyXG4gICAgc2V0VHJhbnNsYXRlKCF0cmFuc2xhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvRGlmZmljdWx0ID0gKCkgPT4ge1xyXG4gICAgLy8gYWRkIGN1cnJlbnQgd29yZCB0byBkaWZmaWN1bHQgd29yZHNcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFuaW5nJykgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IHdvcmRPYmplY3QudGV4dE1lYW5pbmc7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4YW1wbGUnKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gd29yZE9iamVjdC50ZXh0RXhhbXBsZTtcclxuICB9LCBbd29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gc3JjPXtgJHtTRVJWRVJ9LyR7d29yZE9iamVjdC5pbWFnZX1gfSBhbHQ9XCJ3b3JkLWltYWdlXCIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndvcmRfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud29yZF9fd29yZH0+e3dvcmRPYmplY3Qud29yZH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wbGF5fSBvbkNsaWNrPXsoKSA9PiBwbGF5QXVkaW8oJ3dvcmQnKX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7dHJhbnNsYXRlID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud29yZF9fdHJhbnNsYXRlfT57d29yZE9iamVjdC53b3JkVHJhbnNsYXRlfTwvZGl2PiA6ICcnfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53b3JkX190cmFuc2NyaXB0aW9ufT57d29yZE9iamVjdC50cmFuc2NyaXB0aW9ufTwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGhyYXNlc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVhbmluZ30+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+0JfQvdCw0YfQtdC90LjQtTwvaDU+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBsYXlBdWRpbygnbWVhbmluZycpfSBjbGFzc05hbWU9e2BtZWFuaW5nICR7Y2xhc3Nlcy5wbGF5YWJsZX1gfSAvPlxyXG4gICAgICAgICAge3RyYW5zbGF0ZSA/IDxkaXY+e3dvcmRPYmplY3QudGV4dE1lYW5pbmdUcmFuc2xhdGV9LjwvZGl2PiA6ICcnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmV4YW1wbGV9PlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PtCf0YDQuNC80LXRgDwvaDU+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHBsYXlBdWRpbygnZXhhbXBsZScpfSBjbGFzc05hbWU9e2BleGFtcGxlICR7Y2xhc3Nlcy5wbGF5YWJsZX1gfSAvPlxyXG4gICAgICAgICAge3RyYW5zbGF0ZSA/IDxkaXY+e3dvcmRPYmplY3QudGV4dEV4YW1wbGVUcmFuc2xhdGV9LjwvZGl2PiA6ICcnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaWNvbn0gJHtjbGFzc2VzLnRyYW5zbGF0ZX1gfVxyXG4gICAgICAgIG9uQ2xpY2s9e3Nob3dUcmFuc2xhdGlvbn1cclxuICAgICAgICB0aXRsZT1cItCf0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINC/0LXRgNC10LLQvtC0XCJcclxuICAgICAgLz5cclxuICAgICAge2lzU2lnbmVkSW4gPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaWNvbn0gJHtjbGFzc2VzLmFkZH1gfSBvbkNsaWNrPXthZGRUb0RpZmZpY3VsdH0gdGl0bGU9J9CU0L7QsdCw0LLQuNGC0Ywg0LIgXCLQodC70L7QttC90YvQtSDRgdC70L7QstCwXCInIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgICAgPGF1ZGlvIGNsYXNzTmFtZT17YGF1ZGlvIGF1ZGlvX193b3JkICR7Y2xhc3Nlcy5hdWRpb31gfSBzcmM9e2Ake1NFUlZFUn0vJHt3b3JkT2JqZWN0LmF1ZGlvfWB9IC8+XHJcbiAgICAgIDxhdWRpbyBjbGFzc05hbWU9e2BhdWRpbyBhdWRpb19fbWVhbmluZyAke2NsYXNzZXMuYXVkaW99YH0gc3JjPXtgJHtTRVJWRVJ9LyR7d29yZE9iamVjdC5hdWRpb01lYW5pbmd9YH0gLz5cclxuICAgICAgPGF1ZGlvIGNsYXNzTmFtZT17YGF1ZGlvIGF1ZGlvX19leGFtcGxlICR7Y2xhc3Nlcy5hdWRpb31gfSBzcmM9e2Ake1NFUlZFUn0vJHt3b3JkT2JqZWN0LmF1ZGlvRXhhbXBsZX1gfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbGVkV29yZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElDYXJkIH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vRGlmZmljdWx0eUNhcmQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBEaWZmaWN1bHR5Q2FyZCA9ICh7IGNvbG9yLCBpZCwgY2hpbGRyZW4sIHNldExldmVsLCBzZXRBY2NlbnRDb2xvciwgc2V0UGFnZSB9OiBJQ2FyZCkgPT4ge1xuICBjb25zdCBkZWxldGVDYXJkc1N0eWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBjYXJkLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQ2FyZFN0eWxlID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0YXJnZXQ7XG4gICAgc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICAgIHN0eWxlLmJvcmRlckNvbG9yID0gY29sb3I7XG4gIH07XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50LCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgZGVsZXRlQ2FyZHNTdHlsZSgpO1xuICAgIHNldEFjY2VudENvbG9yKGNvbG9yKTtcbiAgICBzZXRMZXZlbChsZXZlbCk7XG4gICAgc2V0UGFnZSgwKTtcbiAgICBhZGRDYXJkU3R5bGUoZXZlbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkICR7Y2xhc3Nlcy5jYXJkfWB9IG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4gY2xpY2tIYW5kbGVyKGV2ZW50LCBpZCl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlmZmljdWx0eUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IERFVkVMT1BFUlMgZnJvbSAnLi4vLi4vY29tbW9uL2NvbnN0YW50cy9kZXZlbG9wZXJzQ29uc3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsvTGluayc7XHJcblxyXG50eXBlIEZvb3RlclByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG59PjtcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRkM8Rm9vdGVyUHJvcHM+ID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5mb290ZXJ9ICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzQ29udGFpbmVyfT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29Sc3N9PjwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5naXRodWJDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkdpdGh1Yn0+PC9hPlxyXG4gICAgICAgICAge0RFVkVMT1BFUlMubWFwKChkZXZlbG9wZXIpID0+IChcclxuICAgICAgICAgICAgPExpbmsgey4uLmRldmVsb3Blcn0ga2V5PXtkZXZlbG9wZXIuZ2l0SHVifSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Sc3N9PlxyXG4gICAgICAgICAg0JrRg9GA0YEgwqtKYXZhU2NyaXB0L0Zyb250LWVuZMK7XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRldmVsb3BtZW50RGF0ZX0+wqkgMjAyMiBSU0xhbmc8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9MaW5rLm1vZHVsZS5zY3NzJztcclxuXHJcbnR5cGUgRGV2ZWxvcGVyID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBnaXRIdWI6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IExpbms6IFJlYWN0LkZDPERldmVsb3Blcj4gPSAoeyBuYW1lLCBnaXRIdWIgfSkgPT4gKFxyXG4gIDxhIGhyZWY9e2dpdEh1Yn0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUb0RldmVsb3Blcn0+XHJcbiAgICB7bmFtZX1cclxuICA8L2E+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHVzZUFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCBmcm9tICcuLi8uLi9ob29rcy91c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvL0xvZ28nO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmlnYXRpb24vTmF2aWdhdGlvbic7XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8eyBuYXZpZ2F0aW9uSGlkZT86IGJvb2xlYW4gfT4gPSAoeyBuYXZpZ2F0aW9uSGlkZSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNTaWduZWRJbiwgc2V0SXNTaWduZWRJbiB9ID0gdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0KCk7XG5cbiAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldElzU2lnbmVkSW4oZmFsc2UpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgeyFuYXZpZ2F0aW9uSGlkZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAge2lzU2lnbmVkSW4gPyAoXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQXV0aG9yfT5cbiAgICAgICAgICAgICAgICDQktCr0JnQotCYXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYXV0aG9yaXphdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25BdXRob3J9PlxuICAgICAgICAgICAgICAgINCS0J7QmdCi0JhcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0xvZ28ubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBMb2dvID0gKCkgPT4gKFxuICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XG4gICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaWNvbnMvbG9nby5zdmdcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICA8aDU+UlNMYW5nPC9oNT5cbiAgPC9MaW5rPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHVzZUFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQnO1xyXG5pbXBvcnQgTGlua1Byb3BzIGZyb20gJy4vTmF2TGlua0ludGVyZmFjZSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTmF2TGluay5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBOYXZMaW5rOiBSZWFjdC5GQzxMaW5rUHJvcHM+ID0gKHByb3A6IExpbmtQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0KCk7XHJcblxyXG4gIGxldCBsaW5rU3R5bGUgPSBjbGFzc2VzLmxpbms7XHJcblxyXG4gIGlmICghaXNTaWduZWRJbiAmJiBwcm9wLnBhZ2UgPT09ICfQodGC0LDRgtC40YHRgtC40LrQsCcpIHtcclxuICAgIGxpbmtTdHlsZSA9IGAke2xpbmtTdHlsZX0gJHtjbGFzc2VzLmRpc2FibGVkfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPExpbmsgY2xhc3NOYW1lPXtsaW5rU3R5bGV9IHRvPXtgJHtwcm9wLnBhdGh9YH0+XHJcbiAgICAgICAge3Byb3AucGFnZX1cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGluaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4vTmF2TGluay9OYXZMaW5rJztcbmltcG9ydCBOQVZJR0FUSU9OX0lURU1TIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvbmF2Q29uc3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzJztcblxuY29uc3QgTmF2YmFyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkxpc3R9PlxuICAgICAge05BVklHQVRJT05fSVRFTVMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxOYXZMaW5rIHBhZ2U9e2l0ZW1bMF19IHBhdGg9e2l0ZW1bMV19IGtleT17aXRlbVswXX0gLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2lyY2xlLm1vZHVsZS5zY3NzJztcbmltcG9ydCBJQ2lyY2xlIGZyb20gJy4vSW50ZXJmYWNlJztcblxuY29uc3QgQ2lyY2xlID0gKHsgY29sb3IsIGlzUHJvZ3Jlc3MgfTogSUNpcmNsZSkgPT4gKFxuICA8Y2lyY2xlXG4gICAgY2xhc3NOYW1lPXtpc1Byb2dyZXNzID8gYHByb2dyZXNzICR7Y2xhc3Nlcy5jaXJjbGV9YCA6ICcnfVxuICAgIHN0cm9rZT17Y29sb3J9XG4gICAgY3g9XCIxMDNcIlxuICAgIGN5PVwiMTAzXCJcbiAgICBzdHJva2VXaWR0aD1cIjIwXCJcbiAgICByPVwiOTNcIlxuICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElQcm9ncmVzcyBmcm9tICcuL0ludGVyZmFjZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1Byb2dyZXNzQmFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUvQ2lyY2xlJztcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoeyBwcm9ncmVzcywgc3ByaW50LCBpc1N0YXQgfTogSVByb2dyZXNzKSA9PiB7XG4gIGNvbnN0IHNldFByb2dyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpIGFzIFNWR0NpcmNsZUVsZW1lbnQ7XG4gICAgY29uc3QgcmFkaXVzID0gcHJvZ3Jlc3NFbGVtZW50LnIuYmFzZVZhbC52YWx1ZTtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG5cbiAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7Y2lyY3VtZmVyZW5jZX0gJHtjaXJjdW1mZXJlbmNlfWA7XG5cbiAgICAoKHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAqICgxIC0gcGVyY2VudGFnZSAvIDEwMCk7XG4gICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGAke29mZnNldH1gO1xuICAgIH0pKDEwMCAtIHByb2dyZXNzKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2dyZXNzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfSB3aWR0aD1cIjIwNlwiIGhlaWdodD1cIjIwNlwiPlxuICAgICAgPENpcmNsZSBjb2xvcj17c3ByaW50ID8gJyNmZmE3MzMnIDogJyNBRkNERkInfSAvPlxuICAgICAgPENpcmNsZSBjb2xvcj17c3ByaW50ID8gJyNmZmU4ZDQnIDogJyNFN0U3RTcnfSBpc1Byb2dyZXNzIC8+XG4gICAgICA8Zm9yZWlnbk9iamVjdCB3aWR0aD1cIjIwNlwiIGhlaWdodD1cIjIwNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGVyY2VudGFnZX0+e3Byb2dyZXNzfSAlPC9wPlxuICAgICAgICAgIHtpc1N0YXQgPyAnJyA6IDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT7QuNC30YPRh9C10L3QvdGL0YUg0YHQu9C+0LI8L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzJztcblxudHlwZSBSb3V0ZUNvbXBvbmVudFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xuICBuYXZpZ2F0aW9uSGlkZT86IGJvb2xlYW47XG59PjtcblxuY29uc3QgUm91dGVDb21wb25lbnQ6IFJlYWN0LkZDPFJvdXRlQ29tcG9uZW50UHJvcHM+ID0gKHByb3BzKSA9PiAoXG4gIDw+XG4gICAgPEhlYWRlciBuYXZpZ2F0aW9uSGlkZT17cHJvcHMubmF2aWdhdGlvbkhpZGV9IC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxGb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0gLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZUNvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU2VjdGlvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJU2VjdGlvbiBmcm9tICcuL1NlY3Rpb25JbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9IChwcm9wczogSVNlY3Rpb24pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAge3Byb3BzLmhlYWRlcn0ge3Byb3BzLmFkdmFudGFnZXMgJiYgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjRkZBNzMzJyB9fT5SU2xhbmc8L3NwYW4+fVxyXG4gICAgPC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJR2FtZVN0YXQgZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0dhbWVTdGF0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEdhbWVTdGF0ID0gKHByb3BzOiBJR2FtZVN0YXQpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT57cHJvcHMudHlwZSA9PT0gJ2F1ZGlvJyA/ICfQkNGD0LTQuNC+0LLRi9C30L7QsicgOiAn0KHQv9GA0LjQvdGCJ308L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgPHA+0JjQt9GD0YfQtdC90L4g0YHQu9C+0LI6IHtwcm9wcy5sZWFybmVkfTwvcD5cclxuICAgICAgICA8cD7Qn9GA0LDQstC40LvRjNC90YvRhSDQvtGC0LLQtdGC0L7Qsjoge3Byb3BzLmNvcnJlY3R9ICU8L3A+XHJcbiAgICAgICAgPHA+0KHQsNC80LDRjyDQtNC70LjQvdC90LDRjyDRgdC10YDQuNGPINC/0YDQsNCy0LjQu9GM0L3Ri9GFINC+0YLQstC10YLQvtCyOiB7cHJvcHMucm93fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpbWcgc3JjPXtgLi4vLi4vLi4vYXNzZXRzL2ljb25zLyR7cHJvcHMudHlwZSA9PT0gJ2F1ZGlvJyA/ICdTdGF0QXVkaW8nIDogJ1N0YXRTcHJpbnQnfS5zdmdgfSBhbHQ9XCJcIiAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVN0YXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU3RhdFdvcmRzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFN0YXRXb3JkcyA9IChwcm9wczogeyBhbW91bnQ6IG51bWJlciB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgIDxzcGFuPntwcm9wcy5hbW91bnR9PC9zcGFuPlxyXG4gICAgPHA+0LjQt9GD0YfQtdC90L3Ri9GFINGB0LvQvtCyPC9wPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdFdvcmRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9TdGF0aXN0aWNUb2RheS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBHYW1lU3RhdCBmcm9tICcuL0dhbWVTdGF0L0dhbWVTdGF0JztcclxuaW1wb3J0IExlYXJuZWRXb3Jkc0FQSSBmcm9tICcuLi9BUEkvTGVhcm5lZFdvcmRzQVBJL0xlYXJuZWRXb3Jkc0FQSSc7XHJcbmltcG9ydCBnZXRVc2VyRGF0YSBmcm9tICcuLi8uLi9jb21tb24vZ2V0VXNlckRhdGEnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXInO1xyXG5pbXBvcnQgU3RhdFdvcmRzIGZyb20gJy4vU3RhdFdvcmRzL1N0YXRXb3Jkcyc7XHJcbmltcG9ydCBVc2VyU3RhdGlzdGljIGZyb20gJy4uL0FQSS9TdGF0aXN0aWNBUEkvU3RhdGlzdGljQVBJJztcclxuXHJcbmNvbnN0IFN0YXRpc3RpY1RvZGF5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthbW91bnRTcHJpbnQsIHNldEFtb3VudFNwcmludF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW1vdW50QXVkaW8sIHNldEFtb3VudEF1ZGlvXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb3JyZWN0U3ByaW50LCBzZXRDb3JyZWN0U3ByaW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb3JyZWN0QXVkaW8sIHNldENvcnJlY3RBdWRpb10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93U3ByaW50LCBzZXRSb3dTcHJpbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jvd0F1ZGlvLCBzZXRSb3dBdWRpb10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB1c2VyRGF0ZSA9IGdldFVzZXJEYXRhKCk7XHJcbiAgaWYgKHVzZXJEYXRlKSB7XHJcbiAgICBjb25zdCBvYmplY3RXb3JkcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTGVhcm5lZFdvcmRzQVBJLmdldExlYXJuZWRXb3Jkcyh1c2VyRGF0ZS5pZCwgdXNlckRhdGUudG9rZW4pO1xyXG4gICAgICBpZiAocmVzdWx0Lm9wdGlvbmFsLmxlYXJuZWRXb3Jkc051bWJlckF1ZGlvICYmIHJlc3VsdC5vcHRpb25hbC5sZWFybmVkV29yZHNOdW1iZXJTcHJpbnQpIHtcclxuICAgICAgICBzZXRBbW91bnRTcHJpbnQoXHJcbiAgICAgICAgICBOdW1iZXIocmVzdWx0Lm9wdGlvbmFsLmxlYXJuZWRXb3Jkc051bWJlclNwcmludFtPYmplY3Qua2V5cyhyZXN1bHQub3B0aW9uYWwubGVhcm5lZFdvcmRzTnVtYmVyU3ByaW50KVswXV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRBbW91bnRBdWRpbyhcclxuICAgICAgICAgIE51bWJlcihyZXN1bHQub3B0aW9uYWwubGVhcm5lZFdvcmRzTnVtYmVyQXVkaW9bT2JqZWN0LmtleXMocmVzdWx0Lm9wdGlvbmFsLmxlYXJuZWRXb3Jkc051bWJlckF1ZGlvKVswXV0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9iamVjdFN0YXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJTdGF0aXN0aWMuZ2V0U3RhdGlzdGljKHVzZXJEYXRlLmlkLCB1c2VyRGF0ZS50b2tlbik7XHJcbiAgICAgIHNldFJvd0F1ZGlvKE51bWJlcihyZXN1bHQub3B0aW9uYWwuYXVkaW9Qb2ludHNJbkFSb3dbT2JqZWN0LmtleXMocmVzdWx0Lm9wdGlvbmFsLmF1ZGlvUG9pbnRzSW5BUm93KVswXV0pKTtcclxuICAgICAgc2V0Um93U3ByaW50KE51bWJlcihyZXN1bHQub3B0aW9uYWwuc3ByaW50UG9pbnRzSW5BUm93W09iamVjdC5rZXlzKHJlc3VsdC5vcHRpb25hbC5zcHJpbnRQb2ludHNJbkFSb3cpWzBdXSkpO1xyXG4gICAgICBzZXRDb3JyZWN0QXVkaW8oTnVtYmVyKHJlc3VsdC5vcHRpb25hbC5nYW1lc1Njb3JlQXVkaW9bT2JqZWN0LmtleXMocmVzdWx0Lm9wdGlvbmFsLmdhbWVzU2NvcmVBdWRpbylbMF1dKSk7XHJcbiAgICAgIHNldENvcnJlY3RTcHJpbnQoTnVtYmVyKHJlc3VsdC5vcHRpb25hbC5nYW1lc1Njb3JlU3ByaW50W09iamVjdC5rZXlzKHJlc3VsdC5vcHRpb25hbC5nYW1lc1Njb3JlU3ByaW50KVswXV0pKTtcclxuICAgIH07XHJcbiAgICBvYmplY3RXb3JkcygpO1xyXG4gICAgb2JqZWN0U3RhdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT7QodGC0LDRgtC40YHRgtC40LrQsCDQt9CwINGB0LXQs9C+0LTQvdGPPC9oNT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT5cclxuICAgICAgICAgIDxDYXJkIHR5cGU9eydzdGF0aXN0aWNTbWFsbCd9PlxyXG4gICAgICAgICAgICA8U3RhdFdvcmRzIGFtb3VudD17YW1vdW50U3ByaW50ICsgYW1vdW50QXVkaW99IC8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCB0eXBlPXsnc3RhdGlzdGljTWVkaXVtJ30+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHByb2dyZXNzPXtNYXRoLmNlaWwoKChjb3JyZWN0U3ByaW50ICsgY29ycmVjdEF1ZGlvKSAvIDIpICogMTAwKX0gc3ByaW50PXt0cnVlfSBpc1N0YXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy53cmlnaHRBbnN3ZXJzfT7Qv9GA0LDQstC40LvRjNC90YvRhSDQvtGC0LLQtdGC0L7Qsjwvc3Bhbj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodH0+XHJcbiAgICAgICAgICA8Q2FyZCB0eXBlPXsnc3RhdGlzdGljTGFyZ2UnfT5cclxuICAgICAgICAgICAgPEdhbWVTdGF0IGxlYXJuZWQ9e2Ftb3VudFNwcmludH0gY29ycmVjdD17TWF0aC5mbG9vcihjb3JyZWN0U3ByaW50ICogMTAwKX0gcm93PXtyb3dTcHJpbnR9IHR5cGU9XCJzcHJpbnRcIiAvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgdHlwZT17J3N0YXRpc3RpY0xhcmdlJ30+XHJcbiAgICAgICAgICAgIDxHYW1lU3RhdCBsZWFybmVkPXthbW91bnRBdWRpb30gY29ycmVjdD17TWF0aC5mbG9vcihjb3JyZWN0QXVkaW8gKiAxMDApfSByb3c9e3Jvd0F1ZGlvfSB0eXBlPVwiYXVkaW9cIiAvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNUb2RheTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQ2hhcnRPcHRpb25zLCBDaGFydERhdGEsIENoYXJ0QXJlYSwgQ29sb3IgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5pbXBvcnQgJ2NoYXJ0LmpzL2F1dG8nO1xyXG5pbXBvcnQgJ2NoYXJ0anMtYWRhcHRlci1kYXRlLWZucyc7XHJcbmltcG9ydCB7IHJ1IH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0UHJvcHMge1xyXG4gIHdvcmRDb3VudDogeyB4OiBudW1iZXIgfCBEYXRlOyB5OiBudW1iZXIgfVtdO1xyXG59XHJcblxyXG5jb25zdCB0aXRsZUZvbnQgPSB7XHJcbiAgZmFtaWx5OiAnR2lscm95JyxcclxuICBzdHlsZTogJ25vcm1hbCcgYXMgY29uc3QsXHJcbiAgd2VpZ2h0OiAnNTAwJyxcclxuICBzaXplOiAxOCxcclxuICBsaW5lSGVpZ2h0OiAnMjJweCcsXHJcbn07XHJcblxyXG5jb25zdCB0aXRsZVNldHRpbmdzID0ge1xyXG4gIGRpc3BsYXk6IHRydWUsXHJcbiAgY29sb3I6ICcjMDgyMTQzJyxcclxuICBmb250OiB0aXRsZUZvbnQsXHJcbiAgcGFkZGluZzogMjAsXHJcbn07XHJcblxyXG5jb25zdCB0aWNrc0ZvbnQgPSB7XHJcbiAgZmFtaWx5OiAnR2lscm95JyxcclxuICBzaXplOiAxOCxcclxuICBsaW5lSGVpZ2h0OiAnMjJweCcsXHJcbn07XHJcblxyXG5jb25zdCBvcHRpb25zOiBDaGFydE9wdGlvbnM8J2xpbmUnPiA9IHtcclxuICByZXNwb25zaXZlOiB0cnVlLFxyXG4gIHBsdWdpbnM6IHtcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzY2FsZXM6IHtcclxuICAgIHhBeGlzOiB7XHJcbiAgICAgIGFkYXB0ZXJzOiB7XHJcbiAgICAgICAgZGF0ZToge1xyXG4gICAgICAgICAgbG9jYWxlOiBydSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlOiAndGltZScsXHJcbiAgICAgIHRpbWU6IHtcclxuICAgICAgICB1bml0OiAnZGF5JyxcclxuICAgICAgfSxcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAn0J/QtdGA0LjQvtC0INC40LfRg9GH0LXQvdC40Y8nLFxyXG4gICAgICAgIC4uLnRpdGxlU2V0dGluZ3MsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgY29sb3I6ICcjQTRBNEE0JyxcclxuICAgICAgICBmb250OiB0aWNrc0ZvbnQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgeUF4aXM6IHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICB0ZXh0OiAn0JrQvtC70LjRh9C10YHRgtCy0L4g0YHQu9C+0LInLFxyXG4gICAgICAgIC4uLnRpdGxlU2V0dGluZ3MsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgY29sb3I6ICcjQTRBNEE0JyxcclxuICAgICAgICBmb250OiB0aWNrc0ZvbnQsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmFkaWVudChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgYXJlYTogQ2hhcnRBcmVhKSB7XHJcbiAgY29uc3QgY29sb3JTdGFydCA9ICdyZ2JhKDI1NSwgMjA3LCAxMSwgMCknO1xyXG4gIGNvbnN0IGNvbG9yRW5kID0gJyNGRkNGMEInO1xyXG5cclxuICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBhcmVhLmJvdHRvbSwgMCwgYXJlYS50b3ApO1xyXG5cclxuICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC4wMTc5LCBjb2xvclN0YXJ0KTtcclxuICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3JFbmQpO1xyXG5cclxuICByZXR1cm4gZ3JhZGllbnQ7XHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0OiBSZWFjdC5GQzxJQ2hhcnRQcm9wcz4gPSAoeyB3b3JkQ291bnQgfSkgPT4ge1xyXG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPENoYXJ0SlM8J2xpbmUnLCBJQ2hhcnRQcm9wc1snd29yZENvdW50J10+PihudWxsKTtcclxuICBjb25zdCBbZ3JhZGllbnQsIHNldEdyYWRpZW50XSA9IHVzZVN0YXRlPENvbG9yPigncmdiYSgyNTUsIDIwNywgMTEsIDApJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhcnRSZWYuY3VycmVudCkge1xyXG4gICAgICBzZXRHcmFkaWVudChjcmVhdGVHcmFkaWVudChjaGFydFJlZi5jdXJyZW50LmN0eCwgY2hhcnRSZWYuY3VycmVudC5jaGFydEFyZWEpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGRhdGE6IENoYXJ0RGF0YTwnbGluZScsIElDaGFydFByb3BzWyd3b3JkQ291bnQnXT4gPSB7XHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgICBkYXRhOiB3b3JkQ291bnQsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkZDRjBCJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYWRpZW50LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gPExpbmUgcmVmPXtjaGFydFJlZn0gb3B0aW9ucz17b3B0aW9uc30gZGF0YT17ZGF0YX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoYXJ0LCB7IElDaGFydFByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0aXN0aWNzRm9yQWxsVGltZS9DaGFydC9DaGFydCc7XHJcbmltcG9ydCBMZWFybmVkV29yZHNBUEkgZnJvbSAnLi4vQVBJL0xlYXJuZWRXb3Jkc0FQSS9MZWFybmVkV29yZHNBUEknO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1N0YXRpc3RpY3NGb3JBbGxUaW1lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IElMZWFybmVkT2JqZWN0IGZyb20gJy4uL0FQSS9MZWFybmVkV29yZHNBUEkvbGVhcm5lZFdvcmRPYmplY3QnO1xyXG5cclxuY29uc3QgU3RhdGlzdGljc0ZvckFsbFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25ld1dvcmRBY3RpdmUsIHNldE5ld1dvcmRBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXJTdGF0aXN0aWNzUGVyRGF5LCBzZXRVc2VyU3RhdGlzdGljc1BlckRheV0gPSB1c2VTdGF0ZTxJQ2hhcnRQcm9wc1snd29yZENvdW50J10+KFtdKTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlclJlZiA9IHVzZVJlZjxBYm9ydENvbnRyb2xsZXI+KCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldExlYXJuZWRXb3Jkcyhwcm9wZXJ0eTogJ2xlYXJuZWRXb3Jkc051bWJlclNwcmludCcgfCAnbGVhcm5lZFdvcmRzTnVtYmVyQXVkaW8nKSB7XHJcbiAgICBjb25zdCBzdG9yYWdlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcblxyXG4gICAgaWYgKHN0b3JhZ2VEYXRhKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgdG9rZW4gfSA9IEpTT04ucGFyc2Uoc3RvcmFnZURhdGEpO1xyXG4gICAgICAgIGlmIChjb250cm9sbGVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIGNvbnRyb2xsZXJSZWYuY3VycmVudC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIGNvbnRyb2xsZXJSZWYuY3VycmVudCA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IElMZWFybmVkT2JqZWN0ID0gYXdhaXQgTGVhcm5lZFdvcmRzQVBJLmdldExlYXJuZWRXb3JkcyhpZCwgdG9rZW4sIGNvbnRyb2xsZXIuc2lnbmFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gcmVzcG9uc2Uub3B0aW9uYWxbcHJvcGVydHldO1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlKSB7XHJcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlKTtcclxuXHJcbiAgICAgICAgICBzZXRVc2VyU3RhdGlzdGljc1BlckRheShcclxuICAgICAgICAgICAgZW50cmllcy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgICB4OiBOdW1iZXIoa2V5KSxcclxuICAgICAgICAgICAgICB5OiBOdW1iZXIodmFsdWUpLFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuZXdXb3JkQWN0aXZlKSB7XHJcbiAgICAgIGdldExlYXJuZWRXb3JkcygnbGVhcm5lZFdvcmRzTnVtYmVyU3ByaW50Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRMZWFybmVkV29yZHMoJ2xlYXJuZWRXb3Jkc051bWJlckF1ZGlvJyk7XHJcbiAgICB9XHJcbiAgfSwgW25ld1dvcmRBY3RpdmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT7QodGC0LDRgtC40YHRgtC40LrQsCDQt9CwINCy0YHQtSDQstGA0LXQvNGPPC9oNT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaXN0fT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e25ld1dvcmRBY3RpdmUgPyBjbGFzc2VzLmJ1dHRvbkFjdGl2ZSA6IGNsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TmV3V29yZEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0JrQvtC70LjRh9C10YHRgtCy0L4g0L3QvtCy0YvRhSDRgdC70L7QslxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e25ld1dvcmRBY3RpdmUgPyBjbGFzc2VzLmJ1dHRvbiA6IGNsYXNzZXMuYnV0dG9uQWN0aXZlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TmV3V29yZEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCa0L7Qu9C40YfQtdGB0YLQstC+INC40LfRg9GH0LXQvdC90YvRhSDRgdC70L7QslxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPENoYXJ0IHdvcmRDb3VudD17dXNlclN0YXRpc3RpY3NQZXJEYXl9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljc0ZvckFsbFRpbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJQ2FyZCBmcm9tICcuL0ludGVyYWZhY2UnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1dvcmRDYXJkLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IFdvcmRDYXJkID0gKHsgd29yZCwgd29yZElkLCB3b3JkVHJhbnNsYXRlLCBhY2NlbnRDb2xvciwgc2V0V29yZCwgaW5kZXggfTogSUNhcmQpID0+IHtcclxuICBjb25zdCBhZGRDb2xvciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3Qgd29yZENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX3dvcmQnKTtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0YXJnZXQ7XHJcblxyXG4gICAgd29yZENhcmRzLmZvckVhY2goKGNhcmQpID0+IGNhcmQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpKTtcclxuICAgIHNldFdvcmQod29yZElkKTtcclxuICAgIHN0eWxlLmJhY2tncm91bmQgPSBhY2NlbnRDb2xvcjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17aW5kZXggPyB7fSA6IHsgYmFja2dyb3VuZDogYWNjZW50Q29sb3IgfX1cclxuICAgICAgb25DbGljaz17KGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IGFkZENvbG9yKGUpfVxyXG4gICAgICBjbGFzc05hbWU9e2BjYXJkX193b3JkICR7Y2xhc3Nlcy5jYXJkfWB9XHJcbiAgICA+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy53b3JkfT57d29yZH08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50cmFuc2xhdGV9Pnt3b3JkVHJhbnNsYXRlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8e1xuICBpc1NpZ25lZEluOiBib29sZWFuO1xuICBzZXRJc1NpZ25lZEluOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG59IHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQnO1xuXG5jb25zdCB1c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCk7XG4gIGlmICghYXBwQ29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigpO1xuICB9XG4gIHJldHVybiBhcHBDb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0O1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IERPVFMgPSAnLi4uJztcblxuY29uc3QgcmFuZ2UgPSAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxO1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aCB9LCAoXywgaWR4KSA9PiBpZHggKyBzdGFydCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlUGFnaW5hdGlvbiA9IChjdXJyZW50UGFnZTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHBhZ2luYXRpb25SYW5nZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNpYmxpbmdDb3VudCA9IDE7XG4gICAgY29uc3QgdG90YWxQYWdlQ291bnQgPSAzMDtcblxuICAgIGNvbnN0IGxlZnRTaWJsaW5nSW5kZXggPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIHNpYmxpbmdDb3VudCwgMSk7XG4gICAgY29uc3QgcmlnaHRTaWJsaW5nSW5kZXggPSBNYXRoLm1pbihjdXJyZW50UGFnZSArIHNpYmxpbmdDb3VudCwgdG90YWxQYWdlQ291bnQpO1xuXG4gICAgY29uc3Qgc2hvdWxkU2hvd0xlZnREb3RzID0gbGVmdFNpYmxpbmdJbmRleCA+IDI7XG4gICAgY29uc3Qgc2hvdWxkU2hvd1JpZ2h0RG90cyA9IHJpZ2h0U2libGluZ0luZGV4IDwgdG90YWxQYWdlQ291bnQgLSAyO1xuXG4gICAgY29uc3QgZmlyc3RQYWdlSW5kZXggPSAxO1xuICAgIGNvbnN0IGxhc3RQYWdlSW5kZXggPSB0b3RhbFBhZ2VDb3VudDtcblxuICAgIGlmICghc2hvdWxkU2hvd0xlZnREb3RzICYmIHNob3VsZFNob3dSaWdodERvdHMpIHtcbiAgICAgIGNvbnN0IGxlZnRJdGVtQ291bnQgPSAzICsgMiAqIHNpYmxpbmdDb3VudDtcbiAgICAgIGNvbnN0IGxlZnRSYW5nZSA9IHJhbmdlKDEsIGxlZnRJdGVtQ291bnQpO1xuICAgICAgcmV0dXJuIFsuLi5sZWZ0UmFuZ2UsIERPVFMsIHRvdGFsUGFnZUNvdW50XTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2hvd0xlZnREb3RzICYmICFzaG91bGRTaG93UmlnaHREb3RzKSB7XG4gICAgICBjb25zdCByaWdodEl0ZW1Db3VudCA9IDMgKyAyICogc2libGluZ0NvdW50O1xuICAgICAgY29uc3QgcmlnaHRSYW5nZSA9IHJhbmdlKHRvdGFsUGFnZUNvdW50IC0gcmlnaHRJdGVtQ291bnQgKyAxLCB0b3RhbFBhZ2VDb3VudCk7XG4gICAgICByZXR1cm4gW2ZpcnN0UGFnZUluZGV4LCBET1RTLCAuLi5yaWdodFJhbmdlXTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2hvd0xlZnREb3RzICYmIHNob3VsZFNob3dSaWdodERvdHMpIHtcbiAgICAgIGNvbnN0IG1pZGRsZVJhbmdlID0gcmFuZ2UobGVmdFNpYmxpbmdJbmRleCwgcmlnaHRTaWJsaW5nSW5kZXgpO1xuICAgICAgcmV0dXJuIFtmaXJzdFBhZ2VJbmRleCwgRE9UUywgLi4ubWlkZGxlUmFuZ2UsIERPVFMsIGxhc3RQYWdlSW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiByYW5nZSgxLCB0b3RhbFBhZ2VDb3VudCk7XG4gIH0sIFtjdXJyZW50UGFnZV0pO1xuXG4gIHJldHVybiBwYWdpbmF0aW9uUmFuZ2U7XG59O1xuIiwiaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuXHJcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykgYXMgSFRNTEVsZW1lbnQpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50SGFuZGxlciwgRm9jdXNFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBVc2VyQVBJIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQVBJL1VzZXJzQVBJL1VzZXJzQVBJJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUFwcGxpY2F0aW9uQWNjZXNzQ29udGV4dCc7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vRm9ybUlucHV0L0Zvcm1JbnB1dCc7XHJcbmltcG9ydCBXYXJuaW5nTWVzc2FnZSBmcm9tICcuLi9XYXJuaW5nTWVzc2FnZS9XYXJuaW5nTWVzc2FnZSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQXV0aG9yaXphdGlvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBBdXRob3JpemF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW2VtYWlsRGlydHksIHNldEVtYWlsRGlydHldID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJ0VtYWlsINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnKTtcclxuXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmREaXJ0eSwgc2V0UGFzc3dvcmREaXJ0eV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPign0J/QsNGA0L7Qu9GMINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnKTtcclxuXHJcbiAgY29uc3QgW2Zvcm1WYWxpZCwgc2V0Rm9ybVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3JlZ2lzdHJhdGlvbkVycm9yLCBzZXRSZWdpc3RyYXRpb25FcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgY29uc3QgeyBzZXRJc1NpZ25lZEluIH0gPSB1c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZW1haWxFcnJvciAmJiAhcGFzc3dvcmRFcnJvcikge1xyXG4gICAgICBzZXRGb3JtVmFsaWQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRGb3JtVmFsaWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtlbWFpbEVycm9yLCBwYXNzd29yZEVycm9yXSk7XHJcblxyXG4gIGNvbnN0IGJsdXJIYW5kbGVyOiBGb2N1c0V2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChldmVudCkgPT4ge1xyXG4gICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgc2V0RW1haWxEaXJ0eSh0cnVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncGFzc3dvcmQnOlxyXG4gICAgICAgIHNldFBhc3N3b3JkRGlydHkodHJ1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlcjogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCByZWdFeHBFbWFpbCA9XHJcbiAgICAgIC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgc2V0RW1haWxFcnJvcignRW1haWwg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlZ0V4cEVtYWlsLnRlc3QoU3RyaW5nKGV2ZW50LnRhcmdldC52YWx1ZSkudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgIHNldEVtYWlsRXJyb3IoJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSBFbWFpbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRFbWFpbEVycm9yKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdwYXNzd29yZCc6XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoJ9Cf0LDRgNC+0LvRjCDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcign0JLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IDgg0YHQuNC80LLQvtC70L7QsicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXV0aG9yaXphdGlvblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCB7IHVzZXJJZDogaWQsIHRva2VuIH0gPSBhd2FpdCBVc2VyQVBJLnNpZ25JblVzZXIoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHsgaWQsIHRva2VuIH0pKTtcclxuXHJcbiAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIHNldElzU2lnbmVkSW4odHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbkVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFJlZ2lzdHJhdGlvbkVycm9yKCfQndC10LjQt9Cy0LXRgdGC0L3QsNGPINC+0YjQuNCx0LrQsCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGFjdGlvbj1cIlwiXHJcbiAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF1dGhvcml6YXRpb25Vc2VyKCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT7QktC+0LnRgtC4PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb30+XHJcbiAgICAgICAgICDQndC+0LLRi9C5INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjD8mbmJzcDtcclxuICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdHJhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWdpc3RyYXRpb259PlxyXG4gICAgICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgIGxhYmVsPVwi0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YtcIlxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1IEVtYWlsXCJcclxuICAgICAgICAgIGRpcnR5PXtlbWFpbERpcnR5fVxyXG4gICAgICAgICAgZXJyb3I9e2VtYWlsRXJyb3J9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgbGFiZWw9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiXHJcbiAgICAgICAgICBkaXJ0eT17cGFzc3dvcmREaXJ0eX1cclxuICAgICAgICAgIGVycm9yPXtwYXNzd29yZEVycm9yfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybVZhbGlkfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQXV0aG9yaXphdGlvbn0gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxXYXJuaW5nTWVzc2FnZSBlcnJvckNvbmRpdGlvbj17cmVnaXN0cmF0aW9uRXJyb3J9PntyZWdpc3RyYXRpb25FcnJvcn08L1dhcm5pbmdNZXNzYWdlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yaXphdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9FbnRyYW5jZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUm91dGVDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Sb3V0ZUNvbXBvbmVudC9Sb3V0ZUNvbXBvbmVudCc7XG5cbmNvbnN0IEVudHJhbmNlOiBSZWFjdC5GQzxQcm9wc1dpdGhDaGlsZHJlbj4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxSb3V0ZUNvbXBvbmVudCBuYXZpZ2F0aW9uSGlkZT17dHJ1ZX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlsbHVzdHJhdGlvbn0+PC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIDwvUm91dGVDb21wb25lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRyYW5jZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBXYXJuaW5nTWVzc2FnZSBmcm9tICcuLi9XYXJuaW5nTWVzc2FnZS9XYXJuaW5nTWVzc2FnZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0Zvcm1JbnB1dC5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBJUHJvcHNGb3JtSW5wdXQge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvbkNoYW5nZTogUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBvbkJsdXI6IFJlYWN0LkZvY3VzRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgZGlydHk6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IEZvcm1JbnB1dDogUmVhY3QuRkM8SVByb3BzRm9ybUlucHV0PiA9ICh7XG4gIGxhYmVsLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIG9uQmx1cixcbiAgbmFtZSxcbiAgdHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIGRpcnR5LFxuICBlcnJvcixcbn0pID0+IHtcbiAgY29uc3QgW2lucHV0SGlkZSwgc2V0SW5wdXRTaG93XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxsYWJlbD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5leHBsYW5hdGlvbn0+e2xhYmVsfTwvcD5cblxuICAgICAge3R5cGUgPT09ICdwYXNzd29yZCcgPyAoXG4gICAgICAgIChpbnB1dEhpZGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkV5ZX0gb25DbGljaz17KCkgPT4gc2V0SW5wdXRTaG93KGZhbHNlKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSkgfHwgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25FeWVIaWRlfSBvbkNsaWNrPXsoKSA9PiBzZXRJbnB1dFNob3codHJ1ZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8V2FybmluZ01lc3NhZ2UgZXJyb3JDb25kaXRpb249e2RpcnR5ICYmIGVycm9yfT57ZXJyb3J9PC9XYXJuaW5nTWVzc2FnZT5cbiAgICA8L2xhYmVsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUlucHV0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50SGFuZGxlciwgRm9jdXNFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9Gb3JtSW5wdXQvRm9ybUlucHV0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9SZWdpc3RyYXRpb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgVXNlckFQSSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0FQSS9Vc2Vyc0FQSS9Vc2Vyc0FQSSc7XHJcbmltcG9ydCBXYXJuaW5nTWVzc2FnZSBmcm9tICcuLi9XYXJuaW5nTWVzc2FnZS9XYXJuaW5nTWVzc2FnZSc7XHJcbmltcG9ydCB1c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0JztcclxuXHJcbmNvbnN0IFJlZ2lzdHJhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtlbWFpbERpcnR5LCBzZXRFbWFpbERpcnR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdFbWFpbCDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8Jyk7XHJcblxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtuYW1lRGlydHksIHNldE5hbWVEaXJ0eV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW25hbWVFcnJvciwgc2V0TmFtZUVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJ9CY0LzRjyDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8Jyk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRGlydHksIHNldFBhc3N3b3JkRGlydHldID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oJ9Cf0LDRgNC+0LvRjCDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8Jyk7XHJcblxyXG4gIGNvbnN0IFtmb3JtVmFsaWQsIHNldEZvcm1WYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtyZWdpc3RyYXRpb25FcnJvciwgc2V0UmVnaXN0cmF0aW9uRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gIGNvbnN0IHsgc2V0SXNTaWduZWRJbiB9ID0gdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0KCk7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWVtYWlsRXJyb3IgJiYgIW5hbWVFcnJvciAmJiAhcGFzc3dvcmRFcnJvcikge1xyXG4gICAgICBzZXRGb3JtVmFsaWQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRGb3JtVmFsaWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtlbWFpbEVycm9yLCBuYW1lRXJyb3IsIHBhc3N3b3JkRXJyb3JdKTtcclxuXHJcbiAgY29uc3QgYmx1ckhhbmRsZXI6IEZvY3VzRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICBzZXRFbWFpbERpcnR5KHRydWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICBzZXROYW1lRGlydHkodHJ1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcclxuICAgICAgICBzZXRQYXNzd29yZERpcnR5KHRydWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXI6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgcmVnRXhwRW1haWwgPVxyXG4gICAgICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gICAgc3dpdGNoIChldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgIHNldEVtYWlsRXJyb3IoJ0VtYWlsINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFyZWdFeHBFbWFpbC50ZXN0KFN0cmluZyhldmVudC50YXJnZXQudmFsdWUpLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICBzZXRFbWFpbEVycm9yKCfQndC10LrQvtGA0YDQtdC60YLQvdGL0LkgRW1haWwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0RW1haWxFcnJvcignJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICBzZXROYW1lRXJyb3IoJ9CY0LzRjyDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldE5hbWVFcnJvcignJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdwYXNzd29yZCc6XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoJ9Cf0LDRgNC+0LvRjCDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcign0JLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IDgg0YHQuNC80LLQvtC70L7QsicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gYXdhaXQgVXNlckFQSS5jcmVhdGVVc2VyKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCBVc2VyQVBJLnNpZ25JblVzZXIoeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHsgaWQsIHRva2VuIH0pKTtcclxuXHJcbiAgICAgIG5hdmlnYXRlKCcvJyk7XHJcblxyXG4gICAgICBzZXRJc1NpZ25lZEluKHRydWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25FcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRSZWdpc3RyYXRpb25FcnJvcign0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBhY3Rpb249XCJcIlxyXG4gICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZWdpc3RlclVzZXIoKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvfT5cclxuICAgICAgICAgINCj0LbQtSDQtdGB0YLRjCDRg9GH0LXRgtC90LDRjyDQt9Cw0L/QuNGB0Yw/Jm5ic3A7XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9hdXRob3JpemF0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcml6YXRpb259PlxyXG4gICAgICAgICAgICDQktC+0LnRgtC4XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICBsYWJlbD1cItCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgb25CbHVyPXtibHVySGFuZGxlcn1cclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSBFbWFpbFwiXHJcbiAgICAgICAgICBkaXJ0eT17ZW1haWxEaXJ0eX1cclxuICAgICAgICAgIGVycm9yPXtlbWFpbEVycm9yfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgIGxhYmVsPVwi0JjQvNGPXCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQuNC80Y9cIlxyXG4gICAgICAgICAgZGlydHk9e25hbWVEaXJ0eX1cclxuICAgICAgICAgIGVycm9yPXtuYW1lRXJyb3J9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgbGFiZWw9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiXHJcbiAgICAgICAgICBkaXJ0eT17cGFzc3dvcmREaXJ0eX1cclxuICAgICAgICAgIGVycm9yPXtwYXNzd29yZEVycm9yfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybVZhbGlkfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uUmVnaXN0cmF0aW9ufSBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8V2FybmluZ01lc3NhZ2UgZXJyb3JDb25kaXRpb249e3JlZ2lzdHJhdGlvbkVycm9yfT57cmVnaXN0cmF0aW9uRXJyb3J9PC9XYXJuaW5nTWVzc2FnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1dhcm5pbmdNZXNzYWdlLm1vZHVsZS5zY3NzJztcblxudHlwZSBFcnJvckNvbmRpdGlvbiA9IHtcbiAgZXJyb3JDb25kaXRpb246IHN0cmluZyB8IGJvb2xlYW47XG59O1xuXG5jb25zdCBXYXJuaW5nTWVzc2FnZTogUmVhY3QuRkM8UHJvcHNXaXRoQ2hpbGRyZW48RXJyb3JDb25kaXRpb24+PiA9ICh7IGVycm9yQ29uZGl0aW9uLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+e2Vycm9yQ29uZGl0aW9uID8gPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yfT57Y2hpbGRyZW59PC9wPiA6IDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50cmFuc3BhcmVudH0+RXJyb3I8L3A+fTwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV2FybmluZ01lc3NhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9BdWRpby5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUvR2FtZSc7XG5pbXBvcnQgSUF1ZGlvIGZyb20gJy4vSW50ZXJmYWNlJztcblxuY29uc3QgQXVkaW8gPSAoeyBzZXRQb2ludHMsIHNldEFtb3VudCwgc2V0Q29ycmVjdCB9OiBJQXVkaW8pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJfX2NvbnRlbnR9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEdhbWUgc2V0UG9pbnRzPXtzZXRQb2ludHN9IHNldEFtb3VudD17c2V0QW1vdW50fSBzZXRDb3JyZWN0PXtzZXRDb3JyZWN0fSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9EZXNjcmlwdGlvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBEaWZmaWN1bHR5IGZyb20gJy4vRGlmZmljdWx0eS9EaWZmaWN1bHR5JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5cclxuaW50ZXJmYWNlIElEZXNjcmlwdGlvblByb3BzIHtcclxuICBzZXREaWZmaWN1bHR5TGV2ZWw6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xyXG4gIHNldElzU2V0dGxlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG59XHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbiA9ICh7IHNldERpZmZpY3VsdHlMZXZlbCwgc2V0SXNTZXR0bGVkIH06IElEZXNjcmlwdGlvblByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+0JDRg9C00LjQvtCy0YvQt9C+0LI8L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT7QktGL0LHQtdGA0LjRgtC1INC+0LTQuNC9INCy0LXRgNC90YvQuSDQv9C10YDQtdCy0L7QtCDRg9GB0LvRi9GI0LDQvdC90L7Qs9C+INGB0LvQvtCy0LAg0LjQtyDQv9GP0YLQuC48L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxyXG4gICAgICAgINCj0L/RgNCw0LLQu9GP0YLRjCDQuNCz0YDQvtC5INC80L7QttC90L4g0LrQsNC6INC80YvRiNC60L7QuSwg0YLQsNC6INC4INC60LvQsNCy0LjRiNCw0LzQuCAxLCAyLCAzLCA0LCA1LCAmIzg1OTI7ICYjODU5NDsg0L3QsCDQutC70LDQstC40LDRgtGD0YDQtS5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8RGlmZmljdWx0eSBzZXREaWZmaWN1bHR5TGV2ZWw9e3NldERpZmZpY3VsdHlMZXZlbH0gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc1NldHRsZWQodHJ1ZSl9PlxyXG4gICAgICA8QnV0dG9uPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PtCd0LDRh9Cw0YLRjDwvcD5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9EaWZmaWN1bHR5Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IERpZmZpY3VsdHlDYXJkIGZyb20gJy4vRGlmZmljdWx0eUNhcmQvRGlmZmljdWx0eUNhcmQnO1xyXG5pbXBvcnQgeyBESUZGSUNVTFRZIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9kaWZmaWN1bHR5TGV2ZWxzJztcclxuXHJcbmludGVyZmFjZSBJRGlmZmljdWx0eVByb3BzIHtcclxuICBzZXREaWZmaWN1bHR5TGV2ZWw6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xyXG59XHJcblxyXG5jb25zdCBEaWZmaWN1bHR5ID0gKHsgc2V0RGlmZmljdWx0eUxldmVsIH06IElEaWZmaWN1bHR5UHJvcHMpID0+IHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb2xvciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XHJcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvcHkgPSBjYXJkO1xyXG4gICAgICBjb3B5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHlsZSB9ID0gY29weSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gRElGRklDVUxUWVtpbmRleF0uY29sb3I7XHJcbiAgICAgICAgc3R5bGUuYm9yZGVyQ29sb3IgPSBESUZGSUNVTFRZW2luZGV4XS5jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERpZmZpY3VsdHlMZXZlbChsZXZlbCk7XHJcbiAgICBjaGFuZ2VDb2xvcihsZXZlbCk7XHJcbiAgfSwgW2xldmVsXSk7XHJcblxyXG4gIGRvY3VtZW50Lm9ua2V5dXAgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgY29kZSB9ID0gZXZlbnQ7XHJcbiAgICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgICAgY2FzZSAnRGlnaXQxJzpcclxuICAgICAgICBzZXRMZXZlbCgwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlnaXQyJzpcclxuICAgICAgICBzZXRMZXZlbCgxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlnaXQzJzpcclxuICAgICAgICBzZXRMZXZlbCgyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlnaXQ0JzpcclxuICAgICAgICBzZXRMZXZlbCgzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlnaXQ1JzpcclxuICAgICAgICBzZXRMZXZlbCg0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlnaXQ2JzpcclxuICAgICAgICBzZXRMZXZlbCg1KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICBpZiAobGV2ZWwgPiAwKSBzZXRMZXZlbChsZXZlbCAtIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICBpZiAobGV2ZWwgPCA1KSBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpIGFzIEhUTUxEaXZFbGVtZW50KS5jbGljaygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0luYWN0aXZlIGJ1dHRvbnMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaWZmaWN1bHR5X19jb250YWluZXJ9PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+0JLRi9Cx0LXRgNC40YLQtSDRg9GA0L7QstC10L3RjDo8L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaWZmaWN1bHRpZXN9PlxyXG4gICAgICAgIHtESUZGSUNVTFRZLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPERpZmZpY3VsdHlDYXJkIGtleT17aXRlbS5pZH0gc2V0TGV2ZWw9e3NldExldmVsfSBjb250ZW50PXtpdGVtLmxldmVsfSBpZD17aXRlbS5pZH0gY29sb3I9e2l0ZW0uY29sb3J9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpZmZpY3VsdHk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vRGlmZmljdWx0eUNhcmQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSURpZmZpY3VsdHlDYXJkIGZyb20gJy4vSW50ZXJmYWNlcyc7XHJcblxyXG5jb25zdCBEaWZmaWN1bHR5Q2FyZCA9ICh7IGNvbnRlbnQsIGlkLCBjb2xvciwgc2V0TGV2ZWwgfTogSURpZmZpY3VsdHlDYXJkKSA9PiB7XHJcbiAgY29uc3QgY2hhbmdlTGV2ZWwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIHNldExldmVsKGlkKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLmZvckVhY2goKGVsKSA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykpO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0IHsgc3R5bGUgfSA9IHRhcmdldDtcclxuICAgIHN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxuICAgIHN0eWxlLmJvcmRlckNvbG9yID0gY29sb3I7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgb25DbGljaz17KGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IGNoYW5nZUxldmVsKGUpfSBjbGFzc05hbWU9e2BjYXJkICR7Y2xhc3Nlcy5jYXJkfWB9PlxyXG4gICAgICB7Y29udGVudH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWZmaWN1bHR5Q2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByYW5kb21QYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9oZWxwZXInO1xuaW1wb3J0IFdvcmQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9BUEkvRGljdGlvbmFyeUFQSS9Xb3JkJztcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uL0Rlc2NyaXB0aW9uJztcbmltcG9ydCBHYW1lUGxheSBmcm9tICcuL0dhbWVQbGF5L0dhbWVQbGF5JztcbmltcG9ydCBEaWN0aW9uYXJ5QVBJIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQVBJL0RpY3Rpb25hcnlBUEkvRGljdGlvbmFyeUFQSSc7XG5pbXBvcnQgSUF1ZGlvIGZyb20gJy4uL0ludGVyZmFjZSc7XG5cbmNvbnN0IEdhbWUgPSAoeyBzZXRQb2ludHMsIHNldEFtb3VudCwgc2V0Q29ycmVjdCB9OiBJQXVkaW8pID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU2V0dGxlZCwgc2V0SXNTZXR0bGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RpZmZpY3VsdHlMZXZlbCwgc2V0RGlmZmljdWx0eUxldmVsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlPFdvcmRbXT4oW10pO1xuXG4gIGNvbnN0IGdldFdvcmRzID0gYXN5bmMgKHBnOiBudW1iZXIsIGx2bDogbnVtYmVyKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IERpY3Rpb25hcnlBUEkuZ2V0V29yZHNBcnJheShwZywgbHZsKTtcbiAgICBzZXRXb3JkcyhyZXNwb25zZSk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU2V0dGxlZCkge1xuICAgICAgZ2V0V29yZHMocmFuZG9tUGFnZSgpLCBkaWZmaWN1bHR5TGV2ZWwpO1xuICAgIH1cbiAgfSwgW2lzU2V0dGxlZF0pO1xuXG4gIHJldHVybiAhKGlzTG9hZGluZyAmJiBpc1NldHRsZWQpID8gKFxuICAgIDxEZXNjcmlwdGlvbiBzZXREaWZmaWN1bHR5TGV2ZWw9e3NldERpZmZpY3VsdHlMZXZlbH0gc2V0SXNTZXR0bGVkPXtzZXRJc1NldHRsZWR9IC8+XG4gICkgOiAoXG4gICAgPEdhbWVQbGF5IHdvcmRzPXt3b3Jkc30gc2V0UG9pbnRzPXtzZXRQb2ludHN9IHNldEFtb3VudD17c2V0QW1vdW50fSBzZXRDb3JyZWN0PXtzZXRDb3JyZWN0fSAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQXVkaW9CdXR0b24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgU0VSVkVSIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvc2VydmVyQ29uc3QnO1xyXG5cclxuaW50ZXJmYWNlIElBdWRpbyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEF1ZGlvQnV0dG9uID0gKHsgc3JjIH06IElBdWRpbykgPT4ge1xyXG4gIGNvbnN0IHBsYXlBdWRpbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvJykgYXMgSFRNTEF1ZGlvRWxlbWVudDtcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXVkaW9fX2J1dHRvbn0gb25DbGljaz17cGxheUF1ZGlvfT5cclxuICAgICAgPGF1ZGlvIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJhdWRpb1wiIHNyYz17YCR7U0VSVkVSfS8ke3NyY31gfSBhdXRvUGxheSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU0VSVkVSIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvc2VydmVyQ29uc3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0RldGFpbGVkQXVkaW9Xb3JkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IElEZXRhaWxlZCBmcm9tICcuL0ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBEZXRhaWxlZEF1ZGlvV29yZCA9ICh7IHdvcmQgfTogSURldGFpbGVkKSA9PiB7XHJcbiAgY29uc3QgcGxheUF1ZGlvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8nKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IHNyYz17YCR7U0VSVkVSfS8ke3dvcmQuaW1hZ2V9YH0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxhdWRpbyBjbGFzc05hbWU9e2BhdWRpbyAke2NsYXNzZXMuYXVkaW99YH0gc3JjPXtgJHtTRVJWRVJ9LyR7d29yZC5hdWRpb31gfT48L2F1ZGlvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRDb250ZW50fT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy53b3JkfT57d29yZC53b3JkfTwvcD5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17cGxheUF1ZGlvfSBjbGFzc05hbWU9e2NsYXNzZXMuYXVkaW9CdXR0b259IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbGVkQXVkaW9Xb3JkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElHYW1lRnJhbWUgZnJvbSAnLi9JbnRlcmZhY2UnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0dhbWVGcmFtZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBBdWRpb0J1dHRvbiBmcm9tICcuL0F1ZGlvQnV0dG9uL0F1ZGlvQnV0dG9uJztcclxuaW1wb3J0IFZhcmlhbnRzIGZyb20gJy4vVmFyaWFudHMvVmFyaWFudHMnO1xyXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL2hlbHBlcic7XHJcbmltcG9ydCBXb3JkIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQVBJL0RpY3Rpb25hcnlBUEkvV29yZCc7XHJcbmltcG9ydCBEZXRhaWxlZEF1ZGlvV29yZCBmcm9tICcuL0RldGFpbGVkQXVkaW9Xb3JkL0RldGFpbGVkQXVkaW9Xb3JkJztcclxuXHJcbmNvbnN0IEdhbWVGcmFtZSA9ICh7XHJcbiAgY3VycmVudFdvcmRzLFxyXG4gIGNvcnJlY3RzLFxyXG4gIGVycm9yLFxyXG4gIHN0cmVhayxcclxuICBwb2ludHMsXHJcbiAgc2V0UG9pbnRzLFxyXG4gIHNldENvcnJlY3RzLFxyXG4gIHNldEVycm9yLFxyXG4gIHNldFN0cmVhayxcclxuICBzZXRGaW5pc2hlZCxcclxufTogSUdhbWVGcmFtZSkgPT4ge1xyXG4gIGNvbnN0IFtyZW1haW5pbmdXb3Jkcywgc2V0UmVtYWluaW5nV29yZHNdID0gdXNlU3RhdGUoY3VycmVudFdvcmRzKTtcclxuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlKHJlbWFpbmluZ1dvcmRzWzBdKTtcclxuICBjb25zdCBbdmFyaWFudHMsIHNldFZhcmlhbnRzXSA9IHVzZVN0YXRlPFdvcmRbXT4oW10pO1xyXG4gIGNvbnN0IFtpc1NldHRsZWQsIHNldElzU2V0dGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldFZhcmlhbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd3JvbmdWYXJpYW50cyA9IHNodWZmbGVBcnJheShjdXJyZW50V29yZHMuZmlsdGVyKCh2YXJpYW50KSA9PiB2YXJpYW50LmlkICE9PSBjdXJyZW50V29yZC5pZCkpLnNsaWNlKDAsIDQpO1xyXG4gICAgc2V0VmFyaWFudHMoc2h1ZmZsZUFycmF5KFtjdXJyZW50V29yZCwgLi4ud3JvbmdWYXJpYW50c10pKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gZ2V0VmFyaWFudHMoKSwgW2N1cnJlbnRXb3JkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJlbWFpbmluZ1dvcmRzLmxlbmd0aCkgc2V0RmluaXNoZWQodHJ1ZSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0Q3VycmVudFdvcmQocmVtYWluaW5nV29yZHNbMF0pO1xyXG4gICAgfVxyXG4gIH0sIFtyZW1haW5pbmdXb3Jkc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZnJhbWV9PlxyXG4gICAgICB7aXNTZXR0bGVkID8gPERldGFpbGVkQXVkaW9Xb3JkIHdvcmQ9e2N1cnJlbnRXb3JkfSAvPiA6IDxBdWRpb0J1dHRvbiBzcmM9e2N1cnJlbnRXb3JkLmF1ZGlvfSAvPn1cclxuICAgICAgPFZhcmlhbnRzXHJcbiAgICAgICAgc2V0SXNTZXR0bGVkPXtzZXRJc1NldHRsZWR9XHJcbiAgICAgICAgcmVtYWluaW5nV29yZHM9e3JlbWFpbmluZ1dvcmRzfVxyXG4gICAgICAgIHNldFJlbWFpbmluZ1dvcmRzPXtzZXRSZW1haW5pbmdXb3Jkc31cclxuICAgICAgICBwb2ludHM9e3BvaW50c31cclxuICAgICAgICBjb3JyZWN0cz17Y29ycmVjdHN9XHJcbiAgICAgICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgICAgIHN0cmVhaz17c3RyZWFrfVxyXG4gICAgICAgIHNldFBvaW50cz17c2V0UG9pbnRzfVxyXG4gICAgICAgIHNldENvcnJlY3RzPXtzZXRDb3JyZWN0c31cclxuICAgICAgICBzZXRFcnJvcj17c2V0RXJyb3J9XHJcbiAgICAgICAgc2V0U3RyZWFrPXtzZXRTdHJlYWt9XHJcbiAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgIGN1cnJlbnRXb3JkPXtjdXJyZW50V29yZH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lRnJhbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXb3JkIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQVBJL0RpY3Rpb25hcnlBUEkvV29yZCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vVmFyaWFudC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgSVZhcmlhbnQge1xyXG4gIHZhcmlhbnREYXRhOiBXb3JkO1xyXG59XHJcblxyXG5jb25zdCBWYXJpYW50ID0gKHsgdmFyaWFudERhdGEgfTogSVZhcmlhbnQpID0+IChcclxuICA8ZGl2IGlkPXt2YXJpYW50RGF0YS5pZH0gY2xhc3NOYW1lPXtgdmFyaWFudCAke2NsYXNzZXMudmFyaWFudH1gfT5cclxuICAgIHt2YXJpYW50RGF0YS53b3JkVHJhbnNsYXRlfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFyaWFudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJVmFyaWFudHMgZnJvbSAnLi9JbnRlcmZhY2UnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1ZhcmlhbnRzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFZhcmlhbnQgZnJvbSAnLi9WYXJpYW50L1ZhcmlhbnQnO1xyXG5pbXBvcnQgV29yZCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0FQSS9EaWN0aW9uYXJ5QVBJL1dvcmQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XHJcblxyXG5pbnRlcmZhY2UgSVJlc3VsdCB7XHJcbiAgd29yZDogV29yZDtcclxuICBpc0NvcnJlY3Q6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFZhcmlhbnRzID0gKHtcclxuICByZW1haW5pbmdXb3JkcyxcclxuICB2YXJpYW50cyxcclxuICBjdXJyZW50V29yZCxcclxuICBjb3JyZWN0cyxcclxuICBlcnJvcixcclxuICBwb2ludHMsXHJcbiAgc3RyZWFrLFxyXG4gIHNldENvcnJlY3RzLFxyXG4gIHNldEVycm9yLFxyXG4gIHNldFBvaW50cyxcclxuICBzZXRTdHJlYWssXHJcbiAgc2V0UmVtYWluaW5nV29yZHMsXHJcbiAgc2V0SXNTZXR0bGVkLFxyXG59OiBJVmFyaWFudHMpID0+IHtcclxuICBjb25zdCBbb3B0aW9uLCBzZXRPcHRpb25dID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtpc0Nob3Nlbiwgc2V0SXNDaG9zZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxJUmVzdWx0PigpO1xyXG5cclxuICAvLyBrZXlib2FyZCBldmVudCBoYW5kbGVyXHJcbiAgZG9jdW1lbnQub25rZXl1cCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2RlIH0gPSBldmVudDtcclxuICAgIHN3aXRjaCAoY29kZSkge1xyXG4gICAgICBjYXNlICdEaWdpdDEnOlxyXG4gICAgICAgIHNldE9wdGlvbigwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlnaXQyJzpcclxuICAgICAgICBzZXRPcHRpb24oMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0RpZ2l0Myc6XHJcbiAgICAgICAgc2V0T3B0aW9uKDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdEaWdpdDQnOlxyXG4gICAgICAgIHNldE9wdGlvbigzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnRGlnaXQ1JzpcclxuICAgICAgICBzZXRPcHRpb24oNCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0RpZ2l0Nic6XHJcbiAgICAgICAgc2V0T3B0aW9uKDUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgIGlmIChvcHRpb24gPiAwKSBzZXRPcHRpb24ob3B0aW9uIC0gMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgIGlmIChvcHRpb24gPCA1KSBzZXRPcHRpb24ob3B0aW9uICsgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICBpZiAob3B0aW9uICE9PSAtMSkge1xyXG4gICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YXJpYW50Jylbb3B0aW9uXSBhcyBIVE1MRGl2RWxlbWVudCkuY2xpY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3B0aW9uKC0xKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbmFjdGl2ZSBidXR0b25zJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFyaWFudCcpO1xyXG5cclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIChpdGVtIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCd2YXJpYW50X2FjdGl2ZScpO1xyXG4gICAgICBpZiAoaW5kZXggPT09IG9wdGlvbikge1xyXG4gICAgICAgIChpdGVtIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCd2YXJpYW50X2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbb3B0aW9uXSk7XHJcblxyXG4gIC8vIGNoYW5nZSB2YXJpYW50cyBjb2xvcnMgb24gY2xpY2tcclxuICBjb25zdCBzaG93Q29ycmVjdEFuc3dlciA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB7IHN0eWxlIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBzdHlsZS5iYWNrZ3JvdW5kID0gJyM1OEM4N0UnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcGFpbnRWYXJpYW50cyA9IChjaG9pY2U6IEhUTUxEaXZFbGVtZW50LCBhbnN3ZXI6IFdvcmQpID0+IHtcclxuICAgIGNvbnN0IHsgc3R5bGUgfSA9IGNob2ljZTtcclxuICAgIGlmIChjaG9pY2UuaWQgPT09ICd1bmtub3duJykge1xyXG4gICAgICBzZXRSZXN1bHQoeyBpc0NvcnJlY3Q6IGZhbHNlLCB3b3JkOiBjdXJyZW50V29yZCB9KTtcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlLmlkICE9PSBhbnN3ZXIuaWQpIHtcclxuICAgICAgc3R5bGUuYmFja2dyb3VuZCA9ICcjRkY2ODYyJztcclxuICAgICAgc2V0UmVzdWx0KHsgaXNDb3JyZWN0OiBmYWxzZSwgd29yZDogY3VycmVudFdvcmQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSZXN1bHQoeyBpc0NvcnJlY3Q6IHRydWUsIHdvcmQ6IGN1cnJlbnRXb3JkIH0pO1xyXG4gICAgfVxyXG4gICAgc2hvd0NvcnJlY3RBbnN3ZXIoYW5zd2VyLmlkKTtcclxuICB9O1xyXG5cclxuICAvLyBjbGljayBldmVudCBoYW5kbGVyc1xyXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZhcmlhbnQnKSkge1xyXG4gICAgICBzZXRJc0Nob3Nlbih0cnVlKTtcclxuICAgICAgc2V0SXNTZXR0bGVkKHRydWUpO1xyXG4gICAgICByZXBhaW50VmFyaWFudHModGFyZ2V0LCBjdXJyZW50V29yZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFyaWFudCcpLmZvckVhY2goKGl0ZW0pID0+IChpdGVtIGFzIEhUTUxEaXZFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJykpO1xyXG4gICAgbGV0IGN1clN0cmVhayA9IHN0cmVhaztcclxuICAgIGlmIChyZXN1bHQ/LmlzQ29ycmVjdCkge1xyXG4gICAgICBzZXRDb3JyZWN0cyhbcmVzdWx0Py53b3JkLCAuLi5jb3JyZWN0c10pO1xyXG4gICAgICBjdXJTdHJlYWsgPSBzdHJlYWsgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoWyhyZXN1bHQgYXMgSVJlc3VsdCkud29yZCwgLi4uZXJyb3JdKTtcclxuICAgICAgY3VyU3RyZWFrID0gMDtcclxuICAgIH1cclxuICAgIHNldFN0cmVhayhjdXJTdHJlYWspO1xyXG4gICAgc2V0UG9pbnRzKHBvaW50cyArIDUgKiBjdXJTdHJlYWspO1xyXG4gICAgc2V0UmVtYWluaW5nV29yZHMocmVtYWluaW5nV29yZHMuc2xpY2UoMSkpO1xyXG4gICAgc2V0SXNDaG9zZW4oZmFsc2UpO1xyXG4gICAgc2V0SXNTZXR0bGVkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBvbkNsaWNrPXsoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gY2xpY2tIYW5kbGVyKGUpfSBjbGFzc05hbWU9e2NsYXNzZXMudmFyaWFudHNfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAge3ZhcmlhbnRzLm1hcCgodmFyaWFudCkgPT4gKFxyXG4gICAgICAgICAgPFZhcmlhbnQga2V5PXt2YXJpYW50LmlkfSB2YXJpYW50RGF0YT17dmFyaWFudH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshaXNDaG9zZW4gPyAoXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gY2xpY2tIYW5kbGVyKGUpfSBpZD1cInVua25vd25cIiBjbGFzc05hbWU9e2B2YXJpYW50ICR7Y2xhc3Nlcy52YXJpYW50fWB9PlxyXG4gICAgICAgICAgSGUg0LfQvdCw0Y5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG5leHRIYW5kbGVyKCl9IGNsYXNzTmFtZT17YGJ1dHRvbmB9PlxyXG4gICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm5leHR9PtCU0LDQu9C10LU8L3A+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXJpYW50cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNodWZmbGVBcnJheSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvaGVscGVyJztcclxuaW1wb3J0IFdvcmQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9BUEkvRGljdGlvbmFyeUFQSS9Xb3JkJztcclxuaW1wb3J0IElBdWRpbyBmcm9tICcuLi8uLi9JbnRlcmZhY2UnO1xyXG5pbXBvcnQgR2FtZUZyYW1lIGZyb20gJy4vR2FtZUZyYW1lL0dhbWVGcmFtZSc7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9SZXN1bHQvUmVzdWx0JztcclxuXHJcbmludGVyZmFjZSBJV29yZHMgZXh0ZW5kcyBJQXVkaW8ge1xyXG4gIHdvcmRzOiBXb3JkW107XHJcbn1cclxuXHJcbmNvbnN0IEdhbWVQbGF5ID0gKHsgc2V0UG9pbnRzLCBzZXRBbW91bnQsIHNldENvcnJlY3QsIHdvcmRzIH06IElXb3JkcykgPT4ge1xyXG4gIGNvbnN0IFtwb2ludHMsIHNldFBvaW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttYXhTdHJlYWssIHNldE1heFN0cmVha10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RyZWFrLCBzZXRTdHJlYWtdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2ZpbmlzaGVkLCBzZXRGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvcnJlY3RzLCBzZXRDb3JyZWN0c10gPSB1c2VTdGF0ZTxXb3JkW10+KFtdKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPFdvcmRbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0cmVhayA+IG1heFN0cmVhaykgc2V0TWF4U3RyZWFrKHN0cmVhayk7XHJcbiAgfSwgW3N0cmVha10pO1xyXG5cclxuICByZXR1cm4gIWZpbmlzaGVkID8gKFxyXG4gICAgPEdhbWVGcmFtZVxyXG4gICAgICBjdXJyZW50V29yZHM9e3NodWZmbGVBcnJheSh3b3Jkcyl9XHJcbiAgICAgIHN0cmVhaz17c3RyZWFrfVxyXG4gICAgICBwb2ludHM9e3BvaW50c31cclxuICAgICAgY29ycmVjdHM9e2NvcnJlY3RzfVxyXG4gICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgIHNldFBvaW50cz17c2V0UG9pbnR9XHJcbiAgICAgIHNldFN0cmVhaz17c2V0U3RyZWFrfVxyXG4gICAgICBzZXRGaW5pc2hlZD17c2V0RmluaXNoZWR9XHJcbiAgICAgIHNldENvcnJlY3RzPXtzZXRDb3JyZWN0c31cclxuICAgICAgc2V0RXJyb3I9e3NldEVycm9yfVxyXG4gICAgLz5cclxuICApIDogKFxyXG4gICAgPFJlc3VsdFxyXG4gICAgICBwb2ludHM9e3BvaW50c31cclxuICAgICAgc2V0UG9pbnRzPXtzZXRQb2ludHN9XHJcbiAgICAgIHNldEFtb3VudD17c2V0QW1vdW50fVxyXG4gICAgICBzZXRDb3JyZWN0PXtzZXRDb3JyZWN0fVxyXG4gICAgICBzdHJlYWs9e21heFN0cmVha31cclxuICAgICAgY29ycmVjdD17Y29ycmVjdHN9XHJcbiAgICAgIGVycm9yPXtlcnJvcn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVQbGF5O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBnZXRVc2VyRGF0YSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vZ2V0VXNlckRhdGEnO1xyXG5pbXBvcnQgTGVhcm5lZFdvcmRzQVBJIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQVBJL0xlYXJuZWRXb3Jkc0FQSS9MZWFybmVkV29yZHNBUEknO1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0FQSS9TdGF0aXN0aWNBUEkvSURhdGEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBJUmVzdWx0IGZyb20gJy4vSW50ZXJmYWNlJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9SZXN1bHQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vU2xpZGVyL1NsaWRlcic7XHJcblxyXG5jb25zdCBSZXN1bHQgPSAoeyBjb3JyZWN0LCBlcnJvciwgcG9pbnRzLCBzdHJlYWssIHNldEFtb3VudCwgc2V0Q29ycmVjdCwgc2V0UG9pbnRzIH06IElSZXN1bHQpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgIGNvbnN0IHNpZ24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdXNlckRhdGE7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gdXNlckRhdGE7XHJcbiAgICAgICAgc2V0UG9pbnRzKHN0cmVhayk7XHJcbiAgICAgICAgc2V0QW1vdW50KDEpO1xyXG4gICAgICAgIHNldENvcnJlY3QoY29ycmVjdC5sZW5ndGggLyAyMCk7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgTGVhcm5lZFdvcmRzQVBJLmdldExlYXJuZWRXb3JkcyhpZCwgdG9rZW4pO1xyXG4gICAgICAgICAgY29uc3Qgc2VydmVyID0gZGF0YS5vcHRpb25hbC5sZWFybmVkV29yZHMuc3BsaXQoJyAnKTtcclxuICAgICAgICAgIGNvbnN0IHNlcnZlcmNvdW50c3ByaW50ID0gZGF0YS5vcHRpb25hbC5sZWFybmVkV29yZHNOdW1iZXJTcHJpbnQgYXMgRGF0YTtcclxuICAgICAgICAgIGNvbnN0IHNlcnZlcmNvdW50YXVkaW8gPSBkYXRhLm9wdGlvbmFsLmxlYXJuZWRXb3Jkc051bWJlckF1ZGlvIGFzIERhdGE7XHJcbiAgICAgICAgICBjb25zdCBjb3VudG5ldyA9IHNlcnZlcmNvdW50c3ByaW50W09iamVjdC5rZXlzKHNlcnZlcmNvdW50c3ByaW50KVswXV0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgY29uc3QgY291bnRuZXdhdWRpbyA9IHNlcnZlcmNvdW50YXVkaW9bT2JqZWN0LmtleXMoc2VydmVyY291bnRhdWRpbylbMF1dIGFzIG51bWJlcjtcclxuICAgICAgICAgIGNvcnJlY3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VydmVyLmluY2x1ZGVzKGl0ZW0ud29yZCkpIHtcclxuICAgICAgICAgICAgICBzZXJ2ZXIucHVzaChpdGVtLndvcmQpO1xyXG4gICAgICAgICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDApO1xyXG4gICAgICAgICAgY29uc3QgV29yZE51bWJlclNwcmludCA9IHsgW2RhdGVdOiBjb3VudG5ldyB9O1xyXG4gICAgICAgICAgY29uc3QgV29yZE51bWJlckF1ZGlvID0geyBbZGF0ZV06IGNvdW50ICsgY291bnRuZXdhdWRpbyB9O1xyXG4gICAgICAgICAgY29uc3QgbmV3TGVhcm5Xb3JkcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbHcgPSBMZWFybmVkV29yZHNBUEkuY3JlYXRlV29yZChpZCwgdG9rZW4sIDEsIHNlcnZlciwgV29yZE51bWJlclNwcmludCwgV29yZE51bWJlckF1ZGlvKTtcclxuICAgICAgICAgICAgYXdhaXQgTGVhcm5lZFdvcmRzQVBJLnVwZGF0ZVVzZXJMZWFybmVkV29yZHMobHcpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIG5ld0xlYXJuV29yZHMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3AoKTtcclxuICAgICAgfTtcclxuICAgICAgc2lnbigpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxTbGlkZXIgY29ycmVjdD17Y29ycmVjdH0gZXJyb3I9e2Vycm9yfSBwb2ludHM9e3BvaW50c30gLz5cclxuICAgICAgICA8TGluayB0bz17Jy9nYW1lcyd9PlxyXG4gICAgICAgICAgPEJ1dHRvbj7Qn9GA0L7QtNC+0LvQttC40YLRjCDRgtGA0LXQvdC40YDQvtCy0LrRgzwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9e2NsYXNzZXMudm9jYWJ1bGFyeX0gdG89eycvdm9jYWJ1bGFyeSd9PlxyXG4gICAgICAgICAg0Jog0YPRh9C10LHQvdC40LrRg1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSVNsaWRlciBmcm9tICcuL0ludGVyZmFjZSc7XHJcbmltcG9ydCBTdGF0aXN0aWNzIGZyb20gJy4vU3RhdGlzdGljcy9TdGF0aXN0aWNzJztcclxuaW1wb3J0IFdvcmRzU3VtbWFyeSBmcm9tICcuL1dvcmRzU3VtbWFyeS9Xb3Jkc1N1bW1hcnknO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1NsaWRlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoeyBlcnJvciwgY29ycmVjdCwgcG9pbnRzIH06IElTbGlkZXIpID0+IHtcclxuICBjb25zdCBjb3JyZWN0QW1vdW50ID0gY29ycmVjdC5sZW5ndGg7XHJcbiAgY29uc3QgZXJyb3JBbW91bnQgPSBlcnJvci5sZW5ndGg7XHJcbiAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoKGNvcnJlY3RBbW91bnQgLyAoY29ycmVjdEFtb3VudCArIGVycm9yQW1vdW50KSkgKiAxMDApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGVyX19jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGlubmVyICR7Y2xhc3Nlcy5pbm5lcn1gfT5cclxuICAgICAgICA8U3RhdGlzdGljcyBwZXJjZW50YWdlPXtwZXJjZW50YWdlfSBjb3JyZWN0QW1vdW50PXtjb3JyZWN0QW1vdW50fSBwb2ludHM9e3BvaW50c30gLz5cclxuICAgICAgICA8V29yZHNTdW1tYXJ5IGVycm9yPXtlcnJvcn0gY29ycmVjdD17Y29ycmVjdH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhcic7XHJcbmltcG9ydCBJU3RhdGlzdGljcyBmcm9tICcuL0ludGVyZmFjZSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU3RhdGlzdGljcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBTdGF0aXN0aWNzID0gKHsgcGVyY2VudGFnZSwgY29ycmVjdEFtb3VudCwgcG9pbnRzIH06IElTdGF0aXN0aWNzKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3R5bGUgfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlKSc7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlcn0gY2xhc3NOYW1lPXtgYXJyb3cgJHtjbGFzc2VzLmFycm93fWB9IC8+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT7QktCw0Ygg0YDQtdC30YPQu9GM0YLQsNGCIHtwb2ludHN9INC+0YfQutC+0LI8L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cclxuICAgICAgICDQl9CwINC/0YDQvtGF0L7QttC00LXQvdC40LUg0LjQs9GA0Ysg0LLRiyDQstGL0YPRh9C40LvQuCA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuYW1vdW50fT57Y29ycmVjdEFtb3VudH0g0YHQu9C+0LI8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPFByb2dyZXNzQmFyIHByb2dyZXNzPXtwZXJjZW50YWdlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRpc3RpY3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJU2VjdGlvbkhlYWRlciBmcm9tICcuL0ludGVyZmFjZSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU2VjdGlvbkhlYWRlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHsgdHlwZSwgYW1vdW50IH06IElTZWN0aW9uSGVhZGVyKSA9PiB7XHJcbiAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6IHR5cGUgPT09ICdjb3JyZWN0JyA/ICcjNThDODdFJyA6ICcjRkY2ODYyJyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+e3R5cGUgPT09ICdlcnJvcicgPyAn0J7RiNC40LHQvtC6JyA6ICfQl9C90LDRjid9PC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMuYW1vdW50fT5cclxuICAgICAgICB7YW1vdW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSVNlY3Rpb25JdGVtIGZyb20gJy4vSW50ZXJmYWNlJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9TZWN0aW9uSXRlbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBTRVJWRVIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9zZXJ2ZXJDb25zdCc7XHJcblxyXG5jb25zdCBTZWN0aW9uSXRlbSA9ICh7IHdvcmQgfTogSVNlY3Rpb25JdGVtKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjb25zdCBhdWRpbyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdhdWRpbycpIGFzIEhUTUxBdWRpb0VsZW1lbnQ7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1Db250YWluZXJ9PlxyXG4gICAgICA8YXVkaW8gY2xhc3NOYW1lPXtjbGFzc2VzLmF1ZGlvfSBzcmM9e2Ake1NFUlZFUn0vJHt3b3JkLmF1ZGlvfWB9IC8+XHJcbiAgICAgIDxkaXYgb25DbGljaz17KGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IGhhbmRsZXIoZSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdWRpb0J1dHRvbn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dENvbnRlbnR9PlxyXG4gICAgICAgIDxzcGFuPnt3b3JkLndvcmR9PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy53b3JkVHJhbnNsYXRlfT57d29yZC53b3JkVHJhbnNsYXRlfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkl0ZW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJU3VtbWFyeSBmcm9tICcuL0ludGVyZmFjZSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4vU2VjdGlvbkhlYWRlci9TZWN0aW9uSGVhZGVyJztcclxuaW1wb3J0IFNlY3Rpb25JdGVtIGZyb20gJy4vU2VjdGlvbkl0ZW0vU2VjdGlvbkl0ZW0nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1dvcmRzU3VtbWFyeS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBXb3Jkc1N1bW1hcnkgPSAoeyBlcnJvciwgY29ycmVjdCB9OiBJU3VtbWFyeSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyJykgYXMgSFRNTERpdkVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGVzdH0+XHJcbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtlcnJvci5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0eXBlPXsnZXJyb3InfSBhbW91bnQ9e2Vycm9yLmxlbmd0aH0+PC9TZWN0aW9uSGVhZGVyPlxyXG4gICAgICAgICAgICB7ZXJyb3IubWFwKCh3b3JkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNlY3Rpb25JdGVtIGtleT17d29yZC5pZH0gd29yZD17d29yZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHtjb3JyZWN0Lmxlbmd0aCA/IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9PjwvZGl2PiA6ICcnfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICcnXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ycmVjdC5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlciB0eXBlPXsnY29ycmVjdCd9IGFtb3VudD17Y29ycmVjdC5sZW5ndGh9PjwvU2VjdGlvbkhlYWRlcj5cclxuICAgICAgICAgICAge2NvcnJlY3QubWFwKCh3b3JkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNlY3Rpb25JdGVtIGtleT17d29yZC5pZH0gd29yZD17d29yZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgJydcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3Jkc1N1bW1hcnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlci9Mb2dvL0xvZ28nO1xyXG5pbXBvcnQgVG9HYW1lcyBmcm9tICcuL1RvR2FtZXMvVG9HYW1lcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgIDxMb2dvIC8+XHJcbiAgICA8TGluayB0bz17Jy9nYW1lcyd9PlxyXG4gICAgICA8VG9HYW1lcyAvPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1RvR2FtZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgVG9HYW1lcyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jcm9zc19fY29udGFpbmVyfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNyb3NzfT48L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvR2FtZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYW1lcyBmcm9tICcuLi9Wb2NhYnVsYXJ5L0dhbWVzL0dhbWVzJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9HYW1lcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBHYW1lc1BhZ2UgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICA8R2FtZXMgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVzUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9BdWRpb0J1dHRvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBTRVJWRVIgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9zZXJ2ZXJDb25zdCc7XHJcblxyXG5jb25zdCBBdWRpb0J1dHRvbiA9IChwcm9wczogeyBhdWRpbzogc3RyaW5nOyB3b3JkOiBzdHJpbmc7IG5leHRRPzogbnVtYmVyOyB0eXBlPzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgY29uc3QgcGxheUF1ZGlvID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYXVkaW9fXyR7dHlwZX1gKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17W2NsYXNzZXMudm9sdW1lLCBwcm9wcy50eXBlICYmIGNsYXNzZXMudm9sdW1lSW5HYW1lXS5qb2luKCcgJyl9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHBsYXlBdWRpbyhwcm9wcy53b3JkKX1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvdm9sdW1lLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDxhdWRpbyBjbGFzc05hbWU9e2BhdWRpb19fJHtwcm9wcy53b3JkfWB9IHNyYz17YCR7U0VSVkVSfS8ke3Byb3BzLmF1ZGlvfWB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXVkaW9CdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmRCdXR0b24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSUNhcmRCdXR0b24gZnJvbSAnLi9DYXJkQnV0dG9uSW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IENhcmRCdXR0b246IFJlYWN0LkZDPElDYXJkQnV0dG9uPiA9IChwcm9wczogSUNhcmRCdXR0b24pID0+IHtcclxuICBjb25zdCBjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuY29ycmVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICBwcm9wcy5yZWZyZXNoQW5zd2VyKHRydWUpO1xyXG4gICAgICBwcm9wcy5yZWZyZXNoKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvcHMucmVmcmVzaEFuc3dlcihmYWxzZSk7XHJcbiAgICAgIHByb3BzLnJlZnJlc2goZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e2NoYW5nZX1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5jb3JyZWN0ID8gJyM1OEM4N0UnIDogJyNGRjY4NjInIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jb3JyZWN0ID8gJ9CS0LXRgNC90L4nIDogJ9Cd0LXQstC10YDQvdC+J31cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0Fycm93RW5kQ2FyZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJQXJyb3dFbmQgZnJvbSAnLi9BcnJvd0VuZEludGVyZmFjZSc7XHJcblxyXG5jb25zdCBBcnJvd0VuZENhcmQ6IFJlYWN0LkZDPElBcnJvd0VuZD4gPSAocHJvcHM6IElBcnJvd0VuZCkgPT4gKFxyXG4gIDxkaXYgb25DbGljaz17cHJvcHMuc2xpZGV9IGNsYXNzTmFtZT17W2NsYXNzZXMuYXJyb3csIHByb3BzLmxlZnQgPyBjbGFzc2VzLmFycm93U3RhdCA6IGNsYXNzZXMuYXJyb3dFbmRdLmpvaW4oJyAnKX0+XHJcbiAgICA8aW1nXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd1N0YXRzfVxyXG4gICAgICBzcmM9e2AuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvJHtwcm9wcy5sZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0J31BcnJvd0dhbWUuc3ZnYH1cclxuICAgICAgYWx0PVwiYXJyb3dcIlxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFycm93RW5kQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnRIYW5kbGVyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmRFbmRHYW1lLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgSUNhcmRJbkdhbWUgZnJvbSAnLi9DYXJkRW5kR2FtZUludGVyZmFjZSc7XHJcbmltcG9ydCBDYXJkU2lkZXMgZnJvbSAnLi9DYXJkU2lkZXMvQ2FyZFNpZGVzJztcclxuaW1wb3J0IFdvcmRzQ29tcG9uZW50IGZyb20gJy4vV29yZHNDb21wb25lbnQvV29yZHNDb21wb25lbnQnO1xyXG5pbXBvcnQgV29yZExpc3QgZnJvbSAnLi9Xb3JkTGlzdC9Xb3JkTGlzdCc7XHJcbmltcG9ydCBMaW5rVG9kaWN0aW9uYXJ5IGZyb20gJy4vTGlua1RvRGljdGlvbmFyeS9MaW5rVG9kaWN0aW9uYXJ5JztcclxuaW1wb3J0IEF1ZGlvQnV0dG9uIGZyb20gJy4uLy4uL0F1ZGlvQnV0dG9uL0F1ZGlvQnV0dG9uJztcclxuaW1wb3J0IEFycm93RW5kQ2FyZCBmcm9tICcuL0Fycm93RW5kQ2FyZC9BcnJvd0VuZENhcmQnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhcic7XHJcblxyXG5jb25zdCBDYXJkRW5kR2FtZSA9IChwcm9wczogSUNhcmRJbkdhbWUpID0+IHtcclxuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qgc2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmltYXRpb24oIWFuaW1hdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5jb250YWluZXJFbmRDYXJkLCAhYW5pbWF0aW9uID8gY2xhc3Nlcy5hbmltYXRpb25SaWdodCA6IGNsYXNzZXMuYW5pbWF0aW9uTGVmdF0uam9pbignICcpfT5cclxuICAgICAgPENhcmRTaWRlcz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXN1bHR9PtCS0LDRiCDRgNC10LfRg9C70YzRgtCw0YIge3Byb3BzLnNjb3JlfSDQvtGH0LrQvtCyPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud29yZHNBbW91bnR9PlxyXG4gICAgICAgICAg0JfQsCDQv9GA0L7RhdC+0LbQtNC10L3QuNC1INC40LPRgNGLINCy0Ysg0LLRi9GD0YfQuNC70Lgge3Byb3BzLmxlYXJuZWQubGVuZ3RofSDRgdC70L7QslxyXG4gICAgICAgICAgeyhwcm9wcy5sZWFybmVkLmxlbmd0aCA9PT0gMSAmJiAn0L4nKSB8fCAocHJvcHMubGVhcm5lZC5sZW5ndGggPD0gNCAmJiBwcm9wcy5sZWFybmVkLmxlbmd0aCA+IDAgJiYgJ9CwJyl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTWFzY290fT5cclxuICAgICAgICAgIDxQcm9ncmVzc0JhciBwcm9ncmVzcz17KHByb3BzLmxlYXJuZWQubGVuZ3RoIC8gMjApICogMTAwfSBzcHJpbnQ9e3RydWV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFycm93RW5kQ2FyZCBzbGlkZT17c2xpZGV9IGxlZnQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gdG89XCIvZ2FtZXNcIj5cclxuICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0Ywg0YLRgNC10L3QuNGA0L7QstC60YNcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8TGlua1RvZGljdGlvbmFyeSAvPlxyXG4gICAgICA8L0NhcmRTaWRlcz5cclxuXHJcbiAgICAgIDxDYXJkU2lkZXM+XHJcbiAgICAgICAgPFdvcmRzQ29tcG9uZW50PlxyXG4gICAgICAgICAgPFdvcmRMaXN0IG1pc3Rha2VzPXtwcm9wcy5taXN0YWtlc30gc2lkZT1cIm1pc3Rha2VzXCIgbGVhcm5lZD17cHJvcHMubGVhcm5lZH0gaGVhZGVyPVwi0J7RiNC40LHQvtC6XCIgLz5cclxuICAgICAgICAgIDxXb3JkTGlzdCBtaXN0YWtlcz17cHJvcHMubWlzdGFrZXN9IHNpZGU9XCJsZWFybmVkXCIgbGVhcm5lZD17cHJvcHMubGVhcm5lZH0gaGVhZGVyPVwi0JfQvdCw0Y5cIiAvPlxyXG4gICAgICAgIDwvV29yZHNDb21wb25lbnQ+XHJcbiAgICAgICAgPEFycm93RW5kQ2FyZCBzbGlkZT17c2xpZGV9IGxlZnQ9e3RydWV9IC8+XHJcblxyXG4gICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gdG89XCIvZ2FtZXNcIj5cclxuICAgICAgICAgICAg0J/RgNC+0LTQvtC70LbQuNGC0Ywg0YLRgNC10L3QuNGA0L7QstC60YNcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8TGlua1RvZGljdGlvbmFyeSAvPlxyXG4gICAgICA8L0NhcmRTaWRlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkRW5kR2FtZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jYXJkU2lkZXMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDYXJkU2lkZXM6IFJlYWN0LkZDPFByb3BzV2l0aENoaWxkcmVuPiA9ICh7IGNoaWxkcmVuIH0pID0+IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PntjaGlsZHJlbn08L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRTaWRlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTGlua1RvRGljdGlvbmFyeS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBMaW5rVG9kaWN0aW9uYXJ5ID0gKCkgPT4gKFxyXG4gIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy50b0RpY3Rpb25hcnl9IGhyZWY9XCIjI1wiPlxyXG4gICAg0Jog0YPRh9C10LHQvdC40LrRg1xyXG4gIDwvYT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtUb2RpY3Rpb25hcnk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vV29yZExpc3QubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFdvcmRMaXN0SGVhZGVyIGZyb20gJy4vV29yZExpc3RIZWFkZXIvV29yZExpc3RIZWFkZXInO1xuaW1wb3J0IElXb3JkTGlzdCBmcm9tICcuL3dvcmRMaXN0SW50ZXJmYWNlJztcbmltcG9ydCBBdWRpb0J1dHRvbiBmcm9tICcuLi8uLi8uLi9BdWRpb0J1dHRvbi9BdWRpb0J1dHRvbic7XG5cbmNvbnN0IFdvcmRMaXN0OiBSZWFjdC5GQzxJV29yZExpc3Q+ID0gKHByb3BzOiBJV29yZExpc3QpID0+IHtcbiAgY29uc3QgbWlzdGFrZXNGaWx0ZXJlZCA9IHByb3BzLm1pc3Rha2VzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdW5kZWZpbmVkKTtcbiAgY29uc3QgbGVhcm5lZEZpbHRlcmVkID0gcHJvcHMubGVhcm5lZC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHVuZGVmaW5lZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdvcmRMaXN0SGVhZGVyIGxlYXJuZWQ9e3Byb3BzLmxlYXJuZWR9IG1pc3Rha2VzPXtwcm9wcy5taXN0YWtlc30gc2lkZT17cHJvcHMuc2lkZX0gaGVhZGVyPXtwcm9wcy5oZWFkZXJ9IC8+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9wcy5zaWRlID09PSAnbWlzdGFrZXMnXG4gICAgICAgICAgPyBtaXN0YWtlc0ZpbHRlcmVkLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgICAgbWlzdGFrZXNGaWx0ZXJlZC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy53b3JkfT5cbiAgICAgICAgICAgICAgICA8QXVkaW9CdXR0b24gYXVkaW89e2l0ZW0uYXVkaW99IHdvcmQ9e2l0ZW0ud29yZH0gLz5cblxuICAgICAgICAgICAgICAgIHtgICR7aXRlbS53b3JkfSAtICR7aXRlbS53b3JkVHJhbnNsYXRlfSBgfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IGxlYXJuZWRGaWx0ZXJlZC5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgIGxlYXJuZWRGaWx0ZXJlZC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy53b3JkfT5cbiAgICAgICAgICAgICAgICA8QXVkaW9CdXR0b24gYXVkaW89e2l0ZW0uYXVkaW99IHdvcmQ9e2l0ZW0ud29yZH0gLz5cblxuICAgICAgICAgICAgICAgIHtgICR7aXRlbS53b3JkfSAtICR7aXRlbS53b3JkVHJhbnNsYXRlfSBgfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vV29yZExpc3RIZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSVdvcmRMaXN0IGZyb20gJy4uL3dvcmRMaXN0SW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IFdvcmRMaXN0SGVhZGVyOiBSZWFjdC5GQzxJV29yZExpc3Q+ID0gKHByb3BzOiBJV29yZExpc3QpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgPGgzPntwcm9wcy5oZWFkZXJ9PC9oMz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zaWRlID09PSAnbWlzdGFrZXMnID8gY2xhc3Nlcy5taXN0YWtlc0luZGljYXRpb3IgOiBjbGFzc2VzLmxlYXJuZWRJbmRpY2F0b3J9PlxyXG4gICAgICB7cHJvcHMuc2lkZSA9PT0gJ21pc3Rha2VzJyA/IHByb3BzLm1pc3Rha2VzLmxlbmd0aCA6IHByb3BzLmxlYXJuZWQubGVuZ3RofVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkTGlzdEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Xb3Jkc0NvbXBvbmVudC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFdvcmRzQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wc1dpdGhDaGlsZHJlbj4gPSAoeyBjaGlsZHJlbiB9KSA9PiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53b3Jkc30+e2NoaWxkcmVufTwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgV29yZHNDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZFNjb3JlUG9pbnRzIGZyb20gJy4uL0NhcmRTY29yZVBvaW50cy9DYXJkU2NvcmVQb2ludHMnO1xyXG5pbXBvcnQgQ2FyZFdvcmRHdWVzc1BhcnQgZnJvbSAnLi4vQ2FyZFdvcmRHdWVzc1BhcnQvQ2FyZFdvcmRHdWVzc1BhcnQnO1xyXG5pbXBvcnQgQ2FyZEJ1dHRvbiBmcm9tICcuLi9DYXJkQnV0dG9uL0NhcmRCdXR0b24nO1xyXG5pbXBvcnQgSUNhcmRTcHJpbnQgZnJvbSAnLi4vQ2FyZFNwcmludEludGVyZmFjZSc7XHJcbmltcG9ydCBTY29yZUdhbWUgZnJvbSAnLi4vLi4vU2NvcmVHYW1lL1Njb3JlR2FtZSc7XHJcbmltcG9ydCBDb3VudGVyR2FtZSBmcm9tICcuLi8uLi9Db3VudGVyR2FtZS9Db3VudGVyR2FtZSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZEluR2FtZS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJQ2FyZEluR2FtZSBmcm9tICcuL0NhcmRJbkdhbWVJbnRlcmZhY2UnO1xyXG5pbXBvcnQgQXVkaW9CdXR0b24gZnJvbSAnLi4vLi4vQXVkaW9CdXR0b24vQXVkaW9CdXR0b24nO1xyXG5cclxuY29uc3QgQ2FyZEluR2FtZSA9IChwcm9wczogSUNhcmRJbkdhbWUpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQ2FyZFVwcGVyUGFydH0+XHJcbiAgICAgIDxDYXJkU2NvcmVQb2ludHMgZG9uZT17cHJvcHMuZG9uZVswXVswXX0gY29ycmVjdD17cHJvcHMuY29ycmVjdFswXVsxXX0gLz5cclxuICAgICAgPENhcmRTY29yZVBvaW50cyBkb25lPXtwcm9wcy5kb25lWzFdWzBdfSBjb3JyZWN0PXtwcm9wcy5jb3JyZWN0WzFdWzFdfSAvPlxyXG4gICAgICA8Q2FyZFNjb3JlUG9pbnRzIGRvbmU9e3Byb3BzLmRvbmVbMl1bMF19IGNvcnJlY3Q9e3Byb3BzLmNvcnJlY3RbMl1bMV19IC8+XHJcbiAgICAgIDxBdWRpb0J1dHRvbiBhdWRpbz17cHJvcHMud29yZEd1ZXNzLmF1ZGlvfSB3b3JkPXtwcm9wcy53b3JkR3Vlc3Mud29yZH0gbmV4dFE9e3Byb3BzLm5leHRRfSB0eXBlPXt0cnVlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Q2FyZFdvcmRHdWVzc1BhcnQgT3VyR3Vlc3M9e3Byb3BzLm91ckd1ZXNzfSBHdWVzc1dvcmQ9e3Byb3BzLndvcmRHdWVzc30gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY290cm9sc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPENhcmRCdXR0b24gY29ycmVjdD17dHJ1ZX0gcmVmcmVzaD17cHJvcHMucmVmcmVzaH0gcmVmcmVzaEFuc3dlcj17cHJvcHMucmVmcmVzaEFuc3dlcn0gLz5cclxuICAgICAgICA8Q2FyZEJ1dHRvbiBjb3JyZWN0PXtmYWxzZX0gcmVmcmVzaD17cHJvcHMucmVmcmVzaH0gcmVmcmVzaEFuc3dlcj17cHJvcHMucmVmcmVzaEFuc3dlcn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93c30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY290cm9sc0NvbnRhaW5lcl9fYXJyb3d9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiMjXCI+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL2ljb25zL0Fycm93TGVmdENhcmQuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3Ryb2xzQ29udGFpbmVyX19hcnJvd30+XHJcbiAgICAgICAgICA8YSBocmVmPVwiIyNcIj5cclxuICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3dSaWdodENhcmQuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRJbkdhbWU7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZFNjb3JlUG9pbnRzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IElTY29yZVBvaW50IGZyb20gJy4vU2NvcmVJbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgQ2FyZFNjb3JlUG9pbnRzOiBSZWFjdC5GQzxJU2NvcmVQb2ludD4gPSAocHJvcHM6IElTY29yZVBvaW50KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5kb25lID8gKHByb3BzLmNvcnJlY3QgPyAnIzU4Qzg3RScgOiAnI0ZGNjg2MicpIDogJyNEOUQ5RDknIH19XHJcbiAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxyXG4gID5cclxuICAgIHtwcm9wcy5kb25lICYmIDxpbWcgc3JjPXtgLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zLyR7cHJvcHMuY29ycmVjdCA/ICdjb3JyZWN0JyA6ICd3cm9uZyd9LnN2Z2B9PjwvaW1nPn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRTY29yZVBvaW50cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZFNwaXJudC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgSUNhcmRTcHJpbnQgZnJvbSAnLi9DYXJkU3ByaW50SW50ZXJmYWNlJztcbmltcG9ydCBTY29yZUdhbWUgZnJvbSAnLi4vU2NvcmVHYW1lL1Njb3JlR2FtZSc7XG5pbXBvcnQgQ2FyZEluR2FtZSBmcm9tICcuL0NhcmRJbkdhbWUvQ2FyZEluR2FtZSc7XG5pbXBvcnQgQ2FyZEVuZEdhbWUgZnJvbSAnLi9DYXJkRW5kR2FtZS9DYXJkRW5kR2FtZSc7XG5cbmNvbnN0IENhcmRTcGlybnQ6IFJlYWN0LkZDPElDYXJkU3ByaW50PiA9IChwcm9wczogSUNhcmRTcHJpbnQpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICB7cHJvcHMuZ2FtZSAmJiA8U2NvcmVHYW1lIHNjb3JlPXtwcm9wcy5zY29yZX0gLz59XG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmdhbWUgPyBjbGFzc2VzLmNhcmQgOiBjbGFzc2VzLmNhcmRFbmR9PlxuICAgICAge3Byb3BzLmdhbWUgPyAoXG4gICAgICAgIDxDYXJkSW5HYW1lXG4gICAgICAgICAgc2NvcmU9e3Byb3BzLnNjb3JlfVxuICAgICAgICAgIGRvbmU9e3Byb3BzLmRvbmV9XG4gICAgICAgICAgY29ycmVjdD17cHJvcHMuY29ycmVjdH1cbiAgICAgICAgICByZWZyZXNoPXtwcm9wcy5yZWZyZXNofVxuICAgICAgICAgIHJlZnJlc2hBbnN3ZXI9e3Byb3BzLnJlZnJlc2hBbnN3ZXJ9XG4gICAgICAgICAgb3VyR3Vlc3M9e3Byb3BzLm91ckd1ZXNzfVxuICAgICAgICAgIHdvcmRHdWVzcz17cHJvcHMud29yZEd1ZXNzfVxuICAgICAgICAgIG5leHRRPXtwcm9wcy5uZXh0UX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDYXJkRW5kR2FtZVxuICAgICAgICAgIGJhY2tUb0dhbWU9e3Byb3BzLmJhY2tUb0dhbWV9XG4gICAgICAgICAgZ2FtZT17cHJvcHMuZ2FtZX1cbiAgICAgICAgICBsZWFybmVkPXtwcm9wcy5sZWFybmVkfVxuICAgICAgICAgIG1pc3Rha2VzPXtwcm9wcy5taXN0YWtlc31cbiAgICAgICAgICBzY29yZT17cHJvcHMuc2NvcmV9XG4gICAgICAgICAgZG9uZT17cHJvcHMuZG9uZX1cbiAgICAgICAgICBjb3JyZWN0PXtwcm9wcy5jb3JyZWN0fVxuICAgICAgICAgIHJlZnJlc2g9e3Byb3BzLnJlZnJlc2h9XG4gICAgICAgICAgcmVmcmVzaEFuc3dlcj17cHJvcHMucmVmcmVzaEFuc3dlcn1cbiAgICAgICAgICBvdXJHdWVzcz17cHJvcHMub3VyR3Vlc3N9XG4gICAgICAgICAgd29yZEd1ZXNzPXtwcm9wcy53b3JkR3Vlc3N9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBDYXJkU3Bpcm50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJR3Vlc3MgZnJvbSAnLi9HdWVzc0ludGVyZmFjZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmRXb3JkR3Vlc3NQYXJ0Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ2FyZFdvcmRHdWVzc1BhcnQ6IFJlYWN0LkZDPElHdWVzcz4gPSAocHJvcHM6IElHdWVzcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5HdWVzc1dvcmR9PiB7cHJvcHMuR3Vlc3NXb3JkLndvcmR9PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5PdXJHdWVzc30+IHtwcm9wcy5PdXJHdWVzcy53b3JkVHJhbnNsYXRlfTwvc3Bhbj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkV29yZEd1ZXNzUGFydDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ291bnRlckdhbWUubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQ291bnRlckdhbWUgPSAocHJvcHM6IHsgY291bnRlcjogbnVtYmVyIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgPGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGltZXIuc3ZnXCIgYWx0PVwidGltZXJcIiAvPlxyXG4gICAge3Byb3BzLmNvdW50ZXJ9XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyR2FtZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0dhbWVIZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlci9Mb2dvL0xvZ28nO1xyXG5cclxuY29uc3QgR2FtZUhlYWRlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgPExvZ28gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNyb3NzfT5cclxuICAgICAgPExpbmsgdG89XCIvZ2FtZXNcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uL2Fzc2V0cy9pY29ucy9jcm9zcy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1Njb3JlR2FtZS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNjb3JlR2FtZSA9IChwcm9wczogeyBzY29yZTogbnVtYmVyIH0pID0+IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+e3Byb3BzLnNjb3JlfTwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVHYW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9TcHJpbnREZXNjcmlwdGlvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBTcHJpbnREZXNjcmlwdGlvbiA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+0KHQv9GA0LjQvdGCPC9oMz5cclxuICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAg0J/QvtC/0YDQvtCx0YPQuSDRg9Cz0LDQtNCw0YLRjCDQutCw0Log0LzQvtC20L3QviDQsdC+0LvRjNGI0LUg0YHQu9C+0LIg0LfQsCAzMCDRgdC10LrRg9C90LQuIDxiciAvPiDQo9C/0YDQsNCy0LvRj9GC0Ywg0LjQs9GA0L7QuSDQvNC+0LbQvdC+INC60LDQuiDQvNGL0YjQutC+0LksINGC0LDQuiDQuCDQutC70LDQstC40YjQsNC80Lgg0L3QsFxyXG4gICAgICDQutC70LDQstC40LDRgtGD0YDQtS5cclxuICAgIDwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcmludERlc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vRGlmZmljdWx0eS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJRGlmZmljdWx0eSBmcm9tICcuL0RpZmZpY3VsdHlJbnRlcmZhc2UnO1xyXG5cclxuY29uc3QgRGlmZmljdWx0eTogUmVhY3QuRkM8SURpZmZpY3VsdHk+ID0gKHByb3BzOiBJRGlmZmljdWx0eSkgPT4ge1xyXG4gIC8vIGNvbnN0IFtkaWZmaWN1bHR5Q3VyLCBzZXREaWZmaWN1bHR5Q3VyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNoYW5nZURpZiA9IChldmVudDogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJ1dHRvbl0nKTtcclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMuYWN0aXZlKSA/IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzLmFjdGl2ZSkgOiAwKSk7XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50O1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xyXG4gICAgICBjb25zdCBzcGFuID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgc3Bhbi5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuYWN0aXZlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuYWN0aXZlKTtcclxuICAgIH1cclxuICAgIHByb3BzLmFjdGl2ZUNoYW5nZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBsZXZlbCA9IE51bWJlcihwcm9wcy5pZCk7XHJcblxyXG4gICAgY29uc3QgYSA9ICgpID0+IHtcclxuICAgICAgcHJvcHMuY2hhbmdlKGxldmVsKTtcclxuICAgIH07XHJcbiAgICBhKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj1cIiMjXCIgb25DbGljaz17Y2hhbmdlRGlmfSBkYXRhLWJ1dHRvbj17J2J1dHRvbid9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGlkPXtwcm9wcy5pZC50b1N0cmluZygpfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9Pntwcm9wcy5kaWZmaWN1bHR5fTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlmZmljdWx0eTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERJRkZJQ1VMVFkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL2RpZmZpY3VsdHlMZXZlbHMnO1xyXG5pbXBvcnQgRGlmZmljdWx0eSBmcm9tICcuL0RpZmZpY3VsdHkvRGlmZmljdWx0eSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU3ByaW50RGlmZmljdWx0eS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcclxuXHJcbmNvbnN0IFNwcmludERpZmZpY3VsdHkgPSAocHJvcHM6IHsgY2hhbmdlOiAoZGlmZmljdWx0eUxldmVsOiBudW1iZXIpID0+IHZvaWQgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+0JLRi9Cx0LXRgNC40YLQtSDRg9GA0L7QstC10L3RjDo8L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtESUZGSUNVTFRZLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxEaWZmaWN1bHR5IGRpZmZpY3VsdHk9e2l0ZW0ubGV2ZWx9IGNoYW5nZT17cHJvcHMuY2hhbmdlfSBpZD17aXRlbS5pZH0gYWN0aXZlQ2hhbmdlPXtzZXRBY3RpdmV9IGtleT17aW5kZXh9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IHRvPVwiL3NwcmludEdhbWVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17W2NsYXNzZXMuYnV0dG9uLCBhY3RpdmUgPyBjbGFzc2VzLmFjdGl2ZSA6IGNsYXNzZXMubm90QWN0aXZlXS5qb2luKCcgJyl9PtCd0LDRh9Cw0YLRjDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByaW50RGlmZmljdWx0eTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU3ByaW50R2FtZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQ2FyZFNwaXJudCBmcm9tICcuLi9DYXJkU3ByaW50L0NhcmRTcGlybnQnO1xuaW1wb3J0IEdhbWVIZWFkZXIgZnJvbSAnLi4vR2FtZUhlYWRlci9HYW1lSGVhZGVyJztcbmltcG9ydCBXb3JkIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQVBJL0RpY3Rpb25hcnlBUEkvV29yZCc7XG5pbXBvcnQgQ291bnRlckdhbWUgZnJvbSAnLi4vQ291bnRlckdhbWUvQ291bnRlckdhbWUnO1xuaW1wb3J0IExlYXJuZWRXb3Jkc0FQSSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0FQSS9MZWFybmVkV29yZHNBUEkvTGVhcm5lZFdvcmRzQVBJJztcbmltcG9ydCBEYXRhIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQVBJL1N0YXRpc3RpY0FQSS9JRGF0YSc7XG5pbXBvcnQgZ2V0VXNlckRhdGEgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2dldFVzZXJEYXRhJztcblxuY29uc3QgU3ByaW50R2FtZSA9IChwcm9wczoge1xuICBhcnJheTogV29yZFtdO1xuICBzZXRQb2ludHM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICBzZXRBbW91bnQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICBzZXRDb3JyZWN0OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn0pID0+IHtcbiAgY29uc3QgZW1wdHlTdGF0ZSA9IFtcbiAgICBbZmFsc2UsIGZhbHNlXSxcbiAgICBbZmFsc2UsIGZhbHNlXSxcbiAgICBbZmFsc2UsIGZhbHNlXSxcbiAgXTtcblxuICBjb25zdCBbZ2FtZVN0YWdlLCBzZXRHYW1lU3RhZ2VdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW25leHRRLCBzZXROZXh0UV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBiYWNrVG9HYW1lID0gKCkgPT4ge1xuICAgIHNldEdhbWVTdGFnZSghZ2FtZVN0YWdlKTtcbiAgfTtcblxuICBjb25zdCBbeFNjb3JlLCBzZXRYU2NvcmVdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgW0FycmF5R2FtZSwgc2V0QXJyYXlHYW1lXSA9IHVzZVN0YXRlKHByb3BzLmFycmF5LnNsaWNlKCkpO1xuICBjb25zdCBbbWlzdGFrZXMsIHNldE1pc3Rha2VzXTogW1dvcmRbXSwgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248V29yZFtdPj5dID0gdXNlU3RhdGU8V29yZFtdPihbXSk7XG4gIGNvbnN0IFtsZWFybmVkLCBzZXRMZWFybmVkXTogW1dvcmRbXSwgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248V29yZFtdPj5dID0gdXNlU3RhdGU8V29yZFtdPihbXSk7XG5cbiAgY29uc3QgW3RpbWVsZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSgyICogNjApO1xuXG4gIGNvbnN0IFtpc0NvdW50aW5nLCBzZXRJc0NvdW50aW5nXSA9IHVzZVN0YXRlKHRpbWVsZWZ0KTtcblxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW1xuICAgIFtmYWxzZSwgZmFsc2VdLFxuICAgIFtmYWxzZSwgZmFsc2VdLFxuICAgIFtmYWxzZSwgZmFsc2VdLFxuICBdKTtcblxuICBjb25zdCBbcG9pbnROdW1iZXIsIHNldFBvaW50TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcG9pbnRJbkFSb3csIHNldFBvaW50SW5BUm93XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcG9pbnRJbkFSb3dTdGF0LCBzZXRQb2ludEluQVJvd1N0YXRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvdXJBbnN3ZXIsIHNldG91ckFuc3dlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvdXJHdWVzcywgc2V0T3VyR3Vlc3NdID0gdXNlU3RhdGUoQXJyYXlHYW1lW01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogQXJyYXlHYW1lLmxlbmd0aCAtIDEpXSk7XG4gIGNvbnN0IFt3b3JkR3Vlc3MsIHNldFdvcmRHdWVzc10gPSB1c2VTdGF0ZShBcnJheUdhbWVbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBBcnJheUdhbWUubGVuZ3RoIC0gMSldKTtcblxuICBjb25zdCBnZXRvdXJHdWVzcyA9ICgpID0+IHtcbiAgICBsZXQgY29ycmVjdDtcbiAgICBpZiAoQXJyYXlHYW1lLmxlbmd0aCA+IDIpIHtcbiAgICAgIGNvcnJlY3QgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3JyZWN0ID0gMTtcbiAgICB9XG4gICAgaWYgKGNvcnJlY3QgPT09IDEpIHtcbiAgICAgIHNldEFuc3dlcih0cnVlKTtcblxuICAgICAgY29uc3QgbnVtYmVyID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBBcnJheUdhbWUubGVuZ3RoIC0gMSk7XG4gICAgICBpZiAobnVtYmVyID09PSAtMSkge1xuICAgICAgICBzZXRHYW1lU3RhZ2UoZmFsc2UpO1xuICAgICAgICBwcm9wcy5zZXRQb2ludHMocG9pbnRJbkFSb3dTdGF0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE91ckd1ZXNzKEFycmF5R2FtZVtudW1iZXJdKTtcbiAgICAgICAgc2V0V29yZEd1ZXNzKEFycmF5R2FtZVtudW1iZXJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbnVtYmVyVXAgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIEFycmF5R2FtZS5sZW5ndGggLSAxKTtcbiAgICAgIGlmIChudW1iZXJVcCA9PT0gLTEpIHtcbiAgICAgICAgc2V0R2FtZVN0YWdlKGZhbHNlKTtcbiAgICAgICAgcHJvcHMuc2V0UG9pbnRzKHBvaW50SW5BUm93U3RhdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRBbnN3ZXIoZmFsc2UpO1xuICAgICAgICBzZXRPdXJHdWVzcyhBcnJheUdhbWVbbnVtYmVyVXBdKTtcbiAgICAgICAgbGV0IG51bWJlckRvd24gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIEFycmF5R2FtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKG51bWJlckRvd24gIT09IG51bWJlclVwKSB7XG4gICAgICAgICAgc2V0V29yZEd1ZXNzKEFycmF5R2FtZVtudW1iZXJEb3duXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgbnVtYmVyRG93biA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogQXJyYXlHYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH0gd2hpbGUgKG51bWJlckRvd24gPT09IG51bWJlclVwKTtcbiAgICAgICAgICBzZXRXb3JkR3Vlc3MoQXJyYXlHYW1lW251bWJlckRvd25dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWZyZXNoT3VyQW5zd2VyID0gKGNvcnJlY3Q6IGJvb2xlYW4pID0+IChjb3JyZWN0ID8gc2V0b3VyQW5zd2VyKHRydWUpIDogc2V0b3VyQW5zd2VyKGZhbHNlKSk7XG5cbiAgY29uc3QgcmVmcmVzaFBvaW50ID0gKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgIGxldCBwb2ludDtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBwb2ludCA9IFt0cnVlLCB0cnVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9pbnQgPSBbdHJ1ZSwgZmFsc2VdO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnQ7XG4gIH07XG5cbiAgY29uc3QgY29ycmVjdEFuc3dlciA9ICgpID0+IHtcbiAgICBsZXQgbmV3U3RhdGU7XG4gICAgaWYgKHBvaW50TnVtYmVyKSB7XG4gICAgICBuZXdTdGF0ZSA9IHN0YXRlLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0YXRlID0gZW1wdHlTdGF0ZTtcbiAgICB9XG4gICAgc2V0UG9pbnRJbkFSb3cocG9pbnRJbkFSb3cgKyAxKTtcbiAgICBpZiAocG9pbnRJbkFSb3cgPiBwb2ludEluQVJvd1N0YXQpIHtcbiAgICAgIHNldFBvaW50SW5BUm93U3RhdChwb2ludEluQVJvdyk7XG4gICAgfVxuICAgIHNldFNjb3JlKHNjb3JlICsgMTAgKiB4U2NvcmUpO1xuICAgIGNvbnN0IGNvcnJlY3RXb3JkID0gcHJvcHMuYXJyYXkuZmlsdGVyKChpdGVtKSA9PiBpdGVtID09PSB3b3JkR3Vlc3MpWzBdO1xuICAgIGlmICghbWlzdGFrZXMuaW5jbHVkZXMoY29ycmVjdFdvcmQpICYmIG91ckd1ZXNzID09PSB3b3JkR3Vlc3MgJiYgIWxlYXJuZWQuaW5jbHVkZXMoY29ycmVjdFdvcmQpKSB7XG4gICAgICBzZXRMZWFybmVkKFsuLi5sZWFybmVkLCBjb3JyZWN0V29yZF0pO1xuICAgICAgY29uc3QgbmV3QXJyYXkgPSBBcnJheUdhbWUuc2xpY2UoKTtcbiAgICAgIG5ld0FycmF5LnNwbGljZShuZXdBcnJheS5pbmRleE9mKGNvcnJlY3RXb3JkKSwgMSk7XG4gICAgICBpZiAobmV3QXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldEdhbWVTdGFnZShmYWxzZSk7XG4gICAgICAgIHByb3BzLnNldFBvaW50cyhwb2ludEluQVJvd1N0YXQpO1xuICAgICAgfVxuICAgICAgc2V0QXJyYXlHYW1lKG5ld0FycmF5KTtcbiAgICB9IGVsc2UgaWYgKG1pc3Rha2VzLmluY2x1ZGVzKGNvcnJlY3RXb3JkKSAmJiBvdXJHdWVzcyA9PT0gd29yZEd1ZXNzICYmICFsZWFybmVkLmluY2x1ZGVzKGNvcnJlY3RXb3JkKSkge1xuICAgICAgY29uc3QgbmV3QXJyYXkgPSBBcnJheUdhbWUuc2xpY2UoKTtcbiAgICAgIG5ld0FycmF5LnNwbGljZShuZXdBcnJheS5pbmRleE9mKGNvcnJlY3RXb3JkKSwgMSk7XG4gICAgICBpZiAobmV3QXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldEdhbWVTdGFnZShmYWxzZSk7XG4gICAgICAgIHByb3BzLnNldFBvaW50cyhwb2ludEluQVJvd1N0YXQpO1xuICAgICAgfVxuICAgICAgc2V0QXJyYXlHYW1lKG5ld0FycmF5KTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludFN0YXRlTmV3OiBib29sZWFuW10gPSByZWZyZXNoUG9pbnQodHJ1ZSk7XG4gICAgbmV3U3RhdGVbcG9pbnROdW1iZXJdID0gcG9pbnRTdGF0ZU5ldztcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG4gIGNvbnN0IHdyb25nQW5zd2VyID0gKCkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZTtcbiAgICBpZiAocG9pbnROdW1iZXIpIHtcbiAgICAgIG5ld1N0YXRlID0gc3RhdGUuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3RhdGUgPSBlbXB0eVN0YXRlO1xuICAgIH1cbiAgICBzZXRQb2ludEluQVJvdygwKTtcbiAgICBjb25zdCBwb2ludFN0YXRlTmV3OiBib29sZWFuW10gPSByZWZyZXNoUG9pbnQoZmFsc2UpO1xuICAgIG5ld1N0YXRlW3BvaW50TnVtYmVyXSA9IHBvaW50U3RhdGVOZXc7XG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0b3VyR3Vlc3MoKTtcbiAgICBpZiAobmV4dFEgIT09IDApIHtcbiAgICAgIGlmIChwb2ludE51bWJlciA8IDIpIHtcbiAgICAgICAgY29uc3QgbmV3Q291bnQgPSBwb2ludE51bWJlciArIDE7XG4gICAgICAgIHNldFBvaW50TnVtYmVyKG5ld0NvdW50KTtcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gb3VyQW5zd2VyKSB7XG4gICAgICAgICAgY29ycmVjdEFuc3dlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdyb25nQW5zd2VyKCk7XG4gICAgICAgICAgaWYgKCFtaXN0YWtlcy5pbmNsdWRlcyh3b3JkR3Vlc3MpKSB7XG4gICAgICAgICAgICBzZXRNaXN0YWtlcyhbLi4ubWlzdGFrZXMsIHdvcmRHdWVzc10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UG9pbnROdW1iZXIoMCk7XG4gICAgICAgIGlmIChhbnN3ZXIgPT09IG91ckFuc3dlcikge1xuICAgICAgICAgIGNvcnJlY3RBbnN3ZXIoKTtcbiAgICAgICAgICBzZXRTY29yZShzY29yZSArIDEwICogeFNjb3JlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3cm9uZ0Fuc3dlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbbmV4dFFdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBteUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0SXNDb3VudGluZyhpc0NvdW50aW5nIC0gMSk7XG4gICAgICBzZXRUaW1lTGVmdCgocHJldlRpbWUpID0+IChwcmV2VGltZSA+PSAwID8gcHJldlRpbWUgLSAxIDogMCkpO1xuXG4gICAgICBpZiAodGltZWxlZnQgPT09IDApIHtcbiAgICAgICAgcHJvcHMuc2V0UG9pbnRzKHBvaW50SW5BUm93U3RhdCk7XG4gICAgICAgIHNldEdhbWVTdGFnZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW3RpbWVsZWZ0XSk7XG5cbiAgY29uc3QgcmVmcmVzaCA9IChidXR0b25BbnN3ZXI6IGJvb2xlYW4pID0+IHtcbiAgICBzZXROZXh0UShuZXh0USArIDEpO1xuICB9O1xuXG4gIGRvY3VtZW50Lm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5LCBrZXlDb2RlIH0gPSBldmVudDtcbiAgICBpZiAoa2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHJlZnJlc2hPdXJBbnN3ZXIodHJ1ZSk7XG4gICAgICByZWZyZXNoKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIHJlZnJlc2hPdXJBbnN3ZXIoZmFsc2UpO1xuICAgICAgcmVmcmVzaChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpO1xuICAgIGlmIChnYW1lU3RhZ2UgPT09IGZhbHNlICYmIHVzZXJEYXRhKSB7XG4gICAgICBjb25zdCBzaWduID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSB1c2VyRGF0YTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gdXNlckRhdGE7XG4gICAgICAgIHByb3BzLnNldFBvaW50cyhwb2ludEluQVJvd1N0YXQpO1xuICAgICAgICBwcm9wcy5zZXRBbW91bnQoMSk7XG4gICAgICAgIHByb3BzLnNldENvcnJlY3QoTnVtYmVyKChsZWFybmVkLmxlbmd0aCAvIDIwKS50b0ZpeGVkKDIpKSk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgTGVhcm5lZFdvcmRzQVBJLmdldExlYXJuZWRXb3JkcyhpZCwgdG9rZW4pO1xuICAgICAgICAgIGNvbnN0IHNlcnZlciA9IGRhdGEub3B0aW9uYWwubGVhcm5lZFdvcmRzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgY29uc3Qgc2VydmVyY291bnRzcHJpbnQgPSBkYXRhLm9wdGlvbmFsLmxlYXJuZWRXb3Jkc051bWJlclNwcmludCBhcyBEYXRhO1xuICAgICAgICAgIGNvbnN0IHNlcnZlcmNvdW50YXVkaW8gPSBkYXRhLm9wdGlvbmFsLmxlYXJuZWRXb3Jkc051bWJlckF1ZGlvIGFzIERhdGE7XG4gICAgICAgICAgY29uc3QgY291bnRuZXcgPSBzZXJ2ZXJjb3VudHNwcmludFtPYmplY3Qua2V5cyhzZXJ2ZXJjb3VudHNwcmludClbMF1dIGFzIG51bWJlcjtcbiAgICAgICAgICBjb25zdCBjb3VudG5ld2F1ZGlvID0gc2VydmVyY291bnRhdWRpb1tPYmplY3Qua2V5cyhzZXJ2ZXJjb3VudGF1ZGlvKVswXV0gYXMgbnVtYmVyO1xuICAgICAgICAgIGxlYXJuZWQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNlcnZlci5pbmNsdWRlcyhpdGVtLndvcmQpKSB7XG4gICAgICAgICAgICAgIHNlcnZlci5wdXNoKGl0ZW0ud29yZCk7XG4gICAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwKTtcbiAgICAgICAgICBjb25zdCBXb3JkTnVtYmVyU3ByaW50ID0geyBbZGF0ZV06IGNvdW50ICsgY291bnRuZXcgfTtcbiAgICAgICAgICBjb25zdCBXb3JkTnVtYmVyQXVkaW8gPSB7IFtkYXRlXTogY291bnRuZXdhdWRpbyB9O1xuICAgICAgICAgIGNvbnN0IG5ld0xlYXJuV29yZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsdyA9IExlYXJuZWRXb3Jkc0FQSS5jcmVhdGVXb3JkKGlkLCB0b2tlbiwgMSwgc2VydmVyLCBXb3JkTnVtYmVyU3ByaW50LCBXb3JkTnVtYmVyQXVkaW8pO1xuICAgICAgICAgICAgYXdhaXQgTGVhcm5lZFdvcmRzQVBJLnVwZGF0ZVVzZXJMZWFybmVkV29yZHMobHcpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3TGVhcm5Xb3JkcygpO1xuICAgICAgICB9O1xuICAgICAgICByZXNwKCk7XG4gICAgICB9O1xuICAgICAgc2lnbigpO1xuICAgIH1cbiAgfSwgW2dhbWVTdGFnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBvaW50SW5BUm93ID09PSAzKSB7XG4gICAgICBzZXRYU2NvcmUoMik7XG4gICAgfSBlbHNlIGlmIChwb2ludEluQVJvdyA9PT0gMCkge1xuICAgICAgc2V0WFNjb3JlKDEpO1xuICAgIH0gZWxzZSBpZiAocG9pbnRJbkFSb3cgPj0gNikge1xuICAgICAgc2V0WFNjb3JlKDMpO1xuICAgIH1cbiAgfSwgW3BvaW50SW5BUm93XSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH0+XG4gICAgICA8R2FtZUhlYWRlciAvPlxuICAgICAge2dhbWVTdGFnZSAmJiA8Q291bnRlckdhbWUgY291bnRlcj17dGltZWxlZnR9IC8+fVxuICAgICAgPENhcmRTcGlybnRcbiAgICAgICAgYmFja1RvR2FtZT17YmFja1RvR2FtZX1cbiAgICAgICAgbGVhcm5lZD17bGVhcm5lZH1cbiAgICAgICAgbWlzdGFrZXM9e21pc3Rha2VzfVxuICAgICAgICBnYW1lPXtnYW1lU3RhZ2V9XG4gICAgICAgIHNjb3JlPXtzY29yZX1cbiAgICAgICAgZG9uZT17c3RhdGV9XG4gICAgICAgIGNvcnJlY3Q9e3N0YXRlfVxuICAgICAgICByZWZyZXNoPXtyZWZyZXNofVxuICAgICAgICByZWZyZXNoQW5zd2VyPXtyZWZyZXNoT3VyQW5zd2VyfVxuICAgICAgICBvdXJHdWVzcz17b3VyR3Vlc3N9XG4gICAgICAgIHdvcmRHdWVzcz17d29yZEd1ZXNzfVxuICAgICAgICBuZXh0UT17bmV4dFF9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50R2FtZTtcbiIsImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHYW1lSGVhZGVyIGZyb20gJy4uL0dhbWVIZWFkZXIvR2FtZUhlYWRlcic7XHJcbmltcG9ydCBTcHJpbnREZXNjcmlwdGlvbiBmcm9tICcuLi9TcHJpbnREZXNjcmlwdGlvbi9TcHJpbnREZXNjcmlwdGlvbic7XHJcbmltcG9ydCBTcHJpbnREaWZmaWN1bHR5IGZyb20gJy4uL1NwcmludERpZmZpY3VsdHkvU3ByaW50RGlmZmljdWx0eSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU3RhcnRpbmdQYWdlU3ByaW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IFdvcmQgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9BUEkvRGljdGlvbmFyeUFQSS9Xb3JkJztcclxuaW1wb3J0IERpY3Rpb25hcnlBUEkgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9BUEkvRGljdGlvbmFyeUFQSS9EaWN0aW9uYXJ5QVBJJztcclxuXHJcbmNvbnN0IFN0YXJ0aW5nUGFnZVNwcmludCA9IChwcm9wczogeyBjaGFuZ2VHYW1lTW9kZTogKGFycmF5OiBXb3JkW10pID0+IHZvaWQgfSkgPT4ge1xyXG4gIGNvbnN0IFtkaWZmaWN1bHR5LCBzZXREaWZmaWN1bHR5XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRGlmZmljdWx0eSA9IChkaWZmaWN1bHR5TGV2ZWw6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0RGlmZmljdWx0eShkaWZmaWN1bHR5TGV2ZWwpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VEaWYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldFBhZ2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApKTtcclxuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IERpY3Rpb25hcnlBUEkuZ2V0V29yZHNBcnJheShwYWdlLCBkaWZmaWN1bHR5ICsgMSk7XHJcbiAgICAgIHByb3BzLmNoYW5nZUdhbWVNb2RlKHJlc3ApO1xyXG4gICAgfTtcclxuICAgIGNoYW5nZURpZigpO1xyXG4gIH0sIFtkaWZmaWN1bHR5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8R2FtZUhlYWRlcj48L0dhbWVIZWFkZXI+XHJcbiAgICAgICAgPFNwcmludERlc2NyaXB0aW9uIC8+XHJcbiAgICAgICAgPFNwcmludERpZmZpY3VsdHkgY2hhbmdlPXtjaGFuZ2VEaWZmaWN1bHR5fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydGluZ1BhZ2VTcHJpbnQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uJztcclxuaW1wb3J0IEFkdmFudGFnZUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BZHZhbnRhZ2VDYXJkL0FkdmFudGFnZUNhcmQnO1xyXG5pbXBvcnQgSUFkdmFudGFnZUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BZHZhbnRhZ2VDYXJkL0lBZHZhbnRhZ2VDYXJkJztcclxuXHJcbmNvbnN0IEFkdmFudGFnZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gJ9CS0L7Qt9C80L7QttC90L7RgdGC0Lgg0Lgg0L/RgNC10LjQvNGD0YnQtdGB0YLQstCwJztcclxuXHJcbiAgY29uc3QgZGF0YTogSUFkdmFudGFnZUNhcmRbXSA9IFtcclxuICAgIHtcclxuICAgICAgcGF0aDogJy92b2NhYnVsYXJ5JyxcclxuICAgICAgdGl0bGU6ICfQrdC70LXQutGC0YDQvtC90L3Ri9C5INGD0YfQtdCx0L3QuNC6JyxcclxuICAgICAgYm9keTogJ9CY0LfRg9GH0LjRgtC1INCx0L7Qu9C10LUgMjUwMCDRgtGL0YHRj9GHINC40L3QvtGB0YLRgNCw0L3QvdGL0YUg0YHQu9C+0LIg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGD0YDQvtCy0L3RjyDQktCw0YjQtdC5INC/0L7QtNCz0L7RgtC+0LLQutC4JyxcclxuICAgICAgaW1nVVJMOiAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9NYWluL0FkdmFuYXRhZ2VzL2d1aWRlLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL2dhbWVzJyxcclxuICAgICAgdGl0bGU6ICfQnNC40L3QuC3QuNCz0YDRiycsXHJcbiAgICAgIGJvZHk6ICfQl9Cw0L/QvtC80LjQvdCw0LnRgtC1INGB0LvQvtCy0LAsINGC0YDQtdC90LjRgNGD0LnRgtC1INCy0L7RgdC/0YDQuNGP0YLQuNC1INC90LAg0YHQu9GD0YUg0YEg0L/QvtC80L7RidGM0Y4g0LTQstGD0YUg0YPQstC70LXQutCw0YLQtdC70YzQvdGL0YUg0LjQs9GAJyxcclxuICAgICAgaW1nVVJMOiAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9NYWluL0FkdmFuYXRhZ2VzL2dhbWVzLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiAnL3N0YXRpc3RpYycsXHJcbiAgICAgIHRpdGxlOiAn0KHRgtCw0YLQuNGB0YLQuNC60LAnLFxyXG4gICAgICBib2R5OiAn0JfQsNC90LjQvNCw0LnRgtC10YHRjCDQsNC60YLQuNCy0L3QviDQuCDQv9GA0L7QstC10YDRj9C50YLQtSDQv9GA0L7QtNCy0LjQttC10L3QuNC1INC6INGG0LXQu9C4INCyINC40L3QtNC40LLQuNC00YPQsNC70YzQvdC+0Lkg0YHRgtCw0YLQuNGB0YLQuNC60LUnLFxyXG4gICAgICBpbWdVUkw6ICcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL01haW4vQWR2YW5hdGFnZXMvc3RhdGlzdGljcy5wbmcnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gYWR2YW50YWdlcyBoZWFkZXI9e2hlYWRlcn0+XHJcbiAgICAgIHtkYXRhLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICA8QWR2YW50YWdlQ2FyZCBwYXRoPXtjYXJkLnBhdGh9IGtleT17Y2FyZC5wYXRofSBpbWdVUkw9e2NhcmQuaW1nVVJMfSB0aXRsZT17Y2FyZC50aXRsZX0gYm9keT17Y2FyZC5ib2R5fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2YW50YWdlcztcclxuIiwiaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi9XZWxjb21lL1dlbGNvbWUnO1xyXG5pbXBvcnQgQWR2YW50YWdlcyBmcm9tICcuL0FkdmFudGFnZXMvQWR2YW50YWdlcyc7XHJcbmltcG9ydCBUZWFtU2VjdGlvbiBmcm9tICcuL1RlYW0vVGVhbVNlY3Rpb24nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01haW4ubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpOiBKU1guRWxlbWVudCA9PiAoXHJcbiAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgPFdlbGNvbWUgLz5cclxuICAgIDxBZHZhbnRhZ2VzIC8+XHJcbiAgICA8VGVhbVNlY3Rpb24gLz5cclxuICA8L21haW4+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbic7XHJcbmltcG9ydCBDYXJkVGVhbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NhcmRUZWFtL0NhcmRUZWFtJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkL0NhcmQnO1xyXG5pbXBvcnQgREVWRUxPUEVSUyBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL2RldmVsb3BlcnNDb25zdCc7XHJcblxyXG5jb25zdCBUZWFtU2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gJ9CeINC60L7QvNCw0L3QtNC1ICc7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIGhlYWRlcj17aGVhZGVyfT5cclxuICAgICAge0RFVkVMT1BFUlMubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPENhcmQga2V5PXtpbmRleH0gdHlwZT1cInRlYW1cIj5cclxuICAgICAgICAgIDxDYXJkVGVhbSBtZW1iZXI9e21lbWJlcn0gLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1TZWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1dlbGNvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGJ1dHRvbkNsYXNzZXMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0JztcblxuY29uc3QgV2VsY29tZSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdXNlQXBwbGljYXRpb25BY2Nlc3NDb250ZXh0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICDQmNC30YPRh9Cw0Lkg0LjQvdC+0YHRgtGA0LDQvdC90YvQtSDRj9C30YvQutC4INCy0LzQtdGB0YLQtSDRgSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+UlNMYW5nPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XG4gICAgICAgICAg0K3Qu9C10LrRgtGA0L7QvdC90YvQuSDRg9GH0LXQsdC90LjQuiDRgSDQsdCw0LfQvtC5INGB0LvQvtCyINC00LvRjyDQuNC30YPRh9C10L3QuNGPLCDQvNC40L3QuC3QuNCz0YDRiyDQtNC70Y8g0LjRhSDQv9C+0LLRgtC+0YDQtdC90LjRjywg0YHRgtCw0YLQuNGB0YLQuNC60LAg0LTQu9GPINC+0YLRgdC70LXQttC40LLQsNC90LjRj1xuICAgICAgICAgINC/0YDQvtCz0YDQtdGB0YHQsC5cbiAgICAgICAgPC9wPlxuICAgICAgICB7aXNTaWduZWRJbiA/IChcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdHJhdGlvblwiIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfSAke2J1dHRvbkNsYXNzZXMuYnV0dG9ufWB9PlxuICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0YXRpc3RpY3NGb3JBbGxUaW1lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdGlzdGljc0ZvckFsbFRpbWUvU3RhdGlzdGljc0ZvckFsbFRpbWUnO1xyXG5pbXBvcnQgU3RhdGlzdGljVG9kYXkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0aXN0aWNUb2RheS9TdGF0aXN0aWNUb2RheSc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vU3RhdGlzdGljcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBTdGF0aXN0aWMgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICA8U3RhdGlzdGljVG9kYXkgLz5cclxuICAgIDxTdGF0aXN0aWNzRm9yQWxsVGltZSAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBESUZGSUNVTFRZIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9kaWZmaWN1bHR5TGV2ZWxzJztcbmltcG9ydCBEaWZmaWN1bHR5Q2FyZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RpZmZpY3VsdHlDYXJkL0RpZmZpY3VsdHlDYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vRGlmZmljdWx0eS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBJbml0IH0gZnJvbSAnLi9JbnRlcmZhY2VzJztcblxuY29uc3QgRGlmZmljdWx0eSA9ICh7IGRpZmZpY3VsdHlMZXZlbCwgc2V0RGlmZmljdWx0eUxldmVsLCBzZXRBY2NlbnRDb2xvciwgc2V0UGFnZSB9OiBJbml0KSA9PiB7XG4gIGNvbnN0IGluaXRTdHlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgY29uc3QgeyBzdHlsZSB9ID0gY2FyZHNbZGlmZmljdWx0eUxldmVsXSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB7IGNvbG9yIH0gPSBESUZGSUNVTFRZW2RpZmZpY3VsdHlMZXZlbF07XG4gICAgc2V0QWNjZW50Q29sb3IoY29sb3IpO1xuICAgIHN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgICBzdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBpbml0U3R5bGUoKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT7QktGL0LHQtdGA0LjRgtC1INGD0YDQvtCy0LXQvdGMINGB0LvQvtC20L3QvtGB0YLQuDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtESUZGSUNVTFRZLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxEaWZmaWN1bHR5Q2FyZFxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgY29sb3I9e2l0ZW0uY29sb3J9XG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgIGN1ckxldmVsPXtkaWZmaWN1bHR5TGV2ZWx9XG4gICAgICAgICAgICBzZXRMZXZlbD17c2V0RGlmZmljdWx0eUxldmVsfVxuICAgICAgICAgICAgc2V0QWNjZW50Q29sb3I9e3NldEFjY2VudENvbG9yfVxuICAgICAgICAgICAgc2V0UGFnZT17c2V0UGFnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+e2l0ZW0ubGV2ZWx9PC9oND5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxlZH0+XG4gICAgICAgICAgICAgIDxzcGFuPntpdGVtLmRldGFpbGVkfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0RpZmZpY3VsdHlDYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlmZmljdWx0eTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEdBTUVfQ0FSRFNfREFUQSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL2dhbWVDYXJkcyc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkL0NhcmQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0dhbWVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEdhbWVzID0gKCkgPT4gKFxyXG4gIDxTZWN0aW9uIGhlYWRlcj1cItCY0LPRgNGLXCI+XHJcbiAgICB7R0FNRV9DQVJEU19EQVRBLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICA8TGluayBrZXk9e2RhdGEudGl0bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSB0bz17ZGF0YS51cmx9PlxyXG4gICAgICAgIDxDYXJkIHR5cGU9XCJnYW1lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWdVUkx9IGFsdD1cImdhbWUtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLmNlbnRlcn0+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50ZXJ9PntkYXRhLmJvZHl9PC9wPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKSl9XHJcbiAgPC9TZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBET1RTLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlUGFnaW5hdGlvbic7XG5pbXBvcnQgSVBhZ2luYXRpb24gZnJvbSAnLi9JbnRlcmZhY2UnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9QYWdpbmF0aW9uLm1vZHVsZS4uc2Nzcyc7XG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBzZXRQYWdlLCBwYWdlLCBhY2NlbnRDb2xvciB9OiBJUGFnaW5hdGlvbikgPT4ge1xuICBjb25zdCBwYWdpbmF0aW9uUmFuZ2UgPSB1c2VQYWdpbmF0aW9uKHBhZ2UpO1xuXG4gIGlmIChwYWdpbmF0aW9uUmFuZ2UubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgb25OZXh0ID0gKCkgPT4ge1xuICAgIHNldFBhZ2UocGFnZSArIDEpO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgc2V0UGFnZShwYWdlIC0gMSk7XG4gIH07XG5cbiAgY29uc3Qgb25QYWdlQ2xpY2sgPSAoY3VyUGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZSgoY3VyUGFnZSBhcyBudW1iZXIpIC0gMSk7XG4gIH07XG5cbiAgY29uc3QgbGFzdFBhZ2UgPSBwYWdpbmF0aW9uUmFuZ2UuYXQoLTEpIGFzIG51bWJlcjtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMucGFnaW5hdGlvbl9fY29udGFpbmVyfT5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2Ake2NsYXNzZXMucGFnaW5hdGlvbl9faXRlbX0gJHtwYWdlID09PSAwID8gY2xhc3Nlcy5kaXNhYmxlZCA6ICcnfWB9IG9uQ2xpY2s9e29uUHJldmlvdXN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5hcnJvd30gJHtjbGFzc2VzLmxlZnR9YH0gLz5cbiAgICAgIDwvbGk+XG4gICAgICB7cGFnaW5hdGlvblJhbmdlLm1hcCgocGFnZU51bWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHBhZ2VOdW1iZXIgPT09IERPVFMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5wYWdpbmF0aW9uX19pdGVtfSAke2NsYXNzZXMuZG90c31gfT5cbiAgICAgICAgICAgICAgJiM4MjMwO1xuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMucGFnaW5hdGlvbl9faXRlbX0gJHtwYWdlTnVtYmVyID09PSBwYWdlICsgMSA/IGNsYXNzZXMuc2VsZWN0ZWQgOiAnJ30gICR7XG4gICAgICAgICAgICAgIGNsYXNzZXNbYEEke2FjY2VudENvbG9yLnNsaWNlKDEpfWBdXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNsaWNrKHBhZ2VOdW1iZXIgYXMgbnVtYmVyKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cGFnZU51bWJlcn1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgICAgfSl9XG5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2Ake2NsYXNzZXMucGFnaW5hdGlvbl9faXRlbX0gJHtwYWdlID09PSBsYXN0UGFnZSAtIDEgPyBjbGFzc2VzLmRpc2FibGVkIDogJyd9YH0gb25DbGljaz17b25OZXh0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuYXJyb3d9ICR7Y2xhc3Nlcy5yaWdodH1gfSAvPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRGlmZmljdWx0eSBmcm9tICcuL0RpZmZpY3VsdHkvRGlmZmljdWx0eSc7XHJcbmltcG9ydCBHYW1lcyBmcm9tICcuL0dhbWVzL0dhbWVzJztcclxuaW1wb3J0IFdvcmRDYXJvdXNlbCBmcm9tICcuL1dvcmRDYXJvdXNlbC9Xb3JkQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgRGljdGlvbmFyeUFQSSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FQSS9EaWN0aW9uYXJ5QVBJL0RpY3Rpb25hcnlBUEknO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24vUGFnaW5hdGlvbic7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vVm9jYWJ1bGFyeS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBXb3JkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQVBJL0RpY3Rpb25hcnlBUEkvV29yZCc7XHJcbmltcG9ydCBEZXRhaWxlZFdvcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxlZFdvcmQvRGV0YWlsZWRXb3JkJztcclxuXHJcbmNvbnN0IFZvY2FidWxhcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RpZmZpY3VsdHlMZXZlbCwgc2V0RGlmZmljdWx0eUxldmVsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY2NlbnRDb2xvciwgc2V0QWNjZW50Q29sb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGU8V29yZFtdPihbXSk7XHJcbiAgY29uc3QgW3dvcmRJZCwgc2V0V29yZElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY3VyV29yZCwgc2V0Q3VyV29yZF0gPSB1c2VTdGF0ZTxXb3JkPih7fSBhcyBXb3JkKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRXb3JkcyhwZzogbnVtYmVyLCBsdmw6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IERpY3Rpb25hcnlBUEkuZ2V0V29yZHNBcnJheShwZywgbHZsKTtcclxuICAgIHNldFdvcmRzKHJlc3ApO1xyXG4gICAgc2V0V29yZElkKHJlc3BbMF0uaWQpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRXb3JkKHdvcmRJRDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgRGljdGlvbmFyeUFQSS5nZXRXb3JkQnlJRCh3b3JkSUQpO1xyXG4gICAgc2V0Q3VyV29yZChyZXNwKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb3dubG9hZFdvcmRzKHBhZ2UsIGRpZmZpY3VsdHlMZXZlbCk7XHJcbiAgfSwgW3BhZ2UsIGRpZmZpY3VsdHlMZXZlbF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG93bmxvYWRXb3JkKHdvcmRJZCk7XHJcbiAgfSwgW3dvcmRJZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT7Qo9GH0LXQsdC90LjQujwvaDI+XHJcbiAgICAgIDxEaWZmaWN1bHR5XHJcbiAgICAgICAgZGlmZmljdWx0eUxldmVsPXtkaWZmaWN1bHR5TGV2ZWx9XHJcbiAgICAgICAgc2V0RGlmZmljdWx0eUxldmVsPXtzZXREaWZmaWN1bHR5TGV2ZWx9XHJcbiAgICAgICAgc2V0UGFnZT17c2V0UGFnZX1cclxuICAgICAgICBzZXRBY2NlbnRDb2xvcj17c2V0QWNjZW50Q29sb3J9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxXb3JkQ2Fyb3VzZWxcclxuICAgICAgICBhY2NlbnRDb2xvcj17YWNjZW50Q29sb3J9XHJcbiAgICAgICAgZGlmZmljdWx0eUxldmVsPXtkaWZmaWN1bHR5TGV2ZWx9XHJcbiAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICB3b3Jkcz17d29yZHN9XHJcbiAgICAgICAgc2V0V29yZD17c2V0V29yZElkfVxyXG4gICAgICAvPlxyXG4gICAgICA8RGV0YWlsZWRXb3JkIHdvcmQ9e0pTT04uc3RyaW5naWZ5KGN1cldvcmQpfSAvPlxyXG4gICAgICA8UGFnaW5hdGlvbiBhY2NlbnRDb2xvcj17YWNjZW50Q29sb3J9IHBhZ2U9e3BhZ2V9IHNldFBhZ2U9e3NldFBhZ2V9IC8+XHJcbiAgICAgIDxHYW1lcyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvY2FidWxhcnk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSVByb3BzIGZyb20gJy4vSW50ZXJmYWNlcyc7XHJcbmltcG9ydCBXb3JkQ2FyZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1dvcmRDYXJkL1dvcmRDYXJkJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Xb3JkQ2Fyb3VzZWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQXJyb3dCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9BcnJvd0J1dHRvbi9BcnJvd0J1dHRvbic7XHJcblxyXG5jb25zdCBXb3JkQ2Fyb3VzZWwgPSAoeyB3b3JkcywgZGlmZmljdWx0eUxldmVsLCBzZXRXb3JkLCBhY2NlbnRDb2xvciwgcGFnZSB9OiBJUHJvcHMpID0+IHtcclxuICBjb25zdCBbZnJhbWUsIHNldEZyYW1lXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RnJhbWUoMCk7XHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyJykgYXMgSFRNTEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICB9LCBbZGlmZmljdWx0eUxldmVsLCBwYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8QXJyb3dCdXR0b24gZnJhbWU9e2ZyYW1lfSBzZXRGcmFtZT17c2V0RnJhbWV9IGRpcmVjdGlvbj1cImxlZnRcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bpbm5lciAke2NsYXNzZXMuaW5uZXJ9YH0+XHJcbiAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8V29yZENhcmRcclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgYWNjZW50Q29sb3I9e2FjY2VudENvbG9yfVxyXG4gICAgICAgICAgICAgIGtleT17d29yZC5pZH1cclxuICAgICAgICAgICAgICB3b3JkSWQ9e3dvcmQuaWR9XHJcbiAgICAgICAgICAgICAgd29yZD17d29yZC53b3JkfVxyXG4gICAgICAgICAgICAgIHdvcmRUcmFuc2xhdGU9e3dvcmQud29yZFRyYW5zbGF0ZX1cclxuICAgICAgICAgICAgICBzZXRXb3JkPXtzZXRXb3JkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QXJyb3dCdXR0b24gZnJhbWU9e2ZyYW1lfSBzZXRGcmFtZT17c2V0RnJhbWV9IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkQ2Fyb3VzZWw7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJ0aXRsZVwiOlwidGl0bGUtSWZ3a01cIixcImJvZHlcIjpcImJvZHktSGxrRjVcIixcImltYWdlXCI6XCJpbWFnZS1zQlNVdlwiLFwiZGlzYWJsZWRcIjpcImRpc2FibGVkLUxYcFNfXCIsXCJsaW5rXCI6XCJsaW5rLXJKeU9RXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYnV0dG9uXCI6XCJidXR0b24tOF9fc3ZcIixcImJ1dHRvbl9sZWZ0XCI6XCJidXR0b25fbGVmdC1HNVJfR1wiLFwiYnV0dG9uX3JpZ2h0XCI6XCJidXR0b25fcmlnaHQtQVRYUlNcIixcImRpc2FibGVkXCI6XCJkaXNhYmxlZC11Nkt3WlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJ1dHRvblwiOlwiYnV0dG9uLWtXSUdTXCIsXCJ0aHJlZVF1YXJ0ZXJzTG9hZGVyXCI6XCJ0aHJlZVF1YXJ0ZXJzTG9hZGVyLWlfNEc4XCIsXCJsb2FkZXJDb250YWluZXJcIjpcImxvYWRlckNvbnRhaW5lci1qMFN0MVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNhcmRUZWFtXCI6XCJjYXJkVGVhbS1qN2Iya1wiLFwiaGVhZGVyXCI6XCJoZWFkZXItVVNKbTFcIixcInBob3RvXCI6XCJwaG90by1hTHRFbFwiLFwiZGVzY3JpcHRpb25cIjpcImRlc2NyaXB0aW9uLXBNUkRtXCIsXCJuYW1lXCI6XCJuYW1lLXR2RXR3XCIsXCJyb2xlXCI6XCJyb2xlLWhwNE5zXCIsXCJjb250cmlidXRpb25cIjpcImNvbnRyaWJ1dGlvbi1weU53R1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNhcmRcIjpcImNhcmQtb0g3ZHRcIixcImNhcmRUZWFtXCI6XCJjYXJkVGVhbS1JTTloVFwiLFwiY2FyZE9wcG9ydHVuaXR5XCI6XCJjYXJkT3Bwb3J0dW5pdHktZkJ3ZW1cIixcImNhcmRHYW1lc1wiOlwiY2FyZEdhbWVzLUlKcU9hXCIsXCJjYXJkU3RhdGlzdGljU21hbGxcIjpcImNhcmRTdGF0aXN0aWNTbWFsbC1HTmxBNlwiLFwiY2FyZFN0YXRpc3RpY01lZGl1bVwiOlwiY2FyZFN0YXRpc3RpY01lZGl1bS1WVVBuZVwiLFwiY2FyZFN0YXRpc3RpY0xhcmdlXCI6XCJjYXJkU3RhdGlzdGljTGFyZ2UtdlpVUU1cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjYXJkXCI6XCJjYXJkLW5qRkpqXCIsXCJwbGF5YWJsZVwiOlwicGxheWFibGUtZE5SQmRcIixcIndvcmRfX3dvcmRcIjpcIndvcmRfX3dvcmQtUlgybVNcIixcIndvcmRfX2NvbnRhaW5lclwiOlwid29yZF9fY29udGFpbmVyLU1KSmZKXCIsXCJ3b3JkX190cmFuc2xhdGVcIjpcIndvcmRfX3RyYW5zbGF0ZS1mRFRMUFwiLFwid29yZF9fdHJhbnNjcmlwdGlvblwiOlwid29yZF9fdHJhbnNjcmlwdGlvbi1uNXFaeVwiLFwiaW1nXCI6XCJpbWctbFZZR3lcIixcInBsYXlcIjpcInBsYXktU3RKb3ZcIixcInBocmFzZXNcIjpcInBocmFzZXMtTm1YT2NcIixcImF1ZGlvXCI6XCJhdWRpby1KbEFZaVwiLFwibWVhbmluZ1wiOlwibWVhbmluZy1aZmdzcFwiLFwiZXhhbXBsZVwiOlwiZXhhbXBsZS1ZbUw2WFwiLFwiaGVhZGVyXCI6XCJoZWFkZXItZVo5V0lcIixcImljb25cIjpcImljb24tTnlYYUVcIixcInRyYW5zbGF0ZVwiOlwidHJhbnNsYXRlLUhFODRNXCIsXCJhZGRcIjpcImFkZC1nQ3FqRVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNhcmRcIjpcImNhcmQtVjhWSDFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJmb290ZXJcIjpcImZvb3Rlci15Y0lpSFwiLFwid3JhcHBlclwiOlwid3JhcHBlci1zV2hWRlwiLFwibGlua3NDb250YWluZXJcIjpcImxpbmtzQ29udGFpbmVyLURPODliXCIsXCJsb2dvUnNzXCI6XCJsb2dvUnNzLVpmTElCXCIsXCJnaXRodWJDb250YWluZXJcIjpcImdpdGh1YkNvbnRhaW5lci1wZ0Q0VFwiLFwiaWNvbkdpdGh1YlwiOlwiaWNvbkdpdGh1Yi1mQ2RaNVwiLFwibGlua1RvUnNzXCI6XCJsaW5rVG9Sc3MtTUdDb0dcIixcImRldmVsb3BtZW50RGF0ZVwiOlwiZGV2ZWxvcG1lbnREYXRlLWZJMmR4XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibGlua1RvRGV2ZWxvcGVyXCI6XCJsaW5rVG9EZXZlbG9wZXItcVNCcnhcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJoZWFkZXJcIjpcImhlYWRlci1VS09VdlwiLFwiY29udGFpbmVyXCI6XCJjb250YWluZXItbnU1SjFcIixcImJ1dHRvbkF1dGhvclwiOlwiYnV0dG9uQXV0aG9yLWJDQ0dZXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibG9nb1wiOlwibG9nby1HSVBza1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIml0ZW1cIjpcIml0ZW0taE43amhcIixcImxpbmtcIjpcImxpbmstelRYellcIixcImFycm93XCI6XCJhcnJvdy1rQ3lseFwiLFwiZGlzYWJsZWRcIjpcImRpc2FibGVkLWYweXBBXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibmF2TGlzdFwiOlwibmF2TGlzdC1yNk1IbFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNpcmNsZVwiOlwiY2lyY2xlLU1xSEZBXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGVudFwiOlwiY29udGVudC1haFJJUVwiLFwicGVyY2VudGFnZVwiOlwicGVyY2VudGFnZS1FczhhNlwiLFwidGV4dFwiOlwidGV4dC10WkhKUFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInNlY3Rpb25cIjpcInNlY3Rpb24tdm9MY29cIixcImNvbnRlbnRcIjpcImNvbnRlbnQtU0V5R19cIixcImhlYWRlclwiOlwiaGVhZGVyLUcwZXlNXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFpbmVyXCI6XCJjb250YWluZXItWlB6RnpcIixcImhlYWRlclwiOlwiaGVhZGVyLUw1d2VFXCIsXCJ0ZXh0XCI6XCJ0ZXh0LWVJQ3U4XCIsXCJkZXNjcmlwdGlvblwiOlwiZGVzY3JpcHRpb24temFnOW5cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcImNvbnRhaW5lci1MazRLMlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiY29udGFpbmVyLW42eUFKXCIsXCJoZWFkZXJcIjpcImhlYWRlci1GdDA2R1wiLFwibGVmdFwiOlwibGVmdC1NZl95d1wiLFwid3JpZ2h0QW5zd2Vyc1wiOlwid3JpZ2h0QW5zd2Vycy15ejdPdFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImhlYWRlclwiOlwiaGVhZGVyLWRRWEF4XCIsXCJuYXZMaXN0XCI6XCJuYXZMaXN0LVFFRGNuXCIsXCJpdGVtXCI6XCJpdGVtLWxwblJNXCIsXCJidXR0b25cIjpcImJ1dHRvbi1WaFRiTFwiLFwiYnV0dG9uQWN0aXZlXCI6XCJidXR0b25BY3RpdmUtbm5JUnJcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjYXJkXCI6XCJjYXJkLVFpNjgzXCIsXCJ3b3JkXCI6XCJ3b3JkLUh3M0hEXCIsXCJ0cmFuc2xhdGVcIjpcInRyYW5zbGF0ZS1xNjZhUlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIndyYXBwZXJcIjpcIndyYXBwZXItZmRqTFJcIixcImhlYWRlclwiOlwiaGVhZGVyLWVqSE0yXCIsXCJpbmZvXCI6XCJpbmZvLXpxbUYxXCIsXCJyZWdpc3RyYXRpb25cIjpcInJlZ2lzdHJhdGlvbi15Z3FRQVwiLFwiYnV0dG9uQXV0aG9yaXphdGlvblwiOlwiYnV0dG9uQXV0aG9yaXphdGlvbi1kX1hSZVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiY29udGFpbmVyLWJIMWpwXCIsXCJpbGx1c3RyYXRpb25cIjpcImlsbHVzdHJhdGlvbi1PblhFSVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImV4cGxhbmF0aW9uXCI6XCJleHBsYW5hdGlvbi1CQ01qTVwiLFwiaW5wdXRDb250YWluZXJcIjpcImlucHV0Q29udGFpbmVyLV9UYWxwXCIsXCJpbnB1dFwiOlwiaW5wdXQtZG1sTG9cIixcImJ1dHRvbkV5ZVwiOlwiYnV0dG9uRXllLWl4aTFJXCIsXCJidXR0b25FeWVIaWRlXCI6XCJidXR0b25FeWVIaWRlLXJpN3FIXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wid3JhcHBlclwiOlwid3JhcHBlci1nNVI5Q1wiLFwiaGVhZGVyXCI6XCJoZWFkZXItQm1lc2pcIixcImluZm9cIjpcImluZm8tcEZuelZcIixcImF1dGhvcml6YXRpb25cIjpcImF1dGhvcml6YXRpb24tUFFZR0NcIixcImJ1dHRvblJlZ2lzdHJhdGlvblwiOlwiYnV0dG9uUmVnaXN0cmF0aW9uLUNtMW5DXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZXJyb3JcIjpcImVycm9yLVZLTk92XCIsXCJ0cmFuc3BhcmVudFwiOlwidHJhbnNwYXJlbnQtYm5zT1VcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcImNvbnRhaW5lci1HZlhPU1wiLFwiY29udGFpbmVyX19jb250ZW50XCI6XCJjb250YWluZXJfX2NvbnRlbnQtUHNtMHhcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcImNvbnRhaW5lci14d2RQclwiLFwiaGVhZGluZ1wiOlwiaGVhZGluZy1Vanh4RlwiLFwicGFyYWdyYXBoXCI6XCJwYXJhZ3JhcGgta0RBdWVcIixcImJ1dHRvblwiOlwiYnV0dG9uLXBJUDg2XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiaGVhZGVyXCI6XCJoZWFkZXIteHUzRlJcIixcImRpZmZpY3VsdHlfX2NvbnRhaW5lclwiOlwiZGlmZmljdWx0eV9fY29udGFpbmVyLV9hTlN4XCIsXCJkaWZmaWN1bHRpZXNcIjpcImRpZmZpY3VsdGllcy1pX2x2WFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNhcmRcIjpcImNhcmQtR09vNlBcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJhdWRpb19fYnV0dG9uXCI6XCJhdWRpb19fYnV0dG9uLUxnZ2pwXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFpbmVyXCI6XCJjb250YWluZXItdlR4WU1cIixcImF1ZGlvXCI6XCJhdWRpby1hYkNBQlwiLFwidGV4dENvbnRlbnRcIjpcInRleHRDb250ZW50LWF0QXlQXCIsXCJ3b3JkXCI6XCJ3b3JkLXB2VEhJXCIsXCJpbWdcIjpcImltZy1qUzZqblwiLFwiYXVkaW9CdXR0b25cIjpcImF1ZGlvQnV0dG9uLVVvbk1OXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZnJhbWVcIjpcImZyYW1lLUdkbDBWXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1widmFyaWFudFwiOlwidmFyaWFudC1Hckg1SVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInZhcmlhbnRzX19jb250YWluZXJcIjpcInZhcmlhbnRzX19jb250YWluZXItY0Z0azZcIixcIm5leHRcIjpcIm5leHQtZmhQMmtcIixcInZhcmlhbnRcIjpcInZhcmlhbnQtX1BZVkVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcImNvbnRhaW5lci1rX2R4UlwiLFwiY29udGVudFwiOlwiY29udGVudC1mdUlTa1wiLFwidm9jYWJ1bGFyeVwiOlwidm9jYWJ1bGFyeS1aSTRoRVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInNsaWRlcl9fY29udGFpbmVyXCI6XCJzbGlkZXJfX2NvbnRhaW5lci1EWjJfd1wiLFwiaW5uZXJcIjpcImlubmVyLUlYMHdrXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFpbmVyXCI6XCJjb250YWluZXItYWN5WVlcIixcImhlYWRlclwiOlwiaGVhZGVyLWpJUkt0XCIsXCJwYXJhZ3JhcGhcIjpcInBhcmFncmFwaC1wenFfMVwiLFwiYW1vdW50XCI6XCJhbW91bnQtRzl5YmxcIixcImFycm93XCI6XCJhcnJvdy15Ym1CWlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImhlYWRlclwiOlwiaGVhZGVyLWRZUFhqXCIsXCJ0ZXh0XCI6XCJ0ZXh0LWNDNm5FXCIsXCJhbW91bnRcIjpcImFtb3VudC1DVWYzeFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImF1ZGlvXCI6XCJhdWRpby1OdDZEUlwiLFwiaXRlbUNvbnRhaW5lclwiOlwiaXRlbUNvbnRhaW5lci1lOXk2RFwiLFwiYXVkaW9CdXR0b25cIjpcImF1ZGlvQnV0dG9uLV82RTBxXCIsXCJ0ZXh0Q29udGVudFwiOlwidGV4dENvbnRlbnQtSjVBeWtcIixcIndvcmRUcmFuc2xhdGVcIjpcIndvcmRUcmFuc2xhdGUtSW1xaVpcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcImNvbnRhaW5lci1ZcUl5elwiLFwiZGl2aWRlclwiOlwiZGl2aWRlci1HQ0N0MlwiLFwiYXJyb3dcIjpcImFycm93LXlQcUI5XCIsXCJ0ZXN0XCI6XCJ0ZXN0LXFDRUNmXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiaGVhZGVyXCI6XCJoZWFkZXItTnVQdzlcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjcm9zc1wiOlwiY3Jvc3MtbDc4OHBcIixcImNyb3NzX19jb250YWluZXJcIjpcImNyb3NzX19jb250YWluZXIteGFyZUdcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJtYWluXCI6XCJtYWluLWRFUEw4XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1widm9sdW1lSW5HYW1lXCI6XCJ2b2x1bWVJbkdhbWUtcTVkcFJcIixcInZvbHVtZVwiOlwidm9sdW1lLXdHUkxkXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFpbmVyXCI6XCJjb250YWluZXItSEVLRjVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJhcnJvd0VuZFwiOlwiYXJyb3dFbmQtVWJBS0ZcIixcImFycm93U3RhdFwiOlwiYXJyb3dTdGF0LWFZelFYXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicmVzdWx0XCI6XCJyZXN1bHQtSHFNMExcIixcIndvcmRzQW1vdW50XCI6XCJ3b3Jkc0Ftb3VudC1zb3N4TVwiLFwiTWFzY290XCI6XCJNYXNjb3QtY3R1NVlcIixcImFycm93XCI6XCJhcnJvdy1Gd1hJb1wiLFwidG9EaWN0aW9uYXJ5XCI6XCJ0b0RpY3Rpb25hcnktbGNOQ0lcIixcImNvbnRhaW5lckVuZENhcmRcIjpcImNvbnRhaW5lckVuZENhcmQtZXd5T3hcIixcImFuaW1hdGlvblJpZ2h0XCI6XCJhbmltYXRpb25SaWdodC1TVldEalwiLFwic2xpZGVJblwiOlwic2xpZGVJbi1LNUpVR1wiLFwiYW5pbWF0aW9uTGVmdFwiOlwiYW5pbWF0aW9uTGVmdC1zd2g1dVwiLFwic2xpZGVPdXRcIjpcInNsaWRlT3V0LUpWbW82XCIsXCJhcnJvd0VuZFwiOlwiYXJyb3dFbmQtSGM3NFhcIixcImFycm93U3RhdFwiOlwiYXJyb3dTdGF0LWxGaWtVXCIsXCJidXR0b25cIjpcImJ1dHRvbi1DNGpwMFwiLFwibWlzdGFrZXNcIjpcIm1pc3Rha2VzLVc0V0g3XCIsXCJsZWFybmVkXCI6XCJsZWFybmVkLUJwN1hKXCIsXCJsaW5rXCI6XCJsaW5rLXZUQ25jXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY2FyZFwiOlwiY2FyZC1rVFp2N1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInRvRGljdGlvbmFyeVwiOlwidG9EaWN0aW9uYXJ5LUZaQ3k1XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wid29yZFwiOlwid29yZC1uZ1JMdlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImhlYWRlclwiOlwiaGVhZGVyLU1Kb1Y0XCIsXCJtaXN0YWtlc0luZGljYXRpb3JcIjpcIm1pc3Rha2VzSW5kaWNhdGlvci11SGZXeVwiLFwibGVhcm5lZEluZGljYXRvclwiOlwibGVhcm5lZEluZGljYXRvci1fWnk4WVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIndvcmRzXCI6XCJ3b3Jkcy1iUXFYV1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNhcmRVcHBlclBhcnRcIjpcIkNhcmRVcHBlclBhcnQtbVBPd2lcIixcImNvbnRyb2xzXCI6XCJjb250cm9scy1QQ2xGWVwiLFwiY290cm9sc0NvbnRhaW5lclwiOlwiY290cm9sc0NvbnRhaW5lci1LdWpEX1wiLFwiYXJyb3dzXCI6XCJhcnJvd3MtZlZyaHhcIixcImNvdHJvbHNDb250YWluZXJfX2Fycm93XCI6XCJjb3Ryb2xzQ29udGFpbmVyX19hcnJvdy1CU09pOFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiY29udGFpbmVyLV9zVzNmXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFpbmVyXCI6XCJjb250YWluZXItdEFMaTRcIixcImNhcmRcIjpcImNhcmQtVmM5dGtcIixcImNhcmRFbmRcIjpcImNhcmRFbmQtajNWWHBcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcImNvbnRhaW5lci1EU2VqM1wiLFwiR3Vlc3NXb3JkXCI6XCJHdWVzc1dvcmQtelNua2tcIixcIk91ckd1ZXNzXCI6XCJPdXJHdWVzcy1fbldDdlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiY29udGFpbmVyLVNFNEt6XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiaGVhZGVyXCI6XCJoZWFkZXItdktEaU1cIixcImNyb3NzXCI6XCJjcm9zcy1MVjcwV1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiY29udGFpbmVyLVNtd2FOXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZGVzY3JpcHRpb25cIjpcImRlc2NyaXB0aW9uLXVTMFBQXCIsXCJoZWFkZXJcIjpcImhlYWRlci1KaWRJSFwiLFwidGV4dFwiOlwidGV4dC1WQzd0cFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiY29udGFpbmVyLUdqc0cyXCIsXCJ0ZXh0XCI6XCJ0ZXh0LW9uTDA2XCIsXCJhY3RpdmVcIjpcImFjdGl2ZS1SOFFJWlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiY29udGFpbmVyLVZ5YjJ5XCIsXCJoZWFkZXJcIjpcImhlYWRlci1QVTdiNFwiLFwic2VjdGlvblwiOlwic2VjdGlvbi1GTmdFTlwiLFwiYnV0dG9uXCI6XCJidXR0b24tcFpHdl9cIixcImxpbmtcIjpcImxpbmstT0xTWk1cIixcIm5vdEFjdGl2ZVwiOlwibm90QWN0aXZlLXd6cVlSXCIsXCJhY3RpdmVcIjpcImFjdGl2ZS1CYTNxeVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhY2tncm91bmRcIjpcImJhY2tncm91bmQtRkMyMTdcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYWNrZ3JvdW5kXCI6XCJiYWNrZ3JvdW5kLVRZaEFEXCIsXCJjb250YWluZXJcIjpcImNvbnRhaW5lci1LVERzZlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm1haW5cIjpcIm1haW4tRXFyWk9cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJoZWFkZXJcIjpcImhlYWRlci1KbUpMa1wiLFwidGV4dFwiOlwidGV4dC1YOUVCX1wiLFwibG9nb1wiOlwibG9nby1XZUI5ZFwiLFwiY29udGVudFwiOlwiY29udGVudC1FaG9vMVwiLFwiY29udGFpbmVyXCI6XCJjb250YWluZXItQXIxU0FcIixcImltYWdlXCI6XCJpbWFnZS1FRWpYQ1wiLFwibGlua1wiOlwibGluay1IVlU4ZlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm1haW5cIjpcIm1haW4tV0Q3RVZcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzZWN0aW9uXCI6XCJzZWN0aW9uLVlRaXJzXCIsXCJwYXJhZ3JhcGhcIjpcInBhcmFncmFwaC10WmhhSFwiLFwiY29udGFpbmVyXCI6XCJjb250YWluZXItQk5kX2pcIixcImhlYWRlclwiOlwiaGVhZGVyLXE4WGxUXCIsXCJkZXRhaWxlZFwiOlwiZGV0YWlsZWQtUzM4RURcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjZW50ZXJcIjpcImNlbnRlci1lV2lyUlwiLFwiaW1nXCI6XCJpbWctckZwdFJcIixcImxpbmtcIjpcImxpbmsteHozbUtcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJwYWdpbmF0aW9uX19jb250YWluZXJcIjpcInBhZ2luYXRpb25fX2NvbnRhaW5lci1CdzZ1ZFwiLFwicGFnaW5hdGlvbl9faXRlbVwiOlwicGFnaW5hdGlvbl9faXRlbS1idFhBd1wiLFwiQUZGQ0YwQlwiOlwiQUZGQ0YwQi1UOWl6WFwiLFwic2VsZWN0ZWRcIjpcInNlbGVjdGVkLVJ0ZnVUXCIsXCJBRkZBQzRCXCI6XCJBRkZBQzRCLXVkd0J1XCIsXCJBQkFGM0FGXCI6XCJBQkFGM0FGLVJDTk44XCIsXCJBODVENjcxXCI6XCJBODVENjcxLW9QR1ViXCIsXCJBQUZDREZCXCI6XCJBQUZDREZCLUh3SEtyXCIsXCJBNjk5REVFXCI6XCJBNjk5REVFLVlzQmZBXCIsXCJkb3RzXCI6XCJkb3RzLXNCNERmXCIsXCJhcnJvd1wiOlwiYXJyb3ctc2R3S0RcIixcImxlZnRcIjpcImxlZnQtZXh4VlZcIixcInJpZ2h0XCI6XCJyaWdodC11MkMxQVwiLFwiZGlzYWJsZWRcIjpcImRpc2FibGVkLWFrTFB3XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibWFpblwiOlwibWFpbi1DS2VER1wiLFwiaGVhZGVyXCI6XCJoZWFkZXItX1BkbzNcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcImNvbnRhaW5lci1mTUkwMVwiLFwiY2Fyb3VzZWxcIjpcImNhcm91c2VsLVM1ZUN4XCIsXCJpbm5lclwiOlwiaW5uZXItcXV0Y0pcIn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2NoYXJ0anMtYWRhcHRlci1kYXRlLWZuc19kaXN0X2NoYXJ0anMtYWRhcHRlci1kYXRlLWZuc19lc21fanMtbm9kZV9tb2R1bC1hMGU5ZTNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQXBwIiwic3ByaW50QXJyYXkiLCJzZXRTcHJpbnRBcnJheSIsImlzU2lnbmVkSW4iLCJzZXRJc1NpZ25lZEluIiwidXNlckRhdGEiLCJyZXN1bHQiLCJzcHJpbnRQb2ludHNJbkFSb3ciLCJzZXRTcHJpbnRQb2ludHNJbkFSb3ciLCJhdWRpb1BvaW50c0luQVJvdyIsInNldEF1ZGlvUG9pbnRzSW5BUm93IiwiZ2FtZXNBbW91dFNwcmludCIsInNldEdhbWVzQW1vdXRTcHJpbnQiLCJnYW1lc0Ftb3V0QXVkaW8iLCJzZXRHYW1lc0Ftb3V0QXVkaW8iLCJnYW1lc1Njb3JlU3ByaW50Iiwic2V0R2FtZXNTY29yZVNwcmludCIsImdhbWVzU2NvcmVBdWRpbyIsInNldEdhbWVzU2NvcmVBdWRpbyIsImZldGNoRGF0YSIsInRpbWUiLCJEYXRlIiwic2V0SG91cnMiLCJ0b1N0cmluZyIsInN0YXQiLCJTdGF0aXN0aWNBUElfMSIsImNyZWF0ZVN0YXRpc3RpYyIsImlkIiwidG9rZW4iLCJfYSIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJ1cGRhdGVVc2VyU3RhdGlzdGljIiwidXBkc3RhdCIsIl9nIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2hhbmdlR2FtZU1vZGUiLCJhcnJheSIsImNoaWxkcmVuIiwiY29udGV4dF8xIiwiUHJvdmlkZXIiLCJfX2Fzc2lnbiIsInZhbHVlIiwicmVhY3Rfcm91dGVyX2RvbV8xIiwicGF0aCIsImVsZW1lbnQiLCJSb3V0ZUNvbXBvbmVudF8xIiwiVm9jYWJ1bGFyeV8xIiwiU3RhdGlzdGljXzEiLCJHYW1lc18xIiwiU3RhcnRpbmdQYWdlU3ByaW50XzEiLCJTcHJpbnRHYW1lXzEiLCJzZXRQb2ludHMiLCJzZXRBbW91bnQiLCJzZXRDb3JyZWN0IiwiQXVkaW9fMSIsIk1haW5fMSIsIkVudHJhbmNlXzEiLCJSZWdpc3RyYXRpb25fMSIsIkF1dGhvcml6YXRpb25fMSIsImV4cG9ydHMiLCJERVZFTE9QRVJTIiwibmFtZSIsInBob3RvIiwiZ2l0SHViIiwicm9sZSIsImNvbnRyaWJ1dGlvbiIsImxldmVsIiwiY29sb3IiLCJkZXRhaWxlZCIsIkdBTUVfQ0FSRFNfREFUQSIsInVybCIsImltZ1VSTCIsInRpdGxlIiwiYm9keSIsInJhbmRvbVBhZ2UiLCJmbG9vciIsIk1hdGgiLCJyYW5kb20iLCJzaHVmZmxlQXJyYXkiLCJ3b3JkcyIsInNvcnQiLCJOQVZJR0FUSU9OX0lURU1TIiwiU0VSVkVSIiwiZ2V0VXNlckRhdGEiLCJ1c2VySnNvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsIkRpY3Rpb25hcnlBUEkiLCJnZXRXb3Jkc0FycmF5IiwicGFnZSIsImdyb3VwIiwiZmV0Y2giLCJzZXJ2ZXJDb25zdF8xIiwiY29uY2F0IiwianNvbiIsImFycmF5T2ZXb3JkcyIsImdldFdvcmRCeUlEIiwid29yZCIsIkxlYXJuZWRXb3Jkc0FQSSIsImNyZWF0ZVdvcmQiLCJ1c2VySWQiLCJ3cGQiLCJ3b3Jkc051bWJlclNwcmludCIsIndvcmRzTnVtYmVyQXVkaW8iLCJ3b3Jkc1BlckRheSIsIm9wdGlvbmFsIiwibGVhcm5lZFdvcmRzIiwiam9pbiIsImxlYXJuZWRXb3Jkc051bWJlclNwcmludCIsImxlYXJuZWRXb3Jkc051bWJlckF1ZGlvIiwidXBkYXRlVXNlckxlYXJuZWRXb3JkcyIsIm9iamVjdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwic3RyaW5naWZ5IiwicmF3UmVzcG9uc2UiLCJjb250ZW50IiwiZ2V0TGVhcm5lZFdvcmRzIiwic2lnbmFsIiwiZXJyb3JfMSIsIkVycm9yIiwiZGF0ZSIsIldOIiwiVXNlclN0YXRpc3RpYyIsInRlc3RGaWVsZFN0cmluZyIsInRlc3RGaWVsZEJvb2xlYW4iLCJnZXRTdGF0aXN0aWMiLCJyZXNwIiwib2JqZWN0RXhpc3RfMSIsIk9iamVjdCIsImFzc2lnbiIsImNvcHlfMSIsImtleXMiLCJmb3JFYWNoIiwiaXRlbSIsInByb3BFeGlzdCIsInByb3BOZXciLCJrZXkiLCJzY29yZU9iamVjdCIsInNjb3JlT2xkIiwidW5kZWZpbmVkIiwic2NvcmVOZXciLCJzdW1TY29yZSIsIm5ld09iamVjdFNjb3JlIiwiYW1vdW50IiwiYW1vdW50TiIsIm9sZFNjb3JlQWxsIiwiTnVtYmVyIiwidG9GaXhlZCIsIl9oIiwiX2oiLCJfayIsIlVzZXJBUEkiLCJkZWxldGVVc2VyIiwidXBkYXRlVXNlciIsInVzZXIiLCJjcmVhdGVVc2VyIiwib2siLCJzdGF0dXMiLCJnZXRVc2VyIiwiZ2V0TmV3VXNlclRva2VuIiwic2lnbkluVXNlciIsIkFkdmFudGFnZUNhcmQiLCJsaW5rU3R5bGUiLCJBZHZhbnRhZ2VDYXJkX21vZHVsZV9zY3NzXzEiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImxpbmsiLCJ0byIsIkNhcmRfMSIsInR5cGUiLCJpbWFnZSIsInNyYyIsImFsdCIsImFycm93TGlzdGVuZXIiLCJkaXJlY3Rpb24iLCJmcmFtZSIsInNldEZyYW1lIiwiY2Fyb3VzZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJGcmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzYWJsZUFycm93IiwiQXJyb3dCdXR0b25fbW9kdWxlX3Njc3NfMSIsIkFycm93QnV0dG9uIiwic2V0dGluZ3MiLCJvbkNsaWNrIiwiYnV0dG9uIiwiQnV0dG9uIiwicHJvcHMiLCJCdXR0b25fbW9kdWxlX3Njc3NfMSIsImxvYWRpbmciLCJsb2FkZXJDb250YWluZXIiLCJ0aHJlZVF1YXJ0ZXJzTG9hZGVyIiwiQ2FyZFRlYW0iLCJDYXJkVGVhbV9tb2R1bGVfc2Nzc18xIiwiY2FyZFRlYW0iLCJoZWFkZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZW1iZXIiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImluZGV4IiwibWFyZ2luIiwiQ2FyZCIsIkNhcmRfbW9kdWxlX3Njc3NfMSIsImNhcmQiLCJjYXJkT3Bwb3J0dW5pdHkiLCJjYXJkU3RhdGlzdGljU21hbGwiLCJjYXJkU3RhdGlzdGljTWVkaXVtIiwiY2FyZFN0YXRpc3RpY0xhcmdlIiwiY2FyZEdhbWVzIiwiRGV0YWlsZWRXb3JkIiwidHJhbnNsYXRlIiwic2V0VHJhbnNsYXRlIiwid29yZE9iamVjdCIsInBsYXlBdWRpbyIsImF1ZGlvIiwicGxheSIsInNob3dUcmFuc2xhdGlvbiIsImFkZFRvRGlmZmljdWx0IiwiaW5uZXJIVE1MIiwidGV4dE1lYW5pbmciLCJ0ZXh0RXhhbXBsZSIsIkRldGFpbGVkV29yZF9tb2R1bGVfc2Nzc18xIiwiaW1nIiwid29yZF9fY29udGFpbmVyIiwid29yZF9fd29yZCIsIndvcmRfX3RyYW5zbGF0ZSIsIndvcmRUcmFuc2xhdGUiLCJ3b3JkX190cmFuc2NyaXB0aW9uIiwidHJhbnNjcmlwdGlvbiIsInBocmFzZXMiLCJtZWFuaW5nIiwicGxheWFibGUiLCJ0ZXh0TWVhbmluZ1RyYW5zbGF0ZSIsImV4YW1wbGUiLCJ0ZXh0RXhhbXBsZVRyYW5zbGF0ZSIsImljb24iLCJhZGQiLCJhdWRpb01lYW5pbmciLCJhdWRpb0V4YW1wbGUiLCJEaWZmaWN1bHR5Q2FyZCIsInNldExldmVsIiwic2V0QWNjZW50Q29sb3IiLCJzZXRQYWdlIiwiZGVsZXRlQ2FyZHNTdHlsZSIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZENhcmRTdHlsZSIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImNsaWNrSGFuZGxlciIsIkRpZmZpY3VsdHlDYXJkX21vZHVsZV9zY3NzXzEiLCJGb290ZXIiLCJGb290ZXJfbW9kdWxlX3Njc3NfMSIsImZvb3RlciIsIndyYXBwZXIiLCJsaW5rc0NvbnRhaW5lciIsImhyZWYiLCJsb2dvUnNzIiwiZ2l0aHViQ29udGFpbmVyIiwiaWNvbkdpdGh1YiIsImRldmVsb3BlcnNDb25zdF8xIiwiZGV2ZWxvcGVyIiwiTGlua18xIiwibGlua1RvUnNzIiwiZGV2ZWxvcG1lbnREYXRlIiwiTGluayIsIkxpbmtfbW9kdWxlX3Njc3NfMSIsImxpbmtUb0RldmVsb3BlciIsIkhlYWRlciIsIm5hdmlnYXRpb25IaWRlIiwicmVtb3ZlSXRlbSIsIkhlYWRlcl9tb2R1bGVfc2Nzc18xIiwiY29udGFpbmVyIiwiTG9nb18xIiwiTmF2aWdhdGlvbl8xIiwiYnV0dG9uQXV0aG9yIiwiTG9nbyIsIkxvZ29fbW9kdWxlX3Njc3NfMSIsImxvZ28iLCJOYXZMaW5rIiwicHJvcCIsIk5hdkxpbmtfbW9kdWxlX3Njc3NfMSIsIk5hdmJhciIsIk5hdmlnYXRpb25fbW9kdWxlX3Njc3NfMSIsIm5hdkxpc3QiLCJuYXZDb25zdF8xIiwiTmF2TGlua18xIiwiQ2lyY2xlIiwiaXNQcm9ncmVzcyIsIkNpcmNsZV9tb2R1bGVfc2Nzc18xIiwiY2lyY2xlIiwic3Ryb2tlIiwiY3giLCJjeSIsInN0cm9rZVdpZHRoIiwiciIsImZpbGwiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwic3ByaW50IiwiaXNTdGF0Iiwic2V0UHJvZ3Jlc3MiLCJwcm9ncmVzc0VsZW1lbnQiLCJyYWRpdXMiLCJiYXNlVmFsIiwiY2lyY3VtZmVyZW5jZSIsIlBJIiwic3Ryb2tlRGFzaGFycmF5IiwicGVyY2VudGFnZSIsIm9mZnNldCIsInN0cm9rZURhc2hvZmZzZXQiLCJQcm9ncmVzc0Jhcl9tb2R1bGVfc2Nzc18xIiwid2lkdGgiLCJoZWlnaHQiLCJDaXJjbGVfMSIsInRleHQiLCJSb3V0ZUNvbXBvbmVudCIsIkhlYWRlcl8xIiwiRm9vdGVyXzEiLCJTZWN0aW9uIiwiU2VjdGlvbl9tb2R1bGVfc2Nzc18xIiwic2VjdGlvbiIsImFkdmFudGFnZXMiLCJHYW1lU3RhdCIsIkdhbWVTdGF0X21vZHVsZV9zY3NzXzEiLCJsZWFybmVkIiwiY29ycmVjdCIsInJvdyIsIlN0YXRXb3JkcyIsIlN0YXRXb3Jkc19tb2R1bGVfc2Nzc18xIiwiU3RhdGlzdGljVG9kYXkiLCJhbW91bnRTcHJpbnQiLCJzZXRBbW91bnRTcHJpbnQiLCJhbW91bnRBdWRpbyIsInNldEFtb3VudEF1ZGlvIiwiY29ycmVjdFNwcmludCIsInNldENvcnJlY3RTcHJpbnQiLCJjb3JyZWN0QXVkaW8iLCJzZXRDb3JyZWN0QXVkaW8iLCJyb3dTcHJpbnQiLCJzZXRSb3dTcHJpbnQiLCJyb3dBdWRpbyIsInNldFJvd0F1ZGlvIiwidXNlckRhdGUiLCJvYmplY3RXb3JkcyIsIkxlYXJuZWRXb3Jkc0FQSV8xIiwib2JqZWN0U3RhdCIsIlN0YXRpc3RpY1RvZGF5X21vZHVsZV9zY3NzXzEiLCJsZWZ0IiwiU3RhdFdvcmRzXzEiLCJQcm9ncmVzc0Jhcl8xIiwiY2VpbCIsIndyaWdodEFuc3dlcnMiLCJyaWdodCIsIkdhbWVTdGF0XzEiLCJ0aXRsZUZvbnQiLCJmYW1pbHkiLCJ3ZWlnaHQiLCJzaXplIiwibGluZUhlaWdodCIsInRpdGxlU2V0dGluZ3MiLCJkaXNwbGF5IiwiZm9udCIsInBhZGRpbmciLCJ0aWNrc0ZvbnQiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJzY2FsZXMiLCJ4QXhpcyIsImFkYXB0ZXJzIiwibG9jYWxlIiwibG9jYWxlXzEiLCJ1bml0IiwidGlja3MiLCJ5QXhpcyIsImNyZWF0ZUdyYWRpZW50IiwiY3R4IiwiYXJlYSIsImNvbG9yU3RhcnQiLCJjb2xvckVuZCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJib3R0b20iLCJ0b3AiLCJhZGRDb2xvclN0b3AiLCJDaGFydCIsIndvcmRDb3VudCIsImNoYXJ0UmVmIiwic2V0R3JhZGllbnQiLCJjdXJyZW50IiwiY2hhcnRBcmVhIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwicmVhY3RfY2hhcnRqc18yXzEiLCJyZWYiLCJTdGF0aXN0aWNzRm9yQWxsVGltZSIsIm5ld1dvcmRBY3RpdmUiLCJzZXROZXdXb3JkQWN0aXZlIiwidXNlclN0YXRpc3RpY3NQZXJEYXkiLCJzZXRVc2VyU3RhdGlzdGljc1BlckRheSIsImNvbnRyb2xsZXJSZWYiLCJwcm9wZXJ0eSIsInN0b3JhZ2VEYXRhIiwiYWJvcnQiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwiYXR0cmlidXRlIiwiZW50cmllcyIsIngiLCJ5IiwiU3RhdGlzdGljc0ZvckFsbFRpbWVfbW9kdWxlX3Njc3NfMSIsImJ1dHRvbkFjdGl2ZSIsIkNoYXJ0XzEiLCJXb3JkQ2FyZCIsIndvcmRJZCIsImFjY2VudENvbG9yIiwic2V0V29yZCIsImFkZENvbG9yIiwid29yZENhcmRzIiwiZSIsIldvcmRDYXJkX21vZHVsZV9zY3NzXzEiLCJBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQiLCJ1c2VBcHBsaWNhdGlvbkFjY2Vzc0NvbnRleHQiLCJhcHBDb250ZXh0IiwicmFuZ2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpZHgiLCJ1c2VQYWdpbmF0aW9uIiwiY3VycmVudFBhZ2UiLCJwYWdpbmF0aW9uUmFuZ2UiLCJzaWJsaW5nQ291bnQiLCJ0b3RhbFBhZ2VDb3VudCIsImxlZnRTaWJsaW5nSW5kZXgiLCJtYXgiLCJyaWdodFNpYmxpbmdJbmRleCIsIm1pbiIsInNob3VsZFNob3dMZWZ0RG90cyIsInNob3VsZFNob3dSaWdodERvdHMiLCJmaXJzdFBhZ2VJbmRleCIsImxhc3RQYWdlSW5kZXgiLCJsZWZ0SXRlbUNvdW50IiwibGVmdFJhbmdlIiwicmlnaHRJdGVtQ291bnQiLCJyaWdodFJhbmdlIiwibWlkZGxlUmFuZ2UiLCJyb290IiwiY2xpZW50XzEiLCJjcmVhdGVSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJBcHBfMSIsImVtYWlsIiwic2V0RW1haWwiLCJlbWFpbERpcnR5Iiwic2V0RW1haWxEaXJ0eSIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkRGlydHkiLCJzZXRQYXNzd29yZERpcnR5IiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJmb3JtVmFsaWQiLCJzZXRGb3JtVmFsaWQiLCJyZWdpc3RyYXRpb25FcnJvciIsInNldFJlZ2lzdHJhdGlvbkVycm9yIiwic2V0TG9hZGluZyIsIm5hdmlnYXRlIiwiYmx1ckhhbmRsZXIiLCJjaGFuZ2VIYW5kbGVyIiwicmVnRXhwRW1haWwiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJhdXRob3JpemF0aW9uVXNlciIsIlVzZXJzQVBJXzEiLCJzZXRJdGVtIiwibWVzc2FnZSIsImFjdGlvbiIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJBdXRob3JpemF0aW9uX21vZHVsZV9zY3NzXzEiLCJpbmZvIiwicmVnaXN0cmF0aW9uIiwiRm9ybUlucHV0XzEiLCJsYWJlbCIsIm9uQ2hhbmdlIiwib25CbHVyIiwicGxhY2Vob2xkZXIiLCJkaXJ0eSIsIkJ1dHRvbl8xIiwiYnV0dG9uQXV0aG9yaXphdGlvbiIsIldhcm5pbmdNZXNzYWdlXzEiLCJlcnJvckNvbmRpdGlvbiIsIkVudHJhbmNlIiwiRW50cmFuY2VfbW9kdWxlX3Njc3NfMSIsImlsbHVzdHJhdGlvbiIsIkZvcm1JbnB1dCIsImlucHV0SGlkZSIsInNldElucHV0U2hvdyIsIkZvcm1JbnB1dF9tb2R1bGVfc2Nzc18xIiwiZXhwbGFuYXRpb24iLCJpbnB1dENvbnRhaW5lciIsImlucHV0IiwiYnV0dG9uRXllIiwiYnV0dG9uRXllSGlkZSIsIlJlZ2lzdHJhdGlvbiIsInNldE5hbWUiLCJuYW1lRGlydHkiLCJzZXROYW1lRGlydHkiLCJuYW1lRXJyb3IiLCJzZXROYW1lRXJyb3IiLCJyZWdpc3RlclVzZXIiLCJSZWdpc3RyYXRpb25fbW9kdWxlX3Njc3NfMSIsImF1dGhvcml6YXRpb24iLCJidXR0b25SZWdpc3RyYXRpb24iLCJXYXJuaW5nTWVzc2FnZSIsIldhcm5pbmdNZXNzYWdlX21vZHVsZV9zY3NzXzEiLCJ0cmFuc3BhcmVudCIsIkF1ZGlvIiwiQXVkaW9fbW9kdWxlX3Njc3NfMSIsImNvbnRhaW5lcl9fY29udGVudCIsIkdhbWVfMSIsIkRlc2NyaXB0aW9uIiwic2V0RGlmZmljdWx0eUxldmVsIiwic2V0SXNTZXR0bGVkIiwiRGVzY3JpcHRpb25fbW9kdWxlX3Njc3NfMSIsImhlYWRpbmciLCJwYXJhZ3JhcGgiLCJEaWZmaWN1bHR5XzEiLCJEaWZmaWN1bHR5IiwiY2hhbmdlQ29sb3IiLCJpIiwiY29weSIsImRpZmZpY3VsdHlMZXZlbHNfMSIsIm9ua2V5dXAiLCJjb2RlIiwiY2xpY2siLCJEaWZmaWN1bHR5X21vZHVsZV9zY3NzXzEiLCJkaWZmaWN1bHR5X19jb250YWluZXIiLCJkaWZmaWN1bHRpZXMiLCJEaWZmaWN1bHR5Q2FyZF8xIiwiY2hhbmdlTGV2ZWwiLCJlbCIsIkdhbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc1NldHRsZWQiLCJkaWZmaWN1bHR5TGV2ZWwiLCJzZXRXb3JkcyIsImdldFdvcmRzIiwicGciLCJsdmwiLCJEaWN0aW9uYXJ5QVBJXzEiLCJEZXNjcmlwdGlvbl8xIiwiR2FtZVBsYXlfMSIsIkF1ZGlvQnV0dG9uIiwiQXVkaW9CdXR0b25fbW9kdWxlX3Njc3NfMSIsImF1ZGlvX19idXR0b24iLCJhdXRvUGxheSIsIkRldGFpbGVkQXVkaW9Xb3JkIiwiRGV0YWlsZWRBdWRpb1dvcmRfbW9kdWxlX3Njc3NfMSIsInRleHRDb250ZW50IiwiYXVkaW9CdXR0b24iLCJHYW1lRnJhbWUiLCJjdXJyZW50V29yZHMiLCJjb3JyZWN0cyIsInN0cmVhayIsInBvaW50cyIsInNldENvcnJlY3RzIiwic2V0RXJyb3IiLCJzZXRTdHJlYWsiLCJzZXRGaW5pc2hlZCIsInJlbWFpbmluZ1dvcmRzIiwic2V0UmVtYWluaW5nV29yZHMiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwidmFyaWFudHMiLCJzZXRWYXJpYW50cyIsImdldFZhcmlhbnRzIiwid3JvbmdWYXJpYW50cyIsImZpbHRlciIsInZhcmlhbnQiLCJzbGljZSIsIl9fc3ByZWFkQXJyYXkiLCJHYW1lRnJhbWVfbW9kdWxlX3Njc3NfMSIsIkRldGFpbGVkQXVkaW9Xb3JkXzEiLCJBdWRpb0J1dHRvbl8xIiwiVmFyaWFudHNfMSIsIlZhcmlhbnQiLCJ2YXJpYW50RGF0YSIsIlZhcmlhbnRfbW9kdWxlX3Njc3NfMSIsIlZhcmlhbnRzIiwib3B0aW9uIiwic2V0T3B0aW9uIiwiaXNDaG9zZW4iLCJzZXRJc0Nob3NlbiIsInNldFJlc3VsdCIsImVsZW1lbnRzIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2hvd0NvcnJlY3RBbnN3ZXIiLCJyZXBhaW50VmFyaWFudHMiLCJjaG9pY2UiLCJhbnN3ZXIiLCJpc0NvcnJlY3QiLCJjb250YWlucyIsIm5leHRIYW5kbGVyIiwiY3VyU3RyZWFrIiwiVmFyaWFudHNfbW9kdWxlX3Njc3NfMSIsInZhcmlhbnRzX19jb250YWluZXIiLCJWYXJpYW50XzEiLCJuZXh0IiwiR2FtZVBsYXkiLCJzZXRQb2ludCIsIm1heFN0cmVhayIsInNldE1heFN0cmVhayIsImZpbmlzaGVkIiwiR2FtZUZyYW1lXzEiLCJSZXN1bHRfMSIsIlJlc3VsdCIsInNpZ24iLCJjb3VudCIsInNlcnZlciIsInNwbGl0Iiwic2VydmVyY291bnRzcHJpbnQiLCJzZXJ2ZXJjb3VudGF1ZGlvIiwiY291bnRuZXciLCJjb3VudG5ld2F1ZGlvIiwiaW5jbHVkZXMiLCJwdXNoIiwiV29yZE51bWJlclNwcmludCIsIldvcmROdW1iZXJBdWRpbyIsIm5ld0xlYXJuV29yZHMiLCJsdyIsIlJlc3VsdF9tb2R1bGVfc2Nzc18xIiwiU2xpZGVyXzEiLCJ2b2NhYnVsYXJ5IiwiU2xpZGVyIiwiY29ycmVjdEFtb3VudCIsImVycm9yQW1vdW50Iiwicm91bmQiLCJTbGlkZXJfbW9kdWxlX3Njc3NfMSIsInNsaWRlcl9fY29udGFpbmVyIiwiaW5uZXIiLCJTdGF0aXN0aWNzXzEiLCJXb3Jkc1N1bW1hcnlfMSIsIlN0YXRpc3RpY3MiLCJoYW5kbGVyIiwiU3RhdGlzdGljc19tb2R1bGVfc2Nzc18xIiwiYXJyb3ciLCJTZWN0aW9uSGVhZGVyIiwiU2VjdGlvbkhlYWRlcl9tb2R1bGVfc2Nzc18xIiwiU2VjdGlvbkl0ZW0iLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiU2VjdGlvbkl0ZW1fbW9kdWxlX3Njc3NfMSIsIml0ZW1Db250YWluZXIiLCJXb3Jkc1N1bW1hcnkiLCJXb3Jkc1N1bW1hcnlfbW9kdWxlX3Njc3NfMSIsIlNlY3Rpb25IZWFkZXJfMSIsIlNlY3Rpb25JdGVtXzEiLCJkaXZpZGVyIiwiVG9HYW1lc18xIiwiVG9HYW1lcyIsIlRvR2FtZXNfbW9kdWxlX3Njc3NfMSIsImNyb3NzX19jb250YWluZXIiLCJjcm9zcyIsIkdhbWVzUGFnZSIsIkdhbWVzX21vZHVsZV9zY3NzXzEiLCJtYWluIiwidm9sdW1lIiwidm9sdW1lSW5HYW1lIiwiQ2FyZEJ1dHRvbiIsImNoYW5nZSIsInJlZnJlc2hBbnN3ZXIiLCJyZWZyZXNoIiwiQ2FyZEJ1dHRvbl9tb2R1bGVfc2Nzc18xIiwiQXJyb3dFbmRDYXJkIiwic2xpZGUiLCJBcnJvd0VuZENhcmRfbW9kdWxlX3Njc3NfMSIsImFycm93U3RhdCIsImFycm93RW5kIiwiYXJyb3dTdGF0cyIsIkNhcmRFbmRHYW1lIiwiYW5pbWF0aW9uIiwic2V0QW5pbWF0aW9uIiwiQ2FyZEVuZEdhbWVfbW9kdWxlX3Njc3NfMSIsImNvbnRhaW5lckVuZENhcmQiLCJhbmltYXRpb25SaWdodCIsImFuaW1hdGlvbkxlZnQiLCJDYXJkU2lkZXNfMSIsInNjb3JlIiwid29yZHNBbW91bnQiLCJNYXNjb3QiLCJBcnJvd0VuZENhcmRfMSIsIkxpbmtUb2RpY3Rpb25hcnlfMSIsIldvcmRzQ29tcG9uZW50XzEiLCJXb3JkTGlzdF8xIiwibWlzdGFrZXMiLCJzaWRlIiwiQ2FyZFNpZGVzIiwiY2FyZFNpZGVzX21vZHVsZV9zY3NzXzEiLCJMaW5rVG9kaWN0aW9uYXJ5IiwiTGlua1RvRGljdGlvbmFyeV9tb2R1bGVfc2Nzc18xIiwidG9EaWN0aW9uYXJ5IiwiV29yZExpc3QiLCJtaXN0YWtlc0ZpbHRlcmVkIiwibGVhcm5lZEZpbHRlcmVkIiwiV29yZExpc3RIZWFkZXJfMSIsIldvcmRMaXN0X21vZHVsZV9zY3NzXzEiLCJXb3JkTGlzdEhlYWRlciIsIldvcmRMaXN0SGVhZGVyX21vZHVsZV9zY3NzXzEiLCJtaXN0YWtlc0luZGljYXRpb3IiLCJsZWFybmVkSW5kaWNhdG9yIiwiV29yZHNDb21wb25lbnQiLCJXb3Jkc0NvbXBvbmVudF9tb2R1bGVfc2Nzc18xIiwiQ2FyZEluR2FtZSIsIkNhcmRJbkdhbWVfbW9kdWxlX3Njc3NfMSIsIkNhcmRVcHBlclBhcnQiLCJDYXJkU2NvcmVQb2ludHNfMSIsImRvbmUiLCJ3b3JkR3Vlc3MiLCJuZXh0USIsIkNhcmRXb3JkR3Vlc3NQYXJ0XzEiLCJPdXJHdWVzcyIsIm91ckd1ZXNzIiwiR3Vlc3NXb3JkIiwiY29udHJvbHMiLCJjb3Ryb2xzQ29udGFpbmVyIiwiQ2FyZEJ1dHRvbl8xIiwiYXJyb3dzIiwiY290cm9sc0NvbnRhaW5lcl9fYXJyb3ciLCJDYXJkU2NvcmVQb2ludHMiLCJDYXJkU2NvcmVQb2ludHNfbW9kdWxlX3Njc3NfMSIsIkNhcmRTcGlybnQiLCJDYXJkU3Bpcm50X21vZHVsZV9zY3NzXzEiLCJnYW1lIiwiU2NvcmVHYW1lXzEiLCJjYXJkRW5kIiwiQ2FyZEluR2FtZV8xIiwiQ2FyZEVuZEdhbWVfMSIsImJhY2tUb0dhbWUiLCJDYXJkV29yZEd1ZXNzUGFydCIsIkNhcmRXb3JkR3Vlc3NQYXJ0X21vZHVsZV9zY3NzXzEiLCJDb3VudGVyR2FtZSIsIkNvdW50ZXJHYW1lX21vZHVsZV9zY3NzXzEiLCJjb3VudGVyIiwiR2FtZUhlYWRlciIsIkdhbWVIZWFkZXJfbW9kdWxlX3Njc3NfMSIsIlNjb3JlR2FtZSIsIlNjb3JlR2FtZV9tb2R1bGVfc2Nzc18xIiwiU3ByaW50RGVzY3JpcHRpb24iLCJTcHJpbnREZXNjcmlwdGlvbl9tb2R1bGVfc2Nzc18xIiwiY2hhbmdlRGlmIiwiYnV0dG9ucyIsImFjdGl2ZSIsInNwYW4iLCJhY3RpdmVDaGFuZ2UiLCJhIiwiZGlmZmljdWx0eSIsIlNwcmludERpZmZpY3VsdHkiLCJzZXRBY3RpdmUiLCJTcHJpbnREaWZmaWN1bHR5X21vZHVsZV9zY3NzXzEiLCJub3RBY3RpdmUiLCJTcHJpbnRHYW1lIiwiZW1wdHlTdGF0ZSIsImdhbWVTdGFnZSIsInNldEdhbWVTdGFnZSIsInNldE5leHRRIiwieFNjb3JlIiwic2V0WFNjb3JlIiwiQXJyYXlHYW1lIiwic2V0QXJyYXlHYW1lIiwic2V0TWlzdGFrZXMiLCJzZXRMZWFybmVkIiwidGltZWxlZnQiLCJzZXRUaW1lTGVmdCIsImlzQ291bnRpbmciLCJzZXRJc0NvdW50aW5nIiwic2V0U2NvcmUiLCJzdGF0ZSIsInNldFN0YXRlIiwicG9pbnROdW1iZXIiLCJzZXRQb2ludE51bWJlciIsInBvaW50SW5BUm93Iiwic2V0UG9pbnRJbkFSb3ciLCJwb2ludEluQVJvd1N0YXQiLCJzZXRQb2ludEluQVJvd1N0YXQiLCJzZXRBbnN3ZXIiLCJvdXJBbnN3ZXIiLCJzZXRvdXJBbnN3ZXIiLCJzZXRPdXJHdWVzcyIsInNldFdvcmRHdWVzcyIsImdldG91ckd1ZXNzIiwibnVtYmVyIiwibnVtYmVyVXAiLCJudW1iZXJEb3duIiwicmVmcmVzaE91ckFuc3dlciIsInJlZnJlc2hQb2ludCIsInBvaW50IiwiY29ycmVjdEFuc3dlciIsIm5ld1N0YXRlIiwiY29ycmVjdFdvcmQiLCJuZXdBcnJheSIsInNwbGljZSIsImluZGV4T2YiLCJwb2ludFN0YXRlTmV3Iiwid3JvbmdBbnN3ZXIiLCJuZXdDb3VudCIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImJ1dHRvbkFuc3dlciIsIm9ua2V5ZG93biIsImtleUNvZGUiLCJTcHJpbnRHYW1lX21vZHVsZV9zY3NzXzEiLCJHYW1lSGVhZGVyXzEiLCJDb3VudGVyR2FtZV8xIiwiQ2FyZFNwaXJudF8xIiwiU3RhcnRpbmdQYWdlU3ByaW50Iiwic2V0RGlmZmljdWx0eSIsImNoYW5nZURpZmZpY3VsdHkiLCJTdGFydGluZ1BhZ2VTcHJpbnRfbW9kdWxlX3Njc3NfMSIsIlNwcmludERlc2NyaXB0aW9uXzEiLCJTcHJpbnREaWZmaWN1bHR5XzEiLCJBZHZhbnRhZ2VzIiwiU2VjdGlvbl8xIiwiQWR2YW50YWdlQ2FyZF8xIiwiTWFpbiIsIk1haW5fbW9kdWxlX3Njc3NfMSIsIldlbGNvbWVfMSIsIkFkdmFudGFnZXNfMSIsIlRlYW1TZWN0aW9uXzEiLCJUZWFtU2VjdGlvbiIsIkNhcmRUZWFtXzEiLCJXZWxjb21lIiwiV2VsY29tZV9tb2R1bGVfc2Nzc18xIiwiU3RhdGlzdGljIiwiU3RhdGlzdGljVG9kYXlfMSIsIlN0YXRpc3RpY3NGb3JBbGxUaW1lXzEiLCJpbml0U3R5bGUiLCJjdXJMZXZlbCIsIkdhbWVzIiwiZ2FtZUNhcmRzXzEiLCJjZW50ZXIiLCJQYWdpbmF0aW9uIiwib25OZXh0Iiwib25QcmV2aW91cyIsIm9uUGFnZUNsaWNrIiwiY3VyUGFnZSIsImxhc3RQYWdlIiwiYXQiLCJQYWdpbmF0aW9uX21vZHVsZV9fc2Nzc18xIiwicGFnaW5hdGlvbl9fY29udGFpbmVyIiwicGFnaW5hdGlvbl9faXRlbSIsInBhZ2VOdW1iZXIiLCJ1c2VQYWdpbmF0aW9uXzEiLCJkb3RzIiwic2VsZWN0ZWQiLCJWb2NhYnVsYXJ5Iiwic2V0V29yZElkIiwiY3VyV29yZCIsInNldEN1cldvcmQiLCJkb3dubG9hZFdvcmRzIiwiZG93bmxvYWRXb3JkIiwid29yZElEIiwiVm9jYWJ1bGFyeV9tb2R1bGVfc2Nzc18xIiwiV29yZENhcm91c2VsXzEiLCJEZXRhaWxlZFdvcmRfMSIsIlBhZ2luYXRpb25fMSIsIldvcmRDYXJvdXNlbCIsIldvcmRDYXJvdXNlbF9tb2R1bGVfc2Nzc18xIiwiQXJyb3dCdXR0b25fMSIsIldvcmRDYXJkXzEiXSwic291cmNlUm9vdCI6IiJ9