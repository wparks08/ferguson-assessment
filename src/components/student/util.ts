/**
 * Scrubs non-numeric characters from a phone number string
 */
export const scrubPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/[^0-9]/g, "");
};

/**
 * Formats phone numbers as (###) ###-####
 */
export const formatPhoneNumber = (phoneNumber: string) => {
    const areaCode = phoneNumber.substring(0, 3);
    const prefix = phoneNumber.substring(3, 6);
    const lineNumber = phoneNumber.substring(6, 10);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
};
