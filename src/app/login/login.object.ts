export class ObjectLogin {
    Input: Email
    UserData: UserData
}

export class Email {
    Email: string;
}
export class UserData {
    UserType: number = 5;
    AppVersion: number = 1;
    LanguageID: number = 1;
    AppID: string = "tech.innowave.gaminn.mkt.vvl"
}