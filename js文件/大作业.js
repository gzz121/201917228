showTime=function () {
    var time=new Date();
    var weeks=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var date=time.getDate();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var week=weeks[time.getDay()];
    if(month<10){
        month = "0"+month;
    }
    if(date<10){
        date = "0"+date;
    }
    if(hours<10){
        hours = "0"+hours;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }
    var nowTime=year+"年"+month+"月"+date+"日"+hours+"时"+minutes+"分"+seconds+"秒（"+week+")";
    var show="现在是"+nowTime+",欢迎您的到访！";
    document.getElementById("date").innerHTML=show;
}