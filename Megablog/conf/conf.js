const conf ={
    appwriteUrl: String(import.meta.env.VITE_APP_WRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabase: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf;