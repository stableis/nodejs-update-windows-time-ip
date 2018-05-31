# nodejs-update-windows-time-ip

## Update Windows Time from current I.P NodeJS

//-> Install Modules

npm install -s sudo-prompt      ( https://www.npmjs.com/package/sudo-prompt )
npm install -s request          ( https://www.npmjs.com/package/request )

Requires/

sudo = require('sudo-prompt');

request = require('request'); 

This code can help you change windows time to current I.P Timezone.

There is no implementation of **DST** ( https://en.wikipedia.org/wiki/Daylight_saving_time ) yet however you can easily implement this by adding a manual change in date and time.

It uses the Windows Utility, **"tzutil"** ( https://msdn.microsoft.com/en-us/library/dn938338(v=vs.85).aspx ) and Windows Utlity, "time".

--> **tzutil** is used to set the timezone ( take note of the DST absense )

--> **time** is used to set the Windows Time without regards to Time Zone.


Things to take note of::::

The computer may revert the time if set to syncronize with an internet time server but this has not been tested or confirmed.

