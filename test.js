var xmlParser = require('xml2json');
var xmlString = `<ymaps xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://maps.yandex.ru/business/1.x http://maps.yandex.ru/schemas/business/1.x/business.xsd http://maps.yandex.ru/geocoder/1.x http://maps.yandex.ru/schemas/geocoder/1.x/geocoder.xsd http://maps.yandex.ru/psearch/1.x http://maps.yandex.ru/schemas/psearch/1.x/psearch.xsd http://maps.yandex.ru/search/1.x http://maps.yandex.ru/schemas/search/1.x/search.xsd http://maps.yandex.ru/web/1.x http://maps.yandex.ru/schemas/web/1.x/web.xsd http://maps.yandex.ru/search/internal/1.x http://maps.yandex.ru/schemas/search/internal/1.x/internal.xsd">
<GeoObjectCollection>
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderResponseMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<request>84.952383,56.458989</request>
<found>8</found>
<results>10</results>
<Point xmlns="http://www.opengis.net/gml">
<pos>84.952383 56.458989</pos>
</Point>
</GeocoderResponseMetaData>
</metaDataProperty>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="1">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>street</kind>
<text>Россия, Томск, Учебная улица</text>
<precision>street</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted>Томск, Учебная улица</formatted>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
<Component>
<kind>province</kind>
<name>Сибирский федеральный округ</name>
</Component>
<Component>
<kind>province</kind>
<name>Томская область</name>
</Component>
<Component>
<kind>area</kind>
<name>городской округ Томск</name>
</Component>
<Component>
<kind>locality</kind>
<name>Томск</name>
</Component>
<Component>
<kind>street</kind>
<name>Учебная улица</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine>Томск, Учебная улица</AddressLine>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
<AdministrativeArea>
<AdministrativeAreaName>Томская область</AdministrativeAreaName>
<SubAdministrativeArea>
<SubAdministrativeAreaName>городской округ Томск</SubAdministrativeAreaName>
<Locality>
<LocalityName>Томск</LocalityName>
<Thoroughfare>
<ThoroughfareName>Учебная улица</ThoroughfareName>
</Thoroughfare>
</Locality>
</SubAdministrativeArea>
</AdministrativeArea>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<description xmlns="http://www.opengis.net/gml">Томск, Россия</description>
<name xmlns="http://www.opengis.net/gml">Учебная улица</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>84.938639 56.458905</lowerCorner>
<upperCorner>84.971131 56.45898</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>84.954889 56.458965</pos>
</Point>
</GeoObject>
</featureMember>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="2">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>district</kind>
<text>Россия, Томск, Кировский район</text>
<precision>other</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted>Томск, Кировский район</formatted>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
<Component>
<kind>province</kind>
<name>Сибирский федеральный округ</name>
</Component>
<Component>
<kind>province</kind>
<name>Томская область</name>
</Component>
<Component>
<kind>area</kind>
<name>городской округ Томск</name>
</Component>
<Component>
<kind>locality</kind>
<name>Томск</name>
</Component>
<Component>
<kind>district</kind>
<name>Кировский район</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine>Томск, Кировский район</AddressLine>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
<AdministrativeArea>
<AdministrativeAreaName>Томская область</AdministrativeAreaName>
<SubAdministrativeArea>
<SubAdministrativeAreaName>городской округ Томск</SubAdministrativeAreaName>
<Locality>
<LocalityName>Томск</LocalityName>
<DependentLocality>
<DependentLocalityName>Кировский район</DependentLocalityName>
</DependentLocality>
</Locality>
</SubAdministrativeArea>
</AdministrativeArea>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<description xmlns="http://www.opengis.net/gml">Томск, Россия</description>
<name xmlns="http://www.opengis.net/gml">Кировский район</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>84.81424 56.406127</lowerCorner>
<upperCorner>85.059893 56.54981</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>84.958581 56.462292</pos>
</Point>
</GeoObject>
</featureMember>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="3">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>locality</kind>
<text>Россия, Томск</text>
<precision>other</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted>Томск</formatted>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
<Component>
<kind>province</kind>
<name>Сибирский федеральный округ</name>
</Component>
<Component>
<kind>province</kind>
<name>Томская область</name>
</Component>
<Component>
<kind>area</kind>
<name>городской округ Томск</name>
</Component>
<Component>
<kind>locality</kind>
<name>Томск</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine>Томск</AddressLine>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
<AdministrativeArea>
<AdministrativeAreaName>Томская область</AdministrativeAreaName>
<SubAdministrativeArea>
<SubAdministrativeAreaName>городской округ Томск</SubAdministrativeAreaName>
<Locality>
<LocalityName>Томск</LocalityName>
</Locality>
</SubAdministrativeArea>
</AdministrativeArea>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<description xmlns="http://www.opengis.net/gml">Россия</description>
<name xmlns="http://www.opengis.net/gml">Томск</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>84.81424 56.380971</lowerCorner>
<upperCorner>85.149186 56.632219</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>84.947649 56.48464</pos>
</Point>
</GeoObject>
</featureMember>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="4">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>area</kind>
<text>Россия, городской округ Томск</text>
<precision>other</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted>городской округ Томск</formatted>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
<Component>
<kind>province</kind>
<name>Сибирский федеральный округ</name>
</Component>
<Component>
<kind>province</kind>
<name>Томская область</name>
</Component>
<Component>
<kind>area</kind>
<name>городской округ Томск</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine>городской округ Томск</AddressLine>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
<AdministrativeArea>
<AdministrativeAreaName>Томская область</AdministrativeAreaName>
<SubAdministrativeArea>
<SubAdministrativeAreaName>городской округ Томск</SubAdministrativeAreaName>
</SubAdministrativeArea>
</AdministrativeArea>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<description xmlns="http://www.opengis.net/gml">Россия</description>
<name xmlns="http://www.opengis.net/gml">городской округ Томск</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>84.814024 56.365109</lowerCorner>
<upperCorner>85.149186 56.689848</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>84.977733 56.482453</pos>
</Point>
</GeoObject>
</featureMember>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="5">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>area</kind>
<text>Россия, Томская область, Томский район</text>
<precision>other</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted>Томская область, Томский район</formatted>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
<Component>
<kind>province</kind>
<name>Сибирский федеральный округ</name>
</Component>
<Component>
<kind>province</kind>
<name>Томская область</name>
</Component>
<Component>
<kind>area</kind>
<name>Томский район</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine>Томская область, Томский район</AddressLine>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
<AdministrativeArea>
<AdministrativeAreaName>Томская область</AdministrativeAreaName>
<SubAdministrativeArea>
<SubAdministrativeAreaName>Томский район</SubAdministrativeAreaName>
</SubAdministrativeArea>
</AdministrativeArea>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<description xmlns="http://www.opengis.net/gml">Томская область, Россия</description>
<name xmlns="http://www.opengis.net/gml">Томский район</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>84.03567 55.981253</lowerCorner>
<upperCorner>86.255955 57.307996</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>84.590739 56.588749</pos>
</Point>
</GeoObject>
</featureMember>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="6">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>province</kind>
<text>Россия, Томская область</text>
<precision>other</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted>Томская область</formatted>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
<Component>
<kind>province</kind>
<name>Сибирский федеральный округ</name>
</Component>
<Component>
<kind>province</kind>
<name>Томская область</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine>Томская область</AddressLine>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
<AdministrativeArea>
<AdministrativeAreaName>Томская область</AdministrativeAreaName>
</AdministrativeArea>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<description xmlns="http://www.opengis.net/gml">Россия</description>
<name xmlns="http://www.opengis.net/gml">Томская область</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>75.056658 55.664314</lowerCorner>
<upperCorner>89.379155 61.035304</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>78.63728 58.949193</pos>
</Point>
</GeoObject>
</featureMember>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="7">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>province</kind>
<text>Россия, Сибирский федеральный округ</text>
<precision>other</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted>Сибирский федеральный округ</formatted>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
<Component>
<kind>province</kind>
<name>Сибирский федеральный округ</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine>Сибирский федеральный округ</AddressLine>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<description xmlns="http://www.opengis.net/gml">Россия</description>
<name xmlns="http://www.opengis.net/gml">Сибирский федеральный округ</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>70.357401 49.070793</lowerCorner>
<upperCorner>122.145744 81.304664</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>96.962463 61.833048</pos>
</Point>
</GeoObject>
</featureMember>
<featureMember xmlns="http://www.opengis.net/gml">
<GeoObject xmlns="http://maps.yandex.ru/ymaps/1.x" xmlns:gml="http://www.opengis.net/gml" gml:id="8">
<metaDataProperty xmlns="http://www.opengis.net/gml">
<GeocoderMetaData xmlns="http://maps.yandex.ru/geocoder/1.x">
<kind>country</kind>
<text>Россия</text>
<precision>other</precision>
<Address xmlns="http://maps.yandex.ru/address/1.x">
<country_code>RU</country_code>
<formatted/>
<Component>
<kind>country</kind>
<name>Россия</name>
</Component>
</Address>
<AddressDetails xmlns="urn:oasis:names:tc:ciq:xsdschema:xAL:2.0">
<Country>
<AddressLine/>
<CountryNameCode>RU</CountryNameCode>
<CountryName>Россия</CountryName>
</Country>
</AddressDetails>
</GeocoderMetaData>
</metaDataProperty>
<name xmlns="http://www.opengis.net/gml">Россия</name>
<boundedBy xmlns="http://www.opengis.net/gml">
<Envelope>
<lowerCorner>19.484764 41.18599</lowerCorner>
<upperCorner>191.128003 81.886117</upperCorner>
</Envelope>
</boundedBy>
<Point xmlns="http://www.opengis.net/gml">
<pos>99.505405 61.698653</pos>
</Point>
</GeoObject>
</featureMember>
</GeoObjectCollection>
</ymaps>`;

var x = xmlParser.toJson(xmlString);
var z = JSON.parse(x)
var country = z.ymaps.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Component[0]
var city = z.ymaps.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Component[4]
console.log(country);
