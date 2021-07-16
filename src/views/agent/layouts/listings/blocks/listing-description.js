import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StoreListing } from '../../../../../providers/redux/_actions/listing/listing-actions';

export default function ListingDescription({formData}) {

    // const [description, setDescription] = useState({});
    const dispatch = useDispatch();
    const listing = useSelector((state) => state.store_listing.store);

    const compileData = (e) => {
        dispatch(StoreListing({
                        ...listing,
                        [e.target.name] : e.target.value
                    }))

        formData.append(e.target.name, e.target.value);
    }


    return (
        <div className="tab-pane tab-pane-parent fade show active px-0" id="description" role="tabpanel" aria-labelledby="description-tab">
        <div className="card bg-transparent border-0">
            <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0" id="heading-description">
            <h5 className="mb-0">
                <button className="btn btn-lg collapse-parent btn-block border shadow-none" data-toggle="collapse" data-number={1.} data-target="#description-collapse" aria-expanded="true" aria-controls="description-collapse">
                <span className="number">1.</span> Description
                </button>
            </h5>
            </div>
            <div id="description-collapse" className="collapse show collapsible" aria-labelledby="heading-description" data-parent="#collapse-tabs-accordion">
            <div className="card-body py-4 py-md-0 px-0">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property
                            Description</h3>
                            <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit</p>
                            <div className="form-group">
                            <label htmlFor="title" className="text-heading">Title <span className="text-muted">(mandatory)</span></label>
                            <input type="text" className="form-control form-control-lg border-0" onChange={compileData} id="title" name="title" />
                            </div>
                            <div className="form-group mb-0">
                                <label htmlFor="category" className="text-heading">Type</label>
                                <input type="text" className="form-control form-control-lg border-0" id="type" onChange={compileData} name="type" />
                            </div>
                            <div className="form-group mb-0">
                            <label htmlFor="description-01" className="text-heading">Description</label>
                            <textarea className="form-control border-0" rows={5} name="description" id="description-01" onChange={compileData} />
                            </div>
                        </div>
                        </div>
                        
                        <div className="card mb-6">
                            <div className="card-body p-6">
                                <h3 className="card-title mb-0 text-heading fs-22 lh-15">Rent Details</h3>
                                <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit</p>
                                <div className="form-row mx-n2">
                                <div className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4 mb-md-0">
                                    <div className="form-group mb-0">
                                    <label htmlFor="tenure" className="text-heading">Rent Tenure Duration</label>
                                    <select className="form-control border-0 shadow-none form-control-lg selectpicker" title="Select" data-style="btn-lg py-2 h-52" onChange={compileData} id="tenure" name="tenure">
                                        <option>Monthly Tenancy</option>
                                        <option>Quaterly Tenancy</option>
                                        <option>Yearly Tenancy</option>
                                        <option>Custom Duration</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-6">
                    <div className="card-body p-6">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property
                        Price/Fees</h3>
                        <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                        <div className="form-row mx-n2">
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="price" className="text-heading">Total Initial Rent in $ <span className="text-muted">(only numbers)</span></label>
                            <input type="text" className="form-control form-control-lg border-0" onChange={compileData} id="price" name="initial_price" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="agency_fees" className="text-heading">Agency Fees</label>
                            <input type="text" name="agency_fees" onChange={compileData} className="form-control form-control-lg border-0" id="agency_fees" />
                            </div>
                        </div>
                        </div>
                        <div className="form-row mx-n2">
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="legal_fees" className="text-heading">Legal Fees <span className="text-muted">(monthly)</span></label>
                            <input type="text" className="form-control form-control-lg border-0" onChange={compileData} id="legal_fees" name="legal_fees" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                            <div className="form-group">
                            <label htmlFor="caution_fees" className="text-heading">Caution Fees <span className="text-muted">( ex: /month)</span>
                            </label>
                            <input type="text" className="form-control form-control-lg border-0" onChange={compileData} id="caution_fees" name="caution_fees" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="text-right">
                <button className="btn btn-lg btn-primary next-button">Next step
                    <span className="d-inline-block ml-2 fs-16"><i className="fal fa-long-arrow-right" /></span>
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
