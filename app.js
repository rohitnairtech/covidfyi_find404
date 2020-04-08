const axios = require('axios');
const {Agent} = require('https');

const instance = axios.create({
  httpsAgent: new Agent({  
    rejectUnauthorized: false
  })
});

instance.get('https://icmr.nic.in/sites/default/files/whats_new/ICMR_testing_update_07April_9PM_IST.pdf').then((data)=>{
	//Buffer data
	console.log(data.data);
	//Link works. Can do additional file mime type check if you want to verify if the link is a PDF
	//To check if returned data type is PDF
	if(data.headers['content-type'] === 'application/pdf'){
		//file type is PDF
		console.log('Is PDF');
	}
}).catch(({response})=>{
	if(response.status === 404){
		console.log('link expired');
	}
	else{
		console.log('Some other error. Add to report.');
	}
});