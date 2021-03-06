/**
     *
     * @author XingZengZhi
     * @date 2018/6/21 11:34
     * @param
     * @return
     */
    function getValueForCookie(cookieName){
        var cookies = document.cookie,
            cookieValue = "",
            cookieArray = cookies.split(";");
        for(var i = 0, len = cookieArray.length;i < len;i++){
            var cookieItem = cookieArray[i].split("=");
            if(cookieName === cookieItem[0].trim()){
                cookieValue =  cookieItem[1];
            }
        }
        return cookieValue;
    }

/**
     *    url参数获取
     *
     * @author XingZengZhi
     * @date 2018/7/10 12:37
     * @param
     * @return
     */
    function getValueUrlSearch(propName){
        var searchs = location.search.substring(1, location.search.length),
            andArray = searchs.split('&'),
            equalArray = null;
        for(var i = 0, len = andArray.length;i < len;i++){
            var v = andArray[i].split('=');
            if(propName == v[0]){
                return v[1];
            }
        }
        return '';
    }

/**
     * 对日期进行格式话，包含星期几的判断
     *
     * @author XingZengZhi
     * @date 2018/6/29 11:08
     * @param
     * @return
     */
    function getFullMinute(minutes){
        return minutes < 10 ? '0' + minutes : minutes;
    }
    function getSeconds(seconds){
        return seconds < 10 ? '0' + seconds : seconds;
    }
    function getMonth(month){
        month++;
        return month < 10 ? '0' + month : month;
    }
    function getDays(day){
        day--;
        var days = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
        return days[day];
    }

    /**  
     *    返回浏览器当前缩放的比例
     *   
     * @author XingZengZhi  
     * @date 2018/8/15 12:41  
     * @param   
     * @return   
     */
    function detectZoom (){
        var ratio = 0,
            screen = window.screen,
            ua = navigator.userAgent.toLowerCase();
        if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio;
        } else if (~ua.indexOf('msie')) {
            if (screen.deviceXDPI && screen.logicalXDPI) {
                ratio = screen.deviceXDPI / screen.logicalXDPI;
            }
        } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
            ratio = window.outerWidth / window.innerWidth;
        }
        if (ratio){
            ratio = Math.round(ratio * 100);
        }
        return ratio;
    }

    /**  
     *    表单序列化成JSON格式
     *   
     * @author XingZengZhi  
     * @date 2018/8/15 12:41  
     * @param   
     * @return   
     */
    $.fn.serializeObject = function(){    
       var o = {};    
       var a = this.serializeArray();    
       $.each(a, function() {    
           if (o[this.name]) {    
               if (!o[this.name].push) {    
                   o[this.name] = [o[this.name]];    
               }    
               o[this.name].push(this.value || '');    
           } else {    
               o[this.name] = this.value || '';    
           }    
       });    
       return o;    
    }; 
