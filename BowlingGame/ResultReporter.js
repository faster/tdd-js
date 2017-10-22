import FirebaseClient from "./FirebaseClient";

let firebaseClient;
export default class ResultReporter {
    constructor() {
        firebaseClient = new FirebaseClient();
    }

    async reportResults(data) {
        await firebaseClient.writeAsync(data, "bowling/genka");
        firebaseClient.close();
    }
}