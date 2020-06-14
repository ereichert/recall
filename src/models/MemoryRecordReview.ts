import MemoryRecord from './MemoryRecord';

export default class MemoryRecordReview {
  private deetsRequested = false;

  private hasBeenResolved = false;

  // eslint-disable-next-line no-useless-constructor
  constructor(readonly memoryRecord: MemoryRecord) { }

  get areDetailsRequested(): boolean { return this.deetsRequested; }

  get isResolved(): boolean { return this.hasBeenResolved; }

  requestDetails(): void {
    this.deetsRequested = true;
  }

  resolve(): void {
    this.hasBeenResolved = true;
  }
}
