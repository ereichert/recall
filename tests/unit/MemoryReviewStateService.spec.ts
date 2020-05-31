import MemoryRecordReview from '@/models/MemoryRecordReview';
import MemoryReviewStateService from '@/services/MemoryReviewStateService';
import MemoryRecord from '@/models/MemoryRecord';

describe('The MemoryReviewStateService', () => {
  describe('when passed an undefined MemoryRecordReview, transition', () => {
    it('should set shouldShowCongratulations.', () => {
      const memoryReviewStateService = new MemoryReviewStateService();

      memoryReviewStateService.transition(undefined);

      expect(memoryReviewStateService.shouldShowCongratulations).toBe(true);
    });

    it('should unset shouldShowMemoryReview.', () => {
      const memoryReviewStateService = new MemoryReviewStateService();

      memoryReviewStateService.transition(undefined);

      expect(memoryReviewStateService.shouldShowMemoryReview).toBe(false);
    });
  });

  describe('when passed a MemoryRecordReview, transition', () => {
    it('should unset shouldShowCongratulations.', () => {
      const memoryReviewStateService = new MemoryReviewStateService();

      memoryReviewStateService.transition(new MemoryRecordReview(new MemoryRecord('', '')));

      expect(memoryReviewStateService.shouldShowCongratulations).toBe(false);
    });

    it('should set shouldShowMemoryReview.', () => {
      const memoryReviewStateService = new MemoryReviewStateService();

      memoryReviewStateService.transition(new MemoryRecordReview(new MemoryRecord('', '')));

      expect(memoryReviewStateService.shouldShowMemoryReview).toBe(true);
    });
  });
});
