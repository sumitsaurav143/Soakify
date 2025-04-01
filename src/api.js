const API_BASE_URL = "http://localhost:8080";

const API_ENDPOINTS = {
  GENERATE_OTP: `${API_BASE_URL}/api/auth/generate-otp`,
  VERIFY_OTP: `${API_BASE_URL}/api/auth/verify-otp`,
  LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_DETAIL: `${API_BASE_URL}/api/admin/get`,
  REGISTER: `${API_BASE_URL}/auth/register`,
};

export default  API_ENDPOINTS ;

