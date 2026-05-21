
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PgUser
 * 
 */
export type PgUser = $Result.DefaultSelection<Prisma.$PgUserPayload>
/**
 * Model PgResume
 * 
 */
export type PgResume = $Result.DefaultSelection<Prisma.$PgResumePayload>
/**
 * Model PgInterviewLog
 * 
 */
export type PgInterviewLog = $Result.DefaultSelection<Prisma.$PgInterviewLogPayload>
/**
 * Model PgSupportTicket
 * 
 */
export type PgSupportTicket = $Result.DefaultSelection<Prisma.$PgSupportTicketPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more PgUsers
 * const pgUsers = await prisma.pgUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more PgUsers
   * const pgUsers = await prisma.pgUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pgUser`: Exposes CRUD operations for the **PgUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PgUsers
    * const pgUsers = await prisma.pgUser.findMany()
    * ```
    */
  get pgUser(): Prisma.PgUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pgResume`: Exposes CRUD operations for the **PgResume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PgResumes
    * const pgResumes = await prisma.pgResume.findMany()
    * ```
    */
  get pgResume(): Prisma.PgResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pgInterviewLog`: Exposes CRUD operations for the **PgInterviewLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PgInterviewLogs
    * const pgInterviewLogs = await prisma.pgInterviewLog.findMany()
    * ```
    */
  get pgInterviewLog(): Prisma.PgInterviewLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pgSupportTicket`: Exposes CRUD operations for the **PgSupportTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PgSupportTickets
    * const pgSupportTickets = await prisma.pgSupportTicket.findMany()
    * ```
    */
  get pgSupportTicket(): Prisma.PgSupportTicketDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PgUser: 'PgUser',
    PgResume: 'PgResume',
    PgInterviewLog: 'PgInterviewLog',
    PgSupportTicket: 'PgSupportTicket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pgUser" | "pgResume" | "pgInterviewLog" | "pgSupportTicket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PgUser: {
        payload: Prisma.$PgUserPayload<ExtArgs>
        fields: Prisma.PgUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PgUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PgUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>
          }
          findFirst: {
            args: Prisma.PgUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PgUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>
          }
          findMany: {
            args: Prisma.PgUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>[]
          }
          create: {
            args: Prisma.PgUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>
          }
          createMany: {
            args: Prisma.PgUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PgUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>[]
          }
          delete: {
            args: Prisma.PgUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>
          }
          update: {
            args: Prisma.PgUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>
          }
          deleteMany: {
            args: Prisma.PgUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PgUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PgUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>[]
          }
          upsert: {
            args: Prisma.PgUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgUserPayload>
          }
          aggregate: {
            args: Prisma.PgUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePgUser>
          }
          groupBy: {
            args: Prisma.PgUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<PgUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.PgUserCountArgs<ExtArgs>
            result: $Utils.Optional<PgUserCountAggregateOutputType> | number
          }
        }
      }
      PgResume: {
        payload: Prisma.$PgResumePayload<ExtArgs>
        fields: Prisma.PgResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PgResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PgResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>
          }
          findFirst: {
            args: Prisma.PgResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PgResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>
          }
          findMany: {
            args: Prisma.PgResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>[]
          }
          create: {
            args: Prisma.PgResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>
          }
          createMany: {
            args: Prisma.PgResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PgResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>[]
          }
          delete: {
            args: Prisma.PgResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>
          }
          update: {
            args: Prisma.PgResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>
          }
          deleteMany: {
            args: Prisma.PgResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PgResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PgResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>[]
          }
          upsert: {
            args: Prisma.PgResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgResumePayload>
          }
          aggregate: {
            args: Prisma.PgResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePgResume>
          }
          groupBy: {
            args: Prisma.PgResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PgResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PgResumeCountArgs<ExtArgs>
            result: $Utils.Optional<PgResumeCountAggregateOutputType> | number
          }
        }
      }
      PgInterviewLog: {
        payload: Prisma.$PgInterviewLogPayload<ExtArgs>
        fields: Prisma.PgInterviewLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PgInterviewLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PgInterviewLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>
          }
          findFirst: {
            args: Prisma.PgInterviewLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PgInterviewLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>
          }
          findMany: {
            args: Prisma.PgInterviewLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>[]
          }
          create: {
            args: Prisma.PgInterviewLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>
          }
          createMany: {
            args: Prisma.PgInterviewLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PgInterviewLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>[]
          }
          delete: {
            args: Prisma.PgInterviewLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>
          }
          update: {
            args: Prisma.PgInterviewLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>
          }
          deleteMany: {
            args: Prisma.PgInterviewLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PgInterviewLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PgInterviewLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>[]
          }
          upsert: {
            args: Prisma.PgInterviewLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgInterviewLogPayload>
          }
          aggregate: {
            args: Prisma.PgInterviewLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePgInterviewLog>
          }
          groupBy: {
            args: Prisma.PgInterviewLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PgInterviewLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PgInterviewLogCountArgs<ExtArgs>
            result: $Utils.Optional<PgInterviewLogCountAggregateOutputType> | number
          }
        }
      }
      PgSupportTicket: {
        payload: Prisma.$PgSupportTicketPayload<ExtArgs>
        fields: Prisma.PgSupportTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PgSupportTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PgSupportTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>
          }
          findFirst: {
            args: Prisma.PgSupportTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PgSupportTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>
          }
          findMany: {
            args: Prisma.PgSupportTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>[]
          }
          create: {
            args: Prisma.PgSupportTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>
          }
          createMany: {
            args: Prisma.PgSupportTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PgSupportTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>[]
          }
          delete: {
            args: Prisma.PgSupportTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>
          }
          update: {
            args: Prisma.PgSupportTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>
          }
          deleteMany: {
            args: Prisma.PgSupportTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PgSupportTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PgSupportTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>[]
          }
          upsert: {
            args: Prisma.PgSupportTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PgSupportTicketPayload>
          }
          aggregate: {
            args: Prisma.PgSupportTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePgSupportTicket>
          }
          groupBy: {
            args: Prisma.PgSupportTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<PgSupportTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.PgSupportTicketCountArgs<ExtArgs>
            result: $Utils.Optional<PgSupportTicketCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    pgUser?: PgUserOmit
    pgResume?: PgResumeOmit
    pgInterviewLog?: PgInterviewLogOmit
    pgSupportTicket?: PgSupportTicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PgUserCountOutputType
   */

  export type PgUserCountOutputType = {
    resumes: number
    interviewLogs: number
    supportTickets: number
  }

  export type PgUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | PgUserCountOutputTypeCountResumesArgs
    interviewLogs?: boolean | PgUserCountOutputTypeCountInterviewLogsArgs
    supportTickets?: boolean | PgUserCountOutputTypeCountSupportTicketsArgs
  }

  // Custom InputTypes
  /**
   * PgUserCountOutputType without action
   */
  export type PgUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUserCountOutputType
     */
    select?: PgUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PgUserCountOutputType without action
   */
  export type PgUserCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgResumeWhereInput
  }

  /**
   * PgUserCountOutputType without action
   */
  export type PgUserCountOutputTypeCountInterviewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgInterviewLogWhereInput
  }

  /**
   * PgUserCountOutputType without action
   */
  export type PgUserCountOutputTypeCountSupportTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgSupportTicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PgUser
   */

  export type AggregatePgUser = {
    _count: PgUserCountAggregateOutputType | null
    _min: PgUserMinAggregateOutputType | null
    _max: PgUserMaxAggregateOutputType | null
  }

  export type PgUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type PgUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type PgUserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    createdAt: number
    _all: number
  }


  export type PgUserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type PgUserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type PgUserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    _all?: true
  }

  export type PgUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgUser to aggregate.
     */
    where?: PgUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgUsers to fetch.
     */
    orderBy?: PgUserOrderByWithRelationInput | PgUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PgUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PgUsers
    **/
    _count?: true | PgUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PgUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PgUserMaxAggregateInputType
  }

  export type GetPgUserAggregateType<T extends PgUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePgUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePgUser[P]>
      : GetScalarType<T[P], AggregatePgUser[P]>
  }




  export type PgUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgUserWhereInput
    orderBy?: PgUserOrderByWithAggregationInput | PgUserOrderByWithAggregationInput[]
    by: PgUserScalarFieldEnum[] | PgUserScalarFieldEnum
    having?: PgUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PgUserCountAggregateInputType | true
    _min?: PgUserMinAggregateInputType
    _max?: PgUserMaxAggregateInputType
  }

  export type PgUserGroupByOutputType = {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    createdAt: Date
    _count: PgUserCountAggregateOutputType | null
    _min: PgUserMinAggregateOutputType | null
    _max: PgUserMaxAggregateOutputType | null
  }

  type GetPgUserGroupByPayload<T extends PgUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PgUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PgUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PgUserGroupByOutputType[P]>
            : GetScalarType<T[P], PgUserGroupByOutputType[P]>
        }
      >
    >


  export type PgUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    resumes?: boolean | PgUser$resumesArgs<ExtArgs>
    interviewLogs?: boolean | PgUser$interviewLogsArgs<ExtArgs>
    supportTickets?: boolean | PgUser$supportTicketsArgs<ExtArgs>
    _count?: boolean | PgUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pgUser"]>

  export type PgUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pgUser"]>

  export type PgUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pgUser"]>

  export type PgUserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }

  export type PgUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "createdAt", ExtArgs["result"]["pgUser"]>
  export type PgUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | PgUser$resumesArgs<ExtArgs>
    interviewLogs?: boolean | PgUser$interviewLogsArgs<ExtArgs>
    supportTickets?: boolean | PgUser$supportTicketsArgs<ExtArgs>
    _count?: boolean | PgUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PgUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PgUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PgUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PgUser"
    objects: {
      resumes: Prisma.$PgResumePayload<ExtArgs>[]
      interviewLogs: Prisma.$PgInterviewLogPayload<ExtArgs>[]
      supportTickets: Prisma.$PgSupportTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string | null
      lastName: string | null
      createdAt: Date
    }, ExtArgs["result"]["pgUser"]>
    composites: {}
  }

  type PgUserGetPayload<S extends boolean | null | undefined | PgUserDefaultArgs> = $Result.GetResult<Prisma.$PgUserPayload, S>

  type PgUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PgUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PgUserCountAggregateInputType | true
    }

  export interface PgUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PgUser'], meta: { name: 'PgUser' } }
    /**
     * Find zero or one PgUser that matches the filter.
     * @param {PgUserFindUniqueArgs} args - Arguments to find a PgUser
     * @example
     * // Get one PgUser
     * const pgUser = await prisma.pgUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PgUserFindUniqueArgs>(args: SelectSubset<T, PgUserFindUniqueArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PgUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PgUserFindUniqueOrThrowArgs} args - Arguments to find a PgUser
     * @example
     * // Get one PgUser
     * const pgUser = await prisma.pgUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PgUserFindUniqueOrThrowArgs>(args: SelectSubset<T, PgUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgUserFindFirstArgs} args - Arguments to find a PgUser
     * @example
     * // Get one PgUser
     * const pgUser = await prisma.pgUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PgUserFindFirstArgs>(args?: SelectSubset<T, PgUserFindFirstArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgUserFindFirstOrThrowArgs} args - Arguments to find a PgUser
     * @example
     * // Get one PgUser
     * const pgUser = await prisma.pgUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PgUserFindFirstOrThrowArgs>(args?: SelectSubset<T, PgUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PgUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PgUsers
     * const pgUsers = await prisma.pgUser.findMany()
     * 
     * // Get first 10 PgUsers
     * const pgUsers = await prisma.pgUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pgUserWithIdOnly = await prisma.pgUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PgUserFindManyArgs>(args?: SelectSubset<T, PgUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PgUser.
     * @param {PgUserCreateArgs} args - Arguments to create a PgUser.
     * @example
     * // Create one PgUser
     * const PgUser = await prisma.pgUser.create({
     *   data: {
     *     // ... data to create a PgUser
     *   }
     * })
     * 
     */
    create<T extends PgUserCreateArgs>(args: SelectSubset<T, PgUserCreateArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PgUsers.
     * @param {PgUserCreateManyArgs} args - Arguments to create many PgUsers.
     * @example
     * // Create many PgUsers
     * const pgUser = await prisma.pgUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PgUserCreateManyArgs>(args?: SelectSubset<T, PgUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PgUsers and returns the data saved in the database.
     * @param {PgUserCreateManyAndReturnArgs} args - Arguments to create many PgUsers.
     * @example
     * // Create many PgUsers
     * const pgUser = await prisma.pgUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PgUsers and only return the `id`
     * const pgUserWithIdOnly = await prisma.pgUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PgUserCreateManyAndReturnArgs>(args?: SelectSubset<T, PgUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PgUser.
     * @param {PgUserDeleteArgs} args - Arguments to delete one PgUser.
     * @example
     * // Delete one PgUser
     * const PgUser = await prisma.pgUser.delete({
     *   where: {
     *     // ... filter to delete one PgUser
     *   }
     * })
     * 
     */
    delete<T extends PgUserDeleteArgs>(args: SelectSubset<T, PgUserDeleteArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PgUser.
     * @param {PgUserUpdateArgs} args - Arguments to update one PgUser.
     * @example
     * // Update one PgUser
     * const pgUser = await prisma.pgUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PgUserUpdateArgs>(args: SelectSubset<T, PgUserUpdateArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PgUsers.
     * @param {PgUserDeleteManyArgs} args - Arguments to filter PgUsers to delete.
     * @example
     * // Delete a few PgUsers
     * const { count } = await prisma.pgUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PgUserDeleteManyArgs>(args?: SelectSubset<T, PgUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PgUsers
     * const pgUser = await prisma.pgUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PgUserUpdateManyArgs>(args: SelectSubset<T, PgUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgUsers and returns the data updated in the database.
     * @param {PgUserUpdateManyAndReturnArgs} args - Arguments to update many PgUsers.
     * @example
     * // Update many PgUsers
     * const pgUser = await prisma.pgUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PgUsers and only return the `id`
     * const pgUserWithIdOnly = await prisma.pgUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends PgUserUpdateManyAndReturnArgs>(args: SelectSubset<T, PgUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PgUser.
     * @param {PgUserUpsertArgs} args - Arguments to update or create a PgUser.
     * @example
     * // Update or create a PgUser
     * const pgUser = await prisma.pgUser.upsert({
     *   create: {
     *     // ... data to create a PgUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PgUser we want to update
     *   }
     * })
     */
    upsert<T extends PgUserUpsertArgs>(args: SelectSubset<T, PgUserUpsertArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PgUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgUserCountArgs} args - Arguments to filter PgUsers to count.
     * @example
     * // Count the number of PgUsers
     * const count = await prisma.pgUser.count({
     *   where: {
     *     // ... the filter for the PgUsers we want to count
     *   }
     * })
    **/
    count<T extends PgUserCountArgs>(
      args?: Subset<T, PgUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PgUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PgUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PgUserAggregateArgs>(args: Subset<T, PgUserAggregateArgs>): Prisma.PrismaPromise<GetPgUserAggregateType<T>>

    /**
     * Group by PgUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgUserGroupByArgs} args - Group by arguments.
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
      T extends PgUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PgUserGroupByArgs['orderBy'] }
        : { orderBy?: PgUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PgUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPgUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PgUser model
   */
  readonly fields: PgUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PgUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PgUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumes<T extends PgUser$resumesArgs<ExtArgs> = {}>(args?: Subset<T, PgUser$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewLogs<T extends PgUser$interviewLogsArgs<ExtArgs> = {}>(args?: Subset<T, PgUser$interviewLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supportTickets<T extends PgUser$supportTicketsArgs<ExtArgs> = {}>(args?: Subset<T, PgUser$supportTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PgUser model
   */
  interface PgUserFieldRefs {
    readonly id: FieldRef<"PgUser", 'String'>
    readonly email: FieldRef<"PgUser", 'String'>
    readonly firstName: FieldRef<"PgUser", 'String'>
    readonly lastName: FieldRef<"PgUser", 'String'>
    readonly createdAt: FieldRef<"PgUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PgUser findUnique
   */
  export type PgUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * Filter, which PgUser to fetch.
     */
    where: PgUserWhereUniqueInput
  }

  /**
   * PgUser findUniqueOrThrow
   */
  export type PgUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * Filter, which PgUser to fetch.
     */
    where: PgUserWhereUniqueInput
  }

  /**
   * PgUser findFirst
   */
  export type PgUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * Filter, which PgUser to fetch.
     */
    where?: PgUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgUsers to fetch.
     */
    orderBy?: PgUserOrderByWithRelationInput | PgUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgUsers.
     */
    cursor?: PgUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgUsers.
     */
    distinct?: PgUserScalarFieldEnum | PgUserScalarFieldEnum[]
  }

  /**
   * PgUser findFirstOrThrow
   */
  export type PgUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * Filter, which PgUser to fetch.
     */
    where?: PgUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgUsers to fetch.
     */
    orderBy?: PgUserOrderByWithRelationInput | PgUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgUsers.
     */
    cursor?: PgUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgUsers.
     */
    distinct?: PgUserScalarFieldEnum | PgUserScalarFieldEnum[]
  }

  /**
   * PgUser findMany
   */
  export type PgUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * Filter, which PgUsers to fetch.
     */
    where?: PgUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgUsers to fetch.
     */
    orderBy?: PgUserOrderByWithRelationInput | PgUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PgUsers.
     */
    cursor?: PgUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgUsers.
     */
    distinct?: PgUserScalarFieldEnum | PgUserScalarFieldEnum[]
  }

  /**
   * PgUser create
   */
  export type PgUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * The data needed to create a PgUser.
     */
    data: XOR<PgUserCreateInput, PgUserUncheckedCreateInput>
  }

  /**
   * PgUser createMany
   */
  export type PgUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PgUsers.
     */
    data: PgUserCreateManyInput | PgUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PgUser createManyAndReturn
   */
  export type PgUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * The data used to create many PgUsers.
     */
    data: PgUserCreateManyInput | PgUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PgUser update
   */
  export type PgUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * The data needed to update a PgUser.
     */
    data: XOR<PgUserUpdateInput, PgUserUncheckedUpdateInput>
    /**
     * Choose, which PgUser to update.
     */
    where: PgUserWhereUniqueInput
  }

  /**
   * PgUser updateMany
   */
  export type PgUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PgUsers.
     */
    data: XOR<PgUserUpdateManyMutationInput, PgUserUncheckedUpdateManyInput>
    /**
     * Filter which PgUsers to update
     */
    where?: PgUserWhereInput
    /**
     * Limit how many PgUsers to update.
     */
    limit?: number
  }

  /**
   * PgUser updateManyAndReturn
   */
  export type PgUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * The data used to update PgUsers.
     */
    data: XOR<PgUserUpdateManyMutationInput, PgUserUncheckedUpdateManyInput>
    /**
     * Filter which PgUsers to update
     */
    where?: PgUserWhereInput
    /**
     * Limit how many PgUsers to update.
     */
    limit?: number
  }

  /**
   * PgUser upsert
   */
  export type PgUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * The filter to search for the PgUser to update in case it exists.
     */
    where: PgUserWhereUniqueInput
    /**
     * In case the PgUser found by the `where` argument doesn't exist, create a new PgUser with this data.
     */
    create: XOR<PgUserCreateInput, PgUserUncheckedCreateInput>
    /**
     * In case the PgUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PgUserUpdateInput, PgUserUncheckedUpdateInput>
  }

  /**
   * PgUser delete
   */
  export type PgUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    /**
     * Filter which PgUser to delete.
     */
    where: PgUserWhereUniqueInput
  }

  /**
   * PgUser deleteMany
   */
  export type PgUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgUsers to delete
     */
    where?: PgUserWhereInput
    /**
     * Limit how many PgUsers to delete.
     */
    limit?: number
  }

  /**
   * PgUser.resumes
   */
  export type PgUser$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    where?: PgResumeWhereInput
    orderBy?: PgResumeOrderByWithRelationInput | PgResumeOrderByWithRelationInput[]
    cursor?: PgResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PgResumeScalarFieldEnum | PgResumeScalarFieldEnum[]
  }

  /**
   * PgUser.interviewLogs
   */
  export type PgUser$interviewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    where?: PgInterviewLogWhereInput
    orderBy?: PgInterviewLogOrderByWithRelationInput | PgInterviewLogOrderByWithRelationInput[]
    cursor?: PgInterviewLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PgInterviewLogScalarFieldEnum | PgInterviewLogScalarFieldEnum[]
  }

  /**
   * PgUser.supportTickets
   */
  export type PgUser$supportTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    where?: PgSupportTicketWhereInput
    orderBy?: PgSupportTicketOrderByWithRelationInput | PgSupportTicketOrderByWithRelationInput[]
    cursor?: PgSupportTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PgSupportTicketScalarFieldEnum | PgSupportTicketScalarFieldEnum[]
  }

  /**
   * PgUser without action
   */
  export type PgUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
  }


  /**
   * Model PgResume
   */

  export type AggregatePgResume = {
    _count: PgResumeCountAggregateOutputType | null
    _avg: PgResumeAvgAggregateOutputType | null
    _sum: PgResumeSumAggregateOutputType | null
    _min: PgResumeMinAggregateOutputType | null
    _max: PgResumeMaxAggregateOutputType | null
  }

  export type PgResumeAvgAggregateOutputType = {
    atsScore: number | null
    keywordPct: number | null
    formattingPct: number | null
    improvementScore: number | null
  }

  export type PgResumeSumAggregateOutputType = {
    atsScore: number | null
    keywordPct: number | null
    formattingPct: number | null
    improvementScore: number | null
  }

  export type PgResumeMinAggregateOutputType = {
    mongodbId: string | null
    userId: string | null
    atsScore: number | null
    keywordPct: number | null
    formattingPct: number | null
    improvementScore: number | null
    createdAt: Date | null
  }

  export type PgResumeMaxAggregateOutputType = {
    mongodbId: string | null
    userId: string | null
    atsScore: number | null
    keywordPct: number | null
    formattingPct: number | null
    improvementScore: number | null
    createdAt: Date | null
  }

  export type PgResumeCountAggregateOutputType = {
    mongodbId: number
    userId: number
    atsScore: number
    keywordPct: number
    formattingPct: number
    improvementScore: number
    missingSkills: number
    createdAt: number
    _all: number
  }


  export type PgResumeAvgAggregateInputType = {
    atsScore?: true
    keywordPct?: true
    formattingPct?: true
    improvementScore?: true
  }

  export type PgResumeSumAggregateInputType = {
    atsScore?: true
    keywordPct?: true
    formattingPct?: true
    improvementScore?: true
  }

  export type PgResumeMinAggregateInputType = {
    mongodbId?: true
    userId?: true
    atsScore?: true
    keywordPct?: true
    formattingPct?: true
    improvementScore?: true
    createdAt?: true
  }

  export type PgResumeMaxAggregateInputType = {
    mongodbId?: true
    userId?: true
    atsScore?: true
    keywordPct?: true
    formattingPct?: true
    improvementScore?: true
    createdAt?: true
  }

  export type PgResumeCountAggregateInputType = {
    mongodbId?: true
    userId?: true
    atsScore?: true
    keywordPct?: true
    formattingPct?: true
    improvementScore?: true
    missingSkills?: true
    createdAt?: true
    _all?: true
  }

  export type PgResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgResume to aggregate.
     */
    where?: PgResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgResumes to fetch.
     */
    orderBy?: PgResumeOrderByWithRelationInput | PgResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PgResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PgResumes
    **/
    _count?: true | PgResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PgResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PgResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PgResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PgResumeMaxAggregateInputType
  }

  export type GetPgResumeAggregateType<T extends PgResumeAggregateArgs> = {
        [P in keyof T & keyof AggregatePgResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePgResume[P]>
      : GetScalarType<T[P], AggregatePgResume[P]>
  }




  export type PgResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgResumeWhereInput
    orderBy?: PgResumeOrderByWithAggregationInput | PgResumeOrderByWithAggregationInput[]
    by: PgResumeScalarFieldEnum[] | PgResumeScalarFieldEnum
    having?: PgResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PgResumeCountAggregateInputType | true
    _avg?: PgResumeAvgAggregateInputType
    _sum?: PgResumeSumAggregateInputType
    _min?: PgResumeMinAggregateInputType
    _max?: PgResumeMaxAggregateInputType
  }

  export type PgResumeGroupByOutputType = {
    mongodbId: string
    userId: string
    atsScore: number | null
    keywordPct: number | null
    formattingPct: number | null
    improvementScore: number | null
    missingSkills: string[]
    createdAt: Date
    _count: PgResumeCountAggregateOutputType | null
    _avg: PgResumeAvgAggregateOutputType | null
    _sum: PgResumeSumAggregateOutputType | null
    _min: PgResumeMinAggregateOutputType | null
    _max: PgResumeMaxAggregateOutputType | null
  }

  type GetPgResumeGroupByPayload<T extends PgResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PgResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PgResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PgResumeGroupByOutputType[P]>
            : GetScalarType<T[P], PgResumeGroupByOutputType[P]>
        }
      >
    >


  export type PgResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    atsScore?: boolean
    keywordPct?: boolean
    formattingPct?: boolean
    improvementScore?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pgResume"]>

  export type PgResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    atsScore?: boolean
    keywordPct?: boolean
    formattingPct?: boolean
    improvementScore?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pgResume"]>

  export type PgResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    atsScore?: boolean
    keywordPct?: boolean
    formattingPct?: boolean
    improvementScore?: boolean
    missingSkills?: boolean
    createdAt?: boolean
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pgResume"]>

  export type PgResumeSelectScalar = {
    mongodbId?: boolean
    userId?: boolean
    atsScore?: boolean
    keywordPct?: boolean
    formattingPct?: boolean
    improvementScore?: boolean
    missingSkills?: boolean
    createdAt?: boolean
  }

  export type PgResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mongodbId" | "userId" | "atsScore" | "keywordPct" | "formattingPct" | "improvementScore" | "missingSkills" | "createdAt", ExtArgs["result"]["pgResume"]>
  export type PgResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }
  export type PgResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }
  export type PgResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }

  export type $PgResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PgResume"
    objects: {
      user: Prisma.$PgUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mongodbId: string
      userId: string
      atsScore: number | null
      keywordPct: number | null
      formattingPct: number | null
      improvementScore: number | null
      missingSkills: string[]
      createdAt: Date
    }, ExtArgs["result"]["pgResume"]>
    composites: {}
  }

  type PgResumeGetPayload<S extends boolean | null | undefined | PgResumeDefaultArgs> = $Result.GetResult<Prisma.$PgResumePayload, S>

  type PgResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PgResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PgResumeCountAggregateInputType | true
    }

  export interface PgResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PgResume'], meta: { name: 'PgResume' } }
    /**
     * Find zero or one PgResume that matches the filter.
     * @param {PgResumeFindUniqueArgs} args - Arguments to find a PgResume
     * @example
     * // Get one PgResume
     * const pgResume = await prisma.pgResume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PgResumeFindUniqueArgs>(args: SelectSubset<T, PgResumeFindUniqueArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PgResume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PgResumeFindUniqueOrThrowArgs} args - Arguments to find a PgResume
     * @example
     * // Get one PgResume
     * const pgResume = await prisma.pgResume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PgResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, PgResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgResume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgResumeFindFirstArgs} args - Arguments to find a PgResume
     * @example
     * // Get one PgResume
     * const pgResume = await prisma.pgResume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PgResumeFindFirstArgs>(args?: SelectSubset<T, PgResumeFindFirstArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgResume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgResumeFindFirstOrThrowArgs} args - Arguments to find a PgResume
     * @example
     * // Get one PgResume
     * const pgResume = await prisma.pgResume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PgResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, PgResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PgResumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PgResumes
     * const pgResumes = await prisma.pgResume.findMany()
     * 
     * // Get first 10 PgResumes
     * const pgResumes = await prisma.pgResume.findMany({ take: 10 })
     * 
     * // Only select the `mongodbId`
     * const pgResumeWithMongodbIdOnly = await prisma.pgResume.findMany({ select: { mongodbId: true } })
     * 
     */
    findMany<T extends PgResumeFindManyArgs>(args?: SelectSubset<T, PgResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PgResume.
     * @param {PgResumeCreateArgs} args - Arguments to create a PgResume.
     * @example
     * // Create one PgResume
     * const PgResume = await prisma.pgResume.create({
     *   data: {
     *     // ... data to create a PgResume
     *   }
     * })
     * 
     */
    create<T extends PgResumeCreateArgs>(args: SelectSubset<T, PgResumeCreateArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PgResumes.
     * @param {PgResumeCreateManyArgs} args - Arguments to create many PgResumes.
     * @example
     * // Create many PgResumes
     * const pgResume = await prisma.pgResume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PgResumeCreateManyArgs>(args?: SelectSubset<T, PgResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PgResumes and returns the data saved in the database.
     * @param {PgResumeCreateManyAndReturnArgs} args - Arguments to create many PgResumes.
     * @example
     * // Create many PgResumes
     * const pgResume = await prisma.pgResume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PgResumes and only return the `mongodbId`
     * const pgResumeWithMongodbIdOnly = await prisma.pgResume.createManyAndReturn({
     *   select: { mongodbId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PgResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, PgResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PgResume.
     * @param {PgResumeDeleteArgs} args - Arguments to delete one PgResume.
     * @example
     * // Delete one PgResume
     * const PgResume = await prisma.pgResume.delete({
     *   where: {
     *     // ... filter to delete one PgResume
     *   }
     * })
     * 
     */
    delete<T extends PgResumeDeleteArgs>(args: SelectSubset<T, PgResumeDeleteArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PgResume.
     * @param {PgResumeUpdateArgs} args - Arguments to update one PgResume.
     * @example
     * // Update one PgResume
     * const pgResume = await prisma.pgResume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PgResumeUpdateArgs>(args: SelectSubset<T, PgResumeUpdateArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PgResumes.
     * @param {PgResumeDeleteManyArgs} args - Arguments to filter PgResumes to delete.
     * @example
     * // Delete a few PgResumes
     * const { count } = await prisma.pgResume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PgResumeDeleteManyArgs>(args?: SelectSubset<T, PgResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgResumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PgResumes
     * const pgResume = await prisma.pgResume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PgResumeUpdateManyArgs>(args: SelectSubset<T, PgResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgResumes and returns the data updated in the database.
     * @param {PgResumeUpdateManyAndReturnArgs} args - Arguments to update many PgResumes.
     * @example
     * // Update many PgResumes
     * const pgResume = await prisma.pgResume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PgResumes and only return the `mongodbId`
     * const pgResumeWithMongodbIdOnly = await prisma.pgResume.updateManyAndReturn({
     *   select: { mongodbId: true },
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
    updateManyAndReturn<T extends PgResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, PgResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PgResume.
     * @param {PgResumeUpsertArgs} args - Arguments to update or create a PgResume.
     * @example
     * // Update or create a PgResume
     * const pgResume = await prisma.pgResume.upsert({
     *   create: {
     *     // ... data to create a PgResume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PgResume we want to update
     *   }
     * })
     */
    upsert<T extends PgResumeUpsertArgs>(args: SelectSubset<T, PgResumeUpsertArgs<ExtArgs>>): Prisma__PgResumeClient<$Result.GetResult<Prisma.$PgResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PgResumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgResumeCountArgs} args - Arguments to filter PgResumes to count.
     * @example
     * // Count the number of PgResumes
     * const count = await prisma.pgResume.count({
     *   where: {
     *     // ... the filter for the PgResumes we want to count
     *   }
     * })
    **/
    count<T extends PgResumeCountArgs>(
      args?: Subset<T, PgResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PgResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PgResume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PgResumeAggregateArgs>(args: Subset<T, PgResumeAggregateArgs>): Prisma.PrismaPromise<GetPgResumeAggregateType<T>>

    /**
     * Group by PgResume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgResumeGroupByArgs} args - Group by arguments.
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
      T extends PgResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PgResumeGroupByArgs['orderBy'] }
        : { orderBy?: PgResumeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PgResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPgResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PgResume model
   */
  readonly fields: PgResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PgResume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PgResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PgUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PgUserDefaultArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PgResume model
   */
  interface PgResumeFieldRefs {
    readonly mongodbId: FieldRef<"PgResume", 'String'>
    readonly userId: FieldRef<"PgResume", 'String'>
    readonly atsScore: FieldRef<"PgResume", 'Int'>
    readonly keywordPct: FieldRef<"PgResume", 'Int'>
    readonly formattingPct: FieldRef<"PgResume", 'Int'>
    readonly improvementScore: FieldRef<"PgResume", 'Int'>
    readonly missingSkills: FieldRef<"PgResume", 'String[]'>
    readonly createdAt: FieldRef<"PgResume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PgResume findUnique
   */
  export type PgResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * Filter, which PgResume to fetch.
     */
    where: PgResumeWhereUniqueInput
  }

  /**
   * PgResume findUniqueOrThrow
   */
  export type PgResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * Filter, which PgResume to fetch.
     */
    where: PgResumeWhereUniqueInput
  }

  /**
   * PgResume findFirst
   */
  export type PgResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * Filter, which PgResume to fetch.
     */
    where?: PgResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgResumes to fetch.
     */
    orderBy?: PgResumeOrderByWithRelationInput | PgResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgResumes.
     */
    cursor?: PgResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgResumes.
     */
    distinct?: PgResumeScalarFieldEnum | PgResumeScalarFieldEnum[]
  }

  /**
   * PgResume findFirstOrThrow
   */
  export type PgResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * Filter, which PgResume to fetch.
     */
    where?: PgResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgResumes to fetch.
     */
    orderBy?: PgResumeOrderByWithRelationInput | PgResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgResumes.
     */
    cursor?: PgResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgResumes.
     */
    distinct?: PgResumeScalarFieldEnum | PgResumeScalarFieldEnum[]
  }

  /**
   * PgResume findMany
   */
  export type PgResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * Filter, which PgResumes to fetch.
     */
    where?: PgResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgResumes to fetch.
     */
    orderBy?: PgResumeOrderByWithRelationInput | PgResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PgResumes.
     */
    cursor?: PgResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgResumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgResumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgResumes.
     */
    distinct?: PgResumeScalarFieldEnum | PgResumeScalarFieldEnum[]
  }

  /**
   * PgResume create
   */
  export type PgResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a PgResume.
     */
    data: XOR<PgResumeCreateInput, PgResumeUncheckedCreateInput>
  }

  /**
   * PgResume createMany
   */
  export type PgResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PgResumes.
     */
    data: PgResumeCreateManyInput | PgResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PgResume createManyAndReturn
   */
  export type PgResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * The data used to create many PgResumes.
     */
    data: PgResumeCreateManyInput | PgResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PgResume update
   */
  export type PgResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a PgResume.
     */
    data: XOR<PgResumeUpdateInput, PgResumeUncheckedUpdateInput>
    /**
     * Choose, which PgResume to update.
     */
    where: PgResumeWhereUniqueInput
  }

  /**
   * PgResume updateMany
   */
  export type PgResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PgResumes.
     */
    data: XOR<PgResumeUpdateManyMutationInput, PgResumeUncheckedUpdateManyInput>
    /**
     * Filter which PgResumes to update
     */
    where?: PgResumeWhereInput
    /**
     * Limit how many PgResumes to update.
     */
    limit?: number
  }

  /**
   * PgResume updateManyAndReturn
   */
  export type PgResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * The data used to update PgResumes.
     */
    data: XOR<PgResumeUpdateManyMutationInput, PgResumeUncheckedUpdateManyInput>
    /**
     * Filter which PgResumes to update
     */
    where?: PgResumeWhereInput
    /**
     * Limit how many PgResumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PgResume upsert
   */
  export type PgResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the PgResume to update in case it exists.
     */
    where: PgResumeWhereUniqueInput
    /**
     * In case the PgResume found by the `where` argument doesn't exist, create a new PgResume with this data.
     */
    create: XOR<PgResumeCreateInput, PgResumeUncheckedCreateInput>
    /**
     * In case the PgResume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PgResumeUpdateInput, PgResumeUncheckedUpdateInput>
  }

  /**
   * PgResume delete
   */
  export type PgResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
    /**
     * Filter which PgResume to delete.
     */
    where: PgResumeWhereUniqueInput
  }

  /**
   * PgResume deleteMany
   */
  export type PgResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgResumes to delete
     */
    where?: PgResumeWhereInput
    /**
     * Limit how many PgResumes to delete.
     */
    limit?: number
  }

  /**
   * PgResume without action
   */
  export type PgResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgResume
     */
    select?: PgResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgResume
     */
    omit?: PgResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgResumeInclude<ExtArgs> | null
  }


  /**
   * Model PgInterviewLog
   */

  export type AggregatePgInterviewLog = {
    _count: PgInterviewLogCountAggregateOutputType | null
    _avg: PgInterviewLogAvgAggregateOutputType | null
    _sum: PgInterviewLogSumAggregateOutputType | null
    _min: PgInterviewLogMinAggregateOutputType | null
    _max: PgInterviewLogMaxAggregateOutputType | null
  }

  export type PgInterviewLogAvgAggregateOutputType = {
    preparationLevel: number | null
    technicalRating: number | null
    problemSolvingRating: number | null
    communicationRating: number | null
    behaviouralRating: number | null
    confidenceRating: number | null
    nervousnessLevel: number | null
    jobFitScore: number | null
    performanceScore: number | null
    overallSelfRating: number | null
  }

  export type PgInterviewLogSumAggregateOutputType = {
    preparationLevel: number | null
    technicalRating: number | null
    problemSolvingRating: number | null
    communicationRating: number | null
    behaviouralRating: number | null
    confidenceRating: number | null
    nervousnessLevel: number | null
    jobFitScore: number | null
    performanceScore: number | null
    overallSelfRating: number | null
  }

  export type PgInterviewLogMinAggregateOutputType = {
    mongodbId: string | null
    userId: string | null
    interviewDate: Date | null
    companyName: string | null
    jobTitle: string | null
    interviewType: string | null
    outcome: string | null
    difficultyLevel: string | null
    preparationLevel: number | null
    technicalRating: number | null
    problemSolvingRating: number | null
    communicationRating: number | null
    behaviouralRating: number | null
    confidenceRating: number | null
    nervousnessLevel: number | null
    usedStar: boolean | null
    explainedClearly: boolean | null
    usedRealExamples: boolean | null
    jobFitScore: number | null
    performanceScore: number | null
    overallSelfRating: number | null
    createdAt: Date | null
  }

  export type PgInterviewLogMaxAggregateOutputType = {
    mongodbId: string | null
    userId: string | null
    interviewDate: Date | null
    companyName: string | null
    jobTitle: string | null
    interviewType: string | null
    outcome: string | null
    difficultyLevel: string | null
    preparationLevel: number | null
    technicalRating: number | null
    problemSolvingRating: number | null
    communicationRating: number | null
    behaviouralRating: number | null
    confidenceRating: number | null
    nervousnessLevel: number | null
    usedStar: boolean | null
    explainedClearly: boolean | null
    usedRealExamples: boolean | null
    jobFitScore: number | null
    performanceScore: number | null
    overallSelfRating: number | null
    createdAt: Date | null
  }

  export type PgInterviewLogCountAggregateOutputType = {
    mongodbId: number
    userId: number
    interviewDate: number
    companyName: number
    jobTitle: number
    interviewType: number
    outcome: number
    difficultyLevel: number
    preparationLevel: number
    technicalRating: number
    problemSolvingRating: number
    communicationRating: number
    behaviouralRating: number
    confidenceRating: number
    nervousnessLevel: number
    usedStar: number
    explainedClearly: number
    usedRealExamples: number
    jobFitScore: number
    performanceScore: number
    overallSelfRating: number
    createdAt: number
    _all: number
  }


  export type PgInterviewLogAvgAggregateInputType = {
    preparationLevel?: true
    technicalRating?: true
    problemSolvingRating?: true
    communicationRating?: true
    behaviouralRating?: true
    confidenceRating?: true
    nervousnessLevel?: true
    jobFitScore?: true
    performanceScore?: true
    overallSelfRating?: true
  }

  export type PgInterviewLogSumAggregateInputType = {
    preparationLevel?: true
    technicalRating?: true
    problemSolvingRating?: true
    communicationRating?: true
    behaviouralRating?: true
    confidenceRating?: true
    nervousnessLevel?: true
    jobFitScore?: true
    performanceScore?: true
    overallSelfRating?: true
  }

  export type PgInterviewLogMinAggregateInputType = {
    mongodbId?: true
    userId?: true
    interviewDate?: true
    companyName?: true
    jobTitle?: true
    interviewType?: true
    outcome?: true
    difficultyLevel?: true
    preparationLevel?: true
    technicalRating?: true
    problemSolvingRating?: true
    communicationRating?: true
    behaviouralRating?: true
    confidenceRating?: true
    nervousnessLevel?: true
    usedStar?: true
    explainedClearly?: true
    usedRealExamples?: true
    jobFitScore?: true
    performanceScore?: true
    overallSelfRating?: true
    createdAt?: true
  }

  export type PgInterviewLogMaxAggregateInputType = {
    mongodbId?: true
    userId?: true
    interviewDate?: true
    companyName?: true
    jobTitle?: true
    interviewType?: true
    outcome?: true
    difficultyLevel?: true
    preparationLevel?: true
    technicalRating?: true
    problemSolvingRating?: true
    communicationRating?: true
    behaviouralRating?: true
    confidenceRating?: true
    nervousnessLevel?: true
    usedStar?: true
    explainedClearly?: true
    usedRealExamples?: true
    jobFitScore?: true
    performanceScore?: true
    overallSelfRating?: true
    createdAt?: true
  }

  export type PgInterviewLogCountAggregateInputType = {
    mongodbId?: true
    userId?: true
    interviewDate?: true
    companyName?: true
    jobTitle?: true
    interviewType?: true
    outcome?: true
    difficultyLevel?: true
    preparationLevel?: true
    technicalRating?: true
    problemSolvingRating?: true
    communicationRating?: true
    behaviouralRating?: true
    confidenceRating?: true
    nervousnessLevel?: true
    usedStar?: true
    explainedClearly?: true
    usedRealExamples?: true
    jobFitScore?: true
    performanceScore?: true
    overallSelfRating?: true
    createdAt?: true
    _all?: true
  }

  export type PgInterviewLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgInterviewLog to aggregate.
     */
    where?: PgInterviewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgInterviewLogs to fetch.
     */
    orderBy?: PgInterviewLogOrderByWithRelationInput | PgInterviewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PgInterviewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgInterviewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgInterviewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PgInterviewLogs
    **/
    _count?: true | PgInterviewLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PgInterviewLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PgInterviewLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PgInterviewLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PgInterviewLogMaxAggregateInputType
  }

  export type GetPgInterviewLogAggregateType<T extends PgInterviewLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePgInterviewLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePgInterviewLog[P]>
      : GetScalarType<T[P], AggregatePgInterviewLog[P]>
  }




  export type PgInterviewLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgInterviewLogWhereInput
    orderBy?: PgInterviewLogOrderByWithAggregationInput | PgInterviewLogOrderByWithAggregationInput[]
    by: PgInterviewLogScalarFieldEnum[] | PgInterviewLogScalarFieldEnum
    having?: PgInterviewLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PgInterviewLogCountAggregateInputType | true
    _avg?: PgInterviewLogAvgAggregateInputType
    _sum?: PgInterviewLogSumAggregateInputType
    _min?: PgInterviewLogMinAggregateInputType
    _max?: PgInterviewLogMaxAggregateInputType
  }

  export type PgInterviewLogGroupByOutputType = {
    mongodbId: string
    userId: string
    interviewDate: Date | null
    companyName: string | null
    jobTitle: string | null
    interviewType: string | null
    outcome: string | null
    difficultyLevel: string | null
    preparationLevel: number | null
    technicalRating: number | null
    problemSolvingRating: number | null
    communicationRating: number | null
    behaviouralRating: number | null
    confidenceRating: number | null
    nervousnessLevel: number | null
    usedStar: boolean | null
    explainedClearly: boolean | null
    usedRealExamples: boolean | null
    jobFitScore: number | null
    performanceScore: number | null
    overallSelfRating: number | null
    createdAt: Date
    _count: PgInterviewLogCountAggregateOutputType | null
    _avg: PgInterviewLogAvgAggregateOutputType | null
    _sum: PgInterviewLogSumAggregateOutputType | null
    _min: PgInterviewLogMinAggregateOutputType | null
    _max: PgInterviewLogMaxAggregateOutputType | null
  }

  type GetPgInterviewLogGroupByPayload<T extends PgInterviewLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PgInterviewLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PgInterviewLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PgInterviewLogGroupByOutputType[P]>
            : GetScalarType<T[P], PgInterviewLogGroupByOutputType[P]>
        }
      >
    >


  export type PgInterviewLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    interviewDate?: boolean
    companyName?: boolean
    jobTitle?: boolean
    interviewType?: boolean
    outcome?: boolean
    difficultyLevel?: boolean
    preparationLevel?: boolean
    technicalRating?: boolean
    problemSolvingRating?: boolean
    communicationRating?: boolean
    behaviouralRating?: boolean
    confidenceRating?: boolean
    nervousnessLevel?: boolean
    usedStar?: boolean
    explainedClearly?: boolean
    usedRealExamples?: boolean
    jobFitScore?: boolean
    performanceScore?: boolean
    overallSelfRating?: boolean
    createdAt?: boolean
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pgInterviewLog"]>

  export type PgInterviewLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    interviewDate?: boolean
    companyName?: boolean
    jobTitle?: boolean
    interviewType?: boolean
    outcome?: boolean
    difficultyLevel?: boolean
    preparationLevel?: boolean
    technicalRating?: boolean
    problemSolvingRating?: boolean
    communicationRating?: boolean
    behaviouralRating?: boolean
    confidenceRating?: boolean
    nervousnessLevel?: boolean
    usedStar?: boolean
    explainedClearly?: boolean
    usedRealExamples?: boolean
    jobFitScore?: boolean
    performanceScore?: boolean
    overallSelfRating?: boolean
    createdAt?: boolean
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pgInterviewLog"]>

  export type PgInterviewLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    interviewDate?: boolean
    companyName?: boolean
    jobTitle?: boolean
    interviewType?: boolean
    outcome?: boolean
    difficultyLevel?: boolean
    preparationLevel?: boolean
    technicalRating?: boolean
    problemSolvingRating?: boolean
    communicationRating?: boolean
    behaviouralRating?: boolean
    confidenceRating?: boolean
    nervousnessLevel?: boolean
    usedStar?: boolean
    explainedClearly?: boolean
    usedRealExamples?: boolean
    jobFitScore?: boolean
    performanceScore?: boolean
    overallSelfRating?: boolean
    createdAt?: boolean
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pgInterviewLog"]>

  export type PgInterviewLogSelectScalar = {
    mongodbId?: boolean
    userId?: boolean
    interviewDate?: boolean
    companyName?: boolean
    jobTitle?: boolean
    interviewType?: boolean
    outcome?: boolean
    difficultyLevel?: boolean
    preparationLevel?: boolean
    technicalRating?: boolean
    problemSolvingRating?: boolean
    communicationRating?: boolean
    behaviouralRating?: boolean
    confidenceRating?: boolean
    nervousnessLevel?: boolean
    usedStar?: boolean
    explainedClearly?: boolean
    usedRealExamples?: boolean
    jobFitScore?: boolean
    performanceScore?: boolean
    overallSelfRating?: boolean
    createdAt?: boolean
  }

  export type PgInterviewLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mongodbId" | "userId" | "interviewDate" | "companyName" | "jobTitle" | "interviewType" | "outcome" | "difficultyLevel" | "preparationLevel" | "technicalRating" | "problemSolvingRating" | "communicationRating" | "behaviouralRating" | "confidenceRating" | "nervousnessLevel" | "usedStar" | "explainedClearly" | "usedRealExamples" | "jobFitScore" | "performanceScore" | "overallSelfRating" | "createdAt", ExtArgs["result"]["pgInterviewLog"]>
  export type PgInterviewLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }
  export type PgInterviewLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }
  export type PgInterviewLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgUserDefaultArgs<ExtArgs>
  }

  export type $PgInterviewLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PgInterviewLog"
    objects: {
      user: Prisma.$PgUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mongodbId: string
      userId: string
      interviewDate: Date | null
      companyName: string | null
      jobTitle: string | null
      interviewType: string | null
      outcome: string | null
      difficultyLevel: string | null
      preparationLevel: number | null
      technicalRating: number | null
      problemSolvingRating: number | null
      communicationRating: number | null
      behaviouralRating: number | null
      confidenceRating: number | null
      nervousnessLevel: number | null
      usedStar: boolean | null
      explainedClearly: boolean | null
      usedRealExamples: boolean | null
      jobFitScore: number | null
      performanceScore: number | null
      overallSelfRating: number | null
      createdAt: Date
    }, ExtArgs["result"]["pgInterviewLog"]>
    composites: {}
  }

  type PgInterviewLogGetPayload<S extends boolean | null | undefined | PgInterviewLogDefaultArgs> = $Result.GetResult<Prisma.$PgInterviewLogPayload, S>

  type PgInterviewLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PgInterviewLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PgInterviewLogCountAggregateInputType | true
    }

  export interface PgInterviewLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PgInterviewLog'], meta: { name: 'PgInterviewLog' } }
    /**
     * Find zero or one PgInterviewLog that matches the filter.
     * @param {PgInterviewLogFindUniqueArgs} args - Arguments to find a PgInterviewLog
     * @example
     * // Get one PgInterviewLog
     * const pgInterviewLog = await prisma.pgInterviewLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PgInterviewLogFindUniqueArgs>(args: SelectSubset<T, PgInterviewLogFindUniqueArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PgInterviewLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PgInterviewLogFindUniqueOrThrowArgs} args - Arguments to find a PgInterviewLog
     * @example
     * // Get one PgInterviewLog
     * const pgInterviewLog = await prisma.pgInterviewLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PgInterviewLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PgInterviewLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgInterviewLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgInterviewLogFindFirstArgs} args - Arguments to find a PgInterviewLog
     * @example
     * // Get one PgInterviewLog
     * const pgInterviewLog = await prisma.pgInterviewLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PgInterviewLogFindFirstArgs>(args?: SelectSubset<T, PgInterviewLogFindFirstArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgInterviewLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgInterviewLogFindFirstOrThrowArgs} args - Arguments to find a PgInterviewLog
     * @example
     * // Get one PgInterviewLog
     * const pgInterviewLog = await prisma.pgInterviewLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PgInterviewLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PgInterviewLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PgInterviewLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgInterviewLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PgInterviewLogs
     * const pgInterviewLogs = await prisma.pgInterviewLog.findMany()
     * 
     * // Get first 10 PgInterviewLogs
     * const pgInterviewLogs = await prisma.pgInterviewLog.findMany({ take: 10 })
     * 
     * // Only select the `mongodbId`
     * const pgInterviewLogWithMongodbIdOnly = await prisma.pgInterviewLog.findMany({ select: { mongodbId: true } })
     * 
     */
    findMany<T extends PgInterviewLogFindManyArgs>(args?: SelectSubset<T, PgInterviewLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PgInterviewLog.
     * @param {PgInterviewLogCreateArgs} args - Arguments to create a PgInterviewLog.
     * @example
     * // Create one PgInterviewLog
     * const PgInterviewLog = await prisma.pgInterviewLog.create({
     *   data: {
     *     // ... data to create a PgInterviewLog
     *   }
     * })
     * 
     */
    create<T extends PgInterviewLogCreateArgs>(args: SelectSubset<T, PgInterviewLogCreateArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PgInterviewLogs.
     * @param {PgInterviewLogCreateManyArgs} args - Arguments to create many PgInterviewLogs.
     * @example
     * // Create many PgInterviewLogs
     * const pgInterviewLog = await prisma.pgInterviewLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PgInterviewLogCreateManyArgs>(args?: SelectSubset<T, PgInterviewLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PgInterviewLogs and returns the data saved in the database.
     * @param {PgInterviewLogCreateManyAndReturnArgs} args - Arguments to create many PgInterviewLogs.
     * @example
     * // Create many PgInterviewLogs
     * const pgInterviewLog = await prisma.pgInterviewLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PgInterviewLogs and only return the `mongodbId`
     * const pgInterviewLogWithMongodbIdOnly = await prisma.pgInterviewLog.createManyAndReturn({
     *   select: { mongodbId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PgInterviewLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PgInterviewLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PgInterviewLog.
     * @param {PgInterviewLogDeleteArgs} args - Arguments to delete one PgInterviewLog.
     * @example
     * // Delete one PgInterviewLog
     * const PgInterviewLog = await prisma.pgInterviewLog.delete({
     *   where: {
     *     // ... filter to delete one PgInterviewLog
     *   }
     * })
     * 
     */
    delete<T extends PgInterviewLogDeleteArgs>(args: SelectSubset<T, PgInterviewLogDeleteArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PgInterviewLog.
     * @param {PgInterviewLogUpdateArgs} args - Arguments to update one PgInterviewLog.
     * @example
     * // Update one PgInterviewLog
     * const pgInterviewLog = await prisma.pgInterviewLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PgInterviewLogUpdateArgs>(args: SelectSubset<T, PgInterviewLogUpdateArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PgInterviewLogs.
     * @param {PgInterviewLogDeleteManyArgs} args - Arguments to filter PgInterviewLogs to delete.
     * @example
     * // Delete a few PgInterviewLogs
     * const { count } = await prisma.pgInterviewLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PgInterviewLogDeleteManyArgs>(args?: SelectSubset<T, PgInterviewLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgInterviewLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgInterviewLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PgInterviewLogs
     * const pgInterviewLog = await prisma.pgInterviewLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PgInterviewLogUpdateManyArgs>(args: SelectSubset<T, PgInterviewLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgInterviewLogs and returns the data updated in the database.
     * @param {PgInterviewLogUpdateManyAndReturnArgs} args - Arguments to update many PgInterviewLogs.
     * @example
     * // Update many PgInterviewLogs
     * const pgInterviewLog = await prisma.pgInterviewLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PgInterviewLogs and only return the `mongodbId`
     * const pgInterviewLogWithMongodbIdOnly = await prisma.pgInterviewLog.updateManyAndReturn({
     *   select: { mongodbId: true },
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
    updateManyAndReturn<T extends PgInterviewLogUpdateManyAndReturnArgs>(args: SelectSubset<T, PgInterviewLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PgInterviewLog.
     * @param {PgInterviewLogUpsertArgs} args - Arguments to update or create a PgInterviewLog.
     * @example
     * // Update or create a PgInterviewLog
     * const pgInterviewLog = await prisma.pgInterviewLog.upsert({
     *   create: {
     *     // ... data to create a PgInterviewLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PgInterviewLog we want to update
     *   }
     * })
     */
    upsert<T extends PgInterviewLogUpsertArgs>(args: SelectSubset<T, PgInterviewLogUpsertArgs<ExtArgs>>): Prisma__PgInterviewLogClient<$Result.GetResult<Prisma.$PgInterviewLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PgInterviewLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgInterviewLogCountArgs} args - Arguments to filter PgInterviewLogs to count.
     * @example
     * // Count the number of PgInterviewLogs
     * const count = await prisma.pgInterviewLog.count({
     *   where: {
     *     // ... the filter for the PgInterviewLogs we want to count
     *   }
     * })
    **/
    count<T extends PgInterviewLogCountArgs>(
      args?: Subset<T, PgInterviewLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PgInterviewLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PgInterviewLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgInterviewLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PgInterviewLogAggregateArgs>(args: Subset<T, PgInterviewLogAggregateArgs>): Prisma.PrismaPromise<GetPgInterviewLogAggregateType<T>>

    /**
     * Group by PgInterviewLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgInterviewLogGroupByArgs} args - Group by arguments.
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
      T extends PgInterviewLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PgInterviewLogGroupByArgs['orderBy'] }
        : { orderBy?: PgInterviewLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PgInterviewLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPgInterviewLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PgInterviewLog model
   */
  readonly fields: PgInterviewLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PgInterviewLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PgInterviewLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PgUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PgUserDefaultArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PgInterviewLog model
   */
  interface PgInterviewLogFieldRefs {
    readonly mongodbId: FieldRef<"PgInterviewLog", 'String'>
    readonly userId: FieldRef<"PgInterviewLog", 'String'>
    readonly interviewDate: FieldRef<"PgInterviewLog", 'DateTime'>
    readonly companyName: FieldRef<"PgInterviewLog", 'String'>
    readonly jobTitle: FieldRef<"PgInterviewLog", 'String'>
    readonly interviewType: FieldRef<"PgInterviewLog", 'String'>
    readonly outcome: FieldRef<"PgInterviewLog", 'String'>
    readonly difficultyLevel: FieldRef<"PgInterviewLog", 'String'>
    readonly preparationLevel: FieldRef<"PgInterviewLog", 'Int'>
    readonly technicalRating: FieldRef<"PgInterviewLog", 'Int'>
    readonly problemSolvingRating: FieldRef<"PgInterviewLog", 'Int'>
    readonly communicationRating: FieldRef<"PgInterviewLog", 'Int'>
    readonly behaviouralRating: FieldRef<"PgInterviewLog", 'Int'>
    readonly confidenceRating: FieldRef<"PgInterviewLog", 'Int'>
    readonly nervousnessLevel: FieldRef<"PgInterviewLog", 'Int'>
    readonly usedStar: FieldRef<"PgInterviewLog", 'Boolean'>
    readonly explainedClearly: FieldRef<"PgInterviewLog", 'Boolean'>
    readonly usedRealExamples: FieldRef<"PgInterviewLog", 'Boolean'>
    readonly jobFitScore: FieldRef<"PgInterviewLog", 'Int'>
    readonly performanceScore: FieldRef<"PgInterviewLog", 'Int'>
    readonly overallSelfRating: FieldRef<"PgInterviewLog", 'Int'>
    readonly createdAt: FieldRef<"PgInterviewLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PgInterviewLog findUnique
   */
  export type PgInterviewLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * Filter, which PgInterviewLog to fetch.
     */
    where: PgInterviewLogWhereUniqueInput
  }

  /**
   * PgInterviewLog findUniqueOrThrow
   */
  export type PgInterviewLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * Filter, which PgInterviewLog to fetch.
     */
    where: PgInterviewLogWhereUniqueInput
  }

  /**
   * PgInterviewLog findFirst
   */
  export type PgInterviewLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * Filter, which PgInterviewLog to fetch.
     */
    where?: PgInterviewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgInterviewLogs to fetch.
     */
    orderBy?: PgInterviewLogOrderByWithRelationInput | PgInterviewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgInterviewLogs.
     */
    cursor?: PgInterviewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgInterviewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgInterviewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgInterviewLogs.
     */
    distinct?: PgInterviewLogScalarFieldEnum | PgInterviewLogScalarFieldEnum[]
  }

  /**
   * PgInterviewLog findFirstOrThrow
   */
  export type PgInterviewLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * Filter, which PgInterviewLog to fetch.
     */
    where?: PgInterviewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgInterviewLogs to fetch.
     */
    orderBy?: PgInterviewLogOrderByWithRelationInput | PgInterviewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgInterviewLogs.
     */
    cursor?: PgInterviewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgInterviewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgInterviewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgInterviewLogs.
     */
    distinct?: PgInterviewLogScalarFieldEnum | PgInterviewLogScalarFieldEnum[]
  }

  /**
   * PgInterviewLog findMany
   */
  export type PgInterviewLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * Filter, which PgInterviewLogs to fetch.
     */
    where?: PgInterviewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgInterviewLogs to fetch.
     */
    orderBy?: PgInterviewLogOrderByWithRelationInput | PgInterviewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PgInterviewLogs.
     */
    cursor?: PgInterviewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgInterviewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgInterviewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgInterviewLogs.
     */
    distinct?: PgInterviewLogScalarFieldEnum | PgInterviewLogScalarFieldEnum[]
  }

  /**
   * PgInterviewLog create
   */
  export type PgInterviewLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PgInterviewLog.
     */
    data: XOR<PgInterviewLogCreateInput, PgInterviewLogUncheckedCreateInput>
  }

  /**
   * PgInterviewLog createMany
   */
  export type PgInterviewLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PgInterviewLogs.
     */
    data: PgInterviewLogCreateManyInput | PgInterviewLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PgInterviewLog createManyAndReturn
   */
  export type PgInterviewLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * The data used to create many PgInterviewLogs.
     */
    data: PgInterviewLogCreateManyInput | PgInterviewLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PgInterviewLog update
   */
  export type PgInterviewLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PgInterviewLog.
     */
    data: XOR<PgInterviewLogUpdateInput, PgInterviewLogUncheckedUpdateInput>
    /**
     * Choose, which PgInterviewLog to update.
     */
    where: PgInterviewLogWhereUniqueInput
  }

  /**
   * PgInterviewLog updateMany
   */
  export type PgInterviewLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PgInterviewLogs.
     */
    data: XOR<PgInterviewLogUpdateManyMutationInput, PgInterviewLogUncheckedUpdateManyInput>
    /**
     * Filter which PgInterviewLogs to update
     */
    where?: PgInterviewLogWhereInput
    /**
     * Limit how many PgInterviewLogs to update.
     */
    limit?: number
  }

  /**
   * PgInterviewLog updateManyAndReturn
   */
  export type PgInterviewLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * The data used to update PgInterviewLogs.
     */
    data: XOR<PgInterviewLogUpdateManyMutationInput, PgInterviewLogUncheckedUpdateManyInput>
    /**
     * Filter which PgInterviewLogs to update
     */
    where?: PgInterviewLogWhereInput
    /**
     * Limit how many PgInterviewLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PgInterviewLog upsert
   */
  export type PgInterviewLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PgInterviewLog to update in case it exists.
     */
    where: PgInterviewLogWhereUniqueInput
    /**
     * In case the PgInterviewLog found by the `where` argument doesn't exist, create a new PgInterviewLog with this data.
     */
    create: XOR<PgInterviewLogCreateInput, PgInterviewLogUncheckedCreateInput>
    /**
     * In case the PgInterviewLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PgInterviewLogUpdateInput, PgInterviewLogUncheckedUpdateInput>
  }

  /**
   * PgInterviewLog delete
   */
  export type PgInterviewLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
    /**
     * Filter which PgInterviewLog to delete.
     */
    where: PgInterviewLogWhereUniqueInput
  }

  /**
   * PgInterviewLog deleteMany
   */
  export type PgInterviewLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgInterviewLogs to delete
     */
    where?: PgInterviewLogWhereInput
    /**
     * Limit how many PgInterviewLogs to delete.
     */
    limit?: number
  }

  /**
   * PgInterviewLog without action
   */
  export type PgInterviewLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgInterviewLog
     */
    select?: PgInterviewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgInterviewLog
     */
    omit?: PgInterviewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgInterviewLogInclude<ExtArgs> | null
  }


  /**
   * Model PgSupportTicket
   */

  export type AggregatePgSupportTicket = {
    _count: PgSupportTicketCountAggregateOutputType | null
    _min: PgSupportTicketMinAggregateOutputType | null
    _max: PgSupportTicketMaxAggregateOutputType | null
  }

  export type PgSupportTicketMinAggregateOutputType = {
    mongodbId: string | null
    userId: string | null
    email: string | null
    subject: string | null
    content: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PgSupportTicketMaxAggregateOutputType = {
    mongodbId: string | null
    userId: string | null
    email: string | null
    subject: string | null
    content: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PgSupportTicketCountAggregateOutputType = {
    mongodbId: number
    userId: number
    email: number
    subject: number
    content: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PgSupportTicketMinAggregateInputType = {
    mongodbId?: true
    userId?: true
    email?: true
    subject?: true
    content?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PgSupportTicketMaxAggregateInputType = {
    mongodbId?: true
    userId?: true
    email?: true
    subject?: true
    content?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PgSupportTicketCountAggregateInputType = {
    mongodbId?: true
    userId?: true
    email?: true
    subject?: true
    content?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PgSupportTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgSupportTicket to aggregate.
     */
    where?: PgSupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgSupportTickets to fetch.
     */
    orderBy?: PgSupportTicketOrderByWithRelationInput | PgSupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PgSupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgSupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgSupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PgSupportTickets
    **/
    _count?: true | PgSupportTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PgSupportTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PgSupportTicketMaxAggregateInputType
  }

  export type GetPgSupportTicketAggregateType<T extends PgSupportTicketAggregateArgs> = {
        [P in keyof T & keyof AggregatePgSupportTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePgSupportTicket[P]>
      : GetScalarType<T[P], AggregatePgSupportTicket[P]>
  }




  export type PgSupportTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PgSupportTicketWhereInput
    orderBy?: PgSupportTicketOrderByWithAggregationInput | PgSupportTicketOrderByWithAggregationInput[]
    by: PgSupportTicketScalarFieldEnum[] | PgSupportTicketScalarFieldEnum
    having?: PgSupportTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PgSupportTicketCountAggregateInputType | true
    _min?: PgSupportTicketMinAggregateInputType
    _max?: PgSupportTicketMaxAggregateInputType
  }

  export type PgSupportTicketGroupByOutputType = {
    mongodbId: string
    userId: string | null
    email: string
    subject: string
    content: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PgSupportTicketCountAggregateOutputType | null
    _min: PgSupportTicketMinAggregateOutputType | null
    _max: PgSupportTicketMaxAggregateOutputType | null
  }

  type GetPgSupportTicketGroupByPayload<T extends PgSupportTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PgSupportTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PgSupportTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PgSupportTicketGroupByOutputType[P]>
            : GetScalarType<T[P], PgSupportTicketGroupByOutputType[P]>
        }
      >
    >


  export type PgSupportTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    email?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PgSupportTicket$userArgs<ExtArgs>
  }, ExtArgs["result"]["pgSupportTicket"]>

  export type PgSupportTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    email?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PgSupportTicket$userArgs<ExtArgs>
  }, ExtArgs["result"]["pgSupportTicket"]>

  export type PgSupportTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mongodbId?: boolean
    userId?: boolean
    email?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PgSupportTicket$userArgs<ExtArgs>
  }, ExtArgs["result"]["pgSupportTicket"]>

  export type PgSupportTicketSelectScalar = {
    mongodbId?: boolean
    userId?: boolean
    email?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PgSupportTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mongodbId" | "userId" | "email" | "subject" | "content" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["pgSupportTicket"]>
  export type PgSupportTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgSupportTicket$userArgs<ExtArgs>
  }
  export type PgSupportTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgSupportTicket$userArgs<ExtArgs>
  }
  export type PgSupportTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PgSupportTicket$userArgs<ExtArgs>
  }

  export type $PgSupportTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PgSupportTicket"
    objects: {
      user: Prisma.$PgUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      mongodbId: string
      userId: string | null
      email: string
      subject: string
      content: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pgSupportTicket"]>
    composites: {}
  }

  type PgSupportTicketGetPayload<S extends boolean | null | undefined | PgSupportTicketDefaultArgs> = $Result.GetResult<Prisma.$PgSupportTicketPayload, S>

  type PgSupportTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PgSupportTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PgSupportTicketCountAggregateInputType | true
    }

  export interface PgSupportTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PgSupportTicket'], meta: { name: 'PgSupportTicket' } }
    /**
     * Find zero or one PgSupportTicket that matches the filter.
     * @param {PgSupportTicketFindUniqueArgs} args - Arguments to find a PgSupportTicket
     * @example
     * // Get one PgSupportTicket
     * const pgSupportTicket = await prisma.pgSupportTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PgSupportTicketFindUniqueArgs>(args: SelectSubset<T, PgSupportTicketFindUniqueArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PgSupportTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PgSupportTicketFindUniqueOrThrowArgs} args - Arguments to find a PgSupportTicket
     * @example
     * // Get one PgSupportTicket
     * const pgSupportTicket = await prisma.pgSupportTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PgSupportTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, PgSupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgSupportTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgSupportTicketFindFirstArgs} args - Arguments to find a PgSupportTicket
     * @example
     * // Get one PgSupportTicket
     * const pgSupportTicket = await prisma.pgSupportTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PgSupportTicketFindFirstArgs>(args?: SelectSubset<T, PgSupportTicketFindFirstArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PgSupportTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgSupportTicketFindFirstOrThrowArgs} args - Arguments to find a PgSupportTicket
     * @example
     * // Get one PgSupportTicket
     * const pgSupportTicket = await prisma.pgSupportTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PgSupportTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, PgSupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PgSupportTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgSupportTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PgSupportTickets
     * const pgSupportTickets = await prisma.pgSupportTicket.findMany()
     * 
     * // Get first 10 PgSupportTickets
     * const pgSupportTickets = await prisma.pgSupportTicket.findMany({ take: 10 })
     * 
     * // Only select the `mongodbId`
     * const pgSupportTicketWithMongodbIdOnly = await prisma.pgSupportTicket.findMany({ select: { mongodbId: true } })
     * 
     */
    findMany<T extends PgSupportTicketFindManyArgs>(args?: SelectSubset<T, PgSupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PgSupportTicket.
     * @param {PgSupportTicketCreateArgs} args - Arguments to create a PgSupportTicket.
     * @example
     * // Create one PgSupportTicket
     * const PgSupportTicket = await prisma.pgSupportTicket.create({
     *   data: {
     *     // ... data to create a PgSupportTicket
     *   }
     * })
     * 
     */
    create<T extends PgSupportTicketCreateArgs>(args: SelectSubset<T, PgSupportTicketCreateArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PgSupportTickets.
     * @param {PgSupportTicketCreateManyArgs} args - Arguments to create many PgSupportTickets.
     * @example
     * // Create many PgSupportTickets
     * const pgSupportTicket = await prisma.pgSupportTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PgSupportTicketCreateManyArgs>(args?: SelectSubset<T, PgSupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PgSupportTickets and returns the data saved in the database.
     * @param {PgSupportTicketCreateManyAndReturnArgs} args - Arguments to create many PgSupportTickets.
     * @example
     * // Create many PgSupportTickets
     * const pgSupportTicket = await prisma.pgSupportTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PgSupportTickets and only return the `mongodbId`
     * const pgSupportTicketWithMongodbIdOnly = await prisma.pgSupportTicket.createManyAndReturn({
     *   select: { mongodbId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PgSupportTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, PgSupportTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PgSupportTicket.
     * @param {PgSupportTicketDeleteArgs} args - Arguments to delete one PgSupportTicket.
     * @example
     * // Delete one PgSupportTicket
     * const PgSupportTicket = await prisma.pgSupportTicket.delete({
     *   where: {
     *     // ... filter to delete one PgSupportTicket
     *   }
     * })
     * 
     */
    delete<T extends PgSupportTicketDeleteArgs>(args: SelectSubset<T, PgSupportTicketDeleteArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PgSupportTicket.
     * @param {PgSupportTicketUpdateArgs} args - Arguments to update one PgSupportTicket.
     * @example
     * // Update one PgSupportTicket
     * const pgSupportTicket = await prisma.pgSupportTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PgSupportTicketUpdateArgs>(args: SelectSubset<T, PgSupportTicketUpdateArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PgSupportTickets.
     * @param {PgSupportTicketDeleteManyArgs} args - Arguments to filter PgSupportTickets to delete.
     * @example
     * // Delete a few PgSupportTickets
     * const { count } = await prisma.pgSupportTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PgSupportTicketDeleteManyArgs>(args?: SelectSubset<T, PgSupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgSupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgSupportTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PgSupportTickets
     * const pgSupportTicket = await prisma.pgSupportTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PgSupportTicketUpdateManyArgs>(args: SelectSubset<T, PgSupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PgSupportTickets and returns the data updated in the database.
     * @param {PgSupportTicketUpdateManyAndReturnArgs} args - Arguments to update many PgSupportTickets.
     * @example
     * // Update many PgSupportTickets
     * const pgSupportTicket = await prisma.pgSupportTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PgSupportTickets and only return the `mongodbId`
     * const pgSupportTicketWithMongodbIdOnly = await prisma.pgSupportTicket.updateManyAndReturn({
     *   select: { mongodbId: true },
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
    updateManyAndReturn<T extends PgSupportTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, PgSupportTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PgSupportTicket.
     * @param {PgSupportTicketUpsertArgs} args - Arguments to update or create a PgSupportTicket.
     * @example
     * // Update or create a PgSupportTicket
     * const pgSupportTicket = await prisma.pgSupportTicket.upsert({
     *   create: {
     *     // ... data to create a PgSupportTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PgSupportTicket we want to update
     *   }
     * })
     */
    upsert<T extends PgSupportTicketUpsertArgs>(args: SelectSubset<T, PgSupportTicketUpsertArgs<ExtArgs>>): Prisma__PgSupportTicketClient<$Result.GetResult<Prisma.$PgSupportTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PgSupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgSupportTicketCountArgs} args - Arguments to filter PgSupportTickets to count.
     * @example
     * // Count the number of PgSupportTickets
     * const count = await prisma.pgSupportTicket.count({
     *   where: {
     *     // ... the filter for the PgSupportTickets we want to count
     *   }
     * })
    **/
    count<T extends PgSupportTicketCountArgs>(
      args?: Subset<T, PgSupportTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PgSupportTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PgSupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgSupportTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PgSupportTicketAggregateArgs>(args: Subset<T, PgSupportTicketAggregateArgs>): Prisma.PrismaPromise<GetPgSupportTicketAggregateType<T>>

    /**
     * Group by PgSupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PgSupportTicketGroupByArgs} args - Group by arguments.
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
      T extends PgSupportTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PgSupportTicketGroupByArgs['orderBy'] }
        : { orderBy?: PgSupportTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PgSupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPgSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PgSupportTicket model
   */
  readonly fields: PgSupportTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PgSupportTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PgSupportTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PgSupportTicket$userArgs<ExtArgs> = {}>(args?: Subset<T, PgSupportTicket$userArgs<ExtArgs>>): Prisma__PgUserClient<$Result.GetResult<Prisma.$PgUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PgSupportTicket model
   */
  interface PgSupportTicketFieldRefs {
    readonly mongodbId: FieldRef<"PgSupportTicket", 'String'>
    readonly userId: FieldRef<"PgSupportTicket", 'String'>
    readonly email: FieldRef<"PgSupportTicket", 'String'>
    readonly subject: FieldRef<"PgSupportTicket", 'String'>
    readonly content: FieldRef<"PgSupportTicket", 'String'>
    readonly status: FieldRef<"PgSupportTicket", 'String'>
    readonly createdAt: FieldRef<"PgSupportTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"PgSupportTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PgSupportTicket findUnique
   */
  export type PgSupportTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which PgSupportTicket to fetch.
     */
    where: PgSupportTicketWhereUniqueInput
  }

  /**
   * PgSupportTicket findUniqueOrThrow
   */
  export type PgSupportTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which PgSupportTicket to fetch.
     */
    where: PgSupportTicketWhereUniqueInput
  }

  /**
   * PgSupportTicket findFirst
   */
  export type PgSupportTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which PgSupportTicket to fetch.
     */
    where?: PgSupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgSupportTickets to fetch.
     */
    orderBy?: PgSupportTicketOrderByWithRelationInput | PgSupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgSupportTickets.
     */
    cursor?: PgSupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgSupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgSupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgSupportTickets.
     */
    distinct?: PgSupportTicketScalarFieldEnum | PgSupportTicketScalarFieldEnum[]
  }

  /**
   * PgSupportTicket findFirstOrThrow
   */
  export type PgSupportTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which PgSupportTicket to fetch.
     */
    where?: PgSupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgSupportTickets to fetch.
     */
    orderBy?: PgSupportTicketOrderByWithRelationInput | PgSupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PgSupportTickets.
     */
    cursor?: PgSupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgSupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgSupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgSupportTickets.
     */
    distinct?: PgSupportTicketScalarFieldEnum | PgSupportTicketScalarFieldEnum[]
  }

  /**
   * PgSupportTicket findMany
   */
  export type PgSupportTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which PgSupportTickets to fetch.
     */
    where?: PgSupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PgSupportTickets to fetch.
     */
    orderBy?: PgSupportTicketOrderByWithRelationInput | PgSupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PgSupportTickets.
     */
    cursor?: PgSupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PgSupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PgSupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PgSupportTickets.
     */
    distinct?: PgSupportTicketScalarFieldEnum | PgSupportTicketScalarFieldEnum[]
  }

  /**
   * PgSupportTicket create
   */
  export type PgSupportTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a PgSupportTicket.
     */
    data: XOR<PgSupportTicketCreateInput, PgSupportTicketUncheckedCreateInput>
  }

  /**
   * PgSupportTicket createMany
   */
  export type PgSupportTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PgSupportTickets.
     */
    data: PgSupportTicketCreateManyInput | PgSupportTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PgSupportTicket createManyAndReturn
   */
  export type PgSupportTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * The data used to create many PgSupportTickets.
     */
    data: PgSupportTicketCreateManyInput | PgSupportTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PgSupportTicket update
   */
  export type PgSupportTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a PgSupportTicket.
     */
    data: XOR<PgSupportTicketUpdateInput, PgSupportTicketUncheckedUpdateInput>
    /**
     * Choose, which PgSupportTicket to update.
     */
    where: PgSupportTicketWhereUniqueInput
  }

  /**
   * PgSupportTicket updateMany
   */
  export type PgSupportTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PgSupportTickets.
     */
    data: XOR<PgSupportTicketUpdateManyMutationInput, PgSupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which PgSupportTickets to update
     */
    where?: PgSupportTicketWhereInput
    /**
     * Limit how many PgSupportTickets to update.
     */
    limit?: number
  }

  /**
   * PgSupportTicket updateManyAndReturn
   */
  export type PgSupportTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * The data used to update PgSupportTickets.
     */
    data: XOR<PgSupportTicketUpdateManyMutationInput, PgSupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which PgSupportTickets to update
     */
    where?: PgSupportTicketWhereInput
    /**
     * Limit how many PgSupportTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PgSupportTicket upsert
   */
  export type PgSupportTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the PgSupportTicket to update in case it exists.
     */
    where: PgSupportTicketWhereUniqueInput
    /**
     * In case the PgSupportTicket found by the `where` argument doesn't exist, create a new PgSupportTicket with this data.
     */
    create: XOR<PgSupportTicketCreateInput, PgSupportTicketUncheckedCreateInput>
    /**
     * In case the PgSupportTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PgSupportTicketUpdateInput, PgSupportTicketUncheckedUpdateInput>
  }

  /**
   * PgSupportTicket delete
   */
  export type PgSupportTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
    /**
     * Filter which PgSupportTicket to delete.
     */
    where: PgSupportTicketWhereUniqueInput
  }

  /**
   * PgSupportTicket deleteMany
   */
  export type PgSupportTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PgSupportTickets to delete
     */
    where?: PgSupportTicketWhereInput
    /**
     * Limit how many PgSupportTickets to delete.
     */
    limit?: number
  }

  /**
   * PgSupportTicket.user
   */
  export type PgSupportTicket$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgUser
     */
    select?: PgUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgUser
     */
    omit?: PgUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgUserInclude<ExtArgs> | null
    where?: PgUserWhereInput
  }

  /**
   * PgSupportTicket without action
   */
  export type PgSupportTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PgSupportTicket
     */
    select?: PgSupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PgSupportTicket
     */
    omit?: PgSupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PgSupportTicketInclude<ExtArgs> | null
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


  export const PgUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt'
  };

  export type PgUserScalarFieldEnum = (typeof PgUserScalarFieldEnum)[keyof typeof PgUserScalarFieldEnum]


  export const PgResumeScalarFieldEnum: {
    mongodbId: 'mongodbId',
    userId: 'userId',
    atsScore: 'atsScore',
    keywordPct: 'keywordPct',
    formattingPct: 'formattingPct',
    improvementScore: 'improvementScore',
    missingSkills: 'missingSkills',
    createdAt: 'createdAt'
  };

  export type PgResumeScalarFieldEnum = (typeof PgResumeScalarFieldEnum)[keyof typeof PgResumeScalarFieldEnum]


  export const PgInterviewLogScalarFieldEnum: {
    mongodbId: 'mongodbId',
    userId: 'userId',
    interviewDate: 'interviewDate',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    interviewType: 'interviewType',
    outcome: 'outcome',
    difficultyLevel: 'difficultyLevel',
    preparationLevel: 'preparationLevel',
    technicalRating: 'technicalRating',
    problemSolvingRating: 'problemSolvingRating',
    communicationRating: 'communicationRating',
    behaviouralRating: 'behaviouralRating',
    confidenceRating: 'confidenceRating',
    nervousnessLevel: 'nervousnessLevel',
    usedStar: 'usedStar',
    explainedClearly: 'explainedClearly',
    usedRealExamples: 'usedRealExamples',
    jobFitScore: 'jobFitScore',
    performanceScore: 'performanceScore',
    overallSelfRating: 'overallSelfRating',
    createdAt: 'createdAt'
  };

  export type PgInterviewLogScalarFieldEnum = (typeof PgInterviewLogScalarFieldEnum)[keyof typeof PgInterviewLogScalarFieldEnum]


  export const PgSupportTicketScalarFieldEnum: {
    mongodbId: 'mongodbId',
    userId: 'userId',
    email: 'email',
    subject: 'subject',
    content: 'content',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PgSupportTicketScalarFieldEnum = (typeof PgSupportTicketScalarFieldEnum)[keyof typeof PgSupportTicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PgUserWhereInput = {
    AND?: PgUserWhereInput | PgUserWhereInput[]
    OR?: PgUserWhereInput[]
    NOT?: PgUserWhereInput | PgUserWhereInput[]
    id?: StringFilter<"PgUser"> | string
    email?: StringFilter<"PgUser"> | string
    firstName?: StringNullableFilter<"PgUser"> | string | null
    lastName?: StringNullableFilter<"PgUser"> | string | null
    createdAt?: DateTimeFilter<"PgUser"> | Date | string
    resumes?: PgResumeListRelationFilter
    interviewLogs?: PgInterviewLogListRelationFilter
    supportTickets?: PgSupportTicketListRelationFilter
  }

  export type PgUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resumes?: PgResumeOrderByRelationAggregateInput
    interviewLogs?: PgInterviewLogOrderByRelationAggregateInput
    supportTickets?: PgSupportTicketOrderByRelationAggregateInput
  }

  export type PgUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PgUserWhereInput | PgUserWhereInput[]
    OR?: PgUserWhereInput[]
    NOT?: PgUserWhereInput | PgUserWhereInput[]
    email?: StringFilter<"PgUser"> | string
    firstName?: StringNullableFilter<"PgUser"> | string | null
    lastName?: StringNullableFilter<"PgUser"> | string | null
    createdAt?: DateTimeFilter<"PgUser"> | Date | string
    resumes?: PgResumeListRelationFilter
    interviewLogs?: PgInterviewLogListRelationFilter
    supportTickets?: PgSupportTicketListRelationFilter
  }, "id">

  export type PgUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PgUserCountOrderByAggregateInput
    _max?: PgUserMaxOrderByAggregateInput
    _min?: PgUserMinOrderByAggregateInput
  }

  export type PgUserScalarWhereWithAggregatesInput = {
    AND?: PgUserScalarWhereWithAggregatesInput | PgUserScalarWhereWithAggregatesInput[]
    OR?: PgUserScalarWhereWithAggregatesInput[]
    NOT?: PgUserScalarWhereWithAggregatesInput | PgUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PgUser"> | string
    email?: StringWithAggregatesFilter<"PgUser"> | string
    firstName?: StringNullableWithAggregatesFilter<"PgUser"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"PgUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PgUser"> | Date | string
  }

  export type PgResumeWhereInput = {
    AND?: PgResumeWhereInput | PgResumeWhereInput[]
    OR?: PgResumeWhereInput[]
    NOT?: PgResumeWhereInput | PgResumeWhereInput[]
    mongodbId?: StringFilter<"PgResume"> | string
    userId?: StringFilter<"PgResume"> | string
    atsScore?: IntNullableFilter<"PgResume"> | number | null
    keywordPct?: IntNullableFilter<"PgResume"> | number | null
    formattingPct?: IntNullableFilter<"PgResume"> | number | null
    improvementScore?: IntNullableFilter<"PgResume"> | number | null
    missingSkills?: StringNullableListFilter<"PgResume">
    createdAt?: DateTimeFilter<"PgResume"> | Date | string
    user?: XOR<PgUserScalarRelationFilter, PgUserWhereInput>
  }

  export type PgResumeOrderByWithRelationInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    keywordPct?: SortOrderInput | SortOrder
    formattingPct?: SortOrderInput | SortOrder
    improvementScore?: SortOrderInput | SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
    user?: PgUserOrderByWithRelationInput
  }

  export type PgResumeWhereUniqueInput = Prisma.AtLeast<{
    mongodbId?: string
    AND?: PgResumeWhereInput | PgResumeWhereInput[]
    OR?: PgResumeWhereInput[]
    NOT?: PgResumeWhereInput | PgResumeWhereInput[]
    userId?: StringFilter<"PgResume"> | string
    atsScore?: IntNullableFilter<"PgResume"> | number | null
    keywordPct?: IntNullableFilter<"PgResume"> | number | null
    formattingPct?: IntNullableFilter<"PgResume"> | number | null
    improvementScore?: IntNullableFilter<"PgResume"> | number | null
    missingSkills?: StringNullableListFilter<"PgResume">
    createdAt?: DateTimeFilter<"PgResume"> | Date | string
    user?: XOR<PgUserScalarRelationFilter, PgUserWhereInput>
  }, "mongodbId">

  export type PgResumeOrderByWithAggregationInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    atsScore?: SortOrderInput | SortOrder
    keywordPct?: SortOrderInput | SortOrder
    formattingPct?: SortOrderInput | SortOrder
    improvementScore?: SortOrderInput | SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
    _count?: PgResumeCountOrderByAggregateInput
    _avg?: PgResumeAvgOrderByAggregateInput
    _max?: PgResumeMaxOrderByAggregateInput
    _min?: PgResumeMinOrderByAggregateInput
    _sum?: PgResumeSumOrderByAggregateInput
  }

  export type PgResumeScalarWhereWithAggregatesInput = {
    AND?: PgResumeScalarWhereWithAggregatesInput | PgResumeScalarWhereWithAggregatesInput[]
    OR?: PgResumeScalarWhereWithAggregatesInput[]
    NOT?: PgResumeScalarWhereWithAggregatesInput | PgResumeScalarWhereWithAggregatesInput[]
    mongodbId?: StringWithAggregatesFilter<"PgResume"> | string
    userId?: StringWithAggregatesFilter<"PgResume"> | string
    atsScore?: IntNullableWithAggregatesFilter<"PgResume"> | number | null
    keywordPct?: IntNullableWithAggregatesFilter<"PgResume"> | number | null
    formattingPct?: IntNullableWithAggregatesFilter<"PgResume"> | number | null
    improvementScore?: IntNullableWithAggregatesFilter<"PgResume"> | number | null
    missingSkills?: StringNullableListFilter<"PgResume">
    createdAt?: DateTimeWithAggregatesFilter<"PgResume"> | Date | string
  }

  export type PgInterviewLogWhereInput = {
    AND?: PgInterviewLogWhereInput | PgInterviewLogWhereInput[]
    OR?: PgInterviewLogWhereInput[]
    NOT?: PgInterviewLogWhereInput | PgInterviewLogWhereInput[]
    mongodbId?: StringFilter<"PgInterviewLog"> | string
    userId?: StringFilter<"PgInterviewLog"> | string
    interviewDate?: DateTimeNullableFilter<"PgInterviewLog"> | Date | string | null
    companyName?: StringNullableFilter<"PgInterviewLog"> | string | null
    jobTitle?: StringNullableFilter<"PgInterviewLog"> | string | null
    interviewType?: StringNullableFilter<"PgInterviewLog"> | string | null
    outcome?: StringNullableFilter<"PgInterviewLog"> | string | null
    difficultyLevel?: StringNullableFilter<"PgInterviewLog"> | string | null
    preparationLevel?: IntNullableFilter<"PgInterviewLog"> | number | null
    technicalRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    problemSolvingRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    communicationRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    behaviouralRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    confidenceRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    nervousnessLevel?: IntNullableFilter<"PgInterviewLog"> | number | null
    usedStar?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    explainedClearly?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    usedRealExamples?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    jobFitScore?: IntNullableFilter<"PgInterviewLog"> | number | null
    performanceScore?: IntNullableFilter<"PgInterviewLog"> | number | null
    overallSelfRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    createdAt?: DateTimeFilter<"PgInterviewLog"> | Date | string
    user?: XOR<PgUserScalarRelationFilter, PgUserWhereInput>
  }

  export type PgInterviewLogOrderByWithRelationInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    interviewDate?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    interviewType?: SortOrderInput | SortOrder
    outcome?: SortOrderInput | SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    preparationLevel?: SortOrderInput | SortOrder
    technicalRating?: SortOrderInput | SortOrder
    problemSolvingRating?: SortOrderInput | SortOrder
    communicationRating?: SortOrderInput | SortOrder
    behaviouralRating?: SortOrderInput | SortOrder
    confidenceRating?: SortOrderInput | SortOrder
    nervousnessLevel?: SortOrderInput | SortOrder
    usedStar?: SortOrderInput | SortOrder
    explainedClearly?: SortOrderInput | SortOrder
    usedRealExamples?: SortOrderInput | SortOrder
    jobFitScore?: SortOrderInput | SortOrder
    performanceScore?: SortOrderInput | SortOrder
    overallSelfRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: PgUserOrderByWithRelationInput
  }

  export type PgInterviewLogWhereUniqueInput = Prisma.AtLeast<{
    mongodbId?: string
    AND?: PgInterviewLogWhereInput | PgInterviewLogWhereInput[]
    OR?: PgInterviewLogWhereInput[]
    NOT?: PgInterviewLogWhereInput | PgInterviewLogWhereInput[]
    userId?: StringFilter<"PgInterviewLog"> | string
    interviewDate?: DateTimeNullableFilter<"PgInterviewLog"> | Date | string | null
    companyName?: StringNullableFilter<"PgInterviewLog"> | string | null
    jobTitle?: StringNullableFilter<"PgInterviewLog"> | string | null
    interviewType?: StringNullableFilter<"PgInterviewLog"> | string | null
    outcome?: StringNullableFilter<"PgInterviewLog"> | string | null
    difficultyLevel?: StringNullableFilter<"PgInterviewLog"> | string | null
    preparationLevel?: IntNullableFilter<"PgInterviewLog"> | number | null
    technicalRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    problemSolvingRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    communicationRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    behaviouralRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    confidenceRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    nervousnessLevel?: IntNullableFilter<"PgInterviewLog"> | number | null
    usedStar?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    explainedClearly?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    usedRealExamples?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    jobFitScore?: IntNullableFilter<"PgInterviewLog"> | number | null
    performanceScore?: IntNullableFilter<"PgInterviewLog"> | number | null
    overallSelfRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    createdAt?: DateTimeFilter<"PgInterviewLog"> | Date | string
    user?: XOR<PgUserScalarRelationFilter, PgUserWhereInput>
  }, "mongodbId">

  export type PgInterviewLogOrderByWithAggregationInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    interviewDate?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    interviewType?: SortOrderInput | SortOrder
    outcome?: SortOrderInput | SortOrder
    difficultyLevel?: SortOrderInput | SortOrder
    preparationLevel?: SortOrderInput | SortOrder
    technicalRating?: SortOrderInput | SortOrder
    problemSolvingRating?: SortOrderInput | SortOrder
    communicationRating?: SortOrderInput | SortOrder
    behaviouralRating?: SortOrderInput | SortOrder
    confidenceRating?: SortOrderInput | SortOrder
    nervousnessLevel?: SortOrderInput | SortOrder
    usedStar?: SortOrderInput | SortOrder
    explainedClearly?: SortOrderInput | SortOrder
    usedRealExamples?: SortOrderInput | SortOrder
    jobFitScore?: SortOrderInput | SortOrder
    performanceScore?: SortOrderInput | SortOrder
    overallSelfRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PgInterviewLogCountOrderByAggregateInput
    _avg?: PgInterviewLogAvgOrderByAggregateInput
    _max?: PgInterviewLogMaxOrderByAggregateInput
    _min?: PgInterviewLogMinOrderByAggregateInput
    _sum?: PgInterviewLogSumOrderByAggregateInput
  }

  export type PgInterviewLogScalarWhereWithAggregatesInput = {
    AND?: PgInterviewLogScalarWhereWithAggregatesInput | PgInterviewLogScalarWhereWithAggregatesInput[]
    OR?: PgInterviewLogScalarWhereWithAggregatesInput[]
    NOT?: PgInterviewLogScalarWhereWithAggregatesInput | PgInterviewLogScalarWhereWithAggregatesInput[]
    mongodbId?: StringWithAggregatesFilter<"PgInterviewLog"> | string
    userId?: StringWithAggregatesFilter<"PgInterviewLog"> | string
    interviewDate?: DateTimeNullableWithAggregatesFilter<"PgInterviewLog"> | Date | string | null
    companyName?: StringNullableWithAggregatesFilter<"PgInterviewLog"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"PgInterviewLog"> | string | null
    interviewType?: StringNullableWithAggregatesFilter<"PgInterviewLog"> | string | null
    outcome?: StringNullableWithAggregatesFilter<"PgInterviewLog"> | string | null
    difficultyLevel?: StringNullableWithAggregatesFilter<"PgInterviewLog"> | string | null
    preparationLevel?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    technicalRating?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    problemSolvingRating?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    communicationRating?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    behaviouralRating?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    confidenceRating?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    nervousnessLevel?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    usedStar?: BoolNullableWithAggregatesFilter<"PgInterviewLog"> | boolean | null
    explainedClearly?: BoolNullableWithAggregatesFilter<"PgInterviewLog"> | boolean | null
    usedRealExamples?: BoolNullableWithAggregatesFilter<"PgInterviewLog"> | boolean | null
    jobFitScore?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    performanceScore?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    overallSelfRating?: IntNullableWithAggregatesFilter<"PgInterviewLog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PgInterviewLog"> | Date | string
  }

  export type PgSupportTicketWhereInput = {
    AND?: PgSupportTicketWhereInput | PgSupportTicketWhereInput[]
    OR?: PgSupportTicketWhereInput[]
    NOT?: PgSupportTicketWhereInput | PgSupportTicketWhereInput[]
    mongodbId?: StringFilter<"PgSupportTicket"> | string
    userId?: StringNullableFilter<"PgSupportTicket"> | string | null
    email?: StringFilter<"PgSupportTicket"> | string
    subject?: StringFilter<"PgSupportTicket"> | string
    content?: StringFilter<"PgSupportTicket"> | string
    status?: StringFilter<"PgSupportTicket"> | string
    createdAt?: DateTimeFilter<"PgSupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"PgSupportTicket"> | Date | string
    user?: XOR<PgUserNullableScalarRelationFilter, PgUserWhereInput> | null
  }

  export type PgSupportTicketOrderByWithRelationInput = {
    mongodbId?: SortOrder
    userId?: SortOrderInput | SortOrder
    email?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: PgUserOrderByWithRelationInput
  }

  export type PgSupportTicketWhereUniqueInput = Prisma.AtLeast<{
    mongodbId?: string
    AND?: PgSupportTicketWhereInput | PgSupportTicketWhereInput[]
    OR?: PgSupportTicketWhereInput[]
    NOT?: PgSupportTicketWhereInput | PgSupportTicketWhereInput[]
    userId?: StringNullableFilter<"PgSupportTicket"> | string | null
    email?: StringFilter<"PgSupportTicket"> | string
    subject?: StringFilter<"PgSupportTicket"> | string
    content?: StringFilter<"PgSupportTicket"> | string
    status?: StringFilter<"PgSupportTicket"> | string
    createdAt?: DateTimeFilter<"PgSupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"PgSupportTicket"> | Date | string
    user?: XOR<PgUserNullableScalarRelationFilter, PgUserWhereInput> | null
  }, "mongodbId">

  export type PgSupportTicketOrderByWithAggregationInput = {
    mongodbId?: SortOrder
    userId?: SortOrderInput | SortOrder
    email?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PgSupportTicketCountOrderByAggregateInput
    _max?: PgSupportTicketMaxOrderByAggregateInput
    _min?: PgSupportTicketMinOrderByAggregateInput
  }

  export type PgSupportTicketScalarWhereWithAggregatesInput = {
    AND?: PgSupportTicketScalarWhereWithAggregatesInput | PgSupportTicketScalarWhereWithAggregatesInput[]
    OR?: PgSupportTicketScalarWhereWithAggregatesInput[]
    NOT?: PgSupportTicketScalarWhereWithAggregatesInput | PgSupportTicketScalarWhereWithAggregatesInput[]
    mongodbId?: StringWithAggregatesFilter<"PgSupportTicket"> | string
    userId?: StringNullableWithAggregatesFilter<"PgSupportTicket"> | string | null
    email?: StringWithAggregatesFilter<"PgSupportTicket"> | string
    subject?: StringWithAggregatesFilter<"PgSupportTicket"> | string
    content?: StringWithAggregatesFilter<"PgSupportTicket"> | string
    status?: StringWithAggregatesFilter<"PgSupportTicket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PgSupportTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PgSupportTicket"> | Date | string
  }

  export type PgUserCreateInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    resumes?: PgResumeCreateNestedManyWithoutUserInput
    interviewLogs?: PgInterviewLogCreateNestedManyWithoutUserInput
    supportTickets?: PgSupportTicketCreateNestedManyWithoutUserInput
  }

  export type PgUserUncheckedCreateInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    resumes?: PgResumeUncheckedCreateNestedManyWithoutUserInput
    interviewLogs?: PgInterviewLogUncheckedCreateNestedManyWithoutUserInput
    supportTickets?: PgSupportTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type PgUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: PgResumeUpdateManyWithoutUserNestedInput
    interviewLogs?: PgInterviewLogUpdateManyWithoutUserNestedInput
    supportTickets?: PgSupportTicketUpdateManyWithoutUserNestedInput
  }

  export type PgUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: PgResumeUncheckedUpdateManyWithoutUserNestedInput
    interviewLogs?: PgInterviewLogUncheckedUpdateManyWithoutUserNestedInput
    supportTickets?: PgSupportTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PgUserCreateManyInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
  }

  export type PgUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgResumeCreateInput = {
    mongodbId: string
    atsScore?: number | null
    keywordPct?: number | null
    formattingPct?: number | null
    improvementScore?: number | null
    missingSkills?: PgResumeCreatemissingSkillsInput | string[]
    createdAt?: Date | string
    user: PgUserCreateNestedOneWithoutResumesInput
  }

  export type PgResumeUncheckedCreateInput = {
    mongodbId: string
    userId: string
    atsScore?: number | null
    keywordPct?: number | null
    formattingPct?: number | null
    improvementScore?: number | null
    missingSkills?: PgResumeCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type PgResumeUpdateInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null
    keywordPct?: NullableIntFieldUpdateOperationsInput | number | null
    formattingPct?: NullableIntFieldUpdateOperationsInput | number | null
    improvementScore?: NullableIntFieldUpdateOperationsInput | number | null
    missingSkills?: PgResumeUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: PgUserUpdateOneRequiredWithoutResumesNestedInput
  }

  export type PgResumeUncheckedUpdateInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null
    keywordPct?: NullableIntFieldUpdateOperationsInput | number | null
    formattingPct?: NullableIntFieldUpdateOperationsInput | number | null
    improvementScore?: NullableIntFieldUpdateOperationsInput | number | null
    missingSkills?: PgResumeUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgResumeCreateManyInput = {
    mongodbId: string
    userId: string
    atsScore?: number | null
    keywordPct?: number | null
    formattingPct?: number | null
    improvementScore?: number | null
    missingSkills?: PgResumeCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type PgResumeUpdateManyMutationInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null
    keywordPct?: NullableIntFieldUpdateOperationsInput | number | null
    formattingPct?: NullableIntFieldUpdateOperationsInput | number | null
    improvementScore?: NullableIntFieldUpdateOperationsInput | number | null
    missingSkills?: PgResumeUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgResumeUncheckedUpdateManyInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null
    keywordPct?: NullableIntFieldUpdateOperationsInput | number | null
    formattingPct?: NullableIntFieldUpdateOperationsInput | number | null
    improvementScore?: NullableIntFieldUpdateOperationsInput | number | null
    missingSkills?: PgResumeUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgInterviewLogCreateInput = {
    mongodbId: string
    interviewDate?: Date | string | null
    companyName?: string | null
    jobTitle?: string | null
    interviewType?: string | null
    outcome?: string | null
    difficultyLevel?: string | null
    preparationLevel?: number | null
    technicalRating?: number | null
    problemSolvingRating?: number | null
    communicationRating?: number | null
    behaviouralRating?: number | null
    confidenceRating?: number | null
    nervousnessLevel?: number | null
    usedStar?: boolean | null
    explainedClearly?: boolean | null
    usedRealExamples?: boolean | null
    jobFitScore?: number | null
    performanceScore?: number | null
    overallSelfRating?: number | null
    createdAt?: Date | string
    user: PgUserCreateNestedOneWithoutInterviewLogsInput
  }

  export type PgInterviewLogUncheckedCreateInput = {
    mongodbId: string
    userId: string
    interviewDate?: Date | string | null
    companyName?: string | null
    jobTitle?: string | null
    interviewType?: string | null
    outcome?: string | null
    difficultyLevel?: string | null
    preparationLevel?: number | null
    technicalRating?: number | null
    problemSolvingRating?: number | null
    communicationRating?: number | null
    behaviouralRating?: number | null
    confidenceRating?: number | null
    nervousnessLevel?: number | null
    usedStar?: boolean | null
    explainedClearly?: boolean | null
    usedRealExamples?: boolean | null
    jobFitScore?: number | null
    performanceScore?: number | null
    overallSelfRating?: number | null
    createdAt?: Date | string
  }

  export type PgInterviewLogUpdateInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    interviewType?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preparationLevel?: NullableIntFieldUpdateOperationsInput | number | null
    technicalRating?: NullableIntFieldUpdateOperationsInput | number | null
    problemSolvingRating?: NullableIntFieldUpdateOperationsInput | number | null
    communicationRating?: NullableIntFieldUpdateOperationsInput | number | null
    behaviouralRating?: NullableIntFieldUpdateOperationsInput | number | null
    confidenceRating?: NullableIntFieldUpdateOperationsInput | number | null
    nervousnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    usedStar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explainedClearly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usedRealExamples?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobFitScore?: NullableIntFieldUpdateOperationsInput | number | null
    performanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallSelfRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: PgUserUpdateOneRequiredWithoutInterviewLogsNestedInput
  }

  export type PgInterviewLogUncheckedUpdateInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    interviewType?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preparationLevel?: NullableIntFieldUpdateOperationsInput | number | null
    technicalRating?: NullableIntFieldUpdateOperationsInput | number | null
    problemSolvingRating?: NullableIntFieldUpdateOperationsInput | number | null
    communicationRating?: NullableIntFieldUpdateOperationsInput | number | null
    behaviouralRating?: NullableIntFieldUpdateOperationsInput | number | null
    confidenceRating?: NullableIntFieldUpdateOperationsInput | number | null
    nervousnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    usedStar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explainedClearly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usedRealExamples?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobFitScore?: NullableIntFieldUpdateOperationsInput | number | null
    performanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallSelfRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgInterviewLogCreateManyInput = {
    mongodbId: string
    userId: string
    interviewDate?: Date | string | null
    companyName?: string | null
    jobTitle?: string | null
    interviewType?: string | null
    outcome?: string | null
    difficultyLevel?: string | null
    preparationLevel?: number | null
    technicalRating?: number | null
    problemSolvingRating?: number | null
    communicationRating?: number | null
    behaviouralRating?: number | null
    confidenceRating?: number | null
    nervousnessLevel?: number | null
    usedStar?: boolean | null
    explainedClearly?: boolean | null
    usedRealExamples?: boolean | null
    jobFitScore?: number | null
    performanceScore?: number | null
    overallSelfRating?: number | null
    createdAt?: Date | string
  }

  export type PgInterviewLogUpdateManyMutationInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    interviewType?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preparationLevel?: NullableIntFieldUpdateOperationsInput | number | null
    technicalRating?: NullableIntFieldUpdateOperationsInput | number | null
    problemSolvingRating?: NullableIntFieldUpdateOperationsInput | number | null
    communicationRating?: NullableIntFieldUpdateOperationsInput | number | null
    behaviouralRating?: NullableIntFieldUpdateOperationsInput | number | null
    confidenceRating?: NullableIntFieldUpdateOperationsInput | number | null
    nervousnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    usedStar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explainedClearly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usedRealExamples?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobFitScore?: NullableIntFieldUpdateOperationsInput | number | null
    performanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallSelfRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgInterviewLogUncheckedUpdateManyInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    interviewType?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preparationLevel?: NullableIntFieldUpdateOperationsInput | number | null
    technicalRating?: NullableIntFieldUpdateOperationsInput | number | null
    problemSolvingRating?: NullableIntFieldUpdateOperationsInput | number | null
    communicationRating?: NullableIntFieldUpdateOperationsInput | number | null
    behaviouralRating?: NullableIntFieldUpdateOperationsInput | number | null
    confidenceRating?: NullableIntFieldUpdateOperationsInput | number | null
    nervousnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    usedStar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explainedClearly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usedRealExamples?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobFitScore?: NullableIntFieldUpdateOperationsInput | number | null
    performanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallSelfRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgSupportTicketCreateInput = {
    mongodbId: string
    email: string
    subject: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: PgUserCreateNestedOneWithoutSupportTicketsInput
  }

  export type PgSupportTicketUncheckedCreateInput = {
    mongodbId: string
    userId?: string | null
    email: string
    subject: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PgSupportTicketUpdateInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: PgUserUpdateOneWithoutSupportTicketsNestedInput
  }

  export type PgSupportTicketUncheckedUpdateInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgSupportTicketCreateManyInput = {
    mongodbId: string
    userId?: string | null
    email: string
    subject: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PgSupportTicketUpdateManyMutationInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgSupportTicketUncheckedUpdateManyInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type PgResumeListRelationFilter = {
    every?: PgResumeWhereInput
    some?: PgResumeWhereInput
    none?: PgResumeWhereInput
  }

  export type PgInterviewLogListRelationFilter = {
    every?: PgInterviewLogWhereInput
    some?: PgInterviewLogWhereInput
    none?: PgInterviewLogWhereInput
  }

  export type PgSupportTicketListRelationFilter = {
    every?: PgSupportTicketWhereInput
    some?: PgSupportTicketWhereInput
    none?: PgSupportTicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PgResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PgInterviewLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PgSupportTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PgUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type PgUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type PgUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PgUserScalarRelationFilter = {
    is?: PgUserWhereInput
    isNot?: PgUserWhereInput
  }

  export type PgResumeCountOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    atsScore?: SortOrder
    keywordPct?: SortOrder
    formattingPct?: SortOrder
    improvementScore?: SortOrder
    missingSkills?: SortOrder
    createdAt?: SortOrder
  }

  export type PgResumeAvgOrderByAggregateInput = {
    atsScore?: SortOrder
    keywordPct?: SortOrder
    formattingPct?: SortOrder
    improvementScore?: SortOrder
  }

  export type PgResumeMaxOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    atsScore?: SortOrder
    keywordPct?: SortOrder
    formattingPct?: SortOrder
    improvementScore?: SortOrder
    createdAt?: SortOrder
  }

  export type PgResumeMinOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    atsScore?: SortOrder
    keywordPct?: SortOrder
    formattingPct?: SortOrder
    improvementScore?: SortOrder
    createdAt?: SortOrder
  }

  export type PgResumeSumOrderByAggregateInput = {
    atsScore?: SortOrder
    keywordPct?: SortOrder
    formattingPct?: SortOrder
    improvementScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type PgInterviewLogCountOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    interviewDate?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    interviewType?: SortOrder
    outcome?: SortOrder
    difficultyLevel?: SortOrder
    preparationLevel?: SortOrder
    technicalRating?: SortOrder
    problemSolvingRating?: SortOrder
    communicationRating?: SortOrder
    behaviouralRating?: SortOrder
    confidenceRating?: SortOrder
    nervousnessLevel?: SortOrder
    usedStar?: SortOrder
    explainedClearly?: SortOrder
    usedRealExamples?: SortOrder
    jobFitScore?: SortOrder
    performanceScore?: SortOrder
    overallSelfRating?: SortOrder
    createdAt?: SortOrder
  }

  export type PgInterviewLogAvgOrderByAggregateInput = {
    preparationLevel?: SortOrder
    technicalRating?: SortOrder
    problemSolvingRating?: SortOrder
    communicationRating?: SortOrder
    behaviouralRating?: SortOrder
    confidenceRating?: SortOrder
    nervousnessLevel?: SortOrder
    jobFitScore?: SortOrder
    performanceScore?: SortOrder
    overallSelfRating?: SortOrder
  }

  export type PgInterviewLogMaxOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    interviewDate?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    interviewType?: SortOrder
    outcome?: SortOrder
    difficultyLevel?: SortOrder
    preparationLevel?: SortOrder
    technicalRating?: SortOrder
    problemSolvingRating?: SortOrder
    communicationRating?: SortOrder
    behaviouralRating?: SortOrder
    confidenceRating?: SortOrder
    nervousnessLevel?: SortOrder
    usedStar?: SortOrder
    explainedClearly?: SortOrder
    usedRealExamples?: SortOrder
    jobFitScore?: SortOrder
    performanceScore?: SortOrder
    overallSelfRating?: SortOrder
    createdAt?: SortOrder
  }

  export type PgInterviewLogMinOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    interviewDate?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    interviewType?: SortOrder
    outcome?: SortOrder
    difficultyLevel?: SortOrder
    preparationLevel?: SortOrder
    technicalRating?: SortOrder
    problemSolvingRating?: SortOrder
    communicationRating?: SortOrder
    behaviouralRating?: SortOrder
    confidenceRating?: SortOrder
    nervousnessLevel?: SortOrder
    usedStar?: SortOrder
    explainedClearly?: SortOrder
    usedRealExamples?: SortOrder
    jobFitScore?: SortOrder
    performanceScore?: SortOrder
    overallSelfRating?: SortOrder
    createdAt?: SortOrder
  }

  export type PgInterviewLogSumOrderByAggregateInput = {
    preparationLevel?: SortOrder
    technicalRating?: SortOrder
    problemSolvingRating?: SortOrder
    communicationRating?: SortOrder
    behaviouralRating?: SortOrder
    confidenceRating?: SortOrder
    nervousnessLevel?: SortOrder
    jobFitScore?: SortOrder
    performanceScore?: SortOrder
    overallSelfRating?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PgUserNullableScalarRelationFilter = {
    is?: PgUserWhereInput | null
    isNot?: PgUserWhereInput | null
  }

  export type PgSupportTicketCountOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PgSupportTicketMaxOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PgSupportTicketMinOrderByAggregateInput = {
    mongodbId?: SortOrder
    userId?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PgResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<PgResumeCreateWithoutUserInput, PgResumeUncheckedCreateWithoutUserInput> | PgResumeCreateWithoutUserInput[] | PgResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgResumeCreateOrConnectWithoutUserInput | PgResumeCreateOrConnectWithoutUserInput[]
    createMany?: PgResumeCreateManyUserInputEnvelope
    connect?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
  }

  export type PgInterviewLogCreateNestedManyWithoutUserInput = {
    create?: XOR<PgInterviewLogCreateWithoutUserInput, PgInterviewLogUncheckedCreateWithoutUserInput> | PgInterviewLogCreateWithoutUserInput[] | PgInterviewLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgInterviewLogCreateOrConnectWithoutUserInput | PgInterviewLogCreateOrConnectWithoutUserInput[]
    createMany?: PgInterviewLogCreateManyUserInputEnvelope
    connect?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
  }

  export type PgSupportTicketCreateNestedManyWithoutUserInput = {
    create?: XOR<PgSupportTicketCreateWithoutUserInput, PgSupportTicketUncheckedCreateWithoutUserInput> | PgSupportTicketCreateWithoutUserInput[] | PgSupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgSupportTicketCreateOrConnectWithoutUserInput | PgSupportTicketCreateOrConnectWithoutUserInput[]
    createMany?: PgSupportTicketCreateManyUserInputEnvelope
    connect?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
  }

  export type PgResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PgResumeCreateWithoutUserInput, PgResumeUncheckedCreateWithoutUserInput> | PgResumeCreateWithoutUserInput[] | PgResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgResumeCreateOrConnectWithoutUserInput | PgResumeCreateOrConnectWithoutUserInput[]
    createMany?: PgResumeCreateManyUserInputEnvelope
    connect?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
  }

  export type PgInterviewLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PgInterviewLogCreateWithoutUserInput, PgInterviewLogUncheckedCreateWithoutUserInput> | PgInterviewLogCreateWithoutUserInput[] | PgInterviewLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgInterviewLogCreateOrConnectWithoutUserInput | PgInterviewLogCreateOrConnectWithoutUserInput[]
    createMany?: PgInterviewLogCreateManyUserInputEnvelope
    connect?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
  }

  export type PgSupportTicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PgSupportTicketCreateWithoutUserInput, PgSupportTicketUncheckedCreateWithoutUserInput> | PgSupportTicketCreateWithoutUserInput[] | PgSupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgSupportTicketCreateOrConnectWithoutUserInput | PgSupportTicketCreateOrConnectWithoutUserInput[]
    createMany?: PgSupportTicketCreateManyUserInputEnvelope
    connect?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PgResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PgResumeCreateWithoutUserInput, PgResumeUncheckedCreateWithoutUserInput> | PgResumeCreateWithoutUserInput[] | PgResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgResumeCreateOrConnectWithoutUserInput | PgResumeCreateOrConnectWithoutUserInput[]
    upsert?: PgResumeUpsertWithWhereUniqueWithoutUserInput | PgResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PgResumeCreateManyUserInputEnvelope
    set?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    disconnect?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    delete?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    connect?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    update?: PgResumeUpdateWithWhereUniqueWithoutUserInput | PgResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PgResumeUpdateManyWithWhereWithoutUserInput | PgResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PgResumeScalarWhereInput | PgResumeScalarWhereInput[]
  }

  export type PgInterviewLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<PgInterviewLogCreateWithoutUserInput, PgInterviewLogUncheckedCreateWithoutUserInput> | PgInterviewLogCreateWithoutUserInput[] | PgInterviewLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgInterviewLogCreateOrConnectWithoutUserInput | PgInterviewLogCreateOrConnectWithoutUserInput[]
    upsert?: PgInterviewLogUpsertWithWhereUniqueWithoutUserInput | PgInterviewLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PgInterviewLogCreateManyUserInputEnvelope
    set?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    disconnect?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    delete?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    connect?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    update?: PgInterviewLogUpdateWithWhereUniqueWithoutUserInput | PgInterviewLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PgInterviewLogUpdateManyWithWhereWithoutUserInput | PgInterviewLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PgInterviewLogScalarWhereInput | PgInterviewLogScalarWhereInput[]
  }

  export type PgSupportTicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<PgSupportTicketCreateWithoutUserInput, PgSupportTicketUncheckedCreateWithoutUserInput> | PgSupportTicketCreateWithoutUserInput[] | PgSupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgSupportTicketCreateOrConnectWithoutUserInput | PgSupportTicketCreateOrConnectWithoutUserInput[]
    upsert?: PgSupportTicketUpsertWithWhereUniqueWithoutUserInput | PgSupportTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PgSupportTicketCreateManyUserInputEnvelope
    set?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    disconnect?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    delete?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    connect?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    update?: PgSupportTicketUpdateWithWhereUniqueWithoutUserInput | PgSupportTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PgSupportTicketUpdateManyWithWhereWithoutUserInput | PgSupportTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PgSupportTicketScalarWhereInput | PgSupportTicketScalarWhereInput[]
  }

  export type PgResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PgResumeCreateWithoutUserInput, PgResumeUncheckedCreateWithoutUserInput> | PgResumeCreateWithoutUserInput[] | PgResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgResumeCreateOrConnectWithoutUserInput | PgResumeCreateOrConnectWithoutUserInput[]
    upsert?: PgResumeUpsertWithWhereUniqueWithoutUserInput | PgResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PgResumeCreateManyUserInputEnvelope
    set?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    disconnect?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    delete?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    connect?: PgResumeWhereUniqueInput | PgResumeWhereUniqueInput[]
    update?: PgResumeUpdateWithWhereUniqueWithoutUserInput | PgResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PgResumeUpdateManyWithWhereWithoutUserInput | PgResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PgResumeScalarWhereInput | PgResumeScalarWhereInput[]
  }

  export type PgInterviewLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PgInterviewLogCreateWithoutUserInput, PgInterviewLogUncheckedCreateWithoutUserInput> | PgInterviewLogCreateWithoutUserInput[] | PgInterviewLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgInterviewLogCreateOrConnectWithoutUserInput | PgInterviewLogCreateOrConnectWithoutUserInput[]
    upsert?: PgInterviewLogUpsertWithWhereUniqueWithoutUserInput | PgInterviewLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PgInterviewLogCreateManyUserInputEnvelope
    set?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    disconnect?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    delete?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    connect?: PgInterviewLogWhereUniqueInput | PgInterviewLogWhereUniqueInput[]
    update?: PgInterviewLogUpdateWithWhereUniqueWithoutUserInput | PgInterviewLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PgInterviewLogUpdateManyWithWhereWithoutUserInput | PgInterviewLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PgInterviewLogScalarWhereInput | PgInterviewLogScalarWhereInput[]
  }

  export type PgSupportTicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PgSupportTicketCreateWithoutUserInput, PgSupportTicketUncheckedCreateWithoutUserInput> | PgSupportTicketCreateWithoutUserInput[] | PgSupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PgSupportTicketCreateOrConnectWithoutUserInput | PgSupportTicketCreateOrConnectWithoutUserInput[]
    upsert?: PgSupportTicketUpsertWithWhereUniqueWithoutUserInput | PgSupportTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PgSupportTicketCreateManyUserInputEnvelope
    set?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    disconnect?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    delete?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    connect?: PgSupportTicketWhereUniqueInput | PgSupportTicketWhereUniqueInput[]
    update?: PgSupportTicketUpdateWithWhereUniqueWithoutUserInput | PgSupportTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PgSupportTicketUpdateManyWithWhereWithoutUserInput | PgSupportTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PgSupportTicketScalarWhereInput | PgSupportTicketScalarWhereInput[]
  }

  export type PgResumeCreatemissingSkillsInput = {
    set: string[]
  }

  export type PgUserCreateNestedOneWithoutResumesInput = {
    create?: XOR<PgUserCreateWithoutResumesInput, PgUserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: PgUserCreateOrConnectWithoutResumesInput
    connect?: PgUserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PgResumeUpdatemissingSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PgUserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<PgUserCreateWithoutResumesInput, PgUserUncheckedCreateWithoutResumesInput>
    connectOrCreate?: PgUserCreateOrConnectWithoutResumesInput
    upsert?: PgUserUpsertWithoutResumesInput
    connect?: PgUserWhereUniqueInput
    update?: XOR<XOR<PgUserUpdateToOneWithWhereWithoutResumesInput, PgUserUpdateWithoutResumesInput>, PgUserUncheckedUpdateWithoutResumesInput>
  }

  export type PgUserCreateNestedOneWithoutInterviewLogsInput = {
    create?: XOR<PgUserCreateWithoutInterviewLogsInput, PgUserUncheckedCreateWithoutInterviewLogsInput>
    connectOrCreate?: PgUserCreateOrConnectWithoutInterviewLogsInput
    connect?: PgUserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PgUserUpdateOneRequiredWithoutInterviewLogsNestedInput = {
    create?: XOR<PgUserCreateWithoutInterviewLogsInput, PgUserUncheckedCreateWithoutInterviewLogsInput>
    connectOrCreate?: PgUserCreateOrConnectWithoutInterviewLogsInput
    upsert?: PgUserUpsertWithoutInterviewLogsInput
    connect?: PgUserWhereUniqueInput
    update?: XOR<XOR<PgUserUpdateToOneWithWhereWithoutInterviewLogsInput, PgUserUpdateWithoutInterviewLogsInput>, PgUserUncheckedUpdateWithoutInterviewLogsInput>
  }

  export type PgUserCreateNestedOneWithoutSupportTicketsInput = {
    create?: XOR<PgUserCreateWithoutSupportTicketsInput, PgUserUncheckedCreateWithoutSupportTicketsInput>
    connectOrCreate?: PgUserCreateOrConnectWithoutSupportTicketsInput
    connect?: PgUserWhereUniqueInput
  }

  export type PgUserUpdateOneWithoutSupportTicketsNestedInput = {
    create?: XOR<PgUserCreateWithoutSupportTicketsInput, PgUserUncheckedCreateWithoutSupportTicketsInput>
    connectOrCreate?: PgUserCreateOrConnectWithoutSupportTicketsInput
    upsert?: PgUserUpsertWithoutSupportTicketsInput
    disconnect?: PgUserWhereInput | boolean
    delete?: PgUserWhereInput | boolean
    connect?: PgUserWhereUniqueInput
    update?: XOR<XOR<PgUserUpdateToOneWithWhereWithoutSupportTicketsInput, PgUserUpdateWithoutSupportTicketsInput>, PgUserUncheckedUpdateWithoutSupportTicketsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PgResumeCreateWithoutUserInput = {
    mongodbId: string
    atsScore?: number | null
    keywordPct?: number | null
    formattingPct?: number | null
    improvementScore?: number | null
    missingSkills?: PgResumeCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type PgResumeUncheckedCreateWithoutUserInput = {
    mongodbId: string
    atsScore?: number | null
    keywordPct?: number | null
    formattingPct?: number | null
    improvementScore?: number | null
    missingSkills?: PgResumeCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type PgResumeCreateOrConnectWithoutUserInput = {
    where: PgResumeWhereUniqueInput
    create: XOR<PgResumeCreateWithoutUserInput, PgResumeUncheckedCreateWithoutUserInput>
  }

  export type PgResumeCreateManyUserInputEnvelope = {
    data: PgResumeCreateManyUserInput | PgResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PgInterviewLogCreateWithoutUserInput = {
    mongodbId: string
    interviewDate?: Date | string | null
    companyName?: string | null
    jobTitle?: string | null
    interviewType?: string | null
    outcome?: string | null
    difficultyLevel?: string | null
    preparationLevel?: number | null
    technicalRating?: number | null
    problemSolvingRating?: number | null
    communicationRating?: number | null
    behaviouralRating?: number | null
    confidenceRating?: number | null
    nervousnessLevel?: number | null
    usedStar?: boolean | null
    explainedClearly?: boolean | null
    usedRealExamples?: boolean | null
    jobFitScore?: number | null
    performanceScore?: number | null
    overallSelfRating?: number | null
    createdAt?: Date | string
  }

  export type PgInterviewLogUncheckedCreateWithoutUserInput = {
    mongodbId: string
    interviewDate?: Date | string | null
    companyName?: string | null
    jobTitle?: string | null
    interviewType?: string | null
    outcome?: string | null
    difficultyLevel?: string | null
    preparationLevel?: number | null
    technicalRating?: number | null
    problemSolvingRating?: number | null
    communicationRating?: number | null
    behaviouralRating?: number | null
    confidenceRating?: number | null
    nervousnessLevel?: number | null
    usedStar?: boolean | null
    explainedClearly?: boolean | null
    usedRealExamples?: boolean | null
    jobFitScore?: number | null
    performanceScore?: number | null
    overallSelfRating?: number | null
    createdAt?: Date | string
  }

  export type PgInterviewLogCreateOrConnectWithoutUserInput = {
    where: PgInterviewLogWhereUniqueInput
    create: XOR<PgInterviewLogCreateWithoutUserInput, PgInterviewLogUncheckedCreateWithoutUserInput>
  }

  export type PgInterviewLogCreateManyUserInputEnvelope = {
    data: PgInterviewLogCreateManyUserInput | PgInterviewLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PgSupportTicketCreateWithoutUserInput = {
    mongodbId: string
    email: string
    subject: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PgSupportTicketUncheckedCreateWithoutUserInput = {
    mongodbId: string
    email: string
    subject: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PgSupportTicketCreateOrConnectWithoutUserInput = {
    where: PgSupportTicketWhereUniqueInput
    create: XOR<PgSupportTicketCreateWithoutUserInput, PgSupportTicketUncheckedCreateWithoutUserInput>
  }

  export type PgSupportTicketCreateManyUserInputEnvelope = {
    data: PgSupportTicketCreateManyUserInput | PgSupportTicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PgResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: PgResumeWhereUniqueInput
    update: XOR<PgResumeUpdateWithoutUserInput, PgResumeUncheckedUpdateWithoutUserInput>
    create: XOR<PgResumeCreateWithoutUserInput, PgResumeUncheckedCreateWithoutUserInput>
  }

  export type PgResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: PgResumeWhereUniqueInput
    data: XOR<PgResumeUpdateWithoutUserInput, PgResumeUncheckedUpdateWithoutUserInput>
  }

  export type PgResumeUpdateManyWithWhereWithoutUserInput = {
    where: PgResumeScalarWhereInput
    data: XOR<PgResumeUpdateManyMutationInput, PgResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type PgResumeScalarWhereInput = {
    AND?: PgResumeScalarWhereInput | PgResumeScalarWhereInput[]
    OR?: PgResumeScalarWhereInput[]
    NOT?: PgResumeScalarWhereInput | PgResumeScalarWhereInput[]
    mongodbId?: StringFilter<"PgResume"> | string
    userId?: StringFilter<"PgResume"> | string
    atsScore?: IntNullableFilter<"PgResume"> | number | null
    keywordPct?: IntNullableFilter<"PgResume"> | number | null
    formattingPct?: IntNullableFilter<"PgResume"> | number | null
    improvementScore?: IntNullableFilter<"PgResume"> | number | null
    missingSkills?: StringNullableListFilter<"PgResume">
    createdAt?: DateTimeFilter<"PgResume"> | Date | string
  }

  export type PgInterviewLogUpsertWithWhereUniqueWithoutUserInput = {
    where: PgInterviewLogWhereUniqueInput
    update: XOR<PgInterviewLogUpdateWithoutUserInput, PgInterviewLogUncheckedUpdateWithoutUserInput>
    create: XOR<PgInterviewLogCreateWithoutUserInput, PgInterviewLogUncheckedCreateWithoutUserInput>
  }

  export type PgInterviewLogUpdateWithWhereUniqueWithoutUserInput = {
    where: PgInterviewLogWhereUniqueInput
    data: XOR<PgInterviewLogUpdateWithoutUserInput, PgInterviewLogUncheckedUpdateWithoutUserInput>
  }

  export type PgInterviewLogUpdateManyWithWhereWithoutUserInput = {
    where: PgInterviewLogScalarWhereInput
    data: XOR<PgInterviewLogUpdateManyMutationInput, PgInterviewLogUncheckedUpdateManyWithoutUserInput>
  }

  export type PgInterviewLogScalarWhereInput = {
    AND?: PgInterviewLogScalarWhereInput | PgInterviewLogScalarWhereInput[]
    OR?: PgInterviewLogScalarWhereInput[]
    NOT?: PgInterviewLogScalarWhereInput | PgInterviewLogScalarWhereInput[]
    mongodbId?: StringFilter<"PgInterviewLog"> | string
    userId?: StringFilter<"PgInterviewLog"> | string
    interviewDate?: DateTimeNullableFilter<"PgInterviewLog"> | Date | string | null
    companyName?: StringNullableFilter<"PgInterviewLog"> | string | null
    jobTitle?: StringNullableFilter<"PgInterviewLog"> | string | null
    interviewType?: StringNullableFilter<"PgInterviewLog"> | string | null
    outcome?: StringNullableFilter<"PgInterviewLog"> | string | null
    difficultyLevel?: StringNullableFilter<"PgInterviewLog"> | string | null
    preparationLevel?: IntNullableFilter<"PgInterviewLog"> | number | null
    technicalRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    problemSolvingRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    communicationRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    behaviouralRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    confidenceRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    nervousnessLevel?: IntNullableFilter<"PgInterviewLog"> | number | null
    usedStar?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    explainedClearly?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    usedRealExamples?: BoolNullableFilter<"PgInterviewLog"> | boolean | null
    jobFitScore?: IntNullableFilter<"PgInterviewLog"> | number | null
    performanceScore?: IntNullableFilter<"PgInterviewLog"> | number | null
    overallSelfRating?: IntNullableFilter<"PgInterviewLog"> | number | null
    createdAt?: DateTimeFilter<"PgInterviewLog"> | Date | string
  }

  export type PgSupportTicketUpsertWithWhereUniqueWithoutUserInput = {
    where: PgSupportTicketWhereUniqueInput
    update: XOR<PgSupportTicketUpdateWithoutUserInput, PgSupportTicketUncheckedUpdateWithoutUserInput>
    create: XOR<PgSupportTicketCreateWithoutUserInput, PgSupportTicketUncheckedCreateWithoutUserInput>
  }

  export type PgSupportTicketUpdateWithWhereUniqueWithoutUserInput = {
    where: PgSupportTicketWhereUniqueInput
    data: XOR<PgSupportTicketUpdateWithoutUserInput, PgSupportTicketUncheckedUpdateWithoutUserInput>
  }

  export type PgSupportTicketUpdateManyWithWhereWithoutUserInput = {
    where: PgSupportTicketScalarWhereInput
    data: XOR<PgSupportTicketUpdateManyMutationInput, PgSupportTicketUncheckedUpdateManyWithoutUserInput>
  }

  export type PgSupportTicketScalarWhereInput = {
    AND?: PgSupportTicketScalarWhereInput | PgSupportTicketScalarWhereInput[]
    OR?: PgSupportTicketScalarWhereInput[]
    NOT?: PgSupportTicketScalarWhereInput | PgSupportTicketScalarWhereInput[]
    mongodbId?: StringFilter<"PgSupportTicket"> | string
    userId?: StringNullableFilter<"PgSupportTicket"> | string | null
    email?: StringFilter<"PgSupportTicket"> | string
    subject?: StringFilter<"PgSupportTicket"> | string
    content?: StringFilter<"PgSupportTicket"> | string
    status?: StringFilter<"PgSupportTicket"> | string
    createdAt?: DateTimeFilter<"PgSupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"PgSupportTicket"> | Date | string
  }

  export type PgUserCreateWithoutResumesInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    interviewLogs?: PgInterviewLogCreateNestedManyWithoutUserInput
    supportTickets?: PgSupportTicketCreateNestedManyWithoutUserInput
  }

  export type PgUserUncheckedCreateWithoutResumesInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    interviewLogs?: PgInterviewLogUncheckedCreateNestedManyWithoutUserInput
    supportTickets?: PgSupportTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type PgUserCreateOrConnectWithoutResumesInput = {
    where: PgUserWhereUniqueInput
    create: XOR<PgUserCreateWithoutResumesInput, PgUserUncheckedCreateWithoutResumesInput>
  }

  export type PgUserUpsertWithoutResumesInput = {
    update: XOR<PgUserUpdateWithoutResumesInput, PgUserUncheckedUpdateWithoutResumesInput>
    create: XOR<PgUserCreateWithoutResumesInput, PgUserUncheckedCreateWithoutResumesInput>
    where?: PgUserWhereInput
  }

  export type PgUserUpdateToOneWithWhereWithoutResumesInput = {
    where?: PgUserWhereInput
    data: XOR<PgUserUpdateWithoutResumesInput, PgUserUncheckedUpdateWithoutResumesInput>
  }

  export type PgUserUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewLogs?: PgInterviewLogUpdateManyWithoutUserNestedInput
    supportTickets?: PgSupportTicketUpdateManyWithoutUserNestedInput
  }

  export type PgUserUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewLogs?: PgInterviewLogUncheckedUpdateManyWithoutUserNestedInput
    supportTickets?: PgSupportTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PgUserCreateWithoutInterviewLogsInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    resumes?: PgResumeCreateNestedManyWithoutUserInput
    supportTickets?: PgSupportTicketCreateNestedManyWithoutUserInput
  }

  export type PgUserUncheckedCreateWithoutInterviewLogsInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    resumes?: PgResumeUncheckedCreateNestedManyWithoutUserInput
    supportTickets?: PgSupportTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type PgUserCreateOrConnectWithoutInterviewLogsInput = {
    where: PgUserWhereUniqueInput
    create: XOR<PgUserCreateWithoutInterviewLogsInput, PgUserUncheckedCreateWithoutInterviewLogsInput>
  }

  export type PgUserUpsertWithoutInterviewLogsInput = {
    update: XOR<PgUserUpdateWithoutInterviewLogsInput, PgUserUncheckedUpdateWithoutInterviewLogsInput>
    create: XOR<PgUserCreateWithoutInterviewLogsInput, PgUserUncheckedCreateWithoutInterviewLogsInput>
    where?: PgUserWhereInput
  }

  export type PgUserUpdateToOneWithWhereWithoutInterviewLogsInput = {
    where?: PgUserWhereInput
    data: XOR<PgUserUpdateWithoutInterviewLogsInput, PgUserUncheckedUpdateWithoutInterviewLogsInput>
  }

  export type PgUserUpdateWithoutInterviewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: PgResumeUpdateManyWithoutUserNestedInput
    supportTickets?: PgSupportTicketUpdateManyWithoutUserNestedInput
  }

  export type PgUserUncheckedUpdateWithoutInterviewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: PgResumeUncheckedUpdateManyWithoutUserNestedInput
    supportTickets?: PgSupportTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PgUserCreateWithoutSupportTicketsInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    resumes?: PgResumeCreateNestedManyWithoutUserInput
    interviewLogs?: PgInterviewLogCreateNestedManyWithoutUserInput
  }

  export type PgUserUncheckedCreateWithoutSupportTicketsInput = {
    id: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    resumes?: PgResumeUncheckedCreateNestedManyWithoutUserInput
    interviewLogs?: PgInterviewLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type PgUserCreateOrConnectWithoutSupportTicketsInput = {
    where: PgUserWhereUniqueInput
    create: XOR<PgUserCreateWithoutSupportTicketsInput, PgUserUncheckedCreateWithoutSupportTicketsInput>
  }

  export type PgUserUpsertWithoutSupportTicketsInput = {
    update: XOR<PgUserUpdateWithoutSupportTicketsInput, PgUserUncheckedUpdateWithoutSupportTicketsInput>
    create: XOR<PgUserCreateWithoutSupportTicketsInput, PgUserUncheckedCreateWithoutSupportTicketsInput>
    where?: PgUserWhereInput
  }

  export type PgUserUpdateToOneWithWhereWithoutSupportTicketsInput = {
    where?: PgUserWhereInput
    data: XOR<PgUserUpdateWithoutSupportTicketsInput, PgUserUncheckedUpdateWithoutSupportTicketsInput>
  }

  export type PgUserUpdateWithoutSupportTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: PgResumeUpdateManyWithoutUserNestedInput
    interviewLogs?: PgInterviewLogUpdateManyWithoutUserNestedInput
  }

  export type PgUserUncheckedUpdateWithoutSupportTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: PgResumeUncheckedUpdateManyWithoutUserNestedInput
    interviewLogs?: PgInterviewLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PgResumeCreateManyUserInput = {
    mongodbId: string
    atsScore?: number | null
    keywordPct?: number | null
    formattingPct?: number | null
    improvementScore?: number | null
    missingSkills?: PgResumeCreatemissingSkillsInput | string[]
    createdAt?: Date | string
  }

  export type PgInterviewLogCreateManyUserInput = {
    mongodbId: string
    interviewDate?: Date | string | null
    companyName?: string | null
    jobTitle?: string | null
    interviewType?: string | null
    outcome?: string | null
    difficultyLevel?: string | null
    preparationLevel?: number | null
    technicalRating?: number | null
    problemSolvingRating?: number | null
    communicationRating?: number | null
    behaviouralRating?: number | null
    confidenceRating?: number | null
    nervousnessLevel?: number | null
    usedStar?: boolean | null
    explainedClearly?: boolean | null
    usedRealExamples?: boolean | null
    jobFitScore?: number | null
    performanceScore?: number | null
    overallSelfRating?: number | null
    createdAt?: Date | string
  }

  export type PgSupportTicketCreateManyUserInput = {
    mongodbId: string
    email: string
    subject: string
    content: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PgResumeUpdateWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null
    keywordPct?: NullableIntFieldUpdateOperationsInput | number | null
    formattingPct?: NullableIntFieldUpdateOperationsInput | number | null
    improvementScore?: NullableIntFieldUpdateOperationsInput | number | null
    missingSkills?: PgResumeUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgResumeUncheckedUpdateWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null
    keywordPct?: NullableIntFieldUpdateOperationsInput | number | null
    formattingPct?: NullableIntFieldUpdateOperationsInput | number | null
    improvementScore?: NullableIntFieldUpdateOperationsInput | number | null
    missingSkills?: PgResumeUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgResumeUncheckedUpdateManyWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    atsScore?: NullableIntFieldUpdateOperationsInput | number | null
    keywordPct?: NullableIntFieldUpdateOperationsInput | number | null
    formattingPct?: NullableIntFieldUpdateOperationsInput | number | null
    improvementScore?: NullableIntFieldUpdateOperationsInput | number | null
    missingSkills?: PgResumeUpdatemissingSkillsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgInterviewLogUpdateWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    interviewType?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preparationLevel?: NullableIntFieldUpdateOperationsInput | number | null
    technicalRating?: NullableIntFieldUpdateOperationsInput | number | null
    problemSolvingRating?: NullableIntFieldUpdateOperationsInput | number | null
    communicationRating?: NullableIntFieldUpdateOperationsInput | number | null
    behaviouralRating?: NullableIntFieldUpdateOperationsInput | number | null
    confidenceRating?: NullableIntFieldUpdateOperationsInput | number | null
    nervousnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    usedStar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explainedClearly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usedRealExamples?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobFitScore?: NullableIntFieldUpdateOperationsInput | number | null
    performanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallSelfRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgInterviewLogUncheckedUpdateWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    interviewType?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preparationLevel?: NullableIntFieldUpdateOperationsInput | number | null
    technicalRating?: NullableIntFieldUpdateOperationsInput | number | null
    problemSolvingRating?: NullableIntFieldUpdateOperationsInput | number | null
    communicationRating?: NullableIntFieldUpdateOperationsInput | number | null
    behaviouralRating?: NullableIntFieldUpdateOperationsInput | number | null
    confidenceRating?: NullableIntFieldUpdateOperationsInput | number | null
    nervousnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    usedStar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explainedClearly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usedRealExamples?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobFitScore?: NullableIntFieldUpdateOperationsInput | number | null
    performanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallSelfRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgInterviewLogUncheckedUpdateManyWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    interviewDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    interviewType?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    difficultyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preparationLevel?: NullableIntFieldUpdateOperationsInput | number | null
    technicalRating?: NullableIntFieldUpdateOperationsInput | number | null
    problemSolvingRating?: NullableIntFieldUpdateOperationsInput | number | null
    communicationRating?: NullableIntFieldUpdateOperationsInput | number | null
    behaviouralRating?: NullableIntFieldUpdateOperationsInput | number | null
    confidenceRating?: NullableIntFieldUpdateOperationsInput | number | null
    nervousnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    usedStar?: NullableBoolFieldUpdateOperationsInput | boolean | null
    explainedClearly?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usedRealExamples?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobFitScore?: NullableIntFieldUpdateOperationsInput | number | null
    performanceScore?: NullableIntFieldUpdateOperationsInput | number | null
    overallSelfRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgSupportTicketUpdateWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgSupportTicketUncheckedUpdateWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PgSupportTicketUncheckedUpdateManyWithoutUserInput = {
    mongodbId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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