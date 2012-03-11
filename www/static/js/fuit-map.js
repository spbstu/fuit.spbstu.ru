window.onload = function() {

	var points = {
		mapCenter : {
			latitude : 30.377,
			longitude : 60.0077
		},
		point0 : {
			latitude : 30.370413,
			longitude : 60.008705
		},
		point1 : {
			latitude : 30.37076,
			longitude : 60.009411
		},
		point2 : {
			latitude : 30.371425,
			longitude : 60.008401
		},
		point3 : {
			latitude : 30.375445,
			longitude : 60.007722
		},
		point4 : {
			latitude : 30.376271,
			longitude : 60.008893
		},
		point5 : {
			latitude : 30.376776,
			longitude : 60.008813
		},
		point6 : {
			latitude : 30.376854,
			longitude : 60.009013
		},
		point7 : {
			latitude : 30.375652,
			longitude : 60.007681
		},
		point8 : {
			latitude : 30.374665,
			longitude : 60.006252
		},
		point9 : {
			latitude : 30.379651,
			longitude : 60.005455
		},
		point10 : {
			latitude : 30.380823,
			longitude : 60.006811
		},
		housing_11 : {
			latitude : 30.377409,
			longitude : 60.008985
		},
		housing_gidro : {
			latitude : 30.382945,
			longitude : 60.006492
		},
		housing_3 : {
			latitude : 30.381711,
			longitude : 60.007061
		},
		housing_main : {
			latitude : 30.373074,
			longitude : 60.007303
		},
		housing_entrance : {
			latitude : 30.371733,
			longitude : 60.009291
		},
		church : {
			latitude : 30.371894,
			longitude : 60.008517
		},
		tower : {
			latitude : 30.374297,
			longitude : 60.005686
		},
		metro : {
			latitude : 30.370553,
			longitude : 60.008872
		},
		tram : {
			latitude : 30.369716,
			longitude : 60.008114
		},
		troll : {
			latitude : 30.369437,
			longitude : 60.009017
		}
	};

	var Ymarks = {};
	var Ypoints = {};
	var routes = {};

	for ( var i in points) {
		if (points.hasOwnProperty(i)) {
			Ypoints[i] = new YMaps.GeoPoint(points[i].latitude,
					points[i].longitude);
		}
	}

	var defaultCenter = Ypoints.mapCenter;
	var defaultZoom = 16;

	var trackStyle = new YMaps.Style();
	trackStyle.lineStyle = new YMaps.LineStyle();
	trackStyle.lineStyle.strokeColor = '0000FF55';
	trackStyle.lineStyle.strokeWidth = '5';
	
	YMaps.Styles.add("fuit#RouteLine", trackStyle);

	var map = new YMaps.Map(document.getElementById("YMapsID"));
	map.setCenter(defaultCenter, defaultZoom);

	// Центрирование карты при закрытии балуна
	YMaps.Events.observe(map, map.Events.BalloonClose, function(m) {
		m.setCenter(new YMaps.GeoPoint(30.377,60.0077), defaultZoom);
	});


	var placemarks = {
		housing_11 : {
			title : 'Деканат,<br>кафедра КИТ',
			name : '<strong>Деканат ФУИТ</strong><br>Кафедра КИТ',
			image : '/img/contacts/building-150.jpg',
			description : 'Ул. Обручевых, д.1<br>11 учебный корпус',
			options : {}
		},
		housing_gidro : {
			title : "Кафедра НБ",
			name : "Кафедра НБ",
			image : '/img/contacts/gidrotech-150.jpg',
			description : "Политехническая, 29<br>Гидрокорпус",
			options : {}
		},
		housing_3 : {
			title : "Кафедра УСЭС",
			name : "Кафедра УСЭС",
			image : '/img/contacts/3th-building-150.jpg',
			description : "Политехническая, 29<br>3 учебный корпус",
			options : {}
		},
		housing_main : {
			title : "Главное здание<br />СПбГПУ",
			name : "Главное здание<br />СПбГПУ",
			image : '/img/contacts/main-building-150.jpg',
			description : "Политехническая, 29",
			options : {
				style : "default#greyPoint"
			}
		},
		housing_entrance : {
			title : "Приемная комиссия",
			name : "Приемная комиссия",
			image : '',
			description : "Ул. Гидротехников, д.5",
			options : {}
		},
		church : {
			title : "Церковь",
			name : "Покровская церковь",
			image : '/img/contacts/church-150.jpg',
			description : "",
			options : {
				style : "default#greyPoint"
			}
		},
		tower : {
			title : "Гидробашня",
			name : "Гидробашня",
			image : '/img/contacts/tower-100.jpg',
			description : '',
			options : {
				style : "default#greyPoint"
			}
		},
		metro : {
			title : "",
			name : "ст. м. «Политехническая»",
			image : '',
			description : "",
			options : {
				style : "default#metroStPetersburgIcon"
			}
		},
		tram : {
			title : "",
			name : "<strong>Трамвайная остановка</strong>",
			image : '',
			description : "Трамваи № 38, 40, 55, 61",
			options : {
				style : "default#tramwayIcon"
			}
		},
		troll : {
			title : "",
			name : "<strong>Остановка троллейбуса/автобуса</strong>",
			image : '',
			description : "Троллейбусы № 4, 13, 21, 34, 50<br />Автобусы № № 69, 94, 143<br />Маршрутные такси № 10, 10А, 94,<br /> 143, 143А, 152, 240А, 240Б, 252,<br /> 252А, 271, 298, 321",
			options : {
				style : "default#trolleybusIcon"
			}
		}
	};

	for ( var i in placemarks) {
		if (placemarks.hasOwnProperty(i)) {
			Ymarks[i] = new YMaps.Placemark(Ypoints[i], placemarks[i].options);
			Ymarks[i].setIconContent(placemarks[i].title);
			Ymarks[i].name = placemarks[i].name;
			if (placemarks[i].image != '') {
				var img = "<img src='" + placemarks[i].image + "' alt='"
						+ placemarks[i].title + "' /><br />";
			} else {
				var img = "";
			}
			Ymarks[i].description = img + placemarks[i].description;
			map.addOverlay(Ymarks[i]);
		}
	}

	var routePointsArr = {
		c11 : [ Ypoints.metro, Ypoints.point0, Ypoints.point2, Ypoints.point3,
				Ypoints.point4, Ypoints.point5, Ypoints.housing_11 ],
		c3 : [ Ypoints.metro, Ypoints.point0, Ypoints.point2, Ypoints.point7,
				Ypoints.point8, Ypoints.point9, Ypoints.point10,
				Ypoints.housing_3 ],
		gidro : [ Ypoints.metro, Ypoints.point0, Ypoints.point2,
				Ypoints.point7, Ypoints.point8, Ypoints.point9,
				Ypoints.point10, Ypoints.housing_gidro ],
		entrance : [ Ypoints.metro, Ypoints.point1, Ypoints.housing_entrance ]
	}

	for ( var i in routePointsArr) {
		if (routePointsArr.hasOwnProperty(i)) {
			routes[i] = new YMaps.Polyline(routePointsArr[i]);
			routes[i].setStyle("fuit#RouteLine");
			;
			var line = routes[i];
		}
	}

	var showRoute = function(evt) {
		target = $(evt.target);
		if (typeof (currentRoute) !== 'undefined') {
			map.removeOverlay(currentRoute);
		}
		var routeName = target.find(':selected').val();
		currentRoute = routes[routeName];
		map.addOverlay(currentRoute);
		return false;
	}

	$('#select_route_end').change(showRoute);
}