import browser_tools.angular.Config;
import browser_tools.Loader;

class Main implements async_tools.Async {

  public static var app = CompileTime.parseJsonFile('config.json');

  @:async static inline function load() {
    Loader.start();
    var module = @await Config.init('name',app);
    Loader.end();
  }


  public static function main() {
    load(thx.Functions.noop);
  }
}
