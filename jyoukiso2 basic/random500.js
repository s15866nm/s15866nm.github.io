
//配列を宣言。英単語を配列にいれる
var col = new Array("maple","banana","strawberry","cherry");
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



