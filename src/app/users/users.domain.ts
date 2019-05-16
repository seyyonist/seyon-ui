
export class UserInfo {
    email: string = "";
    name: string = "";
    active: string = "";
    password: string = "";
}

export class UserRole {
    id: number;
    email: string = "";
    roleCode: string = "";
    companyId:number;
}

export class UserDetails {
    userInfo: UserInfo = new UserInfo();
    userRole: UserRole = new UserRole();

}