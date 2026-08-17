
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Campus
 * 
 */
export type Campus = $Result.DefaultSelection<Prisma.$CampusPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model DepartmentCampus
 * 
 */
export type DepartmentCampus = $Result.DefaultSelection<Prisma.$DepartmentCampusPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model AdmissionApplication
 * 
 */
export type AdmissionApplication = $Result.DefaultSelection<Prisma.$AdmissionApplicationPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model GalleryImage
 * 
 */
export type GalleryImage = $Result.DefaultSelection<Prisma.$GalleryImagePayload>
/**
 * Model Testimonial
 * 
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>
/**
 * Model IntakeSession
 * 
 */
export type IntakeSession = $Result.DefaultSelection<Prisma.$IntakeSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CampusCode: {
  KERUGOYA: 'KERUGOYA',
  RUAI: 'RUAI'
};

export type CampusCode = (typeof CampusCode)[keyof typeof CampusCode]


export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  ADMISSIONS: 'ADMISSIONS',
  REGISTRAR: 'REGISTRAR',
  ACCOUNTANT: 'ACCOUNTANT',
  TRAINER: 'TRAINER',
  STAFF: 'STAFF',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ApplicationStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  ADMITTED: 'ADMITTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const IntakeStatus: {
  OPEN: 'OPEN',
  CLOSING_SOON: 'CLOSING_SOON',
  CLOSED: 'CLOSED'
};

export type IntakeStatus = (typeof IntakeStatus)[keyof typeof IntakeStatus]


export const GallerySpan: {
  NORMAL: 'NORMAL',
  TALL: 'TALL',
  WIDE_TALL: 'WIDE_TALL'
};

export type GallerySpan = (typeof GallerySpan)[keyof typeof GallerySpan]


export const ModeOfStudy: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME'
};

export type ModeOfStudy = (typeof ModeOfStudy)[keyof typeof ModeOfStudy]


export const Intake: {
  JANUARY: 'JANUARY',
  MAY: 'MAY',
  SEPTEMBER: 'SEPTEMBER'
};

export type Intake = (typeof Intake)[keyof typeof Intake]

}

export type CampusCode = $Enums.CampusCode

export const CampusCode: typeof $Enums.CampusCode

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type IntakeStatus = $Enums.IntakeStatus

export const IntakeStatus: typeof $Enums.IntakeStatus

export type GallerySpan = $Enums.GallerySpan

export const GallerySpan: typeof $Enums.GallerySpan

export type ModeOfStudy = $Enums.ModeOfStudy

export const ModeOfStudy: typeof $Enums.ModeOfStudy

export type Intake = $Enums.Intake

export const Intake: typeof $Enums.Intake

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campus`: Exposes CRUD operations for the **Campus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campuses
    * const campuses = await prisma.campus.findMany()
    * ```
    */
  get campus(): Prisma.CampusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departmentCampus`: Exposes CRUD operations for the **DepartmentCampus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepartmentCampuses
    * const departmentCampuses = await prisma.departmentCampus.findMany()
    * ```
    */
  get departmentCampus(): Prisma.DepartmentCampusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admissionApplication`: Exposes CRUD operations for the **AdmissionApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdmissionApplications
    * const admissionApplications = await prisma.admissionApplication.findMany()
    * ```
    */
  get admissionApplication(): Prisma.AdmissionApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryImages
    * const galleryImages = await prisma.galleryImage.findMany()
    * ```
    */
  get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intakeSession`: Exposes CRUD operations for the **IntakeSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntakeSessions
    * const intakeSessions = await prisma.intakeSession.findMany()
    * ```
    */
  get intakeSession(): Prisma.IntakeSessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Campus: 'Campus',
    Department: 'Department',
    DepartmentCampus: 'DepartmentCampus',
    Course: 'Course',
    AdmissionApplication: 'AdmissionApplication',
    Student: 'Student',
    Staff: 'Staff',
    News: 'News',
    GalleryImage: 'GalleryImage',
    Testimonial: 'Testimonial',
    ContactMessage: 'ContactMessage',
    IntakeSession: 'IntakeSession'
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
      modelProps: "user" | "campus" | "department" | "departmentCampus" | "course" | "admissionApplication" | "student" | "staff" | "news" | "galleryImage" | "testimonial" | "contactMessage" | "intakeSession"
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
      Campus: {
        payload: Prisma.$CampusPayload<ExtArgs>
        fields: Prisma.CampusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>
          }
          findFirst: {
            args: Prisma.CampusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>
          }
          findMany: {
            args: Prisma.CampusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>[]
          }
          create: {
            args: Prisma.CampusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>
          }
          createMany: {
            args: Prisma.CampusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>[]
          }
          delete: {
            args: Prisma.CampusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>
          }
          update: {
            args: Prisma.CampusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>
          }
          deleteMany: {
            args: Prisma.CampusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>[]
          }
          upsert: {
            args: Prisma.CampusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampusPayload>
          }
          aggregate: {
            args: Prisma.CampusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampus>
          }
          groupBy: {
            args: Prisma.CampusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampusGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampusCountArgs<ExtArgs>
            result: $Utils.Optional<CampusCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      DepartmentCampus: {
        payload: Prisma.$DepartmentCampusPayload<ExtArgs>
        fields: Prisma.DepartmentCampusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentCampusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentCampusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>
          }
          findFirst: {
            args: Prisma.DepartmentCampusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentCampusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>
          }
          findMany: {
            args: Prisma.DepartmentCampusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>[]
          }
          create: {
            args: Prisma.DepartmentCampusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>
          }
          createMany: {
            args: Prisma.DepartmentCampusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCampusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>[]
          }
          delete: {
            args: Prisma.DepartmentCampusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>
          }
          update: {
            args: Prisma.DepartmentCampusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentCampusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentCampusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentCampusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentCampusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentCampusPayload>
          }
          aggregate: {
            args: Prisma.DepartmentCampusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartmentCampus>
          }
          groupBy: {
            args: Prisma.DepartmentCampusGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCampusGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCampusCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCampusCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      AdmissionApplication: {
        payload: Prisma.$AdmissionApplicationPayload<ExtArgs>
        fields: Prisma.AdmissionApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>
          }
          findFirst: {
            args: Prisma.AdmissionApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>
          }
          findMany: {
            args: Prisma.AdmissionApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>[]
          }
          create: {
            args: Prisma.AdmissionApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>
          }
          createMany: {
            args: Prisma.AdmissionApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdmissionApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>[]
          }
          delete: {
            args: Prisma.AdmissionApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>
          }
          update: {
            args: Prisma.AdmissionApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdmissionApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>[]
          }
          upsert: {
            args: Prisma.AdmissionApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionApplicationPayload>
          }
          aggregate: {
            args: Prisma.AdmissionApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmissionApplication>
          }
          groupBy: {
            args: Prisma.AdmissionApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionApplicationCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      GalleryImage: {
        payload: Prisma.$GalleryImagePayload<ExtArgs>
        fields: Prisma.GalleryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findFirst: {
            args: Prisma.GalleryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          findMany: {
            args: Prisma.GalleryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          create: {
            args: Prisma.GalleryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          createMany: {
            args: Prisma.GalleryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          delete: {
            args: Prisma.GalleryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          update: {
            args: Prisma.GalleryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          deleteMany: {
            args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>[]
          }
          upsert: {
            args: Prisma.GalleryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryImagePayload>
          }
          aggregate: {
            args: Prisma.GalleryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryImage>
          }
          groupBy: {
            args: Prisma.GalleryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryImageCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryImageCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
      IntakeSession: {
        payload: Prisma.$IntakeSessionPayload<ExtArgs>
        fields: Prisma.IntakeSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntakeSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntakeSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>
          }
          findFirst: {
            args: Prisma.IntakeSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntakeSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>
          }
          findMany: {
            args: Prisma.IntakeSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>[]
          }
          create: {
            args: Prisma.IntakeSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>
          }
          createMany: {
            args: Prisma.IntakeSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntakeSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>[]
          }
          delete: {
            args: Prisma.IntakeSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>
          }
          update: {
            args: Prisma.IntakeSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>
          }
          deleteMany: {
            args: Prisma.IntakeSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntakeSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntakeSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>[]
          }
          upsert: {
            args: Prisma.IntakeSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeSessionPayload>
          }
          aggregate: {
            args: Prisma.IntakeSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntakeSession>
          }
          groupBy: {
            args: Prisma.IntakeSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntakeSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntakeSessionCountArgs<ExtArgs>
            result: $Utils.Optional<IntakeSessionCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    user?: UserOmit
    campus?: CampusOmit
    department?: DepartmentOmit
    departmentCampus?: DepartmentCampusOmit
    course?: CourseOmit
    admissionApplication?: AdmissionApplicationOmit
    student?: StudentOmit
    staff?: StaffOmit
    news?: NewsOmit
    galleryImage?: GalleryImageOmit
    testimonial?: TestimonialOmit
    contactMessage?: ContactMessageOmit
    intakeSession?: IntakeSessionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    admissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | UserCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionApplicationWhereInput
  }


  /**
   * Count Type CampusCountOutputType
   */

  export type CampusCountOutputType = {
    departments: number
    courses: number
    students: number
  }

  export type CampusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | CampusCountOutputTypeCountDepartmentsArgs
    courses?: boolean | CampusCountOutputTypeCountCoursesArgs
    students?: boolean | CampusCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * CampusCountOutputType without action
   */
  export type CampusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampusCountOutputType
     */
    select?: CampusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampusCountOutputType without action
   */
  export type CampusCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentCampusWhereInput
  }

  /**
   * CampusCountOutputType without action
   */
  export type CampusCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * CampusCountOutputType without action
   */
  export type CampusCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    campuses: number
    courses: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campuses?: boolean | DepartmentCountOutputTypeCountCampusesArgs
    courses?: boolean | DepartmentCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCampusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentCampusWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    applications: number
    students: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | CourseCountOutputTypeCountApplicationsArgs
    students?: boolean | CourseCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionApplicationWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


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
    phone: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    active?: true
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
    phone: string | null
    role: $Enums.Role
    active: boolean
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
    phone?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admissions?: boolean | User$admissionsArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "role" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | User$admissionsArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      admissions: Prisma.$AdmissionApplicationPayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs> | null
      staff: Prisma.$StaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      active: boolean
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
    admissions<T extends User$admissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$admissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends User$staffArgs<ExtArgs> = {}>(args?: Subset<T, User$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly active: FieldRef<"User", 'Boolean'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.admissions
   */
  export type User$admissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    where?: AdmissionApplicationWhereInput
    orderBy?: AdmissionApplicationOrderByWithRelationInput | AdmissionApplicationOrderByWithRelationInput[]
    cursor?: AdmissionApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionApplicationScalarFieldEnum | AdmissionApplicationScalarFieldEnum[]
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.staff
   */
  export type User$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Campus
   */

  export type AggregateCampus = {
    _count: CampusCountAggregateOutputType | null
    _min: CampusMinAggregateOutputType | null
    _max: CampusMaxAggregateOutputType | null
  }

  export type CampusMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: $Enums.CampusCode | null
    location: string | null
    address: string | null
    directions: string | null
    description: string | null
    image: string | null
    mapsUrl: string | null
    mapEmbedUrl: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: $Enums.CampusCode | null
    location: string | null
    address: string | null
    directions: string | null
    description: string | null
    image: string | null
    mapsUrl: string | null
    mapEmbedUrl: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampusCountAggregateOutputType = {
    id: number
    name: number
    code: number
    location: number
    address: number
    directions: number
    description: number
    image: number
    mapsUrl: number
    mapEmbedUrl: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampusMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    location?: true
    address?: true
    directions?: true
    description?: true
    image?: true
    mapsUrl?: true
    mapEmbedUrl?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampusMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    location?: true
    address?: true
    directions?: true
    description?: true
    image?: true
    mapsUrl?: true
    mapEmbedUrl?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampusCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    location?: true
    address?: true
    directions?: true
    description?: true
    image?: true
    mapsUrl?: true
    mapEmbedUrl?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campus to aggregate.
     */
    where?: CampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campuses to fetch.
     */
    orderBy?: CampusOrderByWithRelationInput | CampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campuses
    **/
    _count?: true | CampusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampusMaxAggregateInputType
  }

  export type GetCampusAggregateType<T extends CampusAggregateArgs> = {
        [P in keyof T & keyof AggregateCampus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampus[P]>
      : GetScalarType<T[P], AggregateCampus[P]>
  }




  export type CampusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampusWhereInput
    orderBy?: CampusOrderByWithAggregationInput | CampusOrderByWithAggregationInput[]
    by: CampusScalarFieldEnum[] | CampusScalarFieldEnum
    having?: CampusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampusCountAggregateInputType | true
    _min?: CampusMinAggregateInputType
    _max?: CampusMaxAggregateInputType
  }

  export type CampusGroupByOutputType = {
    id: string
    name: string
    code: $Enums.CampusCode
    location: string | null
    address: string | null
    directions: string | null
    description: string | null
    image: string | null
    mapsUrl: string | null
    mapEmbedUrl: string | null
    phone: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: CampusCountAggregateOutputType | null
    _min: CampusMinAggregateOutputType | null
    _max: CampusMaxAggregateOutputType | null
  }

  type GetCampusGroupByPayload<T extends CampusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampusGroupByOutputType[P]>
            : GetScalarType<T[P], CampusGroupByOutputType[P]>
        }
      >
    >


  export type CampusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    address?: boolean
    directions?: boolean
    description?: boolean
    image?: boolean
    mapsUrl?: boolean
    mapEmbedUrl?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departments?: boolean | Campus$departmentsArgs<ExtArgs>
    courses?: boolean | Campus$coursesArgs<ExtArgs>
    students?: boolean | Campus$studentsArgs<ExtArgs>
    _count?: boolean | CampusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campus"]>

  export type CampusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    address?: boolean
    directions?: boolean
    description?: boolean
    image?: boolean
    mapsUrl?: boolean
    mapEmbedUrl?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campus"]>

  export type CampusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    address?: boolean
    directions?: boolean
    description?: boolean
    image?: boolean
    mapsUrl?: boolean
    mapEmbedUrl?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campus"]>

  export type CampusSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    location?: boolean
    address?: boolean
    directions?: boolean
    description?: boolean
    image?: boolean
    mapsUrl?: boolean
    mapEmbedUrl?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "location" | "address" | "directions" | "description" | "image" | "mapsUrl" | "mapEmbedUrl" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["campus"]>
  export type CampusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | Campus$departmentsArgs<ExtArgs>
    courses?: boolean | Campus$coursesArgs<ExtArgs>
    students?: boolean | Campus$studentsArgs<ExtArgs>
    _count?: boolean | CampusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campus"
    objects: {
      departments: Prisma.$DepartmentCampusPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: $Enums.CampusCode
      location: string | null
      address: string | null
      directions: string | null
      description: string | null
      image: string | null
      mapsUrl: string | null
      mapEmbedUrl: string | null
      phone: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campus"]>
    composites: {}
  }

  type CampusGetPayload<S extends boolean | null | undefined | CampusDefaultArgs> = $Result.GetResult<Prisma.$CampusPayload, S>

  type CampusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampusCountAggregateInputType | true
    }

  export interface CampusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campus'], meta: { name: 'Campus' } }
    /**
     * Find zero or one Campus that matches the filter.
     * @param {CampusFindUniqueArgs} args - Arguments to find a Campus
     * @example
     * // Get one Campus
     * const campus = await prisma.campus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampusFindUniqueArgs>(args: SelectSubset<T, CampusFindUniqueArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampusFindUniqueOrThrowArgs} args - Arguments to find a Campus
     * @example
     * // Get one Campus
     * const campus = await prisma.campus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampusFindUniqueOrThrowArgs>(args: SelectSubset<T, CampusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusFindFirstArgs} args - Arguments to find a Campus
     * @example
     * // Get one Campus
     * const campus = await prisma.campus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampusFindFirstArgs>(args?: SelectSubset<T, CampusFindFirstArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusFindFirstOrThrowArgs} args - Arguments to find a Campus
     * @example
     * // Get one Campus
     * const campus = await prisma.campus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampusFindFirstOrThrowArgs>(args?: SelectSubset<T, CampusFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campuses
     * const campuses = await prisma.campus.findMany()
     * 
     * // Get first 10 Campuses
     * const campuses = await prisma.campus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campusWithIdOnly = await prisma.campus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampusFindManyArgs>(args?: SelectSubset<T, CampusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campus.
     * @param {CampusCreateArgs} args - Arguments to create a Campus.
     * @example
     * // Create one Campus
     * const Campus = await prisma.campus.create({
     *   data: {
     *     // ... data to create a Campus
     *   }
     * })
     * 
     */
    create<T extends CampusCreateArgs>(args: SelectSubset<T, CampusCreateArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campuses.
     * @param {CampusCreateManyArgs} args - Arguments to create many Campuses.
     * @example
     * // Create many Campuses
     * const campus = await prisma.campus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampusCreateManyArgs>(args?: SelectSubset<T, CampusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campuses and returns the data saved in the database.
     * @param {CampusCreateManyAndReturnArgs} args - Arguments to create many Campuses.
     * @example
     * // Create many Campuses
     * const campus = await prisma.campus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campuses and only return the `id`
     * const campusWithIdOnly = await prisma.campus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampusCreateManyAndReturnArgs>(args?: SelectSubset<T, CampusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campus.
     * @param {CampusDeleteArgs} args - Arguments to delete one Campus.
     * @example
     * // Delete one Campus
     * const Campus = await prisma.campus.delete({
     *   where: {
     *     // ... filter to delete one Campus
     *   }
     * })
     * 
     */
    delete<T extends CampusDeleteArgs>(args: SelectSubset<T, CampusDeleteArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campus.
     * @param {CampusUpdateArgs} args - Arguments to update one Campus.
     * @example
     * // Update one Campus
     * const campus = await prisma.campus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampusUpdateArgs>(args: SelectSubset<T, CampusUpdateArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campuses.
     * @param {CampusDeleteManyArgs} args - Arguments to filter Campuses to delete.
     * @example
     * // Delete a few Campuses
     * const { count } = await prisma.campus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampusDeleteManyArgs>(args?: SelectSubset<T, CampusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campuses
     * const campus = await prisma.campus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampusUpdateManyArgs>(args: SelectSubset<T, CampusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campuses and returns the data updated in the database.
     * @param {CampusUpdateManyAndReturnArgs} args - Arguments to update many Campuses.
     * @example
     * // Update many Campuses
     * const campus = await prisma.campus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campuses and only return the `id`
     * const campusWithIdOnly = await prisma.campus.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampusUpdateManyAndReturnArgs>(args: SelectSubset<T, CampusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campus.
     * @param {CampusUpsertArgs} args - Arguments to update or create a Campus.
     * @example
     * // Update or create a Campus
     * const campus = await prisma.campus.upsert({
     *   create: {
     *     // ... data to create a Campus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campus we want to update
     *   }
     * })
     */
    upsert<T extends CampusUpsertArgs>(args: SelectSubset<T, CampusUpsertArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusCountArgs} args - Arguments to filter Campuses to count.
     * @example
     * // Count the number of Campuses
     * const count = await prisma.campus.count({
     *   where: {
     *     // ... the filter for the Campuses we want to count
     *   }
     * })
    **/
    count<T extends CampusCountArgs>(
      args?: Subset<T, CampusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampusAggregateArgs>(args: Subset<T, CampusAggregateArgs>): Prisma.PrismaPromise<GetCampusAggregateType<T>>

    /**
     * Group by Campus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampusGroupByArgs} args - Group by arguments.
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
      T extends CampusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampusGroupByArgs['orderBy'] }
        : { orderBy?: CampusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campus model
   */
  readonly fields: CampusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends Campus$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Campus$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends Campus$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Campus$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Campus$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Campus$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campus model
   */
  interface CampusFieldRefs {
    readonly id: FieldRef<"Campus", 'String'>
    readonly name: FieldRef<"Campus", 'String'>
    readonly code: FieldRef<"Campus", 'CampusCode'>
    readonly location: FieldRef<"Campus", 'String'>
    readonly address: FieldRef<"Campus", 'String'>
    readonly directions: FieldRef<"Campus", 'String'>
    readonly description: FieldRef<"Campus", 'String'>
    readonly image: FieldRef<"Campus", 'String'>
    readonly mapsUrl: FieldRef<"Campus", 'String'>
    readonly mapEmbedUrl: FieldRef<"Campus", 'String'>
    readonly phone: FieldRef<"Campus", 'String'>
    readonly email: FieldRef<"Campus", 'String'>
    readonly createdAt: FieldRef<"Campus", 'DateTime'>
    readonly updatedAt: FieldRef<"Campus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campus findUnique
   */
  export type CampusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * Filter, which Campus to fetch.
     */
    where: CampusWhereUniqueInput
  }

  /**
   * Campus findUniqueOrThrow
   */
  export type CampusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * Filter, which Campus to fetch.
     */
    where: CampusWhereUniqueInput
  }

  /**
   * Campus findFirst
   */
  export type CampusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * Filter, which Campus to fetch.
     */
    where?: CampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campuses to fetch.
     */
    orderBy?: CampusOrderByWithRelationInput | CampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campuses.
     */
    cursor?: CampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campuses.
     */
    distinct?: CampusScalarFieldEnum | CampusScalarFieldEnum[]
  }

  /**
   * Campus findFirstOrThrow
   */
  export type CampusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * Filter, which Campus to fetch.
     */
    where?: CampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campuses to fetch.
     */
    orderBy?: CampusOrderByWithRelationInput | CampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campuses.
     */
    cursor?: CampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campuses.
     */
    distinct?: CampusScalarFieldEnum | CampusScalarFieldEnum[]
  }

  /**
   * Campus findMany
   */
  export type CampusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * Filter, which Campuses to fetch.
     */
    where?: CampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campuses to fetch.
     */
    orderBy?: CampusOrderByWithRelationInput | CampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campuses.
     */
    cursor?: CampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campuses.
     */
    distinct?: CampusScalarFieldEnum | CampusScalarFieldEnum[]
  }

  /**
   * Campus create
   */
  export type CampusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * The data needed to create a Campus.
     */
    data: XOR<CampusCreateInput, CampusUncheckedCreateInput>
  }

  /**
   * Campus createMany
   */
  export type CampusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campuses.
     */
    data: CampusCreateManyInput | CampusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campus createManyAndReturn
   */
  export type CampusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * The data used to create many Campuses.
     */
    data: CampusCreateManyInput | CampusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campus update
   */
  export type CampusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * The data needed to update a Campus.
     */
    data: XOR<CampusUpdateInput, CampusUncheckedUpdateInput>
    /**
     * Choose, which Campus to update.
     */
    where: CampusWhereUniqueInput
  }

  /**
   * Campus updateMany
   */
  export type CampusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campuses.
     */
    data: XOR<CampusUpdateManyMutationInput, CampusUncheckedUpdateManyInput>
    /**
     * Filter which Campuses to update
     */
    where?: CampusWhereInput
    /**
     * Limit how many Campuses to update.
     */
    limit?: number
  }

  /**
   * Campus updateManyAndReturn
   */
  export type CampusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * The data used to update Campuses.
     */
    data: XOR<CampusUpdateManyMutationInput, CampusUncheckedUpdateManyInput>
    /**
     * Filter which Campuses to update
     */
    where?: CampusWhereInput
    /**
     * Limit how many Campuses to update.
     */
    limit?: number
  }

  /**
   * Campus upsert
   */
  export type CampusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * The filter to search for the Campus to update in case it exists.
     */
    where: CampusWhereUniqueInput
    /**
     * In case the Campus found by the `where` argument doesn't exist, create a new Campus with this data.
     */
    create: XOR<CampusCreateInput, CampusUncheckedCreateInput>
    /**
     * In case the Campus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampusUpdateInput, CampusUncheckedUpdateInput>
  }

  /**
   * Campus delete
   */
  export type CampusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    /**
     * Filter which Campus to delete.
     */
    where: CampusWhereUniqueInput
  }

  /**
   * Campus deleteMany
   */
  export type CampusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campuses to delete
     */
    where?: CampusWhereInput
    /**
     * Limit how many Campuses to delete.
     */
    limit?: number
  }

  /**
   * Campus.departments
   */
  export type Campus$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    where?: DepartmentCampusWhereInput
    orderBy?: DepartmentCampusOrderByWithRelationInput | DepartmentCampusOrderByWithRelationInput[]
    cursor?: DepartmentCampusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentCampusScalarFieldEnum | DepartmentCampusScalarFieldEnum[]
  }

  /**
   * Campus.courses
   */
  export type Campus$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Campus.students
   */
  export type Campus$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Campus without action
   */
  export type CampusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campuses?: boolean | Department$campusesArgs<ExtArgs>
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campuses?: boolean | Department$campusesArgs<ExtArgs>
    courses?: boolean | Department$coursesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      campuses: Prisma.$DepartmentCampusPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campuses<T extends Department$campusesArgs<ExtArgs> = {}>(args?: Subset<T, Department$campusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends Department$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Department$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly slug: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly isActive: FieldRef<"Department", 'Boolean'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.campuses
   */
  export type Department$campusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    where?: DepartmentCampusWhereInput
    orderBy?: DepartmentCampusOrderByWithRelationInput | DepartmentCampusOrderByWithRelationInput[]
    cursor?: DepartmentCampusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentCampusScalarFieldEnum | DepartmentCampusScalarFieldEnum[]
  }

  /**
   * Department.courses
   */
  export type Department$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model DepartmentCampus
   */

  export type AggregateDepartmentCampus = {
    _count: DepartmentCampusCountAggregateOutputType | null
    _min: DepartmentCampusMinAggregateOutputType | null
    _max: DepartmentCampusMaxAggregateOutputType | null
  }

  export type DepartmentCampusMinAggregateOutputType = {
    departmentId: string | null
    campusId: string | null
  }

  export type DepartmentCampusMaxAggregateOutputType = {
    departmentId: string | null
    campusId: string | null
  }

  export type DepartmentCampusCountAggregateOutputType = {
    departmentId: number
    campusId: number
    _all: number
  }


  export type DepartmentCampusMinAggregateInputType = {
    departmentId?: true
    campusId?: true
  }

  export type DepartmentCampusMaxAggregateInputType = {
    departmentId?: true
    campusId?: true
  }

  export type DepartmentCampusCountAggregateInputType = {
    departmentId?: true
    campusId?: true
    _all?: true
  }

  export type DepartmentCampusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentCampus to aggregate.
     */
    where?: DepartmentCampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentCampuses to fetch.
     */
    orderBy?: DepartmentCampusOrderByWithRelationInput | DepartmentCampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentCampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentCampuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentCampuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepartmentCampuses
    **/
    _count?: true | DepartmentCampusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentCampusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentCampusMaxAggregateInputType
  }

  export type GetDepartmentCampusAggregateType<T extends DepartmentCampusAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartmentCampus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartmentCampus[P]>
      : GetScalarType<T[P], AggregateDepartmentCampus[P]>
  }




  export type DepartmentCampusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentCampusWhereInput
    orderBy?: DepartmentCampusOrderByWithAggregationInput | DepartmentCampusOrderByWithAggregationInput[]
    by: DepartmentCampusScalarFieldEnum[] | DepartmentCampusScalarFieldEnum
    having?: DepartmentCampusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCampusCountAggregateInputType | true
    _min?: DepartmentCampusMinAggregateInputType
    _max?: DepartmentCampusMaxAggregateInputType
  }

  export type DepartmentCampusGroupByOutputType = {
    departmentId: string
    campusId: string
    _count: DepartmentCampusCountAggregateOutputType | null
    _min: DepartmentCampusMinAggregateOutputType | null
    _max: DepartmentCampusMaxAggregateOutputType | null
  }

  type GetDepartmentCampusGroupByPayload<T extends DepartmentCampusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentCampusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentCampusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentCampusGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentCampusGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentCampusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    campusId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentCampus"]>

  export type DepartmentCampusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    campusId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentCampus"]>

  export type DepartmentCampusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    campusId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentCampus"]>

  export type DepartmentCampusSelectScalar = {
    departmentId?: boolean
    campusId?: boolean
  }

  export type DepartmentCampusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"departmentId" | "campusId", ExtArgs["result"]["departmentCampus"]>
  export type DepartmentCampusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }
  export type DepartmentCampusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }
  export type DepartmentCampusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }

  export type $DepartmentCampusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepartmentCampus"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      campus: Prisma.$CampusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      departmentId: string
      campusId: string
    }, ExtArgs["result"]["departmentCampus"]>
    composites: {}
  }

  type DepartmentCampusGetPayload<S extends boolean | null | undefined | DepartmentCampusDefaultArgs> = $Result.GetResult<Prisma.$DepartmentCampusPayload, S>

  type DepartmentCampusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentCampusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCampusCountAggregateInputType | true
    }

  export interface DepartmentCampusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepartmentCampus'], meta: { name: 'DepartmentCampus' } }
    /**
     * Find zero or one DepartmentCampus that matches the filter.
     * @param {DepartmentCampusFindUniqueArgs} args - Arguments to find a DepartmentCampus
     * @example
     * // Get one DepartmentCampus
     * const departmentCampus = await prisma.departmentCampus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentCampusFindUniqueArgs>(args: SelectSubset<T, DepartmentCampusFindUniqueArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DepartmentCampus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentCampusFindUniqueOrThrowArgs} args - Arguments to find a DepartmentCampus
     * @example
     * // Get one DepartmentCampus
     * const departmentCampus = await prisma.departmentCampus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentCampusFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentCampusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartmentCampus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCampusFindFirstArgs} args - Arguments to find a DepartmentCampus
     * @example
     * // Get one DepartmentCampus
     * const departmentCampus = await prisma.departmentCampus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentCampusFindFirstArgs>(args?: SelectSubset<T, DepartmentCampusFindFirstArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DepartmentCampus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCampusFindFirstOrThrowArgs} args - Arguments to find a DepartmentCampus
     * @example
     * // Get one DepartmentCampus
     * const departmentCampus = await prisma.departmentCampus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentCampusFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentCampusFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DepartmentCampuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCampusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepartmentCampuses
     * const departmentCampuses = await prisma.departmentCampus.findMany()
     * 
     * // Get first 10 DepartmentCampuses
     * const departmentCampuses = await prisma.departmentCampus.findMany({ take: 10 })
     * 
     * // Only select the `departmentId`
     * const departmentCampusWithDepartmentIdOnly = await prisma.departmentCampus.findMany({ select: { departmentId: true } })
     * 
     */
    findMany<T extends DepartmentCampusFindManyArgs>(args?: SelectSubset<T, DepartmentCampusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DepartmentCampus.
     * @param {DepartmentCampusCreateArgs} args - Arguments to create a DepartmentCampus.
     * @example
     * // Create one DepartmentCampus
     * const DepartmentCampus = await prisma.departmentCampus.create({
     *   data: {
     *     // ... data to create a DepartmentCampus
     *   }
     * })
     * 
     */
    create<T extends DepartmentCampusCreateArgs>(args: SelectSubset<T, DepartmentCampusCreateArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DepartmentCampuses.
     * @param {DepartmentCampusCreateManyArgs} args - Arguments to create many DepartmentCampuses.
     * @example
     * // Create many DepartmentCampuses
     * const departmentCampus = await prisma.departmentCampus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCampusCreateManyArgs>(args?: SelectSubset<T, DepartmentCampusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DepartmentCampuses and returns the data saved in the database.
     * @param {DepartmentCampusCreateManyAndReturnArgs} args - Arguments to create many DepartmentCampuses.
     * @example
     * // Create many DepartmentCampuses
     * const departmentCampus = await prisma.departmentCampus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DepartmentCampuses and only return the `departmentId`
     * const departmentCampusWithDepartmentIdOnly = await prisma.departmentCampus.createManyAndReturn({
     *   select: { departmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCampusCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCampusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DepartmentCampus.
     * @param {DepartmentCampusDeleteArgs} args - Arguments to delete one DepartmentCampus.
     * @example
     * // Delete one DepartmentCampus
     * const DepartmentCampus = await prisma.departmentCampus.delete({
     *   where: {
     *     // ... filter to delete one DepartmentCampus
     *   }
     * })
     * 
     */
    delete<T extends DepartmentCampusDeleteArgs>(args: SelectSubset<T, DepartmentCampusDeleteArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DepartmentCampus.
     * @param {DepartmentCampusUpdateArgs} args - Arguments to update one DepartmentCampus.
     * @example
     * // Update one DepartmentCampus
     * const departmentCampus = await prisma.departmentCampus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentCampusUpdateArgs>(args: SelectSubset<T, DepartmentCampusUpdateArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DepartmentCampuses.
     * @param {DepartmentCampusDeleteManyArgs} args - Arguments to filter DepartmentCampuses to delete.
     * @example
     * // Delete a few DepartmentCampuses
     * const { count } = await prisma.departmentCampus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentCampusDeleteManyArgs>(args?: SelectSubset<T, DepartmentCampusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartmentCampuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCampusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepartmentCampuses
     * const departmentCampus = await prisma.departmentCampus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentCampusUpdateManyArgs>(args: SelectSubset<T, DepartmentCampusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartmentCampuses and returns the data updated in the database.
     * @param {DepartmentCampusUpdateManyAndReturnArgs} args - Arguments to update many DepartmentCampuses.
     * @example
     * // Update many DepartmentCampuses
     * const departmentCampus = await prisma.departmentCampus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DepartmentCampuses and only return the `departmentId`
     * const departmentCampusWithDepartmentIdOnly = await prisma.departmentCampus.updateManyAndReturn({
     *   select: { departmentId: true },
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
    updateManyAndReturn<T extends DepartmentCampusUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentCampusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DepartmentCampus.
     * @param {DepartmentCampusUpsertArgs} args - Arguments to update or create a DepartmentCampus.
     * @example
     * // Update or create a DepartmentCampus
     * const departmentCampus = await prisma.departmentCampus.upsert({
     *   create: {
     *     // ... data to create a DepartmentCampus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepartmentCampus we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentCampusUpsertArgs>(args: SelectSubset<T, DepartmentCampusUpsertArgs<ExtArgs>>): Prisma__DepartmentCampusClient<$Result.GetResult<Prisma.$DepartmentCampusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DepartmentCampuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCampusCountArgs} args - Arguments to filter DepartmentCampuses to count.
     * @example
     * // Count the number of DepartmentCampuses
     * const count = await prisma.departmentCampus.count({
     *   where: {
     *     // ... the filter for the DepartmentCampuses we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCampusCountArgs>(
      args?: Subset<T, DepartmentCampusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCampusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepartmentCampus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCampusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentCampusAggregateArgs>(args: Subset<T, DepartmentCampusAggregateArgs>): Prisma.PrismaPromise<GetDepartmentCampusAggregateType<T>>

    /**
     * Group by DepartmentCampus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCampusGroupByArgs} args - Group by arguments.
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
      T extends DepartmentCampusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentCampusGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentCampusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentCampusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentCampusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepartmentCampus model
   */
  readonly fields: DepartmentCampusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepartmentCampus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentCampusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campus<T extends CampusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampusDefaultArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DepartmentCampus model
   */
  interface DepartmentCampusFieldRefs {
    readonly departmentId: FieldRef<"DepartmentCampus", 'String'>
    readonly campusId: FieldRef<"DepartmentCampus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DepartmentCampus findUnique
   */
  export type DepartmentCampusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentCampus to fetch.
     */
    where: DepartmentCampusWhereUniqueInput
  }

  /**
   * DepartmentCampus findUniqueOrThrow
   */
  export type DepartmentCampusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentCampus to fetch.
     */
    where: DepartmentCampusWhereUniqueInput
  }

  /**
   * DepartmentCampus findFirst
   */
  export type DepartmentCampusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentCampus to fetch.
     */
    where?: DepartmentCampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentCampuses to fetch.
     */
    orderBy?: DepartmentCampusOrderByWithRelationInput | DepartmentCampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentCampuses.
     */
    cursor?: DepartmentCampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentCampuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentCampuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentCampuses.
     */
    distinct?: DepartmentCampusScalarFieldEnum | DepartmentCampusScalarFieldEnum[]
  }

  /**
   * DepartmentCampus findFirstOrThrow
   */
  export type DepartmentCampusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentCampus to fetch.
     */
    where?: DepartmentCampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentCampuses to fetch.
     */
    orderBy?: DepartmentCampusOrderByWithRelationInput | DepartmentCampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentCampuses.
     */
    cursor?: DepartmentCampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentCampuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentCampuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentCampuses.
     */
    distinct?: DepartmentCampusScalarFieldEnum | DepartmentCampusScalarFieldEnum[]
  }

  /**
   * DepartmentCampus findMany
   */
  export type DepartmentCampusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentCampuses to fetch.
     */
    where?: DepartmentCampusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentCampuses to fetch.
     */
    orderBy?: DepartmentCampusOrderByWithRelationInput | DepartmentCampusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepartmentCampuses.
     */
    cursor?: DepartmentCampusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentCampuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentCampuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentCampuses.
     */
    distinct?: DepartmentCampusScalarFieldEnum | DepartmentCampusScalarFieldEnum[]
  }

  /**
   * DepartmentCampus create
   */
  export type DepartmentCampusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * The data needed to create a DepartmentCampus.
     */
    data: XOR<DepartmentCampusCreateInput, DepartmentCampusUncheckedCreateInput>
  }

  /**
   * DepartmentCampus createMany
   */
  export type DepartmentCampusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepartmentCampuses.
     */
    data: DepartmentCampusCreateManyInput | DepartmentCampusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DepartmentCampus createManyAndReturn
   */
  export type DepartmentCampusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * The data used to create many DepartmentCampuses.
     */
    data: DepartmentCampusCreateManyInput | DepartmentCampusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartmentCampus update
   */
  export type DepartmentCampusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * The data needed to update a DepartmentCampus.
     */
    data: XOR<DepartmentCampusUpdateInput, DepartmentCampusUncheckedUpdateInput>
    /**
     * Choose, which DepartmentCampus to update.
     */
    where: DepartmentCampusWhereUniqueInput
  }

  /**
   * DepartmentCampus updateMany
   */
  export type DepartmentCampusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepartmentCampuses.
     */
    data: XOR<DepartmentCampusUpdateManyMutationInput, DepartmentCampusUncheckedUpdateManyInput>
    /**
     * Filter which DepartmentCampuses to update
     */
    where?: DepartmentCampusWhereInput
    /**
     * Limit how many DepartmentCampuses to update.
     */
    limit?: number
  }

  /**
   * DepartmentCampus updateManyAndReturn
   */
  export type DepartmentCampusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * The data used to update DepartmentCampuses.
     */
    data: XOR<DepartmentCampusUpdateManyMutationInput, DepartmentCampusUncheckedUpdateManyInput>
    /**
     * Filter which DepartmentCampuses to update
     */
    where?: DepartmentCampusWhereInput
    /**
     * Limit how many DepartmentCampuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DepartmentCampus upsert
   */
  export type DepartmentCampusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * The filter to search for the DepartmentCampus to update in case it exists.
     */
    where: DepartmentCampusWhereUniqueInput
    /**
     * In case the DepartmentCampus found by the `where` argument doesn't exist, create a new DepartmentCampus with this data.
     */
    create: XOR<DepartmentCampusCreateInput, DepartmentCampusUncheckedCreateInput>
    /**
     * In case the DepartmentCampus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentCampusUpdateInput, DepartmentCampusUncheckedUpdateInput>
  }

  /**
   * DepartmentCampus delete
   */
  export type DepartmentCampusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
    /**
     * Filter which DepartmentCampus to delete.
     */
    where: DepartmentCampusWhereUniqueInput
  }

  /**
   * DepartmentCampus deleteMany
   */
  export type DepartmentCampusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentCampuses to delete
     */
    where?: DepartmentCampusWhereInput
    /**
     * Limit how many DepartmentCampuses to delete.
     */
    limit?: number
  }

  /**
   * DepartmentCampus without action
   */
  export type DepartmentCampusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCampus
     */
    select?: DepartmentCampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DepartmentCampus
     */
    omit?: DepartmentCampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentCampusInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    code: string | null
    description: string | null
    duration: string | null
    qualification: string | null
    requirements: string | null
    intakeStatus: $Enums.IntakeStatus | null
    campusLabel: string | null
    feePerSemester: string | null
    featured: boolean | null
    isActive: boolean | null
    departmentId: string | null
    campusId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    code: string | null
    description: string | null
    duration: string | null
    qualification: string | null
    requirements: string | null
    intakeStatus: $Enums.IntakeStatus | null
    campusLabel: string | null
    feePerSemester: string | null
    featured: boolean | null
    isActive: boolean | null
    departmentId: string | null
    campusId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    code: number
    description: number
    duration: number
    qualification: number
    requirements: number
    intakeStatus: number
    campusLabel: number
    feePerSemester: number
    featured: number
    isActive: number
    departmentId: number
    campusId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    code?: true
    description?: true
    duration?: true
    qualification?: true
    requirements?: true
    intakeStatus?: true
    campusLabel?: true
    feePerSemester?: true
    featured?: true
    isActive?: true
    departmentId?: true
    campusId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    code?: true
    description?: true
    duration?: true
    qualification?: true
    requirements?: true
    intakeStatus?: true
    campusLabel?: true
    feePerSemester?: true
    featured?: true
    isActive?: true
    departmentId?: true
    campusId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    code?: true
    description?: true
    duration?: true
    qualification?: true
    requirements?: true
    intakeStatus?: true
    campusLabel?: true
    feePerSemester?: true
    featured?: true
    isActive?: true
    departmentId?: true
    campusId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    slug: string
    code: string
    description: string | null
    duration: string
    qualification: string | null
    requirements: string | null
    intakeStatus: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester: string | null
    featured: boolean
    isActive: boolean
    departmentId: string
    campusId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    code?: boolean
    description?: boolean
    duration?: boolean
    qualification?: boolean
    requirements?: boolean
    intakeStatus?: boolean
    campusLabel?: boolean
    feePerSemester?: boolean
    featured?: boolean
    isActive?: boolean
    departmentId?: boolean
    campusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | Course$campusArgs<ExtArgs>
    applications?: boolean | Course$applicationsArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    code?: boolean
    description?: boolean
    duration?: boolean
    qualification?: boolean
    requirements?: boolean
    intakeStatus?: boolean
    campusLabel?: boolean
    feePerSemester?: boolean
    featured?: boolean
    isActive?: boolean
    departmentId?: boolean
    campusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | Course$campusArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    code?: boolean
    description?: boolean
    duration?: boolean
    qualification?: boolean
    requirements?: boolean
    intakeStatus?: boolean
    campusLabel?: boolean
    feePerSemester?: boolean
    featured?: boolean
    isActive?: boolean
    departmentId?: boolean
    campusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | Course$campusArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    code?: boolean
    description?: boolean
    duration?: boolean
    qualification?: boolean
    requirements?: boolean
    intakeStatus?: boolean
    campusLabel?: boolean
    feePerSemester?: boolean
    featured?: boolean
    isActive?: boolean
    departmentId?: boolean
    campusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "code" | "description" | "duration" | "qualification" | "requirements" | "intakeStatus" | "campusLabel" | "feePerSemester" | "featured" | "isActive" | "departmentId" | "campusId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | Course$campusArgs<ExtArgs>
    applications?: boolean | Course$applicationsArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | Course$campusArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    campus?: boolean | Course$campusArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      campus: Prisma.$CampusPayload<ExtArgs> | null
      applications: Prisma.$AdmissionApplicationPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      code: string
      description: string | null
      duration: string
      qualification: string | null
      requirements: string | null
      intakeStatus: $Enums.IntakeStatus
      campusLabel: string
      feePerSemester: string | null
      featured: boolean
      isActive: boolean
      departmentId: string
      campusId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campus<T extends Course$campusArgs<ExtArgs> = {}>(args?: Subset<T, Course$campusArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends Course$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Course$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Course$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly slug: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly duration: FieldRef<"Course", 'String'>
    readonly qualification: FieldRef<"Course", 'String'>
    readonly requirements: FieldRef<"Course", 'String'>
    readonly intakeStatus: FieldRef<"Course", 'IntakeStatus'>
    readonly campusLabel: FieldRef<"Course", 'String'>
    readonly feePerSemester: FieldRef<"Course", 'String'>
    readonly featured: FieldRef<"Course", 'Boolean'>
    readonly isActive: FieldRef<"Course", 'Boolean'>
    readonly departmentId: FieldRef<"Course", 'String'>
    readonly campusId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.campus
   */
  export type Course$campusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campus
     */
    select?: CampusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campus
     */
    omit?: CampusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampusInclude<ExtArgs> | null
    where?: CampusWhereInput
  }

  /**
   * Course.applications
   */
  export type Course$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    where?: AdmissionApplicationWhereInput
    orderBy?: AdmissionApplicationOrderByWithRelationInput | AdmissionApplicationOrderByWithRelationInput[]
    cursor?: AdmissionApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionApplicationScalarFieldEnum | AdmissionApplicationScalarFieldEnum[]
  }

  /**
   * Course.students
   */
  export type Course$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model AdmissionApplication
   */

  export type AggregateAdmissionApplication = {
    _count: AdmissionApplicationCountAggregateOutputType | null
    _min: AdmissionApplicationMinAggregateOutputType | null
    _max: AdmissionApplicationMaxAggregateOutputType | null
  }

  export type AdmissionApplicationMinAggregateOutputType = {
    id: string | null
    applicationNumber: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    nationality: string | null
    county: string | null
    subCounty: string | null
    postalAddress: string | null
    guardianName: string | null
    guardianPhone: string | null
    kcseIndexNumber: string | null
    kcseGrade: string | null
    nationalId: string | null
    passportNumber: string | null
    passportPhoto: string | null
    idCopy: string | null
    certificateFile: string | null
    status: $Enums.ApplicationStatus | null
    courseId: string | null
    processedById: string | null
    modeOfStudy: $Enums.ModeOfStudy | null
    intake: $Enums.Intake | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionApplicationMaxAggregateOutputType = {
    id: string | null
    applicationNumber: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    nationality: string | null
    county: string | null
    subCounty: string | null
    postalAddress: string | null
    guardianName: string | null
    guardianPhone: string | null
    kcseIndexNumber: string | null
    kcseGrade: string | null
    nationalId: string | null
    passportNumber: string | null
    passportPhoto: string | null
    idCopy: string | null
    certificateFile: string | null
    status: $Enums.ApplicationStatus | null
    courseId: string | null
    processedById: string | null
    modeOfStudy: $Enums.ModeOfStudy | null
    intake: $Enums.Intake | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdmissionApplicationCountAggregateOutputType = {
    id: number
    applicationNumber: number
    firstName: number
    middleName: number
    lastName: number
    email: number
    phone: number
    gender: number
    dateOfBirth: number
    nationality: number
    county: number
    subCounty: number
    postalAddress: number
    guardianName: number
    guardianPhone: number
    kcseIndexNumber: number
    kcseGrade: number
    nationalId: number
    passportNumber: number
    passportPhoto: number
    idCopy: number
    certificateFile: number
    status: number
    courseId: number
    processedById: number
    modeOfStudy: number
    intake: number
    submittedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdmissionApplicationMinAggregateInputType = {
    id?: true
    applicationNumber?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    phone?: true
    gender?: true
    dateOfBirth?: true
    nationality?: true
    county?: true
    subCounty?: true
    postalAddress?: true
    guardianName?: true
    guardianPhone?: true
    kcseIndexNumber?: true
    kcseGrade?: true
    nationalId?: true
    passportNumber?: true
    passportPhoto?: true
    idCopy?: true
    certificateFile?: true
    status?: true
    courseId?: true
    processedById?: true
    modeOfStudy?: true
    intake?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionApplicationMaxAggregateInputType = {
    id?: true
    applicationNumber?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    phone?: true
    gender?: true
    dateOfBirth?: true
    nationality?: true
    county?: true
    subCounty?: true
    postalAddress?: true
    guardianName?: true
    guardianPhone?: true
    kcseIndexNumber?: true
    kcseGrade?: true
    nationalId?: true
    passportNumber?: true
    passportPhoto?: true
    idCopy?: true
    certificateFile?: true
    status?: true
    courseId?: true
    processedById?: true
    modeOfStudy?: true
    intake?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdmissionApplicationCountAggregateInputType = {
    id?: true
    applicationNumber?: true
    firstName?: true
    middleName?: true
    lastName?: true
    email?: true
    phone?: true
    gender?: true
    dateOfBirth?: true
    nationality?: true
    county?: true
    subCounty?: true
    postalAddress?: true
    guardianName?: true
    guardianPhone?: true
    kcseIndexNumber?: true
    kcseGrade?: true
    nationalId?: true
    passportNumber?: true
    passportPhoto?: true
    idCopy?: true
    certificateFile?: true
    status?: true
    courseId?: true
    processedById?: true
    modeOfStudy?: true
    intake?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdmissionApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionApplication to aggregate.
     */
    where?: AdmissionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionApplications to fetch.
     */
    orderBy?: AdmissionApplicationOrderByWithRelationInput | AdmissionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdmissionApplications
    **/
    _count?: true | AdmissionApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionApplicationMaxAggregateInputType
  }

  export type GetAdmissionApplicationAggregateType<T extends AdmissionApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmissionApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmissionApplication[P]>
      : GetScalarType<T[P], AggregateAdmissionApplication[P]>
  }




  export type AdmissionApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionApplicationWhereInput
    orderBy?: AdmissionApplicationOrderByWithAggregationInput | AdmissionApplicationOrderByWithAggregationInput[]
    by: AdmissionApplicationScalarFieldEnum[] | AdmissionApplicationScalarFieldEnum
    having?: AdmissionApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionApplicationCountAggregateInputType | true
    _min?: AdmissionApplicationMinAggregateInputType
    _max?: AdmissionApplicationMaxAggregateInputType
  }

  export type AdmissionApplicationGroupByOutputType = {
    id: string
    applicationNumber: string
    firstName: string
    middleName: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date
    nationality: string
    county: string
    subCounty: string | null
    postalAddress: string
    guardianName: string | null
    guardianPhone: string | null
    kcseIndexNumber: string | null
    kcseGrade: string | null
    nationalId: string | null
    passportNumber: string | null
    passportPhoto: string | null
    idCopy: string | null
    certificateFile: string | null
    status: $Enums.ApplicationStatus
    courseId: string
    processedById: string | null
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AdmissionApplicationCountAggregateOutputType | null
    _min: AdmissionApplicationMinAggregateOutputType | null
    _max: AdmissionApplicationMaxAggregateOutputType | null
  }

  type GetAdmissionApplicationGroupByPayload<T extends AdmissionApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionApplicationGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationNumber?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    county?: boolean
    subCounty?: boolean
    postalAddress?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    kcseIndexNumber?: boolean
    kcseGrade?: boolean
    nationalId?: boolean
    passportNumber?: boolean
    passportPhoto?: boolean
    idCopy?: boolean
    certificateFile?: boolean
    status?: boolean
    courseId?: boolean
    processedById?: boolean
    modeOfStudy?: boolean
    intake?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    processedBy?: boolean | AdmissionApplication$processedByArgs<ExtArgs>
    student?: boolean | AdmissionApplication$studentArgs<ExtArgs>
  }, ExtArgs["result"]["admissionApplication"]>

  export type AdmissionApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationNumber?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    county?: boolean
    subCounty?: boolean
    postalAddress?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    kcseIndexNumber?: boolean
    kcseGrade?: boolean
    nationalId?: boolean
    passportNumber?: boolean
    passportPhoto?: boolean
    idCopy?: boolean
    certificateFile?: boolean
    status?: boolean
    courseId?: boolean
    processedById?: boolean
    modeOfStudy?: boolean
    intake?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    processedBy?: boolean | AdmissionApplication$processedByArgs<ExtArgs>
  }, ExtArgs["result"]["admissionApplication"]>

  export type AdmissionApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationNumber?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    county?: boolean
    subCounty?: boolean
    postalAddress?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    kcseIndexNumber?: boolean
    kcseGrade?: boolean
    nationalId?: boolean
    passportNumber?: boolean
    passportPhoto?: boolean
    idCopy?: boolean
    certificateFile?: boolean
    status?: boolean
    courseId?: boolean
    processedById?: boolean
    modeOfStudy?: boolean
    intake?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    processedBy?: boolean | AdmissionApplication$processedByArgs<ExtArgs>
  }, ExtArgs["result"]["admissionApplication"]>

  export type AdmissionApplicationSelectScalar = {
    id?: boolean
    applicationNumber?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    county?: boolean
    subCounty?: boolean
    postalAddress?: boolean
    guardianName?: boolean
    guardianPhone?: boolean
    kcseIndexNumber?: boolean
    kcseGrade?: boolean
    nationalId?: boolean
    passportNumber?: boolean
    passportPhoto?: boolean
    idCopy?: boolean
    certificateFile?: boolean
    status?: boolean
    courseId?: boolean
    processedById?: boolean
    modeOfStudy?: boolean
    intake?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdmissionApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationNumber" | "firstName" | "middleName" | "lastName" | "email" | "phone" | "gender" | "dateOfBirth" | "nationality" | "county" | "subCounty" | "postalAddress" | "guardianName" | "guardianPhone" | "kcseIndexNumber" | "kcseGrade" | "nationalId" | "passportNumber" | "passportPhoto" | "idCopy" | "certificateFile" | "status" | "courseId" | "processedById" | "modeOfStudy" | "intake" | "submittedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["admissionApplication"]>
  export type AdmissionApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    processedBy?: boolean | AdmissionApplication$processedByArgs<ExtArgs>
    student?: boolean | AdmissionApplication$studentArgs<ExtArgs>
  }
  export type AdmissionApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    processedBy?: boolean | AdmissionApplication$processedByArgs<ExtArgs>
  }
  export type AdmissionApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    processedBy?: boolean | AdmissionApplication$processedByArgs<ExtArgs>
  }

  export type $AdmissionApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdmissionApplication"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      processedBy: Prisma.$UserPayload<ExtArgs> | null
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationNumber: string
      firstName: string
      middleName: string | null
      lastName: string
      email: string
      phone: string
      gender: $Enums.Gender
      dateOfBirth: Date
      nationality: string
      county: string
      subCounty: string | null
      postalAddress: string
      guardianName: string | null
      guardianPhone: string | null
      kcseIndexNumber: string | null
      kcseGrade: string | null
      nationalId: string | null
      passportNumber: string | null
      passportPhoto: string | null
      idCopy: string | null
      certificateFile: string | null
      status: $Enums.ApplicationStatus
      courseId: string
      processedById: string | null
      modeOfStudy: $Enums.ModeOfStudy
      intake: $Enums.Intake
      submittedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admissionApplication"]>
    composites: {}
  }

  type AdmissionApplicationGetPayload<S extends boolean | null | undefined | AdmissionApplicationDefaultArgs> = $Result.GetResult<Prisma.$AdmissionApplicationPayload, S>

  type AdmissionApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionApplicationCountAggregateInputType | true
    }

  export interface AdmissionApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdmissionApplication'], meta: { name: 'AdmissionApplication' } }
    /**
     * Find zero or one AdmissionApplication that matches the filter.
     * @param {AdmissionApplicationFindUniqueArgs} args - Arguments to find a AdmissionApplication
     * @example
     * // Get one AdmissionApplication
     * const admissionApplication = await prisma.admissionApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionApplicationFindUniqueArgs>(args: SelectSubset<T, AdmissionApplicationFindUniqueArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdmissionApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionApplicationFindUniqueOrThrowArgs} args - Arguments to find a AdmissionApplication
     * @example
     * // Get one AdmissionApplication
     * const admissionApplication = await prisma.admissionApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionApplicationFindFirstArgs} args - Arguments to find a AdmissionApplication
     * @example
     * // Get one AdmissionApplication
     * const admissionApplication = await prisma.admissionApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionApplicationFindFirstArgs>(args?: SelectSubset<T, AdmissionApplicationFindFirstArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdmissionApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionApplicationFindFirstOrThrowArgs} args - Arguments to find a AdmissionApplication
     * @example
     * // Get one AdmissionApplication
     * const admissionApplication = await prisma.admissionApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdmissionApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdmissionApplications
     * const admissionApplications = await prisma.admissionApplication.findMany()
     * 
     * // Get first 10 AdmissionApplications
     * const admissionApplications = await prisma.admissionApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionApplicationWithIdOnly = await prisma.admissionApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionApplicationFindManyArgs>(args?: SelectSubset<T, AdmissionApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdmissionApplication.
     * @param {AdmissionApplicationCreateArgs} args - Arguments to create a AdmissionApplication.
     * @example
     * // Create one AdmissionApplication
     * const AdmissionApplication = await prisma.admissionApplication.create({
     *   data: {
     *     // ... data to create a AdmissionApplication
     *   }
     * })
     * 
     */
    create<T extends AdmissionApplicationCreateArgs>(args: SelectSubset<T, AdmissionApplicationCreateArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdmissionApplications.
     * @param {AdmissionApplicationCreateManyArgs} args - Arguments to create many AdmissionApplications.
     * @example
     * // Create many AdmissionApplications
     * const admissionApplication = await prisma.admissionApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionApplicationCreateManyArgs>(args?: SelectSubset<T, AdmissionApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdmissionApplications and returns the data saved in the database.
     * @param {AdmissionApplicationCreateManyAndReturnArgs} args - Arguments to create many AdmissionApplications.
     * @example
     * // Create many AdmissionApplications
     * const admissionApplication = await prisma.admissionApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdmissionApplications and only return the `id`
     * const admissionApplicationWithIdOnly = await prisma.admissionApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdmissionApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, AdmissionApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdmissionApplication.
     * @param {AdmissionApplicationDeleteArgs} args - Arguments to delete one AdmissionApplication.
     * @example
     * // Delete one AdmissionApplication
     * const AdmissionApplication = await prisma.admissionApplication.delete({
     *   where: {
     *     // ... filter to delete one AdmissionApplication
     *   }
     * })
     * 
     */
    delete<T extends AdmissionApplicationDeleteArgs>(args: SelectSubset<T, AdmissionApplicationDeleteArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdmissionApplication.
     * @param {AdmissionApplicationUpdateArgs} args - Arguments to update one AdmissionApplication.
     * @example
     * // Update one AdmissionApplication
     * const admissionApplication = await prisma.admissionApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionApplicationUpdateArgs>(args: SelectSubset<T, AdmissionApplicationUpdateArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdmissionApplications.
     * @param {AdmissionApplicationDeleteManyArgs} args - Arguments to filter AdmissionApplications to delete.
     * @example
     * // Delete a few AdmissionApplications
     * const { count } = await prisma.admissionApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionApplicationDeleteManyArgs>(args?: SelectSubset<T, AdmissionApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmissionApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdmissionApplications
     * const admissionApplication = await prisma.admissionApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionApplicationUpdateManyArgs>(args: SelectSubset<T, AdmissionApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdmissionApplications and returns the data updated in the database.
     * @param {AdmissionApplicationUpdateManyAndReturnArgs} args - Arguments to update many AdmissionApplications.
     * @example
     * // Update many AdmissionApplications
     * const admissionApplication = await prisma.admissionApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdmissionApplications and only return the `id`
     * const admissionApplicationWithIdOnly = await prisma.admissionApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdmissionApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, AdmissionApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdmissionApplication.
     * @param {AdmissionApplicationUpsertArgs} args - Arguments to update or create a AdmissionApplication.
     * @example
     * // Update or create a AdmissionApplication
     * const admissionApplication = await prisma.admissionApplication.upsert({
     *   create: {
     *     // ... data to create a AdmissionApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdmissionApplication we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionApplicationUpsertArgs>(args: SelectSubset<T, AdmissionApplicationUpsertArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdmissionApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionApplicationCountArgs} args - Arguments to filter AdmissionApplications to count.
     * @example
     * // Count the number of AdmissionApplications
     * const count = await prisma.admissionApplication.count({
     *   where: {
     *     // ... the filter for the AdmissionApplications we want to count
     *   }
     * })
    **/
    count<T extends AdmissionApplicationCountArgs>(
      args?: Subset<T, AdmissionApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdmissionApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdmissionApplicationAggregateArgs>(args: Subset<T, AdmissionApplicationAggregateArgs>): Prisma.PrismaPromise<GetAdmissionApplicationAggregateType<T>>

    /**
     * Group by AdmissionApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionApplicationGroupByArgs} args - Group by arguments.
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
      T extends AdmissionApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionApplicationGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdmissionApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdmissionApplication model
   */
  readonly fields: AdmissionApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdmissionApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    processedBy<T extends AdmissionApplication$processedByArgs<ExtArgs> = {}>(args?: Subset<T, AdmissionApplication$processedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends AdmissionApplication$studentArgs<ExtArgs> = {}>(args?: Subset<T, AdmissionApplication$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdmissionApplication model
   */
  interface AdmissionApplicationFieldRefs {
    readonly id: FieldRef<"AdmissionApplication", 'String'>
    readonly applicationNumber: FieldRef<"AdmissionApplication", 'String'>
    readonly firstName: FieldRef<"AdmissionApplication", 'String'>
    readonly middleName: FieldRef<"AdmissionApplication", 'String'>
    readonly lastName: FieldRef<"AdmissionApplication", 'String'>
    readonly email: FieldRef<"AdmissionApplication", 'String'>
    readonly phone: FieldRef<"AdmissionApplication", 'String'>
    readonly gender: FieldRef<"AdmissionApplication", 'Gender'>
    readonly dateOfBirth: FieldRef<"AdmissionApplication", 'DateTime'>
    readonly nationality: FieldRef<"AdmissionApplication", 'String'>
    readonly county: FieldRef<"AdmissionApplication", 'String'>
    readonly subCounty: FieldRef<"AdmissionApplication", 'String'>
    readonly postalAddress: FieldRef<"AdmissionApplication", 'String'>
    readonly guardianName: FieldRef<"AdmissionApplication", 'String'>
    readonly guardianPhone: FieldRef<"AdmissionApplication", 'String'>
    readonly kcseIndexNumber: FieldRef<"AdmissionApplication", 'String'>
    readonly kcseGrade: FieldRef<"AdmissionApplication", 'String'>
    readonly nationalId: FieldRef<"AdmissionApplication", 'String'>
    readonly passportNumber: FieldRef<"AdmissionApplication", 'String'>
    readonly passportPhoto: FieldRef<"AdmissionApplication", 'String'>
    readonly idCopy: FieldRef<"AdmissionApplication", 'String'>
    readonly certificateFile: FieldRef<"AdmissionApplication", 'String'>
    readonly status: FieldRef<"AdmissionApplication", 'ApplicationStatus'>
    readonly courseId: FieldRef<"AdmissionApplication", 'String'>
    readonly processedById: FieldRef<"AdmissionApplication", 'String'>
    readonly modeOfStudy: FieldRef<"AdmissionApplication", 'ModeOfStudy'>
    readonly intake: FieldRef<"AdmissionApplication", 'Intake'>
    readonly submittedAt: FieldRef<"AdmissionApplication", 'DateTime'>
    readonly createdAt: FieldRef<"AdmissionApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"AdmissionApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdmissionApplication findUnique
   */
  export type AdmissionApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionApplication to fetch.
     */
    where: AdmissionApplicationWhereUniqueInput
  }

  /**
   * AdmissionApplication findUniqueOrThrow
   */
  export type AdmissionApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionApplication to fetch.
     */
    where: AdmissionApplicationWhereUniqueInput
  }

  /**
   * AdmissionApplication findFirst
   */
  export type AdmissionApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionApplication to fetch.
     */
    where?: AdmissionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionApplications to fetch.
     */
    orderBy?: AdmissionApplicationOrderByWithRelationInput | AdmissionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionApplications.
     */
    cursor?: AdmissionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionApplications.
     */
    distinct?: AdmissionApplicationScalarFieldEnum | AdmissionApplicationScalarFieldEnum[]
  }

  /**
   * AdmissionApplication findFirstOrThrow
   */
  export type AdmissionApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionApplication to fetch.
     */
    where?: AdmissionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionApplications to fetch.
     */
    orderBy?: AdmissionApplicationOrderByWithRelationInput | AdmissionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdmissionApplications.
     */
    cursor?: AdmissionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionApplications.
     */
    distinct?: AdmissionApplicationScalarFieldEnum | AdmissionApplicationScalarFieldEnum[]
  }

  /**
   * AdmissionApplication findMany
   */
  export type AdmissionApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * Filter, which AdmissionApplications to fetch.
     */
    where?: AdmissionApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdmissionApplications to fetch.
     */
    orderBy?: AdmissionApplicationOrderByWithRelationInput | AdmissionApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdmissionApplications.
     */
    cursor?: AdmissionApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdmissionApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdmissionApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdmissionApplications.
     */
    distinct?: AdmissionApplicationScalarFieldEnum | AdmissionApplicationScalarFieldEnum[]
  }

  /**
   * AdmissionApplication create
   */
  export type AdmissionApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a AdmissionApplication.
     */
    data: XOR<AdmissionApplicationCreateInput, AdmissionApplicationUncheckedCreateInput>
  }

  /**
   * AdmissionApplication createMany
   */
  export type AdmissionApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdmissionApplications.
     */
    data: AdmissionApplicationCreateManyInput | AdmissionApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdmissionApplication createManyAndReturn
   */
  export type AdmissionApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many AdmissionApplications.
     */
    data: AdmissionApplicationCreateManyInput | AdmissionApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdmissionApplication update
   */
  export type AdmissionApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a AdmissionApplication.
     */
    data: XOR<AdmissionApplicationUpdateInput, AdmissionApplicationUncheckedUpdateInput>
    /**
     * Choose, which AdmissionApplication to update.
     */
    where: AdmissionApplicationWhereUniqueInput
  }

  /**
   * AdmissionApplication updateMany
   */
  export type AdmissionApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdmissionApplications.
     */
    data: XOR<AdmissionApplicationUpdateManyMutationInput, AdmissionApplicationUncheckedUpdateManyInput>
    /**
     * Filter which AdmissionApplications to update
     */
    where?: AdmissionApplicationWhereInput
    /**
     * Limit how many AdmissionApplications to update.
     */
    limit?: number
  }

  /**
   * AdmissionApplication updateManyAndReturn
   */
  export type AdmissionApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * The data used to update AdmissionApplications.
     */
    data: XOR<AdmissionApplicationUpdateManyMutationInput, AdmissionApplicationUncheckedUpdateManyInput>
    /**
     * Filter which AdmissionApplications to update
     */
    where?: AdmissionApplicationWhereInput
    /**
     * Limit how many AdmissionApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdmissionApplication upsert
   */
  export type AdmissionApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the AdmissionApplication to update in case it exists.
     */
    where: AdmissionApplicationWhereUniqueInput
    /**
     * In case the AdmissionApplication found by the `where` argument doesn't exist, create a new AdmissionApplication with this data.
     */
    create: XOR<AdmissionApplicationCreateInput, AdmissionApplicationUncheckedCreateInput>
    /**
     * In case the AdmissionApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionApplicationUpdateInput, AdmissionApplicationUncheckedUpdateInput>
  }

  /**
   * AdmissionApplication delete
   */
  export type AdmissionApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
    /**
     * Filter which AdmissionApplication to delete.
     */
    where: AdmissionApplicationWhereUniqueInput
  }

  /**
   * AdmissionApplication deleteMany
   */
  export type AdmissionApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdmissionApplications to delete
     */
    where?: AdmissionApplicationWhereInput
    /**
     * Limit how many AdmissionApplications to delete.
     */
    limit?: number
  }

  /**
   * AdmissionApplication.processedBy
   */
  export type AdmissionApplication$processedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AdmissionApplication.student
   */
  export type AdmissionApplication$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * AdmissionApplication without action
   */
  export type AdmissionApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionApplication
     */
    select?: AdmissionApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdmissionApplication
     */
    omit?: AdmissionApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    admissionNumber: string | null
    userId: string | null
    applicationId: string | null
    courseId: string | null
    campusId: string | null
    createdAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    admissionNumber: string | null
    userId: string | null
    applicationId: string | null
    courseId: string | null
    campusId: string | null
    createdAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    admissionNumber: number
    userId: number
    applicationId: number
    courseId: number
    campusId: number
    createdAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    admissionNumber?: true
    userId?: true
    applicationId?: true
    courseId?: true
    campusId?: true
    createdAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    admissionNumber?: true
    userId?: true
    applicationId?: true
    courseId?: true
    campusId?: true
    createdAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    admissionNumber?: true
    userId?: true
    applicationId?: true
    courseId?: true
    campusId?: true
    createdAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    admissionNumber: string
    userId: string | null
    applicationId: string
    courseId: string
    campusId: string
    createdAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionNumber?: boolean
    userId?: boolean
    applicationId?: boolean
    courseId?: boolean
    campusId?: boolean
    createdAt?: boolean
    user?: boolean | Student$userArgs<ExtArgs>
    application?: boolean | AdmissionApplicationDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionNumber?: boolean
    userId?: boolean
    applicationId?: boolean
    courseId?: boolean
    campusId?: boolean
    createdAt?: boolean
    user?: boolean | Student$userArgs<ExtArgs>
    application?: boolean | AdmissionApplicationDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionNumber?: boolean
    userId?: boolean
    applicationId?: boolean
    courseId?: boolean
    campusId?: boolean
    createdAt?: boolean
    user?: boolean | Student$userArgs<ExtArgs>
    application?: boolean | AdmissionApplicationDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    admissionNumber?: boolean
    userId?: boolean
    applicationId?: boolean
    courseId?: boolean
    campusId?: boolean
    createdAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admissionNumber" | "userId" | "applicationId" | "courseId" | "campusId" | "createdAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Student$userArgs<ExtArgs>
    application?: boolean | AdmissionApplicationDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Student$userArgs<ExtArgs>
    application?: boolean | AdmissionApplicationDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Student$userArgs<ExtArgs>
    application?: boolean | AdmissionApplicationDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    campus?: boolean | CampusDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      application: Prisma.$AdmissionApplicationPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      campus: Prisma.$CampusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      admissionNumber: string
      userId: string | null
      applicationId: string
      courseId: string
      campusId: string
      createdAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Student$userArgs<ExtArgs> = {}>(args?: Subset<T, Student$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    application<T extends AdmissionApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdmissionApplicationDefaultArgs<ExtArgs>>): Prisma__AdmissionApplicationClient<$Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campus<T extends CampusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampusDefaultArgs<ExtArgs>>): Prisma__CampusClient<$Result.GetResult<Prisma.$CampusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly admissionNumber: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly applicationId: FieldRef<"Student", 'String'>
    readonly courseId: FieldRef<"Student", 'String'>
    readonly campusId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.user
   */
  export type Student$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    employeeNo: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    employeeNo: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    employeeNo: number
    userId: number
    createdAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    employeeNo?: true
    userId?: true
    createdAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    employeeNo?: true
    userId?: true
    createdAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    employeeNo?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    employeeNo: string
    userId: string
    createdAt: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeNo?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeNo?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeNo?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    employeeNo?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeNo" | "userId" | "createdAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeNo: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly employeeNo: FieldRef<"Staff", 'String'>
    readonly userId: FieldRef<"Staff", 'String'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    category: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    coverImage: string | null
    category: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    coverImage: number
    category: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    category?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    category?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    coverImage?: true
    category?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    coverImage: string | null
    category: string | null
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    category?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    category?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    category?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    coverImage?: boolean
    category?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "coverImage" | "category" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      content: string
      coverImage: string | null
      category: string | null
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly slug: FieldRef<"News", 'String'>
    readonly excerpt: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly coverImage: FieldRef<"News", 'String'>
    readonly category: FieldRef<"News", 'String'>
    readonly published: FieldRef<"News", 'Boolean'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
  }


  /**
   * Model GalleryImage
   */

  export type AggregateGalleryImage = {
    _count: GalleryImageCountAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  export type GalleryImageMinAggregateOutputType = {
    id: string | null
    title: string | null
    image: string | null
    category: string | null
    span: $Enums.GallerySpan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryImageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    image: string | null
    category: string | null
    span: $Enums.GallerySpan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryImageCountAggregateOutputType = {
    id: number
    title: number
    image: number
    category: number
    span: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryImageMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    category?: true
    span?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryImageMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    category?: true
    span?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryImageCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    category?: true
    span?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImage to aggregate.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryImages
    **/
    _count?: true | GalleryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GetGalleryImageAggregateType<T extends GalleryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryImage[P]>
      : GetScalarType<T[P], AggregateGalleryImage[P]>
  }




  export type GalleryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryImageWhereInput
    orderBy?: GalleryImageOrderByWithAggregationInput | GalleryImageOrderByWithAggregationInput[]
    by: GalleryImageScalarFieldEnum[] | GalleryImageScalarFieldEnum
    having?: GalleryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryImageCountAggregateInputType | true
    _min?: GalleryImageMinAggregateInputType
    _max?: GalleryImageMaxAggregateInputType
  }

  export type GalleryImageGroupByOutputType = {
    id: string
    title: string | null
    image: string
    category: string | null
    span: $Enums.GallerySpan
    createdAt: Date
    updatedAt: Date
    _count: GalleryImageCountAggregateOutputType | null
    _min: GalleryImageMinAggregateOutputType | null
    _max: GalleryImageMaxAggregateOutputType | null
  }

  type GetGalleryImageGroupByPayload<T extends GalleryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryImageGroupByOutputType[P]>
        }
      >
    >


  export type GalleryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    category?: boolean
    span?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    category?: boolean
    span?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    category?: boolean
    span?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryImage"]>

  export type GalleryImageSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    category?: boolean
    span?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "category" | "span" | "createdAt" | "updatedAt", ExtArgs["result"]["galleryImage"]>

  export type $GalleryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      image: string
      category: string | null
      span: $Enums.GallerySpan
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleryImage"]>
    composites: {}
  }

  type GalleryImageGetPayload<S extends boolean | null | undefined | GalleryImageDefaultArgs> = $Result.GetResult<Prisma.$GalleryImagePayload, S>

  type GalleryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryImageCountAggregateInputType | true
    }

  export interface GalleryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryImage'], meta: { name: 'GalleryImage' } }
    /**
     * Find zero or one GalleryImage that matches the filter.
     * @param {GalleryImageFindUniqueArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryImageFindUniqueArgs>(args: SelectSubset<T, GalleryImageFindUniqueArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryImageFindUniqueOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryImageFindFirstArgs>(args?: SelectSubset<T, GalleryImageFindFirstArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindFirstOrThrowArgs} args - Arguments to find a GalleryImage
     * @example
     * // Get one GalleryImage
     * const galleryImage = await prisma.galleryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany()
     * 
     * // Get first 10 GalleryImages
     * const galleryImages = await prisma.galleryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryImageFindManyArgs>(args?: SelectSubset<T, GalleryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryImage.
     * @param {GalleryImageCreateArgs} args - Arguments to create a GalleryImage.
     * @example
     * // Create one GalleryImage
     * const GalleryImage = await prisma.galleryImage.create({
     *   data: {
     *     // ... data to create a GalleryImage
     *   }
     * })
     * 
     */
    create<T extends GalleryImageCreateArgs>(args: SelectSubset<T, GalleryImageCreateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryImages.
     * @param {GalleryImageCreateManyArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryImageCreateManyArgs>(args?: SelectSubset<T, GalleryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryImages and returns the data saved in the database.
     * @param {GalleryImageCreateManyAndReturnArgs} args - Arguments to create many GalleryImages.
     * @example
     * // Create many GalleryImages
     * const galleryImage = await prisma.galleryImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryImages and only return the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryImage.
     * @param {GalleryImageDeleteArgs} args - Arguments to delete one GalleryImage.
     * @example
     * // Delete one GalleryImage
     * const GalleryImage = await prisma.galleryImage.delete({
     *   where: {
     *     // ... filter to delete one GalleryImage
     *   }
     * })
     * 
     */
    delete<T extends GalleryImageDeleteArgs>(args: SelectSubset<T, GalleryImageDeleteArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryImage.
     * @param {GalleryImageUpdateArgs} args - Arguments to update one GalleryImage.
     * @example
     * // Update one GalleryImage
     * const galleryImage = await prisma.galleryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryImageUpdateArgs>(args: SelectSubset<T, GalleryImageUpdateArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryImages.
     * @param {GalleryImageDeleteManyArgs} args - Arguments to filter GalleryImages to delete.
     * @example
     * // Delete a few GalleryImages
     * const { count } = await prisma.galleryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryImageDeleteManyArgs>(args?: SelectSubset<T, GalleryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryImageUpdateManyArgs>(args: SelectSubset<T, GalleryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryImages and returns the data updated in the database.
     * @param {GalleryImageUpdateManyAndReturnArgs} args - Arguments to update many GalleryImages.
     * @example
     * // Update many GalleryImages
     * const galleryImage = await prisma.galleryImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryImages and only return the `id`
     * const galleryImageWithIdOnly = await prisma.galleryImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryImageUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryImage.
     * @param {GalleryImageUpsertArgs} args - Arguments to update or create a GalleryImage.
     * @example
     * // Update or create a GalleryImage
     * const galleryImage = await prisma.galleryImage.upsert({
     *   create: {
     *     // ... data to create a GalleryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryImage we want to update
     *   }
     * })
     */
    upsert<T extends GalleryImageUpsertArgs>(args: SelectSubset<T, GalleryImageUpsertArgs<ExtArgs>>): Prisma__GalleryImageClient<$Result.GetResult<Prisma.$GalleryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageCountArgs} args - Arguments to filter GalleryImages to count.
     * @example
     * // Count the number of GalleryImages
     * const count = await prisma.galleryImage.count({
     *   where: {
     *     // ... the filter for the GalleryImages we want to count
     *   }
     * })
    **/
    count<T extends GalleryImageCountArgs>(
      args?: Subset<T, GalleryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryImageAggregateArgs>(args: Subset<T, GalleryImageAggregateArgs>): Prisma.PrismaPromise<GetGalleryImageAggregateType<T>>

    /**
     * Group by GalleryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryImageGroupByArgs} args - Group by arguments.
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
      T extends GalleryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryImageGroupByArgs['orderBy'] }
        : { orderBy?: GalleryImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryImage model
   */
  readonly fields: GalleryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GalleryImage model
   */
  interface GalleryImageFieldRefs {
    readonly id: FieldRef<"GalleryImage", 'String'>
    readonly title: FieldRef<"GalleryImage", 'String'>
    readonly image: FieldRef<"GalleryImage", 'String'>
    readonly category: FieldRef<"GalleryImage", 'String'>
    readonly span: FieldRef<"GalleryImage", 'GallerySpan'>
    readonly createdAt: FieldRef<"GalleryImage", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryImage findUnique
   */
  export type GalleryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findUniqueOrThrow
   */
  export type GalleryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage findFirst
   */
  export type GalleryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findFirstOrThrow
   */
  export type GalleryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImage to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage findMany
   */
  export type GalleryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter, which GalleryImages to fetch.
     */
    where?: GalleryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryImages to fetch.
     */
    orderBy?: GalleryImageOrderByWithRelationInput | GalleryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryImages.
     */
    cursor?: GalleryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryImages.
     */
    distinct?: GalleryImageScalarFieldEnum | GalleryImageScalarFieldEnum[]
  }

  /**
   * GalleryImage create
   */
  export type GalleryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryImage.
     */
    data: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
  }

  /**
   * GalleryImage createMany
   */
  export type GalleryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage createManyAndReturn
   */
  export type GalleryImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryImages.
     */
    data: GalleryImageCreateManyInput | GalleryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryImage update
   */
  export type GalleryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryImage.
     */
    data: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
    /**
     * Choose, which GalleryImage to update.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage updateMany
   */
  export type GalleryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
  }

  /**
   * GalleryImage updateManyAndReturn
   */
  export type GalleryImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The data used to update GalleryImages.
     */
    data: XOR<GalleryImageUpdateManyMutationInput, GalleryImageUncheckedUpdateManyInput>
    /**
     * Filter which GalleryImages to update
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to update.
     */
    limit?: number
  }

  /**
   * GalleryImage upsert
   */
  export type GalleryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryImage to update in case it exists.
     */
    where: GalleryImageWhereUniqueInput
    /**
     * In case the GalleryImage found by the `where` argument doesn't exist, create a new GalleryImage with this data.
     */
    create: XOR<GalleryImageCreateInput, GalleryImageUncheckedCreateInput>
    /**
     * In case the GalleryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryImageUpdateInput, GalleryImageUncheckedUpdateInput>
  }

  /**
   * GalleryImage delete
   */
  export type GalleryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
    /**
     * Filter which GalleryImage to delete.
     */
    where: GalleryImageWhereUniqueInput
  }

  /**
   * GalleryImage deleteMany
   */
  export type GalleryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryImages to delete
     */
    where?: GalleryImageWhereInput
    /**
     * Limit how many GalleryImages to delete.
     */
    limit?: number
  }

  /**
   * GalleryImage without action
   */
  export type GalleryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryImage
     */
    select?: GalleryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryImage
     */
    omit?: GalleryImageOmit<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: string | null
    name: string | null
    course: string | null
    quote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    course: string | null
    quote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    name: number
    course: number
    quote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestimonialMinAggregateInputType = {
    id?: true
    name?: true
    course?: true
    quote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    name?: true
    course?: true
    quote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    name?: true
    course?: true
    quote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: string
    name: string
    course: string
    quote: string
    createdAt: Date
    updatedAt: Date
    _count: TestimonialCountAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course?: boolean
    quote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course?: boolean
    quote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course?: boolean
    quote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    name?: boolean
    course?: boolean
    quote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "course" | "quote" | "createdAt" | "updatedAt", ExtArgs["result"]["testimonial"]>

  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      course: string
      quote: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
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
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Testimonial model
   */
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'String'>
    readonly name: FieldRef<"Testimonial", 'String'>
    readonly course: FieldRef<"Testimonial", 'String'>
    readonly quote: FieldRef<"Testimonial", 'String'>
    readonly createdAt: FieldRef<"Testimonial", 'DateTime'>
    readonly updatedAt: FieldRef<"Testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial createManyAndReturn
   */
  export type TestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial updateManyAndReturn
   */
  export type TestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    resolved: boolean | null
    createdAt: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    resolved: boolean | null
    createdAt: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    resolved: number
    createdAt: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    resolved?: true
    createdAt?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    resolved?: true
    createdAt?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    resolved?: true
    createdAt?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    subject: string
    message: string
    resolved: boolean
    createdAt: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "subject" | "message" | "resolved" | "createdAt", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      subject: string
      message: string
      resolved: boolean
      createdAt: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
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
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly name: FieldRef<"ContactMessage", 'String'>
    readonly email: FieldRef<"ContactMessage", 'String'>
    readonly phone: FieldRef<"ContactMessage", 'String'>
    readonly subject: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly resolved: FieldRef<"ContactMessage", 'Boolean'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Model IntakeSession
   */

  export type AggregateIntakeSession = {
    _count: IntakeSessionCountAggregateOutputType | null
    _min: IntakeSessionMinAggregateOutputType | null
    _max: IntakeSessionMaxAggregateOutputType | null
  }

  export type IntakeSessionMinAggregateOutputType = {
    id: string | null
    name: string | null
    intakePeriod: $Enums.Intake | null
    applicationOpen: boolean | null
    applicationDeadline: Date | null
    startsAt: Date | null
    endsAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntakeSessionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    intakePeriod: $Enums.Intake | null
    applicationOpen: boolean | null
    applicationDeadline: Date | null
    startsAt: Date | null
    endsAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntakeSessionCountAggregateOutputType = {
    id: number
    name: number
    intakePeriod: number
    applicationOpen: number
    applicationDeadline: number
    startsAt: number
    endsAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntakeSessionMinAggregateInputType = {
    id?: true
    name?: true
    intakePeriod?: true
    applicationOpen?: true
    applicationDeadline?: true
    startsAt?: true
    endsAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntakeSessionMaxAggregateInputType = {
    id?: true
    name?: true
    intakePeriod?: true
    applicationOpen?: true
    applicationDeadline?: true
    startsAt?: true
    endsAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntakeSessionCountAggregateInputType = {
    id?: true
    name?: true
    intakePeriod?: true
    applicationOpen?: true
    applicationDeadline?: true
    startsAt?: true
    endsAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntakeSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeSession to aggregate.
     */
    where?: IntakeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSessions to fetch.
     */
    orderBy?: IntakeSessionOrderByWithRelationInput | IntakeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntakeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntakeSessions
    **/
    _count?: true | IntakeSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntakeSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntakeSessionMaxAggregateInputType
  }

  export type GetIntakeSessionAggregateType<T extends IntakeSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateIntakeSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntakeSession[P]>
      : GetScalarType<T[P], AggregateIntakeSession[P]>
  }




  export type IntakeSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntakeSessionWhereInput
    orderBy?: IntakeSessionOrderByWithAggregationInput | IntakeSessionOrderByWithAggregationInput[]
    by: IntakeSessionScalarFieldEnum[] | IntakeSessionScalarFieldEnum
    having?: IntakeSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntakeSessionCountAggregateInputType | true
    _min?: IntakeSessionMinAggregateInputType
    _max?: IntakeSessionMaxAggregateInputType
  }

  export type IntakeSessionGroupByOutputType = {
    id: string
    name: string
    intakePeriod: $Enums.Intake
    applicationOpen: boolean
    applicationDeadline: Date | null
    startsAt: Date | null
    endsAt: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: IntakeSessionCountAggregateOutputType | null
    _min: IntakeSessionMinAggregateOutputType | null
    _max: IntakeSessionMaxAggregateOutputType | null
  }

  type GetIntakeSessionGroupByPayload<T extends IntakeSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntakeSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntakeSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntakeSessionGroupByOutputType[P]>
            : GetScalarType<T[P], IntakeSessionGroupByOutputType[P]>
        }
      >
    >


  export type IntakeSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    intakePeriod?: boolean
    applicationOpen?: boolean
    applicationDeadline?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["intakeSession"]>

  export type IntakeSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    intakePeriod?: boolean
    applicationOpen?: boolean
    applicationDeadline?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["intakeSession"]>

  export type IntakeSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    intakePeriod?: boolean
    applicationOpen?: boolean
    applicationDeadline?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["intakeSession"]>

  export type IntakeSessionSelectScalar = {
    id?: boolean
    name?: boolean
    intakePeriod?: boolean
    applicationOpen?: boolean
    applicationDeadline?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntakeSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "intakePeriod" | "applicationOpen" | "applicationDeadline" | "startsAt" | "endsAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["intakeSession"]>

  export type $IntakeSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntakeSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      intakePeriod: $Enums.Intake
      applicationOpen: boolean
      applicationDeadline: Date | null
      startsAt: Date | null
      endsAt: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["intakeSession"]>
    composites: {}
  }

  type IntakeSessionGetPayload<S extends boolean | null | undefined | IntakeSessionDefaultArgs> = $Result.GetResult<Prisma.$IntakeSessionPayload, S>

  type IntakeSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntakeSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntakeSessionCountAggregateInputType | true
    }

  export interface IntakeSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntakeSession'], meta: { name: 'IntakeSession' } }
    /**
     * Find zero or one IntakeSession that matches the filter.
     * @param {IntakeSessionFindUniqueArgs} args - Arguments to find a IntakeSession
     * @example
     * // Get one IntakeSession
     * const intakeSession = await prisma.intakeSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntakeSessionFindUniqueArgs>(args: SelectSubset<T, IntakeSessionFindUniqueArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntakeSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntakeSessionFindUniqueOrThrowArgs} args - Arguments to find a IntakeSession
     * @example
     * // Get one IntakeSession
     * const intakeSession = await prisma.intakeSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntakeSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, IntakeSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSessionFindFirstArgs} args - Arguments to find a IntakeSession
     * @example
     * // Get one IntakeSession
     * const intakeSession = await prisma.intakeSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntakeSessionFindFirstArgs>(args?: SelectSubset<T, IntakeSessionFindFirstArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSessionFindFirstOrThrowArgs} args - Arguments to find a IntakeSession
     * @example
     * // Get one IntakeSession
     * const intakeSession = await prisma.intakeSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntakeSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, IntakeSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntakeSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntakeSessions
     * const intakeSessions = await prisma.intakeSession.findMany()
     * 
     * // Get first 10 IntakeSessions
     * const intakeSessions = await prisma.intakeSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intakeSessionWithIdOnly = await prisma.intakeSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntakeSessionFindManyArgs>(args?: SelectSubset<T, IntakeSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntakeSession.
     * @param {IntakeSessionCreateArgs} args - Arguments to create a IntakeSession.
     * @example
     * // Create one IntakeSession
     * const IntakeSession = await prisma.intakeSession.create({
     *   data: {
     *     // ... data to create a IntakeSession
     *   }
     * })
     * 
     */
    create<T extends IntakeSessionCreateArgs>(args: SelectSubset<T, IntakeSessionCreateArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntakeSessions.
     * @param {IntakeSessionCreateManyArgs} args - Arguments to create many IntakeSessions.
     * @example
     * // Create many IntakeSessions
     * const intakeSession = await prisma.intakeSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntakeSessionCreateManyArgs>(args?: SelectSubset<T, IntakeSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntakeSessions and returns the data saved in the database.
     * @param {IntakeSessionCreateManyAndReturnArgs} args - Arguments to create many IntakeSessions.
     * @example
     * // Create many IntakeSessions
     * const intakeSession = await prisma.intakeSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntakeSessions and only return the `id`
     * const intakeSessionWithIdOnly = await prisma.intakeSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntakeSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, IntakeSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntakeSession.
     * @param {IntakeSessionDeleteArgs} args - Arguments to delete one IntakeSession.
     * @example
     * // Delete one IntakeSession
     * const IntakeSession = await prisma.intakeSession.delete({
     *   where: {
     *     // ... filter to delete one IntakeSession
     *   }
     * })
     * 
     */
    delete<T extends IntakeSessionDeleteArgs>(args: SelectSubset<T, IntakeSessionDeleteArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntakeSession.
     * @param {IntakeSessionUpdateArgs} args - Arguments to update one IntakeSession.
     * @example
     * // Update one IntakeSession
     * const intakeSession = await prisma.intakeSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntakeSessionUpdateArgs>(args: SelectSubset<T, IntakeSessionUpdateArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntakeSessions.
     * @param {IntakeSessionDeleteManyArgs} args - Arguments to filter IntakeSessions to delete.
     * @example
     * // Delete a few IntakeSessions
     * const { count } = await prisma.intakeSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntakeSessionDeleteManyArgs>(args?: SelectSubset<T, IntakeSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntakeSessions
     * const intakeSession = await prisma.intakeSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntakeSessionUpdateManyArgs>(args: SelectSubset<T, IntakeSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeSessions and returns the data updated in the database.
     * @param {IntakeSessionUpdateManyAndReturnArgs} args - Arguments to update many IntakeSessions.
     * @example
     * // Update many IntakeSessions
     * const intakeSession = await prisma.intakeSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntakeSessions and only return the `id`
     * const intakeSessionWithIdOnly = await prisma.intakeSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntakeSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, IntakeSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntakeSession.
     * @param {IntakeSessionUpsertArgs} args - Arguments to update or create a IntakeSession.
     * @example
     * // Update or create a IntakeSession
     * const intakeSession = await prisma.intakeSession.upsert({
     *   create: {
     *     // ... data to create a IntakeSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntakeSession we want to update
     *   }
     * })
     */
    upsert<T extends IntakeSessionUpsertArgs>(args: SelectSubset<T, IntakeSessionUpsertArgs<ExtArgs>>): Prisma__IntakeSessionClient<$Result.GetResult<Prisma.$IntakeSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntakeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSessionCountArgs} args - Arguments to filter IntakeSessions to count.
     * @example
     * // Count the number of IntakeSessions
     * const count = await prisma.intakeSession.count({
     *   where: {
     *     // ... the filter for the IntakeSessions we want to count
     *   }
     * })
    **/
    count<T extends IntakeSessionCountArgs>(
      args?: Subset<T, IntakeSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntakeSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntakeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntakeSessionAggregateArgs>(args: Subset<T, IntakeSessionAggregateArgs>): Prisma.PrismaPromise<GetIntakeSessionAggregateType<T>>

    /**
     * Group by IntakeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeSessionGroupByArgs} args - Group by arguments.
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
      T extends IntakeSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntakeSessionGroupByArgs['orderBy'] }
        : { orderBy?: IntakeSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntakeSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntakeSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntakeSession model
   */
  readonly fields: IntakeSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntakeSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntakeSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IntakeSession model
   */
  interface IntakeSessionFieldRefs {
    readonly id: FieldRef<"IntakeSession", 'String'>
    readonly name: FieldRef<"IntakeSession", 'String'>
    readonly intakePeriod: FieldRef<"IntakeSession", 'Intake'>
    readonly applicationOpen: FieldRef<"IntakeSession", 'Boolean'>
    readonly applicationDeadline: FieldRef<"IntakeSession", 'DateTime'>
    readonly startsAt: FieldRef<"IntakeSession", 'DateTime'>
    readonly endsAt: FieldRef<"IntakeSession", 'DateTime'>
    readonly isActive: FieldRef<"IntakeSession", 'Boolean'>
    readonly createdAt: FieldRef<"IntakeSession", 'DateTime'>
    readonly updatedAt: FieldRef<"IntakeSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntakeSession findUnique
   */
  export type IntakeSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSession to fetch.
     */
    where: IntakeSessionWhereUniqueInput
  }

  /**
   * IntakeSession findUniqueOrThrow
   */
  export type IntakeSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSession to fetch.
     */
    where: IntakeSessionWhereUniqueInput
  }

  /**
   * IntakeSession findFirst
   */
  export type IntakeSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSession to fetch.
     */
    where?: IntakeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSessions to fetch.
     */
    orderBy?: IntakeSessionOrderByWithRelationInput | IntakeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeSessions.
     */
    cursor?: IntakeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeSessions.
     */
    distinct?: IntakeSessionScalarFieldEnum | IntakeSessionScalarFieldEnum[]
  }

  /**
   * IntakeSession findFirstOrThrow
   */
  export type IntakeSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSession to fetch.
     */
    where?: IntakeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSessions to fetch.
     */
    orderBy?: IntakeSessionOrderByWithRelationInput | IntakeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeSessions.
     */
    cursor?: IntakeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeSessions.
     */
    distinct?: IntakeSessionScalarFieldEnum | IntakeSessionScalarFieldEnum[]
  }

  /**
   * IntakeSession findMany
   */
  export type IntakeSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * Filter, which IntakeSessions to fetch.
     */
    where?: IntakeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeSessions to fetch.
     */
    orderBy?: IntakeSessionOrderByWithRelationInput | IntakeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntakeSessions.
     */
    cursor?: IntakeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeSessions.
     */
    distinct?: IntakeSessionScalarFieldEnum | IntakeSessionScalarFieldEnum[]
  }

  /**
   * IntakeSession create
   */
  export type IntakeSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a IntakeSession.
     */
    data: XOR<IntakeSessionCreateInput, IntakeSessionUncheckedCreateInput>
  }

  /**
   * IntakeSession createMany
   */
  export type IntakeSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntakeSessions.
     */
    data: IntakeSessionCreateManyInput | IntakeSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntakeSession createManyAndReturn
   */
  export type IntakeSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * The data used to create many IntakeSessions.
     */
    data: IntakeSessionCreateManyInput | IntakeSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntakeSession update
   */
  export type IntakeSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a IntakeSession.
     */
    data: XOR<IntakeSessionUpdateInput, IntakeSessionUncheckedUpdateInput>
    /**
     * Choose, which IntakeSession to update.
     */
    where: IntakeSessionWhereUniqueInput
  }

  /**
   * IntakeSession updateMany
   */
  export type IntakeSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntakeSessions.
     */
    data: XOR<IntakeSessionUpdateManyMutationInput, IntakeSessionUncheckedUpdateManyInput>
    /**
     * Filter which IntakeSessions to update
     */
    where?: IntakeSessionWhereInput
    /**
     * Limit how many IntakeSessions to update.
     */
    limit?: number
  }

  /**
   * IntakeSession updateManyAndReturn
   */
  export type IntakeSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * The data used to update IntakeSessions.
     */
    data: XOR<IntakeSessionUpdateManyMutationInput, IntakeSessionUncheckedUpdateManyInput>
    /**
     * Filter which IntakeSessions to update
     */
    where?: IntakeSessionWhereInput
    /**
     * Limit how many IntakeSessions to update.
     */
    limit?: number
  }

  /**
   * IntakeSession upsert
   */
  export type IntakeSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the IntakeSession to update in case it exists.
     */
    where: IntakeSessionWhereUniqueInput
    /**
     * In case the IntakeSession found by the `where` argument doesn't exist, create a new IntakeSession with this data.
     */
    create: XOR<IntakeSessionCreateInput, IntakeSessionUncheckedCreateInput>
    /**
     * In case the IntakeSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntakeSessionUpdateInput, IntakeSessionUncheckedUpdateInput>
  }

  /**
   * IntakeSession delete
   */
  export type IntakeSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
    /**
     * Filter which IntakeSession to delete.
     */
    where: IntakeSessionWhereUniqueInput
  }

  /**
   * IntakeSession deleteMany
   */
  export type IntakeSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeSessions to delete
     */
    where?: IntakeSessionWhereInput
    /**
     * Limit how many IntakeSessions to delete.
     */
    limit?: number
  }

  /**
   * IntakeSession without action
   */
  export type IntakeSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeSession
     */
    select?: IntakeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeSession
     */
    omit?: IntakeSessionOmit<ExtArgs> | null
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
    phone: 'phone',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CampusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    location: 'location',
    address: 'address',
    directions: 'directions',
    description: 'description',
    image: 'image',
    mapsUrl: 'mapsUrl',
    mapEmbedUrl: 'mapEmbedUrl',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampusScalarFieldEnum = (typeof CampusScalarFieldEnum)[keyof typeof CampusScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const DepartmentCampusScalarFieldEnum: {
    departmentId: 'departmentId',
    campusId: 'campusId'
  };

  export type DepartmentCampusScalarFieldEnum = (typeof DepartmentCampusScalarFieldEnum)[keyof typeof DepartmentCampusScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    code: 'code',
    description: 'description',
    duration: 'duration',
    qualification: 'qualification',
    requirements: 'requirements',
    intakeStatus: 'intakeStatus',
    campusLabel: 'campusLabel',
    feePerSemester: 'feePerSemester',
    featured: 'featured',
    isActive: 'isActive',
    departmentId: 'departmentId',
    campusId: 'campusId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const AdmissionApplicationScalarFieldEnum: {
    id: 'id',
    applicationNumber: 'applicationNumber',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    nationality: 'nationality',
    county: 'county',
    subCounty: 'subCounty',
    postalAddress: 'postalAddress',
    guardianName: 'guardianName',
    guardianPhone: 'guardianPhone',
    kcseIndexNumber: 'kcseIndexNumber',
    kcseGrade: 'kcseGrade',
    nationalId: 'nationalId',
    passportNumber: 'passportNumber',
    passportPhoto: 'passportPhoto',
    idCopy: 'idCopy',
    certificateFile: 'certificateFile',
    status: 'status',
    courseId: 'courseId',
    processedById: 'processedById',
    modeOfStudy: 'modeOfStudy',
    intake: 'intake',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdmissionApplicationScalarFieldEnum = (typeof AdmissionApplicationScalarFieldEnum)[keyof typeof AdmissionApplicationScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    admissionNumber: 'admissionNumber',
    userId: 'userId',
    applicationId: 'applicationId',
    courseId: 'courseId',
    campusId: 'campusId',
    createdAt: 'createdAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    employeeNo: 'employeeNo',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    coverImage: 'coverImage',
    category: 'category',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const GalleryImageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    category: 'category',
    span: 'span',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    course: 'course',
    quote: 'quote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    resolved: 'resolved',
    createdAt: 'createdAt'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const IntakeSessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    intakePeriod: 'intakePeriod',
    applicationOpen: 'applicationOpen',
    applicationDeadline: 'applicationDeadline',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntakeSessionScalarFieldEnum = (typeof IntakeSessionScalarFieldEnum)[keyof typeof IntakeSessionScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CampusCode'
   */
  export type EnumCampusCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampusCode'>
    


  /**
   * Reference to a field of type 'CampusCode[]'
   */
  export type ListEnumCampusCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampusCode[]'>
    


  /**
   * Reference to a field of type 'IntakeStatus'
   */
  export type EnumIntakeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntakeStatus'>
    


  /**
   * Reference to a field of type 'IntakeStatus[]'
   */
  export type ListEnumIntakeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IntakeStatus[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'ModeOfStudy'
   */
  export type EnumModeOfStudyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModeOfStudy'>
    


  /**
   * Reference to a field of type 'ModeOfStudy[]'
   */
  export type ListEnumModeOfStudyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModeOfStudy[]'>
    


  /**
   * Reference to a field of type 'Intake'
   */
  export type EnumIntakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intake'>
    


  /**
   * Reference to a field of type 'Intake[]'
   */
  export type ListEnumIntakeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Intake[]'>
    


  /**
   * Reference to a field of type 'GallerySpan'
   */
  export type EnumGallerySpanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GallerySpan'>
    


  /**
   * Reference to a field of type 'GallerySpan[]'
   */
  export type ListEnumGallerySpanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GallerySpan[]'>
    


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
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admissions?: AdmissionApplicationListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admissions?: AdmissionApplicationOrderByRelationAggregateInput
    student?: StudentOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admissions?: AdmissionApplicationListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    active?: SortOrder
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
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CampusWhereInput = {
    AND?: CampusWhereInput | CampusWhereInput[]
    OR?: CampusWhereInput[]
    NOT?: CampusWhereInput | CampusWhereInput[]
    id?: StringFilter<"Campus"> | string
    name?: StringFilter<"Campus"> | string
    code?: EnumCampusCodeFilter<"Campus"> | $Enums.CampusCode
    location?: StringNullableFilter<"Campus"> | string | null
    address?: StringNullableFilter<"Campus"> | string | null
    directions?: StringNullableFilter<"Campus"> | string | null
    description?: StringNullableFilter<"Campus"> | string | null
    image?: StringNullableFilter<"Campus"> | string | null
    mapsUrl?: StringNullableFilter<"Campus"> | string | null
    mapEmbedUrl?: StringNullableFilter<"Campus"> | string | null
    phone?: StringNullableFilter<"Campus"> | string | null
    email?: StringNullableFilter<"Campus"> | string | null
    createdAt?: DateTimeFilter<"Campus"> | Date | string
    updatedAt?: DateTimeFilter<"Campus"> | Date | string
    departments?: DepartmentCampusListRelationFilter
    courses?: CourseListRelationFilter
    students?: StudentListRelationFilter
  }

  export type CampusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    directions?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    mapsUrl?: SortOrderInput | SortOrder
    mapEmbedUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departments?: DepartmentCampusOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type CampusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: $Enums.CampusCode
    AND?: CampusWhereInput | CampusWhereInput[]
    OR?: CampusWhereInput[]
    NOT?: CampusWhereInput | CampusWhereInput[]
    location?: StringNullableFilter<"Campus"> | string | null
    address?: StringNullableFilter<"Campus"> | string | null
    directions?: StringNullableFilter<"Campus"> | string | null
    description?: StringNullableFilter<"Campus"> | string | null
    image?: StringNullableFilter<"Campus"> | string | null
    mapsUrl?: StringNullableFilter<"Campus"> | string | null
    mapEmbedUrl?: StringNullableFilter<"Campus"> | string | null
    phone?: StringNullableFilter<"Campus"> | string | null
    email?: StringNullableFilter<"Campus"> | string | null
    createdAt?: DateTimeFilter<"Campus"> | Date | string
    updatedAt?: DateTimeFilter<"Campus"> | Date | string
    departments?: DepartmentCampusListRelationFilter
    courses?: CourseListRelationFilter
    students?: StudentListRelationFilter
  }, "id" | "name" | "code">

  export type CampusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    directions?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    mapsUrl?: SortOrderInput | SortOrder
    mapEmbedUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampusCountOrderByAggregateInput
    _max?: CampusMaxOrderByAggregateInput
    _min?: CampusMinOrderByAggregateInput
  }

  export type CampusScalarWhereWithAggregatesInput = {
    AND?: CampusScalarWhereWithAggregatesInput | CampusScalarWhereWithAggregatesInput[]
    OR?: CampusScalarWhereWithAggregatesInput[]
    NOT?: CampusScalarWhereWithAggregatesInput | CampusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campus"> | string
    name?: StringWithAggregatesFilter<"Campus"> | string
    code?: EnumCampusCodeWithAggregatesFilter<"Campus"> | $Enums.CampusCode
    location?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    address?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    directions?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    description?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    image?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    mapsUrl?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    mapEmbedUrl?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    email?: StringNullableWithAggregatesFilter<"Campus"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campus"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    slug?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    isActive?: BoolFilter<"Department"> | boolean
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    campuses?: DepartmentCampusListRelationFilter
    courses?: CourseListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campuses?: DepartmentCampusOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    isActive?: BoolFilter<"Department"> | boolean
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    campuses?: DepartmentCampusListRelationFilter
    courses?: CourseListRelationFilter
  }, "id" | "slug">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    slug?: StringWithAggregatesFilter<"Department"> | string
    description?: StringNullableWithAggregatesFilter<"Department"> | string | null
    isActive?: BoolWithAggregatesFilter<"Department"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type DepartmentCampusWhereInput = {
    AND?: DepartmentCampusWhereInput | DepartmentCampusWhereInput[]
    OR?: DepartmentCampusWhereInput[]
    NOT?: DepartmentCampusWhereInput | DepartmentCampusWhereInput[]
    departmentId?: StringFilter<"DepartmentCampus"> | string
    campusId?: StringFilter<"DepartmentCampus"> | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    campus?: XOR<CampusScalarRelationFilter, CampusWhereInput>
  }

  export type DepartmentCampusOrderByWithRelationInput = {
    departmentId?: SortOrder
    campusId?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    campus?: CampusOrderByWithRelationInput
  }

  export type DepartmentCampusWhereUniqueInput = Prisma.AtLeast<{
    departmentId_campusId?: DepartmentCampusDepartmentIdCampusIdCompoundUniqueInput
    AND?: DepartmentCampusWhereInput | DepartmentCampusWhereInput[]
    OR?: DepartmentCampusWhereInput[]
    NOT?: DepartmentCampusWhereInput | DepartmentCampusWhereInput[]
    departmentId?: StringFilter<"DepartmentCampus"> | string
    campusId?: StringFilter<"DepartmentCampus"> | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    campus?: XOR<CampusScalarRelationFilter, CampusWhereInput>
  }, "departmentId_campusId">

  export type DepartmentCampusOrderByWithAggregationInput = {
    departmentId?: SortOrder
    campusId?: SortOrder
    _count?: DepartmentCampusCountOrderByAggregateInput
    _max?: DepartmentCampusMaxOrderByAggregateInput
    _min?: DepartmentCampusMinOrderByAggregateInput
  }

  export type DepartmentCampusScalarWhereWithAggregatesInput = {
    AND?: DepartmentCampusScalarWhereWithAggregatesInput | DepartmentCampusScalarWhereWithAggregatesInput[]
    OR?: DepartmentCampusScalarWhereWithAggregatesInput[]
    NOT?: DepartmentCampusScalarWhereWithAggregatesInput | DepartmentCampusScalarWhereWithAggregatesInput[]
    departmentId?: StringWithAggregatesFilter<"DepartmentCampus"> | string
    campusId?: StringWithAggregatesFilter<"DepartmentCampus"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    slug?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    duration?: StringFilter<"Course"> | string
    qualification?: StringNullableFilter<"Course"> | string | null
    requirements?: StringNullableFilter<"Course"> | string | null
    intakeStatus?: EnumIntakeStatusFilter<"Course"> | $Enums.IntakeStatus
    campusLabel?: StringFilter<"Course"> | string
    feePerSemester?: StringNullableFilter<"Course"> | string | null
    featured?: BoolFilter<"Course"> | boolean
    isActive?: BoolFilter<"Course"> | boolean
    departmentId?: StringFilter<"Course"> | string
    campusId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    campus?: XOR<CampusNullableScalarRelationFilter, CampusWhereInput> | null
    applications?: AdmissionApplicationListRelationFilter
    students?: StudentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    qualification?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    intakeStatus?: SortOrder
    campusLabel?: SortOrder
    feePerSemester?: SortOrderInput | SortOrder
    featured?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
    campusId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    campus?: CampusOrderByWithRelationInput
    applications?: AdmissionApplicationOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    code?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    duration?: StringFilter<"Course"> | string
    qualification?: StringNullableFilter<"Course"> | string | null
    requirements?: StringNullableFilter<"Course"> | string | null
    intakeStatus?: EnumIntakeStatusFilter<"Course"> | $Enums.IntakeStatus
    campusLabel?: StringFilter<"Course"> | string
    feePerSemester?: StringNullableFilter<"Course"> | string | null
    featured?: BoolFilter<"Course"> | boolean
    isActive?: BoolFilter<"Course"> | boolean
    departmentId?: StringFilter<"Course"> | string
    campusId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    campus?: XOR<CampusNullableScalarRelationFilter, CampusWhereInput> | null
    applications?: AdmissionApplicationListRelationFilter
    students?: StudentListRelationFilter
  }, "id" | "slug" | "code">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    qualification?: SortOrderInput | SortOrder
    requirements?: SortOrderInput | SortOrder
    intakeStatus?: SortOrder
    campusLabel?: SortOrder
    feePerSemester?: SortOrderInput | SortOrder
    featured?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
    campusId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    slug?: StringWithAggregatesFilter<"Course"> | string
    code?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    duration?: StringWithAggregatesFilter<"Course"> | string
    qualification?: StringNullableWithAggregatesFilter<"Course"> | string | null
    requirements?: StringNullableWithAggregatesFilter<"Course"> | string | null
    intakeStatus?: EnumIntakeStatusWithAggregatesFilter<"Course"> | $Enums.IntakeStatus
    campusLabel?: StringWithAggregatesFilter<"Course"> | string
    feePerSemester?: StringNullableWithAggregatesFilter<"Course"> | string | null
    featured?: BoolWithAggregatesFilter<"Course"> | boolean
    isActive?: BoolWithAggregatesFilter<"Course"> | boolean
    departmentId?: StringWithAggregatesFilter<"Course"> | string
    campusId?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type AdmissionApplicationWhereInput = {
    AND?: AdmissionApplicationWhereInput | AdmissionApplicationWhereInput[]
    OR?: AdmissionApplicationWhereInput[]
    NOT?: AdmissionApplicationWhereInput | AdmissionApplicationWhereInput[]
    id?: StringFilter<"AdmissionApplication"> | string
    applicationNumber?: StringFilter<"AdmissionApplication"> | string
    firstName?: StringFilter<"AdmissionApplication"> | string
    middleName?: StringNullableFilter<"AdmissionApplication"> | string | null
    lastName?: StringFilter<"AdmissionApplication"> | string
    email?: StringFilter<"AdmissionApplication"> | string
    phone?: StringFilter<"AdmissionApplication"> | string
    gender?: EnumGenderFilter<"AdmissionApplication"> | $Enums.Gender
    dateOfBirth?: DateTimeFilter<"AdmissionApplication"> | Date | string
    nationality?: StringFilter<"AdmissionApplication"> | string
    county?: StringFilter<"AdmissionApplication"> | string
    subCounty?: StringNullableFilter<"AdmissionApplication"> | string | null
    postalAddress?: StringFilter<"AdmissionApplication"> | string
    guardianName?: StringNullableFilter<"AdmissionApplication"> | string | null
    guardianPhone?: StringNullableFilter<"AdmissionApplication"> | string | null
    kcseIndexNumber?: StringNullableFilter<"AdmissionApplication"> | string | null
    kcseGrade?: StringNullableFilter<"AdmissionApplication"> | string | null
    nationalId?: StringNullableFilter<"AdmissionApplication"> | string | null
    passportNumber?: StringNullableFilter<"AdmissionApplication"> | string | null
    passportPhoto?: StringNullableFilter<"AdmissionApplication"> | string | null
    idCopy?: StringNullableFilter<"AdmissionApplication"> | string | null
    certificateFile?: StringNullableFilter<"AdmissionApplication"> | string | null
    status?: EnumApplicationStatusFilter<"AdmissionApplication"> | $Enums.ApplicationStatus
    courseId?: StringFilter<"AdmissionApplication"> | string
    processedById?: StringNullableFilter<"AdmissionApplication"> | string | null
    modeOfStudy?: EnumModeOfStudyFilter<"AdmissionApplication"> | $Enums.ModeOfStudy
    intake?: EnumIntakeFilter<"AdmissionApplication"> | $Enums.Intake
    submittedAt?: DateTimeNullableFilter<"AdmissionApplication"> | Date | string | null
    createdAt?: DateTimeFilter<"AdmissionApplication"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionApplication"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    processedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type AdmissionApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    county?: SortOrder
    subCounty?: SortOrderInput | SortOrder
    postalAddress?: SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianPhone?: SortOrderInput | SortOrder
    kcseIndexNumber?: SortOrderInput | SortOrder
    kcseGrade?: SortOrderInput | SortOrder
    nationalId?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    passportPhoto?: SortOrderInput | SortOrder
    idCopy?: SortOrderInput | SortOrder
    certificateFile?: SortOrderInput | SortOrder
    status?: SortOrder
    courseId?: SortOrder
    processedById?: SortOrderInput | SortOrder
    modeOfStudy?: SortOrder
    intake?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    processedBy?: UserOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type AdmissionApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicationNumber?: string
    AND?: AdmissionApplicationWhereInput | AdmissionApplicationWhereInput[]
    OR?: AdmissionApplicationWhereInput[]
    NOT?: AdmissionApplicationWhereInput | AdmissionApplicationWhereInput[]
    firstName?: StringFilter<"AdmissionApplication"> | string
    middleName?: StringNullableFilter<"AdmissionApplication"> | string | null
    lastName?: StringFilter<"AdmissionApplication"> | string
    email?: StringFilter<"AdmissionApplication"> | string
    phone?: StringFilter<"AdmissionApplication"> | string
    gender?: EnumGenderFilter<"AdmissionApplication"> | $Enums.Gender
    dateOfBirth?: DateTimeFilter<"AdmissionApplication"> | Date | string
    nationality?: StringFilter<"AdmissionApplication"> | string
    county?: StringFilter<"AdmissionApplication"> | string
    subCounty?: StringNullableFilter<"AdmissionApplication"> | string | null
    postalAddress?: StringFilter<"AdmissionApplication"> | string
    guardianName?: StringNullableFilter<"AdmissionApplication"> | string | null
    guardianPhone?: StringNullableFilter<"AdmissionApplication"> | string | null
    kcseIndexNumber?: StringNullableFilter<"AdmissionApplication"> | string | null
    kcseGrade?: StringNullableFilter<"AdmissionApplication"> | string | null
    nationalId?: StringNullableFilter<"AdmissionApplication"> | string | null
    passportNumber?: StringNullableFilter<"AdmissionApplication"> | string | null
    passportPhoto?: StringNullableFilter<"AdmissionApplication"> | string | null
    idCopy?: StringNullableFilter<"AdmissionApplication"> | string | null
    certificateFile?: StringNullableFilter<"AdmissionApplication"> | string | null
    status?: EnumApplicationStatusFilter<"AdmissionApplication"> | $Enums.ApplicationStatus
    courseId?: StringFilter<"AdmissionApplication"> | string
    processedById?: StringNullableFilter<"AdmissionApplication"> | string | null
    modeOfStudy?: EnumModeOfStudyFilter<"AdmissionApplication"> | $Enums.ModeOfStudy
    intake?: EnumIntakeFilter<"AdmissionApplication"> | $Enums.Intake
    submittedAt?: DateTimeNullableFilter<"AdmissionApplication"> | Date | string | null
    createdAt?: DateTimeFilter<"AdmissionApplication"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionApplication"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    processedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id" | "applicationNumber">

  export type AdmissionApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    county?: SortOrder
    subCounty?: SortOrderInput | SortOrder
    postalAddress?: SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianPhone?: SortOrderInput | SortOrder
    kcseIndexNumber?: SortOrderInput | SortOrder
    kcseGrade?: SortOrderInput | SortOrder
    nationalId?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    passportPhoto?: SortOrderInput | SortOrder
    idCopy?: SortOrderInput | SortOrder
    certificateFile?: SortOrderInput | SortOrder
    status?: SortOrder
    courseId?: SortOrder
    processedById?: SortOrderInput | SortOrder
    modeOfStudy?: SortOrder
    intake?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdmissionApplicationCountOrderByAggregateInput
    _max?: AdmissionApplicationMaxOrderByAggregateInput
    _min?: AdmissionApplicationMinOrderByAggregateInput
  }

  export type AdmissionApplicationScalarWhereWithAggregatesInput = {
    AND?: AdmissionApplicationScalarWhereWithAggregatesInput | AdmissionApplicationScalarWhereWithAggregatesInput[]
    OR?: AdmissionApplicationScalarWhereWithAggregatesInput[]
    NOT?: AdmissionApplicationScalarWhereWithAggregatesInput | AdmissionApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    applicationNumber?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    firstName?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    middleName?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    lastName?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    email?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    phone?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    gender?: EnumGenderWithAggregatesFilter<"AdmissionApplication"> | $Enums.Gender
    dateOfBirth?: DateTimeWithAggregatesFilter<"AdmissionApplication"> | Date | string
    nationality?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    county?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    subCounty?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    postalAddress?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    guardianName?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    guardianPhone?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    kcseIndexNumber?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    kcseGrade?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    nationalId?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    passportNumber?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    passportPhoto?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    idCopy?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    certificateFile?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    status?: EnumApplicationStatusWithAggregatesFilter<"AdmissionApplication"> | $Enums.ApplicationStatus
    courseId?: StringWithAggregatesFilter<"AdmissionApplication"> | string
    processedById?: StringNullableWithAggregatesFilter<"AdmissionApplication"> | string | null
    modeOfStudy?: EnumModeOfStudyWithAggregatesFilter<"AdmissionApplication"> | $Enums.ModeOfStudy
    intake?: EnumIntakeWithAggregatesFilter<"AdmissionApplication"> | $Enums.Intake
    submittedAt?: DateTimeNullableWithAggregatesFilter<"AdmissionApplication"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdmissionApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdmissionApplication"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    admissionNumber?: StringFilter<"Student"> | string
    userId?: StringNullableFilter<"Student"> | string | null
    applicationId?: StringFilter<"Student"> | string
    courseId?: StringFilter<"Student"> | string
    campusId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    application?: XOR<AdmissionApplicationScalarRelationFilter, AdmissionApplicationWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    campus?: XOR<CampusScalarRelationFilter, CampusWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    admissionNumber?: SortOrder
    userId?: SortOrderInput | SortOrder
    applicationId?: SortOrder
    courseId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    application?: AdmissionApplicationOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    campus?: CampusOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    admissionNumber?: string
    userId?: string
    applicationId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    courseId?: StringFilter<"Student"> | string
    campusId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    application?: XOR<AdmissionApplicationScalarRelationFilter, AdmissionApplicationWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    campus?: XOR<CampusScalarRelationFilter, CampusWhereInput>
  }, "id" | "admissionNumber" | "userId" | "applicationId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    admissionNumber?: SortOrder
    userId?: SortOrderInput | SortOrder
    applicationId?: SortOrder
    courseId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    admissionNumber?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    applicationId?: StringWithAggregatesFilter<"Student"> | string
    courseId?: StringWithAggregatesFilter<"Student"> | string
    campusId?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    employeeNo?: StringFilter<"Staff"> | string
    userId?: StringFilter<"Staff"> | string
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    employeeNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeNo?: string
    userId?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "employeeNo" | "userId">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    employeeNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    employeeNo?: StringWithAggregatesFilter<"Staff"> | string
    userId?: StringWithAggregatesFilter<"Staff"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    excerpt?: StringNullableFilter<"News"> | string | null
    content?: StringFilter<"News"> | string
    coverImage?: StringNullableFilter<"News"> | string | null
    category?: StringNullableFilter<"News"> | string | null
    published?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    excerpt?: StringNullableFilter<"News"> | string | null
    content?: StringFilter<"News"> | string
    coverImage?: StringNullableFilter<"News"> | string | null
    category?: StringNullableFilter<"News"> | string | null
    published?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }, "id" | "slug">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    slug?: StringWithAggregatesFilter<"News"> | string
    excerpt?: StringNullableWithAggregatesFilter<"News"> | string | null
    content?: StringWithAggregatesFilter<"News"> | string
    coverImage?: StringNullableWithAggregatesFilter<"News"> | string | null
    category?: StringNullableWithAggregatesFilter<"News"> | string | null
    published?: BoolWithAggregatesFilter<"News"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type GalleryImageWhereInput = {
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    id?: StringFilter<"GalleryImage"> | string
    title?: StringNullableFilter<"GalleryImage"> | string | null
    image?: StringFilter<"GalleryImage"> | string
    category?: StringNullableFilter<"GalleryImage"> | string | null
    span?: EnumGallerySpanFilter<"GalleryImage"> | $Enums.GallerySpan
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }

  export type GalleryImageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    image?: SortOrder
    category?: SortOrderInput | SortOrder
    span?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryImageWhereInput | GalleryImageWhereInput[]
    OR?: GalleryImageWhereInput[]
    NOT?: GalleryImageWhereInput | GalleryImageWhereInput[]
    title?: StringNullableFilter<"GalleryImage"> | string | null
    image?: StringFilter<"GalleryImage"> | string
    category?: StringNullableFilter<"GalleryImage"> | string | null
    span?: EnumGallerySpanFilter<"GalleryImage"> | $Enums.GallerySpan
    createdAt?: DateTimeFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryImage"> | Date | string
  }, "id">

  export type GalleryImageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    image?: SortOrder
    category?: SortOrderInput | SortOrder
    span?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryImageCountOrderByAggregateInput
    _max?: GalleryImageMaxOrderByAggregateInput
    _min?: GalleryImageMinOrderByAggregateInput
  }

  export type GalleryImageScalarWhereWithAggregatesInput = {
    AND?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    OR?: GalleryImageScalarWhereWithAggregatesInput[]
    NOT?: GalleryImageScalarWhereWithAggregatesInput | GalleryImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryImage"> | string
    title?: StringNullableWithAggregatesFilter<"GalleryImage"> | string | null
    image?: StringWithAggregatesFilter<"GalleryImage"> | string
    category?: StringNullableWithAggregatesFilter<"GalleryImage"> | string | null
    span?: EnumGallerySpanWithAggregatesFilter<"GalleryImage"> | $Enums.GallerySpan
    createdAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryImage"> | Date | string
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: StringFilter<"Testimonial"> | string
    name?: StringFilter<"Testimonial"> | string
    course?: StringFilter<"Testimonial"> | string
    quote?: StringFilter<"Testimonial"> | string
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonial"> | Date | string
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    name?: StringFilter<"Testimonial"> | string
    course?: StringFilter<"Testimonial"> | string
    quote?: StringFilter<"Testimonial"> | string
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonial"> | Date | string
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Testimonial"> | string
    name?: StringWithAggregatesFilter<"Testimonial"> | string
    course?: StringWithAggregatesFilter<"Testimonial"> | string
    quote?: StringWithAggregatesFilter<"Testimonial"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: StringFilter<"ContactMessage"> | string
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    resolved?: BoolFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    name?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    subject?: StringFilter<"ContactMessage"> | string
    message?: StringFilter<"ContactMessage"> | string
    resolved?: BoolFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactMessage"> | string
    name?: StringWithAggregatesFilter<"ContactMessage"> | string
    email?: StringWithAggregatesFilter<"ContactMessage"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactMessage"> | string | null
    subject?: StringWithAggregatesFilter<"ContactMessage"> | string
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    resolved?: BoolWithAggregatesFilter<"ContactMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type IntakeSessionWhereInput = {
    AND?: IntakeSessionWhereInput | IntakeSessionWhereInput[]
    OR?: IntakeSessionWhereInput[]
    NOT?: IntakeSessionWhereInput | IntakeSessionWhereInput[]
    id?: StringFilter<"IntakeSession"> | string
    name?: StringFilter<"IntakeSession"> | string
    intakePeriod?: EnumIntakeFilter<"IntakeSession"> | $Enums.Intake
    applicationOpen?: BoolFilter<"IntakeSession"> | boolean
    applicationDeadline?: DateTimeNullableFilter<"IntakeSession"> | Date | string | null
    startsAt?: DateTimeNullableFilter<"IntakeSession"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"IntakeSession"> | Date | string | null
    isActive?: BoolFilter<"IntakeSession"> | boolean
    createdAt?: DateTimeFilter<"IntakeSession"> | Date | string
    updatedAt?: DateTimeFilter<"IntakeSession"> | Date | string
  }

  export type IntakeSessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    intakePeriod?: SortOrder
    applicationOpen?: SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntakeSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntakeSessionWhereInput | IntakeSessionWhereInput[]
    OR?: IntakeSessionWhereInput[]
    NOT?: IntakeSessionWhereInput | IntakeSessionWhereInput[]
    name?: StringFilter<"IntakeSession"> | string
    intakePeriod?: EnumIntakeFilter<"IntakeSession"> | $Enums.Intake
    applicationOpen?: BoolFilter<"IntakeSession"> | boolean
    applicationDeadline?: DateTimeNullableFilter<"IntakeSession"> | Date | string | null
    startsAt?: DateTimeNullableFilter<"IntakeSession"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"IntakeSession"> | Date | string | null
    isActive?: BoolFilter<"IntakeSession"> | boolean
    createdAt?: DateTimeFilter<"IntakeSession"> | Date | string
    updatedAt?: DateTimeFilter<"IntakeSession"> | Date | string
  }, "id">

  export type IntakeSessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    intakePeriod?: SortOrder
    applicationOpen?: SortOrder
    applicationDeadline?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntakeSessionCountOrderByAggregateInput
    _max?: IntakeSessionMaxOrderByAggregateInput
    _min?: IntakeSessionMinOrderByAggregateInput
  }

  export type IntakeSessionScalarWhereWithAggregatesInput = {
    AND?: IntakeSessionScalarWhereWithAggregatesInput | IntakeSessionScalarWhereWithAggregatesInput[]
    OR?: IntakeSessionScalarWhereWithAggregatesInput[]
    NOT?: IntakeSessionScalarWhereWithAggregatesInput | IntakeSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntakeSession"> | string
    name?: StringWithAggregatesFilter<"IntakeSession"> | string
    intakePeriod?: EnumIntakeWithAggregatesFilter<"IntakeSession"> | $Enums.Intake
    applicationOpen?: BoolWithAggregatesFilter<"IntakeSession"> | boolean
    applicationDeadline?: DateTimeNullableWithAggregatesFilter<"IntakeSession"> | Date | string | null
    startsAt?: DateTimeNullableWithAggregatesFilter<"IntakeSession"> | Date | string | null
    endsAt?: DateTimeNullableWithAggregatesFilter<"IntakeSession"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"IntakeSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"IntakeSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntakeSession"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admissions?: AdmissionApplicationCreateNestedManyWithoutProcessedByInput
    student?: StudentCreateNestedOneWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admissions?: AdmissionApplicationUncheckedCreateNestedManyWithoutProcessedByInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissions?: AdmissionApplicationUpdateManyWithoutProcessedByNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissions?: AdmissionApplicationUncheckedUpdateManyWithoutProcessedByNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampusCreateInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCampusCreateNestedManyWithoutCampusInput
    courses?: CourseCreateNestedManyWithoutCampusInput
    students?: StudentCreateNestedManyWithoutCampusInput
  }

  export type CampusUncheckedCreateInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCampusUncheckedCreateNestedManyWithoutCampusInput
    courses?: CourseUncheckedCreateNestedManyWithoutCampusInput
    students?: StudentUncheckedCreateNestedManyWithoutCampusInput
  }

  export type CampusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentCampusUpdateManyWithoutCampusNestedInput
    courses?: CourseUpdateManyWithoutCampusNestedInput
    students?: StudentUpdateManyWithoutCampusNestedInput
  }

  export type CampusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentCampusUncheckedUpdateManyWithoutCampusNestedInput
    courses?: CourseUncheckedUpdateManyWithoutCampusNestedInput
    students?: StudentUncheckedUpdateManyWithoutCampusNestedInput
  }

  export type CampusCreateManyInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campuses?: DepartmentCampusCreateNestedManyWithoutDepartmentInput
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campuses?: DepartmentCampusUncheckedCreateNestedManyWithoutDepartmentInput
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campuses?: DepartmentCampusUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campuses?: DepartmentCampusUncheckedUpdateManyWithoutDepartmentNestedInput
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCampusCreateInput = {
    department: DepartmentCreateNestedOneWithoutCampusesInput
    campus: CampusCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentCampusUncheckedCreateInput = {
    departmentId: string
    campusId: string
  }

  export type DepartmentCampusUpdateInput = {
    department?: DepartmentUpdateOneRequiredWithoutCampusesNestedInput
    campus?: CampusUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type DepartmentCampusUncheckedUpdateInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCampusCreateManyInput = {
    departmentId: string
    campusId: string
  }

  export type DepartmentCampusUpdateManyMutationInput = {

  }

  export type DepartmentCampusUncheckedUpdateManyInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    campus?: CampusCreateNestedOneWithoutCoursesInput
    applications?: AdmissionApplicationCreateNestedManyWithoutCourseInput
    students?: StudentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    departmentId: string
    campusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: AdmissionApplicationUncheckedCreateNestedManyWithoutCourseInput
    students?: StudentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    campus?: CampusUpdateOneWithoutCoursesNestedInput
    applications?: AdmissionApplicationUpdateManyWithoutCourseNestedInput
    students?: StudentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    campusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: AdmissionApplicationUncheckedUpdateManyWithoutCourseNestedInput
    students?: StudentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    departmentId: string
    campusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    campusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionApplicationCreateInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutApplicationsInput
    processedBy?: UserCreateNestedOneWithoutAdmissionsInput
    student?: StudentCreateNestedOneWithoutApplicationInput
  }

  export type AdmissionApplicationUncheckedCreateInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    courseId: string
    processedById?: string | null
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type AdmissionApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutApplicationsNestedInput
    processedBy?: UserUpdateOneWithoutAdmissionsNestedInput
    student?: StudentUpdateOneWithoutApplicationNestedInput
  }

  export type AdmissionApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    courseId?: StringFieldUpdateOperationsInput | string
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type AdmissionApplicationCreateManyInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    courseId: string
    processedById?: string | null
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    courseId?: StringFieldUpdateOperationsInput | string
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    admissionNumber: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutStudentInput
    application: AdmissionApplicationCreateNestedOneWithoutStudentInput
    course: CourseCreateNestedOneWithoutStudentsInput
    campus: CampusCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    admissionNumber: string
    userId?: string | null
    applicationId: string
    courseId: string
    campusId: string
    createdAt?: Date | string
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStudentNestedInput
    application?: AdmissionApplicationUpdateOneRequiredWithoutStudentNestedInput
    course?: CourseUpdateOneRequiredWithoutStudentsNestedInput
    campus?: CampusUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyInput = {
    id?: string
    admissionNumber: string
    userId?: string | null
    applicationId: string
    courseId: string
    campusId: string
    createdAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    id?: string
    employeeNo: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    employeeNo: string
    userId: string
    createdAt?: Date | string
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeNo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateManyInput = {
    id?: string
    employeeNo: string
    userId: string
    createdAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeNo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    category?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    category?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    coverImage?: string | null
    category?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateInput = {
    id?: string
    title?: string | null
    image: string
    category?: string | null
    span?: $Enums.GallerySpan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUncheckedCreateInput = {
    id?: string
    title?: string | null
    image: string
    category?: string | null
    span?: $Enums.GallerySpan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    span?: EnumGallerySpanFieldUpdateOperationsInput | $Enums.GallerySpan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    span?: EnumGallerySpanFieldUpdateOperationsInput | $Enums.GallerySpan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageCreateManyInput = {
    id?: string
    title?: string | null
    image: string
    category?: string | null
    span?: $Enums.GallerySpan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    span?: EnumGallerySpanFieldUpdateOperationsInput | $Enums.GallerySpan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    span?: EnumGallerySpanFieldUpdateOperationsInput | $Enums.GallerySpan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateInput = {
    id?: string
    name: string
    course: string
    quote: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUncheckedCreateInput = {
    id?: string
    name: string
    course: string
    quote: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateManyInput = {
    id?: string
    name: string
    course: string
    quote: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    resolved?: boolean
    createdAt?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    resolved?: boolean
    createdAt?: Date | string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    subject: string
    message: string
    resolved?: boolean
    createdAt?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeSessionCreateInput = {
    id?: string
    name: string
    intakePeriod: $Enums.Intake
    applicationOpen?: boolean
    applicationDeadline?: Date | string | null
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeSessionUncheckedCreateInput = {
    id?: string
    name: string
    intakePeriod: $Enums.Intake
    applicationOpen?: boolean
    applicationDeadline?: Date | string | null
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    intakePeriod?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    applicationOpen?: BoolFieldUpdateOperationsInput | boolean
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    intakePeriod?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    applicationOpen?: BoolFieldUpdateOperationsInput | boolean
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeSessionCreateManyInput = {
    id?: string
    name: string
    intakePeriod: $Enums.Intake
    applicationOpen?: boolean
    applicationDeadline?: Date | string | null
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    intakePeriod?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    applicationOpen?: BoolFieldUpdateOperationsInput | boolean
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    intakePeriod?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    applicationOpen?: BoolFieldUpdateOperationsInput | boolean
    applicationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AdmissionApplicationListRelationFilter = {
    every?: AdmissionApplicationWhereInput
    some?: AdmissionApplicationWhereInput
    none?: AdmissionApplicationWhereInput
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdmissionApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    active?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumCampusCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampusCode | EnumCampusCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampusCodeFilter<$PrismaModel> | $Enums.CampusCode
  }

  export type DepartmentCampusListRelationFilter = {
    every?: DepartmentCampusWhereInput
    some?: DepartmentCampusWhereInput
    none?: DepartmentCampusWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type DepartmentCampusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    address?: SortOrder
    directions?: SortOrder
    description?: SortOrder
    image?: SortOrder
    mapsUrl?: SortOrder
    mapEmbedUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    address?: SortOrder
    directions?: SortOrder
    description?: SortOrder
    image?: SortOrder
    mapsUrl?: SortOrder
    mapEmbedUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    location?: SortOrder
    address?: SortOrder
    directions?: SortOrder
    description?: SortOrder
    image?: SortOrder
    mapsUrl?: SortOrder
    mapEmbedUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCampusCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampusCode | EnumCampusCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampusCodeWithAggregatesFilter<$PrismaModel> | $Enums.CampusCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampusCodeFilter<$PrismaModel>
    _max?: NestedEnumCampusCodeFilter<$PrismaModel>
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type CampusScalarRelationFilter = {
    is?: CampusWhereInput
    isNot?: CampusWhereInput
  }

  export type DepartmentCampusDepartmentIdCampusIdCompoundUniqueInput = {
    departmentId: string
    campusId: string
  }

  export type DepartmentCampusCountOrderByAggregateInput = {
    departmentId?: SortOrder
    campusId?: SortOrder
  }

  export type DepartmentCampusMaxOrderByAggregateInput = {
    departmentId?: SortOrder
    campusId?: SortOrder
  }

  export type DepartmentCampusMinOrderByAggregateInput = {
    departmentId?: SortOrder
    campusId?: SortOrder
  }

  export type EnumIntakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusFilter<$PrismaModel> | $Enums.IntakeStatus
  }

  export type CampusNullableScalarRelationFilter = {
    is?: CampusWhereInput | null
    isNot?: CampusWhereInput | null
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    intakeStatus?: SortOrder
    campusLabel?: SortOrder
    feePerSemester?: SortOrder
    featured?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    intakeStatus?: SortOrder
    campusLabel?: SortOrder
    feePerSemester?: SortOrder
    featured?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    code?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    intakeStatus?: SortOrder
    campusLabel?: SortOrder
    feePerSemester?: SortOrder
    featured?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIntakeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntakeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntakeStatusFilter<$PrismaModel>
    _max?: NestedEnumIntakeStatusFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type EnumModeOfStudyFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeOfStudy | EnumModeOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumModeOfStudyFilter<$PrismaModel> | $Enums.ModeOfStudy
  }

  export type EnumIntakeFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel>
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeFilter<$PrismaModel> | $Enums.Intake
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AdmissionApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    county?: SortOrder
    subCounty?: SortOrder
    postalAddress?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    kcseIndexNumber?: SortOrder
    kcseGrade?: SortOrder
    nationalId?: SortOrder
    passportNumber?: SortOrder
    passportPhoto?: SortOrder
    idCopy?: SortOrder
    certificateFile?: SortOrder
    status?: SortOrder
    courseId?: SortOrder
    processedById?: SortOrder
    modeOfStudy?: SortOrder
    intake?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    county?: SortOrder
    subCounty?: SortOrder
    postalAddress?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    kcseIndexNumber?: SortOrder
    kcseGrade?: SortOrder
    nationalId?: SortOrder
    passportNumber?: SortOrder
    passportPhoto?: SortOrder
    idCopy?: SortOrder
    certificateFile?: SortOrder
    status?: SortOrder
    courseId?: SortOrder
    processedById?: SortOrder
    modeOfStudy?: SortOrder
    intake?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicationNumber?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    county?: SortOrder
    subCounty?: SortOrder
    postalAddress?: SortOrder
    guardianName?: SortOrder
    guardianPhone?: SortOrder
    kcseIndexNumber?: SortOrder
    kcseGrade?: SortOrder
    nationalId?: SortOrder
    passportNumber?: SortOrder
    passportPhoto?: SortOrder
    idCopy?: SortOrder
    certificateFile?: SortOrder
    status?: SortOrder
    courseId?: SortOrder
    processedById?: SortOrder
    modeOfStudy?: SortOrder
    intake?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumModeOfStudyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeOfStudy | EnumModeOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumModeOfStudyWithAggregatesFilter<$PrismaModel> | $Enums.ModeOfStudy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModeOfStudyFilter<$PrismaModel>
    _max?: NestedEnumModeOfStudyFilter<$PrismaModel>
  }

  export type EnumIntakeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel>
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeWithAggregatesFilter<$PrismaModel> | $Enums.Intake
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntakeFilter<$PrismaModel>
    _max?: NestedEnumIntakeFilter<$PrismaModel>
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

  export type AdmissionApplicationScalarRelationFilter = {
    is?: AdmissionApplicationWhereInput
    isNot?: AdmissionApplicationWhereInput
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    admissionNumber?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    courseId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    admissionNumber?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    courseId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    admissionNumber?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    courseId?: SortOrder
    campusId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    employeeNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    employeeNo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    category?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGallerySpanFilter<$PrismaModel = never> = {
    equals?: $Enums.GallerySpan | EnumGallerySpanFieldRefInput<$PrismaModel>
    in?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    notIn?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    not?: NestedEnumGallerySpanFilter<$PrismaModel> | $Enums.GallerySpan
  }

  export type GalleryImageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    category?: SortOrder
    span?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    category?: SortOrder
    span?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryImageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    category?: SortOrder
    span?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGallerySpanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GallerySpan | EnumGallerySpanFieldRefInput<$PrismaModel>
    in?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    notIn?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    not?: NestedEnumGallerySpanWithAggregatesFilter<$PrismaModel> | $Enums.GallerySpan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGallerySpanFilter<$PrismaModel>
    _max?: NestedEnumGallerySpanFilter<$PrismaModel>
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    course?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type IntakeSessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    intakePeriod?: SortOrder
    applicationOpen?: SortOrder
    applicationDeadline?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntakeSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    intakePeriod?: SortOrder
    applicationOpen?: SortOrder
    applicationDeadline?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntakeSessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    intakePeriod?: SortOrder
    applicationOpen?: SortOrder
    applicationDeadline?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdmissionApplicationCreateNestedManyWithoutProcessedByInput = {
    create?: XOR<AdmissionApplicationCreateWithoutProcessedByInput, AdmissionApplicationUncheckedCreateWithoutProcessedByInput> | AdmissionApplicationCreateWithoutProcessedByInput[] | AdmissionApplicationUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutProcessedByInput | AdmissionApplicationCreateOrConnectWithoutProcessedByInput[]
    createMany?: AdmissionApplicationCreateManyProcessedByInputEnvelope
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type AdmissionApplicationUncheckedCreateNestedManyWithoutProcessedByInput = {
    create?: XOR<AdmissionApplicationCreateWithoutProcessedByInput, AdmissionApplicationUncheckedCreateWithoutProcessedByInput> | AdmissionApplicationCreateWithoutProcessedByInput[] | AdmissionApplicationUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutProcessedByInput | AdmissionApplicationCreateOrConnectWithoutProcessedByInput[]
    createMany?: AdmissionApplicationCreateManyProcessedByInputEnvelope
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type StaffUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdmissionApplicationUpdateManyWithoutProcessedByNestedInput = {
    create?: XOR<AdmissionApplicationCreateWithoutProcessedByInput, AdmissionApplicationUncheckedCreateWithoutProcessedByInput> | AdmissionApplicationCreateWithoutProcessedByInput[] | AdmissionApplicationUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutProcessedByInput | AdmissionApplicationCreateOrConnectWithoutProcessedByInput[]
    upsert?: AdmissionApplicationUpsertWithWhereUniqueWithoutProcessedByInput | AdmissionApplicationUpsertWithWhereUniqueWithoutProcessedByInput[]
    createMany?: AdmissionApplicationCreateManyProcessedByInputEnvelope
    set?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    disconnect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    delete?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    update?: AdmissionApplicationUpdateWithWhereUniqueWithoutProcessedByInput | AdmissionApplicationUpdateWithWhereUniqueWithoutProcessedByInput[]
    updateMany?: AdmissionApplicationUpdateManyWithWhereWithoutProcessedByInput | AdmissionApplicationUpdateManyWithWhereWithoutProcessedByInput[]
    deleteMany?: AdmissionApplicationScalarWhereInput | AdmissionApplicationScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StaffUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type AdmissionApplicationUncheckedUpdateManyWithoutProcessedByNestedInput = {
    create?: XOR<AdmissionApplicationCreateWithoutProcessedByInput, AdmissionApplicationUncheckedCreateWithoutProcessedByInput> | AdmissionApplicationCreateWithoutProcessedByInput[] | AdmissionApplicationUncheckedCreateWithoutProcessedByInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutProcessedByInput | AdmissionApplicationCreateOrConnectWithoutProcessedByInput[]
    upsert?: AdmissionApplicationUpsertWithWhereUniqueWithoutProcessedByInput | AdmissionApplicationUpsertWithWhereUniqueWithoutProcessedByInput[]
    createMany?: AdmissionApplicationCreateManyProcessedByInputEnvelope
    set?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    disconnect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    delete?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    update?: AdmissionApplicationUpdateWithWhereUniqueWithoutProcessedByInput | AdmissionApplicationUpdateWithWhereUniqueWithoutProcessedByInput[]
    updateMany?: AdmissionApplicationUpdateManyWithWhereWithoutProcessedByInput | AdmissionApplicationUpdateManyWithWhereWithoutProcessedByInput[]
    deleteMany?: AdmissionApplicationScalarWhereInput | AdmissionApplicationScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StaffUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type DepartmentCampusCreateNestedManyWithoutCampusInput = {
    create?: XOR<DepartmentCampusCreateWithoutCampusInput, DepartmentCampusUncheckedCreateWithoutCampusInput> | DepartmentCampusCreateWithoutCampusInput[] | DepartmentCampusUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutCampusInput | DepartmentCampusCreateOrConnectWithoutCampusInput[]
    createMany?: DepartmentCampusCreateManyCampusInputEnvelope
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutCampusInput = {
    create?: XOR<CourseCreateWithoutCampusInput, CourseUncheckedCreateWithoutCampusInput> | CourseCreateWithoutCampusInput[] | CourseUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCampusInput | CourseCreateOrConnectWithoutCampusInput[]
    createMany?: CourseCreateManyCampusInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutCampusInput = {
    create?: XOR<StudentCreateWithoutCampusInput, StudentUncheckedCreateWithoutCampusInput> | StudentCreateWithoutCampusInput[] | StudentUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCampusInput | StudentCreateOrConnectWithoutCampusInput[]
    createMany?: StudentCreateManyCampusInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type DepartmentCampusUncheckedCreateNestedManyWithoutCampusInput = {
    create?: XOR<DepartmentCampusCreateWithoutCampusInput, DepartmentCampusUncheckedCreateWithoutCampusInput> | DepartmentCampusCreateWithoutCampusInput[] | DepartmentCampusUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutCampusInput | DepartmentCampusCreateOrConnectWithoutCampusInput[]
    createMany?: DepartmentCampusCreateManyCampusInputEnvelope
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCampusInput = {
    create?: XOR<CourseCreateWithoutCampusInput, CourseUncheckedCreateWithoutCampusInput> | CourseCreateWithoutCampusInput[] | CourseUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCampusInput | CourseCreateOrConnectWithoutCampusInput[]
    createMany?: CourseCreateManyCampusInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutCampusInput = {
    create?: XOR<StudentCreateWithoutCampusInput, StudentUncheckedCreateWithoutCampusInput> | StudentCreateWithoutCampusInput[] | StudentUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCampusInput | StudentCreateOrConnectWithoutCampusInput[]
    createMany?: StudentCreateManyCampusInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumCampusCodeFieldUpdateOperationsInput = {
    set?: $Enums.CampusCode
  }

  export type DepartmentCampusUpdateManyWithoutCampusNestedInput = {
    create?: XOR<DepartmentCampusCreateWithoutCampusInput, DepartmentCampusUncheckedCreateWithoutCampusInput> | DepartmentCampusCreateWithoutCampusInput[] | DepartmentCampusUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutCampusInput | DepartmentCampusCreateOrConnectWithoutCampusInput[]
    upsert?: DepartmentCampusUpsertWithWhereUniqueWithoutCampusInput | DepartmentCampusUpsertWithWhereUniqueWithoutCampusInput[]
    createMany?: DepartmentCampusCreateManyCampusInputEnvelope
    set?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    disconnect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    delete?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    update?: DepartmentCampusUpdateWithWhereUniqueWithoutCampusInput | DepartmentCampusUpdateWithWhereUniqueWithoutCampusInput[]
    updateMany?: DepartmentCampusUpdateManyWithWhereWithoutCampusInput | DepartmentCampusUpdateManyWithWhereWithoutCampusInput[]
    deleteMany?: DepartmentCampusScalarWhereInput | DepartmentCampusScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutCampusNestedInput = {
    create?: XOR<CourseCreateWithoutCampusInput, CourseUncheckedCreateWithoutCampusInput> | CourseCreateWithoutCampusInput[] | CourseUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCampusInput | CourseCreateOrConnectWithoutCampusInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCampusInput | CourseUpsertWithWhereUniqueWithoutCampusInput[]
    createMany?: CourseCreateManyCampusInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCampusInput | CourseUpdateWithWhereUniqueWithoutCampusInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCampusInput | CourseUpdateManyWithWhereWithoutCampusInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutCampusNestedInput = {
    create?: XOR<StudentCreateWithoutCampusInput, StudentUncheckedCreateWithoutCampusInput> | StudentCreateWithoutCampusInput[] | StudentUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCampusInput | StudentCreateOrConnectWithoutCampusInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCampusInput | StudentUpsertWithWhereUniqueWithoutCampusInput[]
    createMany?: StudentCreateManyCampusInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCampusInput | StudentUpdateWithWhereUniqueWithoutCampusInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCampusInput | StudentUpdateManyWithWhereWithoutCampusInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DepartmentCampusUncheckedUpdateManyWithoutCampusNestedInput = {
    create?: XOR<DepartmentCampusCreateWithoutCampusInput, DepartmentCampusUncheckedCreateWithoutCampusInput> | DepartmentCampusCreateWithoutCampusInput[] | DepartmentCampusUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutCampusInput | DepartmentCampusCreateOrConnectWithoutCampusInput[]
    upsert?: DepartmentCampusUpsertWithWhereUniqueWithoutCampusInput | DepartmentCampusUpsertWithWhereUniqueWithoutCampusInput[]
    createMany?: DepartmentCampusCreateManyCampusInputEnvelope
    set?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    disconnect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    delete?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    update?: DepartmentCampusUpdateWithWhereUniqueWithoutCampusInput | DepartmentCampusUpdateWithWhereUniqueWithoutCampusInput[]
    updateMany?: DepartmentCampusUpdateManyWithWhereWithoutCampusInput | DepartmentCampusUpdateManyWithWhereWithoutCampusInput[]
    deleteMany?: DepartmentCampusScalarWhereInput | DepartmentCampusScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCampusNestedInput = {
    create?: XOR<CourseCreateWithoutCampusInput, CourseUncheckedCreateWithoutCampusInput> | CourseCreateWithoutCampusInput[] | CourseUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCampusInput | CourseCreateOrConnectWithoutCampusInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCampusInput | CourseUpsertWithWhereUniqueWithoutCampusInput[]
    createMany?: CourseCreateManyCampusInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCampusInput | CourseUpdateWithWhereUniqueWithoutCampusInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCampusInput | CourseUpdateManyWithWhereWithoutCampusInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutCampusNestedInput = {
    create?: XOR<StudentCreateWithoutCampusInput, StudentUncheckedCreateWithoutCampusInput> | StudentCreateWithoutCampusInput[] | StudentUncheckedCreateWithoutCampusInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCampusInput | StudentCreateOrConnectWithoutCampusInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCampusInput | StudentUpsertWithWhereUniqueWithoutCampusInput[]
    createMany?: StudentCreateManyCampusInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCampusInput | StudentUpdateWithWhereUniqueWithoutCampusInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCampusInput | StudentUpdateManyWithWhereWithoutCampusInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DepartmentCampusCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DepartmentCampusCreateWithoutDepartmentInput, DepartmentCampusUncheckedCreateWithoutDepartmentInput> | DepartmentCampusCreateWithoutDepartmentInput[] | DepartmentCampusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutDepartmentInput | DepartmentCampusCreateOrConnectWithoutDepartmentInput[]
    createMany?: DepartmentCampusCreateManyDepartmentInputEnvelope
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type DepartmentCampusUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DepartmentCampusCreateWithoutDepartmentInput, DepartmentCampusUncheckedCreateWithoutDepartmentInput> | DepartmentCampusCreateWithoutDepartmentInput[] | DepartmentCampusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutDepartmentInput | DepartmentCampusCreateOrConnectWithoutDepartmentInput[]
    createMany?: DepartmentCampusCreateManyDepartmentInputEnvelope
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type DepartmentCampusUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DepartmentCampusCreateWithoutDepartmentInput, DepartmentCampusUncheckedCreateWithoutDepartmentInput> | DepartmentCampusCreateWithoutDepartmentInput[] | DepartmentCampusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutDepartmentInput | DepartmentCampusCreateOrConnectWithoutDepartmentInput[]
    upsert?: DepartmentCampusUpsertWithWhereUniqueWithoutDepartmentInput | DepartmentCampusUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DepartmentCampusCreateManyDepartmentInputEnvelope
    set?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    disconnect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    delete?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    update?: DepartmentCampusUpdateWithWhereUniqueWithoutDepartmentInput | DepartmentCampusUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DepartmentCampusUpdateManyWithWhereWithoutDepartmentInput | DepartmentCampusUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DepartmentCampusScalarWhereInput | DepartmentCampusScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type DepartmentCampusUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DepartmentCampusCreateWithoutDepartmentInput, DepartmentCampusUncheckedCreateWithoutDepartmentInput> | DepartmentCampusCreateWithoutDepartmentInput[] | DepartmentCampusUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentCampusCreateOrConnectWithoutDepartmentInput | DepartmentCampusCreateOrConnectWithoutDepartmentInput[]
    upsert?: DepartmentCampusUpsertWithWhereUniqueWithoutDepartmentInput | DepartmentCampusUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DepartmentCampusCreateManyDepartmentInputEnvelope
    set?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    disconnect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    delete?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    connect?: DepartmentCampusWhereUniqueInput | DepartmentCampusWhereUniqueInput[]
    update?: DepartmentCampusUpdateWithWhereUniqueWithoutDepartmentInput | DepartmentCampusUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DepartmentCampusUpdateManyWithWhereWithoutDepartmentInput | DepartmentCampusUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DepartmentCampusScalarWhereInput | DepartmentCampusScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput> | CourseCreateWithoutDepartmentInput[] | CourseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutDepartmentInput | CourseCreateOrConnectWithoutDepartmentInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutDepartmentInput | CourseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: CourseCreateManyDepartmentInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutDepartmentInput | CourseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutDepartmentInput | CourseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutCampusesInput = {
    create?: XOR<DepartmentCreateWithoutCampusesInput, DepartmentUncheckedCreateWithoutCampusesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCampusesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type CampusCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<CampusCreateWithoutDepartmentsInput, CampusUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: CampusCreateOrConnectWithoutDepartmentsInput
    connect?: CampusWhereUniqueInput
  }

  export type DepartmentUpdateOneRequiredWithoutCampusesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCampusesInput, DepartmentUncheckedCreateWithoutCampusesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCampusesInput
    upsert?: DepartmentUpsertWithoutCampusesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCampusesInput, DepartmentUpdateWithoutCampusesInput>, DepartmentUncheckedUpdateWithoutCampusesInput>
  }

  export type CampusUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<CampusCreateWithoutDepartmentsInput, CampusUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: CampusCreateOrConnectWithoutDepartmentsInput
    upsert?: CampusUpsertWithoutDepartmentsInput
    connect?: CampusWhereUniqueInput
    update?: XOR<XOR<CampusUpdateToOneWithWhereWithoutDepartmentsInput, CampusUpdateWithoutDepartmentsInput>, CampusUncheckedUpdateWithoutDepartmentsInput>
  }

  export type DepartmentCreateNestedOneWithoutCoursesInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type CampusCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CampusCreateWithoutCoursesInput, CampusUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CampusCreateOrConnectWithoutCoursesInput
    connect?: CampusWhereUniqueInput
  }

  export type AdmissionApplicationCreateNestedManyWithoutCourseInput = {
    create?: XOR<AdmissionApplicationCreateWithoutCourseInput, AdmissionApplicationUncheckedCreateWithoutCourseInput> | AdmissionApplicationCreateWithoutCourseInput[] | AdmissionApplicationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutCourseInput | AdmissionApplicationCreateOrConnectWithoutCourseInput[]
    createMany?: AdmissionApplicationCreateManyCourseInputEnvelope
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutCourseInput = {
    create?: XOR<StudentCreateWithoutCourseInput, StudentUncheckedCreateWithoutCourseInput> | StudentCreateWithoutCourseInput[] | StudentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCourseInput | StudentCreateOrConnectWithoutCourseInput[]
    createMany?: StudentCreateManyCourseInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type AdmissionApplicationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<AdmissionApplicationCreateWithoutCourseInput, AdmissionApplicationUncheckedCreateWithoutCourseInput> | AdmissionApplicationCreateWithoutCourseInput[] | AdmissionApplicationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutCourseInput | AdmissionApplicationCreateOrConnectWithoutCourseInput[]
    createMany?: AdmissionApplicationCreateManyCourseInputEnvelope
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<StudentCreateWithoutCourseInput, StudentUncheckedCreateWithoutCourseInput> | StudentCreateWithoutCourseInput[] | StudentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCourseInput | StudentCreateOrConnectWithoutCourseInput[]
    createMany?: StudentCreateManyCourseInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumIntakeStatusFieldUpdateOperationsInput = {
    set?: $Enums.IntakeStatus
  }

  export type DepartmentUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutCoursesInput
    upsert?: DepartmentUpsertWithoutCoursesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutCoursesInput, DepartmentUpdateWithoutCoursesInput>, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type CampusUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<CampusCreateWithoutCoursesInput, CampusUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CampusCreateOrConnectWithoutCoursesInput
    upsert?: CampusUpsertWithoutCoursesInput
    disconnect?: CampusWhereInput | boolean
    delete?: CampusWhereInput | boolean
    connect?: CampusWhereUniqueInput
    update?: XOR<XOR<CampusUpdateToOneWithWhereWithoutCoursesInput, CampusUpdateWithoutCoursesInput>, CampusUncheckedUpdateWithoutCoursesInput>
  }

  export type AdmissionApplicationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AdmissionApplicationCreateWithoutCourseInput, AdmissionApplicationUncheckedCreateWithoutCourseInput> | AdmissionApplicationCreateWithoutCourseInput[] | AdmissionApplicationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutCourseInput | AdmissionApplicationCreateOrConnectWithoutCourseInput[]
    upsert?: AdmissionApplicationUpsertWithWhereUniqueWithoutCourseInput | AdmissionApplicationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AdmissionApplicationCreateManyCourseInputEnvelope
    set?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    disconnect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    delete?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    update?: AdmissionApplicationUpdateWithWhereUniqueWithoutCourseInput | AdmissionApplicationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AdmissionApplicationUpdateManyWithWhereWithoutCourseInput | AdmissionApplicationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AdmissionApplicationScalarWhereInput | AdmissionApplicationScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<StudentCreateWithoutCourseInput, StudentUncheckedCreateWithoutCourseInput> | StudentCreateWithoutCourseInput[] | StudentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCourseInput | StudentCreateOrConnectWithoutCourseInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCourseInput | StudentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: StudentCreateManyCourseInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCourseInput | StudentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCourseInput | StudentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type AdmissionApplicationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AdmissionApplicationCreateWithoutCourseInput, AdmissionApplicationUncheckedCreateWithoutCourseInput> | AdmissionApplicationCreateWithoutCourseInput[] | AdmissionApplicationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutCourseInput | AdmissionApplicationCreateOrConnectWithoutCourseInput[]
    upsert?: AdmissionApplicationUpsertWithWhereUniqueWithoutCourseInput | AdmissionApplicationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AdmissionApplicationCreateManyCourseInputEnvelope
    set?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    disconnect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    delete?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    connect?: AdmissionApplicationWhereUniqueInput | AdmissionApplicationWhereUniqueInput[]
    update?: AdmissionApplicationUpdateWithWhereUniqueWithoutCourseInput | AdmissionApplicationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AdmissionApplicationUpdateManyWithWhereWithoutCourseInput | AdmissionApplicationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AdmissionApplicationScalarWhereInput | AdmissionApplicationScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<StudentCreateWithoutCourseInput, StudentUncheckedCreateWithoutCourseInput> | StudentCreateWithoutCourseInput[] | StudentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCourseInput | StudentCreateOrConnectWithoutCourseInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCourseInput | StudentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: StudentCreateManyCourseInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCourseInput | StudentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCourseInput | StudentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CourseCreateWithoutApplicationsInput, CourseUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutApplicationsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<UserCreateWithoutAdmissionsInput, UserUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutApplicationInput = {
    create?: XOR<StudentCreateWithoutApplicationInput, StudentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<StudentCreateWithoutApplicationInput, StudentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type EnumModeOfStudyFieldUpdateOperationsInput = {
    set?: $Enums.ModeOfStudy
  }

  export type EnumIntakeFieldUpdateOperationsInput = {
    set?: $Enums.Intake
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CourseCreateWithoutApplicationsInput, CourseUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutApplicationsInput
    upsert?: CourseUpsertWithoutApplicationsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutApplicationsInput, CourseUpdateWithoutApplicationsInput>, CourseUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneWithoutAdmissionsNestedInput = {
    create?: XOR<UserCreateWithoutAdmissionsInput, UserUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdmissionsInput
    upsert?: UserUpsertWithoutAdmissionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdmissionsInput, UserUpdateWithoutAdmissionsInput>, UserUncheckedUpdateWithoutAdmissionsInput>
  }

  export type StudentUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<StudentCreateWithoutApplicationInput, StudentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationInput
    upsert?: StudentUpsertWithoutApplicationInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutApplicationInput, StudentUpdateWithoutApplicationInput>, StudentUncheckedUpdateWithoutApplicationInput>
  }

  export type StudentUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<StudentCreateWithoutApplicationInput, StudentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationInput
    upsert?: StudentUpsertWithoutApplicationInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutApplicationInput, StudentUpdateWithoutApplicationInput>, StudentUncheckedUpdateWithoutApplicationInput>
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type AdmissionApplicationCreateNestedOneWithoutStudentInput = {
    create?: XOR<AdmissionApplicationCreateWithoutStudentInput, AdmissionApplicationUncheckedCreateWithoutStudentInput>
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutStudentInput
    connect?: AdmissionApplicationWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutStudentsInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput
    connect?: CourseWhereUniqueInput
  }

  export type CampusCreateNestedOneWithoutStudentsInput = {
    create?: XOR<CampusCreateWithoutStudentsInput, CampusUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CampusCreateOrConnectWithoutStudentsInput
    connect?: CampusWhereUniqueInput
  }

  export type UserUpdateOneWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type AdmissionApplicationUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<AdmissionApplicationCreateWithoutStudentInput, AdmissionApplicationUncheckedCreateWithoutStudentInput>
    connectOrCreate?: AdmissionApplicationCreateOrConnectWithoutStudentInput
    upsert?: AdmissionApplicationUpsertWithoutStudentInput
    connect?: AdmissionApplicationWhereUniqueInput
    update?: XOR<XOR<AdmissionApplicationUpdateToOneWithWhereWithoutStudentInput, AdmissionApplicationUpdateWithoutStudentInput>, AdmissionApplicationUncheckedUpdateWithoutStudentInput>
  }

  export type CourseUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput
    upsert?: CourseUpsertWithoutStudentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutStudentsInput, CourseUpdateWithoutStudentsInput>, CourseUncheckedUpdateWithoutStudentsInput>
  }

  export type CampusUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<CampusCreateWithoutStudentsInput, CampusUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CampusCreateOrConnectWithoutStudentsInput
    upsert?: CampusUpsertWithoutStudentsInput
    connect?: CampusWhereUniqueInput
    update?: XOR<XOR<CampusUpdateToOneWithWhereWithoutStudentsInput, CampusUpdateWithoutStudentsInput>, CampusUncheckedUpdateWithoutStudentsInput>
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type EnumGallerySpanFieldUpdateOperationsInput = {
    set?: $Enums.GallerySpan
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumCampusCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampusCode | EnumCampusCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampusCodeFilter<$PrismaModel> | $Enums.CampusCode
  }

  export type NestedEnumCampusCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampusCode | EnumCampusCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampusCode[] | ListEnumCampusCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCampusCodeWithAggregatesFilter<$PrismaModel> | $Enums.CampusCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampusCodeFilter<$PrismaModel>
    _max?: NestedEnumCampusCodeFilter<$PrismaModel>
  }

  export type NestedEnumIntakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusFilter<$PrismaModel> | $Enums.IntakeStatus
  }

  export type NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IntakeStatus[] | ListEnumIntakeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel> | $Enums.IntakeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntakeStatusFilter<$PrismaModel>
    _max?: NestedEnumIntakeStatusFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumModeOfStudyFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeOfStudy | EnumModeOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumModeOfStudyFilter<$PrismaModel> | $Enums.ModeOfStudy
  }

  export type NestedEnumIntakeFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel>
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeFilter<$PrismaModel> | $Enums.Intake
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumModeOfStudyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModeOfStudy | EnumModeOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModeOfStudy[] | ListEnumModeOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumModeOfStudyWithAggregatesFilter<$PrismaModel> | $Enums.ModeOfStudy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModeOfStudyFilter<$PrismaModel>
    _max?: NestedEnumModeOfStudyFilter<$PrismaModel>
  }

  export type NestedEnumIntakeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Intake | EnumIntakeFieldRefInput<$PrismaModel>
    in?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Intake[] | ListEnumIntakeFieldRefInput<$PrismaModel>
    not?: NestedEnumIntakeWithAggregatesFilter<$PrismaModel> | $Enums.Intake
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIntakeFilter<$PrismaModel>
    _max?: NestedEnumIntakeFilter<$PrismaModel>
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

  export type NestedEnumGallerySpanFilter<$PrismaModel = never> = {
    equals?: $Enums.GallerySpan | EnumGallerySpanFieldRefInput<$PrismaModel>
    in?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    notIn?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    not?: NestedEnumGallerySpanFilter<$PrismaModel> | $Enums.GallerySpan
  }

  export type NestedEnumGallerySpanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GallerySpan | EnumGallerySpanFieldRefInput<$PrismaModel>
    in?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    notIn?: $Enums.GallerySpan[] | ListEnumGallerySpanFieldRefInput<$PrismaModel>
    not?: NestedEnumGallerySpanWithAggregatesFilter<$PrismaModel> | $Enums.GallerySpan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGallerySpanFilter<$PrismaModel>
    _max?: NestedEnumGallerySpanFilter<$PrismaModel>
  }

  export type AdmissionApplicationCreateWithoutProcessedByInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutApplicationsInput
    student?: StudentCreateNestedOneWithoutApplicationInput
  }

  export type AdmissionApplicationUncheckedCreateWithoutProcessedByInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    courseId: string
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type AdmissionApplicationCreateOrConnectWithoutProcessedByInput = {
    where: AdmissionApplicationWhereUniqueInput
    create: XOR<AdmissionApplicationCreateWithoutProcessedByInput, AdmissionApplicationUncheckedCreateWithoutProcessedByInput>
  }

  export type AdmissionApplicationCreateManyProcessedByInputEnvelope = {
    data: AdmissionApplicationCreateManyProcessedByInput | AdmissionApplicationCreateManyProcessedByInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    admissionNumber: string
    createdAt?: Date | string
    application: AdmissionApplicationCreateNestedOneWithoutStudentInput
    course: CourseCreateNestedOneWithoutStudentsInput
    campus: CampusCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    admissionNumber: string
    applicationId: string
    courseId: string
    campusId: string
    createdAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StaffCreateWithoutUserInput = {
    id?: string
    employeeNo: string
    createdAt?: Date | string
  }

  export type StaffUncheckedCreateWithoutUserInput = {
    id?: string
    employeeNo: string
    createdAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutUserInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
  }

  export type AdmissionApplicationUpsertWithWhereUniqueWithoutProcessedByInput = {
    where: AdmissionApplicationWhereUniqueInput
    update: XOR<AdmissionApplicationUpdateWithoutProcessedByInput, AdmissionApplicationUncheckedUpdateWithoutProcessedByInput>
    create: XOR<AdmissionApplicationCreateWithoutProcessedByInput, AdmissionApplicationUncheckedCreateWithoutProcessedByInput>
  }

  export type AdmissionApplicationUpdateWithWhereUniqueWithoutProcessedByInput = {
    where: AdmissionApplicationWhereUniqueInput
    data: XOR<AdmissionApplicationUpdateWithoutProcessedByInput, AdmissionApplicationUncheckedUpdateWithoutProcessedByInput>
  }

  export type AdmissionApplicationUpdateManyWithWhereWithoutProcessedByInput = {
    where: AdmissionApplicationScalarWhereInput
    data: XOR<AdmissionApplicationUpdateManyMutationInput, AdmissionApplicationUncheckedUpdateManyWithoutProcessedByInput>
  }

  export type AdmissionApplicationScalarWhereInput = {
    AND?: AdmissionApplicationScalarWhereInput | AdmissionApplicationScalarWhereInput[]
    OR?: AdmissionApplicationScalarWhereInput[]
    NOT?: AdmissionApplicationScalarWhereInput | AdmissionApplicationScalarWhereInput[]
    id?: StringFilter<"AdmissionApplication"> | string
    applicationNumber?: StringFilter<"AdmissionApplication"> | string
    firstName?: StringFilter<"AdmissionApplication"> | string
    middleName?: StringNullableFilter<"AdmissionApplication"> | string | null
    lastName?: StringFilter<"AdmissionApplication"> | string
    email?: StringFilter<"AdmissionApplication"> | string
    phone?: StringFilter<"AdmissionApplication"> | string
    gender?: EnumGenderFilter<"AdmissionApplication"> | $Enums.Gender
    dateOfBirth?: DateTimeFilter<"AdmissionApplication"> | Date | string
    nationality?: StringFilter<"AdmissionApplication"> | string
    county?: StringFilter<"AdmissionApplication"> | string
    subCounty?: StringNullableFilter<"AdmissionApplication"> | string | null
    postalAddress?: StringFilter<"AdmissionApplication"> | string
    guardianName?: StringNullableFilter<"AdmissionApplication"> | string | null
    guardianPhone?: StringNullableFilter<"AdmissionApplication"> | string | null
    kcseIndexNumber?: StringNullableFilter<"AdmissionApplication"> | string | null
    kcseGrade?: StringNullableFilter<"AdmissionApplication"> | string | null
    nationalId?: StringNullableFilter<"AdmissionApplication"> | string | null
    passportNumber?: StringNullableFilter<"AdmissionApplication"> | string | null
    passportPhoto?: StringNullableFilter<"AdmissionApplication"> | string | null
    idCopy?: StringNullableFilter<"AdmissionApplication"> | string | null
    certificateFile?: StringNullableFilter<"AdmissionApplication"> | string | null
    status?: EnumApplicationStatusFilter<"AdmissionApplication"> | $Enums.ApplicationStatus
    courseId?: StringFilter<"AdmissionApplication"> | string
    processedById?: StringNullableFilter<"AdmissionApplication"> | string | null
    modeOfStudy?: EnumModeOfStudyFilter<"AdmissionApplication"> | $Enums.ModeOfStudy
    intake?: EnumIntakeFilter<"AdmissionApplication"> | $Enums.Intake
    submittedAt?: DateTimeNullableFilter<"AdmissionApplication"> | Date | string | null
    createdAt?: DateTimeFilter<"AdmissionApplication"> | Date | string
    updatedAt?: DateTimeFilter<"AdmissionApplication"> | Date | string
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: AdmissionApplicationUpdateOneRequiredWithoutStudentNestedInput
    course?: CourseUpdateOneRequiredWithoutStudentsNestedInput
    campus?: CampusUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpsertWithoutUserInput = {
    update: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutUserInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
  }

  export type StaffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeNo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCampusCreateWithoutCampusInput = {
    department: DepartmentCreateNestedOneWithoutCampusesInput
  }

  export type DepartmentCampusUncheckedCreateWithoutCampusInput = {
    departmentId: string
  }

  export type DepartmentCampusCreateOrConnectWithoutCampusInput = {
    where: DepartmentCampusWhereUniqueInput
    create: XOR<DepartmentCampusCreateWithoutCampusInput, DepartmentCampusUncheckedCreateWithoutCampusInput>
  }

  export type DepartmentCampusCreateManyCampusInputEnvelope = {
    data: DepartmentCampusCreateManyCampusInput | DepartmentCampusCreateManyCampusInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutCampusInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    applications?: AdmissionApplicationCreateNestedManyWithoutCourseInput
    students?: StudentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCampusInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: AdmissionApplicationUncheckedCreateNestedManyWithoutCourseInput
    students?: StudentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCampusInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCampusInput, CourseUncheckedCreateWithoutCampusInput>
  }

  export type CourseCreateManyCampusInputEnvelope = {
    data: CourseCreateManyCampusInput | CourseCreateManyCampusInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutCampusInput = {
    id?: string
    admissionNumber: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutStudentInput
    application: AdmissionApplicationCreateNestedOneWithoutStudentInput
    course: CourseCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutCampusInput = {
    id?: string
    admissionNumber: string
    userId?: string | null
    applicationId: string
    courseId: string
    createdAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutCampusInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCampusInput, StudentUncheckedCreateWithoutCampusInput>
  }

  export type StudentCreateManyCampusInputEnvelope = {
    data: StudentCreateManyCampusInput | StudentCreateManyCampusInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCampusUpsertWithWhereUniqueWithoutCampusInput = {
    where: DepartmentCampusWhereUniqueInput
    update: XOR<DepartmentCampusUpdateWithoutCampusInput, DepartmentCampusUncheckedUpdateWithoutCampusInput>
    create: XOR<DepartmentCampusCreateWithoutCampusInput, DepartmentCampusUncheckedCreateWithoutCampusInput>
  }

  export type DepartmentCampusUpdateWithWhereUniqueWithoutCampusInput = {
    where: DepartmentCampusWhereUniqueInput
    data: XOR<DepartmentCampusUpdateWithoutCampusInput, DepartmentCampusUncheckedUpdateWithoutCampusInput>
  }

  export type DepartmentCampusUpdateManyWithWhereWithoutCampusInput = {
    where: DepartmentCampusScalarWhereInput
    data: XOR<DepartmentCampusUpdateManyMutationInput, DepartmentCampusUncheckedUpdateManyWithoutCampusInput>
  }

  export type DepartmentCampusScalarWhereInput = {
    AND?: DepartmentCampusScalarWhereInput | DepartmentCampusScalarWhereInput[]
    OR?: DepartmentCampusScalarWhereInput[]
    NOT?: DepartmentCampusScalarWhereInput | DepartmentCampusScalarWhereInput[]
    departmentId?: StringFilter<"DepartmentCampus"> | string
    campusId?: StringFilter<"DepartmentCampus"> | string
  }

  export type CourseUpsertWithWhereUniqueWithoutCampusInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCampusInput, CourseUncheckedUpdateWithoutCampusInput>
    create: XOR<CourseCreateWithoutCampusInput, CourseUncheckedCreateWithoutCampusInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCampusInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCampusInput, CourseUncheckedUpdateWithoutCampusInput>
  }

  export type CourseUpdateManyWithWhereWithoutCampusInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCampusInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    slug?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    duration?: StringFilter<"Course"> | string
    qualification?: StringNullableFilter<"Course"> | string | null
    requirements?: StringNullableFilter<"Course"> | string | null
    intakeStatus?: EnumIntakeStatusFilter<"Course"> | $Enums.IntakeStatus
    campusLabel?: StringFilter<"Course"> | string
    feePerSemester?: StringNullableFilter<"Course"> | string | null
    featured?: BoolFilter<"Course"> | boolean
    isActive?: BoolFilter<"Course"> | boolean
    departmentId?: StringFilter<"Course"> | string
    campusId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutCampusInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutCampusInput, StudentUncheckedUpdateWithoutCampusInput>
    create: XOR<StudentCreateWithoutCampusInput, StudentUncheckedCreateWithoutCampusInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutCampusInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutCampusInput, StudentUncheckedUpdateWithoutCampusInput>
  }

  export type StudentUpdateManyWithWhereWithoutCampusInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutCampusInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    admissionNumber?: StringFilter<"Student"> | string
    userId?: StringNullableFilter<"Student"> | string | null
    applicationId?: StringFilter<"Student"> | string
    courseId?: StringFilter<"Student"> | string
    campusId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type DepartmentCampusCreateWithoutDepartmentInput = {
    campus: CampusCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentCampusUncheckedCreateWithoutDepartmentInput = {
    campusId: string
  }

  export type DepartmentCampusCreateOrConnectWithoutDepartmentInput = {
    where: DepartmentCampusWhereUniqueInput
    create: XOR<DepartmentCampusCreateWithoutDepartmentInput, DepartmentCampusUncheckedCreateWithoutDepartmentInput>
  }

  export type DepartmentCampusCreateManyDepartmentInputEnvelope = {
    data: DepartmentCampusCreateManyDepartmentInput | DepartmentCampusCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutDepartmentInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campus?: CampusCreateNestedOneWithoutCoursesInput
    applications?: AdmissionApplicationCreateNestedManyWithoutCourseInput
    students?: StudentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    campusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: AdmissionApplicationUncheckedCreateNestedManyWithoutCourseInput
    students?: StudentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseCreateManyDepartmentInputEnvelope = {
    data: CourseCreateManyDepartmentInput | CourseCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCampusUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: DepartmentCampusWhereUniqueInput
    update: XOR<DepartmentCampusUpdateWithoutDepartmentInput, DepartmentCampusUncheckedUpdateWithoutDepartmentInput>
    create: XOR<DepartmentCampusCreateWithoutDepartmentInput, DepartmentCampusUncheckedCreateWithoutDepartmentInput>
  }

  export type DepartmentCampusUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: DepartmentCampusWhereUniqueInput
    data: XOR<DepartmentCampusUpdateWithoutDepartmentInput, DepartmentCampusUncheckedUpdateWithoutDepartmentInput>
  }

  export type DepartmentCampusUpdateManyWithWhereWithoutDepartmentInput = {
    where: DepartmentCampusScalarWhereInput
    data: XOR<DepartmentCampusUpdateManyMutationInput, DepartmentCampusUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CourseUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CourseCreateWithoutDepartmentInput, CourseUncheckedCreateWithoutDepartmentInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutDepartmentInput, CourseUncheckedUpdateWithoutDepartmentInput>
  }

  export type CourseUpdateManyWithWhereWithoutDepartmentInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DepartmentCreateWithoutCampusesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCampusesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCampusesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCampusesInput, DepartmentUncheckedCreateWithoutCampusesInput>
  }

  export type CampusCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCampusInput
    students?: StudentCreateNestedManyWithoutCampusInput
  }

  export type CampusUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCampusInput
    students?: StudentUncheckedCreateNestedManyWithoutCampusInput
  }

  export type CampusCreateOrConnectWithoutDepartmentsInput = {
    where: CampusWhereUniqueInput
    create: XOR<CampusCreateWithoutDepartmentsInput, CampusUncheckedCreateWithoutDepartmentsInput>
  }

  export type DepartmentUpsertWithoutCampusesInput = {
    update: XOR<DepartmentUpdateWithoutCampusesInput, DepartmentUncheckedUpdateWithoutCampusesInput>
    create: XOR<DepartmentCreateWithoutCampusesInput, DepartmentUncheckedCreateWithoutCampusesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCampusesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCampusesInput, DepartmentUncheckedUpdateWithoutCampusesInput>
  }

  export type DepartmentUpdateWithoutCampusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCampusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type CampusUpsertWithoutDepartmentsInput = {
    update: XOR<CampusUpdateWithoutDepartmentsInput, CampusUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<CampusCreateWithoutDepartmentsInput, CampusUncheckedCreateWithoutDepartmentsInput>
    where?: CampusWhereInput
  }

  export type CampusUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: CampusWhereInput
    data: XOR<CampusUpdateWithoutDepartmentsInput, CampusUncheckedUpdateWithoutDepartmentsInput>
  }

  export type CampusUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCampusNestedInput
    students?: StudentUpdateManyWithoutCampusNestedInput
  }

  export type CampusUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCampusNestedInput
    students?: StudentUncheckedUpdateManyWithoutCampusNestedInput
  }

  export type DepartmentCreateWithoutCoursesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campuses?: DepartmentCampusCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campuses?: DepartmentCampusUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCoursesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
  }

  export type CampusCreateWithoutCoursesInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCampusCreateNestedManyWithoutCampusInput
    students?: StudentCreateNestedManyWithoutCampusInput
  }

  export type CampusUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCampusUncheckedCreateNestedManyWithoutCampusInput
    students?: StudentUncheckedCreateNestedManyWithoutCampusInput
  }

  export type CampusCreateOrConnectWithoutCoursesInput = {
    where: CampusWhereUniqueInput
    create: XOR<CampusCreateWithoutCoursesInput, CampusUncheckedCreateWithoutCoursesInput>
  }

  export type AdmissionApplicationCreateWithoutCourseInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processedBy?: UserCreateNestedOneWithoutAdmissionsInput
    student?: StudentCreateNestedOneWithoutApplicationInput
  }

  export type AdmissionApplicationUncheckedCreateWithoutCourseInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    processedById?: string | null
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type AdmissionApplicationCreateOrConnectWithoutCourseInput = {
    where: AdmissionApplicationWhereUniqueInput
    create: XOR<AdmissionApplicationCreateWithoutCourseInput, AdmissionApplicationUncheckedCreateWithoutCourseInput>
  }

  export type AdmissionApplicationCreateManyCourseInputEnvelope = {
    data: AdmissionApplicationCreateManyCourseInput | AdmissionApplicationCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutCourseInput = {
    id?: string
    admissionNumber: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutStudentInput
    application: AdmissionApplicationCreateNestedOneWithoutStudentInput
    campus: CampusCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutCourseInput = {
    id?: string
    admissionNumber: string
    userId?: string | null
    applicationId: string
    campusId: string
    createdAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutCourseInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCourseInput, StudentUncheckedCreateWithoutCourseInput>
  }

  export type StudentCreateManyCourseInputEnvelope = {
    data: StudentCreateManyCourseInput | StudentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutCoursesInput = {
    update: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
    create: XOR<DepartmentCreateWithoutCoursesInput, DepartmentUncheckedCreateWithoutCoursesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutCoursesInput, DepartmentUncheckedUpdateWithoutCoursesInput>
  }

  export type DepartmentUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campuses?: DepartmentCampusUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campuses?: DepartmentCampusUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type CampusUpsertWithoutCoursesInput = {
    update: XOR<CampusUpdateWithoutCoursesInput, CampusUncheckedUpdateWithoutCoursesInput>
    create: XOR<CampusCreateWithoutCoursesInput, CampusUncheckedCreateWithoutCoursesInput>
    where?: CampusWhereInput
  }

  export type CampusUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CampusWhereInput
    data: XOR<CampusUpdateWithoutCoursesInput, CampusUncheckedUpdateWithoutCoursesInput>
  }

  export type CampusUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentCampusUpdateManyWithoutCampusNestedInput
    students?: StudentUpdateManyWithoutCampusNestedInput
  }

  export type CampusUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentCampusUncheckedUpdateManyWithoutCampusNestedInput
    students?: StudentUncheckedUpdateManyWithoutCampusNestedInput
  }

  export type AdmissionApplicationUpsertWithWhereUniqueWithoutCourseInput = {
    where: AdmissionApplicationWhereUniqueInput
    update: XOR<AdmissionApplicationUpdateWithoutCourseInput, AdmissionApplicationUncheckedUpdateWithoutCourseInput>
    create: XOR<AdmissionApplicationCreateWithoutCourseInput, AdmissionApplicationUncheckedCreateWithoutCourseInput>
  }

  export type AdmissionApplicationUpdateWithWhereUniqueWithoutCourseInput = {
    where: AdmissionApplicationWhereUniqueInput
    data: XOR<AdmissionApplicationUpdateWithoutCourseInput, AdmissionApplicationUncheckedUpdateWithoutCourseInput>
  }

  export type AdmissionApplicationUpdateManyWithWhereWithoutCourseInput = {
    where: AdmissionApplicationScalarWhereInput
    data: XOR<AdmissionApplicationUpdateManyMutationInput, AdmissionApplicationUncheckedUpdateManyWithoutCourseInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutCourseInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutCourseInput, StudentUncheckedUpdateWithoutCourseInput>
    create: XOR<StudentCreateWithoutCourseInput, StudentUncheckedCreateWithoutCourseInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutCourseInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutCourseInput, StudentUncheckedUpdateWithoutCourseInput>
  }

  export type StudentUpdateManyWithWhereWithoutCourseInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutApplicationsInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    campus?: CampusCreateNestedOneWithoutCoursesInput
    students?: StudentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutApplicationsInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    departmentId: string
    campusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutApplicationsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutApplicationsInput, CourseUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdmissionsInput, UserUncheckedCreateWithoutAdmissionsInput>
  }

  export type StudentCreateWithoutApplicationInput = {
    id?: string
    admissionNumber: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutStudentInput
    course: CourseCreateNestedOneWithoutStudentsInput
    campus: CampusCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutApplicationInput = {
    id?: string
    admissionNumber: string
    userId?: string | null
    courseId: string
    campusId: string
    createdAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutApplicationInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutApplicationInput, StudentUncheckedCreateWithoutApplicationInput>
  }

  export type CourseUpsertWithoutApplicationsInput = {
    update: XOR<CourseUpdateWithoutApplicationsInput, CourseUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CourseCreateWithoutApplicationsInput, CourseUncheckedCreateWithoutApplicationsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutApplicationsInput, CourseUncheckedUpdateWithoutApplicationsInput>
  }

  export type CourseUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    campus?: CampusUpdateOneWithoutCoursesNestedInput
    students?: StudentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    campusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutAdmissionsInput = {
    update: XOR<UserUpdateWithoutAdmissionsInput, UserUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<UserCreateWithoutAdmissionsInput, UserUncheckedCreateWithoutAdmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdmissionsInput, UserUncheckedUpdateWithoutAdmissionsInput>
  }

  export type UserUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type StudentUpsertWithoutApplicationInput = {
    update: XOR<StudentUpdateWithoutApplicationInput, StudentUncheckedUpdateWithoutApplicationInput>
    create: XOR<StudentCreateWithoutApplicationInput, StudentUncheckedCreateWithoutApplicationInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutApplicationInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutApplicationInput, StudentUncheckedUpdateWithoutApplicationInput>
  }

  export type StudentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStudentNestedInput
    course?: CourseUpdateOneRequiredWithoutStudentsNestedInput
    campus?: CampusUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admissions?: AdmissionApplicationCreateNestedManyWithoutProcessedByInput
    staff?: StaffCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admissions?: AdmissionApplicationUncheckedCreateNestedManyWithoutProcessedByInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type AdmissionApplicationCreateWithoutStudentInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutApplicationsInput
    processedBy?: UserCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionApplicationUncheckedCreateWithoutStudentInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    courseId: string
    processedById?: string | null
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionApplicationCreateOrConnectWithoutStudentInput = {
    where: AdmissionApplicationWhereUniqueInput
    create: XOR<AdmissionApplicationCreateWithoutStudentInput, AdmissionApplicationUncheckedCreateWithoutStudentInput>
  }

  export type CourseCreateWithoutStudentsInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutCoursesInput
    campus?: CampusCreateNestedOneWithoutCoursesInput
    applications?: AdmissionApplicationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    departmentId: string
    campusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: AdmissionApplicationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
  }

  export type CampusCreateWithoutStudentsInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCampusCreateNestedManyWithoutCampusInput
    courses?: CourseCreateNestedManyWithoutCampusInput
  }

  export type CampusUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    code: $Enums.CampusCode
    location?: string | null
    address?: string | null
    directions?: string | null
    description?: string | null
    image?: string | null
    mapsUrl?: string | null
    mapEmbedUrl?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCampusUncheckedCreateNestedManyWithoutCampusInput
    courses?: CourseUncheckedCreateNestedManyWithoutCampusInput
  }

  export type CampusCreateOrConnectWithoutStudentsInput = {
    where: CampusWhereUniqueInput
    create: XOR<CampusCreateWithoutStudentsInput, CampusUncheckedCreateWithoutStudentsInput>
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissions?: AdmissionApplicationUpdateManyWithoutProcessedByNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissions?: AdmissionApplicationUncheckedUpdateManyWithoutProcessedByNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AdmissionApplicationUpsertWithoutStudentInput = {
    update: XOR<AdmissionApplicationUpdateWithoutStudentInput, AdmissionApplicationUncheckedUpdateWithoutStudentInput>
    create: XOR<AdmissionApplicationCreateWithoutStudentInput, AdmissionApplicationUncheckedCreateWithoutStudentInput>
    where?: AdmissionApplicationWhereInput
  }

  export type AdmissionApplicationUpdateToOneWithWhereWithoutStudentInput = {
    where?: AdmissionApplicationWhereInput
    data: XOR<AdmissionApplicationUpdateWithoutStudentInput, AdmissionApplicationUncheckedUpdateWithoutStudentInput>
  }

  export type AdmissionApplicationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutApplicationsNestedInput
    processedBy?: UserUpdateOneWithoutAdmissionsNestedInput
  }

  export type AdmissionApplicationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    courseId?: StringFieldUpdateOperationsInput | string
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpsertWithoutStudentsInput = {
    update: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutStudentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
  }

  export type CourseUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    campus?: CampusUpdateOneWithoutCoursesNestedInput
    applications?: AdmissionApplicationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    campusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: AdmissionApplicationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CampusUpsertWithoutStudentsInput = {
    update: XOR<CampusUpdateWithoutStudentsInput, CampusUncheckedUpdateWithoutStudentsInput>
    create: XOR<CampusCreateWithoutStudentsInput, CampusUncheckedCreateWithoutStudentsInput>
    where?: CampusWhereInput
  }

  export type CampusUpdateToOneWithWhereWithoutStudentsInput = {
    where?: CampusWhereInput
    data: XOR<CampusUpdateWithoutStudentsInput, CampusUncheckedUpdateWithoutStudentsInput>
  }

  export type CampusUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentCampusUpdateManyWithoutCampusNestedInput
    courses?: CourseUpdateManyWithoutCampusNestedInput
  }

  export type CampusUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: EnumCampusCodeFieldUpdateOperationsInput | $Enums.CampusCode
    location?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mapsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapEmbedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentCampusUncheckedUpdateManyWithoutCampusNestedInput
    courses?: CourseUncheckedUpdateManyWithoutCampusNestedInput
  }

  export type UserCreateWithoutStaffInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admissions?: AdmissionApplicationCreateNestedManyWithoutProcessedByInput
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admissions?: AdmissionApplicationUncheckedCreateNestedManyWithoutProcessedByInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissions?: AdmissionApplicationUpdateManyWithoutProcessedByNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissions?: AdmissionApplicationUncheckedUpdateManyWithoutProcessedByNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AdmissionApplicationCreateManyProcessedByInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    courseId: string
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdmissionApplicationUpdateWithoutProcessedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutApplicationsNestedInput
    student?: StudentUpdateOneWithoutApplicationNestedInput
  }

  export type AdmissionApplicationUncheckedUpdateWithoutProcessedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    courseId?: StringFieldUpdateOperationsInput | string
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type AdmissionApplicationUncheckedUpdateManyWithoutProcessedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    courseId?: StringFieldUpdateOperationsInput | string
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCampusCreateManyCampusInput = {
    departmentId: string
  }

  export type CourseCreateManyCampusInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyCampusInput = {
    id?: string
    admissionNumber: string
    userId?: string | null
    applicationId: string
    courseId: string
    createdAt?: Date | string
  }

  export type DepartmentCampusUpdateWithoutCampusInput = {
    department?: DepartmentUpdateOneRequiredWithoutCampusesNestedInput
  }

  export type DepartmentCampusUncheckedUpdateWithoutCampusInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCampusUncheckedUpdateManyWithoutCampusInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUpdateWithoutCampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutCoursesNestedInput
    applications?: AdmissionApplicationUpdateManyWithoutCourseNestedInput
    students?: StudentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: AdmissionApplicationUncheckedUpdateManyWithoutCourseNestedInput
    students?: StudentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutCampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStudentNestedInput
    application?: AdmissionApplicationUpdateOneRequiredWithoutStudentNestedInput
    course?: CourseUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutCampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyWithoutCampusInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCampusCreateManyDepartmentInput = {
    campusId: string
  }

  export type CourseCreateManyDepartmentInput = {
    id?: string
    name: string
    slug: string
    code: string
    description?: string | null
    duration: string
    qualification?: string | null
    requirements?: string | null
    intakeStatus?: $Enums.IntakeStatus
    campusLabel: string
    feePerSemester?: string | null
    featured?: boolean
    isActive?: boolean
    campusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCampusUpdateWithoutDepartmentInput = {
    campus?: CampusUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type DepartmentCampusUncheckedUpdateWithoutDepartmentInput = {
    campusId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCampusUncheckedUpdateManyWithoutDepartmentInput = {
    campusId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campus?: CampusUpdateOneWithoutCoursesNestedInput
    applications?: AdmissionApplicationUpdateManyWithoutCourseNestedInput
    students?: StudentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    campusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: AdmissionApplicationUncheckedUpdateManyWithoutCourseNestedInput
    students?: StudentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    intakeStatus?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus
    campusLabel?: StringFieldUpdateOperationsInput | string
    feePerSemester?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    campusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionApplicationCreateManyCourseInput = {
    id?: string
    applicationNumber: string
    firstName: string
    middleName?: string | null
    lastName: string
    email: string
    phone: string
    gender: $Enums.Gender
    dateOfBirth: Date | string
    nationality: string
    county: string
    subCounty?: string | null
    postalAddress: string
    guardianName?: string | null
    guardianPhone?: string | null
    kcseIndexNumber?: string | null
    kcseGrade?: string | null
    nationalId?: string | null
    passportNumber?: string | null
    passportPhoto?: string | null
    idCopy?: string | null
    certificateFile?: string | null
    status?: $Enums.ApplicationStatus
    processedById?: string | null
    modeOfStudy: $Enums.ModeOfStudy
    intake: $Enums.Intake
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyCourseInput = {
    id?: string
    admissionNumber: string
    userId?: string | null
    applicationId: string
    campusId: string
    createdAt?: Date | string
  }

  export type AdmissionApplicationUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedBy?: UserUpdateOneWithoutAdmissionsNestedInput
    student?: StudentUpdateOneWithoutApplicationNestedInput
  }

  export type AdmissionApplicationUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type AdmissionApplicationUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    county?: StringFieldUpdateOperationsInput | string
    subCounty?: NullableStringFieldUpdateOperationsInput | string | null
    postalAddress?: StringFieldUpdateOperationsInput | string
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    kcseIndexNumber?: NullableStringFieldUpdateOperationsInput | string | null
    kcseGrade?: NullableStringFieldUpdateOperationsInput | string | null
    nationalId?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    idCopy?: NullableStringFieldUpdateOperationsInput | string | null
    certificateFile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    processedById?: NullableStringFieldUpdateOperationsInput | string | null
    modeOfStudy?: EnumModeOfStudyFieldUpdateOperationsInput | $Enums.ModeOfStudy
    intake?: EnumIntakeFieldUpdateOperationsInput | $Enums.Intake
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStudentNestedInput
    application?: AdmissionApplicationUpdateOneRequiredWithoutStudentNestedInput
    campus?: CampusUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    admissionNumber?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: StringFieldUpdateOperationsInput | string
    campusId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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