import browser_tools.angular.Config;
import browser_tools.Loader;
import angular.service.*;
using browser_tools.HtmlTools;

class OutputController {

  public static function factory(scope:Scope) {}

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
