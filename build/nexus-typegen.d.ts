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
  ScoreState: "DNF" | "DQ" | "HAVE_NOT_SCORED_YET" | "SCORED"
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
  Dq: { // root type
    category: string; // String!
    category_zh: string; // String!
    content: string; // String!
    content_zh: string; // String!
    id: number; // Int!
    index: string; // String!
  }
  Mutation: {};
  ProError: { // root type
    big_title: string; // String!
    big_title_zh: string; // String!
    content: string; // String!
    content_zh: string; // String!
    id: number; // Int!
    index: string; // String!
    single_punishment: boolean; // Boolean!
  }
  Query: {};
  Score: { // root type
    alphaZone: number; // Int!
    charlieZone: number; // Int!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    deltaZone: number; // Int!
    id: number; // Int!
    miss: number; // Int!
    noShoots: number; // Int!
    poppers: number; // Int!
    proError: number; // Int!
    round: number; // Int!
    scoreState: NexusGenEnums['ScoreState']; // ScoreState!
    time: number; // Float!
  }
  Scoreboard: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    isLocked: boolean; // Boolean!
    name: string; // String!
  }
  Scorelist: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    isLocked: boolean; // Boolean!
    rounds: number; // Int!
  }
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
  Dq: { // field return type
    category: string; // String!
    category_zh: string; // String!
    content: string; // String!
    content_zh: string; // String!
    id: number; // Int!
    index: string; // String!
  }
  Mutation: { // field return type
    addNewRound: NexusGenRootTypes['Scorelist']; // Scorelist!
    assignScore: NexusGenRootTypes['Score']; // Score!
    createScore: NexusGenRootTypes['Score']; // Score!
    createScoreboard: NexusGenRootTypes['Scoreboard']; // Scoreboard!
    createScorelist: NexusGenRootTypes['Scorelist']; // Scorelist!
    createShooter: NexusGenRootTypes['Shooter']; // Shooter!
    createStage: NexusGenRootTypes['Stage']; // Stage!
    deleteScore: NexusGenRootTypes['Score']; // Score!
    deleteScoreboard: NexusGenRootTypes['Scoreboard']; // Scoreboard!
    deleteScorelist: NexusGenRootTypes['Scorelist']; // Scorelist!
    deleteShooter: NexusGenRootTypes['Shooter']; // Shooter!
    deleteStage: NexusGenRootTypes['Stage']; // Stage!
    lockScoreboard: NexusGenRootTypes['Scoreboard']; // Scoreboard!
    lockScorelist: NexusGenRootTypes['Scorelist']; // Scorelist!
    lockStage: NexusGenRootTypes['Stage']; // Stage!
    resetScore: NexusGenRootTypes['Score']; // Score!
    setScoreDNF: NexusGenRootTypes['Score']; // Score!
    setScoreDQ: NexusGenRootTypes['Score']; // Score!
    swapScoreId: boolean | null; // Boolean
    updateScore: NexusGenRootTypes['Score']; // Score!
    updateScoreboard: NexusGenRootTypes['Scoreboard']; // Scoreboard!
    updateShooter: NexusGenRootTypes['Shooter']; // Shooter!
    updateStage: NexusGenRootTypes['Stage']; // Stage!
  }
  ProError: { // field return type
    big_title: string; // String!
    big_title_zh: string; // String!
    content: string; // String!
    content_zh: string; // String!
    id: number; // Int!
    index: string; // String!
    single_punishment: boolean; // Boolean!
  }
  Query: { // field return type
    getAllDqReason: NexusGenRootTypes['Dq'][]; // [Dq!]!
    getAllProError: NexusGenRootTypes['ProError'][]; // [ProError!]!
    getAllScoreboards: NexusGenRootTypes['Scoreboard'][]; // [Scoreboard!]!
    getAllScorelists: NexusGenRootTypes['Scorelist'][]; // [Scorelist!]!
    getAllScores: NexusGenRootTypes['Score'][]; // [Score!]!
    getAllShooters: Array<NexusGenRootTypes['Shooter'] | null>; // [Shooter]!
    getAllStages: NexusGenRootTypes['Stage'][]; // [Stage!]!
    getScore: NexusGenRootTypes['Score']; // Score!
    getScoreboard: NexusGenRootTypes['Scoreboard']; // Scoreboard!
    getScorelist: NexusGenRootTypes['Scorelist']; // Scorelist!
    getScores: NexusGenRootTypes['Score'][]; // [Score!]!
    getShooter: NexusGenRootTypes['Shooter'] | null; // Shooter
    getStage: NexusGenRootTypes['Stage']; // Stage!
  }
  Score: { // field return type
    alphaZone: number; // Int!
    charlieZone: number; // Int!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    deltaZone: number; // Int!
    hitFactor: number; // Float!
    id: number; // Int!
    miss: number; // Int!
    noShoots: number; // Int!
    poppers: number; // Int!
    proError: number; // Int!
    round: number; // Int!
    scoreState: NexusGenEnums['ScoreState']; // ScoreState!
    scorelist: NexusGenRootTypes['Scorelist']; // Scorelist!
    shooter: NexusGenRootTypes['Shooter']; // Shooter!
    time: number; // Float!
    totalScore: number; // Int!
  }
  Scoreboard: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    isLocked: boolean; // Boolean!
    name: string; // String!
    scorelists: NexusGenRootTypes['Scorelist'][]; // [Scorelist!]!
  }
  Scorelist: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    isLocked: boolean; // Boolean!
    rounds: number; // Int!
    scoreboard: NexusGenRootTypes['Scoreboard']; // Scoreboard!
    scores: NexusGenRootTypes['Score'][]; // [Score!]!
    stage: NexusGenRootTypes['Stage']; // Stage!
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
    subscribeToScoreUpdate: boolean; // Boolean!
    subscribeToScoreboardUpdate: boolean; // Boolean!
    subscribeToScorelistUpdate: boolean; // Boolean!
    subscribeToShooterUpdate: boolean; // Boolean!
    subscribeToStageUpdate: boolean; // Boolean!
  }
}

export interface NexusGenFieldTypeNames {
  Dq: { // field return type name
    category: 'String'
    category_zh: 'String'
    content: 'String'
    content_zh: 'String'
    id: 'Int'
    index: 'String'
  }
  Mutation: { // field return type name
    addNewRound: 'Scorelist'
    assignScore: 'Score'
    createScore: 'Score'
    createScoreboard: 'Scoreboard'
    createScorelist: 'Scorelist'
    createShooter: 'Shooter'
    createStage: 'Stage'
    deleteScore: 'Score'
    deleteScoreboard: 'Scoreboard'
    deleteScorelist: 'Scorelist'
    deleteShooter: 'Shooter'
    deleteStage: 'Stage'
    lockScoreboard: 'Scoreboard'
    lockScorelist: 'Scorelist'
    lockStage: 'Stage'
    resetScore: 'Score'
    setScoreDNF: 'Score'
    setScoreDQ: 'Score'
    swapScoreId: 'Boolean'
    updateScore: 'Score'
    updateScoreboard: 'Scoreboard'
    updateShooter: 'Shooter'
    updateStage: 'Stage'
  }
  ProError: { // field return type name
    big_title: 'String'
    big_title_zh: 'String'
    content: 'String'
    content_zh: 'String'
    id: 'Int'
    index: 'String'
    single_punishment: 'Boolean'
  }
  Query: { // field return type name
    getAllDqReason: 'Dq'
    getAllProError: 'ProError'
    getAllScoreboards: 'Scoreboard'
    getAllScorelists: 'Scorelist'
    getAllScores: 'Score'
    getAllShooters: 'Shooter'
    getAllStages: 'Stage'
    getScore: 'Score'
    getScoreboard: 'Scoreboard'
    getScorelist: 'Scorelist'
    getScores: 'Score'
    getShooter: 'Shooter'
    getStage: 'Stage'
  }
  Score: { // field return type name
    alphaZone: 'Int'
    charlieZone: 'Int'
    createdAt: 'DateTime'
    deltaZone: 'Int'
    hitFactor: 'Float'
    id: 'Int'
    miss: 'Int'
    noShoots: 'Int'
    poppers: 'Int'
    proError: 'Int'
    round: 'Int'
    scoreState: 'ScoreState'
    scorelist: 'Scorelist'
    shooter: 'Shooter'
    time: 'Float'
    totalScore: 'Int'
  }
  Scoreboard: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    isLocked: 'Boolean'
    name: 'String'
    scorelists: 'Scorelist'
  }
  Scorelist: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    isLocked: 'Boolean'
    rounds: 'Int'
    scoreboard: 'Scoreboard'
    scores: 'Score'
    stage: 'Stage'
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
    subscribeToScoreUpdate: 'Boolean'
    subscribeToScoreboardUpdate: 'Boolean'
    subscribeToScorelistUpdate: 'Boolean'
    subscribeToShooterUpdate: 'Boolean'
    subscribeToStageUpdate: 'Boolean'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addNewRound: { // args
      id: number; // Int!
    }
    assignScore: { // args
      alphaZone: number; // Int!
      charlieZone: number; // Int!
      deltaZone: number; // Int!
      id: number; // Int!
      miss: number; // Int!
      noShoots: number; // Int!
      poppers: number; // Int!
      proError: number; // Int!
      time: number; // Float!
    }
    createScore: { // args
      round: number; // Int!
      scorelistId: number; // Int!
      shooterId: number; // Int!
    }
    createScoreboard: { // args
      name: string; // String!
    }
    createScorelist: { // args
      scoreboardId: number; // Int!
      stageId: number; // Int!
    }
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
    deleteScore: { // args
      id: number; // Int!
    }
    deleteScoreboard: { // args
      id: number; // Int!
    }
    deleteScorelist: { // args
      id: number; // Int!
    }
    deleteShooter: { // args
      id: number; // Int!
    }
    deleteStage: { // args
      id: number; // Int!
    }
    lockScoreboard: { // args
      id: number; // Int!
    }
    lockScorelist: { // args
      id: number; // Int!
    }
    lockStage: { // args
      id: number; // Int!
    }
    resetScore: { // args
      id: number; // Int!
    }
    setScoreDNF: { // args
      id: number; // Int!
    }
    setScoreDQ: { // args
      dq_reason: number; // Int!
      id: number; // Int!
    }
    swapScoreId: { // args
      id1: number; // Int!
      id2: number; // Int!
    }
    updateScore: { // args
      alphaZone: number; // Int!
      charlieZone: number; // Int!
      deltaZone: number; // Int!
      id: number; // Int!
      miss: number; // Int!
      noShoots: number; // Int!
      poppers: number; // Int!
      proError: number; // Int!
      time: number; // Float!
    }
    updateScoreboard: { // args
      id: number; // Int!
      name: string; // String!
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
    getScore: { // args
      id: number; // Int!
    }
    getScoreboard: { // args
      id: number; // Int!
    }
    getScorelist: { // args
      id: number; // Int!
    }
    getScores: { // args
      round?: number | null; // Int
      scoreState?: NexusGenEnums['ScoreState'] | null; // ScoreState
      scorelistId?: number | null; // Int
      shooterId?: number | null; // Int
    }
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