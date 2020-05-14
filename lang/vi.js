export const transValidation = {
  email_incorrect: "Email phai co dang example@gmail.",
  gender_incorrect: "error gender.",
  password_incorrect: "Mat khau chua it nhat 8 ki tu bao gom chu hoa, chu thuong,so,ki tu dac biet.",
  password_confirmation_incorrect: "Nhap lai mat khau chua chinh xac.",
  idmachine_incorrect: "id machine khong duoc co khoang trong",
};

export const transErrors = {
  account_in_use: "Email da duoc su dung.",
  account_removed: "tai khoan da bi xoa",
  account_not_active: "tai khoan chua active",
  token_undefined: "token khong ton tai",
  login_failed: "sai tai khoan hoac mat khau",
  server_error: "co loi o phia server",
};

export const transSuccess = {
  userCreated: (userEmail) => {
    return `tai khoan <strong>${userEmail}</strong> da duoc tao, kiem tra email de active`;
  },
  account_actived: "kich hoat tai khoan thanh cong",
  loginSuccess: (username) => {
    return `hello ${username}`;
  },
  logout_success: "dang xuat thanh cong",
};
// send mail alert
export const transMail = {
  subject: "biogas: xac nhan kich hoat tai khoan.",
  template: (linkVerify) => {
    return `
      <h2>ban da dang ki tai khoan tren biogas.</h2>
      <h3>click vao lien ket de kich hoat tai khoan</h3>
      <h3><a href="${linkVerify}" targe="blank">${linkVerify}</a></h3>
      <h4>xin cam on</h4>
    `;
  },
  send_failed: "co loi trong qua trinh gui mail",
};