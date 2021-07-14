# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do 
    User.destroy_all
    Post.destroy_all
    Comment.destroy_all
    Job.destroy_all 
    Like.destroy_all 

    demo = User.create(
        email: 'demouser@demo.com',
        password: 'password123',
        fname: 'Demo',
        lname: 'User',
        location: 'New York, NY',
        zipcode: '10013',
        title: 'CFO of Demo User Interaction',
        industry: 'Social Media',
        company: 'DemoUser Co.',
        description: "Hello and welcome to LinkedOut! You are currently logged in as the demo user and have access to all the functionality of a standard account. Feel free to scroll around the site and let me know if there are any questions (jackcusick95@gmail.com)!"
    )

    demo.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/chilldog.jpg'), filename: 'chilldog.jpg')

    user_2 = User.create(
        email: 'lebron@gmail.com',
        password: 'password123',
        fname: 'Lebron',
        lname: 'James',
        location: 'Los Angeles, CA',
        zipcode: '90001',
        title: 'Proffesional Basketball Player',
        industry: 'NBA',
        company: 'Los Angeles Lakers'     
    )

    user_2.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lebronface.png'), filename: 'lebronface.png')

    user_3 = User.create(
        email: 'elon@gmail.com',
        password: 'password123',
        fname: 'Elon',
        lname: 'Musk',
        location: 'Austin, TX',
        zipcode: '20002',
        title: 'CEO of Tesla and SpaceX',
        industry: 'Technology',
        company: 'Tesla and SpaceX',
        description: "Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO and chief engineer at SpaceX; early stage investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in the world."     
    )

    user_3.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/elonpp.jpg'), filename: 'elonpp.jpg')
    user_3.wall_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/space.jpg'), filename: 'space.jpg')

    user_4 = User.create(
        email: 'bill@gmail.com',
        password: 'password123',
        fname: 'Bill',
        lname: 'Gates',
        location: 'New York, NY',
        zipcode: '10012',
        title: 'Founder',
        industry: 'Technology',
        company: 'Microsoft'     
    )

    user_4.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/billpp.jpg'), filename: 'billpp.jpg')

    user_5 = User.create(
        email: 'eli@gmail.com',
        password: 'password123',
        fname: 'Eli',
        lname: 'Manning',
        location: 'New York, NY',
        zipcode: '10012',
        title: 'Retired NFL Quarterback',
        industry: 'NFL',
        company: 'New York Giants'     
    )

    user_5.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/elipp.jpg'), filename: 'elipp.jpg')

    user_6 = User.create(
        email: 'andre@gmail.com',
        password: 'password123',
        fname: 'Andre',
        lname: 'Carrera',
        location: 'New York, NY',
        zipcode: '10012',
        title: 'Front Desk Secretary',
        industry: 'Finance',
        company: 'Morgan Stanley'     
    )

    user_6.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/andrepp.jpg'), filename: 'andrepp.jpg')

    user_7 = User.create(
        email: 'sal@gmail.com',
        password: 'password123',
        fname: 'Sal',
        lname: 'Loris',
        location: 'New York, NY',
        zipcode: '10012',
        title: 'Head of Sales',
        industry: 'Sales',
        company: 'Google'     
    )

    user_7.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/salpp.jpg'), filename: 'salpp.jpg')

    user_8 = User.create(
        email: 'will@gmail.com',
        password: 'password123',
        fname: 'Will',
        lname: 'Dailey',
        location: 'San Diego, CA',
        zipcode: '90003',
        title: 'Assistant to Head of Sales',
        industry: 'Sales',
        company: 'Google'     
    )

    # user_8.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lebronpp.jpg'), filename: 'lebronpp.jpg')

    user_9 = User.create(
        email: 'brendan@gmail.com',
        password: 'password123',
        fname: 'Brendan',
        lname: 'Keegan',
        location: 'Dallas, TX',
        zipcode: '222222',
        title: 'Looking for work',
        industry: 'Sales',
        company: 'Unemployed'     
    )

    # user_9.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lebronpp.jpg'), filename: 'lebronpp.jpg')

    user_10 = User.create(
        email: 'julius@gmail.com',
        password: 'password123',
        fname: 'Julius',
        lname: 'Randle',
        location: 'New York, NY',
        zipcode: '10012',
        title: 'Professional Basketball Player',
        industry: 'NBA',
        company: 'New York Knicks'     
    )

    # user_10.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lebronpp.jpg'), filename: 'lebronpp.jpg')

    user_11 = User.create(
        email: 'derrick@gmail.com',
        password: 'password123',
        fname: 'Derrick',
        lname: 'Rose',
        location: 'New York, NY',
        zipcode: '10012',
        title: 'Professional Basketball Player',
        industry: 'NBA',
        company: 'New York Knicks'     
    )

    # user_11.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lebronpp.jpg'), filename: 'lebronpp.jpg')

    user_12 = User.create(
        email: 'tony@gmail.com',
        password: 'password123',
        fname: 'Tony',
        lname: 'Hawk',
        location: 'Los Angeles, CA',
        zipcode: '90002',
        title: 'Professional Skateboarder',
        industry: 'Skateboarding',
        company: 'Self Employed'     
    )

    user_12.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/tony-hawk.jpg'), filename: 'tony-hawk.jpg')

    user_13 = User.create(
        email: 'bode@gmail.com',
        password: 'password123',
        fname: 'Bode',
        lname: 'Miller',
        location: 'New Hampshire',
        zipcode: '30320',
        title: 'Professional Ski Racer',
        industry: 'Skiing',
        company: 'US Ski Team'     
    )

    # user_13.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lebronpp.jpg'), filename: 'lebronpp.jpg')

    user_14 = User.create(
        email: 'clare@gmail.com',
        password: 'password123',
        fname: 'Clare',
        lname: 'Perry',
        location: 'New York, NY',
        zipcode: '10012',
        title: 'Head of Production',
        industry: 'Photography',
        company: 'National Geographic'     
    )

    user_14.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/clarepro.png'), filename: 'clarepro.png')

    user_15 = User.create(
        email: 'john@gmail.com',
        password: 'password123',
        fname: 'John',
        lname: 'Mulaney',
        location: 'Chicago, IL',
        zipcode: '60614',
        title: 'Stand-up Comedian',
        industry: 'Comedy',
        company: 'Self Employed'     
    )

    user_15.profile_photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/johnmulaney.jpg'), filename: 'johnmulaney.jpg')

    job_poster = User.create(
        email: 'jobposter@gmail.com',
        password: 'password123',
        fname: 'Job',
        lname: 'Poster',
        location: 'New York, NY',
        zipcode: '10013',
        title: 'LinkedOut Job Poster',
        industry: 'Recruiter',
        company: 'LinkedOut',
        description: "I am the designated job poster of this site!"
    )

    
    post_30 = Post.create(
        body: 'It’s important to remember that life is a joke and that outlook grants a lot of perspective, but I don’t think comedy should change and become political due to other things. It should just laugh at that cosmic joke that life is all the time.',
        author_id: user_15.id,
    )

    post_31 = Post.create(
        body: 'Can`t wait for the summer to get great shots all around the city!',
        author_id: user_14.id,
    )

    post_31.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/clarephoto.png'), filename: 'clarephoto.png')

    post_32 = Post.create(
        body: 'I love snowboarding, but I would never want to do it competitively or at a professional level. Snowboarding is a spawn of skating, and skating is my passion.',
        author_id: user_12.id,
    )

    post_3 = Post.create(
        body: 'Happy to be back from the sprained ankle and back with the BOYS. King has retaken his chair.',
        author_id: user_2.id,
    )

    post_3.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lebron.jpg'), filename: 'lebron.jpg')

    post_4 = Post.create(
        body: 'Playin tournament this week. ALL IN.',
        author_id: user_2.id,
    )

    post_4.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/playin.jpg'), filename: 'playin.jpg')

    post_5 = Post.create(
        body: 'DogeCoin is going to hit intergalactic travel before I do...',
        author_id: user_3.id,
    )

    post_5.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/dogcoin.jpg'), filename: 'dogecoin.jpg')

    post_6 = Post.create(
        body: 'Breaking news, Tesla will now focus soley on commercial airplanes.',
        author_id: user_3.id,
    )

    post_6.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/teslaplane.jpg'), filename: 'teslaplane.jpg')

    post_7 = Post.create(
        body: 'Little did you know, Apple and Microsoft have been in partnership for over 15 years....but we still remain rivals.',
        author_id: user_4.id,
    )

    post_7.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/applemicrosoft.jpg'), filename: 'applemicrosoft.jpg')

    post_8 = Post.create(
        body: 'For those of you that don`t know about my charity work, the Bill & Melinda Gates Foundation focuses on improving people`s health and fight against poverty in developming countries.',
        author_id: user_4.id,
    )

    post_8.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/gatesfoundation.jpg'), filename: 'gatesfoundation.jpg')

    post_9 = Post.create(
        body: 'Big year for the GMEN. Have a feeling Danny Dimes has a breakout season!',
        author_id: user_5.id,
    )

    post_9.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/dannydimes.jpg'), filename: 'dannydimes.jpg')

    post_10 = Post.create(
        body: 'Missing the NFL days... :(',
        author_id: user_5.id,
    )

    post_10.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/eli.jpg'), filename: 'eli.jpg')

    post_11 = Post.create(
        body: 'Great to be back in the office...been way too long!',
        author_id: user_6.id,
    )

    post_11.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/dreoffice.png'), filename: 'dreoffice.png')

    post_12 = Post.create(
        body: 'Based on our analysis, we see Amazon shares potentially doubling within the next year.',
        author_id: user_6.id,
    )

    post_12.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/amazonshares.png'), filename: 'amazonshares.png')

    post_13 = Post.create(
        body: 'Would like to give a big shoutout to my associate Will.... been bring in the big bucks over in Cali',
        author_id: user_7.id,
    )

    post_13.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/google.jpg'), filename: 'google.jpg')

    like_1 = Like.create(
        liker_id: user_6.id,
        likeable_id: post_3.id,
        likeable_type: "post"
    )

    
    
    post_20 = Post.create(
        body: 'I think it`s fair to say that personal computers have become the most empowering tool we`ve ever created. They`re tools of communication, they`re tools of creativity, and they can be shaped by their user.',
        author_id: user_4.id,
        )
        
        
    post_1 = Post.create(
            body: 'New to LinkedOut. Looking forward to connecting with all my friends!',
            author_id: demo.id,
        )

    post_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/friends.jpg'), filename: 'friends.jpg')
        

    like_2 = Like.create(
            liker_id: user_11.id,
            likeable_id: post_1.id,
            likeable_type: "post"
        )

    like_3 = Like.create(
            liker_id: user_13.id,
            likeable_id: post_1.id,
            likeable_type: "post"
        )

    like_3 = Like.create(
            liker_id: user_14.id,
            likeable_id: post_1.id,
            likeable_type: "post"
        )

    comment_1 = Comment.create(
        body: "lol nice",
        author_id: user_3.id,
        post_id: post_1.id,
    )

    comment_2 = Comment.create(
        body: "chill out elon...",
        author_id: user_4.id,
        post_id: post_1.id,
    )

    comment_3 = Comment.create(
        body: "bro thats not even you in the photo",
        author_id: user_3.id,
        post_id: post_11.id,
    )

    comment_4 = Comment.create(
        body: "^",
        author_id: demo.id,
        post_id: post_1.id,
    )

    post_2 = Post.create(
        body: 'Long day at the office, but the walk after work was beautiful!',
        author_id: demo.id,
    )

    post_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/summer.jpg'), filename: 'summer.jpg')

    comment_5 = Comment.create(
        body: "Not a bad view!!",
        author_id: user_2.id,
        post_id: post_2.id,
    )

    
    google_job = Job.create(
        user_id: job_poster.id,
        title: "Software Engineer",
        job_type: "Full time",
        company: "Google",
        location: "Menlo Park, CA",
        start_date: "2021",
        end_date: "2021",
        description: "Looking for a Software Engineer with 2 - 3 years of experience.", 
    )

    google_job.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/googlelogo.png'), filename: 'googlelogo.png')

    twitter_job = Job.create(
        user_id: job_poster.id,
        title: "Senior Software Engineer",
        job_type: "Full time",
        company: "Twitter",
        location: "New York, NY",
        start_date: "2021",
        end_date: "2021",
        description: "Looking for a Software Engineer with 5 - 6 years of experience that has managed large teams.", 
    )

    twitter_job.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/twitterlogo.png'), filename: 'twitterlogo.png')

    google_job_2 = Job.create(
        user_id: job_poster.id,
        title: "Sales Manager",
        job_type: "Full time",
        company: "Google",
        location: "New York, NY",
        start_date: "2021",
        end_date: "2021",
        description: "Need an experienced sales manager to help oversee our new business team.", 
    )

    google_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/googlelogo.png'), filename: 'googlelogo.png')

    google_job_3 = Job.create(
        user_id: job_poster.id,
        title: "Business Development Representative",
        job_type: "Full time",
        company: "Google",
        location: "New York, NY",
        start_date: "2021",
        end_date: "2021",
        description: "This is an entry level roll for recent college graduates looking to enter sales.", 
    )

    google_job_3.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/googlelogo.png'), filename: 'googlelogo.png')

    tesla_job = Job.create(
        user_id: job_poster.id,
        title: "Executive Assistant",
        job_type: "Full time",
        company: "Tesla",
        location: "Austin, TX",
        start_date: "2021",
        end_date: "2021",
        description: "Elon Musk in in search for a personal assistant to help manage both him and his Twitter account.", 
    )

    tesla_job.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/tesla.jpg'), filename: 'tesla.jpg')

    tesla_job_2 = Job.create(
        user_id: job_poster.id,
        title: "Software Engineer",
        job_type: "Full time",
        company: "Tesla",
        location: "Austin, TX",
        start_date: "2021",
        end_date: "2021",
        description: "Must have exceptional technical skills, as well as work well in large team environments.", 
    )

    tesla_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/tesla.jpg'), filename: 'tesla.jpg')

    starbucks_job = Job.create(
        user_id: job_poster.id,
        title: "Branch Manager",
        job_type: "Part time",
        company: "Starbucks",
        location: "New York, NY",
        start_date: "2021",
        end_date: "2021",
        description: "Looking for an experienced manager to oversee operations at Starbucks Midtown East location.", 
    )

    starbucks_job.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/starbucks.jpg'), filename: 'starbucks.jpg')

    facebook_job = Job.create(
        user_id: job_poster.id,
        title: "Software Engineer",
        job_type: "Part time",
        company: "Facebook",
        location: "Menlo Park, CA",
        start_date: "2021",
        end_date: "2021",
        description: "Looking to fill a part-time remote software engineering roll for an experienced individual.", 
    )

    facebook_job.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/facebookjob.png'), filename: 'facebookjob.png')

    facebook_job_2 = Job.create(
        user_id: job_poster.id,
        title: "Social Media Analyst",
        job_type: "Full time",
        company: "Facebook",
        location: "Menlo Park, CA",
        start_date: "2021",
        end_date: "2021",
        description: "We need an experienced analyst who is on the forefront of social media trends.", 
    )

    facebook_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/facebookjob.png'), filename: 'facebookjob.png')

    demo_job_1 = Job.create(
        user_id: demo.id,
        title: "Software Engineer",
        job_type: "Full time",
        company: "Facebook",
        location: "Menlo Park, CA",
        start_date: "December, 2018",
        end_date: "Present",
        description: "Worked on a several projects including design of Facebook Marketplace.", 
    )

    demo_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/facebookjob.png'), filename: 'facebookjob.png')

    demo_job_2 = Job.create(
        user_id: demo.id,
        title: "Barista",
        job_type: "Part time",
        company: "Starbucks",
        location: "New York, NY",
        start_date: "March, 2017",
        end_date: "September, 2018",
        description: "Worked as a barista at starbucks. Made one of the best iced coffees in all of NYC!", 
    )

    demo_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/starbucks.jpg'), filename: 'starbucks.jpg')

    demo_job_3 = Job.create(
        user_id: demo.id,
        title: "Rotational Intern",
        job_type: "Full time",
        company: "Tesla",
        location: "Palo Alto, CA",
        start_date: "January, 2017",
        end_date: "April, 2017",
    )

    demo_job_3.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/tesla.jpg'), filename: 'tesla.jpg')

    demo_education_1 = Education.create(
        user_id: demo.id,
        school: "App Academy",
        degree: "Software Engineering",
        field: "Technology",
        start_date: "February, 2021",
        end_date: "July, 2021",
        description: "Fullstack software engineering bootcamp learning React, Redux, Ruby, Javascript, AWS, and more.", 
    )

    demo_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/aalogo.png'), filename: 'aalogo.png')

    demo_education_2 = Education.create(
        user_id: demo.id,
        school: "College of Charleston",
        degree: "Finance and Economics",
        field: "Business",
        start_date: "August, 2013",
        end_date: "May, 2017",
        description: "Majored in finance and economics. Was also part of the sailing team and Sigma Chi fraternity.", 
    )

    demo_education_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/cofc.jpg'), filename: 'cofc.jpg')


    billgates_job_1 = Job.create( 
        user_id: user_4.id,
        title: "Founder",
        job_type: "Full time",
        company: "Microsoft",
        location: "Seattle, WA",
        start_date: "January, 1980",
        end_date: "Present",
        description: "Founder of Microsoft. Current time is spent on philanthropic work.", 
    )

    billgates_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/microsoftlogo.png'), filename: 'microsoftlogo.png')
   
    billgates_job_2 = Job.create( 
        user_id: user_4.id,
        title: "Founder",
        job_type: "Full time",
        company: "Bill & Melinda Gates Foundation",
        location: "Seattle, WA",
        start_date: "January, 2000",
        end_date: "Present",
        description: "Private foundation with the goal of reducing poverty and increasing healthcare around the world.", 
    )

    billgates_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/billfoundation.jpg'), filename: 'billfoundation.jpg')
   

    bill_education_1 = Education.create(
        user_id: user_4.id,
        school: "Harvard University",
        degree: "Software Engineering",
        field: "Technology",
        start_date: "February, 1973",
        end_date: "July, 1975",
        description: "Didn't graduate, but think I'm doing OK now ;)...", 
    )

    bill_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/harvard.jpg'), filename: 'harvard.jpg')
   

    sal_job_1 = Job.create( 
        user_id: user_7.id,
        title: "Head of Sales",
        job_type: "Full time",
        company: "Google",
        location: "New York, NY",
        start_date: "January, 2020",
        end_date: "Present",
        description: "Managing of team of 10 BDRs on the Google Ways team.", 
    )

    sal_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/googlelogo.png'), filename: 'googlelogo.png')

sal_job_2 = Job.create( 
        user_id: user_7.id,
        title: "Meat Manager",
        job_type: "Full time",
        company: "Tasty Sausage Co.",
        location: "New York, NY",
        start_date: "January, 2017",
        end_date: "December, 2019",
        description: "Managed the largest sausage factor north of the Mississippi.", 
    )

    sal_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/sausage.jpg'), filename: 'sausage.jpg')

    sal_education_1 = Education.create(
        user_id: user_7.id,
        school: "St. Michaels College",
        degree: "Finance & Economics",
        field: "Business",
        start_date: "August, 2013",
        end_date: "May, 2017",
        description: "Was also part of the club Lacrosse team.", 
    )

    sal_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/stmich.png'), filename: 'stmich.png')

    andre_job_1 = Job.create( 
        user_id: user_6.id,
        title: "Front Desk Secretary",
        job_type: "Full time",
        company: "Morgan Stanley",
        location: "New York, NY",
        start_date: "January, 2019",
        end_date: "Present",
        description: "I am the key to our office. The protector of the realm.", 
    )

    andre_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/ms.jpg'), filename: 'ms.jpg')

    andre_job_2 = Job.create( 
            user_id: user_6.id,
            title: "Cashier",
            job_type: "Full time",
            company: "Seaside Liquor Store",
            location: "Bridgeport, CT",
            start_date: "January, 2013",
            end_date: "December, 2016",
            description: "Ensuring everyone buying alchol is over 21.", 
        )

    andre_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/seaside.jpg'), filename: 'seaside.jpg')

    andre_education_1 = Education.create(
        user_id: user_6.id,
        school: "College of Charleston",
        degree: "Finance & Economics",
        field: "Business",
        start_date: "August, 2013",
        end_date: "May, 2017",
        description: "Finance, Kappa Sigma Fraternity, owned a moped.", 
    )

    andre_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/cofc.jpg'), filename: 'cofc.jpg')

    eli_job_1 = Job.create( 
        user_id: user_5.id,
        title: "NFL Quarterback",
        job_type: "Full time",
        company: "NY Giants",
        location: "New York, NY",
        start_date: "January, 2000",
        end_date: "December, 2018",
        description: "Two time superbowl champion.", 
    )

    eli_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/eligiants.jpg'), filename: 'eligiants.jpg')


    eli_education_1 = Education.create(
        user_id: user_5.id,
        school: "Ole Miss University",
        degree: "Sports Business",
        field: "Business",
        start_date: "August, 1994",
        end_date: "May, 1999",
        description: "Served as the quarterback of our football team.", 
    )

    eli_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/olemiss.jpg'), filename: 'olemiss.jpg')

    elon_job_1 = Job.create( 
        user_id: user_3.id,
        title: "Founder",
        job_type: "Full time",
        company: "PayPal",
        location: "New York, NY",
        start_date: "January, 1995",
        end_date: "Present",
        description: "Founded and sold PayPal", 
    )

    elon_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/paypal.png'), filename: 'paypal.png')

    elon_job_2 = Job.create( 
        user_id: user_3.id,
        title: "Founder",
        job_type: "Full time",
        company: "Tesla",
        location: "Austin, TX",
        start_date: "January, 2000",
        end_date: "Present",
        description: "Changing the world through alternative energy.", 
    )

    elon_job_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/tesla.jpg'), filename: 'tesla.jpg')

    elon_job_3 = Job.create( 
        user_id: user_3.id,
        title: "Founder",
        job_type: "Full time",
        company: "SpaceX",
        location: "San Francisco, CA",
        start_date: "January, 2010",
        end_date: "Present",
        description: "Driven to get humans to Mars.", 
    )

    elon_job_3.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/spacex.jpg'), filename: 'spacex.jpg')


    elon_education_1 = Education.create(
        user_id: user_3.id,
        school: "Queens University",
        degree: "Mechanical Engineering",
        field: "Engineering",
        start_date: "August, 1990",
        end_date: "May, 1992",
        description: "Undergrad before moving to the US.", 
    )

    elon_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/queens.png'), filename: 'queens.png')

    lebron_job_1 = Job.create( 
        user_id: user_2.id,
        title: "NBA Athlete",
        job_type: "Full time",
        company: "LA Lakers",
        location: "Los Angeles, CA",
        start_date: "January, 2000",
        end_date: "Present",
        description: "Four time NBA Champion!", 
    )

    lebron_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/nbalogo.jpg'), filename: 'nbalogo.jpg')


    lebron_education_1 = Education.create(
        user_id: user_2.id,
        school: "St. Vincent Highschool",
        degree: "NBA Draft",
        field: "Athletics",
        start_date: "August, 1994",
        end_date: "May, 1996",
        description: "Went number one overall in the NBA draft.", 
    )

    lebron_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/lhs.jpg'), filename: 'lhs.jpg')

    tony_job_1 = Job.create( 
        user_id: user_12.id,
        title: "Professional Skateboarder",
        job_type: "Full time",
        company: "Tony Hawk Skateboarding",
        location: "Los Angeles, CA",
        start_date: "January, 1985",
        end_date: "Present",
        description: "Yes, I am the real Tony Hawk.", 
    )

    tony_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/tonyhawk.jpg'), filename: 'tonyhawk.jpg')


    tony_education_1 = Education.create(
        user_id: user_12.id,
        school: "Torrey Pines High School",
        degree: "Skateboarding",
        field: "Athletics",
        start_date: "August, 1984",
        end_date: "May, 1986",
        description: "Became a professional skateboarder at age 14", 
    )

    tony_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/torry.jpg'), filename: 'torry.jpg')

    clare_job_1 = Job.create( 
        user_id: user_14.id,
        title: "Head of Creative",
        job_type: "Full time",
        company: "Firon Marketing",
        location: "New York, NY",
        start_date: "October, 2020",
        end_date: "Present",
        description: "Lead the creative content production for multiple clients.", 
    )

    clare_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/firon.jpg'), filename: 'firon.jpg')

    
    clare_education_2 = Education.create(
        user_id: user_14.id,
        school: "College of Charleston",
        degree: "BS Photography",
        field: "Photography",
        start_date: "August, 2016",
        end_date: "May, 2020",
        description: "Studied creative photography and art history.", 
        )
        
    clare_education_2.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/cofc.jpg'), filename: 'cofc.jpg')

    clare_education_1 = Education.create(
            user_id: user_14.id,
            school: "Loyola High School",
            degree: "Highschool",
            field: "General Studies",
            start_date: "August, 2012",
            end_date: "May, 2016",
            description: "Studied creative photography and was part of the club sailing team.", 
            )
            
    clare_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/loyola.jpg'), filename: 'loyola.jpg')

    john_job_1 = Job.create( 
        user_id: user_15.id,
        title: "Standup Comedian",
        job_type: "Full time",
        company: "John Mulaney Co.",
        location: "Chicago, Il",
        start_date: "January, 2000",
        end_date: "Present",
        description: "Standup comedian with my own series on Netflix.", 
    )

    john_job_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/johnpic.jpg'), filename: 'johnpic.jpg')


    john_education_1 = Education.create(
        user_id: user_15.id,
        school: "Georgetown University",
        degree: "American Culture",
        field: "Liberal Arts",
        start_date: "August, 2000",
        end_date: "May, 2004",
        description: "Went on to become a standup comedian.", 
    )

    john_education_1.photo.attach(io: open('https://linkedout-seed.s3.amazonaws.com/georgetown.jpg'), filename: 'georgetown.jpg')
        
end 