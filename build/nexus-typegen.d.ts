/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Division: "CLASSIC" | "OPEN" | "PRODUCTION" | "PRODUCTIONOPTICS" | "STANDARD"
  StageType: "LONG" | "MEDIUM" | "OTHER" | "SHORT"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Shooter: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    division: NexusGenEnums['Division']; // Division!
    id: number; // Int!
    name: string; // String!
  }
  Stage: { // root type
    condition: number; // Int!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: number; // Int!
    isLocked: boolean; // Boolean!
    name: string; // String!
    noShoots: number; // Int!
    paperTargets: number; // Int!
    popperTargets: number; // Int!
    type: NexusGenEnums['StageType']; // StageType!
  }
  Subscription: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createShooter: NexusGenRootTypes['Shooter']; // Shooter!
    createStage: NexusGenRootTypes['Stage']; // Stage!
    deleteShooter: NexusGenRootTypes['Shooter']; // Shooter!
    deleteStage: NexusGenRootTypes['Stage']; // Stage!
    lockStage: NexusGenRootTypes['Stage']; // Stage!
    updateShooter: NexusGenRootTypes['Shooter']; // Shooter!
    updateStage: NexusGenRootTypes['Stage']; // Stage!
  }
  Query: { // field return type
    getAllShooters: Array<NexusGenRootTypes['Shooter'] | null>; // [Shooter]!
    getAllStages: NexusGenRootTypes['Stage'][]; // [Stage!]!
    getShooter: NexusGenRootTypes['Shooter'] | null; // Shooter
    getStage: NexusGenRootTypes['Stage']; // Stage!
  }
  Shooter: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    division: NexusGenEnums['Division']; // Division!
    id: number; // Int!
    name: string; // String!
  }
  Stage: { // field return type
    condition: number; // Int!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: number; // Int!
    isLocked: boolean; // Boolean!
    maximumPoints: number; // Int!
    minimumRounds: number; // Int!
    name: string; // String!
    noShoots: number; // Int!
    paperTargets: number; // Int!
    popperTargets: number; // Int!
    type: NexusGenEnums['StageType']; // StageType!
  }
  Subscription: { // field return type
    subscribeToShooterUpdate: boolean; // Boolean!
    subscribeToStageUpdate: boolean; // Boolean!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createShooter: 'Shooter'
    createStage: 'Stage'
    deleteShooter: 'Shooter'
    deleteStage: 'Stage'
    lockStage: 'Stage'
    updateShooter: 'Shooter'
    updateStage: 'Stage'
  }
  Query: { // field return type name
    getAllShooters: 'Shooter'
    getAllStages: 'Stage'
    getShooter: 'Shooter'
    getStage: 'Stage'
  }
  Shooter: { // field return type name
    createdAt: 'DateTime'
    division: 'Division'
    id: 'Int'
    name: 'String'
  }
  Stage: { // field return type name
    condition: 'Int'
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    isLocked: 'Boolean'
    maximumPoints: 'Int'
    minimumRounds: 'Int'
    name: 'String'
    noShoots: 'Int'
    paperTargets: 'Int'
    popperTargets: 'Int'
    type: 'StageType'
  }
  Subscription: { // field return type name
    subscribeToShooterUpdate: 'Boolean'
    subscribeToStageUpdate: 'Boolean'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createShooter: { // args
      division: string; // String!
      name: string; // String!
    }
    createStage: { // args
      condition: number; // Int!
      description: string; // String!
      name: string; // String!
      noShoots: number; // Int!
      paperTargets: number; // Int!
      popperTargets: number; // Int!
    }
    deleteShooter: { // args
      id: number; // Int!
    }
    deleteStage: { // args
      id: number; // Int!
    }
    lockStage: { // args
      id: number; // Int!
    }
    updateShooter: { // args
      division: string; // String!
      id: number; // Int!
      name: string; // String!
    }
    updateStage: { // args
      condition: number; // Int!
      description: string; // String!
      id: number; // Int!
      name: string; // String!
      noShoots: number; // Int!
      paperTargets: number; // Int!
      popperTargets: number; // Int!
    }
  }
  Query: {
    getShooter: { // args
      id: number; // Int!
    }
    getStage: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}