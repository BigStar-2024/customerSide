interface UserInfo {
    userName: string;
    userEmail: string;
    userPassword: string;
    userGender: string;
    userBirth: string;
}


const UpdateAuthAction: string = "UserInfo";

export default UserInfo;

export { UpdateAuthAction };