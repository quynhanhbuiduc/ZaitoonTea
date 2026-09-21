/**
 * Validate Vietnamese phone number format (starts with 0, 10 digits)
 */
export const isValidVietnamesePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/[\s.-]/g, '');
  const phoneRegex = /^(03|05|07|08|09|01[2|6|8|9])\d{8}$/;
  return phoneRegex.test(cleanPhone);
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validate non-empty string with minimum length
 */
export const isMinLength = (str: string, min: number = 2): boolean => {
  return str.trim().length >= min;
};

