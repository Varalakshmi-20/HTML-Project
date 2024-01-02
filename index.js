function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);
    var 
    s=checkTime(s);
    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  if(h==0) {
    h=12;
  }
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) 
{
  if (i<10) {i = "0" + i}; 
  return i;
}
function genQuote() 
{
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randNum];
}
var quotes = ["\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>", "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis", "\"If you can dream it, you can do it.\"<br>- Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",
"\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"<br>-  Marilyn Monroe","\"Don't cry because it's over, smile because it happened.\"<br>-  Dr. Seuss",
"\"Be yourself; everyone else is already taken.\"<br>-   Oscar Wilde","\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"<br>-  Albert Einstein",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"<br>-  Bernard M. Baruch","\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\"<br>-  Dr. Seuss","\"A room without books is like a body without a soul.\"<br>-  Marcus Tullius Cicero","\"So many books, so little time.\"<br>-  Frank Zappa",
"\"You only live once, but if you do it right, once is enough.\"<br>- Mae West","\"Be the change that you wish to see in the world.\"<br>- Mahatma Gandhi","\"Doing what you love is the cornerstone of having abundance in your life.\"<br>-  Wayne Dyer","\"It is in your moments of decision that your destiny is shaped.\"<br>- Tony Robbins","\"You are important enough to ask and you are blessed enough to receive back.\"<br>- Wayne Dyer","\"Life is like riding a bicycle. To keep your balance you must keep moving.\<br>- Albert Einstein","\"Whoever is happy will make others happy, too.\"<br>-  Mark Twain","\"We make a living by what we get, but we make a life by what we give.\" <br>- Winston Churchill",
"\"When you doubt your power, you give power to your doubt.\"<br>-  Honore de Balzac","\"Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.\"<br>-  Winston Churchill"];
function startDate() 
{
  var d = new Date();
  var m=d.getMonth()+1;
  var dt=d.getDate();
  m=checkTime(m);
  dt=checkTime(dt);
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+dt+"/"+m+"/"+d.getFullYear();
}