import React, { useState } from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from "../firebase/setup"

const StudentSigin = () => {

    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");
    const [output, setoutput] = useState(false);

    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser(confirmation)
        } catch (error) {
            console.error(error);
        }
    }

    const verifyOtp = async () => {
        try {

            const data = await user.confirm(otp);
            setoutput(true)
            document.querySelector('.ans').innerHTML = "Login Successfully";
            console.log(data);
        } catch (error) {
            document.querySelector('.inval').innerHTML = "Invalid OTP";
            console.error(error);
        }

    }


    return (
        <div className='phone-signin'>


            {
                !output ? (

                    <div className='phone-content'>
                        <h2>Student Registration</h2>

                        <input type="text" className="name" placeholder='Name' />
                        <input type="text" className="name" placeholder='Age' />
                        <input type="text" className="name" placeholder='Address' />
                        <input type="text" className="name" placeholder='Email' />

                        <div className="phoneotp">
                            <div className="num">
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={(phone) => setPhone("+" + phone)}
                                />
                            </div>

                            <div className="otpbtn">
                                <button onClick={sendOtp} variant='contained'>Send OTP</button>
                            </div>
                        </div>



                        <div id='recaptcha'></div>
                        <input onChange={(e) => setOtp(e.target.value)} type="text" varient='outlined' size='small' placeholder="Enter OTP" />
                        <br></br>
                        <div className="inval"></div>
                        <button onClick={verifyOtp} variant='contained' color='success'>Verify OTP</button>

                        
                    </div>
                ) : (<div className="ans">Login Successfully!</div>)
            }

        </div>
    )
}

export default StudentSigin