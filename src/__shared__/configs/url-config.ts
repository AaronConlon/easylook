import { __ENV__ } from '__shared__/configs/__ENV__';

export const urlConfig = {
  API_BASE_URL: __ENV__.REACT_APP_API_BASE_URL,
  CDN_URL: __ENV__.REACT_APP_CDN_URL,
  UPLOAD_URL: __ENV__.REACT_APP_UPLOAD_URL,
};
