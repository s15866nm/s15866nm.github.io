
//配列を宣言。英単語を配列にいれる
var col = new Array("grapes","orange","pineapple","watermelon");
var appId = "Bing API AppID";
//乱数を入れる変数。グローバル関数の利用。正誤判定の時にrndをつかうこと になるから
var rnd;

//テキストボックスに色名を表示する
function tango(){

//0～4までの乱数を発生させる。math.randomは0以上１未満なのでそれを５倍して0から3までの整数を得る。
rnd = Math.floor( Math.random() *4);
document.quiz1.elements[0].value = col[rnd];

}
//正誤判定。引数(クリックされた英単語)をparseIntで数字に変換。変 数nへ。乱数とボタンの日本語を比較
function push(num){
  var n = parseInt(num);
  if ( n == rnd){
      tango();
  }else{
alert("下を見ておぼえなおしましょう");


      }
　}
'use strict';

var http = require('http');
var https = require('https');
var qs = require('querystring');

getAccessToken(function (token) {
    translate(token, '翻訳したい文章', function (translated) {
        console.log(translated);
    });
});

function getAccessToken(callback) {
    var body = '';
    var req = https.request({
        host: 'datamarket.accesscontrol.windows.net',
        path: '/v2/OAuth2-13',
        method: 'POST'
    }, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            body += chunk;
        }).on('end', function () {
            var resData = JSON.parse(body);
            callback(resData.access_token);
        });
    }).on('error', function (err) {
        console.log(err);
    });
    var data = {
        'client_id': 'Noko',
        'client_secret': 'rYhBW4UFYZPGxQWZnJZA2nDUNKjmX0Ng9RU/R91L7O0=',
        'scope': 'http://api.microsofttranslator.com',
        'grant_type': 'client_credentials'
    };

    req.write(qs.stringify(data));
    req.end();
}

function translate(token, text, callback) {
    var options = 'appId=Bearer ' + token + '&to=en&text=' + text +
            '&oncomplete=translated';
    var body = '';
    var req = http.request({
        host: 'api.microsofttranslator.com',
        path: '/V2/Ajax.svc/Translate?' + qs.escape(options),
        method: 'GET'
    }, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            body += chunk;
        }).on('end', function () {
            eval(body);
        });
    }).on('error', function (err) {
        console.log(err);
    });

    req.end();

    function translated(text) {
        callback(text);
    }
}




