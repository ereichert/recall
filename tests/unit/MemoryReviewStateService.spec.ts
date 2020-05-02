import MemoryRecordReview from '@/models/MemoryRecordReview';
import * as MemoryReviewStateService from '@/services/MemoryReviewStateService';
import MemoryRecord from '@/models/MemoryRecord';

describe('The MemoryReviewStateService', () => {
  describe('when passed an undefined MemoryRecordReview, transition', () => {
    it('should set shouldShowCongrats.', () => {
      const state = MemoryReviewStateService.transition(undefined);

      expect(state.shouldShowCongrats).toBe(true);
    });

    it('should unset shouldShowMemoryReview.', () => {
      const state = MemoryReviewStateService.transition(undefined);

      expect(state.shouldShowMemoryReview).toBe(false);
    });
  });

  describe('when passed a MemoryRecordReview, transition', () => {
    it('should set shouldShowMemResolutionButtons when details are requested.', () => {
      const memoryRecordReview = new MemoryRecordReview(new MemoryRecord('', ''));
      memoryRecordReview.requestDetails();

      const state = MemoryReviewStateService.transition(memoryRecordReview);

      expect(state.shouldShowMemResolutionButtons).toBe(true);
    });

    it('should unset shouldShowMemDetailsButtons when details are requested.', () => {
      const memoryRecordReview = new MemoryRecordReview(new MemoryRecord('', ''));
      memoryRecordReview.requestDetails();

      const state = MemoryReviewStateService.transition(memoryRecordReview);

      expect(state.shouldShowMemDetailsButtons).toBe(false);
    });

    it('should set shouldShowMemDetailsButtons when details are not requested.', () => {
      const memoryRecordReview = new MemoryRecordReview(new MemoryRecord('', ''));

      const state = MemoryReviewStateService.transition(memoryRecordReview);

      expect(state.shouldShowMemDetailsButtons).toBe(true);
    });

    it('should unset shouldShowMemDetails when details are not requested.', () => {
      const memoryRecordReview = new MemoryRecordReview(new MemoryRecord('', ''));

      const state = MemoryReviewStateService.transition(memoryRecordReview);

      expect(state.shouldShowMemDetails).toBe(false);
    });

    it('should set shouldShowMemDetails when details are requested.', () => {
      const memoryRecordReview = new MemoryRecordReview(new MemoryRecord('', ''));
      memoryRecordReview.requestDetails();

      const state = MemoryReviewStateService.transition(memoryRecordReview);

      expect(state.shouldShowMemDetails).toBe(true);
    });

    it('should unset shouldShowCongrats.', () => {
      const memoryRecordReview = new MemoryRecordReview(new MemoryRecord('', ''));

      const state = MemoryReviewStateService.transition(memoryRecordReview);

      expect(state.shouldShowCongrats).toBe(false);
    });

    it('should set shouldShowMemoryReview.', () => {
      const memoryRecordReview = new MemoryRecordReview(new MemoryRecord('', ''));

      const state = MemoryReviewStateService.transition(memoryRecordReview);

      expect(state.shouldShowMemoryReview).toBe(true);
    });
  });
});
