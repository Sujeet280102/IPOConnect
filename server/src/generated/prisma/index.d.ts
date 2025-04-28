
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UpcomingIpo
 * 
 */
export type UpcomingIpo = $Result.DefaultSelection<Prisma.$UpcomingIpoPayload>
/**
 * Model OngoingIpo
 * 
 */
export type OngoingIpo = $Result.DefaultSelection<Prisma.$OngoingIpoPayload>
/**
 * Model NewListedIpo
 * 
 */
export type NewListedIpo = $Result.DefaultSelection<Prisma.$NewListedIpoPayload>
/**
 * Model AllSector
 * 
 */
export type AllSector = $Result.DefaultSelection<Prisma.$AllSectorPayload>
/**
 * Model Sector
 * 
 */
export type Sector = $Result.DefaultSelection<Prisma.$SectorPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model SharkInvestor
 * 
 */
export type SharkInvestor = $Result.DefaultSelection<Prisma.$SharkInvestorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upcomingIpo`: Exposes CRUD operations for the **UpcomingIpo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpcomingIpos
    * const upcomingIpos = await prisma.upcomingIpo.findMany()
    * ```
    */
  get upcomingIpo(): Prisma.UpcomingIpoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ongoingIpo`: Exposes CRUD operations for the **OngoingIpo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OngoingIpos
    * const ongoingIpos = await prisma.ongoingIpo.findMany()
    * ```
    */
  get ongoingIpo(): Prisma.OngoingIpoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newListedIpo`: Exposes CRUD operations for the **NewListedIpo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewListedIpos
    * const newListedIpos = await prisma.newListedIpo.findMany()
    * ```
    */
  get newListedIpo(): Prisma.NewListedIpoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allSector`: Exposes CRUD operations for the **AllSector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllSectors
    * const allSectors = await prisma.allSector.findMany()
    * ```
    */
  get allSector(): Prisma.AllSectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sector`: Exposes CRUD operations for the **Sector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sectors
    * const sectors = await prisma.sector.findMany()
    * ```
    */
  get sector(): Prisma.SectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharkInvestor`: Exposes CRUD operations for the **SharkInvestor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharkInvestors
    * const sharkInvestors = await prisma.sharkInvestor.findMany()
    * ```
    */
  get sharkInvestor(): Prisma.SharkInvestorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UpcomingIpo: 'UpcomingIpo',
    OngoingIpo: 'OngoingIpo',
    NewListedIpo: 'NewListedIpo',
    AllSector: 'AllSector',
    Sector: 'Sector',
    Blog: 'Blog',
    SharkInvestor: 'SharkInvestor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "upcomingIpo" | "ongoingIpo" | "newListedIpo" | "allSector" | "sector" | "blog" | "sharkInvestor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UpcomingIpo: {
        payload: Prisma.$UpcomingIpoPayload<ExtArgs>
        fields: Prisma.UpcomingIpoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpcomingIpoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpcomingIpoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>
          }
          findFirst: {
            args: Prisma.UpcomingIpoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpcomingIpoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>
          }
          findMany: {
            args: Prisma.UpcomingIpoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>[]
          }
          create: {
            args: Prisma.UpcomingIpoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>
          }
          createMany: {
            args: Prisma.UpcomingIpoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpcomingIpoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>[]
          }
          delete: {
            args: Prisma.UpcomingIpoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>
          }
          update: {
            args: Prisma.UpcomingIpoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>
          }
          deleteMany: {
            args: Prisma.UpcomingIpoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpcomingIpoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpcomingIpoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>[]
          }
          upsert: {
            args: Prisma.UpcomingIpoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpcomingIpoPayload>
          }
          aggregate: {
            args: Prisma.UpcomingIpoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpcomingIpo>
          }
          groupBy: {
            args: Prisma.UpcomingIpoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpcomingIpoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpcomingIpoCountArgs<ExtArgs>
            result: $Utils.Optional<UpcomingIpoCountAggregateOutputType> | number
          }
        }
      }
      OngoingIpo: {
        payload: Prisma.$OngoingIpoPayload<ExtArgs>
        fields: Prisma.OngoingIpoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OngoingIpoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OngoingIpoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>
          }
          findFirst: {
            args: Prisma.OngoingIpoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OngoingIpoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>
          }
          findMany: {
            args: Prisma.OngoingIpoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>[]
          }
          create: {
            args: Prisma.OngoingIpoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>
          }
          createMany: {
            args: Prisma.OngoingIpoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OngoingIpoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>[]
          }
          delete: {
            args: Prisma.OngoingIpoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>
          }
          update: {
            args: Prisma.OngoingIpoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>
          }
          deleteMany: {
            args: Prisma.OngoingIpoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OngoingIpoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OngoingIpoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>[]
          }
          upsert: {
            args: Prisma.OngoingIpoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingIpoPayload>
          }
          aggregate: {
            args: Prisma.OngoingIpoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOngoingIpo>
          }
          groupBy: {
            args: Prisma.OngoingIpoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OngoingIpoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OngoingIpoCountArgs<ExtArgs>
            result: $Utils.Optional<OngoingIpoCountAggregateOutputType> | number
          }
        }
      }
      NewListedIpo: {
        payload: Prisma.$NewListedIpoPayload<ExtArgs>
        fields: Prisma.NewListedIpoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewListedIpoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewListedIpoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>
          }
          findFirst: {
            args: Prisma.NewListedIpoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewListedIpoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>
          }
          findMany: {
            args: Prisma.NewListedIpoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>[]
          }
          create: {
            args: Prisma.NewListedIpoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>
          }
          createMany: {
            args: Prisma.NewListedIpoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewListedIpoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>[]
          }
          delete: {
            args: Prisma.NewListedIpoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>
          }
          update: {
            args: Prisma.NewListedIpoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>
          }
          deleteMany: {
            args: Prisma.NewListedIpoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewListedIpoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewListedIpoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>[]
          }
          upsert: {
            args: Prisma.NewListedIpoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewListedIpoPayload>
          }
          aggregate: {
            args: Prisma.NewListedIpoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewListedIpo>
          }
          groupBy: {
            args: Prisma.NewListedIpoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewListedIpoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewListedIpoCountArgs<ExtArgs>
            result: $Utils.Optional<NewListedIpoCountAggregateOutputType> | number
          }
        }
      }
      AllSector: {
        payload: Prisma.$AllSectorPayload<ExtArgs>
        fields: Prisma.AllSectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllSectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllSectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>
          }
          findFirst: {
            args: Prisma.AllSectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllSectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>
          }
          findMany: {
            args: Prisma.AllSectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>[]
          }
          create: {
            args: Prisma.AllSectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>
          }
          createMany: {
            args: Prisma.AllSectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllSectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>[]
          }
          delete: {
            args: Prisma.AllSectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>
          }
          update: {
            args: Prisma.AllSectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>
          }
          deleteMany: {
            args: Prisma.AllSectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllSectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllSectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>[]
          }
          upsert: {
            args: Prisma.AllSectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllSectorPayload>
          }
          aggregate: {
            args: Prisma.AllSectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllSector>
          }
          groupBy: {
            args: Prisma.AllSectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllSectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllSectorCountArgs<ExtArgs>
            result: $Utils.Optional<AllSectorCountAggregateOutputType> | number
          }
        }
      }
      Sector: {
        payload: Prisma.$SectorPayload<ExtArgs>
        fields: Prisma.SectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findFirst: {
            args: Prisma.SectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findMany: {
            args: Prisma.SectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          create: {
            args: Prisma.SectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          createMany: {
            args: Prisma.SectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          delete: {
            args: Prisma.SectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          update: {
            args: Prisma.SectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          deleteMany: {
            args: Prisma.SectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          upsert: {
            args: Prisma.SectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          aggregate: {
            args: Prisma.SectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSector>
          }
          groupBy: {
            args: Prisma.SectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectorCountArgs<ExtArgs>
            result: $Utils.Optional<SectorCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      SharkInvestor: {
        payload: Prisma.$SharkInvestorPayload<ExtArgs>
        fields: Prisma.SharkInvestorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharkInvestorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharkInvestorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          findFirst: {
            args: Prisma.SharkInvestorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharkInvestorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          findMany: {
            args: Prisma.SharkInvestorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>[]
          }
          create: {
            args: Prisma.SharkInvestorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          createMany: {
            args: Prisma.SharkInvestorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharkInvestorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>[]
          }
          delete: {
            args: Prisma.SharkInvestorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          update: {
            args: Prisma.SharkInvestorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          deleteMany: {
            args: Prisma.SharkInvestorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharkInvestorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharkInvestorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>[]
          }
          upsert: {
            args: Prisma.SharkInvestorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          aggregate: {
            args: Prisma.SharkInvestorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharkInvestor>
          }
          groupBy: {
            args: Prisma.SharkInvestorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharkInvestorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharkInvestorCountArgs<ExtArgs>
            result: $Utils.Optional<SharkInvestorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    upcomingIpo?: UpcomingIpoOmit
    ongoingIpo?: OngoingIpoOmit
    newListedIpo?: NewListedIpoOmit
    allSector?: AllSectorOmit
    sector?: SectorOmit
    blog?: BlogOmit
    sharkInvestor?: SharkInvestorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.UserRole
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.UserRole
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model UpcomingIpo
   */

  export type AggregateUpcomingIpo = {
    _count: UpcomingIpoCountAggregateOutputType | null
    _min: UpcomingIpoMinAggregateOutputType | null
    _max: UpcomingIpoMaxAggregateOutputType | null
  }

  export type UpcomingIpoMinAggregateOutputType = {
    id: string | null
    name: string | null
    priceBand: string | null
    openDate: string | null
    closeDate: string | null
    issueSize: string | null
    issueType: string | null
    listingDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpcomingIpoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    priceBand: string | null
    openDate: string | null
    closeDate: string | null
    issueSize: string | null
    issueType: string | null
    listingDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpcomingIpoCountAggregateOutputType = {
    id: number
    name: number
    priceBand: number
    openDate: number
    closeDate: number
    issueSize: number
    issueType: number
    listingDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UpcomingIpoMinAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpcomingIpoMaxAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpcomingIpoCountAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UpcomingIpoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpcomingIpo to aggregate.
     */
    where?: UpcomingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingIpos to fetch.
     */
    orderBy?: UpcomingIpoOrderByWithRelationInput | UpcomingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpcomingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpcomingIpos
    **/
    _count?: true | UpcomingIpoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpcomingIpoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpcomingIpoMaxAggregateInputType
  }

  export type GetUpcomingIpoAggregateType<T extends UpcomingIpoAggregateArgs> = {
        [P in keyof T & keyof AggregateUpcomingIpo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpcomingIpo[P]>
      : GetScalarType<T[P], AggregateUpcomingIpo[P]>
  }




  export type UpcomingIpoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpcomingIpoWhereInput
    orderBy?: UpcomingIpoOrderByWithAggregationInput | UpcomingIpoOrderByWithAggregationInput[]
    by: UpcomingIpoScalarFieldEnum[] | UpcomingIpoScalarFieldEnum
    having?: UpcomingIpoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpcomingIpoCountAggregateInputType | true
    _min?: UpcomingIpoMinAggregateInputType
    _max?: UpcomingIpoMaxAggregateInputType
  }

  export type UpcomingIpoGroupByOutputType = {
    id: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt: Date
    updatedAt: Date
    _count: UpcomingIpoCountAggregateOutputType | null
    _min: UpcomingIpoMinAggregateOutputType | null
    _max: UpcomingIpoMaxAggregateOutputType | null
  }

  type GetUpcomingIpoGroupByPayload<T extends UpcomingIpoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpcomingIpoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpcomingIpoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpcomingIpoGroupByOutputType[P]>
            : GetScalarType<T[P], UpcomingIpoGroupByOutputType[P]>
        }
      >
    >


  export type UpcomingIpoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["upcomingIpo"]>

  export type UpcomingIpoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["upcomingIpo"]>

  export type UpcomingIpoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["upcomingIpo"]>

  export type UpcomingIpoSelectScalar = {
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UpcomingIpoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priceBand" | "openDate" | "closeDate" | "issueSize" | "issueType" | "listingDate" | "createdAt" | "updatedAt", ExtArgs["result"]["upcomingIpo"]>

  export type $UpcomingIpoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpcomingIpo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      priceBand: string
      openDate: string
      closeDate: string
      issueSize: string
      issueType: string
      listingDate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["upcomingIpo"]>
    composites: {}
  }

  type UpcomingIpoGetPayload<S extends boolean | null | undefined | UpcomingIpoDefaultArgs> = $Result.GetResult<Prisma.$UpcomingIpoPayload, S>

  type UpcomingIpoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpcomingIpoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpcomingIpoCountAggregateInputType | true
    }

  export interface UpcomingIpoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpcomingIpo'], meta: { name: 'UpcomingIpo' } }
    /**
     * Find zero or one UpcomingIpo that matches the filter.
     * @param {UpcomingIpoFindUniqueArgs} args - Arguments to find a UpcomingIpo
     * @example
     * // Get one UpcomingIpo
     * const upcomingIpo = await prisma.upcomingIpo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpcomingIpoFindUniqueArgs>(args: SelectSubset<T, UpcomingIpoFindUniqueArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UpcomingIpo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpcomingIpoFindUniqueOrThrowArgs} args - Arguments to find a UpcomingIpo
     * @example
     * // Get one UpcomingIpo
     * const upcomingIpo = await prisma.upcomingIpo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpcomingIpoFindUniqueOrThrowArgs>(args: SelectSubset<T, UpcomingIpoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpcomingIpo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingIpoFindFirstArgs} args - Arguments to find a UpcomingIpo
     * @example
     * // Get one UpcomingIpo
     * const upcomingIpo = await prisma.upcomingIpo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpcomingIpoFindFirstArgs>(args?: SelectSubset<T, UpcomingIpoFindFirstArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpcomingIpo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingIpoFindFirstOrThrowArgs} args - Arguments to find a UpcomingIpo
     * @example
     * // Get one UpcomingIpo
     * const upcomingIpo = await prisma.upcomingIpo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpcomingIpoFindFirstOrThrowArgs>(args?: SelectSubset<T, UpcomingIpoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UpcomingIpos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingIpoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpcomingIpos
     * const upcomingIpos = await prisma.upcomingIpo.findMany()
     * 
     * // Get first 10 UpcomingIpos
     * const upcomingIpos = await prisma.upcomingIpo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upcomingIpoWithIdOnly = await prisma.upcomingIpo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpcomingIpoFindManyArgs>(args?: SelectSubset<T, UpcomingIpoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UpcomingIpo.
     * @param {UpcomingIpoCreateArgs} args - Arguments to create a UpcomingIpo.
     * @example
     * // Create one UpcomingIpo
     * const UpcomingIpo = await prisma.upcomingIpo.create({
     *   data: {
     *     // ... data to create a UpcomingIpo
     *   }
     * })
     * 
     */
    create<T extends UpcomingIpoCreateArgs>(args: SelectSubset<T, UpcomingIpoCreateArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UpcomingIpos.
     * @param {UpcomingIpoCreateManyArgs} args - Arguments to create many UpcomingIpos.
     * @example
     * // Create many UpcomingIpos
     * const upcomingIpo = await prisma.upcomingIpo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpcomingIpoCreateManyArgs>(args?: SelectSubset<T, UpcomingIpoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpcomingIpos and returns the data saved in the database.
     * @param {UpcomingIpoCreateManyAndReturnArgs} args - Arguments to create many UpcomingIpos.
     * @example
     * // Create many UpcomingIpos
     * const upcomingIpo = await prisma.upcomingIpo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpcomingIpos and only return the `id`
     * const upcomingIpoWithIdOnly = await prisma.upcomingIpo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpcomingIpoCreateManyAndReturnArgs>(args?: SelectSubset<T, UpcomingIpoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UpcomingIpo.
     * @param {UpcomingIpoDeleteArgs} args - Arguments to delete one UpcomingIpo.
     * @example
     * // Delete one UpcomingIpo
     * const UpcomingIpo = await prisma.upcomingIpo.delete({
     *   where: {
     *     // ... filter to delete one UpcomingIpo
     *   }
     * })
     * 
     */
    delete<T extends UpcomingIpoDeleteArgs>(args: SelectSubset<T, UpcomingIpoDeleteArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UpcomingIpo.
     * @param {UpcomingIpoUpdateArgs} args - Arguments to update one UpcomingIpo.
     * @example
     * // Update one UpcomingIpo
     * const upcomingIpo = await prisma.upcomingIpo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpcomingIpoUpdateArgs>(args: SelectSubset<T, UpcomingIpoUpdateArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UpcomingIpos.
     * @param {UpcomingIpoDeleteManyArgs} args - Arguments to filter UpcomingIpos to delete.
     * @example
     * // Delete a few UpcomingIpos
     * const { count } = await prisma.upcomingIpo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpcomingIpoDeleteManyArgs>(args?: SelectSubset<T, UpcomingIpoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpcomingIpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingIpoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpcomingIpos
     * const upcomingIpo = await prisma.upcomingIpo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpcomingIpoUpdateManyArgs>(args: SelectSubset<T, UpcomingIpoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpcomingIpos and returns the data updated in the database.
     * @param {UpcomingIpoUpdateManyAndReturnArgs} args - Arguments to update many UpcomingIpos.
     * @example
     * // Update many UpcomingIpos
     * const upcomingIpo = await prisma.upcomingIpo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UpcomingIpos and only return the `id`
     * const upcomingIpoWithIdOnly = await prisma.upcomingIpo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpcomingIpoUpdateManyAndReturnArgs>(args: SelectSubset<T, UpcomingIpoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UpcomingIpo.
     * @param {UpcomingIpoUpsertArgs} args - Arguments to update or create a UpcomingIpo.
     * @example
     * // Update or create a UpcomingIpo
     * const upcomingIpo = await prisma.upcomingIpo.upsert({
     *   create: {
     *     // ... data to create a UpcomingIpo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpcomingIpo we want to update
     *   }
     * })
     */
    upsert<T extends UpcomingIpoUpsertArgs>(args: SelectSubset<T, UpcomingIpoUpsertArgs<ExtArgs>>): Prisma__UpcomingIpoClient<$Result.GetResult<Prisma.$UpcomingIpoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UpcomingIpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingIpoCountArgs} args - Arguments to filter UpcomingIpos to count.
     * @example
     * // Count the number of UpcomingIpos
     * const count = await prisma.upcomingIpo.count({
     *   where: {
     *     // ... the filter for the UpcomingIpos we want to count
     *   }
     * })
    **/
    count<T extends UpcomingIpoCountArgs>(
      args?: Subset<T, UpcomingIpoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpcomingIpoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpcomingIpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingIpoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpcomingIpoAggregateArgs>(args: Subset<T, UpcomingIpoAggregateArgs>): Prisma.PrismaPromise<GetUpcomingIpoAggregateType<T>>

    /**
     * Group by UpcomingIpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpcomingIpoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpcomingIpoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpcomingIpoGroupByArgs['orderBy'] }
        : { orderBy?: UpcomingIpoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpcomingIpoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpcomingIpoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpcomingIpo model
   */
  readonly fields: UpcomingIpoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpcomingIpo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpcomingIpoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UpcomingIpo model
   */
  interface UpcomingIpoFieldRefs {
    readonly id: FieldRef<"UpcomingIpo", 'String'>
    readonly name: FieldRef<"UpcomingIpo", 'String'>
    readonly priceBand: FieldRef<"UpcomingIpo", 'String'>
    readonly openDate: FieldRef<"UpcomingIpo", 'String'>
    readonly closeDate: FieldRef<"UpcomingIpo", 'String'>
    readonly issueSize: FieldRef<"UpcomingIpo", 'String'>
    readonly issueType: FieldRef<"UpcomingIpo", 'String'>
    readonly listingDate: FieldRef<"UpcomingIpo", 'String'>
    readonly createdAt: FieldRef<"UpcomingIpo", 'DateTime'>
    readonly updatedAt: FieldRef<"UpcomingIpo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UpcomingIpo findUnique
   */
  export type UpcomingIpoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingIpo to fetch.
     */
    where: UpcomingIpoWhereUniqueInput
  }

  /**
   * UpcomingIpo findUniqueOrThrow
   */
  export type UpcomingIpoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingIpo to fetch.
     */
    where: UpcomingIpoWhereUniqueInput
  }

  /**
   * UpcomingIpo findFirst
   */
  export type UpcomingIpoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingIpo to fetch.
     */
    where?: UpcomingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingIpos to fetch.
     */
    orderBy?: UpcomingIpoOrderByWithRelationInput | UpcomingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpcomingIpos.
     */
    cursor?: UpcomingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpcomingIpos.
     */
    distinct?: UpcomingIpoScalarFieldEnum | UpcomingIpoScalarFieldEnum[]
  }

  /**
   * UpcomingIpo findFirstOrThrow
   */
  export type UpcomingIpoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingIpo to fetch.
     */
    where?: UpcomingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingIpos to fetch.
     */
    orderBy?: UpcomingIpoOrderByWithRelationInput | UpcomingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpcomingIpos.
     */
    cursor?: UpcomingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpcomingIpos.
     */
    distinct?: UpcomingIpoScalarFieldEnum | UpcomingIpoScalarFieldEnum[]
  }

  /**
   * UpcomingIpo findMany
   */
  export type UpcomingIpoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * Filter, which UpcomingIpos to fetch.
     */
    where?: UpcomingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpcomingIpos to fetch.
     */
    orderBy?: UpcomingIpoOrderByWithRelationInput | UpcomingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpcomingIpos.
     */
    cursor?: UpcomingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpcomingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpcomingIpos.
     */
    skip?: number
    distinct?: UpcomingIpoScalarFieldEnum | UpcomingIpoScalarFieldEnum[]
  }

  /**
   * UpcomingIpo create
   */
  export type UpcomingIpoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * The data needed to create a UpcomingIpo.
     */
    data: XOR<UpcomingIpoCreateInput, UpcomingIpoUncheckedCreateInput>
  }

  /**
   * UpcomingIpo createMany
   */
  export type UpcomingIpoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpcomingIpos.
     */
    data: UpcomingIpoCreateManyInput | UpcomingIpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpcomingIpo createManyAndReturn
   */
  export type UpcomingIpoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * The data used to create many UpcomingIpos.
     */
    data: UpcomingIpoCreateManyInput | UpcomingIpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpcomingIpo update
   */
  export type UpcomingIpoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * The data needed to update a UpcomingIpo.
     */
    data: XOR<UpcomingIpoUpdateInput, UpcomingIpoUncheckedUpdateInput>
    /**
     * Choose, which UpcomingIpo to update.
     */
    where: UpcomingIpoWhereUniqueInput
  }

  /**
   * UpcomingIpo updateMany
   */
  export type UpcomingIpoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpcomingIpos.
     */
    data: XOR<UpcomingIpoUpdateManyMutationInput, UpcomingIpoUncheckedUpdateManyInput>
    /**
     * Filter which UpcomingIpos to update
     */
    where?: UpcomingIpoWhereInput
    /**
     * Limit how many UpcomingIpos to update.
     */
    limit?: number
  }

  /**
   * UpcomingIpo updateManyAndReturn
   */
  export type UpcomingIpoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * The data used to update UpcomingIpos.
     */
    data: XOR<UpcomingIpoUpdateManyMutationInput, UpcomingIpoUncheckedUpdateManyInput>
    /**
     * Filter which UpcomingIpos to update
     */
    where?: UpcomingIpoWhereInput
    /**
     * Limit how many UpcomingIpos to update.
     */
    limit?: number
  }

  /**
   * UpcomingIpo upsert
   */
  export type UpcomingIpoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * The filter to search for the UpcomingIpo to update in case it exists.
     */
    where: UpcomingIpoWhereUniqueInput
    /**
     * In case the UpcomingIpo found by the `where` argument doesn't exist, create a new UpcomingIpo with this data.
     */
    create: XOR<UpcomingIpoCreateInput, UpcomingIpoUncheckedCreateInput>
    /**
     * In case the UpcomingIpo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpcomingIpoUpdateInput, UpcomingIpoUncheckedUpdateInput>
  }

  /**
   * UpcomingIpo delete
   */
  export type UpcomingIpoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
    /**
     * Filter which UpcomingIpo to delete.
     */
    where: UpcomingIpoWhereUniqueInput
  }

  /**
   * UpcomingIpo deleteMany
   */
  export type UpcomingIpoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpcomingIpos to delete
     */
    where?: UpcomingIpoWhereInput
    /**
     * Limit how many UpcomingIpos to delete.
     */
    limit?: number
  }

  /**
   * UpcomingIpo without action
   */
  export type UpcomingIpoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpcomingIpo
     */
    select?: UpcomingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpcomingIpo
     */
    omit?: UpcomingIpoOmit<ExtArgs> | null
  }


  /**
   * Model OngoingIpo
   */

  export type AggregateOngoingIpo = {
    _count: OngoingIpoCountAggregateOutputType | null
    _min: OngoingIpoMinAggregateOutputType | null
    _max: OngoingIpoMaxAggregateOutputType | null
  }

  export type OngoingIpoMinAggregateOutputType = {
    id: string | null
    name: string | null
    priceBand: string | null
    openDate: string | null
    closeDate: string | null
    issueSize: string | null
    issueType: string | null
    listingDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OngoingIpoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    priceBand: string | null
    openDate: string | null
    closeDate: string | null
    issueSize: string | null
    issueType: string | null
    listingDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OngoingIpoCountAggregateOutputType = {
    id: number
    name: number
    priceBand: number
    openDate: number
    closeDate: number
    issueSize: number
    issueType: number
    listingDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OngoingIpoMinAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OngoingIpoMaxAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OngoingIpoCountAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OngoingIpoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OngoingIpo to aggregate.
     */
    where?: OngoingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingIpos to fetch.
     */
    orderBy?: OngoingIpoOrderByWithRelationInput | OngoingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OngoingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OngoingIpos
    **/
    _count?: true | OngoingIpoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngoingIpoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngoingIpoMaxAggregateInputType
  }

  export type GetOngoingIpoAggregateType<T extends OngoingIpoAggregateArgs> = {
        [P in keyof T & keyof AggregateOngoingIpo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOngoingIpo[P]>
      : GetScalarType<T[P], AggregateOngoingIpo[P]>
  }




  export type OngoingIpoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OngoingIpoWhereInput
    orderBy?: OngoingIpoOrderByWithAggregationInput | OngoingIpoOrderByWithAggregationInput[]
    by: OngoingIpoScalarFieldEnum[] | OngoingIpoScalarFieldEnum
    having?: OngoingIpoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngoingIpoCountAggregateInputType | true
    _min?: OngoingIpoMinAggregateInputType
    _max?: OngoingIpoMaxAggregateInputType
  }

  export type OngoingIpoGroupByOutputType = {
    id: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt: Date
    updatedAt: Date
    _count: OngoingIpoCountAggregateOutputType | null
    _min: OngoingIpoMinAggregateOutputType | null
    _max: OngoingIpoMaxAggregateOutputType | null
  }

  type GetOngoingIpoGroupByPayload<T extends OngoingIpoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngoingIpoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngoingIpoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngoingIpoGroupByOutputType[P]>
            : GetScalarType<T[P], OngoingIpoGroupByOutputType[P]>
        }
      >
    >


  export type OngoingIpoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ongoingIpo"]>

  export type OngoingIpoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ongoingIpo"]>

  export type OngoingIpoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ongoingIpo"]>

  export type OngoingIpoSelectScalar = {
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OngoingIpoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priceBand" | "openDate" | "closeDate" | "issueSize" | "issueType" | "listingDate" | "createdAt" | "updatedAt", ExtArgs["result"]["ongoingIpo"]>

  export type $OngoingIpoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OngoingIpo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      priceBand: string
      openDate: string
      closeDate: string
      issueSize: string
      issueType: string
      listingDate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ongoingIpo"]>
    composites: {}
  }

  type OngoingIpoGetPayload<S extends boolean | null | undefined | OngoingIpoDefaultArgs> = $Result.GetResult<Prisma.$OngoingIpoPayload, S>

  type OngoingIpoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OngoingIpoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OngoingIpoCountAggregateInputType | true
    }

  export interface OngoingIpoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OngoingIpo'], meta: { name: 'OngoingIpo' } }
    /**
     * Find zero or one OngoingIpo that matches the filter.
     * @param {OngoingIpoFindUniqueArgs} args - Arguments to find a OngoingIpo
     * @example
     * // Get one OngoingIpo
     * const ongoingIpo = await prisma.ongoingIpo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OngoingIpoFindUniqueArgs>(args: SelectSubset<T, OngoingIpoFindUniqueArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OngoingIpo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OngoingIpoFindUniqueOrThrowArgs} args - Arguments to find a OngoingIpo
     * @example
     * // Get one OngoingIpo
     * const ongoingIpo = await prisma.ongoingIpo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OngoingIpoFindUniqueOrThrowArgs>(args: SelectSubset<T, OngoingIpoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OngoingIpo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingIpoFindFirstArgs} args - Arguments to find a OngoingIpo
     * @example
     * // Get one OngoingIpo
     * const ongoingIpo = await prisma.ongoingIpo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OngoingIpoFindFirstArgs>(args?: SelectSubset<T, OngoingIpoFindFirstArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OngoingIpo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingIpoFindFirstOrThrowArgs} args - Arguments to find a OngoingIpo
     * @example
     * // Get one OngoingIpo
     * const ongoingIpo = await prisma.ongoingIpo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OngoingIpoFindFirstOrThrowArgs>(args?: SelectSubset<T, OngoingIpoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OngoingIpos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingIpoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OngoingIpos
     * const ongoingIpos = await prisma.ongoingIpo.findMany()
     * 
     * // Get first 10 OngoingIpos
     * const ongoingIpos = await prisma.ongoingIpo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongoingIpoWithIdOnly = await prisma.ongoingIpo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OngoingIpoFindManyArgs>(args?: SelectSubset<T, OngoingIpoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OngoingIpo.
     * @param {OngoingIpoCreateArgs} args - Arguments to create a OngoingIpo.
     * @example
     * // Create one OngoingIpo
     * const OngoingIpo = await prisma.ongoingIpo.create({
     *   data: {
     *     // ... data to create a OngoingIpo
     *   }
     * })
     * 
     */
    create<T extends OngoingIpoCreateArgs>(args: SelectSubset<T, OngoingIpoCreateArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OngoingIpos.
     * @param {OngoingIpoCreateManyArgs} args - Arguments to create many OngoingIpos.
     * @example
     * // Create many OngoingIpos
     * const ongoingIpo = await prisma.ongoingIpo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OngoingIpoCreateManyArgs>(args?: SelectSubset<T, OngoingIpoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OngoingIpos and returns the data saved in the database.
     * @param {OngoingIpoCreateManyAndReturnArgs} args - Arguments to create many OngoingIpos.
     * @example
     * // Create many OngoingIpos
     * const ongoingIpo = await prisma.ongoingIpo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OngoingIpos and only return the `id`
     * const ongoingIpoWithIdOnly = await prisma.ongoingIpo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OngoingIpoCreateManyAndReturnArgs>(args?: SelectSubset<T, OngoingIpoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OngoingIpo.
     * @param {OngoingIpoDeleteArgs} args - Arguments to delete one OngoingIpo.
     * @example
     * // Delete one OngoingIpo
     * const OngoingIpo = await prisma.ongoingIpo.delete({
     *   where: {
     *     // ... filter to delete one OngoingIpo
     *   }
     * })
     * 
     */
    delete<T extends OngoingIpoDeleteArgs>(args: SelectSubset<T, OngoingIpoDeleteArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OngoingIpo.
     * @param {OngoingIpoUpdateArgs} args - Arguments to update one OngoingIpo.
     * @example
     * // Update one OngoingIpo
     * const ongoingIpo = await prisma.ongoingIpo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OngoingIpoUpdateArgs>(args: SelectSubset<T, OngoingIpoUpdateArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OngoingIpos.
     * @param {OngoingIpoDeleteManyArgs} args - Arguments to filter OngoingIpos to delete.
     * @example
     * // Delete a few OngoingIpos
     * const { count } = await prisma.ongoingIpo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OngoingIpoDeleteManyArgs>(args?: SelectSubset<T, OngoingIpoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OngoingIpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingIpoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OngoingIpos
     * const ongoingIpo = await prisma.ongoingIpo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OngoingIpoUpdateManyArgs>(args: SelectSubset<T, OngoingIpoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OngoingIpos and returns the data updated in the database.
     * @param {OngoingIpoUpdateManyAndReturnArgs} args - Arguments to update many OngoingIpos.
     * @example
     * // Update many OngoingIpos
     * const ongoingIpo = await prisma.ongoingIpo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OngoingIpos and only return the `id`
     * const ongoingIpoWithIdOnly = await prisma.ongoingIpo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OngoingIpoUpdateManyAndReturnArgs>(args: SelectSubset<T, OngoingIpoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OngoingIpo.
     * @param {OngoingIpoUpsertArgs} args - Arguments to update or create a OngoingIpo.
     * @example
     * // Update or create a OngoingIpo
     * const ongoingIpo = await prisma.ongoingIpo.upsert({
     *   create: {
     *     // ... data to create a OngoingIpo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OngoingIpo we want to update
     *   }
     * })
     */
    upsert<T extends OngoingIpoUpsertArgs>(args: SelectSubset<T, OngoingIpoUpsertArgs<ExtArgs>>): Prisma__OngoingIpoClient<$Result.GetResult<Prisma.$OngoingIpoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OngoingIpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingIpoCountArgs} args - Arguments to filter OngoingIpos to count.
     * @example
     * // Count the number of OngoingIpos
     * const count = await prisma.ongoingIpo.count({
     *   where: {
     *     // ... the filter for the OngoingIpos we want to count
     *   }
     * })
    **/
    count<T extends OngoingIpoCountArgs>(
      args?: Subset<T, OngoingIpoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngoingIpoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OngoingIpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingIpoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OngoingIpoAggregateArgs>(args: Subset<T, OngoingIpoAggregateArgs>): Prisma.PrismaPromise<GetOngoingIpoAggregateType<T>>

    /**
     * Group by OngoingIpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingIpoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OngoingIpoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OngoingIpoGroupByArgs['orderBy'] }
        : { orderBy?: OngoingIpoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OngoingIpoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngoingIpoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OngoingIpo model
   */
  readonly fields: OngoingIpoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OngoingIpo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OngoingIpoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OngoingIpo model
   */
  interface OngoingIpoFieldRefs {
    readonly id: FieldRef<"OngoingIpo", 'String'>
    readonly name: FieldRef<"OngoingIpo", 'String'>
    readonly priceBand: FieldRef<"OngoingIpo", 'String'>
    readonly openDate: FieldRef<"OngoingIpo", 'String'>
    readonly closeDate: FieldRef<"OngoingIpo", 'String'>
    readonly issueSize: FieldRef<"OngoingIpo", 'String'>
    readonly issueType: FieldRef<"OngoingIpo", 'String'>
    readonly listingDate: FieldRef<"OngoingIpo", 'String'>
    readonly createdAt: FieldRef<"OngoingIpo", 'DateTime'>
    readonly updatedAt: FieldRef<"OngoingIpo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OngoingIpo findUnique
   */
  export type OngoingIpoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * Filter, which OngoingIpo to fetch.
     */
    where: OngoingIpoWhereUniqueInput
  }

  /**
   * OngoingIpo findUniqueOrThrow
   */
  export type OngoingIpoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * Filter, which OngoingIpo to fetch.
     */
    where: OngoingIpoWhereUniqueInput
  }

  /**
   * OngoingIpo findFirst
   */
  export type OngoingIpoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * Filter, which OngoingIpo to fetch.
     */
    where?: OngoingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingIpos to fetch.
     */
    orderBy?: OngoingIpoOrderByWithRelationInput | OngoingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OngoingIpos.
     */
    cursor?: OngoingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OngoingIpos.
     */
    distinct?: OngoingIpoScalarFieldEnum | OngoingIpoScalarFieldEnum[]
  }

  /**
   * OngoingIpo findFirstOrThrow
   */
  export type OngoingIpoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * Filter, which OngoingIpo to fetch.
     */
    where?: OngoingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingIpos to fetch.
     */
    orderBy?: OngoingIpoOrderByWithRelationInput | OngoingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OngoingIpos.
     */
    cursor?: OngoingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OngoingIpos.
     */
    distinct?: OngoingIpoScalarFieldEnum | OngoingIpoScalarFieldEnum[]
  }

  /**
   * OngoingIpo findMany
   */
  export type OngoingIpoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * Filter, which OngoingIpos to fetch.
     */
    where?: OngoingIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingIpos to fetch.
     */
    orderBy?: OngoingIpoOrderByWithRelationInput | OngoingIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OngoingIpos.
     */
    cursor?: OngoingIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingIpos.
     */
    skip?: number
    distinct?: OngoingIpoScalarFieldEnum | OngoingIpoScalarFieldEnum[]
  }

  /**
   * OngoingIpo create
   */
  export type OngoingIpoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * The data needed to create a OngoingIpo.
     */
    data: XOR<OngoingIpoCreateInput, OngoingIpoUncheckedCreateInput>
  }

  /**
   * OngoingIpo createMany
   */
  export type OngoingIpoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OngoingIpos.
     */
    data: OngoingIpoCreateManyInput | OngoingIpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OngoingIpo createManyAndReturn
   */
  export type OngoingIpoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * The data used to create many OngoingIpos.
     */
    data: OngoingIpoCreateManyInput | OngoingIpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OngoingIpo update
   */
  export type OngoingIpoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * The data needed to update a OngoingIpo.
     */
    data: XOR<OngoingIpoUpdateInput, OngoingIpoUncheckedUpdateInput>
    /**
     * Choose, which OngoingIpo to update.
     */
    where: OngoingIpoWhereUniqueInput
  }

  /**
   * OngoingIpo updateMany
   */
  export type OngoingIpoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OngoingIpos.
     */
    data: XOR<OngoingIpoUpdateManyMutationInput, OngoingIpoUncheckedUpdateManyInput>
    /**
     * Filter which OngoingIpos to update
     */
    where?: OngoingIpoWhereInput
    /**
     * Limit how many OngoingIpos to update.
     */
    limit?: number
  }

  /**
   * OngoingIpo updateManyAndReturn
   */
  export type OngoingIpoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * The data used to update OngoingIpos.
     */
    data: XOR<OngoingIpoUpdateManyMutationInput, OngoingIpoUncheckedUpdateManyInput>
    /**
     * Filter which OngoingIpos to update
     */
    where?: OngoingIpoWhereInput
    /**
     * Limit how many OngoingIpos to update.
     */
    limit?: number
  }

  /**
   * OngoingIpo upsert
   */
  export type OngoingIpoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * The filter to search for the OngoingIpo to update in case it exists.
     */
    where: OngoingIpoWhereUniqueInput
    /**
     * In case the OngoingIpo found by the `where` argument doesn't exist, create a new OngoingIpo with this data.
     */
    create: XOR<OngoingIpoCreateInput, OngoingIpoUncheckedCreateInput>
    /**
     * In case the OngoingIpo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OngoingIpoUpdateInput, OngoingIpoUncheckedUpdateInput>
  }

  /**
   * OngoingIpo delete
   */
  export type OngoingIpoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
    /**
     * Filter which OngoingIpo to delete.
     */
    where: OngoingIpoWhereUniqueInput
  }

  /**
   * OngoingIpo deleteMany
   */
  export type OngoingIpoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OngoingIpos to delete
     */
    where?: OngoingIpoWhereInput
    /**
     * Limit how many OngoingIpos to delete.
     */
    limit?: number
  }

  /**
   * OngoingIpo without action
   */
  export type OngoingIpoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingIpo
     */
    select?: OngoingIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingIpo
     */
    omit?: OngoingIpoOmit<ExtArgs> | null
  }


  /**
   * Model NewListedIpo
   */

  export type AggregateNewListedIpo = {
    _count: NewListedIpoCountAggregateOutputType | null
    _min: NewListedIpoMinAggregateOutputType | null
    _max: NewListedIpoMaxAggregateOutputType | null
  }

  export type NewListedIpoMinAggregateOutputType = {
    id: string | null
    name: string | null
    priceBand: string | null
    openDate: string | null
    closeDate: string | null
    issueSize: string | null
    issueType: string | null
    listingDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewListedIpoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    priceBand: string | null
    openDate: string | null
    closeDate: string | null
    issueSize: string | null
    issueType: string | null
    listingDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewListedIpoCountAggregateOutputType = {
    id: number
    name: number
    priceBand: number
    openDate: number
    closeDate: number
    issueSize: number
    issueType: number
    listingDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewListedIpoMinAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewListedIpoMaxAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewListedIpoCountAggregateInputType = {
    id?: true
    name?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewListedIpoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewListedIpo to aggregate.
     */
    where?: NewListedIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewListedIpos to fetch.
     */
    orderBy?: NewListedIpoOrderByWithRelationInput | NewListedIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewListedIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewListedIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewListedIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewListedIpos
    **/
    _count?: true | NewListedIpoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewListedIpoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewListedIpoMaxAggregateInputType
  }

  export type GetNewListedIpoAggregateType<T extends NewListedIpoAggregateArgs> = {
        [P in keyof T & keyof AggregateNewListedIpo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewListedIpo[P]>
      : GetScalarType<T[P], AggregateNewListedIpo[P]>
  }




  export type NewListedIpoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewListedIpoWhereInput
    orderBy?: NewListedIpoOrderByWithAggregationInput | NewListedIpoOrderByWithAggregationInput[]
    by: NewListedIpoScalarFieldEnum[] | NewListedIpoScalarFieldEnum
    having?: NewListedIpoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewListedIpoCountAggregateInputType | true
    _min?: NewListedIpoMinAggregateInputType
    _max?: NewListedIpoMaxAggregateInputType
  }

  export type NewListedIpoGroupByOutputType = {
    id: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt: Date
    updatedAt: Date
    _count: NewListedIpoCountAggregateOutputType | null
    _min: NewListedIpoMinAggregateOutputType | null
    _max: NewListedIpoMaxAggregateOutputType | null
  }

  type GetNewListedIpoGroupByPayload<T extends NewListedIpoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewListedIpoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewListedIpoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewListedIpoGroupByOutputType[P]>
            : GetScalarType<T[P], NewListedIpoGroupByOutputType[P]>
        }
      >
    >


  export type NewListedIpoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newListedIpo"]>

  export type NewListedIpoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newListedIpo"]>

  export type NewListedIpoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newListedIpo"]>

  export type NewListedIpoSelectScalar = {
    id?: boolean
    name?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewListedIpoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priceBand" | "openDate" | "closeDate" | "issueSize" | "issueType" | "listingDate" | "createdAt" | "updatedAt", ExtArgs["result"]["newListedIpo"]>

  export type $NewListedIpoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewListedIpo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      priceBand: string
      openDate: string
      closeDate: string
      issueSize: string
      issueType: string
      listingDate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newListedIpo"]>
    composites: {}
  }

  type NewListedIpoGetPayload<S extends boolean | null | undefined | NewListedIpoDefaultArgs> = $Result.GetResult<Prisma.$NewListedIpoPayload, S>

  type NewListedIpoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewListedIpoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewListedIpoCountAggregateInputType | true
    }

  export interface NewListedIpoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewListedIpo'], meta: { name: 'NewListedIpo' } }
    /**
     * Find zero or one NewListedIpo that matches the filter.
     * @param {NewListedIpoFindUniqueArgs} args - Arguments to find a NewListedIpo
     * @example
     * // Get one NewListedIpo
     * const newListedIpo = await prisma.newListedIpo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewListedIpoFindUniqueArgs>(args: SelectSubset<T, NewListedIpoFindUniqueArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewListedIpo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewListedIpoFindUniqueOrThrowArgs} args - Arguments to find a NewListedIpo
     * @example
     * // Get one NewListedIpo
     * const newListedIpo = await prisma.newListedIpo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewListedIpoFindUniqueOrThrowArgs>(args: SelectSubset<T, NewListedIpoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewListedIpo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewListedIpoFindFirstArgs} args - Arguments to find a NewListedIpo
     * @example
     * // Get one NewListedIpo
     * const newListedIpo = await prisma.newListedIpo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewListedIpoFindFirstArgs>(args?: SelectSubset<T, NewListedIpoFindFirstArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewListedIpo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewListedIpoFindFirstOrThrowArgs} args - Arguments to find a NewListedIpo
     * @example
     * // Get one NewListedIpo
     * const newListedIpo = await prisma.newListedIpo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewListedIpoFindFirstOrThrowArgs>(args?: SelectSubset<T, NewListedIpoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewListedIpos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewListedIpoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewListedIpos
     * const newListedIpos = await prisma.newListedIpo.findMany()
     * 
     * // Get first 10 NewListedIpos
     * const newListedIpos = await prisma.newListedIpo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newListedIpoWithIdOnly = await prisma.newListedIpo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewListedIpoFindManyArgs>(args?: SelectSubset<T, NewListedIpoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewListedIpo.
     * @param {NewListedIpoCreateArgs} args - Arguments to create a NewListedIpo.
     * @example
     * // Create one NewListedIpo
     * const NewListedIpo = await prisma.newListedIpo.create({
     *   data: {
     *     // ... data to create a NewListedIpo
     *   }
     * })
     * 
     */
    create<T extends NewListedIpoCreateArgs>(args: SelectSubset<T, NewListedIpoCreateArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewListedIpos.
     * @param {NewListedIpoCreateManyArgs} args - Arguments to create many NewListedIpos.
     * @example
     * // Create many NewListedIpos
     * const newListedIpo = await prisma.newListedIpo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewListedIpoCreateManyArgs>(args?: SelectSubset<T, NewListedIpoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewListedIpos and returns the data saved in the database.
     * @param {NewListedIpoCreateManyAndReturnArgs} args - Arguments to create many NewListedIpos.
     * @example
     * // Create many NewListedIpos
     * const newListedIpo = await prisma.newListedIpo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewListedIpos and only return the `id`
     * const newListedIpoWithIdOnly = await prisma.newListedIpo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewListedIpoCreateManyAndReturnArgs>(args?: SelectSubset<T, NewListedIpoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewListedIpo.
     * @param {NewListedIpoDeleteArgs} args - Arguments to delete one NewListedIpo.
     * @example
     * // Delete one NewListedIpo
     * const NewListedIpo = await prisma.newListedIpo.delete({
     *   where: {
     *     // ... filter to delete one NewListedIpo
     *   }
     * })
     * 
     */
    delete<T extends NewListedIpoDeleteArgs>(args: SelectSubset<T, NewListedIpoDeleteArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewListedIpo.
     * @param {NewListedIpoUpdateArgs} args - Arguments to update one NewListedIpo.
     * @example
     * // Update one NewListedIpo
     * const newListedIpo = await prisma.newListedIpo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewListedIpoUpdateArgs>(args: SelectSubset<T, NewListedIpoUpdateArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewListedIpos.
     * @param {NewListedIpoDeleteManyArgs} args - Arguments to filter NewListedIpos to delete.
     * @example
     * // Delete a few NewListedIpos
     * const { count } = await prisma.newListedIpo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewListedIpoDeleteManyArgs>(args?: SelectSubset<T, NewListedIpoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewListedIpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewListedIpoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewListedIpos
     * const newListedIpo = await prisma.newListedIpo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewListedIpoUpdateManyArgs>(args: SelectSubset<T, NewListedIpoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewListedIpos and returns the data updated in the database.
     * @param {NewListedIpoUpdateManyAndReturnArgs} args - Arguments to update many NewListedIpos.
     * @example
     * // Update many NewListedIpos
     * const newListedIpo = await prisma.newListedIpo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewListedIpos and only return the `id`
     * const newListedIpoWithIdOnly = await prisma.newListedIpo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewListedIpoUpdateManyAndReturnArgs>(args: SelectSubset<T, NewListedIpoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewListedIpo.
     * @param {NewListedIpoUpsertArgs} args - Arguments to update or create a NewListedIpo.
     * @example
     * // Update or create a NewListedIpo
     * const newListedIpo = await prisma.newListedIpo.upsert({
     *   create: {
     *     // ... data to create a NewListedIpo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewListedIpo we want to update
     *   }
     * })
     */
    upsert<T extends NewListedIpoUpsertArgs>(args: SelectSubset<T, NewListedIpoUpsertArgs<ExtArgs>>): Prisma__NewListedIpoClient<$Result.GetResult<Prisma.$NewListedIpoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewListedIpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewListedIpoCountArgs} args - Arguments to filter NewListedIpos to count.
     * @example
     * // Count the number of NewListedIpos
     * const count = await prisma.newListedIpo.count({
     *   where: {
     *     // ... the filter for the NewListedIpos we want to count
     *   }
     * })
    **/
    count<T extends NewListedIpoCountArgs>(
      args?: Subset<T, NewListedIpoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewListedIpoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewListedIpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewListedIpoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewListedIpoAggregateArgs>(args: Subset<T, NewListedIpoAggregateArgs>): Prisma.PrismaPromise<GetNewListedIpoAggregateType<T>>

    /**
     * Group by NewListedIpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewListedIpoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewListedIpoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewListedIpoGroupByArgs['orderBy'] }
        : { orderBy?: NewListedIpoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewListedIpoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewListedIpoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewListedIpo model
   */
  readonly fields: NewListedIpoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewListedIpo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewListedIpoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewListedIpo model
   */
  interface NewListedIpoFieldRefs {
    readonly id: FieldRef<"NewListedIpo", 'String'>
    readonly name: FieldRef<"NewListedIpo", 'String'>
    readonly priceBand: FieldRef<"NewListedIpo", 'String'>
    readonly openDate: FieldRef<"NewListedIpo", 'String'>
    readonly closeDate: FieldRef<"NewListedIpo", 'String'>
    readonly issueSize: FieldRef<"NewListedIpo", 'String'>
    readonly issueType: FieldRef<"NewListedIpo", 'String'>
    readonly listingDate: FieldRef<"NewListedIpo", 'String'>
    readonly createdAt: FieldRef<"NewListedIpo", 'DateTime'>
    readonly updatedAt: FieldRef<"NewListedIpo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewListedIpo findUnique
   */
  export type NewListedIpoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * Filter, which NewListedIpo to fetch.
     */
    where: NewListedIpoWhereUniqueInput
  }

  /**
   * NewListedIpo findUniqueOrThrow
   */
  export type NewListedIpoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * Filter, which NewListedIpo to fetch.
     */
    where: NewListedIpoWhereUniqueInput
  }

  /**
   * NewListedIpo findFirst
   */
  export type NewListedIpoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * Filter, which NewListedIpo to fetch.
     */
    where?: NewListedIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewListedIpos to fetch.
     */
    orderBy?: NewListedIpoOrderByWithRelationInput | NewListedIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewListedIpos.
     */
    cursor?: NewListedIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewListedIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewListedIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewListedIpos.
     */
    distinct?: NewListedIpoScalarFieldEnum | NewListedIpoScalarFieldEnum[]
  }

  /**
   * NewListedIpo findFirstOrThrow
   */
  export type NewListedIpoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * Filter, which NewListedIpo to fetch.
     */
    where?: NewListedIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewListedIpos to fetch.
     */
    orderBy?: NewListedIpoOrderByWithRelationInput | NewListedIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewListedIpos.
     */
    cursor?: NewListedIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewListedIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewListedIpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewListedIpos.
     */
    distinct?: NewListedIpoScalarFieldEnum | NewListedIpoScalarFieldEnum[]
  }

  /**
   * NewListedIpo findMany
   */
  export type NewListedIpoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * Filter, which NewListedIpos to fetch.
     */
    where?: NewListedIpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewListedIpos to fetch.
     */
    orderBy?: NewListedIpoOrderByWithRelationInput | NewListedIpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewListedIpos.
     */
    cursor?: NewListedIpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewListedIpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewListedIpos.
     */
    skip?: number
    distinct?: NewListedIpoScalarFieldEnum | NewListedIpoScalarFieldEnum[]
  }

  /**
   * NewListedIpo create
   */
  export type NewListedIpoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * The data needed to create a NewListedIpo.
     */
    data: XOR<NewListedIpoCreateInput, NewListedIpoUncheckedCreateInput>
  }

  /**
   * NewListedIpo createMany
   */
  export type NewListedIpoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewListedIpos.
     */
    data: NewListedIpoCreateManyInput | NewListedIpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewListedIpo createManyAndReturn
   */
  export type NewListedIpoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * The data used to create many NewListedIpos.
     */
    data: NewListedIpoCreateManyInput | NewListedIpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewListedIpo update
   */
  export type NewListedIpoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * The data needed to update a NewListedIpo.
     */
    data: XOR<NewListedIpoUpdateInput, NewListedIpoUncheckedUpdateInput>
    /**
     * Choose, which NewListedIpo to update.
     */
    where: NewListedIpoWhereUniqueInput
  }

  /**
   * NewListedIpo updateMany
   */
  export type NewListedIpoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewListedIpos.
     */
    data: XOR<NewListedIpoUpdateManyMutationInput, NewListedIpoUncheckedUpdateManyInput>
    /**
     * Filter which NewListedIpos to update
     */
    where?: NewListedIpoWhereInput
    /**
     * Limit how many NewListedIpos to update.
     */
    limit?: number
  }

  /**
   * NewListedIpo updateManyAndReturn
   */
  export type NewListedIpoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * The data used to update NewListedIpos.
     */
    data: XOR<NewListedIpoUpdateManyMutationInput, NewListedIpoUncheckedUpdateManyInput>
    /**
     * Filter which NewListedIpos to update
     */
    where?: NewListedIpoWhereInput
    /**
     * Limit how many NewListedIpos to update.
     */
    limit?: number
  }

  /**
   * NewListedIpo upsert
   */
  export type NewListedIpoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * The filter to search for the NewListedIpo to update in case it exists.
     */
    where: NewListedIpoWhereUniqueInput
    /**
     * In case the NewListedIpo found by the `where` argument doesn't exist, create a new NewListedIpo with this data.
     */
    create: XOR<NewListedIpoCreateInput, NewListedIpoUncheckedCreateInput>
    /**
     * In case the NewListedIpo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewListedIpoUpdateInput, NewListedIpoUncheckedUpdateInput>
  }

  /**
   * NewListedIpo delete
   */
  export type NewListedIpoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
    /**
     * Filter which NewListedIpo to delete.
     */
    where: NewListedIpoWhereUniqueInput
  }

  /**
   * NewListedIpo deleteMany
   */
  export type NewListedIpoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewListedIpos to delete
     */
    where?: NewListedIpoWhereInput
    /**
     * Limit how many NewListedIpos to delete.
     */
    limit?: number
  }

  /**
   * NewListedIpo without action
   */
  export type NewListedIpoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewListedIpo
     */
    select?: NewListedIpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewListedIpo
     */
    omit?: NewListedIpoOmit<ExtArgs> | null
  }


  /**
   * Model AllSector
   */

  export type AggregateAllSector = {
    _count: AllSectorCountAggregateOutputType | null
    _min: AllSectorMinAggregateOutputType | null
    _max: AllSectorMaxAggregateOutputType | null
  }

  export type AllSectorMinAggregateOutputType = {
    id: string | null
    sectorName: string | null
    sectorDesc: string | null
    sectorType: string | null
  }

  export type AllSectorMaxAggregateOutputType = {
    id: string | null
    sectorName: string | null
    sectorDesc: string | null
    sectorType: string | null
  }

  export type AllSectorCountAggregateOutputType = {
    id: number
    sectorName: number
    sectorDesc: number
    sectorType: number
    _all: number
  }


  export type AllSectorMinAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    sectorType?: true
  }

  export type AllSectorMaxAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    sectorType?: true
  }

  export type AllSectorCountAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    sectorType?: true
    _all?: true
  }

  export type AllSectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllSector to aggregate.
     */
    where?: AllSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllSectors to fetch.
     */
    orderBy?: AllSectorOrderByWithRelationInput | AllSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllSectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllSectors
    **/
    _count?: true | AllSectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllSectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllSectorMaxAggregateInputType
  }

  export type GetAllSectorAggregateType<T extends AllSectorAggregateArgs> = {
        [P in keyof T & keyof AggregateAllSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllSector[P]>
      : GetScalarType<T[P], AggregateAllSector[P]>
  }




  export type AllSectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllSectorWhereInput
    orderBy?: AllSectorOrderByWithAggregationInput | AllSectorOrderByWithAggregationInput[]
    by: AllSectorScalarFieldEnum[] | AllSectorScalarFieldEnum
    having?: AllSectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllSectorCountAggregateInputType | true
    _min?: AllSectorMinAggregateInputType
    _max?: AllSectorMaxAggregateInputType
  }

  export type AllSectorGroupByOutputType = {
    id: string
    sectorName: string
    sectorDesc: string
    sectorType: string
    _count: AllSectorCountAggregateOutputType | null
    _min: AllSectorMinAggregateOutputType | null
    _max: AllSectorMaxAggregateOutputType | null
  }

  type GetAllSectorGroupByPayload<T extends AllSectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllSectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllSectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllSectorGroupByOutputType[P]>
            : GetScalarType<T[P], AllSectorGroupByOutputType[P]>
        }
      >
    >


  export type AllSectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    sectorType?: boolean
  }, ExtArgs["result"]["allSector"]>

  export type AllSectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    sectorType?: boolean
  }, ExtArgs["result"]["allSector"]>

  export type AllSectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    sectorType?: boolean
  }, ExtArgs["result"]["allSector"]>

  export type AllSectorSelectScalar = {
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    sectorType?: boolean
  }

  export type AllSectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectorName" | "sectorDesc" | "sectorType", ExtArgs["result"]["allSector"]>

  export type $AllSectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllSector"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectorName: string
      sectorDesc: string
      sectorType: string
    }, ExtArgs["result"]["allSector"]>
    composites: {}
  }

  type AllSectorGetPayload<S extends boolean | null | undefined | AllSectorDefaultArgs> = $Result.GetResult<Prisma.$AllSectorPayload, S>

  type AllSectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllSectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllSectorCountAggregateInputType | true
    }

  export interface AllSectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllSector'], meta: { name: 'AllSector' } }
    /**
     * Find zero or one AllSector that matches the filter.
     * @param {AllSectorFindUniqueArgs} args - Arguments to find a AllSector
     * @example
     * // Get one AllSector
     * const allSector = await prisma.allSector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllSectorFindUniqueArgs>(args: SelectSubset<T, AllSectorFindUniqueArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AllSector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllSectorFindUniqueOrThrowArgs} args - Arguments to find a AllSector
     * @example
     * // Get one AllSector
     * const allSector = await prisma.allSector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllSectorFindUniqueOrThrowArgs>(args: SelectSubset<T, AllSectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllSector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllSectorFindFirstArgs} args - Arguments to find a AllSector
     * @example
     * // Get one AllSector
     * const allSector = await prisma.allSector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllSectorFindFirstArgs>(args?: SelectSubset<T, AllSectorFindFirstArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllSector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllSectorFindFirstOrThrowArgs} args - Arguments to find a AllSector
     * @example
     * // Get one AllSector
     * const allSector = await prisma.allSector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllSectorFindFirstOrThrowArgs>(args?: SelectSubset<T, AllSectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AllSectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllSectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllSectors
     * const allSectors = await prisma.allSector.findMany()
     * 
     * // Get first 10 AllSectors
     * const allSectors = await prisma.allSector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allSectorWithIdOnly = await prisma.allSector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllSectorFindManyArgs>(args?: SelectSubset<T, AllSectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AllSector.
     * @param {AllSectorCreateArgs} args - Arguments to create a AllSector.
     * @example
     * // Create one AllSector
     * const AllSector = await prisma.allSector.create({
     *   data: {
     *     // ... data to create a AllSector
     *   }
     * })
     * 
     */
    create<T extends AllSectorCreateArgs>(args: SelectSubset<T, AllSectorCreateArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AllSectors.
     * @param {AllSectorCreateManyArgs} args - Arguments to create many AllSectors.
     * @example
     * // Create many AllSectors
     * const allSector = await prisma.allSector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllSectorCreateManyArgs>(args?: SelectSubset<T, AllSectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllSectors and returns the data saved in the database.
     * @param {AllSectorCreateManyAndReturnArgs} args - Arguments to create many AllSectors.
     * @example
     * // Create many AllSectors
     * const allSector = await prisma.allSector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllSectors and only return the `id`
     * const allSectorWithIdOnly = await prisma.allSector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllSectorCreateManyAndReturnArgs>(args?: SelectSubset<T, AllSectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AllSector.
     * @param {AllSectorDeleteArgs} args - Arguments to delete one AllSector.
     * @example
     * // Delete one AllSector
     * const AllSector = await prisma.allSector.delete({
     *   where: {
     *     // ... filter to delete one AllSector
     *   }
     * })
     * 
     */
    delete<T extends AllSectorDeleteArgs>(args: SelectSubset<T, AllSectorDeleteArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AllSector.
     * @param {AllSectorUpdateArgs} args - Arguments to update one AllSector.
     * @example
     * // Update one AllSector
     * const allSector = await prisma.allSector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllSectorUpdateArgs>(args: SelectSubset<T, AllSectorUpdateArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AllSectors.
     * @param {AllSectorDeleteManyArgs} args - Arguments to filter AllSectors to delete.
     * @example
     * // Delete a few AllSectors
     * const { count } = await prisma.allSector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllSectorDeleteManyArgs>(args?: SelectSubset<T, AllSectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllSectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllSectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllSectors
     * const allSector = await prisma.allSector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllSectorUpdateManyArgs>(args: SelectSubset<T, AllSectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllSectors and returns the data updated in the database.
     * @param {AllSectorUpdateManyAndReturnArgs} args - Arguments to update many AllSectors.
     * @example
     * // Update many AllSectors
     * const allSector = await prisma.allSector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AllSectors and only return the `id`
     * const allSectorWithIdOnly = await prisma.allSector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllSectorUpdateManyAndReturnArgs>(args: SelectSubset<T, AllSectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AllSector.
     * @param {AllSectorUpsertArgs} args - Arguments to update or create a AllSector.
     * @example
     * // Update or create a AllSector
     * const allSector = await prisma.allSector.upsert({
     *   create: {
     *     // ... data to create a AllSector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllSector we want to update
     *   }
     * })
     */
    upsert<T extends AllSectorUpsertArgs>(args: SelectSubset<T, AllSectorUpsertArgs<ExtArgs>>): Prisma__AllSectorClient<$Result.GetResult<Prisma.$AllSectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AllSectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllSectorCountArgs} args - Arguments to filter AllSectors to count.
     * @example
     * // Count the number of AllSectors
     * const count = await prisma.allSector.count({
     *   where: {
     *     // ... the filter for the AllSectors we want to count
     *   }
     * })
    **/
    count<T extends AllSectorCountArgs>(
      args?: Subset<T, AllSectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllSectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllSector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllSectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllSectorAggregateArgs>(args: Subset<T, AllSectorAggregateArgs>): Prisma.PrismaPromise<GetAllSectorAggregateType<T>>

    /**
     * Group by AllSector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllSectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllSectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllSectorGroupByArgs['orderBy'] }
        : { orderBy?: AllSectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllSectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllSector model
   */
  readonly fields: AllSectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllSector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllSectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AllSector model
   */
  interface AllSectorFieldRefs {
    readonly id: FieldRef<"AllSector", 'String'>
    readonly sectorName: FieldRef<"AllSector", 'String'>
    readonly sectorDesc: FieldRef<"AllSector", 'String'>
    readonly sectorType: FieldRef<"AllSector", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AllSector findUnique
   */
  export type AllSectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * Filter, which AllSector to fetch.
     */
    where: AllSectorWhereUniqueInput
  }

  /**
   * AllSector findUniqueOrThrow
   */
  export type AllSectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * Filter, which AllSector to fetch.
     */
    where: AllSectorWhereUniqueInput
  }

  /**
   * AllSector findFirst
   */
  export type AllSectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * Filter, which AllSector to fetch.
     */
    where?: AllSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllSectors to fetch.
     */
    orderBy?: AllSectorOrderByWithRelationInput | AllSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllSectors.
     */
    cursor?: AllSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllSectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllSectors.
     */
    distinct?: AllSectorScalarFieldEnum | AllSectorScalarFieldEnum[]
  }

  /**
   * AllSector findFirstOrThrow
   */
  export type AllSectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * Filter, which AllSector to fetch.
     */
    where?: AllSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllSectors to fetch.
     */
    orderBy?: AllSectorOrderByWithRelationInput | AllSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllSectors.
     */
    cursor?: AllSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllSectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllSectors.
     */
    distinct?: AllSectorScalarFieldEnum | AllSectorScalarFieldEnum[]
  }

  /**
   * AllSector findMany
   */
  export type AllSectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * Filter, which AllSectors to fetch.
     */
    where?: AllSectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllSectors to fetch.
     */
    orderBy?: AllSectorOrderByWithRelationInput | AllSectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllSectors.
     */
    cursor?: AllSectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllSectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllSectors.
     */
    skip?: number
    distinct?: AllSectorScalarFieldEnum | AllSectorScalarFieldEnum[]
  }

  /**
   * AllSector create
   */
  export type AllSectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * The data needed to create a AllSector.
     */
    data: XOR<AllSectorCreateInput, AllSectorUncheckedCreateInput>
  }

  /**
   * AllSector createMany
   */
  export type AllSectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllSectors.
     */
    data: AllSectorCreateManyInput | AllSectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllSector createManyAndReturn
   */
  export type AllSectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * The data used to create many AllSectors.
     */
    data: AllSectorCreateManyInput | AllSectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllSector update
   */
  export type AllSectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * The data needed to update a AllSector.
     */
    data: XOR<AllSectorUpdateInput, AllSectorUncheckedUpdateInput>
    /**
     * Choose, which AllSector to update.
     */
    where: AllSectorWhereUniqueInput
  }

  /**
   * AllSector updateMany
   */
  export type AllSectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllSectors.
     */
    data: XOR<AllSectorUpdateManyMutationInput, AllSectorUncheckedUpdateManyInput>
    /**
     * Filter which AllSectors to update
     */
    where?: AllSectorWhereInput
    /**
     * Limit how many AllSectors to update.
     */
    limit?: number
  }

  /**
   * AllSector updateManyAndReturn
   */
  export type AllSectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * The data used to update AllSectors.
     */
    data: XOR<AllSectorUpdateManyMutationInput, AllSectorUncheckedUpdateManyInput>
    /**
     * Filter which AllSectors to update
     */
    where?: AllSectorWhereInput
    /**
     * Limit how many AllSectors to update.
     */
    limit?: number
  }

  /**
   * AllSector upsert
   */
  export type AllSectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * The filter to search for the AllSector to update in case it exists.
     */
    where: AllSectorWhereUniqueInput
    /**
     * In case the AllSector found by the `where` argument doesn't exist, create a new AllSector with this data.
     */
    create: XOR<AllSectorCreateInput, AllSectorUncheckedCreateInput>
    /**
     * In case the AllSector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllSectorUpdateInput, AllSectorUncheckedUpdateInput>
  }

  /**
   * AllSector delete
   */
  export type AllSectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
    /**
     * Filter which AllSector to delete.
     */
    where: AllSectorWhereUniqueInput
  }

  /**
   * AllSector deleteMany
   */
  export type AllSectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllSectors to delete
     */
    where?: AllSectorWhereInput
    /**
     * Limit how many AllSectors to delete.
     */
    limit?: number
  }

  /**
   * AllSector without action
   */
  export type AllSectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllSector
     */
    select?: AllSectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllSector
     */
    omit?: AllSectorOmit<ExtArgs> | null
  }


  /**
   * Model Sector
   */

  export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  export type SectorMinAggregateOutputType = {
    id: string | null
    sectorName: string | null
    sectorDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorMaxAggregateOutputType = {
    id: string | null
    sectorName: string | null
    sectorDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorCountAggregateOutputType = {
    id: number
    sectorName: number
    sectorDesc: number
    largeCap: number
    midCap: number
    smallCap: number
    marketInsights: number
    opportunities: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectorMinAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorMaxAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorCountAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    largeCap?: true
    midCap?: true
    smallCap?: true
    marketInsights?: true
    opportunities?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sector to aggregate.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sectors
    **/
    _count?: true | SectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorMaxAggregateInputType
  }

  export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
        [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSector[P]>
      : GetScalarType<T[P], AggregateSector[P]>
  }




  export type SectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorWhereInput
    orderBy?: SectorOrderByWithAggregationInput | SectorOrderByWithAggregationInput[]
    by: SectorScalarFieldEnum[] | SectorScalarFieldEnum
    having?: SectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorCountAggregateInputType | true
    _min?: SectorMinAggregateInputType
    _max?: SectorMaxAggregateInputType
  }

  export type SectorGroupByOutputType = {
    id: string
    sectorName: string
    sectorDesc: string
    largeCap: JsonValue
    midCap: JsonValue
    smallCap: JsonValue
    marketInsights: JsonValue
    opportunities: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SectorCountAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  type GetSectorGroupByPayload<T extends SectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorGroupByOutputType[P]>
            : GetScalarType<T[P], SectorGroupByOutputType[P]>
        }
      >
    >


  export type SectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    largeCap?: boolean
    midCap?: boolean
    smallCap?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    largeCap?: boolean
    midCap?: boolean
    smallCap?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    largeCap?: boolean
    midCap?: boolean
    smallCap?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectScalar = {
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    largeCap?: boolean
    midCap?: boolean
    smallCap?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectorName" | "sectorDesc" | "largeCap" | "midCap" | "smallCap" | "marketInsights" | "opportunities" | "createdAt" | "updatedAt", ExtArgs["result"]["sector"]>

  export type $SectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sector"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectorName: string
      sectorDesc: string
      largeCap: Prisma.JsonValue
      midCap: Prisma.JsonValue
      smallCap: Prisma.JsonValue
      marketInsights: Prisma.JsonValue
      opportunities: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sector"]>
    composites: {}
  }

  type SectorGetPayload<S extends boolean | null | undefined | SectorDefaultArgs> = $Result.GetResult<Prisma.$SectorPayload, S>

  type SectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorCountAggregateInputType | true
    }

  export interface SectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sector'], meta: { name: 'Sector' } }
    /**
     * Find zero or one Sector that matches the filter.
     * @param {SectorFindUniqueArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectorFindUniqueArgs>(args: SelectSubset<T, SectorFindUniqueArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectorFindUniqueOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectorFindUniqueOrThrowArgs>(args: SelectSubset<T, SectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectorFindFirstArgs>(args?: SelectSubset<T, SectorFindFirstArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectorFindFirstOrThrowArgs>(args?: SelectSubset<T, SectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sectors
     * const sectors = await prisma.sector.findMany()
     * 
     * // Get first 10 Sectors
     * const sectors = await prisma.sector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorWithIdOnly = await prisma.sector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectorFindManyArgs>(args?: SelectSubset<T, SectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sector.
     * @param {SectorCreateArgs} args - Arguments to create a Sector.
     * @example
     * // Create one Sector
     * const Sector = await prisma.sector.create({
     *   data: {
     *     // ... data to create a Sector
     *   }
     * })
     * 
     */
    create<T extends SectorCreateArgs>(args: SelectSubset<T, SectorCreateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sectors.
     * @param {SectorCreateManyArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectorCreateManyArgs>(args?: SelectSubset<T, SectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sectors and returns the data saved in the database.
     * @param {SectorCreateManyAndReturnArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectorCreateManyAndReturnArgs>(args?: SelectSubset<T, SectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sector.
     * @param {SectorDeleteArgs} args - Arguments to delete one Sector.
     * @example
     * // Delete one Sector
     * const Sector = await prisma.sector.delete({
     *   where: {
     *     // ... filter to delete one Sector
     *   }
     * })
     * 
     */
    delete<T extends SectorDeleteArgs>(args: SelectSubset<T, SectorDeleteArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sector.
     * @param {SectorUpdateArgs} args - Arguments to update one Sector.
     * @example
     * // Update one Sector
     * const sector = await prisma.sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectorUpdateArgs>(args: SelectSubset<T, SectorUpdateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sectors.
     * @param {SectorDeleteManyArgs} args - Arguments to filter Sectors to delete.
     * @example
     * // Delete a few Sectors
     * const { count } = await prisma.sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectorDeleteManyArgs>(args?: SelectSubset<T, SectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectorUpdateManyArgs>(args: SelectSubset<T, SectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors and returns the data updated in the database.
     * @param {SectorUpdateManyAndReturnArgs} args - Arguments to update many Sectors.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectorUpdateManyAndReturnArgs>(args: SelectSubset<T, SectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sector.
     * @param {SectorUpsertArgs} args - Arguments to update or create a Sector.
     * @example
     * // Update or create a Sector
     * const sector = await prisma.sector.upsert({
     *   create: {
     *     // ... data to create a Sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sector we want to update
     *   }
     * })
     */
    upsert<T extends SectorUpsertArgs>(args: SelectSubset<T, SectorUpsertArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorCountArgs} args - Arguments to filter Sectors to count.
     * @example
     * // Count the number of Sectors
     * const count = await prisma.sector.count({
     *   where: {
     *     // ... the filter for the Sectors we want to count
     *   }
     * })
    **/
    count<T extends SectorCountArgs>(
      args?: Subset<T, SectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectorAggregateArgs>(args: Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>

    /**
     * Group by Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectorGroupByArgs['orderBy'] }
        : { orderBy?: SectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sector model
   */
  readonly fields: SectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sector model
   */
  interface SectorFieldRefs {
    readonly id: FieldRef<"Sector", 'String'>
    readonly sectorName: FieldRef<"Sector", 'String'>
    readonly sectorDesc: FieldRef<"Sector", 'String'>
    readonly largeCap: FieldRef<"Sector", 'Json'>
    readonly midCap: FieldRef<"Sector", 'Json'>
    readonly smallCap: FieldRef<"Sector", 'Json'>
    readonly marketInsights: FieldRef<"Sector", 'Json'>
    readonly opportunities: FieldRef<"Sector", 'Json'>
    readonly createdAt: FieldRef<"Sector", 'DateTime'>
    readonly updatedAt: FieldRef<"Sector", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sector findUnique
   */
  export type SectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findUniqueOrThrow
   */
  export type SectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findFirst
   */
  export type SectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findFirstOrThrow
   */
  export type SectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findMany
   */
  export type SectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sectors to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector create
   */
  export type SectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data needed to create a Sector.
     */
    data: XOR<SectorCreateInput, SectorUncheckedCreateInput>
  }

  /**
   * Sector createMany
   */
  export type SectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector createManyAndReturn
   */
  export type SectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector update
   */
  export type SectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data needed to update a Sector.
     */
    data: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
    /**
     * Choose, which Sector to update.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector updateMany
   */
  export type SectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector updateManyAndReturn
   */
  export type SectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector upsert
   */
  export type SectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The filter to search for the Sector to update in case it exists.
     */
    where: SectorWhereUniqueInput
    /**
     * In case the Sector found by the `where` argument doesn't exist, create a new Sector with this data.
     */
    create: XOR<SectorCreateInput, SectorUncheckedCreateInput>
    /**
     * In case the Sector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
  }

  /**
   * Sector delete
   */
  export type SectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter which Sector to delete.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector deleteMany
   */
  export type SectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sectors to delete
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to delete.
     */
    limit?: number
  }

  /**
   * Sector without action
   */
  export type SectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    heading: string | null
    image: string | null
    publishDate: Date | null
    link: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    heading: string | null
    image: string | null
    publishDate: Date | null
    link: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    heading: number
    image: number
    publishDate: number
    link: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    heading?: true
    image?: true
    publishDate?: true
    link?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    heading?: true
    image?: true
    publishDate?: true
    link?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    heading?: true
    image?: true
    publishDate?: true
    link?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    heading: string
    image: string
    publishDate: Date
    link: string
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    image?: boolean
    publishDate?: boolean
    link?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    image?: boolean
    publishDate?: boolean
    link?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    image?: boolean
    publishDate?: boolean
    link?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    heading?: boolean
    image?: boolean
    publishDate?: boolean
    link?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heading" | "image" | "publishDate" | "link", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      heading: string
      image: string
      publishDate: Date
      link: string
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly heading: FieldRef<"Blog", 'String'>
    readonly image: FieldRef<"Blog", 'String'>
    readonly publishDate: FieldRef<"Blog", 'DateTime'>
    readonly link: FieldRef<"Blog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
  }


  /**
   * Model SharkInvestor
   */

  export type AggregateSharkInvestor = {
    _count: SharkInvestorCountAggregateOutputType | null
    _min: SharkInvestorMinAggregateOutputType | null
    _max: SharkInvestorMaxAggregateOutputType | null
  }

  export type SharkInvestorMinAggregateOutputType = {
    id: string | null
    image: string | null
    sharkName: string | null
    description: string | null
    netWorth: string | null
    portfolio: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharkInvestorMaxAggregateOutputType = {
    id: string | null
    image: string | null
    sharkName: string | null
    description: string | null
    netWorth: string | null
    portfolio: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharkInvestorCountAggregateOutputType = {
    id: number
    image: number
    sharkName: number
    description: number
    netWorth: number
    portfolio: number
    sectorFocus: number
    stageFocus: number
    notableInvestments: number
    achievements: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SharkInvestorMinAggregateInputType = {
    id?: true
    image?: true
    sharkName?: true
    description?: true
    netWorth?: true
    portfolio?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharkInvestorMaxAggregateInputType = {
    id?: true
    image?: true
    sharkName?: true
    description?: true
    netWorth?: true
    portfolio?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharkInvestorCountAggregateInputType = {
    id?: true
    image?: true
    sharkName?: true
    description?: true
    netWorth?: true
    portfolio?: true
    sectorFocus?: true
    stageFocus?: true
    notableInvestments?: true
    achievements?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SharkInvestorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharkInvestor to aggregate.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharkInvestors
    **/
    _count?: true | SharkInvestorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharkInvestorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharkInvestorMaxAggregateInputType
  }

  export type GetSharkInvestorAggregateType<T extends SharkInvestorAggregateArgs> = {
        [P in keyof T & keyof AggregateSharkInvestor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharkInvestor[P]>
      : GetScalarType<T[P], AggregateSharkInvestor[P]>
  }




  export type SharkInvestorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharkInvestorWhereInput
    orderBy?: SharkInvestorOrderByWithAggregationInput | SharkInvestorOrderByWithAggregationInput[]
    by: SharkInvestorScalarFieldEnum[] | SharkInvestorScalarFieldEnum
    having?: SharkInvestorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharkInvestorCountAggregateInputType | true
    _min?: SharkInvestorMinAggregateInputType
    _max?: SharkInvestorMaxAggregateInputType
  }

  export type SharkInvestorGroupByOutputType = {
    id: string
    image: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonValue
    stageFocus: JsonValue
    notableInvestments: JsonValue
    achievements: JsonValue
    link: string
    createdAt: Date
    updatedAt: Date
    _count: SharkInvestorCountAggregateOutputType | null
    _min: SharkInvestorMinAggregateOutputType | null
    _max: SharkInvestorMaxAggregateOutputType | null
  }

  type GetSharkInvestorGroupByPayload<T extends SharkInvestorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharkInvestorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharkInvestorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharkInvestorGroupByOutputType[P]>
            : GetScalarType<T[P], SharkInvestorGroupByOutputType[P]>
        }
      >
    >


  export type SharkInvestorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sharkInvestor"]>

  export type SharkInvestorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sharkInvestor"]>

  export type SharkInvestorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sharkInvestor"]>

  export type SharkInvestorSelectScalar = {
    id?: boolean
    image?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SharkInvestorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "sharkName" | "description" | "netWorth" | "portfolio" | "sectorFocus" | "stageFocus" | "notableInvestments" | "achievements" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["sharkInvestor"]>

  export type $SharkInvestorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharkInvestor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string
      sharkName: string
      description: string
      netWorth: string
      portfolio: string
      sectorFocus: Prisma.JsonValue
      stageFocus: Prisma.JsonValue
      notableInvestments: Prisma.JsonValue
      achievements: Prisma.JsonValue
      link: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sharkInvestor"]>
    composites: {}
  }

  type SharkInvestorGetPayload<S extends boolean | null | undefined | SharkInvestorDefaultArgs> = $Result.GetResult<Prisma.$SharkInvestorPayload, S>

  type SharkInvestorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharkInvestorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharkInvestorCountAggregateInputType | true
    }

  export interface SharkInvestorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharkInvestor'], meta: { name: 'SharkInvestor' } }
    /**
     * Find zero or one SharkInvestor that matches the filter.
     * @param {SharkInvestorFindUniqueArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharkInvestorFindUniqueArgs>(args: SelectSubset<T, SharkInvestorFindUniqueArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharkInvestor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharkInvestorFindUniqueOrThrowArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharkInvestorFindUniqueOrThrowArgs>(args: SelectSubset<T, SharkInvestorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharkInvestor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorFindFirstArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharkInvestorFindFirstArgs>(args?: SelectSubset<T, SharkInvestorFindFirstArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharkInvestor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorFindFirstOrThrowArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharkInvestorFindFirstOrThrowArgs>(args?: SelectSubset<T, SharkInvestorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharkInvestors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharkInvestors
     * const sharkInvestors = await prisma.sharkInvestor.findMany()
     * 
     * // Get first 10 SharkInvestors
     * const sharkInvestors = await prisma.sharkInvestor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharkInvestorWithIdOnly = await prisma.sharkInvestor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharkInvestorFindManyArgs>(args?: SelectSubset<T, SharkInvestorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharkInvestor.
     * @param {SharkInvestorCreateArgs} args - Arguments to create a SharkInvestor.
     * @example
     * // Create one SharkInvestor
     * const SharkInvestor = await prisma.sharkInvestor.create({
     *   data: {
     *     // ... data to create a SharkInvestor
     *   }
     * })
     * 
     */
    create<T extends SharkInvestorCreateArgs>(args: SelectSubset<T, SharkInvestorCreateArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharkInvestors.
     * @param {SharkInvestorCreateManyArgs} args - Arguments to create many SharkInvestors.
     * @example
     * // Create many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharkInvestorCreateManyArgs>(args?: SelectSubset<T, SharkInvestorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharkInvestors and returns the data saved in the database.
     * @param {SharkInvestorCreateManyAndReturnArgs} args - Arguments to create many SharkInvestors.
     * @example
     * // Create many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharkInvestors and only return the `id`
     * const sharkInvestorWithIdOnly = await prisma.sharkInvestor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharkInvestorCreateManyAndReturnArgs>(args?: SelectSubset<T, SharkInvestorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharkInvestor.
     * @param {SharkInvestorDeleteArgs} args - Arguments to delete one SharkInvestor.
     * @example
     * // Delete one SharkInvestor
     * const SharkInvestor = await prisma.sharkInvestor.delete({
     *   where: {
     *     // ... filter to delete one SharkInvestor
     *   }
     * })
     * 
     */
    delete<T extends SharkInvestorDeleteArgs>(args: SelectSubset<T, SharkInvestorDeleteArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharkInvestor.
     * @param {SharkInvestorUpdateArgs} args - Arguments to update one SharkInvestor.
     * @example
     * // Update one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharkInvestorUpdateArgs>(args: SelectSubset<T, SharkInvestorUpdateArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharkInvestors.
     * @param {SharkInvestorDeleteManyArgs} args - Arguments to filter SharkInvestors to delete.
     * @example
     * // Delete a few SharkInvestors
     * const { count } = await prisma.sharkInvestor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharkInvestorDeleteManyArgs>(args?: SelectSubset<T, SharkInvestorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharkInvestors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharkInvestorUpdateManyArgs>(args: SelectSubset<T, SharkInvestorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharkInvestors and returns the data updated in the database.
     * @param {SharkInvestorUpdateManyAndReturnArgs} args - Arguments to update many SharkInvestors.
     * @example
     * // Update many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharkInvestors and only return the `id`
     * const sharkInvestorWithIdOnly = await prisma.sharkInvestor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SharkInvestorUpdateManyAndReturnArgs>(args: SelectSubset<T, SharkInvestorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharkInvestor.
     * @param {SharkInvestorUpsertArgs} args - Arguments to update or create a SharkInvestor.
     * @example
     * // Update or create a SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.upsert({
     *   create: {
     *     // ... data to create a SharkInvestor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharkInvestor we want to update
     *   }
     * })
     */
    upsert<T extends SharkInvestorUpsertArgs>(args: SelectSubset<T, SharkInvestorUpsertArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharkInvestors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorCountArgs} args - Arguments to filter SharkInvestors to count.
     * @example
     * // Count the number of SharkInvestors
     * const count = await prisma.sharkInvestor.count({
     *   where: {
     *     // ... the filter for the SharkInvestors we want to count
     *   }
     * })
    **/
    count<T extends SharkInvestorCountArgs>(
      args?: Subset<T, SharkInvestorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharkInvestorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharkInvestor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharkInvestorAggregateArgs>(args: Subset<T, SharkInvestorAggregateArgs>): Prisma.PrismaPromise<GetSharkInvestorAggregateType<T>>

    /**
     * Group by SharkInvestor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SharkInvestorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharkInvestorGroupByArgs['orderBy'] }
        : { orderBy?: SharkInvestorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SharkInvestorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharkInvestorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharkInvestor model
   */
  readonly fields: SharkInvestorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharkInvestor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharkInvestorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SharkInvestor model
   */
  interface SharkInvestorFieldRefs {
    readonly id: FieldRef<"SharkInvestor", 'String'>
    readonly image: FieldRef<"SharkInvestor", 'String'>
    readonly sharkName: FieldRef<"SharkInvestor", 'String'>
    readonly description: FieldRef<"SharkInvestor", 'String'>
    readonly netWorth: FieldRef<"SharkInvestor", 'String'>
    readonly portfolio: FieldRef<"SharkInvestor", 'String'>
    readonly sectorFocus: FieldRef<"SharkInvestor", 'Json'>
    readonly stageFocus: FieldRef<"SharkInvestor", 'Json'>
    readonly notableInvestments: FieldRef<"SharkInvestor", 'Json'>
    readonly achievements: FieldRef<"SharkInvestor", 'Json'>
    readonly link: FieldRef<"SharkInvestor", 'String'>
    readonly createdAt: FieldRef<"SharkInvestor", 'DateTime'>
    readonly updatedAt: FieldRef<"SharkInvestor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharkInvestor findUnique
   */
  export type SharkInvestorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor findUniqueOrThrow
   */
  export type SharkInvestorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor findFirst
   */
  export type SharkInvestorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharkInvestors.
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharkInvestors.
     */
    distinct?: SharkInvestorScalarFieldEnum | SharkInvestorScalarFieldEnum[]
  }

  /**
   * SharkInvestor findFirstOrThrow
   */
  export type SharkInvestorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharkInvestors.
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharkInvestors.
     */
    distinct?: SharkInvestorScalarFieldEnum | SharkInvestorScalarFieldEnum[]
  }

  /**
   * SharkInvestor findMany
   */
  export type SharkInvestorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestors to fetch.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharkInvestors.
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    distinct?: SharkInvestorScalarFieldEnum | SharkInvestorScalarFieldEnum[]
  }

  /**
   * SharkInvestor create
   */
  export type SharkInvestorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data needed to create a SharkInvestor.
     */
    data: XOR<SharkInvestorCreateInput, SharkInvestorUncheckedCreateInput>
  }

  /**
   * SharkInvestor createMany
   */
  export type SharkInvestorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharkInvestors.
     */
    data: SharkInvestorCreateManyInput | SharkInvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharkInvestor createManyAndReturn
   */
  export type SharkInvestorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data used to create many SharkInvestors.
     */
    data: SharkInvestorCreateManyInput | SharkInvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharkInvestor update
   */
  export type SharkInvestorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data needed to update a SharkInvestor.
     */
    data: XOR<SharkInvestorUpdateInput, SharkInvestorUncheckedUpdateInput>
    /**
     * Choose, which SharkInvestor to update.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor updateMany
   */
  export type SharkInvestorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharkInvestors.
     */
    data: XOR<SharkInvestorUpdateManyMutationInput, SharkInvestorUncheckedUpdateManyInput>
    /**
     * Filter which SharkInvestors to update
     */
    where?: SharkInvestorWhereInput
    /**
     * Limit how many SharkInvestors to update.
     */
    limit?: number
  }

  /**
   * SharkInvestor updateManyAndReturn
   */
  export type SharkInvestorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data used to update SharkInvestors.
     */
    data: XOR<SharkInvestorUpdateManyMutationInput, SharkInvestorUncheckedUpdateManyInput>
    /**
     * Filter which SharkInvestors to update
     */
    where?: SharkInvestorWhereInput
    /**
     * Limit how many SharkInvestors to update.
     */
    limit?: number
  }

  /**
   * SharkInvestor upsert
   */
  export type SharkInvestorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The filter to search for the SharkInvestor to update in case it exists.
     */
    where: SharkInvestorWhereUniqueInput
    /**
     * In case the SharkInvestor found by the `where` argument doesn't exist, create a new SharkInvestor with this data.
     */
    create: XOR<SharkInvestorCreateInput, SharkInvestorUncheckedCreateInput>
    /**
     * In case the SharkInvestor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharkInvestorUpdateInput, SharkInvestorUncheckedUpdateInput>
  }

  /**
   * SharkInvestor delete
   */
  export type SharkInvestorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter which SharkInvestor to delete.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor deleteMany
   */
  export type SharkInvestorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharkInvestors to delete
     */
    where?: SharkInvestorWhereInput
    /**
     * Limit how many SharkInvestors to delete.
     */
    limit?: number
  }

  /**
   * SharkInvestor without action
   */
  export type SharkInvestorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UpcomingIpoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceBand: 'priceBand',
    openDate: 'openDate',
    closeDate: 'closeDate',
    issueSize: 'issueSize',
    issueType: 'issueType',
    listingDate: 'listingDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UpcomingIpoScalarFieldEnum = (typeof UpcomingIpoScalarFieldEnum)[keyof typeof UpcomingIpoScalarFieldEnum]


  export const OngoingIpoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceBand: 'priceBand',
    openDate: 'openDate',
    closeDate: 'closeDate',
    issueSize: 'issueSize',
    issueType: 'issueType',
    listingDate: 'listingDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OngoingIpoScalarFieldEnum = (typeof OngoingIpoScalarFieldEnum)[keyof typeof OngoingIpoScalarFieldEnum]


  export const NewListedIpoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceBand: 'priceBand',
    openDate: 'openDate',
    closeDate: 'closeDate',
    issueSize: 'issueSize',
    issueType: 'issueType',
    listingDate: 'listingDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewListedIpoScalarFieldEnum = (typeof NewListedIpoScalarFieldEnum)[keyof typeof NewListedIpoScalarFieldEnum]


  export const AllSectorScalarFieldEnum: {
    id: 'id',
    sectorName: 'sectorName',
    sectorDesc: 'sectorDesc',
    sectorType: 'sectorType'
  };

  export type AllSectorScalarFieldEnum = (typeof AllSectorScalarFieldEnum)[keyof typeof AllSectorScalarFieldEnum]


  export const SectorScalarFieldEnum: {
    id: 'id',
    sectorName: 'sectorName',
    sectorDesc: 'sectorDesc',
    largeCap: 'largeCap',
    midCap: 'midCap',
    smallCap: 'smallCap',
    marketInsights: 'marketInsights',
    opportunities: 'opportunities',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    heading: 'heading',
    image: 'image',
    publishDate: 'publishDate',
    link: 'link'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const SharkInvestorScalarFieldEnum: {
    id: 'id',
    image: 'image',
    sharkName: 'sharkName',
    description: 'description',
    netWorth: 'netWorth',
    portfolio: 'portfolio',
    sectorFocus: 'sectorFocus',
    stageFocus: 'stageFocus',
    notableInvestments: 'notableInvestments',
    achievements: 'achievements',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SharkInvestorScalarFieldEnum = (typeof SharkInvestorScalarFieldEnum)[keyof typeof SharkInvestorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    phone?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UpcomingIpoWhereInput = {
    AND?: UpcomingIpoWhereInput | UpcomingIpoWhereInput[]
    OR?: UpcomingIpoWhereInput[]
    NOT?: UpcomingIpoWhereInput | UpcomingIpoWhereInput[]
    id?: StringFilter<"UpcomingIpo"> | string
    name?: StringFilter<"UpcomingIpo"> | string
    priceBand?: StringFilter<"UpcomingIpo"> | string
    openDate?: StringFilter<"UpcomingIpo"> | string
    closeDate?: StringFilter<"UpcomingIpo"> | string
    issueSize?: StringFilter<"UpcomingIpo"> | string
    issueType?: StringFilter<"UpcomingIpo"> | string
    listingDate?: StringFilter<"UpcomingIpo"> | string
    createdAt?: DateTimeFilter<"UpcomingIpo"> | Date | string
    updatedAt?: DateTimeFilter<"UpcomingIpo"> | Date | string
  }

  export type UpcomingIpoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpcomingIpoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UpcomingIpoWhereInput | UpcomingIpoWhereInput[]
    OR?: UpcomingIpoWhereInput[]
    NOT?: UpcomingIpoWhereInput | UpcomingIpoWhereInput[]
    priceBand?: StringFilter<"UpcomingIpo"> | string
    openDate?: StringFilter<"UpcomingIpo"> | string
    closeDate?: StringFilter<"UpcomingIpo"> | string
    issueSize?: StringFilter<"UpcomingIpo"> | string
    issueType?: StringFilter<"UpcomingIpo"> | string
    listingDate?: StringFilter<"UpcomingIpo"> | string
    createdAt?: DateTimeFilter<"UpcomingIpo"> | Date | string
    updatedAt?: DateTimeFilter<"UpcomingIpo"> | Date | string
  }, "id" | "name">

  export type UpcomingIpoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UpcomingIpoCountOrderByAggregateInput
    _max?: UpcomingIpoMaxOrderByAggregateInput
    _min?: UpcomingIpoMinOrderByAggregateInput
  }

  export type UpcomingIpoScalarWhereWithAggregatesInput = {
    AND?: UpcomingIpoScalarWhereWithAggregatesInput | UpcomingIpoScalarWhereWithAggregatesInput[]
    OR?: UpcomingIpoScalarWhereWithAggregatesInput[]
    NOT?: UpcomingIpoScalarWhereWithAggregatesInput | UpcomingIpoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    name?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    priceBand?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    openDate?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    closeDate?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    issueSize?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    issueType?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    listingDate?: StringWithAggregatesFilter<"UpcomingIpo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UpcomingIpo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UpcomingIpo"> | Date | string
  }

  export type OngoingIpoWhereInput = {
    AND?: OngoingIpoWhereInput | OngoingIpoWhereInput[]
    OR?: OngoingIpoWhereInput[]
    NOT?: OngoingIpoWhereInput | OngoingIpoWhereInput[]
    id?: StringFilter<"OngoingIpo"> | string
    name?: StringFilter<"OngoingIpo"> | string
    priceBand?: StringFilter<"OngoingIpo"> | string
    openDate?: StringFilter<"OngoingIpo"> | string
    closeDate?: StringFilter<"OngoingIpo"> | string
    issueSize?: StringFilter<"OngoingIpo"> | string
    issueType?: StringFilter<"OngoingIpo"> | string
    listingDate?: StringFilter<"OngoingIpo"> | string
    createdAt?: DateTimeFilter<"OngoingIpo"> | Date | string
    updatedAt?: DateTimeFilter<"OngoingIpo"> | Date | string
  }

  export type OngoingIpoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OngoingIpoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OngoingIpoWhereInput | OngoingIpoWhereInput[]
    OR?: OngoingIpoWhereInput[]
    NOT?: OngoingIpoWhereInput | OngoingIpoWhereInput[]
    priceBand?: StringFilter<"OngoingIpo"> | string
    openDate?: StringFilter<"OngoingIpo"> | string
    closeDate?: StringFilter<"OngoingIpo"> | string
    issueSize?: StringFilter<"OngoingIpo"> | string
    issueType?: StringFilter<"OngoingIpo"> | string
    listingDate?: StringFilter<"OngoingIpo"> | string
    createdAt?: DateTimeFilter<"OngoingIpo"> | Date | string
    updatedAt?: DateTimeFilter<"OngoingIpo"> | Date | string
  }, "id" | "name">

  export type OngoingIpoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OngoingIpoCountOrderByAggregateInput
    _max?: OngoingIpoMaxOrderByAggregateInput
    _min?: OngoingIpoMinOrderByAggregateInput
  }

  export type OngoingIpoScalarWhereWithAggregatesInput = {
    AND?: OngoingIpoScalarWhereWithAggregatesInput | OngoingIpoScalarWhereWithAggregatesInput[]
    OR?: OngoingIpoScalarWhereWithAggregatesInput[]
    NOT?: OngoingIpoScalarWhereWithAggregatesInput | OngoingIpoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OngoingIpo"> | string
    name?: StringWithAggregatesFilter<"OngoingIpo"> | string
    priceBand?: StringWithAggregatesFilter<"OngoingIpo"> | string
    openDate?: StringWithAggregatesFilter<"OngoingIpo"> | string
    closeDate?: StringWithAggregatesFilter<"OngoingIpo"> | string
    issueSize?: StringWithAggregatesFilter<"OngoingIpo"> | string
    issueType?: StringWithAggregatesFilter<"OngoingIpo"> | string
    listingDate?: StringWithAggregatesFilter<"OngoingIpo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OngoingIpo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OngoingIpo"> | Date | string
  }

  export type NewListedIpoWhereInput = {
    AND?: NewListedIpoWhereInput | NewListedIpoWhereInput[]
    OR?: NewListedIpoWhereInput[]
    NOT?: NewListedIpoWhereInput | NewListedIpoWhereInput[]
    id?: StringFilter<"NewListedIpo"> | string
    name?: StringFilter<"NewListedIpo"> | string
    priceBand?: StringFilter<"NewListedIpo"> | string
    openDate?: StringFilter<"NewListedIpo"> | string
    closeDate?: StringFilter<"NewListedIpo"> | string
    issueSize?: StringFilter<"NewListedIpo"> | string
    issueType?: StringFilter<"NewListedIpo"> | string
    listingDate?: StringFilter<"NewListedIpo"> | string
    createdAt?: DateTimeFilter<"NewListedIpo"> | Date | string
    updatedAt?: DateTimeFilter<"NewListedIpo"> | Date | string
  }

  export type NewListedIpoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewListedIpoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: NewListedIpoWhereInput | NewListedIpoWhereInput[]
    OR?: NewListedIpoWhereInput[]
    NOT?: NewListedIpoWhereInput | NewListedIpoWhereInput[]
    priceBand?: StringFilter<"NewListedIpo"> | string
    openDate?: StringFilter<"NewListedIpo"> | string
    closeDate?: StringFilter<"NewListedIpo"> | string
    issueSize?: StringFilter<"NewListedIpo"> | string
    issueType?: StringFilter<"NewListedIpo"> | string
    listingDate?: StringFilter<"NewListedIpo"> | string
    createdAt?: DateTimeFilter<"NewListedIpo"> | Date | string
    updatedAt?: DateTimeFilter<"NewListedIpo"> | Date | string
  }, "id" | "name">

  export type NewListedIpoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewListedIpoCountOrderByAggregateInput
    _max?: NewListedIpoMaxOrderByAggregateInput
    _min?: NewListedIpoMinOrderByAggregateInput
  }

  export type NewListedIpoScalarWhereWithAggregatesInput = {
    AND?: NewListedIpoScalarWhereWithAggregatesInput | NewListedIpoScalarWhereWithAggregatesInput[]
    OR?: NewListedIpoScalarWhereWithAggregatesInput[]
    NOT?: NewListedIpoScalarWhereWithAggregatesInput | NewListedIpoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewListedIpo"> | string
    name?: StringWithAggregatesFilter<"NewListedIpo"> | string
    priceBand?: StringWithAggregatesFilter<"NewListedIpo"> | string
    openDate?: StringWithAggregatesFilter<"NewListedIpo"> | string
    closeDate?: StringWithAggregatesFilter<"NewListedIpo"> | string
    issueSize?: StringWithAggregatesFilter<"NewListedIpo"> | string
    issueType?: StringWithAggregatesFilter<"NewListedIpo"> | string
    listingDate?: StringWithAggregatesFilter<"NewListedIpo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewListedIpo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewListedIpo"> | Date | string
  }

  export type AllSectorWhereInput = {
    AND?: AllSectorWhereInput | AllSectorWhereInput[]
    OR?: AllSectorWhereInput[]
    NOT?: AllSectorWhereInput | AllSectorWhereInput[]
    id?: StringFilter<"AllSector"> | string
    sectorName?: StringFilter<"AllSector"> | string
    sectorDesc?: StringFilter<"AllSector"> | string
    sectorType?: StringFilter<"AllSector"> | string
  }

  export type AllSectorOrderByWithRelationInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    sectorType?: SortOrder
  }

  export type AllSectorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectorName?: string
    AND?: AllSectorWhereInput | AllSectorWhereInput[]
    OR?: AllSectorWhereInput[]
    NOT?: AllSectorWhereInput | AllSectorWhereInput[]
    sectorDesc?: StringFilter<"AllSector"> | string
    sectorType?: StringFilter<"AllSector"> | string
  }, "id" | "sectorName">

  export type AllSectorOrderByWithAggregationInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    sectorType?: SortOrder
    _count?: AllSectorCountOrderByAggregateInput
    _max?: AllSectorMaxOrderByAggregateInput
    _min?: AllSectorMinOrderByAggregateInput
  }

  export type AllSectorScalarWhereWithAggregatesInput = {
    AND?: AllSectorScalarWhereWithAggregatesInput | AllSectorScalarWhereWithAggregatesInput[]
    OR?: AllSectorScalarWhereWithAggregatesInput[]
    NOT?: AllSectorScalarWhereWithAggregatesInput | AllSectorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AllSector"> | string
    sectorName?: StringWithAggregatesFilter<"AllSector"> | string
    sectorDesc?: StringWithAggregatesFilter<"AllSector"> | string
    sectorType?: StringWithAggregatesFilter<"AllSector"> | string
  }

  export type SectorWhereInput = {
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    id?: StringFilter<"Sector"> | string
    sectorName?: StringFilter<"Sector"> | string
    sectorDesc?: StringFilter<"Sector"> | string
    largeCap?: JsonFilter<"Sector">
    midCap?: JsonFilter<"Sector">
    smallCap?: JsonFilter<"Sector">
    marketInsights?: JsonFilter<"Sector">
    opportunities?: JsonFilter<"Sector">
    createdAt?: DateTimeFilter<"Sector"> | Date | string
    updatedAt?: DateTimeFilter<"Sector"> | Date | string
  }

  export type SectorOrderByWithRelationInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    largeCap?: SortOrder
    midCap?: SortOrder
    smallCap?: SortOrder
    marketInsights?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectorName?: string
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    sectorDesc?: StringFilter<"Sector"> | string
    largeCap?: JsonFilter<"Sector">
    midCap?: JsonFilter<"Sector">
    smallCap?: JsonFilter<"Sector">
    marketInsights?: JsonFilter<"Sector">
    opportunities?: JsonFilter<"Sector">
    createdAt?: DateTimeFilter<"Sector"> | Date | string
    updatedAt?: DateTimeFilter<"Sector"> | Date | string
  }, "id" | "sectorName">

  export type SectorOrderByWithAggregationInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    largeCap?: SortOrder
    midCap?: SortOrder
    smallCap?: SortOrder
    marketInsights?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectorCountOrderByAggregateInput
    _max?: SectorMaxOrderByAggregateInput
    _min?: SectorMinOrderByAggregateInput
  }

  export type SectorScalarWhereWithAggregatesInput = {
    AND?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    OR?: SectorScalarWhereWithAggregatesInput[]
    NOT?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sector"> | string
    sectorName?: StringWithAggregatesFilter<"Sector"> | string
    sectorDesc?: StringWithAggregatesFilter<"Sector"> | string
    largeCap?: JsonWithAggregatesFilter<"Sector">
    midCap?: JsonWithAggregatesFilter<"Sector">
    smallCap?: JsonWithAggregatesFilter<"Sector">
    marketInsights?: JsonWithAggregatesFilter<"Sector">
    opportunities?: JsonWithAggregatesFilter<"Sector">
    createdAt?: DateTimeWithAggregatesFilter<"Sector"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sector"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    heading?: StringFilter<"Blog"> | string
    image?: StringFilter<"Blog"> | string
    publishDate?: DateTimeFilter<"Blog"> | Date | string
    link?: StringFilter<"Blog"> | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    heading?: SortOrder
    image?: SortOrder
    publishDate?: SortOrder
    link?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    heading?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    image?: StringFilter<"Blog"> | string
    publishDate?: DateTimeFilter<"Blog"> | Date | string
    link?: StringFilter<"Blog"> | string
  }, "id" | "heading">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    heading?: SortOrder
    image?: SortOrder
    publishDate?: SortOrder
    link?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    heading?: StringWithAggregatesFilter<"Blog"> | string
    image?: StringWithAggregatesFilter<"Blog"> | string
    publishDate?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    link?: StringWithAggregatesFilter<"Blog"> | string
  }

  export type SharkInvestorWhereInput = {
    AND?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    OR?: SharkInvestorWhereInput[]
    NOT?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    id?: StringFilter<"SharkInvestor"> | string
    image?: StringFilter<"SharkInvestor"> | string
    sharkName?: StringFilter<"SharkInvestor"> | string
    description?: StringFilter<"SharkInvestor"> | string
    netWorth?: StringFilter<"SharkInvestor"> | string
    portfolio?: StringFilter<"SharkInvestor"> | string
    sectorFocus?: JsonFilter<"SharkInvestor">
    stageFocus?: JsonFilter<"SharkInvestor">
    notableInvestments?: JsonFilter<"SharkInvestor">
    achievements?: JsonFilter<"SharkInvestor">
    link?: StringFilter<"SharkInvestor"> | string
    createdAt?: DateTimeFilter<"SharkInvestor"> | Date | string
    updatedAt?: DateTimeFilter<"SharkInvestor"> | Date | string
  }

  export type SharkInvestorOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    sectorFocus?: SortOrder
    stageFocus?: SortOrder
    notableInvestments?: SortOrder
    achievements?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharkInvestorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sharkName?: string
    AND?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    OR?: SharkInvestorWhereInput[]
    NOT?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    image?: StringFilter<"SharkInvestor"> | string
    description?: StringFilter<"SharkInvestor"> | string
    netWorth?: StringFilter<"SharkInvestor"> | string
    portfolio?: StringFilter<"SharkInvestor"> | string
    sectorFocus?: JsonFilter<"SharkInvestor">
    stageFocus?: JsonFilter<"SharkInvestor">
    notableInvestments?: JsonFilter<"SharkInvestor">
    achievements?: JsonFilter<"SharkInvestor">
    link?: StringFilter<"SharkInvestor"> | string
    createdAt?: DateTimeFilter<"SharkInvestor"> | Date | string
    updatedAt?: DateTimeFilter<"SharkInvestor"> | Date | string
  }, "id" | "sharkName">

  export type SharkInvestorOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    sectorFocus?: SortOrder
    stageFocus?: SortOrder
    notableInvestments?: SortOrder
    achievements?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SharkInvestorCountOrderByAggregateInput
    _max?: SharkInvestorMaxOrderByAggregateInput
    _min?: SharkInvestorMinOrderByAggregateInput
  }

  export type SharkInvestorScalarWhereWithAggregatesInput = {
    AND?: SharkInvestorScalarWhereWithAggregatesInput | SharkInvestorScalarWhereWithAggregatesInput[]
    OR?: SharkInvestorScalarWhereWithAggregatesInput[]
    NOT?: SharkInvestorScalarWhereWithAggregatesInput | SharkInvestorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharkInvestor"> | string
    image?: StringWithAggregatesFilter<"SharkInvestor"> | string
    sharkName?: StringWithAggregatesFilter<"SharkInvestor"> | string
    description?: StringWithAggregatesFilter<"SharkInvestor"> | string
    netWorth?: StringWithAggregatesFilter<"SharkInvestor"> | string
    portfolio?: StringWithAggregatesFilter<"SharkInvestor"> | string
    sectorFocus?: JsonWithAggregatesFilter<"SharkInvestor">
    stageFocus?: JsonWithAggregatesFilter<"SharkInvestor">
    notableInvestments?: JsonWithAggregatesFilter<"SharkInvestor">
    achievements?: JsonWithAggregatesFilter<"SharkInvestor">
    link?: StringWithAggregatesFilter<"SharkInvestor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SharkInvestor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SharkInvestor"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.UserRole
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpcomingIpoCreateInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpcomingIpoUncheckedCreateInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpcomingIpoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpcomingIpoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpcomingIpoCreateManyInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpcomingIpoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpcomingIpoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingIpoCreateInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OngoingIpoUncheckedCreateInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OngoingIpoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingIpoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingIpoCreateManyInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OngoingIpoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingIpoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewListedIpoCreateInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewListedIpoUncheckedCreateInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewListedIpoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewListedIpoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewListedIpoCreateManyInput = {
    id?: string
    name: string
    priceBand: string
    openDate: string
    closeDate: string
    issueSize: string
    issueType: string
    listingDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewListedIpoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewListedIpoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: StringFieldUpdateOperationsInput | string
    closeDate?: StringFieldUpdateOperationsInput | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllSectorCreateInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    sectorType: string
  }

  export type AllSectorUncheckedCreateInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    sectorType: string
  }

  export type AllSectorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    sectorType?: StringFieldUpdateOperationsInput | string
  }

  export type AllSectorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    sectorType?: StringFieldUpdateOperationsInput | string
  }

  export type AllSectorCreateManyInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    sectorType: string
  }

  export type AllSectorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    sectorType?: StringFieldUpdateOperationsInput | string
  }

  export type AllSectorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    sectorType?: StringFieldUpdateOperationsInput | string
  }

  export type SectorCreateInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    largeCap: JsonNullValueInput | InputJsonValue
    midCap: JsonNullValueInput | InputJsonValue
    smallCap: JsonNullValueInput | InputJsonValue
    marketInsights: JsonNullValueInput | InputJsonValue
    opportunities: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUncheckedCreateInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    largeCap: JsonNullValueInput | InputJsonValue
    midCap: JsonNullValueInput | InputJsonValue
    smallCap: JsonNullValueInput | InputJsonValue
    marketInsights: JsonNullValueInput | InputJsonValue
    opportunities: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    largeCap?: JsonNullValueInput | InputJsonValue
    midCap?: JsonNullValueInput | InputJsonValue
    smallCap?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    largeCap?: JsonNullValueInput | InputJsonValue
    midCap?: JsonNullValueInput | InputJsonValue
    smallCap?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorCreateManyInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    largeCap: JsonNullValueInput | InputJsonValue
    midCap: JsonNullValueInput | InputJsonValue
    smallCap: JsonNullValueInput | InputJsonValue
    marketInsights: JsonNullValueInput | InputJsonValue
    opportunities: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    largeCap?: JsonNullValueInput | InputJsonValue
    midCap?: JsonNullValueInput | InputJsonValue
    smallCap?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    largeCap?: JsonNullValueInput | InputJsonValue
    midCap?: JsonNullValueInput | InputJsonValue
    smallCap?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    heading: string
    image: string
    publishDate?: Date | string
    link: string
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    heading: string
    image: string
    publishDate?: Date | string
    link: string
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateManyInput = {
    id?: string
    heading: string
    image: string
    publishDate?: Date | string
    link: string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type SharkInvestorCreateInput = {
    id?: string
    image: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonNullValueInput | InputJsonValue
    stageFocus: JsonNullValueInput | InputJsonValue
    notableInvestments: JsonNullValueInput | InputJsonValue
    achievements: JsonNullValueInput | InputJsonValue
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharkInvestorUncheckedCreateInput = {
    id?: string
    image: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonNullValueInput | InputJsonValue
    stageFocus: JsonNullValueInput | InputJsonValue
    notableInvestments: JsonNullValueInput | InputJsonValue
    achievements: JsonNullValueInput | InputJsonValue
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharkInvestorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharkInvestorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharkInvestorCreateManyInput = {
    id?: string
    image: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonNullValueInput | InputJsonValue
    stageFocus: JsonNullValueInput | InputJsonValue
    notableInvestments: JsonNullValueInput | InputJsonValue
    achievements: JsonNullValueInput | InputJsonValue
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharkInvestorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharkInvestorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UpcomingIpoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpcomingIpoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpcomingIpoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OngoingIpoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OngoingIpoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OngoingIpoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewListedIpoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewListedIpoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewListedIpoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AllSectorCountOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    sectorType?: SortOrder
  }

  export type AllSectorMaxOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    sectorType?: SortOrder
  }

  export type AllSectorMinOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    sectorType?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SectorCountOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    largeCap?: SortOrder
    midCap?: SortOrder
    smallCap?: SortOrder
    marketInsights?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorMaxOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorMinOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    image?: SortOrder
    publishDate?: SortOrder
    link?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    image?: SortOrder
    publishDate?: SortOrder
    link?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    image?: SortOrder
    publishDate?: SortOrder
    link?: SortOrder
  }

  export type SharkInvestorCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    sectorFocus?: SortOrder
    stageFocus?: SortOrder
    notableInvestments?: SortOrder
    achievements?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharkInvestorMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharkInvestorMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}