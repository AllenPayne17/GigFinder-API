const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const { StudentProfile, BusinessOwnerProfile} = require('./models');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes

// Student routes
app.post('/api/student/profile', async (req, res) => {
    const profile = new StudentProfile(req.body);
    await profile.save();
    res.send(profile);
});

app.get('/api/student/profile/:id', async (req, res) => {
    const profile = await StudentProfile.findById(req.params.id);
    res.send(profile);
});

app.get('/api/student/profiles', async (req, res) => {
    const profiles = await StudentProfile.find();
    res.send(profiles);
});

app.delete('/api/student/profile/:id', async (req, res) => {
    const profile = await StudentProfile.findByIdAndDelete(req.params.id);
    if (!profile) {
        return res.status(404).send('Student profile not found');
    }
    res.send(profile);
});

// Business owner routes
app.post('/api/business/profile', async (req, res) => {
    const profile = new BusinessOwnerProfile(req.body);
    await profile.save();
    res.send(profile);
});

app.get('/api/business/profile/:id', async (req, res) => {
    const profile = await BusinessOwnerProfile.findById(req.params.id);
    res.send(profile);
});

app.get('/api/business/profiles', async (req, res) => {
    const profiles = await BusinessOwnerProfile.find();
    res.send(profiles);
});

// Add job post to business owner profile
app.post('/api/business/profile/:id/jobpost', async (req, res) => {
    const profile = await BusinessOwnerProfile.findById(req.params.id);
    if (!profile) {
        return res.status(404).send('Business owner profile not found');
    }

    profile.job_posts.push(req.body);
    await profile.save();
    res.send(profile);
});

// Retrieve all job posts
app.get('/api/job-posts', async (req, res) => {
    const profiles = await BusinessOwnerProfile.find();
    const jobPosts = profiles.flatMap(profile => profile.job_posts);
    res.send(jobPosts);
});

app.delete('/api/business/profile/:id', async (req, res) => {
    const profile = await BusinessOwnerProfile.findByIdAndDelete(req.params.id);
    if (!profile) {
        return res.status(404).send('Student profile not found');
    }
    res.send(profile);
});

// Check if user exists and retrieve their information
app.post('/api/authenticate', async (req, res) => {
    const { email, password } = req.body;

    let profile = await StudentProfile.findOne({ 'account.email': email, 'account.password': password });
    if (profile) {
        return res.send({ accountType: 'Student', profile });
    }

    profile = await BusinessOwnerProfile.findOne({ 'account.email': email, 'account.password': password });
    if (profile) {
        return res.send({ accountType: 'BusinessOwner', profile });
    }

    res.status(404).send({ message: 'User not found' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
