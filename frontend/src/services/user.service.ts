export class UserService {
  avatar: string;
  constructor() {
    this.avatar = 'аватар';
  }
  getAvatar() {
    return this.avatar;
  }
}
const userService = new UserService();
export default userService;
