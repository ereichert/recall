export default class MemoryRecord {
  id = 0;

  prompt = '';

  details = '';

  constructor(prompt = '', details = '') {
    this.prompt = prompt;
    this.details = details;
  }
}
