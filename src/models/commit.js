export class Commit {
    constructor(hash, username, email, date, message) {
        this.hash = hash;
        this.username = username;
        this.email = email;
        this.date = date;
        this.message = message;
        this.files = null;
    }
}

export class CommitFile {
    constructor(status, filePath) {
        this.status = status;
        this.filePath = filePath;
    }
}