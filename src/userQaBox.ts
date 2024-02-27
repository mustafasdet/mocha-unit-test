import axios from "axios";

class UserQaBox {

    greet(name: string) {
        return `Hello ${name}`;
    }

    greetMessage(who: string) {
        let msg = this.greet(who);
        return msg;
    }
    async getUserByDataId(id: number) {
        // const result = axios.get('https://...')
        const result = await axios({
            method: 'GET',
            url: `https://reqres.in/api/users/${id}`
        });
        return result.data.data;
    }
}
export default UserQaBox;