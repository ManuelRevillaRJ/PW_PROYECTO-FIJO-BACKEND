
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model Juego
 * 
 */
export type Juego = $Result.DefaultSelection<Prisma.$JuegoPayload>
/**
 * Model Calificacion
 * 
 */
export type Calificacion = $Result.DefaultSelection<Prisma.$CalificacionPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Plataforma
 * 
 */
export type Plataforma = $Result.DefaultSelection<Prisma.$PlataformaPayload>
/**
 * Model JuegoPlataforma
 * 
 */
export type JuegoPlataforma = $Result.DefaultSelection<Prisma.$JuegoPlataformaPayload>
/**
 * Model Noticia
 * 
 */
export type Noticia = $Result.DefaultSelection<Prisma.$NoticiaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permiso: {
  user: 'user',
  admin: 'admin'
};

export type Permiso = (typeof Permiso)[keyof typeof Permiso]

}

export type Permiso = $Enums.Permiso

export const Permiso: typeof $Enums.Permiso

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juego`: Exposes CRUD operations for the **Juego** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juegos
    * const juegos = await prisma.juego.findMany()
    * ```
    */
  get juego(): Prisma.JuegoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calificacion`: Exposes CRUD operations for the **Calificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calificacions
    * const calificacions = await prisma.calificacion.findMany()
    * ```
    */
  get calificacion(): Prisma.CalificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plataforma`: Exposes CRUD operations for the **Plataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plataformas
    * const plataformas = await prisma.plataforma.findMany()
    * ```
    */
  get plataforma(): Prisma.PlataformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juegoPlataforma`: Exposes CRUD operations for the **JuegoPlataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JuegoPlataformas
    * const juegoPlataformas = await prisma.juegoPlataforma.findMany()
    * ```
    */
  get juegoPlataforma(): Prisma.JuegoPlataformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noticia`: Exposes CRUD operations for the **Noticia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noticias
    * const noticias = await prisma.noticia.findMany()
    * ```
    */
  get noticia(): Prisma.NoticiaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    Usuario: 'Usuario',
    Venta: 'Venta',
    Juego: 'Juego',
    Calificacion: 'Calificacion',
    Categoria: 'Categoria',
    Plataforma: 'Plataforma',
    JuegoPlataforma: 'JuegoPlataforma',
    Noticia: 'Noticia'
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
      modelProps: "usuario" | "venta" | "juego" | "calificacion" | "categoria" | "plataforma" | "juegoPlataforma" | "noticia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      Juego: {
        payload: Prisma.$JuegoPayload<ExtArgs>
        fields: Prisma.JuegoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuegoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuegoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          findFirst: {
            args: Prisma.JuegoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuegoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          findMany: {
            args: Prisma.JuegoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          create: {
            args: Prisma.JuegoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          createMany: {
            args: Prisma.JuegoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuegoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          delete: {
            args: Prisma.JuegoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          update: {
            args: Prisma.JuegoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          deleteMany: {
            args: Prisma.JuegoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuegoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuegoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          upsert: {
            args: Prisma.JuegoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          aggregate: {
            args: Prisma.JuegoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuego>
          }
          groupBy: {
            args: Prisma.JuegoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuegoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuegoCountArgs<ExtArgs>
            result: $Utils.Optional<JuegoCountAggregateOutputType> | number
          }
        }
      }
      Calificacion: {
        payload: Prisma.$CalificacionPayload<ExtArgs>
        fields: Prisma.CalificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          findFirst: {
            args: Prisma.CalificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          findMany: {
            args: Prisma.CalificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>[]
          }
          create: {
            args: Prisma.CalificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          createMany: {
            args: Prisma.CalificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>[]
          }
          delete: {
            args: Prisma.CalificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          update: {
            args: Prisma.CalificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          deleteMany: {
            args: Prisma.CalificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>[]
          }
          upsert: {
            args: Prisma.CalificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          aggregate: {
            args: Prisma.CalificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalificacion>
          }
          groupBy: {
            args: Prisma.CalificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalificacionCountArgs<ExtArgs>
            result: $Utils.Optional<CalificacionCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Plataforma: {
        payload: Prisma.$PlataformaPayload<ExtArgs>
        fields: Prisma.PlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findFirst: {
            args: Prisma.PlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          findMany: {
            args: Prisma.PlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          create: {
            args: Prisma.PlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          createMany: {
            args: Prisma.PlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlataformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          delete: {
            args: Prisma.PlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          update: {
            args: Prisma.PlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          deleteMany: {
            args: Prisma.PlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlataformaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>[]
          }
          upsert: {
            args: Prisma.PlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlataformaPayload>
          }
          aggregate: {
            args: Prisma.PlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlataforma>
          }
          groupBy: {
            args: Prisma.PlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<PlataformaCountAggregateOutputType> | number
          }
        }
      }
      JuegoPlataforma: {
        payload: Prisma.$JuegoPlataformaPayload<ExtArgs>
        fields: Prisma.JuegoPlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuegoPlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuegoPlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>
          }
          findFirst: {
            args: Prisma.JuegoPlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuegoPlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>
          }
          findMany: {
            args: Prisma.JuegoPlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>[]
          }
          create: {
            args: Prisma.JuegoPlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>
          }
          createMany: {
            args: Prisma.JuegoPlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuegoPlataformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>[]
          }
          delete: {
            args: Prisma.JuegoPlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>
          }
          update: {
            args: Prisma.JuegoPlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>
          }
          deleteMany: {
            args: Prisma.JuegoPlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuegoPlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuegoPlataformaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>[]
          }
          upsert: {
            args: Prisma.JuegoPlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPlataformaPayload>
          }
          aggregate: {
            args: Prisma.JuegoPlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuegoPlataforma>
          }
          groupBy: {
            args: Prisma.JuegoPlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuegoPlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuegoPlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<JuegoPlataformaCountAggregateOutputType> | number
          }
        }
      }
      Noticia: {
        payload: Prisma.$NoticiaPayload<ExtArgs>
        fields: Prisma.NoticiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findFirst: {
            args: Prisma.NoticiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          findMany: {
            args: Prisma.NoticiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          create: {
            args: Prisma.NoticiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          createMany: {
            args: Prisma.NoticiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          delete: {
            args: Prisma.NoticiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          update: {
            args: Prisma.NoticiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          deleteMany: {
            args: Prisma.NoticiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>[]
          }
          upsert: {
            args: Prisma.NoticiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticiaPayload>
          }
          aggregate: {
            args: Prisma.NoticiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticia>
          }
          groupBy: {
            args: Prisma.NoticiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticiaCountArgs<ExtArgs>
            result: $Utils.Optional<NoticiaCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    venta?: VentaOmit
    juego?: JuegoOmit
    calificacion?: CalificacionOmit
    categoria?: CategoriaOmit
    plataforma?: PlataformaOmit
    juegoPlataforma?: JuegoPlataformaOmit
    noticia?: NoticiaOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    compras: number
    calificaciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | UsuarioCountOutputTypeCountComprasArgs
    calificaciones?: boolean | UsuarioCountOutputTypeCountCalificacionesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCalificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalificacionWhereInput
  }


  /**
   * Count Type JuegoCountOutputType
   */

  export type JuegoCountOutputType = {
    plataformas: number
    ventas: number
    calificaciones: number
  }

  export type JuegoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plataformas?: boolean | JuegoCountOutputTypeCountPlataformasArgs
    ventas?: boolean | JuegoCountOutputTypeCountVentasArgs
    calificaciones?: boolean | JuegoCountOutputTypeCountCalificacionesArgs
  }

  // Custom InputTypes
  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoCountOutputType
     */
    select?: JuegoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeCountPlataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoPlataformaWhereInput
  }

  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }

  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeCountCalificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalificacionWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    juegos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | CategoriaCountOutputTypeCountJuegosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountJuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoWhereInput
  }


  /**
   * Count Type PlataformaCountOutputType
   */

  export type PlataformaCountOutputType = {
    juegos: number
  }

  export type PlataformaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | PlataformaCountOutputTypeCountJuegosArgs
  }

  // Custom InputTypes
  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlataformaCountOutputType
     */
    select?: PlataformaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlataformaCountOutputType without action
   */
  export type PlataformaCountOutputTypeCountJuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoPlataformaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    correo: string | null
    password: string | null
    nombre: string | null
    token: string | null
    estado: boolean | null
    permiso: $Enums.Permiso | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    correo: string | null
    password: string | null
    nombre: string | null
    token: string | null
    estado: boolean | null
    permiso: $Enums.Permiso | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    correo: number
    password: number
    nombre: number
    token: number
    estado: number
    permiso: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    correo?: true
    password?: true
    nombre?: true
    token?: true
    estado?: true
    permiso?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    correo?: true
    password?: true
    nombre?: true
    token?: true
    estado?: true
    permiso?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    correo?: true
    password?: true
    nombre?: true
    token?: true
    estado?: true
    permiso?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso: $Enums.Permiso
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    password?: boolean
    nombre?: boolean
    token?: boolean
    estado?: boolean
    permiso?: boolean
    compras?: boolean | Usuario$comprasArgs<ExtArgs>
    calificaciones?: boolean | Usuario$calificacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    password?: boolean
    nombre?: boolean
    token?: boolean
    estado?: boolean
    permiso?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    password?: boolean
    nombre?: boolean
    token?: boolean
    estado?: boolean
    permiso?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    correo?: boolean
    password?: boolean
    nombre?: boolean
    token?: boolean
    estado?: boolean
    permiso?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "correo" | "password" | "nombre" | "token" | "estado" | "permiso", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | Usuario$comprasArgs<ExtArgs>
    calificaciones?: boolean | Usuario$calificacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      compras: Prisma.$VentaPayload<ExtArgs>[]
      calificaciones: Prisma.$CalificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      correo: string
      password: string
      nombre: string
      token: string
      estado: boolean
      permiso: $Enums.Permiso
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compras<T extends Usuario$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calificaciones<T extends Usuario$calificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$calificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly token: FieldRef<"Usuario", 'String'>
    readonly estado: FieldRef<"Usuario", 'Boolean'>
    readonly permiso: FieldRef<"Usuario", 'Permiso'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.compras
   */
  export type Usuario$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Usuario.calificaciones
   */
  export type Usuario$calificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    where?: CalificacionWhereInput
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    cursor?: CalificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    juego_id: number | null
    monto_pagado: number | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    juego_id: number | null
    monto_pagado: number | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    usuario_id: number | null
    juego_id: number | null
    codigo: string | null
    monto_pagado: number | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    usuario_id: number | null
    juego_id: number | null
    codigo: string | null
    monto_pagado: number | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    fecha: number
    usuario_id: number
    juego_id: number
    codigo: number
    monto_pagado: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    juego_id?: true
    monto_pagado?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    usuario_id?: true
    juego_id?: true
    monto_pagado?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    fecha?: true
    usuario_id?: true
    juego_id?: true
    codigo?: true
    monto_pagado?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    fecha?: true
    usuario_id?: true
    juego_id?: true
    codigo?: true
    monto_pagado?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    fecha?: true
    usuario_id?: true
    juego_id?: true
    codigo?: true
    monto_pagado?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    fecha: Date
    usuario_id: number
    juego_id: number
    codigo: string
    monto_pagado: number
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    usuario_id?: boolean
    juego_id?: boolean
    codigo?: boolean
    monto_pagado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    usuario_id?: boolean
    juego_id?: boolean
    codigo?: boolean
    monto_pagado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    usuario_id?: boolean
    juego_id?: boolean
    codigo?: boolean
    monto_pagado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    fecha?: boolean
    usuario_id?: boolean
    juego_id?: boolean
    codigo?: boolean
    monto_pagado?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "usuario_id" | "juego_id" | "codigo" | "monto_pagado", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }
  export type VentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }
  export type VentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      juego: Prisma.$JuegoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      usuario_id: number
      juego_id: number
      codigo: string
      monto_pagado: number
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {VentaUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.updateManyAndReturn({
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
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
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
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    juego<T extends JuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegoDefaultArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
    readonly usuario_id: FieldRef<"Venta", 'Int'>
    readonly juego_id: FieldRef<"Venta", 'Int'>
    readonly codigo: FieldRef<"Venta", 'String'>
    readonly monto_pagado: FieldRef<"Venta", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta updateManyAndReturn
   */
  export type VentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model Juego
   */

  export type AggregateJuego = {
    _count: JuegoCountAggregateOutputType | null
    _avg: JuegoAvgAggregateOutputType | null
    _sum: JuegoSumAggregateOutputType | null
    _min: JuegoMinAggregateOutputType | null
    _max: JuegoMaxAggregateOutputType | null
  }

  export type JuegoAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    rating: number | null
    categoria_id: number | null
  }

  export type JuegoSumAggregateOutputType = {
    id: number | null
    precio: number | null
    rating: number | null
    categoria_id: number | null
  }

  export type JuegoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    precio: number | null
    oferta: boolean | null
    rating: number | null
    estado: boolean | null
    categoria_id: number | null
    cover: string | null
    videoURL: string | null
  }

  export type JuegoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    precio: number | null
    oferta: boolean | null
    rating: number | null
    estado: boolean | null
    categoria_id: number | null
    cover: string | null
    videoURL: string | null
  }

  export type JuegoCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    precio: number
    oferta: number
    rating: number
    estado: number
    categoria_id: number
    cover: number
    imagenes: number
    videoURL: number
    _all: number
  }


  export type JuegoAvgAggregateInputType = {
    id?: true
    precio?: true
    rating?: true
    categoria_id?: true
  }

  export type JuegoSumAggregateInputType = {
    id?: true
    precio?: true
    rating?: true
    categoria_id?: true
  }

  export type JuegoMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    precio?: true
    oferta?: true
    rating?: true
    estado?: true
    categoria_id?: true
    cover?: true
    videoURL?: true
  }

  export type JuegoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    precio?: true
    oferta?: true
    rating?: true
    estado?: true
    categoria_id?: true
    cover?: true
    videoURL?: true
  }

  export type JuegoCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    precio?: true
    oferta?: true
    rating?: true
    estado?: true
    categoria_id?: true
    cover?: true
    imagenes?: true
    videoURL?: true
    _all?: true
  }

  export type JuegoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juego to aggregate.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Juegos
    **/
    _count?: true | JuegoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuegoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuegoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuegoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuegoMaxAggregateInputType
  }

  export type GetJuegoAggregateType<T extends JuegoAggregateArgs> = {
        [P in keyof T & keyof AggregateJuego]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuego[P]>
      : GetScalarType<T[P], AggregateJuego[P]>
  }




  export type JuegoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoWhereInput
    orderBy?: JuegoOrderByWithAggregationInput | JuegoOrderByWithAggregationInput[]
    by: JuegoScalarFieldEnum[] | JuegoScalarFieldEnum
    having?: JuegoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuegoCountAggregateInputType | true
    _avg?: JuegoAvgAggregateInputType
    _sum?: JuegoSumAggregateInputType
    _min?: JuegoMinAggregateInputType
    _max?: JuegoMaxAggregateInputType
  }

  export type JuegoGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    categoria_id: number
    cover: string
    imagenes: string[]
    videoURL: string | null
    _count: JuegoCountAggregateOutputType | null
    _avg: JuegoAvgAggregateOutputType | null
    _sum: JuegoSumAggregateOutputType | null
    _min: JuegoMinAggregateOutputType | null
    _max: JuegoMaxAggregateOutputType | null
  }

  type GetJuegoGroupByPayload<T extends JuegoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuegoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuegoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuegoGroupByOutputType[P]>
            : GetScalarType<T[P], JuegoGroupByOutputType[P]>
        }
      >
    >


  export type JuegoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precio?: boolean
    oferta?: boolean
    rating?: boolean
    estado?: boolean
    categoria_id?: boolean
    cover?: boolean
    imagenes?: boolean
    videoURL?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    plataformas?: boolean | Juego$plataformasArgs<ExtArgs>
    ventas?: boolean | Juego$ventasArgs<ExtArgs>
    calificaciones?: boolean | Juego$calificacionesArgs<ExtArgs>
    _count?: boolean | JuegoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precio?: boolean
    oferta?: boolean
    rating?: boolean
    estado?: boolean
    categoria_id?: boolean
    cover?: boolean
    imagenes?: boolean
    videoURL?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precio?: boolean
    oferta?: boolean
    rating?: boolean
    estado?: boolean
    categoria_id?: boolean
    cover?: boolean
    imagenes?: boolean
    videoURL?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    precio?: boolean
    oferta?: boolean
    rating?: boolean
    estado?: boolean
    categoria_id?: boolean
    cover?: boolean
    imagenes?: boolean
    videoURL?: boolean
  }

  export type JuegoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "precio" | "oferta" | "rating" | "estado" | "categoria_id" | "cover" | "imagenes" | "videoURL", ExtArgs["result"]["juego"]>
  export type JuegoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    plataformas?: boolean | Juego$plataformasArgs<ExtArgs>
    ventas?: boolean | Juego$ventasArgs<ExtArgs>
    calificaciones?: boolean | Juego$calificacionesArgs<ExtArgs>
    _count?: boolean | JuegoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JuegoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type JuegoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $JuegoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Juego"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      plataformas: Prisma.$JuegoPlataformaPayload<ExtArgs>[]
      ventas: Prisma.$VentaPayload<ExtArgs>[]
      calificaciones: Prisma.$CalificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      precio: number
      oferta: boolean
      rating: number
      estado: boolean
      categoria_id: number
      cover: string
      imagenes: string[]
      videoURL: string | null
    }, ExtArgs["result"]["juego"]>
    composites: {}
  }

  type JuegoGetPayload<S extends boolean | null | undefined | JuegoDefaultArgs> = $Result.GetResult<Prisma.$JuegoPayload, S>

  type JuegoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuegoCountAggregateInputType | true
    }

  export interface JuegoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Juego'], meta: { name: 'Juego' } }
    /**
     * Find zero or one Juego that matches the filter.
     * @param {JuegoFindUniqueArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuegoFindUniqueArgs>(args: SelectSubset<T, JuegoFindUniqueArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Juego that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuegoFindUniqueOrThrowArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuegoFindUniqueOrThrowArgs>(args: SelectSubset<T, JuegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juego that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindFirstArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuegoFindFirstArgs>(args?: SelectSubset<T, JuegoFindFirstArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juego that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindFirstOrThrowArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuegoFindFirstOrThrowArgs>(args?: SelectSubset<T, JuegoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juegos
     * const juegos = await prisma.juego.findMany()
     * 
     * // Get first 10 Juegos
     * const juegos = await prisma.juego.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const juegoWithIdOnly = await prisma.juego.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JuegoFindManyArgs>(args?: SelectSubset<T, JuegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Juego.
     * @param {JuegoCreateArgs} args - Arguments to create a Juego.
     * @example
     * // Create one Juego
     * const Juego = await prisma.juego.create({
     *   data: {
     *     // ... data to create a Juego
     *   }
     * })
     * 
     */
    create<T extends JuegoCreateArgs>(args: SelectSubset<T, JuegoCreateArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juegos.
     * @param {JuegoCreateManyArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juego = await prisma.juego.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuegoCreateManyArgs>(args?: SelectSubset<T, JuegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Juegos and returns the data saved in the database.
     * @param {JuegoCreateManyAndReturnArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juego = await prisma.juego.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Juegos and only return the `id`
     * const juegoWithIdOnly = await prisma.juego.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuegoCreateManyAndReturnArgs>(args?: SelectSubset<T, JuegoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Juego.
     * @param {JuegoDeleteArgs} args - Arguments to delete one Juego.
     * @example
     * // Delete one Juego
     * const Juego = await prisma.juego.delete({
     *   where: {
     *     // ... filter to delete one Juego
     *   }
     * })
     * 
     */
    delete<T extends JuegoDeleteArgs>(args: SelectSubset<T, JuegoDeleteArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Juego.
     * @param {JuegoUpdateArgs} args - Arguments to update one Juego.
     * @example
     * // Update one Juego
     * const juego = await prisma.juego.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuegoUpdateArgs>(args: SelectSubset<T, JuegoUpdateArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juegos.
     * @param {JuegoDeleteManyArgs} args - Arguments to filter Juegos to delete.
     * @example
     * // Delete a few Juegos
     * const { count } = await prisma.juego.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuegoDeleteManyArgs>(args?: SelectSubset<T, JuegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juegos
     * const juego = await prisma.juego.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuegoUpdateManyArgs>(args: SelectSubset<T, JuegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos and returns the data updated in the database.
     * @param {JuegoUpdateManyAndReturnArgs} args - Arguments to update many Juegos.
     * @example
     * // Update many Juegos
     * const juego = await prisma.juego.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Juegos and only return the `id`
     * const juegoWithIdOnly = await prisma.juego.updateManyAndReturn({
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
    updateManyAndReturn<T extends JuegoUpdateManyAndReturnArgs>(args: SelectSubset<T, JuegoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Juego.
     * @param {JuegoUpsertArgs} args - Arguments to update or create a Juego.
     * @example
     * // Update or create a Juego
     * const juego = await prisma.juego.upsert({
     *   create: {
     *     // ... data to create a Juego
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Juego we want to update
     *   }
     * })
     */
    upsert<T extends JuegoUpsertArgs>(args: SelectSubset<T, JuegoUpsertArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoCountArgs} args - Arguments to filter Juegos to count.
     * @example
     * // Count the number of Juegos
     * const count = await prisma.juego.count({
     *   where: {
     *     // ... the filter for the Juegos we want to count
     *   }
     * })
    **/
    count<T extends JuegoCountArgs>(
      args?: Subset<T, JuegoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuegoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Juego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JuegoAggregateArgs>(args: Subset<T, JuegoAggregateArgs>): Prisma.PrismaPromise<GetJuegoAggregateType<T>>

    /**
     * Group by Juego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoGroupByArgs} args - Group by arguments.
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
      T extends JuegoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuegoGroupByArgs['orderBy'] }
        : { orderBy?: JuegoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JuegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Juego model
   */
  readonly fields: JuegoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Juego.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuegoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plataformas<T extends Juego$plataformasArgs<ExtArgs> = {}>(args?: Subset<T, Juego$plataformasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventas<T extends Juego$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Juego$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calificaciones<T extends Juego$calificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Juego$calificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Juego model
   */
  interface JuegoFieldRefs {
    readonly id: FieldRef<"Juego", 'Int'>
    readonly titulo: FieldRef<"Juego", 'String'>
    readonly descripcion: FieldRef<"Juego", 'String'>
    readonly precio: FieldRef<"Juego", 'Float'>
    readonly oferta: FieldRef<"Juego", 'Boolean'>
    readonly rating: FieldRef<"Juego", 'Float'>
    readonly estado: FieldRef<"Juego", 'Boolean'>
    readonly categoria_id: FieldRef<"Juego", 'Int'>
    readonly cover: FieldRef<"Juego", 'String'>
    readonly imagenes: FieldRef<"Juego", 'String[]'>
    readonly videoURL: FieldRef<"Juego", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Juego findUnique
   */
  export type JuegoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego findUniqueOrThrow
   */
  export type JuegoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego findFirst
   */
  export type JuegoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego findFirstOrThrow
   */
  export type JuegoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego findMany
   */
  export type JuegoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego create
   */
  export type JuegoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The data needed to create a Juego.
     */
    data: XOR<JuegoCreateInput, JuegoUncheckedCreateInput>
  }

  /**
   * Juego createMany
   */
  export type JuegoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Juegos.
     */
    data: JuegoCreateManyInput | JuegoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Juego createManyAndReturn
   */
  export type JuegoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * The data used to create many Juegos.
     */
    data: JuegoCreateManyInput | JuegoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Juego update
   */
  export type JuegoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The data needed to update a Juego.
     */
    data: XOR<JuegoUpdateInput, JuegoUncheckedUpdateInput>
    /**
     * Choose, which Juego to update.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego updateMany
   */
  export type JuegoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Juegos.
     */
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyInput>
    /**
     * Filter which Juegos to update
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to update.
     */
    limit?: number
  }

  /**
   * Juego updateManyAndReturn
   */
  export type JuegoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * The data used to update Juegos.
     */
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyInput>
    /**
     * Filter which Juegos to update
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Juego upsert
   */
  export type JuegoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The filter to search for the Juego to update in case it exists.
     */
    where: JuegoWhereUniqueInput
    /**
     * In case the Juego found by the `where` argument doesn't exist, create a new Juego with this data.
     */
    create: XOR<JuegoCreateInput, JuegoUncheckedCreateInput>
    /**
     * In case the Juego was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuegoUpdateInput, JuegoUncheckedUpdateInput>
  }

  /**
   * Juego delete
   */
  export type JuegoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter which Juego to delete.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego deleteMany
   */
  export type JuegoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juegos to delete
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to delete.
     */
    limit?: number
  }

  /**
   * Juego.plataformas
   */
  export type Juego$plataformasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    where?: JuegoPlataformaWhereInput
    orderBy?: JuegoPlataformaOrderByWithRelationInput | JuegoPlataformaOrderByWithRelationInput[]
    cursor?: JuegoPlataformaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegoPlataformaScalarFieldEnum | JuegoPlataformaScalarFieldEnum[]
  }

  /**
   * Juego.ventas
   */
  export type Juego$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Juego.calificaciones
   */
  export type Juego$calificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    where?: CalificacionWhereInput
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    cursor?: CalificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Juego without action
   */
  export type JuegoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
  }


  /**
   * Model Calificacion
   */

  export type AggregateCalificacion = {
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  export type CalificacionAvgAggregateOutputType = {
    id: number | null
    valoracion: number | null
    juego_id: number | null
    usuario_id: number | null
  }

  export type CalificacionSumAggregateOutputType = {
    id: number | null
    valoracion: number | null
    juego_id: number | null
    usuario_id: number | null
  }

  export type CalificacionMinAggregateOutputType = {
    id: number | null
    valoracion: number | null
    comentario: string | null
    juego_id: number | null
    usuario_id: number | null
  }

  export type CalificacionMaxAggregateOutputType = {
    id: number | null
    valoracion: number | null
    comentario: string | null
    juego_id: number | null
    usuario_id: number | null
  }

  export type CalificacionCountAggregateOutputType = {
    id: number
    valoracion: number
    comentario: number
    juego_id: number
    usuario_id: number
    _all: number
  }


  export type CalificacionAvgAggregateInputType = {
    id?: true
    valoracion?: true
    juego_id?: true
    usuario_id?: true
  }

  export type CalificacionSumAggregateInputType = {
    id?: true
    valoracion?: true
    juego_id?: true
    usuario_id?: true
  }

  export type CalificacionMinAggregateInputType = {
    id?: true
    valoracion?: true
    comentario?: true
    juego_id?: true
    usuario_id?: true
  }

  export type CalificacionMaxAggregateInputType = {
    id?: true
    valoracion?: true
    comentario?: true
    juego_id?: true
    usuario_id?: true
  }

  export type CalificacionCountAggregateInputType = {
    id?: true
    valoracion?: true
    comentario?: true
    juego_id?: true
    usuario_id?: true
    _all?: true
  }

  export type CalificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calificacion to aggregate.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calificacions
    **/
    _count?: true | CalificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalificacionMaxAggregateInputType
  }

  export type GetCalificacionAggregateType<T extends CalificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateCalificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalificacion[P]>
      : GetScalarType<T[P], AggregateCalificacion[P]>
  }




  export type CalificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalificacionWhereInput
    orderBy?: CalificacionOrderByWithAggregationInput | CalificacionOrderByWithAggregationInput[]
    by: CalificacionScalarFieldEnum[] | CalificacionScalarFieldEnum
    having?: CalificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalificacionCountAggregateInputType | true
    _avg?: CalificacionAvgAggregateInputType
    _sum?: CalificacionSumAggregateInputType
    _min?: CalificacionMinAggregateInputType
    _max?: CalificacionMaxAggregateInputType
  }

  export type CalificacionGroupByOutputType = {
    id: number
    valoracion: number
    comentario: string
    juego_id: number
    usuario_id: number
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  type GetCalificacionGroupByPayload<T extends CalificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
            : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
        }
      >
    >


  export type CalificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valoracion?: boolean
    comentario?: boolean
    juego_id?: boolean
    usuario_id?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type CalificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valoracion?: boolean
    comentario?: boolean
    juego_id?: boolean
    usuario_id?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type CalificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valoracion?: boolean
    comentario?: boolean
    juego_id?: boolean
    usuario_id?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type CalificacionSelectScalar = {
    id?: boolean
    valoracion?: boolean
    comentario?: boolean
    juego_id?: boolean
    usuario_id?: boolean
  }

  export type CalificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valoracion" | "comentario" | "juego_id" | "usuario_id", ExtArgs["result"]["calificacion"]>
  export type CalificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CalificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CalificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CalificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calificacion"
    objects: {
      juego: Prisma.$JuegoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valoracion: number
      comentario: string
      juego_id: number
      usuario_id: number
    }, ExtArgs["result"]["calificacion"]>
    composites: {}
  }

  type CalificacionGetPayload<S extends boolean | null | undefined | CalificacionDefaultArgs> = $Result.GetResult<Prisma.$CalificacionPayload, S>

  type CalificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalificacionCountAggregateInputType | true
    }

  export interface CalificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calificacion'], meta: { name: 'Calificacion' } }
    /**
     * Find zero or one Calificacion that matches the filter.
     * @param {CalificacionFindUniqueArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalificacionFindUniqueArgs>(args: SelectSubset<T, CalificacionFindUniqueArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalificacionFindUniqueOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, CalificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionFindFirstArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalificacionFindFirstArgs>(args?: SelectSubset<T, CalificacionFindFirstArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionFindFirstOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, CalificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calificacions
     * const calificacions = await prisma.calificacion.findMany()
     * 
     * // Get first 10 Calificacions
     * const calificacions = await prisma.calificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calificacionWithIdOnly = await prisma.calificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalificacionFindManyArgs>(args?: SelectSubset<T, CalificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calificacion.
     * @param {CalificacionCreateArgs} args - Arguments to create a Calificacion.
     * @example
     * // Create one Calificacion
     * const Calificacion = await prisma.calificacion.create({
     *   data: {
     *     // ... data to create a Calificacion
     *   }
     * })
     * 
     */
    create<T extends CalificacionCreateArgs>(args: SelectSubset<T, CalificacionCreateArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calificacions.
     * @param {CalificacionCreateManyArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalificacionCreateManyArgs>(args?: SelectSubset<T, CalificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calificacions and returns the data saved in the database.
     * @param {CalificacionCreateManyAndReturnArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calificacions and only return the `id`
     * const calificacionWithIdOnly = await prisma.calificacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, CalificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calificacion.
     * @param {CalificacionDeleteArgs} args - Arguments to delete one Calificacion.
     * @example
     * // Delete one Calificacion
     * const Calificacion = await prisma.calificacion.delete({
     *   where: {
     *     // ... filter to delete one Calificacion
     *   }
     * })
     * 
     */
    delete<T extends CalificacionDeleteArgs>(args: SelectSubset<T, CalificacionDeleteArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calificacion.
     * @param {CalificacionUpdateArgs} args - Arguments to update one Calificacion.
     * @example
     * // Update one Calificacion
     * const calificacion = await prisma.calificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalificacionUpdateArgs>(args: SelectSubset<T, CalificacionUpdateArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calificacions.
     * @param {CalificacionDeleteManyArgs} args - Arguments to filter Calificacions to delete.
     * @example
     * // Delete a few Calificacions
     * const { count } = await prisma.calificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalificacionDeleteManyArgs>(args?: SelectSubset<T, CalificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalificacionUpdateManyArgs>(args: SelectSubset<T, CalificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions and returns the data updated in the database.
     * @param {CalificacionUpdateManyAndReturnArgs} args - Arguments to update many Calificacions.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calificacions and only return the `id`
     * const calificacionWithIdOnly = await prisma.calificacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, CalificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calificacion.
     * @param {CalificacionUpsertArgs} args - Arguments to update or create a Calificacion.
     * @example
     * // Update or create a Calificacion
     * const calificacion = await prisma.calificacion.upsert({
     *   create: {
     *     // ... data to create a Calificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calificacion we want to update
     *   }
     * })
     */
    upsert<T extends CalificacionUpsertArgs>(args: SelectSubset<T, CalificacionUpsertArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionCountArgs} args - Arguments to filter Calificacions to count.
     * @example
     * // Count the number of Calificacions
     * const count = await prisma.calificacion.count({
     *   where: {
     *     // ... the filter for the Calificacions we want to count
     *   }
     * })
    **/
    count<T extends CalificacionCountArgs>(
      args?: Subset<T, CalificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalificacionAggregateArgs>(args: Subset<T, CalificacionAggregateArgs>): Prisma.PrismaPromise<GetCalificacionAggregateType<T>>

    /**
     * Group by Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionGroupByArgs} args - Group by arguments.
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
      T extends CalificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalificacionGroupByArgs['orderBy'] }
        : { orderBy?: CalificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calificacion model
   */
  readonly fields: CalificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juego<T extends JuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegoDefaultArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Calificacion model
   */
  interface CalificacionFieldRefs {
    readonly id: FieldRef<"Calificacion", 'Int'>
    readonly valoracion: FieldRef<"Calificacion", 'Float'>
    readonly comentario: FieldRef<"Calificacion", 'String'>
    readonly juego_id: FieldRef<"Calificacion", 'Int'>
    readonly usuario_id: FieldRef<"Calificacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Calificacion findUnique
   */
  export type CalificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion findUniqueOrThrow
   */
  export type CalificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion findFirst
   */
  export type CalificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calificacions.
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Calificacion findFirstOrThrow
   */
  export type CalificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calificacions.
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Calificacion findMany
   */
  export type CalificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacions to fetch.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calificacions.
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Calificacion create
   */
  export type CalificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Calificacion.
     */
    data: XOR<CalificacionCreateInput, CalificacionUncheckedCreateInput>
  }

  /**
   * Calificacion createMany
   */
  export type CalificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calificacions.
     */
    data: CalificacionCreateManyInput | CalificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calificacion createManyAndReturn
   */
  export type CalificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * The data used to create many Calificacions.
     */
    data: CalificacionCreateManyInput | CalificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calificacion update
   */
  export type CalificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Calificacion.
     */
    data: XOR<CalificacionUpdateInput, CalificacionUncheckedUpdateInput>
    /**
     * Choose, which Calificacion to update.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion updateMany
   */
  export type CalificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calificacions.
     */
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyInput>
    /**
     * Filter which Calificacions to update
     */
    where?: CalificacionWhereInput
    /**
     * Limit how many Calificacions to update.
     */
    limit?: number
  }

  /**
   * Calificacion updateManyAndReturn
   */
  export type CalificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * The data used to update Calificacions.
     */
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyInput>
    /**
     * Filter which Calificacions to update
     */
    where?: CalificacionWhereInput
    /**
     * Limit how many Calificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calificacion upsert
   */
  export type CalificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Calificacion to update in case it exists.
     */
    where: CalificacionWhereUniqueInput
    /**
     * In case the Calificacion found by the `where` argument doesn't exist, create a new Calificacion with this data.
     */
    create: XOR<CalificacionCreateInput, CalificacionUncheckedCreateInput>
    /**
     * In case the Calificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalificacionUpdateInput, CalificacionUncheckedUpdateInput>
  }

  /**
   * Calificacion delete
   */
  export type CalificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter which Calificacion to delete.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion deleteMany
   */
  export type CalificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calificacions to delete
     */
    where?: CalificacionWhereInput
    /**
     * Limit how many Calificacions to delete.
     */
    limit?: number
  }

  /**
   * Calificacion without action
   */
  export type CalificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    juegos?: boolean | Categoria$juegosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | Categoria$juegosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      juegos: Prisma.$JuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juegos<T extends Categoria$juegosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$juegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.juegos
   */
  export type Categoria$juegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    where?: JuegoWhereInput
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    cursor?: JuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Plataforma
   */

  export type AggregatePlataforma = {
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  export type PlataformaAvgAggregateOutputType = {
    id: number | null
  }

  export type PlataformaSumAggregateOutputType = {
    id: number | null
  }

  export type PlataformaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PlataformaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PlataformaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PlataformaAvgAggregateInputType = {
    id?: true
  }

  export type PlataformaSumAggregateInputType = {
    id?: true
  }

  export type PlataformaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PlataformaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PlataformaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataforma to aggregate.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plataformas
    **/
    _count?: true | PlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlataformaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlataformaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlataformaMaxAggregateInputType
  }

  export type GetPlataformaAggregateType<T extends PlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlataforma[P]>
      : GetScalarType<T[P], AggregatePlataforma[P]>
  }




  export type PlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlataformaWhereInput
    orderBy?: PlataformaOrderByWithAggregationInput | PlataformaOrderByWithAggregationInput[]
    by: PlataformaScalarFieldEnum[] | PlataformaScalarFieldEnum
    having?: PlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlataformaCountAggregateInputType | true
    _avg?: PlataformaAvgAggregateInputType
    _sum?: PlataformaSumAggregateInputType
    _min?: PlataformaMinAggregateInputType
    _max?: PlataformaMaxAggregateInputType
  }

  export type PlataformaGroupByOutputType = {
    id: number
    nombre: string
    _count: PlataformaCountAggregateOutputType | null
    _avg: PlataformaAvgAggregateOutputType | null
    _sum: PlataformaSumAggregateOutputType | null
    _min: PlataformaMinAggregateOutputType | null
    _max: PlataformaMaxAggregateOutputType | null
  }

  type GetPlataformaGroupByPayload<T extends PlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], PlataformaGroupByOutputType[P]>
        }
      >
    >


  export type PlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    juegos?: boolean | Plataforma$juegosArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["plataforma"]>

  export type PlataformaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PlataformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["plataforma"]>
  export type PlataformaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | Plataforma$juegosArgs<ExtArgs>
    _count?: boolean | PlataformaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlataformaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlataformaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plataforma"
    objects: {
      juegos: Prisma.$JuegoPlataformaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["plataforma"]>
    composites: {}
  }

  type PlataformaGetPayload<S extends boolean | null | undefined | PlataformaDefaultArgs> = $Result.GetResult<Prisma.$PlataformaPayload, S>

  type PlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlataformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlataformaCountAggregateInputType | true
    }

  export interface PlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plataforma'], meta: { name: 'Plataforma' } }
    /**
     * Find zero or one Plataforma that matches the filter.
     * @param {PlataformaFindUniqueArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlataformaFindUniqueArgs>(args: SelectSubset<T, PlataformaFindUniqueArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plataforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlataformaFindUniqueOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlataformaFindFirstArgs>(args?: SelectSubset<T, PlataformaFindFirstArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindFirstOrThrowArgs} args - Arguments to find a Plataforma
     * @example
     * // Get one Plataforma
     * const plataforma = await prisma.plataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plataformas
     * const plataformas = await prisma.plataforma.findMany()
     * 
     * // Get first 10 Plataformas
     * const plataformas = await prisma.plataforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlataformaFindManyArgs>(args?: SelectSubset<T, PlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plataforma.
     * @param {PlataformaCreateArgs} args - Arguments to create a Plataforma.
     * @example
     * // Create one Plataforma
     * const Plataforma = await prisma.plataforma.create({
     *   data: {
     *     // ... data to create a Plataforma
     *   }
     * })
     * 
     */
    create<T extends PlataformaCreateArgs>(args: SelectSubset<T, PlataformaCreateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plataformas.
     * @param {PlataformaCreateManyArgs} args - Arguments to create many Plataformas.
     * @example
     * // Create many Plataformas
     * const plataforma = await prisma.plataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlataformaCreateManyArgs>(args?: SelectSubset<T, PlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plataformas and returns the data saved in the database.
     * @param {PlataformaCreateManyAndReturnArgs} args - Arguments to create many Plataformas.
     * @example
     * // Create many Plataformas
     * const plataforma = await prisma.plataforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plataformas and only return the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlataformaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlataformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plataforma.
     * @param {PlataformaDeleteArgs} args - Arguments to delete one Plataforma.
     * @example
     * // Delete one Plataforma
     * const Plataforma = await prisma.plataforma.delete({
     *   where: {
     *     // ... filter to delete one Plataforma
     *   }
     * })
     * 
     */
    delete<T extends PlataformaDeleteArgs>(args: SelectSubset<T, PlataformaDeleteArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plataforma.
     * @param {PlataformaUpdateArgs} args - Arguments to update one Plataforma.
     * @example
     * // Update one Plataforma
     * const plataforma = await prisma.plataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlataformaUpdateArgs>(args: SelectSubset<T, PlataformaUpdateArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plataformas.
     * @param {PlataformaDeleteManyArgs} args - Arguments to filter Plataformas to delete.
     * @example
     * // Delete a few Plataformas
     * const { count } = await prisma.plataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlataformaDeleteManyArgs>(args?: SelectSubset<T, PlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plataformas
     * const plataforma = await prisma.plataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlataformaUpdateManyArgs>(args: SelectSubset<T, PlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plataformas and returns the data updated in the database.
     * @param {PlataformaUpdateManyAndReturnArgs} args - Arguments to update many Plataformas.
     * @example
     * // Update many Plataformas
     * const plataforma = await prisma.plataforma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plataformas and only return the `id`
     * const plataformaWithIdOnly = await prisma.plataforma.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlataformaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlataformaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plataforma.
     * @param {PlataformaUpsertArgs} args - Arguments to update or create a Plataforma.
     * @example
     * // Update or create a Plataforma
     * const plataforma = await prisma.plataforma.upsert({
     *   create: {
     *     // ... data to create a Plataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plataforma we want to update
     *   }
     * })
     */
    upsert<T extends PlataformaUpsertArgs>(args: SelectSubset<T, PlataformaUpsertArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaCountArgs} args - Arguments to filter Plataformas to count.
     * @example
     * // Count the number of Plataformas
     * const count = await prisma.plataforma.count({
     *   where: {
     *     // ... the filter for the Plataformas we want to count
     *   }
     * })
    **/
    count<T extends PlataformaCountArgs>(
      args?: Subset<T, PlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlataformaAggregateArgs>(args: Subset<T, PlataformaAggregateArgs>): Prisma.PrismaPromise<GetPlataformaAggregateType<T>>

    /**
     * Group by Plataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlataformaGroupByArgs} args - Group by arguments.
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
      T extends PlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlataformaGroupByArgs['orderBy'] }
        : { orderBy?: PlataformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plataforma model
   */
  readonly fields: PlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juegos<T extends Plataforma$juegosArgs<ExtArgs> = {}>(args?: Subset<T, Plataforma$juegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plataforma model
   */
  interface PlataformaFieldRefs {
    readonly id: FieldRef<"Plataforma", 'Int'>
    readonly nombre: FieldRef<"Plataforma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plataforma findUnique
   */
  export type PlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findUniqueOrThrow
   */
  export type PlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma findFirst
   */
  export type PlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findFirstOrThrow
   */
  export type PlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataforma to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plataformas.
     */
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma findMany
   */
  export type PlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter, which Plataformas to fetch.
     */
    where?: PlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plataformas to fetch.
     */
    orderBy?: PlataformaOrderByWithRelationInput | PlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plataformas.
     */
    cursor?: PlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plataformas.
     */
    skip?: number
    distinct?: PlataformaScalarFieldEnum | PlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma create
   */
  export type PlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to create a Plataforma.
     */
    data: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
  }

  /**
   * Plataforma createMany
   */
  export type PlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plataformas.
     */
    data: PlataformaCreateManyInput | PlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plataforma createManyAndReturn
   */
  export type PlataformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * The data used to create many Plataformas.
     */
    data: PlataformaCreateManyInput | PlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plataforma update
   */
  export type PlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The data needed to update a Plataforma.
     */
    data: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
    /**
     * Choose, which Plataforma to update.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma updateMany
   */
  export type PlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plataformas.
     */
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyInput>
    /**
     * Filter which Plataformas to update
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to update.
     */
    limit?: number
  }

  /**
   * Plataforma updateManyAndReturn
   */
  export type PlataformaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * The data used to update Plataformas.
     */
    data: XOR<PlataformaUpdateManyMutationInput, PlataformaUncheckedUpdateManyInput>
    /**
     * Filter which Plataformas to update
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to update.
     */
    limit?: number
  }

  /**
   * Plataforma upsert
   */
  export type PlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * The filter to search for the Plataforma to update in case it exists.
     */
    where: PlataformaWhereUniqueInput
    /**
     * In case the Plataforma found by the `where` argument doesn't exist, create a new Plataforma with this data.
     */
    create: XOR<PlataformaCreateInput, PlataformaUncheckedCreateInput>
    /**
     * In case the Plataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlataformaUpdateInput, PlataformaUncheckedUpdateInput>
  }

  /**
   * Plataforma delete
   */
  export type PlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
    /**
     * Filter which Plataforma to delete.
     */
    where: PlataformaWhereUniqueInput
  }

  /**
   * Plataforma deleteMany
   */
  export type PlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plataformas to delete
     */
    where?: PlataformaWhereInput
    /**
     * Limit how many Plataformas to delete.
     */
    limit?: number
  }

  /**
   * Plataforma.juegos
   */
  export type Plataforma$juegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    where?: JuegoPlataformaWhereInput
    orderBy?: JuegoPlataformaOrderByWithRelationInput | JuegoPlataformaOrderByWithRelationInput[]
    cursor?: JuegoPlataformaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegoPlataformaScalarFieldEnum | JuegoPlataformaScalarFieldEnum[]
  }

  /**
   * Plataforma without action
   */
  export type PlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plataforma
     */
    select?: PlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plataforma
     */
    omit?: PlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlataformaInclude<ExtArgs> | null
  }


  /**
   * Model JuegoPlataforma
   */

  export type AggregateJuegoPlataforma = {
    _count: JuegoPlataformaCountAggregateOutputType | null
    _avg: JuegoPlataformaAvgAggregateOutputType | null
    _sum: JuegoPlataformaSumAggregateOutputType | null
    _min: JuegoPlataformaMinAggregateOutputType | null
    _max: JuegoPlataformaMaxAggregateOutputType | null
  }

  export type JuegoPlataformaAvgAggregateOutputType = {
    juegoId: number | null
    plataformaId: number | null
  }

  export type JuegoPlataformaSumAggregateOutputType = {
    juegoId: number | null
    plataformaId: number | null
  }

  export type JuegoPlataformaMinAggregateOutputType = {
    juegoId: number | null
    plataformaId: number | null
  }

  export type JuegoPlataformaMaxAggregateOutputType = {
    juegoId: number | null
    plataformaId: number | null
  }

  export type JuegoPlataformaCountAggregateOutputType = {
    juegoId: number
    plataformaId: number
    _all: number
  }


  export type JuegoPlataformaAvgAggregateInputType = {
    juegoId?: true
    plataformaId?: true
  }

  export type JuegoPlataformaSumAggregateInputType = {
    juegoId?: true
    plataformaId?: true
  }

  export type JuegoPlataformaMinAggregateInputType = {
    juegoId?: true
    plataformaId?: true
  }

  export type JuegoPlataformaMaxAggregateInputType = {
    juegoId?: true
    plataformaId?: true
  }

  export type JuegoPlataformaCountAggregateInputType = {
    juegoId?: true
    plataformaId?: true
    _all?: true
  }

  export type JuegoPlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JuegoPlataforma to aggregate.
     */
    where?: JuegoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegoPlataformas to fetch.
     */
    orderBy?: JuegoPlataformaOrderByWithRelationInput | JuegoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuegoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JuegoPlataformas
    **/
    _count?: true | JuegoPlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuegoPlataformaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuegoPlataformaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuegoPlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuegoPlataformaMaxAggregateInputType
  }

  export type GetJuegoPlataformaAggregateType<T extends JuegoPlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregateJuegoPlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuegoPlataforma[P]>
      : GetScalarType<T[P], AggregateJuegoPlataforma[P]>
  }




  export type JuegoPlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoPlataformaWhereInput
    orderBy?: JuegoPlataformaOrderByWithAggregationInput | JuegoPlataformaOrderByWithAggregationInput[]
    by: JuegoPlataformaScalarFieldEnum[] | JuegoPlataformaScalarFieldEnum
    having?: JuegoPlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuegoPlataformaCountAggregateInputType | true
    _avg?: JuegoPlataformaAvgAggregateInputType
    _sum?: JuegoPlataformaSumAggregateInputType
    _min?: JuegoPlataformaMinAggregateInputType
    _max?: JuegoPlataformaMaxAggregateInputType
  }

  export type JuegoPlataformaGroupByOutputType = {
    juegoId: number
    plataformaId: number
    _count: JuegoPlataformaCountAggregateOutputType | null
    _avg: JuegoPlataformaAvgAggregateOutputType | null
    _sum: JuegoPlataformaSumAggregateOutputType | null
    _min: JuegoPlataformaMinAggregateOutputType | null
    _max: JuegoPlataformaMaxAggregateOutputType | null
  }

  type GetJuegoPlataformaGroupByPayload<T extends JuegoPlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuegoPlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuegoPlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuegoPlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], JuegoPlataformaGroupByOutputType[P]>
        }
      >
    >


  export type JuegoPlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    juegoId?: boolean
    plataformaId?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juegoPlataforma"]>

  export type JuegoPlataformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    juegoId?: boolean
    plataformaId?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juegoPlataforma"]>

  export type JuegoPlataformaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    juegoId?: boolean
    plataformaId?: boolean
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juegoPlataforma"]>

  export type JuegoPlataformaSelectScalar = {
    juegoId?: boolean
    plataformaId?: boolean
  }

  export type JuegoPlataformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"juegoId" | "plataformaId", ExtArgs["result"]["juegoPlataforma"]>
  export type JuegoPlataformaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }
  export type JuegoPlataformaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }
  export type JuegoPlataformaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juego?: boolean | JuegoDefaultArgs<ExtArgs>
    plataforma?: boolean | PlataformaDefaultArgs<ExtArgs>
  }

  export type $JuegoPlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JuegoPlataforma"
    objects: {
      juego: Prisma.$JuegoPayload<ExtArgs>
      plataforma: Prisma.$PlataformaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      juegoId: number
      plataformaId: number
    }, ExtArgs["result"]["juegoPlataforma"]>
    composites: {}
  }

  type JuegoPlataformaGetPayload<S extends boolean | null | undefined | JuegoPlataformaDefaultArgs> = $Result.GetResult<Prisma.$JuegoPlataformaPayload, S>

  type JuegoPlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuegoPlataformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuegoPlataformaCountAggregateInputType | true
    }

  export interface JuegoPlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JuegoPlataforma'], meta: { name: 'JuegoPlataforma' } }
    /**
     * Find zero or one JuegoPlataforma that matches the filter.
     * @param {JuegoPlataformaFindUniqueArgs} args - Arguments to find a JuegoPlataforma
     * @example
     * // Get one JuegoPlataforma
     * const juegoPlataforma = await prisma.juegoPlataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuegoPlataformaFindUniqueArgs>(args: SelectSubset<T, JuegoPlataformaFindUniqueArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JuegoPlataforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuegoPlataformaFindUniqueOrThrowArgs} args - Arguments to find a JuegoPlataforma
     * @example
     * // Get one JuegoPlataforma
     * const juegoPlataforma = await prisma.juegoPlataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuegoPlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, JuegoPlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JuegoPlataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoPlataformaFindFirstArgs} args - Arguments to find a JuegoPlataforma
     * @example
     * // Get one JuegoPlataforma
     * const juegoPlataforma = await prisma.juegoPlataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuegoPlataformaFindFirstArgs>(args?: SelectSubset<T, JuegoPlataformaFindFirstArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JuegoPlataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoPlataformaFindFirstOrThrowArgs} args - Arguments to find a JuegoPlataforma
     * @example
     * // Get one JuegoPlataforma
     * const juegoPlataforma = await prisma.juegoPlataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuegoPlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, JuegoPlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JuegoPlataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoPlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JuegoPlataformas
     * const juegoPlataformas = await prisma.juegoPlataforma.findMany()
     * 
     * // Get first 10 JuegoPlataformas
     * const juegoPlataformas = await prisma.juegoPlataforma.findMany({ take: 10 })
     * 
     * // Only select the `juegoId`
     * const juegoPlataformaWithJuegoIdOnly = await prisma.juegoPlataforma.findMany({ select: { juegoId: true } })
     * 
     */
    findMany<T extends JuegoPlataformaFindManyArgs>(args?: SelectSubset<T, JuegoPlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JuegoPlataforma.
     * @param {JuegoPlataformaCreateArgs} args - Arguments to create a JuegoPlataforma.
     * @example
     * // Create one JuegoPlataforma
     * const JuegoPlataforma = await prisma.juegoPlataforma.create({
     *   data: {
     *     // ... data to create a JuegoPlataforma
     *   }
     * })
     * 
     */
    create<T extends JuegoPlataformaCreateArgs>(args: SelectSubset<T, JuegoPlataformaCreateArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JuegoPlataformas.
     * @param {JuegoPlataformaCreateManyArgs} args - Arguments to create many JuegoPlataformas.
     * @example
     * // Create many JuegoPlataformas
     * const juegoPlataforma = await prisma.juegoPlataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuegoPlataformaCreateManyArgs>(args?: SelectSubset<T, JuegoPlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JuegoPlataformas and returns the data saved in the database.
     * @param {JuegoPlataformaCreateManyAndReturnArgs} args - Arguments to create many JuegoPlataformas.
     * @example
     * // Create many JuegoPlataformas
     * const juegoPlataforma = await prisma.juegoPlataforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JuegoPlataformas and only return the `juegoId`
     * const juegoPlataformaWithJuegoIdOnly = await prisma.juegoPlataforma.createManyAndReturn({
     *   select: { juegoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuegoPlataformaCreateManyAndReturnArgs>(args?: SelectSubset<T, JuegoPlataformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JuegoPlataforma.
     * @param {JuegoPlataformaDeleteArgs} args - Arguments to delete one JuegoPlataforma.
     * @example
     * // Delete one JuegoPlataforma
     * const JuegoPlataforma = await prisma.juegoPlataforma.delete({
     *   where: {
     *     // ... filter to delete one JuegoPlataforma
     *   }
     * })
     * 
     */
    delete<T extends JuegoPlataformaDeleteArgs>(args: SelectSubset<T, JuegoPlataformaDeleteArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JuegoPlataforma.
     * @param {JuegoPlataformaUpdateArgs} args - Arguments to update one JuegoPlataforma.
     * @example
     * // Update one JuegoPlataforma
     * const juegoPlataforma = await prisma.juegoPlataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuegoPlataformaUpdateArgs>(args: SelectSubset<T, JuegoPlataformaUpdateArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JuegoPlataformas.
     * @param {JuegoPlataformaDeleteManyArgs} args - Arguments to filter JuegoPlataformas to delete.
     * @example
     * // Delete a few JuegoPlataformas
     * const { count } = await prisma.juegoPlataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuegoPlataformaDeleteManyArgs>(args?: SelectSubset<T, JuegoPlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JuegoPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoPlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JuegoPlataformas
     * const juegoPlataforma = await prisma.juegoPlataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuegoPlataformaUpdateManyArgs>(args: SelectSubset<T, JuegoPlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JuegoPlataformas and returns the data updated in the database.
     * @param {JuegoPlataformaUpdateManyAndReturnArgs} args - Arguments to update many JuegoPlataformas.
     * @example
     * // Update many JuegoPlataformas
     * const juegoPlataforma = await prisma.juegoPlataforma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JuegoPlataformas and only return the `juegoId`
     * const juegoPlataformaWithJuegoIdOnly = await prisma.juegoPlataforma.updateManyAndReturn({
     *   select: { juegoId: true },
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
    updateManyAndReturn<T extends JuegoPlataformaUpdateManyAndReturnArgs>(args: SelectSubset<T, JuegoPlataformaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JuegoPlataforma.
     * @param {JuegoPlataformaUpsertArgs} args - Arguments to update or create a JuegoPlataforma.
     * @example
     * // Update or create a JuegoPlataforma
     * const juegoPlataforma = await prisma.juegoPlataforma.upsert({
     *   create: {
     *     // ... data to create a JuegoPlataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JuegoPlataforma we want to update
     *   }
     * })
     */
    upsert<T extends JuegoPlataformaUpsertArgs>(args: SelectSubset<T, JuegoPlataformaUpsertArgs<ExtArgs>>): Prisma__JuegoPlataformaClient<$Result.GetResult<Prisma.$JuegoPlataformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JuegoPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoPlataformaCountArgs} args - Arguments to filter JuegoPlataformas to count.
     * @example
     * // Count the number of JuegoPlataformas
     * const count = await prisma.juegoPlataforma.count({
     *   where: {
     *     // ... the filter for the JuegoPlataformas we want to count
     *   }
     * })
    **/
    count<T extends JuegoPlataformaCountArgs>(
      args?: Subset<T, JuegoPlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuegoPlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JuegoPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoPlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JuegoPlataformaAggregateArgs>(args: Subset<T, JuegoPlataformaAggregateArgs>): Prisma.PrismaPromise<GetJuegoPlataformaAggregateType<T>>

    /**
     * Group by JuegoPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoPlataformaGroupByArgs} args - Group by arguments.
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
      T extends JuegoPlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuegoPlataformaGroupByArgs['orderBy'] }
        : { orderBy?: JuegoPlataformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JuegoPlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuegoPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JuegoPlataforma model
   */
  readonly fields: JuegoPlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JuegoPlataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuegoPlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juego<T extends JuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegoDefaultArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plataforma<T extends PlataformaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlataformaDefaultArgs<ExtArgs>>): Prisma__PlataformaClient<$Result.GetResult<Prisma.$PlataformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JuegoPlataforma model
   */
  interface JuegoPlataformaFieldRefs {
    readonly juegoId: FieldRef<"JuegoPlataforma", 'Int'>
    readonly plataformaId: FieldRef<"JuegoPlataforma", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JuegoPlataforma findUnique
   */
  export type JuegoPlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which JuegoPlataforma to fetch.
     */
    where: JuegoPlataformaWhereUniqueInput
  }

  /**
   * JuegoPlataforma findUniqueOrThrow
   */
  export type JuegoPlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which JuegoPlataforma to fetch.
     */
    where: JuegoPlataformaWhereUniqueInput
  }

  /**
   * JuegoPlataforma findFirst
   */
  export type JuegoPlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which JuegoPlataforma to fetch.
     */
    where?: JuegoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegoPlataformas to fetch.
     */
    orderBy?: JuegoPlataformaOrderByWithRelationInput | JuegoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JuegoPlataformas.
     */
    cursor?: JuegoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JuegoPlataformas.
     */
    distinct?: JuegoPlataformaScalarFieldEnum | JuegoPlataformaScalarFieldEnum[]
  }

  /**
   * JuegoPlataforma findFirstOrThrow
   */
  export type JuegoPlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which JuegoPlataforma to fetch.
     */
    where?: JuegoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegoPlataformas to fetch.
     */
    orderBy?: JuegoPlataformaOrderByWithRelationInput | JuegoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JuegoPlataformas.
     */
    cursor?: JuegoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegoPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JuegoPlataformas.
     */
    distinct?: JuegoPlataformaScalarFieldEnum | JuegoPlataformaScalarFieldEnum[]
  }

  /**
   * JuegoPlataforma findMany
   */
  export type JuegoPlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * Filter, which JuegoPlataformas to fetch.
     */
    where?: JuegoPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegoPlataformas to fetch.
     */
    orderBy?: JuegoPlataformaOrderByWithRelationInput | JuegoPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JuegoPlataformas.
     */
    cursor?: JuegoPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegoPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegoPlataformas.
     */
    skip?: number
    distinct?: JuegoPlataformaScalarFieldEnum | JuegoPlataformaScalarFieldEnum[]
  }

  /**
   * JuegoPlataforma create
   */
  export type JuegoPlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * The data needed to create a JuegoPlataforma.
     */
    data: XOR<JuegoPlataformaCreateInput, JuegoPlataformaUncheckedCreateInput>
  }

  /**
   * JuegoPlataforma createMany
   */
  export type JuegoPlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JuegoPlataformas.
     */
    data: JuegoPlataformaCreateManyInput | JuegoPlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JuegoPlataforma createManyAndReturn
   */
  export type JuegoPlataformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * The data used to create many JuegoPlataformas.
     */
    data: JuegoPlataformaCreateManyInput | JuegoPlataformaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JuegoPlataforma update
   */
  export type JuegoPlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * The data needed to update a JuegoPlataforma.
     */
    data: XOR<JuegoPlataformaUpdateInput, JuegoPlataformaUncheckedUpdateInput>
    /**
     * Choose, which JuegoPlataforma to update.
     */
    where: JuegoPlataformaWhereUniqueInput
  }

  /**
   * JuegoPlataforma updateMany
   */
  export type JuegoPlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JuegoPlataformas.
     */
    data: XOR<JuegoPlataformaUpdateManyMutationInput, JuegoPlataformaUncheckedUpdateManyInput>
    /**
     * Filter which JuegoPlataformas to update
     */
    where?: JuegoPlataformaWhereInput
    /**
     * Limit how many JuegoPlataformas to update.
     */
    limit?: number
  }

  /**
   * JuegoPlataforma updateManyAndReturn
   */
  export type JuegoPlataformaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * The data used to update JuegoPlataformas.
     */
    data: XOR<JuegoPlataformaUpdateManyMutationInput, JuegoPlataformaUncheckedUpdateManyInput>
    /**
     * Filter which JuegoPlataformas to update
     */
    where?: JuegoPlataformaWhereInput
    /**
     * Limit how many JuegoPlataformas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JuegoPlataforma upsert
   */
  export type JuegoPlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * The filter to search for the JuegoPlataforma to update in case it exists.
     */
    where: JuegoPlataformaWhereUniqueInput
    /**
     * In case the JuegoPlataforma found by the `where` argument doesn't exist, create a new JuegoPlataforma with this data.
     */
    create: XOR<JuegoPlataformaCreateInput, JuegoPlataformaUncheckedCreateInput>
    /**
     * In case the JuegoPlataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuegoPlataformaUpdateInput, JuegoPlataformaUncheckedUpdateInput>
  }

  /**
   * JuegoPlataforma delete
   */
  export type JuegoPlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
    /**
     * Filter which JuegoPlataforma to delete.
     */
    where: JuegoPlataformaWhereUniqueInput
  }

  /**
   * JuegoPlataforma deleteMany
   */
  export type JuegoPlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JuegoPlataformas to delete
     */
    where?: JuegoPlataformaWhereInput
    /**
     * Limit how many JuegoPlataformas to delete.
     */
    limit?: number
  }

  /**
   * JuegoPlataforma without action
   */
  export type JuegoPlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoPlataforma
     */
    select?: JuegoPlataformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegoPlataforma
     */
    omit?: JuegoPlataformaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoPlataformaInclude<ExtArgs> | null
  }


  /**
   * Model Noticia
   */

  export type AggregateNoticia = {
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  export type NoticiaAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticiaSumAggregateOutputType = {
    id: number | null
  }

  export type NoticiaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    texto: string | null
    activo: boolean | null
  }

  export type NoticiaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    texto: string | null
    activo: boolean | null
  }

  export type NoticiaCountAggregateOutputType = {
    id: number
    titulo: number
    texto: number
    activo: number
    _all: number
  }


  export type NoticiaAvgAggregateInputType = {
    id?: true
  }

  export type NoticiaSumAggregateInputType = {
    id?: true
  }

  export type NoticiaMinAggregateInputType = {
    id?: true
    titulo?: true
    texto?: true
    activo?: true
  }

  export type NoticiaMaxAggregateInputType = {
    id?: true
    titulo?: true
    texto?: true
    activo?: true
  }

  export type NoticiaCountAggregateInputType = {
    id?: true
    titulo?: true
    texto?: true
    activo?: true
    _all?: true
  }

  export type NoticiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticia to aggregate.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Noticias
    **/
    _count?: true | NoticiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticiaMaxAggregateInputType
  }

  export type GetNoticiaAggregateType<T extends NoticiaAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticia[P]>
      : GetScalarType<T[P], AggregateNoticia[P]>
  }




  export type NoticiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticiaWhereInput
    orderBy?: NoticiaOrderByWithAggregationInput | NoticiaOrderByWithAggregationInput[]
    by: NoticiaScalarFieldEnum[] | NoticiaScalarFieldEnum
    having?: NoticiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticiaCountAggregateInputType | true
    _avg?: NoticiaAvgAggregateInputType
    _sum?: NoticiaSumAggregateInputType
    _min?: NoticiaMinAggregateInputType
    _max?: NoticiaMaxAggregateInputType
  }

  export type NoticiaGroupByOutputType = {
    id: number
    titulo: string
    texto: string
    activo: boolean
    _count: NoticiaCountAggregateOutputType | null
    _avg: NoticiaAvgAggregateOutputType | null
    _sum: NoticiaSumAggregateOutputType | null
    _min: NoticiaMinAggregateOutputType | null
    _max: NoticiaMaxAggregateOutputType | null
  }

  type GetNoticiaGroupByPayload<T extends NoticiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
            : GetScalarType<T[P], NoticiaGroupByOutputType[P]>
        }
      >
    >


  export type NoticiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    texto?: boolean
    activo?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    texto?: boolean
    activo?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    texto?: boolean
    activo?: boolean
  }, ExtArgs["result"]["noticia"]>

  export type NoticiaSelectScalar = {
    id?: boolean
    titulo?: boolean
    texto?: boolean
    activo?: boolean
  }

  export type NoticiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "texto" | "activo", ExtArgs["result"]["noticia"]>

  export type $NoticiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Noticia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      texto: string
      activo: boolean
    }, ExtArgs["result"]["noticia"]>
    composites: {}
  }

  type NoticiaGetPayload<S extends boolean | null | undefined | NoticiaDefaultArgs> = $Result.GetResult<Prisma.$NoticiaPayload, S>

  type NoticiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticiaCountAggregateInputType | true
    }

  export interface NoticiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Noticia'], meta: { name: 'Noticia' } }
    /**
     * Find zero or one Noticia that matches the filter.
     * @param {NoticiaFindUniqueArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticiaFindUniqueArgs>(args: SelectSubset<T, NoticiaFindUniqueArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Noticia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticiaFindUniqueOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticiaFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticiaFindFirstArgs>(args?: SelectSubset<T, NoticiaFindFirstArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noticia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindFirstOrThrowArgs} args - Arguments to find a Noticia
     * @example
     * // Get one Noticia
     * const noticia = await prisma.noticia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticiaFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Noticias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noticias
     * const noticias = await prisma.noticia.findMany()
     * 
     * // Get first 10 Noticias
     * const noticias = await prisma.noticia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticiaWithIdOnly = await prisma.noticia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticiaFindManyArgs>(args?: SelectSubset<T, NoticiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Noticia.
     * @param {NoticiaCreateArgs} args - Arguments to create a Noticia.
     * @example
     * // Create one Noticia
     * const Noticia = await prisma.noticia.create({
     *   data: {
     *     // ... data to create a Noticia
     *   }
     * })
     * 
     */
    create<T extends NoticiaCreateArgs>(args: SelectSubset<T, NoticiaCreateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Noticias.
     * @param {NoticiaCreateManyArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticiaCreateManyArgs>(args?: SelectSubset<T, NoticiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noticias and returns the data saved in the database.
     * @param {NoticiaCreateManyAndReturnArgs} args - Arguments to create many Noticias.
     * @example
     * // Create many Noticias
     * const noticia = await prisma.noticia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticiaCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Noticia.
     * @param {NoticiaDeleteArgs} args - Arguments to delete one Noticia.
     * @example
     * // Delete one Noticia
     * const Noticia = await prisma.noticia.delete({
     *   where: {
     *     // ... filter to delete one Noticia
     *   }
     * })
     * 
     */
    delete<T extends NoticiaDeleteArgs>(args: SelectSubset<T, NoticiaDeleteArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Noticia.
     * @param {NoticiaUpdateArgs} args - Arguments to update one Noticia.
     * @example
     * // Update one Noticia
     * const noticia = await prisma.noticia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticiaUpdateArgs>(args: SelectSubset<T, NoticiaUpdateArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Noticias.
     * @param {NoticiaDeleteManyArgs} args - Arguments to filter Noticias to delete.
     * @example
     * // Delete a few Noticias
     * const { count } = await prisma.noticia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticiaDeleteManyArgs>(args?: SelectSubset<T, NoticiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticiaUpdateManyArgs>(args: SelectSubset<T, NoticiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noticias and returns the data updated in the database.
     * @param {NoticiaUpdateManyAndReturnArgs} args - Arguments to update many Noticias.
     * @example
     * // Update many Noticias
     * const noticia = await prisma.noticia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Noticias and only return the `id`
     * const noticiaWithIdOnly = await prisma.noticia.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoticiaUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Noticia.
     * @param {NoticiaUpsertArgs} args - Arguments to update or create a Noticia.
     * @example
     * // Update or create a Noticia
     * const noticia = await prisma.noticia.upsert({
     *   create: {
     *     // ... data to create a Noticia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noticia we want to update
     *   }
     * })
     */
    upsert<T extends NoticiaUpsertArgs>(args: SelectSubset<T, NoticiaUpsertArgs<ExtArgs>>): Prisma__NoticiaClient<$Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Noticias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaCountArgs} args - Arguments to filter Noticias to count.
     * @example
     * // Count the number of Noticias
     * const count = await prisma.noticia.count({
     *   where: {
     *     // ... the filter for the Noticias we want to count
     *   }
     * })
    **/
    count<T extends NoticiaCountArgs>(
      args?: Subset<T, NoticiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticiaAggregateArgs>(args: Subset<T, NoticiaAggregateArgs>): Prisma.PrismaPromise<GetNoticiaAggregateType<T>>

    /**
     * Group by Noticia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticiaGroupByArgs} args - Group by arguments.
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
      T extends NoticiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticiaGroupByArgs['orderBy'] }
        : { orderBy?: NoticiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Noticia model
   */
  readonly fields: NoticiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Noticia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Noticia model
   */
  interface NoticiaFieldRefs {
    readonly id: FieldRef<"Noticia", 'Int'>
    readonly titulo: FieldRef<"Noticia", 'String'>
    readonly texto: FieldRef<"Noticia", 'String'>
    readonly activo: FieldRef<"Noticia", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Noticia findUnique
   */
  export type NoticiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findUniqueOrThrow
   */
  export type NoticiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia findFirst
   */
  export type NoticiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findFirstOrThrow
   */
  export type NoticiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticia to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Noticias.
     */
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia findMany
   */
  export type NoticiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter, which Noticias to fetch.
     */
    where?: NoticiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Noticias to fetch.
     */
    orderBy?: NoticiaOrderByWithRelationInput | NoticiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Noticias.
     */
    cursor?: NoticiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Noticias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Noticias.
     */
    skip?: number
    distinct?: NoticiaScalarFieldEnum | NoticiaScalarFieldEnum[]
  }

  /**
   * Noticia create
   */
  export type NoticiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data needed to create a Noticia.
     */
    data: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
  }

  /**
   * Noticia createMany
   */
  export type NoticiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia createManyAndReturn
   */
  export type NoticiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to create many Noticias.
     */
    data: NoticiaCreateManyInput | NoticiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Noticia update
   */
  export type NoticiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data needed to update a Noticia.
     */
    data: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
    /**
     * Choose, which Noticia to update.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia updateMany
   */
  export type NoticiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
  }

  /**
   * Noticia updateManyAndReturn
   */
  export type NoticiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The data used to update Noticias.
     */
    data: XOR<NoticiaUpdateManyMutationInput, NoticiaUncheckedUpdateManyInput>
    /**
     * Filter which Noticias to update
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to update.
     */
    limit?: number
  }

  /**
   * Noticia upsert
   */
  export type NoticiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * The filter to search for the Noticia to update in case it exists.
     */
    where: NoticiaWhereUniqueInput
    /**
     * In case the Noticia found by the `where` argument doesn't exist, create a new Noticia with this data.
     */
    create: XOR<NoticiaCreateInput, NoticiaUncheckedCreateInput>
    /**
     * In case the Noticia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticiaUpdateInput, NoticiaUncheckedUpdateInput>
  }

  /**
   * Noticia delete
   */
  export type NoticiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
    /**
     * Filter which Noticia to delete.
     */
    where: NoticiaWhereUniqueInput
  }

  /**
   * Noticia deleteMany
   */
  export type NoticiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Noticias to delete
     */
    where?: NoticiaWhereInput
    /**
     * Limit how many Noticias to delete.
     */
    limit?: number
  }

  /**
   * Noticia without action
   */
  export type NoticiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Noticia
     */
    select?: NoticiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Noticia
     */
    omit?: NoticiaOmit<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    correo: 'correo',
    password: 'password',
    nombre: 'nombre',
    token: 'token',
    estado: 'estado',
    permiso: 'permiso'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    usuario_id: 'usuario_id',
    juego_id: 'juego_id',
    codigo: 'codigo',
    monto_pagado: 'monto_pagado'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const JuegoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    precio: 'precio',
    oferta: 'oferta',
    rating: 'rating',
    estado: 'estado',
    categoria_id: 'categoria_id',
    cover: 'cover',
    imagenes: 'imagenes',
    videoURL: 'videoURL'
  };

  export type JuegoScalarFieldEnum = (typeof JuegoScalarFieldEnum)[keyof typeof JuegoScalarFieldEnum]


  export const CalificacionScalarFieldEnum: {
    id: 'id',
    valoracion: 'valoracion',
    comentario: 'comentario',
    juego_id: 'juego_id',
    usuario_id: 'usuario_id'
  };

  export type CalificacionScalarFieldEnum = (typeof CalificacionScalarFieldEnum)[keyof typeof CalificacionScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PlataformaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PlataformaScalarFieldEnum = (typeof PlataformaScalarFieldEnum)[keyof typeof PlataformaScalarFieldEnum]


  export const JuegoPlataformaScalarFieldEnum: {
    juegoId: 'juegoId',
    plataformaId: 'plataformaId'
  };

  export type JuegoPlataformaScalarFieldEnum = (typeof JuegoPlataformaScalarFieldEnum)[keyof typeof JuegoPlataformaScalarFieldEnum]


  export const NoticiaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    texto: 'texto',
    activo: 'activo'
  };

  export type NoticiaScalarFieldEnum = (typeof NoticiaScalarFieldEnum)[keyof typeof NoticiaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Permiso'
   */
  export type EnumPermisoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permiso'>
    


  /**
   * Reference to a field of type 'Permiso[]'
   */
  export type ListEnumPermisoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permiso[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    correo?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    token?: StringFilter<"Usuario"> | string
    estado?: BoolFilter<"Usuario"> | boolean
    permiso?: EnumPermisoFilter<"Usuario"> | $Enums.Permiso
    compras?: VentaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    token?: SortOrder
    estado?: SortOrder
    permiso?: SortOrder
    compras?: VentaOrderByRelationAggregateInput
    calificaciones?: CalificacionOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    token?: StringFilter<"Usuario"> | string
    estado?: BoolFilter<"Usuario"> | boolean
    permiso?: EnumPermisoFilter<"Usuario"> | $Enums.Permiso
    compras?: VentaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    token?: SortOrder
    estado?: SortOrder
    permiso?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    token?: StringWithAggregatesFilter<"Usuario"> | string
    estado?: BoolWithAggregatesFilter<"Usuario"> | boolean
    permiso?: EnumPermisoWithAggregatesFilter<"Usuario"> | $Enums.Permiso
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    usuario_id?: IntFilter<"Venta"> | number
    juego_id?: IntFilter<"Venta"> | number
    codigo?: StringFilter<"Venta"> | string
    monto_pagado?: FloatFilter<"Venta"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
    juego_id?: SortOrder
    codigo?: SortOrder
    monto_pagado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    juego?: JuegoOrderByWithRelationInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    fecha?: DateTimeFilter<"Venta"> | Date | string
    usuario_id?: IntFilter<"Venta"> | number
    juego_id?: IntFilter<"Venta"> | number
    codigo?: StringFilter<"Venta"> | string
    monto_pagado?: FloatFilter<"Venta"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
  }, "id">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
    juego_id?: SortOrder
    codigo?: SortOrder
    monto_pagado?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    usuario_id?: IntWithAggregatesFilter<"Venta"> | number
    juego_id?: IntWithAggregatesFilter<"Venta"> | number
    codigo?: StringWithAggregatesFilter<"Venta"> | string
    monto_pagado?: FloatWithAggregatesFilter<"Venta"> | number
  }

  export type JuegoWhereInput = {
    AND?: JuegoWhereInput | JuegoWhereInput[]
    OR?: JuegoWhereInput[]
    NOT?: JuegoWhereInput | JuegoWhereInput[]
    id?: IntFilter<"Juego"> | number
    titulo?: StringFilter<"Juego"> | string
    descripcion?: StringFilter<"Juego"> | string
    precio?: FloatFilter<"Juego"> | number
    oferta?: BoolFilter<"Juego"> | boolean
    rating?: FloatFilter<"Juego"> | number
    estado?: BoolFilter<"Juego"> | boolean
    categoria_id?: IntFilter<"Juego"> | number
    cover?: StringFilter<"Juego"> | string
    imagenes?: StringNullableListFilter<"Juego">
    videoURL?: StringNullableFilter<"Juego"> | string | null
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    plataformas?: JuegoPlataformaListRelationFilter
    ventas?: VentaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }

  export type JuegoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    oferta?: SortOrder
    rating?: SortOrder
    estado?: SortOrder
    categoria_id?: SortOrder
    cover?: SortOrder
    imagenes?: SortOrder
    videoURL?: SortOrderInput | SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    plataformas?: JuegoPlataformaOrderByRelationAggregateInput
    ventas?: VentaOrderByRelationAggregateInput
    calificaciones?: CalificacionOrderByRelationAggregateInput
  }

  export type JuegoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JuegoWhereInput | JuegoWhereInput[]
    OR?: JuegoWhereInput[]
    NOT?: JuegoWhereInput | JuegoWhereInput[]
    titulo?: StringFilter<"Juego"> | string
    descripcion?: StringFilter<"Juego"> | string
    precio?: FloatFilter<"Juego"> | number
    oferta?: BoolFilter<"Juego"> | boolean
    rating?: FloatFilter<"Juego"> | number
    estado?: BoolFilter<"Juego"> | boolean
    categoria_id?: IntFilter<"Juego"> | number
    cover?: StringFilter<"Juego"> | string
    imagenes?: StringNullableListFilter<"Juego">
    videoURL?: StringNullableFilter<"Juego"> | string | null
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    plataformas?: JuegoPlataformaListRelationFilter
    ventas?: VentaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }, "id">

  export type JuegoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    oferta?: SortOrder
    rating?: SortOrder
    estado?: SortOrder
    categoria_id?: SortOrder
    cover?: SortOrder
    imagenes?: SortOrder
    videoURL?: SortOrderInput | SortOrder
    _count?: JuegoCountOrderByAggregateInput
    _avg?: JuegoAvgOrderByAggregateInput
    _max?: JuegoMaxOrderByAggregateInput
    _min?: JuegoMinOrderByAggregateInput
    _sum?: JuegoSumOrderByAggregateInput
  }

  export type JuegoScalarWhereWithAggregatesInput = {
    AND?: JuegoScalarWhereWithAggregatesInput | JuegoScalarWhereWithAggregatesInput[]
    OR?: JuegoScalarWhereWithAggregatesInput[]
    NOT?: JuegoScalarWhereWithAggregatesInput | JuegoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Juego"> | number
    titulo?: StringWithAggregatesFilter<"Juego"> | string
    descripcion?: StringWithAggregatesFilter<"Juego"> | string
    precio?: FloatWithAggregatesFilter<"Juego"> | number
    oferta?: BoolWithAggregatesFilter<"Juego"> | boolean
    rating?: FloatWithAggregatesFilter<"Juego"> | number
    estado?: BoolWithAggregatesFilter<"Juego"> | boolean
    categoria_id?: IntWithAggregatesFilter<"Juego"> | number
    cover?: StringWithAggregatesFilter<"Juego"> | string
    imagenes?: StringNullableListFilter<"Juego">
    videoURL?: StringNullableWithAggregatesFilter<"Juego"> | string | null
  }

  export type CalificacionWhereInput = {
    AND?: CalificacionWhereInput | CalificacionWhereInput[]
    OR?: CalificacionWhereInput[]
    NOT?: CalificacionWhereInput | CalificacionWhereInput[]
    id?: IntFilter<"Calificacion"> | number
    valoracion?: FloatFilter<"Calificacion"> | number
    comentario?: StringFilter<"Calificacion"> | string
    juego_id?: IntFilter<"Calificacion"> | number
    usuario_id?: IntFilter<"Calificacion"> | number
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CalificacionOrderByWithRelationInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    juego_id?: SortOrder
    usuario_id?: SortOrder
    juego?: JuegoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type CalificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CalificacionWhereInput | CalificacionWhereInput[]
    OR?: CalificacionWhereInput[]
    NOT?: CalificacionWhereInput | CalificacionWhereInput[]
    valoracion?: FloatFilter<"Calificacion"> | number
    comentario?: StringFilter<"Calificacion"> | string
    juego_id?: IntFilter<"Calificacion"> | number
    usuario_id?: IntFilter<"Calificacion"> | number
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type CalificacionOrderByWithAggregationInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    juego_id?: SortOrder
    usuario_id?: SortOrder
    _count?: CalificacionCountOrderByAggregateInput
    _avg?: CalificacionAvgOrderByAggregateInput
    _max?: CalificacionMaxOrderByAggregateInput
    _min?: CalificacionMinOrderByAggregateInput
    _sum?: CalificacionSumOrderByAggregateInput
  }

  export type CalificacionScalarWhereWithAggregatesInput = {
    AND?: CalificacionScalarWhereWithAggregatesInput | CalificacionScalarWhereWithAggregatesInput[]
    OR?: CalificacionScalarWhereWithAggregatesInput[]
    NOT?: CalificacionScalarWhereWithAggregatesInput | CalificacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Calificacion"> | number
    valoracion?: FloatWithAggregatesFilter<"Calificacion"> | number
    comentario?: StringWithAggregatesFilter<"Calificacion"> | string
    juego_id?: IntWithAggregatesFilter<"Calificacion"> | number
    usuario_id?: IntWithAggregatesFilter<"Calificacion"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    juegos?: JuegoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    juegos?: JuegoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    juegos?: JuegoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type PlataformaWhereInput = {
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    id?: IntFilter<"Plataforma"> | number
    nombre?: StringFilter<"Plataforma"> | string
    juegos?: JuegoPlataformaListRelationFilter
  }

  export type PlataformaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    juegos?: JuegoPlataformaOrderByRelationAggregateInput
  }

  export type PlataformaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlataformaWhereInput | PlataformaWhereInput[]
    OR?: PlataformaWhereInput[]
    NOT?: PlataformaWhereInput | PlataformaWhereInput[]
    nombre?: StringFilter<"Plataforma"> | string
    juegos?: JuegoPlataformaListRelationFilter
  }, "id">

  export type PlataformaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PlataformaCountOrderByAggregateInput
    _avg?: PlataformaAvgOrderByAggregateInput
    _max?: PlataformaMaxOrderByAggregateInput
    _min?: PlataformaMinOrderByAggregateInput
    _sum?: PlataformaSumOrderByAggregateInput
  }

  export type PlataformaScalarWhereWithAggregatesInput = {
    AND?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    OR?: PlataformaScalarWhereWithAggregatesInput[]
    NOT?: PlataformaScalarWhereWithAggregatesInput | PlataformaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plataforma"> | number
    nombre?: StringWithAggregatesFilter<"Plataforma"> | string
  }

  export type JuegoPlataformaWhereInput = {
    AND?: JuegoPlataformaWhereInput | JuegoPlataformaWhereInput[]
    OR?: JuegoPlataformaWhereInput[]
    NOT?: JuegoPlataformaWhereInput | JuegoPlataformaWhereInput[]
    juegoId?: IntFilter<"JuegoPlataforma"> | number
    plataformaId?: IntFilter<"JuegoPlataforma"> | number
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
  }

  export type JuegoPlataformaOrderByWithRelationInput = {
    juegoId?: SortOrder
    plataformaId?: SortOrder
    juego?: JuegoOrderByWithRelationInput
    plataforma?: PlataformaOrderByWithRelationInput
  }

  export type JuegoPlataformaWhereUniqueInput = Prisma.AtLeast<{
    juegoId_plataformaId?: JuegoPlataformaJuegoIdPlataformaIdCompoundUniqueInput
    AND?: JuegoPlataformaWhereInput | JuegoPlataformaWhereInput[]
    OR?: JuegoPlataformaWhereInput[]
    NOT?: JuegoPlataformaWhereInput | JuegoPlataformaWhereInput[]
    juegoId?: IntFilter<"JuegoPlataforma"> | number
    plataformaId?: IntFilter<"JuegoPlataforma"> | number
    juego?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
    plataforma?: XOR<PlataformaScalarRelationFilter, PlataformaWhereInput>
  }, "juegoId_plataformaId">

  export type JuegoPlataformaOrderByWithAggregationInput = {
    juegoId?: SortOrder
    plataformaId?: SortOrder
    _count?: JuegoPlataformaCountOrderByAggregateInput
    _avg?: JuegoPlataformaAvgOrderByAggregateInput
    _max?: JuegoPlataformaMaxOrderByAggregateInput
    _min?: JuegoPlataformaMinOrderByAggregateInput
    _sum?: JuegoPlataformaSumOrderByAggregateInput
  }

  export type JuegoPlataformaScalarWhereWithAggregatesInput = {
    AND?: JuegoPlataformaScalarWhereWithAggregatesInput | JuegoPlataformaScalarWhereWithAggregatesInput[]
    OR?: JuegoPlataformaScalarWhereWithAggregatesInput[]
    NOT?: JuegoPlataformaScalarWhereWithAggregatesInput | JuegoPlataformaScalarWhereWithAggregatesInput[]
    juegoId?: IntWithAggregatesFilter<"JuegoPlataforma"> | number
    plataformaId?: IntWithAggregatesFilter<"JuegoPlataforma"> | number
  }

  export type NoticiaWhereInput = {
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    id?: IntFilter<"Noticia"> | number
    titulo?: StringFilter<"Noticia"> | string
    texto?: StringFilter<"Noticia"> | string
    activo?: BoolFilter<"Noticia"> | boolean
  }

  export type NoticiaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    texto?: SortOrder
    activo?: SortOrder
  }

  export type NoticiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticiaWhereInput | NoticiaWhereInput[]
    OR?: NoticiaWhereInput[]
    NOT?: NoticiaWhereInput | NoticiaWhereInput[]
    titulo?: StringFilter<"Noticia"> | string
    texto?: StringFilter<"Noticia"> | string
    activo?: BoolFilter<"Noticia"> | boolean
  }, "id">

  export type NoticiaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    texto?: SortOrder
    activo?: SortOrder
    _count?: NoticiaCountOrderByAggregateInput
    _avg?: NoticiaAvgOrderByAggregateInput
    _max?: NoticiaMaxOrderByAggregateInput
    _min?: NoticiaMinOrderByAggregateInput
    _sum?: NoticiaSumOrderByAggregateInput
  }

  export type NoticiaScalarWhereWithAggregatesInput = {
    AND?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    OR?: NoticiaScalarWhereWithAggregatesInput[]
    NOT?: NoticiaScalarWhereWithAggregatesInput | NoticiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Noticia"> | number
    titulo?: StringWithAggregatesFilter<"Noticia"> | string
    texto?: StringWithAggregatesFilter<"Noticia"> | string
    activo?: BoolWithAggregatesFilter<"Noticia"> | boolean
  }

  export type UsuarioCreateInput = {
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso?: $Enums.Permiso
    compras?: VentaCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso?: $Enums.Permiso
    compras?: VentaUncheckedCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
    compras?: VentaUpdateManyWithoutUsuarioNestedInput
    calificaciones?: CalificacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
    compras?: VentaUncheckedUpdateManyWithoutUsuarioNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso?: $Enums.Permiso
  }

  export type UsuarioUpdateManyMutationInput = {
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
  }

  export type VentaCreateInput = {
    fecha?: Date | string
    codigo: string
    monto_pagado: number
    usuario: UsuarioCreateNestedOneWithoutComprasInput
    juego: JuegoCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    fecha?: Date | string
    usuario_id: number
    juego_id: number
    codigo: string
    monto_pagado: number
  }

  export type VentaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
    juego?: JuegoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    juego_id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaCreateManyInput = {
    id?: number
    fecha?: Date | string
    usuario_id: number
    juego_id: number
    codigo: string
    monto_pagado: number
  }

  export type VentaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    juego_id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
  }

  export type JuegoCreateInput = {
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    categoria: CategoriaCreateNestedOneWithoutJuegosInput
    plataformas?: JuegoPlataformaCreateNestedManyWithoutJuegoInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    categoria_id: number
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    plataformas?: JuegoPlataformaUncheckedCreateNestedManyWithoutJuegoInput
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutJuegosNestedInput
    plataformas?: JuegoPlataformaUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria_id?: IntFieldUpdateOperationsInput | number
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    plataformas?: JuegoPlataformaUncheckedUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    categoria_id: number
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
  }

  export type JuegoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuegoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria_id?: IntFieldUpdateOperationsInput | number
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalificacionCreateInput = {
    valoracion: number
    comentario: string
    juego: JuegoCreateNestedOneWithoutCalificacionesInput
    usuario: UsuarioCreateNestedOneWithoutCalificacionesInput
  }

  export type CalificacionUncheckedCreateInput = {
    id?: number
    valoracion: number
    comentario: string
    juego_id: number
    usuario_id: number
  }

  export type CalificacionUpdateInput = {
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    juego?: JuegoUpdateOneRequiredWithoutCalificacionesNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutCalificacionesNestedInput
  }

  export type CalificacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type CalificacionCreateManyInput = {
    id?: number
    valoracion: number
    comentario: string
    juego_id: number
    usuario_id: number
  }

  export type CalificacionUpdateManyMutationInput = {
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
  }

  export type CalificacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    nombre: string
    juegos?: JuegoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    juegos?: JuegoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaCreateInput = {
    nombre: string
    juegos?: JuegoPlataformaCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUncheckedCreateInput = {
    id?: number
    nombre: string
    juegos?: JuegoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput
  }

  export type PlataformaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoPlataformaUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput
  }

  export type PlataformaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PlataformaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type JuegoPlataformaCreateInput = {
    juego: JuegoCreateNestedOneWithoutPlataformasInput
    plataforma: PlataformaCreateNestedOneWithoutJuegosInput
  }

  export type JuegoPlataformaUncheckedCreateInput = {
    juegoId: number
    plataformaId: number
  }

  export type JuegoPlataformaUpdateInput = {
    juego?: JuegoUpdateOneRequiredWithoutPlataformasNestedInput
    plataforma?: PlataformaUpdateOneRequiredWithoutJuegosNestedInput
  }

  export type JuegoPlataformaUncheckedUpdateInput = {
    juegoId?: IntFieldUpdateOperationsInput | number
    plataformaId?: IntFieldUpdateOperationsInput | number
  }

  export type JuegoPlataformaCreateManyInput = {
    juegoId: number
    plataformaId: number
  }

  export type JuegoPlataformaUpdateManyMutationInput = {

  }

  export type JuegoPlataformaUncheckedUpdateManyInput = {
    juegoId?: IntFieldUpdateOperationsInput | number
    plataformaId?: IntFieldUpdateOperationsInput | number
  }

  export type NoticiaCreateInput = {
    titulo: string
    texto: string
    activo: boolean
  }

  export type NoticiaUncheckedCreateInput = {
    id?: number
    titulo: string
    texto: string
    activo: boolean
  }

  export type NoticiaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaCreateManyInput = {
    id?: number
    titulo: string
    texto: string
    activo: boolean
  }

  export type NoticiaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumPermisoFilter<$PrismaModel = never> = {
    equals?: $Enums.Permiso | EnumPermisoFieldRefInput<$PrismaModel>
    in?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermisoFilter<$PrismaModel> | $Enums.Permiso
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type CalificacionListRelationFilter = {
    every?: CalificacionWhereInput
    some?: CalificacionWhereInput
    none?: CalificacionWhereInput
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    token?: SortOrder
    estado?: SortOrder
    permiso?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    token?: SortOrder
    estado?: SortOrder
    permiso?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    token?: SortOrder
    estado?: SortOrder
    permiso?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPermisoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permiso | EnumPermisoFieldRefInput<$PrismaModel>
    in?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermisoWithAggregatesFilter<$PrismaModel> | $Enums.Permiso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermisoFilter<$PrismaModel>
    _max?: NestedEnumPermisoFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type JuegoScalarRelationFilter = {
    is?: JuegoWhereInput
    isNot?: JuegoWhereInput
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
    juego_id?: SortOrder
    codigo?: SortOrder
    monto_pagado?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    juego_id?: SortOrder
    monto_pagado?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
    juego_id?: SortOrder
    codigo?: SortOrder
    monto_pagado?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
    juego_id?: SortOrder
    codigo?: SortOrder
    monto_pagado?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    juego_id?: SortOrder
    monto_pagado?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type JuegoPlataformaListRelationFilter = {
    every?: JuegoPlataformaWhereInput
    some?: JuegoPlataformaWhereInput
    none?: JuegoPlataformaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JuegoPlataformaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JuegoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    oferta?: SortOrder
    rating?: SortOrder
    estado?: SortOrder
    categoria_id?: SortOrder
    cover?: SortOrder
    imagenes?: SortOrder
    videoURL?: SortOrder
  }

  export type JuegoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    rating?: SortOrder
    categoria_id?: SortOrder
  }

  export type JuegoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    oferta?: SortOrder
    rating?: SortOrder
    estado?: SortOrder
    categoria_id?: SortOrder
    cover?: SortOrder
    videoURL?: SortOrder
  }

  export type JuegoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    oferta?: SortOrder
    rating?: SortOrder
    estado?: SortOrder
    categoria_id?: SortOrder
    cover?: SortOrder
    videoURL?: SortOrder
  }

  export type JuegoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    rating?: SortOrder
    categoria_id?: SortOrder
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

  export type CalificacionCountOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    juego_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type CalificacionAvgOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    juego_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type CalificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    juego_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type CalificacionMinOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    comentario?: SortOrder
    juego_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type CalificacionSumOrderByAggregateInput = {
    id?: SortOrder
    valoracion?: SortOrder
    juego_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type JuegoListRelationFilter = {
    every?: JuegoWhereInput
    some?: JuegoWhereInput
    none?: JuegoWhereInput
  }

  export type JuegoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PlataformaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PlataformaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PlataformaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlataformaScalarRelationFilter = {
    is?: PlataformaWhereInput
    isNot?: PlataformaWhereInput
  }

  export type JuegoPlataformaJuegoIdPlataformaIdCompoundUniqueInput = {
    juegoId: number
    plataformaId: number
  }

  export type JuegoPlataformaCountOrderByAggregateInput = {
    juegoId?: SortOrder
    plataformaId?: SortOrder
  }

  export type JuegoPlataformaAvgOrderByAggregateInput = {
    juegoId?: SortOrder
    plataformaId?: SortOrder
  }

  export type JuegoPlataformaMaxOrderByAggregateInput = {
    juegoId?: SortOrder
    plataformaId?: SortOrder
  }

  export type JuegoPlataformaMinOrderByAggregateInput = {
    juegoId?: SortOrder
    plataformaId?: SortOrder
  }

  export type JuegoPlataformaSumOrderByAggregateInput = {
    juegoId?: SortOrder
    plataformaId?: SortOrder
  }

  export type NoticiaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    texto?: SortOrder
    activo?: SortOrder
  }

  export type NoticiaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticiaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    texto?: SortOrder
    activo?: SortOrder
  }

  export type NoticiaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    texto?: SortOrder
    activo?: SortOrder
  }

  export type NoticiaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VentaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type CalificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type CalificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPermisoFieldUpdateOperationsInput = {
    set?: $Enums.Permiso
  }

  export type VentaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type CalificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutUsuarioInput | CalificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutUsuarioInput | CalificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutUsuarioInput | CalificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput> | VentaCreateWithoutUsuarioInput[] | VentaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutUsuarioInput | VentaCreateOrConnectWithoutUsuarioInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutUsuarioInput | VentaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VentaCreateManyUsuarioInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutUsuarioInput | VentaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutUsuarioInput | VentaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type CalificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutUsuarioInput | CalificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutUsuarioInput | CalificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutUsuarioInput | CalificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutComprasInput = {
    create?: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComprasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type JuegoCreateNestedOneWithoutVentasInput = {
    create?: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutVentasInput
    connect?: JuegoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComprasInput
    upsert?: UsuarioUpsertWithoutComprasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComprasInput, UsuarioUpdateWithoutComprasInput>, UsuarioUncheckedUpdateWithoutComprasInput>
  }

  export type JuegoUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutVentasInput
    upsert?: JuegoUpsertWithoutVentasInput
    connect?: JuegoWhereUniqueInput
    update?: XOR<XOR<JuegoUpdateToOneWithWhereWithoutVentasInput, JuegoUpdateWithoutVentasInput>, JuegoUncheckedUpdateWithoutVentasInput>
  }

  export type JuegoCreateimagenesInput = {
    set: string[]
  }

  export type CategoriaCreateNestedOneWithoutJuegosInput = {
    create?: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutJuegosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type JuegoPlataformaCreateNestedManyWithoutJuegoInput = {
    create?: XOR<JuegoPlataformaCreateWithoutJuegoInput, JuegoPlataformaUncheckedCreateWithoutJuegoInput> | JuegoPlataformaCreateWithoutJuegoInput[] | JuegoPlataformaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutJuegoInput | JuegoPlataformaCreateOrConnectWithoutJuegoInput[]
    createMany?: JuegoPlataformaCreateManyJuegoInputEnvelope
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
  }

  export type VentaCreateNestedManyWithoutJuegoInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type CalificacionCreateNestedManyWithoutJuegoInput = {
    create?: XOR<CalificacionCreateWithoutJuegoInput, CalificacionUncheckedCreateWithoutJuegoInput> | CalificacionCreateWithoutJuegoInput[] | CalificacionUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutJuegoInput | CalificacionCreateOrConnectWithoutJuegoInput[]
    createMany?: CalificacionCreateManyJuegoInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type JuegoPlataformaUncheckedCreateNestedManyWithoutJuegoInput = {
    create?: XOR<JuegoPlataformaCreateWithoutJuegoInput, JuegoPlataformaUncheckedCreateWithoutJuegoInput> | JuegoPlataformaCreateWithoutJuegoInput[] | JuegoPlataformaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutJuegoInput | JuegoPlataformaCreateOrConnectWithoutJuegoInput[]
    createMany?: JuegoPlataformaCreateManyJuegoInputEnvelope
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutJuegoInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type CalificacionUncheckedCreateNestedManyWithoutJuegoInput = {
    create?: XOR<CalificacionCreateWithoutJuegoInput, CalificacionUncheckedCreateWithoutJuegoInput> | CalificacionCreateWithoutJuegoInput[] | CalificacionUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutJuegoInput | CalificacionCreateOrConnectWithoutJuegoInput[]
    createMany?: CalificacionCreateManyJuegoInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type JuegoUpdateimagenesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoriaUpdateOneRequiredWithoutJuegosNestedInput = {
    create?: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutJuegosInput
    upsert?: CategoriaUpsertWithoutJuegosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutJuegosInput, CategoriaUpdateWithoutJuegosInput>, CategoriaUncheckedUpdateWithoutJuegosInput>
  }

  export type JuegoPlataformaUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<JuegoPlataformaCreateWithoutJuegoInput, JuegoPlataformaUncheckedCreateWithoutJuegoInput> | JuegoPlataformaCreateWithoutJuegoInput[] | JuegoPlataformaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutJuegoInput | JuegoPlataformaCreateOrConnectWithoutJuegoInput[]
    upsert?: JuegoPlataformaUpsertWithWhereUniqueWithoutJuegoInput | JuegoPlataformaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: JuegoPlataformaCreateManyJuegoInputEnvelope
    set?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    disconnect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    delete?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    update?: JuegoPlataformaUpdateWithWhereUniqueWithoutJuegoInput | JuegoPlataformaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: JuegoPlataformaUpdateManyWithWhereWithoutJuegoInput | JuegoPlataformaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: JuegoPlataformaScalarWhereInput | JuegoPlataformaScalarWhereInput[]
  }

  export type VentaUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutJuegoInput | VentaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutJuegoInput | VentaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutJuegoInput | VentaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type CalificacionUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<CalificacionCreateWithoutJuegoInput, CalificacionUncheckedCreateWithoutJuegoInput> | CalificacionCreateWithoutJuegoInput[] | CalificacionUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutJuegoInput | CalificacionCreateOrConnectWithoutJuegoInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutJuegoInput | CalificacionUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: CalificacionCreateManyJuegoInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutJuegoInput | CalificacionUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutJuegoInput | CalificacionUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type JuegoPlataformaUncheckedUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<JuegoPlataformaCreateWithoutJuegoInput, JuegoPlataformaUncheckedCreateWithoutJuegoInput> | JuegoPlataformaCreateWithoutJuegoInput[] | JuegoPlataformaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutJuegoInput | JuegoPlataformaCreateOrConnectWithoutJuegoInput[]
    upsert?: JuegoPlataformaUpsertWithWhereUniqueWithoutJuegoInput | JuegoPlataformaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: JuegoPlataformaCreateManyJuegoInputEnvelope
    set?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    disconnect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    delete?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    update?: JuegoPlataformaUpdateWithWhereUniqueWithoutJuegoInput | JuegoPlataformaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: JuegoPlataformaUpdateManyWithWhereWithoutJuegoInput | JuegoPlataformaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: JuegoPlataformaScalarWhereInput | JuegoPlataformaScalarWhereInput[]
  }

  export type VentaUncheckedUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput> | VentaCreateWithoutJuegoInput[] | VentaUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutJuegoInput | VentaCreateOrConnectWithoutJuegoInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutJuegoInput | VentaUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: VentaCreateManyJuegoInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutJuegoInput | VentaUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutJuegoInput | VentaUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type CalificacionUncheckedUpdateManyWithoutJuegoNestedInput = {
    create?: XOR<CalificacionCreateWithoutJuegoInput, CalificacionUncheckedCreateWithoutJuegoInput> | CalificacionCreateWithoutJuegoInput[] | CalificacionUncheckedCreateWithoutJuegoInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutJuegoInput | CalificacionCreateOrConnectWithoutJuegoInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutJuegoInput | CalificacionUpsertWithWhereUniqueWithoutJuegoInput[]
    createMany?: CalificacionCreateManyJuegoInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutJuegoInput | CalificacionUpdateWithWhereUniqueWithoutJuegoInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutJuegoInput | CalificacionUpdateManyWithWhereWithoutJuegoInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type JuegoCreateNestedOneWithoutCalificacionesInput = {
    create?: XOR<JuegoCreateWithoutCalificacionesInput, JuegoUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutCalificacionesInput
    connect?: JuegoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutCalificacionesInput = {
    create?: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalificacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type JuegoUpdateOneRequiredWithoutCalificacionesNestedInput = {
    create?: XOR<JuegoCreateWithoutCalificacionesInput, JuegoUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutCalificacionesInput
    upsert?: JuegoUpsertWithoutCalificacionesInput
    connect?: JuegoWhereUniqueInput
    update?: XOR<XOR<JuegoUpdateToOneWithWhereWithoutCalificacionesInput, JuegoUpdateWithoutCalificacionesInput>, JuegoUncheckedUpdateWithoutCalificacionesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutCalificacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalificacionesInput
    upsert?: UsuarioUpsertWithoutCalificacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCalificacionesInput, UsuarioUpdateWithoutCalificacionesInput>, UsuarioUncheckedUpdateWithoutCalificacionesInput>
  }

  export type JuegoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutCategoriaInput | JuegoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutCategoriaInput | JuegoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutCategoriaInput | JuegoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type JuegoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutCategoriaInput | JuegoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutCategoriaInput | JuegoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutCategoriaInput | JuegoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type JuegoPlataformaCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<JuegoPlataformaCreateWithoutPlataformaInput, JuegoPlataformaUncheckedCreateWithoutPlataformaInput> | JuegoPlataformaCreateWithoutPlataformaInput[] | JuegoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutPlataformaInput | JuegoPlataformaCreateOrConnectWithoutPlataformaInput[]
    createMany?: JuegoPlataformaCreateManyPlataformaInputEnvelope
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
  }

  export type JuegoPlataformaUncheckedCreateNestedManyWithoutPlataformaInput = {
    create?: XOR<JuegoPlataformaCreateWithoutPlataformaInput, JuegoPlataformaUncheckedCreateWithoutPlataformaInput> | JuegoPlataformaCreateWithoutPlataformaInput[] | JuegoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutPlataformaInput | JuegoPlataformaCreateOrConnectWithoutPlataformaInput[]
    createMany?: JuegoPlataformaCreateManyPlataformaInputEnvelope
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
  }

  export type JuegoPlataformaUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<JuegoPlataformaCreateWithoutPlataformaInput, JuegoPlataformaUncheckedCreateWithoutPlataformaInput> | JuegoPlataformaCreateWithoutPlataformaInput[] | JuegoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutPlataformaInput | JuegoPlataformaCreateOrConnectWithoutPlataformaInput[]
    upsert?: JuegoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput | JuegoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: JuegoPlataformaCreateManyPlataformaInputEnvelope
    set?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    disconnect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    delete?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    update?: JuegoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput | JuegoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: JuegoPlataformaUpdateManyWithWhereWithoutPlataformaInput | JuegoPlataformaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: JuegoPlataformaScalarWhereInput | JuegoPlataformaScalarWhereInput[]
  }

  export type JuegoPlataformaUncheckedUpdateManyWithoutPlataformaNestedInput = {
    create?: XOR<JuegoPlataformaCreateWithoutPlataformaInput, JuegoPlataformaUncheckedCreateWithoutPlataformaInput> | JuegoPlataformaCreateWithoutPlataformaInput[] | JuegoPlataformaUncheckedCreateWithoutPlataformaInput[]
    connectOrCreate?: JuegoPlataformaCreateOrConnectWithoutPlataformaInput | JuegoPlataformaCreateOrConnectWithoutPlataformaInput[]
    upsert?: JuegoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput | JuegoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput[]
    createMany?: JuegoPlataformaCreateManyPlataformaInputEnvelope
    set?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    disconnect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    delete?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    connect?: JuegoPlataformaWhereUniqueInput | JuegoPlataformaWhereUniqueInput[]
    update?: JuegoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput | JuegoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput[]
    updateMany?: JuegoPlataformaUpdateManyWithWhereWithoutPlataformaInput | JuegoPlataformaUpdateManyWithWhereWithoutPlataformaInput[]
    deleteMany?: JuegoPlataformaScalarWhereInput | JuegoPlataformaScalarWhereInput[]
  }

  export type JuegoCreateNestedOneWithoutPlataformasInput = {
    create?: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutPlataformasInput
    connect?: JuegoWhereUniqueInput
  }

  export type PlataformaCreateNestedOneWithoutJuegosInput = {
    create?: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutJuegosInput
    connect?: PlataformaWhereUniqueInput
  }

  export type JuegoUpdateOneRequiredWithoutPlataformasNestedInput = {
    create?: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutPlataformasInput
    upsert?: JuegoUpsertWithoutPlataformasInput
    connect?: JuegoWhereUniqueInput
    update?: XOR<XOR<JuegoUpdateToOneWithWhereWithoutPlataformasInput, JuegoUpdateWithoutPlataformasInput>, JuegoUncheckedUpdateWithoutPlataformasInput>
  }

  export type PlataformaUpdateOneRequiredWithoutJuegosNestedInput = {
    create?: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: PlataformaCreateOrConnectWithoutJuegosInput
    upsert?: PlataformaUpsertWithoutJuegosInput
    connect?: PlataformaWhereUniqueInput
    update?: XOR<XOR<PlataformaUpdateToOneWithWhereWithoutJuegosInput, PlataformaUpdateWithoutJuegosInput>, PlataformaUncheckedUpdateWithoutJuegosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPermisoFilter<$PrismaModel = never> = {
    equals?: $Enums.Permiso | EnumPermisoFieldRefInput<$PrismaModel>
    in?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermisoFilter<$PrismaModel> | $Enums.Permiso
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPermisoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permiso | EnumPermisoFieldRefInput<$PrismaModel>
    in?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permiso[] | ListEnumPermisoFieldRefInput<$PrismaModel>
    not?: NestedEnumPermisoWithAggregatesFilter<$PrismaModel> | $Enums.Permiso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermisoFilter<$PrismaModel>
    _max?: NestedEnumPermisoFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type VentaCreateWithoutUsuarioInput = {
    fecha?: Date | string
    codigo: string
    monto_pagado: number
    juego: JuegoCreateNestedOneWithoutVentasInput
  }

  export type VentaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fecha?: Date | string
    juego_id: number
    codigo: string
    monto_pagado: number
  }

  export type VentaCreateOrConnectWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaCreateManyUsuarioInputEnvelope = {
    data: VentaCreateManyUsuarioInput | VentaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CalificacionCreateWithoutUsuarioInput = {
    valoracion: number
    comentario: string
    juego: JuegoCreateNestedOneWithoutCalificacionesInput
  }

  export type CalificacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    valoracion: number
    comentario: string
    juego_id: number
  }

  export type CalificacionCreateOrConnectWithoutUsuarioInput = {
    where: CalificacionWhereUniqueInput
    create: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type CalificacionCreateManyUsuarioInputEnvelope = {
    data: CalificacionCreateManyUsuarioInput | CalificacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VentaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VentaCreateWithoutUsuarioInput, VentaUncheckedCreateWithoutUsuarioInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutUsuarioInput, VentaUncheckedUpdateWithoutUsuarioInput>
  }

  export type VentaUpdateManyWithWhereWithoutUsuarioInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    usuario_id?: IntFilter<"Venta"> | number
    juego_id?: IntFilter<"Venta"> | number
    codigo?: StringFilter<"Venta"> | string
    monto_pagado?: FloatFilter<"Venta"> | number
  }

  export type CalificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CalificacionWhereUniqueInput
    update: XOR<CalificacionUpdateWithoutUsuarioInput, CalificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type CalificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CalificacionWhereUniqueInput
    data: XOR<CalificacionUpdateWithoutUsuarioInput, CalificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type CalificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: CalificacionScalarWhereInput
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CalificacionScalarWhereInput = {
    AND?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
    OR?: CalificacionScalarWhereInput[]
    NOT?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
    id?: IntFilter<"Calificacion"> | number
    valoracion?: FloatFilter<"Calificacion"> | number
    comentario?: StringFilter<"Calificacion"> | string
    juego_id?: IntFilter<"Calificacion"> | number
    usuario_id?: IntFilter<"Calificacion"> | number
  }

  export type UsuarioCreateWithoutComprasInput = {
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso?: $Enums.Permiso
    calificaciones?: CalificacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComprasInput = {
    id?: number
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso?: $Enums.Permiso
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComprasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
  }

  export type JuegoCreateWithoutVentasInput = {
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    categoria: CategoriaCreateNestedOneWithoutJuegosInput
    plataformas?: JuegoPlataformaCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutVentasInput = {
    id?: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    categoria_id: number
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    plataformas?: JuegoPlataformaUncheckedCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutVentasInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
  }

  export type UsuarioUpsertWithoutComprasInput = {
    update: XOR<UsuarioUpdateWithoutComprasInput, UsuarioUncheckedUpdateWithoutComprasInput>
    create: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComprasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComprasInput, UsuarioUncheckedUpdateWithoutComprasInput>
  }

  export type UsuarioUpdateWithoutComprasInput = {
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
    calificaciones?: CalificacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
    calificaciones?: CalificacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type JuegoUpsertWithoutVentasInput = {
    update: XOR<JuegoUpdateWithoutVentasInput, JuegoUncheckedUpdateWithoutVentasInput>
    create: XOR<JuegoCreateWithoutVentasInput, JuegoUncheckedCreateWithoutVentasInput>
    where?: JuegoWhereInput
  }

  export type JuegoUpdateToOneWithWhereWithoutVentasInput = {
    where?: JuegoWhereInput
    data: XOR<JuegoUpdateWithoutVentasInput, JuegoUncheckedUpdateWithoutVentasInput>
  }

  export type JuegoUpdateWithoutVentasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutJuegosNestedInput
    plataformas?: JuegoPlataformaUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria_id?: IntFieldUpdateOperationsInput | number
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    plataformas?: JuegoPlataformaUncheckedUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type CategoriaCreateWithoutJuegosInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateWithoutJuegosInput = {
    id?: number
    nombre: string
  }

  export type CategoriaCreateOrConnectWithoutJuegosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
  }

  export type JuegoPlataformaCreateWithoutJuegoInput = {
    plataforma: PlataformaCreateNestedOneWithoutJuegosInput
  }

  export type JuegoPlataformaUncheckedCreateWithoutJuegoInput = {
    plataformaId: number
  }

  export type JuegoPlataformaCreateOrConnectWithoutJuegoInput = {
    where: JuegoPlataformaWhereUniqueInput
    create: XOR<JuegoPlataformaCreateWithoutJuegoInput, JuegoPlataformaUncheckedCreateWithoutJuegoInput>
  }

  export type JuegoPlataformaCreateManyJuegoInputEnvelope = {
    data: JuegoPlataformaCreateManyJuegoInput | JuegoPlataformaCreateManyJuegoInput[]
    skipDuplicates?: boolean
  }

  export type VentaCreateWithoutJuegoInput = {
    fecha?: Date | string
    codigo: string
    monto_pagado: number
    usuario: UsuarioCreateNestedOneWithoutComprasInput
  }

  export type VentaUncheckedCreateWithoutJuegoInput = {
    id?: number
    fecha?: Date | string
    usuario_id: number
    codigo: string
    monto_pagado: number
  }

  export type VentaCreateOrConnectWithoutJuegoInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput>
  }

  export type VentaCreateManyJuegoInputEnvelope = {
    data: VentaCreateManyJuegoInput | VentaCreateManyJuegoInput[]
    skipDuplicates?: boolean
  }

  export type CalificacionCreateWithoutJuegoInput = {
    valoracion: number
    comentario: string
    usuario: UsuarioCreateNestedOneWithoutCalificacionesInput
  }

  export type CalificacionUncheckedCreateWithoutJuegoInput = {
    id?: number
    valoracion: number
    comentario: string
    usuario_id: number
  }

  export type CalificacionCreateOrConnectWithoutJuegoInput = {
    where: CalificacionWhereUniqueInput
    create: XOR<CalificacionCreateWithoutJuegoInput, CalificacionUncheckedCreateWithoutJuegoInput>
  }

  export type CalificacionCreateManyJuegoInputEnvelope = {
    data: CalificacionCreateManyJuegoInput | CalificacionCreateManyJuegoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutJuegosInput = {
    update: XOR<CategoriaUpdateWithoutJuegosInput, CategoriaUncheckedUpdateWithoutJuegosInput>
    create: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutJuegosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutJuegosInput, CategoriaUncheckedUpdateWithoutJuegosInput>
  }

  export type CategoriaUpdateWithoutJuegosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutJuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type JuegoPlataformaUpsertWithWhereUniqueWithoutJuegoInput = {
    where: JuegoPlataformaWhereUniqueInput
    update: XOR<JuegoPlataformaUpdateWithoutJuegoInput, JuegoPlataformaUncheckedUpdateWithoutJuegoInput>
    create: XOR<JuegoPlataformaCreateWithoutJuegoInput, JuegoPlataformaUncheckedCreateWithoutJuegoInput>
  }

  export type JuegoPlataformaUpdateWithWhereUniqueWithoutJuegoInput = {
    where: JuegoPlataformaWhereUniqueInput
    data: XOR<JuegoPlataformaUpdateWithoutJuegoInput, JuegoPlataformaUncheckedUpdateWithoutJuegoInput>
  }

  export type JuegoPlataformaUpdateManyWithWhereWithoutJuegoInput = {
    where: JuegoPlataformaScalarWhereInput
    data: XOR<JuegoPlataformaUpdateManyMutationInput, JuegoPlataformaUncheckedUpdateManyWithoutJuegoInput>
  }

  export type JuegoPlataformaScalarWhereInput = {
    AND?: JuegoPlataformaScalarWhereInput | JuegoPlataformaScalarWhereInput[]
    OR?: JuegoPlataformaScalarWhereInput[]
    NOT?: JuegoPlataformaScalarWhereInput | JuegoPlataformaScalarWhereInput[]
    juegoId?: IntFilter<"JuegoPlataforma"> | number
    plataformaId?: IntFilter<"JuegoPlataforma"> | number
  }

  export type VentaUpsertWithWhereUniqueWithoutJuegoInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutJuegoInput, VentaUncheckedUpdateWithoutJuegoInput>
    create: XOR<VentaCreateWithoutJuegoInput, VentaUncheckedCreateWithoutJuegoInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutJuegoInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutJuegoInput, VentaUncheckedUpdateWithoutJuegoInput>
  }

  export type VentaUpdateManyWithWhereWithoutJuegoInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutJuegoInput>
  }

  export type CalificacionUpsertWithWhereUniqueWithoutJuegoInput = {
    where: CalificacionWhereUniqueInput
    update: XOR<CalificacionUpdateWithoutJuegoInput, CalificacionUncheckedUpdateWithoutJuegoInput>
    create: XOR<CalificacionCreateWithoutJuegoInput, CalificacionUncheckedCreateWithoutJuegoInput>
  }

  export type CalificacionUpdateWithWhereUniqueWithoutJuegoInput = {
    where: CalificacionWhereUniqueInput
    data: XOR<CalificacionUpdateWithoutJuegoInput, CalificacionUncheckedUpdateWithoutJuegoInput>
  }

  export type CalificacionUpdateManyWithWhereWithoutJuegoInput = {
    where: CalificacionScalarWhereInput
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyWithoutJuegoInput>
  }

  export type JuegoCreateWithoutCalificacionesInput = {
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    categoria: CategoriaCreateNestedOneWithoutJuegosInput
    plataformas?: JuegoPlataformaCreateNestedManyWithoutJuegoInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutCalificacionesInput = {
    id?: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    categoria_id: number
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    plataformas?: JuegoPlataformaUncheckedCreateNestedManyWithoutJuegoInput
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutCalificacionesInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutCalificacionesInput, JuegoUncheckedCreateWithoutCalificacionesInput>
  }

  export type UsuarioCreateWithoutCalificacionesInput = {
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso?: $Enums.Permiso
    compras?: VentaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCalificacionesInput = {
    id?: number
    correo: string
    password: string
    nombre: string
    token: string
    estado: boolean
    permiso?: $Enums.Permiso
    compras?: VentaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCalificacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
  }

  export type JuegoUpsertWithoutCalificacionesInput = {
    update: XOR<JuegoUpdateWithoutCalificacionesInput, JuegoUncheckedUpdateWithoutCalificacionesInput>
    create: XOR<JuegoCreateWithoutCalificacionesInput, JuegoUncheckedCreateWithoutCalificacionesInput>
    where?: JuegoWhereInput
  }

  export type JuegoUpdateToOneWithWhereWithoutCalificacionesInput = {
    where?: JuegoWhereInput
    data: XOR<JuegoUpdateWithoutCalificacionesInput, JuegoUncheckedUpdateWithoutCalificacionesInput>
  }

  export type JuegoUpdateWithoutCalificacionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutJuegosNestedInput
    plataformas?: JuegoPlataformaUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutCalificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria_id?: IntFieldUpdateOperationsInput | number
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    plataformas?: JuegoPlataformaUncheckedUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type UsuarioUpsertWithoutCalificacionesInput = {
    update: XOR<UsuarioUpdateWithoutCalificacionesInput, UsuarioUncheckedUpdateWithoutCalificacionesInput>
    create: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCalificacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCalificacionesInput, UsuarioUncheckedUpdateWithoutCalificacionesInput>
  }

  export type UsuarioUpdateWithoutCalificacionesInput = {
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
    compras?: VentaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCalificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    permiso?: EnumPermisoFieldUpdateOperationsInput | $Enums.Permiso
    compras?: VentaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type JuegoCreateWithoutCategoriaInput = {
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    plataformas?: JuegoPlataformaCreateNestedManyWithoutJuegoInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    plataformas?: JuegoPlataformaUncheckedCreateNestedManyWithoutJuegoInput
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput>
  }

  export type JuegoCreateManyCategoriaInputEnvelope = {
    data: JuegoCreateManyCategoriaInput | JuegoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type JuegoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    update: XOR<JuegoUpdateWithoutCategoriaInput, JuegoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput>
  }

  export type JuegoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    data: XOR<JuegoUpdateWithoutCategoriaInput, JuegoUncheckedUpdateWithoutCategoriaInput>
  }

  export type JuegoUpdateManyWithWhereWithoutCategoriaInput = {
    where: JuegoScalarWhereInput
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type JuegoScalarWhereInput = {
    AND?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
    OR?: JuegoScalarWhereInput[]
    NOT?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
    id?: IntFilter<"Juego"> | number
    titulo?: StringFilter<"Juego"> | string
    descripcion?: StringFilter<"Juego"> | string
    precio?: FloatFilter<"Juego"> | number
    oferta?: BoolFilter<"Juego"> | boolean
    rating?: FloatFilter<"Juego"> | number
    estado?: BoolFilter<"Juego"> | boolean
    categoria_id?: IntFilter<"Juego"> | number
    cover?: StringFilter<"Juego"> | string
    imagenes?: StringNullableListFilter<"Juego">
    videoURL?: StringNullableFilter<"Juego"> | string | null
  }

  export type JuegoPlataformaCreateWithoutPlataformaInput = {
    juego: JuegoCreateNestedOneWithoutPlataformasInput
  }

  export type JuegoPlataformaUncheckedCreateWithoutPlataformaInput = {
    juegoId: number
  }

  export type JuegoPlataformaCreateOrConnectWithoutPlataformaInput = {
    where: JuegoPlataformaWhereUniqueInput
    create: XOR<JuegoPlataformaCreateWithoutPlataformaInput, JuegoPlataformaUncheckedCreateWithoutPlataformaInput>
  }

  export type JuegoPlataformaCreateManyPlataformaInputEnvelope = {
    data: JuegoPlataformaCreateManyPlataformaInput | JuegoPlataformaCreateManyPlataformaInput[]
    skipDuplicates?: boolean
  }

  export type JuegoPlataformaUpsertWithWhereUniqueWithoutPlataformaInput = {
    where: JuegoPlataformaWhereUniqueInput
    update: XOR<JuegoPlataformaUpdateWithoutPlataformaInput, JuegoPlataformaUncheckedUpdateWithoutPlataformaInput>
    create: XOR<JuegoPlataformaCreateWithoutPlataformaInput, JuegoPlataformaUncheckedCreateWithoutPlataformaInput>
  }

  export type JuegoPlataformaUpdateWithWhereUniqueWithoutPlataformaInput = {
    where: JuegoPlataformaWhereUniqueInput
    data: XOR<JuegoPlataformaUpdateWithoutPlataformaInput, JuegoPlataformaUncheckedUpdateWithoutPlataformaInput>
  }

  export type JuegoPlataformaUpdateManyWithWhereWithoutPlataformaInput = {
    where: JuegoPlataformaScalarWhereInput
    data: XOR<JuegoPlataformaUpdateManyMutationInput, JuegoPlataformaUncheckedUpdateManyWithoutPlataformaInput>
  }

  export type JuegoCreateWithoutPlataformasInput = {
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    categoria: CategoriaCreateNestedOneWithoutJuegosInput
    ventas?: VentaCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionCreateNestedManyWithoutJuegoInput
  }

  export type JuegoUncheckedCreateWithoutPlataformasInput = {
    id?: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    categoria_id: number
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
    ventas?: VentaUncheckedCreateNestedManyWithoutJuegoInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutJuegoInput
  }

  export type JuegoCreateOrConnectWithoutPlataformasInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput>
  }

  export type PlataformaCreateWithoutJuegosInput = {
    nombre: string
  }

  export type PlataformaUncheckedCreateWithoutJuegosInput = {
    id?: number
    nombre: string
  }

  export type PlataformaCreateOrConnectWithoutJuegosInput = {
    where: PlataformaWhereUniqueInput
    create: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput>
  }

  export type JuegoUpsertWithoutPlataformasInput = {
    update: XOR<JuegoUpdateWithoutPlataformasInput, JuegoUncheckedUpdateWithoutPlataformasInput>
    create: XOR<JuegoCreateWithoutPlataformasInput, JuegoUncheckedCreateWithoutPlataformasInput>
    where?: JuegoWhereInput
  }

  export type JuegoUpdateToOneWithWhereWithoutPlataformasInput = {
    where?: JuegoWhereInput
    data: XOR<JuegoUpdateWithoutPlataformasInput, JuegoUncheckedUpdateWithoutPlataformasInput>
  }

  export type JuegoUpdateWithoutPlataformasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutJuegosNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutPlataformasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    categoria_id?: IntFieldUpdateOperationsInput | number
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type PlataformaUpsertWithoutJuegosInput = {
    update: XOR<PlataformaUpdateWithoutJuegosInput, PlataformaUncheckedUpdateWithoutJuegosInput>
    create: XOR<PlataformaCreateWithoutJuegosInput, PlataformaUncheckedCreateWithoutJuegosInput>
    where?: PlataformaWhereInput
  }

  export type PlataformaUpdateToOneWithWhereWithoutJuegosInput = {
    where?: PlataformaWhereInput
    data: XOR<PlataformaUpdateWithoutJuegosInput, PlataformaUncheckedUpdateWithoutJuegosInput>
  }

  export type PlataformaUpdateWithoutJuegosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PlataformaUncheckedUpdateWithoutJuegosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type VentaCreateManyUsuarioInput = {
    id?: number
    fecha?: Date | string
    juego_id: number
    codigo: string
    monto_pagado: number
  }

  export type CalificacionCreateManyUsuarioInput = {
    id?: number
    valoracion: number
    comentario: string
    juego_id: number
  }

  export type VentaUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    juego?: JuegoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    juego_id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    juego_id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
  }

  export type CalificacionUpdateWithoutUsuarioInput = {
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    juego?: JuegoUpdateOneRequiredWithoutCalificacionesNestedInput
  }

  export type CalificacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
  }

  export type CalificacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    juego_id?: IntFieldUpdateOperationsInput | number
  }

  export type JuegoPlataformaCreateManyJuegoInput = {
    plataformaId: number
  }

  export type VentaCreateManyJuegoInput = {
    id?: number
    fecha?: Date | string
    usuario_id: number
    codigo: string
    monto_pagado: number
  }

  export type CalificacionCreateManyJuegoInput = {
    id?: number
    valoracion: number
    comentario: string
    usuario_id: number
  }

  export type JuegoPlataformaUpdateWithoutJuegoInput = {
    plataforma?: PlataformaUpdateOneRequiredWithoutJuegosNestedInput
  }

  export type JuegoPlataformaUncheckedUpdateWithoutJuegoInput = {
    plataformaId?: IntFieldUpdateOperationsInput | number
  }

  export type JuegoPlataformaUncheckedUpdateManyWithoutJuegoInput = {
    plataformaId?: IntFieldUpdateOperationsInput | number
  }

  export type VentaUpdateWithoutJuegoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
  }

  export type VentaUncheckedUpdateWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
  }

  export type VentaUncheckedUpdateManyWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    monto_pagado?: FloatFieldUpdateOperationsInput | number
  }

  export type CalificacionUpdateWithoutJuegoInput = {
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutCalificacionesNestedInput
  }

  export type CalificacionUncheckedUpdateWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type CalificacionUncheckedUpdateManyWithoutJuegoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valoracion?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type JuegoCreateManyCategoriaInput = {
    id?: number
    titulo: string
    descripcion: string
    precio: number
    oferta: boolean
    rating: number
    estado: boolean
    cover: string
    imagenes?: JuegoCreateimagenesInput | string[]
    videoURL?: string | null
  }

  export type JuegoUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    plataformas?: JuegoPlataformaUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
    plataformas?: JuegoPlataformaUncheckedUpdateManyWithoutJuegoNestedInput
    ventas?: VentaUncheckedUpdateManyWithoutJuegoNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutJuegoNestedInput
  }

  export type JuegoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    oferta?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    cover?: StringFieldUpdateOperationsInput | string
    imagenes?: JuegoUpdateimagenesInput | string[]
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuegoPlataformaCreateManyPlataformaInput = {
    juegoId: number
  }

  export type JuegoPlataformaUpdateWithoutPlataformaInput = {
    juego?: JuegoUpdateOneRequiredWithoutPlataformasNestedInput
  }

  export type JuegoPlataformaUncheckedUpdateWithoutPlataformaInput = {
    juegoId?: IntFieldUpdateOperationsInput | number
  }

  export type JuegoPlataformaUncheckedUpdateManyWithoutPlataformaInput = {
    juegoId?: IntFieldUpdateOperationsInput | number
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