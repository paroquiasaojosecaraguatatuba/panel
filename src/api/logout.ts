export const logout = async () => {
  const result = await fetch("/api/logout", {
    method: "POST",
    body: JSON.stringify({}),
  });

  return result;
};
