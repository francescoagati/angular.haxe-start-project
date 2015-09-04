import angular.Angular;
import angular.service.*;
import angular.route.*;

class Config {
  public static var app = CompileTime.parseJsonFile('config.json');

}



class Main {

  public static function main() {
    browser_tools.angular.Config.init('name',Config.app,function(module) {});
  }
}
