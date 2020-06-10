import MemoryRecordReview from '@/models/MemoryRecordReview';

export default class MemoryReviewStateService {
  private shouldShowCongrats = false;

  private shouldShowMemDetails = false;

  private shouldShowMemDetailsButtons = true;

  private shouldShowMemResolutionButtons = false;

  get shouldShowCongratulations(): boolean { return this.shouldShowCongrats; }

  get shouldShowMemoryReview(): boolean { return !this.shouldShowCongrats; }

  get shouldShowMemoryDetails(): boolean { return this.shouldShowMemDetails; }

  get shouldShowMemoryDetailsButton(): boolean { return this.shouldShowMemDetailsButtons; }

  get shouldShowMemoryResolutionButtons(): boolean { return this.shouldShowMemResolutionButtons; }

  transition(memoryRecordReview: MemoryRecordReview | undefined): void {
    if (memoryRecordReview) {
      this.shouldShowCongrats = false;
      this.shouldShowMemDetails = memoryRecordReview.areDetailsRequested;
      this.shouldShowMemDetailsButtons = !memoryRecordReview.areDetailsRequested;
      this.shouldShowMemResolutionButtons = !memoryRecordReview.isResolved;
    } else {
      this.shouldShowCongrats = true;
    }
  }
}
