import axios from 'axios';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL; 

export const submitToGoogleSheets = async (data: any) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, data, {
      headers: {
        'Content-Type': 'text/plain', 
      }
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error };
  }
};
