import type * as Types from '../../../graphql/_gen/global-types';
import type * as gm from 'graphql-modules';
export namespace VersionModule {
	interface DefinedFields {
		Version: 'releaseVersion' | 'releaseCreatedAtUtc';
		Mutation: 'boostServer';
		Query: 'version';
	}

	export type Version = Pick<Types.Version, DefinedFields['Version']>;
	export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
	export type Query = Pick<Types.Query, DefinedFields['Query']>;

	export type VersionResolvers = Pick<
		Types.VersionResolvers,
		DefinedFields['Version'] | '__isTypeOf'
	>;
	export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
	export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;

	export interface Resolvers {
		Version?: VersionResolvers;
		Mutation?: MutationResolvers;
		Query?: QueryResolvers;
	}

	export interface MiddlewareMap {
		'*'?: {
			'*'?: gm.Middleware[];
		};
		Version?: {
			'*'?: gm.Middleware[];
			releaseVersion?: gm.Middleware[];
			releaseCreatedAtUtc?: gm.Middleware[];
		};
		Mutation?: {
			'*'?: gm.Middleware[];
			boostServer?: gm.Middleware[];
		};
		Query?: {
			'*'?: gm.Middleware[];
			version?: gm.Middleware[];
		};
	}
}
