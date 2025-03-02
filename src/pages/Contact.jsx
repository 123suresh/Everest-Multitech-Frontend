import React from 'react';
import {
    Button,
    Input,
    Textarea,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Box, Typography, Alert, Grid } from "@mui/material";
import {EmailTemp} from "../components/email/EmailTemp";

function Contact() {

    const form = useRef();
    const [success, setSuccess] = useState(null);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_kdpfg9q", "template_i40778q", form.current, {
          publicKey: "EZvKR7t9vzJR3MvcX",
        })
        .then(
          () => {
            setSuccess("Email sent successfully!");
          },
          (error) => {
            setSuccess(`Failed to send email: ${error.text}`);
          }
        );
    };

    return (
        <div className="bg-white pl-10 pr-10">

            <div
                // style={{ backgroundColor: "#ff6000" }}
                className=" flex items-center justify-center pt-10 pd-10"
            >
                <div className="text-center">
                    <div className="flex justify-center">
                        <img
                            src='/img/everest_logo1.png'
                            alt="Everest Multi Tech"
                            width="10%"
                            height="auto" 
                        />
                    </div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Everest Multi Tech Phone & Computer Repair
                    </h2>
                    <p className="text-lg mb-8">
                        We are Ready to assist you. Please contact us if you cannot find an answer to your question.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="p-6">
                    {/* <Box component="form" ref={form} onSubmit={sendEmail} sx={{ mx: "auto", p: 2, boxShadow: 3, borderRadius: 2 }}>
                      <Typography variant="h5" gutterBottom>
                        Contact Us
                      </Typography>
                      {success && <Alert severity={success.includes("Failed") ? "error" : "success"}>{success}</Alert>}
                      <TextField fullWidth label="Name" name="from_name" margin="normal" required />
                      <TextField fullWidth label="Email" name="user_email" type="email" margin="normal" required />
                      <TextField fullWidth label="Message" name="message" multiline rows={4} margin="normal" required />
                      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Send
                      </Button>
                    </Box> */}

                    <EmailTemp/>

                </div>

                {/* Column 2 */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md mb-8">
                    <div className="text-left">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Everest Multi Tech</h3>
                        <h4 className="text-2xl text-gray-600 mb-2">1929 State Route 256</h4>
                        <h4 className="text-2xl text-gray-600 mb-2">Reproldsburg, Ohio 43068, United States</h4>
                        <h4 className="text-2xl text-gray-600 mb-4">Phone: <span style={{ color: "#ff6000" }}>(614) 282-7012</span></h4>
                        <h4 className="text-2xl text-gray-600 mb-2">Open 7 days a week</h4>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Hours</h3>
                        <h4 className="text-2xl text-gray-600">
                            <Grid container spacing={3}>
                                <Grid item><h4 className="text-2xl mb-2" style={{ color: "#ff6000" }}>9:00 am - 7:00pm</h4></Grid>
                            </Grid>
                        </h4>
                    </div>
                </div>
            </div>

            <div style={{marginTop:"30px"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1929%20Baltimore-Reynoldsburg%20Rd%20Reynoldsburg,%20OH%2043068+(Everest%20Multi%20Tech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">cat gps tracker</a></iframe></div>            

        </div>
    );
}

export default Contact;