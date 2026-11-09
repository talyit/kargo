// GVK string representations mirrored from the Kargo API
// (api/v1alpha1/stage_types.go). The AnalysisRunReference.gvk field carries one
// of these to indicate which kind of run a VerificationInfo references.
export const analysisRunGVKRun = 'argoproj.io/v1alpha1, Kind=AnalysisRun';

// isAnalysisRun reports whether an AnalysisRunReference points at an Argo Rollouts AnalysisRun
// rather than a Kargo EE extension.
export const isAnalysisRun = (gvk?: string): boolean =>
  gvk === analysisRunGVKRun || gvk == '' || gvk == null;
