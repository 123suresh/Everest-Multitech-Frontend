import React from 'react';
import { Grid } from '@mui/material';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";

function Contact() {
    return (
        <div className="bg-white pl-10 pr-10">

            <div
                style={{ backgroundColor: "#ff6000" }}
                className=" flex items-center justify-center text-white pt-10 pd-10"
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
                    <form className="w-full">
                        <div className="mb-8">
                            <Input
                                variant="outlined"
                                size="lg"
                                label="Full Name"
                                fullWidth 
                                className="text-2xl" 
                            />
                        </div>

                        <div className="mb-8">
                            <Input
                                variant="outlined"
                                size="lg"
                                label="Email Address"
                                fullWidth 
                                className="text-2xl" 
                            />
                        </div>

                        <div className="mb-8">
                            <Textarea
                                variant="outlined"
                                size="lg"
                                label="Message"
                                rows={4}
                                fullWidth
                                className="text-2xl"
                            />
                        </div>

                        <Button variant="gradient" size="lg" className="mt-8" fullWidth sx={{ backgroundColor: "#ff6000" }}>
                            Send Message
                        </Button>
                    </form>


                </div>

                {/* Column 2 */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-md mb-8">
                    <div className="text-left">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Everest Multi Tech</h3>
                        <h4 className="text-2xl text-gray-600 mb-2">1929 State Route 256</h4>
                        <h4 className="text-2xl text-gray-600 mb-2">Reproldsburg, Ohio 43068, United States</h4>
                        <h4 className="text-2xl text-gray-600 mb-4">Phone: <span style={{ color: "#ff6000" }}>(614) 282-7012</span></h4>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Hours</h3>
                        <h4 className="text-2xl text-gray-600">
                            <Grid container spacing={3}>
                                <Grid item><h4 className="text-2xl text-gray-600 mb-2">Open today:</h4></Grid>
                                <Grid item><h4 className="text-2xl mb-2" style={{ color: "#ff6000" }}>10:00 am - 7:00pm</h4></Grid>
                            </Grid>
                        </h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;