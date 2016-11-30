import $ from 'jquery';
import img from '../../img/webpack.png';

/*global System:true*/
/*eslint no-undef: "error"*/

$('body').html('Hello, Page Three');
$('body').append('<p>');
$('body').append('<img src="'+ img +'">');
$('body').append('<p>');
$('<button>Test</button>').click(function () {
    System.import('./module').then(module => {
        module.hi();
    }).catch(err => {
        console.error('Chunk loading failed', err);
    }); 
}).appendTo('body');

