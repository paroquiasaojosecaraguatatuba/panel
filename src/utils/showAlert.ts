export const showAlert = (message: string) => {
  if (typeof window !== "undefined") {
    window.alert(message);
  }
};
