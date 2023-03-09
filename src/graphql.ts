
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface RegisterInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface User {
    _id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    avatar?: Nullable<string>;
    googleId?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export interface Tokens {
    accessToken?: Nullable<string>;
    refreshToken?: Nullable<string>;
}

export interface AuthResponse {
    user?: Nullable<User>;
    accessToken?: Nullable<string>;
    refreshToken?: Nullable<string>;
}

export interface IQuery {
    getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    currentUser(): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    register(input?: Nullable<RegisterInput>): Nullable<AuthResponse> | Promise<Nullable<AuthResponse>>;
    login(input?: Nullable<LoginInput>): Nullable<AuthResponse> | Promise<Nullable<AuthResponse>>;
    logout(): Nullable<string> | Promise<Nullable<string>>;
    refreshTokens(): Nullable<Tokens> | Promise<Nullable<Tokens>>;
}

type Nullable<T> = T | null;
