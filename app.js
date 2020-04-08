const axios = require('axios');
const https = require('https');

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

instance.get('https://icmr.nic.in/sites/default/files/whats_new/ICMR_testing_update_07April_9PM_IST.pdf').then(({data})=>{
	console.log(data);
}).catch(({response})=>{
	console.log(response.status);
	//check if 404
});