import $ from 'jquery';
//import img from 'url-loader?limit=1000000000!../../img/webpack.png';
import img from '../../img/webpack.png';

$('body').html('Hello, Page Three');
$('body').append('<p>');
$('body').append('<img src="'+ img +'">');


