function downloadFile() {
    return new Promise((resolve) => {
        console.log("Starting file download...");
        setTimeout(() => {
            console.log("File downloaded.");
            resolve("downloadedFile.txt");
        }, 2000);
    });
}

function compressFile(file) {
    return new Promise((resolve) => {
        console.log(`Compressing ${file}...`);
        setTimeout(() => {
            const compressedFile = "compressed_" + file;
            console.log("File compressed.");
            resolve(compressedFile);
        }, 2000);
    });
}

function uploadFile(compressedFile) {
    return new Promise((resolve) => {
        console.log(`Uploading ${compressedFile}...`);
        setTimeout(() => {
            console.log("File uploaded.");
            resolve();
        }, 2000);
    });
}

// Full flow using .then() chaining
downloadFile()
    .then((downloadedFile) => compressFile(downloadedFile))
    .then((compressedFile) => uploadFile(compressedFile))
    .then(() => {
        console.log("All operations completed successfully.");
    });
