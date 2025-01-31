import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = "http://localhost:5124/Material/" 

export const getMaterials = async () => {
    try {
        const response = await axios.get(API_URL+"GetAll");
        return response.data;
    } catch (error) {
        throw new Error(error.massage);
    }
};


export const deleteMaterial = async (id) => {
    try {
        await axios.delete(`${API_URL}${id}`);
   } catch (error) {
        console.log("Error", error);
    }
}

