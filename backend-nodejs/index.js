const ewelink = require('ewelink-api')
require('dotenv').config();

(async () => {

    console.log(process.env.EWEEMAIL)
    console.log(process.env.EWEPWD)

  const connection = new ewelink({
    email: process.env.EWEEMAIL,
    password: process.env.EWEPWD,
    region: 'eu'
  });
  const region = connection.getRegion()
  console.log(region)
  /* get all devices */
  const devices = await connection.getDevices()
  console.log(devices)

  /* get specific devide info */
 // const device = await connection.getDevice('<your device id>');
 // console.log(device);

  /* toggle device */
  await connection.toggleDevice('100033c82c')

})();