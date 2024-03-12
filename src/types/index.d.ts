declare module '@suprsend/web-inbox' {
  function initSuprSendInbox(
    target: HTMLElement | null,
    config: {
      workspaceKey: string;
      distinctId: string;
      subscriberId: string;
    }
  ): void;
}
