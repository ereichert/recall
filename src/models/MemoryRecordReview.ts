import MemoryRecord from './MemoryRecord';

export default class MemoryRecordReview {
  private deetsRequested = false;

  // eslint-disable-next-line no-useless-constructor
  constructor(readonly memoryRecord: MemoryRecord) { }

  get areDetailsRequested(): boolean { return this.deetsRequested; }

  requestDetails(): void {
    this.deetsRequested = true;
  }
}
