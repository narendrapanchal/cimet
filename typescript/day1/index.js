var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var apiCallNumber = 0;
var isLoading = false;
var pokemonTypesObject = {};
var pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
var button = document.querySelector('button');
var select = document.getElementById('selectType');
var searchInput = document.getElementById('searchInput');
var selectedValue = "";
var searchValue = "";
var pokemonData = [];
button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!isLoading) return [3 /*break*/, 2];
                button.textContent = 'Loading...';
                return [4 /*yield*/, fetchData()];
            case 1:
                _a.sent();
                button.textContent = 'Load more';
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!isLoading && pokemonApiUrl != null)) return [3 /*break*/, 2];
                    isLoading = true;
                    return [4 /*yield*/, fetch(pokemonApiUrl).then(function (res) { return res.json(); }).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var requests;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        pokemonApiUrl = res.next;
                                        requests = res.results.map(function (_a) { return __awaiter(_this, [_a], void 0, function (_b) {
                                            var res, pokemonDetails, pokemon;
                                            var url = _b.url;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0: return [4 /*yield*/, fetch(url)];
                                                    case 1:
                                                        res = _c.sent();
                                                        return [4 /*yield*/, res.json()];
                                                    case 2:
                                                        pokemonDetails = _c.sent();
                                                        pokemon = {
                                                            name: pokemonDetails.name,
                                                            id: pokemonDetails.id,
                                                            image: pokemonDetails.sprites.front_default,
                                                            types: pokemonDetails.types.map(function (_a) {
                                                                var type = _a.type;
                                                                pokemonTypesObject[type.name.toLowerCase()] = 1;
                                                                return type.name.toLowerCase();
                                                            }).join(" ")
                                                        };
                                                        pokemonData.push(pokemon);
                                                        return [2 /*return*/, pokemon];
                                                }
                                            });
                                        }); });
                                        return [4 /*yield*/, Promise.all(requests)];
                                    case 1:
                                        _a.sent();
                                        displayData(pokemonData);
                                        isLoading = false;
                                        addSelectTypes();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).catch(function (err) {
                            isLoading = false;
                            console.error(err.message);
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function displayData(pokemonData) {
    if (selectedValue != null) {
        pokemonData = pokemonData.filter(function (pokemon) { return pokemon.types.split(" ").includes(selectedValue); });
    }
    if (searchValue != null) {
        pokemonData = pokemonData.filter(function (pokemon) { return pokemon.name.toLowerCase().includes(searchValue); });
    }
    var pokemonContainer = document.getElementById("pokemonContainer");
    pokemonContainer.innerHTML = '';
    pokemonData.forEach(function (pokemon) {
        var div = document.createElement('div');
        div.className = 'flip-card';
        div.innerHTML = "<div class=\"flip-card-inner\">\n        <div class=\"flip-card-front\">\n          <img src=\"".concat(pokemon.image, "\" alt=\"").concat(pokemon.name, "\" style=\"width:300px;height:300px;\">\n        </div>\n        <div class=\"flip-card-back\">\n          <h2>").concat(pokemon.name, "</h2>\n            <p>Types: ").concat(pokemon.types, "</p>\n        </div>\n      </div>\n     ");
        pokemonContainer.appendChild(div);
    });
}
function addSelectTypes() {
    var option = document.createElement('option');
    option.text = "Select Type";
    option.value = "";
    select.append(option);
    Object.keys(pokemonTypesObject).forEach(function (type) {
        var option = document.createElement('option');
        option.text = type;
        option.value = type;
        select.append(option);
    });
    select.style.display = 'block';
}
select.addEventListener('change', function () {
    selectedValue = select.value;
    displayData(pokemonData);
});
searchInput.addEventListener('input', function () {
    searchValue = searchInput.value.toLowerCase();
    displayData(pokemonData);
});
fetchData();
