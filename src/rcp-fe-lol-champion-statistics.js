(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    const e = (c[d] = {
      i: d,
      l: !1,
      exports: {},
    });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) ||
        Object.defineProperty(a, c, {
          configurable: !1,
          enumerable: !0,
          get: d,
        });
    }),
    (b.n = function (a) {
      const c =
        a && a.__esModule
          ? function () {
              return a.default;
            }
          : function () {
              return a;
            };
      return b.d(c, 'a', c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = '/fe/lol-champion-statistics/'),
    b((b.s = 0))
  );
})([
  function (a, b, c) {
    'use strict';
    const d = c(1);
    const e = (function (a) {
      return a && a.__esModule
        ? a
        : {
            default: a,
          };
    })(d);
    c(3);
    const f = document.currentScript.ownerDocument;
    const g = window.getPluginAnnounceEventName(
      'rcp-fe-lol-champion-statistics',
    );
    f.addEventListener(
      g,
      function (a) {
        const b = a.registrationHandler;
        b(function () {
          return (0, e.default)();
        });
      },
      {
        once: !0,
      },
    );
  },
  function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
      value: !0,
    }),
      (b.default = function () {
        return {
          getPlayRates: function () {
            return d;
          },
        };
      });
    const d = c(2);
  },
  function (a) {
    a.exports = {
      TOP: {
        2: 0.02491,
        6: 0.0113,
        10: 0.03525,
        14: 0.0157,
        17: 0.01989,
        23: 0.01332,
        24: 0.02981,
        27: 0.01076,
        31: 0.00925,
        36: 0.01218,
        39: 0.02895,
        41: 0.04754,
        50: 0.01101,
        54: 0.01598,
        58: 0.01466,
        62: 0.01236,
        67: 0.01134,
        68: 0.00653,
        74: 0.0024,
        75: 0.01947,
        79: 0.0089,
        82: 0.03526,
        83: 0.01074,
        84: 0.01368,
        85: 0.0071,
        86: 0.02907,
        92: 0.02336,
        98: 0.01602,
        106: 0.02749,
        114: 0.04056,
        122: 0.04815,
        126: 0.01785,
        133: 0.00767,
        150: 0.01687,
        157: 0.01252,
        164: 0.02411,
        223: 0.01183,
        240: 0.00827,
        266: 0.03851,
        420: 0.0137,
        516: 0.01958,
        777: 0.02296,
        875: 0.02763,
        876: 0.01077,
        887: 0.0279,
      },
      JUNGLE: {
        5: 0.01119,
        9: 0.01153,
        11: 0.03223,
        19: 0.01717,
        20: 0.01421,
        28: 0.01174,
        30: 0.01012,
        32: 0.01001,
        33: 0.0134,
        35: 0.0236,
        48: 0.01589,
        56: 0.01848,
        59: 0.01366,
        60: 0.00731,
        62: 0.04954,
        64: 0.0588,
        72: 0.0038,
        76: 0.01848,
        77: 0.0091,
        78: 0.01048,
        91: 0.01857,
        102: 0.01806,
        104: 0.04682,
        106: 0.02871,
        107: 0.0206,
        113: 0.01036,
        120: 0.01543,
        121: 0.03077,
        131: 0.0454,
        141: 0.05106,
        154: 0.02352,
        163: 0.01473,
        200: 0.05131,
        203: 0.02355,
        234: 0.07158,
        238: 0.01085,
        245: 0.02155,
        254: 0.0182,
        421: 0.01298,
        427: 0.00418,
        876: 0.03088,
      },
      SUPPORT: {
        12: 0.01659,
        16: 0.02755,
        22: 0.0306,
        25: 0.03128,
        26: 0.02001,
        37: 0.01457,
        40: 0.02624,
        43: 0.03534,
        44: 0.00757,
        50: 0.02247,
        53: 0.03319,
        57: 0.00656,
        63: 0.02102,
        80: 0.01077,
        89: 0.02772,
        99: 0.04087,
        101: 0.02437,
        111: 0.04683,
        117: 0.05629,
        143: 0.01795,
        147: 0.02293,
        161: 0.01153,
        201: 0.01171,
        235: 0.0715,
        267: 0.05441,
        350: 0.05426,
        412: 0.04648,
        432: 0.01594,
        497: 0.02235,
        526: 0.00647,
        555: 0.04367,
        888: 0.03842,
      },
      BOTTOM: {
        15: 0.01153,
        18: 0.03439,
        21: 0.03852,
        22: 0.03614,
        29: 0.04412,
        51: 0.04726,
        67: 0.05162,
        81: 0.10682,
        96: 0.03557,
        110: 0.01298,
        115: 0.00593,
        119: 0.02727,
        145: 0.08526,
        157: 0.0107,
        202: 0.09161,
        221: 0.05089,
        222: 0.05205,
        236: 0.07206,
        360: 0.05503,
        429: 0.01864,
        498: 0.02701,
        523: 0.02255,
      },
      MIDDLE: {
        1: 0.00794,
        3: 0.00898,
        4: 0.02159,
        7: 0.01876,
        8: 0.02087,
        13: 0.00964,
        34: 0.01672,
        38: 0.01954,
        39: 0.02536,
        41: 0.01518,
        42: 0.00839,
        45: 0.03537,
        50: 0.01591,
        55: 0.04204,
        61: 0.01377,
        69: 0.01165,
        74: 0.003,
        84: 0.02785,
        90: 0.01703,
        91: 0.01225,
        99: 0.02337,
        101: 0.01513,
        103: 0.05076,
        105: 0.01669,
        112: 0.04109,
        127: 0.01927,
        134: 0.01168,
        136: 0.0048,
        142: 0.01675,
        157: 0.06056,
        163: 0.0177,
        166: 0.01479,
        238: 0.03828,
        245: 0.01127,
        246: 0.01469,
        268: 0.01228,
        517: 0.03736,
        518: 0.00714,
        711: 0.0167,
        777: 0.04477,
      },
    };
  },
  function () {},
]);
