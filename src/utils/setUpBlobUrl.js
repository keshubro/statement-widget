// Create blob url for preview of the file

export const setUpBlobUrl = response => {
    if(response) {
        const blob = new Blob([response.data], {
            type: response.contentType
        });

        return window.URL.createObjectURL(blob);
    }

    return '';
};