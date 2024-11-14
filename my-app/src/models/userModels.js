export class UserModel {
    /** @type {number} */
    id;
    /** @type {string} */
    username;
    /** @type {string} */
    name_tag
    /** @type {string} */
    email;
    /** @type {number} */
    idStatus;

    /**	Create a new UserModel
     * @param {string} id
     * @param {string} username
     * @param {string} email
     * @param {string} idStatus
     * 
     * @returns {UserModel}
     */
    static of(id, username, name_tag, email, idStatus) {
        if (typeof(id) !== "number") {
            throw new Error("id is a required to be a number");
        }
        if (typeof(username) !== "string") {
            throw new Error("username is required to be a string");
        }
        if (typeof(name_tag) !== "string") {
            throw new Error("name_tag is required to be a string");
        }
        if (typeof(email) !== "string") {
            throw new Error("email is required to be a string");
        }
        if (typeof(idStatus) !== "number") {
            throw new Error("idStatus is required to be a number");
        }
        
        let newUser = new UserModel();
        newUser.id = id;
        newUser.username = username;
        newUser.name_tag = name_tag;
        newUser.email = email;
        newUser.idStatus = idStatus;

        return newUser;
    }
}

export class UserCreate {
	username;
    name_tag;
	email;

    /**	Create a new UserCreate
     * @param {string} username
     * @param {string} name_tag
     * @param {string} email
     * 
     * @returns {UserCreate}
     */
    static of(username, name_tag, email) {
        if (typeof(username) !== "string") {
            throw new Error("username is required to be a string");
        }
        if (typeof(name_tag) !== "string") {
            throw new Error("name_tag is required to be a string");
        }
        if (typeof(email) !== "string") {
            throw new Error("email is required to be a string");
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

    /**	Create a new UserUpdate
     * @param {string} username
     * @param {string} email
     * @param {number} idStatus
     * 
     * @returns {UserUpdate}
     */
    static of(username, email, idStatus) {
        if (typeof(username) !== "string") {
            throw new Error("username is required to be a string");
        }
        if (typeof(name_tag) !== "string") {
            throw new Error("email is required to be a string");
        }
        if (typeof(email) !== "string") {
            throw new Error("idStatus is required to be a number");
        }
        
        let user = new UserUpdate();
        user.username = username;
        user.email = email;
        user.idStatus = idStatus;

        return user;
    }
}