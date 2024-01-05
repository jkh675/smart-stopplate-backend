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
  Link: { // root type
    description: string; // String!
    id: number; // Int!
    url: string; // String!
  }
  Mutation: {};
  Query: {};
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
  }
  Subscription: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Link: { // field return type
    description: string; // String!
    id: number; // Int!
    url: string; // String!
  }
  Mutation: { // field return type
    createStage: NexusGenRootTypes['Stage']; // Stage!
    deleteStage: NexusGenRootTypes['Stage']; // Stage!
    lockStage: NexusGenRootTypes['Stage']; // Stage!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Link'][]; // [Link!]!
    getAllStages: NexusGenRootTypes['Stage'][]; // [Stage!]!
    getStage: NexusGenRootTypes['Stage']; // Stage!
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
    type: string; // String!
  }
  Subscription: { // field return type
    subscribeToStageUpdate: boolean; // Boolean!
    truths: number; // Int!
  }
}

export interface NexusGenFieldTypeNames {
  Link: { // field return type name
    description: 'String'
    id: 'Int'
    url: 'String'
  }
  Mutation: { // field return type name
    createStage: 'Stage'
    deleteStage: 'Stage'
    lockStage: 'Stage'
  }
  Query: { // field return type name
    feed: 'Link'
    getAllStages: 'Stage'
    getStage: 'Stage'
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
    type: 'String'
  }
  Subscription: { // field return type name
    subscribeToStageUpdate: 'Boolean'
    truths: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createStage: { // args
      condition: number; // Int!
      description: string; // String!
      name: string; // String!
      noShoots: number; // Int!
      paperTargets: number; // Int!
      popperTargets: number; // Int!
    }
    deleteStage: { // args
      id: number; // Int!
    }
    lockStage: { // args
      id: number; // Int!
    }
  }
  Query: {
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

export type NexusGenEnumNames = never;

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