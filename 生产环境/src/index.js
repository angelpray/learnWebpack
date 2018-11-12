// import _ from 'lodash';
import { cube } from './math.js';

function component() {
    var element = document.createElement('pre');
  
    element.innerHTML = [
      'hello webpack',
      `5 的三次方是 ${cube(5)}`
    ].join('\n\n');
  
    return element;
  }
  
  document.body.appendChild(component());