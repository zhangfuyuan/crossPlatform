function friendlyDate(timestamp) {
	var formats = {
		'year': '%n% 年前',
		'month': '%n% 月前',
		'day': '%n% 天前',
		'hour': '%n% 小时前',
		'minute': '%n% 分钟前',
		'second': '%n% 秒前',
	};

	var now = Date.now();
	var seconds = Math.floor((now - timestamp) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);

	var diffType = '';
	var diffValue = 0;
	if (years > 0) {
		diffType = 'year';
		diffValue = years;
	} else {
		if (months > 0) {
			diffType = 'month';
			diffValue = months;
		} else {
			if (days > 0) {
				diffType = 'day';
				diffValue = days;
			} else {
				if (hours > 0) {
					diffType = 'hour';
					diffValue = hours;
				} else {
					if (minutes > 0) {
						diffType = 'minute';
						diffValue = minutes;
					} else {
						diffType = 'second';
						diffValue = seconds === 0 ? (seconds = 1) : seconds;
					}
				}
			}
		}
	}
	return formats[diffType].replace('%n%', diffValue);
}

var Mac = {
	address: function () {
		var Build = plus.android.importClass('android.os.Build');
		if (Build.VERSION.SDK_INT < 23) //android 6.0以下版本
		{
			return this.WifiInfoMac();
		} else if (Build.VERSION.SDK_INT == 23) //android 6.0
		{
			return this.ReaderMac();
		} else {
			return this.NetworkMac();
		}
	},
	WifiInfoMac: function () {
		var Context = plus.android.importClass("android.content.Context");
		var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
		var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
		var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");
		var wifiInfo = wifiManager.getConnectionInfo();
		return wifiInfo.getMacAddress();
	},
	ReaderMac: function () {
		try {
			var BufferedReader = plus.android.importClass("java.io.BufferedReader");
			var FileReader = plus.android.importClass("java.io.FileReader");
			var file = new FileReader("/sys/class/net/wlan0/address");
			var reader = new BufferedReader(file, 256);
			var address = reader.readLine();
			reader.close();
			return address;
		} catch (error) {
			this.NetworkMac();
			return "02:00:00:00:00:00";
		}
	},
	NetworkMac: function () {
		var NetworkInterface = plus.android.importClass("java.net.NetworkInterface");
		var networkInterface = NetworkInterface.getByName("eth1");
		if (networkInterface == null) {
			networkInterface = NetworkInterface.getByName("wlan0");
		}
		if (networkInterface == null) {
			this.isWifi();
			return "02:00:00:00:00:00";
		}
		var mac = networkInterface.getHardwareAddress();
		var macArr = [];
		for (var i in mac) {
			macArr.push(this.format(mac[i]));
		}
		return macArr.join(":");
	},
	format: function (mac) {
		if (parseInt(mac) >= 0) {
			var numbder = parseInt(mac).toString(16);
			var num = numbder.length == 1 ? "0" + numbder : numbder;
			return num;
		} else {
			var numbder = parseInt(256 - Math.abs(mac)).toString(16);
			var num = numbder.length == 1 ? "0" + numbder : numbder;
			return num;
		}
	},
	isWifi: function () {
		if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_WIFI) {
			return "02:00:00:00:00:00";
		} else {
			plus.nativeUI.confirm("需要打开WiFi才能获取到MAC地址,是否去打开WiFi", function (event) {
				if (event.index == 0) {
					var main = plus.android.runtimeMainActivity();
					var Intent = plus.android.importClass('android.content.Intent');
					var intent = new Intent();
					intent.setClassName("com.android.settings", "com.android.settings.wifi.WifiSettings");
					main.startActivity(intent);
				}
			});
		}
	}
};

function getIp() {  
	var ip = "127.0.0.1";  
	if (plus.os.name == "Android") {  
		//WifiManager  
		var Context = plus.android.importClass("android.content.Context");  
		var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");  
		var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);  
		var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");  
		var wifiInfo = wifiManager.getConnectionInfo();  
		ip = intToIp(wifiInfo.getIpAddress());  
	} else if(plus.os.name == "iOS"){  

	}  
	return ip;  
}  

function intToIp(i)  {  
　　return (i & 0xFF) + "." + ((i >> 8 ) & 0xFF) + "." + ((i >> 16 ) & 0xFF) +"."+((i >> 24 ) & 0xFF );  
}   

function keyHandle(keyCode, curIndex, curLinage, minIndex, maxIndex) {
	let code = keyCode;
	let index = +curIndex;
	let linage = +curLinage;
	let min = +minIndex;
	let max = +maxIndex;
	
	switch (code){
		case '19': // 上
			index = index-linage<min ? index : index-linage;
			break;
		case '20': // 下
			index = index+linage>max ? index : index+linage;
			break;
		case '21': // 左
			index = index-1<min ? min : index-1;
			break;
		case '22': // 右
			index = index+1>max ? max : index+1;
			console.log(index);
			break;
		default:
			break;
	}
	
	return index;
}

export {
	friendlyDate,
	Mac,
	getIp,
	keyHandle
}
