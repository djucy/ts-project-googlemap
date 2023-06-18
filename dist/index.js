require("dotenv/config");
var $8zHUo$fakerjsfaker = require("@faker-js/faker");

/// <reference types="@types/google.maps"/>


var $cb3c077768f345d2$export$1f44aaf2ec115b54 = /** @class */ function() {
    function User() {
        this.color = "red";
        this.name = (0, $8zHUo$fakerjsfaker.faker).person.firstName();
        this.location = {
            lat: (0, $8zHUo$fakerjsfaker.faker).location.latitude(),
            lng: (0, $8zHUo$fakerjsfaker.faker).location.longitude()
        };
    }
    User.prototype.markerContent = function() {
        return "<h2>User Name: ".concat(this.name, "</h2>");
    };
    return User;
}();



var $68cf6f35ac892f01$export$17f7382901150e2d = /** @class */ function() {
    function Company() {
        this.color = "red";
        this.companyName = (0, $8zHUo$fakerjsfaker.faker).company.name();
        this.catchPhrase = (0, $8zHUo$fakerjsfaker.faker).company.catchPhrase();
        this.location = {
            lat: (0, $8zHUo$fakerjsfaker.faker).location.latitude(),
            lng: (0, $8zHUo$fakerjsfaker.faker).location.longitude()
        };
    }
    Company.prototype.markerContent = function() {
        return "\n    <div>\n    <h1>Company Name: ".concat(this.companyName, "</h1>\n    <h3>Catchphrase: ").concat(this.catchPhrase, "</h3>\n    </div>\n    ");
    };
    return Company;
}();


var $41cbbbae9bd7024e$export$a40fa15aabaab773 = /** @class */ function() {
    function CustomMap(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    CustomMap.prototype.addMarker = function(mappable) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener("click", function() {
            var infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return CustomMap;
}();


var $fd046e7a82b9f872$var$user = new (0, $cb3c077768f345d2$export$1f44aaf2ec115b54)();
var $fd046e7a82b9f872$var$company = new (0, $68cf6f35ac892f01$export$17f7382901150e2d)();
var $fd046e7a82b9f872$var$script = document.createElement("script");
$fd046e7a82b9f872$var$script.src = "https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBbupoQ3KLwgo3539FLPWBPl9dj4nk6Yew", "&libraries=places&callback=initMap");
$fd046e7a82b9f872$var$script.async = true;
function $fd046e7a82b9f872$var$initMap() {
    var map = new (0, $41cbbbae9bd7024e$export$a40fa15aabaab773)("map");
    map.addMarker($fd046e7a82b9f872$var$user);
    map.addMarker($fd046e7a82b9f872$var$company);
}
window.initMap = $fd046e7a82b9f872$var$initMap;
document.head.appendChild($fd046e7a82b9f872$var$script);


//# sourceMappingURL=index.js.map
