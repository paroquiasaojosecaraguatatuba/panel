export function handleFieldErrors<
  Fields extends Record<string, { message: string }[]>,
>(fields: Fields, setFieldError: (key: keyof Fields, message: string) => void) {
  for (const [key, errors] of Object.entries(fields)) {
    for (const error of errors) {
      setFieldError(key as keyof Fields, error.message);
    }
  }
}
