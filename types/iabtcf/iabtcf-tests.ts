import * as iabtcf from 'iabtcf';

const gvlMapItem: iabtcf.GVLMapItem = {
  id: 1,
  name: "GVL map item name"
}

const feature: iabtcf.Feature = {
  id: 1,
  name: "feature name",
  description: 'bleh',
  descriptionLegal: 'bleh2',
}

const purpose: iabtcf.Purpose = {
  id: 1,
  name: "purpose name",
  description: 'bleh',
  descriptionLegal: 'bleh2',
}

const stack: iabtcf.Stack = {
  id: 1,
  name: "stack name",
  description: 'bleh',
  purposes: [1,2,3],
  specialFeatures: [4,5,6],
}

const vendor: iabtcf.Vendor = {
  id: 1,
  name: "vendor name",
  purposes: [1,2,3],
  legIntPurposes: [4,5,6],
  flexiblePurposes: [1,5,3],
  specialPurposes: [1,2],
  features: [3],
  specialFeatures: [7],
  policyUrl: 'https://foo.com',
  deletedDate: 'no',
  overflow: {
      httpGetLimit: 32,
  },
}

const vendorIntMap:iabtcf.IntMap<iabtcf.Vendor> = {
  '1': vendor,
}
const purposeIntMap:iabtcf.IntMap<iabtcf.Purpose> = {
  '1': purpose,
}
const specialPurposeIntMap:iabtcf.IntMap<iabtcf.Purpose> = {
  '1': purpose,
}
const featureIntMap:iabtcf.IntMap<iabtcf.Feature> = {
  '1': feature,
}
const specialFeatureIntMap:iabtcf.IntMap<iabtcf.Feature> = {
  '1': feature,
}
const stackIntMap:iabtcf.IntMap<iabtcf.Stack> = {
  '1': stack,
}
const declarations:iabtcf.Declarations = {
  purposes:purposeIntMap,
  specialPurposes: specialPurposeIntMap,
  features: featureIntMap,
  specialFeatures: specialFeatureIntMap,
  stacks: stackIntMap,
};

const vendorlist: iabtcf.VendorList = {
  vendorListVersion: 200,
  lastUpdated: 'a date',
  purposes:purposeIntMap,
  specialPurposes: specialPurposeIntMap,
  features: featureIntMap,
  specialFeatures: specialFeatureIntMap,
  stacks: stackIntMap,
  gvlSpecificationVersion: 2,
  tcfPolicyVersion: 2,
  vendors: vendorIntMap,
};

const setRestrictionType = (restrictionType: iabtcf.RestrictionType): void => {};

setRestrictionType(0);
setRestrictionType(1);
setRestrictionType(2);
setRestrictionType(iabtcf.RestrictionType.NOT_ALLOWED);
setRestrictionType(iabtcf.RestrictionType.REQUIRE_CONSENT);
setRestrictionType(iabtcf.RestrictionType.REQUIRE_LI);

const setCmpStatus = (cmpStatus: iabtcf.CmpStatus): void => {};

setCmpStatus(iabtcf.CmpStatus.STUB);
setCmpStatus(iabtcf.CmpStatus.LOADING);
setCmpStatus(iabtcf.CmpStatus.LOADED);
setCmpStatus(iabtcf.CmpStatus.ERROR);

const setDisplayStatus = (cmpStatus: iabtcf.DisplayStatus): void => {};

setDisplayStatus(iabtcf.DisplayStatus.VISIBLE);
setDisplayStatus(iabtcf.DisplayStatus.HIDDEN);
setDisplayStatus(iabtcf.DisplayStatus.DISABLED);

const setEventStatus = (cmpStatus: iabtcf.EventStatus): void => {};

setEventStatus(iabtcf.EventStatus.TC_LOADED);
setEventStatus(iabtcf.EventStatus.CMP_UI_SHOWN);
setEventStatus(iabtcf.EventStatus.USER_ACTION_COMPLETE);

const tcData: iabtcf.TCData = {
  cmpId: 1,
  cmpVersion: 2,
  gdprApplies: true,
  tcfPolicyVersion: 2,
  tcString: 'Clkajsdkfjlakjdsfkjalsjdfljk',
  listenerId: 1,
  eventStatus: iabtcf.EventStatus.TC_LOADED,
  cmpStatus: iabtcf.CmpStatus.LOADED,
  publisherCC: 'US',
  isServiceSpecific: true,
  useNonStandardStacks: true,
  purposeOneTreatment: false,
  outOfBand: {
    allowedVendors: { '1':true },
      disclosedVendors: { '1':true },
  },
  purpose: {
    consents: { '1':true },
      legitimateInterests: { '1':true },
  },
  vendor: {
    consents: { '1':true },
      legitimateInterests: { '1':true },
  },
  specialFeatureOptins: { '1':true },
  publisher: {
    consents: { '1':true },
      legitimateInterests: { '1':true },
      customPurpose: {
        consents: { '1':true },
          legitimateInterests: { '1':true },
      },
    restrictions: { '1': { '1': iabtcf.RestrictionType.REQUIRE_CONSENT} },
  },
};

const inAppTCData: iabtcf.InAppTCData = {
  cmpId: 1,
  cmpVersion: 2,
  gdprApplies: true,
  tcfPolicyVersion: 2,
  tcString: 'Clkajsdkfjlakjdsfkjalsjdfljk',
  listenerId: 1,
  eventStatus: iabtcf.EventStatus.TC_LOADED,
  cmpStatus: iabtcf.CmpStatus.LOADED,
  publisherCC: 'US',
  isServiceSpecific: '1',
  useNonStandardStacks: '1',
  purposeOneTreatment: '0',
  outOfBand: {
    allowedVendors: '1',
      disclosedVendors: '1',
  },
  purpose: {
    consents: '1',
      legitimateInterests: '1',
  },
  vendor: {
    consents: '1',
      legitimateInterests: '1',
  },
  specialFeatureOptins: '1',
  publisher: {
    consents: '1',
      legitimateInterests: '1',
      customPurpose: {
        consents: '1',
          legitimateInterests: '1',
      },
    restrictions: '1',
  },
}

const ping: iabtcf.Ping = {
  cmpId: 1,
  cmpVersion: 3,
  gdprApplies: true,
  tcfPolicyVersion: 2,
  cmpLoaded: true,
  cmpStatus: iabtcf.CmpStatus.LOADED,
  displayStatus: iabtcf.DisplayStatus.VISIBLE,
  apiVersion: '2',
  gvlVersion: 300,
}

const pingNoOptionsl: iabtcf.Ping = {
  cmpId: 1,
  cmpLoaded: true,
  cmpStatus: iabtcf.CmpStatus.LOADED,
  displayStatus: iabtcf.DisplayStatus.VISIBLE,
}

const setTCFCommand = (tcfCommand: iabtcf.TCFCommand): void => {};

setTCFCommand(iabtcf.TCFCommand.PING);
setTCFCommand(iabtcf.TCFCommand.GET_TC_DATA);
setTCFCommand(iabtcf.TCFCommand.GET_IN_APP_TC_DATA);
setTCFCommand(iabtcf.TCFCommand.GET_VENDOR_LIST);
setTCFCommand(iabtcf.TCFCommand.ADD_EVENT_LISTENER);
setTCFCommand(iabtcf.TCFCommand.REMOVE_EVENT_LISTENER);

const disabledCallback: iabtcf.CommandCallback = (error: iabtcf.Disabled, success:boolean): void => {};
const errorCallback: iabtcf.CommandCallback = (res: null, success: false): void => {};
const inAppTCDataCallback: iabtcf.CommandCallback = (IATCData: iabtcf.InAppTCData, success: boolean): void => {};
const pingCallback: iabtcf.CommandCallback = (ping: iabtcf.Ping): void => {};
const removeEventListenerCallback: iabtcf.CommandCallback = (status: boolean): void => {};
const tcDataCallback: iabtcf.CommandCallback = (tcData: iabtcf.TCData, success: boolean): void => {};
const vendorListCallback: iabtcf.CommandCallback = (gvl: iabtcf.VendorList, success: boolean): void => {};

const tcfapi = window[iabtcf.CMP_API as keyof Window]; 

tcfapi('command', 2, vendorListCallback);
tcfapi('command', 2, vendorListCallback, 'param');
tcfapi('command', 2, vendorListCallback, 'param', 'param');
tcfapi('command', 2, vendorListCallback, 'param', 'param', 1);
tcfapi('command', 2, vendorListCallback, 'param', 'param', 1, {});
tcfapi('command', 2, vendorListCallback, 'param', 'param', 1, {}, []);

