export class UserModel {
    id;
    username;
    email;
    idStatus;

    of(id, username, email, idStatus) {
        if (id === undefined || id === null) {
            throw new Error("id is required");
        }
        if (username === undefined || username === null) {
            throw new Error("username is required");
        }
        if (email === undefined || email === null) {
            throw new Error("email is required");
        }
        if (idStatus === undefined || idStatus === null) {
            throw new Error("idStatus is required");
        }
        
        this.id = id;
        this.username = username;
        this.email = email;
        this.idStatus = idStatus;
    }
}

export class UserCreate {
	username;
	email;

    of(username, email) {
        if (username === undefined || username === null) {
            throw new Error("username is required");
        }
        if (email === undefined || email === null) {
            throw new Error("email is required");
        }
        
        this.username = username;
        this.email = email;
    }
}

export class UserUpdate {
	username;
    email;
    idStatus;

    of(username, email, idStatus) {
        if (username === undefined || username === null) {
            throw new Error("username is required");
        }
        if (email === undefined || email === null) {
            throw new Error("email is required");
        }
        if (idStatus === undefined || idStatus === null) {
            throw new Error("idStatus is required");
        }
        
        this.username = username;
        this.email = email;
        this.idStatus = idStatus;
    }
}