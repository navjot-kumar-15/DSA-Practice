// BlogService: creates blog post

// EmailNotifier: sends email to subscribers

// FileLogger: logs the action


interface UserData {
    name: string,
    age?: number
}

class EmailNotifier {
    notifySubscribers(user: UserData) {
        console.log(`Sending email to ${user.name}`);
    }
}

class FileLogger {
    log(message: string) {
        console.log(message)
    }
}


class BlogService {
    private emailNotifier: EmailNotifier;
    private fileLogger: FileLogger;
    constructor(public user: UserData) {
        this.user = user
        this.emailNotifier = new EmailNotifier()
        this.fileLogger = new FileLogger()
        this.emailNotifier.notifySubscribers(user)
        this.fileLogger.log(`Created blog post for ${user.name}`)
    }
}


// const emailClass = new EmailNotifier()
// const fileLogger = new FileLogger()
const check = new BlogService({ name: "John" })
console.log(check)