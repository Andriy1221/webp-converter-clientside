type Quality = 1 | 0.9 | 0.8 | 0.7 | 0.6 | 0.5 | 0.4 | 0.3 | 0.2 | 0.1;

function convertToWebp(file: File, quality: Quality): Promise<File> {
  return new Promise((res, rej) => {
    // Convert file into image
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
      // Create canvas and draw image
      const canvas: HTMLCanvasElement = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      canvas.getContext("2d")?.drawImage(image, 0, 0);
      // Convert image to webp
      canvas.toBlob(
        (blob) => {
          if (blob) {
            // Remove extension from file name
            const fullFileName = file.name;
            const trimmedFileName = fullFileName.replace(/\..+$/, "");
            // Create webp file
            const webpFile = new File([blob], `${trimmedFileName}.webp`);
            res(webpFile);
          } else {
            rej("blob is null");
          }
        },
        "image/webp",
        quality
      );
    };
  });
}

export default convertToWebp;
