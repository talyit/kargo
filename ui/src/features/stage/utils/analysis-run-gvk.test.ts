import { describe, expect, test } from 'vitest';

import { analysisRunGVKRun, isAnalysisRun } from './analysis-run-gvk';

describe('isAnalysisRun', () => {
  test('returns false for an EE extension run gvk', () => {
    expect(isAnalysisRun('kargo.akuity.io/v1alpha1, Kind=AnalysisRunRequest')).toBe(false);
  });

  test('returns true for a Rollouts AnalysisRun gvk', () => {
    expect(isAnalysisRun(analysisRunGVKRun)).toBe(true);
  });

  test('returns true for a legacy (empty) gvk', () => {
    expect(isAnalysisRun('')).toBe(true);
  });

  test('returns true when gvk is undefined', () => {
    expect(isAnalysisRun(undefined)).toBe(true);
  });
});
