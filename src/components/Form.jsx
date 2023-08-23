import React from 'react'
import Header from '../components/Header';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Form() {
    
 
    const[formData, setFormData] = useState({radiobox: "", checkbox:"",shortAnswer:"", paragraph:"", dropdown:"", file:"", scale:"", row1:"", row2:"", row3:"", mrow1:"", mrow2:"", mrow3:""});
    // console.log(formData)
    function changeHandler(e){
      const {name, value, checked, type} = e.target
     setFormData(prevFormData=> {
      return{
        ...prevFormData,
        // [e.target.name] : e.target.value
        [name]:type==="checkbox"?checked:value
      }
     });
    }
    const navigate =useNavigate();
  
    function submitHandler(e){
      e.preventDefault();
      console.log(formData);
      navigate("/submitted");
    }
  
    return (
      <div className='form-body'>
      <form onSubmit={submitHandler}>
            <Header/>
        <div className="name">
          <label>
            MCQ<span>*</span>
            <br />
            <br />
          <input type="radio" value="option1" id='option1' name='radiobox' onChange={changeHandler} />
          <label htmlFor="option1">option 1</label>
          <br />
          <input type="radio" value="option2" id='option2' name='radiobox' onChange={changeHandler} />
          <label htmlFor="option2">option 2</label>
          <br />
          <input type="radio" value="option3" id='option3' name='radiobox' onChange={changeHandler} />
          <label htmlFor="option3">option 3</label>
          </label>
        </div>
  
        <div className="name">
          <label>
            Checkbox<span>*</span>
            <br />
          <input type="checkbox" value="option1" id='option1' name='checkbox' onChange={changeHandler} />
          <label htmlFor="option1">option 1</label>
          <br />
          <input type="checkbox" value="option2" id='option2' name='checkbox' onChange={changeHandler} />
          <label htmlFor="option2">option 2</label>
          <br />
          <input type="checkbox" value="option3" id='option3' name='checkbox' onChange={changeHandler} />
          <label htmlFor="option3">option 3</label>
          </label>
        </div>
  
        <div className="name">
          <label>
            Short Answer<span>*</span>
            <br />
            <input type="text" onChange={changeHandler} name="shortAnswer"  />
          </label>
        </div>
  
        <div className="name">
          <label>
            Paragraph<span>*</span>
            <br />
            <input type="paragraph" onChange={changeHandler} name="paragraph"  />
          </label>
        </div>
  
        <div className="name">
        <label htmlFor="">Dropdown <span>*</span></label>
        <br />
        <br />
        <select name="dropdown" value={formData.dropdown} onChange={changeHandler} id="dropdown">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
          </select>
        </div>
  
        <div className="name">
        <label>
            File Upload<span>*</span>
            <br />
            <input type="file" onChange={changeHandler} name="paragraph"  />
          </label>
        </div>
  
        <div className="name">
          <label>
            Liner Scale <span>*</span>
          </label>
          <br />
          <div className="upp">
            <div className="numlable">
              <label htmlFor="1">1</label>
              <label htmlFor="2">2</label>
              <label htmlFor="3">3</label>
              <label htmlFor="4">4</label>
              <label htmlFor="5">5</label>
            </div>
            <div className="relable">
              <div>Worst</div>
              <input type="radio" value="1" onChange={changeHandler} name="scale" id="1" />
              <input type="radio" value="2" onChange={changeHandler} name="scale" id="2" />
              <input type="radio" value="3" onChange={changeHandler} name="scale" id="3" />
              <input type="radio" value="4" onChange={changeHandler} name="scale" id="4" />
              <input type="radio" value="5" onChange={changeHandler} name="scale" id="5" />
              <div>Best</div>
            </div>
          </div>
        </div>
  
        <div className="name">
          <label>Multi choice Grid <span>*</span>
            <table>
              <tr>
                <td></td>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
              </tr>
  
  
  
              <tr>
                <td>Row 1</td>
                <td><input type="radio" value="col1" onChange={changeHandler} name="row1" /></td>
                <td><input type="radio" value="col2" onChange={changeHandler} name="row1" /></td>
                <td><input type="radio" value="col3" onChange={changeHandler} name="row1" /></td>
              </tr>
  
              <tr>
                <td>Row 2</td>
                <td><input type="radio" value="col1" onChange={changeHandler} name="row2" /></td>
                <td><input type="radio" value="col2" onChange={changeHandler} name="row2" /></td>
                <td><input type="radio" value="col3" onChange={changeHandler} name="row2" /></td>
              </tr>
  
              <tr>
                <td>Row 3</td>
                <td><input type="radio" value="col1" onChange={changeHandler} name="row3" /></td>
                <td><input type="radio" value="col2" onChange={changeHandler} name="row3" /></td>
                <td><input type="radio" value="col3" onChange={changeHandler} name="row3" /></td>
              </tr>
            </table>
          
          
          </label>
  
        </div>
  
  
        <div className="name">
          <label>Tick Box Grid <span>*</span>
            <table>
              <tr>
                <td></td>
                <td>Column 1</td>
                <td>Column 2</td>
                <td>Column 3</td>
              </tr>
  
  
  
              <tr>
                <td>Row 1</td>
                <td><input type="checkbox" value="col1" onChange={changeHandler} name="mrow1" /></td>
                <td><input type="checkbox" value="col2" onChange={changeHandler} name="mrow1" /></td>
                <td><input type="checkbox" value="col3" onChange={changeHandler} name="mrow1" /></td>
              </tr>
  
              <tr>
                <td>Row 2</td>
                <td><input type="checkbox" value="col1" onChange={changeHandler} name="mrow2" /></td>
                <td><input type="checkbox" value="col2" onChange={changeHandler} name="mrow2" /></td>
                <td><input type="checkbox" value="col3" onChange={changeHandler} name="mrow2" /></td>
              </tr>
  
              <tr>
                <td>Row 3</td>
                <td><input type="checkbox" value="col1" onChange={changeHandler} name="mrow3" /></td>
                <td><input type="checkbox" value="col2" onChange={changeHandler} name="mrow3" /></td>
                <td><input type="checkbox" value="col3" onChange={changeHandler} name="mrow3" /></td>
              </tr>
            </table>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
}

export default Form