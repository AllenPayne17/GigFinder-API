# GigFinder API

live link for student: https://gigfinder.onrender.com/api/student/profiles <br />
live link for business owner: https://gigfinder.onrender.com/api/business/profiles

GigFinder is an API designed to connect students looking for part-time jobs with business owners who are offering them. The API provides different endpoints for creating and retrieving user profiles, job posts, and job categories.

## User Profiles

There are two types of users in the system: students and business owners. Both types of users have their own set of properties:

### Student Profile

- Profile Picture
- Name
- Bio
- Skills
- Address
- Educational Background
- Work Experience
- Account

### Business Owner Profile

- Profile Picture
- Company Name
- Address
- About Us
- Job Post
- Account

## Job Categories

The API offers three categories of part-time jobs that students can apply for:

- On-campus part-time job
- Food-service part-time job
- One-on-one tutor part-time job

Each category contains several job positions that students can apply for.

## Job Posts

Business owners can create job posts that include details such as job title, job description, hourly rate, work hours, preferred skills, and work category. Students can view these job posts and apply for the positions that match their skills and experience.

## API Endpoints

The GigFinder API offers the following endpoints:

- `GET gigfinder.onrender.com/api/student/profiles` - Retrieve a list of all student profiles
- `GET gigfinder.onrender.com/api/student/profile/:id` - Retrieve a specific student profile by ID
- `POST gigfinder.onrender.com/api/student/profile` - Create a new student profile
- `DELETE gigfinder.onrender.com/api/student/profile/:id` - Delete a student profile by ID

- `GET gigfinder.onrender.com/api/business/profiles` - Retrieve a list of all business owner profiles
- `GET gigfinder.onrender.com/api/business/profile/:id` - Retrieve a specific business owner profile by ID
- `POST gigfinder.onrender.com/api/business/profile` - Create a new business owner profile
- `DELETE gigfinder.onrender.com/api/business/profile/:id` - Delete a business owner profile by ID
- `POST gigfinder.onrender.com/api/business/profile/:id/jobpost` - Add job post to business owner profile
- `GET gigfinder.onrender.com/api/job-posts` - Retrieve a list of all job posts

- `POST gigfinder.onrender.com/api/authenticate` - Authenticate user and return profile information


## Authentication

To use the GigFinder API, users need to authenticate by providing their email and password. Once authenticated, the API will provide an access token that should be included in subsequent requests.

## Conclusion

GigFinder is a powerful API that connects students with part-time job opportunities offered by businesses. With its user profiles, job categories, and job posts endpoints, it provides a complete solution for both students and business owners.