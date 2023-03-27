export const fileToDataURL = (file: File | null): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject('No file provided');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && event.target.result) {
        resolve(event.target.result as string);
      } else {
        reject('Failed to read file');
      }
    };
    reader.readAsDataURL(file);
  });
};
