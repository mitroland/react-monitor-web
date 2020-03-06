import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import { GenericContext } from '../../contexts/index'
import Alert from '../../components/Alert/index'

import { useHistory } from "react-router-dom"

const Search = () => {
    const { state, addProduct, loadProduct } = useContext(GenericContext)
    let history = useHistory()

    useEffect(() => {
        loadProduct()
    }, [])

    const formik = useFormik({
        initialValues: {
            url: '',
        },
        onSubmit: values => {
            addProduct(values.url, history)
        },
    })

    return(
        <>
            <section className="section">
                {
                    typeof state.alert !== 'undefined' && state.alert !== null && (
                        <div className="container" style={{ marginBottom:'15px' }}>
                            <Alert data={state.alert} />
                        </div>
                    )
                }
                <div className="container">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="field has-addons">
                            <p className="control is-expanded">
                                <input
                                  id="url"
                                  name="url"
                                  type="text"
                                  className="input"
                                  placeholder="Fabelio detail URL"
                                  onChange={formik.handleChange}
                                  value={formik.values.url}
                                />
                            </p>
                            <p className="control">
                                <button type="submit" className="button is-info">
                                    Search
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Search
