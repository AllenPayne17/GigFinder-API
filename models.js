const mongoose = require('mongoose');

// Student Schema
const educationalBackgroundSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true,
        trim: true
    },
    institution: {
        type: String,
        required: true,
        trim: true
    },
    start_date: Date,
    end_date: Date
});

const workExperienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true,
        trim: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true
    },
    Responsibilities: {
        type: String,
        required: true,
        trim: true
    },
    end_date: Date
});

const studentAccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const studentProfileSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    profile_pic: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    bio: {
        type: String,
        required: true,
        trim: true
    },
    skills: {
        type: Array,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    educational_background: [educationalBackgroundSchema],
    work_experience: [workExperienceSchema],
    account: [studentAccountSchema]
});


const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);

// BusinessOwner Schema
const jobPostSchema = new mongoose.Schema({
    job_title: {
        type: String,
        required: true,
        trim: true
    },
    job_description: {
        type: String,
        required: true,
        trim: true
    },
    hourly_rate: {
        type: Number,
        required: true,
        trim: true
    },
    workHours: {
        type: Number,
        required: true,
        trim: true
    },
    preferred_skills: {
        type: Array,
        required: true,
        trim: true
    },
    work_category: {
        type: Array,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

const businessOwnerAccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const businessOwnerProfileSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    profile_pic: {
        type: String,
        required: true,
        trim: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    aboutUs: {
        type: String,
        required: true,
        trim: true
    },
    job_posts: [jobPostSchema],
    account: [businessOwnerAccountSchema]
});


const BusinessOwnerProfile = mongoose.model('BusinessOwnerProfile', businessOwnerProfileSchema);

module.exports = {
    StudentProfile,
    BusinessOwnerProfile,
};
