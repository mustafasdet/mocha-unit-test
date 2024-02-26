class User {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    public static findUser(id: number): Promise<User> {
        return new Promise((resolve, reject) => {
            // User Service REST API call to fetch User with a specific id.
            // ...
        });
    }
}
export default User;