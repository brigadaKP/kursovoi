import { Track } from './track';

export class User {
    id: String;
    active: boolean;
    email: String;
    login: String;
    password: String
    number_of_tracks: Number;
    number_of_albums: Number;
    time_tracks: String;
    price_tracks: String;

    admin: boolean;
    user: boolean;

    static cloneBase(user: User): User {
        const cloneUserModel: User = new User();
        cloneUserModel.id = user.id;
        cloneUserModel.email = user.email;
        cloneUserModel.login = user.login;
        cloneUserModel.password = user.password;
        cloneUserModel.number_of_tracks = user.number_of_tracks;
        cloneUserModel.number_of_albums = user.number_of_albums;
        cloneUserModel.time_tracks = user.time_tracks;
        cloneUserModel.price_tracks = user.price_tracks;
        cloneUserModel.admin = user.admin;
        cloneUserModel.user = user.user;

        return cloneUserModel;
    }
}

export class UserLogin {
   
    login: String;
    password: String;
    id: String;
}

export class AuthToken {
    token: string;
}

export class UserTracks {
    id: String;
    active: boolean;
    email: String;
    login: String;
    password: String
    number_of_tracks: Number;
    number_of_albums: Number;
    time_tracks: String;
    price_tracks: String;

    admin: boolean;
    user: boolean;

    tracks: Track[];
}

