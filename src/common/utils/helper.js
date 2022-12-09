export const saveUserInfo = data => {
   const { name, email, userId, userTypes, accessToken } = data;
   localStorage.setItem("name", name);
   localStorage.setItem("email", email);
   localStorage.setItem("userId", userId);
   localStorage.setItem("userType", userTypes);
   localStorage.setItem("token", accessToken);
}

export const logOut = () => {
   localStorage.clear();
   window.location.href = "/";
};