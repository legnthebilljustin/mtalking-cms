export const API_ROUTES = {
    PREVIEW: "Preview"
}

// this is used to allow certain requests to pass the backend auth
// i know this is bad practice but i had to do this for the rushed deadline
export const API_AUTH_TOKEN = "Bearer 834|n7SrGQ5I9yfwkrY98PGZYo8bK4rsz2OEHSkn3Nqg"

export const API_MESSAGES = {
    PENDING: "Preparing your data...",
    CREATION: "Creating your data...",
    DELETION: "Deleting your data...",
    ERROR: "Unable to process your request. Please try again.",
    SUCCESS: "Your data is ready.",
    CREATION_SUCCESS: "Data has been created.",
    UPDATE_SUCCESS: "Data has been updated.",
    DELETION_SUCCESS: "Data has been deleted."
}
