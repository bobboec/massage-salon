ymaps.ready(init);
var myMap;

function init() {

  myMap = new ymaps.Map("map", {
    center: [56.30559241544732, 43.99135228650556],
    zoom: 13
  });

  // myMap.controls.add(
  //   new ymaps.control.ZoomControl()
  // );

  myPlacemark = new ymaps.Placemark([56.30559241544732, 43.99135228650556], {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/map-placemark.png',
    // Размеры метки.
    iconImageSize: [73, 81],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [0, 0]
  });

  myMap.geoObjects.add(myPlacemark); // Добавление метки

};
