var brwsr;
(function checkBrowser() {
    var chrome, firefox, ie8, ie9, ie10, edge, yandex, opera,safari, safariVersion5, safariVersion6, ios, android, ie10mobile, ie11mobile, ie11, iOSVersion, androidVersion;
    chrome = navigator.userAgent.search("Chrome");
    firefox = navigator.userAgent.search("Firefox");
    ie8 = navigator.userAgent.search("MSIE 8.0");
    ie9 = navigator.userAgent.search("MSIE 9.0");
    ie10 = navigator.userAgent.search("MSIE 10.0");
    edge = navigator.userAgent.search("Edge");
    yandex = navigator.userAgent.search("YaBrowser");
    opera = navigator.userAgent.search("OPR");
    safari = navigator.userAgent.search("Safari");
    safariVersion5 = navigator.userAgent.search("Version/5");
    safariVersion6 = navigator.userAgent.search("Version/6");
    ios = navigator.userAgent.search("Mobile");
    android = navigator.userAgent.search("Android");
    ie10mobile = navigator.userAgent.search("IEMobile/10");
    ie11mobile = navigator.userAgent.search("IEMobile/11");
    ie11 = false;

    if (navigator.appName == 'Netscape'){
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null){ie11 = true;}
        //rv = parseFloat( RegExp.$1 );
    }

    function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
            console.log("%c step1", "background: green; color:white");
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            console.log("%c step2", "background: yellow");
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        } else{
            return "undefined";
        }
    }
    iOSVersion = false;


    function getAndroidVersion(ua) {
        ua = (ua || navigator.userAgent).toLowerCase();
        var match = ua.match(/android\s([0-9\.]*)/);
        return match ? match[1] : false;
    }
    androidVersion = false;

    if (edge > -1) {
        brwsr = "Edge";
        document.documentElement.classList.add("edge");
    } else if (ie10mobile > -1) {
        brwsr = "IE10 Mobile";
        document.documentElement.classList.add("ie10mobile");
    } else if (ie11mobile > -1) {
        brwsr = "IE11 Mobile";
        document.documentElement.classList.add("ie11mobile");
    } else if (yandex > -1) {
        brwsr = "Yandex";
        document.documentElement.classList.add("yandex");
    } else if (opera > -1) {
        brwsr = "Opera";;
        document.documentElement.classList.add("opera");
    } else if (android > -1) {
        brwsr = "Android";
        document.documentElement.classList.add("android");
        androidVersion = parseFloat(getAndroidVersion());
        document.documentElement.classList.add("android"+androidVersion);
    } else if ((safari > -1) && (ios > -1)) {
        brwsr = "iOS";
        document.documentElement.classList.add("ios");
        iOSVersion = iOSversion()[0];
        document.documentElement.classList.add("ios"+iOSVersion);
    } else if (chrome > -1) {
        brwsr = "Chrome";
        document.documentElement.classList.add("chrome");
    } else if (safari > -1) {
        brwsr = "Safari";
        document.documentElement.classList.add("safari");
    } else if (firefox > -1) {
        brwsr = "Firefox";
        document.documentElement.classList.add("firefox");
    } else if (ie9 > -1) {
        brwsr = "IE9";
        document.documentElement.classList.add("ie9");
    } else if (ie8 > -1) {
        brwsr = "IE8";
        document.documentElement.classList.add("ie8");
    } else if (ie10 > -1) {
        brwsr = "IE10";
        document.documentElement.classList.add("ie10");
    } else if(ie11){
        brwsr = "IE11";
        document.documentElement.classList.add("ie11");
    }

}());



