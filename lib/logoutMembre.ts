export function logoutMembre() {
  localStorage.removeItem("memberToken");
  localStorage.removeItem("memberData");
}
