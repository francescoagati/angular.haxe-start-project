import browser_tools.angular.Config;
import browser_tools.Loader;
import angular.service.*;
using browser_tools.HtmlTools;

class OutputController {

  public static function factory(scope:Scope) {

      var scope_dyn:Dynamic = scope;
      var chart1:Dynamic = {};
      chart1.type = "ColumnChart";
      chart1.cssStyle = "height:200px; width:300px;";
      chart1.data = untyped {"cols": [
          {id: "month", label: "Month", type: "string"},
          {id: "laptop-id", label: "Laptop", type: "number"},
          {id: "desktop-id", label: "Desktop", type: "number"},
          {id: "server-id", label: "Server", type: "number"},
          {id: "cost-id", label: "Shipping", type: "number"}
      ], "rows": [
          {c: [
              {v: "January"},
              {v: 19, f: "42 items"},
              {v: 12, f: "Ony 12 items"},
              {v: 7, f: "7 servers"},
              {v: 4,f:""}
          ]},
          {c: [
              {v: "February"},
              {v: 13},
              {v: 1, f: "1 unit (Out of stock this month)"},
              {v: 12},
              {v: 2}
          ]},
          {c: [
              {v: "March"},
              {v: 24},
              {v: 0},
              {v: 11},
              {v: 6}

          ]}
      ]};

      chart1.options = {
          "title": "Sales per month",
          "isStacked": "true",
          "fill": 20,
          "displayExactValues": true,
          "vAxis": {
              "title": "Sales unit", "gridlines": {"count": 6}
          },
          "hAxis": {
              "title": "Date"
          }
      };

      chart1.formatters = {};
      scope_dyn.chart = chart1;


  }
}



class Main implements async_tools.Async {

  public static var app = CompileTime.parseJsonFile('config.json');

  @:async static inline function load() {
    Loader.start();
    var module = @await Config.init('app',app);
    module.controller('OutputController',OutputController.factory);
    angular.Angular.bootstrap('app'.byId(),['app']);
    Loader.end();
  }


  public static function main() {
    load(thx.Functions.noop);
  }
}
