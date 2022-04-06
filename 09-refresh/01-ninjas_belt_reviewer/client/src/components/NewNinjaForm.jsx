import React from 'react';
import PropTypes from 'prop-types';

const NewNinjaForm = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" className="formcontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className="formcontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="number" name="" id="" className="formcontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Are You a Veteran?</label>
                    <input type="checkbox" name="" id="" className="formcontrol" />
                </div>
                <input type="submit" value="Create Ninja" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

NewNinjaForm.propTypes = {};

export default NewNinjaForm;