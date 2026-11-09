import part11CalibrationSoftware from "./21-cfr-part-11-calibration-software";
import calibrationCertificateSoftware from "./calibration-certificate-software";
import calibrationExcelAlternative from "./calibration-excel-alternative";
import calibrationLabSoftware from "./calibration-lab-software";
import calibrationManagementSoftware from "./calibration-management-software";
import calibrationSchedulingSoftware from "./calibration-scheduling-software";
import calibrationSoftware from "./calibration-software";
import calibrationSoftwareErpIntegration from "./calibration-software-erp-integration";
import calibrationSoftwareMigration from "./calibration-software-migration";
import calibrationTrackingSoftware from "./calibration-tracking-software";
import cloudCalibrationSoftware from "./cloud-calibration-software";
import equipmentCalibrationSoftware from "./equipment-calibration-software";
import flukeMetCalIntegration from "./fluke-met-cal-integration";
import gaugeCalibrationSoftware from "./gauge-calibration-software";
import iso17025CalibrationSoftware from "./iso-17025-calibration-software";
import measurementUncertaintySoftware from "./measurement-uncertainty-software";
import onsiteCalibrationSoftware from "./onsite-calibration-software";
import type { LandingPage } from "./types";

export { GUIDE_GROUPS, type LandingPage, type LandingSection } from "./types";

export const landingPages: LandingPage[] = [
  calibrationManagementSoftware,
  calibrationSoftware,
  calibrationLabSoftware,
  equipmentCalibrationSoftware,
  gaugeCalibrationSoftware,
  cloudCalibrationSoftware,
  calibrationExcelAlternative,
  calibrationTrackingSoftware,
  calibrationSchedulingSoftware,
  measurementUncertaintySoftware,
  calibrationCertificateSoftware,
  onsiteCalibrationSoftware,
  iso17025CalibrationSoftware,
  part11CalibrationSoftware,
  calibrationSoftwareErpIntegration,
  flukeMetCalIntegration,
  calibrationSoftwareMigration,
];

export const getLandingPage = (slug: string) => landingPages.find((page) => page.slug === slug) ?? null;
