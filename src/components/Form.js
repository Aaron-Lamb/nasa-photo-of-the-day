import React from "react";
// This form is for the dropdown selector, which will allow the user to
// pick an image from a particular date.
const DropForm = (props) => {

    // // Handle change for the month function
    // const monthChangeHandler = (e) => {
    //     props.monthChange;
    // }
    // // Handle change for the year function
    // const yearChangeHandler = (e) => {
    //     props.yearChange;
    // }
    // // Handle change for the day function
    // const dayChangeHandler = (e) => {
    //     props.dayChange;
    // }
    // // Sumbit function
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     props.changeSubmit;
    // }
    return(
        // Main Div
        <div>
            {/* Form here */}
            {/* onSubmit={event => submitHandler(event)} */}
            <form>
                <label>
                    Time Machine! Month:
                    {/* onChange={event => monthChangeHandler(event)} */}
                    <select >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </label>
                <label>
                    Year:
                    {/* onChange={event => yearChangeHandler(event)} */}
                <select >
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </select>
                </label>
                <label>
                    Day:
                    {/* onChange={event => dayChangeHandler(event)} */}
                <select >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </label>
                <button>Search Date!</button>
            </form>
        </div>
    )
}

export default DropForm;