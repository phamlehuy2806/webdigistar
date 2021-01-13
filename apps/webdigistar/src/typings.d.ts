declare global {
  interface Window {
    recaptchaCallback: () => void;
    grecaptcha: {
      render: (...args: any[]) => number;
    };
  }
}
