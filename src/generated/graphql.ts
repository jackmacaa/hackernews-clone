import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type Comment = {
  __typename?: "Comment";
  body: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  link?: Maybe<Link>;
};

export type Link = {
  __typename?: "Link";
  comments: Array<Comment>;
  createdAt: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  postedBy?: Maybe<User>;
  postedById?: Maybe<Scalars["Int"]["output"]>;
  url: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<AuthPayload>;
  postCommentOnLink: Comment;
  postLink: Link;
  signup?: Maybe<AuthPayload>;
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationPostCommentOnLinkArgs = {
  body: Scalars["String"]["input"];
  linkId: Scalars["ID"]["input"];
};

export type MutationPostLinkArgs = {
  description: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
};

export type MutationSignupArgs = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  comment?: Maybe<Comment>;
  feed: Array<Link>;
  info: Scalars["String"]["output"];
  link?: Maybe<Link>;
};

export type QueryCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryFeedArgs = {
  filterNeedle?: InputMaybe<Scalars["String"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryLinkArgs = {
  id: Scalars["ID"]["input"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  links: Array<Link>;
  name: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Link: ResolverTypeWrapper<Link>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Boolean: Scalars["Boolean"]["output"];
  Comment: Comment;
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  Link: Link;
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  User: User;
};

export type AuthPayloadResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["AuthPayload"] = ResolversParentTypes["AuthPayload"],
> = {
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"],
> = {
  body?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes["Link"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Link"] = ResolversParentTypes["Link"],
> = {
  comments?: Resolver<
    Array<ResolversTypes["Comment"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  postedBy?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  postedById?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  login?: Resolver<
    Maybe<ResolversTypes["AuthPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, "email" | "password">
  >;
  postCommentOnLink?: Resolver<
    ResolversTypes["Comment"],
    ParentType,
    ContextType,
    RequireFields<MutationPostCommentOnLinkArgs, "body" | "linkId">
  >;
  postLink?: Resolver<
    ResolversTypes["Link"],
    ParentType,
    ContextType,
    RequireFields<MutationPostLinkArgs, "description" | "url">
  >;
  signup?: Resolver<
    Maybe<ResolversTypes["AuthPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSignupArgs, "email" | "name" | "password">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  comment?: Resolver<
    Maybe<ResolversTypes["Comment"]>,
    ParentType,
    ContextType,
    RequireFields<QueryCommentArgs, "id">
  >;
  feed?: Resolver<
    Array<ResolversTypes["Link"]>,
    ParentType,
    ContextType,
    Partial<QueryFeedArgs>
  >;
  info?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  link?: Resolver<
    Maybe<ResolversTypes["Link"]>,
    ParentType,
    ContextType,
    RequireFields<QueryLinkArgs, "id">
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes["Link"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
