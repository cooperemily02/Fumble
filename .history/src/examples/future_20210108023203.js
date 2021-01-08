
const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

var AWS_KEY = 'AKIAQ63SHGILJVPRTOGP';
var AWS_SECRET = 'YdwkZgZ7lGQFbktqSLCoasUeer3hTsA/mOZ5aC+z';

const filePath = '/Users/poojapatel/Documents/School/react-tinder-card-demo-master/src/examples/food.json';

var BUCKET = 'food-pics';
var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: AWS_KEY, secretAccessKey: AWS_SECRET});
var s3 = new AWS.S3();

var params = {
    Bucket: BUCKET,
}

var urls = [];


const db = [
    {
      name: 'Richard Hendricks',
      url: '',
      img: 0
    },
    {
      name: 'Erlich Bachman',
      url: './img/erlich.jpg',
      img: 1

    }
    
  ]


var i = 0;
s3.listObjects(params, function(err, data){
    if (err) return console.log(err);
    // console.log(data.Contents.length)
    for (i=0; i<data.Contents.length; i++ ){
        var url =  "https://"+ params.Bucket+".s3.amazonaws.com/"+ data.Contents[i].Key
        urls.push(url)
    }
    for(i=0; i<db.length; i++)
  {
db[i].url= urls[i]
  }

  async function downloadImage () {  
    const url = db[0].url
    const path = Path.resolve(__dirname, '/Users/poojapatel/Documents/School/react-tinder-card-demo-master/docs/img', 'tester.jpg')
    const writer = Fs.createWriteStream(path)
  
    const response = await Axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)
  
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })
  }
  
  downloadImage()  
  console.log()
    
  db[0].url= "'docs/img/" + "tester.jpg'"
console.log( db[0].url)


});
