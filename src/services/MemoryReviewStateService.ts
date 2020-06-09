import MemoryRecordReview from '@/models/MemoryRecordReview';

export default class MemoryReviewStateService {
  private shouldShowCongrats = false;

  private shouldShowMemDetails = false;

  get shouldShowCongratulations(): boolean { return this.shouldShowCongrats; }

  get shouldShowMemoryReview(): boolean { return !this.shouldShowCongrats; }

  get shouldShowMemoryDetails(): boolean { return this.shouldShowMemDetails; }

  transition(memoryRecordReview: MemoryRecordReview | undefined): void {
    if (memoryRecordReview) {
      this.shouldShowCongrats = false;
      this.shouldShowMemDetails = memoryRecordReview.areDetailsRequested;
    } else {
      this.shouldShowCongrats = true;
    }
  }
}
