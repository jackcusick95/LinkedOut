# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do 
    User.destroy_all
    Post.destroy_all

    demo = User.create(
        email: 'demouser@demo.com',
        password: 'password123',
        fname: 'Demo',
        lname: 'User',
        location: 'New York, NY',
        zipcode: '10013',
        title: 'CFO of Demo User Interaction',
        industry: 'Social Media',
        company: 'DemoUser Co.'
    )

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

    user_3 = User.create(
        email: 'elon@gmail.com',
        password: 'password123',
        fname: 'Elon',
        lname: 'Musk',
        location: 'Austin, TX',
        zipcode: '20002',
        title: 'CEO of Tesla and SpaceX',
        industry: 'Technology',
        company: 'Tesla and SpaceX'     
    )

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

    post_1 = Post.create(
        body: 'New to LinkedOut. Looking forward to connecting with all my friends!',
        author_id: demo.id,
    )

    post_2 = Post.create(
        body: 'Long day at the office, but the walk after work was beautiful!',
        author_id: demo.id,
    )

    # post_3 = Post.create(
    #     body: 'Happy to be back from the sprained ankle and back with the BOYS. King has retaken his chair.',
    #     author_id: user_2.id,
    # )

    # post_4 = Post.create(
    #     body: 'Playin tournament this week. ALL IN.',
    #     author_id: user_2.id,
    # )

    # post_5 = Post.create(
    #     body: '',
    #     author_id: user_3.id,
    # )

    # post_6 = Post.create(
    #     body: '',
    #     author_id: user_3.id,
    # )

    # post_7 = Post.create(
    #     body: '',
    #     author_id: user_4.id,
    # )

    # post_8 = Post.create(
    #     body: '',
    #     author_id: user_4.id,
    # )

    # post_9 = Post.create(
    #     body: '',
    #     author_id: user_5.id,
    # )

    # post_10 = Post.create(
    #     body: '',
    #     author_id: user_5.id,
    # )

    # post_11 = Post.create(
    #     body: '',
    #     author_id: user_6.id,
    # )

    # post_12 = Post.create(
    #     body: '',
    #     author_id: user_6.id,
    # )

    # post_13 = Post.create(
    #     body: '',
    #     author_id: user_7.id,
    # )

    # post_14 = Post.create(
    #     body: '',
    #     author_id: user_7.id,
    # )

    # post_15 = Post.create(
    #     body: '',
    #     author_id: user_8.id,
    # )

    # post_16 = Post.create(
    #     body: '',
    #     author_id: user_8.id,
    # )

    # post_17 = Post.create(
    #     body: '',
    #     author_id: user_9.id,
    # )

    # post_18 = Post.create(
    #     body: '',
    #     author_id: user_9.id,
    # )

    # post_19 = Post.create(
    #     body: '',
    #     author_id: user_10.id,
    # )

    # post_20 = Post.create(
    #     body: '',
    #     author_id: user_10.id,
    # )

    # post_21 = Post.create(
    #     body: '',
    #     author_id: user_11.id,
    # )

    # post_22 = Post.create(
    #     body: '',
    #     author_id: user_11.id,
    # )

    # post_23 = Post.create(
    #     body: '',
    #     author_id: user_12.id,
    # )

    # post_24 = Post.create(
    #     body: '',
    #     author_id: user_12.id,
    # )

    # post_25 = Post.create(
    #     body: '',
    #     author_id: user_13.id,
    # )

    # post_26 = Post.create(
    #     body: '',
    #     author_id: user_13.id,
    # )

    # post_27 = Post.create(
    #     body: '',
    #     author_id: user_14.id,
    # )

    # post_28 = Post.create(
    #     body: '',
    #     author_id: user_14.id,
    # )

    # post_29 = Post.create(
    #     body: '',
    #     author_id: user_15.id,
    # )

    # post_30 = Post.create(
    #     body: '',
    #     author_id: user_15.id,
    # )



end 