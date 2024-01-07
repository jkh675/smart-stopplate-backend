import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

/** Shooter divisons */
export enum Division {
  Classic = 'CLASSIC',
  Open = 'OPEN',
  Production = 'PRODUCTION',
  Productionoptics = 'PRODUCTIONOPTICS',
  Standard = 'STANDARD'
}

export type Mutation = {
  __typename?: 'Mutation';
  createShooter: Shooter;
  createStage: Stage;
  deleteShooter: Shooter;
  deleteStage: Stage;
  lockStage: Stage;
  updateShooter: Shooter;
  updateStage: Stage;
};


export type MutationCreateShooterArgs = {
  division: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateStageArgs = {
  condition: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  noShoots: Scalars['Int']['input'];
  paperTargets: Scalars['Int']['input'];
  popperTargets: Scalars['Int']['input'];
};


export type MutationDeleteShooterArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteStageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLockStageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateShooterArgs = {
  division: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateStageArgs = {
  condition: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  noShoots: Scalars['Int']['input'];
  paperTargets: Scalars['Int']['input'];
  popperTargets: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllShooters: Array<Maybe<Shooter>>;
  getAllStages: Array<Stage>;
  getShooter?: Maybe<Shooter>;
  getStage: Stage;
};


export type QueryGetShooterArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetStageArgs = {
  id: Scalars['Int']['input'];
};

export type Shooter = {
  __typename?: 'Shooter';
  createdAt: Scalars['DateTime']['output'];
  division: Division;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Stage = {
  __typename?: 'Stage';
  condition: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isLocked: Scalars['Boolean']['output'];
  maximumPoints: Scalars['Int']['output'];
  minimumRounds: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  noShoots: Scalars['Int']['output'];
  paperTargets: Scalars['Int']['output'];
  popperTargets: Scalars['Int']['output'];
  type: StageType;
};

/** Stage type */
export enum StageType {
  Long = 'LONG',
  Medium = 'MEDIUM',
  Other = 'OTHER',
  Short = 'SHORT'
}

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToShooterUpdate: Scalars['Boolean']['output'];
  subscribeToStageUpdate: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Division: Division;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Shooter: ResolverTypeWrapper<Shooter>;
  Stage: ResolverTypeWrapper<Stage>;
  StageType: StageType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Shooter: Shooter;
  Stage: Stage;
  String: Scalars['String']['output'];
  Subscription: {};
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createShooter?: Resolver<ResolversTypes['Shooter'], ParentType, ContextType, RequireFields<MutationCreateShooterArgs, 'division' | 'name'>>;
  createStage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType, RequireFields<MutationCreateStageArgs, 'condition' | 'description' | 'name' | 'noShoots' | 'paperTargets' | 'popperTargets'>>;
  deleteShooter?: Resolver<ResolversTypes['Shooter'], ParentType, ContextType, RequireFields<MutationDeleteShooterArgs, 'id'>>;
  deleteStage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType, RequireFields<MutationDeleteStageArgs, 'id'>>;
  lockStage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType, RequireFields<MutationLockStageArgs, 'id'>>;
  updateShooter?: Resolver<ResolversTypes['Shooter'], ParentType, ContextType, RequireFields<MutationUpdateShooterArgs, 'division' | 'id' | 'name'>>;
  updateStage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType, RequireFields<MutationUpdateStageArgs, 'condition' | 'description' | 'id' | 'name' | 'noShoots' | 'paperTargets' | 'popperTargets'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllShooters?: Resolver<Array<Maybe<ResolversTypes['Shooter']>>, ParentType, ContextType>;
  getAllStages?: Resolver<Array<ResolversTypes['Stage']>, ParentType, ContextType>;
  getShooter?: Resolver<Maybe<ResolversTypes['Shooter']>, ParentType, ContextType, RequireFields<QueryGetShooterArgs, 'id'>>;
  getStage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType, RequireFields<QueryGetStageArgs, 'id'>>;
};

export type ShooterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shooter'] = ResolversParentTypes['Shooter']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  division?: Resolver<ResolversTypes['Division'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stage'] = ResolversParentTypes['Stage']> = {
  condition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maximumPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minimumRounds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  noShoots?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paperTargets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  popperTargets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StageType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  subscribeToShooterUpdate?: SubscriptionResolver<ResolversTypes['Boolean'], "subscribeToShooterUpdate", ParentType, ContextType>;
  subscribeToStageUpdate?: SubscriptionResolver<ResolversTypes['Boolean'], "subscribeToStageUpdate", ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shooter?: ShooterResolvers<ContextType>;
  Stage?: StageResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

