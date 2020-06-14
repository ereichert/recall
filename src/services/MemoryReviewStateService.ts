import MemoryRecordReview from '@/models/MemoryRecordReview';

export interface MemoryRecordReviewState {
  readonly shouldShowMemoryReview: boolean;

  readonly shouldShowCongrats: boolean;

  readonly shouldShowMemDetails: boolean;

  readonly shouldShowMemDetailsButtons: boolean;

  readonly shouldShowMemResolutionButtons: boolean;
}

class MemoryRecordReviewCongrats implements MemoryRecordReviewState {
  readonly shouldShowMemoryReview = false;

  readonly shouldShowCongrats = true;

  readonly shouldShowMemDetails = false;

  readonly shouldShowMemDetailsButtons = false;

  readonly shouldShowMemResolutionButtons = false;
}

class MemoryRecordReviewUnreviewed implements MemoryRecordReviewState {
  readonly shouldShowMemoryReview = true;

  readonly shouldShowCongrats = false;

  readonly shouldShowMemDetails = false;

  readonly shouldShowMemDetailsButtons = true;

  readonly shouldShowMemResolutionButtons = false;
}

class MemoryRecordReviewUnresolved implements MemoryRecordReviewState {
  readonly shouldShowMemoryReview = true;

  readonly shouldShowCongrats = false;

  readonly shouldShowMemDetails = true;

  readonly shouldShowMemDetailsButtons = false;

  readonly shouldShowMemResolutionButtons = true;
}

const congratsState = new MemoryRecordReviewCongrats();
const unreviewedState = new MemoryRecordReviewUnreviewed();
const unresolvedState = new MemoryRecordReviewUnresolved();

// Each MemoryRecordReview goes through the following states.
// Unreviewed (showing the prompt and details button) ->  Unresolved
// Unresolved (showing the details and resolution buttons)
// When there are no more MemoryRecordReviews, it shows the Congrats screen
export function transition(memoryRecordReview: MemoryRecordReview | undefined): MemoryRecordReviewState {
  let returnState: MemoryRecordReviewState = congratsState;
  if (memoryRecordReview) {
    returnState = unreviewedState;

    if (memoryRecordReview.areDetailsRequested) {
      returnState = unresolvedState;
    }
  }

  return returnState;
}
