/**
 * Función para traducir un formato de fecha
 * 
 * Requiere https://github.com/felixge/node-dateformat
 * Date: 2015-07-10

 * @author Diego Malagón <diegomalagonh@gmail.com>
 * @type Function|trans-date_L4.transdate
 */
var transdate = (function(){
    
    /**
     * Función para obtener el idioma del navegador
     * 
     * Fuente: https://github.com/ajgalisteo83/Detect-Language-JavaScripts
     * 
     * @returns {String}
     */
    var getLang = function(){
        // Variable para guardar el idioma
        var lang = "en";
        
        if (navigator.languages === undefined) {
            if (navigator.language === undefined) {
                // Internet Explorer Compatibility
                lang = navigator.userLanguage.slice(0,2);
            } else {
                // Old navigator compatibility
                lang = navigator.language.slice(0,2);
            }
        } 
        else { 
            lang = navigator.languages[0].slice(0,2);				
        }
        
        return lang;
    };
    
    /**
     * Función para aplicar traducciones a una fecha
     * 
     * @param {Date|String} date fecha
     * @param {String} format formato de fecha para dateFormat
     * @returns {unresolved}
     */
    var transdate = function(date, format){
        var trans = [];
        
        // Aplicar formato a la fecha
        var str = dateFormat(date, format);

        // Detectar idioma de la página
        var lang = getLang();
        
        if(lang === "es"){
            trans = [
                [ "January",    "Enero" ],
                [ "February",   "Febrero" ],
                [ "March",      "Marzo" ],
                [ "April",      "Abril" ],
                [ "May",        "Mayo" ],
                [ "June",       "Junio" ],
                [ "July",       "Julio" ],
                [ "August",     "Agosto" ],
                [ "September",  "Septiembre" ],
                [ "October",    "Octubre" ],
                [ "November",   "Noviembre" ],
                [ "December",   "Diciembre" ],
                [ "Monday",     "Lunes"],
                [ "Tuesday",    "Martes"],
                [ "Wednesday",  "Miércoles"],
                [ "Thursday",   "Jueves"],
                [ "Friday",     "Viernes"],
                [ "Saturday",   "Sábado"],
                [ "Sunday",     "Domingo"],
                [ "Jan",        "Ene" ],
              //[ "Feb",        "Feb" ],
              //[ "Mar",        "Mar" ],
                [ "Apr",        "Abr" ],
              //[ "May",        "May" ],
              //[ "Jun",        "Jun" ],
              //[ "Jul",        "Jul" ],
                [ "Aug",        "Ago" ],
              //[ "Sep",        "Sep" ],
              //[ "Oct",        "Oct" ],
              //[ "Nov",        "Nov" ],
                [ "Dec",        "Dic" ],
                [ "Mon",        "Lun" ],
                [ "Tue",        "Mar" ],        
                [ "Wed",        "Mié" ],        
                [ "Thu",        "Jue" ],        
                [ "Fri",        "Vie" ],        
                [ "Sat",        "Sáb" ],        
                [ "Sun",        "Dom" ]  
            ];
        }

        trans.forEach(function(t){
            str = str.replace(t[0], t[1]);
        });

        return str;
    };
    
    return transdate;
})();