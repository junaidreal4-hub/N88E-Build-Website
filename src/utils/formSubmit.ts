import axios from 'axios';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyp721paeSmjJ1pSevbclOndHvBtx2PsBSqHZXTbjMVspif1R9VQO6gdSHeEDOIWKlrlg/exec'; // Paste your URL

export const submitToGoogleSheets = async (data: any) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, data, {
      headers: {
        'Content-Type': 'text/plain', // Important for CORS
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error };
  }
};
