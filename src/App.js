import './App.css';

function App() {
  return (
    <>
      {/* Heading */}
      <h2 className='para'> YAY! It's BOGO </h2>

      {/* Box 1 Start */}
      <div className='parent'>
        <div class="card">
          <div className="radio">
            <input type="radio" id="option1" name="options" />
            <label htmlFor="option1" className='option1'>1 Unit  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label className="highlighted-text">
                10% off
              </label>
              <label className='price'>
                $10.00 USD
              </label>
            </label>
            <div className='text'> Standard Price
              <label className="strikethrough-text">
                $24.00 USD
              </label>
            </div>
          </div>

          <div class="content">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size &nbsp;&nbsp;&nbsp; Color</p>
            <label>#1</label> &nbsp;
            <select id="dropdownMenu">
              <option value="option1">S</option>
            </select>&nbsp;&nbsp;
            <select id="dropdownMenu">
              <option value="option1">Black</option>
            </select>
            <div>
              <label>#2</label>  &nbsp;
              <select id="dropdownMenu">
                <option value="option1">S</option>
              </select>&nbsp;&nbsp;
              <select id="dropdownMenu">
                <option value="option1">Color</option>
              </select>
            </div>
          </div>
        </div>
      </div><br />
      {/* Box 1 End  */}

      {/* Box 2 Start */}
      <div className='parent'>
        <div class="card">
          <div className='recommended'>
            <label className="highlighted-text">
              Most Popular
            </label> 
          </div>
          <div className="radio">
            <input type="radio" id="option1" name="options" />
            <label htmlFor="option1" className='option1'>2 Unit  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label className="highlighted-text">
                20% off
              </label>
              <label className='price'>
                $18.00 USD
              </label>
            </label>
            <div className='text'> Standard Price
              <label className="strikethrough-text">
                $24.00 USD
              </label>
            </div>
          </div>

          <div class="content">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size &nbsp;&nbsp;&nbsp; Color</p>
            <label>#1</label> &nbsp;
            <select id="dropdownMenu">
              <option value="option1">S</option>
            </select>&nbsp;&nbsp;
            <select id="dropdownMenu">
              <option value="option1">Black</option>
            </select>
            <div>
              <label>#2</label>  &nbsp;
              <select id="dropdownMenu">
                <option value="option1">S</option>
              </select>&nbsp;&nbsp;
              <select id="dropdownMenu">
                <option value="option1">Color</option>
              </select>
            </div>
          </div>
        </div>
      </div> <br />
      {/* Box 2 End  */}

      {/* Box 3 Start*/}
      <div className='parent'>
        <div class="card">
          <div className="radio">
            <input type="radio" id="option1" name="options" />
            <label htmlFor="option1" className='option1'>3 Unit  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label className="highlighted-text">
                30% off
              </label>
              <label className='price'>
                $24.00 USD
              </label>
            </label>
            <div className='text'> Standard Price
              <label className="strikethrough-text">
                $24.00 USD
              </label>
            </div>
          </div>

          <div class="content">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size &nbsp;&nbsp;&nbsp; Color</p>
            <label>#1</label> &nbsp;
            <select id="dropdownMenu">
              <option value="option1">S</option>
            </select>&nbsp;&nbsp;
            <select id="dropdownMenu">
              <option value="option1">Black</option>
            </select>
            <div>
              <label>#2</label>  &nbsp;
              <select id="dropdownMenu">
                <option value="option1">S</option>
              </select>&nbsp;&nbsp;
              <select id="dropdownMenu">
                <option value="option1">Color</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Box 3 End  */}

      {/* Footer Start  */}
      <p>
        <div className="footer">  Free Delivery
          <label className='price'> Total : $18.00 USD</label></div>
      </p>
      {/* Footer End  */}

      {/* Button Start  */}
      <div className="container">
        <button className="button"> +  Add to Cart </button>
      </div>
      <label className='sponsered'> @ Powered by Pumper</label>
      {/* Button End  */}

    </>
  );
}

export default App;
