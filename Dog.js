
import { dogs } from './data.js';

export class Dog {
    constructor(data) {
      Object.assign(this, data);
    }
  
    getHtml() {
      const { avatar, name, age, bio } = this;
      return `
      <div class='doggy-data'>
        <img class='dog-avatar' src="${avatar}">
        <div class='dog-card'>
          <h4 class='dog-name'>${name}, ${age} <br> ${bio}</h4>
        </div>
      </div>
    `;
    }
  }