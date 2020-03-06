import React, { useReducer } from 'react'
import Axios from 'axios'

import {
    LOAD_PRODUCT,
    SAVE_PRODUCT,
    GET_PRODUCT,
    SET_ALERT
} from '../actions'

import genericReducer from '../reducers/genericReducer'
import { set, get, initalData } from '../storage'

import { GenericContext } from './index'

const GenericContextStore = (props) => {
    const { children } = props
    const [state, dispatch] = useReducer(genericReducer, [])

    const validateProduct = (slug) => {
        let data_storage = get()
        let result = data_storage.filter((value, index, array) => {
            return value.slug === slug
        })

        return result
    }

    const api = process.env.NODE_ENV !== 'development' ? `/fabelio` : `http://localhost:5000/fabelio`

    const addProduct = async (url, history) => {
        dispatch({ type: SET_ALERT, payload: null })

        let is_valid_url = url.match(/(https:\/\/)(fabelio.com\/)(ip\/)(.*\.html)/g)
        if (is_valid_url == null) {
            dispatch({ type: SET_ALERT, payload: 'URL not match' })
            setTimeout(() => dispatch({ type: SET_ALERT, payload: null }), 2000)
        }else {
            dispatch({ type: 'FETCH_START', payload: true })

            const json_result = await Axios.get(`${api}?page=${url}`)
            const result = json_result.data

            dispatch({ type: 'FETCH_STOP', payload: false })

            let is_exist = validateProduct(result.data.slug)

            if (is_exist.length == 0) {
                let data_storage = get()
                data_storage.push(result.data)
                set(data_storage)

                dispatch({
                    type: SAVE_PRODUCT,
                    payload: result.data
                })
                dispatch({ type: SET_ALERT, payload: null })
                history.push("/product/"+result.data.slug)
            }else {
                dispatch({
                    type: SET_ALERT,
                    payload: 'Product has been added'
                })

                setTimeout(() => dispatch({ type: SET_ALERT, payload: 'Will be redirect to product' }), 1000)
                setTimeout(() => dispatch({ type: SET_ALERT, payload: null }), 5000)
                setTimeout(() => history.push("/product/"+result.data.slug), 5000)
            }
        }
    }

    const loadProduct = () => {
        if (get() == null) {
            initalData()
        }
        let data = get()

        dispatch({
            type: LOAD_PRODUCT,
            payload: data
        })
    }

    const getProduct = (slug) => {
        let result = validateProduct(slug)

        dispatch({
            type: GET_PRODUCT,
            payload: result[0]
        })
    }

    return (
        <GenericContext.Provider
            value={{
                state,
                loadProduct,
                addProduct,
                getProduct,
            }}
        >
            {children}
        </GenericContext.Provider>
    )
}

export default GenericContextStore
