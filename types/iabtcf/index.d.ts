// Type definitions for iabtcf 1.0.2
// Project: http://iabtcf.com/
// Definitions by: Chris Paterson <https://github.com/chrispaterson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface GVLMapItem {
    id: number;
    name: string;
}

export interface Feature extends GVLMapItem {
  description: string;
  descriptionLegal: string;
}

export interface Purpose extends GVLMapItem {
  description: string;
  descriptionLegal: string;
}

export interface Stack extends GVLMapItem {
    purposes: number[];
    specialFeatures: number[];
    description: string;
}

export interface Vendor extends GVLMapItem {
  purposes: number[];
  legIntPurposes: number[];
  flexiblePurposes: number[];
  specialPurposes: number[];
  features: number[];
  specialFeatures: number[];
  policyUrl: string;
  deletedDate?: Date | string;
  overflow?: {
      httpGetLimit: 32 | 128;
  };
}

export interface IntMap<T> {
    [id: string]: T;
}

export interface Declarations {
    purposes: IntMap<Purpose>;
    specialPurposes: IntMap<Purpose>;
    features: IntMap<Feature>;
    specialFeatures: IntMap<Feature>;
    stacks: IntMap<Stack>;
}

export interface VendorList extends Declarations {
  lastUpdated: string | Date;
  gvlSpecificationVersion: number;
  vendorListVersion: number;
  tcfPolicyVersion: number;
  vendors: IntMap<Vendor>;
}

export enum RestrictionType {

    /**
     * under no circumstances is this purpose allowed.
     */
    NOT_ALLOWED = 0,
    /**
     * if the default declaration is legitimate interest then this flips the purpose to consent in the encoding.
     */
    REQUIRE_CONSENT = 1,
    /**
     * if the default declaration is consent then this flips the purpose to Legitimate Interest in the encoding.
     */
    REQUIRE_LI = 2

}

export enum CmpStatus {
    /**
     * CMP not yet loaded – stub still in place
     * @export type {string}
     */
    STUB = 'stub',
    /**
     * CMP is loading
     * @export type {string}
     */
    LOADING = 'loading',
    /**
     * CMP is finished loading
     * @export type {string}
     */
    LOADED = 'loaded',
    /**
     * CMP is in an error state. A CMP shall not respond to any other API requests if this cmpStatus is present.
     * A CMP may set this status if, for any reason, it is unable to perform the operations in compliance with the TCF.
     * @export type {string}
     */
    ERROR = 'error'

}

export enum DisplayStatus {

    /**
     * User export interface is currently displayed
     * @export type {string}
     */
    VISIBLE = 'visible',
    /**
     * User export interface is not yet or no longer displayed
     * @export type {string}
     */
    HIDDEN = 'hidden',
    /**
     * User export interface will not show (e.g. GDPR does not apply or TC data is current and does not need renewal)
     * @export type {string}
     */
    DISABLED = 'disabled'

}
export enum EventStatus {

    /**
     * A CMP is loaded and is prepared to surface a TC String to any calling scripts on the page
     * @export type {string}
     */
    TC_LOADED = 'tcloaded',
    /**
     * The UI is surfaced or re-surfaced
     * And TC String is available and has rendered "Transparency" in accordance with the TCF Policy.
     * @export type {string}
     */
    CMP_UI_SHOWN = 'cmpuishown',
    /**
     * User has confirmed or re-confirmed their choices in accordance with TCF Policy
     * and a CMP is prepared to respond to any calling scripts with the corresponding TC String.
     * @export type {string}
     */
    USER_ACTION_COMPLETE = 'useractioncomplete'

}
interface Response {
  readonly cmpId: number;
  readonly cmpVersion?: number;
  readonly gdprApplies?: boolean;
  readonly tcfPolicyVersion?: number;
}

export interface Disabled extends Response {
  readonly cmpStatus: CmpStatus;
}

interface BooleanVector {
    [id: string]: boolean;
}

interface Restrictions {
    [purposeId: string]: {
        [vendorId: string]: RestrictionType;
    };
}

interface BaseTCData extends Response {
  tcString: string;
  listenerId: number;
  eventStatus: EventStatus;
  cmpStatus: CmpStatus;
  publisherCC: string;
}
export interface TCData extends BaseTCData {
  isServiceSpecific: boolean;
  useNonStandardStacks: boolean;
  purposeOneTreatment: boolean;
  outOfBand: {
      allowedVendors: BooleanVector;
      disclosedVendors: BooleanVector;
  };
  purpose: {
      consents: BooleanVector;
      legitimateInterests: BooleanVector;
  };
  vendor: {
      consents: BooleanVector;
      legitimateInterests: BooleanVector;
  };
  specialFeatureOptins: BooleanVector;
  publisher: {
      consents: BooleanVector;
      legitimateInterests: BooleanVector;
      customPurpose: {
          consents: BooleanVector;
          legitimateInterests: BooleanVector;
      };
      restrictions: Restrictions;
  };
}

export interface InAppTCData extends BaseTCData {
  isServiceSpecific: string;
  useNonStandardStacks: string;
  purposeOneTreatment: string;
  outOfBand: {
      allowedVendors: string;
      disclosedVendors: string;
  };
  purpose: {
      consents: string;
      legitimateInterests: string;
  };
  vendor: {
      consents: string;
      legitimateInterests: string;
  };
  specialFeatureOptins: string;
  publisher: {
      consents: string;
      legitimateInterests: string;
      customPurpose: {
          consents: string;
          legitimateInterests: string;
      };
      restrictions: string;
  };
}

export interface Ping extends Response {

  /**
   * true - CMP main script is loaded
   * false - still running stub
   */
  cmpLoaded: boolean;
  cmpStatus: CmpStatus;
  displayStatus: DisplayStatus;

  /**
   * version of the CMP API that is supported; e.g. “2”
   */
  apiVersion?: string;

  /**
   * Version of the GVL currently loaded by the CMP
   * undefined if still the stub
   */
  gvlVersion?: number;

}

export enum TCFCommand {
  PING = 'ping',
  GET_TC_DATA = 'getTCData',
  GET_IN_APP_TC_DATA = 'getInAppTCData',
  GET_VENDOR_LIST = 'getVendorList',
  ADD_EVENT_LISTENER = 'addEventListener',
  REMOVE_EVENT_LISTENER = 'removeEventListener',
}
type DisabledCallback = (error: Disabled, success: false) => void
type ErrorCallback = (res: null, success: false) => void;
type FailCallback = ErrorCallback;
type InAppTCDataCallback = (IATCData: InAppTCData, success: true) => void;
type PingCallback = (pingReturn: Ping) => void;
type RemoveListenerCallback = (status: boolean) => void;
type TCDataCallback = (tcData: TCData, success: true) => void;
type VendorListCallback = (gvl: VendorList, success: true) => void;
export type CommandCallback =
  DisabledCallback |
  ErrorCallback |
  FailCallback |
  InAppTCDataCallback |
  PingCallback |
  RemoveListenerCallback |
  TCDataCallback |
  VendorListCallback;

export const CMP_API = '__tcfapi';

export interface Window {

  // eslint-disable-next-line @export typescript-eslint/no-explicit-any
  [CMP_API]: (command: string, version: number, callback: CommandCallback, ...params: any) => void;

}
