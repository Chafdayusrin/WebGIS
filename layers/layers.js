var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_admin_semarang_1 = new ol.format.GeoJSON();
var features_admin_semarang_1 = format_admin_semarang_1.readFeatures(json_admin_semarang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_semarang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_semarang_1.addFeatures(features_admin_semarang_1);
var lyr_admin_semarang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_admin_semarang_1, 
                style: style_admin_semarang_1,
                interactive: false,
    title: 'admin_semarang<br />\
    <img src="styles/legend/admin_semarang_1_0.png" /> Banyumanik<br />\
    <img src="styles/legend/admin_semarang_1_1.png" /> Candisari<br />\
    <img src="styles/legend/admin_semarang_1_2.png" /> Gajah Mungkur<br />\
    <img src="styles/legend/admin_semarang_1_3.png" /> Gayamsari<br />\
    <img src="styles/legend/admin_semarang_1_4.png" /> Genuk<br />\
    <img src="styles/legend/admin_semarang_1_5.png" /> Gunung Pati<br />\
    <img src="styles/legend/admin_semarang_1_6.png" /> Mijen<br />\
    <img src="styles/legend/admin_semarang_1_7.png" /> Ngaliyan<br />\
    <img src="styles/legend/admin_semarang_1_8.png" /> Pedurungan<br />\
    <img src="styles/legend/admin_semarang_1_9.png" /> Semarang Barat<br />\
    <img src="styles/legend/admin_semarang_1_10.png" /> Semarang Selatan<br />\
    <img src="styles/legend/admin_semarang_1_11.png" /> Semarang Tengah<br />\
    <img src="styles/legend/admin_semarang_1_12.png" /> Semarang Timur<br />\
    <img src="styles/legend/admin_semarang_1_13.png" /> Semarang Utara<br />\
    <img src="styles/legend/admin_semarang_1_14.png" /> Tembalang<br />\
    <img src="styles/legend/admin_semarang_1_15.png" /> Tugu<br />'
        });
var format_admin_semarangcopy_2 = new ol.format.GeoJSON();
var features_admin_semarangcopy_2 = format_admin_semarangcopy_2.readFeatures(json_admin_semarangcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_semarangcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_semarangcopy_2.addFeatures(features_admin_semarangcopy_2);
var lyr_admin_semarangcopy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_admin_semarangcopy_2, 
                style: style_admin_semarangcopy_2,
                interactive: false,
    title: 'admin_semarang copy<br />\
    <img src="styles/legend/admin_semarangcopy_2_0.png" /> Rendah<br />\
    <img src="styles/legend/admin_semarangcopy_2_1.png" /> Sangat Tinggi<br />\
    <img src="styles/legend/admin_semarangcopy_2_2.png" /> Tinggi<br />'
        });
var format_JP_3 = new ol.format.GeoJSON();
var features_JP_3 = format_JP_3.readFeatures(json_JP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JP_3.addFeatures(features_JP_3);
var lyr_JP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JP_3, 
                style: style_JP_3,
                interactive: true,
    title: 'JP<br />\
    <img src="styles/legend/JP_3_0.png" /> Banyumanik<br />\
    <img src="styles/legend/JP_3_1.png" /> Candisari<br />\
    <img src="styles/legend/JP_3_2.png" /> Gajah Mungkur<br />\
    <img src="styles/legend/JP_3_3.png" /> Gayamsari<br />\
    <img src="styles/legend/JP_3_4.png" /> Genuk<br />\
    <img src="styles/legend/JP_3_5.png" /> Gunung Pati<br />\
    <img src="styles/legend/JP_3_6.png" /> Mijen<br />\
    <img src="styles/legend/JP_3_7.png" /> Ngaliyan<br />\
    <img src="styles/legend/JP_3_8.png" /> Pedurungan<br />\
    <img src="styles/legend/JP_3_9.png" /> Semarang Barat<br />\
    <img src="styles/legend/JP_3_10.png" /> Semarang Selatan<br />\
    <img src="styles/legend/JP_3_11.png" /> Semarang Tengah<br />\
    <img src="styles/legend/JP_3_12.png" /> Semarang Timur<br />\
    <img src="styles/legend/JP_3_13.png" /> Semarang Utara<br />\
    <img src="styles/legend/JP_3_14.png" /> Tembalang<br />\
    <img src="styles/legend/JP_3_15.png" /> Tugu<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_admin_semarang_1.setVisible(true);lyr_admin_semarangcopy_2.setVisible(true);lyr_JP_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_admin_semarang_1,lyr_admin_semarangcopy_2,lyr_JP_3];
lyr_admin_semarang_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'Laki-Laki': 'Laki-Laki', 'Perempuan': 'Perempuan', 'JP': 'JP', 'KEPADATAN': 'KEPADATAN', 'LUAS': 'LUAS', 'KELAS': 'KELAS', });
lyr_admin_semarangcopy_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'Laki-Laki': 'Laki-Laki', 'Perempuan': 'Perempuan', 'JP': 'JP', 'KEPADATAN': 'KEPADATAN', 'LUAS': 'LUAS', 'KELAS': 'KELAS', });
lyr_JP_3.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'Laki-Laki': 'Laki-Laki', 'Perempuan': 'Perempuan', 'JP': 'JP', 'KEPADATAN': 'KEPADATAN', 'LUAS': 'LUAS', 'KELAS': 'KELAS', });
lyr_admin_semarang_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Laki-Laki': 'TextEdit', 'Perempuan': 'TextEdit', 'JP': 'TextEdit', 'KEPADATAN': 'TextEdit', 'LUAS': 'TextEdit', 'KELAS': 'TextEdit', });
lyr_admin_semarangcopy_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Laki-Laki': 'TextEdit', 'Perempuan': 'TextEdit', 'JP': 'TextEdit', 'KEPADATAN': 'TextEdit', 'LUAS': 'TextEdit', 'KELAS': 'TextEdit', });
lyr_JP_3.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'Laki-Laki': 'TextEdit', 'Perempuan': 'TextEdit', 'JP': 'TextEdit', 'KEPADATAN': 'TextEdit', 'LUAS': 'TextEdit', 'KELAS': 'TextEdit', });
lyr_admin_semarang_1.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'Laki-Laki': 'inline label', 'Perempuan': 'inline label', 'JP': 'inline label', 'KEPADATAN': 'inline label', 'LUAS': 'inline label', 'KELAS': 'inline label', });
lyr_admin_semarangcopy_2.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'Laki-Laki': 'inline label', 'Perempuan': 'inline label', 'JP': 'inline label', 'KEPADATAN': 'inline label', 'LUAS': 'inline label', 'KELAS': 'inline label', });
lyr_JP_3.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'Laki-Laki': 'inline label', 'Perempuan': 'inline label', 'JP': 'inline label', 'KEPADATAN': 'inline label', 'LUAS': 'inline label', 'KELAS': 'inline label', });
lyr_JP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});