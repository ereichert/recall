import MemoryRecordReview from '@/models/MemoryRecordReview';

export default class MemoryReviewStateService {
  private shouldShowCongrats = false;

  get shouldShowCongratulations(): boolean { return this.shouldShowCongrats; }

  get shouldShowMemoryReview(): boolean { return !this.shouldShowCongrats; }

  transition(memoryRecordReview: MemoryRecordReview | undefined): void {
    if (memoryRecordReview) {
      this.shouldShowCongrats = false;
    } else {
      this.shouldShowCongrats = true;
    }
  }
}
