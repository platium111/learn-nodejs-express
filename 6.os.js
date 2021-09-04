const os = require("os");

const user = os.userInfo();
console.log(user);

/**
 * {
  uid: -1,
  gid: -1,
  username: 'Clark',
  homedir: 'C:\\Users\\Clark',
  shell: null
}
 */
