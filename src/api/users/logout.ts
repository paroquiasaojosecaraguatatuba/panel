export const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({}),
  });

  return { statusCode: response.status };
};
