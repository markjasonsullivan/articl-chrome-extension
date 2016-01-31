  (function(e, t) {
      var n = e.amplitude || {};

      var i = function() {
          this._q = [];
          return this
      };

      function a(e) {
          i.prototype[e] = function() {
              this._q.push([e].concat(Array.prototype.slice.call(arguments, 0)));
              return this
          }
      }
      var o = ["add", "append", "clearAll", "set", "setOnce", "unset"];
      for (var c = 0; c < o.length; c++) {
          a(o[c])
      }
      n.Identify = i;
      n._q = [];

      function u(e) {
          n[e] = function() {
              n._q.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          }
      }
      var l = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties"];
      for (var p = 0; p < l.length; p++) {
          u(l[p])
      }
      e.amplitude = n
  })(window, document);

  amplitude.init(window.environmentHelper.getAmplitudeApiKey());
