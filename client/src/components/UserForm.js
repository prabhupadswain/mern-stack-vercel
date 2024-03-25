import React from 'react';

const UserForm = () => {
  return (
    <section className='mb-3'>
      <form>
        <div className='row mb-3'>
          <label htmlFor='userName' className='col-sm-2 col-form-label'>
            Username:{' '}
          </label>
          <div className='col-sm-10'>
            <input type='email' className='form-control' id='userName' />
          </div>
        </div>
        <div class='row mb-3'>
          <label htmlFor='age' className='col-sm-2 col-form-label'>
            Age:{' '}
          </label>
          <div className='col-sm-10'>
            <input type='number' className='form-control' id='age' />
          </div>
        </div>
        <fieldset className='row mb-3'>
          <legend className='col-form-label col-sm-2 pt-0'>
            Are you salaried?
          </legend>
          <div className='col-sm-10'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='salaried'
                id='salariedTrue'
                value='yes'
              />
              <label className='form-check-label' htmlFor='salariedTrue'>
                Yes
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='salaried'
                id='salariedFalse'
                value='no'
              />
              <label className='form-check-label' htmlFor='salariedFalse'>
                No
              </label>
            </div>
          </div>
        </fieldset>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </section>
  );
};

export default UserForm;
