export const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    body: JSON.stringify({}),
  });

  return { statusCode: response.status };
};
