import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Footer } from '@/widgets/layout';

function Contact() {
    return (
        <div className="bg-white pl-10 pr-10">

            <div
                style={{ backgroundColor: "#ff6000" }}
                className=" flex items-center justify-center text-white pt-10 pd-10"
            >
                <div className="text-center">
                    {/* Centered Image */}
                    <div className="flex justify-center">
                        <img
                            src='//img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/blob-8e4d79e.png/:/rs=h:127,cg:true,m/qt=q:95'
                            alt="Everest Multi Tech"
                            className="max-w-full h-auto" // Ensures the image is responsive
                        // width="230px"
                        />
                    </div>

                    {/* Centered Text Content */}
                    <h2 className="text-2xl font-semibold mb-6">
                        Everest Multi Tech Phone & Computer Repair
                    </h2>
                    <p className="text-lg mb-8">
                        We are Ready to assist you. Please contact us if you cannot find an answer to your question.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {/* Column 1 */}
                <div className="p-6">
                    <Grid container spacing={3}>
                        {/* Name Field */}
                        <Grid item md={12}>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                fullWidth // Ensures the TextField takes full width
                            />
                        </Grid>

                        {/* Email Field */}
                        <Grid item md={12}>
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                fullWidth // Ensures the TextField takes full width
                            />
                        </Grid>

                        {/* Multiline TextField */}
                        <Grid item md={12}>
                            <TextField
                                id="outlined-textarea"
                                label="Message"
                                placeholder="Placeholder"
                                multiline
                                fullWidth // Ensures the TextField takes full width
                            />
                        </Grid>

                        {/* Button */}
                        <Grid item md={12}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#ff6000",
                                    width: "100%", // Ensures the Button takes full width
                                    padding: "10px", // Optional: Adds padding for better appearance
                                }}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                {/* Column 2 */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md mb-8">
                    <div className="text-left">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Everest Multi Tech</h3>
                        <h4 className="text-2xl text-gray-600 mb-2">1929 State Route 256</h4>
                        <h4 className="text-2xl text-gray-600 mb-2">Reproldsburg, Ohio 43068, United States</h4>
                        <h4 className="text-2xl text-gray-600 mb-4">Phone: <span style={{color:"#ff6000"}}>(614) 282-7012</span></h4>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Hours</h3>
                        <h4 className="text-2xl text-gray-600">
                            <Grid container spacing={3}>
                                <Grid item><h4 className="text-2xl text-gray-600 mb-2">Open today:</h4></Grid>
                                <Grid item><h4 className="text-2xl mb-2" style={{color:"#ff6000"}}>10:00 am - 7:00pm</h4></Grid>
                            </Grid>
                        </h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;