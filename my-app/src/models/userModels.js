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
    name_tag;
	email;

    static of(username, name_tag, email) {
        if (username === undefined || username === null) {
            throw new Error("username is required");
        }
        if (name_tag === undefined || name_tag === null) {
            throw new Error("name_tag is required");
        }
        if (email === undefined || email === null) {
            throw new Error("email is required");
        }
        
        let user = new UserCreate();
        user.username = username;
        user.name_tag = name_tag;
        user.email = email;
        
        return user;
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