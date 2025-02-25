import React from 'react'
import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from '../conf/conf';
class configer{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                 slug,
                  {
                    title,
                    content,
                    status,
                    featuredImage,
                    userId

            });
        } catch (error) {
            
        }
    }
    async getPost({slug}){
        try {
           return await databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, slug);
        } catch (error) {
            
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
    async updatepost(slug,{title,content, featuredImage, status,}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId, slug,{
                    title,
                    content,
                    status,
                    featuredImage,
                    

            });
        } catch (error) {
            
        }
    }
    async deletePost({slug}){
        try {
           return await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, slug);
        } catch (error) {
            
        }
    }
    
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

export default config