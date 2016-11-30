import _ from 'lodash';
import '../../styles/style.css';
import {foo} from './helpers';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.map(['Hello', 'Page Two', foo()], function(item){
    return item + ' ';
  })

  return element;
}

document.body.appendChild(component());