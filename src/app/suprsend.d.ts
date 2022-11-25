declare module '@suprsend/web-sdk' {
  const suprsend: {
    init: (
      key: string,
      secret: string,
      options?: {
        vapid_key: string;
      }
    ) => void;
    identify: (distnict_id: any) => void;
    reset: () => void;
    web_push: {
      register_push: () => void;
    };
  };
  export default suprsend;
}
