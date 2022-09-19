////////////solution one////////

import React from 'react'
import { connect } from 'react-redux'
function Get() {

    return (
        <div>

            <li>{` Username      : ${props.hasName}`}</li>
            <li>{` Email         : ${props.hasEmail}`}</li>
            <li>{` Phone         : ${props.hasPhone}`}</li>
            <li>{` favoriteColor : ${props.favoriteColor}`}</li>

            <li>{this.formValueSelector}</li>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        form: state.form,
        yes: console.log(state.form)
    }
};
export default connect(mapStateToProps)(Get);



////solution two//////////


// import React from 'react'

// import { connect } from 'react-redux';
// import { formValueSelector } from 'redux-form';

// class Test extends React.Component {
//     render() {

//         return (
//             <div>
//                 <li>{form.hasUser}</li>

//             </div>
//         );
//     }
// }

// const selector = formValueSelector('selectingFormValues');



// Test = connect(
//     state => ({
//         form: selector(state, 'hasUser', 'hasEmail', 'hasPhone', 'favoriteColor')
//     })
// )(Test)
// export default Test;



