import axios from 'axios';

import {GET_ALL_SELLERS, POST_PRODUCT, UPDATE_PRODUCT, ERRORS, MESSAGE} from './ctes'

export function getAllSellers() {
    return async function (dispatch) {
        try {
            const sellers = await axios.get('http://localhost:4000/api/private/users/sellers');
            dispatch({type: MESSAGE, payload: sellers.msg})
            dispatch({type: GET_ALL_SELLERS, payload: sellers.data})
        } catch (err) {
            dispatch({type: ERRORS, payload: err.data.msg})
        }
    }
}

//todo agregar header de seguridad
export function postProduct(product) {
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:4000/api/private/product', product);
            dispatch({type: MESSAGE, payload: response.msg})
            dispatch({type: POST_PRODUCT, payload: response.data})
        } catch (err) {
            dispatch({type: ERRORS, payload: err.data.msg})
        }
    }
}

export function updateProduct (product, id) {
    return async function (dispatch) {
        try {
            const response = await axios.put(`http://localhost:4000/api/private/${id}`, product);
            dispatch({type: MESSAGE, payload: response.msg});
            dispatch({type: UPDATE_PRODUCT, payload: response.data});
        } catch (err) {
            dispatch({type: ERRORS, payload: err.data.msg})
        }
    }
}