class Main {

  public static var app = CompileTime.parseJsonFile('config.json');

  public static function main() {
    browser_tools.angular.Config.init('name',app,function(module) {});
  }
}
